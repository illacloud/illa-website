---
slug: list-tables-in-postgresql
title: "Wie man Tabellen in PostgreSQL auflistet"
description: Dieser Artikel stellt zwei Methoden vor, um Tabellen in einer PostgreSQL-Datenbank aufzulisten. PostgreSQL bietet zwei Möglichkeiten, alle Tabellen in einer Datenbank aufzulisten.
authors: owen
image: https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp
tags: [postgres, postgresql, database, list, tables, psql]
date: 2024-01-04T10:00
---

Dieser Artikel stellt zwei Methoden vor, um Tabellen in einer PostgreSQL-Datenbank aufzulisten. PostgreSQL bietet zwei Möglichkeiten, alle Tabellen in einer Datenbank aufzulisten:

- Verwenden Sie `\dt` oder `\dt+` im `psql`-Tool, um alle Tabellen in der aktuellen Datenbank aufzulisten.
- Abfragen Sie alle Tabellen aus der Tabelle `pg_tables`.

## Auflisten von Tabellen in der Datenbank mit \dt

Dieses Beispiel zeigt den Vorgang des Einloggens in die Datenbank mit dem `psql`-Tool und dem Auflisten von Tabellen in der Datenbank. Befolgen Sie diese Schritte:

1. Melden Sie sich beim PostgreSQL-Server mit dem Benutzer postgres an:

```shell
[~] psql -U postgres
psql (14.4)
Type "help" for help.
```

Hinweis: Sie können auch einen Benutzer mit den entsprechenden Datenbankberechtigungen verwenden.

2. Wählen Sie die Datenbank `testdb` mit der folgenden Anweisung aus:

```shell
\c testdb;
```

Wenn die Datenbank noch nicht erstellt wurde, führen Sie die folgende Anweisung aus:

```shell
CREATE DATABASE testdb;
```

3. Verwenden Sie das Kommando `\dt`, um alle Tabellen in der Datenbank `testdb` aufzulisten:

```shell
\dt
```

```shell
            Liste der Relationen
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

4. Wenn Sie weitere Informationen zu den Tabellen anzeigen möchten, verwenden Sie das Kommando `\dt+`:

```shell
\dt+
```

```shell
                                          Liste der Relationen
Schema |      Name      | Type  |  Owner   | Persistence | Access method |    Size    | Beschreibung
--------+----------------+-------+----------+-------------+---------------+------------+-------------
public | mytable        | table | postgres | permanent   | heap          | 16 kB      |
public | product        | table | postgres | permanent   | heap          | 16 kB      |
public | test_date      | table | postgres | permanent   | heap          | 8192 bytes |
public | test_time      | table | postgres | permanent   | heap          | 8192 bytes |
public | test_timestamp | table | postgres | permanent   | heap          | 8192 bytes |
public | week_day_sales | table | postgres | permanent   | heap          | 8192 bytes |
(6 rows)
```

Sie sehen, dass die Eingabe von `\dt+` zusätzliche Spalten wie `Persistence`, `Access method`, `Size` und `Beschreibung` enthält, zusätzlich zur Ausgabe von `\dt`.

## Abfragen von Tabellen aus der Tabelle pg_tables

Neben den Befehlen `\dt` und `\dt+` können Sie auch alle Tabellen in den aktuellen Daten aus der Tabelle `pg_tables` abfragen.

Die Tabelle `pg_tables` ist eine integrierte Tabelle in PostgreSQL, die alle Tabellen in der Datenbank speichert.

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

## Fazit

PostgreSQL bietet zwei Möglichkeiten, alle Tabellen in einer Datenbank aufzulisten:

- Verwenden Sie `\dt` oder `\dt+` im psql-Tool, um alle Tabellen in der aktuellen Datenbank aufzulisten.
- Abfragen Sie alle Tabellen aus der Tabelle `pg_tables`.

In MySQL können Sie den Befehl `SHOW TABLES` verwenden, um Datenbanken aufzulisten.