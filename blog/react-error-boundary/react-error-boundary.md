---
slug: react-error-boundary
title: "React Error Boundary: A More Powerful Way to Handle React Errors"
description: Using react-error-boundary in a React application can lead to more robust error handling and easier debugging. By employing this library, you can spend less time managing errors and more time focusing on building outstanding product features.
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/react-error-boundary/cover.webp
tags: [react, component, library]
date: 2024-02-27T10:00
---

When building applications, errors are inevitable. Even with the best coding practices, unexpected runtime errors can occur, causing the application to crash. Therefore, handling errors is crucial. This article will explore how to capture and handle errors in React and introduce a more powerful way to handle React errors!

Why capture errors in React? Since React 16, if an error occurs during the lifecycle and is not caught, the entire application will unmount itself, leading to a crash. Before this, even small errors in components would remain on the screen, but now, certain trivial parts of the UI or uncaught errors from uncontrollable third-party libraries can cause the page to crash, resulting in a white screen and affecting the user experience. Thus, capturing and handling errors in React is essential.

In JavaScript, we can use `try...catch` to catch errors, for example:

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

`try...catch` is only suitable for imperative code, such as data fetching; it is not suitable for declarative code, such as JSX written within components. So, how do we capture errors in React? Fortunately, React 16 introduced a new concept: React Error Boundary. Let's see what it is and how to use it.

## What is React Error Boundary?

React Error Boundary (error boundary) is a way to handle errors in a React application. It is a React component that can capture JavaScript errors at any point in the child component tree, log these errors, and display a fallback UI instead of a crashed component tree (white screen). They are like a JavaScript `catch {}` block but only for components.

## Basic Usage

Before the introduction of error boundaries, errors within components would propagate and eventually lead to a white screen or an erroneous UI, affecting the user experience. However, with error boundaries, these unhandled errors can be effectively contained and managed.

We can set error boundaries across the entire application or have more granular control on individual components. It's important to note that error boundaries only capture errors during rendering, lifecycle methods, and constructors, but not the following:

- Event handling (for this, you need to use the conventional `try/catch` block)
- Asynchronous code (e.g., callbacks for `setTimeout` or `requestAnimationFrame`)
- Server-side rendering
- Errors occurring within the error boundary itself rather than its child components

Error boundaries were introduced in React v16. To use error boundaries, you need to define a class component and add one or both of the following lifecycle methods:

- `getDerivedStateFromError()`: This lifecycle method is called after an error is thrown to render a fallback UI. It is called during the rendering phase, so side effects are not allowed.
- `componentDidCatch()`: This method is used to log error information. It is called during the commit phase, so side effects can be executed.

Here's an example of an `ErrorBoundary` class component that implements both `getDerivedStateFromError()` and `componentDidCatch()` lifecycle methods:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display the fallback UI on the next render.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return <h1>Oops! Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Using in a component
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

Here, an `ErrorBoundary` error boundary component is defined. Its constructor initializes the state object and sets the `hasError` property to `false`, indicating no error has occurred.

- The `getDerivedStateFromError()` method is called when an error is caught. It takes an `error` object as a parameter and returns a new state object, setting `hasError` to `true` so that the fallback UI is displayed on the next render.
- The `componentDidCatch()` method is called after an error is caught. In this example, it logs the error and error information to the console.

In the `render()` method, the rendering of the original child components or the fallback UI is determined based on the value of `hasError`. If `hasError` is true, it renders `<h1>Oops! Something went wrong.</h1>`; otherwise, it renders the original child components. When using error boundaries in React components, you can wrap any component that needs error boundary protection with `<ErrorBoundary>`. This way, a crash in a small component won't cause the entire application to crash, resulting in a white screen. Only the component with the error will not render normally but will display the fallback UI, making it easier for us to quickly identify which component has a problem.

### Implementing Error Boundaries: Common Design Patterns

When implementing React error boundaries, you can use one of the following three design patterns based on your specific needs.

### Component-Level Error Boundaries

This approach involves wrapping individual components within an error boundary. It provides a high level of granularity, allowing for the separate handling of errors within each component. If a component crashes, the error boundary can catch the error and prevent it from propagating up the component tree. This means that only the crashed component is affected, and the rest of the application can continue to run normally.

Component-level error boundaries are particularly useful when you have components that are isolated from each other and do not share state. If one component fails to render, it does not affect the others. However, if many components require their own error boundaries, this method can lead to a lot of duplicated code.

