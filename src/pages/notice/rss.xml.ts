import rss from "@astrojs/rss";
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
import { hash } from "@data/utils/hash";

type NoticeWithJa = Notice & { content: { ja: string } };

export async function GET(context: APIContext) {
  const items = await Promise.all(
    (notices as Notice[])
      .filter((notice): notice is NoticeWithJa => Boolean(notice.content.ja))
      .map(createItem),
  );

  const { title, description } = frontmatter;
  return rss({
    title,
    description,
    site: context.site!,
    items,
    trailingSlash: false,
  });
}

const parser = unified().use(remarkParse);

function createItem(notice: NoticeWithJa) {
  const mdast = parser.parse(notice.content.ja);
  const hast = toHast(mdast);
  const title = toText(hast);
  const a = select("p > a:only-child[href]", hast);
  const link =
    typeof a?.properties?.href === "string"
      ? a.properties.href
      : `/notice/#${hash(notice.content.ja)}`;
  return {
    title,
    link,
    pubDate: new Date(notice.date),
  };
}
