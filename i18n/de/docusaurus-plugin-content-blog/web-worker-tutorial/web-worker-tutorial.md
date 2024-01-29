---
slug: web-worker-tutorial
title: Bester Web Worker Leitfaden
description: Web Worker ist eine JavaScript-API, die es Ihnen ermöglicht, JavaScript im Hintergrund auszuführen. Sie ist dazu konzipiert, komplexe Berechnungen auszuführen, ohne den Hauptthread zu blockieren.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp
tags: [ javascript, webworker ]
date: 2024-01-29T10:00
---

Web Worker ist eine JavaScript-API, die es Ihnen ermöglicht, JavaScript im Hintergrund auszuführen. Sie ist dazu konzipiert, komplexe Berechnungen auszuführen, ohne den Hauptthread zu blockieren. Dies ist eine sehr nützliche Funktion für Webentwickler. Jedoch wird sie nicht weit verbreitet eingesetzt. In diesem Artikel zeige ich Ihnen, wie man Web Worker verwendet.

## Was ist Web Worker

Wie allgemein bekannt ist, ist eine der Schlüsseleigenschaften der JavaScript-Sprache ihre Ein-Thread-Natur, was bedeutet, dass sie jeweils nur eine Aufgabe synchron verarbeiten kann. Dies ist auch ein wesentlicher Kritikpunkt von Backend-Entwicklern für das Aufkommen von Node.js, das aus dieser Sprache abgeleitet ist.

Jedoch wurde JavaScript ursprünglich absichtlich als Ein-Thread-Sprache konzipiert, hauptsächlich aufgrund des damaligen Einsatzszenarios.

Der ursprüngliche Zweck von JavaScript war es, die Interaktion zwischen der Webseite und dem Nutzer zu erleichtern, indem DOM- oder BOM-Elemente manipuliert werden. Würden in diesem Kontext mehrere Threads verwendet, um Effizienz zu verfolgen, würde dies zu Problemen wie Ressourcenkonflikten und Datensynchronisation führen. Daher war es notwendig, zu spezifizieren, dass nur ein Thread zu einem bestimmten Zeitpunkt direkt Seitenlemente manipulieren konnte, um Systemstabilität und Sicherheit zu gewährleisten.

Trotzdem ist JavaScript nicht auf lineare Aufgabenverarbeitung beschränkt. JavaScript verfügt über Nachrichtenwarteschlangen und einen Event-Loop-Mechanismus, der durch asynchrone Nachrichtenverarbeitung Konkurrenz ermöglicht. Bei der Verarbeitung von Transaktionen mit hoher E/A-Konkurrenz ist die Leistung ausgezeichnet, da die manuelle Erstellung und Zerstörung von Threads und die Belegung zusätzlichen Thread-Management-Speichers entfällt. Folglich zeigt Node.js als Erkunder von JavaScript auf der Serverseite erhebliche Vorteile bei der Handhabung von Netzwerkanfragen mit hoher Konkurrenz.

Obwohl JavaScript die Leistungsprobleme im Zusammenhang mit hoher E/A mit seinen asynchronen Mechanismen effektiv adressiert, bleibt die grundlegende Natur der Ein-Thread-Ausführung unverändert. Der Nachteil wird deutlich, wenn es um die Handhabung von CPU-intensiven Aufgaben geht, da es die Rechenressourcen moderner Multi-Core-, Multi-Thread-Maschinen nicht vollständig nutzen kann.

In modernen groß angelegten Frontend-Projekten, mit zunehmender Codekomplexität, werden auch lokale rechenintensive Aufgaben anspruchsvoller. Das Ausführen von JavaScript-Projekten in einem einzigen Thread führt unweigerlich dazu, dass die Anwendung mit Berechnungen beschäftigt ist und die häufigen Benutzerinteraktionen vernachlässigt, was zu suboptimalen Benutzererfahrungen führt. In schwerwiegenderen Fällen kann es bei zu vielen rechenintensiven Aufgaben dazu führen, dass die Webseite aufgrund von Ressourcensättigung nicht mehr reagiert. Daher wurde die Notwendigkeit einer lokalen Mehr-Thread-Computing-Fähigkeit in Webprojekten imperativ, was zur Einführung von Web Workern führte.

Web Worker wurden als Standard in HTML5 eingeführt und sind wie folgt offiziell definiert:

> Web Worker ermöglichen es, eine Skriptoperation in einem Hintergrund-Thread getrennt vom Hauptausführungsthread einer Webanwendung auszuführen.

Es ermöglicht JavaScript-Skripten, mehrere Threads zu erstellen, und nutzt so die Multi-Core-Rechenfähigkeiten der CPU voll

