---
title: UTokyo Account
slug: utokyo_account # 手順を外部ファイルからincludeするときに使う
---

## UTokyo Accountとは
- **UTokyo Account**は，東京大学の情報システムを利用する際に必要となる全学的なアカウントです．，東京大学の構成員（学生および教職員）は，このアカウントでサインインすることで情報システムを使うことができます．
- UTokyo Accountのユーザ名は10桁の数字で表され，**共通ID**とも呼ばれます．情報システム内では，`1234567890@utac.u-tokyo.ac.jp`のように，10桁の共通IDの後に東京大学であることを表す記号`@utac.u-tokyo.ac.jp`を付けたものが用いられることもあります．
  - `10桁@utac.u-tokyo.ac.jp`は通常利用できるメールアドレスではありません．
  - `10桁@utac.u-tokyo.ac.jp`に送られたシステムメッセージが[ECCSクラウドメール](/eccs_cloud_email)に転送されることがありますが，発信には利用できません． 
- UTokyo Accountで利用できるサービスについては，「[東京大学のシステム](/systems)」のページをご覧ください．

## UTokyo Account利用上の注意
1. UTokyo Accountは大学が組織的に受入し管理されている構成員に付与します．（大学が組織的に受入をしていない方には付与しません．）
1. UTokyo Accountで利用可能なサービスは利用者の身分・所属等により異なります．
1. UTokyo AccountおよびUTokyo Accountを利用する情報システムにおいては[情報倫理・コンピュータ利用ガイドライン](https://www.u-tokyo.ac.jp/content/400156696.pdf)を遵守してください．（参照：[東京大学情報セキュリティポリシー](https://www.u-tokyo.ac.jp/gen03/public16_j.html)）
1. UTokyo AccountおよびUTokyo Accountを利用する情報システムにおいて情報倫理・コンピュータ利用ガイドラインを遵守しない不適切な利用，安全性の問題を生じた場合はアカウントの停止をします．
1. UTokyo Accountの利用に際して必要な事項は本ページの情報を参照してください．

## UTokyo Accountを使い始めるには
{% include procedures/utokyo_account.html %}

現在アカウントを持っていなくても，UTokyo Accountを発行することができる場合があります．所属の学部・研究科等の窓口（学生は学務・教務担当，教職員は人事担当）にお問い合わせください．

## UTokyo Accountで情報システムにサインインする
UTokyo Accountを用いるとさまざまな情報システムが利用可能です．状況により，サインイン方法が異なります．

以下の画面（安田講堂の画面）が表示された場合には，共通ID（数字10桁）とパスワードでサインインできます．

![](img/signin-yasuda.png)

以下のように，安田講堂の画像が現れず，サインイン画面が表示された場合には，`共通ID（数字10桁）@utac.u-tokyo.ac.jp`を入力してください．

<figure class="gallery">
  <img src="img/signin-utac-01.png">
  <img src="img/signin-utac-02.png">
</figure>

なお，UTokyo Accountでサインインする情報システムの多くは互いに連携しており，最初にひとつの情報システムでユーザ名とパスワードを入力してサインインすると，それ以降に別の情報システムを利用する際にはユーザ名とパスワードの入力が不要になります．これを**シングルサインオン** (Single Sign-On, SSO) といいます．

## パスワードについて
### 有効期間
パスワードは，変更してから1年間有効です．現在のパスワードの有効期限は，[利用者メニュー](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet)から確認することができます．

### パスワードを変更する
[利用者メニュー](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet)内の「パスワードの変更」から，パスワードを変更することができます．

### パスワードを忘れた場合
UTokyo Accountのパスワードを忘れた場合には，次のような手順を踏むことでアカウントに再びサインインすることができます．

#### メールでパスワードを再設定する
個人情報登録（教職員）や学務システム（学生）にメールアドレスが登録されている場合，[利用者メニュー](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet)でパスワードの再設定ができます．

パスワードの再設定の手続きを行ったにもかかわらずメールが届かない場合には，`u-tokyo.ac.jp`ドメインからのメールを受け取れるよう迷惑メールフィルタなどの設定変更を行ってください．

#### 窓口でパスワードを再発行する
メールアドレスを未登録の場合や，上記の手順がうまくいかない場合には以下のことを行ってください．
- **教職員**：所属部局の人事担当にお問い合わせください．
- **学生**：自分の所属する[学部・研究科（教育部）等の教務担当窓口](https://www.u-tokyo.ac.jp/ja/students/services/m01.html)，または[ECCSのパスワード再発行窓口](https://www.ecc.u-tokyo.ac.jp/map.html)（情報教育棟・情報基盤センター・福武ホール）で，学生証持参の上パスワード再発行手続きを行ってください．

## 多要素認証 (MFA)
UTokyo Accountでは**多要素認証** (Multi-Factor Authentication, MFA) を導入しています．多要素認証を設定すると，アカウントにサインインする際に，パスワードに加えて，SMSや専用のアプリ等での本人確認が要求されるようになります．詳細は[UTokyo Accountにおける多要素認証の利用について](mfa/)を参照してください．