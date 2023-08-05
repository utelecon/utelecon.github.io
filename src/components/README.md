## [`types.ts`](types.ts)

- `Lang`：uteleconポータルサイトが対応する言語です．日本語 (`"ja"`) と英語 (`"en"`) です．
- `Variant`：`systems/`以下のコンポーネントが使われるページの種類です．
  - `oc`：[`/oc/`](../pages/oc/index.mdx)です．
  - `faculty_members`：[`/faculty_members/`](../pages/faculty_members/index.mdx)です．
  - `individual`：各サービスの個別ページです．[`/utokyo_account/`](../pages/utokyo_account/index.mdx)などです．

## 条件分岐コンポーネント

条件によって表示される内容を変えるコンポーネントです．**三項演算子などを回避するために利用します**．**特に`.mdx`では三項演算子等を利用すると非常に読みづらくなる**ため，積極的に利用してください．これらのコンポーネントは言語に依存しません（prop `lang`を取りません）．

### [`If`](If.astro)

利用例：[`systems/utokyo_account/ChangePassword.mdx`](systems/utokyo_account/ChangePassword.mdx)

prop `cond`がtrueの場合だけ中身の要素が表示されます．また，`slot="else"`とした要素がある場合，それらは prop `cond`がfalseの場合だけ表示されます．

```jsx
<If cond={props.variant === "oc"}>
  真の場合の内容
</If>
```

```jsx
<If cond={props.variant === "oc"}>
  <Fragment>真の場合の内容</Fragment>
  <Fragment slot="else">偽の場合の内容</Fragment>
</If>
```

注：`.mdx`の場合，JSXの中身もMarkdownとして解釈されます．また，Markdownでは単にテキストを書いた場合は`<p>`要素として解釈されます．よって，1つ目の例で`props.variant === "oc"`のときは以下のHTMLが出力されます：
```html
<p>真の場合の内容</p>
```

一方，`Fragment`はJSXで用いられる「空のタグ」で，JSXとして認識されますが，HTMLとしては何も出力されません．よって，2つ目の例で`props.variant === "oc"`のときは以下のHTMLが出力されます：
```html
真の場合の内容
```

### [`Switch`](Switch.astro)

利用例：[`systems/utokyo_account/ChangePassword.mdx`](systems/utokyo_account/ChangePassword.mdx)

prop `variant`の値によって，表示する要素が切り替わります．JavaScriptの`switch`と違い，**予め決められた値でしか使えません**．値に対応する`slot="<variant>"`の要素を指定しない場合，何も表示されません．

```jsx
<Switch variant={props.variant}>
  <Fragment slot="oc">学生向けの内容</Fragment>
  <Fragment slot="faculty_members">教職員向けの内容</Fragment>

  - 学生向けの内容
  - 教職員向けの内容
  {:slot="individual"}
</Switch>
```

注：`BlockIALPlugin`により，`.md`および`.mdx`では任意の属性を上のようなsyntaxで指定できます．これは`.astro`で用いられる`slot`属性も含まれます．よって，上の例で`props.variant === "oc"`のときは以下のHTMLが出力されます：
```html
<ul>
  <li>学生向けの内容</li>
  <li>教職員向けの内容</li>
</ul>
```

## `@components/systems` (`@components/en/systems`) にあるコンポーネント

`@components/systems`の直下には，システム名を冠するフォルダだけが置いてあり，それぞれのフォルダには以下のようなコンポーネントが定義されています．これらのコンポーネントは言語ごとに別々に定義されています（prop `lang`を取りません）．フォルダ名・ファイル名やコンポーネントの構造は言語間で共通です．

### 「基本単位」

`@components/systems`にあるコンポーネント群のうち，1つの`<ol>`を含むコンポーネントが「基本単位」のコンポーネントです．**`@components/systems`は，システム等の基本的な手順の説明を，この基本単位で分割して整理・共通化することを目的としています**．例えば[`systems/utokyo_account/ChangePassword.mdx`](systems/utokyo_account/ChangePassword.mdx)は，1つの`<ol>`で「UTokyo Accountのパスワードを変更する」という作業の手順を説明しており，手順を複数のページで掲載するために利用されています．

### `index.mdx`

