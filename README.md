# utelecon (UTokyo Portal for Teleconference Tools)

https://utelecon.adm.u-tokyo.ac.jp/

## How it works

[Astro](https://astro.build)という静的サイトジェネレータを用いている．[Node.js](https://nodejs.org/)ベースで動作する．

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
- Markdown等のfrontmatterで`redirect_to`および`redirect_from`が利用できる
- 外部リンクには自動で`target="_blank" rel="noopener noreferrer"`が付与される
- `src/pages/hoge/fuga.md`は`/hoge/fuga`に，`src/pages/hoge/fuga/index.md`は`/hoge/fuga/`にマップされる

## IAL (Inline Attribute List)

Markdown内で，ある要素に対してHTMLの属性を指定することができる．[Kramdownに実装されているもの](https://kramdown.gettalong.org/syntax.html#block-ials)をRemark Pluginとして移植している．

例：見出しの`id`属性を指定する
```md
# 見出し
{:#id}

（本文）
```

例：画像の`class`属性を指定する
```md
![代替テキスト](画像のURL){:.class}
```

