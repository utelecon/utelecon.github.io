import rss, { type RSSFeedItem } from "@astrojs/rss";
import notices from "@data/notice.yml";
import type { Notice } from "@data/schemas/notice";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { toHast } from "mdast-util-to-hast";
import { toText } from "hast-util-to-text";
import { select } from "hast-util-select";
import type { APIContext } from "astro";
// @ts-ignore
import { frontmatter } from "../index.mdx";
import { noticesWithIdReversed } from "@data/utils/notices";

const parser = unified().use(remarkParse);

export async function GET(context: APIContext) {
  const itemsMap = new Map<string, RSSFeedItem>();

  for (const notice of noticesWithIdReversed) {
    if (!notice.content.ja) continue;

    const mdast = parser.parse(notice.content.ja);
    const hast = toHast(mdast);
    const title = toText(hast);
    const a = select("p > a:only-child[href]", hast);
    const link =
      typeof a?.properties?.href === "string"
        ? a.properties.href
        : `/notice/#${notice.id}`;
    itemsMap.set(link, {
      title,
      link,
      pubDate: new Date(notice.date),
    });
  }

  const { title, description } = frontmatter;
  return rss({
    title,
    description,
    site: context.url.origin,
    items: Array.from(itemsMap.values()).reverse(),
    trailingSlash: false,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: [
      "<language>ja-jp</language>",
      `<atom:link href="${context.url}" rel="self" type="application/rss+xml" />`,
    ].join(""),
  });
}
