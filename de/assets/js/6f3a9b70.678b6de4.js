"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[7803],{8134:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(1527),t=r(7214);const s={title:"Die n\xfctzlichsten Typscript-Hauptmerkmale",tags:["typescript"],slug:"typescript-most-practical-features-compilation",description:"Die Bedeutung der Typenprogrammierung in Projekten ist offensichtlich. Dieser Artikel fasst einige der h\xe4ufigsten Merkmale von Typescript zusammen, um allen zu helfen, sich mit der Verwendung von Typescript vertraut zu machen.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp",date:"2024-01-25T10:00"},a=void 0,l={permalink:"/illa-website/de/blog/typescript-most-practical-features-compilation",source:"@site/i18n/de/docusaurus-plugin-content-blog/typescript-most-practical-features-compilation/typescript-most-practical-features-compilation.md",title:"Die n\xfctzlichsten Typscript-Hauptmerkmale",description:"Die Bedeutung der Typenprogrammierung in Projekten ist offensichtlich. Dieser Artikel fasst einige der h\xe4ufigsten Merkmale von Typescript zusammen, um allen zu helfen, sich mit der Verwendung von Typescript vertraut zu machen.",date:"2024-01-25T10:00:00.000Z",formattedDate:"25. Januar 2024",tags:[{label:"typescript",permalink:"/illa-website/de/blog/tags/typescript"}],readingTime:10.52,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{title:"Die n\xfctzlichsten Typscript-Hauptmerkmale",tags:["typescript"],slug:"typescript-most-practical-features-compilation",description:"Die Bedeutung der Typenprogrammierung in Projekten ist offensichtlich. Dieser Artikel fasst einige der h\xe4ufigsten Merkmale von Typescript zusammen, um allen zu helfen, sich mit der Verwendung von Typescript vertraut zu machen.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp",date:"2024-01-25T10:00"},unlisted:!1,nextItem:{title:"Best tools for IT Support",permalink:"/illa-website/de/blog/it-support"},relatedPosts:[],authorPosts:[]},d={authorsImageUrls:[void 0]},c=[{value:"Erweiterte Typen",id:"erweiterte-typen",level:2},{value:"Schnitttypen",id:"schnitttypen",level:3},{value:"Union-Typen",id:"union-typen",level:3},{value:"String Literal Typen",id:"string-literal-typen",level:3},{value:"Numerische Literal Typen",id:"numerische-literal-typen",level:3},{value:"Boolean Literal Typen",id:"boolean-literal-typen",level:3},{value:"Template Literal Typen",id:"template-literal-typen",level:3},{value:"Operatoren",id:"operatoren",level:2},{value:"keyof",id:"keyof",level:3},{value:"typeof",id:"typeof",level:3},{value:"in",id:"in",level:3},{value:"T[K]",id:"tk",level:3},{value:"Weitere Operatoren",id:"weitere-operatoren",level:2},{value:"Non-null Assertion Operator",id:"non-null-assertion-operator",level:3},{value:"Optional Chaining Operator",id:"optional-chaining-operator",level:3},{value:"Nullish Coalescing Operator",id:"nullish-coalescing-operator",level:3},{value:"Numeric Separator",id:"numeric-separator",level:3},{value:"Typ-Alias",id:"typ-alias",level:2},{value:"Typ-Assertion",id:"typ-assertion",level:2},{value:"Typ-Guards",id:"typ-guards",level:2},{value:"Generics",id:"generics",level:2},{value:"Einf\xfchrung in Generics",id:"einf\xfchrung-in-generics",level:3},{value:"Benennungskonventionen",id:"benennungskonventionen",level:3},{value:"Generic Interfaces",id:"generic-interfaces",level:3},{value:"Generische Einschr\xe4nkungen (extends-Operator)",id:"generische-einschr\xe4nkungen-extends-operator",level:3},{value:"Standardwerte f\xfcr generische Parameter",id:"standardwerte-f\xfcr-generische-parameter",level:3},{value:"Generische Bedingungen",id:"generische-bedingungen",level:3},{value:"Generische Inferenz (infer-Operator)",id:"generische-inferenz-infer-operator",level:3},{value:"Generische Utility-Typen",id:"generische-utility-typen",level:2},{value:"Abbildungstypen (Mapped Types)",id:"abbildungstypen-mapped-types",level:3},{value:"Partial",id:"partial",level:3},{value:"Required",id:"required",level:3},{value:"Readonly",id:"readonly",level:3},{value:"Pick",id:"pick",level:3},{value:"Record",id:"record",level:3},{value:"ReturnType",id:"returntype",level:3},{value:"Exclude",id:"exclude",level:3},{value:"Extract",id:"extract",level:3},{value:"Omit",id:"omit",level:3},{value:"NonNullable",id:"nonnullable",level:3},{value:"Parameter",id:"parameter",level:3},{value:"Letzte Worte",id:"letzte-worte",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Die Bedeutung der Typenprogrammierung in Projekten ist offensichtlich. Dieser Artikel fasst einige der h\xe4ufigsten Merkmale von Typescript zusammen, um allen zu helfen, sich mit der Verwendung von Typescript vertraut zu machen."}),"\n",(0,i.jsx)(n.h2,{id:"erweiterte-typen",children:"Erweiterte Typen"}),"\n",(0,i.jsx)(n.h3,{id:"schnitttypen",children:"Schnitttypen"}),"\n",(0,i.jsx)(n.p,{children:"Schnitttypen sind die Kombination mehrerer Typen in einen einzigen Typ durch das &-Symbol."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'interface I1 {\n  name: string;\n}\n\ninterface I2 {\n  age: number;\n}\n\ntype T3 = I1 & I2\n\nconst a: T3 = {\n  name: "tj",\n  age: 11,\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"union-typen",children:"Union-Typen"}),"\n",(0,i.jsx)(n.p,{children:"Union-Typen werden mit dem | Symbol dargestellt, was bedeutet, dass ein Wert einer von mehreren Typen sein kann."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a: string | number = 1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"string-literal-typen",children:"String Literal Typen"}),"\n",(0,i.jsx)(n.p,{children:"String Literal Typen verwenden einen String als Typ f\xfcr eine Variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a: 'number' = 'number'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"numerische-literal-typen",children:"Numerische Literal Typen"}),"\n",(0,i.jsx)(n.p,{children:"Numerische Literal Typen verwenden eine Zahl als Typ f\xfcr eine Variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a: 1 = 1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"boolean-literal-typen",children:"Boolean Literal Typen"}),"\n",(0,i.jsx)(n.p,{children:"Boolean Literal Typen verwenden einen Wahrheitswert als Typ f\xfcr eine Variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a: true = true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"template-literal-typen",children:"Template Literal Typen"}),"\n",(0,i.jsx)(n.p,{children:"Template Literal Typen verwenden ES6 Template String Syntax, um Typen zu definieren."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type https = `https://${string}`\nconst a:https = `https://jd.com`\n"})}),"\n",(0,i.jsx)(n.h2,{id:"operatoren",children:"Operatoren"}),"\n",(0,i.jsx)(n.h3,{id:"keyof",children:"keyof"}),"\n",(0,i.jsx)(n.p,{children:"keyof wird verwendet, um alle Schl\xfcssel eines Typs zu erhalten. Der R\xfcckgabewert ist ein Union-Typ."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// const a: 'name' | 'age' = 'name'\nconst a: keyof {\nname: string,\nage: number\n} = 'name'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"typeof",children:"typeof"}),"\n",(0,i.jsx)(n.p,{children:"typeof wird verwendet, um die Struktur eines Objekts oder einer Funktion zu ermitteln."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a2 = {\nname: 'tj',\n}\n\ntype T1 = typeof a2 // {name: string}\n\nfunction fn1(x: number): number {\nreturn x * 10\n}\n\ntype T2 = typeof fn1 // (x: number) => number\n"})}),"\n",(0,i.jsx)(n.h3,{id:"in",children:"in"}),"\n",(0,i.jsx)(n.p,{children:"in wird verwendet, um Union-Typen zu durchlaufen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const obj = {\n  name: "tj",\n  age: 11,\n}\n\ntype T5 = {\n  [P in keyof typeof obj]: any\n}\n\n/*\n{\nname: any,\nage: any\n}\n*/\n'})}),"\n",(0,i.jsx)(n.h3,{id:"tk",children:"T[K]"}),"\n",(0,i.jsx)(n.p,{children:"T[K] wird verwendet, um auf Indizes zuzugreifen und den Union-Typ des entsprechenden Werts zu erhalten."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface I3 {\n  name: string,\n  age: number\n}\ntype T6 = I3[keyof I3] // string | number\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"weitere-operatoren",children:"Weitere Operatoren"}),"\n",(0,i.jsx)(n.h3,{id:"non-null-assertion-operator",children:"Non-null Assertion Operator"}),"\n",(0,i.jsx)(n.p,{children:"Der Non-null Assertion Operator ! wird verwendet, um zu betonen, dass ein Element nicht null oder undefined ist. Es sagt TypeScript, dass die Eigenschaft definitiv zugewiesen wird."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function Demo(): JSX.Element () {\n   const divRef = useRef<HTMLDivElement>()\n   useEffect(() => {\n      divRef.current!.scrollIntoView() // Betont, dass divRef.current nicht null oder undefined ist\n   }, [])\n   return <div ref={divRef}>divDemo</div>\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"optional-chaining-operator",children:"Optional Chaining Operator"}),"\n",(0,i.jsx)(n.p,{children:"Der Optional Chaining Operator ?. wird verwendet, um zu \xfcberpr\xfcfen, ob der linke Ausdruck null oder undefined ist. Ist dies der Fall, stoppt der Ausdruck."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a = b?.a\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nullish-coalescing-operator",children:"Nullish Coalescing Operator"}),"\n",(0,i.jsx)(n.p,{children:"Der Nullish Coalescing Operator ?? wird verwendet, um zu \xfcberpr\xfcfen, ob der linke Ausdruck null oder undefined ist. Ist dies nicht der Fall"}),"\n",(0,i.jsx)(n.p,{children:", wird der rechte Wert zur\xfcckgegeben."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const a = b ?? 10\n"})}),"\n",(0,i.jsx)(n.h3,{id:"numeric-separator",children:"Numeric Separator"}),"\n",(0,i.jsx)(n.p,{children:"Der Numeric Separator _ wird verwendet, um lange Zahlen zu teilen, was das Lesen von Zahlen erleichtert. Bei der Kompilierung wird der _ automatisch entfernt."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const num: number = 1_111_111_111\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typ-alias",children:"Typ-Alias"}),"\n",(0,i.jsx)(n.p,{children:"Ein Typ-Alias wird verwendet, um einem Typ einen neuen Namen zu geben."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Message = string | string[]\nlet greet = (message: Message) => {\n// ...\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typ-assertion",children:"Typ-Assertion"}),"\n",(0,i.jsx)(n.p,{children:"Typ-Assertion bedeutet, dem Browser den genauen Typ zu sagen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Winkelklammer-Syntax\nlet someValue: any = "this is a string";\nlet strLength: number = (<string>someValue).length;\n\n// as-Syntax\nlet someValue: any = "this is a string";\nlet strLength: number = (someValue as string).length;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"typ-guards",children:"Typ-Guards"}),"\n",(0,i.jsx)(n.p,{children:"Typ-Guards sind Ausdr\xfccke, die zur Laufzeit \xfcberpr\xfcfen, um sicherzustellen, dass ein Typ in einem bestimmten Bereich vorliegt."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'interface A {\n  name: string;\n  age: number;\n}\n\ninterface B {\n  sex: string;\n  home: string;\n}\n\nfunction doSomething(person: A | B): void {\n  if (person.name) {\n// Fehler\n// ...\n  }\n}\n\n// Verwendung des in Typ-Guards\nfunction doSomething(person: A | B): void {\n  if ("name" in person) {\n// OK\n// ...\n  }\n}\n\n// Verwendung des typeof Typ-Guards\nfunction A(a: string | number): string | number {\n  if (typeof a === "string") {\n// OK\n    return a + ""\n  }\n  if (typeof a === "number") {\n// OK\n    return a + 2\n  }\n  return ""\n}\n\n// instanceof Typ-Guards\nclass Foo {\n}\n\nclass Bar {\n}\n\nfunction test(input: Foo | Bar) {\n  if (input instanceof Foo) {\n// Hier wird der Typ von input zu Foo \u201everengt\u201c\n  } else {\n// Hier wird der Typ von input zu Bar \u201everengt\u201c\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"generics",children:"Generics"}),"\n",(0,i.jsx)(n.h3,{id:"einf\xfchrung-in-generics",children:"Einf\xfchrung in Generics"}),"\n",(0,i.jsx)(n.p,{children:"Generics sind wie das \xdcbergeben von Argumenten an Typen, um einen allgemeineren Typ zu erhalten, genau wie bei Funktionen."}),"\n",(0,i.jsx)(n.p,{children:"Wie unten gezeigt, erhalten wir einen allgemeinen Generic-Typ T1, der durch \xdcbergeben von Argumenten zu T2 Typ string[] oder T3 Typ number[] wird:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type T1<T> = T[]\ntype T2 = T1<string> // string[]\ntype T3 = T1<number> // number[]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wie oben gezeigt, ist T eine Variable, die wir durch jeden anderen Variablennamen ersetzen k\xf6nnen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type T4<A> = A[]\ntype T5 = T4<string> // string[]\ntype T6 = T4<number> // number[]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"benennungskonventionen",children:"Benennungskonventionen"}),"\n",(0,i.jsx)(n.p,{children:"In der Benennungskonvention f\xfcr Typescript Generic-Variablen gibt es vier \xfcbliche Generic-Variablennamen. Es wird empfohlen, diese nicht durch andere Namen zu ersetzen, um die Lesbarkeit zu erh\xf6hen."}),"\n",(0,i.jsx)(n.p,{children:"T: repr\xe4sentiert den ersten Parameter\nK: repr\xe4sentiert den Schl\xfcsseltyp eines Objekts\nV: repr\xe4sentiert den Werttyp eines Objekts\nE: repr\xe4sentiert den Elementtyp"}),"\n",(0,i.jsx)(n.h3,{id:"generic-interfaces",children:"Generic Interfaces"}),"\n",(0,i.jsx)(n.p,{children:"Generic Interfaces \xe4hneln den oben genannten Beispielen und \xfcbergeben Argumente an Interface-Typen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface I1<T, U> {\n  name: T;\n  age: U;\n}\ntype I2 = I1<string, number>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generische-einschr\xe4nkungen-extends-operator",children:"Generische Einschr\xe4nkungen (extends-Operator)"}),"\n",(0,i.jsxs)(n.p,{children:["Manchmal m\xfcssen wir generische Parameter einschr\xe4nken, um den Typ jeder Variablen zu beschr\xe4nken. TypeScript verwendet den ",(0,i.jsx)(n.code,{children:"extends"}),"-Operator, um Typbeschr\xe4nkungen zu implementieren."]}),"\n",(0,i.jsx)(n.p,{children:"Die Syntax f\xfcr generische Einschr\xe4nkungen ist wie folgt:"}),"\n",(0,i.jsxs)(n.p,{children:["GenerischerName extends Typ\nMit ",(0,i.jsx)(n.code,{children:"T extends Length"})," wird der Typ von T eingeschr\xe4nkt, er muss das ",(0,i.jsx)(n.code,{children:"length"}),"-Attribut enthalten, und der Typ von ",(0,i.jsx)(n.code,{children:"length"})," muss ",(0,i.jsx)(n.code,{children:"number"})," sein."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface Length {\n  length: number;\n}\n\nfunction fn1<T extends Length>(arg: T): number {\n  return arg.length;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Mit ",(0,i.jsx)(n.code,{children:"extends"})," wird eingeschr\xe4nkt, dass K ein Schl\xfcssel von T sein muss."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nlet tsInfo = {\n  name: "Typescript",\n  supersetOf: "Javascript",\n  difficulty: Difficulty.Intermediate,\n}\n\nlet difficulty: Difficulty =\n  getProperty(tsInfo, "difficulty"); // OK\n\nlet supersetOf: string =\n  getProperty(tsInfo, "superset_of"); // Fehler\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"standardwerte-f\xfcr-generische-parameter",children:"Standardwerte f\xfcr generische Parameter"}),"\n",(0,i.jsx)(n.p,{children:"Standardwerte f\xfcr generische Parameter sind wie Standardwerte f\xfcr Funktionsparameter, sie geben einen Standardwert an, wenn kein Parameter \xfcbergeben wird."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'interface I4<T = string> {\n  name: T;\n}\n\nconst S1: I4 = { name: "123" }; // Standardm\xe4\xdfig name: string-Typ\nconst S2: I4<number> = { name: 123 };\n'})}),"\n",(0,i.jsx)(n.h3,{id:"generische-bedingungen",children:"Generische Bedingungen"}),"\n",(0,i.jsx)(n.p,{children:"Bedingte Typen in TypeScript funktionieren \xe4hnlich wie bedingte Anweisungen in JavaScript, sie bedeuten, dass wenn eine Bedingung erf\xfcllt ist, dann xx, sonst yy."}),"\n",(0,i.jsx)(n.p,{children:"Syntax f\xfcr bedingte Typen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"T extends U ? X : Y\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wenn T dem Typ U zugewiesen werden kann, dann ist der Typ X, sonst Y."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type T1<T> = T extends string ? 'string' : 'number';\ntype T2 = T1<string>; // 'string'\ntype T3 = T1<number>; // 'number'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generische-inferenz-infer-operator",children:"Generische Inferenz (infer-Operator)"}),"\n",(0,i.jsxs)(n.p,{children:["Das Schl\xfcsselwort f\xfcr generische Inferenz ist ",(0,i.jsx)(n.code,{children:"infer"}),", die Syntax ist ",(0,i.jsx)(n.code,{children:"infer Typ"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Normalerweise wird es in Kombination mit generischen Bedingungen verwendet. Um es anhand eines Beispiels zu verstehen:"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn der generische Parameter T dem Typ ",(0,i.jsx)(n.code,{children:"{t: infer Test}"})," zugewiesen werden kann, dann ist der Typ der inferierte Typ Test, sonst ",(0,i.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Foo<T> = T extends {t: infer Test} ? Test : string;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Der generische Parameter ",(0,i.jsx)(n.code,{children:"number"})," hat kein ",(0,i.jsx)(n.code,{children:"t"}),"-Attribut, also ist der Typ ",(0,i.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type One = Foo<number>; // string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Das ",(0,i.jsx)(n.code,{children:"t"}),"-Attribut des generischen Parameters ist ",(0,i.jsx)(n.code,{children:"boolean"}),", also ist der Typ der inferierte Typ ",(0,i.jsx)(n.code,{children:"boolean"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Two = Foo<{ t: boolean }>; // boolean\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Das ",(0,i.jsx)(n.code,{children:"t"}),"-Attribut des generischen Parameters ist ",(0,i.jsx)(n.code,{children:"() => void"}),", also ist der Typ der inferierte Typ ",(0,i.jsx)(n.code,{children:"() => void"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Three = Foo<{ a: number, t: () => void }>; // () => void\n"})}),"\n",(0,i.jsx)(n.h2,{id:"generische-utility-typen",children:"Generische Utility-Typen"}),"\n",(0,i.jsx)(n.h3,{id:"abbildungstypen-mapped-types",children:"Abbildungstypen (Mapped Types)"}),"\n",(0,i.jsx)(n.p,{children:"Abbildungstypen sind eine Art generischer Typ, der verwendet werden kann, um einen bestehenden Objekttyp in einen neuen Objekttyp abzubilden."}),"\n",(0,i.jsx)(n.p,{children:"H\xe4ufige Syntax f\xfcr Abbildungstypen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{ [ P in K ] : T }\n{ [ P in K ] ?: T }\n{ [ P in K ] -?: T }\n{ readonly [ P in K ] : T }\n{ readonly [ P in K ] ?: T }\n{ -readonly [ P in K ] ?: T }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ein Beispiel zur Verdeutlichung: Alle Attribute durch Abbildungstypen optional machen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Partial<T> = {\n  [P in keyof T]?: T[P];\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"partial",children:"Partial"}),"\n",(0,i.jsxs)(n.p,{children:["TypeScript hat einige h\xe4ufig verwendete Abbildungstypen verpackt, wie ",(0,i.jsx)(n.code,{children:"Partial"}),", das verwendet wird, um alle Attribute eines Generikums optional zu machen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Partial<T> = {\n  [\n\nP in keyof T]?: T[P];\n}\n\ntype T1 = Partial<{\n  name: string;\n}>\n\nconst a: T1 = {}; // Kein Fehler, auch wenn das Attribut name fehlt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"required",children:"Required"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Required"})," macht alle Attribute eines Generikums erforderlich."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'type Required<T> = {\n  [P in keyof T]-?: T[P];\n}\n\ntype T2 = Required<{\n  name?: string;\n}>\n\nconst b: T2 = {}; // Fehler in TS, Objekt "{}" fehlt das Attribut "name", das im Typ "Required<{ name?: string | undefined; }>" erforderlich ist. ts(2741)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Die Syntax ",(0,i.jsx)(n.code,{children:"-?"})," bedeutet das Entfernen des optionalen ",(0,i.jsx)(n.code,{children:"?"}),"-Attributs."]}),"\n",(0,i.jsx)(n.h3,{id:"readonly",children:"Readonly"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Readonly"})," macht alle Attribute eines Generikums schreibgesch\xfctzt."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'type T3 = Readonly<{\n  name: string;\n}>\n\nconst c: T3 = {\n  name: "tj",\n}\n\nc.name = "tj1"; // Fehler in TS, "name" kann nicht zugewiesen werden, da es ein schreibgesch\xfctztes Attribut ist. ts(2540)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"pick",children:"Pick"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Pick"})," w\xe4hlt bestimmte Attribute aus einem Typ aus, um einen neuen Typ zu erstellen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'type Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n}\n\ntype T4 = Pick<\n  {\n    name: string;\n    age: number;\n  },\n  "name"\n>\n\n/*\nDas ist ein neuer Typ, T4={name: string}\n*/\n\nconst d: T4 = {\n  name: "tj",\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"record",children:"Record"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Record"})," wandelt Schl\xfcssel und Werte in einen T-Typ um."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Record<K extends keyof any, T> = {\n  [P in K]: T;\n}\nconst e: Record<string, string> = {\n  name: 'tj',\n}\n\nconst f: Record<string, number> = {\n  age: 11,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"keyof any"})," entspricht den Typen number | string | symbol, die als Schl\xfcsseltypen in Objekten verwendet werden k\xf6nnen."]}),"\n",(0,i.jsx)(n.h3,{id:"returntype",children:"ReturnType"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ReturnType"})," ermittelt den R\xfcckgabetyp des T-Typs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"exclude",children:"Exclude"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Exclude"})," entfernt Typen aus einem Typ, die zu einem anderen Typ geh\xf6ren."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'type Exclude<T, U> = T extends U ? never : T;\ntype T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"\ntype T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"\ntype T2 = Exclude<string | number | (() => void), Function>; // string | number\n'})}),"\n",(0,i.jsx)(n.h3,{id:"extract",children:"Extract"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Extract"})," extrahiert Typen aus T, die zu U geh\xf6ren."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'type Extract<T, U> = T extends U ? T : never;\ntype T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"\ntype T1 = Extract<string | number | (() => void), Function>; // () => void\n'})}),"\n",(0,i.jsx)(n.h3,{id:"omit",children:"Omit"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Omit"})," verwendet alle Attribute des T-Typs au\xdfer denen des K-Typs, um einen neuen Typ zu erstellen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\n\ninterface Todo {\n  title: string;\n  completed: boolean;\n  description: string;\n}\n\ntype TodoPreview = Omit<Todo, "description">;\n\n/*\n{\n  title: string;\n  completed: boolean;\n}\n*/\n'})}),"\n",(0,i.jsx)(n.h3,{id:"nonnullable",children:"NonNullable"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NonNullable"})," wird verwendet, um null und undefined aus einem Typ zu filtern."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type NonNullable<T> = T extends null | undefined ? never : T;\ntype T0 = NonNullable<string | number | undefined>; // string | number\ntype T1 = NonNullable<string[] | null | undefined>; // string[]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,i.jsx)(n.p,{children:"Parameter wird verwendet, um einen Tupeltyp zu erhalten, der aus den Parametertypen einer Funktion besteht."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any\n? P : never;\n\ntype A = Parameters<() =>void>; // []\ntype B = Parameters<typeofArray.isArray>; // [any]\ntype C = Parameters<typeofparseInt>; // [string, (number | undefined)?]\ntype D = Parameters<typeofMath.max>; // number[]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"letzte-worte",children:"Letzte Worte"}),"\n",(0,i.jsx)(n.p,{children:"Speichern Sie es schnell ab!"})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},7214:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var i=r(959);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);