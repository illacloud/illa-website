---
slug: postgresql-select
title: PostgreSQL SELECT-Anweisung  
description: Dieser Artikel stellt die grundlegende Form der `SELECT`-Anweisung in `PostgreSQL` sowie die Verwendung von `SELECT`-Anweisungen zum Abfragen von Daten aus Tabellen vor. In `PostgreSQL` wird die `SELECT`-Anweisung verwendet, um Daten aus einer oder mehreren Tabellen abzurufen, und sie ist wahrscheinlich die am häufigsten verwendete Anweisung.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp
tags: [ postgresql, select ] 
date: 2024-02-21T10:00
---

Dieser Artikel stellt die grundlegende Form der `SELECT`-Anweisung in `PostgreSQL` sowie die Verwendung von `SELECT`-Anweisungen zum Abfragen von Daten aus Tabellen vor.

In `PostgreSQL` wird die `SELECT`-Anweisung verwendet, um Daten aus einer oder mehreren Tabellen abzurufen, und sie ist wahrscheinlich die am häufigsten verwendete Anweisung.

## PostgreSQL SELECT-Syntax

Beginnen wir mit der grundlegenden Form einer `SELECT`-Anweisung zum Abrufen von Daten aus einer einzelnen Tabelle.

Die Syntax einer `SELECT`-Anweisung ist wie folgt:

```sql
SELECT
    expr_list
FROM
    table_name  
[other_clauses];
```

In dieser Syntax:

- `SELECT` und `FROM` sind Schlüsselwörter.
- `expr_list` ist eine Liste von Spalten oder Ausdrücken, die ausgewählt werden sollen. Mehrere Spalten oder Ausdrücke müssen durch Kommas getrennt werden.
- `table_name` ist die Daten-Tabelle, aus der abgefragt werden soll.
- `FROM table_name` ist optional. Sie können die `FROM`-Klausel weglassen, wenn Sie keine Zeilen aus einer Tabelle abfragen.
- `other_clauses` sind Klauseln, die von der `SELECT`-Anweisung unterstützt werden. Die `SELECT`-Anweisung unterstützt viele Klauseln, einschließlich:
  - Verwenden des `DISTINCT`-Operators, um unterschiedliche Zeilen auszuwählen.
  - Verwenden der `ORDER BY`-Klausel zum Sortieren von Zeilen.
  - Verwenden der `WHERE`-Klausel zum Filtern von Zeilen.
  - Verwenden der `LIMIT`- oder `FETCH`-Klausel, um eine Teilmenge von Zeilen aus der Tabelle auszuwählen.
  - Verwenden der `GROUP BY`-Klausel zum Gruppieren von Zeilen.
  - Verwenden der `HAVING`-Klausel zum Filtern von Gruppen.
  - Verwenden von Joins wie `INNER JOIN`, `LEFT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN` zum Verknüpfen mit anderen Tabellen.
  - Verwenden von `UNION`, `INTERSECT` und `EXCEPT` zum Durchführen von Mengenoperationen.

SQL-Schlüsselwörter sind nicht groß-/kleinschreibungsabhängig. Es ist jedoch eine gute Codierungspraxis, SQL-Schlüsselwörter in Großbuchstaben zu schreiben, um die Lesbarkeit des SQL-Codes zu verbessern.

In diesem Tutorial konzentrieren wir uns auf die Grundlagen der Verwendung der `SELECT`-Anweisung. Die Verwendung anderer verwandter Klauseln wird in nachfolgenden Tutorials behandelt.

## PostgreSQL SELECT-Beispiele

Schauen wir uns einige Beispiele für die Verwendung von PostgreSQL `SELECT`-Anweisungen an.

Wir verwenden die `customer`-Tabelle aus der `PostgreSQL Sakila`-Beispieldatenbank für die Demo.

### Abfragen einer Spalte mit PostgreSQL SELECT

Die folgende `SELECT`-Anweisung sucht alle Vornamen von Kunden aus der `customer`-Tabelle:

```sql  
SELECT first_name FROM customer;
```

Hier ist ein Teil der Ausgabe:

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

