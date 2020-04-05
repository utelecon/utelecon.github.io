---
title: How to use Webex
layout: en
---


## はじめに

* 会議室に参加するだけであればアカウントを作る必要はありません	
* 2020年6月8日まで（それ以降は検討中）は本学のGoogleメール（共通ID10桁@g.ecc.u-tokyo.ac.jp, 以下ECCSクラウドメールと呼びます）のメールアドレスで Webexアカウントを作成し，Webexによってオンラインで会議や授業を行うことができます．
* 同時接続可能数は1000です．
* **Webex MeetingsとWebex Eventsを使用する場合，最大200台までテレビ会議システム（いわゆるPolycom等）を接続することができますが，6月8日までのECCSクラウドメールベースのWebex Meetings/Webex Eventsでは利用できません．また，テレビ会議システムから何でもかんでもできるわけではありません．テレビ会議システムからの参加は事前に十分味見をしてからどうぞ．**
* ここでは Web会議システム Webex の特徴や利用の流れについて説明します．このページでは全体的な特徴や大まかな流れを説明し,具体的な部分はサブページで説明します.
* 本ページでは基本的に PC での利用について説明しますが，タブレットやスマートフォンでもアプリを用いることで WebEx を使えます.
* 参考：[UTokyo 90 Days Cisco Webex](https://www.u-tokyo.ac.jp/adm/dics/ja/90dayswebex.html)

### Webexサービスについて

* Webexは，一般的には**Webex Meetings**が使われていますが，ほかにも**Webex Training**，**Webex Events**，**Webex Support**の全部で４種類があります．それぞれ長短があります．
	* [詳細な比較はこちらから](https://www.cisco.com/c/ja_jp/products/conferencing/product_comparison.html)

* **Webex Meetings**
	* 最大参加者数は1,000．うちテレビ会議システムからの接続最大200を含む．
	* **テレビ会議システム（いわゆるPolycom等）からの接続が可能．**
	* 参加者同士が同じ立場で，双方向でやりとりのある会議等に使われることが多い．
* **Webex Training**
	* 最大参加者数は1,000．
	* **ブレイクアウトセッションをおこなうことができる．**
	* ブレイクアウトセッションが必要なインタラクティブな講義等に使われることが多い．
* **Webex Events**
	* 最大参加者数は1,000．
	* **プレゼンターはテレビ会議システム（いわゆるPolycom等）からの接続が可能．**
	* 1対nで，nが25を超えるような中～大規模なイベント等に用いられる．
* Webex Support
	* 1セッション5名，同時最大8セッション開催可能
	* タブレット・スマートホンは不可．
	* 基本的に1:1のITサポートに用いられる．

## Webexサービスを利用するための事前準備
{% comment %}
* PC，タブレット，スマートフォンなど接続用デバイスを用意します．
	* マイクやカメラが内蔵されていない場合はそれらも用意します．
	* 一台のPCを同じ部屋の複数人で共有したり，講義室で登壇する人の姿を写したりする場合など，PCと参加者の距離が遠い場合，外付けのUSBカメラや高感度マイクを接続することを推奨します．
* インターネットへの接続環境を用意します．
	* 従量課金だと通信料の高額請求につながる恐れがあります．
	* 基本的には，接続しているインターネット環境に応じて画質等が自動的に変更され，あらゆる帯域の環境でも利用できますが，YouTubeがスムーズに見れないほどの厳しい環境では利用は厳しいかも知れません．
{% endcomment %}
* 開催者
	1. デスクトップアプリやアプリを接続用デバイスへインストールします．
		* <a href="https://www.webex.com/ja/downloads.html" target="_blank">Cisco Webex ダウンロード</a> からCisco Webex Meetingsアプリをダウンロードすることができます．
		* Webex Meetingsの場合には，アプリケーションがインストールできない場合はWebブラウザ（FirefoxまたはGoogle Chromeを推奨）でも利用可能ですが，一部機能が制限されます．
	1. ECCSクラウドメールを有効化します（<a href="https://hwb.ecc.u-tokyo.ac.jp/wp/literacy/email/initialize/" target="_blank">詳細</a>）
	1. WebExアカウントを作成します（<a href="create_webex_account" target="_blank">詳細</a>）
* 参加者
	1. デスクトップアプリやアプリを接続用デバイスへインストールします．
		* <a href="https://www.webex.com/ja/downloads.html" target="_blank">Cisco Webex ダウンロード</a> からCisco Webex Meetingsアプリをダウンロードすることができます．
		* Webex Meetingsの場合には，アプリケーションがインストールできない場合はWebブラウザ（FirefoxまたはGoogle Chromeを推奨）でも利用可能ですが，一部機能が制限されます．

## Webex Meetings利用の流れ

* 開催者
	1. WebExにログインします（<a href="create_webex_account" target="_blank">詳細</a>）
	1. 会議室を設定します（<a href="create_meeting" target="_blank">詳細</a>）
	1. 会議を開きます（<a href="open_meeting" target="_blank">詳細</a>）
		* **会議を開始するためには，開催者が明示的に「開始」する必要があります．**
		* <a href="do_meeting" target="_blank">会議室でできること（開催者・参加者）</a>
		* <a href="do_meeting_host" target="_blank">会議室でできること（開催者）</a>
{% comment %}
		* 授業での使い方
			* <a href="classroom_screen_sharing" target="">［画面共有］資料を提示する</a>執筆中
			* <a href="classroom_chat" target="">［チャット］質問を受け付ける</a>執筆中
			* <a href="classroom_poll" target="">［投票］学生に質問する</a>執筆中
			* <a href="classroom_record" target="">［レコーディング］授業を録画する</a>執筆中
{% endcomment %}

	* <a href="open_meeting_vc" target="_blank">テレビ会議システムで会議を開きます</a> **6月8日までのECCSクラウドメールベースのWebex Meetingsでは利用できません．**
		* <a href="do_meeting_vc" target="_blank">会議室でできること（テレビ会議システムからの開催者・参加者）</a>
{% comment %}
		* 授業での使い方	
			* <a href="classroom_screen_sharing" target="">［画面共有］資料を提示する</a>	
{% endcomment %}

* 参加者
	1. 会議室の情報（URLなど）をメールなどを用いて開催者から得ます．
	1. 会議室へ入ります（<a href="join_meeting" target="_blank">詳細</a>）
		* 開催者が会議を開始していない場合，会議の情報が表示されるだけで，会議室へは入れません．
		* <a href="do_meeting" target="_blank">会議室でできること（開催者・参加者）</a>

	* <a href="join_meeting_vc" target="_blank">テレビ会議システムで会議室へ入ります</a> **6月8日までのECCSクラウドメールベースのWebex Meetingsでは利用できません．**
		* 開催者が会議を開始していない場合，会議室に入れずにテレビ会議が切断されます．
		* <a href="do_meeting_vc" target="_blank">会議室でできること（テレビ会議システムからの開催者・参加者）</a>

## Webex Training利用の流れ

* 開催者
	1. WebExにログインします（<a href="create_webex_account" target="_blank">詳細</a>）
	1. トレーニングを設定します（<a href="create_training" target="_blank">詳細</a>）
	1. トレーニングを開始します（<a href="open_training" target="_blank">詳細</a>）
		* **トレーニングを開始するためには，開催者が明示的に「開始」する必要があります．**
		* <a href="do_training" target="_blank">トレーニングでできること（開催者・参加者）</a>
		* <a href="do_training_host" target="_blank">トレーニングでできること（開催者）</a>

* 参加者
	1. トレーニングの情報（URLなど）をメールなどを用いて開催者から得ます．
	1. トレーニングに参加します（<a href="join_training" target="_blank">詳細</a>）
		* 開催者がトレーニングを開始していない場合，情報が表示されるだけで，会議室へは入れません．
		* <a href="do_training" target="_blank">トレーニングでできること（開催者・参加者）</a>

## Webex Events利用の流れ

* 開催者
	1. WebExにログインします（<a href="create_webex_account" target="_blank">詳細</a>）
	1. イベントを設定します（<a href="create_events" target="_blank">詳細</a>）
	1. イベントを開始します（<a href="open_events" target="_blank">詳細</a>）
		* **イベントを開始するためには，開催者が明示的に「開始」する必要があります．**
		* <a href="do_events" target="_blank">イベントでできること（開催者・参加者）</a>
		* <a href="do_events_host" target="_blank">イベントでできること（開催者）</a>

	* <a href="join_events_vc" target="_blank">テレビ会議システムでパネリストとして参加します</a> **6月8日までのECCSクラウドメールベースのWebex Meetingsでは利用できません．パネリストとしての参加しかできません．**

* 参加者
	1. イベントの情報（URLなど）をメールなどを用いて開催者から得ます．
	1. イベントに参加します（<a href="join_events" target="_blank">詳細</a>）
		* 開催者がイベントを開始していない場合，情報が表示されるだけで，会議室へは入れません．
		* <a href="do_events" target="_blank">イベントでできること（開催者・参加者）</a>

{% comment %}
## 授業の例

* 授業例は<a href="browse_samples" target="_blank">こちら</a>

{% endcomment %}
## サブページ一覧
* <a href="create_webex_account" target="_blank">Webex アカウントの作成とログイン</a>	

* <a href="create_meeting" target="_blank">会議室を作成する</a> 
* <a href="open_meeting" target="_blank">Webex 会議の開始</a> 
* <a href="open_meeting_vc" target="_blank">Webex 会議の開始 （テレビ会議システム）</a> 
* <a href="join_meeting" target="_blank">Webex 会議への参加</a> 
* <a href="join_meeting_vc" target="_blank">Webex 会議への参加 （テレビ会議システム）</a> 
* <a href="do_meeting" target="_blank">Webex 会議室でできること（開催者・参加者）</a> 
* <a href="do_meeting_vc" target="_blank">Webex 会議室でできること（テレビ会議システムからの開催者・参加者）</a>
* <a href="do_meeting_host" target="_blank">Webex 会議室でできること（開催者）</a> 

* <a href="create_training" target="_blank">トレーニングを作成する</a> 
* <a href="open_training" target="_blank">Webex Trainingの開始</a> 
* <a href="join_training" target="_blank">Webex Trainingへの参加</a> 
* <a href="do_training" target="_blank">Webex Trainingでできること（開催者・参加者）</a> 
* <a href="do_training_host" target="_blank">Webex Trainingでできること（開催者）</a> 

* <a href="create_events" target="_blank">イベントを作成する</a> 
* <a href="open_events" target="_blank">Webex Eventsの開始</a> 
* <a href="join_events" target="_blank">Webex Eventsへの参加</a> 
* <a href="join_events_vc" target="_blank">Webex Eventsへの参加 （テレビ会議システム）</a> 
* <a href="do_events" target="_blank">Webex Eventsでできること（開催者・参加者）</a> 
* <a href="do_events_host" target="_blank">Webex Eventsでできること（開催者）</a> 
{% comment %}
* 授業での使い方
	* <a href="classroom_screen_sharing" target="">［画面共有］資料を提示する</a>執筆中
	* <a href="classroom_chat" target="">［チャット］質問を受け付ける</a>執筆中
	* <a href="classroom_poll" target="">［投票］学生に質問する</a>執筆中
	* <a href="classroom_record" target="">［レコーディング］授業を録画する</a>執筆中
	* Webex Trainingのみ：<a href="classroom_breakout" target="">［ブレイクアウト］グループワークを促す</a>執筆中
{% endcomment %}

