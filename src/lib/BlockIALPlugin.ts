import type { Node } from "unist";
import type { Root, Content, Text } from "mdast";
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
import { asciiAlphanumeric } from "micromark-util-character";
import { visit } from "unist-util-visit";

interface Attribute {
  type: "#" | ".";
  ident: string;
}

interface MdastData {
  id?: string;
  hProperties?: IALData;
}

interface IALData {
  id?: string;
  className?: string[];
}

interface IAL extends Node, IALData {
  type: "ial";
}

declare module "mdast" {
  interface StaticPhrasingContentMap {
    ial: IAL;
  }
}

declare module "mdast-util-from-markdown" {
  interface CompileData {
    ial?: IALData;
    ialAttribute?: Attribute;
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
      : endOrVariant(code);
  };

  return start;
}

const fromMarkdownExtension: FromMarkdownExtension = {
  canContainEols: ["ial"],
  exit: {
    ial: exitIAL,
    ialVariant: exitIALVariant,
    ialIdent: exitIALIdent,
  },
  transforms: [transform],
};

function exitIALVariant(this: CompileContext, token: Token) {
  const type = this.sliceSerialize(token) as "#" | ".";
  this.setData("ialAttribute", { type, ident: "" });
}

function exitIALIdent(this: CompileContext, token: Token) {
  let data = this.getData("ial");
  if (!data) {
    data = {};
    this.setData("ial", data);
  }
  const attribute = this.getData("ialAttribute")!;
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

function exitIAL(this: CompileContext, token: Token) {
  const data = this.getData("ial")!;
  this.enter({ type: "ial", ...data }, token);
  this.exit(token);
}

function transform(tree: Root) {
  visit(tree, "ial", (node, index, parent) => {
    if (parent === null || index === null) return;
    const last: Node<MdastData> = parent.children[index - 1];

    last.data ??= {};
    last.data.hProperties ??= {};
    if (node.id) {
      last.data.id = node.id;
      last.data.hProperties.id = node.id;
    }
    if (node.className) {
      last.data.hProperties.className = node.className;
    }
  });
}

export default function blockIALPlugin(this: ThisParameterType<Plugin>) {
  const data = this.data();
  data.micromarkExtensions ??= [];
  (data.micromarkExtensions as any).push(micromarkExtension);

  data.fromMarkdownExtensions ??= [];
  (data.fromMarkdownExtensions as any).push([fromMarkdownExtension]);
}
