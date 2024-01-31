---
title: 'Most Practical TypeScript Features'
tags: [ typescript ]
slug: typescript-most-practical-features-compilation
description: The importance of type programming in projects goes without saying. This article summarizes some common features of TypeScript to help everyone familiarize and master the use of TypeScript.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp
date: 2024-01-25T10:00
---

The importance of type programming in projects goes without saying. This article will summarize some common features of TypeScript, helping everyone to familiarize and master its use.

## Advanced Types

### Intersection Types

Intersection types combine multiple types into one using the & symbol.

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

### Union Types

Union types, indicated by the | symbol, mean a value can be one of several types.

```typescript
const a: string | number = 1
```

### String Literal Types

String literal types use a string type as the type of a variable.

```typescript
const a: 'number' = 'number'
```

### Numeric Literal Types

Numeric literal types use a number as the type of a variable.

```typescript
const a: 1 = 1
```

### Boolean Literal Types

Boolean literal types use a boolean value as the type of a variable.

```typescript
const a: true = true
```

### Template Literal Types

Template literal types use ES6 template string syntax to constrain types.

```typescript
type https = `https://${string}`
const a:https = `https://jd.com`
```

## Operators

### keyof

keyof is used to get all keys of a type, returning a union type.

```typescript
// const a: 'name' | 'age' = 'name'
const a: keyof {
name: string,
age: number
} = 'name'
```

### typeof

typeof is used to get the structural type of an object or function.

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

in is used to iterate over union types.

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

T[K] is used to access an index, obtaining the union type of the corresponding value.

```typescript
interface I3 {
  name: string,
  age: number
}
type T6 = I3[keyof I3] // string | number

```

## Operators

### Non-null Assertion Operator

The non-null assertion operator ! is used to emphasize that an element is neither null nor undefined, informing TypeScript that the property will be explicitly assigned.

```jsx
function Demo(): JSX.Element () {
   const divRef = useRef<HTMLDivElement>()
   useEffect(() => {
      divRef.current!.scrollIntoView() // Asserting that divRef.current is not null or undefined
   }, [])
   return <div ref={divRef}>divDemo</div>
}
```

### Optional Chaining Operator

The optional chaining operator ?. is used to check if the left-hand expression is null or undefined, stopping the expression if true.

```typescript
const a = b?.a
```

### Nullish Coalescing Operator

The nullish coalescing operator ?? is used to check if the left-hand expression is null or undefined, returning the right-hand value if not.

```typescript
const a = b ?? 10
```

### Numeric Separators

Numeric separators _ are used to split long numbers for easier reading. The compiled result will automatically remove _.

```typescript
const num: number = 1_111_111_111
```

## Type Aliases

Type aliases are used to give a type a new name.

```typescript
type Message = string | string[]
let greet = (message: Message) => {
// ...
}
```
## Type Assertions
Type assertions tell the browser what type I am very certain of.

```typescript
// Angle bracket syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as syntax
let someValue: any =

 "this is a string";
let strLength: number = (someValue as string).length;
```

## Type Guards

Type guards are expressions that check types at runtime to ensure the type within a certain scope.

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
// Error
// ...
  }
}

// Using in type guard
function doSomething(person: A | B): void {
  if ("name" in person) {
// OK
// ...
  }
}

// Using typeof type guard
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

// instanceof type guard
class Foo {
}

class Bar {
}

function test(input: Foo | Bar) {
  if (input instanceof Foo) {
// Here input type 'narrows' to Foo
  } else {
// Here input type 'narrows' to Bar
  }
}
```

## Generics

### Introduction to Generics

Generics are like passing parameters to types to get a more general type, just like passing parameters to functions.

As shown below, we get a general generic type T1, which can become T2 type string[] and T3 type number[] through passing parameters:

```typescript
type T1<T> = T[]
type T2 = T1<string> // string[]
type T3 = T1<number> // number[]
```

As above, T is a variable, and we can replace it with any other variable name.

```typescript
type T4<A> = A[]
type T5 = T4<string> // string[]
type T6 = T4<number> // number[]
```
### Naming Convention

In the TypeScript generic variable naming convention, 4 common generic variable names are defaulted. To improve readability, it is not recommended to define them as other variable names.

T: Represents the first parameter
K: Represents the key type of the object
V: Represents the value type of the object
E: Represents the element type

### Generic Interface

Generic interfaces, similar to the examples above, pass parameters to interface types:

```typescript
interface I1<T, U> {
  name: T;
  age: U;
}
type I2 = I1<string, number>
```