Beachten Sie, dass wir am Ende der `SELECT`-Anweisung ein Semikolon (;) hinzugefügt haben. Das Semikolon ist kein Teil der SQL-Anweisung. Es wird verwendet, um PostgreSQL das Ende der SQL-Anweisung zu signalisieren. Semikola werden auch verwendet, um zwei SQL-Anweisungen zu trennen.

### Abfragen mehrerer Spalten mit PostgreSQL SELECT

Wenn Sie den Vornamen, Nachnamen und die E-Mail des Kunden wissen möchten, können Sie diese Spaltennamen in der `SELECT`-Klausel angeben, wie in der folgenden Abfrage gezeigt:

```sql
SELECT
    first_name,
    last_name, 
    email
FROM
    customer;
```

Hier ist ein Teil der Ausgabe:

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

### Abfragen aller Spalten aus einer Tabelle mit PostgreSQL SELECT

Wenn Sie mit der `SELECT`-Anweisung alle Spalten aus der `customer`-Tabelle abrufen möchten, verwenden Sie die folgende Anweisung:

```sql
SELECT * FROM customer;
```

Hier ist ein Teil der Ausgabe:

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

In diesem Beispiel haben wir den Stern (*) in der `SELECT`-Klausel verwendet, was eine Abkürzung für alle Spalten ist. Der Stern (*) ermöglicht es uns, weniger einzugeben, ohne alle Spaltennamen in der `customer`-Tabelle auflisten zu müssen.

Die Verwendung des Sterns (*) in `SELECT`-Anweisungen ist jedoch keine gute Praxis aus folgenden Gründen:

1. Datenbankperformance. Angenommen, Sie haben eine Tabelle mit vielen Spalten und großen Datenmengen. Eine `SELECT`-Anweisung mit der Sternchen-Abkürzung (*) wählt Daten aus allen Spalten der Tabelle aus, was für die Anwendung möglicherweise nicht erforderlich ist.

2. Anwendungsperformance. Das Abrufen unnötiger Daten aus der Datenbank erhöht den Datenverkehr zwischen dem Datenbankserver und dem Anwendungsserver. Daher kann die Reaktionszeit Ihrer Anwendung langsamer sein und die Skalierbarkeit geringer.

Aus diesen Gründen ist es am besten, Spaltennamen in der `SELECT`-Klausel explizit anzugeben, um nur die benötigten Daten aus der Datenbank abzurufen.

Sie sollten die Sternchen-Abkürzung (*) nur für Ad-hoc-Abfragen verwenden, die Datenbankdaten überprüfen.

### Abfrage mit Ausdrücken in PostgreSQL SELECT

Zusätzlich zu Spaltennamen können Sie auch Ausdrücke in der `SELECT`-Anweisung verwenden. Das folgende Beispiel verwendet eine `SELECT`-Anweisung, um den vollständigen Namen und die E-Mail aller Kunden zurückzugeben:

```sql 
SELECT
    first_name || ' ' || last_name,
    email
FROM
    customer;
```

Hier ist ein Teil der Ausgabe:

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

In diesem Beispiel haben wir den Vornamen, Leerzeichen und Nachnamen jedes Kunden mit dem String-Verkettungsoperator || konkateniert.

### Berechnen von Ausdrücken mit PostgreSQL SELECT

Wenn Sie nur das Ergebnis eines Ausdrucks benötigen, können Sie die `FROM`-Klausel in der `SELECT`-Anweisung weglassen. Die folgende `SELECT`-Anweisung wird verwendet, um das Ergebnis von `5 * 3` zu berechnen:

```sql
SELECT 5 * 3; 
```

Die Ausgabe lautet:

```
?column?
----------
       15
```

## Fazit

In diesem Tutorial haben Sie gelernt, wie Sie die grundlegende Form von PostgreSQL `SELECT`-Anweisungen verwenden, um Daten aus einer einzelnen Tabelle abzufragen. Sie können die `FROM`-Klausel in `SELECT`-Anweisungen weglassen, wenn Sie keine Daten aus einer Tabelle abfragen müssen.