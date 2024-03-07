import type { Frontmatter } from "./Layout.astro";
import fs from "fs/promises";
import { existsSync } from "fs";
import matter from "gray-matter";

export interface Breadcrumb {
  title: string;
  parent?: string;
}

export interface ResolvedBreadcrumb {
  title: string;
  pathname: string;
}

export default async function resolveBreadcrumb(
  url: URL,
  breadcrumb: Breadcrumb,
) {
  const resolved: ResolvedBreadcrumb[] = [];

  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#globs-only-go-one-level-deep により，
  // ディレクトリが動的なimportは利用できないため，独自にparseしている
  async function getParent(pathname: string) {
    const path = [
      `./src/pages${pathname}/index.md`,
      `./src/pages${pathname}/index.mdx`,
    ].find(existsSync);
    if (!path) return null;

    const text = await fs.readFile(path, "utf-8");
    const { data: frontmatter } = matter(text);
    return frontmatter as Frontmatter;
  }

  while (1) {
    resolved.unshift({
      title: breadcrumb.title,
      pathname: url.pathname,
    });

    url = new URL(breadcrumb.parent ?? "..", url);
    if (url.pathname === "/" || url.pathname === "/en/") break;

    const parent = await getParent(url.pathname);
    if (!parent) throw new Error(`No parent found: ${url.pathname}`);
    if (!parent.breadcrumb)
      throw new Error(`No breadcrumb found in parent: ${url.pathname}`);
    breadcrumb = parent.breadcrumb;
  }

  return resolved;
}
