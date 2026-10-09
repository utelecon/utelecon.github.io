# IgnoreAssetsIntegration

Astroのルート構築処理内で `src/pages/` 以下に配置された各種アセットを無視させ、非対応のファイル形式（ `Unsupported file type` ）の警告を抑制するインテグレーションです。
Astroの内部実装に大きく依存している関係上、利用する **Astroのバージョンを変更する際はパッチバージョンであっても慎重に動作確認** を行ってください。

## 経緯

Astroは `src/pages/` ディレクトリをrootとしたパスがWebサイトのパスとなるように[ルーティングを構築](https://docs.astro.build/ja/guides/routing/)しています。
ここに置かれるファイルはWebページとして機能するHTMLやMarkdownが想定されており、画像ファイル等は無視されます。

uteleconでは画像ファイルやリンクするPDFなどのアセットをMarkdown等のドキュメントと同じディレクトリに配置し、相対パスで指定することを基本的な方針としていますが、これはAstroの想定とは異なるため、アセットに対し非対応のファイル形式という警告が大量に表示され、重要な警告を見逃しやすくなっています。
このインテグレーションはこうした事態を回避するための策として作成されました。

## 動作確認方法

「[実装について](#実装について)」の記述を念頭に、Astro本体の関連ファイルに大きな処理の変更がないか確認してください。
以下の点を確認してください。
- `dev` および `build` のAstroコマンドが正常に実行・完了できる
- ビルド成果物（ `dist/` ディレクトリ以下）が同じ
    - `diff` コマンドに `--recursive | -r` オプションを渡すことで確認できます。
- アセットへの相対リンクが正しく機能する
    - 画像以外のアセットの多いページとしては `/online/shared/` などがあります。
    - 特に `/articles/` や `/events/` は歴史的事情から複雑なリンク構造をしたページが多いため注意してください。

また、インテグレーションの呼び出し時にAstroのバージョン確認を行っているので、動作確認のとれたバージョン範囲を示す `TESTED_ASTRO_VERSION_RANGE` を修正してください。

## 実装について

Astroのルート構築は基本的に [`core/routing/manifest/create.ts`](https://github.com/withastro/astro/blob/main/packages/astro/src/core/routing/manifest/create.ts) の中で行われます。
Astroはルート構築を詳細にカスタマイズする方法を提供していないため、このインテグレーションでは内部実装をハックする形で警告を抑制しています。

`create.ts` のエントリポイントである関数 `createRoutesList()` の中では、まずファイルベースルートが `createFileBasedRoutes()` 関数によって構築されます。
このとき `src/pages/` 以下にある非対応の形式のファイルに対し警告が表示されますが、「対応している形式」は [`astro:config:setup` フックに渡される引数の隠しメソッド `addPageExtension()` で追加することができ](https://github.com/withastro/astro/blob/main/packages/astro/src/integrations/hooks.ts)、これによって警告が抑制されます。

これだけだと「対応している形式」とされたファイルをAstroが処理しようとしてクラッシュするため、ファイルベースルートの構築後にリダイレクトルートが取り除かれることを利用し、アセットから適当なパスへのリダイレクトを `AstroConfig.redirects` に追加することでAstroの処理を回避しています。

これで目的はほぼ達成されますが、各アセットに対応して実際には参照されないリダイレクトのためのHTMLファイルが大量に生成されてしまいます。
そこで `AstroConfig.redirects` のリダイレクト先にはパスだけでなく *300番台の* リダイレクトのためのステータスコードが指定できることを利用し、 `410 Gone` をダブルアサーションで押し込むことで [`core/build/generate.ts`](https://github.com/withastro/astro/blob/main/packages/astro/src/core/build/generate.ts) の `generatePath()` 関数によってHTMLファイルが生成されるのを回避します。
なお、リダイレクトのためのステータスコードはほぼ検査されることなく [`core/redirects/render.ts`](https://github.com/withastro/astro/blob/main/packages/astro/src/core/redirects/render.ts) にて最終的に `Response` クラスのコンストラクタにそのまま渡されるため、問題は生じていません。

さらにドキュメントファイルと拡張子のみが異なるファイルが存在する場合（例： `src/pages/google/drive/share.{mdx,png}` ）、ルートの衝突が発生し、ドキュメントが参照できなくなることがあります。
（これに対してもAstroは警告を表示しますが、これは解消すべき問題です。）
この場合はリダイレクトルートを挿入せず、 `astro:route:setup` フックでアセットファイルに対応するルートのタイプを `fallback` に書き換えることで `generatePath()` 関数にファイルベースルートを無視させています。

`astro:route:setup` フックは各ファイルベースルートに対し呼ばれますが、直前にファイル全体を走査する処理があり、大量のバイナリファイルを開くことがないよう最後の手段としています。
このルート情報は `RouteOptions` と型定義されているものの、内部データである `RouteData` のオブジェクトがそのまま渡されるため、前述のような上書き処理が可能になっていますが、意図された仕様かどうかは不明です。
