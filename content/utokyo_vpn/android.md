---
title: Android端末でUTokyo VPNを利用する 
---

このページでは，UTokyo VPNをAndroid端末で利用する方法を説明します．

{% include_relative _subpage_beginning.md %}

## 準備編: UTokyo VPNの初期設定
{:#setup}

まずはUTokyo VPNに接続するために必要なアプリを端末にインストールします．手順は通常のAndroidアプリと同様です．

**手順A:** [Google Play](https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf)にアクセスし，Cisco Systems社のSecure Clientというアプリをインストールします．このアプリは以前，AnyConnectという名前だったので，以下の画像ではこの2つの名前が併記されています．

![](img/android01-play-store.png){:.medium.center.border}

**手順B:** インストールを終えてSecure Clientアプリを開くと，下の1枚目のような画面が出るので内容を確認のうえ「OK」をタップしてください．下の2枚目のような画面が出たらインストールは完了です．

<figure class="gallery">
  <img src="img/android02-install-1.png" class="border">
  <img src="img/android03-install-2.png" class="border">
</figure>

**手順C:** 上の画面で「Connections」（日本語で表示されている場合は「接続」）をタップし，続いて右下のプラス「＋」ボタンをタップします．下図のような「接続エディタ」が表示されるので，「サーバーアドレス」をタップして **vpn1.adm.u-tokyo.ac.jp** と入力します．

![](img/android04-connect-editor.png){:.medium.center.border}

**手順D:**下図のようになっていることを確認したうえで画面下の「完了」をタップします．

![](img/android05-connect-editing.png){:.medium.center.border}

## 利用編: UTokyo VPNへの接続
{:#connect}

以下の手順はVPNを利用するたびに必要です．特にスマホを起動した直後に自動的にVPNに接続されるわけではありませんので，ご注意ください．

**手順E:** 下図1枚目のように「接続」に「vpn1.adm.u-tokyo.ac.jp」と記載されていることを確認してください．次に，「AnyConnect VPN」の横のトグルボタンをONにして，下図2枚目のようにUTokyo Accountの認証ウィンドウが表示されたらご自身のUTokyo Accountでサインインしてください．

<figure class="gallery">
  <img src="img/android06-home-finished-setting.png" class="border">
  <img src="img/android07-secure-client-authentication.png" class="border">
</figure>

このとき，以下のような許可を求める画面が出ることがあります．その場合は内容を確認のうえで「OK」を押してください．

![](img/android08-secure-client-verify-window.png){:.medium.center.border}

{% include_relative _help_mfa.html %}
{% include_relative _help_multiple_users.html %}

**手順F:** 認証に成功すれば，VPNへの接続は完了です．ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどを除く全ての通信は，このVPNを経由して，東京大学キャンパスネットワークに接続している状態で行われます．

{% include_relative _help_security_education.html %}

**手順G:** 下記の画面のようにSecure Clientアプリの下に「接続中」と表示されていれば，お使いのスマホはUTokyo VPNに接続している状態です．

![](img/android09-secure-client-connecting.png){:.medium.center.border}

VPNを切断する際は，この画面のトグルボタンをタップして「切断されました」にしてください．

---

[UTokyo VPN全体のページに戻る](.)
