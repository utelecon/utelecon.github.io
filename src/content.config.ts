import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob } from "astro/loaders";

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

export const collections = { emergencies, events };
