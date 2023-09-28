// Prepends "./" to image paths so that it can be imported as a relative path.

import type { Root } from "mdast";
import "mdast-util-mdx";
import { visit } from "unist-util-visit";
import { visit as estreeVisit } from "estree-util-visit";

const ALLOWED_PREFIXES = ["http:", "https:", "/", "./", "../"];

export default function dotSlashPlugin() {
  return (root: Root) => {
    visit(root, "mdxjsEsm", (node) => {
      const estree = node.data?.estree;
      if (!estree) return;
      estreeVisit(estree, (node) => {
        if (node.type !== "ImportDeclaration") return;
        const { value, raw } = node.source;
        if (!raw || typeof value !== "string") return;
        if (!ALLOWED_PREFIXES.some((prefix) => value.startsWith(prefix))) {
          node.source.value = `./${value}`;
          node.source.raw = JSON.stringify(`./${JSON.parse(raw)}`);
        }
      });
    });

    // For md
    visit(root, "image", (node) => {
      if (!ALLOWED_PREFIXES.some((prefix) => node.url.startsWith(prefix))) {
        node.url = `./${node.url}`;
      }
    });
  };
}
