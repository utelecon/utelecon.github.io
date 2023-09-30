import type { AstroConfig, AstroIntegration } from "astro";
import { fileURLToPath } from "url";
import { unified } from "unified";
import fs from "fs/promises";
import parse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import type { Options } from "rehype-external-links";
import stringify from "rehype-stringify";
import type { VFile } from "vfile";
import { join } from "path";

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
            if (!pathname) return;
            if (pathname.includes("rss.xml")) return;
            const path =
              pathname === "/404"
                ? join(fileURLToPath(dir), "404.html")
                : join(fileURLToPath(dir), pathname, "index.html");
            const source = await fs.readFile(path, "utf-8");
            const { value: processed } = await new Promise<VFile>(
              (resolve, reject) => {
                processor.process(source, (err, file) =>
                  err ? reject(err) : resolve(file!)
                );
              }
            );
            await fs.writeFile(path, processed);
          })
        );
      },
    },
  };
}
