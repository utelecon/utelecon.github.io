import type { Root } from "hast";
import type { VFile } from "vfile";
import { selectAll } from "hast-util-select";

const ALLOWED_PREFIXES = ["/", "./", "../", "@"];

export default function collectHtmlImages() {
  return (node: Root, file: VFile) => {
    selectAll("img", node).forEach((img) => {
      if (typeof img.properties?.src !== "string") return;

      const src = img.properties.src;
      if (!ALLOWED_PREFIXES.some((prefix) => src.startsWith(prefix))) {
        img.properties.src = `./${src}`;
      }
      const imagePaths = file.data.astro!.localImagePaths;
      if (imagePaths?.includes(img.properties.src)) return;
      imagePaths?.push(img.properties.src);
    });
  };
}
