---
title: 'Die nützlichsten Typscript-Hauptmerkmale'
tags: [typescript]
slug: typescript-most-practical-features-compilation
description: Die Bedeutung der Typenprogrammierung in Projekten ist offensichtlich. Dieser Artikel fasst einige der häufigsten Merkmale von Typescript zusammen, um allen zu helfen, sich mit der Verwendung von Typescript vertraut zu machen.
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp
date: 2024-01-25T10:00
---

Die Bedeutung der Typenprogrammierung in Projekten ist offensichtlich. Dieser Artikel fasst einige der häufigsten Merkmale von Typescript zusammen, um allen zu helfen, sich mit der Verwendung von Typescript vertraut zu machen.

## Erweiterte Typen

### Schnitttypen

Schnitttypen sind die Kombination mehrerer Typen in einen einzigen Typ durch das &-Symbol.

```typescript
interface I1 {
  name: string;
}

interface I2 {
  age: number;
}

type T3 = I1 & I2

const a: T3 = {
  name: "tj",
  age: 11,
}
```

### Union-Typen

Union-Typen werden mit dem | Symbol dargestellt, was bedeutet, dass ein Wert einer von mehreren Typen sein kann.

```typescript
const a: string | number = 1
```

### String Literal Typen

String Literal Typen verwenden einen String als Typ für eine Variable.

```typescript
const a: 'number' = 'number'
```

### Numerische Literal Typen

Numerische Literal Typen verwenden eine Zahl als Typ für eine Variable.

```typescript
const a: 1 = 1
```

### Boolean Literal Typen

Boolean Literal Typen verwenden einen Wahrheitswert als Typ für eine Variable.

```typescript
const a: true = true
```

### Template Literal Typen

Template Literal Typen verwenden ES6 Template String Syntax, um Typen zu definieren.

```typescript
type https = `https://${string}`
const a:https = `https://jd.com`
```

## Operatoren

### keyof

keyof wird verwendet, um alle Schlüssel eines Typs zu erhalten. Der Rückgabewert ist ein Union-Typ.

```typescript
// const a: 'name' | 'age' = 'name'
const a: keyof {
name: string,
age: number
} = 'name'
```

### typeof

typeof wird verwendet, um die Struktur eines Objekts oder einer Funktion zu ermitteln.

```typescript
const a2 = {
name: 'tj',
}

type T1 = typeof a2 // {name: string}

function fn1(x: number): number {
return x * 10
}

type T2 = typeof fn1 // (x: number) => number
```

### in

in wird verwendet, um Union-Typen zu durchlaufen.

```typescript
const obj = {
  name: "tj",
  age: 11,
}

type T5 = {
  [P in keyof typeof obj]: any
}

/*
{
name: any,
age: any
}
*/
```

### T[K]

T[K] wird verwendet, um auf Indizes zuzugreifen und den Union-Typ des entsprechenden Werts zu erhalten.

```typescript
interface I3 {
  name: string,
  age: number
}
type T6 = I3[keyof I3] // string | number

```

## Weitere Operatoren

### Non-null Assertion Operator

Der Non-null Assertion Operator ! wird verwendet, um zu betonen, dass ein Element nicht null oder undefined ist. Es sagt TypeScript, dass die Eigenschaft definitiv zugewiesen wird.

```jsx
function Demo(): JSX.Element () {
   const divRef = useRef<HTMLDivElement>()
   useEffect(() => {
      divRef.current!.scrollIntoView() // Betont, dass divRef.current nicht null oder undefined ist
   }, [])
   return <div ref={divRef}>divDemo</div>
}
```

### Optional Chaining Operator

Der Optional Chaining Operator ?. wird verwendet, um zu überprüfen, ob der linke Ausdruck null oder undefined ist. Ist dies der Fall, stoppt der Ausdruck.

```typescript
const a = b?.a
```

### Nullish Coalescing Operator

Der Nullish Coalescing Operator ?? wird verwendet, um zu überprüfen, ob der linke Ausdruck null oder undefined ist. Ist dies nicht der Fall

, wird der rechte Wert zurückgegeben.

```typescript
const a = b ?? 10
```

### Numeric Separator

Der Numeric Separator _ wird verwendet, um lange Zahlen zu teilen, was das Lesen von Zahlen erleichtert. Bei der Kompilierung wird der _ automatisch entfernt.

```typescript
const num: number = 1_111_111_111
```

## Typ-Alias

Ein Typ-Alias wird verwendet, um einem Typ einen neuen Namen zu geben.

```typescript
type Message = string | string[]
let greet = (message: Message) => {
// ...
}
```
## Typ-Assertion
Typ-Assertion bedeutet, dem Browser den genauen Typ zu sagen.

```typescript
// Winkelklammer-Syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as-Syntax
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## Typ-Guards

