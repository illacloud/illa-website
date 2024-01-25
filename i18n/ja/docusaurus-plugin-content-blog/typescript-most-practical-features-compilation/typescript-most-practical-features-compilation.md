---
title: '最も実用的なTypeScriptの一般的な機能'
tags: [ typescript ]
slug: typescript-most-practical-features-compilation
description: プロジェクトでの型プログラミングの重要性は言うまでもありません。この記事では、TypeScriptの一般的な機能をまとめ、TypeScriptの使用を熟練させるのに役立ちます。
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp
date: 2024-01-25T10:00
---

プロジェクトでの型プログラミングの重要性は言うまでもありません。この記事では、TypeScriptの一般的な機能をまとめ、TypeScriptの使用を熟練させるのに役立ちます。

## アドバンスト・タイプ

### 交差型

交差型は、& 記号を使用して複数の型を1つの型に結合します。

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

### ユニオン型

ユニオン型は、| 記号を使用して値がいくつかの型のうちのどれかであることを表します。

```typescript
const a: string | number = 1
```

### 文字列リテラル型

文字列リテラル型は、文字列型を変数の型として使用します。

```typescript
const a: 'number' = 'number'
```

### 数値リテラル型

数値リテラル型は、数字を変数の型として使用します。

```typescript
const a: 1 = 1
```

### ブールリテラル型

ブールリテラル型は、真偽値を変数の型として使用します。

```typescript
const a: true = true
```

### 文字列テンプレート型

文字列テンプレート型は、ES6のテンプレート文字列構文を使用して型を制約します。

```typescript
type https = `https://${string}`
const a: https = `https://jd.com`
```

## 演算子

### keyof

keyofは、特定の型のすべてのキーを取得するために使用され、その戻り値はユニオン型です。

```typescript
// const a: 'name' | 'age' = 'name'
const a: keyof {
  name: string,
  age: number
} = 'name'
```

### typeof

typeofは、オブジェクトまたは関数の構造型を取得するために使用されます。

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

inは、ユニオン型を繰り返し処理するために使用されます。

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

T[K]は、インデックスにアクセスし、そのインデックスに対応する値のユニオン型を取得するために使用されます。

```typescript
interface I3 {
  name: string,
  age: number
}
type T6 = I3[keyof I3] // string | number

```

## 演算子

### 非nullアサーション演算子

非nullアサーション演算子 ! は、要素がnullまたはundefinedでないことを強調し、プロパティは明示的に値が割り当てられることをTypeScriptに伝えます。

```jsx
function Demo(): JSX.Element () {
   const divRef = useRef<HTMLDivElement>()
   useEffect(() => {
      divRef.current!.scrollIntoView() // divRef.currentがnullまたはundefinedでないことをアサーション
   }, [])
   return <div ref={divRef}>divDemo</div>
}
```

### オプショナルチェイン演算子

オプショナルチェイン演算子 ?. は、左側の式の値がnullまたはundefinedかどうかを判断し、そうであれば式の実行を停止します。

```typescript
const a = b?.a
```

### nullish合併演算子

nullish合併演算子 ?? は、左側の式の値がnullまたはundefinedかどうかを判断し、そうでない場合は右側の値を返します。

```typescript
const a = b ?? 10
```

### 数値セパレータ

数値セパレータ _ は、長い数字を区切り、数字を読みやすくするために使用されます。コンパイル結果では _ は自動的に削除されます。

```typescript
const num: number = 1_111_111_111
```

## 型エイリアス

型エイリアスは、型に新しい名前を付けるために使用されます。

```typescript
type Message = string | string[]
let greet = (message: Message) => {
// ...
}
```
## 型アサーション
型アサーションは、ブラウザに対して型を明示的に指定することを意味します。

```typescript
// 尖括弧構文
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as

構文
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 型ガード

型ガードは、実行時に特定のスコープ内の型を確認するためのいくつかの式です。

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
    // エラー
    // ...
  }
}

// `in`型ガードを使用する
function doSomething(person: A | B): void {
  if ("name" in person) {
    // OK
    // ...
  }
}

// `typeof`型ガードを使用する
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

// `instanceof`型ガード
class Foo {
}

class Bar {
}

function test(input: Foo | Bar) {
  if (input instanceof Foo) {
    // ここで `input` の型が「狭まる」
  } else {
    // ここで `input` の型が「狭まる」
  }
}
```

## ジェネリック

### ジェネリックの紹介

ジェネリックは、型に引数を渡してより汎用的な型を取得する方法です。関数に引数を渡すように、型にも引数を渡して新しい型を取得します。

以下の例では、ジェネリック型T1を取得し、引数を渡すことでT2型がstring[]、T3型がnumber[]になります。

```typescript
type T1<T> = T[]
type T2 = T1<string> // string[]
type T3 = T1<number> // number[]
```

Tは変数であり、任意の他の変数名で代用できます。

```typescript
type T4<A> = A[]
type T5 = T4<string> // string[]
type T6 = T4<number> // number[]
```

### 命名規則

TypeScriptのジェネリック変数の命名規則では、通常4つの一般的なジェネリック変数名がデフォルトで提供されており、可読性を向上させるために他の変数名を使用しないことが推奨されています。

T：最初の引数を表す
K：オブジェクトのキータイプを表す
V：オブジェクトの値の型を表す
E：要素の型を表す

### ジェネリックインターフェース

ジェネリックインターフェースは、前述の例と同様に、インターフェースに型引数を渡します。

```typescript
interface I1<T, U> {
  name: T;
  age: U;
}
type I2 = I1<string, number>
```

### ジェネリック制約（extends演算子）

時折、ジェネリックパラメータを制約し、各変数の型を制限する必要があります。TypeScriptはextendsを使用して型制約を実現します。

ジェネリック制約の構文は次のとおりです。

ジェネリック名 extends 型
TをLengthとして指定し、Tの型がlengthプロパティを含み、その型がnumberである必要がある制約を設定しています。

```typescript
interface Length {
  length: number
}

