---
title: Webex
---

{% include sso.html %}

## はじめに

* デフォルトのライセンスで1000人まで参加可能になっているので大規模人数の会議をする人にはおすすめです
* End-to-end暗号化された(クラウド上でも復号化されない)会議が開催可能で, 高い機密性の必要な(または検閲などの恐れの少ない)会議が必要な場合にもおすすめです
* 投票, ブレークアウト, 全員ミュート, などの機能もあります
* アプリをインストールせずWebブラウザだけでも使えますが基本的な機能に制限されます
* アプリはWindows, Mac, iOS, Androidに対応しています(Linuxには対応していません)
* 複数の会議への同時参加,および複数の会議の同時開催が可能です


<a name="webex_meetings"></a>

## Webexサービスについて
* Webexは，一般的にはWebex Meetingsが使われていますが，他にもWebex Training，Webex Events，Webex Supportがあり, 全部で4種類があります．それぞれ長短があります．
	* [詳細な比較はこちらから](https://utelecon.adm.u-tokyo.ac.jp/zoom/join)
* Webex Meetings
	* 最大参加者数は1,000．うちテレビ会議システムからの接続最大200を含む．
	* テレビ会議システム（いわゆるPolycom等）からの接続が可能．ブレイクアウトセッションをおこなうこともできる
	* 参加者同士が同じ立場で，双方向でやりとりのある会議等に使われることが多い．
* Webex Training
	* 最大参加者数は1,000．
	* ブレイクアウトセッションやテスト等をおこなうことができる．
	* パネリストやテストが必要なインタラクティブな講義等に使われることもある．
* Webex Events
	* 最大参加者数は1,000．
	* プレゼンターはテレビ会議システム（いわゆるPolycom等）からの接続が可能．
	* 1対nで，nが25を超えるような中～大規模なイベント等に用いられる.
* Webex Support
	* 1セッション5名，同時最大8セッション開催可能
	* タブレット・スマートホンは不可．
	* 基本的に1:1のITサポートに用いられる．

* 以下では授業で使用される可能性が極めて低いWebex Support以外の3つのサービスについて,利用方法を説明していきます.

## 利用開始の手順
* 以下の手順は参加者が東大アカウントに限定されている会議に参加する場合のみ必要な手順です。特に参加制限のない会議に参加するだけの場合は開催者からもらったURL等を開くだけで参加することが可能です。

**Webex Meetings利用の流れ**
* 開催者
1. [Webexにサインイン](/oc/#Webex)
2. [ミーティングを作成](/webex/create_meeting)
3. [ミーティングを開始](/webex/open_meeting)
  - 開催者が明示的に「開始」するまで他の参加者はつなげません
  - [ミーティングで出来ること（開催者・参加者共通）](/webex/do_meeting)
  - [ミーティングでできること（開催者限定）](/webex/do_meeting_host)

*参加者
1. [Webexにサインイン](/oc/#Webex)
2. 会議室の情報（URLなど）をメールなどを用いて開催者から得ます．
3. [会議へ参加](/webex/join_meeting)
4. ミーティングをおこないます
  - 開催者が明示的に「開始」するまで他の参加者はつなげません
  - [ミーティングで出来ること（開催者・参加者共通）](/webex/do_meeting)

**Webex Training利用の流れ**
* 開催者
1. [Webexにサインイン](/oc/#Webex)
2. [トレーニングを作成](/webex/create_training)
3. [トレーニングを開始](/webex/open_training)
  - 開催者が明示的に「開始」するまで他の参加者はつなげません
  - [トレーニングで出来ること（開催者・参加者共通）](/webex/do_training)
  - [トレーニングでできること（開催者限定）](/webex/do_training_host)

*参加者
1. [Webexにサインイン](/oc/#Webex)
2. 会議室の情報（URLなど）をメールなどを用いて開催者から得ます．
3. [トレーニングへ参加](/webex/join_training)
4. トレーニングをおこないます
  - 開催者が明示的に「開始」するまで他の参加者はつなげません
  - [トレーニングで出来ること（開催者・参加者共通）](/webex/do_training)

**Webex Events利用の流れ**
* 開催者
1. [Webexにサインイン](/oc/#Webex)
2. [イベントを作成](/webex/create_events)
3. [イベントを開始](/webex/open_events)
  - 開催者が明示的に「開始」するまで他の参加者はつなげません
  - [イベントで出来ること（開催者・参加者共通）](/webex/do_events)
  - [イベントでできること（開催者限定）](/webex/do_events_host)
　- [Webexではないテレビ会議システムで参加する](/webex/join_events_vc)

*参加者
1. [Webexにサインイン](/oc/#Webex)
2. 会議室の情報（URLなど）をメールなどを用いて開催者から得ます．
3. [イベントへ参加](/webex/join_events)
4. イベントをおこないます
	* 開催者が明示的に「開始」するまで他の参加者はつなげません
	* [イベントで出来ること（開催者・参加者共通）](/webex/do_events)

## 接続テスト

利用するコンピュータがWebexのオンライン会議に接続できるかどうかを確認するために，Cisco社に協力頂き，<a href="https://hiono-sandbox.webex.com/join/narumi" target="_blank" rel="noopener">テストサイト</a>（平日の9:00～17:00）を用意しています．接続してみてください．（東京大学以外の方もぜひどうぞ！）





{% comment %}
## 授業の例
* 授業例は<a href="browse_samples">こちら</a>
{% endcomment %}

{% comment %}
## サブページ一覧
* <a href="create_utelecon_account">Webex アカウントの作成とログイン</a>	

* <a href="create_meeting">会議室を作成する</a> 
* <a href="open_meeting">Webex 会議の開始</a> 
* <a href="open_meeting_vc">Webex 会議の開始 （テレビ会議システム）</a> 
* <a href="join_meeting">Webex 会議への参加</a> 
* <a href="join_meeting_vc">Webex 会議への参加 （テレビ会議システム）</a> 
* <a href="do_meeting">Webex 会議室でできること（開催者・参加者）</a> 
* <a href="do_meeting_vc">Webex 会議室でできること（テレビ会議システムからの開催者・参加者）</a>
* <a href="do_meeting_host">Webex 会議室でできること（開催者）</a> 

* <a href="encrypted_meeting">Webex Meetingsでのエンド・エンド間暗号化機能</a>
* <a href="how_to_open_secure_meetings">Webexで安全性の高い会議を行うためのプラクティス</a>

* <a href="create_training">トレーニングを作成する</a> 
* <a href="open_training">Webex Trainingの開始</a> 
* <a href="join_training">Webex Trainingへの参加</a> 
* <a href="do_training">Webex Trainingでできること（開催者・参加者）</a> 
* <a href="do_training_host">Webex Trainingでできること（開催者）</a> 

* <a href="create_events">イベントを作成する</a> 
* <a href="open_events">Webex Eventsの開始</a> 
* <a href="join_events">Webex Eventsへの参加</a> 
* <a href="join_events_vc">Webex Eventsへの参加 （テレビ会議システム）</a> 
* <a href="do_events">Webex Eventsでできること（開催者・参加者）</a> 
* <a href="do_events_host">Webex Eventsでできること（開催者）</a> 
{% endcomment %}

{% comment %}
* 授業での使い方
	* <a href="classroom_screen_sharing">［画面共有］資料を提示する</a>執筆中
	* <a href="classroom_chat">［チャット］質問を受け付ける</a>執筆中
	* <a href="classroom_poll">［投票］学生に質問する</a>執筆中
	* <a href="classroom_record">［レコーディング］授業を録画する</a>執筆中
	* Webex Trainingのみ：<a href="classroom_breakout">［ブレイクアウト］グループワークを促す</a>執筆中
{% endcomment %}

{% comment %}
## お知らせ
* <a href="../notice/webex20200601">UTokyo 90Days Cisco Webexサービスの継続利用について</a>
* <a href="../notice/webmeetingtools">Web会議サービス「Zoom」「Webex」「Google Meet」の継続利用について</a>

## はじめに

* ここでは Web会議システム Webex の特徴や利用の流れについて説明します．このページでは全体的な特徴や大まかな流れを説明し,具体的な部分はサブページで説明します．
* 本学のGoogleメール（共通ID10桁@g.ecc.u-tokyo.ac.jp, 以下ECCSクラウドメールエイリアスと呼びます）をIDとして Webexアカウントを作成し，Webexによってオンラインで会議や授業を行うことができます．アカウントの取得方法は[Webex アカウントの作成とログイン](create_utelecon_account)を参照してください.
* 会議室に参加するだけであればアカウントを作る必要はありません．
* End to End 暗号化された会議も開けます．詳細は[Webex Meetingsでのエンド・エンド間暗号化機能](encrypted_meeting)を参照してください．
* 本ページでは基本的に PC での利用について説明しますが，タブレットやスマートフォンでもアプリを用いることで Webex を使えます.
* Webex MeetingsとWebex Eventsを使用する場合，最大200台までテレビ会議システム（いわゆるPolycom等）を接続することができます．**テレビ会議システムから何でもかんでもできるわけではありません．テレビ会議システムからの参加は事前に十分味見をしてからどうぞ．**
{% endcomment %}

