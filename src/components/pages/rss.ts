import type { RSSFeedItem } from "@astrojs/rss";
import getRssResponse from "@astrojs/rss";
import remarkParse from "remark-parse";
import { unified } from "unified";

import { noticesWithIdReversed } from "@data/utils/notices";
import { toHast } from "mdast-util-to-hast";
import { toText } from "hast-util-to-text";
import { select } from "hast-util-select";
import type { Lang } from "@components/types";

const parser = unified().use(remarkParse);

interface RssParams {
  title: string;
  description: string;
  url: URL;
  lang: Lang;
}

export async function rss({ title, description, url, lang }: RssParams) {
  const itemsMap = new Map<string, RSSFeedItem>();

  for (const notice of noticesWithIdReversed) {
    const content = notice.content[lang] ?? notice.content.ja;
    if (!content) continue;

    const mdast = parser.parse(content);
    const hast = toHast(mdast);
    const title = toText(hast);
    const a = select("p > a:only-child[href]", hast);
    const link =
      a && toText(a) === title
        ? (a.properties.href as string)
        : `/notice/#${notice.id}`;
    const pubDate = new Date(notice.date);
    // 03:00 UTC (12:00 JST) of the day in order for rss-to-twitter.yml to work correctly
    pubDate.setUTCHours(3);
    itemsMap.set(link, { title, link, pubDate });
  }

  return getRssResponse({
    title,
    description,
    site: url.origin,
    items: Array.from(itemsMap.values()).reverse(),
    trailingSlash: false,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: [
      `<language>${{ ja: "ja-jp", en: "en-us" }[lang]}</language>`,
      `<atom:link href="${url}" rel="self" type="application/rss+xml" />`,
    ].join(""),
  });
}
