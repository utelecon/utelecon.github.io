import type { AstroIntegration } from "astro";
import { fileURLToPath } from "url";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import type { Options } from "rehype-external-links";
import stringify from "rehype-stringify";
import { join } from "path";
import { read, write } from "to-vfile";

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
          routes.map(async ({ pathname }) => {
            if (!pathname || pathname.endsWith("/rss.xml")) return;
            const path =
              pathname === "/404"
                ? join(fileURLToPath(dir), "404.html")
                : join(fileURLToPath(dir), pathname, "index.html");
            const source = await read(path);
            const processed = await processor.process(source);
            await write(processed);
          }),
        );
      },
    },
  };
}
