import type { AstroIntegration } from "astro";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import type { Options } from "rehype-external-links";
import stringify from "rehype-stringify";
import { read, write } from "to-vfile";
import { getDistFilePath } from "./util";

export default function externalLinks(options: Options): AstroIntegration {
  const processor = unified()
    .use(parse)
    .use(rehypeExternalLinks, options)
    .use(stringify);

  return {
    name: "redirect",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        await Promise.all(
          routes.map(async ({ pathname, component, redirect }) => {
            if (!pathname || pathname.endsWith("/rss.xml")) return;
            if (typeof redirect === "object" && 400 <= redirect.status) {
              return;
            }
            const path = getDistFilePath(dir, pathname, component);
            const source = await read(path);
            const processed = await processor.process(source);
            await write(processed);
          }),
        );
      },
    },
  };
}
