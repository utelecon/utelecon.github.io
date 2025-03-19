import type { MiddlewareHandler } from "astro";
import type { Element } from "hast";
import rehypeExternalLinks, {
  type Options as RehypeExternalLinksOptions,
} from "rehype-external-links";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

type Anchor = Element & { tagName: "a"; properties: { href: string } };

function isAnchor(e: Element): e is Anchor {
  return e.tagName === "a" && typeof e.properties.href === "string";
}

const mimeHtmlPattern = /^\s*text\/html(?:[\s;].*|$)/;

export const onRequest: MiddlewareHandler = async (
  { site: { hostname } = {} },
  _next
) => {
  const next = _next();

  const rehypeExternalLinksOptions: RehypeExternalLinksOptions = {
    target: "_blank",
    rel: ["noopener", "noreferrer"],
    content: { type: "text", value: "" },
    contentProperties: { className: ["external-link"] },
  };

  if (hostname) {
    rehypeExternalLinksOptions.test = (e: Element) => {
      if (!isAnchor(e)) {
        // shall be unreachable
        return true;
      }
      try {
        return new URL(e.properties.href).hostname !== hostname;
      } catch {
        return true;
      }
    };
  }

  const processor = unified()
    .use(rehypeParse)
    .use(rehypeExternalLinks, rehypeExternalLinksOptions)
    .use(rehypeStringify);

  const response = await next;

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
