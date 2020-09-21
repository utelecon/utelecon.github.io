---
title: グッドプラクティスの共有
---

<style type="text/css">
.search_item {
    display: inline-block;
    padding: 3px;
    cursor: pointer;
}
.search_item.is-active {
    color: white;
    background-color: black;
}
.is-hide {
    display: none;
}
</style>


<script type="text/javascript">

var searchItem = '.search_item';   // 絞り込む項目を選択するエリア
var listItem = '.list_item';       // 絞り込み対象のアイテム
var hideClass = 'is-hide';         // 絞り込み対象外の場合に付与されるclass名
var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

$(function() {
    // 絞り込みを変更した時
    $(searchItem).on('click', function() {
        $(searchItem).removeClass(activeClass);
        var group = $(this).addClass(activeClass).data('group');
        search_filter(group);
    });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
    // 非表示状態を解除
    $(listItem).removeClass(hideClass);
    // 値が空の場合はすべて表示
    if(group === '') {
        return;
    }
    // リスト内の各アイテムをチェック
    for (var i = 0; i < $(listItem).length; i++) {
        // アイテムに設定している項目を取得
        var itemData = $(listItem).eq(i).data('group');
        // 絞り込み対象かどうかを調べる
        if(itemData !== group) {
            $(listItem).eq(i).addClass(hideClass);
        }
    }
}

</script>
## お知らせ

- 2020年9月21日 新しい記事を公開しました．

## はじめに

## 記事一覧

* [栗田佳代子 先生・「学びの場」づくり（教育学部）](kurita)
  * 約20名履修　リアルタイム中心
  * 利用ツール: Zoom，Slido，Google Documents, Sheets, Slides, Forms，Google Classroom

<div class="search">
    <span class="search_item is-active" data-group="">ALL</span>
    <span class="search_item" data-group="a">グループA</span>
    <span class="search_item" data-group="b">グループB</span>
    <span class="search_item" data-group="h">グループH</span>
</div>
 
<!-- リスト表示部分 -->
<ul class="list">
    <li class="list_item" data-group="a">ロシア</li>
    <li class="list_item" data-group="b">フランス</li>
    <li class="list_item" data-group="h">ペルー</li>
</ul>