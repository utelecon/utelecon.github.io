---
title: FAQ よくある質問
---

{% include sso.html %}

## 授業全般

### Q. オンライン授業に入れない
* UTAS でその授業の詳細情報タブの「オンライン授業URL」「オンライン授業内容」や他の欄をご確認ください
  * UTAS が重い場合は、UTAS Lite [https://utelecon-directory.adm.u-tokyo.ac.jp/login/?next=/](https://utelecon-directory.adm.u-tokyo.ac.jp/login/?next=/) をご利用ください
* それでも見つからない場合は、ITC-LMS のその授業情報で URL が共有されていないかご確認ください
* それでも見つからない場合は、念のためそもそもオンライン授業がリアルタイムにあるのか、UTAS や ITC-LMS でご確認ください（動画を各自で視聴するといったオンデマンド型の可能性もあります）

### Q. 出席はどうやってとればよいですか？  
以下のような方法があります．
  * ITC-LMS の<a href="https://www.ecc.u-tokyo.ac.jp/announcement/2014/05/13_1904.html" target="_blank">出席管理</a>を使う
  * Googleフォームや Microsoft Forms などのWebアンケートを使う
    * （代返対策）授業内容に関する質問に回答することや授業の感想を記入することを必須にする
    * （代返対策）ECCS クラウドメールのアカウント（本学のGoogleアカウント）で<a href="https://docs.google.com/forms/u/0/?tgif=d" target="_blank">Google フォーム</a>を作成する際，フォームの編集画面にて「設定（歯車マーク）」の中の「メールアドレスを収集する」と「東京大学ECCSクラウドメールと信頼できる組織のユーザーに限定する」をオンにする（こうすると学生は自身のECCSクラウドメールでログインした上でアンケートに回答する必要があるため，代返のハードルを上げることができます）
  * Web会議システムを使う場合で，人数的に可能ならば，直接点呼する（その際，ビデオをオンにしてもらって直接顔を確認するなども可能）
  * Zoom のレポート機能を使うことで，誰がいつ入室して，いつ退室したのかが一覧で把握できます．それを使うと出席の管理ができます．詳しくは<a href="https://utelecon.adm.u-tokyo.ac.jp/zoom/how/faculty_members/attendance" target="_blank">（Zoom 教員編）出席管理を行う</a>をご覧ください

<a name="zoom"> </a>
## Zoom

### 全般

#### Q. 大学のアカウントを作成したい
* 大学のアカウントの作り方は特殊です
* このページ [/zoom/create_account](/zoom/create_account) を注意深く読みながらアカウントを作成してください

#### Q. 料金は必要ですか？  
* 大学の Zoom アカウントは無料で使えます

#### Q. Zoomのアカウントを作る必要はありますか？

* 「会議を開催する人」は必要です．つまり授業をするために会議の設定をする人，典型的には教員，またはそれを代行するTAは必要です
* Zoomの機能を用いて学内限定に設定された会議に参加する人は必要です．一部の授業ではオンライン授業へのアクセスを制御するためにこうしていますので，そのような授業に参加する場合は作って下さい
* それ以外の会議に参加するだけの人は不要です

#### Q. サインインを何度か失敗し「アカウントがロックされました」と表示された​​
5回連続でサインインに失敗するとロックされますが，30分経過すれば再度ログイン可能になりますので，30分ほどお待ち下さい．

<a name="zoom_create_account"> </a>
### 初期設定

#### Q. Zoom のアカウント招待メールがない
* 東大の Zoom アカウントは，招待メールを使わずに作成可能です．[アカウントの作り方ページ](/zoom/create_account)をご覧ください

#### Q. 招待メールのボタンを押すと「ユーザが存在しません」「期限切れ」と出た
* 東大の Zoom アカウントは，招待メールを使わずに作成可能です．[アカウントの作り方ページ](/zoom/create_account)をご覧ください

#### Q. ユーザータイプが Licensed ではなく Basic になってしまっている
* 共通ID10桁@g.ecc.u-tokyo.ac.jp の Zoom アカウントであれば，1時間以内に Licensed になりますので，少々お待ち下さい
* ご自身で設定された文字列@g.ecc.u-tokyo.ac.jp の Zoom アカウントは Licensed になりませんので，[アカウントの作り方ページ](/zoom/create_account)を読んで，共通ID10桁@g.ecc.u-tokyo.ac.jp の Zoom アカウントをご作成ください

#### Q. パスワードがわからない
* 以下の手順で作業してください

1. パスワードリセットページ（[https://zoom.us/forgot_password](https://zoom.us/forgot_password)）にて，共通ID10桁@g.ecc.u-tokyo.ac.jp（注: ご自身が設定した文字列@g.eccではありません）を入力して，パスワード再設定のためのメールを送信してもらう
2. ECCSクラウドメールのログインページ（https://mail.google.com/a/g.ecc.u-tokyo.ac.jp）からにログインして（注: ややこしくてすみませんが、ここではご自身が設定した文字列@g.ecc です），パスワード再設定用のメールを確認する
3. メールのリンクを用いて新たなパスワードを設定する
4. Zoom のサインインページ（[https://zoom.us/signin](https://zoom.us/signin)）にて、メールアドレスは 共通ID10桁@g.ecc.u-tokyo.ac.jp（注: ご自身が設定した文字列@g.ecc ではありません）、パスワードは先程設定したものを入力して「サインイン」を押す
5. 無事サインインできれば完了です



### 入室トラブル

#### Q. ミーティングに参加しようとしたら「このミーティングの対象者は権限のある参加者のみです」と出て参加できないのですがどうすればよいでしょうか？  
* 開催者（ホスト）が東京大学の Zoom アカウントを持ったユーザーしか入れない設定にしているためだと思われます
* そのため，Zoom のページ [https://zoom.us/profile](https://zoom.us/profile) に xxxx@g.ecc.u-tokyo.ac.jp のアカウントでサインインしてください
  * もしくは，インストールされている Zoom のアプリに「共通ID10桁@g.ecc.u-tokyo.ac.jp」の Zoom アカウントでサインインしてください  
* もし「共通ID10桁@g.ecc.u-tokyo.ac.jp」の Zoom アカウントをまだ作成していなかったら，[アカウントの作成方法](/zoom/create_account)のページを注意深く読みながら，大学の Zoom アカウントをご作成ください．

### 具体的な使い方

#### Q. 会議室への入室を学内限定にしたい  
* 以下の流れで設定いただくと，学内に限定することができます
  * ただ，ここで注意が必要なのは，以下の設定を行うと，参加者（学生など）も Zoom のアカウントを作成し，それを用いて入室しないといけないため，入室のハードルが高まるということです
  * そのため，参加者全員が慣れてきた時に利用することをおすすめします

1. Zoom のユーザー設定（https://zoom.us/profile/setting）において，「認証されているユーザーしかミーティングに参加できません」をオンにする
1. ミーティングのスケジュール時に詳細オプションにて，「認証されているユーザーしかミーティングに参加できません」をオンにして，「大学アカウントでサインイン」を選択するとその会議室には本学の Zoom アカウントでサインインしないと入室できないようになります（正確には，g.ecc.u-tokyo.ac.jp のドメイン制限をします．ドメインは開催者側で編集可能です）．
  
  
#### Q. Zoom を用いて出席をとりたい  
* 以下の手順で，Zoom の会議室にいた人の情報を得ることができるため，それを用いると出席管理できます．
  1. Zoom マイページの左のメニューにある「レポート」[https://zoom.us/account/report](https://zoom.us/account/report) を押して，更に「用途」を押します
  1. これまでに実施したミーティングの一覧が出てくるため，出席確認したいミーティングの「参加者」の列にある数字を押します．
  1. そうすると，名前，参加時刻，退出時刻，所要時間，またアカウントでサインインしていればメールアドレスを確認することができます．
  
  
#### Q. オムニバス講義の担当教員や TA に作った部屋の開催者（ホスト）権限を事前に付与したい  
* （事前ではないものも含まれますが）それに対応する方法は2つあります． 
  1. 主任教員がスケジュールで会議室を作成する際に，詳細オプション「ホストより前の参加を有効にする」をオンにしておき，ホストになってもらいたい担当教員やTAに<a href="https://zoomy.info/zoom_perfect_manual/joining/host_key/" target="_blank">ホストキー</a>を伝えておいて，担当教員やTAが入室後にメニュー「参加者」→「ホストの要求」と押して，ホストキーを入力してホストになってもらう．  
     * こうすることで，アカウントを持っていない人でもホストになることができます
  1. スケジュールで会議室を作成する際に<a href="https://zoom-support.nissho-ele.co.jp/hc/ja/articles/360022865192-%E4%BB%A3%E6%9B%BF%E3%83%9B%E3%82%B9%E3%83%88" target="_blank">代替ホストを設定</a>する．  
      * この方法だと事前に設定することはできますが，ホストになってほしい担当教員や TA はプロのアカウントをもっている必要があります．
  
#### Q. 登録ページにて登録しようとすると「無効なユーザ名」というエラーが出てしまう
* 残念ながら2020年4月18日現在では，氏名の欄に漢字が合計6文字以上入力されると「無効なユーザ名」とエラーになってしまうようです（例: 「長谷川 太郎丸」はダメで「長谷川 太郎まる」は OK）．
* そのため，申し訳ございませんが，ローマ字表記にするなど，氏名の欄の漢字が合計5文字以下になるように工夫いただければ幸いです．

<!--  
### Q. ECCS 端末で Zoom を利用可能でしょうか？  
* イヤホンやヘッドセットを持参すれば利用可能です．
* 本格的なオンライン授業の開始に向けて，マイクの利用形態については現在検討中です．
* 当面は，周りの迷惑にならない範囲でご利用ください．ECCS端末の入出力端子については<a href="https://userguide.ecc.u-tokyo.ac.jp/current/C3BCCBF62FC6FEBDD0CECFB4C4B6AD.html" target="_blank">利用の手引き</a>でご確認ください．
* 参考ページ: <a href="https://www.ecc.u-tokyo.ac.jp/announcement/2020/03/23_3147.html" target="_blank">ECCS端末でのオンライン授業・Web会議への参加</a>）
-->

<a name="webex"> </a>
## Cisco Webex
### [アカウント申請](/webex/create_utelecon_account)をしたが, メールが届かない
* 招待メールはECCSクラウドメール (ドメインがg.ecc.u-tokyo.ac.jpのもの) に届きます. 正しいアカウントでGmailにログインしているかどうか, また迷惑メールなどに誤って振り分けられていないかを確認してください.
* アカウント作成には手動のプロセスが含まれており, 数日程度時間を要することがあります. 会議などで必要になる場合は余裕をもってアカウント申請を行ってください.

## ECCSクラウドメール (G Suite for Education)

### Q. ECCSクラウドメールって何ですか？
* 平たく言うと本学の Google メールです．
* このアカウントは Google のアカウントなので，例えば以下の Google のサービスを使えます
  * Google Drive（ファイル置き場）
  * Google Docs（Word に似たもの）
  * Googleスプレッドシート（Excel に似たもの）
  * Google フォーム（Webアンケート）
  * YouTube  
* 参考リンク: <a href="https://www.ecc.u-tokyo.ac.jp/announcement/2017/04/26_2495.html" target="_blank">利用の手引</a>，<a href="http://www.itc.u-tokyo.ac.jp/DigitalLife/perFile/12_ec_gakusei-cloud.pdf" target="_blank">ECCSクラウドメールの利活用</a>  

### Q. ECCSクラウドメールを使いたい
* 使うためには初期設定が必要です．
* このサイト [https://hwb.ecc.u-tokyo.ac.jp/current/literacy/email/initialize/](https://hwb.ecc.u-tokyo.ac.jp/current/literacy/email/initialize/) を参考にして，「メールアドレスの設定」と「パスワードの設定」を行ってください．

### Q. 学内限定の Google スプレッドシートや Drive などにアクセスできない
* まず，このページ [https://mail.google.com/a/g.ecc.u-tokyo.ac.jp](https://mail.google.com/a/g.ecc.u-tokyo.ac.jp) からログインしてください（ここで用いるのは 共通ID10桁@g.ecc ではなく ご自身で設定した文字列@g.ecc です）
* ログイン後に Google スプレッドシートや Drive にアクセスしてください

### Q. パスワードを忘れた・変更できない

* パスワードは UTokyo Account の利用者メニューからのみ変更できます．以下の手順で変更ください．

1. 利用者メニュー [https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet) にアクセスしてください
2. ユーザ名には共通ID10桁の数字【のみ】をご入力ください（@utac.u-tokyo.ac.jp は入力しないでください）．パスワードは UTokyo Account のパスワードを入力してください
3. サインインできたら，メニュー「ECCSクラウドメール（パスワード変更）」を押して，パスワードを変更してください
4. 毎時0分にパスワード情報が更新されるため（処理には数分かかります），最大1時間待った後，ECCS クラウドメールにログインしてください


## Microsoft 365 (旧 Office 365)

### Q. Microsoft Officeにサインインできない
具体的には，「サインイン」の画面にユーザ名を入れると「そのユーザー名のアカウントが見つかりませんでした。別のユーザー名を入力するか、新しい Microsoft アカウントを取得してください」と言われる

* 入力するユーザ名の間違いかもしれません. ここには「共通ID@utac.u-tokyo.ac.jp」を入れて下さい. 共通IDは10桁の数字です.
* 利用許諾を行いましたか? まだなら<a href="https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet" target="_blank">UTokyo Account利用者メニュー</a>にログインし, 左のメニューから「Office 365 ProPlus 利用許諾」を選び現れる画面の下の方 「利用規約に合意し利用権を申請する」の「はい」を選んで「保存」して下さい
* 利用許諾から実際に使えるようになるまでに時間がかかります. 日中は最大3時間, 夜は翌朝の11:00までお待ち下さい(正確には「はい」にして保存から直近の11:00, 14:00, 17:00, 20:00ごろまでお待ち下さい).
* それでもダメという場合, 一度「利用規約に合意し利用権を申請する」の「いいえ」を選んで「保存」してから, また「はい」を選んで保存する(そして上記の時間待つ)とうまくいくことがあります

### Q. Officeにサインインした画面でExcel, Wordなどのアプリのアイコンがでてこない

* 参考: <a href="https://www.office.com/?auth=2" target="_blank">Officeにサインインした画面</a>
* 一度も起動したことのないアプリのアイコンは出てこないようなので, 左上のタイルメニューを開いてみて下さい. 

<!--
学内者限定のExcel Workbookにアクセスできない
-->

## UTAS

### Q. UTAS にログインできない

* 参考: <a href="https://utas.adm.u-tokyo.ac.jp/campusweb/campusportal.do" target="_blank">UTAS</a>
* <a href="https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet" target="_blank">UTokyo Account利用者メニュー</a>や<a href="https://itc-lms.ecc.u-tokyo.ac.jp/login" target="_blank">ITC-LMS</a>にログインできるか確かめてみてください
  * それらはログインできるのにUTASに出来ない場合:
    * 稀に, UTokyo Accountが発行されているのにUTASのアカウントが発行されていない場合があります. 所属の事務室に, 10桁の共通IDとともに, 自分にUTASのアカウントが発行されているかを尋ねて下さい
  * それらにもログインできない場合:
    * UTokyo Acount の<a href="https://utacm.adm.u-tokyo.ac.jp/webmtn/multi/jpn/reset.html" target="_blank">パスワードを再設定</a>してみて下さい

## ITC-LMS

### Q. ITC-LMSって何ですか？
* 本学の学習管理システムです．
* 学生が，自分が履修した授業に関して，教員が配布した資料を閲覧できたり，課題を提出したり，教員が作っていた場合は掲示板で議論したり質問したり，アンケートに答えたり，試験を受けたりできます．  
* 参考リンク: <a href="https://www.ecc.u-tokyo.ac.jp/itc-lms/index.html" target="_blank">ITC-LMSについて</a>，<a href="https://www.ecc.u-tokyo.ac.jp/itc-lms/faq.html" target="_blank">よくある質問</a>   

### Q. オンライン講習を受け, テストを受けたが「合格」が現れない. もう一度講習を受けようとしても, 時間割の左下に「ECCS新規利用者講習会」が表示されない

* そのような現象が何人かの方に発生しています. 「ECCS新規利用者講習会」が表示されない場合は実際には合格していますが, 気になる場合はお問い合わせ下さい.

### Q. オンライン講習のビデオを見て, 続けてテストに入るところで「受験する」ボタンが現れない

* 「受験する」ボタンは，動画の視聴が終了する頃に，ブラウザで ITC-LMS の画面が表示されている元のタブに現れれます. 動画と別のタブになっている場合があるのでご注意下さい. ITC-LMS の画面が表示されているタブを見て下さい

## UTokyo Account

### Q. UTokyo Account利用者メニューにログインできない

* 参考: <a href="https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet" target="_blank">UTokyo Account利用者メニュー</a>
* ユーザ名にUTokyo Accountの共通ID <span style="color:green;">「10桁の数字」</span>を入力していることを確認してください
  * 10桁の数字@utac.u-tokyo.ac.jp <span style="color:red;">ではありません</span>
* ユーザ名を正しく入力しているのにエラーが出る(ユーザID・パスワードが不正です。)と出る場合, パスワードが間違っているのかも知れませんので, <a href="https://utacm.adm.u-tokyo.ac.jp/webmtn/multi/jpn/reset.html" target="_blank">パスワードを再設定</a>してみてください

### Q. UTokyo Accountのパスワード再設定でUser ID入力欄でエラーになる

* パスワード再設定画面では, User IDに入力するのは, 10桁の数字@utac.u-tokyo.ac.jp です
  * 10桁の数字 ではありません
* <a href="https://www.youtube.com/watch?v=Kumu8aPGnyI&feature=youtu.be" target="_blank">うまく行く場合の動画</a>もご覧ください 

### Q. パスワードを再設定したのにメールが来ない
* 以下の手順に沿って作業してみてください
  1. サーバの関係で受信が遅れることがあるため，1時間ほどお待ち下さい
  2. それでもメールが来ない場合は，設定されているメールアドレスが間違っている可能性があるため，学生は UTAS，教職員は人事情報システムにてメールアドレスを再設定してから，再度試してみてください

