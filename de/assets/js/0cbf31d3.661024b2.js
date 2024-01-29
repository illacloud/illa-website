"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[6975],{2337:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(1527),t=i(7214);const s={slug:"nvm-verwenden-2024",title:"Elegante Verwendung von nvm zur Node.js-Verwaltung auf Mac im Jahr 2024",description:'Node.js, als Grundlage f\xfcr Frontend-F\xe4higkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit".',authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/nvm-use/cover.png",tags:["nvm","nodejs","mac","javascript"],date:"2024-01-03T10:00"},l=void 0,a={permalink:"/illa-website/de/blog/nvm-verwenden-2024",source:"@site/i18n/de/docusaurus-plugin-content-blog/nvm-use/nvm-use.md",title:"Elegante Verwendung von nvm zur Node.js-Verwaltung auf Mac im Jahr 2024",description:'Node.js, als Grundlage f\xfcr Frontend-F\xe4higkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit".',date:"2024-01-03T10:00:00.000Z",formattedDate:"3. Januar 2024",tags:[{label:"nvm",permalink:"/illa-website/de/blog/tags/nvm"},{label:"nodejs",permalink:"/illa-website/de/blog/tags/nodejs"},{label:"mac",permalink:"/illa-website/de/blog/tags/mac"},{label:"javascript",permalink:"/illa-website/de/blog/tags/javascript"}],readingTime:3.995,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"nvm-verwenden-2024",title:"Elegante Verwendung von nvm zur Node.js-Verwaltung auf Mac im Jahr 2024",description:'Node.js, als Grundlage f\xfcr Frontend-F\xe4higkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit".',authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/nvm-use/cover.png",tags:["nvm","nodejs","mac","javascript"],date:"2024-01-03T10:00"},unlisted:!1,prevItem:{title:"2024 ist angekommen, sollte ich MUI w\xe4hlen?",permalink:"/illa-website/de/blog/mui-2024"},nextItem:{title:"Das Jahr 2024 ist da, sollte ich Shadcn UI w\xe4hlen?",permalink:"/illa-website/de/blog/shadcn-ui-2024"},relatedPosts:[{title:"Das Jahr 2024 ist da, sollte ich Shadcn UI w\xe4hlen?",description:"Das Jahr 2024 ist angebrochen, und das \xd6kosystem der React-Komponentenbibliotheken bleibt lebhaft.",permalink:"/illa-website/de/blog/shadcn-ui-2024",formattedDate:"3. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.96,date:"2024-01-03T10:00:00.000Z"},{title:"Bester Web Worker Leitfaden",description:"Web Worker ist eine JavaScript-API, die es Ihnen erm\xf6glicht, JavaScript im Hintergrund auszuf\xfchren. Sie ist dazu konzipiert, komplexe Berechnungen auszuf\xfchren, ohne den Hauptthread zu blockieren.",permalink:"/illa-website/de/blog/web-worker-tutorial",formattedDate:"29. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:7.26,date:"2024-01-29T10:00:00.000Z"},{title:"Beste Open-Source Low-Code Plattform zur Erstellung interner Tools",description:"Open-Source-Tools sind h\xe4ufig, aber es ist selten, eines mit 10.000 Sternen zu sehen.",permalink:"/illa-website/de/blog/internal-tool",formattedDate:"5. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.31,date:"2024-01-05T10:00:00.000Z"}],authorPosts:[]},o={authorsImageUrls:[void 0]},d=[{value:"Empfehlung eines Open-Source-Projekts f\xfcr die Backend-Entwicklung",id:"empfehlung-eines-open-source-projekts-f\xfcr-die-backend-entwicklung",level:2},{value:"Einf\xfchrung in nvm",id:"einf\xfchrung-in-nvm",level:2},{value:"Installation von nvm",id:"installation-von-nvm",level:2},{value:"Verwendung von nvm",id:"verwendung-von-nvm",level:2},{value:"Fazit",id:"fazit",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'Node.js, als Grundlage f\xfcr Frontend-F\xe4higkeiten, ist nicht mehr nur eine "JS-Server-Laufzeit". Zahlreiche Tool-Bibliotheken, lokale Paketverwaltung, Mock-Umgebungen und mehr basieren auf Node.js und machen es damit wirklich zur Infrastruktur der Frontend-Welt.'}),"\n",(0,r.jsx)(n.p,{children:"Das bl\xfchende \xd6kosystem hat es f\xfcr jeden unerl\xe4sslich gemacht, Node.js bei der Erstellung von Frontend-Projekten zu installieren. Mit der langen Geschichte von Produkten wird die Versionierung jedoch zu einem h\xe4ufigen Problem - einige Projekte erfordern neue Versionen, w\xe4hrend andere \xe4ltere ben\xf6tigen. Die Verwaltung mehrerer Versionen von Node.js war eine anhaltende Herausforderung f\xfcr Entwickler."}),"\n",(0,r.jsx)(n.p,{children:"Aktuell adressiert das Open-Source-Tool nvm dieses Problem. Mit einfacher Befehlszeilenverwendung k\xf6nnen Entwickler schnell zwischen verschiedenen Versionen von Node.js wechseln und sich auf die Entwicklung konzentrieren, anstatt Zeit f\xfcr die Konfiguration der Umgebung zu verschwenden."}),"\n",(0,r.jsx)(n.p,{children:"Die vorherrschenden Maschinen f\xfcr die Frontendentwicklung sind immer noch Macbooks. Daher wird in diesem Artikel erkl\xe4rt, wie man nvm auf Mac elegant installiert und verwendet, um Node.js-Versionen effizient zu verwalten."}),"\n",(0,r.jsx)(n.h2,{id:"empfehlung-eines-open-source-projekts-f\xfcr-die-backend-entwicklung",children:"Empfehlung eines Open-Source-Projekts f\xfcr die Backend-Entwicklung"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://illacloud.com",children:"ILLA Cloud"})," ist ein sofort einsatzbereites Low-Code-Tool, das die schnelle Erstellung interner Tools mit einfachem JS erm\xf6glicht, ohne neue Projekte erstellen zu m\xfcssen."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Web- und App-Admin-Panel"}),"\n",(0,r.jsx)(n.li,{children:"Daten-Dashboard"}),"\n",(0,r.jsx)(n.li,{children:"Individuelle B2B-Tools"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Im Vergleich zu Szenarien, die mit Komponentenbibliotheken erstellt wurden, erm\xf6glicht ILLA Cloud eine 10-fach schnellere Erstellung der genannten Tools. Dar\xfcber hinaus unterst\xfctzt ILLA Cloud die Zusammenarbeit mehrerer Benutzer und erleichtert die Teamarbeit zur schnellen Anpassung von Backend-Funktionen."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/dashboard.png",alt:"dashboard"})}),"\n",(0,r.jsx)(n.h2,{id:"einf\xfchrung-in-nvm",children:"Einf\xfchrung in nvm"}),"\n",(0,r.jsxs)(n.p,{children:["\u23ec GitHub-Repository: ",(0,r.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"https://github.com/nvm-sh/nvm"})]}),"\n",(0,r.jsx)(n.p,{children:"\u2b50 GitHub Sterne: 72,4k"}),"\n",(0,r.jsx)(n.p,{children:"\ud83d\udcaa\ud83c\udffc Erstver\xf6ffentlichungsdatum: 22. Dezember 2014"}),"\n",(0,r.jsx)(n.p,{children:'nvm ist ein Open-Source-Projekt, das seit fast 10 Jahren gepflegt wird. Positive Bewertungen haben dieses Projekt robust gehalten und durch kontinuierliche Wartung ist es zu einer perfekten L\xf6sung f\xfcr die "Node.js-Versionverwaltung" geworden.'}),"\n",(0,r.jsx)(n.h2,{id:"installation-von-nvm",children:"Installation von nvm"}),"\n",(0,r.jsxs)(n.p,{children:["Da wir einen Mac f\xfcr die Entwicklung verwenden, empfehle ich dringend, ",(0,r.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," f\xfcr die Paketverwaltung zu verwenden und dann ",(0,r.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," zur Installation von nvm zu verwenden."]}),"\n",(0,r.jsx)(n.p,{children:"Um Homebrew zu installieren, wird empfohlen, das Installations-Skript zu verwenden. Es erfordert minimale Konfiguration und erm\xf6glicht die sofortige Verwendung. Dar\xfcber hinaus erleichtert Homebrew das saubere Deinstallieren von Repositories, wenn dies erforderlich ist."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Mit diesem Befehl wird die neueste Version von Homebrew installiert und behandelt automatisch die Installation der Xcode Command Tools in der macOS-Umgebung."}),"\n",(0,r.jsx)(n.p,{children:"Nat\xfcrlich ist all dies automatisiert. Nach kurzer Wartezeit k\xf6nnen wir mit der Installation von nvm mit dem installierten Homebrew fortfahren."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"> brew install nvm\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nach Best\xe4tigung der Vereinbarung wird nvm vollst\xe4ndig installiert. Wenn Sie sich entscheiden, es nicht mehr zu wollen, k\xf6nnen Sie den folgenden Befehl zum Deinstallieren verwenden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# L\xf6schen Sie nvm, wenn Sie es nicht mehr ben\xf6tigen.\n> brew uninstall nvm\n"})}),"\n",(0,r.jsx)(n.h2,{id:"verwendung-von-nvm",children:"Verwendung von nvm"}),"\n",(0,r.jsx)(n.p,{children:"Sobald nvm installiert ist, sind hier einige h\xe4ufig verwendete Befehle, um Ihnen den Einstieg zu erleichtern. Diese Befehle sollten Ihren t\xe4glichen Anforderungen gerecht werden."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"> nvm list\n"})}),"\n",(0,r.jsx)(n.p,{children:'Der "list"-Befehl zeigt verschiedene g\xe4ngige Node.js-Versionen an. Sie k\xf6nnen Versionen nach Bedarf installieren, und es zeigt auch die aktuell verwendete Node.js-Version auf Ihrem Ger\xe4t an. Es zeigt einige Codenamen an.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-list.png",alt:"nvm_list"})}),"\n",(0,r.jsx)(n.p,{children:'Zum Beispiel ist "lts/gallim" der Versionsname f\xfcr Node.js v16. Um mit diesem Codenamen zu installieren, wird nvm automatisch die neueste Version von v16 installieren. Das ist ziemlich praktisch. Sie k\xf6nnen diesen Befehl auch verwenden, um die aktuell verwendete Version zu \xfcberpr\xfcfen.'}),"\n",(0,r.jsx)(n.p,{children:"Ein anderer Befehl erm\xf6glicht es Ihnen, die aktuelle Node.js-Version zu \xfcberpr\xfcfen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"> node --version\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nach Eingabe dieses Befehls k\xf6nnen Sie \xfcberpr\xfcfen, ob die Node.js-Version erfolgreich gewechselt wurde."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"> nvm install stable\n"})}),"\n",(0,r.jsx)(n.p,{children:'Der zweite Befehl installiert eine bestimmte Node.js-Version; "stable" bezieht sich auf eine bestimmte Versionsnummer. Sie k\xf6nnen auch den Codenamen f\xfcr eine bestimmte Version verwenden. Um "Node.js 18" zu installieren, w\xfcrden Sie "nvm install 18" verwenden. Hier installiere ich die "stable"-Version. nvm wird automatisch die neueste stabile Version ermitteln und f\xfcr mich installieren. Nach erfolgreicher Installation wird es automatisch zur installierten Version wechseln.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/stable-install.png",alt:"stable-install"})}),"\n",(0,r.jsx)(n.p,{children:"Wo es einen Installationsbefehl gibt, gibt es auch einen Deinstallationsbefehl. Verwenden Sie:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"> nvm uninstall stable\n"})}),"\n",(0,r.jsx)(n.p,{children:"Um die entsprechende Version zu l\xf6schen."}),"\n",(0,r.jsxs)(n.p,{children:["![nvm-uninstall](",(0,r.jsx)(n.a,{href:"https://cdn.illacloud.com/illa-website/blog",children:"https://cdn.illacloud.com/illa-website/blog"})]}),"\n",(0,r.jsx)(n.p,{children:"/nvm-use/nvm-uninstall.png)"}),"\n",(0,r.jsx)(n.p,{children:"Nachdem Sie gelernt haben, wie man installiert und deinstalliert, ist der n\xe4chste wichtige Schritt das Wechseln von Versionen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"> nvm use stable\n"})}),"\n",(0,r.jsx)(n.p,{children:'Der "use"-Befehl erm\xf6glicht es Ihnen, schnell zwischen den aktuell verwendeten Node.js-Versionen zu wechseln. Sie k\xf6nnen auch den Codenamen "stable" verwenden. Auf diese Weise k\xf6nnen Sie schnell zwischen Versionen f\xfcr verschiedene Projekte wechseln.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-use.png",alt:"nvm-use"})}),"\n",(0,r.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,r.jsx)(n.p,{children:"Dieser Artikel hat den gesamten Prozess f\xfcr Anf\xe4nger erkl\xe4rt, von der Installation bis zur Verwendung von nvm. Sie k\xf6nnen es schnell ausprobieren und Ihre Node.js-Versionen besser verwalten."}),"\n",(0,r.jsx)(n.p,{children:"Die Verwaltung von Node.js-Versionen ist ein lange diskutiertes Problem, und nvm ist ein ausgezeichnetes Open-Source-Projekt, das dieses Problem effektiv l\xf6st. Nat\xfcrlich ist kein Projekt perfekt. Wenn Sie andere Empfehlungen haben, z\xf6gern Sie nicht, einen Kommentar zu hinterlassen und lassen Sie mehr Menschen von herausragenden Projekten wissen - das ist die Mission von Open-Source-Enthusiasten!"})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7214:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var r=i(959);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);