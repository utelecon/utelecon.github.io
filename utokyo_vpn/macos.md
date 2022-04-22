---
title: macOS端末でUTokyo VPNを利用する 
---

このページでは，UTokyo VPNをmacOSのコンピュータで利用する方法を説明します．UTokyo VPNの概要については，「[UTokyo VPN](.)」をご覧ください．

## 準備編: UTokyo VPNの初期設定
{:#utokyo-vpn-macos-setup}

まずはUTokyo VPNに接続するために必要なアプリケーションを端末にインストールします．

**手順A:**
[https://vpn1.adm.u-tokyo.ac.jp](https://vpn1.adm.u-tokyo.ac.jp) にアクセスします．下記のようにUTokyo Accountの認証ページが表示されたら，ご自身のUTokyo Accountでサインインしてください．

<img src="img/mac01-vpn1-login.png" alt="vpn1.adm login page" style="margin:auto; width:80%; border:solid 1px black;" />

<details>
  <summary>ヘルプ：「これに対するアクセス権がありません」または「You don’t have access to this」というエラーが表示される場合</summary>
      {% include_relative _faq-prepare01.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

**手順B:** サインインに成功すると，下記のようなAnyConnectのクライアントアプリケーションをダウンロードするためのページが表示されるので，Download for macOSをクリックして，クライアントアプリケーションをダウンロードしてください．

その後は他のmacOS用アプリケーションと同様にインストールします．

<img src="img/mac02-download-page.png" alt="anyconnect download page" style="margin:auto; width:80%; border:solid 1px black;" />

<img src="img/mac03-install-1.png" alt="anyconnect download page" style="margin:auto; width:80%; border:solid 1px black;" />

<details>
  <summary>ヘルプ：ダウンロードページが表示されず，真っ白なページが表示される場合</summary>
      {% include_relative _faq-prepare03.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

<details>
  <summary>ヘルプ：「セッション管理データベースを更新できません」または「Unable to update the session management database」と表示されダウンロードページが表示されない場合</summary>
      {% include_relative _faq-prepare02.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

**手順C:** AnyConnectのインストールの途中で，下記のような「ブロックされたAnyConnectシステム拡張」というウィンドウがでる場合があります．その際は表示される手順にしたがって，「システム設定」→「セキュリティとプライバシー」のペインに表示されているCisco AnyConnect Socket Filterに関する許可を行なってください． また右のようなウィンドウが表示されますので，これも許可をしてください．

<ul style="display: flex;">
<li style="list-style: none;">
  <img src="img/mac04-install-2.png" alt="blocking anyconnect" style="margin:auto; width:95%; border:solid 1px black;" /></li>
<li style="list-style: none;">
  <img src="img/mac05-install-3.png" alt="warning for anyconnect socket filter" style="margin:auto; width:95%; border:solid 1px black;" /></li>
</ul>

**手順D:** インストールが完了すると，アプリケーションフォルダに「Cisco」というフォルダが作成され，その中にAnyConnectのクライアントアプリケーションであるCisco AnyConnect Secure Mobility Client.appがインストールされています．

<img src="img/mac06-cisco-on-app.png" alt="anyconnect as an installed app" style="margin:auto; border:solid 1px black;" />

これで準備は完了です．

macOS 11 Big Sur以降のmacOS端末にAnyConnectのクライアントアプリケーションをインストールすると，「システム環境設定」→「ネットワーク」に下記のような Cisco AnyConnect Socket Filter という3つの拡張機能が追加されます．これらの拡張機能はUTokyo VPN接続時に通信を振り分けるために必要な機能として常駐しており，通信内容の記録やホスト外への情報送付も行いません．
またこれらはUTokyo VPNに接続しているか否かに関わらず常時接続状態になります．

<img src="img/mac07-macos-pref.png" alt="running anyconnect socket filter" style="margin:auto; width:75%; border:solid 1px black;" />

## 利用編: UTokyo VPNへの接続
{:#utokyo-vpn-macos-connect}

以下の手順はVPNを利用するたびに必要です. 特にPCを起動した直後に自動的にVPNに接続されるわけではありませんので, ご注意ください.

**手順E:** 準備編でインストールしたCisco Anyconnect Secure MobilityClientを起動すると，下記のようなウィンドウが出てきます．VPN接続先として **vpn1.adm.u-tokyo.ac.jp** と入力し，「Connect」ボタンをクリックします．

<img src="img/mac08-app-window-connect.png" alt="anyconnect window" style="margin:auto; width:75%; border:solid 1px black;" />

**手順F:** 「Connect」ボタンを押し，下記のようなUTokyo Accountの認証ウィンドウが表示されたらご自身のUTokyo Accountでサインインしてください．

<details>
  <summary>ヘルプ：「AnyConnect profile settings mandate a single local user, but multiple local users are currently logged into your computer. A VPN connection will not be established」というエラーが出て接続できない場合</summary>
      {% include_relative _faq-prepare04.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

<details>
  <summary>ヘルプ：「これに対するアクセス権がありません」または「You don’t have access to this」というエラーが表示される場合</summary>
      {% include_relative _faq-prepare01.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

<img src="img/mac10-anyconnect-login.png" alt="anyconnect authentication" style="margin:auto; width:75%; border:solid 1px black;" />

**手順G:** 認証に成功すれば，VPNへの接続は完了です．ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどを除く全ての通信は，このVPNを経由して，東京大学キャンパスネットワークに接続している状態で行われます．

**手順H:** 再度Cisco AnyConnect Secure Mobility Clientをクリックし，現在の状態を確認します．表示されたウィンドウで，下記のように「Connectedto vpn1.adm.u-tokyo.ac.jp」と表示されていれば，お使いの端末はUTokyo VPNに接続している状態です．

VPNを切断する際は，このウィンドウの「Disconnect」ボタンをクリックしてください．

<img src="img/mac11-vpn-connected-window.png" alt="anyconnect connected window" style="margin:auto; width:75%; border:solid 1px black;" />

<br>
<br>
<a href="index" target="_blank">UTokyo VPN全体のページに戻る</a>
