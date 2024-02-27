---
slug: react-error-boundary
title: "React error boundary: 更强大的 React 错误处理方式" 
description: 在 React 应用中使用 react-error-boundary 可以实现更健壮的错误处理、更容易的调试。通过使用这个库，可以花更少的时间管理错误，更多的时间专注于为构建出色的产品功能。
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/react-error-boundary/cover.webp
tags: [ react, component, library ]
date: 2024-02-27T10:00
---

在构建应用时，错误是不可避免的。即使采用最佳的代码实践，运行时也可能会出现意外错误，导致应用崩溃。因此，处理错误是非常重要的。本文就来看看如何在 React 中捕获和处理错误，以及更强大的 React 错误处理方式！

那为什么要在 React 中捕获错误呢？因为从 React 16 开始，React 生命周期中的错误如果未被停止，整个应用就会自行卸载，导致崩溃。在此之前，即使组件中存在一些小错误，它也会保留在屏幕上，但是现在，UI中某些无关紧要的部分，甚至是无法控制的某些第三方库中的未捕获错误，都可能导致页面崩溃，出现白屏的现象，影响用户体验。所以，捕获并处理 React 中的错误至关重要。

在JavaScript中，我们可以使用 `try...catch` 来捕获错误，例如：

```javascript
const fetchData = async () => {
  try {
    return await fetch("https://some-url-that-might-fail.com");
  } catch (error) {
    console.error(error); 
    return error;
  }
};
```

`try...catch`仅适用于命令式代码，例如数据获取；而不是适用于声明式代码，例如在组件中编写的 JSX 就是声明式代码。那该如何在 React 中捕获错误呢？幸运的是，在 React 16 中，引入了一个新概念：React Error Boundary。下面来看一下它是什么，以及如何使用。

## 什么是 React Error Boundary？

React Error Boundary （错误边界）是 React 应用中错误处理的一种方式。它是一个 React 组件，可以捕获子组件树中任何位置的 JavaScript 错误，并记录这些错误，显示一个备选 UI，而不是一个崩溃的组件树（白屏）。它们就像一个 JavaScript 的 `catch {}` 块，但是只针对组件。

## 基本使用

在错误边界引入之前，组件内部的错误会不断传播并最终导致白屏或错误的 UI，影响用户体验。但是，使用错误边界，这些未处理的错误可以被有效地包含和管理。

我们可以在整个应用范围内设置错误边界，也可以在各个组件上进行更细粒度的控制。需要注意的是，错误边界只会捕获渲染时、生命周期方法和构造函数中的错误，但不会捕获以下错误：

- 事件处理（对于这种情况，需要使用常规的 `try/catch` 块）
- 异步代码（例如，`setTimeout` 或 `requestAnimationFrame` 回调函数）
- 服务端渲染
- 错误发生在错误边界本身而不是其子组件中时

错误边界是在 React v16 中引入的，要使用错误边界，需要定义一个类组件，并添加以下生命周期方法之一或两个：

- `getDerivedStateFromError()`: 这个生命周期方法在错误抛出后渲染备选 UI。它在渲染阶段被调用，所以不允许有副作用。
- `componentDidCatch()`: 这个方法用于记录错误信息。它在提交阶段被调用，所以可以执行副作用。

下面来看一个 `ErrorBoundary` 类组件的例子，它实现了 `getDerivedStateFromError()` 和 `componentDidCatch()` 生命周期方法：

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state，下一次渲染将展示备选 UI。
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 可以渲染任意自定义的备选 UI
      return <h1>出错啦！</h1>;
    }

    return this.props.children; 
  }
}

