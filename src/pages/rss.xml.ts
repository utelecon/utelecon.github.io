import rss from "@astrojs/rss";
import type { RSSFeedItem } from "@astrojs/rss";
import type { APIContext } from "astro";
import { frontmatter } from "./index.mdx";
import notices from "@data/notice.yml";
import type { Notice } from "@data/schemas/notice";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { toHast } from "mdast-util-to-hast";
import { visit } from "unist-util-visit";
import { select } from "hast-util-select";
import type { Root, RootContent } from "hast";
import { hash } from "@components/pages/Notice.astro";

type NoticeWithJa = Notice & { content: { ja: string } };

export async function get(context: APIContext) {
  const items = await Promise.all(
    (notices as Notice[])
      .filter((notice): notice is NoticeWithJa => Boolean(notice.content.ja))
      .map(createItem)
  );

  const { title, description } = frontmatter;
  return rss({
    title,
    description,
    site: context.site!,
    items,
  });
}

const parser = unified().use(remarkParse);

async function createItem(notice: NoticeWithJa): Promise<RSSFeedItem> {
  const mdast = parser.parse(notice.content.ja);
  const hast = toHast(mdast)!;
  const title = toText(hast);
  const a = select("p > a:only-child[href]", hast);
  const link = a
    ? (a.properties?.href as string)
    : "/notice/#" + (await hash(notice.content.ja));
  return {
    title,
    link,
    pubDate: new Date(notice.date),
  };
}

function toText(element: Root | RootContent): string {
  const parts: string[] = [];
  visit(element, "text", (node) => parts.push(node.value));
  return parts.join("");
}
