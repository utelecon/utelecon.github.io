# @styles/README

ここでは，このフォルダにあるCSSについて説明します．CSSを加筆する際は，まずこの説明を読んでから作成してください．

このファイルの説明は，CSSに関する基礎知識を前提としています．

このファイルは工事中です．

## `@layouts`および`@components/utils`との棲み分けについて

`@layouts`や`@components/utils`にある`.astro`ファイルには，そのコンポーネントだけに適用されるCSSを一緒に記述することができます．`@styles`にあるべきCSSと`@layouts`や`@components/utils`にあるべきCSSの棲み分けは，以下のようになります．

- `@styles`：以下の2種類のCSSを書きます．
  - グローバルに適用されるCSS：各ページのMarkdownの範囲に適用されるべきCSS
  - 多くのMarkdownで利用されるCSS：`.box`や`img.medium`などのユーティリティクラス
- `@layouts`：ヘッダーやフッターなど，各ページのMarkdownの範囲外でのみ利用されるCSSを書きます．
- `@components/utils`：各コンポーネントの中でのみ利用されるCSSを書きます．

## `components`以下で定義されているユーティリティクラスについて

`@styles/components`にはユーティリティクラスが定義されています．これらのクラスはグローバルに適用されており，Markdown内で適用することができます．

### `.box`系

- `.box`
- `.box--important`
- `.box--alert`
- `strong.box`, `b.box`

### `.cards`

- `.cards`
- `.cards + h2`

### `img`系

- `img.large`, `img.medium`, `img.small`
- `img.inline`
- `img.logo`
- `img.center`
- `img.border`
- `img.shadow`

### `figure`系

- `figure`
- `figcaption`

### `.gallery`


