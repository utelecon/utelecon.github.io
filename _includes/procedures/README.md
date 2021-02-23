# _includes/procedure について

複数のページで共通している手順の説明について，記述を集約し，変更があった場合に対応しやすくするものです．

```
{% include procedures/utokyo_account.html %}
```

のように記述すると， `_includes/procedures/utokyo_account.html` の内容が読み込まれます．

## 場合分けについて

学生向け・教職員向けで微妙に手順が違ったり，複数の手順を説明する流れの中で記述を若干調整したい，という場合があるので，変数を使った場合分けをしています．

読み込み元のページの冒頭に

```
---
title: オンライン授業を受けるために
procedure: oc
---
```

のように書いたものが，このディレクトリのファイルからは `page.procedure` として読めます．

```
{% if page.procedure == "oc" %}
この中は，冒頭に `procedure: oc` と書いたページでだけ表示される
{% endif %}
```

のように場合分けできます．

switch/caseは，Ruby流のcase/whenで書きます．

```
{% case page.procedure %}
    {% when "oc" %}
        ここはocでだけ
    {% when "faculty_members" %}
        ここはfaculty_membersでだけ
    {% else %}
        ここはそれ以外でだけ
{% endcase %}
```

参照： https://shopify.github.io/liquid/tags/control-flow/
