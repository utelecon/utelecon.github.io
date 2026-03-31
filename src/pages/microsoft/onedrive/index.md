---
title: OneDrive
breadcrumb:
  title: OneDrive
---

<div class="box--alert">
    【お知らせ】<a href="/notice/2025/1224-microsoft-storage/">UTokyo Accountで利用するOneDrive等の容量制限について（第3報）</a>
</div>

## OneDriveとは
**OneDrive**は，Microsoft社が提供するオンラインストレージです．ファイルの保存や閲覧ができるほか，ファイルを編集したり，ファイルを他のユーザーに共有したりすることもできます．

東京大学では，Microsoft社の情報システムを利用することができるライセンス「[**UTokyo Microsoft License**](../)」が提供されています．これを利用すれば，UTokyo Accountを用いてMicrosoftにサインインすることにより，OneDriveの各種機能を使用することができます．

## ストレージ容量について
{:#storage_capacity}

UTokyo Accountで利用するOneDriveには，ストレージ容量の制限があります．個人別のストレージ容量は，原則として50GBが上限です（家庭用の一般的なOneDriveとは異なります）．この上限を超えてしまう場合，ファイルの追加や編集ができなくなります（ファイルの受け取りにも失敗する可能性があります．一方，データの読み取りや，ダウンロード，不要ファイルの削除などは可能です）．

ただし，別途「利用負担金」を支払うことで，ストレージ容量を拡張できます．詳しくはUTokyo Portalに掲載されている「[OneDriveのストレージ容量拡張申請について](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/OneDrive_Change_Storage_Limit.aspx)」（教職員限定）を参照してください．なお，予算をもたない教職員や，学生の方でも，予算を持つ教職員の許可があれば容量の拡張が可能です．学生の場合は指導教員等に相談してください．

### 保存されたデータの整理
{:#reorganizing_data}

現在使用中のストレージについて確認するには，ブラウザで[OneDriveのストレージ管理画面](https://univtokyo-my.sharepoint.com/largestfiles)にアクセスしてください．サイズが大きくストレージを圧迫しているファイルを確認できるほか，画面左下の「ストレージ」欄で全体の使用量を確認できます．

<details>
    <summary>サイズの大きなファイルを削除しても，空き容量があまり増えない場合</summary>
    次の点を確認してください．

- OneDrive上で削除されたファイルは，基本的に「ごみ箱」に移されます．これらのファイルもストレージの使用量に算入されることに注意してください（ただし，[「第2段階のごみ箱」にあるファイルは算入されないとされています](https://support.microsoft.com/ja-jp/office/5fa924ee-16d7-487b-9a0a-021b9062d14b)）．
- 東京大学のOneDriveでバージョン管理機能が有効になっているためかもしれません．過去の不要なバージョンを削除することで，空き容量を増やせる場合があります．詳しくは[OneDriveでサイズの大きいファイルを表示させる，バージョン履歴を削除する方法（学内限定）](https://univtokyo.sharepoint.com/:v:/s/utokyoaccount/ESkNKTQEvV5Er9Ynu3VLFVIBnoYu1cgwI0_KqkwMWlRKRQ?e=uIWA8q)を参照してください．
</details>


## 利用手順
ここでは，UTokyo Microsoft Licenseのもと，ブラウザ上でOneDriveを利用する手順を説明します．

<!-- なお，UTokyo AccountでMicrosoftに初めてサインインする場合には，「[UTokyo Microsoft LicenseでWeb版のOfficeアプリを利用する](/microsoft/office/web/#initial)」を参照し，「利用開始までの手順」に従って設定を作業を行ってください． -->

### ブラウザ上でOneDriveを開く
{:#signin}

以下のリンクからOneDriveにアクセスしてください．

**[OneDrive](https://univtokyo-my.sharepoint.com/)**{:.box.center}

その際，サインインしていない場合はサインインするよう求められますので，「[UTokyo Accountを用いてMicrosoftのシステムにサインインする](/microsoft/signin/#instruction)」を参照してサインインしてください．

### ファイルを作成・編集・アップロード・ダウンロードする
ファイルを作成，編集，アップロード，ダウンロードする方法については，以下のページを参照してください．

**[OneDriveの基本的な使い方](basic/)**{:.box.center}

### ファイルを共有する
OneDrive上のファイルを共有する方法については，以下のページを参照してください．

**[OneDriveでファイルを共有する](share/)**{:.box.center}

また，以下のページで，ファイルを共有する際に推奨される設定をユースケースごとに説明しています．あわせて参照してください．

**[OneDriveファイル共有のおすすめの利用方法](recommendation/)**{:.box.center}

## その他
### アプリについて
OneDriveには，ブラウザから利用する方法のほかにアプリから利用する方法もあります．

以下のようなアプリが提供されています．

- **デスクトップアプリ**：OneDriveのデスクトップアプリをPCにインストールすることで，OneDriveを利用することができます．こちらの方法を選択する際には，以下のことに注意してください．
    - OneDriveのアプリをインストールすると，OneDrive上に保存されたファイルのコピーがPCのローカル環境に作成され，常に同期されます．業務で使用しているファイルをOneDriveに保存している場合は，業務データが個人のPCにダウンロードされた状態にならないよう十分注意してください．
        - Windowsにおいてファイルの同期を有効にしている場合，設定によっては「デスクトップ」「ドキュメント」等のフォルダがOneDrive上に配置される場合があります．意図せずにOneDrive上にファイルをアップロードすることがないよう注意してください．
    <!-- - アプリのインストール方法については，「[UTokyo Microsoft LicenseでOfficeアプリをインストールして利用する](./install/)」を参照してください．ただし，Windows 10 以降を利用している場合には，アプリが初めからインストールされています． -->
- **モバイルアプリ**：OneDriveのアプリをスマートフォンやタブレット端末にダウンロードすることで，OneDriveを利用することができます．
    - 使い方の詳細は，Microsoftの公式ドキュメント「[OneDrive モバイル アプリを使用する](https://support.microsoft.com/ja-jp/office/onedrive-%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB-%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B-d26c1b0d-8047-42bf-9104-f6e9a3576e62)」を参照してください．
