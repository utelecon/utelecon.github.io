---
title: 不濁点・半濁点を名前に含むフォルダのFinder等における不具合
breadcrumb:
  title: 濁点・半濁点を名前に含むフォルダのFinder等における不具合
---
ECCSのMac環境で，濁点・半濁点を名前に含むフォルダ（例：`名称未設定フォルダ`）を作成したときにFinder等でアクセスすると，「戻る」アイコン等をアクセスしないのに，数秒後に上のフォルダに戻ってしまうという症状が発生しています．システムの不具合により NFS環境での濁点・半濁点の扱いがうまくいっていないものと思われます．

情報基盤センターでは，問題の解決に向けて，数年来調査を行ってきましたが，解決しませんでした．ついては，利用者の皆様にはご迷惑をおかけしますが，「濁点・半濁点を含まないフォルダ名（英数字のみからなるファイル名など）に変更する」方法で回避していただくよう，お願いいたします．