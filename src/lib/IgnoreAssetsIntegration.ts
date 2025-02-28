import type { AstroConfig, AstroIntegration, RedirectConfig } from "astro";
import { glob } from "glob";
import { extname } from "node:path";
import { fileURLToPath } from "node:url";

export default function (extensions: string[]): AstroIntegration {
  return {
    name: "ignore-assets",
    hooks: {
      "astro:config:setup": async (options) => {
        const { config, updateConfig } = options;

        insertPageExtensions(options, extensions);

        const assetsPaths = await enumerateAssets(config, extensions);

        updateConfig({
          redirects: Object.fromEntries(
            assetsPaths.map((path) => [
              path,
              { status: 410, destination: "/" } as unknown as RedirectConfig,
            ])
          ),
        });
      },
    },
  };
}

function insertPageExtensions(options: {}, extensions: string[]) {
  (
    options as {
      addPageExtension?: (input: string[]) => void;
    }
  ).addPageExtension?.(extensions);
}

async function enumerateAssets(
  config: AstroConfig,
  extensions: string[]
): Promise<string[]> {
  const extensionsSet = new Set(extensions);

  const pages = new URL("./pages", config.srcDir);

  const paths = await glob("**/*", {
    cwd: fileURLToPath(pages),
    nodir: true,
    absolute: false,
  });

  return paths.flatMap((path) =>
    extensionsSet.has(extname(path))
      ? [`/${path.substring(0, path.lastIndexOf("."))}`]
      : []
  );
}
