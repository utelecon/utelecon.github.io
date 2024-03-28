---
title: UTokyo VPN
breadcrumb:
  title: UTokyo VPN
---

## はじめに
{:#introduction}



UTokyo VPNは東京大学全学の構成員（教職員および学生）が利用できるVPNサービスです．学外で端末からUTokyo VPNに接続すると，その端末は情報基盤センターに設置されたVPNゲートウェイを経由して通信を行うようになり，端末は仮想的に東京大学キャンパスネットワークであるUTNETに接続されている状態になります．

UTokyo VPNを利用するには，まず自身の端末にVPNクライアントアプリケーションであるCisco Secure Clientをインストールします．インストールしたアプリケーションを起動すると，UTokyo Accountの認証を経てVPNゲートウェイに接続し，端末からの通信は基本的にVPN経由でUTNETを通じて外部と通信するようになります．ただし，ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどへの通信は除きます．

### 電子ジャーナルへのアクセスについて
{:#journal}

UTokyo VPN経由で東京大学附属図書館が契約・提供する電子ジャーナル等にアクセスすることはできません．附属図書館が契約・提供する電子ジャーナル・電子ブック・データベースを学外から利用するには、附属図書館が提供するEZproxyを使います．Google検索などで見つかった出版社の論文ページから、すばやく論文PDFを入手するには、[こちらのページ](https://note.com/k_yamamoto/n/n0ee13fe38f24)でも紹介されている、[ブックマークレットを使って読む](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy/others#marklet)方法が便利です。もちろん契約外の論文は入手できませんし、契約していてもこの方法で入手できない場合もあります。詳しい利用方法や、利用対象者は図書館の[EZproxy（イージープロキシー）経由で利用する](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy) のページ、[補足情報：学外にいるとき、みつけた論文を読む方法あれこれ](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy/others)をご一読ください．


## 利用にあたって
{:#note}

**利用対象者:** UTokyo Accountを持つ東京大学 構成員（教職員・学生）

**利用できる端末の種類:** UTokyo VPNは，WindowsやmacOSなどのコンピュータで利用できます．サポートされているバージョンはそれぞれ以下の通りです．

- Windows: Windows 10, 11
- macOS: macOS 11.x Big Sur, 12 Monterey, 13 Ventura, 14 Sonoma

また，AndroidやiPhone，iPadなどのモバイル端末からも利用可能です．OSや専用のアプリを適切にアップデートしながら利用してください．

### UTokyo Accountの多要素認証
{:#mfa}

セキュリティの観点より，UTokyo VPNの利用に当たっては[UTokyo Accountの多要素認証](/utokyo_account/mfa/)の有効化を必須としております．「**[UTokyo Account多要素認証の初期設定手順](/utokyo_account/mfa/initial)**」を**最後の「手順4：多要素認証の利用を申請する」まで確実に**行って，UTokyo Accountの多要素認証を有効化してください．その後，多要素認証の設定が**システムに反映されるまで約40分かかるので，それまでしばらく待ってからUTokyo VPNを利用**してください．

### 情報セキュリティ教育
{:#information-security-education}
UTokyo VPNの利用にあたっては，情報セキュリティ教育の受講を完了することを必須としています．情報セキュリティ教育は，東京大学全体の[情報セキュリティ](https://univtokyo.sharepoint.com/sites/Security)の向上を目的として，毎年度UTokyo Accountを持つ全ての方を対象に実施しています．実施時期になりましたら通知がありますので，必ず受講してください．実施時期や受講の手順については[情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)のページを確認してください．

- 所定の時期に情報セキュリティ教育の受講を完了しなかった場合はUTokyo VPNの利用資格が停止されます．具体的には，UTokyo VPNを利用するのに必要なアプリケーションのインストールができなくなります．また，既にインストールしている場合も，UTokyo VPNに接続することができなくなります．
- 利用資格が停止された場合は，情報セキュリティ教育を受講してください．確認テストに合格すると，ただちに利用資格の停止が解除されます．
- 新たに入学・着任した方については，[情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)を受講し，確認テストに合格した後にUTokyo VPNの利用が可能となります．利用開始の前に情報セキュリティ教育を受講してください．


## UTokyo VPNの利用手順
{:#how-to-use}

UTokyo VPNを利用するには，専用のアプリ「Cisco Secure Client」を端末にインストールし，接続を行います．以下の各ページで，OSごとにその方法を説明しています．なお，初期設定を含めたすべての作業を学外から行うことが可能です．

* [WindowsでUTokyo VPNを利用する](windows)
* [macOSでUTokyo VPNを利用する](macos)
* [AndroidでUTokyo VPNを利用する](android)
* [iPadでUTokyo VPNを利用する](ipad)
* [iPhoneでUTokyo VPNを利用する](iphone)
{:.cards}

## FAQ
{:#faq}

### Q. VPN接続時にもローカルにあるプリンタを利用したい

UTokyo VPN接続時は，そのままだとコンピュータの繋がっているローカルネットワークへの通信もVPNを経由します．VPNに接続したままローカルネットワークに設置されたプリンタ等を利用したい場合は，Secure Clientのウィンドウの左下，歯車のボタンをクリックしてください．すると下記のようなウィンドウが出てきます．このウィンドウ（Windowsの場合はウィンドウの「環境設定」タブ）から，「VPN使用時にローカル(LAN)アクセスを許可する(構成されている場合)」にチェックをつけてください．

<div class="gallery">
  <figure class="center">
    <img src="img/win09-anyconnect-win-pref.png" class="border">
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

### Q. UTokyo Wi-Fiのアカウントのように一年ごとに新規のアカウント取得は必要か

UTokyo VPNの認証はUTokyo Wi-FiのアカウントではなくUTokyo Accountで行います．そのため基本的に利用者のアカウントの変更は起こらず，継続して利用が可能です．ただし，利用には年１回実施する[情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)の受講が必要です．

## 規程
{:#term}

- [UTokyo VPN利用規程](terms/UTokyoVPN-User-Term.pdf)
- [UTokyo VPN運用規程](terms/UTokyoVPN-Operation-Term.pdf)


## 問い合わせ
{:#inquiry}

問い合わせは**[サポート窓口](/support/)**で受け付けています．
