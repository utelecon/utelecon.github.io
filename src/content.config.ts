import { styleText } from "node:util";
import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob } from "astro/loaders";
import { getISODateString } from "@data/utils/notices";

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

export const collections = { emergencies, events, notices };
