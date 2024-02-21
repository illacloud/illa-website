---
slug: postgresql-select
title: PostgreSQL SELECT ステートメント
description: この記事では、`PostgreSQL` の `SELECT` ステートメントの基本的な形式と、`SELECT` ステートメントを使用してテーブルからデータをクエリする方法について説明します。 `PostgreSQL` では、`SELECT` ステートメントは1つまたは複数のテーブルからデータを取得するために使用される可能性が最も高いステートメントです。
authors: [ owen ] 
image: https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp
tags: [ postgresql, select ]
date: 2024-02-21T10:00
---

この記事では、`PostgreSQL` の `SELECT` ステートメントの基本的な形式と、`SELECT` ステートメントを使用してテーブルからデータをクエリする方法について説明します。

`PostgreSQL` では、`SELECT` ステートメントは1つまたは複数のテーブルからデータを取得するために使用される可能性が最も高いステートメントです。

## PostgreSQL SELECT 構文

単一のテーブルからデータを取得する `SELECT` ステートメントの基本的な形式から始めましょう。

`SELECT` ステートメントの構文は次のとおりです。

```sql
SELECT
    expr_list
FROM
    table_name
[other_clauses];
```

この構文では:

- `SELECT` と `FROM` はキーワードです。
- `expr_list` は選択する列または式のリストです。複数の列または式はコンマで区切る必要があります。
- `table_name` はクエリ対象のデータテーブルです。
- `FROM table_name` はオプションです。テーブルから行をクエリしていない場合は、`FROM` 句を省略できます。
- `other_clauses` は `SELECT` ステートメントでサポートされている句です。 `SELECT` ステートメントは、次のような多くの句をサポートしています。
  - `DISTINCT` 演算子を使用して、重複のない行を選択します。
  - `ORDER BY` 句を使用して行を並べ替えます。
  - `WHERE` 句を使用して行をフィルタリングします。
  - `LIMIT` または `FETCH` 句を使用して、テーブルから行のサブセットを選択します。
  - `GROUP BY` 句を使用して行をグループ化します。
  - `HAVING` 句を使用してグループをフィルタリングします。
  - `INNER JOIN`、`LEFT JOIN`、`FULL OUTER JOIN`、`CROSS JOIN`などの結合を使用して、他のテーブルと結合します。
  - `UNION`、`INTERSECT`、`EXCEPT`を使用して集合演算を実行します。

SQLキーワードは大文字と小文字を区別しません。ただし、SQLコードの読みやすさのために、SQLキーワードを大文字で書くことをお勧めします。

このチュートリアルでは、`SELECT` ステートメントの基本的な使用方法に焦点を当てます。関連する他の句の使用方法は、後続のチュートリアルで説明します。

## PostgreSQL SELECT の例

PostgreSQLの `SELECT` ステートメントの使用例を見ていきましょう。

デモンストレーションには、`PostgreSQL Sakila` サンプルデータベースの `customer` テーブルを使用します。

### PostgreSQL SELECT を使用して1列のデータをクエリする

次の `SELECT` ステートメントは、`customer` テーブルからすべての顧客の名前を見つけます。

```sql
SELECT first_name FROM customer;
```

出力の一部は次のとおりです。

```
first_name
------------
MARY  
PATRICIA
LINDA
BARBARA
ELIZABETH
JENNIFER
MARIA
SUSAN
MARGARET
DOROTHY
```

`SELECT` ステートメントの末尾にセミコロン(;)を追加したことに注意してください。セミコロンはSQLステートメントの一部ではありません。これは、SQLステートメントの終了をPostgreSQLに通知するために使用されます。セミコロンは、2つのSQLステートメントも区切るために使用されます。

### PostgreSQL SELECT を使用して複数列のデータをクエリする

顧客の名前、姓、メールアドレスが必要な場合は、次のクエリで示すように、`SELECT` 句でこれらの列名を指定できます。

```sql 
SELECT
    first_name,
    last_name,
    email
FROM
    customer;
```

出力の一部は次のとおりです。

```
first_name | last_name |                email                
------------+-----------+-------------------------------------
MARY       | SMITH     | MARY.SMITH@sakilacustomer.org
PATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org
LINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org
BARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org
ELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  
JENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org
MARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org
SUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org
MARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org
DOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org
```

