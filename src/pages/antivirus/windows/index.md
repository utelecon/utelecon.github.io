---
title: UTokyo Antivirus Licenseの利用方法 (Windows)
---

このページでは，UTokyo Antivirus LicenseをWindows OSのコンピュータで利用する方法を説明します．このライセンスの概要については，「[ウイルス対策ソフトウェア包括ライセンス](..)」をご覧ください．

## インストール方法
{:#install}

複数のウイルス対策ソフトウェアがインストールされると不具合を起こす場合があります．すでにインストールされている別のウイルス対策ソフトウェアから切り替えたい場合は，先にそちらをアンインストールしてから手順を実行してください．

1. 以下のリンクのいずれかにアクセスします（UTokyo Accountでのサインインが必要です）：
    * OSが64bitの方：[こちら](https://univtokyo.sharepoint.com/:u:/s/antivirus/EZGMnsqLZgFGr5_6nzxbv9MBoFN4X4A4-Q5MBEKMqHOZBg)
    * OSが32bitの方：[こちら](https://univtokyo.sharepoint.com/:u:/s/antivirus/EfPjx719Te5BjSbDxxx4OgwB4oZXtrD13r3gT-s0sqCpoA)
1. 以下のような画面が表示されたら，「ダウンロード」を押してダウンロードします． ![ダウンロード画面](i_1_download.png){:.small}
1. ダウンロードしたインストーラを実行します．
1. 以下のような画面が表示されます．「詳細情報」をクリックすると「実行」が出てきますので，実行します．
![Windows Defender; Win11](i_2_defender.png){:.small}
1. 以下のインストーラが起動しますので，「次へ」をクリックします．
![インストーラ; 起動](i_3_installer_start.png){:.small}
1. しばらく待つと以下の画面になります．「終了」をクリックします．
![インストーラ; 完了](i_4_installer_end.png){:.small}
1. 以下のような画面が出ますので，「再起動」をクリックしてコンピュータを再起動します．
![再起動](i_5_restart.png){:.small}
1. 再起動が終わったら，スタートメニューから「セキュリティエージェント」を起動します．
![スタートメニュー](i_6_start_menu.png){:.small}
1. 起動したら以下のような画面になります．「アップデート」をクリックアップデートします．
![コンソール; 起動](i_7_console_start.png){:.small}
1. アップデートが終わり，以下のような画面が出たら，準備は終了です．
![コンソール; アップデート完了](i_8_console_end.png){:.small}

## アンインストール方法
{:#uninstall}

1. Windowsのスタートメニュー開き，「Trend Micro Apex One セキュリティエージェント」フォルダ内の「セキュリティエージェント」を右クリックし，「アンインストール」をクリックします．
![スタートメニュー](un_1_startmenu.png){:.small}
1. 開いた画面で「TrendMicroApex One セキュリティエージェント」を選択し，「アンインストール」をクリックします．
![プログラムと機能](un_2_programs.png){:.small}
1. 開いたアンインストーラが終了するのを待ちます．
![アンインストーラ; 処理中](un_3_processing.png){:.small}
1. 上の画面が消え，以下のメッセージが表示されたら，OKをクリックします．
![アンインストーラ; 完了](un_4_end.png){:.small}
1. 下記のいずれかのフォルダを削除します．
  * 32ビットOS：`C:¥Program Files¥Trend Micro¥Security Agent¥`
  * 64ビットOS：`C:¥Program Files (x86)¥Trend Micro¥Security Agent¥`
