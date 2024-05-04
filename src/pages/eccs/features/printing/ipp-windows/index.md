---
title: IPP印刷の設定方法(Windowsのみ)
breadcrumb:
  title: IPP印刷（Windows）
---

ECCS2021 では，学内ネットワークに接続した個人や研究室等のPC等**（Windowsのみ）**から， IPP (Internet Printing Protocol の略) 印刷用プリントサーバ print.ecc.u-tokyo.ac.jp に印刷ジョブを送ることで，**ECCS の複合機 (RICOH IM C3500/C3000) **から印刷することができます．

以下では Windows 10 およびWindows11環境での設定方法を説明します．\
\
**PCのOSはWindowsに限りますのでご注意ください．**

１．プリンタドライバのダウンロード\
\
・RICOH の「プリンター・複合機関連ドライバー」のページ ( <https://www.ricoh.co.jp/download/> ) で IM C3500 を検索して，お使いの OS のバージョン (64bit か 32bit かも確認してください)に応じたプリンタドライバ（RPCSドライバー Ver.1.13.0.0以降）をダウンロードしてください．\
\
・ダウンロードファイルをデスクトップ（例）に保存します．例はWindows 10 64bitのRPCSドライバーVer.1.13.0.0になります.\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f1.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f1.png)\
\
・ダウンロードしたファイルを「管理者として実行」してください．ダウンロードしたファイルを右クリックし「管理者として実行」してください．\
\
・以下の画面で「Install」を実行してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f2.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f2.png)\
\
・「同意します」を選択し，「次へ」を実行してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f3.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f3.png)\
\
・「キャンセル」を実行してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f4.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f4.png)\
\
・「はい」を実行してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f5.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f5.png)\
\
・「終了」を実行してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f6.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f6.png)\
\
・フォルダがデスクトップに作成されていることを確認してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f7.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f7.png)

２．既存プリンタの削除\
\
・2021年2月末以前のIPPプリンタ（Main\_MonoおよびMain\_Color）は使用できません．\
ECCS2021ではECCS2016で使用していたプリンタの設定を削除してください，削除については，以下の手順を行ってください．新規にプリンタを作成する場合は，「3.プリンタの追加」へ進んでください．

**Windows10の場合**　\
・コントロールパネル等から「デバイスとプリンター」を開き，既存のIPP用プリンタを選択し右クリックします．メニューから「デバイスの削除」ボタンを押下してください．\
・「デバイスとプリンター」ウィンドウにおいて，いずれかのプリンタアイコンを選択すると，ツールバーに「プリントサーバープロパティ」が表示されるので，それをクリックしてください．\
\
・「プリントサーバーのプロパティ」ウィンドウの「ポート」タグを開き，「このサーバー上のポート(P)」の一覧に「RGate IPP Printer」がある場合は，選択し「ポートの削除」ボタンを押下してください．「ポートの削除」ウィンドウが開くので，「OK」ボタンを押下してください．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f20.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f20.png)\
**Windows11の場合**　\
・設定を開き，「Bluetoothとデバイス」を選択します．続けて「プリンターとスキャナー」を選択します．既存のIPP用プリンタを選択すると，プリンタの詳細画面に遷移します．プリンタの詳細画面で削除ボタンを押下してください．\
・「プリンタとスキャナー」に戻り，関連設定の「プリントサーバープロパティ」を選択します．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f21.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f21.png)\
・ポートの一覧に「RGate IPP Printer」がある場合は，それを選択し「ポートの削除」ボタンを押下してください．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f22.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f22.png)

３．プリンタの追加

**Windows10の場合**　\
・スタートメニュー等から「設定」ウィンドウを開き「デバイス > プリンターとスキャナー > プリンターとスキャナーの追加 > プリンターまたはスキャナーを追加します」を クリックしてください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f9.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f9.png)\
\
・しばらくすると「プリンターが一覧にない場合」というリンクが表示されるので，クリックしてください．\
\
・「その他のオプションでプリンターを検索」ウィンドウが開いたら，「共有プリンターを名前で選択する(S)」をチェックして，直下のフォームに **<https://print.ecc.u-tokyo.ac.jp/printers/vprinter/.printer>** を入力して「次へ」ボタンを押下してください．\
・vprinterは白黒・カラー共通のプリンタになります．印刷時に白黒またはカラーを指定してください．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f11.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f11.png)\
・ユーザ名欄には"AD\\" + "ユーザ名"を，パスワード欄にはそのパスワードを入力し，「OK」ボタンを押下してください．(ECCS2021 では多くの方のユーザ名は共通ID（"数字10桁"）です)

例：ユーザ名:**AD\1234567890**

なお、半角文字の"\\" （バックスラッシュ）は，日本語キーボード上の"¥"キー入力に替えられます。\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f12.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f12.png)\
**Windows11の場合**　\
・スタートメニュー等から「設定」ウィンドウを開き「BlueToothとデバイス > プリンターとスキャナー」を選択して下さい．続けて「プリンターまたはスキャナを追加します」から「デバイスの追加」ボタンを押下してください．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f23.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f23.png)\
・しばらくすると「プリンターが一覧にない場合」の項目が表示されるので，「手動で追加」をクリックして下さい．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f24.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f24.png)\
・「その他のオプションでプリンターを検索」ウィンドウが開いたら，「共有プリンターを名前で選択する(S)」をチェックして，直下のフォームに **<https://print.ecc.u-tokyo.ac.jp/printers/vprinter/.printer> **を入力して「次へ」ボタンを押下してください．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f25.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f25.png)\
・vprinterは白黒・カラー共通のプリンタになります。印刷時に白黒またはカラーを指定してください。\
・ユーザ名 には，ECCS を使う際のユーザ名を入力して下さい．(ECCS2021 では多くの方のユーザ名は共通IDです)\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f26.png)](https://www.ecc.u-tokyo.ac.jp/files/2023/09/06/f26.png)

４．プリンタドライバのダウンロード(Windows10,Windows11共通)\
\
・「プリンターの追加ウィザード」ウィンドウが開いたら「ディスク使用(H)...」を押下してください．\
\
・「フロッピーディスクからインストール」ウィンドウが開いたら「参照(B)...」を選択して，"１．プリンタドライバのダウンロード"で解凍した、プリンタドライバのフォルダの中にあるフォルダ「disk1」を選択してください．当該フォルダ内の** OEMSETUP.INF **が自動的に選択された状態になります．\
\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f14.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f14.png)

[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f13.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f13.png)\
\
・フロッピーディスクからインストール」ウィンドウに戻ったら「製造元のファイルのコピー元(C):」が，"１．プリンタドライバのダウンロード"で解凍したプリンタドライバのフォルダを指しているか確認した上で「OK」ボタンを押下してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f14.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f14.png)\
\
・「プリンターの追加ウィザード」ウィンドウには RICOH のプリンターの機種一覧が表示されます．その中から** RICOH IM C3500 JPN RPCS **を選択して「OK」ボタンを押下してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f15.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f15.png)\
\
・「プリンターの追加」ウィンドウ で「vprinter (<https://print.ecc.u-tokyo.ac.jp> 上)」と表示されていたら「次へ」ボタンを押下して終了してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f16.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f16.png)\
\
・「プリンターの追加」ウィンドウの「完了」ボタンを押下して終了してください．\
[![](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f17.png)](https://www.ecc.u-tokyo.ac.jp/files/2021/05/19/f17.png)