**各システムの`index.mdx`は，基本単位のコンポーネントを1つの`<ul>`に束ね，`/oc/`で表示することを目的としています**．さらに，`/oc/#important`で説明されるシステムの`index.mdx`は，後述の[`Important`](#important)を利用して，`/oc/#important`と`/oc/#others`で説明を共通化する責務をも帯びています．

### その他

その他，後述の[`HelpItem`](#helpitem)を利用した共通化が必要な場合など，基本単位よりも細かいコンポーネントを作成し，基本単位のコンポーネントで利用することがあります．

## `@components/systems`で利用するコンポーネント

`@components/systems`のコンポーネントを作るために利用するコンポーネントです．コンポーネントの作成を簡潔にするだけでなく，ポータルサイトを読む利用者が不要な違和感なく読めるように見え方を統一する役割もあります．積極的に利用してください．これらのコンポーネントは言語間で共通化されています（prop `lang`を取ります）．

### [`Important`](Important.astro)

利用例：[`systems/utokyo_account/index.mdx`](systems/utokyo_account/index.mdx)

`/oc/#important`と`/oc/#others`で共通するコンポーネントを作るために利用します．`lang`を指定してください．
- `variant === "oc"`かつ`short`がtrueの場合，`slot="important"`の要素だけが表示されます．
- `variant === "oc"`かつ`short`がfalseの場合，`slot="important"`の要素は「再掲」と表示されて折りたたまれ，他の要素は表示されます．
- `variant === "oc"`でない場合，`slot="important"`の要素と他の要素が表示されます．

**`slot="important"`以外の要素は`<li>`に包む必要があります**．**`slot="important"`の要素は`<li>`に包まないでください**．

### [`Help`](Help.astro)

利用例：[`systems/eccs_cloud_email/Access.mdx`](systems/eccs_cloud_email/Access.mdx)

手順の末尾にトラブルシュート情報を折りたたみで表示するために利用します．`lang`を指定してください．`support`がtrueの場合，中身の後にサポート窓口に案内する文章が表示されます．

### [`HelpItem`](HelpItem.astro)

利用例：[`systems/zoom/SigninBrowserHelpExisting.mdx`](systems/zoom/SigninBrowserHelpExisting.mdx)

トラブルシュート情報の1項目を表示するコンポーネントを作るために利用します．手順の末尾にまとめて項目を表示する場合と，手順の途中に折りたたみで表示する場合を出し分ける機能があります．`lang`を指定してください．
`slot="problem"`に想定される問題を，`slot="solution"`にその解決方法を書いてください．**いずれもインライン要素として渡すため，`Fragment`を利用してください**．
その他の中身は，折りたたみの場合だけ表示されます．

### [`Support`](Support.astro)

利用例：[`systems/utokyo_account/ChangePassword.mdx`](systems/utokyo_account/ChangePassword.mdx)

サポート窓口に案内する文章を表示するために利用します．`lang`を指定してください．`show`がtrueの場合のみ表示されます．

## 特殊なコンポーネント

### [`Markdown`](Markdown.astro)

[`src/data`](../data)以下，またはフロントマターにMarkdownで定義されているデータを表示するために利用します．prop `content`にMarkdownを渡すと，それがHTMLに変換されて表示されます．**コンポーネントからコンポーネントにマークアップを渡すために利用しないでください**．代わりに，
- `.mdx`のコンポーネントに渡す場合：`props`に`() => any`の関数を渡して，コンポーネントとして呼び出してください．
  - 例：[`systems/utokyo_wifi/Apply.mdx`](systems/utokyo_wifi/Apply.mdx)
- `.astro`のコンポーネントに渡す場合：`slot`を利用してください．
  - 例：[`HelpItem`](HelpItem.astro)

### レイアウトで利用されるコンポーネント

[`@layouts/Layout.astro`](../layouts/Layout.astro)がuteleconのページ全体のレイアウトを定義しています．ここで利用するためのコンポーネントが複数定義されています．これらのコンポーネントは日英共通です（prop `lang`を持ちます）．
- [`Header`](Header/index.astro)（ヘッダー）
- [`Footer`](Footer/index.astro)（フッター）
- [`Toc`](Toc.astro)（目次）
- [`Author`](Author.astro)（文責）

### 特定のページで利用されるコンポーネント

- [`Courses`](Courses.mdx)：`/online/courses/`と`/faculty_members/`で利用します．言語ごとに別々に定義されています．
- [`GoodPractice`](GoodPractice.tsx)：`/good-practice/`で利用します．日本語版しかありません．
- [`Notice`](Notice.astro)：`/`と`/notice/`で利用します．言語間で共通です．
- [`Sitemap`](Sitemap.astro)：`/sitemap/`で利用します．言語間で共通です．

### 通知系コンポーネント

- [`Emergency`](Emergency.mdx)：緊急のお知らせを表示するために利用します．お知らせは`/`と`/support/`に表示されます．日本語版しかありません．
- [`SlackNotice`](articles/SlackNotice.mdx)：2022年9月以前に書かれた`/articles/`以下のSlack関連記事に表示される，Slackの利用に関する注意書きです．言語ごとに別々に定義されています．
