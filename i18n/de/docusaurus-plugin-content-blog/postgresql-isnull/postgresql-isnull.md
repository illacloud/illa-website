---
slug: postgresql-isnull
title: Best Practices for PostgreSQL ISNULL and ISNOTNULL
description: 'Dieser Artikel erläutert die Verwendung des `IS NULL`-Operators in PostgreSQL, um zu überprüfen, ob ein Wert `NULL` ist. PostgreSQL `IS NULL` ist ein boolescher Operator, der prüft, ob ein Wert `NULL` ist. Ein `NULL`-Wert ist ein spezieller Wert, der nichts anzeigt. Es ist weder ein leerer String noch falsch.'
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp
tags: [ postgresql, isnull, isnotnull ]
date: 2024-02-04T11:00
is_featured: true
---

Dieser Artikel erläutert die Verwendung des `IS NULL`-Operators in PostgreSQL, um zu überprüfen, ob ein Wert `NULL` ist.
PostgreSQL `IS NULL` ist ein boolescher Operator, der prüft, ob ein Wert `NULL` ist. Ein `NULL`-Wert ist ein spezieller Wert, der
nichts anzeigt. Es ist weder ein leerer String noch falsch.

## PostgreSQL IS NULL Syntax

PostgreSQL `IS NULL` ist ein unärer Vergleichsoperator, der nur einen Operanden erfordert. Die Syntax für den `IS NULL`
Operator lautet:

```shell
expr IS NULL
expr IS NOT NULL
```

**Aufschlüsselung:**

- `expr` kann ein Feldname, ein Wert oder ein Ausdruck sein.
- `IS NOT NULL` ist die Negation von `IS NULL`.
- `IS NULL` und `IS NOT NULL` können in `SELECT`-Anweisungen oder `WHERE`-Klauseln verwendet werden.

## PostgreSQL IS NULL Operator Regeln

Wenn der Operand auf der linken Seite des PostgreSQL `IS NULL`-Operators `NULL` ist, gibt der `IS NULL`-Operator `t` zurück,
sonst gibt er `f` zurück.

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

## PostgreSQL IS NULL Beispiele

Wir werden die Tabellen in der `Sakila`-Beispieldatenbank für die Demonstration verwenden. Installieren Sie zuerst die
`Sakila`-Beispieldatenbank in PostgreSQL.

Die `Sakila`-Beispieldatenbank ist eine der am weitesten verbreiteten und besten Beispieldatenbanken. Die `Sakila`-Beispieldatenbank
wurde ursprünglich von Mike Hillyer, einem ehemaligen Mitglied des MySQL AB-Dokumentationsteams, entwickelt. Sie ist darauf
ausgelegt, ein standardisiertes Schema bereitzustellen, das für Beispielvorführungen in Büchern, Tutorials, Artikeln usw.
verwendet werden kann.

Die `Sakila`-Datenbank modelliert ein DVD-Verleihgeschäft mit Filmen, Schauspielern, Film-Schauspieler-Beziehungen und einer
zentralen Inventartabelle, die Filme, Geschäfte und Verleihtransaktionen verbindet.

Als eine der besten Beispieldatenbanken wurde die `Sakila`-Datenbank auf Plattformen wie PostgreSQL, Oracle, DB2 und SQLite
portiert.

In der `Sakila`-Beispieldatenbank speichert die Tabelle `staff` Informationen zu Mitarbeitern des DVD-Verleihgeschäfts.

In der Tabelle `staff` speichert `picture` die Fotodatei des Mitarbeiters. Um nach Mitarbeitern zu suchen, die kein Foto
hochgeladen haben, müssen Sie überprüfen, ob `picture` `NULL` ist. Verwenden Sie die folgende SQL-Anweisung mit `IS NULL`:

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

## Fazit

In diesem Artikel haben wir die Syntax und Verwendung der Vergleichsoperatoren `IS NULL` und `IS NOT NULL` in PostgreSQL
kennengelernt. Hier sind die wichtigsten Erkenntnisse aus diesem Artikel:

- `IS NULL` und `IS NOT NULL` sind unäre Vergleichsoperatoren.
- Verwenden Sie den `IS NULL`-Operator, um zu überprüfen, ob ein Wert `NULL` ist.
- Der `IS NOT NULL`-Operator ist die Negation von `IS NULL`.
- `NULL IS NULL` ergibt `true`.