aus, ohne den Hauptthread (typischerweise als UI-Rendering-Thread bezeichnet) zu blockieren.

Obwohl Web Worker Teil des HTML5-Standards sind, wurden sie tatsächlich bereits 2009 in einem Entwurf von W3C vorgeschlagen. Daher ist ihre Kompatibilität ausgezeichnet und sie werden von nahezu allen großen Webbrowsern unterstützt.

![web_worker](https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/worker.png)

## Die Einschränkungen von Web Workern

Es ist wichtig zu beachten, dass Web Worker die Ein-Thread-Natur von JavaScript grundsätzlich nicht durchbrechen.

Tatsächlich kann der Code innerhalb eines Web Worker-Skripts nicht direkt DOM-Knoten manipulieren und kann die meisten BOM (Browser Object Model) APIs nicht verwenden. Seine globale Umgebung ist DedicatedWorkerGlobalScope anstatt Window. Der Worker operiert in einer Sandbox und führt vollständig separate JavaScript-Dateien vom Hauptthread aus.

Diese Einschränkungen, die den Workern auferlegt wurden, sind so konzipiert, dass sie die zu Beginn dieses Artikels erwähnten Ressourcenkonfliktprobleme vermeiden. Ihr primärer Anwendungsfall besteht darin, als Ergänzung zum Hauptthread zu fungieren, indem sie hoch CPU-intensive Datenverarbeitungsaufgaben übernehmen und dann die Ausführungsergebnisse durch inter-Thread-Kommunikation an den Hauptthread zurückgeben. Während dieses Prozesses bleibt der Hauptthread weiterhin auf Benutzerinteraktionen ansprechbar und verhindert effektiv Seitenverzögerungsprobleme.

## Die Nutzung von Web Workern

Derzeit ist die Browser-Unterstützung für Web Worker recht umfassend, und Sie können sie typischerweise verwenden, indem Sie einfach die URI des Worker-Skripts angeben und es instanziieren.

```javascript
/* main.js */

const worker = new Worker("./worker.js")
```

### Kommunikation

Die Kommunikation zwischen einem Worker und dem Hauptthread erfordert auf beiden Seiten nur zwei APIs: `onmessage` oder `addEventListener` zum Empfangen von Nachrichten und `postMessage` zum Senden von Nachrichten, was eine nahtlose nachrichtenbasierte Interaktion ermöglicht.

```js
/* main.js */
const worker = new Worker("./worker.js");

// Hauptthread sendet eine Nachricht
worker.postMessage({ data: 'Hauptthread sendet Daten' });

// Hauptthread empfängt eine Nachricht
worker.onmessage = (e) => {
    const { data } = e;
    if (!data) return;
    console.log(data);
}
```

```js
/* worker.js */
// Worker-Thread empfängt eine Nachricht
self.addEventListener('message', (e) => {
    const { data } = e;
    if (!data) return;
    // Worker-Thread sendet eine Nachricht
    self.postMessage({data: 'Worker hat Daten erhalten'})
});
```

Anmerkung: Im Worker haben `this.xx`, `self.xx` und die direkte Verwendung von `xx` alle denselben Geltungsbereich, sie beziehen sich auf die globale Variable `DedicatedWorkerGlobalScope` und können austauschbar verwendet werden.

### Beendigung

Es gibt zwei Möglichkeiten, einen Worker zu beenden: Er kann intern beendet werden oder vom Hauptthread angewiesen werden, sich zu beenden.

```javascript
/* main.js */
worker.terminate();
```

```javascript
/* worker.js */
self.close();
```

### Fortgeschritten: Kommunikation auf Basis von Promises

Basierend auf dem vorherigen Abschnitt konnten wir bereits die Worker-API nutzen, um die Multithreading-Fähigkeiten des Browsers recht einfach zu nutzen. Es fehlen jedoch einige Benutzerfreundlichkeitsfunktionen, die oft in Ingenieursanwendungen benötigt werden, wie asynchrone Antworten. Das wollen wir als Nächstes tun.

Zuerst benötigen wir eine asynchrone Callback-Sammlung namens `actionHandlerMap`, die dazu dient, Promise-Resolve-Methoden zu speichern, die auf Antworten vom Worker warten. Die Schlüssel können mit einem eindeutigen Identifikator aus der Kommunikation festgelegt werden (die Einzigartigkeit zu gewährleisten, ist ausreichend). Als Nächstes müssen wir die nativen `postMessage`- und `onmessage`-Methoden kapseln.