### Generic Constraints (extends operator)

Sometimes, we need to constrain generic parameters, limiting each variable's type. TypeScript implements type constraints through extends.

Generic constraint syntax is as follows:

Generic name extends type
T extends Length constraints T's type to include the length property, and the type of length must be number.

```typescript
interface Length {
  length: number
}

function fn1<T extends Length>(arg: T): number {
  return arg.length
}
```
K is constrained by extends to be a key of T.

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
  getProperty(tsInfo, "superset_of") // Error

```

### Default Generic Parameters

Generic parameters default values, like function parameter default values, are given default values when not passed.

```typescript
interface I4<T = string> {
  name: T;
}

const S1: I4 = { name: "123" } // By default name: string type
const S2: I4<number> = { name: 123 }
```

### Conditional Generics

Conditional types mean the same as conditional judgments in Js, which is if the condition is met, then xx, otherwise xx.

Conditional type expression:

```typescript
T extends U ? X : Y
```

If T can be assigned to U, then the type is X, otherwise the type is Y.

```typescript
type T1<T> = T extends string ? 'string' : 'number'
type T2 = T1<string> // 'string'
type T3 = T1<number> // 'number
```

### Generic Inference (infer Operator)

The keyword for generic inference is `infer`, and the syntax is `infer Type`.

It is generally used in combination with generic conditional types. To understand this, consider a practical example:

If the generic parameter `T` can be assigned to the type `{t: infer Test}`, then the type is the inferred type `Test`, otherwise, the type is `string`.

```typescript
type Foo<T> = T extends {t: infer Test} ? Test : string
```

The generic parameter `number` does not have a `t` property, so the type is `string`.

```typescript
type One = Foo<number> // string
```

The `t` property of the generic parameter is `boolean`, so the type is the inferred type `boolean`.

```typescript
type Two = Foo<{ t: boolean }> // boolean
```

The `t` property of the generic parameter is `() => void`, so the type is the inferred type `() => void`.

```typescript
type Three = Foo<{ a: number, t: () => void }> // () => void
```

## Generic Utility Types

### Mapped Types

Mapped types are a kind of generic type that can be used to map an existing object type into a new object type.

Common syntax for mapped types:

```typescript
{ [ P in K ] : T }
{ [ P in K ] ?: T }
{ [ P in K ] -?: T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ?: T }
{ -readonly [ P in K ] ?: T }
```

For example, making all properties optional using mapped types:

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

### Partial

TypeScript has encapsulated some common mapped types, such as `Partial`, which is used to make all properties of a generic optional.

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}

type T1 = Partial<{
  name: string,
}>

const a: T1 = {} // No error without the name property
```

### Required

`Required` makes all properties of the generic required.

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P]
}

type T2 = Required<{
  name?: string,
}>

const b: T2 = {} // TypeScript error, the type "{}" lacks the property "name", but it is required in "Required<{ name?: string | undefined; }>". ts(2741)
```

The syntax `-?` means to remove the optional `?` property.

### Readonly

`Readonly` makes all properties of the generic read-only.

```typescript
type T3 = Readonly<{
  name: string,
}>

const c: T3 = {
  name: "tj",
}

c.name = "tj1" // TypeScript error, cannot assign to "name" because it is a read-only property. ts(2540)
```

### Pick

`Pick` selects certain properties from a type to create a new type.

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
This is a new type, T4 = {name: string}
*/

const d: T4 = {
  name: "tj",
}
```

### Record

`Record` converts keys and values into type `T`.

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
`keyof any` corresponds to types `number | string | symbol`, which are the collection of types that can be object keys.

### ReturnType

`ReturnType` gets the return type corresponding to type `T`.

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

### Exclude

`Exclude` removes types in one type that are part of another.

```typescript
type Exclude<T, U> = T extends U ? never : T;
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>;

 // string | number
```

### Extract

`Extract` extracts type `U` from `T`.

```typescript
type Extract<T, U> = T extends U ? T : never;
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void
```

### Omit

`Omit` constructs a new type using all properties from type `T` except those in type `K`.

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

`NonNullable` is used to filter out `null` and `undefined` from a type.

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### Parameters

`Parameters` is used to get the tuple type composed of a function's parameter types.

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any
? P : never;

type A = Parameters<() => void>; // []
type B = Parameters<typeof Array.isArray>; // [any]
type C = Parameters<typeof parseInt>; // [string, (number | undefined)?]
type D = Parameters<typeof Math.max>; // number[]
```

## Conclusion

Bookmark this now!