### Layout-Level Error Boundaries

Layout-level error boundaries are placed higher in the component tree, typically wrapping groups of related components. This is a good choice when you have closely related components that share a common state.

When an error occurs in one of the components, a layout-level error boundary can catch it and display an error message or a fallback UI for the entire group of components. This can be a good way to handle errors that affect a whole section of the application, such as a sidebar or dashboard.

However, layout-level error boundaries are coarser than component-level boundaries. An error in one component can affect the entire group of components, even if the other components are functioning correctly.

### Top-Level Error Boundaries

Top-level error boundaries are placed at the very top of the component tree. They are a general solution that can handle any errors that occur in the application. This approach ensures that if an error happens anywhere in the application, it can be caught and handled gracefully.

This can prevent the entire application from crashing when an error occurs. However, top-level error boundaries are the coarsest method. An error can affect the entire application, not just the component or group of components where the error occurred.

## Using the `react-error-boundary` Library

As mentioned earlier, React Error Boundaries have some limitations and cannot handle certain special cases. Below is a more powerful way to handle errors in React: the `react-error-boundary` library. It is a small React error handling library that provides enhanced error handling capabilities and more flexible methods to deal with errors in React applications, allowing developers to create stronger and user-friendly error handling mechanisms.

`react-error-boundary` uses a more modern approach, adopting React Hooks and functional components, aligning with the current trends in React development. It uses a simple component called `ErrorBoundary` to wrap potentially error-prone code.

Here are the props provided by `react-error-boundary`:

- `FallbackComponent`: Used to specify a custom component to render when an error occurs within the error boundary. It offers flexibility to create a visually appealing and informative user interface to display errors and provide any necessary actions.
- `fallbackRender`: Similar to `FallbackComponent`, this prop is used to define a custom rendering function to render the error fallback interface. It provides more control over the rendering process and allows for more advanced error handling logic.
- `onError`: It accepts a callback function that is called when the error boundary catches an error, passing the error object and component stack trace information. It allows us to perform additional actions, such as logging errors or sending error reports to external services.
- `onReset`: It accepts a callback function that is triggered after the error boundary successfully resets. It can be used to perform cleanup operations or update the component's state after an error is recovered.
- `fallbackProps`: Allows passing additional `props` to the `FallbackComponent` or `fallbackRender` function. It can be used to provide context or additional data to the error fallback interface.
- `retry`: A boolean value that determines whether the error boundary allows retrying the operation that caused the error. When set to true, the `resetErrorBoundary` function can be called from the error fallback interface to retry the operation.

## ErrorBoundary Component

The `ErrorBoundary` component provided by `react-error-boundary` has a prop called `fallbackRender`, which accepts a function or a React element to display when an error is caught. Additionally, it provides a `resetKeys` prop that can reset the component's state when specific props change.

The beauty of `react-error-boundary` is that it avoids the need to manually write class components and handle state, doing all the work in the background, allowing developers to focus on building the application. Here's an example of using `react-error-boundary` in a component:

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Oops! Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

function MyComponent() {
  // Some component logic that might throw a JavaScript error
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // Cleanup application state
      }}
      resetKeys={['someKey']}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}
