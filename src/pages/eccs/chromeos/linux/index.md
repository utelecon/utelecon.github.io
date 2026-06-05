---
title: Linux 開発環境を利用する
breadcrumb:
  title: Linux
---

## 概要

ChromeOSでは「Linux 開発環境」というLinuxの仮想環境が利用できます．仮想環境の中身はDebianで，それ以外のディストリビューションは利用できません．

![ターミナルで`cat /etc/os-release`を実行した結果．`PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"`などと表示されている．](img/setup-debian-version.png){:.medium.border}

なお，2026年4月時点で設定した環境のバージョンは執筆時のものを記載しています．タイミングによりバージョンは変わる可能性があります．root権限があるため，様々なアプリケーションを比較的自由に利用できます．(ただしHW高速化や完全なデスクトップ環境は利用できないなどの制限があります．)

## 注意点

- 構築した環境は各デバイス内に保存されます．デバイス全体のストレージ容量の減少等により消去されることがあるため，バックアップの取得が必要です．
- 授業での利用にあたっては，持ち込み端末を利用する学生がいることも考慮してください．Web上で利用できるGoogle Colab，WindowsのWSL，macOSなどもあわせてご検討ください．
- 通常のLinuxと完全に同一ではなく，以下のような制限事項があります．
    - ハードウェア高速化を利用した動画処理（ハードウェアエンコード・デコードなど）はできません．
    - カメラ映像の取得はできません．
    - USBデバイス（Androidデバイス以外やセキュリティキーなど）はサポートされておらず，利用できないことが多いです．

## 使い方

### 起動

#### 初回設定

1. メニューバーのTerminalアイコンを押してください．
  ![ChromeOSのデスクトップ．画面下部のシェルフ（メニューバー）にTerminalアイコンが並んでいる．](img/setup-01-shelf-terminal.png){:.medium.border}
2. TerminalのLinuxセクションの「設定」を押してください．
  ![Terminalアプリの画面．「Linux」セクションの右側に「設定」ボタンがある．](img/setup-02-terminal-linux-settings.png){:.medium.border}
3. 開いた設定の「Linux 開発環境」セクションの「設定」を押してください．
  ![設定アプリの「ChromeOS について」画面．「デベロッパー」内の「Linux 開発環境」の右側に「設定」ボタンがある．](img/setup-03-settings-developer.png){:.medium.border}
4. 「次へ」を押してください．
  ![「Linux 開発環境をセットアップする」というダイアログ．右下に「次へ」ボタンがある．](img/setup-04-welcome.png){:.medium.border}
5. Linuxのユーザー名とディスクサイズを決めて「次へ」を押してください．
    - ユーザー名はデフォルトでECCSクラウドメールのローカルパートが設定されます．
    - ディスクサイズはデフォルトで10GBが設定されますが，あとから設定で変更可能です．
  ![セットアップダイアログの「ユーザー名」「ディスクサイズ」を入力する画面．ディスクサイズは「推奨（10.0 GB）」が選択されている．](img/setup-05-username-disk.png){:.medium.border}
6. インストールが終わるまでお待ちください（1分程度かかります）．
  ![「Linux をインストールしています...」と表示された進行中のダイアログ．](img/setup-06-installing.png){:.medium.border}
7. インストールが終わると，ターミナルが起動してLinux開発環境が利用できるようになります．
  ![起動したターミナル．`utelecon@penguin:~$`というプロンプトが表示されている．](img/setup-07-terminal-ready.png){:.medium.border}

#### 2回目以降

ChromeOSを起動後，設定を開くかターミナルアイコンのボタンを押してください．
Linux開発環境の準備に少し時間がかかりますが，その後は通常のLinuxと同様に利用できます．

![Terminalアプリの画面．「Linux」セクションに起動中のコンテナ「penguin」が表示されている．](img/relaunch-terminal-penguin.png){:.medium.border}

### 再起動・シャットダウン

ChromeOS全体を再起動する必要はありません．Linux環境のみを再起動・シャットダウンすることができます．シェルフのTerminalアイコンを右クリックし，「Linux をシャットダウン」を選択してください．再度ターミナルを開くとLinux環境が起動します．

![シェルフのTerminalアイコンを右クリックして表示されたメニュー．「Linux をシャットダウン」という項目がある．](img/shutdown-menu-shutdown.png){:.medium.border}

### バックアップと復元

