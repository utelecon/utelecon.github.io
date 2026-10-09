# asset-colocation

画像や PDF などのアセットを src/pages 内でドキュメントと同じディレクトリに配置するためのインテグレーションです．主に3つのことを行います：

- リンク (`[]()` や `<a>`) で参照されているファイルを dist にコピーする
- 通常 Astro が取りこぼす画像パス指定を Astro に認識させる
  - 各 VFile の `.data.astro.localImagePaths` を更新することで実現しています．
- 参照されていないファイルや，参照先のないリンクについて，ビルド時に警告する

全ファイルを走査して参照・被参照を追跡する必要のある処理は概ねこのインテグレーションで行っています．

## notice.yml の特別扱いについて

このインテグレーションでは，`src/pages` 以下の Markdown/HTML ファイルのほか，[`src/data/notice.yml`](src/data/notice.yml)の内容も特別に走査対象としています．これは，`notice.yml` に書かれた Markdown は Astro とは異なる処理系を通り（[`src/components/utils/Markdown.astro`](../../src/components/utils/Markdown.astro)），`notice.yml` だけが参照しているアセットがあることが理由です．

## `.data.astro.localImagePaths` について

TL; DR: undocumented なインターフェースを用いています．

Astro は，画像ファイルの最適化などを行うためにファイルシステム上で一度画像ファイルパスを解決しています．この解決を行うために，Markdown/HTML ファイルの処理系 remark/rehype によって解析を行い，その結果を VFile の `.data.astro.localImagePaths` に格納しています．`VFile` は，remark/rehype プラグインで処理されるファイルを表すオブジェクトで，プラグインの実装において扱うことができます．

VFile の `.data.astro.localImagePaths` は undocumented なインターフェースであり，Astro の内部実装に大きく依存しています．Astro のバージョンを変更する際は，このインターフェースが変更されていないか注意深く確認してください．

このインテグレーションでは，Astro が取りこぼしてしまう画像パスをこの `.data.astro.localImagePaths` に追加することで，Astro に画像パスを認識させています．取りこぼしてしまうパスは以下の通りです：
- `./img/1.png` のようではなく `img/1.png` のようなパス
- Markdown 内の `<img>` タグで指定された画像パス
- MDX の `<img>` タグで指定された画像パス
