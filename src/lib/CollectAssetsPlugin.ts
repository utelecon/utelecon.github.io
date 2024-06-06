import { visit } from "unist-util-visit";

import type { Root } from "hast";
import type { Plugin } from "unified";

declare module "vfile" {
  interface DataMap {
    assets: string[];
  }
}

// Matches URLs that don't start with http, javascript:, mailto:, or tel:
// and have a file extension (excluding `.html` and `.png` and `.jpg` / `.jpeg`)
const SHOULD_BE_COPIED_REGEX =
  /^(?!http|javascript:|mailto:|tel:).*\.(?!html|png|jpg|jpeg)[a-zA-Z0-9]+$/;

const rehypeCollectAssets: Plugin<[], Root> = () => {
  return (tree, file) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a") {
        const href = node.properties?.href?.toString();
        if (href && SHOULD_BE_COPIED_REGEX.test(href)) {
          file.data.assets = file.data.assets || [];
          file.data.assets.push(href);
        }
      }
    });
  };
};

export default rehypeCollectAssets;
