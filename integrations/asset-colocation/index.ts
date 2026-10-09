import type { AstroIntegration } from "astro";
import type { Root as MdastRoot } from "mdast";
import type { Root as HastRoot } from "hast";
import { VFile } from "vfile";
import { selectAll } from "hast-util-select";
import { visit as unistVisit } from "unist-util-visit";
import { visit as estreeVisit } from "estree-util-visit";
import rehypeRaw from "rehype-raw";
import "mdast-util-mdx";
import { glob } from "glob";
import yaml from "js-yaml";
import { pathToFileURL } from "node:url";
import { readFile, copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const ORIGINS: [string, ...string[]] = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];

/**
 * 画像などのアセットを src/pages 配下のページ自体と同居させるための処理を行う一連の機能群．
 * 詳しくは {@link ./README.md} を参照．
 */
export default function assetColocation(
  extensions: string[],
): AstroIntegration {
  /** 使用されている画像のパス．File URL を文字列にしたもの */
  const usedImages = new Set<string>();
  /** ページからリンクされているパス．HTTP URL の pathname */
  const referredPaths = new Set<string>();

  let pagesDirUrl!: URL;
  let publicDirUrl!: URL;
  let outDirUrl!: URL;

  let noticeYmlUrl!: URL;

  return {
    name: "asset-colocation",
    hooks: {
      "astro:config:setup"({ config, updateConfig }) {
        pagesDirUrl = new URL("./src/pages/", config.root);
        publicDirUrl = new URL(config.publicDir);
        outDirUrl = new URL(config.outDir);

        noticeYmlUrl = new URL("./src/data/notice.yml", config.root);

        updateConfig({
          // アセットのパスを収集するための remarkPlugin と rehypePlugin を追加
          markdown: {
            remarkPlugins: [
              [collectImagePaths, { usedImages }],
              [collectReferredPaths, { pagesDirUrl, referredPaths }],
            ],
            rehypePlugins: [
              rehypeRaw,
              [rehypeCollectImagePaths, { usedImages }],
              [rehypeCollectReferredPaths, { pagesDirUrl, referredPaths }],
            ],
          },
        });
      },
      async "astro:build:done"() {
        const noticeProcessor = unified()
          .use(remarkParse)
          .use(collectReferredPaths, { pagesDirUrl, referredPaths })
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeRaw)
          .use(rehypeCollectReferredPaths, { pagesDirUrl, referredPaths })
          .use(rehypeStringify); // ないと process できない

        // notice.yml だけは特別扱いして，そこが参照しているパスも収集する
        const noticeYml = await readFile(noticeYmlUrl, "utf-8");
        const notice = yaml.load(noticeYml) as {
          content: Record<"ja" | "en", string>;
        }[];
        for (const { content } of notice) {
          const value = Object.values(content).join("\n");
          const vfile = new VFile({ path: noticeYmlUrl, value });
          await noticeProcessor.process(vfile);
        }

        const files = await glob(`**/!(_)*{${extensions.join(",")}}`, {
          cwd: pagesDirUrl,
          nodir: true,
          absolute: true,
        });
        /** src/pages 以下に存在するアセットの一覧．File URL を文字列にしたもの．参照されたものはここから削除される */
        const assets = new Set(
          files.map((file) => pathToFileURL(file).toString()),
        );

        // 必要なアセットをコピーしつつ，コピーしたものは assets から削除する
        const copyFiles: { from: URL; to: URL }[] = [];
        for (const referredPath of referredPaths) {
          const ext = referredPath.slice(referredPath.lastIndexOf("."));
          if (!extensions.includes(ext)) continue;

          // もし src/pages にあるならこの File URL にあるはず
          const from = new URL(`.${referredPath}`, pagesDirUrl);
          if (assets.has(from.toString())) {
            // src/pages にあるのでコピーする
            const to = new URL(`.${referredPath}`, outDirUrl);
            copyFiles.push({ from: from, to });

            // 参照されたので assets から削除する
            assets.delete(from.toString());
            continue;
          }

          // もし public にあるならこの File URL にあるはず
          if (existsSync(new URL(`.${referredPath}`, publicDirUrl))) {
            // public にあるので何もしない
            continue;
          }

          // もしリダイレクトファイルがあるならこの File URL にあるはず
          if (existsSync(new URL(`.${referredPath}.md`, pagesDirUrl))) {
            // リダイレクトファイルがあるので何もしない
            continue;
          }

          // どこにもないので警告する
          console.warn(
            `[asset-colocation] "${referredPath}" に対応するアセットが見つかりません．`,
          );
        }

        // usedImages にあるものは assets から削除する
        for (const usedImage of usedImages) assets.delete(usedImage);

        // この時点で assets に残っているものは参照されていないので警告する
        for (const asset of assets) {
          console.warn(
            `[asset-colocation] "${asset}" はどのページでも使用されていません．このアセットは無視されます．`,
          );
        }

        // コピーする
        await Promise.all(
          copyFiles.map(async ({ from, to }) => {
            await mkdir(new URL("./", to), { recursive: true });
            await copyFile(from, to);
          }),
        );
      },
    },
  };
}

