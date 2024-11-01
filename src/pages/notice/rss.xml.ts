import type { APIContext } from "astro";
// @ts-ignore
import { frontmatter } from "../index.mdx";
import { rss } from "@components/pages/rss";

const { title, description } = frontmatter;

export async function GET({ url }: APIContext) {
  return rss({ title, description, url, lang: "ja" });
}
