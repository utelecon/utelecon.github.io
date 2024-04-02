---
title: 2024年度における「Chatbot UI」での生成AIチャットサービスの暫定的な提供について
---

<div style="text-align: right;">2024年3月28日 ページ作成</div>
<div style="text-align: right;">2024年3月29日 本文掲載</div>

いつも本学の情報システムの運営にご協力いただきありがとうございます．

「[当面の全学構成員向け生成AIサービス提供方針について](/notice/2024/0327-ai-service)」でお知らせしているように，全学構成員向けの生成AIサービスは，当面，**[Microsoft Copilotによる生成AIチャットの提供](/notice/2024/03-microsoft-copilot)**を中心として位置付けています．一方，2023年10月から行ってきた「Chatbot UI」による生成AIチャットサービスの提供についても，直ちには終了しないこととしています．この「Chatbot UI」での生成AIチャットサービスに関し，2024年度における暫定的な提供について，以下の通りご案内します．

## 趣旨

情報システム本部では，2023年10月から「Chatbot UI」による[生成AIチャットサービスの実験的な提供](/notice/2023/10-aichat)を行ってきました．これは，Mckay Wrigley氏が開発している「[Chatbot UI](https://github.com/mckaywrigley/chatbot-ui)」というソフトウェアを用いて大学でサーバを構築し，OpenAI社のAPIおよびMicrosoftの「Azure OpenAI」サービスのAPIをWeb上のチャット画面から利用できるようにしたものです．APIは大学としてサービス契約・費用負担を行い，利用者に個別の費用負担を求めずに運用してきました．

一方，2024年3月には，[Microsoft Copilotによる生成AIチャットの提供](/notice/2024/03-microsoft-copilot)についてお知らせしました．これにより，Microsoft社の「Microsoft Copilot」による生成AIチャットを全構成員が利用できるようになっています．このサービスはMicrosoft社との既存の契約の下で提供されるクラウドサービスであり，大学の運用負担・費用負担が小さいことから，全学構成員向けの生成AIサービスの中心に位置付けることとしました．また，文字数（トークン数）の制限に関しても，東京大学が「Chatbot UI」により提供していた生成AIチャットサービスでの制限と比べて緩いものとなっており，利用者にとっても利用しやすくなっていると考えています．

このような事情から，「Chatbot UI」での生成AIチャットサービスを提供する意義は低下していますが，現時点では，Microsoft Copilotの挙動がOSやブラウザなどの環境によっては不安定であるといった状況も見受けられるところです．そこで，**Microsoft Copilotではカバーできない利用に対応するため**，2024年度においては，これまでと同様の**「Chatbot UI」での生成AIチャットサービスを暫定的に提供**することとしました．

なお，これまで「[生成AIチャットサービスの実験的な提供](/notice/2023/10-aichat)」をお使いいただいていた方で引き続いての利用を希望する方には，あらためて2024年度の利用について手続きをお願いします．

### 2024年度からの変更点

- 利用に必須としている[情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)について，2024年度分の受講（確認テストの合格）が済んでいることを条件とします．なお，[UTokyo Accountの多要素認証](/utokyo_account/mfa/)の有効化も必須であることは変わりません．
- 利用するAPIはMicrosoftの「[Azure OpenAI](https://azure.microsoft.com/ja-jp/products/ai-services/openai-service)」サービスのAPIとします．これはOpenAI社のAPIと同等のものです．
- 利用上限の値を引き上げます．

## サービスの概要

### 利用対象者

UTokyo Accountを持つ本学の構成員．[UTokyo Accountの多要素認証](/utokyo_account/mfa/)の有効化と2024年度分の**[情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)の受講を必須**とします．

### サービス内容

Microsoftの「Azure OpenAI」サービスのAPI（OpenAI社のAPIと同等のものです）を，以下のようなチャット画面から利用できます．

![Chatbot UIの画面．中央下部に文字を入力するボックスがあり，チャットができるようになっている．](../2023/aichat.png)

モデルはGPT-3.5およびGPT-4から選択することができます．直接APIを利用することはできませんので，単純なチャットを越える機能（function calling等）は利用できません．また，チャット画面はサードパーティのソフトウェアであり，OpenAI社のChatGPTとは異なるものであるため，ChatGPTのプラグイン（たとえばCode Interpreter等）を利用することもできません．

利用者の個別の費用負担は求めません．

### 利用目的

**東京大学における教育・研究および業務を目的とした利用**に限ります．それ以外の目的での利用はできません．

本サービスに充てられる予算は限られているため，**本サービスではなく「[Microsoft Copilotによる生成AIチャットの提供](/notice/2024/03-microsoft-copilot)」の利用が可能な場合は，そちらを利用してください**．

### 提供期間等

最長で2025年3月末まで．予算の状況，Microsoftの「Azure OpenAI」サービスの状況，生成AIにまつわる技術・社会の状況等により，早期に提供を終了する可能性もあります．

### 利用上限

APIの使用には上限があり，また従量課金となっていることから，本サービスでは利用に上限を設けます．上限はAzure OpenAIの課金に用いられる「トークン」に基づいて定めます．具体的には，

- GPT-3.5モデルに関しては
    - 入力1トークンあたり3単位
    - 出力1トークンあたり4単位
- GPT-4モデルに関しては
    - 入力1トークンあたり60単位
    - 出力1トークンあたり120単位

とした上で，1アカウントにつき1ヶ月あたり**8,000,000単位**を上限とします（あくまで大まかな目安ですが，8,000,000単位はGPT-4モデルで日本語の文章6万字前後に相当します）．ただし，利用の状況により変更する可能性があります．

なお，Azure OpenAIのトークンはOpenAI社のトークンと同じものです．詳細は，OpenAI社の記事「[What are tokens and how to count them?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)」やその他インターネット上の情報も参照してください．

## 利用にあたっての注意事項

### 一般的な注意事項

まず，生成AIの利用についての一般的な注意事項について，以下を参照してください．

- [東京大学における生成AI利用に係るセキュリティガイドライン</small>](https://univtokyo.sharepoint.com/sites/Security/SitePages/ai_use_security_guideline.aspx)（2024年3月12日）<small>※閲覧にはUTokyo Accountでのサインインが必要です</small>
- **[生成系AI(ChatGPT, BingAI, Bard, Midjourney, Stable Diffusion等)について（2023年4月3日）](/docs/20230403-generative-ai)**
- [東京大学の学生の皆さんへ：AIツールの授業における利用について（2023年5月26日付／2023年5月29日掲載）](/docs/ai-tools-in-classes-students)
- [AIツールの授業における利用について（2023年4月28日付／2023年5月16日掲載）](/docs/ai-tools-in-classes)

特に，取り扱いに注意を要する情報（試験やレポートの問題，業務で知り得た機密情報，発表・公開すべきでない研究内容，その他関係者以外が知りえない情報）を入力しての利用は避けてください．Microsoftの技術情報によれば，Azure OpenAIで利用した情報はMicrosoftのシステムに蓄積・保存されることはなく，いわゆるモデルの学習に利用されることはないとされていますが，Microsoftへの送信自体は行われていることに注意する必要があります．

また，生成AIを利用してはいけない場面や，利用の条件が決まっている場面もあります．特に**授業においては，生成AIの利用の可否について，授業の特性に応じて担当教員が判断する**ことになっています．所属学科や専攻および各授業の担当教員の**指示に従い，認められていない場合には利用しない**でください．論文誌への投稿についても，生成AIの利用が禁止されている場合や，制限・条件が付けられている場合があるため，よく確認するようにしてください．

加えて，生成AIの出力には，事実ではない内容（ハルシネーション）や著作権など法的なリスクを伴う内容が含まれている可能性があります．生成AIの出力を利用した結果についての責任は，あくまでも利用者の側にあることを認識し，十分に注意して利用してください．

### 別件の会話は新しいセッションを作成しなおして行う

本サービスでは，それまでのチャットの内容を参照し文脈に沿った出力を行ってくれます．これは，それまでのチャット内容をその都度すべてAPIへの入力として送信することにより実現されているため，過去のやり取りを含めたまま次々に別の質問を続けると，過去の会話の文字数（トークン数）までAPIへの入力としてカウントされてしまいます．一つのやり取りを終えてまったく別の話題であらためて利用する場合は，新しいまっさらなチャット（セッション）を作成してください．本サービスでは，複数のチャット（セッション）を作れる仕組みになっています．

### 会話履歴はブラウザ上に保存される

本サービスへの入力プロンプトや出力（会話履歴）はブラウザの内部（ローカルストレージと呼ばれる領域）に保存されます．そのため，使用ブラウザや端末を変えた場合や，プライベートウィンドウで利用していてタブを閉じた場合には，会話履歴が消えます．会話履歴のエクスポート機能があるため，必要に応じてご活用ください．

### その他の注意事項

以上で説明した制限のほか，Azure OpenAIサービスのAPI全体での制限もあり，抵触するとすべての利用者に影響が及びますので，必要な範囲を超えて過度に利用することは控え，ゆずりあって利用してください．本サービスは限られた運用リソースのもとで提供されているものであり，問題が生じた場合にはサービスを取りやめざるを得なくなります．利用者の皆様の節度ある行動を期待します．

また，利用にあたってはMicrosoft Azureの[Product Terms](https://www.microsoft.com/licensing/terms/productoffering/MicrosoftAzure/EES#ServiceSpecificTerms)も参照し，適切に利用してください．

## 利用方法

本サービスの利用には**[UTokyo Accountの多要素認証](/utokyo_account/mfa/)の有効化と2024年度分の[情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)の受講を必須**とします．あらかじめこれらを済ませた上で，以下の手順に進んでください．

1. 以下の申請フォームを入力・送信してください．<b class="box center"><a href="https://forms.office.com/r/w0KZwqi0KH">申請フォーム</a></b>
1. 以下のリンクにアクセスしてください．<b class="box center"><a href="https://aichat.adm.u-tokyo.ac.jp/">https://aichat.adm.u-tokyo.ac.jp/</a></b>
    <details>
        <summary>ヘルプ：「申し訳ありませんが、サインイン中に問題が発生しました。」または「Sorry, but we’re having trouble signing you in.」というエラーが表示される場合</summary>
        本サービスの利用に必要な<a href="https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx">情報セキュリティ教育</a>の受講が完了していないために，申請が却下されています．情報セキュリティ教育の受講を完了（確認テストに合格）してから，もう1度申請をし直してください．
    </details>
    <details>
        <summary>ヘルプ：「これに対するアクセス権がありません」または「You don’t have access to this」というエラーが表示される場合</summary>
        本サービスの利用に必要な<a href="/utokyo_account/mfa/">UTokyo Accountの多要素認証</a>の申請およびその反映が完了していない可能性があります．「<strong><a href="/utokyo_account/mfa/initial">UTokyo Account多要素認証の初期設定手順</a></strong>」を<strong>最後の「手順4：多要素認証の利用を申請する」まで確実に</strong>行って，UTokyo Accountの多要素認証を有効化してください．その後，多要素認証の設定が<strong>システムに反映されるまで約40分かかるので，それまでしばらくお待ちください</strong>．
    </details>

※情報セキュリティ教育の受講が完了していない（確認テストに合格していない）状態で申請した場合，そのデータは破棄されます．受講が完了した後に，もう1度申請をし直してください．

## 情報共有・問い合わせ先

本サービスに関する情報共有のため，UTokyo Slack内に設けられている「UTokyo ARC」ワークスペースに専用のチャンネル `#arc-aichat-users` を作成しています．「[UTokyo Slackに自由に参加できるワークスペースの中から選んで参加する](/slack/join)」ページの手順に従って自身で参加してください．

本サービスは暫定的に提供するものであり，対応のリソースが限られているため，メールやuteleconサポート窓口での問い合わせは受け付けません．質問はSlackへ投稿してください．
