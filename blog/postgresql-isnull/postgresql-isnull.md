---
slug: postgresql-isnull
title: Best Practices for PostgreSQL ISNULL and ISNOTNULL
description: 'This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.'
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp
tags: [ postgresql, isnull, isnotnull ]
date: 2024-02-04T11:00
is_featured: true
---

This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`.
PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that
indicates nothing, it is neither an empty string nor false.

## PostgreSQL IS NULL Syntax

PostgreSQL `IS NULL` is a unary comparison operator that only requires one operand. The syntax for the `IS NULL`
operator is:

```shell
expr IS NULL
expr IS NOT NULL
```

**Breakdown:**

- `expr` can be a field name, a value, or an expression.
- `IS NOT NULL` is the negation of `IS NULL`.
- `IS NULL` and `IS NOT NULL` can be used in `SELECT` statements or `WHERE` clauses.

## PostgreSQL IS NULL Operator Rules

When the operand on the left side of the PostgreSQL `IS NULL` operator is `NULL`, the `IS NULL` operator returns `t`,
otherwise it returns `f`.

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

## PostgreSQL IS NULL Examples

We will use the tables in the `Sakila` sample database for demonstration. Please install the `Sakila` sample database in
PostgreSQL first.

The `Sakila` sample database is one of the most widely used and best sample databases. The `Sakila` sample database was
originally developed by Mike Hillyer, a former member of the MySQL AB documentation team. It is designed to provide a
standard schema that can be used for example demonstrations in books, tutorials, articles, etc.

The `Sakila` database models a DVD rental store business, including movies, actors, movie-actor relationships, and a
central inventory table that connects movies, stores, and rental transactions.

As one of the best sample databases, the `Sakila` database has been ported to platforms such as PostgreSQL, Oracle, DB2,
and SQLite.

In the `Sakila` sample database, the `staff` table stores employee information for the DVD rental store.

In the `staff` table, `picture` stores the employee's photo file. To query for employees who have not uploaded a photo
from the `staff` table, you need to check if `picture` is `NULL`. Use the following SQL statement with `IS NULL`:

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

## Conclusion

In this article, we learned the syntax and usage of the `IS NULL` and `IS NOT NULL` comparison operators in PostgreSQL.
Here are the key takeaways from this article:

- `IS NULL` and `IS NOT NULL` are unary comparison operators.
- Use the `IS NULL` operator to check if a value is `NULL`.
- The `IS NOT NULL` operator is the negation of `IS NULL`.
- `NULL IS NULL` evaluates to true.