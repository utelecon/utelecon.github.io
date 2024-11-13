---
title: "UTokyo Azure"
---

## UTokyo Azure とは

　2023年8月，東京大学とマイクロソフトは今後の連携に関する基本合意書を締結（[ニュースリリース](https://www.u-tokyo.ac.jp/focus/ja/articles/z1701_00012.html)）し，この合意に基づきMicrosoftから東京大学に対して，MicrosoftのクラウドサービスAzureを利用するためのクレジットという形で寄付が行われることとなりました．寄付の詳細については[”こちら”（学内のみ）](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/UTokyoAzure_Credit.aspx)をご覧ください．

　UTokyo Azure は，本寄付による Microsoft Azure のクラウドサービスを東京大学の構成員に広く利用可能とするサービスの名称です．Microsoft Azure には，
- 普通の Linux や Windows 環境を立ち上げる，いわゆる仮想マシンサービス
- 複数の Linux サーバをクラスタ（高性能計算環境）として運用するサービス

という基本的なクラウドサービスの他に，

- Jupyter Notebook などのブラウザベースで利用できる計算環境
- OpenAI の AI システムをブラウザ経由で利用するサービスや，それをAPI で利用するサービス
なども提供されています．また，計算機の種類としてもCPU, GPU多種多様なプロセッサやメモリ量を選択でき，様々な用途，分野で利用が可能です．


## 基本方針・目標

運用は情報基盤センター，情報システム部，情報システム本部が行います．提供にあたっての基本方針・目標は以下のとおりです．

- 利用開始までの敷居を低く，タイムラグを短くし，初めての方を含めて多くの人に利用してもらい，本サービスがなければ必要になってしまう計算機の調達の費用や時間をなくし，本学の研究の加速に貢献する
- 運用側で利用可能なサービスを取捨選択し，狭く限定することなく Azure で利用可能なサービスを広く利用可能とする
  - 原則的には，個々の利用者の環境に運用側が立ち入ることはせず，通常のMicrosoft Azureの環境がそのまま使えるようにする
  - ただし，運用上提供が困難と判断されるサービスについては提供不可とする場合がある
  - 運用側である規模の標準環境を用意し，標準的なユースケースを環境構築の手間なく利用したいという利用者をサポートする
- クレジットは1年毎に5年間提供される予定で有限であることから，大学全体での利用総量を制御しその範囲で提供する．年毎に総量を上回った分についてはその利用量に応じた課金を利用者に対して行う


## 使ってみる
- [Azure Portal](https://portal.azure.com/)には UTokyo Account で直ちにログインできます．どのようなサービスが使えるかな どを事前に確認することが出来ます．
- 実際にUTokyo Azure の利用を開始するには，あなたのアカウントに紐付いた，本サービス専用の「サブスクリプション（お財布の ようなもの）」を開設する必要があります．そのためにまず東京大学 Azureクラウド利用申請ページ(公開時にリンク)から申し込みをして下さい．


## 利用例

### 仮想マシンの作成

#### [Viatual Machines](/research_computing/utokyo_azure/virtualmachine/)

- 定番である各 Linux ディストリビューションをはじめ，ライセンスを別途お持ちであれば Windows OS を仮想環境で利用することができます．


### AI サービスの利用

#### Azure Machine Learning

- GPT などの既存モデル（生成ＡＩ）を Azure 経由で Web ブラウザや Python プログラムから利用することができます．ChatGPT のような利用も可能です．

#### [Azure OpenAI Studio](/research_computing/utokyo_azure/openai/openai)

- OpenAI が提供する GPT シリーズのモデルを使いたい場合がこちらが簡単です．

#### [Azure AI Studio](/research_computing/utokyo_azure/openai/azureai)

- OpenAI だけでなく Llama や Ministral など様々なモデルを使いたい場合は AI Studio を使ってください．

## データの置き場 (ストレージ) について

#### [Azure Blob Storage](/research_computing/utokyo_azure/storage/)

- Microsoft Azure のサービスの一つである Azure Blob Storage 上に大容量データを保存し，手元のブラウザや計算機からアクセスできます．


## 複数人グループでの利用

#### サブスクリプションを共同管理する

#### サービスリソースを共同管理する

#### 利用者を追加する

## Azure を学習する

Microsoft が用意している，より Azure を使いこなすための自己学習コンテンツです．特に記載がない限り無償で利用できます．

#### [Microsoft Azure の基礎: Azure のアーキテクチャとサービスについて説明する](https://learn.microsoft.com/ja-jp/training/paths/azure-fundamentals-describe-azure-architecture-services/)

#### [Microsoft Virtual Training Days](https://www.microsoft.com/ja-jp/events/top/training-days)

## FAQ・問い合わせ先

#### [FAQ](/research_computing/utokyo_azure/faq/)
- 特に多い問い合わせはこちらにまとめてあります．

#### [Microsoft サポート](https://portal.azure.com/#view/Microsoft_Azure_Support/HelpAndSupportBlade/~/overview)
- Microsoft の担当者に問い合わせができます．Azure に関する技術的な問い合わせにはこちらをご活用ください．
- 問い合わせ手順は[”こちら”を参照ください](/research_computing/utokyo_azure/support/)

#### UTokyo Azure サポート担当
- utokyo-azure-group@g.ecc.u-tokyo.ac.jp
