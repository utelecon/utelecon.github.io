import {
  type AstroConfig,
  type AstroIntegration,
  type RedirectConfig,
  type RouteData,
} from "astro";
import { glob } from "glob";
import * as semver from "semver";
import { extname, parse } from "node:path/posix";
import { fileURLToPath } from "node:url";
import { packages } from "../../../package-lock.json";

export class VersionNotSatisfied extends Error {
  constructor(
    name: string,
    version: string | semver.SemVer,
    range: string | semver.Range
  ) {
    const versionStr = typeof version === "string" ? version : version.version;
    const rangeStr = typeof range === "string" ? range : range.raw;
    super(
      `Package ${name}@${versionStr} not satisfy the version range "${rangeStr}"`
    );
  }
}

function checkPackageVersion(name: string, range: string | semver.Range) {
  const version = (packages as Record<string, { version: string }>)[
    `node_modules/${name}`
  ]?.version;
  if (version === undefined) {
    throw new Error(`Package ${name} not installed`);
  }

  if (!semver.satisfies(version, range)) {
    throw new VersionNotSatisfied(name, version, range);
  }
}

export default function (extensions: string[]): AstroIntegration {
  checkPackageVersion("astro", "5.0.0 - 5.4.2");

  const extensionsSet = new Set(extensions);

  return {
    name: "ignore-assets",
    hooks: {
      "astro:config:setup": async (options) => {
        const { config, updateConfig } = options;

        insertPageExtensions(options, extensions);

        const assetsPaths = await enumerateAssets(config, extensions);

        updateConfig({
          redirects: Object.fromEntries(
            assetsPaths
              .filter((path) => config.redirects[path] === undefined)
              .map((path) => [
                path,
                { status: 410, destination: "/" } as unknown as RedirectConfig,
              ])
          ),
        });
      },
      "astro:route:setup": (params) => {
        const { route } = params as unknown as { route: RouteData };

        if (route.type === "page" && route.origin === "project") {
          const ext = extname(route.component);

          if (extensionsSet.has(ext)) {
            route.type = "fallback";
          }
        }
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
    posix: true,
  });
  const pathsSet = new Set(paths);

  const pageExtensions = [
    ".astro",
    ".html",
    // Extensions below are in SUPPORTED_MARKDOWN_FILE_EXTENSIONS
    ".markdown",
    ".mdown",
    ".mkdn",
    ".mkd",
    ".mdwn",
    ".md",
    // ".mdx" is added by @astrojs/mdx integration through addPageExtension(), but
    // there is no way to peek the current value of AstroSettings.pageExtensions.
    ".mdx",
  ];

  const sameNamePageExists = (dirname: string, basename: string) =>
    pageExtensions.reduce(
      (acc, ext) => acc || pathsSet.has(`${dirname}/${basename}${ext}`),
      false
    );

  return paths.flatMap((path) => {
    const { dir, name, ext } = parse(path);
    return extensionsSet.has(ext) && !sameNamePageExists(dir, name)
      ? [`/${dir}/${name}`]
      : [];
  });
}
