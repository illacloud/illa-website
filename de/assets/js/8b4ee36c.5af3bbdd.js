"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3849],{3516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var r=s(1527),i=s(7214);const l={slug:"postgresql-select",title:"PostgreSQL SELECT-Anweisung",description:"Dieser Artikel stellt die grundlegende Form der `SELECT`-Anweisung in `PostgreSQL` sowie die Verwendung von `SELECT`-Anweisungen zum Abfragen von Daten aus Tabellen vor. In `PostgreSQL` wird die `SELECT`-Anweisung verwendet, um Daten aus einer oder mehreren Tabellen abzurufen, und sie ist wahrscheinlich die am h\xe4ufigsten verwendete Anweisung.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp",tags:["postgresql","select"],date:"2024-02-21T10:00"},t=void 0,a={permalink:"/de/blog/postgresql-select",source:"@site/i18n/de/docusaurus-plugin-content-blog/postgresql-select/postgresql-select.md",title:"PostgreSQL SELECT-Anweisung",description:"Dieser Artikel stellt die grundlegende Form der `SELECT`-Anweisung in `PostgreSQL` sowie die Verwendung von `SELECT`-Anweisungen zum Abfragen von Daten aus Tabellen vor. In `PostgreSQL` wird die `SELECT`-Anweisung verwendet, um Daten aus einer oder mehreren Tabellen abzurufen, und sie ist wahrscheinlich die am h\xe4ufigsten verwendete Anweisung.",date:"2024-02-21T10:00:00.000Z",formattedDate:"21. Februar 2024",tags:[{label:"postgresql",permalink:"/de/blog/tags/postgresql"},{label:"select",permalink:"/de/blog/tags/select"}],readingTime:5.585,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"postgresql-select",title:"PostgreSQL SELECT-Anweisung",description:"Dieser Artikel stellt die grundlegende Form der `SELECT`-Anweisung in `PostgreSQL` sowie die Verwendung von `SELECT`-Anweisungen zum Abfragen von Daten aus Tabellen vor. In `PostgreSQL` wird die `SELECT`-Anweisung verwendet, um Daten aus einer oder mehreren Tabellen abzurufen, und sie ist wahrscheinlich die am h\xe4ufigsten verwendete Anweisung.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp",tags:["postgresql","select"],date:"2024-02-21T10:00"},unlisted:!1,prevItem:{title:"Verwendung von Remark zur Erstellung eines interaktiven Inhaltsverzeichnisses in einem Next.js-Blog",permalink:"/de/blog/react-markdown"},nextItem:{title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",permalink:"/de/blog/postgresql-isnull"},relatedPosts:[{title:"Wie man Tabellen in PostgreSQL auflistet",description:"Dieser Artikel stellt zwei Methoden vor, um Tabellen in einer PostgreSQL-Datenbank aufzulisten. PostgreSQL bietet zwei M\xf6glichkeiten, alle Tabellen in einer Datenbank aufzulisten.",permalink:"/de/blog/list-tables-in-postgresql",formattedDate:"4. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.915,date:"2024-01-04T10:00:00.000Z"},{title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"Dieser Artikel erl\xe4utert die Verwendung des `IS NULL`-Operators in PostgreSQL, um zu \xfcberpr\xfcfen, ob ein Wert `NULL` ist. PostgreSQL `IS NULL` ist ein boolescher Operator, der pr\xfcft, ob ein Wert `NULL` ist. Ein `NULL`-Wert ist ein spezieller Wert, der nichts anzeigt. Es ist weder ein leerer String noch falsch.",permalink:"/de/blog/postgresql-isnull",formattedDate:"4. Februar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.215,date:"2024-02-04T11:00:00.000Z"},{title:"Verwendung von Remark zur Erstellung eines interaktiven Inhaltsverzeichnisses in einem Next.js-Blog",description:"Ein Inhaltsverzeichnis hat zahlreiche Vorteile und ist eine wertvolle Erg\xe4nzung f\xfcr Websites, insbesondere Blogs. Ein organisiertes und leicht navigierbares Inhaltsverzeichnis verbessert die Benutzererfahrung erheblich und vereinfacht den Prozess f\xfcr Leser, die ben\xf6tigten Informationen zu finden. Durch Hinzuf\xfcgen eines Inhaltsverzeichnisses bieten Sie den Lesern nicht nur eine \xfcbersichtliche Navigation, sondern erh\xf6hen auch die Gesamtzug\xe4nglichkeit und Benutzerfreundlichkeit des Inhalts.",permalink:"/de/blog/react-markdown",formattedDate:"26. Februar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:9.62,date:"2024-02-26T10:00:00.000Z"}],authorPosts:[]},d={authorsImageUrls:[void 0]},o=[{value:"PostgreSQL SELECT-Syntax",id:"postgresql-select-syntax",level:2},{value:"PostgreSQL SELECT-Beispiele",id:"postgresql-select-beispiele",level:2},{value:"Abfragen einer Spalte mit PostgreSQL SELECT",id:"abfragen-einer-spalte-mit-postgresql-select",level:3},{value:"Abfragen mehrerer Spalten mit PostgreSQL SELECT",id:"abfragen-mehrerer-spalten-mit-postgresql-select",level:3},{value:"Abfragen aller Spalten aus einer Tabelle mit PostgreSQL SELECT",id:"abfragen-aller-spalten-aus-einer-tabelle-mit-postgresql-select",level:3},{value:"Abfrage mit Ausdr\xfccken in PostgreSQL SELECT",id:"abfrage-mit-ausdr\xfccken-in-postgresql-select",level:3},{value:"Berechnen von Ausdr\xfccken mit PostgreSQL SELECT",id:"berechnen-von-ausdr\xfccken-mit-postgresql-select",level:3},{value:"Fazit",id:"fazit",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Dieser Artikel stellt die grundlegende Form der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung in ",(0,r.jsx)(n.code,{children:"PostgreSQL"})," sowie die Verwendung von ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisungen zum Abfragen von Daten aus Tabellen vor."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"PostgreSQL"})," wird die ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung verwendet, um Daten aus einer oder mehreren Tabellen abzurufen, und sie ist wahrscheinlich die am h\xe4ufigsten verwendete Anweisung."]}),"\n",(0,r.jsx)(n.h2,{id:"postgresql-select-syntax",children:"PostgreSQL SELECT-Syntax"}),"\n",(0,r.jsxs)(n.p,{children:["Beginnen wir mit der grundlegenden Form einer ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung zum Abrufen von Daten aus einer einzelnen Tabelle."]}),"\n",(0,r.jsxs)(n.p,{children:["Die Syntax einer ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung ist wie folgt:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    expr_list\nFROM\n    table_name  \n[other_clauses];\n"})}),"\n",(0,r.jsx)(n.p,{children:"In dieser Syntax:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SELECT"})," und ",(0,r.jsx)(n.code,{children:"FROM"})," sind Schl\xfcsselw\xf6rter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expr_list"})," ist eine Liste von Spalten oder Ausdr\xfccken, die ausgew\xe4hlt werden sollen. Mehrere Spalten oder Ausdr\xfccke m\xfcssen durch Kommas getrennt werden."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"table_name"})," ist die Daten-Tabelle, aus der abgefragt werden soll."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FROM table_name"})," ist optional. Sie k\xf6nnen die ",(0,r.jsx)(n.code,{children:"FROM"}),"-Klausel weglassen, wenn Sie keine Zeilen aus einer Tabelle abfragen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"other_clauses"})," sind Klauseln, die von der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung unterst\xfctzt werden. Die ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung unterst\xfctzt viele Klauseln, einschlie\xdflich:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verwenden des ",(0,r.jsx)(n.code,{children:"DISTINCT"}),"-Operators, um unterschiedliche Zeilen auszuw\xe4hlen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden der ",(0,r.jsx)(n.code,{children:"ORDER BY"}),"-Klausel zum Sortieren von Zeilen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden der ",(0,r.jsx)(n.code,{children:"WHERE"}),"-Klausel zum Filtern von Zeilen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden der ",(0,r.jsx)(n.code,{children:"LIMIT"}),"- oder ",(0,r.jsx)(n.code,{children:"FETCH"}),"-Klausel, um eine Teilmenge von Zeilen aus der Tabelle auszuw\xe4hlen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden der ",(0,r.jsx)(n.code,{children:"GROUP BY"}),"-Klausel zum Gruppieren von Zeilen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden der ",(0,r.jsx)(n.code,{children:"HAVING"}),"-Klausel zum Filtern von Gruppen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden von Joins wie ",(0,r.jsx)(n.code,{children:"INNER JOIN"}),", ",(0,r.jsx)(n.code,{children:"LEFT JOIN"}),", ",(0,r.jsx)(n.code,{children:"FULL OUTER JOIN"}),", ",(0,r.jsx)(n.code,{children:"CROSS JOIN"})," zum Verkn\xfcpfen mit anderen Tabellen."]}),"\n",(0,r.jsxs)(n.li,{children:["Verwenden von ",(0,r.jsx)(n.code,{children:"UNION"}),", ",(0,r.jsx)(n.code,{children:"INTERSECT"})," und ",(0,r.jsx)(n.code,{children:"EXCEPT"})," zum Durchf\xfchren von Mengenoperationen."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"SQL-Schl\xfcsselw\xf6rter sind nicht gro\xdf-/kleinschreibungsabh\xe4ngig. Es ist jedoch eine gute Codierungspraxis, SQL-Schl\xfcsselw\xf6rter in Gro\xdfbuchstaben zu schreiben, um die Lesbarkeit des SQL-Codes zu verbessern."}),"\n",(0,r.jsxs)(n.p,{children:["In diesem Tutorial konzentrieren wir uns auf die Grundlagen der Verwendung der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung. Die Verwendung anderer verwandter Klauseln wird in nachfolgenden Tutorials behandelt."]}),"\n",(0,r.jsx)(n.h2,{id:"postgresql-select-beispiele",children:"PostgreSQL SELECT-Beispiele"}),"\n",(0,r.jsxs)(n.p,{children:["Schauen wir uns einige Beispiele f\xfcr die Verwendung von PostgreSQL ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisungen an."]}),"\n",(0,r.jsxs)(n.p,{children:["Wir verwenden die ",(0,r.jsx)(n.code,{children:"customer"}),"-Tabelle aus der ",(0,r.jsx)(n.code,{children:"PostgreSQL Sakila"}),"-Beispieldatenbank f\xfcr die Demo."]}),"\n",(0,r.jsx)(n.h3,{id:"abfragen-einer-spalte-mit-postgresql-select",children:"Abfragen einer Spalte mit PostgreSQL SELECT"}),"\n",(0,r.jsxs)(n.p,{children:["Die folgende ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung sucht alle Vornamen von Kunden aus der ",(0,r.jsx)(n.code,{children:"customer"}),"-Tabelle:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT first_name FROM customer;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein Teil der Ausgabe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"first_name\n------------\nMARY\nPATRICIA   \nLINDA\nBARBARA\nELIZABETH\nJENNIFER\nMARIA\nSUSAN\nMARGARET\nDOROTHY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Beachten Sie, dass wir am Ende der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung ein Semikolon (;) hinzugef\xfcgt haben. Das Semikolon ist kein Teil der SQL-Anweisung. Es wird verwendet, um PostgreSQL das Ende der SQL-Anweisung zu signalisieren. Semikola werden auch verwendet, um zwei SQL-Anweisungen zu trennen."]}),"\n",(0,r.jsx)(n.h3,{id:"abfragen-mehrerer-spalten-mit-postgresql-select",children:"Abfragen mehrerer Spalten mit PostgreSQL SELECT"}),"\n",(0,r.jsxs)(n.p,{children:["Wenn Sie den Vornamen, Nachnamen und die E-Mail des Kunden wissen m\xf6chten, k\xf6nnen Sie diese Spaltennamen in der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Klausel angeben, wie in der folgenden Abfrage gezeigt:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    first_name,\n    last_name, \n    email\nFROM\n    customer;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein Teil der Ausgabe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"first_name | last_name |                email                \n------------+-----------+-------------------------------------\nMARY       | SMITH     | MARY.SMITH@sakilacustomer.org\nPATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org\nLINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org\nBARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org\nELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org\nJENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org\nMARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org\nSUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org\nMARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org\nDOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org\n"})}),"\n",(0,r.jsx)(n.h3,{id:"abfragen-aller-spalten-aus-einer-tabelle-mit-postgresql-select",children:"Abfragen aller Spalten aus einer Tabelle mit PostgreSQL SELECT"}),"\n",(0,r.jsxs)(n.p,{children:["Wenn Sie mit der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung alle Spalten aus der ",(0,r.jsx)(n.code,{children:"customer"}),"-Tabelle abrufen m\xf6chten, verwenden Sie die folgende Anweisung:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM customer;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein Teil der Ausgabe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" customer_id | store_id | first_name | last_name |                email                 | address_id | activebool | create_date |     last_update     | active\n-------------+----------+------------+-----------+-------------------------------------+------------+------------+-------------+---------------------+--------\n           1 |        1 | MARY       | SMITH     | MARY.SMITH@sakilacustomer.org        |          5 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           2 |        1 | PATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org |          6 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           3 |        1 | LINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org   |          7 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           4 |        2 | BARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org    |          8 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           5 |        1 | ELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  |          9 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           6 |        2 | JENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org   |         10 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           7 |        1 | MARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org     |         11 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           8 |        2 | SUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org     |         12 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           9 |        2 | MARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org   |         13 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n          10 |        1 | DOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org   |         14 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In diesem Beispiel haben wir den Stern (",(0,r.jsxs)(n.em,{children:[") in der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Klausel verwendet, was eine Abk\xfcrzung f\xfcr alle Spalten ist. Der Stern ("]}),") erm\xf6glicht es uns, weniger einzugeben, ohne alle Spaltennamen in der ",(0,r.jsx)(n.code,{children:"customer"}),"-Tabelle auflisten zu m\xfcssen."]}),"\n",(0,r.jsxs)(n.p,{children:["Die Verwendung des Sterns (*) in ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisungen ist jedoch keine gute Praxis aus folgenden Gr\xfcnden:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Datenbankperformance. Angenommen, Sie haben eine Tabelle mit vielen Spalten und gro\xdfen Datenmengen. Eine ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung mit der Sternchen-Abk\xfcrzung (*) w\xe4hlt Daten aus allen Spalten der Tabelle aus, was f\xfcr die Anwendung m\xf6glicherweise nicht erforderlich ist."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Anwendungsperformance. Das Abrufen unn\xf6tiger Daten aus der Datenbank erh\xf6ht den Datenverkehr zwischen dem Datenbankserver und dem Anwendungsserver. Daher kann die Reaktionszeit Ihrer Anwendung langsamer sein und die Skalierbarkeit geringer."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Aus diesen Gr\xfcnden ist es am besten, Spaltennamen in der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Klausel explizit anzugeben, um nur die ben\xf6tigten Daten aus der Datenbank abzurufen."]}),"\n",(0,r.jsx)(n.p,{children:"Sie sollten die Sternchen-Abk\xfcrzung (*) nur f\xfcr Ad-hoc-Abfragen verwenden, die Datenbankdaten \xfcberpr\xfcfen."}),"\n",(0,r.jsx)(n.h3,{id:"abfrage-mit-ausdr\xfccken-in-postgresql-select",children:"Abfrage mit Ausdr\xfccken in PostgreSQL SELECT"}),"\n",(0,r.jsxs)(n.p,{children:["Zus\xe4tzlich zu Spaltennamen k\xf6nnen Sie auch Ausdr\xfccke in der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung verwenden. Das folgende Beispiel verwendet eine ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung, um den vollst\xe4ndigen Namen und die E-Mail aller Kunden zur\xfcckzugeben:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    first_name || ' ' || last_name,\n    email\nFROM\n    customer;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Hier ist ein Teil der Ausgabe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"     ?column?      |                email                 \n-------------------+-------------------------------------\n MARY SMITH        | MARY.SMITH@sakilacustomer.org\n PATRICIA JOHNSON  | PATRICIA.JOHNSON@sakilacustomer.org\n LINDA WILLIAMS    | LINDA.WILLIAMS@sakilacustomer.org\n BARBARA JONES     | BARBARA.JONES@sakilacustomer.org \n ELIZABETH BROWN   | ELIZABETH.BROWN@sakilacustomer.org\n JENNIFER DAVIS    | JENNIFER.DAVIS@sakilacustomer.org\n MARIA MILLER      | MARIA.MILLER@sakilacustomer.org\n SUSAN WILSON      | SUSAN.WILSON@sakilacustomer.org\n MARGARET MOORE    | MARGARET.MOORE@sakilacustomer.org\n DOROTHY TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org\n"})}),"\n",(0,r.jsx)(n.p,{children:"In diesem Beispiel haben wir den Vornamen, Leerzeichen und Nachnamen jedes Kunden mit dem String-Verkettungsoperator || konkateniert."}),"\n",(0,r.jsx)(n.h3,{id:"berechnen-von-ausdr\xfccken-mit-postgresql-select",children:"Berechnen von Ausdr\xfccken mit PostgreSQL SELECT"}),"\n",(0,r.jsxs)(n.p,{children:["Wenn Sie nur das Ergebnis eines Ausdrucks ben\xf6tigen, k\xf6nnen Sie die ",(0,r.jsx)(n.code,{children:"FROM"}),"-Klausel in der ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung weglassen. Die folgende ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisung wird verwendet, um das Ergebnis von ",(0,r.jsx)(n.code,{children:"5 * 3"})," zu berechnen:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT 5 * 3; \n"})}),"\n",(0,r.jsx)(n.p,{children:"Die Ausgabe lautet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"?column?\n----------\n       15\n"})}),"\n",(0,r.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,r.jsxs)(n.p,{children:["In diesem Tutorial haben Sie gelernt, wie Sie die grundlegende Form von PostgreSQL ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisungen verwenden, um Daten aus einer einzelnen Tabelle abzufragen. Sie k\xf6nnen die ",(0,r.jsx)(n.code,{children:"FROM"}),"-Klausel in ",(0,r.jsx)(n.code,{children:"SELECT"}),"-Anweisungen weglassen, wenn Sie keine Daten aus einer Tabelle abfragen m\xfcssen."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7214:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(959);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);