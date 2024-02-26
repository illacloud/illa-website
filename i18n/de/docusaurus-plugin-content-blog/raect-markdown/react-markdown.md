---
slug: react-markdown 
title: Verwendung von Remark zur Erstellung eines interaktiven Inhaltsverzeichnisses in einem Next.js-Blog
description: Ein Inhaltsverzeichnis hat zahlreiche Vorteile und ist eine wertvolle Ergänzung für Websites, insbesondere Blogs. Ein organisiertes und leicht navigierbares Inhaltsverzeichnis verbessert die Benutzererfahrung erheblich und vereinfacht den Prozess für Leser, die benötigten Informationen zu finden. Durch Hinzufügen eines Inhaltsverzeichnisses bieten Sie den Lesern nicht nur eine übersichtliche Navigation, sondern erhöhen auch die Gesamtzugänglichkeit und Benutzerfreundlichkeit des Inhalts.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp
tags: [ postgresql, select ]
date: 2024-02-26T10:00  
---

Ein Inhaltsverzeichnis hat zahlreiche Vorteile und ist eine wertvolle Ergänzung für Websites, insbesondere Blogs. Ein organisiertes und leicht navigierbares Inhaltsverzeichnis verbessert die Benutzererfahrung erheblich und vereinfacht den Prozess für Leser, die benötigten Informationen zu finden. Durch Hinzufügen eines Inhaltsverzeichnisses bieten Sie den Lesern nicht nur eine übersichtliche Navigation, sondern erhöhen auch die Gesamtzugänglichkeit und Benutzerfreundlichkeit des Inhalts.

In diesem Artikel werden wir die notwendigen Schritte zur Erstellung eines interaktiven Inhaltsverzeichnisses für einen `Next.js`-Blog unter Verwendung von Remark (einem leistungsstarken Markdown-Prozessor) behandeln. Obwohl einige Remark-Plugins (wie `Remark-toc`) diese Funktionalität bieten, befindet sich das generierte Inhaltsverzeichnis innerhalb des Inhalts selbst, was seine potenziellen Anwendungsfälle einschränkt. Zum Beispiel wird im vorliegenden Blog das Inhaltsverzeichnis außerhalb des Bloginhalts gerendert und bleibt beim Navigieren sichtbar. Dies ist die Art von Inhaltsverzeichnis, das wir in diesem Tutorial erstellen werden. Wir werden zunächst kurz die Grundlagen von Remark, seine Plugins und die Integration mit Next.js diskutieren. Anschließend werden wir uns mit den tatsächlichen Schritten zur Implementierung des benutzerdefinierten Inhaltsverzeichnisses befassen und es schließlich interaktiv gestalten, sodass das Klicken auf die Einträge im Inhaltsverzeichnis die Seite zum entsprechenden Abschnitt scrollt.

## Remark und seine Plugins

Remark ist ein erweiterbarer Markdown-Prozessor, der den Prozess der Umwandlung von Markdown-Dateien in HTML oder andere Formate vereinfacht. Ein wichtiger Aspekt von Remark ist seine Plugin-basierte Architektur, die es Entwicklern ermöglicht, seine Funktionalität zu erweitern und anzupassen. Diese Plugins können Aufgaben wie Syntaxhervorhebung, Hinzufügen eines Inhaltsverzeichnisses oder Parsen benutzerdefinierter Markdown-Syntax übernehmen. Die Integration von Remark in Next.js ist sehr einfach - in der Regel wird es zusammen mit der `getStaticProps`-Funktion verwendet, um Markdown-Dateien während des Builds zu verarbeiten. Es kann auch MDX-Dateien verarbeiten, was es zu einer geeigneten Wahl für Next.js-Websites mit dem neuen `app`-Verzeichnis macht. Die leistungsstarken Verarbeitungsfähigkeiten von Remark und die nahtlose Integration mit Next.js machen es zu einer idealen Wahl zur Verbesserung von Inhalten sowie Benutzererfahrungen von Next.js-Blogs und Websites.

## Erste Schritte

Obwohl wir ein benutzerdefiniertes Inhaltsverzeichnis erstellen, müssen wir nicht alles von Grund auf schreiben. Um den Frontmatter-Inhalt von Markdown/MDX-Inhalt selbst zu trennen, werden wir das Paket `Gray-matter` verwenden. Dies ist optional, wenn in den Markdown-Dateien kein Frontmatter vorhanden ist. Zur Verarbeitung des Markdown selbst verwenden wir das Paket Remark. Außerdem benötigen wir das Paket `unist-util-visit`, um den Knotenbaum zu durchlaufen, und das Paket `mdast-util-to-string`, um den Textinhalt des Knotens zu erhalten.

Lassen Sie uns alle diese Pakete installieren:

