---
title: UTokyo VPN
---

## はじめに
{:#introduction}



UTokyo VPNは東京大学全学の構成員（教職員および学生）が利用できるVPNサービスです．学外で端末からUTokyo VPNに接続すると，その端末は情報基盤センターに設置されたVPNゲートウェイを経由して通信を行うようになり，端末は仮想的に東京大学キャンパスネットワークであるUTNETに接続されている状態になります．

UTokyo VPNを利用するには，まず自身の端末にVPNクライアントアプリケーションであるAnyConnectをインストールします．インストールしたアプリケーションを起動すると，UTokyo Accountの認証を経てVPNゲートウェイに接続し，端末からの通信がVPN経由でUTNETを通じて外部と通信するようになります．

## 利用にあたって
{:#note}

**利用対象者:** UTokyo Accountを持つ東京大学 構成員（教職員・学生） <span style="color: red; ">学生への提供を開始しました。</span>

**情報セキュリティ教育:** 東京大学では毎年度，UTokyo Accountを持つ全ての方を対象に，[情報セキュリティ教育](https://www.u-tokyo.ac.jp/adm/dics/ja/securityeducationvideo.html)を実施しています．実施時期（学生は5月から，教職員は7月から）になりましたら通知がありますので，必ず受講してください．**所定の時期に情報セキュリティ教育の受講を完了されなかった場合，UTokyo VPNの利用資格を停止します．**なお，未受講者への対応に関するお問い合わせは， `jouhousecurity.adm __at__gs.mail.u-tokyo.ac.jp` （`__at__`は@に変更）にて受け付けております．

**多要素認証の有効化:** UTokyo VPNを利用するためには，UTokyo Accountの多要素認証を有効にする必要があります．[Utokyo Accountにおける多要素認証の利用について](https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/)を参照し，UTokyo Accountの多要素認証を有効にしてください<span style="color: red; ">(多要素認証を申請して40分が経過するとUTokyo VPNが利用可能となります)．</span>

**利用できるコンピュータの種類:** UTokyo VPNに接続できるコンピュータは WindowsおよびmacOSの下記のバージョンです．iPhoneやAndroidなどのスマートフォンでも利用可能ですが，現時点ではマニュアル等のサポートは提供しておりません．
- Windows: Windows 11，10，8.1
- macOS: macOS 12 Monterey，11 Big Sur，10.15 Catalina，10.14 Mojave

**電子ジャーナルへのアクセス:** UTokyo VPN経由で電子ジャーナル等にアクセスすることはできません．附属図書館が契約・提供する電子ジャーナル・電子ブック・データベースの学外からの利用については附属図書館ウェブサイト[EZproxy（イージープロキシー）経由で利用する](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy) を参照してください．


## VPNクライアントアプリケーションのインストール方法と使用方法
{:#how-to-install-use}

VPNクライアントアプリケーションを端末にダウンロード，インストール，そして実際に接続する方法をOSごとに説明しています．

* [Windows端末でUTokyo VPNを利用する](windows)
* [macOS端末でUTokyo VPNを利用する](macos)
* [Android端末でUTokyo VPNを利用する](android)
* [iPad端末でUTokyo VPNを利用する](ipad)
* [iPhone端末でUTokyo VPNを利用する](iphone)

## FAQ
{:#faq}

### VPNクライアントのインストールや接続時の問題
{:#faq-install-connection}

#### Q. 準備編 手順Aで「これに対するアクセス権がありません」または「You don't have access to this」というエラーが表示される

<!-- 各OSの説明にも載せているので，コピーすることで編集の手間を省く -->

{% include utokyo_vpn/faq-prepare01.md %}

#### Q. 準備編 手順Bでダウンロードページが表示されず，真っ白なページが表示される（Windows, MacOS）

{% include utokyo_vpn/faq-prepare03.md %}

#### Q. 準備編 手順Bで「セッション管理データベースを更新できません」または「Unable to update the session management database」と表示されダウンロードページが表示されない

{% include utokyo_vpn/faq-prepare02.md %}

#### Q. 利用編 接続するときに「AnyConnect profile settings mandate a single local user, but multiple local users are currently logged into your computer. A VPN connection will not be established」というエラーが出て接続できない

{% include utokyo_vpn/faq-prepare04.md %}

#### Q. VPN接続時にもローカルにあるプリンタを利用したい

UTokyo VPN接続時は，そのままだとコンピュータの繋がっているローカルネットワークへの通信もVPNを経由します．VPNに接続したままローカルネットワークに設置されたプリンタ等を利用したい場合は，AnyConnect Secure Mobility Clientのウィンドウの左下，歯車のボタンをクリックしてください．すると下記のようなウィンドウが出てきます．このウィンドウの「Preferences」タブから，「Allow local (LAN) access when using VPN (if configured)」にチェックをつけてください．

<ul style="display: flex;">
<li style="list-style: none;">
	<img src="img/win08-anyconnect-win-pref.png" alt="anyconnect preference" style="margin:auto; width:100%; border:solid 1px black;" />
	<p style="text-align:center"> Windowsの場合 </p>
</li>
<li style="list-style: none;">
	<img src="img/mac09-anyconnect-mac-pref.png" alt="anyconnect preference" style="margin:auto; width:96%; border:solid 1px black;" />
	<p style="text-align:center"> macOSの場合 </p>
</li>
</ul>

### 利用について
{:#faq-use}

#### Q. 利用対象者は「UTokyo Accountを持つ本学構成員（教職員および学生）」とあるが，本学の学生と雇用者に限られるという事か．それとも，派遣職員や客員研究員等，本学で勤務または研究している者も含まれるか

- 派遣職員や客員研究員等，本学で勤務または研究している者も含まれます．

#### Q. 職員証発行や就労管理システムに学外からアクセスできるのか

- UTokyo VPNに接続することで学外から職員証発行や就労管理システムも利用可能です．

#### Q. 部局で管理している内部向けサイトは閲覧可能になるか

- 部局のサイトがどのようなアクセス制限をかけているかによるため，部局のサイト管理者にご確認ください．

#### Q. 部局で提供しているVPNサービスと同じものになるのか
- UTokyo VPNと，部局がそれぞれ独自に提供しているVPNサービスは基本的に無関係です．詳細は部局のネットワーク担当者にご確認ください．

#### Q. UTokyo WiFiのアカウントのように半年ごとに新規のアカウント取得は必要か

- UTokyo VPNの認証はUTokyo WiFiのアカウントではなくUTokyo Accountで行います．そのため基本的に利用者のアカウントの変更は起こらず，継続して利用が可能です．ただし，利用には年１回実施する情報セキュリティ教育の受講が必要です．

#### Q. 着任時には情報セキュリティ教育の受講期間が終了していた

- 着任時からUTokyo VPNを利用可能です．[情報セキュリティ教育](https://www.u-tokyo.ac.jp/adm/dics/ja/securityeducationvideo.html)のページにある「情報セキュリティ教育 教材」をよくお読みの上，ご利用ください．

#### Q. UTokyo VPN の利用申請や設定は学外でも可能か

- 可能です．

## 規程

- [UTokyo VPN利用規程](terms/UTokyoVPN-User-Term.pdf)
- [UTokyo VPN運用規程](terms/UTokyoVPN-Operation-Term.pdf)


## お問合せフォーム
{:#inquiry-form}

お問合せはこちらの [UTokyo VPN問い合わせフォーム](https://forms.office.com/r/U0R5L40D3e) からお願いいたします．
