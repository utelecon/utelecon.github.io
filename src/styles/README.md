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
記述ファイル：[`components/box.scss`](components/box.scss)

リンク等の強調表示などを目的として，要素に囲みを付けるために利用するクラスです．

- `.box`
  - 最も基本的な囲みです．文字色と同じ色の幅`1px`の枠線が付加されるほか，ブロック要素として扱われます．
  - 利用例：[`pages/utokyo_account/index.mdx`](pages/utokyo_account/index.mdx)
- `.box--important`
  - `.box`のスタイルに加えて，枠線の幅が`2px`に，文字が太字に，文字のサイズが`larger`になります．
  - 利用例：[`pages/zoom/create_room/auth/index.md`](pages/zoom/create_room/auth/index.md)
- `.box--alert`
  - `.box`のスタイルに加えて，枠線の幅が`2px`に，文字が太字に，文字色が`$red` (`#cf4b00`) になります．
  - 利用例：[`pages/notice/20210403-utnet.md`](pages/notice/20210403-utnet.md)
- `strong.box`, `b.box`
  - `strong`要素や`b`要素に`.box`クラスを付与すると，枠線の幅が`2px`に，文字が太字になります．
  - `.box`を付与しているため，これらはブロック要素として扱われます．
  - 利用例：[`components/ja/systems/utol/Login.mdx`](components/ja/systems/utol/Login.mdx)

#### 枠線と文字を太くする場合の実装
現在の実装では，`strong`と`b`以外の要素に対して「枠線幅`2px`」と「太字」のスタイルのみを適用するクラスはありません．そのため，文字サイズや文字色を変えずにこれらのスタイルを適用する目的で，本来であれば`div`要素や`p`要素を用いるべきところで，`strong`要素や`b`要素に`.box`クラスを付与するような実装が多くの箇所で行われています．

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


