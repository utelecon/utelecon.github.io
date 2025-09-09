---
title: UTokyo Account本人確認サービスの事前連携について
breadcrumb:
  title: 事前連携
---

## Introduction
This page explains the "pre-link" procedure, which must be completed in advance to use the UTokyo Account Identity Verification Service.

The overall process is as follows:

- Step 1:[Set up the digital identification app](#app-setup)
- Step 2:[Perform identity verification using the app and your My Number Card](#auth)
- Step 3:[Sign in with your UTokyo Account and make the link](#signin)
- Step 4:[Confirm the link status](#statuscheck)

When accessing the UTokyo Account Identity Verification Service, the procedure in Step 2 differs depending on whether you use a PC (In case of using both a PC and a smartphone) or a smartphone (In case of using only a smartphone). We recommend completing the process using only a smartphone, as the procedure is more straightforward.

## What you need

- Your physical My Number Card[^1]
- The 4-digit PIN (Personal Identification Number) you registered when you received your My Number Card.（[Electronic Certificate of User Proof(in Japanese)](https://faq.myna.go.jp/faq/show/3494)，[PIN for Card Info Input Support(in Japanese)](https://faq.myna.go.jp/faq/show/2385)）[^2]
- A smartphone that can use the digital identification app (iOS 16.0 or later, or Android 11 or later) [^3]
- A PC if you perform the procedure from a PC (you can also complete the entire procedure on a smartphone)

[^1]: As of September 2025, the so-called [“Smartphone My Number Card"](https://www.digital.go.jp/en/policies/mynumber/smartphone-certification) (e.g., electronic certification for smartphones on Androids  or iPhone My Number Card) is not available.
[^2]: If you have forgotten your PIN or it has been locked, you need to go to the office of the municipality where you are registered to have it initialized and reset. For details, please check the [My Number Card General Portal Site(in Japanese)](https://www.kojinbango-card.go.jp/faq_pin3/).
[^3]:The device must be listed in the "List of Smartphones Compatible with My Number Card" file on the page linked from the [JPKI (Japan Public Key Infrastructure) Portal Site(in Japanese)](https://www.jpki.go.jp/prepare/reader_writer.html).

## 手順1: デジタル認証アプリをセットアップする
{:#app-setup}
まず，デジタル認証アプリのセットアップを行います．

1. 以下のリンクから，デジタル認証アプリをインストールしてください．
    - [iPhone用リンク](https://apps.apple.com/jp/app/id6454900894)
    - [Android用リンク](https://play.google.com/store/apps/details?id=jp.go.digital.auth_and_sign)
1. デジタル庁公式HPに記載されている[デジタル認証アプリの利用登録の方法](https://services.digital.go.jp/auth-and-sign/start-guide/)に従って，デジタル認証アプリの利用登録を済ませてください．

## 手順2: アプリとマイナンバーカードで本人認証する
{:#auth}

続いて，マイナンバーカードとデジタル認証アプリを用いた本人認証を行います．UTokyo Account本人確認サービスに[スマートフォンのみで認証する場合](#auth-smartphone)と，[PCとスマートフォンを併用して認証する場合](#auth-pc)で手順が少し異なります．なお，スマートフォンのみで行う方が簡便です．それぞれ対応する手順を参照し，作業を進めてください．

### スマートフォンのみで認証する場合
{:#auth-smartphone}

1. [UTokyo Account本人確認サービス](https://identification.adm.u-tokyo.ac.jp/verify/)にスマートフォンでアクセスしてください．
1. 「マイナンバーカードで本人確認」ボタンを押してください．デジタル認証アプリの画面に遷移します．
    ![](service_step1.png){:.border}{:.medium}

    {/* ここから共通 */}
    <details>
    <summary>デジタル認証アプリが開かず別の画面が表示された場合</summary>

    デジタル認証アプリがインストールされていない場合は，以下のようにアプリのインストールを促す画面が表示されます．またブラウザの表示倍率の設定によっては，PCからのアクセスと判定され，画面にQRコードが表示されることもあります．いずれの場合も，[手順1](#app-setup)に従って，デジタル認証アプリのインストールと利用登録を行ってください．
    ![](promote_install.png){:.border}{:.small}
    </details>

    <details>
    <summary>デジタル認証アプリが開いたが別の画面が表示された場合</summary>

    デジタル認証アプリはインストールされているが，利用登録が行われていない状態であるため，利用登録手続きが開始された可能性があります．[手順1](#app-setup)に示す手順により，デジタル認証アプリの利用登録を行ってください．
    </details>
    {/* ここまで共通 */}

    {/* ここから共通 */}
1.  デジタル認証アプリ上の案内に従って，生体情報・パスコード等による認証を行ってください．
1. 「はじめる」ボタンを押して認証手順をすすめてください．
    ![](auth_app_initial.png){:.border}
1. マイナンバーカードの利用者証明用電子証明書の暗証番号を入力してください．
    ![](auth_app_pass1.png){:.border}
1. 券面事項入力補助用の暗証番号を入力してください．利用者証明用電子証明書の暗証番号と同じ物を使用している場合は「直前と同じ番号を入力」ボタンを押すことで省略できます．
    ![](auth_app_pass2.png){:.border}
1. アプリの案内に従い，「読み取り開始」ボタンを押し，マイナンバーカードをスマートフォンで読み取ってください．
    - 「カードを読み取っています…」と表示されている間は，マイナンバーカードをスマートフォンから離さないでください．
    - 読み取りが完了すると，データが自動的にサーバーに送信されます．

    <figure class="gallery">![](auth_app_read1.png){:.border} ![](auth_app_read2.png){:.border} ![](auth_app_read3.png){:.border}</figure>
1. UTokyo Account本人確認サービスへの認証の許可を求める画面が表示されます．プライバシーポリシーや利用規約を確認の上，「許可」ボタンを押してください．
    ![](auth_app_permittion1.png){:.border}

    <details>
    <summary>「認証と情報提供を中止しますか」という選択ボタンが出た場合</summary>

    AndroidとiOSで少し形式が異なりますが「認証と情報提供を中止しますか」という選択ボタンが出現します．「中止」を選択した場合，UTokyo Account本人確認サービス側が対応していないためBad Requestと表示されるページに移動します．UTokyo Account本人確認サービスのページにアクセスし直し，[手順2](#auth-smartphone)の最初からやり直してください．このポップアップのキャンセルを押した場合は元の画面に戻るので，続きの手順を進めてください．

    <figure class="gallery">![](auth_app_cancelpop_android.png){:.border}{:.small} ![](auth_app_cancelpop_iOS.png){:.border}{:.small}</figure>

    ![](badrequest.png){:.border}{:.small}

    </details>

    {/* ここまで共通 */}
1. デジタル認証アプリの「利用中のサービスへ戻る」を押すか，画面遷移後10秒経過するのを待ってください．UTokyo Account本人確認サービスへ戻ります．
    ![](auth_app_end.png){:.border}

<div class="box">
初期設定はまだ完了していません．[手順3](#signin)に進んでください．
</div>

### PCとスマートフォンを併用して認証する場合
{:#auth-pc}

1. [UTokyo Account本人確認サービス](https://identification.adm.u-tokyo.ac.jp/verify/)にPCでアクセスしてください．
1. 「マイナンバーカードで本人確認」ボタンを押してください．
    ![](service_step1.png){:.border}{:.medium}

1. 画面上に表示された大きなQRコードを，手順1でセットアップを済ませたスマートフォンで読み込んでください．QRコードが無効になった場合は，下にでる「二次元コードを更新」を押してQRコードを更新してください．以降**PCのページは閉じないでください**．

    <figure class="gallery"> ![](auth_pc_qr.png){:.border}{:.medium} ![](auth_pc_qr_invalid.png){:.border}{:.medium}</figure>

    <details>
    <summary>PCのページを閉じてしまった場合</summary>
    [手順2](#auth-pc)の最初からやり直してください．
    </details>
    {/* ここから共通 */}
    <details>
    <summary>デジタル認証アプリが開かず別の画面が表示された場合</summary>

    デジタル認証アプリがインストールされていない場合は，以下のようにアプリのインストールを促す画面が表示されます．またブラウザの表示倍率の設定によっては，PCからのアクセスと判定され，画面にQRコードが表示されることもあります．いずれの場合も，[手順1](#app-setup)に従って，デジタル認証アプリのインストールと利用登録を行ってください．
    ![](promote_install.png){:.border}{:.small}
    </details>

    <details>
    <summary>デジタル認証アプリが開いたが別の画面が表示された場合</summary>

    デジタル認証アプリはインストールされているが，利用登録が行われていない状態であるため，利用登録手続きが開始された可能性があります．[手順1](#app-setup)に示す手順により，デジタル認証アプリの利用登録を行ってください．
    </details>
    {/* ここまで共通 */}

1. スマートフォンに表示される6桁の数字をPCに入力してください．有効期限が切れた場合は6桁の数字を更新してください．

    {/* ここから共通 */}
1.  デジタル認証アプリ上の案内に従って，生体情報・パスコード等による認証を行ってください．
1. 「はじめる」ボタンを押して認証手順をすすめてください．
    ![](auth_app_initial.png){:.border}
1. マイナンバーカードの利用者証明用電子証明書の暗証番号を入力してください．
    ![](auth_app_pass1.png){:.border}
1. 券面事項入力補助用の暗証番号を入力してください．利用者証明用電子証明書の暗証番号と同じ物を使用している場合は「直前と同じ番号を入力」ボタンを押すことで省略できます．
    ![](auth_app_pass2.png){:.border}
1. アプリの案内に従い，「読み取り開始」ボタンを押し，マイナンバーカードをスマートフォンで読み取ってください．
    - 「カードを読み取っています…」と表示されている間は，マイナンバーカードをスマートフォンから離さないでください．
    - 読み取りが完了すると，データが自動的にサーバーに送信されます．

    <figure class="gallery">![](auth_app_read1.png){:.border} ![](auth_app_read2.png){:.border} ![](auth_app_read3.png){:.border}</figure>
1. UTokyo Account本人確認サービスへの認証の許可を求める画面が表示されます．プライバシーポリシーや利用規約を確認の上，「許可」ボタンを押してください．
    ![](auth_app_permittion1.png){:.border}

    <details>
    <summary>「認証と情報提供を中止しますか」という選択ボタンが出た場合</summary>

    AndroidとiOSで少し形式が異なりますが「認証と情報提供を中止しますか」という選択ボタンが出現します．「中止」を選択した場合，UTokyo Account本人確認サービス側が対応していないためBad Requestと表示されるページに移動します．UTokyo Account本人確認サービスのページにアクセスし直し，[手順2](#auth-smartphone)の最初からやり直してください．このポップアップのキャンセルを押した場合は元の画面に戻るので，続きの手順を進めてください．

    <figure class="gallery">![](auth_app_cancelpop_android.png){:.border}{:.small} ![](auth_app_cancelpop_iOS.png){:.border}{:.small}</figure>

    ![](badrequest.png){:.border}{:.small}

    </details>

    {/* ここまで共通 */}

1. スマートフォンでの作業は終了です．PCの画面に戻ってください．

<div class="box">
初期設定はまだ完了していません．[手順3](#signin)に進んでください．
</div>

## 手順3: UTokyo Accountでサインインして紐付けを行う
{:#signin}

1. 「UTokyo Accountでサインイン」ボタンを押してください．
    ![](service_step2.png){:.border}{:.medium}
1. 既にUTokyo Accountにサインイン済みの場合を除き，UTokyo Accountのサインイン画面が表示されるので，サインインしてください．
1. 「紐付けを行う」ボタンを押して，デジタル認証アプリの連携IDとUTokyo Accountを紐付けしてください．
    ![](service_step3.png){:.border}{:.medium}
1. 「上記の紐付けを解除する」ボタンが出てくれば，連携が出来ています．
    ![](service_step4.png){:.border}{:.medium}

## 手順4: 連携状況を確認する
{:#statuscheck}

### UTokyo Account本人確認サービス上での確認
1. UTokyo Account本人確認サービス上で，名前と紐付けされているUTokyo Accountが正しく表示されているか確認してください．

{/* 9/7: /myでの確認方法はまだ利用できない状況です，したがって画像は用意できてません */}

### UTokyo Account利用者情報確認サイト上での確認
1. [UTokyo Account利用者情報確認サイト](https://login.adm.u-tokyo.ac.jp/my/)にアクセスしてください．
1. 右上の「Sign In」ボタンを押してください．
1. 既にUTokyo Accountにサインイン済みの場合を除き，UTokyo Accountのサインイン画面が表示されるので，サインインしてください．
1. 「情報を表示 / Display information」ボタンを押してください．
