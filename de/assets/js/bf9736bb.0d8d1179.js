"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[2989],{3933:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(1527),t=r(7214);const s={slug:"web-worker-tutorial",title:"Bester Web Worker Leitfaden",description:"Web Worker ist eine JavaScript-API, die es Ihnen erm\xf6glicht, JavaScript im Hintergrund auszuf\xfchren. Sie ist dazu konzipiert, komplexe Berechnungen auszuf\xfchren, ohne den Hauptthread zu blockieren.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},a=void 0,o={permalink:"/illa-website/de/blog/web-worker-tutorial",source:"@site/i18n/de/docusaurus-plugin-content-blog/web-worker-tutorial/web-worker-tutorial.md",title:"Bester Web Worker Leitfaden",description:"Web Worker ist eine JavaScript-API, die es Ihnen erm\xf6glicht, JavaScript im Hintergrund auszuf\xfchren. Sie ist dazu konzipiert, komplexe Berechnungen auszuf\xfchren, ohne den Hauptthread zu blockieren.",date:"2024-01-29T10:00:00.000Z",formattedDate:"29. Januar 2024",tags:[{label:"javascript",permalink:"/illa-website/de/blog/tags/javascript"},{label:"webworker",permalink:"/illa-website/de/blog/tags/webworker"}],readingTime:7.26,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"web-worker-tutorial",title:"Bester Web Worker Leitfaden",description:"Web Worker ist eine JavaScript-API, die es Ihnen erm\xf6glicht, JavaScript im Hintergrund auszuf\xfchren. Sie ist dazu konzipiert, komplexe Berechnungen auszuf\xfchren, ohne den Hauptthread zu blockieren.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},unlisted:!1,prevItem:{title:"Most Popular 5 React Component Libraries in 2024",permalink:"/illa-website/de/blog/react-component-library"},nextItem:{title:"Die n\xfctzlichsten Typscript-Hauptmerkmale",permalink:"/illa-website/de/blog/typescript-most-practical-features-compilation"},relatedPosts:[{title:"Beste Open-Source Low-Code Plattform zur Erstellung interner Tools",description:"Open-Source-Tools sind h\xe4ufig, aber es ist selten, eines mit 10.000 Sternen zu sehen.",permalink:"/illa-website/de/blog/internal-tool",formattedDate:"5. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.31,date:"2024-01-05T10:00:00.000Z"},{title:"Elegante Verwendung von nvm zur Node.js-Verwaltung auf Mac im Jahr 2024",description:'Node.js, als Grundlage f\xfcr Frontend-F\xe4higkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit".',permalink:"/illa-website/de/blog/nvm-verwenden-2024",formattedDate:"3. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.995,date:"2024-01-03T10:00:00.000Z"},{title:"Das Jahr 2024 ist da, sollte ich Shadcn UI w\xe4hlen?",description:"Das Jahr 2024 ist angebrochen, und das \xd6kosystem der React-Komponentenbibliotheken bleibt lebhaft.",permalink:"/illa-website/de/blog/shadcn-ui-2024",formattedDate:"3. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.96,date:"2024-01-03T10:00:00.000Z"}],authorPosts:[]},d={authorsImageUrls:[void 0]},l=[{value:"Was ist Web Worker",id:"was-ist-web-worker",level:2},{value:"Die Einschr\xe4nkungen von Web Workern",id:"die-einschr\xe4nkungen-von-web-workern",level:2},{value:"Die Nutzung von Web Workern",id:"die-nutzung-von-web-workern",level:2},{value:"Kommunikation",id:"kommunikation",level:3},{value:"Beendigung",id:"beendigung",level:3},{value:"Fortgeschritten: Kommunikation auf Basis von Promises",id:"fortgeschritten-kommunikation-auf-basis-von-promises",level:3},{value:"Fazit",id:"fazit",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Web Worker ist eine JavaScript-API, die es Ihnen erm\xf6glicht, JavaScript im Hintergrund auszuf\xfchren. Sie ist dazu konzipiert, komplexe Berechnungen auszuf\xfchren, ohne den Hauptthread zu blockieren. Dies ist eine sehr n\xfctzliche Funktion f\xfcr Webentwickler. Jedoch wird sie nicht weit verbreitet eingesetzt. In diesem Artikel zeige ich Ihnen, wie man Web Worker verwendet."}),"\n",(0,i.jsx)(n.h2,{id:"was-ist-web-worker",children:"Was ist Web Worker"}),"\n",(0,i.jsx)(n.p,{children:"Wie allgemein bekannt ist, ist eine der Schl\xfcsseleigenschaften der JavaScript-Sprache ihre Ein-Thread-Natur, was bedeutet, dass sie jeweils nur eine Aufgabe synchron verarbeiten kann. Dies ist auch ein wesentlicher Kritikpunkt von Backend-Entwicklern f\xfcr das Aufkommen von Node.js, das aus dieser Sprache abgeleitet ist."}),"\n",(0,i.jsx)(n.p,{children:"Jedoch wurde JavaScript urspr\xfcnglich absichtlich als Ein-Thread-Sprache konzipiert, haupts\xe4chlich aufgrund des damaligen Einsatzszenarios."}),"\n",(0,i.jsx)(n.p,{children:"Der urspr\xfcngliche Zweck von JavaScript war es, die Interaktion zwischen der Webseite und dem Nutzer zu erleichtern, indem DOM- oder BOM-Elemente manipuliert werden. W\xfcrden in diesem Kontext mehrere Threads verwendet, um Effizienz zu verfolgen, w\xfcrde dies zu Problemen wie Ressourcenkonflikten und Datensynchronisation f\xfchren. Daher war es notwendig, zu spezifizieren, dass nur ein Thread zu einem bestimmten Zeitpunkt direkt Seitenlemente manipulieren konnte, um Systemstabilit\xe4t und Sicherheit zu gew\xe4hrleisten."}),"\n",(0,i.jsx)(n.p,{children:"Trotzdem ist JavaScript nicht auf lineare Aufgabenverarbeitung beschr\xe4nkt. JavaScript verf\xfcgt \xfcber Nachrichtenwarteschlangen und einen Event-Loop-Mechanismus, der durch asynchrone Nachrichtenverarbeitung Konkurrenz erm\xf6glicht. Bei der Verarbeitung von Transaktionen mit hoher E/A-Konkurrenz ist die Leistung ausgezeichnet, da die manuelle Erstellung und Zerst\xf6rung von Threads und die Belegung zus\xe4tzlichen Thread-Management-Speichers entf\xe4llt. Folglich zeigt Node.js als Erkunder von JavaScript auf der Serverseite erhebliche Vorteile bei der Handhabung von Netzwerkanfragen mit hoher Konkurrenz."}),"\n",(0,i.jsx)(n.p,{children:"Obwohl JavaScript die Leistungsprobleme im Zusammenhang mit hoher E/A mit seinen asynchronen Mechanismen effektiv adressiert, bleibt die grundlegende Natur der Ein-Thread-Ausf\xfchrung unver\xe4ndert. Der Nachteil wird deutlich, wenn es um die Handhabung von CPU-intensiven Aufgaben geht, da es die Rechenressourcen moderner Multi-Core-, Multi-Thread-Maschinen nicht vollst\xe4ndig nutzen kann."}),"\n",(0,i.jsx)(n.p,{children:"In modernen gro\xdf angelegten Frontend-Projekten, mit zunehmender Codekomplexit\xe4t, werden auch lokale rechenintensive Aufgaben anspruchsvoller. Das Ausf\xfchren von JavaScript-Projekten in einem einzigen Thread f\xfchrt unweigerlich dazu, dass die Anwendung mit Berechnungen besch\xe4ftigt ist und die h\xe4ufigen Benutzerinteraktionen vernachl\xe4ssigt, was zu suboptimalen Benutzererfahrungen f\xfchrt. In schwerwiegenderen F\xe4llen kann es bei zu vielen rechenintensiven Aufgaben dazu f\xfchren, dass die Webseite aufgrund von Ressourcens\xe4ttigung nicht mehr reagiert. Daher wurde die Notwendigkeit einer lokalen Mehr-Thread-Computing-F\xe4higkeit in Webprojekten imperativ, was zur Einf\xfchrung von Web Workern f\xfchrte."}),"\n",(0,i.jsx)(n.p,{children:"Web Worker wurden als Standard in HTML5 eingef\xfchrt und sind wie folgt offiziell definiert:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Web Worker erm\xf6glichen es, eine Skriptoperation in einem Hintergrund-Thread getrennt vom Hauptausf\xfchrungsthread einer Webanwendung auszuf\xfchren."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Es erm\xf6glicht JavaScript-Skripten, mehrere Threads zu erstellen, und nutzt so die Multi-Core-Rechenf\xe4higkeiten der CPU voll"}),"\n",(0,i.jsx)(n.p,{children:"aus, ohne den Hauptthread (typischerweise als UI-Rendering-Thread bezeichnet) zu blockieren."}),"\n",(0,i.jsx)(n.p,{children:"Obwohl Web Worker Teil des HTML5-Standards sind, wurden sie tats\xe4chlich bereits 2009 in einem Entwurf von W3C vorgeschlagen. Daher ist ihre Kompatibilit\xe4t ausgezeichnet und sie werden von nahezu allen gro\xdfen Webbrowsern unterst\xfctzt."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/worker.png",alt:"web_worker"})}),"\n",(0,i.jsx)(n.h2,{id:"die-einschr\xe4nkungen-von-web-workern",children:"Die Einschr\xe4nkungen von Web Workern"}),"\n",(0,i.jsx)(n.p,{children:"Es ist wichtig zu beachten, dass Web Worker die Ein-Thread-Natur von JavaScript grunds\xe4tzlich nicht durchbrechen."}),"\n",(0,i.jsx)(n.p,{children:"Tats\xe4chlich kann der Code innerhalb eines Web Worker-Skripts nicht direkt DOM-Knoten manipulieren und kann die meisten BOM (Browser Object Model) APIs nicht verwenden. Seine globale Umgebung ist DedicatedWorkerGlobalScope anstatt Window. Der Worker operiert in einer Sandbox und f\xfchrt vollst\xe4ndig separate JavaScript-Dateien vom Hauptthread aus."}),"\n",(0,i.jsx)(n.p,{children:"Diese Einschr\xe4nkungen, die den Workern auferlegt wurden, sind so konzipiert, dass sie die zu Beginn dieses Artikels erw\xe4hnten Ressourcenkonfliktprobleme vermeiden. Ihr prim\xe4rer Anwendungsfall besteht darin, als Erg\xe4nzung zum Hauptthread zu fungieren, indem sie hoch CPU-intensive Datenverarbeitungsaufgaben \xfcbernehmen und dann die Ausf\xfchrungsergebnisse durch inter-Thread-Kommunikation an den Hauptthread zur\xfcckgeben. W\xe4hrend dieses Prozesses bleibt der Hauptthread weiterhin auf Benutzerinteraktionen ansprechbar und verhindert effektiv Seitenverz\xf6gerungsprobleme."}),"\n",(0,i.jsx)(n.h2,{id:"die-nutzung-von-web-workern",children:"Die Nutzung von Web Workern"}),"\n",(0,i.jsx)(n.p,{children:"Derzeit ist die Browser-Unterst\xfctzung f\xfcr Web Worker recht umfassend, und Sie k\xf6nnen sie typischerweise verwenden, indem Sie einfach die URI des Worker-Skripts angeben und es instanziieren."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'/* main.js */\n\nconst worker = new Worker("./worker.js")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"kommunikation",children:"Kommunikation"}),"\n",(0,i.jsxs)(n.p,{children:["Die Kommunikation zwischen einem Worker und dem Hauptthread erfordert auf beiden Seiten nur zwei APIs: ",(0,i.jsx)(n.code,{children:"onmessage"})," oder ",(0,i.jsx)(n.code,{children:"addEventListener"})," zum Empfangen von Nachrichten und ",(0,i.jsx)(n.code,{children:"postMessage"})," zum Senden von Nachrichten, was eine nahtlose nachrichtenbasierte Interaktion erm\xf6glicht."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/* main.js */\nconst worker = new Worker(\"./worker.js\");\n\n// Hauptthread sendet eine Nachricht\nworker.postMessage({ data: 'Hauptthread sendet Daten' });\n\n// Hauptthread empf\xe4ngt eine Nachricht\nworker.onmessage = (e) => {\n    const { data } = e;\n    if (!data) return;\n    console.log(data);\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/* worker.js */\n// Worker-Thread empf\xe4ngt eine Nachricht\nself.addEventListener('message', (e) => {\n    const { data } = e;\n    if (!data) return;\n    // Worker-Thread sendet eine Nachricht\n    self.postMessage({data: 'Worker hat Daten erhalten'})\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Anmerkung: Im Worker haben ",(0,i.jsx)(n.code,{children:"this.xx"}),", ",(0,i.jsx)(n.code,{children:"self.xx"})," und die direkte Verwendung von ",(0,i.jsx)(n.code,{children:"xx"})," alle denselben Geltungsbereich, sie beziehen sich auf die globale Variable ",(0,i.jsx)(n.code,{children:"DedicatedWorkerGlobalScope"})," und k\xf6nnen austauschbar verwendet werden."]}),"\n",(0,i.jsx)(n.h3,{id:"beendigung",children:"Beendigung"}),"\n",(0,i.jsx)(n.p,{children:"Es gibt zwei M\xf6glichkeiten, einen Worker zu beenden: Er kann intern beendet werden oder vom Hauptthread angewiesen werden, sich zu beenden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"/* main.js */\nworker.terminate();\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"/* worker.js */\nself.close();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fortgeschritten-kommunikation-auf-basis-von-promises",children:"Fortgeschritten: Kommunikation auf Basis von Promises"}),"\n",(0,i.jsx)(n.p,{children:"Basierend auf dem vorherigen Abschnitt konnten wir bereits die Worker-API nutzen, um die Multithreading-F\xe4higkeiten des Browsers recht einfach zu nutzen. Es fehlen jedoch einige Benutzerfreundlichkeitsfunktionen, die oft in Ingenieursanwendungen ben\xf6tigt werden, wie asynchrone Antworten. Das wollen wir als N\xe4chstes tun."}),"\n",(0,i.jsxs)(n.p,{children:["Zuerst ben\xf6tigen wir eine asynchrone Callback-Sammlung namens ",(0,i.jsx)(n.code,{children:"actionHandlerMap"}),", die dazu dient, Promise-Resolve-Methoden zu speichern, die auf Antworten vom Worker warten. Die Schl\xfcssel k\xf6nnen mit einem eindeutigen Identifikator aus der Kommunikation festgelegt werden (die Einzigartigkeit zu gew\xe4hrleisten, ist ausreichend). Als N\xe4chstes m\xfcssen wir die nativen ",(0,i.jsx)(n.code,{children:"postMessage"}),"- und ",(0,i.jsx)(n.code,{children:"onmessage"}),"-Methoden kapseln."]}),"\n",(0,i.jsxs)(n.p,{children:["In den \xfcber ",(0,i.jsx)(n.code,{children:"postMessage"})," gesendeten Nachrichten f\xfcgen wir eine ",(0,i.jsx)(n.code,{children:"id"})," hinzu und platzieren die aktuelle Promise-Resolve-Methode in ",(0,i.jsx)(n.code,{children:"actionHandlerMap"}),", in Erwartung der Antwort des Workers."]}),"\n",(0,i.jsxs)(n.p,{children:["Bez\xfcglich des ",(0,i.jsx)(n.code,{children:"onmessage"}),"-Listeners, nach Erhalt einer Antwort vom Worker, ordnen wir diese der entsprechenden Promise zu und f\xfchren die ",(0,i.jsx)(n.code,{children:".then()"}),"-Methode aus. Nach Abschluss entfernen wir die Promise-Resolve-Funktion aus der Sammlung."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/* main.js */\nlet fakeId = 0;\nclass MainThreadController {\n    constructor(options) {\n        this.worker = new Worker(options.workerUrl, { name: options.workerName });\n\n        // Sammlung f\xfcr das Warten auf asynchrone Callbacks\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    onmessage(e) {\n        const { id, response } = e.data;\n        if (!this.actionHandlerMap[id]) return;\n\n        // F\xfchre die entsprechende Promise-Resolve aus\n        this.actionHandlerMap[id].call(this, response);\n        delete this.actionHandlerMap[id];\n    }\n\n    postMessage(action) {\n        // In der praktischen Anwendung kann ein Gesch\xe4fts-ID als Schl\xfcssel festgelegt oder generiert werden\n        const id = fakeId++;\n        return new Promise((resolve, reject) => {\n            const message = {\n                id,\n                ...action,\n            };\n            this.worker.postMessage(message);\n            this.actionHandlerMap[id] = (response) => {\n                resolve(response);\n            };\n        });\n    }\n}\n\nconst mainThreadController = new MainThreadController({ workerUrl: './worker.js', workerName: 'test-worker' });\nmainThreadController\n    .postMessage({\n        actionType: 'asyncCalc',\n        payload: { msg: 'sende Nachrichten an Worker', params: 1 },\n    })\n    .then((response) => console.log('Nachricht vom Worker erhalten:', response.msg));\n"})}),"\n",(0,i.jsx)(n.p,{children:"Die Handhabung des Worker-Teils ist viel einfacher. Nach Abschluss der Rechenverarbeitung wird die ID der Anfrage in der Antwort eingef\xfcgt."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/* worker.js */\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // Sammlung f\xfcr das Warten auf asynchrone Callbacks\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        switch (actionType) {\n            case 'print':\n                console.log(payload.msg);\n                self.postMessage({ id, response: { msg: 'Nachricht wurde gedruckt.' } });\n                break;\n\n            case 'asyncCalc':\n                // Simuliere ein asynchrones Verarbeitungsszenario\n                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n                self.postMessage({ id, response: { msg: `Die berechnete Antwort ist ${result}.` } });\n                break;\n\n            default:\n                break;\n        }\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Nat\xfcrlich k\xf6nnen auf der Worker-Seite weitere Verbesserungen vorgenommen werden. Wir haben festgestellt, dass, wenn der Worker mehr Arten von Berechnungen handhaben muss, die Verwendung einer Switch-Anweisung in der ",(0,i.jsx)(n.code,{children:"onmessage"}),"-Funktion lang werden kann. String-basierte \xdcberpr\xfcfungen sind m\xf6glicherweise auch nicht zuverl\xe4ssig genug. Wir k\xf6nnen die Logik innerhalb des Workers vereinfachen, indem wir sie mit einem Strategiemuster kapseln."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/* worker.js */\n// Dies kann in eine separate Datei extrahiert\n\n und dann importiert werden\nconst api = {\n    print(payload) {\n        console.log(payload.msg);\n        return { msg: 'Nachricht wurde gedruckt.' };\n    },\n    async asyncCalc(payload) {\n        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n        return { msg: `Die berechnete Antwort ist ${result}.` };\n    },\n};\n\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // Sammlung f\xfcr das Warten auf asynchrone Callbacks\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        const result = await api[actionType].call(this, payload);\n        self.postMessage({ id, response: result });\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,i.jsx)(n.p,{children:"So wurde ein einfacher und n\xfctzlicher Promise-basierter Worker etabliert."}),"\n",(0,i.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,i.jsx)(n.p,{children:"Zusammenfassend bot dieser Artikel einen kurzen \xdcberblick \xfcber Web Worker, einschlie\xdflich ihrer F\xe4higkeiten und Einschr\xe4nkungen, um den Lesern ein umfassendes Verst\xe4ndnis ihrer Anwendungsf\xe4lle zu vermitteln. Es wurde eine L\xf6sung vorgeschlagen, um die native Worker-API zu kapseln und Promise-basierte Aufrufe zu erm\xf6glichen. Schlie\xdflich wurde eine funktionsreiche, ausgereifte L\xf6sung empfohlen, die derzeit im Team verwendet wird, in der Hoffnung, Frontend-Entwickler zu unterst\xfctzen, die sich in naher Zukunft mit Worker-Verbesserungen besch\xe4ftigen m\xf6chten."})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7214:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var i=r(959);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);