// @ts-check
// js instead of ts in order for mdx language server to work
import { attention } from "micromark-core-commonmark";
import { codes } from "micromark-util-symbol/codes.js";

/**
 * @typedef {import("micromark-util-types").Extension} MicromarkExtension
 * @typedef {import("micromark-util-types").TokenizeContext} TokenizeContext
 * @typedef {import("micromark-util-types").Tokenizer} Tokenizer
 * @typedef {import("micromark-util-types").State} State
 * @typedef {import("micromark-util-types").Code} Code
 * @typedef {import("unified").Processor} Processor
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
    if (code !== codes.asterisk && code !== codes.underscore) {
      return nok(code);
    }
    effects.enter("attentionSequence");
    marker = code;
    return sequence(code);
  };

  /** @type {State} */
  const sequence = (code) => {
    if (code === marker) {
      effects.consume(code);
      return sequence;
    }

    const token = effects.exit("attentionSequence");
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
  /** @type {any} */ (data.micromarkExtensions).push(micromarkExtension);
}
