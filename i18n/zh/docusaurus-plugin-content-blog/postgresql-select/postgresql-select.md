---
slug: postgresql-select
title: PostgreSQL SELECT 语句
description: 本文介绍了 `PostgreSQL` 中的 `SELECT` 语句的基本形式，以及如何使用 `SELECT` 语句从数据表中查询数据。在 `PostgreSQL` 中，`SELECT` 语句用于从一个或多个表中检索数据，它可能是使用最多的语句。 
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp
tags: [ postgresql, select ]
date: 2024-02-21T10:00
---

本文介绍了 `PostgreSQL` 中的 `SELECT` 语句的基本形式，以及如何使用 `SELECT` 语句从数据表中查询数据。

在 `PostgreSQL` 中，`SELECT` 语句用于从一个或多个表中检索数据，它可能是使用最多的语句。

## PostgreSQL SELECT 语法

让我们 `SELECT` 从从单个表中检索数据的语句的基本形式开始。

下面说明了 `SELECT` 语句的语法：

```sql
SELECT
    expr_list
FROM
    table_name
[other_clauses];
```

在这个语法中：

- `SELECT` 和 `FROM` 是关键字。
- `expr_list` 是要选择的列或者表达式的列表。多个列或表达式需要使用逗号分隔。
- `table_name` 是要查询的数据表。
- `FROM table_name` 是可选的。如果你不查询任何表中的行，则可以省略 `FROM` 子句。
- `other_clauses` 是 `SELECT` 语句支持的子句。 `SELECT` 语句支持很多子句，包括：
  - 使用 `DISTINCT` 运算符选择不同的行。
  - 使用 `ORDER BY` 子句对行进行排序。
  - 使用 `WHERE` 子句过滤行。
  - 使用 `LIMIT` 或者 `FETCH` 子句从表中选择行的子集。
  - 使用 `GROUP BY` 子句将行分组。
  - 使用 `HAVING` 子句过滤组。
  - 使用诸如 `INNER JOIN`, `LEFT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN` 之类的与其他表连接。
  - 使用 `UNION` ， `INTERSECT` 和 `EXCEPT` 执行集合运算。

请注意，`SQL` 关键字不区分大小写。但是为了让 `SQL` 代码更易于阅读，将 `SQL` 关键字书写为大写形式是一个好的编码习惯。

在本教程中，我们将聚焦于 `SELECT` 语句的基本用法，其他相关的子句的用法将在后续的教程中学习。

## PostgreSQL SELECT 示例

我们来看一些使用 PostgreSQL `SELECT` 语句的例子。

我们将使用 `PostgreSQL Sakila` 示例数据库中 `customer` 表进行演示。

### 使用 PostgreSQL SELECT 语句查询一列数据

下面的 `SELECT` 语句从 `customer` 表中查找所有客户的名字：

```sql
SELECT first_name FROM customer;
```

这是部分输出：

```sql
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

请注意，我们在 `SELECT` 语句末尾添加了一个分号 (;) 。分号不是 SQL 语句的一部分。它用于向 PostgreSQL 发出 SQL 语句结束的信号。分号也用于分隔两条 SQL 语句。

### 使用 PostgreSQL SELECT 语句查询多列数据示例

如果您想知道客户的名字、姓氏和电子邮件，您可以在 `SELECT` 子句中指定这些列名，如以下查询所示：

```sql
SELECT
    first_name,
    last_name,
    email
FROM
    customer;
```

以下是部分输出：

```sql
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

### 使用 PostgreSQL SELECT 语句查询一个表的所有列的数据示例

如果您想使用 `SELECT` 语句从 `customer` 表中查找所有的列，请使用以下语句：

```sql
SELECT * FROM customer;
```

以下是部分输出：

```sql
 customer_id | store_id | first_name | last_name |                email                | address_id | activebool | create_date |     last_update     | active
-------------+----------+------------+-----------+-------------------------------------+------------+------------+-------------+---------------------+--------
           1 |        1 | MARY       | SMITH     | MARY.SMITH@sakilacustomer.org       |          5 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1
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

在此示例中，我们在 `SELECT` 子句中使用了星号 (`*`)，它是所有列的简写。星号 (`*`) 可以让我们输入更少，而不用列出 `customer` 表中的所有的列名。

但是，在 `SELECT` 语句中使用星号 (`*`) 并不是一个好习惯，原因如下：

1. 数据库性能。假设您有一个包含许多列和大量数据的表，带有星号 (*) 速记的 `SELECT` 语句将从表的所有列中选择数据，这对于应用程序来说可能不是必需的。
2. 应用性能。从数据库中检索不必要的数据会增加数据库服务器和应用程序服务器之间的流量。因此，您的应用程序的响应速度可能较慢且可扩展性较差。

由于这些原因，最好在 `SELECT` 子句中明确指定列名，以便仅从数据库中获取必要的数据。

对于检查数据库数据的即时查询，您应只使用星号 (`*`) 简写。

### 使用带有表达式的 PostgreSQL SELECT 语句示例

除了列名，您还可以在 `SELECT` 语句中使用表达式。以下示例使用 `SELECT` 语句返回所有客户的全名和电子邮件：

```sql
SELECT
    first_name || ' ' || last_name,
    email
FROM
    customer;
```

以下是部分输出：

```sql
     ?column?     |                email
------------------+-------------------------------------
 MARY SMITH       | MARY.SMITH@sakilacustomer.org
 PATRICIA JOHNSON | PATRICIA.JOHNSON@sakilacustomer.org
 LINDA WILLIAMS   | LINDA.WILLIAMS@sakilacustomer.org
 BARBARA JONES    | BARBARA.JONES@sakilacustomer.org
 ELIZABETH BROWN  | ELIZABETH.BROWN@sakilacustomer.org
 JENNIFER DAVIS   | JENNIFER.DAVIS@sakilacustomer.org
 MARIA MILLER     | MARIA.MILLER@sakilacustomer.org
 SUSAN WILSON     | SUSAN.WILSON@sakilacustomer.org
 MARGARET MOORE   | MARGARET.MOORE@sakilacustomer.org
 DOROTHY TAYLOR   | DOROTHY.TAYLOR@sakilacustomer.org
```

在此示例中，我们使用字符串连接运算符 `||` 连接每个客户的名字、空格和姓氏。

### 使用 PostgreSQL SELECT 语句计算表达式示例

如果您只想要单纯的计算一个表达式，您可以省略 `SELECT` 语句中的 `FROM` 子句。 以下 `SELECT` 语句用来计算 `5 * 3` 的结果：

```sql
SELECT 5 * 3;
```

这是输出：

```sql
?column?
----------
       15
```

## 结论

在本教程中，您学习了如何使用 PostgreSQL `SELECT` 语句的基本形式从单个表中查询数据。如果您不需要从任何表查询数据，则可以省略 `SELECT` 语句中的 `FROM` 子句。