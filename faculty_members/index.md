---
title: 東京大学でオンライン授業を始めるために
procedure: faculty_members # 手順を外部ファイルからincludeするときに使う
---

## はじめに

<mark>作成中</mark>

## 東京大学におけるオンライン授業の形態

<mark>作成中</mark>

## 前提

### 各種情報システム

東京大学では，円滑な授業の実施のために，さまざまな情報システムが導入されています．以下に，オンライン授業に利用できるものを列挙します．詳細な方法はこの後でくわしく説明しています．

{% capture about_utokyo_account %}東大の情報システムで使う，「共通ID」と呼ばれるアカウントです．各システムは，このアカウントでログインして使うのが基本になります．{% endcapture %}
{% capture about_utas %}シラバスの登録や成績の登録などに使うシステム（学務システム）です．{% endcapture %}
{% capture about_itc_lms %}授業資料の配布や課題の回収などが行えるシステム（学習管理システム）です．UTASと似ていますが，UTASは主に授業が始まる前（シラバス登録）と後（成績登録）に利用するのに対し，ITC-LMSは主に授業期間中に利用するシステムになります．{% endcapture %}
{% capture about_google %}Googleのシステムを東大のアカウントで利用するものです．東大のメールアドレス (xxxx@g.ecc.u-tokyo.ac.jp) が使えるGmail，ファイル置き場のGoogleドライブ，文書作成サービスのGoogleドキュメント，表計算サービスのGoogleスプレッドシート，フォーム作成サービスのGoogleフォーム，動画配信サービスのYouTube，Web会議のGoogle Meet，などのさまざまな機能が使えます．東大のアカウントを作成すると，通常のGoogleアカウントでは不可能な，東大のアカウントに限って公開するという共有の設定（限定公開）ができます．{% endcapture %}
{% capture about_microsoft %}Microsoftのシステムを東大のアカウントで利用するものです．WordやExcelなどのMicrosoft Officeアプリのダウンロードを提供しているほか，これらのWeb版であるOffice Online，ファイル置き場のOneDrive，フォーム作成サービスのMicrosoft Formsなどのさまざまな機能が使えます．Googleと同じく，東大のアカウントに限って公開するという共有の設定（限定公開）ができます．{% endcapture %}
{% capture about_utokyo_wifi %}キャンパス内で提供されているWi-Fiです．学内限定のデータベースや電子ジャーナルへのアクセスが可能です．事前にアカウントを作っていないと使えないので注意してください．{% endcapture %}
{% capture about_eccs %}キャンパス内に設置されているパソコンです．学内限定のデータベースや電子ジャーナルへのアクセスが可能です．教職員の利用には事前に手続きが必要です．{% endcapture %}

- **UTokyo Account**：{{ about_utokyo_account }}
- **UTAS**：{{ about_utas }}
- **ITC-LMS**：{{ about_itc_lms }}
- **Zoom**, **Webex**：同時双方向型のオンライン授業で使うWeb会議システムです．本学では，Zoom，Webexともにライセンスの契約を行っていますが，通常の授業ではZoomを利用するケースの方が多いようです．学生も慣れていますので，どちらを利用すべきか判断がつかない場合は，Zoomをおすすめします．
- **ECCSクラウドメール (G Suite)**：{{ about_google }}
- **UTokyo Microsoft License (Microsoft 365)**：{{ about_microsoft }}
- **UTokyo WiFi**：{{ about_utokyo_wifi }}
- **ECCS端末**：{{ about_eccs }}

### 授業URLの連絡方法

<mark>作成中</mark>

### その他

- **クラスサポーター制度**：東京大学では，オンライン授業の練習や情報収集などを支援する学生スタッフの制度「クラスサポーター」を実施しています．TAよりは軽めの内容で，全学の学生から募集して，制度の利用を希望する教員とマッチングします．詳細は[クラスサポーター制度のご案内](/supporters/class)をご覧ください．

## 困ったときは

オンライン授業に関して，トラブルや情報システムの利用方法に関する相談などは，[サポート窓口](/supports/)にご相談ください．チャット・Zoom・メールフォームの3つの方法で相談を受け付けており，学生スタッフ「コモンサポーター」と教職員の共同体制により迅速な対応を行っています．

## 各種情報システムの準備手順

<!--<mark>頭書きを書く</mark>-->

{% comment %}
以下の手順説明は他のページと共通しているため，変更があった場合に対応しやすいよう，別ファイルに記述し `include` で呼び出している．実体は `_includes/procedures/` ディレクトリにある．
{% endcomment %}

### UTokyo Account
{:#utokyo_account}

{{ about_utokyo_account }}

{% include procedures/utokyo_account.html %}

### UTAS

{{ about_utas }}

{% include procedures/utas.html %}

### ITC-LMS
{:#itc_lms}

{{ about_itc_lms }}

{% include procedures/itc_lms.html %}

詳細な使い方については，[このサイトのITC-LMSについてのページ](/lms_lecturers/)もご覧ください．

### Zoom

同時双方向型のオンライン授業で使うWeb会議システムです．

{% include procedures/zoom.html %}

詳細な使い方については，[このサイトのZoomについてのページ](/zoom/)もご覧ください．

### Webex

同時双方向型のオンライン授業で使うWeb会議システムです．作業は利用する場合のみ行えば問題ありません．

{% include procedures/webex.html %}

詳細な使い方については，[このサイトのWebexについてのページ](/webex/)もご覧ください．

### ECCSクラウドメール (G Suite)
{:#google}

{{ about_google }}

{% include procedures/google.html %}

### UTokyo Microsoft License (Microsoft 365)
{:#microsoft}

{{ about_microsoft }}

{% include procedures/microsoft.html %}

### UTokyo WiFi
{:#utokyo_wifi}

{{ about_utokyo_wifi }}

{% include procedures/utokyo_wifi.html %}

### ECCS端末
{:#eccs}

{{ about_eccs }}

{% include procedures/eccs.html %}

## 次の一歩：よりよいオンライン授業をするために

このサイト「オンライン授業・Web会議ポータルサイト@東京大学 (**utelecon**)」では，このページで挙げた情報システムを使いこなすための情報や，その他オンライン授業に役立つ情報をたくさん掲載しています．

特に，「**[よりよいオンライン授業をするために](#)**」のページでは，各種情報システムの授業での活用方法や，オンライン授業の実践例など，オンライン授業を行うにあたって次の一歩となる情報をまとめています．ぜひご覧ください．

また，**[サポート窓口](/supports/)**も設置しています．以上の手順の中でうまくいかないことがあれば，こちらへご相談ください．
