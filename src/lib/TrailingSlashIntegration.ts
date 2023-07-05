import type { AstroIntegration } from "astro";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { join, parse } from "path";

export default function trailingSlash(): AstroIntegration {
  return {
    name: "redirect",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        await Promise.all(
          routes
            .filter(
              ({ component, pathname }) =>
                parse(component).name !== "index" && pathname !== "/404"
            )
            .map(async ({ pathname }) => {
              if (!pathname) return;
              const source = join(fileURLToPath(dir), pathname, "index.html");
              const sourceDir = join(fileURLToPath(dir), pathname);
              const destination = join(
                fileURLToPath(dir),
                pathname.replace(/\/$/, "") + ".html"
              );
              await fs.rename(source, destination);
              await fs.rm(sourceDir, { recursive: true });
            })
        );
      },
    },
  };
}
