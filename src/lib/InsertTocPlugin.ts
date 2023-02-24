import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import { toc } from "mdast-util-toc";
import type { Options } from "mdast-util-toc";
import type { Root } from "mdast";
import type { VFile } from "vfile";
import type { AstroData } from "./types";

const HEADING_TEXT = {
  ja: "目次",
  en: "Table of Contents",
};

declare module "mdast" {
  interface BlockContentMap {
    link: Link;
  }
}

/**
 * @type {import('unified').Plugin<[options?: import('mdast-util-toc').Options], import('mdast').Root>}
 */
export default function insertTocPlugin(options?: Options) {
  return function (tree: Root, file: VFile & { data: { astro?: AstroData } }) {
    if (file.data.astro?.frontmatter?.toc === false) return;

    const { map } = toc(tree, options);
    if (!map) return;

    visit(map, "listItem", (node) => {
      if (
        node.children[0].type === "paragraph" &&
        node.children[0].children[0].type === "link"
      ) {
        node.children[0] = node.children[0].children[0];
      }
    });

    const lang = file.data.astro?.frontmatter?.lang as "ja" | "en";
    tree.children.unshift(
      u("html", { value: '<section class="main__toc">' }),
      u("heading", { depth: 2 as const }, [u("text", HEADING_TEXT[lang])]),
      map,
      u("html", { value: "</section>" })
    );
  };
}
