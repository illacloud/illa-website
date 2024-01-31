---
slug: build-dashboard
title: Erstellen Sie schnell ein personalisiertes Daten-Dashboard für Ihren Chef
description: Jedes Unternehmen hat sein eigenes exklusives Online-Geschäft, und mit der fortlaufenden Aktualisierung und Iteration des Geschäfts wird die Komplexität im Laufe der Zeit kontinuierlich zunehmen.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/build-dashboard/cover.png
tags: [ Daten-Dashboard ]
date: 2024-01-01T10:00
---

Jedes Unternehmen hat sein eigenes exklusives Online-Geschäft, und mit der fortlaufenden Aktualisierung und Iteration des Geschäfts wird die Komplexität im Laufe der Zeit kontinuierlich zunehmen.

Nachdem die Geschäftskomplexität ein hohes Niveau erreicht hat, müssen interne Teams verschiedene Daten anzeigen, um Entscheidungen für zukünftige Strategien zu treffen. Daher benötigen wir ein flexibles Tool, um personalisierte Daten-Dashboards zu erstellen, um die vielfältigen Anpassungsbedürfnisse der internen Teammitglieder, insbesondere des Chefs, zu erfüllen und dem Team dabei zu helfen, schnell zu iterieren.

Mit effizienten Tools können Sie jeden Tag früh Feierabend machen.

## Einige Probleme beim Aufbau

Das Geschäft jedes Unternehmens ist auf verschiedene Systeme verteilt, und es gibt Verbindungen zwischen diesen Systemen. Einige Daten müssen mithilfe von Datenbanken abgefragt werden:

- Postgresql
- Mysql
- MongoDB
- ...

Einige Daten stammen aus verschiedenen Arten von Mikroservices, die möglicherweise von einer bestimmten API abgerufen werden:

- Benutzerdetails API
- Produktdetails API
- ...

Das Schwierigste ist, dass einige Daten eine Zusammenführung und sekundäre Verarbeitung sowohl von Datenbank- als auch von API-Daten erfordern.

Diese Probleme machen es sehr umständlich, ein personalisiertes Daten-Dashboard zu erstellen. Wenn Sie die Entwicklung von Grund auf beginnen, müssen Sie sich an verschiedene Datenquellen anpassen, was zu erheblichen Kostensteigerungen in der Entwicklung führt.

Daher benötigen wir ein flexibles Tool zur Anzeige von Daten-Dashboards, da "Entwicklung" nicht am wichtigsten ist; "Anzeige" ist es.

Dieses Tool benötigt einige objektive Vorteile:

- Üppige Diagramme zur Anzeige von Daten aus verschiedenen Dimensionen.
- Unterstützung für verschiedene gängige Datenquellen.
- Einfache Installation und Verwendung.

## Wie man das löst

Hier empfehle ich ein benutzerfreundliches Open-Source-Projekt namens ILLA Cloud. ILLA Cloud ist ein Low-Code-Tool, das speziell für Szenarien mit personalisierten Anforderungen entwickelt wurde.

📙 Offizielle Website: [https://illa.cloud](https://illa.cloud?utm_source=juejin)

⏬ Github-Repository: https://github.com/illacloud/illa-builder

⭐ Github Stars: 9k

Unten sehen Sie eine Demo mit gefälschten Daten, die die Verkaufssituation eines Produkts in einem Unternehmen darstellt, einschließlich:

- Monatliche Umsatzwachstumstrends
- Monatliche Einnahmen
- Gesamteinnahmen
- Anzahl der Käufer
- Detaillierte Informationen zu jedem kaufenden Benutzer

![data_dashboard](https://cdn.illacloud.com/illa-website/blog/build-dashboard/data-dashboard.png)

Diese Grafik verwendet mehrere Komponenten:

- Datengitter
- Diagramm
- Statistik
- Menü

Es wurde schnell per Drag & Drop erstellt. Die Daten stammen von:

- Supabase: Ein serverloses Postgresql
- API

ILLA unterstützt verschiedene Datenquellen und ermöglicht so das schnelle Abrufen von Daten aus einer Vielzahl gängiger Quellen.

![integration](https://cdn.illacloud.com/illa-website/blog/build-dashboard/integration.png)

## KI-gesteuert

ILLA bietet nicht nur ein Dashboard, sondern ermöglicht es auch, abgefragte Daten mithilfe des LLM (Language Model) weiter zu verarbeiten. Zum Beispiel können unübersichtliche Daten in das gewünschte Format umgewandelt werden, um Daten aus mehreren Quellen abzugleichen.

## Vorteile

Das Erstellen eines schönen Dashboards ist mit Drag & Drop innerhalb weniger Minuten schnell und einfach.

Darüber hinaus unterstützt ILLA Cloud im Vergleich zu verschiedenen traditionellen BI-Tools:

- Die Abfrage von Daten sowohl aus Datenbanken als auch aus APIs
- Einfache Installation, direkt auf der Webseite ohne Downloads verwendbar
- Verwendung von Javascript für die sekundäre Datenverarbeitung, direkt und einfach
- Unterstützung verschiedener gängiger Diagramme, die die meisten Anforderungen erfüllen
- Die Transformer-Funktion löst effektiv das Problem der Zusammenführung und Verarbeitung von Daten aus mehreren Quellen und beseitigt Bedenken hinsichtlich des Datenformats

Als Open-Source-Projekt unterstützt ILLA Cloud auch die Weiterentwicklung und verfügt über eine aktive Community zur Zusammenarbeit mit anderen Entwicklern. Keine Sorgen um Wartungsprobleme.

Zusätzlich kann ILLA Cloud nicht nur Daten-Dashboards erstellen, sondern auch exklusive Management-Dashboards schnell erstellen, um Ihre Geschäftsiteration zu beschleunigen.

Als Low-Code-Tool unterstützt ILLA Cloud auch die Zusammenarbeit von mehreren Personen, die gemeinsam Dashboards erstellen können.

![collaboration](https://cdn.illacloud.com/illa-website/blog/build-dashboard/collaboration.png)

## Fazit

Nach der Verwendung von ILLA Cloud müssen Sie sich keine Sorgen mehr um die personalisierten Anforderungen Ihres Chefs machen. Innerhalb weniger Minuten können Sie ein personalisiertes Daten-Dashboard für Ihren Chef erstellen und zu einem äußerst effizienten Mitarbeiter werden. Warum probieren Sie es nicht gleich aus!
