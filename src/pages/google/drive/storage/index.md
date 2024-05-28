---
title: ECCSストレージ管理システムについて
breadcrumb:
  title: ECCSストレージ管理システムについて
---
## 概要
{:#introduction}

<div style="text-align: right;">
<div>更新：2023年10月26日</div>
<div>作成：2023年04月03日</div>
</div>

情報基盤センターが提供しているGoogle Workspace for Education（ECCSクラウドメール（`...@g.ecc.u-tokyo.ac.jp`））では，これまで無料で無制限にストレージを利用できました．しかし，[Google社のサービス変更](https://blog.google/outreach-initiatives/education/google-workspace-for-education/)にともない，ストレージ利用量（Gmail, Googleドライブなどを含む）が一定量を超えるユーザには，今年度から利用負担金の支払いをお願いすることになりました．

「**マイドライブ**」と自分が代表者になる「**共有ドライブ**」（「[「マイドライブ」と「共有ドライブ」について](#mydrive-and-shareddrives)」参照）の利用量の合計が，125GBに達していないユーザは，無料で利用を続けることができます．他にも無料になるパターンがありますが，詳細は「利用負担金とストレージ制限値の関係」で説明します．なお，無料ユーザであっても，次の段落で概要を説明するように，共有ドライブを利用するために手続きが必要な場合があります．

一定量を超えるストレージを利用する場合と「共有ドライブ」の代表者になる場合は，「[ECCSストレージ管理システム](https://storage-mgt.ecc.u-tokyo.ac.jp/)」を用いた手続きが必要になります．一定量を超えるストレージを利用する場合には，利用負担金の支払いが必要になります．たとえば，予算を持たない学生の場合，予算を持っている指導教員等が「利用負担金責任者」として代わりに利用負担金を支払う方法も用意されています．「共有ドライブ」については代表者を1名定める必要があります．代表者がいない「共有ドライブ」については最終的には削除の対象となりますのでご注意ください．

以下では，従来からGoogle Workspaceのサービス（主にストレージ容量制限が関係する Googleドライブ等）を利用されているユーザの方，および新規に利用されるユーザの方を対象に，「やりたいこと」の事項を【要対応】，【手順の変更】に分けて説明していきます．

* 【要対応】
  * 以下の事項については，これまでの仕様が変更になりました．今後も利用を続けるために対応が必要な場合があります．変更の詳細なスケジュールについては[こちら](https://www.ecc.u-tokyo.ac.jp/announcement/2021/10/29_3366.html)を参照してください．
    * マイドライブの容量の制限
    * 共有ドライブの代表者設定／容量の制限
* 【手順の変更】
  * 以下の事項については，操作方法の追加・変更があります．直ちに対応が必要ではありませんが，今後必要となるかもしれません．
    * 共有ドライブとマイドライブの容量調整
    * 共有ドライブの作成

### 「マイドライブ」と「共有ドライブ」について
{:#mydrive-and-shareddrives}

ユーザが利用するGoogle Driveのストレージには「マイドライブ」と「共有ドライブ」の2種類があります．

* **マイドライブ**： 1ユーザが所有しているドライブで, [Googleドライブのトップページ](https://drive.google.com/)で表示されるのはこちらになります. もしあなたが「マイドライブ」「共有ドライブ」などの言葉を知らなければおそらくマイドライブだけを使っています. マイドライブは特定ユーザが所有しており，そのユーザのアカウントが失効するとドライブに保存されたファイル等も削除されます.
* **共有ドライブ**： 共有ドライブは組織（東京大学）に所属しているもので特定のユーザのアカウントが失効しても削除されません. あなたがアクセスできる共有ドライブ一覧は, Googleドライブの左のメニューから「[共有ドライブ](https://drive.google.com/drive/u/0/shared-drives)」を選択すると表示できます．なお，ECCSクラウドメール（`...@g.ecc.u-tokyo.ac.jp`）以外のGoogle Workspace（大学内の研究科，研究室等で独自に契約している場合など）で作成された共有ドライブは本システムでは扱えません．ECCSクラウドメールの共有ドライブであることを確かめるには，Googleドライブで共有ドライブを表示した上で，「詳細を表示」を選び（Webブラウザからアクセスしているときは，右上の「ⓘ」ボタンを押してください）「ドライブの詳細」の「オーナー」が「東京大学ECCSクラウドメール」であることを確認してください．

### マニュアルについて
{:#user-manual}

操作方法は，[ストレージ管理システム簡易マニュアル](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/edit?usp=drive_link) （大学内限定．ECCSクラウドメールのアカウントでのログインが必要）をご覧ください．

### スケジュールについて
{:#schedule}


2023年10月以降，代表者が設定されていない共有ドライブは書き込み不可となります（容量の表示は0になります）．また代表者が設定されていない共有ドライブ，長期間容量を超過している共有ドライブは削除されます．具体的な日付は決定後こちらへ掲載しますが，当該共有ドライブを利用している人は**日付の公表を待たずに今すぐ対応**してください．

詳しいスケジュールは[こちら](https://www.ecc.u-tokyo.ac.jp/announcement/2021/10/29_3366.html)をご覧ください．

## 用語の説明
{:#terminology}

### 共有ドライブの最高位ユーザ
{:#shared-drive-admin}

* 共有ドライブの最高位のアクセス権を持つユーザ（管理者，管理者がいない場合のコンテンツ管理者，管理者もコンテンツ管理者もいない場合の投稿者）です．

### 代表者
{:#representative}

* 共有ドライブの容量設定などの管理ができますが，代表者の責任として共有ドライブ容量が一定の容量を超えると代表者のマイドライブ容量が減ります．
* 共有ドライブを管理するにあたり，ECCSストレージ管理システム上でユーザーに付与される役割で，共有ドライブの最高位ユーザだけが代表者になることができます．
* Googleドライブ自体には存在しない役割で，ECCSストレージ管理システムにのみ存在している名義的役割です．

### 利用負担金責任者
{:#fee-responsible-user}

* 利用負担金責任者とは，年度あたり追加したストレージ制限値に応じた利用負担金を支払い可能なユーザのことです．
* 利用負担金責任者になることができるのは，UTokyo Account登録時に用いられた身分コードが「予算を持つ教職員」であり，「利用負担金支払い情報登録」が可能な教職員です．
* 詳しくは，簡易マニュアル内の「[利用負担金支払い情報登録](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.qfjcj5ui2yhg)」をご覧ください．

### ストレージ制限値
{:#storage-limit}

* ECCSストレージ管理システム上で各ユーザーに割り当てられる値です．
* 「[ストレージ制限値とドライブ容量の関係](#storage-limit-and-drive-limit)」で説明する方法で，実際に使えるドライブ容量を規定します．

### マイドライブ／共有ドライブ容量
{:#mydrive-shareddrive}

* 本システムで設定した容量はGoogleドライブのWebアプリケーション上で確認できます．
* マイドライブ容量とは，以下の手順で確認することができる値です．
  * マイドライブの容量と使用量は[Googleドライブのトップページ](https://drive.google.com/)から確認できます．
  ![](/storage1.png)
* マイドライブには，マイドライブ容量以上のデータを置くことはできません．
  * 使用量が容量以上になるとマイドライブへのファイルの書き込み，ファイルの追加等ができなくなります．
  マイドライブ容量は，「[ストレージ制限値とドライブ容量の関係](#storage-limit-and-drive-limit)」で説明する方法に従って決まります．
* 共有ドライブ容量とは，以下の手順で確認することができる値です．
  * 共有ドライブの容量と使用量を確認するには，[Googleドライブの共有ドライブ一覧](https://drive.google.com/drive/u/0/shared-drives)から目的の共有ドライブを開き, 右の「詳細を表示」（「ⓘ」のアイコン）を押してください．
  ![](/shared_drive_size1.png)
* 共有ドライブには，共有ドライブ容量以上のデータを置くことはできません．
  * 使用量が容量以上になると該当共有ドライブへのファイルの書き込み，ファイルの追加等ができなくなります．
* 共有ドライブ容量は，ECCSストレージ管理システム上で設定できます（「[共有ドライブ容量を増やしたい／減らしたい人](#Operation-change-shareddrive-limit)」を参照してください）．

## ストレージ制限値とドライブ容量の関係
{:#storage-limit-and-drive-limit}

「管理している共有ドライブ」とは，共有ドライブの最高位ユーザに設定されているドライブのことです．以下では，管理している共有ドライブのあるなしに応じて，ストレージ制限値とドライブ容量の関係について説明します．

### 管理している共有ドライブがない場合
{:#no-representative-shareddrive}

* マイドライブ容量として，ストレージ制限値がそのまま設定されます．すなわち，以下のようになります：
  * `{マイドライブ容量} = {ストレージ制限値}`
* マイドライブ容量を増やすには，[ストレージ制限値を増やす](#how-to-increase-storage-limit)必要があります．

### 管理している共有ドライブがある場合
{:#has-representative-shareddrive}

* マイドライブ容量は，ストレージ制限値から，自分が代表者になっている共有ドライブ容量の合計を引いた値に設定されます．すなわち，以下のようになります：
  * `{マイドライブ容量} = {ストレージ制限値} - {代表者になっている共有ドライブ容量}`
  * ただし，マイドライブ容量に設定できる値に制限があるため，設定可能な値に切り上げられます．
* 従って，マイドライブ容量を増やすには，以下のような方法があります．
  * ストレージ制限値を増やす．
  * 代表者になっている共有ドライブの容量を減らす．
  * 代表者になっている共有ドライブの代表者を変更する．
  * 代表者になっている共有ドライブを削除する．
* ただし，マイドライブ容量が5GBまたは現在の使用量を下回るような操作を行うことはできません．

## 手順
{:#procedure}

以下では，「やりたいこと」の事項ごとに手順を説明します．

### 共有ドライブを管理している人 【要対応】
{:#ActionNeeded-has-representative-shareddrive}

1. 代表者が誰であるか確認してください．→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.z9qh74svrr85)
2. 自分を代表者として設定してください：
   - 操作後のマイドライブ容量が十分か確認する．十分なマイドライブ容量を確保できない場合，ストレージ制限値を増やす．→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.p93jfxdjykjk)
   - 自分を代表者として設定する．→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.8odxz0wha1ko)
   - 使用量が容量を上回っている・上回りそうな場合→[「共有ドライブ容量を増やしたい人／減らしたい人 」](#Operation-change-shareddrive-limit)

<details>
    <summary>トラブルシュート：代表者になるべき共有ドライブが見つからない</summary>
    ストレージ管理システムで表示されなければ，それはECCSクラウドメール以外の Google Workspace で作成された共有ドライブですので，何もする必要はありません．
</details>
<details>
<summary>トラブルシュート：操作に失敗する</summary>

自分が参加しているGoogleグループが共有ドライブの管理者として指定され，自分のアカウントが共有ドライブの管理者として指定されていない場合は，自分のアカウントを[共有ドライブの管理者として指定](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/edit#heading=h.8odxz0wha1ko)してからやり直してください．
</details>

### マイドライブ容量を超過している人 【要対応】
{:#ActionNeeded-is-over-the-limit}

ストレージ制限値を増やしてください．→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.ll8bizws2imm)

### マイドライブ容量を増やしたい人／減らしたい人 【手順の変更】
{:#Operation-is-over-the-limit}

* 増やす場合，増やした後のマイドライブ容量が十分か確認してください．
   * ストレージ制限値を増やすには→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.ll8bizws2imm)
* 減らす場合，減らした後の容量が，現在のストレージ制限値をマイドライブ容量が上回らないことを確認してください．
   * ストレージ制限値を減らすには→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.ll8bizws2imm)
* 容量が反映されるまでには1時間程度待ってください．
   * Googleドライブの容量の反映ついては適用に要する厳密な所用時間はGoogle社から明示されていませんが，数十分かかることがあるようです．→Google社のドキュメント「[4.保存容量の上限を設定する](https://support.google.com/a/answer/12033430)」

### ECCSクラウドメールの共有ドライブを新しく作りたい人 【手順の変更】
{:#Operation-make-new-shareddrive}

1. 操作後のマイドライブ容量が十分か確認してください．→[手順を確認する](#mydrive-shareddrive)
   - 十分なマイドライブ容量を確保できない場合，ストレージ制限値を増やす→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.ll8bizws2imm)
2. 共有ドライブを新しく作成してください．→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.xz0qfx6mnucx)

### 共有ドライブ容量を増やしたい／減らしたい人 【手順の変更】
{:#Operation-change-shareddrive-limit}

- 増やす場合，操作後のマイドライブ容量が十分か確認してください．
   - 十分なマイドライブ容量を確保できない場合，ストレージ制限値を増やす→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.ll8bizws2imm)
- 減らす場合，減らした後の容量が，現在の共有ドライブの使用量を上回らないことを確認してください．
  - 共有ドライブ容量を設定する→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.oksofpmfc5xp)
- 容量が反映されるまでには1時間程度待ってください．
  - Googleドライブの容量の反映ついては適用に要する厳密な所用時間はGoogle社から明示されていませんが，数十分かかることがあるようです．→Google社のドキュメント「[4.保存容量の上限を設定する](https://support.google.com/a/answer/12033430)」

### 共有ドライブの代表者を自分や他人に変更したい人 【手順の変更】
{:#Operation-change-shareddrive-representative}

#### 代表者を自分に変更したい場合
{:#Operation-change-shareddrive-representative-yourself}
1. 操作後のマイドライブ容量が十分か確認してください．
   - 十分なマイドライブ容量を確保できない場合，ストレージ制限値を増やす→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.ll8bizws2imm)
2. 自分を代表者に設定してください．→[手順を確認する](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.8odxz0wha1ko)

<details>
    <summary>トラブルシュート：代表者になるべき共有ドライブが見つからない</summary>
    ストレージ管理システムで表示されなければ，それはECCSクラウドメール以外の Google Workspace で作成された共有ドライブですので，何もする必要はありません．
</details>
<details>
    <summary>トラブルシュート：操作に失敗する</summary>
    自分が参加しているGoogleグループが共有ドライブの管理者として指定され，自分のアカウントが共有ドライブの管理者として指定されていない場合は，自分のアカウントを共有ドライブの管理者として指定してからやり直してください．
</details>

#### 代表者を自分以外の人に変更したい場合
{:#Operation-change-shareddrive-representative-others}
システムの都合上，自分以外の人を一方的に代表者と設定することができないため，代表者にしたい人に操作してもらう必要があります．操作については上記「代表者を自分に変更したい場合」を代表者にしたい人へ案内してください．

### 共有ドライブを削除したい人
{:#delete-shareddrive}

1. まず削除したい共有ドライブ内のフォルダ，ファイルをすべて削除してください．
2. 共有ドライブを選択し，点が縦に並んでいる「その他の操作」より「共有ドライブを削除」を選択してください．
   * マイドライブ容量の変更には最大24時間かかります．

## ストレージ制限値を増やす方法
{:#how-to-increase-storage-limit}

### 「予算を持つ教職員」の場合
{:#if-you-are-with-a-budget}
* [簡易マニュアル「利用負担金支払い情報登録」](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.qfjcj5ui2yhg)を参照のこと．
* [簡易マニュアル「自分および，追加登録済みのユーザへの容量追加」](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.p93jfxdjykjk)を参照のこと．

### 「予算を持つ教職員」以外（学生含む）の場合
{:#if-you-are-not-with-a-budget}
* 別の「予算を持つ教職員」にお願いして「利用負担金責任者」になってもらう．
* その教職員に以下を行ってもらってください：
  * [簡易マニュアル「利用負担金支払い情報登録」](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.qfjcj5ui2yhg)を参照のこと．
  * [簡易マニュアル「他ユーザの追加登録」](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.6uw9ygh358z3)を参照のこと．
  * [簡易マニュアル「自分および，追加登録済みのユーザへの容量追加」](https://docs.google.com/document/d/1jnZv6sKALEXvui12y-KSTvYsu0XxG4U12q5RCD5oYB8/#heading=h.p93jfxdjykjk)を参照のこと．

<summary>トラブルシュート：「予算を持つ教職員」であるにも関わらず「利用負担金支払い情報登録」タブが表示されない</summary>

新しくできた身分等でリストに未登録の場合があります．[uteleconのサポート窓口](/support/) からご連絡ください．
    新しくできた身分等でリストに未登録の場合があります．[uteleconのサポート窓口](/support/) からご連絡ください．
</details>

## Q&A
{:#QaA}

### Q: 学生ですが，複数の教職員にストレージ制限値を分けて負担（例，教員Aに400GB, 教員Bに100GB追加してもらい，合計500GB追加して制限値を625GBとする）してもらうことはできますか?
A: システムの都合上できません．

### Q: 容量制限されるならば，別のクラウドサービスに移行したいのですが，他にどのようなサービスがありますか?
A: 研究用のデータ公開では，[データ活用社会創成プラットフォームmdx](https://mdx.jp/), 非公開の計算結果等の置き場としては，[スーパーコンピューティングシステム](https://www.cc.u-tokyo.ac.jp/supercomputer/)などが検討対象になります．予算があるのであれば，Dropbox，Box等のクラウドサービスもあります．

### Q: ストレージ制限値を減らす前に手元にバックアップを取りたいのですが，どのようにしますか?
A: [卒業などに伴う，ECCSクラウドメールのデータバックアップについて](https://www.ecc.u-tokyo.ac.jp/announcement/2019/02/19_2904.html)を参考にしてください．データの量が大きいと，エクスポートデータの作成や，ダウンロードに時間がかかることがあります．

### Q: 空き容量を確保するために，ファイルをゴミ箱に移動したのですが，Googleドライブでみた使用量が減りません．
A: Googleドライブでファイルをゴミ箱に移動するだけでは，ストレージの使用量は減りません(参考: [Google ドライブ:ストレージ内のファイルを管理する](https://support.google.com/drive/answer/6374270?hl=ja) )．ゴミ箱のファイルは30日後に自動的に削除されますが，空き容量を確保したい場合は「ゴミ箱を空にする」作業をおこなって下さい．なお，「ゴミ箱を空にする」作業の結果が反映されるまで時間がかかることがあります．

### Q: 共有ドライブ一覧に自分の使用している共有ドライブが表示されません．
A: 表示されない共有ドライブについては，ECCSクラウドメール以外のGoogle Workspaceで作成された共有ドライブである可能性があります． ご利用の共有ドライブがECCSクラウドメールのものかどうか，「[概要＞「マイドライブ」と「共有ドライブ」について](#mydrive-and-shareddrives)」に記載の手順で確認してください．

### Q: 共有ドライブ一覧の画面での「使用量」が，実際の値とはかなり異なっています．
A: 共有ドライブの「使用量」を取得するAPIが2023年7月時点で提供されていないため，ストレージ管理システムでは週に2回バッチで，共有ドライブ内のファイルのリストを作成して，使用量を求めています．この際，「正しい使用量が計算できないファイルのタイプがある」，「最大4日古い使用量となっている」ため，実際の値とは異なることがあります．また，Googleグループ経由で管理者が設定されている共有ドライブはこのバッチで使用量を取得できないため，使用量が0GBと表示されます．この画面での「使用量」はあくまで目安としてお使いいただき，正確な値はGoogleドライブで共有ドライブを表示した上で，「詳細を表示」を選ぶと(Webブラウザからアクセスしているときは，右上の「ⓘ」ボタンを押してください)「ドライブの詳細」として「使用容量」が表示されるので，そちらをご参照ください.

### Q: 共有ドライブの代表者が，代表者を変更しないで卒業/退職してしまったのですが，どうすれば良いですか?
A: その共有ドライブは代表者がいない状態になります．代表者がいない共有ドライブをそのまま放置すると，一定時間経過後に削除されますが，共有ドライブの管理者は自分を代表者に割り当てることができるようにするので，容易に移行できるようになります．