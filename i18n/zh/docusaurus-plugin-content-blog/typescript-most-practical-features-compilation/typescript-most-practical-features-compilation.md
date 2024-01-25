---
title: '最实用的Typescript常用特性'
tags: [ typescript ]
slug: typescript-most-practical-features-compilation
description: 类型编程在项目中的重要性不言而喻，本文将总结一些 Typescript 的常用特性，帮助大家熟悉掌握 Typescript 的使用。
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp
date: 2024-01-25T10:00
---

类型编程在项目中的重要性不言而喻，本文将总结一些 Typescript 的常用特性，帮助大家熟悉掌握 Typescript 的使用。

## 高级类型

### 交叉类型

交叉类型就是通过 & 符号，将多个类型合并为一个类型。

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

### 联合类型

联合类型就是通过 | 符号，表示一个值可以是几种类型之一。

```typescript
const a: string | number = 1
```

### 字符串字面量类型

字符串字面量类型就是使用一个字符串类型作为变量的类型。

```typescript
const a: 'number' = 'number'
```

### 数字字面量类型

数字字面量类型就是使用一个数字作为变量的类型。

```typescript
const a: 1 = 1
```

### 布尔字面量类型

数字字面量类型就是使用一个布尔值作为变量的类型。

```typescript
const a: true = true
```

### 字符串模板类型

字符串模板类型就是通过 ES6 的模板字符串语法，对类型进行约束。

```typescript
type https = `https://${string}`
const a:https = `https://jd.com`
```

## 操作符

### keyof

keyof 用于获取某种类型的所有键，其返回值是联合类型。

```typescript
// const a: 'name' | 'age' = 'name'
const a: keyof {
name: string,
age: number
} = 'name'
```

### typeof

typeof 用于获取对象或者函数的结构类型。

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

in 用于遍历联合类型。

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

T[K] 用于访问索引，得到索引对应的值的联合类型。

```typescript
interface I3 {
  name: string,
  age: number
}
type T6 = I3[keyof I3] // string | number

```

## 运算符

### 非空断言运算符

非空断言运算符 ! 用于强调元素是非 null 非 undefined，告诉 Typescript 该属性会被明确的赋值。

```jsx
function Demo(): JSX.Element () {
   const divRef = useRef<HTMLDivElement>()
   useEffect(() => {
      divRef.current!.scrollIntoView() // 断言divRef.current 是非 null 非 undefined
   }, [])
   return <div ref={divRef}>divDemo</div>
}
```

### 可选链运算符

可选链运算符 ?. 用于判断左侧表达式的值是否是 null 或 undefined，如果是将停止表达式运行。

```typescript
const a = b?.a
```

### 空值合并运算符

空值合并运算符 ?? 用于判断左侧表达式的值是否是 null 或 undefined，如果不是返回右侧的值。

```typescript
const a = b ?? 10
```

### 数字分隔符

数字分隔符 _ 用于对长数字进行分割，便于数字的阅读，编译结果将会自动去除 _。

```typescript
const num: number = 1_111_111_111
```

## 类型别名

类型别名用来给一个类型起个新名字。

```typescript
type Message = string | string[]
let greet = (message: Message) => {
// ...
}
```
## 类型断言
类型断言就是告诉浏览器我非常确定的类型。

```typescript
// 尖括号 语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 类型守卫

类型守卫就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。

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

// 使用 in 类型守卫
function doSomething(person: A | B): void {
  if ("name" in person) {
// OK
// ...
  }
}

// 使用 typeof 类型守卫
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

// instanceof类型守卫
class Foo {
}

class Bar {
}

function test(input: Foo | Bar) {
  if (input instanceof Foo) {
// 这里 input 的类型「收紧」为 Foo
  } else {
// 这里 input 的类型「收紧」为 Bar
  }
}
```

## 泛型

### 泛型介绍

泛型就是通过给类型传参，得到一个更加通用的类型，就像给函数传参一样。

如下我们得到一个通用的泛型类型 T1，通过传参，可以得到 T2 类型 string[]、T3 类型 number[]：

```typescript
type T1<T> = T[]
type T2 = T1<string> // string[]
type T3 = T1<number> // number[]
```

如上 T 是变量，我们可以用任意其他变量名代替他。

```typescript
type T4<A> = A[]
type T5 = T4<string> // string[]
type T6 = T4<number> // number[]
```
### 命名规范

在 Typescript 泛型变量的命名规范中，默认了 4 种常见的泛型变量名，为提高可读性，不建议改为其他的变量名来定义。

T：表示第一个参数
K： 表示对象的键类型
V：表示对象的值类型
E：表示元素类型

### 泛型接口

泛型接口和上述示例类似，为接口类型传参：

```typescript
interface I1<T, U> {
  name: T;
  age: U;
}
type I2 = I1<string, number>
```

### 泛型约束(extends 操作符)

有时候，我们需要对泛型参数进行约束，限制每个变量的类型。Typescript 通过 extends 实现类型约束。

泛型约束语法如下：

泛型名 extends 类型
通过 T extends Length 约束了 T 的类型，必须是包含 length 属性，且 length 的类型必须是 number。

```typescript
interface Length {
  length: number
}

