// @ts-check
// js instead of ts in order for mdx language server to work
import { codes } from "micromark-util-symbol/codes.js";
import { asciiAlphanumeric, unicodeWhitespace } from "micromark-util-character";
import { visit } from "unist-util-visit";

/**
 * @typedef {import("micromark-util-types").Extension} MicromarkExtension
 * @typedef {import("micromark-util-types").TokenizeContext} TokenizeContext
 * @typedef {import("micromark-util-types").Tokenizer} Tokenizer
 * @typedef {import("micromark-util-types").State} State
 * @typedef {import("mdast-util-from-markdown").Extension} FromMarkdownExtension
 * @typedef {import("mdast-util-from-markdown").CompileContext} CompileContext
 * @typedef {import("mdast-util-from-markdown").Handle} Handle
 * @typedef {import("mdast-util-from-markdown").Transform} Transform
 * @typedef {import("./BlockIALPlugin").MdastNode} MdastNode
 * @typedef {import("mdast").Parent} Parent
 * @typedef {import("hast").Properties} Properties
 * @typedef {import("unified").Processor} Processor
 */

/** @type {MicromarkExtension} */
const micromarkExtension = {
  text: {
    [codes.leftCurlyBrace]: { tokenize },
  },
  flow: {
    [codes.leftCurlyBrace]: { tokenize },
  },
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenize(effects, ok, nok) {
  /** @type {State} */
  const start = (code) => {
    if (code !== codes.leftCurlyBrace) return nok(code);
    effects.enter("ial");
    effects.enter("ialOpen");
    effects.consume(code);
    effects.exit("ialOpen");
    return colon;
  };

  /** @type {State} */
  const colon = (code) => {
    if (code !== codes.colon) return nok(code);
    effects.enter("ialColon");
    effects.consume(code);
    effects.exit("ialColon");
    return endOrVariant;
  };

  /** @type {State} */
  const endOrVariant = (code) => {
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

  /** @type {State} */
  const ident = (code) => {
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

  /** @type {State} */
  const name = (code) => {
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

  /** @type {State} */
  const leftQuote = (code) => {
    if (code !== codes.quotationMark) return nok(code);
    effects.enter("ialValueStart");
    effects.consume(code);
    effects.exit("ialValueStart");
    effects.enter("ialValue");
    return value;
  };

  /** @type {State} */
  const value = (code) => {
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

/** @type {FromMarkdownExtension} */
const fromMarkdownExtension = {
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

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function enterIAL(_token) {
  this.setData("ial", {});
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function exitIALVariant(token) {
  const type = /** @type {"#" | "."} */ (this.sliceSerialize(token));
  this.setData("ialShorthandAttribute", { type, ident: "" });
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function exitIALIdent(token) {
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

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function exitIALName(token) {
  this.setData("ialFullAttribute", {
    name: this.sliceSerialize(token),
    value: "",
  });
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function exitIALValue(token) {
  const attribute = this.getData("ialFullAttribute");
  if (!attribute) return;
  attribute.value = this.sliceSerialize(token);
  const data = this.getData("ial");
  if (!data) return;
  data[attribute.name] = attribute.value;
}

/**
 * @this {CompileContext}
 * @type {Handle}
 */
function exitIAL(token) {
  const data = this.getData("ial");
  this.enter({ type: "ial", data }, token);
  this.exit(token);
}

/** @type {Transform} */
function transform(tree) {
  /** @type {{ parent: Parent; index: number }[]} */
  const stack = [];

  visit(tree, "ial", (node, index, parent) => {
    if (parent === null || index === null) return;

    let offset = 1;
    /** @type {MdastNode} */
    let last = parent.children[index - 1];
    while (last.type === "ial") last = parent.children[index - ++offset];

    last.data ??= {};
    last.data.hProperties = merge(last.data.hProperties, node.data);
    if (node.data?.id) {
      last.data.id = node.data.id;
    }

    stack.push({ parent, index });
  });

  while (stack.length > 0) {
    const { parent, index } = /** @type {{ parent: Parent; index: number }} */ (
      stack.pop()
    );
    parent.children.splice(index, 1);
  }
}

/**
 *
 * @param {Properties | undefined} existing
 * @param {Properties | undefined} additional
 * @returns
 */
function merge(existing, additional) {
  if (existing && additional) {
    const keys = new Set([
      ...Object.keys(existing),
      ...Object.keys(additional),
    ]);

    /** @type {Properties} */
    const result = {};
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

/**
 * @this {Processor}
 */
export default function blockIALPlugin() {
  const data = this.data();
  data.micromarkExtensions ??= [];
  /** @type {any} */ (data.micromarkExtensions).push(micromarkExtension);

  data.fromMarkdownExtensions ??= [];
  /** @type {any} */ (data.fromMarkdownExtensions).push([
    fromMarkdownExtension,
  ]);
}
