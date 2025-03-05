import {
  type AstroConfig,
  type AstroIntegration,
  type AstroIntegrationLogger,
  type RedirectConfig,
  type RouteData,
} from "astro";
import { glob } from "glob";
import * as semver from "semver";
import { parse, relative, type ParsedPath } from "node:path/posix";
import { fileURLToPath } from "node:url";
import { packages } from "../../../package-lock.json";

/**
 * 動作確認したAstroのバージョン範囲
 *
 * @remarks
 *
 * `semver` が解釈可能な形式で指定します。動作確認した上で適宜修正してください。
 * {@link ./README.md}も参照してください。
 */
const TESTED_ASTRO_VERSION_RANGE = "5.0.0 - 5.4.2";

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

/**
 * 無視するアセットを指定し、Astroインテグレーションを返します
 *
 * @param extensions - アセットの拡張子のリスト。プラットフォームにかかわらずcase-sensitiveに判定されます。
 * @returns `AstroIntegration`
 */
export default function (extensions: string[]): AstroIntegration {
  checkPackageVersion("astro", TESTED_ASTRO_VERSION_RANGE);

  const assetExtensionsSet: ReadonlySet<string> = new Set(extensions);

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
  ] as const;

  let filesInPages: Map<
    string,
    {
      parsedPath: ParsedPath;
      route: string;
      collidedPath?: string;
    }
  >;

  let pagesDir = "";

  async function configSetupHook(options: {
    config: AstroConfig;
    updateConfig: (_: Partial<AstroConfig>) => unknown;
  }): Promise<void> {
    pagesDir = fileURLToPath(new URL("./pages", options.config.srcDir));

    insertPageExtensions(options, extensions);

    const paths = (await globPages(pagesDir)).map((path) => ({
      path,
      parsedPath: parse(path),
    }));
    const assetsInPages = paths.filter(({ parsedPath }) =>
      assetExtensionsSet.has(parsedPath.ext)
    );

    filesInPages = new Map(
      paths.map(({ path, parsedPath }) => [
        path,
        { parsedPath, route: `/${parsedPath.dir}/${parsedPath.name}` },
      ])
    );

    const sameNamePage = ({ dir, name }: Pick<ParsedPath, "dir" | "name">) =>
      pageExtensions.reduce<string | undefined>((acc, ext) => {
        if (acc !== undefined) return acc;
        const path = `${dir}/${name}${ext}`;
        return filesInPages.has(path) ? path : undefined;
      }, undefined);

    for (const { path, parsedPath } of assetsInPages) {
      const collidedPath = sameNamePage(parsedPath);
      if (collidedPath) {
        filesInPages.set(path, {
          collidedPath,
          ...filesInPages.get(path)!,
        });
      }
    }

    options.updateConfig({
      redirects: Object.fromEntries(
        assetsInPages
          .filter(({ path }) => {
            const { route, collidedPath } = filesInPages.get(path)!;
            return (
              (options.config.redirects[route] ?? collidedPath) === undefined
            );
          })
          .map(({ path }) => [
            filesInPages.get(path)!.route,
            { status: 410, destination: "/" } as unknown as RedirectConfig,
          ])
      ),
    });
  }

  function routeSetupHook(params: {
    route: unknown;
    logger: AstroIntegrationLogger;
  }) {
    const route = params.route as RouteData;

    // all routes reachable here are "page" or "endpoint"
    if (
      route.origin === "project" &&
      filesInPages.get(relative(pagesDir, route.component))?.collidedPath !==
        undefined
    ) {
      params.logger.info(
        `File ${route.component} is set to fallback for route collision`
      );
      route.type = "fallback";
    }
  }

  return {
    name: "ignore-assets",
    hooks: {
      "astro:config:setup": configSetupHook,
      "astro:route:setup": routeSetupHook,
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

async function globPages(pagesDir: string): Promise<string[]> {
  return await glob("**/*", {
    cwd: pagesDir,
    nodir: true,
    absolute: false,
    posix: true,
  });
}
