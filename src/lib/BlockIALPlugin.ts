import type { Node } from "unist";
import type { Parent, Root } from "mdast";
import type { Properties } from "hast";
import type { Plugin } from "unified";
import type {
  Extension as MicromarkExtension,
  TokenizeContext,
  Effects,
  State,
} from "micromark-util-types";
import type {
  Extension as FromMarkdownExtension,
  CompileContext,
  Token,
} from "mdast-util-from-markdown";
import { codes } from "micromark-util-symbol/codes.js";
import { asciiAlphanumeric, unicodeWhitespace } from "micromark-util-character";
import { visit } from "unist-util-visit";

interface ShorthandAttribute {
  type: "#" | ".";
  ident: string;
}

interface FullAttribute {
  name: string;
  value: string;
}

interface IALData extends Properties {
  id?: string;
  className?: string[];
}

interface MdastData {
  id?: string;
  hProperties?: IALData;
}

interface IAL extends Node {
  type: "ial";
  data?: IALData;
}

declare module "micromark-util-types" {
  interface TokenTypeMap {
    ial: "ial";
    ialOpen: "ialOpen";
    ialClose: "ialClose";
    ialColon: "ialColon";
    ialVariant: "ialVariant";
    ialIdent: "ialIdent";
    ialName: "ialName";
    ialEquals: "ialEquals";
    ialValueStart: "ialValueStart";
    ialValue: "ialValue";
    ialValueEnd: "ialValueEnd";
  }
}

declare module "mdast" {
  interface StaticPhrasingContentMap {
    ial: IAL;
  }
}

declare module "mdast-util-from-markdown" {
  interface CompileData {
    ial?: IALData;
    ialShorthandAttribute?: ShorthandAttribute;
    ialFullAttribute?: FullAttribute;
  }
}

const micromarkExtension: MicromarkExtension = {
  text: {
    [codes.leftCurlyBrace]: { tokenize },
  },
  flow: {
    [codes.leftCurlyBrace]: { tokenize },
  },
};

function tokenize(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
) {
  const start: State = (code) => {
    if (code !== codes.leftCurlyBrace) return nok(code);
    effects.enter("ial");
    effects.enter("ialOpen");
    effects.consume(code);
    effects.exit("ialOpen");
    return colon;
  };

  const colon: State = (code) => {
    if (code !== codes.colon) return nok(code);
    effects.enter("ialColon");
    effects.consume(code);
    effects.exit("ialColon");
    return endOrVariant;
  };

  const endOrVariant: State = (code) => {
    if (unicodeWhitespace(code)) {
      effects.consume(code);
      return endOrVariant;
    }

    if (code === codes.rightCurlyBrace) {
      effects.enter("ialClose");
      effects.consume(code);
      effects.exit("ialClose");
      effects.exit("ial");
      return ok;
    }

    if (code === codes.dot || code === codes.numberSign) {
      effects.enter("ialVariant");
      effects.consume(code);
      effects.exit("ialVariant");
      effects.enter("ialIdent");
      return ident;
    }

    if (asciiAlphanumeric(code)) {
      effects.enter("ialName");
      return name;
    }

    return nok(code);
  };

  const ident: State = (code) => {
    if (
      asciiAlphanumeric(code) ||
      code === codes.dash ||
      code === codes.underscore
    ) {
      effects.consume(code);
      return ident;
    }

    effects.exit("ialIdent");
    return this.previous === codes.dash || this.previous === codes.underscore
      ? nok(code)
      : endOrVariant;
  };

  const name: State = (code) => {
    if (asciiAlphanumeric(code) || code === codes.dash) {
      effects.consume(code);
      return name;
    }

    if (code === codes.equalsTo) {
      effects.exit("ialName");
      effects.enter("ialEquals");
      effects.consume(code);
      effects.exit("ialEquals");
      return leftQuote;
    }

    effects.exit("ialName");
    return nok(code);
  };

  const leftQuote: State = (code) => {
    if (code !== codes.quotationMark) return nok(code);
    effects.enter("ialValueStart");
    effects.consume(code);
    effects.exit("ialValueStart");
    effects.enter("ialValue");
    return value;
  };

  const value: State = (code) => {
    if (code === codes.quotationMark) {
      effects.exit("ialValue");
      effects.enter("ialValueEnd");
      effects.consume(code);
      effects.exit("ialValueEnd");
      return endOrVariant;
    }

    effects.consume(code);
    return value;
  };

  return start;
}