Typ-Guards sind Ausdrücke, die zur Laufzeit überprüfen, um sicherzustellen, dass ein Typ in einem bestimmten Bereich vorliegt.

```typescript
interface A {
  name: string;
  age: number;
}

interface B {
  sex: string;
  home: string;
}

function doSomething(person: A | B): void {
  if (person.name) {
// Fehler
// ...
  }
}

// Verwendung des in Typ-Guards
function doSomething(person: A | B): void {
  if ("name" in person) {
// OK
// ...
  }
}

// Verwendung des typeof Typ-Guards
function A(a: string | number): string | number {
  if (typeof a === "string") {
// OK
    return a + ""
  }
  if (typeof a === "number") {
// OK
    return a + 2
  }
  return ""
}

// instanceof Typ-Guards
class Foo {
}

class Bar {
}

function test(input: Foo | Bar) {
  if (input instanceof Foo) {
// Hier wird der Typ von input zu Foo „verengt“
  } else {
// Hier wird der Typ von input zu Bar „verengt“
  }
}
```

## Generics

### Einführung in Generics

Generics sind wie das Übergeben von Argumenten an Typen, um einen allgemeineren Typ zu erhalten, genau wie bei Funktionen.

Wie unten gezeigt, erhalten wir einen allgemeinen Generic-Typ T1, der durch Übergeben von Argumenten zu T2 Typ string[] oder T3 Typ number[] wird:

```typescript
type T1<T> = T[]
type T2 = T1<string> // string[]
type T3 = T1<number> // number[]
```

Wie oben gezeigt, ist T eine Variable, die wir durch jeden anderen Variablennamen ersetzen können.

```typescript
type T4<A> = A[]
type T5 = T4<string> // string[]
type T6 = T4<number> // number[]
```
### Benennungskonventionen

In der Benennungskonvention für Typescript Generic-Variablen gibt es vier übliche Generic-Variablennamen. Es wird empfohlen, diese nicht durch andere Namen zu ersetzen, um die Lesbarkeit zu erhöhen.

T: repräsentiert den ersten Parameter
K: repräsentiert den Schlüsseltyp eines Objekts
V: repräsentiert den Werttyp eines Objekts
E: repräsentiert den Elementtyp

### Generic Interfaces

Generic Interfaces ähneln den oben genannten Beispielen und übergeben Argumente an Interface-Typen:

```typescript
interface I1<T, U> {
  name: T;
  age: U;
}
type I2 = I1<string, number>
```

### Generische Einschränkungen (extends-Operator)

Manchmal müssen wir generische Parameter einschränken, um den Typ jeder Variablen zu beschränken. TypeScript verwendet den `extends`-Operator, um Typbeschränkungen zu implementieren.

Die Syntax für generische Einschränkungen ist wie folgt:

GenerischerName extends Typ
Mit `T extends Length` wird der Typ von T eingeschränkt, er muss das `length`-Attribut enthalten, und der Typ von `length` muss `number` sein.

```typescript
interface Length {
  length: number;
}

function fn1<T extends Length>(arg: T): number {
  return arg.length;
}
```
Mit `extends` wird eingeschränkt, dass K ein Schlüssel von T sein muss.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let tsInfo = {
  name: "Typescript",
  supersetOf: "Javascript",
  difficulty: Difficulty.Intermediate,
}

let difficulty: Difficulty =
  getProperty(tsInfo, "difficulty"); // OK

let supersetOf: string =
  getProperty(tsInfo, "superset_of"); // Fehler

```

### Standardwerte für generische Parameter

Standardwerte für generische Parameter sind wie Standardwerte für Funktionsparameter, sie geben einen Standardwert an, wenn kein Parameter übergeben wird.

```typescript
interface I4<T = string> {
  name: T;
}

