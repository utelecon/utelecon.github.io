# asset-colocation

画像や PDF などのアセットを src/pages 内でドキュメントと同じディレクトリに配置するためのインテグレーションです．主に3つのことを行います：
- リンク (`[]()` や `<a>`) で参照されているファイルを dist にコピーする
- 通常 Astro が取りこぼす画像パス指定を Astro に認識させる
  - 各 VFile の `.data.astro.localImagePaths` を更新することで実現しています．
- 参照されていないファイルや，参照先のないリンクについて，ビルド時に警告する

全ファイルを走査して参照・被参照を追跡する必要のある処理は概ねこのインテグレーションで行っています．

## notice.yml の特別扱いについて

このインテグレーションでは，src/pages 以下の markdown/HTML ファイルのほか，[`src/data/notice.yml`](src/data/notice.yml)の内容を特別に走査対象としています．これは，`notice.yml` に書かれた markdown は Astro とは異なる処理系を通ること（[`src/components/utils/Markdown.astro`](../../src/components/utils/Markdown.astro)，だけが参照しているファイルがあることが理由です．