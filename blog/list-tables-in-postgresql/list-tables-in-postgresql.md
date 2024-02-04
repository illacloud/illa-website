---
slug: list-tables-in-postgresql
title: "How to list tables in PostgreSQL"
description: This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.
authors: owen
image: https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp
tags: [postgres, postgresql, database, list, tables, psql]
date: 2024-01-04T10:00
---

This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database:

- Use `\dt` or `\dt+` in the `psql` tool to list all tables in the current database.
- Query all tables from the `pg_tables` table.

## List Tables in the Database Using \dt

This example demonstrates the process of logging into the database using the `psql` tool and listing tables in the database. Follow these steps:

1. Log in to the PostgreSQL server using the postgres user:

```shell
[~] psql -U postgres
psql (14.4)
Type "help" for help.
```

Note: You can also use any user with the appropriate database permissions.

2. Select the `testdb` database with the following statement:

```shell
\c testdb;
```

If the database hasn't been created yet, run the following statement:

```shell
CREATE DATABASE testdb;
```

3. Use the `\dt` command to list all tables in the `testdb` database:

```shell
\dt
```

```shell
            List of relations
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

4. If you want to view more information about the tables, use the `\dt+` command:

```shell
\dt+
```

```shell
                                          List of relations
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

You can see that the input of `\dt+` includes columns such as `Persistence`, `Access method`, `Size`, and `Description` in addition to the output of `\dt`.

## Query Tables from the pg_tables Table

In addition to the `\dt` and `\dt+` commands, you can also query all tables in the current data from the `pg_tables` table.

The `pg_tables` table is a built-in table in PostgreSQL that stores all tables in the database.

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

## Conclusion

PostgreSQL provides two ways to list all tables in a database:

- Use `\dt` or `\dt+` in the psql tool to list all tables in the current database.
- Query all tables from the `pg_tables` table.

In MySQL, you can use the `SHOW TABLES` command to list databases.