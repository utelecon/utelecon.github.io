---
title: Webex Meetingsでのエンド・エンド間暗号化機能
---

このページでは，Webex Meetingsのエンド・エンド間暗号化（End to End Encrypted Meeting）機能を用いたオンライン会議の開き方を説明します．

## 説明

Webex Meetingsには，クライアント間で暗号化された（途中で復号化されない）会議を開くことができる機能があります．（一般的なオンライン会議は，クライアント・サーバ間の通信を暗号化していますが，この機能ではサーバでは復号せず接続先のクライアントに配信します．）通常のオンライン会議よりも安全性を確保しますが，できなくなることもあります．使う目的と機能を照らし合わせて使うものを判断しましょう．

### できるようになること

* クライアント間で暗号化されたオンライン会議（スケジュールされた会議に限る）

### できなくなること

* クラウド録画（サーバ側で復号化しないのでできません）
* テレビ会議システム（H323/SIPによる接続）や電話との接続（エンド・エンド間で暗号化できないため）
* ウェブブラウザ, Linux での利用など

## アカウントについて

WebexにはUTokyo Accountでログインします．Webexのサイト **<a href="https://utelecon.webex.com" target="_blank">https://utelecon.webex.com</a>** の右上の「サインイン」をクリックし，メールアドレス欄に 共通ID（10桁ID）@utac.u-tokyo.ac.jp を入力して「次へ」をクリックすると，UTokyo Accountのログインフォームが表示されます．

## 使い方

安全な会議は以下の手順で利用してください．

[Webexで安全性の高い会議を行うためのプラクティス](how_to_open_secure_meetings)

## FAQ

* End to End 暗号化の詳細を教えてください．
	* Cisco社の以下のページを参照してください．
		* [エンドツーエンドの暗号化が行うことは?](https://help.webex.com/ja-jp/WBX44739/)
		* [Zero-Trust Security for Webex White Paper](https://www.cisco.com/c/en/us/solutions/collateral/collaboration/white-paper-c11-744553.html)
* 本当に安全ですか．
	* 検証中です．

