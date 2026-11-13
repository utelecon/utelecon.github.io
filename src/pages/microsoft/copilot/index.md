---
title: Microsoft Copilot Chat
breadcrumb:
  title: Microsoft Copilot Chat
---

## 概要
UTokyo Accountを持つ方であれば，Microsoftの生成AIであるMicrosoft Copilot Chat（以下Copilot Chat）を利用できます．UTokyo Microsoft Licenseの契約の範囲で提供されており，新たな費用負担はありません．

なお，ここで説明するのは，UTokyo Accountを持つ方であれば誰でも無料で使えるCopilot Chat（組織向け・無料）です．Word・Excel・PowerPoint・Outlookなどと連携する有償ライセンス版の「Microsoft Copilot」は，Copilot Chatとは別の機能であり，東京大学では提供していません．また，Microsoft Teams内で使える「Copilot in Teams」は，[一部の教職員のみに限定的に提供](https://univtokyo.sharepoint.com/sites/utokyoportal/Lists/ListNotification/DispForm.aspx?ID=9682)されているものであり，本ページで説明するCopilot Chatとは別物です．東京大学で利用できる生成AIサービスについては，「[生成AI関連情報](https://utelecon.adm.u-tokyo.ac.jp/online/topics/generative-ai)」のページを参照してください．

Copilot Chatでは，次のようなことができます．
 - Webの情報にもとづく調べ物や要約
 - 文章の作成・書き直し
 - アップロードしたファイルの内容の分析
 - 画像の作成

詳しくは[公式のサイト](https://www.microsoft.com/ja-jp/microsoft-365-copilot/chat#Features)をご覧ください．

大学のアカウントで利用することで，エンタープライズデータ保護が適用されます．ただし，送信したデータは Microsoft のサービス上で処理されるため，機密情報や未公開情報の入力には十分注意してください．

## 利用にあたっての注意事項
まず，生成AIの利用についての一般的な注意事項について，以下を参照してください．

- [東京大学における生成AI利用に係るセキュリティガイドライン](https://univtokyo.sharepoint.com/sites/Security/SitePages/ai_use_security_guideline.aspx)（2024年3月12日）<small>※閲覧にはUTokyo Accountでのサインインが必要です</small>
- [生成系AI(ChatGPT, BingAI, Bard, Midjourney, Stable Diffusion等)について（2023年4月3日）](/docs/20230403-generative-ai/)
- [東京大学の学生の皆さんへ：AIツールの授業における利用について（2023年5月26日付／2023年5月29日掲載）](/docs/ai-tools-in-classes-students/)
- [AIツールの授業における利用について（2023年4月28日付／2023年5月16日掲載）](/docs/ai-tools-in-classes/)

特に，取り扱いに注意を要する情報（試験やレポートの問題，業務で知り得た機密情報，発表・公開すべきでない研究内容，その他関係者以外が知りえない情報）を入力しての利用は避けてください．プロンプトや応答は基盤モデルの学習には使用されることはなく，AIモデルを改良する目的で人間によるレビューを受けることもないことが，Microsoftより公表されていますが，Microsoftへの送信自体は行われていることに注意する必要があります．[情報セキュリティポータルサイト](https://univtokyo.sharepoint.com/sites/Security/)の情報も参照してください．また，個人向けのCopilotには大学の契約は適用されないため，情報の管理に注意してください．

生成AIを利用してはいけない場面や，利用の条件が決まっている場面もあります．特に**授業においては，生成AIの利用の可否について，授業の特性に応じて担当教員が判断する**ことになっています．所属学科や専攻および各授業の担当教員の**指示に従い，認められていない場合には利用しない**でください．論文誌への投稿についても，生成AIの利用が禁止されている場合や，制限・条件が付けられている場合があるため，よく確認するようにしてください．詳しくは[授業課題・取り組みにおけるAI利用範囲の類型と表示](https://utelecon.adm.u-tokyo.ac.jp/gen-ai/education/ai-use-policy-levels/)をご覧ください．

## Copilotの種類と違い
{:#copilot-types}
Copilotは名前が似たサービスが複数あり，混同しやすいため以下に整理します．このページでは，①組織向けMicrosoft Copilot Chatについて説明します．

| 名称 | 概要 | 東京大学での提供 |
| --- | --- | --- |
| ①組織向けMicrosoft Copilot Chat（無料）| Webベースの生成AIチャット．Web検索，ファイルアップロード，エージェント利用など． | 全構成員が利用可能 |
| ②組織向けMicrosoft Copilot（有償）| Microsoft 365データと連携する有償版．<br />Word・Excel・PowerPoint・Outlook・Teamsなどで利用可能． | 一部の教職員のみ利用可能 |
| ③個人向けMicrosoft Copilot（無料）| Microsoftアカウント等があれば誰でも利用可能． | なし |
| ④個人向けCopilot in Microsoft 365（有償）| Microsoft 365 Personal・Family・Premiumに含まれ，Word・Excel・PowerPointなどのアプリ内で利用可能<br />（Microsoft 365 Basicには含まれない）． | なし |

※②組織向けMicrosoft Copilotも③個人向けMIcrosoft Copilotも同じ名称になっています．名前だけで判断せず，どのアカウントでサインインしているかで見分けてください．

※右上に![](./green_shield_icon.png){:.icon}が表示されない場合は，大学の契約の下での「エンタープライズデータ保護が適用されたMicrosoft Copilot」ではなく，個人向けのMicrosoft Copilotを利用している可能性があります．個人向けサービスでは利用条件やデータの取り扱いが異なるため，注意してください．

## 利用手順
### サインイン方法
#### Web版
1. Webブラウザで[Copilotのページ](https://copilot.cloud.microsoft)にアクセスしてください．
1. 「サインイン」をクリックし，UTokyo Accountでサインインしてください．
1. Copilot Chatの画面が開きます．
1. 画面（右上または左下）に表示されているアカウントアイコンをクリックしてください．
1. 表示されたメニュー内に，自身のUTokyo Account（`10桁の共通ID + @utac.u-tokyo.ac.jp` ） が表示されていることを確認してください．個人のメールアドレスや他機関のアカウントが表示されている場合は，アカウントを切り替えてください。切り替えた後に![](./green_shield_icon.png){:.icon}が表示され，カーソルを合わせた際に「このチャットにはエンタープライズデータ保護が適用されます」と表示されていれば，保護が有効な状態です．詳しくは[Copilotの種類と違い](#copilot-types)を参照してください．

#### アプリ
Windows，Mac，iOS，Androidでは，「Microsoft Copilot」アプリからもCopilot Chatを利用できます．

1. アプリを立ち上げ，UTokyo Accountを使ってサインインしてください．
1. 個人のMicrosoftアカウントでもサインインしている場合は，アプリ内のアカウント切り替えでUTokyo Accountを選んでください．
1. 画面（右上または左下）に表示されているアカウントアイコンをクリックしてください．
1. 表示されたメニュー内に，自身のUTokyo Account（`10桁の共通ID + @utac.u-tokyo.ac.jp` ） が表示されていることを確認してください．個人のメールアドレスや他機関のアカウントが表示されている場合は，アカウントを切り替えてください。切り替えた後に(./green_shield_icon.png){:.icon}が表示され，カーソルを合わせた際に「このチャットにはエンタープライズデータ保護が適用されます」と表示されていれば，保護が有効な状態です．詳しくは[Copilotの種類と違い](#copilot-types)を参照してください．

### 基本的な使い方
基本的な使い方に関しては，[公式ヘルプ](https://support.microsoft.com/ja-jp/microsoft-365-copilot/get-started-with-microsoft-365-copilot-chat)を参照してください．Webページの情報にもとづく回答には，出典へのリンクが付くことがあります．AIの回答を鵜呑みにするのではなく，出典も確認してください．

## 情報共有・問い合わせ先
本サービスを含む生成AIチャットに関する情報共有のため，UTokyo Slack内に設けられている「UTokyo ARC」ワークスペースに専用のチャンネル #arc-aichat-users を作成しています．「[UTokyo Slackに自由に参加できるワークスペースの中から選んで参加する](/slack/join/)」ページの手順に従って自身で参加してください．

本サービスはMicrosoftによって提供されているものであるため，機能の詳細や不具合などについての問い合わせには回答できません．上記の情報共有の場へ投稿してください．

その他，生成AIの関連情報は，「[生成AI（ChatGPT等）関連情報](/online/topics/generative-ai/)」のページにまとめています．
