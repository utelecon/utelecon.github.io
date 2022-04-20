---
title: Windows端末でUTokyo VPNを利用する 
---

このページでは，UTokyo VPNをWindowsのコンピュータで利用する方法を説明します．UTokyo VPNの概要については，「[UTokyo VPN](.)」をご覧ください．

## 準備編: VPNクライアントアプリケーションのインストール
{:#utokyo-vpn-windows-setup}

まずはUTokyo VPNに接続するために必要なアプリケーションを端末にインストールします．

**手順A:** [https://vpn1.adm.u-tokyo.ac.jp](https://vpn1.adm.u-tokyo.ac.jp) にアクセスします．下記のようにUTokyo Accountの認証ページが表示されたら，ご自身のUTokyo Accountでログインしてください．

<img src="img/win01-vpn1-login.png" alt="vpn1.adm login page" style="margin:auto; width:80%; border:solid 1px black;" />

<details>
  <summary>「これに対するアクセス権がありません」または「You don’t have access to this」というエラーが表示される場合</summary>
      {% include_relative _faq-prepare01.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

**手順B:** ログインに成功すると，下記のようなAnyConnectのクライアントアプリケーションをダウンロードするためのページが表示されるので，Download for Windowsをクリックして，クライアントアプリケーションをダウンロードしてください．

その後は他のWindows用アプリケーションと同様にインストールします．

<img src="img/win02-download-page.png" alt="anyconnect download page" style="margin:auto; width:80%; border:solid 1px black;" />

<details>
  <summary>ダウンロードページが表示されず，真っ白なページが表示される場合</summary>
      {% include_relative _faq-prepare03.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

<details>
  <summary>「セッション管理データベースを更新できません」または「Unable to update the session management database」と表示されダウンロードページが表示されない場合</summary>
      {% include_relative _faq-prepare02.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

**手順C:** End User License Agreementでは，"I accept the terms in the License Agreement"を選択し，Nextを押すと次へ進みます．

<ul style="display: flex;">
<li style="list-style: none;">
  <img src="img/win03-install-1.png" alt="anyconnect install window" style="margin:auto; width:95%; border:solid 1px black;" /></li>
<li style="list-style: none;">
  <img src="img/win04-install-2.png" alt="anyconnect install window" style="margin:auto; width:95%; border:solid 1px black;" /></li>
<li style="list-style: none;">
  <img src="img/win05-install-3.png" alt="anyconnect install window" style="margin:auto; width:95%; border:solid 1px black;" /></li>
</ul>

**手順D:** インストールが完了すると，アプリにVPNクライアントアプリケーションであるCisco AnyConnect Secure Mobility Clientが追加されています．

<img src="img/win06-cisco-on-task.png" alt="anyconnect as an installed app" style="margin:auto; width:75%; border:solid 1px black;" />

これで準備は完了です．

## 利用編: UTokyo VPNへの接続
{:#utokyo-vpn-windows-connect}

以下の手順はVPNを利用するたびに必要です. 特にPCを起動した直後に自動的にVPNに接続されるわけではありませんので, ご注意ください.

**手順E:** 準備編でインストールしたCisco Anyconnect Secure Mobility Clientを起動すると，下記のようなウィンドウが出てきます．VPN接続先として **vpn1.adm.u-tokyo.ac.jp** と入力し，「Connect」ボタンをクリックします．

<img src="img/win07-app-window-connect.png" alt="anyconnect window" style="margin:auto; width:75%; border:solid 1px black;" />

**手順F:** 「Connect」ボタンを押し，下記のようなUTokyo Accountの認証ウィンドウが表示されたらご自身のUTokyo Accountでログインしてください．

<img src="img/win09-anyconnect-login.png" alt="anyconnect authentication" style="margin:auto; width:75%; border:solid 1px black;" />

<details>
  <summary>「AnyConnect profile settings mandate a single local user, but multiple local users are currently logged into your computer. A VPN connection will not be established」というエラーが出て接続できない場合</summary>
      {% include_relative _faq-prepare04.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>


**手順G:** 手順2の後，下記のように「Connected: vpn1.adm.u-tokyo.ac.jp」と表示するウィンドウが出てくると，VPNへの接続は完了です．ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどを除く全ての通信は，このVPNを経由し，東京大学キャンパスネットワークに接続している状態で行われます．

<img src="img/win10-vpn-connected.png" alt="anyconnect connected" style="margin:auto; width:75%; border:solid 1px black;" />

**手順H:** 再度Cisco AnyConnect Secure Mobility Clientをクリックし，現在の状態を確認します．表示されたウィンドウで，下記のように「Connected to vpn1.adm.u-tokyo.ac.jp」と表示されていれば，お使いの端末はUTokyo VPNに接続している状態です．

VPNを切断する際は，このウィンドウの「Disconnect」ボタンをクリックしてください．

<img src="img/win11-vpn-connected-window.png" alt="anyconnect connected window" style="margin:auto; width:75%; border:solid 1px black;" />


<br>
<br>
<a href="index" target="_blank">UTokyo VPN全体のページに戻る</a>
