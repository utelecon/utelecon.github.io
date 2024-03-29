# @styles/README

ここでは，このフォルダにあるCSSについて説明します．CSSを加筆する際は，まずこの説明を読んでから作成してください．

このファイルの説明は，CSSに関する基礎知識を前提としています．

## `@layouts`および`@components/utils`との棲み分けについて

`@layouts`や`@components/utils`にある`.astro`ファイルには，そのコンポーネントだけに適用されるCSSを一緒に記述することができます．`@styles`にあるべきCSSと`@layouts`や`@components/utils`にあるべきCSSの棲み分けは，以下のようになります．

- `@styles`：以下の2種類のCSSを書きます．
  - グローバルに適用されるCSS：各ページのMarkdownの範囲に適用されるべきCSS
  - 多くのMarkdownで利用されるCSS：`.box`や`img.medium`などのユーティリティクラス
- `@layouts`：ヘッダーやフッターなど，各ページのMarkdownの範囲外でのみ利用されるCSSを書きます．
- `@components/utils`：各コンポーネントの中でのみ利用されるCSSを書きます．

## `components`以下で定義されているユーティリティクラスについて

`@styles/components`にはユーティリティクラスが定義されています．これらのクラスはグローバルに適用されており，Markdown内で適用することができます．その際には，IALの記法（[README](../../README.md)参照）を利用するとクラスを適用する際にわざわざHTMLを書く必要がなく便利です．

### `.box`系
記述ファイル：[`components/box.scss`](components/box.scss)

リンク等の強調表示などを目的として，要素に囲みを付けるために利用するクラスです．

- `.box`
  - 最も基本的な囲みです．文字色と同じ色の幅`1px`の枠線が付加されるほか，ブロック要素として扱われます．
  - 利用例：[`@pages/utokyo_account/index.mdx`](../pages/utokyo_account/index.mdx)
- `.box--important`
  - `.box`のスタイルに加えて，枠線の幅が`2px`に，文字が太字に，文字のサイズが`larger`になります．
  - 利用例：[`@pages/zoom/create_room/auth/index.md`](../pages/zoom/create_room/auth/index.md)
- `.box--alert`
  - `.box`のスタイルに加えて，枠線の幅が`2px`に，文字が太字に，文字色が`$red`になります．
  - 利用例：[`@pages/notice/20210403-utnet.md`](../pages/notice/20210403-utnet.md)
- `strong.box`, `b.box`
  - `strong`要素や`b`要素に`.box`クラスを付与すると，枠線の幅が`2px`に，文字が太字になります．
  - `.box`を付与しているため，これらはブロック要素として扱われます．
  - 利用例：[`@components/ja/systems/utol/Login.mdx`](../components/ja/systems/utol/Login.mdx)

#### 枠線と文字を太くする場合の実装
現在の実装では，`strong`と`b`以外の要素に対して「枠線幅`2px`」と「太字」のスタイルのみを適用するクラスはありません．そのため，文字サイズや文字色を変えずにこれらのスタイルを適用する目的で，本来であれば`div`要素や`p`要素を用いるべきところで，`strong`要素や`b`要素に`.box`クラスを付与するような実装が多くの箇所で行われています．

### `.cards`
記述ファイル：[`components/card.scss`](components/card.scss)

カード表示のためのクラスです．このクラスが付与された要素を直接の親にもつ`li`要素または`a`要素は，枠線や太字等のスタイルが適用されたブロック要素としてグリッド状に配置されます．

基本的にトップページでのみ用いられていますが，[`@pages/utokyo_vpn/index.md`](../pages/utokyo_vpn/index.md)など複数のリンクをまとめて強調表示したい場合にも利用例があります．

- `.cards`
  - 利用例：[`@pages/index.mdx`](../pages/index.mdx)
- `.cards + h2`
  - `h2`要素に対してこのクラスを付与すると，上方向に`margin`が適用されます．

### `img`系
記述ファイル：[`components/img.scss`](components/img.scss)

画像のスタイルを設定するためのクラスです．

なお，以下のクラスを付与しない場合，`img`要素はデフォルトでブロック要素となり，横幅の上限が`100%`，縦幅の上限が`40rem`となります．

#### `img`要素に対するクラス
- `img.large`, `img.medium`, `img.small`, `img.extra-small`
  - 画像の大きさを調節することができます．
    - `.large`：画像の横幅が必ず`100%`となります．
    - `.medium`：画像の横幅の上限が`40rem`となります．
    - `.small`：画像の横幅の上限が`30rem`，縦幅の上限が`30rem`となります．
    - `.extra-small`：画像の横幅の上限が`15rem`，縦幅の上限が`15rem`となります．
- `img.inline`
  - `img`要素をインライン要素にします．
- `img.icon`
  - `img`要素をインライン要素にし，画像の縦幅の上限を`1.5em`とします．加えて垂直方向の配置（`vertical-align`）が`middle`になります．
  - UIの説明などを目的として文中にアイコンの画像等を挿入する際に使用します．
- `img.center`
  - 画像を中央揃えで配置します．
- `img.border`
  - 画像に枠線が付加されます．また，`.border`クラスの付いた`img`要素が隣接する場合には，2番目以降の要素に`margin-top`が設定されます．

#### `img`要素の親要素に対するクラス
- `figure.center`
  - `figure`要素を中央揃えで配置します．
  - 利用例：[`@pages/utokyo_vpn/index.md`](../pages/utokyo_vpn/index.md)
- `.gallery`
  - 主に`figure`要素に対して設定するクラスです．子要素の`img`要素を横方向に並べて表示することができます．
  - 利用例：[`@pages/utokyo_vpn/index.md`](../pages/utokyo_vpn/index.md)

### `ol`, `ul`系
記述ファイル：[`components/lists.scss`](components/lists.scss)

箇条書きや番号付きリストに対してスタイルを設定するためのクラスです．

- `ul.gap`, `ol.gap`
  - 子要素の隣接する`li`要素に対して上下方向に`1em`の`margin`を設定します．
  - 利用例：[`@components/en/systems/utokyo_wifi/index.mdx`](../components/en/systems/utokyo_wifi/index.mdx)
- `ol.bracket`
  - 番号付きリストのフォーマットが`[1]`, `[2]`, `[3]`, ... に変更されます．
  - 特別な理由がない限り使用は推奨されません．

### MFA系
記述ファイル：[`components/mfa.scss`](components/mfa.scss)

「UTokyo Account多要素認証の初期設定手順」のページにおいて番号付きリストに独自のフォーマットを適用するためのクラスです．

このクラスは実装の変更に伴い今後使用されなくなる予定で，現在では`/en/utokyo_account/mfa/initial/`でのみ利用されています．

### `.top__systems`
記述ファイル：[`components/top.scss`](components/top.scss)

- `.top__systems`
  - 子要素を2段組で配置します．
  - [`@pages/index.mdx`](../pages/index.mdx) の「東京大学のシステム」セクションでのみ使用されています．

### その他
記述ファイル：[`components/utils.scss`](components/utils.scss)

- `.alert`
  - 文字色が`$red`になります．
- `.center`
  - 文字の配置を中央揃えにします．
- `.iframe-container`
  - [`@pages/oc/rooms.mdx`](../pages/oc/rooms.mdx)で`iframe`要素の親要素に対して用いられているクラスです．
