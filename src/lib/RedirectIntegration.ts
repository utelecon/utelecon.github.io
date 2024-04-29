import type { AstroIntegration } from "astro";
import matter from "gray-matter";
import { relative } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { read } from "to-vfile";

export default function redirect(): AstroIntegration {
  return {
    name: "redirect",
    hooks: {
      "astro:config:setup": async ({ updateConfig, config }) => {
        const pagesDir = fileURLToPath(new URL("pages", config.srcDir));
        const files = await glob(`${pagesDir}/**/*.{md,mdx,markdown}`);
        const vfiles = await Promise.all(files.map((file) => read(file)));
        const redirects = vfiles.flatMap((file) => {
          const { data } = matter(file.value.toString());
          if (typeof data !== "object") return [];
          const { redirect_to, redirect_from } = data;
          const here =
            "/" +
            relative(pagesDir, file.path).replace(
              /(?:index)?\.(?:md|mdx|markdown|astro)$/,
              "",
            );
          if (typeof redirect_to === "string") {
            return { from: here, to: redirect_to };
          }
          if (typeof redirect_from === "string") {
            return { from: redirect_from, to: here };
          }
          if (
            Array.isArray(redirect_from) &&
            redirect_from.every((x) => typeof x === "string")
          ) {
            return redirect_from.map((from) => ({ from, to: here }));
          }
          return [];
        });
        updateConfig({
          redirects: Object.fromEntries(
            redirects.map(({ from, to }) => [from, to]),
          ),
        });
      },
    },
  };
}
