---
title: UTokyo Accountにおける多要素認証の利用について
css: [mfa]
---

## はじめに
{:#introduction}

東京大学の情報システムのセキュリティ向上を目的として，2021年9月27日からUTokyo Accountに多要素認証を導入しています．

UTokyo Accountにおける多要素認証に関する情報はこのページで提供します．随時新しい情報をお知らせしていきますので，必要に応じてご確認ください．

### 多要素認証とは
{:#introduction-about}

多要素認証 (Multi-Factor Authentication, MFA) とは，アカウントへのサインイン時に，パスワードに加えて，SMSや専用のアプリなどで本人確認を行う認証方法です．多要素認証を利用すると，なんらかの事情でパスワードが他人に知られた場合でも，アカウントにサインインされる可能性を低くすることができ，セキュリティを向上することができます．

## UTokyo Accountにおける多要素認証の運用
{:#implementation}

UTokyo Accountでは，利用者が各自で初期設定を行うことにより，多要素認証の利用が開始されます．多要素認証を利用している間は，**UTokyo Accountにサインインする際，毎回，設定したSMSや専用のアプリなどで本人確認することが求められます**．

セキュリティの観点からは多要素認証を利用することを推奨しますが，現時点においては多要素認証の利用は必須ではなく，多要素認証を利用しなくてもこれまで通りUTokyo Accountを利用することができます．ただし，**[UTokyo VPN](/utokyo_vpn/)および[UTokyo Slack](/slack/)の利用には多要素認証の利用が必須**となっており，多要素認証を利用していない場合は利用できません．

## 多要素認証の初期設定手順
{:#initial}

多要素認証の初期設定手順を，手順1から手順4までに分けて説明します．手順1から順に，手順4までのすべての作業を行ってください．

なお，手順1から手順3は準備の作業で，最後の手順4がお使いのUTokyo Accountのアカウント全体で多要素認証の利用を開始するための作業です（手順4の作業を行うまでは，これまで通りパスワードのみでUTokyo Accountにサインインできます）．

<div class="box">ここまでの多要素認証に関する説明をよく読み，内容をご理解の上で設定を行うようお願いします．</div>

{% capture mfa_totp_trouble %}
<div class="box">
（2022年10月26日）UTokyo Accountの多要素認証が利用しているMicrosoftのシステムの不具合により，「別の認証アプリを使用する」リンクが表示されない事象が発生してしていましたが，修正されました．ご迷惑をおかけし，申し訳ありませんでした．
</div>
{% endcapture %}

### 手順1：1個目の本人確認方法を登録する
{:#initial-first.mfa-initial-step-heading}

まず，多要素認証で使う本人確認方法（SMSや専用の認証アプリ）を設定します．ここではまず1個目の本人確認方法を設定し，この後の手順2で2個目以降を設定します．なお，ここで設定する1個目の本人確認方法がデフォルト（自動で選ばれる方法）になるので，最もよく使う本人確認方法を登録するのがいいでしょう．

<ol class="mfa-initial-procedure">
<!--
<li><a href="https://gidp.adm.u-tokyo.ac.jp/idp/profile/Logout">UTokyo Accountのサインアウトページ</a>にアクセスしてください．</li>
<li>「サインアウト 正常にサインアウトしました」という画面が表示されるまでしばらく待ってください．</li>
-->
<li><a href="https://account.activedirectory.windowsazure.com/proofup.aspx?proofup=1&whr=utac.u-tokyo.ac.jp">多要素認証の設定ページ</a>にアクセスしてください．</li>
<li>（サインイン済みでなければ）サインイン画面が表示されるので，UTokyo Accountのユーザ名（10桁の数字）とパスワードを入力してください．</li>
<li>「詳細情報が必要」という画面が表示されるので，「次へ」を押してください．<img src="first.png"></li>
<li>
多要素認証の本人確認方法を設定する画面になります．設定の手順は本人確認方法の種類によって異なります．<img src="first_ms_auth.png">
<ul>
<li>
<strong>「Microsoft Authenticator」アプリを使う方法</strong>：「Microsoft Authenticator」は，Microsoftが提供している多要素認証のための専用のアプリです．UTokyo Accountの多要素認証はMicrosoftのシステムを利用しているため，このアプリを本人確認方法として使うのが便利です．
<details>
<summary>登録手順</summary>
<ol>
<li>スマホに「Microsoft Authenticator」アプリをインストールしてください．Androidの人は<a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">Google Play</a>から，iPhoneの人は<a href="https://apps.apple.com/app/microsoft-authenticator/id983156458">App Store</a>からダウンロードできます．</li>
<li>アプリのインストールを終えたら元の画面に戻って作業を続けます．デフォルトでMicrosoft Authenticatorの設定をする画面になっているので，そのまま「次へ」を押してください．</li><img src="first_ms_auth_next.png">
<li>以降の手順はこの作業をスマホ（Microsoft Authenticatorアプリをインストールしたもの）でしているかそれ以外（パソコンなど）でしているかによって異なります．
<ul>
<li>
<strong>スマホでこの作業をしている場合</strong>：「このリンクをクリックして、アカウントをアプリにペアリングします。」を押してください．Microsoft Authenticatorアプリに移動し，自分のUTokyo Accountが表示されればOKです．<img src="first_ms_auth_link.png"></li>
<li><strong>スマホ以外（パソコンなど）でこの作業をしている場合</strong>
<ol>
<li>画面の指示に従ってQRコードを表示してください．<img src="first_ms_auth_qr.png"></li>
<li>スマホでMicrosoft Authenticatorアプリを開き，画面右上の「+」を押してから，「職場または学校アカウント」「QRコードをスキャン」の順に選択してください．<img src="ms_auth_screen.png"></li>
<li>QRコードを読み取ってください．</li>
<li>アプリ上に自分のUTokyo Accountが表示されればOKです．<img src="ms_auth_list.png"></li>
</ol>
</li>
</ul>
</li>
</ol>
</details>
</li>
<li>
<strong>「Microsoft Authenticator」以外の認証アプリを使う方法</strong>：もし既に「Google Authenticator」などの「Microsoft Authenticator」以外の認証アプリを利用していれば，それを使うこともできます．
<details>
<summary>登録手順</summary>
<ol>
<li>画面の中ほどにある「別の認証アプリを使用します」というリンクを探して押してください．{{ mfa_totp_trouble }}<img src="first_auth_app.png"></li>
<li>画面の指示に従って進むとQRコードが表示されるので，お使いの認証アプリでQRコードを読み取り，設定を行ってください．<img src="first_auth_app_qr.png"></li>
</ol>
</details>
</li>
<li>
<strong>電話番号を使う方法</strong>：電話番号を登録しておき，その電話番号でSMSまたは音声通話（自動音声ガイダンス）の着信を受け取って本人確認を行う方法です．
<details>
<summary>登録手順</summary>
<ol>
<li>画面の下の方にある「別の方法を設定します」というリンクを探して押してください．<img src="first_another_method.png"></li>
<li>「どの方法を使用しますか?」欄で「電話」を選び，「確認」を押してください．<img src="first_select_phone.png"></li>
<li>「どの電話番号を使用しますか?」欄は，適切な国番号（日本の場合は「Japan (+81)」）を選択してから，自分の電話番号を入力してください．また，この電話番号を使って本人確認を行う方法として，「コードをSMSで送信する」と「電話する」のうちから好みの方を選んでください．<img src="first_phone_method.png"></li>
<li>「次へ」を押してください．</li>
<li>電話番号の確認が行われます．「コードをSMSで送信する」を選んだ場合は，SMSに確認コード（6桁の数字）が届き，それを画面に入力するよう求められるので，そのようにしてください．「電話する」を選んだ場合は，音声通話が着信し，自動音声ガイダンスで「#」ボタンを押すように言われるので，そのようにしてください（スマホで通話中に「#」ボタンを表示するには，画面に表示されている「キーパッド」ボタンを押します）．</li>
</ol>
</details>
</li>
</ul>
</li>
<li>（既に登録しているのでなければ）メールアドレスの入力を求められます．なるべくECCSクラウドメール以外のメールアドレスを入力してください．続いてそのメールアドレスに送られてくる「コード」（6桁の数字）を入力するよう求められるので，そのようにしてください．<img src="first_email.png"></li>
<!--
<li>「アプリ パスワード」という画面が出て，「アプリ パスワード名」を入力するよう求められることがあります（この画面が出ないこともあります）．適当な英数字を入力して「次へ」を押してください．（「アプリ パスワード」とは多要素認証に非対応のシステムを利用するためのものですが，UTokyo Accountでは利用しないので，特に気にせずに適当に入力して問題ありません）<img src="first_app_password.png"></li>
<li>「アプリ パスワード」の画面が出た場合は，引き続き「アプリ パスワードが正常に作成されました。パスワードをクリップボードにコピーし、アプリに貼り付けます。」と表示されますが，無視して「完了」を押してください．</li>
-->
<li>画面上に「成功」と表示されたらOKです．<img src="first_success.png"></li>
</ol>

<div class="box">設定はまだ完了していません．次の手順2へ進んでください．</div>

### 手順2：追加の本人確認方法を登録する
{:#initial-alternative.mfa-initial-step-heading}

続いて，**[多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)**から，追加の（2個目以降の）本人確認方法を登録します．

本人確認方法を1個しか登録していなくても多要素認証を利用することはできますが，故障や機種変更などで登録されている本人確認方法が使えなくなった場合，UTokyo Accountにサインインできなくなってしまいます．このような事態を防ぐため，**複数の本人確認方法を設定することを強く推奨します**．

<ul class="mfa-initial-procedure">
<li>
<strong>「Microsoft Authenticator」アプリを使う方法</strong>：「Microsoft Authenticator」は，Microsoftが提供している多要素認証のための専用のアプリです．UTokyo Accountの多要素認証はMicrosoftのシステムを利用しているため，このアプリを本人確認方法として使うのが便利です．2台以上のスマホを持っている場合は，2台目以降のスマホを追加で登録することもできます．
<details>
<summary>登録手順</summary>
<ol>
<li>（まだしていなければ）スマホに「Microsoft Authenticator」アプリをインストールしてください．Androidの人は<a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">Google Play</a>から，iPhoneの人は<a href="https://apps.apple.com/app/microsoft-authenticator/id983156458">App Store</a>からダウンロードできます．</li>
<li><a href="https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp">多要素認証の設定ページ</a>で，「方法の追加」を押してください．<img src="alt_add_method.png"></li>
<li>「どの方法を使用しますか?」欄で「認証アプリ」を選び，「追加」を押してください．<img src="alt_add_method_pull_down.png"></li>
<li>Microsoft Authenticatorの設定をする画面が出るので，そのまま「次へ」を押してください．<img src="alt_ms_auth_next.png"></li>
<li>以降の手順はこの作業をスマホ（Microsoft Authenticatorアプリをインストールしたもの）でしているかそれ以外（パソコンなど）でしているかによって異なります．
<ul>
<li><strong>スマホでこの作業をしている場合</strong>：「このリンクをクリックして、アカウントをアプリにペアリングします。」を押してください．Microsoft Authenticatorアプリに移動し，自分のUTokyo Accountが表示されればOKです．<img src="alt_ms_auth_link.png"></li>
<li><strong>スマホ以外（パソコンなど）でこの作業をしている場合</strong>
<ol>
<li>画面の指示に従って進み，QRコードを表示してください．<img src="alt_ms_auth_qr.png"></li>
<li>スマホでMicrosoft Authenticatorアプリを開き，「アカウントを追加」「職場または学校アカウント」「QRコードをスキャン」の順に選択してください．<img src="ms_auth_screen.png"></li>
<li>QRコードを読み取ってください．</li>
<li>アプリ上に自分のUTokyo Accountが表示されればOKです．<img src="ms_auth_list.png"></li>
</ol>
</li>
</ul>
</li>
</ol>
</details>
</li>
<li>
<strong>「Microsoft Authenticator」以外の認証アプリを使う方法</strong>：もし既に「Google Authenticator」などの「Microsoft Authenticator」以外の認証アプリを利用していれば，それを使うこともできます．2台以上のスマホを持っている場合は，2台目以降のスマホを追加で登録することもできます．
<details>
<summary>登録手順</summary>
<ol>
<li><a href="https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp">多要素認証の設定ページ</a>で，「方法の追加」を押してください．<img src="alt_add_method.png"></li>
<li>「どの方法を使用しますか?」欄で「認証アプリ」を選び，「追加」を押してください．<img src="alt_add_method_pull_down.png"></li>
<li>「別の認証アプリを使用します」というリンクを探して押してください．{{ mfa_totp_trouble }}<img src="alt_auth_app.png"></li>
<li>画面の指示に従って進むとQRコードが表示されるので，お使いの認証アプリでQRコードを読み取り，設定を行ってください．<img src="alt_auth_app_qr.png"></li>
</ol>
</details>
</li>
<li>
<strong>電話番号を使う方法</strong>：電話番号を登録しておき，その電話番号でSMSまたは音声通話（自動音声ガイダンス）の着信を受け取って本人確認を行う方法です．「電話」「代替の電話」「会社電話」の3種類をそれぞれ1つまで（合計3つまで）登録することができ，それぞれの違いは次の通りです．
<ul>
<li><strong>電話</strong>：主に使う電話（携帯電話）を登録するものです．本人確認時の方法としてSMSと音声通話の両方が選べます．初期設定時に電話番号で設定を行った場合は「電話」として登録されています．</li>
<li><strong>代替の電話</strong>：予備の電話（自宅の固定電話など）を登録するものです．本人確認時の方法は音声通話のみで，SMSを選ぶことができません．</li>
<li><strong>会社電話</strong>：予備の電話として会社（大学）の電話を登録するものです．本人確認時の方法は音声通話のみで，SMSを選ぶことができません．他の種類の電話と違って内線番号（直通番号ではなく代表番号に繋がってから追加の番号を入力する必要のある内線）を設定できます．</li>
</ul>
<details>
<summary>登録手順</summary>
<ol>
<li><a href="https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp">多要素認証の設定ページ</a>で，「方法の追加」を押してください．<img src="alt_add_method_pull_down.png"></li>
<li>「どの方法を使用しますか?」欄で登録したい種類の電話番号を選び，「追加」を押してください．<img src="alt_add_method_pull_down.png"></li>
<li>「どの電話番号を使用しますか?」欄は，適切な国番号（日本の場合は「Japan (+81)」）を選択してから，自分の電話番号を入力してください．また，電話番号の種類として「電話」を選んだ場合は，この電話番号を使って本人確認を行う方法として「コードをSMSで送信する」と「電話する」のうちから好みの方を選んでください．<img src="alt_phone.png"></li>
<li>電話番号の確認が行われます．SMSの場合は，SMSに確認コード（6桁の数字）が届き，それを画面に入力するよう求められるので，そのようにしてください．音声通話の場合は，電話が着信し，音声ガイダンスで「#」ボタンを押すように言われるので，そのようにしてください（スマホで通話中に「#」ボタンを表示するには，画面に表示されている「キーパッド」ボタンを押します）．</li>
</ol>
</details>
</li>
</ul>

<!--
<details>
<summary>ヘルプ：「多要素認証の設定ページ」にアクセスする際にサインインを求められ，多要素認証の本人確認が求められる場合 <mark>TODO</mark></summary>
</details>
-->

なお，「方法の追加」を押した後に表示される「どの方法を使用しますか?」欄で，上記の他に「電子メール」と「アプリ パスワード」を選ぶことができますが，これらは多要素認証の本人確認方法とは異なる用途のためのもので，サインイン時の本人確認に使うことはできません．

<div class="box">設定はまだ完了していません．次の手順3へ進んでください．</div>

### 手順3：サインインできるか確認する
{:#initial-try.mfa-initial-step-heading}

次に，ここまでに登録した本人確認方法を利用してUTokyo Accountにサインインすることができるか確認します．

1. [UTokyo Accountのサインアウトページ](https://univtokyo.sharepoint.com/sites/utokyoaccount/_layouts/15/SignOut.aspx)にアクセスしてください．
1. 「サインアウトしました」という画面が表示されるまでしばらく待ってください．
1. [多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)へアクセスしてください．
1. サインイン画面が表示されたら，UTokyo Accountのユーザ名（10桁の数字）とパスワードを入力してください．
1. 続いて多要素認証の本人確認が行われます．本人確認方法により手順が異なりますので，画面の指示に従って操作してください．
    - **「Microsoft Authenticator」アプリの場合**：スマホに通知が送られ，アプリ上でサインインを承認するように求められるので，そのようにしてください．
        <details>
            <summary>※「Microsoft Autheticator アプリを現在使用できません」の表示について</summary>
            <img src="signin_screen_msauth.png" alt="「サインイン要求」の画面に「Microsoft Autheticator アプリを現在使用できません」が表示されている">
            画面に「Microsoft Authenticator アプリを現在使用できません」との表示が現れますが，これは，もしあなたがMicrosoft Authenticatorを使用できない状態にある場合にはここを押してくださいという旨のヘルプメッセージであり，システムがMicrosoft Authenticatorを使用できない状態にある旨のエラーメッセージではありません．
        </details>
    - **「Microsoft Authenticator」以外の認証アプリの場合**：アプリに表示されるコード（6桁の数字）を入力するように求められるので，そのようにしてください．
    - **電話番号でSMSを使う場合**：SMSにコード（6桁の数字）が送られ，それを入力するように求められるので，そのようにしてください．
    - **電話番号で音声通話を使う場合**：電話が着信し，音声ガイダンスで「#」ボタンを押すように言われるので，そのようにしてください（スマホで通話中に「#」ボタンを表示するには，画面に表示されている「キーパッド」ボタンを押します）．
    <details>
        <summary>表示されているもの以外の本人確認方法を使いたい場合</summary>
        サインイン時の本人確認方法は，登録されている方法のいずれか（通常，最初に登録したもの）がデフォルトとして自動的に選ばれます．他の本人確認方法を使いたい場合は，画面上の「別の確認オプションを使用する」（あるいは「問題がありますか? 別の方法でサインインする」「Microsoft Authenticator アプリを現在使用できません」）というリンクを押してください．
        <img src="signin_with_another_method.png">
        また，デフォルトの方法を変更したい場合は，下の「<a href="#change-default">既定（デフォルト）の本人確認方法を変更する</a>」の説明に従って作業してください．
    </details>
1. 「セキュリティ情報」と書かれた多要素認証の設定ページが表示されればOKです．
{:.mfa-initial-procedure}

<div class="box">
設定はまだ完了していません．次の手順4へ進んでください．
<br><br>
※この手順3がうまくいかなかった場合は，次の手順4へ進まず，<a href="/support/">サポート窓口</a>に問い合わせてください．
</div>

### 手順4：多要素認証の利用を申請する
{:#initial-apply.mfa-initial-step-heading}

最後に，多要素認証の利用申請を行います．この申請を行うと，以降，UTokyo Accountにサインインする際に毎回，上の手順3と同様の手順による本人確認が求められるようになります．

なお，事務業務端末（職員向け）のリモートアクセス (Citrix Workspace) が接続中の場合，多要素認証の利用申請を行うと接続が強制的に切断されるため，あらかじめ接続を終了（サインアウト）してから以下の手順を行ってください．

1. [UTokyo Account利用者メニュー](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet)にアクセスしてください．
2. UTokyo Accountのユーザ名（10桁の数字）とパスワードを入力してログインしてください．
3. 左のメニューにある「多要素認証利用申請」を押してください．<img src="user_menu_1.png">
4. 表示される多要素認証に関する説明をよく読んでから，下の方にある「多要素認証を利用する」を「はい」にして，「保存」を押してください．<img src="user_menu_2.png">
{:.mfa-initial-procedure}

<div class="box">
以上で多要素認証の初期設定手順は完了です．<strong>設定がシステム全体に反映されるまで最大約40分かかります</strong>ので，多要素認証の利用が必須なUTokyo VPNおよびUTokyo Slackを利用したい場合は，それまでしばらくお待ちください．
<br><br>
なお，UTokyo VPNを利用したい場合は，<a href="/utokyo_vpn/">UTokyo VPNのページ</a>に記載されている作業も必要ですので，設定がシステム全体に反映されるまで約40分待ってから，引き続き作業を行うようお願いします．
</div>

## 多要素認証の設定変更手順
{:#change}

以下では，多要素認証の本人確認方法の設定を変更する手順について説明します．

**機種変更などで登録されている本人確認方法を使えなくなる場合，あらかじめ代わりの本人確認方法を追加で登録しておくようにしてください．**スマホを処分すると認証アプリによる本人確認はできなくなりますし，電話番号が変わると電話番号による本人確認はできなくなります．設定変更をする際にもサインイン時の本人確認は必要となるので，**本人確認できずにUTokyo Accountにサインインできないという事態にならないよう，必ず事前に設定変更を行うことが重要です．**

**[多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)**にアクセスすると，本人確認方法の設定を変更することができます．

### 本人確認方法を追加する
{:#change-add}

[多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)にアクセスすると，上に書かれている初期設定手順の中の「[手順2：追加の本人確認方法を登録する](#initial-alternative)」と同じ要領で本人確認方法を追加することができます．

<img src="alt_add_method.png">

### 既定（デフォルト）の本人確認方法を変更する
{:#change-default}

本人確認方法を複数登録している場合は，そのうちいずれか（通常，最初に設定したもの）が「既定」（デフォルト）の本人確認方法として扱われ，サインイン時の本人確認ではその方法が自動的に選ばれます．この「既定」の本人確認方法は，次の手順で変更することができます．

1. [多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)の上の方にある「既定のサインイン方法:」という欄を探してください．<img src="alt_change_default_signin_method.png">
2. その欄の右の方にある「変更」を押してください．
3. 「どの方法を使用してサインインしますか?」の欄で，既定（デフォルト）にしたい本人確認方法を選び，「確認」を押してください．

### 設定済みの本人確認方法を変更する
{:#change-edit}

本人確認方法のうち，「電話」「代替の電話」「会社電話」の3種類の電話番号については，次の手順で変更することができます．

1. [多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)に表示されている本人確認方法の一覧から変更したいものを探し，その右の方にある「変更」を押してください．<img src="alt_method_change.png">
2. 新しい電話番号を入力する画面が表示されるので，入力してください．
3. 電話番号の確認（SMSまたは音声通話）が行われます．追加（新規に登録）する場合と同様の要領で作業してください．

なお，Microsoft AuthenticatorやGoogle Authenticatorなどの認証アプリには「変更」画面がありません．認証アプリの設定を変更したい場合は，代わりに新しい設定を追加してから古い設定を削除するという操作を行ってください．

### 本人確認方法を削除する
{:#change-delete}

次の手順で，不要になった本人確認方法を削除することができます．

1. [多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)に表示されている本人確認方法の一覧から削除したいものを探し，その右の方にある「削除」を押してください．<img src="alt_delete_method.png">
2. 「ご使用のアカウントでこの方法を削除しますか?」と表示されるので，「OK」を押してください．

なお，本人確認方法として利用できる項目（認証アプリと電話）をすべて削除してしまうと，次にサインインするときに本人確認方法の登録を求められますので，注意してください（「メールアドレス」と「アプリ パスワード」の項目は多要素認証の本人確認方法としては利用できません）．

## 故障や機種変更などで本人確認ができずサインインできなくなった場合
{:#troubleshooting}

故障や機種変更などで本人確認方法が使えなくなったため多要素認証によるサインインができなくなった，という場合の対処法を説明します．

なお，**対処を済ませサインインできるようになったら，設定を変更して複数の本人確認方法を使える状態にしておくことを強く推奨します**．上の「[多要素認証の設定変更手順](#change)」で説明しているとおり，[多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)から設定を変更してください．

### 他の本人確認方法を使う
{:#troubleshooting-alternative}

登録済みの他の本人確認方法が使える状態であれば，それを使ってサインインすることができますので，まずはそれを試してください．

サインイン時（パスワード入力後）に表示される本人確認を行う画面で，「問題がありますか? 別の方法でサインインする」あるいは「別の確認オプションを使用する」というリンクを探して押してください．
<img src="signin_with_another_method.png">
デフォルト（自動的に選ばれるもの）以外のものも含め，設定済みの本人確認方法が一覧で表示されます．

- この中に使える状態の本人確認方法があれば，それを選んでその方法で本人確認を行うことで，UTokyo Accountにサインインすることができます．
- 表示された本人確認方法がすべて使えない状態であれば，本人確認方法の再登録手続きを行う必要があります．次の「本人確認方法を再登録する」の説明に進んでください．

### 本人確認方法を再登録する
{:#troubleshooting-reregister}

登録済みの本人確認方法がすべて使えない状態となってしまった場合は，本人確認方法の再登録手続きを行う必要があります．「**[UTokyo Account多要素認証の本人確認方法再登録および利用終了について](reregister_and_terminate)**」のページを参照してください．

## その他
{:#others}

### 多要素認証の申請を取り消したい・多要素認証の利用を終了したい
{:#others-terminate}

セキュリティの観点から多要素認証を利用することを推奨しておりますが，やむを得ない事情がある場合には，多要素認証の利用を終了し，パスワードだけでサインインできる状態に戻すことができます．「**[UTokyo Account多要素認証の本人確認方法再登録および利用終了について](reregister_and_terminate)**」のページを参照してください．

なお，多要素認証の本人確認方法が利用できずサインインできなくなったという場合は，上の「[多要素認証の本人確認ができずサインインできなくなった場合](#troubleshooting)」で説明しているとおり，「本人確認方法の再登録」を行うことによりサインインできるようになりますので，多要素認証の「利用終了」をする必要はありません．

### ハードウェアトークンの利用について（教職員向け）

UTokyo Accountの多要素認証における本人確認方法としては，スマホの認証アプリまたは電話番号（SMS・音声通話）が基本となりますが，どちらも利用できない場合のため，「ハードウェアトークン」という専用の機器を貸し出しています（教職員向け）．詳細は[UTokyo Portalの案内ページ（教職員専用）](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/UTokyo_Account_Token.aspx)を参照してください．

### Microsoft Authenticatorで6桁のコードを使ってサインインする方法

多要素認証によるサインインの際に，本人確認方法としてMicrosoft Authenticator
を使う場合，アプリに送られる通知を承認する方法（標準的な方法）のほかに，
アプリに表示されるコード（6桁の数字）を入力する方法があります．
この方法には，スマホがネットワークに接続されていなくても使うことができ，
通信障害に強いという利点があります．

1. UTokyo Accountのユーザ名（10桁の数字）とパスワードを入力した後に表示される多要素認証の本人確認の画面で，「別の確認オプションを使用する」（あるいは「Microsoft Authenticator アプリを現在使用できません」）というリンクを押してください．
1. 続いて表示される画面で「モバイル アプリまたはハードウェア トークンから確認コードを使用する」（あるいは「確認コードを使用する」）という項目を押してください．
1. 続いて表示される画面に，「確認コードを入力してください」（あるいは「モバイル デバイスの Microsoft Authenticator アプリに表示されているコードを入力してください​」）と書かれた入力欄が表示されます．以下の手順でMicrosoft Authenticatorアプリからコード（6桁の数字）を取得し，入力欄にそのコードを入力してください．
   1. Microsoft Authenticatorアプリを開いてください．
   1. 表示される一覧から「The University of Tokyo」と書かれた項目を押してください．
   1. 次の画面の，「ワンタイム パスワード コード」と書かれた下に，コード（6桁の数字）が表示されます．
   1. アプリ画面の左側に表示されるカウントダウンが0になる前に，このコードをサインイン画面の入力欄に入力し，「サインイン」（あるいは「検証」）を押してください．
      <br>※カウントダウンが0になると，表示されているコードが別の新しいものに変わります．その場合は，新しく表示されたコードを使って操作をやり直してください．
1. これでUTokyo Accountにサインインできます．

### サインイン時の本人確認の挙動について

通常，多要素認証を利用している場合のサインインは，まずパスワードを入力し，次いで多要素認証の本人確認を行う，という手順になります．

しかし，これと異なる次のような挙動が起きることがあります．

- 多要素認証の本人確認を続けて2回求められる
- パスワードの入力が求められない（スキップする）のに，多要素認証の本人確認だけが求められる
- パスワードを入力したのにその後に多要素認証の本人確認が求められない

これらの挙動は，UTokyo Accountに関するシステム間の連携処理の都合により発生するものですので，お手数ですが，画面の指示に従って操作し，サインインするようお願いいたします．

### 「不明なエラーが発生しました」エラーについて

![「セキュリティ上の理由により、アカウントを検証するための追加情報が必要です 不明なエラーが発生しました 選択した認証方法は '0123456789@utac.u-tokyo.ac.jp' に使用できません。別の認証方法を選択するか、システム管理者にお問い合わせください。 他の方法でサインインする エラーの詳細」というエラーメッセージが表示されることがある](redirection_error.png)

多要素認証の設定の状態によって，UTokyo Accountにサインインする際に「不明なエラーが発生しました」という上の画像のような内容のエラーが表示される場合があります．これは，多要素認証の本人確認方法の登録（手順1・手順2）を行う前に多要素認証の利用申請（手順4）を行った際に起きることがあるものです．「[手順1：1個目の本人確認方法を登録する](#initial-first)」および「[手順2：追加の本人確認方法を登録する](#initial-alternative)」の手順で本人確認方法の登録をしてください．
