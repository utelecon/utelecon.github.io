---
title: UTokyo Accountの認証基盤のシステム変更について
---

このページでは，UTokyo Accountの認証基盤のシステム変更について説明します．これらのシステム変更は，UTokyo Accountの多要素認証の利用必須化に向け，それを利用しやすくするためのものです．多要素認証の利用必須化につきましては，「[UTokyo Accountにおいて多要素認証の利用を必須化します](./mfa100-schedule)」を参照してください．

## より多くの情報システムでサインイン時に `@utac.u-tokyo.ac.jp` の入力が必須になります

UTokyo Accountでサインインする際に，これまでは`@utac.u-tokyo.ac.jp`を省略し，共通ID（数字10桁）とパスワードでサインインできる場合がありました．今回のシステム変更により，より多くの情報システムにおいて，「10桁の共通ID＋`@utac.u-tokyo.ac.jp`」と入力しなければならなくなります．[UTokyo Account Service Directory](https://login.adm.u-tokyo.ac.jp/utokyoaccount/)で「SSO」欄が「○」となっている情報システムが，この変更の対象となります．代表的な例は以下の通りです．

- UTAS
- ITC-LMS/UTOL
- Zoom
- 東京大学MyOPAC
- EZproxy

この変更は，次に説明するように，パスワードレスサインインを広く利用可能にするために必要な変更ですので，ご理解ください．

## パスワードレスサインインが広く利用可能になります

「パスワードレスサインイン」は，パスワードを入力せずにサインインする方法の総称です．UTokyo Accountにおいて，パスワードレスサインインはこれまで非常に限られた場合でしか利用できませんでした．今回のシステム変更により，多くの場合でパスワードレスサインインが利用できるようになります．[UTokyo Account Service Directory](https://login.adm.u-tokyo.ac.jp/utokyoaccount/)で「SSO」欄が「○」となっている情報システムが，この変更の対象となります．代表的な例は以下の通りです．

- UTAS
- ITC-LMS/UTOL
- Zoom
- 東京大学MyOPAC
- EZproxy

UTokyo Accountで利用できるパスワードレスサインインの方法は，FIDOセキュリティキーによるものと，Microsoft Authenticatorによるものの2種類です．

### FIDOセキュリティキーでパスワードレスサインインを行う

UTokyo Accountの多要素認証の本人確認方法としてFIDOセキュリティキーを利用している方は，FIDOセキュリティキーでパスワードレスサインインを行うことができます．初期設定の方法と，利用できるOSとブラウザの組み合わせについては，[FIDOセキュリティキーの初期設定](/utokyo_account/mfa/fido-security_key/)を参照してください．

サインインの流れは以下の通りです．

1. サインイン画面が表示されたら，「サインイン オプション」を押してください．
2. 選択肢が複数表示されるので，「セキュリティ キーでサインイン」を選択してください．
3. 画面の指示に従って，PINの入力あるいは生体認証，セキュリティキーのタップなどを行った後，サインインが完了します．
    - アカウントを選択する画面が表示される場合がありますが，その場合はUTokyo Accountを選択してください．

### Microsoft Authenticatorでパスワードレスサインインを行う

UTokyo Accountの多要素認証の本人確認方法としてMicrosoft Authenticatorを利用している方は，追加の設定を行うことで，Microsoft Authenticatorでパスワードレスサインインを行うことができるようになります．

設定方法は以下の通りです．

1. Microsoft Authenticatorを本人確認方法として登録していない場合は，「[UTokyo Account多要素認証の初期設定手順](/utokyo_account/mfa/initial/)」に従って，Microsoft Authenticatorを本人確認方法として登録してください．
1. スマホでMicrosoft Authenticatorアプリを起動してください．アプリ上に表示されている自分のUTokyo Accountを選択してください．
1. 「電話によるサインインを有効にする」を押してください．
1. 「続行」を押してください．
1. 指示に従ってサインインしてください．
1. 「」と聞かれるので，「」を押してください．設定が完了します．

サインインの流れは以下の通りです．
1. サインイン画面が表示されたら，「10桁の共通ID＋`@utac.u-tokyo.ac.jp`」を入力してください．
1. Microsoft Authenticatorアプリに通知を飛ばすように求められるので，「」を押してください．
1. 表示される数字をMicrosoft Authenticatorアプリに入力してください．
1. サインインが完了します．

## FIDOセキュリティキーがより多くの情報システムで利用可能になります

これまで，一部の情報システムはFIDOセキュリティキーに対応していませんでした．これからは，より多くの情報システムにおいてFIDOセキュリティキーが利用できるようになります．今回の変更により，[UTokyo Account Service Directory](https://login.adm.u-tokyo.ac.jp/utokyoaccount/)で「SSO」欄が「○」となっている情報システムは全て，FIDOセキュリティキーに対応します．今回新たにFIDOセキュリティキーに対応する情報システムの例は以下の通りです．

- 東京大学MyOPAC
- EZproxy
- 出張旅費システム
- 学術認証フェデレーション

この変更に伴って，これらの情報システムについては認証を求められる頻度が低くなります．

なお，[UTokyo Account Service Directory](https://login.adm.u-tokyo.ac.jp/utokyoaccount/)で「SSO」欄が「○」となっていない情報システムにつきましては，従来通りFIDOセキュリティキーを利用することができません．
- UTokyo Account利用者メニュー
- ECCS端末
- 就労管理システム
