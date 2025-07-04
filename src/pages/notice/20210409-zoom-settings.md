---
title: オンライン授業などでのZoomの設定確認（認証・待機室・人数上限）のお願い
redirect_from:
  - /notice/zoom202104
--- 

Zoomユーザ各位（特にオンライン授業・面接などで利用される先生方）

<div style="text-align: right;">情報システム本部</div>


Zoomの利用にあたり，3月に行いましたシステム変更に関連して，また授業の開始にあたり，会議室の設定において注意すべき点がありますので，お知らせいたします．

特に，

- 授業などで会議室への入室制限を設定されている方
- 授業や入試の面接などのために待機室を利用されている方
- 多人数の授業を担当されている方

におかれましては，以下の内容をご確認くださるようお願いいたします．

設定が適切にされていない場合，東京大学のアカウントに正しくサインインしているユーザが会議室に入れないという事態も起きますので，必ずご確認をお願いいたします．

あわせまして，授業に関し，学生に落ち度のないトラブルに対しては，録画の提供など柔軟にご対応いただけますと幸いです．

## 1. 認証オプションの設定

3月中旬に行いましたZoomのサインイン方法変更後，会議室に東京大学のアカウントでしか入れないようにするために「参加者に認証を求める」を「大学アカウントにサインイン」と設定している場合，指定ドメインは g.ecc.u-tokyo.ac.jp ではなく *.u-tokyo.ac.jp としなければなりません．

サインイン方法変更後の東京大学のZoomアカウントは， @utac.u-tokyo.ac.jp となっており， @g.ecc.u-tokyo.ac.jp から変更されていますので，指定ドメインを g.ecc.u-tokyo.ac.jp としていますと，東京大学のアカウントに正しくサインインしているユーザが会議室に入れなくなります．

特に，授業において，学生に対しECCSクラウドメールのZoomアカウント (@g.ecc.u-tokyo.ac.jp) でのサインインを指示することがないよう，ご注意ください．

また，以下のページもあわせてご覧ください．
- 「[Zoomミーティングで参加時に認証を求める](/zoom/auth/)」：設定方法などの詳細について
- 「[授業におけるZoom会議室の入室制限](/faculty_members/zoom_access_control/)」：授業における認証（入室制限）の考え方について

## 2. 待機室の設定

Zoomでは，「待機室」機能を利用することで，参加者が一度「待機室」に入るように設定することができますが，以下の通り，動作の異なる複数の設定ができますので，意図した設定になっているかをご確認ください．

- 全てのユーザを待機室に入れる設定<br>
（面接試験など，一人ずつ入室させるようなケースに適しています）
- 大学のアカウントでサインインしたユーザは待機室に入れずに自動的に入室許可するという設定<br>
（オンライン授業で，大学アカウントでのサインインをしているユーザは自動的に入室させたいようなケースに適しています）

また，以下のページもあわせてご覧ください．
- 「[Zoomミーティングで待機室を設定する](/zoom/waiting_room/)」：設定方法などの詳細について
- 「[授業におけるZoom会議室の入室制限](/faculty_members/zoom_access_control/)」：授業における認証（入室制限）の考え方について

## 3. ミーティングの人数上限

現在，東京大学のZoomアカウントでミーティングを開催した場合，参加者数の上限は300人となります．オンライン授業などで参加者が300人を超える可能性がある場合，申請により上限の引き上げができますので，「[Zoomのライセンス](/zoom/license/)」をご覧になり，あらかじめ申請をお願いいたします．
