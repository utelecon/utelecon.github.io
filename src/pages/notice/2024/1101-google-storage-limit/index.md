---
title: ECCSクラウドメールで書き込み操作ができない問題について
---

## 報告

* 2024-11-05
* サービスは復旧しています。
* この度の障害が発生した原因については、ECCSクラウドメールのサービス提供事業者であるGoogle社の販売代理店が、ライセンス更新に必要な手続を期限内に完了できなかったため、と販売代理店から現時点で報告を受けております。これによりライセンスが失効し、Googleドライブ等のストレージ容量不足が発生した模様です。情報基盤センターにおいても、今後このような事態が再び起こらぬよう、体制の改善などを行っていく所存です。ご迷惑をおかけして申し訳ありませんでした。

## 概要

2024年11月1日0時頃より，ECCSクラウドメールで提供している Google のサービスで，ファイルのアップロードや編集を伴う操作ができない問題が発生しています．書き込み操作を行おうとすると，「空き容量がありません」「組織の空き容量がありません」「このファイルは表示専用です」「保存容量が不足しています」など，組織全体の容量が不足している旨のメッセージが表示され，操作を続けられません．

この問題により，以下のような影響が発生しています：

- Google ドライブにファイルをアップロードできない，更新できない
- Google ドキュメント・Google スプレッドシート・Google スライドを編集できない
- Google フォームで回答の受付が終了している
- Google クラスルームで提出物を提出できない
- Google フォトが動作しない
- Google Colaboratory でノートブックの新規作成ができない

なお，すでに Google ドライブ等に保存されたデータそのものに問題はありませんのでご安心ください．また，以下のサービス・操作は影響を受けていません：

- Google ドキュメント・Google スプレッドシート・Google スライドを含むファイルの閲覧
- 添付ファイルを含むメールの送受信
- Google Colaboratory のノートブックの編集

11月1日21時20分頃に問題が一時的に解消しましたが，11月2日1時頃より再発し，11月2日6時頃に再び解決していることを確認しています．

### 原因

Googleのシステム障害ではなく、東大のGoogle Workspace (ECCSクラウドメール)契約のライセンス更新に失敗したことが原因です。ライセンスの復旧ができ次第サービスは復旧する予定で、現在販売代理店を通じて復旧を急いでいる状況です。Googleドライブ等に保存されたデータそのものに問題はありませんが、ファイルの更新や新たなファイルの作成ができない状況です。

### 先生方へお願い

本トラブルにより、学内の教育活動等に多大なるご迷惑をおかけして申し訳ありません。学生から本トラブルによる成績評価等への影響が懸念されております。この点、慎重なご対応およびご配慮を頂けますようお願いいたします。

## 一時的な対処法について

この問題が解決するまでの間の一時的な対処として，目的に合わせて以下のような方法が検討できます．

### 資料を共有したい

すでに Google ドライブなどにアップロードされている資料を共有して閲覧することは可能です．

新たに資料をアップロードして共有したい場合は，以下のような方法が考えられます：

- [UTOLで教材機能を利用する](/utol/lecturers/materials/)
  - 授業を履修している学生だけに共有できます．
- [OneDrive](/microsoft/onedrive/)を利用する
  - 特定の UTokyo Account を持っている人や，UTokyo Account を持っている人全体に共有できます．
- ECCS クラウドメール外の Google アカウントを利用する
  - ECCS クラウドメール内限定の共有はできません．
- メールで送信する

### 回答を収集したい

Google フォームでは新たな回答を受け付けることができない状態ですので，以下に示すような別の方法で回答を受け付けられるようにする必要があります．

- [UTOLでアンケート機能を利用する](/utol/lecturers/surveys/)
  - 授業を履修している学生だけに回答を求めることができます．
- Microsoft Forms
  - 回答に UTokyo Account でのサインインを求めることができます．
  - 利用手順などの説明は「[Microsoft Forms クイック スタート](https://support.microsoft.com/ja-jp/office/620daa7a-3e03-4013-8f92-5cce86210ef6)」をご覧ください．
- ECCS クラウドメール外の Google アカウントを利用する
  - ECCS クラウドメール内限定で回答を求めることはできません．
- メールを送信してもらう

### ドキュメントを共同編集したい

グループワークなどで，Google ドキュメントや Google スライドに相当する共同編集機能を利用したい場合，以下のような方法が考えられます：

- Web 版 Word や Web 版 Powerpoint を利用する
  - 学内限定・学内の特定のユーザー限定で共同編集を行うことができます．
  - 利用手順などの説明は「[Web 版 Word で共有と共同作業を行う](https://support.microsoft.com/ja-jp/office/6576e645-fd66-4a9a-9472-0e5ad4605a1b)」・「[PowerPoint プレゼンテーションで共同作業を行う](https://support.microsoft.com/ja-jp/office/0c30ee3f-8674-4f0e-97be-89cf2892a34d)」をご覧ください．
