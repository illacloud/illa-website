---
slug: postgresql-select 
title: PostgreSQL SELECT Statement
description: This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp 
tags: [ postgresql, select ]
date: 2024-02-21T10:00  
---

This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables.

In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.

## PostgreSQL SELECT Syntax

Let's start with the basic form of a `SELECT` statement for retrieving data from a single table.

The syntax of a `SELECT` statement is shown below:

```sql
SELECT
    expr_list
FROM 
    table_name
[other_clauses];
```

In this syntax:

- `SELECT` and `FROM` are keywords.
- `expr_list` is a list of columns or expressions to select. Multiple columns or expressions need to be separated by commas.
- `table_name` is the data table to query from.
- `FROM table_name` is optional. You can omit the `FROM` clause if you are not querying rows from any table.
- `other_clauses` are clauses supported by the `SELECT` statement. The `SELECT` statement supports many clauses including:
    - Use the `DISTINCT` operator to select distinct rows.
    - Use the `ORDER BY` clause to sort rows.
    - Use the `WHERE` clause to filter rows.
    - Use the `LIMIT` or `FETCH` clause to select a subset of rows from the table.
    - Use the `GROUP BY` clause to group rows.
    - Use the `HAVING` clause to filter groups.
    - Use joins such as `INNER JOIN`, `LEFT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN` to join with other tables.
    - Use `UNION`, `INTERSECT` and `EXCEPT` to perform set operations.

Note that SQL keywords are case insensitive. However, it is a good coding practice to write SQL keywords in uppercase for better readability of SQL code.

In this tutorial, we'll focus on the basic usage of the `SELECT` statement. The usage of other related clauses will be covered in subsequent tutorials.

## PostgreSQL SELECT Examples

Let's look at some examples of using PostgreSQL `SELECT` statements.

We'll use the `customer` table from the `PostgreSQL Sakila` sample database for the demonstration.

### Query One Column with PostgreSQL SELECT

The following `SELECT` statement finds all customer first names from the `customer` table:

```sql
SELECT first_name FROM customer;
```

Here is partial output:

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

Note that we added a semicolon (;) at the end of the `SELECT` statement. The semicolon is not part of the SQL statement. It is used to signal the end of the SQL statement to PostgreSQL. Semicolon is also used to separate two SQL statements.

### Query Multiple Columns with PostgreSQL SELECT

If you want to know the customer's first name, last name, and email, you can specify these column names in the `SELECT` clause as shown in the following query:

```sql
SELECT
    first_name,
    last_name,
    email
FROM
    customer; 
```

Here is partial output:

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

### Query All Columns from a Table with PostgreSQL SELECT

If you want to find all columns from the `customer` table using the `SELECT` statement, use the following statement:

```sql 
SELECT * FROM customer;
```

Here is partial output:

```
 customer_id | store_id | first_name | last_name |                email                 | address_id | activebool | create_date |     last_update     | active   
-------------+----------+------------+-----------+-------------------------------------+------------+------------+-------------+---------------------+---------
           1 |        1 | MARY       | SMITH     | MARY.SMITH@sakilacustomer.org        |          5 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           2 |        1 | PATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org |          6 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           3 |        1 | LINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org   |          7 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           4 |        2 | BARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org    |          8 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           5 |        1 | ELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  |          9 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           6 |        2 | JENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org   |         10 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           7 |        1 | MARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org     |         11 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           8 |        2 | SUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org     |         12 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
           9 |        2 | MARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org   |         13 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
          10 |        1 | DOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org   |         14 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1
```

In this example, we used the asterisk (*) in the `SELECT` clause which is shorthand for all columns. The asterisk (*) allows us to type less without having to list out all column names in the `customer` table.

However, using asterisk (*) in `SELECT` statements is not a good practice for the following reasons:

1. Database performance. Assuming you have a table with lots of columns and large amounts of data, a `SELECT` statement with asterisk (*) shorthand will select data from all columns of the table which may not be necessary for the application.

2. Application performance. Retrieving unnecessary data from the database increases traffic between the database server and application server. Hence your application's response time may be slower and less scalable.

For these reasons, it is best to explicitly specify column names in the `SELECT` clause to only get required data from the database.

You should only use the asterisk (*) shorthand for adhoc queries that check database data.

### Query with Expressions in PostgreSQL SELECT

In addition to column names, you can also use expressions in the `SELECT` statement. The following example uses a `SELECT` statement to return the full name and email of all customers:

```sql
SELECT
    first_name || ' ' || last_name, 
    email
FROM
    customer;
```

Here is partial output:

```
     ?column?      |                 email                 
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

In this example, we concatenated each customer's first name, space and last name using the string concatenation operator `||`.

### Calculate Expressions with PostgreSQL SELECT

If you just want to calculate the result of an expression, you can omit the `FROM` clause in the `SELECT` statement. The following `SELECT` statement is used to calculate the result of `5 * 3`:

```sql 
SELECT 5 * 3;
```

The output is:

```
?column?
----------
       15
```

## Conclusion

In this tutorial, you learned how to use the basic form of PostgreSQL `SELECT` statements to query data from a single table. You can omit the `FROM` clause in `SELECT` statements if you do not need to query data from any table.