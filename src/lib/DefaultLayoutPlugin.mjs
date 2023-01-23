/**
 * https://github.com/withastro/astro/issues/397#issuecomment-1236231783
 * @type {import('unified').Plugin<[options: { defaultLayout: string }]>}
 */
export default function defaultLayoutPlugin({ defaultLayout }) {
  return function (_, file) {
    file.data.astro.frontmatter.layout ??= defaultLayout;
  };
}