function fn1<T extends Length>(arg: T): number {
  return arg.length
}
```
通过 extends 约束了 K 必须是 T 的 key。

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

### 泛型参数默认值

泛型参数默认值，和函数参数默认值一样，在没有传参时，给定默认值。

```typescript
interface I4<T = string> {
  name: T;
}

const S1: I4 = { name: "123" } // 默认 name: string类型
const S2: I4<number> = { name: 123 }
```

### 泛型条件

条件类型和 Js 的条件判断意思一样，都是指如果满足条件，就 xx，否则 xx。

条件类型表达式：

```typescript
T extends U ? X : Y
```

如果 T 能够赋值给 U，那么类型是 X，否则类型是 Y。

```typescript
type T1<T> = T extends string ? 'string' : 'number'
type T2 = T1<string> // 'string'
type T3 = T1<number> // 'number
```

### 泛型推断(infer 操作符)

泛型推断的关键字是 infer，语法是 infer 类型。

一般是和泛型条件结合使用，结合实际例子理解：

如果泛型参数 T 能赋值给类型 `{t: infer Test}`，那么类型是推断类型 Test，否则类型是 string。

```typescript
type Foo<T> = T extends {t: infer Test} ? Test : string
```

泛型参数 number 没有 t 属性，所以类型是 string

```typescript
type One = Foo<number> // string
```

泛型参数的 t 属性是 boolean，所以类型是推断类型 boolean

```typescript
type Two = Foo<{ t: boolean }> // boolean
```

泛型参数的 t 属性是 () => void，所以类型是推断类型 () => void

```typescript
type Three = Foo<{ a: number, t: () => void }> // () => void
```

## 泛型工具类型

### 映射类型

映射类型，它是一种泛型类型，可用于把原有的对象类型映射成新的对象类型。

常见的映射类型语法：

```typescript
{ [ P in K ] : T }
{ [ P in K ] ?: T }
{ [ P in K ] -?: T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ?: T }
{ -readonly [ P in K ] ?: T }
```

举例说明，通过映射类型将所有属性变为可选：

```typescript
type Partial<T> = {
[P in keyof T]?: T[P]
}
```
### Partial

Typescript 已将一些常用的映射类型进行封装，如 Partial 就是用于将泛型的全部属性变为可选。

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}

type T1 = Partial<{
  name: string,
}>

const a: T1 = {} // 没有name属性也不会报错
```

### Required

Required 将泛型的所有属性变为必选。

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P]
}

type T2 = Required<{
  name?: string,
}>

const b: T2 = {} // ts报错，类型 "{}" 中缺少属性 "name"，但类型 "Required<{ name?: string | undefined; }>" 中需要该属性。ts(2741)
```

语法-?，是把?可选属性减去的意思

### Readonly

Readonly 将泛型的所有属性变为只读。

```typescript
type T3 = Readonly<{
  name: string,
}>

const c: T3 = {
  name: "tj",
}

c.name = "tj1" // ts 报错，无法分配到 "name" ，因为它是只读属性。ts(2540)
```

### Pick

Pick 从类型中选择一下属性，生成一个新类型。

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
这是一个新类型，T4={name: string}
*/

const d: T4 = {
  name: "tj",
}
```

### Record

Record 将 key 和 value 转化为 T 类型。

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
keyof any 对应的类型为 number | string | symbol，是可以做对象键的类型集合。

### ReturnType

ReturnType 获取 T 类型对应的返回值类型。

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

### Exclude

Exclude 将某个类型中属于另一个的类型移除掉。

```typescript
type Exclude<T, U> = T extends U ? never : T;
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
```

### Extract

Extract 从 T 中提取出 U。

```typescript
type Extract<T, U> = T extends U ? T : never;
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () =>void
```

### Omit

Omit 使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型。

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

NonNullable 用来过滤类型中的 null 及 undefined 类型。

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### Parameters

Parameters 用于获得函数的参数类型组成的元组类型。

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any
? P : never;

type A = Parameters<() =>void>; // []
type B = Parameters<typeofArray.isArray>; // [any]
type C = Parameters<typeofparseInt>; // [string, (number | undefined)?]
type D = Parameters<typeofMath.max>; // number[]
```

## 最后

赶紧收藏起来！