// 在组件中使用
class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    );
  }
}
```

这里定义了一个名为 `ErrorBoundary` 的错误边界组件。它的构造函数初始化了状态对象，并设置 `hasError` 属性为 `false`，表示当前没有发生错误。

- `getDerivedStateFromError()` 方法在捕获到错误时会被调用。它接收一个 `error` 对象作为参数，并返回一个新的状态对象，将 `hasError` 属性设置为 `true`，以便在下一次渲染时展示备选的 UI。
- `componentDidCatch()` 方法在捕获到错误后会被调用。在这个例子中，将错误和错误信息输出到控制台。

在 `render()` 方法中，根据 `hasError` 的值来决定渲染原始子组件还是备选的 UI。如果 `hasError` 为 true，则渲染 `<h1>出错啦！</h1>`，否则渲染原始子组件。在组件中使用错误边界时，将需要进行错误边界保护的组件包裹在 `<ErrorBoundary>` 组件中即可。

在React组件中，我们可以使用 Error Boundary 来包裹任何组件，这样就不会因为一个小组件的崩溃，而导致整个组件崩溃，致使出现白屏。只有出现错误的组件处不能正常渲染，而是渲染备选 UI。也方便我们快速查找是哪个组件出了问题。

## 实现错误边界的通用设计模式

在实现 React 错误边界时，可以根据实际情况使用以下三种设计模式。

### 组件级错误边界

这种方法涉及将单个组件包装在错误边界中。这提供了高度的细粒度，允许单独处理每个组件中的错误。如果一个组件崩溃，错误边界可以捕获错误并阻止其向上传播到组件树。这意味着只有崩溃的组件受到影响，其余的应用可以继续正常运行。

组件级错误边界在有彼此隔离且不共享状态的组件时特别有用。如果其中一个组件渲染失败，它不会影响其他组件。然而，如果许多组件需要拥有自己的错误边界，这种方法可能导致很多重复代码。

### 布局级错误边界

布局级错误边界位于组件树中更高的位置，通常包装相关组件组。当有密切相关的组件并共享一个公共状态时，这是一个不错的选择。

当一个组件发生错误时，布局级别的错误边界可以捕获它并为整个组件组显示一个错误消息或备用 UI。这可以成为处理影响应用整个部分的错误的一种好方法，例如侧边栏或仪表板等。

然而，布局级错误边界比组件级粒度更大。一个组件的错误可能会影响整个组件组，即使其他组件可以正常工作。

### 顶层错误边界

顶层错误边界位于组件树的最顶部。它是一个通用的解决方案，可以处理应用中发生的任何错误。这种方法确保如果应用中的任何地方发生错误，都可以捕获并进行优雅处理。

这可以防止整个应用在发生错误时崩溃。然而，顶层错误边界是粒度最大的方法。一个错误可能会影响整个应用，而不仅仅是错误发生的组件或组件组。

## 使用 react-error-boundary 库

上面我们提到，React Error Boundary 有一些限制，无法处理某些特殊情况。下面就介绍一个更强大的 React 错误处理方式：`react-error-boundary`。它是一个小型的 React 错误处理库，它提供了增强的错误处理功能和更灵活的方法来处理 React 应用中的错误，使开发人员能够创建更强大且用户友好的错误处理机制。

`react-error-boundary`使用了更现代化的方法，采用了 React Hooks 和函数组件，与当前 React 开发的趋势更加一致。它使用了一个简单的组件叫做 ErrorBoundary，可以用它来包裹潜在的容易出错的代码。

下面是 `react-error-boundary` 提供的 props：

- `FallbackComponent`：用于指定一个自定义组件，在错误边界内发生错误时进行渲染。它提供了灵活性，可以创建一个视觉上吸引人且信息丰富的用户界面来显示错误，并提供任何必要的操作。
- `fallbackRender`：类似于 FallbackComponent，该属性用于定义一个自定义的渲染函数来渲染错误回退界面。它提供了对渲染过程的更多控制，并允许进行更高级的错误处理逻辑。
- `onError`：其接受一个回调函数，在错误边界捕获到错误时调用该函数，并传递错误对象和组件堆栈跟踪信息。它使我们能够执行额外的操作，例如记录错误或将错误报告发送到外部服务。
- `onReset`：其接受一个回调函数，在错误边界成功重置后触发。它可以用于执行清理操作或在错误恢复后更新组件的状态。
- `fallbackProps`：允许向 `FallbackComponent` 或 `fallbackRender` 函数传递额外的 `props`。它可以用于提供上下文或附加数据给错误回退界面。
- `retry`：布尔值，确定错误边界是否允许重试导致错误的操作。当设置为 true 时，`resetErrorBoundary` 函数可以从错误回退界面中调用以重试操作。

## ErrorBoundary 组件

`react-error-boundary` 提供的 `ErrorBoundary` 组件有一个叫做 `fallbackRender` 的属性，它接受一个函数或一个 React 元素，在捕获到错误时显示。此外，它还提供了一个 `resetKeys` 属性，可以在特定 props 改变时重置组件的状态。

`react-error-boundary` 的美妙之处在于避免了手动编写类组件和处理状态，在后台完成了所有工作，使开发人员能够专注于构建应用。下面来看一个在组件中使用 `react-error-boundary` 的例子：

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>出错啦:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>点击重试</button>
    </div>
  )
}

function MyComponent() {
  // 可能会抛出 JavaScript 错误的一些组件逻辑
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // 重置应用状态
      }}
      resetKeys={['someKey']}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}
```

