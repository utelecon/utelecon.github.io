import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { Plugin } from "unified";

// Fixes the issue that multiple classes are concatenated with commas by Astro
// NOTE: This plugin must be used at the end of the plugins list
const remarkImageClasslist: Plugin<[], Root> = () => {
  return (tree) => {
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
};

export default remarkImageClasslist;