const fromMarkdownExtension: FromMarkdownExtension = {
  canContainEols: ["ial"],
  enter: {
    ial: enterIAL,
  },
  exit: {
    ial: exitIAL,
    ialVariant: exitIALVariant,
    ialIdent: exitIALIdent,
    ialName: exitIALName,
    ialValue: exitIALValue,
  },
  transforms: [transform],
};

function enterIAL(this: CompileContext, _token: Token) {
  this.setData("ial", {});
}

function exitIALVariant(this: CompileContext, token: Token) {
  const type = this.sliceSerialize(token) as "#" | ".";
  this.setData("ialShorthandAttribute", { type, ident: "" });
}

function exitIALIdent(this: CompileContext, token: Token) {
  let data = this.getData("ial");
  if (!data) {
    data = {};
    this.setData("ial", data);
  }
  const attribute = this.getData("ialShorthandAttribute");
  if (!attribute) return;
  attribute.ident = this.sliceSerialize(token);
  switch (attribute.type) {
    case "#": {
      data.id = attribute.ident;
      return;
    }
    case ".": {
      data.className ??= [];
      data.className.push(attribute.ident);
      return;
    }
  }
}

function exitIALName(this: CompileContext, token: Token) {
  this.setData("ialFullAttribute", {
    name: this.sliceSerialize(token),
    value: "",
  });
}

function exitIALValue(this: CompileContext, token: Token) {
  const attribute = this.getData("ialFullAttribute");
  if (!attribute) return;
  attribute.value = this.sliceSerialize(token);
  const data = this.getData("ial");
  if (!data) return;
  data[attribute.name] = attribute.value;
}

function exitIAL(this: CompileContext, token: Token) {
  const data = this.getData("ial");
  this.enter({ type: "ial", data }, token);
  this.exit(token);
}

function transform(tree: Root) {
  const stack: { parent: Parent; index: number }[] = [];

  visit(tree, "ial", (node, index, parent) => {
    if (parent === null || index === null) return;

    let offset = 1;
    let last: Node<MdastData> = parent.children[index - 1];
    while (last.type === "ial") last = parent.children[index - ++offset];

    last.data ??= {};
    last.data.hProperties = merge(last.data.hProperties, node.data);
    if (node.data?.id) {
      last.data.id = node.data.id;
    }

    stack.push({ parent, index });
  });

  while (stack.length > 0) {
    const { parent, index } = stack.pop()!;
    parent.children.splice(index, 1);
  }
}

function merge(
  existing: Properties | undefined,
  additional: Properties | undefined
) {
  if (existing && additional) {
    const keys = new Set<string>([
      ...Object.keys(existing),
      ...Object.keys(additional),
    ]);
    const result: Properties = {};
    for (const key of keys) {
      const e = existing[key];
      const a = additional[key];
      if (Array.isArray(e) && Array.isArray(a)) {
        result[key] = [...e, ...a];
      } else {
        result[key] = a ?? e;
      }
    }
    return result;
  } else {
    return existing ?? additional;
  }
}

export default function blockIALPlugin(this: ThisParameterType<Plugin>) {
  const data = this.data();
  data.micromarkExtensions ??= [];
  (data.micromarkExtensions as any).push(micromarkExtension);

  data.fromMarkdownExtensions ??= [];
  (data.fromMarkdownExtensions as any).push([fromMarkdownExtension]);
}