function fn1<T extends Length>(arg: T): number {
  return arg.length
}
```

extendsを使用してKがTのキーであることを制約しています。

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

let tsInfo = {
  name: "Typescript",
  supersetOf: "Javascript",
  difficulty: Difficulty.Intermediate,
}

let difficulty: Difficulty =
  getProperty(tsInfo, "difficulty") // OK

let supersetOf: string =
  getProperty(tsInfo, "superset_of") // エラー
```

### ジェネリックパラメータのデフォルト値

ジェネリックパラメータのデフォルト値は、関数パラメータのデフォルト値と同様に、パラメータが指定されていない場合にデフォルト値を提供します。

```typescript
interface I4<T = string> {
  name: T;
}

const S1: I4 = { name: "123" } // デフォルトでname: string型
const S2: I4<number> = { name: 123 }
```

### ジェネリック条件

条件型は、JavaScriptの条件文と同じように、条件が満たされる場合はxx、そうでない場合はyyを意味します。

条件型の表現は次のとおりです。

T extends U ? X : Y

TがUに代入可能であれば、型はXであり、それ以外の場合は型はYです。

```typescript
type T1<T> = T extends string ? 'string' : 'number'
type T2 = T1<string> // 'string'
type T3 = T1<number> // 'number'
```

### ジェネリック推論（infer演算子）

ジェネリック推論のキーワードはinferであり、構文はinfer型です。

通常、ジェネリック条件と組み合わせて使用し、具体例を理解します。

ジェネリックパラメータTが型{t: infer Test}に代入可能である場合、型Testが推論され、それ以外の場合はstring型になります。

```typescript
type Foo<T> = T extends {t: infer Test} ? Test : string
```



ジェネリックパラメータnumberにはtプロパティがないため、型はstringになります。

```typescript
type One = Foo<number> // string
```

ジェネリックパラメータのtプロパティがbooleanであるため、型はbooleanに推論されます。

```typescript
type Two = Foo<{ t: boolean }> // boolean
```

ジェネリックパラメータのtプロパティが() => voidであるため、型は() => voidに推論されます。

```typescript
type Three = Foo<{ a: number, t: () => void }> // () => void
```

## ジェネリックユーティリティ型

### マップ型

マップ型は、元のオブジェクト型を新しいオブジェクト型にマップするためのジェネリック型です。

一般的なマップ型の構文は次のとおりです。

{ [ P in K ] : T }
{ [ P in K ] ?: T }
{ [ P in K ] -?: T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ?: T }
{ -readonly [ P in K ] ?: T }

例を示します。すべてのプロパティをオプションに変更するためのマップ型を作成します。

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

### Partial

TypeScriptは、いくつかの一般的なマップ型を提供しており、Partialはジェネリックのすべてのプロパティをオプションにするために使用されます。

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}

type T1 = Partial<{
  name: string,
}>

const a: T1 = {} // nameプロパティがなくてもエラーにならない
```

### Required

Requiredは、ジェネリックのすべてのプロパティを必須にします。

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P]
}

type T2 = Required<{
  name?: string,
}>

const b: T2 = {} // エラー、プロパティ "name" が欠けていますが、型 "Required<{ name?: string | undefined; }>" ではそのプロパティが必要です。ts(2741)
```

構文の-?は、?（オプション）プロパティを取り除く意味です。

### Readonly

Readonlyは、ジェネリックのすべてのプロパティを読み取り専用にします。

```typescript
type T3 = Readonly<{
  name: string,
}>

const c: T3 = {
  name: "tj",
}

c.name = "tj1" // エラー、読み取り専用のプロパティ "name" には代入できません。ts(2540)
```

### Pick

Pickは型から特定のプロパティを選択し、新しい型を生成します。

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type T4 = Pick<
  {
    name: string,
    age: number,
  },
  "name"
>

/*
これは新しい型で、T4={name: string}
*/

const d: T4 = {
  name: "tj",
}
```

### Record

Recordはキーと値をT型に変換します。

```typescript
type Record<K extends keyof any, T> = {
  [key in K]: T
}
const e: Record<string, string> = {
  name: 'tj',
}

const f: Record<string, number> = {
  age: 11,
}
```
keyof anyはnumber | string | symbolに対応し、オブジェクトのキーの型セットを表します。

### ReturnType

ReturnTypeはT型に対応する関数の戻り値の型を取得します。

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: infer P) => any
? P : never;
```

### Exclude

ExcludeはT型からU型に属する型を削除します。

```typescript
type Exclude<T, U> = T extends U ? never : T;
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
```

### Extract

ExtractはT型からU型を抽出します。

```typescript
type Extract<T, U> = T extends U ? T : never;
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void
```

### Omit

OmitはT型からK型を除外して新しい型を構築します。

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

NonNullableは型からnullとundefinedの型をフィルタリングします。

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### Parameters

Parametersは関数のパラメータの型のタプル型を取得します。

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any
? P : never;

type A = Parameters<() =>void>; // []
type B = Parameters<typeofArray.isArray>; // [any]
type C = Parameters<typeofparseInt>; // [string, (number | undefined)?]
type D = Parameters<typeofMath.max>; // number[]
```

## 最後に

これをお気に入りに追加しましょう！