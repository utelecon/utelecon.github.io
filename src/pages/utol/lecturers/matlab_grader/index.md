---
title: UTOLからMATLAB Graderを利用する（教員・TA向け）
breadcrumb:
  title: MATLAB Grader
---

## 概要

UTOLからMATLAB Graderを利用する方法を示します．

## 事前準備

MATLAB Graderを利用するに当たっては，事前に準備が必要です．この事前準備の作業は，当該コースで一度だけ行えば結構です．

1. コーストップ画面で，左メニューの「コース設定」の中にある「LTI利用設定」を押してください．

![](preparation_1.png)

2. 「MATLAB Grader LTI 1.3」の「利用する」にチェックを入れて「確認画面に進む」ボタンを押し、次の画面の「登録する」ボタンを押してください．

![](preparation_2.png)

3. コーストップ画面に「MATLAB Grader LTI 1.3」が現れます．

## 問題（項目）の作成

学生に対してMATLAB Graderで出題する問題を作成します．

### UTOL上の操作

1. コーストップ画面の「MATLAB Grader LTI 1.3」の欄にある「+」ボタンを押してください．

![](create_1.png)

2. 作成するMATLAB Graderの問題のタイトル，公開期間，公開対象を設定してください．また，必要に応じて内容，添付ファイル，表示ラベルを設定してください．

公開対象に含まれる「履修者」が，公開期間内にコーストップ画面にアクセスすると，作成したMATLAB Graderの問題へのリンクをクリックして，リンク先にあるMATLAB Grader上の問題を利用できます．

![](create_2.png)
![](create_3.png)

3. 「登録する」ボタンを押すと，確認画面が表示されます．問題が無ければ「登録する」ボタンを押してください．

4. コーストップ画面に戻ったら （1）「操作」の列にある![](../../_icons/control_btn_icon.png){:.icon}を押して，（2）「連携ツール起動」を押してください．

![](create_4.png)

5. 下記のような画面が表示されたら「MATLAB Grader LTI 1.3 へのリンク」を押してください．MATLAB Grader の画面が別のタブ（もしくはウィンドウ）で開きます．

![](create_5.png)

## MATLAB Grader上の操作

1. MATLAB Graderの初回利用時（及び「MATLAB Grader Terms of Use」更新時）に，「MATLAB Grader Terms of Use」が表示されるので，確認の上「I accept the terms of use」にチェック（✓）を入れ「Submit」を押してください．

![](grader_1.png)

2. 下記のような画面が表示されたら「空白の項目」を押して新たな「項目」を作成してください．

※MATLAB Graderでは，学生に出題するMATLABの問題のことを「項目」や「評価項目」と呼ぶようです． （2025年5月14日現在）

![](grader_2.png)

参考: 「項目」の新規作成画面

![](grader_3.png)

![](grader_4.png)

3. 登録済みの「MathWorksの問題集」をコピーすることもできます．またMathWorksアカウントにサインインして，過去に作成した問題を利用することもできます．

4. 「タイトル」や「コード」などを適宜設定後，「受講者の環境でのプレビュー」や「模範解答の検証」で問題がなければ「最終版として保存」を押してください．

## 解答状況の確認

点数のみはUTOLのコーストップ画面で「評点一覧表示」ボタンを押すと確認できます．

![](confirm_1.png)

解答の詳細はMATLAB Grader上で確認してください．MATLAB Graderの画面右上の「レポート」を押すと，「概要」や個々の「受講者の解答」を参照可能です．

## 補足事項

公開期間が終了すると，**学生の画面では「MATLAB Grader LTI 1.3 へのリンク」が無効化**されて，MATLAB Grader上の問題を利用できなくなります．つまり**問題を振り返ることもできません**．これはMATLAB Grader上で作成する問題（項目）で解答期限を設定できないためです．

お使いのコースでMATLAB Graderの利用を取り止める際には，事前準備に示した「コース設定」の中の「LTI利用設定」で「MATLAB Grader LTI 1.3」のチェックを外してください．