```shell
npm i remark mdast-util-to-string gray-matter unist-util-visit
```

## Benutzerdefiniertes Remark-Plugin zum Extrahieren von Überschriften aus dem Inhalt

Bevor das Inhaltsverzeichnis gerendert wird, müssen wir alle Überschriften aus der Markdown-Datei extrahieren und sie in ein Array von Knoten organisieren. Dieser Prozess kann in einige Schritte unterteilt werden:

1. Parsen des Dateiinhalts, um Frontmatter vom Inhalt zu trennen
2. Generieren von IDs für jedes Überschriften-Element. Dies ist später für die Implementierung der Scrollfunktionalität zu Abschnitten erforderlich.
3. Parsen des Inhalts und Extrahieren von Überschriften mit ihren Eigenschaften

Für Schritt 2 könnten wir manuell IDs als benutzerdefinierte Markdown-Attribute hinzufügen, z.B. `## Überschrift 1 {#heading-id}`, und dann eine Bibliothek wie `Remark-heading-id` verwenden, um sie in HTML zu rendern. Dieser Ansatz erfordert jedoch das manuelle Hinzufügen und Pflegen dieser Überschriften über Titeln hinweg und ist weniger effizient. Ein effizienterer Weg ist das automatische Generieren von IDs basierend auf dem Überschriftentext, z.B. die Überschrift `Überschrift 1` erhält automatisch die ID `heading-1`, wenn sie in HTML konvertiert wird.

Zusätzlich können wir Schritte 2 und 3 kombinieren, indem wir ein benutzerdefiniertes Remark-Plugin erstellen.

```javascript
export function headingTree() {
  return (node, file) => {
    file.data.headings = getHeadings(node);
  };
}

function getHeadings(root) {
  // Implementierungsdetails  
}
```

Hier haben wir unser benutzerdefiniertes Remark-Plugin `headingTree`, das Überschriften aus dem Dokument extrahiert und sie als `headings`-Eigenschaft zum verarbeiteten Inhalt hinzufügt.

Die Hauptkomponente ist die `getHeadings`-Funktion, die eine Zugriffsfunktion ist, die den Knotenbaum durchläuft und Knoten manipuliert. Zur verbesserten Lesbarkeit ist die Funktion in zwei Teile aufgeteilt.

Die `addID`-Funktion durchläuft Überschriftenknoten im Dokument, ersetzt alle Sonderzeichen darin und gibt sie als Kleinbuchstabenzeichenfolgen aus, bei denen Leerzeichen durch Bindestriche ersetzt werden. Diese IDs werden im `hProperties`-Attribut der Überschriften gespeichert.

```javascript
function addID(node, nodes) {
  // Implementierungsdetails
}
```

Beachten Sie, dass wir eine Variable `nodes` verwenden, um Vorkommen jeder Überschrift zu verfolgen. Dies geschieht, um sie mit einer Nummer zu versehen, falls es doppelte Überschriften im Dokument gibt (z.B. einige Abschnitte können Untertitel mit dem gleichen Text haben). Die `transformNode`-Funktion nimmt Knoten, die aus dem geparsten Markdown-Abstraktsyntaxbaum (AST) erhalten wurden, und wandelt sie in ein Format um, das besser für den Aufbau des Inhaltsverzeichnisses geeignet ist.

```javascript
import { toString } from "mdast-util-to-string"; 

function transformNode(node, output, indexMap) {
  // Implementierungsdetails
}
```

