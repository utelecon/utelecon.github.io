import type { Root } from "hast";
import { selectAll } from "hast-util-select";
import type { MarkdownVFile } from "@astrojs/markdown-remark";

const ALLOWED_PREFIXES = ["/", "./", "../", "@"];

export default function collectHtmlImages() {
  return (node: Root, file: MarkdownVFile) => {
    selectAll("img", node).forEach((img) => {
      if (typeof img.properties?.src !== "string") return;

      const src = img.properties.src;
      if (!ALLOWED_PREFIXES.some((prefix) => src.startsWith(prefix))) {
        img.properties.src = `./${src}`;
      }
      file.data.imagePaths!.add(img.properties.src);
    });
  };
}