const ALLOWED_PREFIXES = ["http:", "https:", "./", "../", "@"];

interface CollectImagePathsOptions {
  usedImages: Set<string>;
}

function createFixAndCollect(
  { usedImages }: CollectImagePathsOptions,
  file: VFile,
) {
  const imagePaths = new Set(file.data.astro!.localImagePaths);
  function fixAndCollect(p: string) {
    if (!ALLOWED_PREFIXES.some((prefix) => p.startsWith(prefix))) {
      p = `./${p}`;
    }
    if (p.startsWith(".")) {
      imagePaths.add(p);
      const url = new URL(p, pathToFileURL(file.path));
      usedImages.add(url.toString());
    }
    return p;
  }
  return Object.assign(fixAndCollect, {
    [Symbol.dispose]() {
      file.data.astro!.localImagePaths = Array.from(imagePaths);
    },
  });
}

function collectImagePaths(options: CollectImagePathsOptions) {
  return (root: MdastRoot, file: VFile) => {
    using fixAndCollect = createFixAndCollect(options, file);

    // For MDX (remark-images-to-components)
    unistVisit(root, "mdxjsEsm", (node) => {
      if (!node.data?.estree) return;

      estreeVisit(node.data.estree, (node) => {
        if (node.type !== "ImportDeclaration") return;
        if (node.specifiers[0]?.type !== "ImportDefaultSpecifier") return;

        if (typeof node.source.value !== "string") return;
        node.source.value = fixAndCollect(node.source.value);
      });
    });

    // For md
    unistVisit(root, "image", (node) => {
      node.url = fixAndCollect(node.url);
    });
  };
}

function rehypeCollectImagePaths(options: CollectImagePathsOptions) {
  return (root: HastRoot, file: VFile) => {
    using fixAndCollect = createFixAndCollect(options, file);

    selectAll("img", root).forEach((img) => {
      if (typeof img.properties.src !== "string") return;
      img.properties.src = fixAndCollect(img.properties.src);
    });
  };
}

interface CollectReferredPathsOptions {
  pagesDirUrl: URL;
  referredPaths: Set<string>;
}

function createCollectReferredPaths(
  { pagesDirUrl, referredPaths }: CollectReferredPathsOptions,
  file: VFile,
) {
  const baseUrl = getReferrerUrl(pagesDirUrl, file);
  return function collect(p: string) {
    const url = new URL(p, baseUrl);
    if (!ORIGINS.includes(url.origin)) return;
    referredPaths.add(url.pathname);
  };
}

function getReferrerUrl(pagesDirUrl: URL, file: VFile) {
  const fileUrl = pathToFileURL(file.path);
  if (!fileUrl.href.startsWith(pagesDirUrl.href)) {
    // `.` で始まる相対パスは用いられない
    new URL(ORIGINS[0]);
  }
  const relativePath = fileUrl.href.slice(pagesDirUrl.href.length - 1);
  const httpPathname = relativePath.replace(/\/([^\/]+?)\.\w+$/, (_, name) =>
    // buid.format: "directory" のため
    name === "index" ? "/" : `/${name}/`,
  );
  return new URL(httpPathname, ORIGINS[0]);
}

function collectReferredPaths(options: CollectReferredPathsOptions) {
  return (root: MdastRoot, file: VFile) => {
    const collect = createCollectReferredPaths(options, file);

    unistVisit(root, "mdxJsxFlowElement", (node) => {
      if (node.data?.hName !== "a") return;
      if (typeof node.data.hProperties?.href !== "string") return;
      collect(node.data.hProperties.href);
    });

    unistVisit(root, "mdxJsxTextElement", (node) => {
      if (node.data?.hName !== "a") return;
      if (typeof node.data.hProperties?.href !== "string") return;
      collect(node.data.hProperties.href);
    });

    unistVisit(root, "link", (node) => {
      collect(node.url);
    });
  };
}

function rehypeCollectReferredPaths(options: CollectReferredPathsOptions) {
  return (root: HastRoot, file: VFile) => {
    const collect = createCollectReferredPaths(options, file);

    selectAll("a", root).forEach((a) => {
      if (typeof a.properties.href !== "string") return;
      collect(a.properties.href);
    });
  };
}
