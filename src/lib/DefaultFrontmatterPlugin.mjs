/**
 * https://github.com/withastro/astro/issues/397#issuecomment-1236231783
 * @type {import('unified').Plugin<[options: { layout: string }]>}
 */
export default function defaultFrontmatterPlugin({ layout }) {
  return function (_, file) {
    file.data.astro.frontmatter.layout ??= layout;
    const en = file.path.startsWith("src/pages/en");
    file.data.astro.frontmatter.lang ??= en ? "en" : "ja";
  };
}
