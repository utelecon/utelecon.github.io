---
title: Webex
---

{% include sso.html %}

## はじめに

* <a href="https://www.datanyze.com/market-share/web-conferencing--52" target="_blank" rel="noopener">3番目にシェアの大きい</a>Web会議システムです
* デフォルトのライセンスで1000人まで参加可能になっているので大規模人数の会議をする人にはおすすめです
* End-to-end暗号化された(クラウド上でも復号化されない)会議が開催可能で, 高い機密性の必要な(または検閲などの恐れの少ない)会議が必要な場合にもおすすめです
* 投票, ブレークアウト, 全員ミュート, などの機能もあります
* アプリをインストールせずWebブラウザだけでも使えますが基本的な機能に制限されます
* アプリはWindows, Mac, iOS, Androidに対応しています(Linuxには対応していません)
* 複数の会議に同時に参加できま, 複数の会議を同時に開催できます


<a name="webex_meetings"></a>
## 利用の流れ (Webexミーティング)

(初期設定)はまだやったことがない場合のみ行ってください(毎回行う必要はありません).

* 開催者
  1. (初期設定) <a href="create_utelecon_account">アカウントを作成</a>
  1. (初期設定) <a href="https://utelecon.webex.com/webappng/sites/utelecon/dashboard/download" target="_blank" rel="noopener">Cisco Webex Meetingsアプリをインストール.</a>  アプリをインストールせず, Webブラウザ（FirefoxまたはGoogle Chromeを推奨）でも, 一部機能が制限されますが利用可能です.
  1. Webexに<a href="https://utelecon.webex.com/" target="_blank" rel="noopener">ログイン</a>
  1. <a href="create_meeting">ミーティングを作成</a>
  1. <a href="open_meeting">ミーティングを開始</a>
    * 開催者が明示的に「開始」するまで他の参加者はつなげません
    * <a href="do_meeting">ミーティングでできること（開催者・参加者）</a>
    * <a href="do_meeting_host">ミーティングでできること（開催者）</a>
{% comment %}
    * 授業での使い方
      * <a href="classroom_screen_sharing">［画面共有］資料を提示する</a>執筆中
      * <a href="classroom_chat">［チャット］質問を受け付ける</a>執筆中
      * <a href="classroom_poll">［投票］学生に質問する</a>執筆中
      * <a href="classroom_record">［レコーディング］授業を録画する</a>執筆中
{% endcomment %}
{% comment %}
      * <a href="open_meeting_vc">テレビ会議システムで会議を開きます</a>
        * <a href="do_meeting_vc">会議室でできること（テレビ会議システムからの開催者・参加者）</a>
{% endcomment %}
  
* 参加者
  1. (初期設定) <a href="https://utelecon.webex.com/webappng/sites/utelecon/dashboard/download" target="_blank" rel="noopener">Cisco Webex Meetingsアプリをインストール.</a>  アプリをインストールせず, Webブラウザ（FirefoxまたはGoogle Chromeを推奨）でも, 一部機能が制限されますが利用可能です.
  1. 会議室の情報（URLなど）をメールなどを用いて開催者から得ます．
  1. 会議へ<a href="join_meeting">参加</a>
    * 開催者が会議を開始していない場合，会議の情報が表示されるだけで，会議室へは入れません
    * <a href="do_meeting">会議室でできること（開催者・参加者）</a>

## 接続テスト

利用するコンピュータがWebexのオンライン会議に接続できるかどうかを確認するために，Cisco社に協力頂き，<a href="https://hiono-sandbox.webex.com/join/narumi" target="_blank" rel="noopener">テストサイト</a>（平日の9:00～17:00）を用意しています．接続してみてください．（東京大学以外の方もぜひどうぞ！）


## その他のWebexサービスについて

* Webexは，一般的には**Webex Meetings**が使われていますが，他にも**Webex Training**，**Webex Events**，**Webex Support**があり, 全部で4種類があります．それぞれ長短があります．
  * [詳細な比較はこちらから](https://www.cisco.com/c/ja_jp/products/conferencing/product_comparison.html)

* **Webex Meetings**
  * 最大参加者数は1,000．うちテレビ会議システムからの接続最大200を含む．
  * **テレビ会議システム（いわゆるPolycom等）からの接続が可能．ブレイクアウトセッションをおこなうこともできる．**
  * 参加者同士が同じ立場で，双方向でやりとりのある会議等に使われることが多い．
* Webex Training
  * 最大参加者数は1,000．
  * ブレイクアウトセッションや**テスト等**をおこなうことができる．
  * パネリストやテストが必要なインタラクティブな講義等に使われることもある．
* **Webex Events**
  * 最大参加者数は1,000．
  * **プレゼンターはテレビ会議システム（いわゆるPolycom等）からの接続が可能．**
  * 1対nで，nが25を超えるような中～大規模なイベント等に用いられる．
* Webex Support
  * 1セッション5名，同時最大8セッション開催可能
  * タブレット・スマートホンは不可．
  * 基本的に1:1のITサポートに用いられる．

### Webex Training利用の流れ

* 開催者
  1. (初期設定) <a href="create_utelecon_account">アカウントを作成</a>
  1. (初期設定) <a href="https://utelecon.webex.com/webappng/sites/utelecon/dashboard/download" target="_blank" rel="noopener">Cisco Webex Meetingsアプリをインストール</a>
  1. Webexに<a href="https://utelecon.webex.com/" target="_blank" rel="noopener">ログイン</a>
  1. <a href="create_training">トレーニングを作成</a>
  1. <a href="open_training">トレーニングを開始</a>
    * 開催者が明示的に「開始」するまで他の参加者はつなげません
    * <a href="do_training">トレーニングでできること（開催者・参加者）</a>
    * <a href="do_training_host">トレーニングでできること（開催者）</a>

* 参加者
  1. トレーニングの情報（URLなど）をメールなどを用いて開催者から得ます．
  1. トレーニングに<a href="join_training">参加</a>
    * 開催者がトレーニングを開始していない場合，情報が表示されるだけで，会議室へは入れません．
    * <a href="do_training">トレーニングでできること（開催者・参加者）</a>

### Webex Events利用の流れ

* 開催者
  1. (初期設定) <a href="create_utelecon_account">アカウントを作成</a>
  1. (初期設定) <a href="https://utelecon.webex.com/webappng/sites/utelecon/dashboard/download" target="_blank" rel="noopener">Cisco Webex Meetingsアプリをインストール</a>
  1. Webexに<a href="https://utelecon.webex.com/" target="_blank" rel="noopener">ログイン</a>
  1. <a href="create_events">イベントを作成</a>
  1. <a href="open_events">イベントを開始</a>
    * 開催者が明示的に「開始」するまで他の参加者はつなげません
    * <a href="do_events">イベントでできること（開催者・参加者）</a>
    * <a href="do_events_host">イベントでできること（開催者）</a>
    * <a href="join_events_vc">テレビ会議システムでパネリストとして参加します</a>

* 参加者
  1. イベントの情報（URLなど）をメールなどを用いて開催者から得ます．
  1. イベントに<a href="join_events">参加</a>
    * 開催者がイベントを開始していない場合，情報が表示されるだけで，会議室へは入れません．
    * <a href="do_events">イベントでできること（開催者・参加者）</a>
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