在这个例子中，当 `ErrorBoundary` 捕获到错误时，会渲染 `MyFallbackComponent`。它显示错误消息并提供一个按钮来重置错误状态并尝试再次渲染该组件。`onReset` 属性用于清理在抛出错误之前发生的副作用，而 `resetKeys` 属性用于控制何时重置组件状态。

`ErrorBoundary` 的 `onError` 属性是一个函数，每当捕获到错误时都会被调用。可以使用该属性将错误进行上报：

```javascript
// 错误上报函数
function logErrorToService(error, info) {
  // 错误上报逻辑...
  console.error("Caught an error:", error, info);
}

function App() {
  return (
    <ErrorBoundary
    	FallbackComponent={ErrorFallback}
      onError={logErrorToService}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}
```

`react-error-boundary` 最强大的功能之一是就是能够重置错误边界状态，即清除错误并尝试重新渲染组件树。当错误可能是短暂的，例如由于临时断开连接而发生的网络错误时，这是非常有用的。

可以使用提供给回退组件的 `resetErrorBoundary` 函数来重置错误边界。例如，可以在按钮点击时调用此函数，允许用户手动重试失败的操作。

`ErrorBoundary` 可以接受一个 `onReset` 属性，该属性是一个函数，在错误状态重置之前调用。此函数对于在错误后重新渲染之前执行任何清理或状态重置操作非常有用。

`resetKeys` 属性是一个值数组，当更改时，会触发错误边界的重置。当知道更改某些 `props` 或状态值应该解决错误时，这非常有用。以下是如何使用这些属性的例子：

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>出错啦:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>点击重试</button>
    </div>
  )
}

function MyComponent({ someKey }) {
  // 可能会抛出 JS 错误的一些组件逻辑
}

function App() {
  const [someKey, setSomeKey] = React.useState(null)

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // 在这里重置应用状态
      resetKeys={[someKey]} // 当 someKey 更改时重置错误边界
    >
      <MyComponent someKey={someKey} />
    </ErrorBoundary>
  )
}
```

在这个例子中，如果 `MyComponent` 中捕获到错误，则渲染 `ErrorFallback` 组件，显示错误消息和一个“点击重试”按钮。当点击此按钮时，它调用 `resetErrorBoundary`，触发 `onReset` 函数并清除错误状态，从而再次渲染 `MyComponent`。如果 s`omeKey prop` 更改，则错误边界也会重置，提供了一种灵活的方式，根据应用程状态的更改恢复错误。

## useErrorHandler Hook

`react-error-boundary` 还提供了一个 `useErrorBoundary` Hook，它是一个自定义的 React Hook，允许在函数组件的任何地方抛出错误。被抛出的错误将被最近的错误边界捕获，就像从类组件的生命周期方法或渲染函数中抛出错误时会被错误边界捕获一样。

当处理异步代码时，`useErrorHandler` Hook 特别有用，因为抛出的错误不会被组件的错误边界捕获。以下是使用 `useErrorHandler` 的例子：

```javascript
import { useErrorHandler } from 'react-error-boundary'

