import fs from "node:fs/promises";
import { join, normalize, parse } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration, RouteData } from "astro";

export default function trailingSlash(): AstroIntegration {
  return {
    name: "trailing-slash",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        await Promise.all(
          dedupe(routes).map(async ({ component, pathname }) => {
            if (
              !pathname ||
              pathname === "/404" ||
              pathname.endsWith("/rss.xml")
            )
              return;
            if (parse(component).name === "index" || component.endsWith("/"))
              return;

            const source = join(fileURLToPath(dir), pathname, "index.html");
            const sourceDir = join(fileURLToPath(dir), pathname);
            const destination = join(
              fileURLToPath(dir),
              `${pathname.replace(/\/$/, "")}.html`,
            );
            await fs.rename(source, destination);
            const files = await fs.readdir(sourceDir);
            if (files.length === 0) await fs.rmdir(sourceDir);
          }),
        );
      },
    },
  };
}

function dedupe(routes: RouteData[]): RouteData[] {
  return Array.from(
    new Map(routes.map((route) => [normalize(route.route), route])).values(),
  );
}