```

In this example, when an error is caught by `ErrorBoundary`, it renders `MyFallbackComponent`. It displays the error message and provides a button to reset the error state and attempt to render the component again. The `onReset` prop is used to clean up any side effects that occurred before the error was thrown, while the `resetKeys` prop is used to control when the component state should be reset.

The `onError` prop of `ErrorBoundary` is a function that is called whenever an error is caught. This property can be used to report errors:

```javascript
// Error reporting function
function logErrorToService(error, info) {
  // Error reporting logic...
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

One of the most powerful features of `react-error-boundary` is the ability to reset the error boundary state, clearing the error and attempting to re-render the component tree. This is very useful when the error is likely transient, such as a network error caused by a temporary disconnection.

The `resetErrorBoundary` function provided to the fallback component can be used to reset the error boundary. For example, this function can be called on a button click, allowing users to manually retry a failed operation.

The `ErrorBoundary` can accept an `onReset` prop, which is a function called before the error state is reset. This function is useful for performing any cleanup or state reset operations before the component is re-rendered after an error.

The `resetKeys` prop is an array of values that, when changed, trigger a reset of the error boundary. This is useful when you know that changing certain `props` or state values should resolve the error. Here's an example of how to use these properties:

 ```javascript
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Oops! Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

function MyComponent({ someKey }) {
  // Some component logic that might throw a JS error
}

function App() {
  const [someKey, setSomeKey] = React.useState(null)

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // Reset application state here
      resetKeys={[someKey]} // Reset error boundary when someKey changes
    >
      <MyComponent someKey={someKey} />
    </ErrorBoundary>
  )
}
```

In this example, if an error is caught within `MyComponent`, the `ErrorFallback` component is rendered, displaying the error message and a "Try Again" button. When this button is clicked, it calls `resetErrorBoundary`, triggering the `onReset` function and clearing the error state, allowing `MyComponent` to render again. If the `someKey prop` changes, the error boundary will also reset, providing a flexible way to recover from errors based on changes in the application state.

## useErrorHandler Hook

`react-error-boundary` also provides a `useErrorHandler` Hook, which is a custom React Hook that allows errors to be thrown from anywhere in a functional component. The thrown errors will be caught by the nearest error boundary, just as errors thrown from lifecycle methods or render functions in class components are caught by error boundaries.

The `useErrorHandler` Hook is particularly useful when dealing with asynchronous code, as errors thrown in this manner are not caught by component error boundaries. Here's an example of using `useErrorHandler`:

```javascript
import { useErrorHandler } from 'react-error-boundary'

function MyComponent() {
  const handleError = useErrorHandler()

  async function fetchData() {
    try {
      // Fetch data
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

In this example, `MyComponent` uses `useErrorHandler` to obtain a function for handling errors. The function is an asynchronous function for fetching data and catching errors. If an error occurs, it is passed to the `handleError` function, which throws the error so it can be caught by `ErrorBoundary`.

`useErrorHandler` provides a powerful way to handle errors in functional components. It works seamlessly with the `ErrorBoundary` component from `react-error-boundary`, making error handling in React more straightforward and clear.

## withErrorBoundary HOC

The `react-error-boundary` package also offers a solution with a `withErrorBoundary HOC` (Higher-Order Component). It is an HOC that wraps a given component to catch errors within that component. The advantage of this approach is that it adds an error boundary to a component without changing its original implementation or adding extra JSX to the component tree.

```javascript
import { withErrorBoundary } from 'react-error-boundary'

function MyComponent() {
  // Component logic
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

In this example, `MyComponent` is wrapped in an error boundary using `withErrorBoundary`. The second argument to `withErrorBoundary` is an optional object that can provide the same `props` as the `ErrorBoundary` component: `FallbackComponent`, `onError`, `onReset`, and `resetKeys`.

This HOC approach is an elegant solution for adding error boundaries to components without modifying their implementation, especially useful for class components where `Hooks` cannot be used. It demonstrates the flexibility of `react-error-boundary` in adapting to different coding styles and React development paradigms.

## Benefits

Having looked at the basic usage of `react-error-boundary`, let's summarize the benefits of using `react-error-boundary`:

- Easy to use: The library provides a simple and intuitive API that is easy to understand and use. It abstracts the complexity of error handling and presents a clear and straightforward way for developers to manage errors.
- Functional components friendly: Unlike traditional React error boundaries that require class components, react-error-boundary is designed specifically for functional components. It uses Hooks, aligning with the current trends in React development.
- Flexible: The library offers multiple ways to use error boundaries, including as components, higher-order components (HOCs), and custom Hooks. This flexibility allows developers to choose the best method based on their needs and coding style.
- Customizable fallback UI: The library allows for a customizable fallback UI to be displayed when an error is caught. This provides a better user experience than an application crash or a blank screen.
- Reset functionality: The library can reset the error state, allowing the application to recover from errors. This feature is particularly useful for transient errors that can be resolved without a full page reload.
- Error reporting: Errors can be logged to an error reporting service through the `onError` prop, providing valuable information for debugging and problem-solving.
- Community and maintenance: The library is widely used in the React community and actively maintained, so regular updates and improvements can be expected.

## Conclusion

Whether using class components or functional components, `react-error-boundary` has got you covered. Its flexible API includes components, higher-order components, and custom Hooks, providing multiple ways to integrate error handling into your components. Additionally, it supports custom fallback UIs, error reset functionality, and error reporting, ensuring a smooth user experience even when problems arise.

Using `react-error-boundary` in a React application can lead to more robust error handling and easier debugging. By employing this library, you can spend less time managing errors and more time focusing on building outstanding product features.