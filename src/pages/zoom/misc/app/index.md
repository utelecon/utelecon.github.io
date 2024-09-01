---
title: Zoomのアプリについて
redirect_from:
  - /zoom/create_room_software
  - /zoom/install
breadcrumb:
  title: アプリについて
  parent: /zoom/
---

## インストールの方法

ここでは，Zoom のインストールの方法を説明します．  
会議室の URL（`https://zoom.us/j/xxxxxxxxxx` `x`は数字）を知っている場合，知らない場合と2通りの説明をします．  


### 会議室の URL を知っている場合
  1. 会議室の URL にアクセスしてください
  1. ZOOM がインストールされていない場合は以下のような画面が出て，自動的にダウンロードが始まるか，始まらない場合はダウンロードリンクをクリックするとダウンロードできるので，ダウンロードしたファイルを用いて ZOOM をインストールしてください
    ![](pc_with_url.png)
  
  
### 会議室の URL を知らない場合
  1. <a href="https://zoom.us/download" target="_blank">ダウンロードページ</a>にアクセスしてください．
  1. 使用しているパソコンのOSに対応するアプリをダウンロードしてください．

## アプリでの会議室の作り方

ここでは，パソコンの Zoom アプリで Zoom の会議室を作る方法を説明します．アプリから会議室を作る場合，設定できる項目が一部に限られているため，「[会議室の作り方](/zoom/create_room)」のページで説明しているWebブラウザから作る方法が必要な場合もあります．また，授業などで定期的なミーティングを設定する方法は「[複数回利用できる URL が変わらない会議室を予約する](/zoom/how/faculty_members/schedule)」のページをご覧ください．  

<ol>
  <li> Zoom を起動します．</li>
  <li> Zoomアプリで「サインイン」ボタンを押すなどして，Zoomのサインイン画面を開いてください．<br>
    <img src="@components/ja/systems/zoom/4.png"> </li>
  <li> サインイン画面で，「SSO」または「SSOでサインイン」と書かれた文字を探して押してください．（この画面のメールアドレス・パスワード欄にUTokyo Accountの情報を入力してもサインインできません．）<br>
    <img src="@components/ja/systems/zoom/5.png"> </li>
  <li>「会社のドメイン」欄に <code>u-tokyo-ac-jp</code> と入力してください．（ <code>ac</code> の前後はピリオドではなくハイフンであることに注意してください．）<br>
    <img src="@components/ja/systems/zoom/6.png"> </li>
  <li> ブラウザに移動するので，UTokyo Accoutでサインインしてください．（UTokyo Accountにサインイン済みの場合は，この画面を経ずにそのままサインインが完了します．）<br>
    <img src="@components/ja/systems/zoom/2.png"> </li>
  <li> 「スケジュール」を押します．<br>
    <img src="top2.png"> </li>
  <li> 以下の情報を設定してミーティングをスケジュールします．<br>  
    <img src="schedule1.png"> <br>
    <img src="schedule2.png"> <br> 
    以下，特に補足が必要な点に絞って説明します．
    <ul>
      <li> <strong>ビデオ</strong> : ミーティング開始時にビデオを最初からオンにするかオフにするか，ホスト（開催者）と参加者別に設定可能</li>
      <li> <strong>オーディオ</strong> : 電話でも Zoom に繋げられてしまうため，特別な理由がない限り「コンピューターオーディオ」のみを選択することを推奨 </li>
      <li> <strong>カレンダー</strong> : Outlook や Google カレンダーと連携可能だが，ミーティングの情報をコピー&ペーストするためにも「他のカレンダー」を選択することを推奨</li>
      <li> <strong>詳細オプション</strong> : 
        <ul>
          <li><strong>開始時刻前に任意の時間に参加することを参加者に許可します</strong> : オフにするとホストが入らないと他の参加者も会議室に入れない．他の参加者が早めに入って少し話しても良いのであれば ON にすることを推奨</li>
          <li><strong>エントリー時に参加者をミュート</strong> : 最初は一方向的に説明したいときなどに ON にすること推奨</li>
        </ul>
      </li>
    </ul>
  </li>
  <li> スケジュールの情報を確認して，「Zoomミーティングに参加する」の下に記載されている<strong>会議室の URL を抜き出して</strong>，メールなどを用いて参加者に通知します．<br>
    <img src="schedule_info.png"> 
    <ul>
      <li>初期設定では <strong>URL にパスワード情報が入っている</strong>ため，パスワードを設定していたとしても別途パスワードを共有する必要はありません</li>
      <li>ここで 上記 URL 以外も共有してしまうと「市内番号を検索」の右に記載されている URL にアクセスしてしまう参加者もいるため，招待情報全てではなく，<strong>会議室の URL を抜き出して共有することをおすすめ</strong>します</li>      
    </ul>
  </li>
</ol>
