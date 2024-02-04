---
slug: list-tables-in-postgresql
title: "PostgreSQL表格清单获取方法"
description: 本文介绍了在PostgreSQL数据库中列出所有表格的两种方法。PostgreSQL提供了两种方法来列出数据库中的所有表格。
authors: owen
image: https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp
tags: [postgres, postgresql, database, list, tables, psql]
date: 2024-01-04T10:00
---

本文介绍了在PostgreSQL数据库中列出所有表格的两种方法。PostgreSQL提供了两种方法来列出数据库中的所有表格：

- 使用`psql`工具的`\dt`或`\dt+`命令列出当前数据库中的所有表格。
- 通过查询`pg_tables`表列出所有表格。

## 使用\dt列出数据库中的表格

以下示例演示了使用`psql`工具登录数据库并列出其中表格的过程。请按照以下步骤操作：

1. 使用postgres用户登录到PostgreSQL服务器：

```shell
[~] psql -U postgres
psql (14.4)
Type "help" for help.
```

注意：也可以使用具有适当数据库权限的任何用户。

2. 使用以下语句选择`testdb`数据库：

```shell
\c testdb;
```

如果数据库尚未创建，请执行以下语句：

```shell
CREATE DATABASE testdb;
```

3. 使用`\dt`命令列出`testdb`数据库中的所有表格：

```shell
\dt
```

```shell
            Relations List
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

4. 若要查看有关表格的详细信息，请使用`\dt+`命令：

```shell
\dt+
```

```shell
                                          Relations List
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

`\dt+`的输出包含`\dt`输出以及额外列，如`Persistence`、`Access method`、`Size`和`Description`。

## 从pg_tables表中查询表格

除了`\dt`和`\dt+`命令外，还可以通过查询`pg_tables`表列出当前数据库中的所有表格。

`pg_tables`表是PostgreSQL的内置表，用于存储数据库中的所有表格。

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

## 结论

PostgreSQL提供了两种列出数据库中所有表格的方法：

- 使用`psql`工具的`\dt`或`\dt+`命令列出当前数据库中的所有表格。
- 通过查询`pg_tables`表列出所有表格。

在MySQL中，可以使用`SHOW TABLES`命令列出数据库中的表格。