Linuxの環境を保存して他のデバイスで復元することが可能です．詳細については以下の公式ドキュメントをご確認ください．
[Linux をセットアップする - ChromeOS.dev](https://developers.google.com/chromeos/app-development/develop/setup?hl=ja#backing-up-and-restoring)

#### バックアップ

1. 設定の「Linux 開発環境」を開き，「バックアップと復元」を押してください．
  ![設定の「Linux 開発環境」画面．「バックアップと復元」の項目がある．](img/backup-01-linux-settings.png){:.medium.border}
2. 「Linux のアプリとファイルをバックアップします」の右側の「バックアップ」を押してください．
  ![「バックアップと復元」画面．「バックアップ」「復元」のボタンがある．](img/backup-02-backup-restore.png){:.medium.border}
3. 保存先とファイル名を指定して「保存」を押してください．Googleドライブを保存先に指定すれば，他のデバイスからも復元できます．
  ![保存ダイアログ．ファイル名に`chromeos-linux-2026-04-02.img.zst`が入力されている．](img/backup-03-save-dialog.png){:.medium.border}
  ![保存ダイアログでGoogleドライブのフォルダを保存先に選んでいる様子．](img/backup-04-save-gdrive.png){:.medium.border}
4. しばらく待つと，指定した場所にバックアップファイル（`.img.zst`）が保存されます．
  ![Googleドライブに保存された`chromeos-linux-2026-04-02.img.zst`（792.1 MB）．](img/backup-05-saved-file.png){:.medium.border}

#### 復元

1. 「バックアップと復元」画面で「復元」を押し，バックアップファイルを選択して「開く」を押してください．
  ![ファイル選択ダイアログで`chromeos-linux-2026-04-02.img.zst`を選択している様子．](img/backup-06-restore-pick-file.png){:.medium.border}
2. 確認ダイアログで「復元」を押すと，復元が始まります．既存のLinux環境は置き換えられるのでご注意ください．
  ![「復元を実行」という確認ダイアログ．「バックアップから復元すると，既存の Linux アプリケーションとデータは削除されます。」と表示されている．](img/backup-07-restore-confirm.png){:.medium.border}

なお，授業等で利用する環境を構築する際は，環境構築スクリプトを作成して共有する方法も有効です．コンテナをファイルとして持ち運ぶ方法とあわせてご活用ください．

### LinuxとChromeOSでのファイル共有

#### ChromeOSからLinuxのファイルにアクセスする

ChromeOSのファイルアプリを開き，左側の「Linux ファイル」を選択すると，Linux環境のホームディレクトリにアクセスできます．

![ChromeOSのファイルアプリ．左側のサイドバーで「Linux ファイル」が選択されている．](img/share-from-chromeos-01-linux-files.png){:.medium.border}

ドット（`.`）で始まる設定ファイルなどを表示したい場合は，右上のメニューから「非表示のファイルを表示」を有効にしてください．

![ファイルアプリの右上のメニュー．「非表示のファイルを表示」を有効にすると`.bashrc`などのファイルが表示される．](img/share-from-chromeos-02-show-hidden.png){:.medium.border}

#### LinuxからChromeOSのファイルにアクセスする

ChromeOSやGoogleドライブのフォルダをLinuxと共有すると，Linuxからは`/mnt/chromeos`以下でアクセスできるようになります．

1. ファイルアプリで共有したいフォルダを右クリックし，「Linux と共有」を選択してください．
  ![ファイルアプリでGoogleドライブの「linux-share」フォルダを右クリックし，「Linux と共有」を選択しようとしている様子．](img/share-from-linux-01-share-folder.png){:.medium.border}
2. 共有済みのフォルダは，右クリックメニューの「Linux との共有を管理」から管理できます．
  ![右クリックメニューに「Linux との共有を管理」という項目が表示されている様子．](img/share-from-linux-02-manage-share.png){:.medium.border}
3. 設定の「Linux 開発環境」→「共有フォルダを管理する」からも，共有中のフォルダを一覧・解除できます．共有フォルダはLinuxでは`/mnt/chromeos`以下に置かれます．
  ![設定の「共有フォルダを管理する」画面．共有フォルダとして「Google Drive › マイドライブ › linux-share」が表示されている．](img/share-from-linux-03-shared-folders-settings.png){:.medium.border}

### アプリケーションのインストール

`.deb`ファイルのパッケージをはじめ，基本的には通常のLinux環境と同様の手順でインストールが可能です．インストールしたGUIアプリはChromeOSのランチャーの「Linux アプリ」内に追加されます．

![ChromeOSのランチャー．「Linux アプリ」のフォルダにインストールしたアプリが並んでいる．](img/apps-01-launcher-linux-apps.png){:.medium.border}

公式の案内では，GNOMEアプリストア（GNOME Software）をインストールすることが紹介されています．GUIからアプリを探してインストールできます．

![GNOME Software（アプリストア）の「Explore」画面．](img/apps-02-gnome-software.png){:.medium.border}

![GNOME Softwareでカテゴリ別にアプリを一覧している画面．](img/apps-03-software-categories.png){:.medium.border}

### アンインストール

Linux環境が不要になった場合は，設定から削除できます．削除するとLinux環境内のアプリやファイルはすべて消去されるため，必要なデータは事前にバックアップしてください．

1. 設定の「Linux 開発環境」を開き，「Linux 開発環境を削除」の右側の「削除」を押してください．
  ![設定の「Linux 開発環境」画面．一番下に「Linux 開発環境を削除」の項目と「削除」ボタンがある．](img/uninstall-01-settings.png){:.medium.border}
2. 確認ダイアログで「削除」を押すと，Linux環境が削除されます．
  ![「Linux 開発環境を削除」という確認ダイアログ．](img/uninstall-02-confirm.png){:.medium.border}
