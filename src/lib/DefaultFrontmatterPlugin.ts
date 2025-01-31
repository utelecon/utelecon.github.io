import type { VFile } from "vfile";
import type { Node } from "unist";
import { join, relative } from "path";

interface Options {
  layout: string;
}

/**
 * https://github.com/withastro/astro/issues/397#issuecomment-1236231783
 */
export default function defaultFrontmatterPlugin({ layout }: Options) {
  return function (_: Node, file: VFile) {
    const frontmatter = file.data.astro!.frontmatter!;
    const path = relative(join(file.cwd, "src", "pages"), file.path);
    if (path.startsWith("..") || file.basename?.startsWith("_")) {
      frontmatter.layout = false;
      return;
    }
    frontmatter.layout ??= layout;
    frontmatter.lang ??= path.startsWith("en") ? "en" : "ja";
  };
}
