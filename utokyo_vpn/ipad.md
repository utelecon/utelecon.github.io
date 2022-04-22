---
title: iPadでUTokyo VPNを利用する 
---

このページでは，UTokyo VPNをiPadで利用する方法を説明します．UTokyo VPNの概要については，「[UTokyo VPN](.)」をご覧ください．

## 準備編: UTokyo VPNの初期設定
{:#utokyo-vpn-ipad-setup}

<!-- 最新版にアップデートしていることは前提とする -->

まずはUTokyo VPNに接続するために必要なアプリを端末にインストールし，初期設定を行います．手順は通常のiOSアプリと同様です．

**手順A:** [App Store](https://apps.apple.com/jp/app/cisco-anyconnect/id1135064690)にアクセスし，Cisco社のCisco AnyConnectというアプリをインストールします．

<img src="img/ipad01-app-store-anyconnect.png" alt="anyconnect in app store" style="margin:auto; border:solid 1px black;" />

**手順B:** インストールを終えてAnyConnectアプリを開くと，下の左図のような画面が出ることを確認します．これでインストールは完了です．なお，開く際に下右図のように通知の送信について確認するウィンドウが表示されることがありますが，いずれを選択しても構いません．

<ul style="display: flex;">
<li style="list-style: none;">
  <img src="img/ipad02-install.png" alt="anyconnect home finished setting" style="margin:auto; width:95%; border:solid 1px black;" /></li>
<li style="list-style: none;">
  <img src="img/ipad03-notification.png" alt="anyconnect notification" style="margin:auto; width:95%; border:solid 1px black;" /></li>
</ul>

**手順C:** アプリを起動した直後の画面で左上の「接続」をタップし，続いて表示される画面で「VPN接続の追加」をタップすると，下図のようなウィンドウが表示されます．「サーバ」の横の入力欄をタップして **vpn1.adm.u-tokyo.ac.jp** と入力します．

<img src="img/ipad04-add-vpn-connection.png" alt="anyconnect vpn setting window" style="margin:auto; border:solid 1px black;" />

**手順D:** 「保存」を押すと，下図のようにVPN構成の追加を求められるので，内容の確認の上で「許可」を押します．さらに追加でTouch IDによる認証などを求められることもありますので，その際は認証を行ってください．

<img src="img/ipad05-requesting-vpn.png" alt="anyconnect authentication window" style="margin:auto; border:solid 1px black;" />


## 利用編: UTokyo VPNへの接続
{:#utokyo-vpn-ipad-connect}

以下の手順はVPNを利用するたびに必要です．特に端末を起動した直後に自動的にVPNに接続されるわけではありませんので，ご注意ください．

**手順E:** 下記左図のように画面左上の「接続」に「vpn1.adm.u-tokyo.ac.jp」と記載されていることを確認してください．次に「AnyConnect VPN」の横のトグルボタンをONにして，下記右図のようにUTokyo Accountの認証ウィンドウが表示されたら，ご自身のUTokyo Accountでサインインしてください．前回のアクセスから時間をおかずに起動した場合は，この画面が表示されないで直ちにVPN接続が開始されることもあります．

<ul style="display: flex;">
<li style="list-style: none;">
  <img src="img/ipad06-home-finished-setting.png" alt="anyconnect home finished setting" style="margin:auto; width:95%; border:solid 1px black;" /></li>
<li style="list-style: none;">
  <img src="img/ipad07-anyconnect-authentication.png" alt="anyconnect authentication window" style="margin:auto; width:95%; border:solid 1px black;" /></li>
</ul>

<details>
  <summary>ヘルプ：「これに対するアクセス権がありません」または「You don’t have access to this」というエラーが表示される場合</summary>
      {% include_relative _faq-prepare01.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

<details>
  <summary>ヘルプ：「AnyConnect profile settings mandate a single local user, but multiple local users are currently logged into your computer. A VPN connection will not be established」というエラーが出て接続できない場合</summary>
      {% include_relative _faq-prepare04.md %}
  それでもうまくいかなければ，<a href=".#inquiry-form">サポート窓口</a>に相談してください．
</details>

**手順F:** 認証に成功すれば，VPNへの接続は完了です．ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどを除く全ての通信は，このVPNを経由して，東京大学キャンパスネットワークに接続している状態で行われます．

**手順G:** 下記の画面のように「詳細」が「接続済み」と表示されていれば，お使いの端末はUTokyo VPNに接続している状態です．

<img src="img/ipad08-anyconnect-connecting.png" alt="anyconnect finished connecting" style="margin:auto; border:solid 1px black;" />

VPNを切断する際は，この画面左上のトグルボタンをタップして「詳細」が「接続解除済み」になったことを確認してください．

<br>
<br>
<a href="index" target="_blank">UTokyo VPN全体のページに戻る</a>
