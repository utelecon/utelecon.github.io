---
title: Googleドライブの「共有ドライブ」機能について
breadcrumb:
  title: 共有ドライブ
---

このページでは，Googleドライブの「共有ドライブ」機能について説明します．

## 「共有ドライブ」機能とは

Googleドライブの「共有ドライブ」機能は，複数人のチームや組織でファイルを共同管理するのに適した機能です．

通常のGoogleドライブ（マイドライブ）ではファイル・フォルダは誰か（特定のアカウント）が持ち主となるため，その人が共有メンバーから抜ける場合（特に[東京大学から離籍するためアカウントが失効する場合](/systems/leave/)）は，事前にファイル・フォルダを他の人に譲渡しておくなど，面倒な作業が必要となります．作業に抜けや漏れがあった場合，ファイルを失ってしまうおそれもあります．

一方，「共有ドライブ」機能を利用した場合は，いわば複数人が共同で持ち主となる形を取ることができます．誰かが共有メンバーから抜ける場合の作業は持ち主の設定を変更する作業をするだけであり，もし事前に作業をしていなかった場合でも，他の持ち主がメンバーに残っていれば後から設定を変更することもできます．もっとも，誰も持ち主がいない状態となってしまうことのないよう，一定の注意は必要となります．

したがって，メンバーに出入りのあるチームや組織において，継続的にファイルを共有したい場合は，この「共有ドライブ」機能がおすすめです．

### 用語について

Googleドライブにおける「**共有ドライブ**」は，上で説明したように，複数人が共同でファイルの持ち主となるような特殊な場所を指します．単にGoogleドライブでファイルを共有することを指して「共有ドライブ」と言うわけではありませんので，注意してください．

また，Googleドライブの画面には「**共有アイテム**」という項目もあります．この項目を選択すると，自分が他の人から共有してもらったファイルが一覧表示されます（共有ドライブを使わずに共有されたファイルも含まれます）．これも「共有ドライブ」とは別物ですので注意してください．

「共有ドライブ」と対比されるのが「**マイドライブ**」です．誰か特定の個人が持ち主になっているファイル・フォルダは，他の人に共有しているものも含め，すべてその人の「マイドライブ」の中にあります．

### 東京大学のアカウントでの利用

このページでは，東京大学の「[ECCSクラウドメール](/google/)」のアカウントで共有ドライブ機能を利用することを想定して説明しています．なお，保存容量の都合上，ECCSクラウドメールでは共有ドライブの作成・管理に制限があります（詳細は「[ECCSストレージ管理システム](/google/drive/storage/)」のページをご覧ください）．

## 共有ドライブを利用する流れ

以下では，共有ドライブを作成し，それを用いて実際にファイルを共有する流れを説明します．

### 共有ドライブの作成

ECCSクラウドメールでは，共有ドライブを作成する際は，Googleドライブの画面上ではなく「ECCSストレージ管理システム」という別のシステムから操作を行います．詳細は「[ECCSストレージ管理システム](/google/drive/storage/)」のページをご覧ください．

### 共有ドライブのメンバー追加・管理

共有ドライブの持ち主や，共有ドライブを用いて一緒にファイルを利用する人（同じチーム・組織の人）は，共有ドライブ自体のメンバーとして追加します．最初に共有ドライブの作成直後のタイミングで設定しておいた上で，さらにメンバーに出入りがあった場合に随時更新するといいでしょう．手順は以下の通りです．

1. Googleドライブの画面で，左のメニューから「共有ドライブ」を選んでください．作成した共有ドライブが表示されます．
1. 一覧内の共有ドライブの名前を右クリックして，表示されるメニューで「メンバーを管理」を押してください．
1. 以降の追加・削除等は，[「Googleドライブでファイルを共有する」ページの「個別に相手を指定して共有したい場合の設定手順」](../share/#individual)と同じ要領で行えます．
    - 設定できるアクセス権の種類は，共有ドライブでは少し異なっています．下で説明していますので，それを参照してください．
    - 共有ドライブ自体のリンクをコピーすることはできません．共有ドライブにメンバーとして追加された人は，Googleドライブの画面左メニュー「共有ドライブ」を開くと一覧にその共有ドライブが表示されるようになるので，そこからアクセスして（してもらって）ください．

#### 共有ドライブにおけるアクセス権

共有ドライブでは，共有相手に対して認めるアクセス権（認める操作の範囲）の種類は，以下のようになっています．

- **閲覧者**
    - ファイルを閲覧することはできますが，編集はできません．
    - マイドライブの場合（共有ドライブ以外の場合）と同じです．
- **閲覧者（コメント可）**
    - ファイルを閲覧することに加えて，コメントを追加することができます．また，Googleドキュメントのファイルの場合は，編集の提案も行うことができます．ファイルを直接編集することはできません．
    - マイドライブの場合（共有ドライブ以外の場合）と同じです．
- **投稿者**
    - ファイルの閲覧と編集が可能です．
    - ファイルを削除することや移動することはできません．
    - 共有ドライブ内のフォルダをメンバー以外の人に共有する操作はできません．
    - マイドライブの場合（共有ドライブ以外の場合）の「編集者」に近いアクセス権と考えることができます．
- **コンテンツ管理者**
    - ファイルの閲覧・編集に加え，削除・移動も可能です．
    - 共有ドライブ内のフォルダをメンバー以外の人に共有する操作が可能です．ただし，別の設定でこの操作を不可に変更することもできます．
    - 共有ドライブ自体のメンバーを変更することや，その他共有ドライブ全体の設定に関わる操作はできません．
- **管理者**
    - その共有ドライブに関するすべての操作が可能です．
    - このアクセス権を持つメンバーが，共有ドライブの持ち主にあたります．

### 共有ドライブ内でのファイル・フォルダの利用

共有ドライブ内では，ファイルの作成・編集・アップロード・ダウンロードをはじめとしたファイルやフォルダの操作は，共有ドライブではない通常のGoogleドライブ（マイドライブ）の場合と同じ要領で行えます．「[Googleドライブの基本的な使い方](../basic/)」のページを参照してください．

また，共有ドライブ内のフォルダ・ファイルをさらに共有する機能もあります．共有ドライブでは共有ドライブ自体に持ち主やメンバーが複数人いますが，この機能により，共有ドライブの中のファイル・フォルダをさらに持ち主・メンバー以外の他の人へ共有することが可能となっています．操作はマイドライブ（共有ドライブではないGoogleドライブ）の場合と同じ要領ですので，「[Googleドライブでファイルを共有する](../share/)」のページを参照してください．

<!--

## 利用例

share後編もあるがここに簡単に書いておいてもよさそう？

-->