const S1: I4 = { name: "123" }; // Standardmäßig name: string-Typ
const S2: I4<number> = { name: 123 };
```

### Generische Bedingungen

Bedingte Typen in TypeScript funktionieren ähnlich wie bedingte Anweisungen in JavaScript, sie bedeuten, dass wenn eine Bedingung erfüllt ist, dann xx, sonst yy.

Syntax für bedingte Typen:

```typescript
T extends U ? X : Y
```

Wenn T dem Typ U zugewiesen werden kann, dann ist der Typ X, sonst Y.

```typescript
type T1<T> = T extends string ? 'string' : 'number';
type T2 = T1<string>; // 'string'
type T3 = T1<number>; // 'number'
```

### Generische Inferenz (infer-Operator)

Das Schlüsselwort für generische Inferenz ist `infer`, die Syntax ist `infer Typ`.

Normalerweise wird es in Kombination mit generischen Bedingungen verwendet. Um es anhand eines Beispiels zu verstehen:

Wenn der generische Parameter T dem Typ `{t: infer Test}` zugewiesen werden kann, dann ist der Typ der inferierte Typ Test, sonst `string`.

```typescript
type Foo<T> = T extends {t: infer Test} ? Test : string;
```

Der generische Parameter `number` hat kein `t`-Attribut, also ist der Typ `string`.

```typescript
type One = Foo<number>; // string
```

Das `t`-Attribut des generischen Parameters ist `boolean`, also ist der Typ der inferierte Typ `boolean`.

```typescript
type Two = Foo<{ t: boolean }>; // boolean
```

Das `t`-Attribut des generischen Parameters ist `() => void`, also ist der Typ der inferierte Typ `() => void`.

```typescript
type Three = Foo<{ a: number, t: () => void }>; // () => void
```

## Generische Utility-Typen

### Abbildungstypen (Mapped Types)

Abbildungstypen sind eine Art generischer Typ, der verwendet werden kann, um einen bestehenden Objekttyp in einen neuen Objekttyp abzubilden.

Häufige Syntax für Abbildungstypen:

```typescript
{ [ P in K ] : T }
{ [ P in K ] ?: T }
{ [ P in K ] -?: T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ?: T }
{ -readonly [ P in K ] ?: T }
```

Ein Beispiel zur Verdeutlichung: Alle Attribute durch Abbildungstypen optional machen:

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
}
```
### Partial

TypeScript hat einige häufig verwendete Abbildungstypen verpackt, wie `Partial`, das verwendet wird, um alle Attribute eines Generikums optional zu machen.

```typescript
type Partial<T> = {
  [

P in keyof T]?: T[P];
}

type T1 = Partial<{
  name: string;
}>

const a: T1 = {}; // Kein Fehler, auch wenn das Attribut name fehlt
```

### Required

`Required` macht alle Attribute eines Generikums erforderlich.

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P];
}

type T2 = Required<{
  name?: string;
}>

const b: T2 = {}; // Fehler in TS, Objekt "{}" fehlt das Attribut "name", das im Typ "Required<{ name?: string | undefined; }>" erforderlich ist. ts(2741)
```

Die Syntax `-?` bedeutet das Entfernen des optionalen `?`-Attributs.

### Readonly

`Readonly` macht alle Attribute eines Generikums schreibgeschützt.

```typescript
type T3 = Readonly<{
  name: string;
}>

const c: T3 = {
  name: "tj",
}

c.name = "tj1"; // Fehler in TS, "name" kann nicht zugewiesen werden, da es ein schreibgeschütztes Attribut ist. ts(2540)
```

### Pick

`Pick` wählt bestimmte Attribute aus einem Typ aus, um einen neuen Typ zu erstellen.

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}

type T4 = Pick<
  {
    name: string;
    age: number;
  },
  "name"
>

/*
Das ist ein neuer Typ, T4={name: string}
*/

const d: T4 = {
  name: "tj",
}
```

### Record

`Record` wandelt Schlüssel und Werte in einen T-Typ um.

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
}
const e: Record<string, string> = {
  name: 'tj',
}

const f: Record<string, number> = {
  age: 11,
}
```
`keyof any` entspricht den Typen number | string | symbol, die als Schlüsseltypen in Objekten verwendet werden können.

### ReturnType

`ReturnType` ermittelt den Rückgabetyp des T-Typs.

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

### Exclude

`Exclude` entfernt Typen aus einem Typ, die zu einem anderen Typ gehören.

```typescript
type Exclude<T, U> = T extends U ? never : T;
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
```

### Extract

`Extract` extrahiert Typen aus T, die zu U gehören.

```typescript
type Extract<T, U> = T extends U ? T : never;
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void
```

### Omit

`Omit` verwendet alle Attribute des T-Typs außer denen des K-Typs, um einen neuen Typ zu erstellen.

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

type TodoPreview = Omit<Todo, "description">;

/*
{
  title: string;
  completed: boolean;
}
*/
```

### NonNullable

`NonNullable` wird verwendet, um null und undefined aus einem Typ zu filtern.

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### Parameter

Parameter wird verwendet, um einen Tupeltyp zu erhalten, der aus den Parametertypen einer Funktion besteht.

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any
? P : never;

type A = Parameters<() =>void>; // []
type B = Parameters<typeofArray.isArray>; // [any]
type C = Parameters<typeofparseInt>; // [string, (number | undefined)?]
type D = Parameters<typeofMath.max>; // number[]
```

## Letzte Worte

Speichern Sie es schnell ab!