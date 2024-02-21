---
slug: postgresql-isnull
title: PostgreSQL中ISNULL和ISNOTNULL的最佳实践
description: '本文介绍了在 PostgreSQL 中如何使用 `IS NULL` 运算符检查一个值是不是 `NULL`。PostgreSQL `IS NULL` 是一个布尔运算符，它检查一个值是不是`NULL`。 `NULL`值是一个特殊的值，它表示什么都没有，它即不是空字符串也不是false。' 
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp
tags: [ postgresql, isnull, isnotnull ]
date: 2024-02-04T11:00
---

本文介绍了在 PostgreSQL 中如何使用 `IS NULL` 运算符检查一个值是不是 `NULL`。PostgreSQL `IS NULL` 是一个布尔运算符，它检查一个值是不是`NULL`。 `NULL`值是一个特殊的值，它表示什么都没有，它即不是空字符串也不是false。

## PostgreSQL IS NULL 语法

PostgreSQL `IS NULL` 是一个单目比较运算符，只需要一个操作数。`IS NULL` 运算符的语法是：

```shell
expr IS NULL
expr IS NOT NULL
```

解析：
- `expr`可以是一个字段名、一个值或者一个表达式。
- `IS NOT NULL` 是 `IS NULL` 的否定运算。
- `IS NULL` 和 `IS NOT NULL` 可以用在 `SELECT` 语句或者 `WHERE` 子句中。

## PostgreSQL IS NULL 运算规则

当 PostgreSQL `IS NULL` 运算符左侧的操作数是 `NULL` 时，`IS NULL` 运算符返回 `t`，否则返回 `f`。

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

## PostgreSQL IS NULL 实例

我们将使用`Sakila`示例数据库 中的表进行演示，请您先在 PostgreSQL 中安装 `Sakila` 示例数据库。

`Sakila` 示例数据库是使用最广泛的示例数据库之一，也是最好的示例数据库之一。`Sakila` 示例数据库最初由 MySQL AB 文档团队的前成员 Mike Hillyer 开发。它旨在提供一个标准模式，可用于书籍、教程、文章等中的示例演示。

`Sakila` 数据库为 DVD 租赁商店业务建模，其中包含影片、演员、影片与演员关系等内容，以及连接影片、商店和租赁业务的中央库存表。

作为最好的示例数据库之一，`Sakila` 数据库已经被移植 PostgreSQL, Oracle, DB2, SQLite 等平台。

在 `Sakila` 示例数据库中， staff 表存储了 DVD 租赁商店中的职员信息。

在 `staff` 表中， `picture` 中存储了职员的照片文件， 要从 `staff` 表中查询那些没有上传图片的职员， 需要检查 `picture` 是否为 `NULL`, 请使用以下带有 `IS NULL` 的 SQL 语句：

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

## 结论

在本文中，我们学习了 PostgreSQL 中 `IS NULL` 和 `IS NOT NULL` 比较运算符的语法和用法。本文要点如下：

- `IS NULL` 和 `IS NOT NULL` 是单目比较运算符。
- 使用 `IS NULL` 运算符检查一个值是否是 `NULL`。
- `IS NOT NULL` 运算符是 `IS NULL` 的否定操作。
- `NULL IS NULL` 的结果是真。