In den über `postMessage` gesendeten Nachrichten fügen wir eine `id` hinzu und platzieren die aktuelle Promise-Resolve-Methode in `actionHandlerMap`, in Erwartung der Antwort des Workers.

Bezüglich des `onmessage`-Listeners, nach Erhalt einer Antwort vom Worker, ordnen wir diese der entsprechenden Promise zu und führen die `.then()`-Methode aus. Nach Abschluss entfernen wir die Promise-Resolve-Funktion aus der Sammlung.

```js
/* main.js */
let fakeId = 0;
class MainThreadController {
    constructor(options) {
        this.worker = new Worker(options.workerUrl, { name: options.workerName });

        // Sammlung für das Warten auf asynchrone Callbacks
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    onmessage(e) {
        const { id, response } = e.data;
        if (!this.actionHandlerMap[id]) return;

        // Führe die entsprechende Promise-Resolve aus
        this.actionHandlerMap[id].call(this, response);
        delete this.actionHandlerMap[id];
    }

    postMessage(action) {
        // In der praktischen Anwendung kann ein Geschäfts-ID als Schlüssel festgelegt oder generiert werden
        const id = fakeId++;
        return new Promise((resolve, reject) => {
            const message = {
                id,
                ...action,
            };
            this.worker.postMessage(message);
            this.actionHandlerMap[id] = (response) => {
                resolve(response);
            };
        });
    }
}

const mainThreadController = new MainThreadController({ workerUrl: './worker.js', workerName: 'test-worker' });
mainThreadController
    .postMessage({
        actionType: 'asyncCalc',
        payload: { msg: 'sende Nachrichten an Worker', params: 1 },
    })
    .then((response) => console.log('Nachricht vom Worker erhalten:', response.msg));
```

Die Handhabung des Worker-Teils ist viel einfacher. Nach Abschluss der Rechenverarbeitung wird die ID der Anfrage in der Antwort eingefügt.

```js
/* worker.js */
class WorkerThreadController {
    constructor() {
        this.worker = self;

        // Sammlung für das Warten auf asynchrone Callbacks
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    async onmessage(e) {
        const { id, actionType, payload } = e.data;
        switch (actionType) {
            case 'print':
                console.log(payload.msg);
                self.postMessage({ id, response: { msg: 'Nachricht wurde gedruckt.' } });
                break;

            case 'asyncCalc':
                // Simuliere ein asynchrones Verarbeitungsszenario
                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
                self.postMessage({ id, response: { msg: `Die berechnete Antwort ist ${result}.` } });
                break;

            default:
                break;
        }
    }
}

const workerThreadController = new WorkerThreadController();
```

Natürlich können auf der Worker-Seite weitere Verbesserungen vorgenommen werden. Wir haben festgestellt, dass, wenn der Worker mehr Arten von Berechnungen handhaben muss, die Verwendung einer Switch-Anweisung in der `onmessage`-Funktion lang werden kann. String-basierte Überprüfungen sind möglicherweise auch nicht zuverlässig genug. Wir können die Logik innerhalb des Workers vereinfachen, indem wir sie mit einem Strategiemuster kapseln.

```js
/* worker.js */
// Dies kann in eine separate Datei extrahiert

 und dann importiert werden
const api = {
    print(payload) {
        console.log(payload.msg);
        return { msg: 'Nachricht wurde gedruckt.' };
    },
    async asyncCalc(payload) {
        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
        return { msg: `Die berechnete Antwort ist ${result}.` };
    },
};

class WorkerThreadController {
    constructor() {
        this.worker = self;

        // Sammlung für das Warten auf asynchrone Callbacks
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    async onmessage(e) {
        const { id, actionType, payload } = e.data;
        const result = await api[actionType].call(this, payload);
        self.postMessage({ id, response: result });
    }
}

const workerThreadController = new WorkerThreadController();
```

So wurde ein einfacher und nützlicher Promise-basierter Worker etabliert.

## Fazit

Zusammenfassend bot dieser Artikel einen kurzen Überblick über Web Worker, einschließlich ihrer Fähigkeiten und Einschränkungen, um den Lesern ein umfassendes Verständnis ihrer Anwendungsfälle zu vermitteln. Es wurde eine Lösung vorgeschlagen, um die native Worker-API zu kapseln und Promise-basierte Aufrufe zu ermöglichen. Schließlich wurde eine funktionsreiche, ausgereifte Lösung empfohlen, die derzeit im Team verwendet wird, in der Hoffnung, Frontend-Entwickler zu unterstützen, die sich in naher Zukunft mit Worker-Verbesserungen beschäftigen möchten.