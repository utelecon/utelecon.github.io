import type { MiddlewareHandler } from "astro";
import rehypeExternalLinks, {
  type Options as RehypeExternalLinksOptions,
} from "rehype-external-links";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

const rehypeExternalLinksOptions: RehypeExternalLinksOptions = {
  target: "_blank",
  rel: ["noopener", "noreferrer"],
  content: { type: "text", value: "" },
  contentProperties: { className: ["external-link"] },
};

const processor = unified()
  .use(rehypeParse)
  .use(rehypeExternalLinks, rehypeExternalLinksOptions)
  .use(rehypeStringify);

const mimeHtmlPattern = /^\s*text\/html(?:[\s;].*|$)/;

const onRequest: MiddlewareHandler = async (_, next) => {
  const response = await next();

  const contentType = response.headers
    .entries()
    .filter(([key]) => key.toLowerCase() === "content-type")
    .toArray()
    .pop()?.[1];

  if (contentType?.match(mimeHtmlPattern)) {
    return new Response(
      await response
        .blob()
        .then((b) => b.bytes())
        .then((ab) => processor.process(ab))
        .then(({ value }) => value),
      {
        status: response.status,
        headers: response.headers,
      }
    );
  }

  return response;
};

export default onRequest;