Diese Funktion überprüft, ob ein Knoten die Tiefe 2 hat (##-Elemente in Markdown). Wenn ja, wird der transformierte Knoten dem Ausgabearray hinzugefügt und an der entsprechenden Tiefenposition in `indexMap` gespeichert. Dies zeigt an, dass der transformierte Knoten auf oberster Ebene des Inhaltsverzeichnisses liegt. Hier bezeichnen wir Tiefe 2 als die oberste Tiefe, da dies `<h2>`-Tags in der HTML-Ausgabe erzeugt. Wir verwenden nicht Tiefe 1, da mehrere `<h1>`-Elemente auf einer Seite nicht gut für die Zugänglichkeit und SEO sind.

Wenn ein Knoten eine Tiefe größer als 2 hat (z.B. ### oder ####-Elemente), identifiziert die Funktion den Elternknoten, indem sie die Position der vorherigen Tiefenebene des Knotens (d.h. `node.depth - 1`) in `indexMap` nachschlägt. Wenn ein Elternteil gefunden wird, wird der transformierte Knoten an das `children`-Array des Elternteils angehängt und `indexMap` entsprechend aktualisiert. Dies hilft beim Aufbau der verschachtelten Struktur des Inhaltsverzeichnisses, bei der Knoten mit tieferer Ebene zu Kindern von Knoten mit höherer Ebene werden.

Es ist erwähnenswert, dass für das ordnungsgemäße Funktionieren dieser Funktion das Inhaltsverzeichnis eine gültige Struktur haben sollte, z.B. sollten keine Sprünge von Knotentiefe 2 direkt auf Tiefe 4 vorhanden sein.

Nun haben wir alles, was benötigt wird, um die `getHeadings`-Funktion zu implementieren.

```javascript  
import matter from "gray-matter";
import { remark } from "remark";

import { headingTree } from "./headings";

const postsDirectory = path.join(process.cwd(), "posts");  

export async function getHeadings(id) {
  // Holt Markdown-Datei
  // Parsen des Frontmatters mit gray-matter
  
  // Verwenden von remark zur Verarbeitung von Markdown
  const processedContent = await remark() 
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;  
}
```

Damit haben wir das Array der Überschriften aus dem Dokument zusammen mit ihren Datenattributen. Die Struktur des Arrays ist:

```javascript
[
  {
    value: "Überschrift 1",
    depth: 2,
    data: { hProperties: { id: "heading-1"} },
    children: [
      // verschachtelte Überschriften
    ]
  }
] 
```

## Rendering des Inhaltsverzeichnisses

Nun, da wir die Überschriftendaten haben, können wir sie verwenden, um das Inhaltsverzeichnis zu rendern. Zuerst werden wir eine `TableOfContents`-Komponente erstellen, die den Wrapper für die Rendering-Logik des Inhaltsverzeichnisses darstellt.

```jsx
"use client";  

export const TableOfContents = ({ nodes }) => {
  if (!nodes?.length) {
    return null;
  }

  return ( 
    <div className={"toc"}>
      <h3 className={"secondary-text"}>Inhaltsverzeichnis</h3>
      {renderNodes(nodes)} 
    </div>
  );
};
```

Beachten Sie, dass Sie die `"use client"`-Direktive benötigen, um diese Komponente als Client-Komponente zu kennzeichnen, wenn Sie das `app`-Verzeichnis von Next.js verwenden.

Das eigentliche Rendering wird von der `renderNodes`-Funktion behandelt. Da die Rendering-Logik rekursiv ist, definieren wir sie in einer separaten Funktion anstatt innerhalb der Komponente.

```jsx 
function renderNodes(nodes) {
  return (
    <ul>
     {nodes.map((node) => (
       <li key={node.data.hProperties.id}>
         <a href={`#${node.data.hProperties.id}`}>{node.value}</a>
         {node.children?.length > 0 && 
           renderNodes(node.children)}
       </li>
     ))}
    </ul>
  );
}
```

Jedes Element im Inhaltsverzeichnis ist ein Link, der über sein `href`-Attribut auf die entsprechende Überschriften-ID verweist.

## Hinzufügen des Smooth-Scroll-Effekts beim Klicken auf den Inhaltsverzeichnis-Link

Das grundlegende Inhaltsverzeichnis ist nun fertig. Auf der Seite, auf der wir den Artikel rendern, können wir die Überschriften erhalten, indem wir `await getHeadings(postId)` aufrufen (oder dies in `getStaticProps` ausführen, wenn das "pages"-Verzeichnis verwendet wird) und die Daten an das TableOfContents-Komponente übergeben. Wenn wir auf Inhaltsverzeichnis-Links auf der Artikelseite klicken, sollte die Navigation zum entsprechenden Teil der Seite erfolgen. Anstatt jedoch abrupt zu springen, können wir sanftes Scrollen aktivieren. Als zusätzliche Verbesserung können wir die Schriftgröße der Unterlinks basierend auf ihrer Tiefe allmählich verringern.

Um dies zu erreichen, werden wir eine `TOCLink`-Komponente einführen, die für sanftes Scrollen und das Stylen einzelner Links verantwortlich ist, und sie dann in `renderNodes` verwenden.

```jsx
function renderNodes(nodes) {
  return ( 
    <ul>
     {nodes.map((node) => (
       <li key={node.data.hProperties.id}>
         <TOCLink node={node} />
         {node.children?.length > 0 && 
           renderNodes(node.children)}
       </li>
     ))}
    </ul>
  ); 
}
 
