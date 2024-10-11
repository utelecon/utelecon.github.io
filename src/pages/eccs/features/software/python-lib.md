---
title: 教育用計算機システムにPythonライブラリを導入したい場合
breadcrumb:
  title: Pythonライブラリ
---

## はじめに

教育用計算機システムでは，システムの一部として導入しているソフトウェア以外に講義で使うソフトウェアを，以下の条件を満たす時に導入することがあります．

- 講義担当教員からの希望がある．
- システム全体で利用可能なライセンスを部局側が準備する，あるいは無償である．
- 使用するディスク容量が小さい．
- 想定される利用者数が多い．
- 個人のホームディレクトリにインストールできない．あるいはインストールが非常に難しい．
- 利用よりも十分前（1ヶ月に1度の定例アップデートで対応可能）に連絡する．
- 1セメスター中はアップデートは不要がである．

最近，Pythonを利用する講義が増えてきて，特定のPythonライブラリをシステムにインストールして欲しいという依頼も増えてきました．基本は上記の条件にしたがって対応しますが，Pythonライブラリは種類も多くアップデートの頻度も高いので，これらに以下の条件も加えて対応しています．

- 教育用計算機システムでインストールされているPython処理系はいくつかありますが，ライブラリの導入に対応するのはMac環境におけるpyenv上のanaconda（2024/5/10時点のバージョン`anaconda3-2022.10`）です．
- インストール済みのパッケージは，（APIの非互換性があっても）セメスターの切れ目にその時点の最新バージョンにアップデートします．
- 講義で要望があってもそれ以外の時期には，APIの変更を伴わないセキュリティアップデート以外には対応しません．

### Python環境をホームディレクトリ以下へインストールする

Python環境はユーザ自身のホームディレクトリ以下にインストールすることも可能です．以下の例を教育用計算機システムのmacOS環境（ECCS端末あるいは，sshサーバ，リモートアクセス環境）上で実行すると，ホームディレクトリ内の`~/.pyenv`以下に`anaconda3-2024.02-1`がインストールされます．

```
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
pyenv install anaconda3-2024.02-1
pyenv global anaconda3-2024.02-1
echo 'export PATH="$PYENV_ROOT/versions/anaconda3-2024.02-1/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

ただし，上記の実行には10分程度かかります．この後で，必要なライブラリをpyenv環境下にインストールします．以下は，`tensorflow-1.4.1`をインストールする例です(専用のconda環境を作成してインストールする方が一般的ですが，ここでは省略します．)．

```
pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-1.4.1-py3-none-any.whl
```

上記の状態で，ディスク容量は約3GB程度消費しています．必要なライブラリを追加していくと，ディスク容量は更に消費します．

### 講義独自の環境を学生に使用させる

講義独自の環境を用意したい場合は，教員が自分のホームディレクトリの下で用意した環境を使わせることも可能です．

まず，教員のユーザ名 (共通ID10桁) で，`~/.pyenv`を全ユーザが読めるようにします（意図しない他のディレクトリを学生が読めるようにしないよう注意してください）．

```
chmod og+x ~/
chmod -R og+rX ~/.pyenv
```

学生には実行前に以下のコマンドを実行するように指導してください．

```
export PYENV_ROOT=/home/(教員の共通ID10桁)/.pyenv
export PATH=$PYENV_ROOT/bin:$PATH
eval "$(pyenv init --no-rehash -)"
```

上記コマンドを実行した学生のターミナル上でpythonを実行すると，教員のホームディレクトリの下で用意したPython環境で実行されます．