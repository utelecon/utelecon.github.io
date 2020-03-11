# utelecon (UTokyo Portal for Teleconference Tools)

https://utelecon.github.io/


## 共通ルール
* 句読点は「，．」にする（吉田栗田はまずは全角で対応）

## 書き方

* 拡張子(.markdown)のファイル (xxxxxx.markdown) をマークダウン形式で書いてgit commit/push
* xxxxxx.markdown をcommit/pushするとそれは, https://utelecon.github.io/xxxxxx というパスで参照できるようになる
* hoge/foo/bar/index.markdown をcommit/pushすると, https://utelecon.github.io/hoge/foo/bar/  で参照できる
* xxxxxx.markdown ファイルに対しては統一的な theme が自動的に適用される
  * theme は設定画面 https://github.com/utelecon/utelecon.github.io  の settings のページの下の方 (github pages) から変更できる
* 経験上, commit/push してからサイトに反映されるまで長いと数十秒かかる
* markdown中には普通のhtmlも書けるのでmarkdownで書きにくいものはhtmlを書けば良い
* markdown記法 https://qiita.com/tbpgr/items/989c6badefff69377da7
* markdown記法 https://qiita.com/t_wkm2/items/372fd1c851c4d221b1f3

```
git clone git@github.com:utelecon/utelecon.github.io.git
# edit files (e.g., index.markdown)
git commit -m "add introduction" -a
git push
```

## Markdown チートシート
* \[タイトル\](url)\{:target="_blank"\} リンク（Jekyll の機能で{}で属性を渡せそう．残念ながらリスト内では属性を渡せない）
* \!\[タイトル\](url)\{:width="200px"\} 画像（{}で width の指定をできることは確認済み．おそらくこれもリスト内では属性を渡せなさそう）


## 気になっていること
* 今のままだと README.md が見えてしまうから docs フォルダ内を公開というような設定を今後したい


## よくわからないこと

* 節番号とか自動的にふれないの?
* 目次とか生成できないの?
* トップページへのリンクとか全ページに出したい → /_layouts/default.html を追加しました（https://github.com/pages-themes/cayman/blob/master/_layouts/default.html からひっぱってきました）．これをいじればヘッダーなど共通して修正できそうです．このファイルが default でテンプレートになるみたいです．これがない場合は github pages が勝手に補完してくれるみたいです．
* リンクを別タブで開くようにしたい. htmlなら <a href="xxxx.html" target="_blank"> ... </a> とするやつ → [タイトル](url){:target="_blank"} の記法で行けそうです
