import { styleText } from "node:util";
import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob } from "astro/loaders";
import { FORMATS, NUMBERS, TOOLS, KEYWORDS } from "@components/pages/GoodPractice";
import { getISODateString } from "src/lib/util";

const emergencies = defineCollection({
  loader: glob({pattern: "*.{md,mdx}", base: "./src/emergencies" }),
  schema: z.object({
    pattern: z.string().refine((v) => {
      try {
        new RegExp(v);
        return true;
      }
      catch (e) {
        return false;
      }
    })
    .transform(
      (v) => new RegExp(v)
    )
  })
})

const events = defineCollection({
  loader: glob({pattern: ["events/*/index.{md,mdx}", "events/*.{md,mdx}"], base: "./src/pages" }),
  schema: z.object({
    title: z.string()
  })
})

const notices = defineCollection({
  // 本来は file() を使うべきだが、file() は各エントリに id / slug を含めることを要求するため面倒
  loader: glob({pattern: "notice.yml", base: "./src/data"}),
  schema: z.array(
    z.object({
      date: z.date(),
      content: z.object({
        // TODO: すべてのお知らせが翻訳されたら .optional() を外す
        ja: z.string().optional(),
        en: z.string().optional()
      }),
      important: z.boolean().optional()
    })
    // 少なくとも日英いずれかのタイトルが存在することを保証
    // （現時点では一方のみが欠けている場合には警告を出し、エラーにはしない）
    .refine((notice) => {
      if (!notice.content.ja || !notice.content.en) {
        console.error(
          `${
            styleText(['yellow'], '警告: ')
          }お知らせには日本語・英語双方のタイトルが必要です: ${
            (notice.content.ja || notice.content.en || "").slice(0, 40)
          }...`);
      }
      return notice.content.ja || notice.content.en;
    })
  )
  .transform((notices) => {
    const dateAutoincrementMap = new Map<string, number>();
    return notices.toReversed().map((notice) => {
      const date = getISODateString(notice.date);
      const i = dateAutoincrementMap.get(date) ?? 0;
      dateAutoincrementMap.set(date, i + 1);
      const id = `${date}-${i}`;
      return { ...notice, id };
    }).toReversed();
  })
})

const nav = defineCollection({
  loader: glob({ pattern: "*.yml", base: "./src/data/nav" }),
  schema: z.array(
    z.object({
      name: z.string(),
      sitemap: z.object({
        section: z.boolean().optional()
      }).optional(),
      contents: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
          sitemap: z.object({
            section: z.boolean().optional(),
            parent: z.string().optional()
          }).optional(),
          hidden: z.boolean().optional()
        })
      )
    })
  )
})

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages" }),
  schema: z.object({
    layout: z.boolean().optional(),
    sitemap: z.boolean().optional(),
    redirect_to: z.string().optional(),
    title: z.string().optional()
  })
})

function createEnumFromFilters<T extends string>(
  filters: readonly { value: T; label: string }[]
) {
  const values = filters.map((f) => f.value);
  // z.enum() は [string, ...string[]] 型を要求する
  return z.enum([values[0], ...values.slice(1)]);
}

const formatSchema = createEnumFromFilters(FORMATS);
type Format = z.infer<typeof formatSchema>;

const numberSchema = createEnumFromFilters(NUMBERS);
type Number = z.infer<typeof numberSchema>;

const toolSchema = createEnumFromFilters(TOOLS.filter((f) => f !== "br"));
type Tool = z.infer<typeof toolSchema>;

const keywordSchema = createEnumFromFilters(KEYWORDS);
type Keyword = z.infer<typeof keywordSchema>;

const interviews = defineCollection({
  loader: glob({ pattern: "good-practice/interview/*.md", base: "./src/pages" }),
  schema: z.object({
    title: z.string(),
    filters: z.object({
      format: z.array(formatSchema),
      number: numberSchema,
      tools: z.array(toolSchema),
      keywords: z.array(keywordSchema)
    }),
    componentProps: z.object({
      title: z.string(),
      point: z.string(),
      tools: z.string()
    })
  })
})

export const collections = { emergencies, events, notices, nav, pages, interviews };
export type { Format, Number, Tool, Keyword };
