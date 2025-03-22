import type { MiddlewareHandler } from "astro";
import type { Element } from "hast";
import { convertElement } from "hast-util-is-element";
import rehypeExternalLinks, {
  type Options as RehypeExternalLinksOptions,
} from "rehype-external-links";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import type { Compatible } from "vfile";

type Anchor = Element & { tagName: "a"; properties: { href: string } };

function isAnchor(e: Element): e is Anchor {
  return e.tagName === "a" && typeof e.properties.href === "string";
}

class ExternalLinkProcessor {
  hostname?: string;
  private readonly processor;

  constructor(options: RehypeExternalLinksOptions) {
    const check = convertElement(options.test);

    const hostnameIsIdentical = (e: Element) => {
      if (isAnchor(e))
        try {
          return new URL(e.properties.href).hostname === this.hostname;
        } catch {}
      return false;
    };

    this.processor = unified()
      .use(rehypeParse)
      .use(rehypeExternalLinks, {
        ...options,
        // all anchor elements are tested, and
        // external links which passed are processed.
        test: (e, i, p) => !hostnameIsIdentical(e) && check(e, i, p),
      })
      .use(rehypeStringify);
  }

  process(file: Compatible | undefined) {
    return this.processor.process(file);
  }
}

const processor = new ExternalLinkProcessor({
  target: "_blank",
  rel: ["noopener", "noreferrer"],
  content: { type: "text", value: "" },
  contentProperties: { className: ["external-link"] },
});

const mimeHtmlPattern = /^\s*text\/html(?:[\s;].*|$)/;

export const onRequest: MiddlewareHandler = async (
  { site: { hostname } = {} },
  next
) => {
  processor.hostname = hostname;

  const response = await next();

  if (response.headers.get("content-type")?.match(mimeHtmlPattern)) {
    return new Response(
      (await processor.process(await response.text())).value,
      {
        status: response.status,
        headers: response.headers,
      }
    );
  }

  return response;
};
