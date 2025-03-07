import {
  type AstroConfig,
  type AstroIntegration,
  type AstroIntegrationLogger,
  type RedirectConfig,
  type RouteData,
} from "astro";
import { glob } from "glob";
import * as semver from "semver";
import { join, parse, relative, type ParsedPath } from "node:path/posix";
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
  ];

  let filesInPages: Map<
    string,
    Pick<ParsedPath, "dir" | "ext" | "name"> & {
      route: string;
      collidedPath?: string;
    }
  >;

  async function configSetupHook(options: {
    config: AstroConfig;
    updateConfig: (_: Partial<AstroConfig>) => unknown;
  }): Promise<void> {
    const pagesDir = relative(
      "",
      fileURLToPath(new URL("./pages", options.config.srcDir))
    );

    if (options.config.integrations.find((i) => i.name === "@astrojs/mdx")) {
      // ".mdx" is added by @astrojs/mdx integration through addPageExtension(), but
      // there is no way to peek the current value of AstroSettings.pageExtensions.
      pageExtensions.push(".mdx");
    }

    insertPageExtensions(options, extensions);

    filesInPages = new Map(
      (
        await glob("**/*", {
          cwd: pagesDir,
          nodir: true,
          absolute: false,
          posix: true,
        })
      ).map((pathFromPages) => {
        const parsedPath = parse(pathFromPages);
        return [
          join(pagesDir, pathFromPages),
          {
            ...parsedPath,
            route: join(
              "/",
              parsedPath.dir,
              parsedPath.name === "index" ? "/" : parsedPath.name
            ),
          },
        ];
      })
    );

    const assetsInPages = new Map(
      filesInPages
        .entries()
        .filter(([_, { ext }]) => assetExtensionsSet.has(ext))
    );

    const sameNamePage = ({ dir, name }: Pick<ParsedPath, "dir" | "name">) =>
      pageExtensions.reduce<string | undefined>((acc, ext) => {
        if (acc !== undefined) return acc;
        const path = join(pagesDir, dir, `${name}${ext}`);
        return filesInPages.has(path) ? path : undefined;
      }, undefined);

    assetsInPages.forEach((file) => {
      file.collidedPath = sameNamePage(file);
    });

    options.updateConfig({
      redirects: Object.fromEntries(
        assetsInPages
          .values()
          .filter(
            ({ route, collidedPath }) =>
              (options.config.redirects[route] ?? collidedPath) === undefined
          )
          .map(({ route }) => [
            route,
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
      filesInPages.get(route.component)?.collidedPath !== undefined
    ) {
      params.logger.info(
        `Route to file ${route.component} set to "fallback" due to route collision`
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
