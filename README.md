# utelecon (The Portal Site of Information Systems @ UTokyo)

https://utelecon.adm.u-tokyo.ac.jp/

uteleconは，オンライン授業やWeb会議に関する情報をワンストップで得られることを目指して東京大学が開設したウェブサイトです．詳しくは[uteleconについて](https://utelecon.adm.u-tokyo.ac.jp/about/)をご覧ください．

## Preview

[Node.js](https://nodejs.org) が必要です．v22の最新版（LTS）をインストールしてください．

- レポジトリをクローンしたら，まず`npm install`を実行します．
- プレビューを開始するには，`npm run dev`を実行します．`^C`で終了します．

## Frontmatter

Markdownファイルのフロントマターにかける設定は以下の通りです：

- `title`：ページのタイトル．表示されるタイトルになるほか，`<title>`要素の中身にもなり，Slack等でリンクを共有した際に表示される．必須．
- `description`：ページの説明．Slack等でリンクを共有した際に表示される．
- `h1`：ページの表示されるタイトル．`title`と異なり，Markdownを含めることができる．
- `toc`：`false`とすれば，ページの目次を表示しない．
- `sitemap`：`false`とすれば，[サイトマップ](https://utelecon.adm.u-tokyo.ac.jp/sitemap/)に含まれない．
- `author`：記事の著者をページ下部に表示する．
  - `affiliation`：所属．`author`を指定する場合は必須．`oes`とすると[OESの説明ページ](https://utelecon.adm.u-tokyo.ac.jp/about/oes)へのリンクが表示される．
  - `name`：著者名．任意．
- `breadcrumb`：ページ上部のパンくずリストを定義する．詳しくは[後述](#パンくずリストの表示)．
- `redirect_from`・`redirect_to`：リダイレクトの設定．詳しくは[後述](#redirect_from--redirect_to)．

## Scripts

- `npm run dev`：プレビューを開始する．`^C`で終了する．
- `npm run build`：ページをビルドし，`dist`に成果物を出力する．
- `npm run find-link`：引数で指定したページへのリンクをすべて標準出力する．
  - `dist`以下のHTMLファイルを読むため，あらかじめ`npm run build`してから実行する．
  - 例：`npm run find-link /oc/url`
- `npm run broken-link`：サイト内リンクで壊れているものをすべて標準出力する．
  - `dist`以下のHTMLファイルを読むため，あらかじめ`npm run build`してから実行する．
- `npm run unused-asset`：使われていないアセットをすべて標準出力する．
  - `dist`以下のHTMLファイルを読むため，あらかじめ`npm run build`してから実行する．

## How it works

[Astro](https://astro.build)という静的サイトジェネレータを用いています．特殊な機能について以下で説明します．

### `src/pages`以下のファイルを公開する

- 概要
  - `src/pages`以下のファイルはデフォルトで公開されます．画像等は`src/pages`以下に置いてください．
  - `src/pages`以下で，`_`で始まるファイルは公開されません．`src/pages`以下に置きたいが公開したくないファイルは，名前を`_`で始めてください．
  - `src/pages`以下で，MarkdownやMDXなどのHTMLに変換されるファイルは公開されません．
- 理由
  - 多くのページで，ページのソースとそこに含まれる画像を同じディレクトリに置いて管理しています．これらのページを移行する際に，`src/pages`以下のファイルをデフォルトで公開することで，画像等のパスを変更する必要がなくなり，またファイルと画像を同じディレクトリに置いたまま管理できます．
    - このような状態になっているのは，移行前のJekyllでルートディレクトリのファイルがデフォルトで公開されていたためです．
  - また`src/pages`以下には，`_`で始まる公開したくないファイルが多く存在しています．これらの中には近隣の別ファイルで利用されているものがあります．この機能により，関連するファイルを近くのディレクトリに置いたまま管理できます．
    - このような状態になっているのも，Jekyllで`_`で始まるファイルは公開されなかったためです．
- 実装
  - デフォルトで公開する機能は，[設定ファイル](astro.config.ts)で`publicDir: "src/pages"`とすることで実現しています．
  - `_`で始まるファイルとHTMLに変換されるファイルが公開されない機能は，[`CleanupIntegration.ts`](src/lib/CleanupIntegration.ts)で実現しています．ここでは，ビルド完了後に成果物が格納される`dist`フォルダから条件に一致するファイルを削除しています．

### Markdownのデフォルトレイアウト

- 概要
  - `src/pages`以下のMarkdown/MDXファイルにはデフォルトのレイアウト ([`@layouts/Layout.astro`](src/layouts/Layout.astro)) が適用されます．
  - `_`で始まるファイルにはデフォルトのレイアウトは適用されません．
- 理由
  - すべてのMarkdownファイルのフロントマターでレイアウトを指定するよりも，デフォルトのレイアウトを適用する方が簡潔です．
  - `_`で始まるファイルは他のファイルに埋め込まれることがあるため，デフォルトのレイアウトを適用すると入れ子になってしまいます．
- 実装
  - [`DefaultFrontmatterPlugin.ts`](src/lib/DefaultFrontmatterPlugin.ts)で実現しています．Astroでは，レイアウトをMarkdownのフロントマターで指定します．このプラグインはRemarkプラグインで，Markdownのパース時にフロントマターに`layout`を指定または上書きすることで，要件を満たしています．

### [IAL (Inline Attribute Lists)](https://kramdown.gettalong.org/syntax.html#block-ials)

- 概要
  - Markdown/MDX内で，`{:#id}`，`{:.class}`, `{:attribute="value"}`のような記法によって，変換されるHTMLの属性を追加することができます．
  - 元々はKramdownというMarkdown処理系の機能です．
  - 詳しくは[後述](#ial-inline-attribute-list)します．
- 理由
  - 多くのページで，そのソースに上の記法が使われています．移行にあたり，全てのページでこれを変更するのは非現実的でした．
    - このような状態になっているのは，JekyllでKramdownが利用されていたためです．
  - また，`id`属性や`class`属性を指定するためだけにHTMLを書くのは冗長です．
    - しかも，Astroの見出しの一覧を取得する機能を利用して目次を生成する際，MDXでは見出しがMarkdownの記法で記述されている必要があります．
- 実装
  - [`BlockIALPlugin.js`](src/lib/BlockIALPlugin.js)で実現しています．このプラグインはRemarkプラグインで，パーサーを拡張しています．

### `*`を用いた強調の単純化

- 概要
  - Remarkでは，`*`や`_`を用いて太字や斜体を指定する文法が複雑です．例えば`文章の**ここだけ**を太字にする`というMarkdownは太字にならず，`文章の **ここだけ** を太字にする`などとする必要があります．
  - この機能は，そのような複雑な挙動を排し，単純に`*`や`_`で囲まれた文字列を太字や斜体にします．
- 理由
  - 多くのページで，太字や斜体の指定はKramdownの単純な挙動に依存していました．これらを全て修正するのは非現実的でした．
    - このような状態になっているのは，JekyllでKramdownが利用されていたためです．
  - 日本語では単語間の区切りに空白を入れないため，Remarkの記法は不自然です．
- 実装
  - [`SimpleAttentionPlugin.js`](src/lib/SimpleAttentionPlugin.js)で実現しています．このプラグインはRemarkプラグインで，パーサーのうちトークナイザーの部分を上書きしています．

### リダイレクト

- 概要
  - Markdownのfrontmatterで`redirect_to`および`redirect_from`を指定することで，リダイレクトを実現できます．
  - 詳細は[後述](#redirect_from--redirect_to)します．
- 理由
  - 歴史的経緯により，元々存在したURLのページが削除され，別のURLのページに誘導すべき場合があります．この場合に，リダイレクトを1つのファイルで中央集権的に管理するよりも，各ページのfrontmatterで管理する方が簡潔です．
  - 多くのページで，リダイレクトの指定はfrontmatterによって行われていました．これらを全て修正するのは非現実的でした．
    - このような状態になっているのは，jekyll-redirect-fromが利用されていたためです．
- 実装
  - [`RedirectIntegration.ts`](src/lib/RedirectIntegration.ts)で実現しています．ここではAstroのビルド前に，`src/pages`内のファイルをすべて読んで設定ファイルの`redirects`に必要なエントリーを追加することで，Astroにリダイレクトに必要なページを生成させています．

### 外部リンクの処理

- 概要
  - 外部リンクには自動で`target="_blank" rel="noopener noreferrer"`が付与されます．
- 理由
  - 外部リンクは，別タブで開くのが一般的です．
  - すべての外部リンクに対してこの属性を明示的に付与するのは冗長であり，また忘れる可能性も高いため，自動で付与すべきです．
- 実装
  - [Astroのミドルウェア機能](https://docs.astro.build/ja/guides/middleware/)を用いて[`externalLinks.ts`](src/middleware/externalLinks.ts)で実現しています．ここでは，レンダリング後のHTMLを`dist`に保存する前に一度Rehypeでパースし，[`rehype-external-links`](https://github.com/rehypejs/rehype-external-links)を適用するという動作によりページを処理しています．
  - AstroではMarkdownやMDXの変換に後処理を追加することはできますが，同様にページを生成する`.astro`ファイルの変換を操作する手段は提供されていません．外部リンクはページの様々なところに現れうるため，それらを包括的に処理するべくこのような実装となっています．以前は生成された`.html`ファイルを追加で再処理することで実現していました．

### URL末尾のスラッシュについて

- 概要
  - `src/pages`以下のページファイルで，`src/pages/oc/index.mdx`や`src/pages/systems/index.md`などの`index`ファイルは，`/oc/`や`/systems/`などの`index`を除いた`/`で終わるURLにマップされます．
  - `src/pages`以下のページファイルで，`src/pages/oc/movies.mdx`や`src/pages/systems/wlan.md`などの`index`でないファイルは，`/oc/movies`や`/systems/wlan`などのファイル名そのままの（末尾に`/`がつかない）URLにマップされます．
- 理由
  - [前述](#srcpages以下のファイルを公開する)の通り，多くのページは`src/pages`以下でページのソースと画像をまとめて管理し，ソースの中ではファイルシステムの相対パスを用いて画像を参照しています．ファイルシステム上での相対パスとURL上での`/`で始まらない相対パスを対応させるには，上記のようなマッピングが必要です．
  - Astroには，このようなマッピングにする設定がありません．
- 実装
  - [`astro.config.ts`](astro.config.ts)で`format: "preserve"`を指定し，[`Layout.astro`](src/layouts/Layout.astro)で公開時のパスを状況に応じて書き換えることで実現しています．

### IAL (Inline Attribute List)

Markdown内で，ある要素に対してHTMLの属性を指定することができます．[Kramdownに実装されているもの](https://kramdown.gettalong.org/syntax.html#block-ials)をRemark Pluginとして移植しています．

例：見出しの`id`属性を指定する
```md
# 見出し
{:#id}

（本文）
```

例：画像の`class`属性を指定する
```md
![uteleconのロゴ](/assets/images/ogp.png){:.medium}
```

### `redirect_from` / `redirect_to`

`src/pages`内のMarkdownのfrontmatterに`redirect_from`/`redirect_to`を記述することで，リダイレクトするように設定できます．[jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from)にある機能を移植する形で実装しています．

例：`src/pages/docs/byod.md`に`redirect_from`を記述し，`/notice/byod`から`/docs/byod`にリダイレクトする
```md
---
title: 東京大学のBYOD方針
redirect_from:
  - /notice/byod
---

（ページ内容）
```
注
- `redirect_from`は文字列または文字列の配列で指定することができる
- 基本的に`/`で始まるパスを指定する

例：`src/pages/forms/entry_trouble.md`に`redirect_to`を記述し，`/forms/entry_trouble`から`/oc/join#form`にリダイレクトする
```md
---
redirect_to: "/oc/join#form"
---
```
注
- `redirect_to`は文字列で指定することができる
- 基本的に`/`で始まるパスを指定する
- リダイレクト先のページ内の特定の場所（例では`#form`）に飛ばしたい，外部のページに飛ばしたいなど，特別の事情がなければ`redirect_from`の方が良い

### 複数ページに緊急のお知らせを掲載する

`src/emergencies`内に以下のようなMarkdownファイルを配置することで，複数のページにまとめて緊急のお知らせを掲載することができます．掲載したいページのパスにマッチする正規表現を`pattern`に指定します．

例：`src/emergencies/LmsFailure.mdx`を作成して，`/utol/`以下のページに緊急のお知らせを掲載する
```md
---
pattern: "^\/utol\/"
---

<div class="box">
  UTOLの緊急のお知らせです．
</div>

```
注
- `pattern`には正規表現を文字列で指定してください．
- `^\/utol\/$`のようにすると，`/utol/`のみに緊急のお知らせを掲載できます．
- 同じページのパスに2つ以上の緊急のお知らせがマッチする場合，ファイル名の辞書順で同時に掲載されます．ファイル名は実際のサイトには表示されないため，適宜変更して問題ありません．

### パンくずリストの表示

`breadcrumb`をMarkdownのfrontmatterに記述することで，ページ上部にパンくずリストを表示することができます．

- `title`：パンくずリストのそのページ自身の部分のタイトル．`breadcrumb`を指定する場合は必須．親との差分だけを書く．
- `parent`：親ページ．任意．デフォルトは`../`．これを辿っていくことでパンくずリストを構成する．

ルート直下のページ（`/utokyo_account/`，`/oc/`など）を除き，パンくずリストを表示するには，`breadcrumb`を記述した上位階層の親ページが必要です．子ページのみに`breadcrumb`を記述することはできません．

#### 例：`/eccs/`以下のページにパンくずリストを表示する場合

- ルート直下の親ページ`/eccs/`（`src/pages/eccs/index.mdx`）
  ```md
  ---
  title: ECCS端末
  breadcrumb:
    title: ECCS端末
  ---
  ```
  - ルート直下のページにはパンくずリストが表示されません.
  - ただし,`breadcrumb`は子ページでパンくずリストを表示するために必須です．

- 子ページ（`parent`を指定しない場合）`/eccs/support/`（`src/pages/eccs/support/index.mdx`）
  ```md
  ---
  title: 問い合わせ先・窓口
  breadcrumb:
    title: 問い合わせ
  ---
  ```
  - `parent`はデフォルトで`../`なので，`/eccs/`が親ページになります．

- 子ページ（`parent`を指定することで，`/eccs/`を親ページにする場合）`/eccs/features/printing/`（`src/pages/eccs/features/printing/index.mdx`）
  ```md
  ---
  title: 印刷
  breadcrumb:
    title: 印刷
    parent: ../../
  ---
  ```

### ボタン・タブUIを利用したい場合

[多要素認証の初期設定手順](https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/initial/)や[サポート窓口](https://utelecon.adm.u-tokyo.ac.jp/support/)のページでは，ボタンとタブを用いたUIが利用されており，ユーザの選択によって表示内容を切り替えたり，ボタンをクリックして別のページに遷移したりすることができます．

これらの実装はコンポーネントとしての共通化が困難であるため，ページごとに個別に実装することとなっています．**ボタン・タブUIを利用したい場合は，既存の実装を参考に実装いただくか，Slackでご連絡ください．**

## その他のドキュメント (For developers)

- `@components`に関するドキュメント：[`src/components/README.md`](src/components/README.md)
- `@styles`に関するドキュメント：[`src/styles/README.md`](src/styles/README.md)