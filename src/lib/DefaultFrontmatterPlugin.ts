import type { VFile } from "vfile";
import type { Node } from "unist";
import type { AstroData } from "./types";

interface Options {
  layout: string;
}

/**
 * https://github.com/withastro/astro/issues/397#issuecomment-1236231783
 */
export default function defaultFrontmatterPlugin({ layout }: Options) {
  return function (_: Node, file: VFile & { data: { astro?: AstroData } }) {
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.layout ??= layout;
    const en = file.path.startsWith("src/pages/en");
    file.data.astro.frontmatter.lang = en ? "en" : "ja";
  };
}
