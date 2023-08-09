# utelecon (UTokyo Portal for Teleconference Tools)

https://utelecon.adm.u-tokyo.ac.jp/

uteleconは，オンライン授業やWeb会議に関する情報をワンストップで得られることを目指して東京大学が開設したウェブサイトです．詳しくは[uteleconについて](https://utelecon.adm.u-tokyo.ac.jp/about/)をご覧ください．

## Preview

[Node.js](https://nodejs.org) が必要です．v18の最新版（LTS）をインストールしてください．

```sh
npm install
npm run dev
```

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
- `redirect_from`・`redirect_to`：リダイレクトの設定．詳しくは[後述](#redirect_from--redirect_to)．

## How it works

[Astro](https://astro.build)という静的サイトジェネレータを用いています．

特殊な設定は以下：
- `src/pages`以下のファイルはデフォルトで公開される
  - 画像等は`src/pages`以下に置く
  - `publicDir: "src/pages"`としている
- サイトページになるMarkdownファイル (`.md`, `.markdown`, `.mdx`) にはデフォルトレイアウトが適用される
- `src/pages`以下の`_`で始まるファイルは公開されない
  - Markdownのデフォルトレイアウトも適用されない
- `{:#id}`，`{:.class}`, `{:attribute="value"}`のような記法 ([IAL](https://kramdown.gettalong.org/syntax.html#block-ials)) が利用できる（後述）
- `**`による太字等のルールは単純化されている
  - `**`で囲まれた文字列は種類を問わず太字になる
- Markdown等のfrontmatterで`redirect_to`および`redirect_from`が利用できる（後述）
- 外部リンクには自動で`target="_blank" rel="noopener noreferrer"`が付与される
- `src/pages/hoge/fuga.md`は`/hoge/fuga`に，`src/pages/hoge/fuga/index.md`は`/hoge/fuga/`にマップされる

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
- リダイレクト先のページ内の特定の場所（例では`#form`）に飛ばしたいなど，特別の事情がなければ`redirect_from`の方が良い

## For developers

`@components`に関するドキュメントが[`src/components/README.md`](src/components/README.md)にあります．
