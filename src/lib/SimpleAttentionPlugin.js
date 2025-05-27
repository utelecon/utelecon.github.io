// @ts-check
// js instead of ts in order for mdx language server to work
import { attention } from "micromark-core-commonmark";
import { codes } from "micromark-util-symbol";

/**
 * @typedef {import("micromark-util-types").Extension} MicromarkExtension
 * @typedef {import("micromark-util-types").TokenizeContext} TokenizeContext
 * @typedef {import("micromark-util-types").Tokenizer} Tokenizer
 * @typedef {import("micromark-util-types").State} State
 * @typedef {import("micromark-util-types").Code} Code
 * @typedef {import("unified").Processor} Processor
 * @typedef {import("remark-parse")}
 */

const micromarkExtension = {
  text: {
    [codes.asterisk]: {
      ...attention,
      tokenize,
    },
  },
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenize(effects, ok, nok) {
  /** @type {Code} */
  let marker;

  /** @type {State} */
  const start = (code) => {
    marker = code;
    effects.enter("attentionSequence");
    return inside(code);
  };

  /** @type {State} */
  const inside = (code) => {
    if (code === marker) {
      effects.consume(code);
      return inside;
    }
    const token = effects.exit("attentionSequence");

    // Always populated by defaults.

    token._open = true;
    token._close = true;
    return ok(code);
  };

  return start;
}

/**
 * @this {Processor}
 */
export default function simpleAttentionPlugin() {
  const data = this.data();
  data.micromarkExtensions ??= [];
  data.micromarkExtensions.push(micromarkExtension);
}
