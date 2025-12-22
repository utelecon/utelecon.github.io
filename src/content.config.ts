import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob } from "astro/loaders";

const events = defineCollection({
  loader: glob({pattern: ["events/*/index.{md,mdx}", "events/*.{md,mdx}"], base: "./src/pages" }),
  schema: z.object({
    title: z.string()
  })
})

export const collections = { events };
