---
title: UTokyo VPN
---

## はじめに
{:#introduction}



UTokyo VPNは東京大学全学の構成員（教職員および学生）が利用できるVPNサービスです．学外で端末からUTokyo VPNに接続すると，その端末は情報基盤センターに設置されたVPNゲートウェイを経由して通信を行うようになり，端末は仮想的に東京大学キャンパスネットワークであるUTNETに接続されている状態になります．

UTokyo VPNを利用するには，まず自身の端末にVPNクライアントアプリケーションであるAnyConnectをインストールします．インストールしたアプリケーションを起動すると，UTokyo Accountの認証を経てVPNゲートウェイに接続し，端末からの通信は基本的にVPN経由でUTNETを通じて外部と通信するようになります．ただし，ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどへの通信は除きます．

### 電子ジャーナルへのアクセスについて
{:#journal}

UTokyo VPN経由で東京大学附属図書館が契約・提供する電子ジャーナル等にアクセスすることはできません．附属図書館が契約・提供する電子ジャーナル・電子ブック・データベースを学外から利用するには、附属図書館が提供するEZProxyを使います．Google検索などで見つかった出版社の論文ページから、すばやく論文PDFを入手するには、[こちらのページ](https://note.com/k_yamamoto/n/n0ee13fe38f24)でも紹介されている、[ブックマークレットを使って読む](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy/others#marklet)方法が便利です。もちろん契約外の論文は入手できませんし、契約していてもこの方法で入手できない場合もあります。詳しい利用方法や、利用対象者は図書館の[EZproxy（イージープロキシー）経由で利用する](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy) のページ、[補足情報：学外にいるとき、みつけた論文を読む方法あれこれ](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy/others)をご一読ください．


## 利用にあたって
{:#note}

**利用対象者:** UTokyo Accountを持つ東京大学 構成員（教職員・学生）

**利用できる端末の種類:** UTokyo VPNは，WindowsやmacOSなどのコンピュータで利用できます．また，AndroidやiPhone，iPadなどのモバイル端末からも利用可能です．サポートされているバージョンはそれぞれ以下の通りです．

- Windows: Windows 10, 11
- macOS: macOS 10.15 Catalina, 11 Big Sur, 12 Monterey
- Android: Android 9, 10, 11, 12
- iOS: iOS 14, 15
- iPadOS: iPadOS 14, 15

### 情報セキュリティ教育
{:#information-security-education}

東京大学では毎年度，UTokyo Accountを持つ全ての方を対象に，[情報セキュリティ教育](https://www.u-tokyo.ac.jp/adm/dics/ja/securityeducationvideo.html)を実施しています．実施時期（2022年度の場合，学生は5月から，教職員は7月から）になりましたら通知がありますので，必ず受講してください．**所定の時期に情報セキュリティ教育の受講を完了されなかった場合，UTokyo VPNの利用資格を停止します．**

<details>
	<summary>着任・入学時には情報セキュリティ教育の受講期間が終了していた場合</summary>
	この場合，UTokyo VPNの利用資格は停止されず，着任・入学時からUTokyo VPNを利用可能です．<a href="https://www.u-tokyo.ac.jp/adm/dics/ja/securityeducationvideo.html">情報セキュリティ教育</a>のページにある「情報セキュリティ教育 教材」をよくお読みの上，UTokyo VPNをご利用ください．なお，情報セキュリティ教育は毎年度実施されますので，来年度以降はご受講ください．
</details>
<details>
	<summary>所定の時期に情報セキュリティ教育の受講を完了しなかった場合</summary>
	所定の期間内に情報セキュリティ教育を受講していない場合に表示されるエラーです．UTokyo VPNの利用には情報セキュリティ教育の受講が必須です．情報セキュリティ教育の受講は，所定の受講期間を過ぎていてもITC-LMSから可能となっているので，受講してください．そのうえで，<a href="https://www.u-tokyo.ac.jp/adm/dics/ja/securityeducationvideo.html">情報セキュリティ教育のページ</a>の下部の「お問い合わせ」から，今後の対応についてお問い合わせください．
	<div>それでもうまくいかなければ，<a href="/support/">サポート窓口</a>に相談してください．</div>
</details>

### UTokyo Accountの多要素認証
{:#mfa}

セキュリティの観点より，UTokyo VPNの利用に当たってはUTokyo Accountの多要素認証の有効化を必須としております．「**[UTokyo Accountにおける多要素認証の利用について](/utokyo_account/mfa/)**」のページにある初期設定手順を**最後の「手順4：多要素認証の利用を申請する」まで確実に**行って，UTokyo Accountの多要素認証を有効にしてください．その後，多要素認証の設定が**システムに反映されるまで約40分かかるので，それまでしばらく待ってからUTokyo VPNを利用**してください．

## UTokyo VPNの利用手順
{:#how-to-use}

UTokyo VPNを利用するには，専用のアプリ「Cisco AnyConnect」または「Cisco Secure Client」を端末にインストールし，接続を行います．以下の各ページで，OSごとにその方法を説明しています．なお，初期設定を含めたすべての作業を学外から行うことが可能です．

* [Windows端末でUTokyo VPNを利用する](windows)
* [macOS端末でUTokyo VPNを利用する](macos)
* [Android端末でUTokyo VPNを利用する](android)
* [iPad端末でUTokyo VPNを利用する](ipad)
* [iPhone端末でUTokyo VPNを利用する](iphone)
{:.cards}

## FAQ
{:#faq}

### Q. VPN接続時にもローカルにあるプリンタを利用したい

UTokyo VPN接続時は，そのままだとコンピュータの繋がっているローカルネットワークへの通信もVPNを経由します．VPNに接続したままローカルネットワークに設置されたプリンタ等を利用したい場合は，AnyConnect Secure Mobility Clientのウィンドウの左下，歯車のボタンをクリックしてください．すると下記のようなウィンドウが出てきます．このウィンドウの「Preferences」タブから，「Allow local (LAN) access when using VPN (if configured)」にチェックをつけてください．

<div class="gallery">
  <figure class="center">
    <img src="img/win08-anyconnect-win-pref.png" class="border">
    <figcaption>Windowsの場合</figcaption>
  </figure>
  <figure class="center">
    <img src="img/mac09-anyconnect-mac-pref.png" class="border">
    <figcaption>macOSの場合</figcaption>
  </figure>
</div>

### Q. 利用対象者は「UTokyo Accountを持つ本学構成員（教職員および学生）」とあるが，本学の学生と雇用者に限られるという事か．それとも，派遣職員や客員研究員等，本学で勤務または研究している者も含まれるか

派遣職員や客員研究員等，本学で勤務または研究している者も含まれます．

### Q. UTokyo VPNに接続すると何ができるのか

UTokyo VPNに接続することで，職員証の発行や就労管理システム，出張申請など，学内からのみアクセスできるサービスに，学外にいながらアクセスすることができます．

### Q. 部局で管理している学内向けサイトは閲覧可能になるか

部局のサイトがどのようなアクセス制限をかけているかによるため，部局のサイト管理者にご確認ください．

### Q. 部局で提供しているVPNサービスと同じものなのか

UTokyo VPNと，部局がそれぞれ独自に提供しているVPNサービスは基本的に無関係です．詳細は部局のネットワーク担当者にご確認ください．

### Q. UTokyo Wi-Fiのアカウントのように半年ごとに新規のアカウント取得は必要か

UTokyo VPNの認証はUTokyo Wi-FiのアカウントではなくUTokyo Accountで行います．そのため基本的に利用者のアカウントの変更は起こらず，継続して利用が可能です．ただし，利用には年１回実施する情報セキュリティ教育の受講が必要です．

## 規程
{:#term}

- [UTokyo VPN利用規程](terms/UTokyoVPN-User-Term.pdf)
- [UTokyo VPN運用規程](terms/UTokyoVPN-Operation-Term.pdf)


## 問い合わせ
{:#inquiry}

問い合わせは**[サポート窓口](/support/)**で受け付けています．
