import type { AstroIntegration } from "astro";
import { fileURLToPath } from "url";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import type { Options } from "rehype-external-links";
import stringify from "rehype-stringify";
import { read, write } from "to-vfile";

export default function externalLinks(options: Options): AstroIntegration {
  const processor = unified()
    .use(parse)
    .use(rehypeExternalLinks, options)
    .use(stringify);

  return {
    name: "redirect",
    hooks: {
      "astro:build:done": async ({ routes }) => {
        await Promise.all(
          routes.map(async ({ distURL }) => {
            if (!distURL) return;
            const source = await read(fileURLToPath(distURL));
            const processed = await processor.process(source);
            await write(processed);
          }),
        );
      },
    },
  };
}
