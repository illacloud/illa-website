---
slug: postgresql-isnull
title: PostgreSQLのISNULLおよびISNOTNULLのベストプラクティス
description: 'この記事では、PostgreSQLの `IS NULL` 演算子を使用して値が `NULL` かどうかを確認する方法について説明します。PostgreSQLの `IS NULL` は、値が `NULL` かどうかを確認するブール演算子です。`NULL` 値は何も示さない特殊な値であり、空の文字列でもなく、falseでもありません。'
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp
tags: [ postgresql, isnull, isnotnull ]
date: 2024-02-04T11:00
is_featured: true
---

この記事では、PostgreSQLの `IS NULL` 演算子を使用して値が `NULL` かどうかを確認する方法について説明します。PostgreSQLの `IS NULL` は、値が `NULL` かどうかを確認するブール演算子です。`NULL` 値は何も示さない特殊な値であり、空の文字列でもなく、falseでもありません。

## PostgreSQLのIS NULL構文

PostgreSQLの `IS NULL` は、単項比較演算子で、1つのオペランドだけが必要です。 `IS NULL` 演算子の構文は次のとおりです。

```shell
expr IS NULL
expr IS NOT NULL
```

**分解:**

- `expr` はフィールド名、値、または式になります。
- `IS NOT NULL` は `IS NULL` の否定です。
- `IS NULL` および `IS NOT NULL` は `SELECT` ステートメントまたは `WHERE` 句で使用できます。

## PostgreSQLのIS NULL演算子の規則

PostgreSQLの `IS NULL` 演算子の左側のオペランドが `NULL` の場合、`IS NULL` 演算子は `t` を返し、それ以外の場合は `f` を返します。

```shell
SELECT
    NULL IS NULL "NULL IS NULL",
    0 IS NULL "0 IS NULL",
    1 IS NULL "1 IS NULL";
```

```shell
 NULL IS NOT NULL | 0 IS NOT NULL | 1 IS NOT NULL
------------------+---------------+---------------
 f                | t             | t
```

## PostgreSQLのIS NULLの例

デモンストレーションには `Sakila` サンプルデータベースのテーブルを使用します。まず、PostgreSQLに `Sakila` サンプルデータベースをインストールしてください。

`Sakila` サンプルデータベースは最も広く使用されているサンプルデータベースの1つです。`Sakila` サンプルデータベースは元々MySQL ABドキュメンテーションチームの元メンバーであるMike Hillyerによって開発されました。これは、本、チュートリアル、記事などでの例示に使用できる標準のスキーマを提供するように設計されています。

`Sakila` データベースはDVDレンタル店のビジネスをモデル化しており、映画、俳優、映画俳優の関係、および映画、店舗、レンタルトランザクションを接続する中央の在庫テーブルを含んでいます。

最高のサンプルデータベースの1つとして、`Sakila` データベースはPostgreSQL、Oracle、DB2、およびSQLiteなどのプラットフォームに移植されています。

`Sakila` サンプルデータベースでは、`staff` テーブルがDVDレンタル店の従業員情報を保存しています。

`staff` テーブルでは、`picture` が従業員の写真ファイルを保存しています。`staff` テーブルから写真をアップロードしていない従業員をクエリするには、`picture` が `NULL` かどうかを確認する必要があります。次の `IS NULL` を使用したSQLステートメントを使用します。

```shell
SELECT
    first_name, last_name, picture
FROM
    staff
WHERE
    picture IS NULL;
```

```shell
 first_name | last_name | picture
------------+-----------+---------
 Mike       | Hillyer   | <null>
 Jon        | Stephens  | <null>
```

## 結論

この記事では、PostgreSQLの `IS NULL` および `IS NOT NULL` 比較演算子の構文と使用方法を学びました。以下はこの記事の要点です。

- `IS NULL` および `IS NOT NULL` は単項比較演算子です。
- `IS NULL` 演算子を使用して値が `NULL` かどうかを確認します。
- `IS NOT NULL` 演算子は `IS NULL` の否定形です。
- `NULL IS NULL` は true と評価されます。