function MyComponent() {
  const handleError = useErrorHandler()

  async function fetchData() {
    try {
      // 获取数据
    } catch (error) {
      handleError(error)
    }
  }

  return {
    ...
  };
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

在这个例子中，`MyComponent` 使用 `useErrorHandler` 获取一个可以用来处理错误的函数。`∑` 函数是一个异步函数，用于获取数据并捕获错误。如果发生错误，它会传递给 `handleError` 函数，该函数会抛出错误，以便可以被 `ErrorBoundary` 捕获。

`useErrorHandler` 提供了一种强大的方式来处理函数组件中的错误。它与 `react-error-boundary` 的 `ErrorBoundary` 组件无缝配合，使得在 React 中进行错误处理变得更加简单明了。

## withErrorBoundary HOC

`react-error-boundary` 包还提供了一个 `withErrorBoundary HOC` 的解决方案。它是一个高阶组件，用于包装将给定的组件，以捕获该组件中的错误。这样做的好处是，在不改变组件原始实现或向组件树中添加额外 JSX 的情况下，为组件添加错误边界。

```javascript
import { withErrorBoundary } from 'react-error-boundary'

function MyComponent() {
  // 组件逻辑
}

const MyComponentWithErrorBoundary = withErrorBoundary(MyComponent, {
  FallbackComponent: ErrorFallback,
  onError: logErrorToService,
  onReset: handleReset,
  resetKeys: ['someKey']
});

function App() {
  return <MyComponentWithErrorBoundary someKey={someKey} />
}
```

在这个例子中，使用 `withErrorBoundary` 将 `MyComponent` 包装在一个错误边界内。`withErrorBoundary` 的第二个参数是一个可选对象，可以在其中提供与 `ErrorBoundary` 组件相同的 `props：FallbackComponent`、`onError`、`onReset` 和 `resetKeys`。

这种高阶组件（HOC）的方法是在不修改组件实现的情况下为组件添加错误边界的一种优雅的解决方案，特别适用于无法使用 `Hooks` 的类组件。它展示了 `react-error-boundary` 在适应不同的编码风格和 React 开发范式方面的灵活性。

## 优势

看完了 `react-error-boundary` 的基本使用方式，我们来总结一下使用 `react-error-boundary` 的好处：

- 简单易用：该库提供了简单直观的 API，易于理解和使用。它抽象了错误处理的复杂性，并向开发人员呈现了一种简单明了的方式来管理错误。
- 适用于函数组件 ：与传统的 React 错误边界需要使用类组件不同，react-error-boundary 是专为函数组件而设计的。它使用了 Hooks，更符合当前 React 开发的趋势。
- 灵活多样：该库提供了多种使用错误边界的方式，包括作为组件、高阶组件 (HOC) 和自定义 Hook。这种灵活性使开发人员能够根据自己的需求和编码风格选择最佳的方法。
- 可自定义的回退界面：该库允许在捕获到错误时显示可自定义的回退界面。这比应用崩溃或显示空白屏幕要提供更好的用户体验。
- 重置功能：该库可以重置错误状态，使应用能够从错误中恢复。这个功能对于可以在不需要完全重新加载页面的情况下解决的临时性错误特别有用。
- 错误报告：通过 onError 属性，错误可以被记录到错误报告服务中，提供了有价值的信息用于调试和解决问题。
- 社区和维护：该库在 React 社区中得到广泛使用，并且积极维护，因此可以期待定期的更新和改进。

## 总结

无论是使用类组件还是函数组件，`react-error-boundary` 都能满足需求。它灵活的API包括组件、高阶组件和自定义Hooks，提供了多种将错误处理集成到组件中的方式。此外，它支持自定义备用 UI、错误重置功能和错误报告，即使出现问题，也能确保顺畅的用户体验。

在 React 应用中使用 `react-error-boundary` 可以实现更健壮的错误处理、更容易的调试。通过使用这个库，可以花更少的时间管理错误，更多的时间专注于为构建出色的产品功能。


