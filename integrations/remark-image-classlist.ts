import { visit } from "unist-util-visit";
import type { Root } from "mdast";

// Fixes the issue that multiple classes are concatenated with commas by Astro
// NOTE: This plugin must be used at the end of the plugins list
export default function remarkImageClasslist() {
  return (tree: Root) => {
    visit(tree, "image", (node) => {
      if (node.type === "image") {
        node.data = node.data || {};
        const { className, ...rest } = node.data.hProperties || {};
        node.data.hProperties = {
          ...rest,
          "class:list": className,
        };
      }
    });
  };
}
