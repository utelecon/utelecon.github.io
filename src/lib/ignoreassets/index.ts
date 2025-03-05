import type { AstroConfig, AstroIntegration, RedirectConfig } from "astro";
import { glob } from "glob";
import * as semver from "semver";
import { extname } from "node:path";
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

  return paths.flatMap((path) => {
    const ext = extname(path);
    return extensionsSet.has(ext)
      ? [`/${path.substring(0, path.length - ext.length)}`]
      : [];
  });
}
