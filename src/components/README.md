# @components/README

ここでは，`@components`（このフォルダ，`src/components`のことです）にあるコンポーネントについて説明します．コンポーネントを作成する際は，まずこの説明を読んでから作成してください．

コンポーネントはHTMLの要素を返す関数で，複数ページに記述されている内容を共通化したり，そのようなコンポーネントを作るために使われたりします．またコンポーネントには，言語（日本語と英語）に依存しないもの，言語をpropで受け取って出し分けるもの，言語ごとに別々に定義されているものの3種類があります．

このファイルの説明は，Markdownに関する基礎知識に加え，以下の2つのドキュメントを読んでいることを前提としています：
- [What is MDX?](https://mdxjs.com/docs/what-is-mdx/)：MDXに関する基本的な説明
- [スロット](https://docs.astro.build/ja/core-concepts/astro-components/#スロット)：Astroのコンポーネントに子要素を埋め込む「スロット」に関する説明

## コンポーネントを作るために使うコンポーネント等

### [`types.ts`](types.ts)

以下の2つの型（コンポーネントがどのようなpropを受け取るかという情報）は複数のコンポーネントの引数として利用されるため，このファイルで定義したものをそれぞれのコンポーネントで参照しています．

- `Lang`：uteleconポータルサイトが対応する言語です．日本語 (`"ja"`) と英語 (`"en"`) です．
- `Variant`：`systems/`以下のコンポーネントが使われるページの種類です．
  - `oc`：[`/oc/`](../pages/oc/index.mdx)です．
  - `faculty_members`：[`/faculty_members/`](../pages/faculty_members/index.mdx)です．
  - `individual`：各サービスの個別ページです．[`/utokyo_account/`](../pages/utokyo_account/index.mdx)などです．

### 条件分岐コンポーネント

条件によって表示される内容を変えるコンポーネントです．**三項演算子などを回避するために利用します**．**特に`.mdx`では三項演算子等を利用すると非常に読みづらくなる**ため，積極的に利用してください．これらのコンポーネントは言語に依存しません（prop `lang`を取りません）．[`utils`](utils)にあります．

#### [`If`](utils/If.astro)

利用例：[`ja/systems/utokyo_account/ChangePassword.mdx`](ja/systems/utokyo_account/ChangePassword.mdx)

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

#### [`Switch`](utils/Switch.astro)

利用例：[`ja/systems/utokyo_account/ChangePassword.mdx`](ja/systems/utokyo_account/ChangePassword.mdx)

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

注：`BlockIALPlugin`により，`.md`および`.mdx`では任意の属性を上のようなsyntaxで指定できます．これは`.astro`で用いられる`slot`属性も含まれます．よって，上の例で`props.variant === "individual"`のときは以下のHTMLが出力されます：
```html
<ul>
  <li>学生向けの内容</li>
  <li>教職員向けの内容</li>
</ul>
```

### `@components/{ja,en}/systems`で利用するコンポーネント

`@components/{ja,en}/systems`のコンポーネントを作るために利用するコンポーネントです．コンポーネントの作成を簡潔にするだけでなく，ポータルサイトを読む利用者が不要な違和感なく読めるように見え方を統一する役割もあります．積極的に利用してください．これらのコンポーネントは言語間で共通化されています（prop `lang`を取ります）．[`utils`](utils)にあります．

#### [`Important`](utils/Important.astro)

利用例：[`ja/systems/utokyo_account/index.mdx`](ja/systems/utokyo_account/index.mdx)

`/oc/#important`と`/oc/#others`で共通するコンポーネントを作るために利用します．`lang`を指定してください．
- `variant === "oc"`かつ`short`がtrueの場合，`slot="important"`の要素だけが表示されます．
- `variant === "oc"`かつ`short`がfalseの場合，`slot="important"`の要素は「再掲」と表示されて折りたたまれ，他の要素は表示されます．
- `variant === "oc"`でない場合，`slot="important"`の要素と他の要素が表示されます．

**`slot="important"`以外の要素は`<li>`に包む必要があります**．**`slot="important"`の要素は`<li>`に包まないでください**．

#### [`Help`](utils/Help.astro)

利用例：[`ja/systems/eccs_cloud_email/Access.mdx`](ja/systems/eccs_cloud_email/Access.mdx)

手順の末尾にトラブルシュート情報を折りたたみで表示するために利用します．`lang`を指定してください．`support`がtrueの場合，中身の後にサポート窓口に案内する文章が表示されます．

#### [`HelpItem`](utils/HelpItem.astro)

利用例：[`ja/systems/zoom/SigninBrowserHelpExisting.mdx`](ja/systems/zoom/SigninBrowserHelpExisting.mdx)

トラブルシュート情報の1項目を表示するコンポーネントを作るために利用します．手順の末尾にまとめて項目を表示する場合と，手順の途中に折りたたみで表示する場合を出し分ける機能があります．`lang`を指定してください．
`slot="problem"`に想定される問題を，`slot="solution"`にその解決方法を書いてください．**いずれもインライン要素として渡すため，`Fragment`を利用してください**．
その他の中身は，折りたたみの場合（`type="details"`）および通常の場合（`type="default"`）だけ表示されます．

#### [`Support`](utils/Support.astro)

利用例：[`ja/systems/utokyo_account/ChangePassword.mdx`](ja/systems/utokyo_account/ChangePassword.mdx)

サポート窓口に案内する文章を表示するために利用します．`lang`を指定してください．`show`がtrueの場合のみ表示されます．

### 特殊なコンポーネント

#### [`Markdown`](utils/Markdown.astro)

利用例：[`pages/Notice.astro`](pages/Notice.astro)

[`@data`](../data)以下，またはフロントマターにMarkdownで定義されているデータを表示するために利用します．prop `content`にMarkdownを渡すと，それがHTMLに変換されて表示されます．**コンポーネントからコンポーネントにマークアップを渡すために利用しないでください**．代わりに，
- `.mdx`のコンポーネントに渡す場合：`props`に`JSX.Element`を渡して，`{props.hoge}`として埋め込んでください．
  - 例：[`systems/utokyo_wifi/Apply.mdx`](systems/utokyo_wifi/Apply.mdx)
- `.astro`のコンポーネントに渡す場合：`slot`を利用してください．
  - 例：[`HelpItem`](HelpItem.astro)

## 複数ページで記述されている内容を共通化するコンポーネント

### 各システムの基本的な手順を説明するコンポーネント

`@components/{ja,en}/systems`の直下には，システム名を冠するフォルダだけが置いてあり，それぞれのフォルダには以下のようなコンポーネントが定義されています．これらのコンポーネントは言語ごとに別々に定義されています（prop `lang`を取りません）．フォルダ名・ファイル名やコンポーネントの構造は言語間で共通です．

#### 「基本単位」

`@components/{ja,en}/systems`にあるコンポーネント群のうち，1つの`<ol>`を含むコンポーネントが「基本単位」のコンポーネントです．**`@components/{ja,en}/systems`は，システム等の基本的な手順の説明を，この基本単位で分割して整理・共通化することを目的としています**．よって，原則として基本単位1つを1ファイルで記述します．例えば[`ja/systems/utokyo_account/ChangePassword.mdx`](ja/systems/utokyo_account/ChangePassword.mdx)は，1つの`<ol>`で「UTokyo Accountのパスワードを変更する」という作業の手順を説明しており，手順を複数のページで掲載するために利用されています．

#### `index.mdx`

**各システムの`index.mdx`は，基本単位のコンポーネントを1つの`<ul>`に束ね，`/oc/`で表示することを目的としています**．さらに，`/oc/#important`で説明されるシステムの`index.mdx`は，後述の[`Important`](#important)を利用して，`/oc/#important`と`/oc/#others`で説明を共通化する責務をも帯びています．

#### その他

その他，後述の[`HelpItem`](#helpitem)を利用した共通化が必要な場合など，基本単位よりも細かいコンポーネントを作成し，基本単位のコンポーネントで利用することがあります．

### `Courses.md`

`@components/{ja,en}/Courses.md`，授業の形態について説明するコンポーネントです．`/faculty_members/`および`/online/courses/`で利用されています．言語ごとに別々に定義されています（prop `lang`を取りません）．

### `Emergency.mdx`

`@components/Emergency.mdx`は，緊急時に広い範囲に影響が及ぶ不具合が発生した場合などに主要なページに掲示する内容を記述するコンポーネントです．`/`および`/supports/`に掲示されます．現在は日本語しか存在しません（英語ページでも日本語の同じ内容が掲示されます）．

### `InformationSecurity.mdx`

`@components/{ja,en}/InformationSecurity.mdx`は，情報セキュリティ教育に関する情報を記述するコンポーネントです．複数のシステムが情報セキュリティ教育の受講を必須としているため，それらのページに記述されている説明を共通化するために利用されています．言語ごとに別々に定義されています（prop `lang`を取りません）．

### `InPreparation.mdx`

`@components/{ja,en}/InPreparation.mdx`は，準備中のページを示すコンポーネントです．複数のページを一度に作成する際に，パンくずリストの生成に失敗したり，内部リンクが`404 Not Found`になったりすることを防ぐため，仮のページを作る場合に使われます．言語ごとに別々に定義されています（prop `lang`を取りません）．

### `WwweccEol.astro`
`@components/{ja,en}/WwweccEol.astro`は，ECCSウェブサイトの閉鎖に伴うuteleconへのコンテンツ移行の旨を示すための特別なコンポーネントです．言語ごとに別々に定義されています（prop `lang`を取りません）．
