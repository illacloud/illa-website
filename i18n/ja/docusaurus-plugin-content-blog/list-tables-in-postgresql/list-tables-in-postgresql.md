---
slug: list-tables-in-postgresql
title: "PostgreSQLのテーブル一覧の取得方法"
description: この記事では、PostgreSQLデータベース内のテーブルを一覧表示するための2つの方法を紹介します。PostgreSQLはデータベース内のすべてのテーブルを一覧表示する2つの方法を提供しています。
authors: owen
image: https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp
tags: [postgres, postgresql, database, list, tables, psql]
date: 2024-01-04T10:00
---

この記事では、PostgreSQLデータベース内のテーブルを一覧表示するための2つの方法を紹介します。PostgreSQLはデータベース内のすべてのテーブルを一覧表示する2つの方法を提供しています：

- `psql`ツールで`\dt`または`\dt+`を使用して現在のデータベースのすべてのテーブルを一覧表示します。
- `pg_tables`テーブルからすべてのテーブルをクエリします。

## \dtを使用してデータベース内のテーブルを一覧表示

この例では、`psql`ツールを使用してデータベースにログインし、データベース内のテーブルを一覧表示するプロセスを示しています。以下の手順に従ってください：

1. postgresユーザーを使用してPostgreSQLサーバーにログインします：

```shell
[~] psql -U postgres
psql (14.4)
Type "help" for help.
```

注意：適切なデータベース権限を持つ任意のユーザーも使用できます。

2. 以下のステートメントで`testdb`データベースを選択します：

```shell
\c testdb;
```

データベースがまだ作成されていない場合は、次のステートメントを実行します：

```shell
CREATE DATABASE testdb;
```

3. `\dt`コマンドを使用して`testdb`データベースのすべてのテーブルを一覧表示します：

```shell
\dt
```

```shell
            リレーションの一覧
Schema |      Name      | Type  |  Owner
--------+----------------+-------+----------
public | mytable        | table | postgres
public | product        | table | postgres
public | test_date      | table | postgres
public | test_time      | table | postgres
public | test_timestamp | table | postgres
public | week_day_sales | table | postgres
(6 rows)
```

4. テーブルに関する詳細情報を表示したい場合は、`\dt+`コマンドを使用します：

```shell
\dt+
```

```shell
                                          リレーションの一覧
Schema |      Name      | Type  |  Owner   | Persistence | Access method |    Size    | Description
--------+----------------+-------+----------+-------------+---------------+------------+-------------
public | mytable        | table | postgres | permanent   | heap          | 16 kB      |
public | product        | table | postgres | permanent   | heap          | 16 kB      |
public | test_date      | table | postgres | permanent   | heap          | 8192 bytes |
public | test_time      | table | postgres | permanent   | heap          | 8192 bytes |
public | test_timestamp | table | postgres | permanent   | heap          | 8192 bytes |
public | week_day_sales | table | postgres | permanent   | heap          | 8192 bytes |
(6 rows)
```

`\dt+`の入力には、`\dt`の出力に加えて`Persistence`、`Access method`、`Size`、および`Description`などの列が含まれています。

## pg_tablesテーブルからテーブルをクエリ

`\dt`および`\dt+`コマンドに加えて、`pg_tables`テーブルから現在のデータベース内のすべてのテーブルをクエリすることもできます。

`pg_tables`テーブルは、PostgreSQLの組み込みテーブルで、データベース内のすべてのテーブルを格納しています。

```shell
SELECT * FROM pg_tables
WHERE schemaname = 'public';
```

```shell
 schemaname |   tablename    | tableowner | tablespace | hasindexes | hasrules | hastriggers | rowsecurity
------------+----------------+------------+------------+------------+----------+-------------+-------------
 public     | test_date      | postgres   |            | t          | f        | f           | f
 public     | test_time      | postgres   |            | t          | f        | f           | f
 public     | test_timestamp | postgres   |            | t          | f        | f           | f
 public     | week_day_sales | postgres   |            | t          | f        | f           | f
 public     | mytable        | postgres   |            | f          | f        | f           | f
 public     | product        | postgres   |            | t          | f        | f           | f
(6 rows)
```

## 結論

PostgreSQLはデータベース内のすべてのテーブルを一覧表示するために2つの方法を提供しています：

- `psql`ツールで`\dt`または`\dt+`を使用して現在のデータベースのすべてのテーブルを一覧表示します。
- `pg_tables`テーブルからすべてのテーブルをクエリします。

MySQLでは、データベースを一覧表示するために`SHOW TABLES`コマンドを使用できます。