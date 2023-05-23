import { attention } from "micromark-core-commonmark";
import type { Plugin } from "unified";
import type {
  Extension as MicromarkExtension,
  TokenizeContext,
  Effects,
  State,
  Code,
  Event,
} from "micromark-util-types";
import { codes } from "micromark-util-symbol/codes.js";

const micromarkExtension: MicromarkExtension = {
  text: {
    [codes.asterisk]: {
      ...attention,
      tokenize,
    },
  },
};

function tokenize(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
) {
  let marker: Code;

  const start: State = (code) => {
    if (code !== codes.asterisk && code !== codes.underscore) {
      return nok(code);
    }
    effects.enter("attentionSequence");
    marker = code;
    return sequence(code);
  };

  const sequence: State = (code) => {
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

export default function simpleAttentionPlugin(this: ThisParameterType<Plugin>) {
  const data = this.data();
  data.micromarkExtensions ??= [];
  (data.micromarkExtensions as any).push(micromarkExtension);
}
