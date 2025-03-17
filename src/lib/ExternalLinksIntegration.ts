import type { AstroIntegration } from "astro";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeExternalLinks from "rehype-external-links";
import type { Options } from "rehype-external-links";
import stringify from "rehype-stringify";
import { read, write } from "to-vfile";
import { getDistFilePath } from "./util";
import { visit } from "unist-util-visit";
import type { Root } from "hast";

class Abort extends Error {}

export default function (options: Options): AstroIntegration {
  const processor = unified()
    .use(parse)
    .use(() => {
      const externalLinks = rehypeExternalLinks(options);
      return (tree: Root) => {
        visit(tree, (node) => {
          if (node.type === "element" && node.tagName === "meta") {
            const httpEquiv = node.properties["httpEquiv"];
            if (
              httpEquiv instanceof Array
                ? httpEquiv.includes("refresh")
                : httpEquiv === "refresh"
            ) {
              throw new Abort();
            }
          }
        });
        externalLinks(tree);
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
            await processor.process(source).then(write, (e) => {
              if (e instanceof Abort) return;
              throw e;
            });
          })
        );
      },
    },
  };
}