const TOCLink = ({ node }) => {

  // Implementierung des sanften Scrollens

  // Klassen für die Schriftgröße basierend auf der Tiefe
};
```

Um sanft zu einem bestimmten Element auf der Seite zu scrollen, lokalisieren wir zuerst das Element anhand seiner ID und verwenden dann die Methode `scrollIntoView` mit der Option `behavior: "smooth"`. Siehe MDN für weitere Informationen zu dieser Methode. Es hat eine breite Browserunterstützung, aber die `smooth`-Option ist möglicherweise nicht mit einigen älteren Browsern kompatibel. Mit diesem Ansatz erzeugt das Klicken auf Inhaltsverzeichnis-Links nun eine schöne Bildlaufanimation anstelle des früheren abrupten Übergangs.

Wenn Sie einen Offset beim Scrollen zu Überschriftenelementen hinzufügen müssen (z. B. wenn die Seite eine feste Navbar hat), können Sie die CSS-Eigenschaft `scroll-margin-top` auf Überschriftenelemente anwenden.

Zusätzlich können wir `TailwindCSS` und seine `text`-Hilfsklassen nutzen, um die Schriftgröße der Inhaltsverzeichnis-Links basierend auf der Tiefe allmählich zu verringern.

## Hervorheben aktiver Links

Für eine verbesserte Navigation mit dem Inhaltsverzeichnis ist eine abschließende Note, Inhaltsverzeichnis-Links hervorzuheben, wenn der entsprechende Titel auf der Seite angezeigt wird.

Um die Sichtbarkeit von Elementen auf der Seite zu erkennen, nutzen wir die `Intersection Observer API`, die eine gute Browserunterstützung bietet, aber einige Einschränkungen hat. Zusätzlich werden wir diese Funktionalität in einen benutzerdefinierten Hook verschieben, der einen Booleschen Wert zurückgibt, der angibt, ob der Link hervorgehoben ist, und einen Rückruf bereitstellt, um den Hervorhebungszustand manuell festzulegen. Dieser Hook wird in der `TOCLink`-Komponente verwendet.

```jsx
import { useEffect, useRef, useState } from "react";
 
function useHighlighted(id) {

  // Implementierungsdetails

  return [highlighted, setHighlighted];  
}
 
const TOCLink = ({ node }) => {

  const [highlighted, setHighlighted] = useHighlighted(id);

  // Andere Implementierungsdetails
};
```

In diesem Hook dient die Funktion `handleObserver` als Rückruf für den `Intersection Observer`, der Sichtbarkeitsänderungen der beobachteten Elemente behandelt und ein Array von Einträgen als Parameter verwendet.

Die `handleObserver`-Funktion durchläuft Einträge, einschließlich h2-, h3- und h4-Elemente, überprüft, ob `isIntersecting` `true` ist - was anzeigt, dass das Element im Viewport sichtbar ist - und aktualisiert dann den aktiven Abschnitt im Inhaltsverzeichnis über `setActiveId`. Wenn ein Link geklickt wird, wird er über den `setHighlighted`-Rückruf hervorgehoben.

Zusätzlich speichern wir eine neue Instanz des `Intersection Observer` in einem `ref`, um ihre Identität über die Rendern von Komponenten hinweg zu erhalten.

Durch Scrollen der Seite können Sie den Effekt dieses Vorgangs auf dieser Seite sehen und beobachten, wie sich der aktive Abschnitt im Inhaltsverzeichnis aktualisiert, wenn die Seite die entsprechenden Abschnitte erreicht.

## Fazit

Insgesamt kann die Verwendung von Remark und benutzerdefinierten Plugins zur Erstellung eines Inhaltsverzeichnisses für einen Next.js-Blog viele Vorteile für die Benutzererfahrung und die Barrierefreiheit Ihrer Website bringen. Durch Remark, diesen leistungsfähigen Markdown-Prozessor, und seine reiche Auswahl an Plugins ist es einfach, Überschriften aus Markdown-Dateien zu extrahieren und sie in ein interaktives, leicht zu navigierendes Inhaltsverzeichnis umzuwandeln.

Durch die Einführung eines Inhaltsverzeichnisses können Sie die Benutzererfahrung auf Ihren Next.js-Blogs verbessern und es den Lesern erleichtern, die benötigten Informationen zu finden. Durch die Verwendung von Remark zur Erstellung benutzerdefinierter Inhaltsverzeichnis-Plugins können Sie das Inhaltsverzeichnis außerhalb des Inhalts selbst integrieren und so die Verfügbarkeit und Zugänglichkeit des Inhalts weiter erhöhen. Durch die Nutzung von Plugins wie `mdast-util-to-string` und `unist-util-visit` können Überschriften aus Inhalten extrahiert, eindeutige IDs generiert und sie in ein für den Aufbau des Inhaltsverzeichnisses geeignetes Format analysiert werden.

Dieses Tutorial hat diesen Prozess durch die Erstellung eines benutzerdefinierten Inhaltsverzeichnisses mit einer verschachtelten Struktur, sanftem Scrollen und Hervorheben aktiver Links durchlaufen. Die Leser können jetzt schnell zu den Inhalten navigieren, die sie interessieren, was die Gesamtbenutzerfreundlichkeit und den Wert des Blogs erhöht.