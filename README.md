# utelecon (UTokyo Portal for Teleconference Tools)

https://utelecon.adm.u-tokyo.ac.jp/


## 共通ルール
* 句読点は「，．」にする（吉田栗田はまずは全角で対応）

## 書き方

* 拡張子(.markdown)のファイル (xxxxxx.markdown) をマークダウン形式で書いてgit commit/push
* xxxxxx.markdown をcommit/pushするとそれは, https://utelecon.adm.u-tokyo.ac.jp/xxxxxx というパスで参照できるようになる
* hoge/foo/bar/index.markdown をcommit/pushすると, https://utelecon.adm.u-tokyo.ac.jp/hoge/foo/bar/  で参照できる
* xxxxxx.markdown ファイルに対しては統一的な theme が自動的に適用される
  * theme は設定画面 https://github.com/utelecon/utelecon.github.io  の settings のページの下の方 (github pages) から変更できる
* 経験上, commit/push してからサイトに反映されるまで長いと数十秒かかる
* markdown中には普通のhtmlも書けるのでmarkdownで書きにくいものはhtmlを書けば良い
* markdown記法 https://qiita.com/tbpgr/items/989c6badefff69377da7
  * 他の参考サイト https://qiita.com/t_wkm2/items/372fd1c851c4d221b1f3
* 裏で Jekyll が動いている: https://jekyllrb.com/docs/
  * ページトップに --- （改行） title: ZOOM （改行） --- などと入力することで，ページに関するメタ情報を入力できる
    * 変数なども扱えそう https://jekyllrb.com/docs/front-matter/

```
git clone git@github.com:utelecon/utelecon.github.io.git
# edit files (e.g., index.markdown)
git commit -m "add introduction" -a
git push
```
git clone https:// ... の方が分かりやすいです

### ローカル環境で表示を確認する
[Testing your GitHub Pages site locally with Jekyll - GitHub ヘルプ](https://help.github.com/ja/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)

```bash
$ cd utelecon.github.io
$ bundle install
$ bundle exec jekyll serve
  # Open http://localhost:4000/ in your browser
```
### CSSの変更の仕方
* /assets/css/style.scss  (CSSではない！)の中にSCSS形式で追記していきます
* オリジナルのテンプレート（[cayman/_sass/jekyll-theme-cayman.scss](https://github.com/pages-themes/cayman/blob/master/_sass/jekyll-theme-cayman.scss)をoverrideしたいときは、*@import "{{ site.theme }}";*　の上に，継承したい場合はその下に追記していきます）


## 今後やること
* 今のままだと README.md が見えてしまうから docs フォルダ内を公開というような設定を今後したい
* メニューとパンくずリストの作成
* 可能な範囲で「次へ移動」を実装


## よくわからないこと

* 節番号とか自動的にふれないの?
* 目次とか生成できないの?
＞これ使う感じです（勉強中）
https://shd101wyy.github.io/markdown-preview-enhanced/#/toc

* トップページへのリンクとか全ページに出したい → /_layouts/default.html を追加しました（https://github.com/pages-themes/cayman/blob/master/_layouts/default.html からひっぱってきました）．これをいじればヘッダーなど共通して修正できそうです．このファイルが default でテンプレートになるみたいです．これがない場合は github pages が勝手に補完してくれるみたいです．
* リンクを別タブで開くようにしたい. htmlなら <a href="xxxx.html" target="_blank"> ... </a> とするやつ
