import type { MarkdownInstance } from "astro";
import sections from "../../data/sitemapSections";

type Page = MarkdownInstance<Record<string, any>>;

interface Props {
    pages: Page[],
    lang: "ja" | "en"
}

export default function Sitemap({ pages, lang }: Props) {
    // https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values#comment48111034_979289
    // @ts-ignore
    pages.sort((a, b) => (a.url > b.url) - (a.url < b.url));

    const pagesBySection = new Map<Symbol, Page[]>(sections.map(section => [section.key, []]));

    for (const page of pages) {
        if (!("url" in page)) {
            continue;
        }
        if (page.frontmatter && !("title" in page.frontmatter)) {
            continue;
        }
        if (page.frontmatter && page.frontmatter.sitemap === false) {
            continue;
        }
        let path: string;

        switch (lang) {
            case "ja":
                if (page.url!.startsWith("/en/")) {
                    continue;
                }
                path = page.url as string;
                break;
            case "en":
                if (!(page.url!.startsWith("/en/"))) {
                    continue;
                }
                path = page.url!.replace(/^\/en/, "");
                break;
        }

        for (const section of sections) {
            let cond = false;
            if ("patterns" in section) {
                cond ||= section.patterns!.some(pattern => pattern.test(path));
            }
            if ("negativePatterns" in section) {
                cond &&= !(section.negativePatterns!.some(pattern => pattern.test(path)));
            }
            if (cond) {
                pagesBySection.get(section.key)!.push(page);
                break;
            }
        }
    }

    return (
        <>
            {
                sections.map(section => {
                    const Heading = section.heading;
                    return (
                        <>
                            <Heading>{ section.name[lang] }</Heading>
                            <ul>
                                {
                                    pagesBySection.get(section.key)!.map(p => {
                                        return (
                                            <li key={ p.url }>
                                                <a href={ p.url }>{ p.frontmatter?.title }</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </>
                    )
                })
            }
        </>
    );
}
