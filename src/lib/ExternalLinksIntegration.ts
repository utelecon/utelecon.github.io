import type { AstroIntegration } from "astro";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import type { Options } from "rehype-external-links";
import stringify from "rehype-stringify";
import { read, write } from "to-vfile";
import { getDistFilePath } from "./util";
import { EXIT, visit } from "unist-util-visit";
import type { Root } from "hast";

export default function (options: Options): AstroIntegration {
  const processor = unified()
    .use(parse)
    .use(() => {
      const externalLinks = rehypeExternalLinks(options);
      return (tree: Root) => {
        let isRedirectPage = false;
        visit(tree, (node) => {
          if (node.type === "element" && node.tagName === "meta") {
            const httpEquiv = node.properties["httpEquiv"];
            if (
              httpEquiv instanceof Array
                ? httpEquiv.includes("refresh")
                : httpEquiv === "refresh"
            ) {
              isRedirectPage = true;
              return EXIT;
            }
          }
        });
        if (!isRedirectPage) externalLinks(tree);
      };
    })
    .use(stringify);

  return {
    name: "external-links",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        await Promise.all(
          routes.map(async ({ pathname, component, type }) => {
            if (!pathname || type !== "page") return;
            const path = getDistFilePath(dir, pathname, component);
            const source = await read(path);
            const processed = await processor.process(source);
            await write(processed);
          })
        );
      },
    },
  };
}
