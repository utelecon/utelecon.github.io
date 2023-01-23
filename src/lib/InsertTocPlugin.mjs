import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import { toc } from "mdast-util-toc";

const HEADING_TEXT = {
  ja: "目次",
  en: "Table of Contents",
};

/**
 * @type {import('unified').Plugin<[options?: import('mdast-util-toc').Options], import('mdast').Root>}
 */
export default function insertTocPlugin(options) {
  return function (tree, file) {
    if (file.data.astro.frontmatter.toc === false) return;

    const { map } = toc(tree, options);
    if (!map) return;

    visit(map, "listItem", (node) => {
      if (node.children[0].type === "paragraph") {
        node.children[0] = node.children[0].children[0];
      }
    });

    const { lang } = file.data.astro.frontmatter;
    tree.children.unshift(
      u("html", { value: '<section class="main__toc">' }),
      u("heading", { depth: 2 }, [u("text", HEADING_TEXT[lang])]),
      map,
      u("html", { value: "</section>" })
    );
  };
}