### PostgreSQL SELECT を使用してテーブルのすべての列のデータをクエリする

`SELECT` ステートメントを使用して `customer` テーブルからすべての列を見つけるには、次のステートメントを使用します。

```sql
SELECT * FROM customer;
```

出力の一部は次のとおりです。

```
 customer_id | store_id | first_name | last_name |                email                 | address_id | activebool | create_date |     last_update     | active
-------------+----------+------------+-----------+-------------------------------------+------------+------------+-------------+---------------------+--------
           1 |        1 | MARY       | SMITH     | MARY.SMITH@sakilacustomer.org        |          5 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           2 |        1 | PATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org |          6 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           3 |        1 | LINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org   |          7 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           4 |        2 | BARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org    |          8 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           5 |        1 | ELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  |          9 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           6 |        2 | JENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org   |         10 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           7 |        1 | MARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org     |         11 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           8 |        2 | SUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org     |         12 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
           9 |        2 | MARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org   |         13 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
          10 |        1 | DOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org   |         14 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
```

この例では、`SELECT` 句でアスタリスク(*)を使用しています。これはすべての列の省略形です。アスタリスク(*)を使用すると、 `customer` テーブルのすべての列名をリストする代わりに、より少ない入力で済みます。

ただし、`SELECT` ステートメントでアスタリスク(*)を使用することはあまり良い習慣ではありません。理由は次のとおりです。

1. データベースのパフォーマンス。多くの列と大量のデータを含むテーブルがあるとします。アスタリスク(*)の省略形を持つ `SELECT` ステートメントは、アプリケーションにとって必要ない可能性があるテーブルのすべての列からデータを選択します。

2. アプリケーションのパフォーマンス。データベースから不要なデータを取得すると、データベースサーバーとアプリケーションサーバー間のトラフィックが増加します。したがって、アプリケーションの応答時間が遅くなり、スケーラビリティが低下する可能性があります。

これらの理由から、`SELECT` 句で列名を明示的に指定し、データベースから必要なデータのみを取得することをお勧めします。

アスタリスク(*)の省略形は、データベースデータを点検するためのアドホッククエリでのみ使用する必要があります。


### PostgreSQL SELECT で式を使用する

列名に加えて、`SELECT` ステートメントで式を使用することもできます。次の例では、`SELECT` ステートメントを使用して、すべての顧客のフルネームとメールアドレスを返します。

```sql
SELECT
    first_name || ' ' || last_name,
    email
FROM
    customer; 
```

出力の一部は次のとおりです。

```
     ?column?      |                email                 
-------------------+-------------------------------------
 MARY SMITH        | MARY.SMITH@sakilacustomer.org
 PATRICIA JOHNSON  | PATRICIA.JOHNSON@sakilacustomer.org
 LINDA WILLIAMS    | LINDA.WILLIAMS@sakilacustomer.org  
 BARBARA JONES     | BARBARA.JONES@sakilacustomer.org
 ELIZABETH BROWN   | ELIZABETH.BROWN@sakilacustomer.org
 JENNIFER DAVIS    | JENNIFER.DAVIS@sakilacustomer.org 
 MARIA MILLER      | MARIA.MILLER@sakilacustomer.org
 SUSAN WILSON      | SUSAN.WILSON@sakilacustomer.org
 MARGARET MOORE    | MARGARET.MOORE@sakilacustomer.org
 DOROTHY TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org
```

この例では、文字列連結演算子 || を使用して、各顧客の名前、スペース、姓を連結しました。


### PostgreSQL SELECT で式を計算する

式の結果だけが必要な場合は、`SELECT` ステートメントから `FROM` 句を省略できます。次の `SELECT` ステートメントは、 `5 * 3` の結果を計算するために使用されます。

```sql
SELECT 5 * 3;
```

出力は次のとおりです。

``` 
?column?
----------
       15
```

## まとめ

このチュートリアルでは、単一のテーブルからデータをクエリするための PostgreSQL `SELECT` ステートメントの基本的な形式の使用方法を学びました。テーブルからのデータのクエリが必要ない場合は、`SELECT` ステートメントから `FROM` 句を省略できます。