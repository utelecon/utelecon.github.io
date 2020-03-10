# utelecon (UTokyo Portal for Teleconference Tools)

https://utelecon.github.io/

## 書き方

* 拡張子(.markdown)のファイル (xxxxxx.markdown) をマークダウン形式で書いてgit commit/push
* xxxxxx.markdown をcommit/pushするとそれは, https://utelecon.github.io/xxxxxx というパスで参照できるようになる
* hoge/foo/bar/index.markdown をcommit/pushすると, https://utelecon.github.io/hoge/foo/bar/  で参照できる
* xxxxxx.markdown ファイルに対しては統一的な theme が自動的に適用される
  * theme は設定画面 https://github.com/utelecon/utelecon.github.io  の settings のページの下の方 (github pages) から変更できる
* 経験上, commit/push してからサイトに反映されるまで長いと数十秒かかる
* markdown中には普通のhtmlも書けるのでmarkdownで書きにくいものはhtmlを書けば良い
* markdown記法 https://qiita.com/tbpgr/items/989c6badefff69377da7

```
git clone git@github.com:utelecon/utelecon.github.io.git
# edit files (e.g., index.markdown)
git commit -m "add introduction" -a
git push
```

## よくわからないこと

* 節番号とか自動的にふれないの?
* 目次とか生成できないの?
* トップページへのリンクとか全ページに出したい
