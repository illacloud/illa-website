"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[2186],{2624:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(1527),t=n(7214);const a={slug:"react-error-boundary",title:"React Error Boundary: A More Powerful Way to Handle React Errors",description:"Using react-error-boundary in a React application can lead to more robust error handling and easier debugging. By employing this library, you can spend less time managing errors and more time focusing on building outstanding product features.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/react-error-boundary/cover.webp",tags:["react","component","library"],date:"2024-02-27T10:00"},i=void 0,s={permalink:"/blog/react-error-boundary",source:"@site/blog/react-error-boundary/react-error-boundary.md",title:"React Error Boundary: A More Powerful Way to Handle React Errors",description:"Using react-error-boundary in a React application can lead to more robust error handling and easier debugging. By employing this library, you can spend less time managing errors and more time focusing on building outstanding product features.",date:"2024-02-27T10:00:00.000Z",formattedDate:"February 27, 2024",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"component",permalink:"/blog/tags/component"},{label:"library",permalink:"/blog/tags/library"}],readingTime:13.86,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"react-error-boundary",title:"React Error Boundary: A More Powerful Way to Handle React Errors",description:"Using react-error-boundary in a React application can lead to more robust error handling and easier debugging. By employing this library, you can spend less time managing errors and more time focusing on building outstanding product features.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/react-error-boundary/cover.webp",tags:["react","component","library"],date:"2024-02-27T10:00"},unlisted:!1,nextItem:{title:"Using Remark to Create an Interactive Table of Contents in a Next.js Blog",permalink:"/blog/react-markdown"},relatedPosts:[{title:"2024 has arrived, should I choose Shadcn UI?",description:"2024 has arrived, and the ecosystem of React component libraries remains vibrant.",permalink:"/blog/shadcn-ui-2024",formattedDate:"January 3, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.96,date:"2024-01-03T10:00:00.000Z"},{title:"Most Popular 5 React Component Libraries in 2024",description:"React is a popular JavaScript library for building user interfaces. It is used by many companies, including Facebook, Instagram, Netflix, Airbnb, and Uber.",permalink:"/blog/react-component-library",formattedDate:"January 29, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:6.14,date:"2024-01-29T10:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},l=[{value:"What is React Error Boundary?",id:"what-is-react-error-boundary",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Implementing Error Boundaries: Common Design Patterns",id:"implementing-error-boundaries-common-design-patterns",level:3},{value:"Component-Level Error Boundaries",id:"component-level-error-boundaries",level:3},{value:"Layout-Level Error Boundaries",id:"layout-level-error-boundaries",level:3},{value:"Top-Level Error Boundaries",id:"top-level-error-boundaries",level:3},{value:"Using the <code>react-error-boundary</code> Library",id:"using-the-react-error-boundary-library",level:2},{value:"ErrorBoundary Component",id:"errorboundary-component",level:2},{value:"useErrorHandler Hook",id:"useerrorhandler-hook",level:2},{value:"withErrorBoundary HOC",id:"witherrorboundary-hoc",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"When building applications, errors are inevitable. Even with the best coding practices, unexpected runtime errors can occur, causing the application to crash. Therefore, handling errors is crucial. This article will explore how to capture and handle errors in React and introduce a more powerful way to handle React errors!"}),"\n",(0,o.jsx)(r.p,{children:"Why capture errors in React? Since React 16, if an error occurs during the lifecycle and is not caught, the entire application will unmount itself, leading to a crash. Before this, even small errors in components would remain on the screen, but now, certain trivial parts of the UI or uncaught errors from uncontrollable third-party libraries can cause the page to crash, resulting in a white screen and affecting the user experience. Thus, capturing and handling errors in React is essential."}),"\n",(0,o.jsxs)(r.p,{children:["In JavaScript, we can use ",(0,o.jsx)(r.code,{children:"try...catch"})," to catch errors, for example:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:'const fetchData = async () => {\n  try {\n    return await fetch("https://some-url-that-might-fail.com"); \n  } catch (error) {\n    console.error(error); \n    return error;\n  }\n};\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"try...catch"})," is only suitable for imperative code, such as data fetching; it is not suitable for declarative code, such as JSX written within components. So, how do we capture errors in React? Fortunately, React 16 introduced a new concept: React Error Boundary. Let's see what it is and how to use it."]}),"\n",(0,o.jsx)(r.h2,{id:"what-is-react-error-boundary",children:"What is React Error Boundary?"}),"\n",(0,o.jsxs)(r.p,{children:["React Error Boundary (error boundary) is a way to handle errors in a React application. It is a React component that can capture JavaScript errors at any point in the child component tree, log these errors, and display a fallback UI instead of a crashed component tree (white screen). They are like a JavaScript ",(0,o.jsx)(r.code,{children:"catch {}"})," block but only for components."]}),"\n",(0,o.jsx)(r.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,o.jsx)(r.p,{children:"Before the introduction of error boundaries, errors within components would propagate and eventually lead to a white screen or an erroneous UI, affecting the user experience. However, with error boundaries, these unhandled errors can be effectively contained and managed."}),"\n",(0,o.jsx)(r.p,{children:"We can set error boundaries across the entire application or have more granular control on individual components. It's important to note that error boundaries only capture errors during rendering, lifecycle methods, and constructors, but not the following:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Event handling (for this, you need to use the conventional ",(0,o.jsx)(r.code,{children:"try/catch"})," block)"]}),"\n",(0,o.jsxs)(r.li,{children:["Asynchronous code (e.g., callbacks for ",(0,o.jsx)(r.code,{children:"setTimeout"})," or ",(0,o.jsx)(r.code,{children:"requestAnimationFrame"}),")"]}),"\n",(0,o.jsx)(r.li,{children:"Server-side rendering"}),"\n",(0,o.jsx)(r.li,{children:"Errors occurring within the error boundary itself rather than its child components"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Error boundaries were introduced in React v16. To use error boundaries, you need to define a class component and add one or both of the following lifecycle methods:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"getDerivedStateFromError()"}),": This lifecycle method is called after an error is thrown to render a fallback UI. It is called during the rendering phase, so side effects are not allowed."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"componentDidCatch()"}),": This method is used to log error information. It is called during the commit phase, so side effects can be executed."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Here's an example of an ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," class component that implements both ",(0,o.jsx)(r.code,{children:"getDerivedStateFromError()"})," and ",(0,o.jsx)(r.code,{children:"componentDidCatch()"})," lifecycle methods:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state to display the fallback UI on the next render.\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // Render any custom fallback UI\n      return <h1>Oops! Something went wrong.</h1>;\n    }\n\n    return this.props.children; \n  }\n}\n\n// Using in a component\nclass App extends React.Component {\n  render() {\n    return (\n      <ErrorBoundary>\n        <MyComponent />\n      </ErrorBoundary>\n    );\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Here, an ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," error boundary component is defined. Its constructor initializes the state object and sets the ",(0,o.jsx)(r.code,{children:"hasError"})," property to ",(0,o.jsx)(r.code,{children:"false"}),", indicating no error has occurred."]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["The ",(0,o.jsx)(r.code,{children:"getDerivedStateFromError()"})," method is called when an error is caught. It takes an ",(0,o.jsx)(r.code,{children:"error"})," object as a parameter and returns a new state object, setting ",(0,o.jsx)(r.code,{children:"hasError"})," to ",(0,o.jsx)(r.code,{children:"true"})," so that the fallback UI is displayed on the next render."]}),"\n",(0,o.jsxs)(r.li,{children:["The ",(0,o.jsx)(r.code,{children:"componentDidCatch()"})," method is called after an error is caught. In this example, it logs the error and error information to the console."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["In the ",(0,o.jsx)(r.code,{children:"render()"})," method, the rendering of the original child components or the fallback UI is determined based on the value of ",(0,o.jsx)(r.code,{children:"hasError"}),". If ",(0,o.jsx)(r.code,{children:"hasError"})," is true, it renders ",(0,o.jsx)(r.code,{children:"<h1>Oops! Something went wrong.</h1>"}),"; otherwise, it renders the original child components. When using error boundaries in React components, you can wrap any component that needs error boundary protection with ",(0,o.jsx)(r.code,{children:"<ErrorBoundary>"}),". This way, a crash in a small component won't cause the entire application to crash, resulting in a white screen. Only the component with the error will not render normally but will display the fallback UI, making it easier for us to quickly identify which component has a problem."]}),"\n",(0,o.jsx)(r.h3,{id:"implementing-error-boundaries-common-design-patterns",children:"Implementing Error Boundaries: Common Design Patterns"}),"\n",(0,o.jsx)(r.p,{children:"When implementing React error boundaries, you can use one of the following three design patterns based on your specific needs."}),"\n",(0,o.jsx)(r.h3,{id:"component-level-error-boundaries",children:"Component-Level Error Boundaries"}),"\n",(0,o.jsx)(r.p,{children:"This approach involves wrapping individual components within an error boundary. It provides a high level of granularity, allowing for the separate handling of errors within each component. If a component crashes, the error boundary can catch the error and prevent it from propagating up the component tree. This means that only the crashed component is affected, and the rest of the application can continue to run normally."}),"\n",(0,o.jsx)(r.p,{children:"Component-level error boundaries are particularly useful when you have components that are isolated from each other and do not share state. If one component fails to render, it does not affect the others. However, if many components require their own error boundaries, this method can lead to a lot of duplicated code."}),"\n",(0,o.jsx)(r.h3,{id:"layout-level-error-boundaries",children:"Layout-Level Error Boundaries"}),"\n",(0,o.jsx)(r.p,{children:"Layout-level error boundaries are placed higher in the component tree, typically wrapping groups of related components. This is a good choice when you have closely related components that share a common state."}),"\n",(0,o.jsx)(r.p,{children:"When an error occurs in one of the components, a layout-level error boundary can catch it and display an error message or a fallback UI for the entire group of components. This can be a good way to handle errors that affect a whole section of the application, such as a sidebar or dashboard."}),"\n",(0,o.jsx)(r.p,{children:"However, layout-level error boundaries are coarser than component-level boundaries. An error in one component can affect the entire group of components, even if the other components are functioning correctly."}),"\n",(0,o.jsx)(r.h3,{id:"top-level-error-boundaries",children:"Top-Level Error Boundaries"}),"\n",(0,o.jsx)(r.p,{children:"Top-level error boundaries are placed at the very top of the component tree. They are a general solution that can handle any errors that occur in the application. This approach ensures that if an error happens anywhere in the application, it can be caught and handled gracefully."}),"\n",(0,o.jsx)(r.p,{children:"This can prevent the entire application from crashing when an error occurs. However, top-level error boundaries are the coarsest method. An error can affect the entire application, not just the component or group of components where the error occurred."}),"\n",(0,o.jsxs)(r.h2,{id:"using-the-react-error-boundary-library",children:["Using the ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," Library"]}),"\n",(0,o.jsxs)(r.p,{children:["As mentioned earlier, React Error Boundaries have some limitations and cannot handle certain special cases. Below is a more powerful way to handle errors in React: the ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," library. It is a small React error handling library that provides enhanced error handling capabilities and more flexible methods to deal with errors in React applications, allowing developers to create stronger and user-friendly error handling mechanisms."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"react-error-boundary"})," uses a more modern approach, adopting React Hooks and functional components, aligning with the current trends in React development. It uses a simple component called ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," to wrap potentially error-prone code."]}),"\n",(0,o.jsxs)(r.p,{children:["Here are the props provided by ",(0,o.jsx)(r.code,{children:"react-error-boundary"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"FallbackComponent"}),": Used to specify a custom component to render when an error occurs within the error boundary. It offers flexibility to create a visually appealing and informative user interface to display errors and provide any necessary actions."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"fallbackRender"}),": Similar to ",(0,o.jsx)(r.code,{children:"FallbackComponent"}),", this prop is used to define a custom rendering function to render the error fallback interface. It provides more control over the rendering process and allows for more advanced error handling logic."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"onError"}),": It accepts a callback function that is called when the error boundary catches an error, passing the error object and component stack trace information. It allows us to perform additional actions, such as logging errors or sending error reports to external services."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"onReset"}),": It accepts a callback function that is triggered after the error boundary successfully resets. It can be used to perform cleanup operations or update the component's state after an error is recovered."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"fallbackProps"}),": Allows passing additional ",(0,o.jsx)(r.code,{children:"props"})," to the ",(0,o.jsx)(r.code,{children:"FallbackComponent"})," or ",(0,o.jsx)(r.code,{children:"fallbackRender"})," function. It can be used to provide context or additional data to the error fallback interface."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"retry"}),": A boolean value that determines whether the error boundary allows retrying the operation that caused the error. When set to true, the ",(0,o.jsx)(r.code,{children:"resetErrorBoundary"})," function can be called from the error fallback interface to retry the operation."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"errorboundary-component",children:"ErrorBoundary Component"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," component provided by ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," has a prop called ",(0,o.jsx)(r.code,{children:"fallbackRender"}),", which accepts a function or a React element to display when an error is caught. Additionally, it provides a ",(0,o.jsx)(r.code,{children:"resetKeys"})," prop that can reset the component's state when specific props change."]}),"\n",(0,o.jsxs)(r.p,{children:["The beauty of ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," is that it avoids the need to manually write class components and handle state, doing all the work in the background, allowing developers to focus on building the application. Here's an example of using ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," in a component:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"import { ErrorBoundary } from 'react-error-boundary'\n\nfunction MyFallbackComponent({ error, resetErrorBoundary }) {\n  return (\n    <div role=\"alert\">\n      <p>Oops! Something went wrong:</p>\n      <pre>{error.message}</pre>\n      <button onClick={resetErrorBoundary}>Try Again</button>\n    </div>\n  )\n}\n\nfunction MyComponent() {\n  // Some component logic that might throw a JavaScript error\n}\n\nfunction App() {\n  return (\n    <ErrorBoundary\n      FallbackComponent={MyFallbackComponent}\n      onReset={() => {\n        // Cleanup application state\n      }}\n      resetKeys={['someKey']}\n    >\n      <MyComponent />\n    </ErrorBoundary>\n  )\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, when an error is caught by ",(0,o.jsx)(r.code,{children:"ErrorBoundary"}),", it renders ",(0,o.jsx)(r.code,{children:"MyFallbackComponent"}),". It displays the error message and provides a button to reset the error state and attempt to render the component again. The ",(0,o.jsx)(r.code,{children:"onReset"})," prop is used to clean up any side effects that occurred before the error was thrown, while the ",(0,o.jsx)(r.code,{children:"resetKeys"})," prop is used to control when the component state should be reset."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"onError"})," prop of ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," is a function that is called whenever an error is caught. This property can be used to report errors:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:'// Error reporting function\nfunction logErrorToService(error, info) {\n  // Error reporting logic...\n  console.error("Caught an error:", error, info);\n}\n\nfunction App() {\n  return (\n    <ErrorBoundary\n      FallbackComponent={ErrorFallback}\n      onError={logErrorToService}\n    >\n      <MyComponent />\n    </ErrorBoundary>\n  );\n}\n'})}),"\n",(0,o.jsxs)(r.p,{children:["One of the most powerful features of ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," is the ability to reset the error boundary state, clearing the error and attempting to re-render the component tree. This is very useful when the error is likely transient, such as a network error caused by a temporary disconnection."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"resetErrorBoundary"})," function provided to the fallback component can be used to reset the error boundary. For example, this function can be called on a button click, allowing users to manually retry a failed operation."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," can accept an ",(0,o.jsx)(r.code,{children:"onReset"})," prop, which is a function called before the error state is reset. This function is useful for performing any cleanup or state reset operations before the component is re-rendered after an error."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"resetKeys"})," prop is an array of values that, when changed, trigger a reset of the error boundary. This is useful when you know that changing certain ",(0,o.jsx)(r.code,{children:"props"})," or state values should resolve the error. Here's an example of how to use these properties:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"import { ErrorBoundary } from 'react-error-boundary'\n\nfunction ErrorFallback({ error, resetErrorBoundary }) {\n return (\n   <div role=\"alert\">\n     <p>Oops! Something went wrong:</p>\n     <pre>{error.message}</pre>\n     <button onClick={resetErrorBoundary}>Try Again</button>\n   </div>\n )\n}\n\nfunction MyComponent({ someKey }) {\n // Some component logic that might throw a JS error\n}\n\nfunction App() {\n const [someKey, setSomeKey] = React.useState(null)\n\n return (\n   <ErrorBoundary\n     FallbackComponent={ErrorFallback}\n     onReset={() => setSomeKey(null)} // Reset application state here\n     resetKeys={[someKey]} // Reset error boundary when someKey changes\n   >\n     <MyComponent someKey={someKey} />\n   </ErrorBoundary>\n )\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, if an error is caught within ",(0,o.jsx)(r.code,{children:"MyComponent"}),", the ",(0,o.jsx)(r.code,{children:"ErrorFallback"}),' component is rendered, displaying the error message and a "Try Again" button. When this button is clicked, it calls ',(0,o.jsx)(r.code,{children:"resetErrorBoundary"}),", triggering the ",(0,o.jsx)(r.code,{children:"onReset"})," function and clearing the error state, allowing ",(0,o.jsx)(r.code,{children:"MyComponent"})," to render again. If the ",(0,o.jsx)(r.code,{children:"someKey prop"})," changes, the error boundary will also reset, providing a flexible way to recover from errors based on changes in the application state."]}),"\n",(0,o.jsx)(r.h2,{id:"useerrorhandler-hook",children:"useErrorHandler Hook"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"react-error-boundary"})," also provides a ",(0,o.jsx)(r.code,{children:"useErrorHandler"})," Hook, which is a custom React Hook that allows errors to be thrown from anywhere in a functional component. The thrown errors will be caught by the nearest error boundary, just as errors thrown from lifecycle methods or render functions in class components are caught by error boundaries."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"useErrorHandler"})," Hook is particularly useful when dealing with asynchronous code, as errors thrown in this manner are not caught by component error boundaries. Here's an example of using ",(0,o.jsx)(r.code,{children:"useErrorHandler"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"import { useErrorHandler } from 'react-error-boundary'\n\nfunction MyComponent() {\n  const handleError = useErrorHandler()\n\n  async function fetchData() {\n    try {\n      // Fetch data\n    } catch (error) {\n      handleError(error)\n    }\n  }\n\n  return {\n    ...\n  };\n}\n\nfunction App() {\n  return (\n    <ErrorBoundary FallbackComponent={ErrorFallback}>\n      <MyComponent />\n    </ErrorBoundary>\n  );\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, ",(0,o.jsx)(r.code,{children:"MyComponent"})," uses ",(0,o.jsx)(r.code,{children:"useErrorHandler"})," to obtain a function for handling errors. The function is an asynchronous function for fetching data and catching errors. If an error occurs, it is passed to the ",(0,o.jsx)(r.code,{children:"handleError"})," function, which throws the error so it can be caught by ",(0,o.jsx)(r.code,{children:"ErrorBoundary"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"useErrorHandler"})," provides a powerful way to handle errors in functional components. It works seamlessly with the ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," component from ",(0,o.jsx)(r.code,{children:"react-error-boundary"}),", making error handling in React more straightforward and clear."]}),"\n",(0,o.jsx)(r.h2,{id:"witherrorboundary-hoc",children:"withErrorBoundary HOC"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," package also offers a solution with a ",(0,o.jsx)(r.code,{children:"withErrorBoundary HOC"})," (Higher-Order Component). It is an HOC that wraps a given component to catch errors within that component. The advantage of this approach is that it adds an error boundary to a component without changing its original implementation or adding extra JSX to the component tree."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"import { withErrorBoundary } from 'react-error-boundary'\n\nfunction MyComponent() {\n  // Component logic\n}\n\nconst MyComponentWithErrorBoundary = withErrorBoundary(MyComponent, {\n  FallbackComponent: ErrorFallback,\n  onError: logErrorToService,\n  onReset: handleReset,\n  resetKeys: ['someKey']\n});\n\nfunction App() {\n  return <MyComponentWithErrorBoundary someKey={someKey} />\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, ",(0,o.jsx)(r.code,{children:"MyComponent"})," is wrapped in an error boundary using ",(0,o.jsx)(r.code,{children:"withErrorBoundary"}),". The second argument to ",(0,o.jsx)(r.code,{children:"withErrorBoundary"})," is an optional object that can provide the same ",(0,o.jsx)(r.code,{children:"props"})," as the ",(0,o.jsx)(r.code,{children:"ErrorBoundary"})," component: ",(0,o.jsx)(r.code,{children:"FallbackComponent"}),", ",(0,o.jsx)(r.code,{children:"onError"}),", ",(0,o.jsx)(r.code,{children:"onReset"}),", and ",(0,o.jsx)(r.code,{children:"resetKeys"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["This HOC approach is an elegant solution for adding error boundaries to components without modifying their implementation, especially useful for class components where ",(0,o.jsx)(r.code,{children:"Hooks"})," cannot be used. It demonstrates the flexibility of ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," in adapting to different coding styles and React development paradigms."]}),"\n",(0,o.jsx)(r.h2,{id:"benefits",children:"Benefits"}),"\n",(0,o.jsxs)(r.p,{children:["Having looked at the basic usage of ",(0,o.jsx)(r.code,{children:"react-error-boundary"}),", let's summarize the benefits of using ",(0,o.jsx)(r.code,{children:"react-error-boundary"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Easy to use: The library provides a simple and intuitive API that is easy to understand and use. It abstracts the complexity of error handling and presents a clear and straightforward way for developers to manage errors."}),"\n",(0,o.jsx)(r.li,{children:"Functional components friendly: Unlike traditional React error boundaries that require class components, react-error-boundary is designed specifically for functional components. It uses Hooks, aligning with the current trends in React development."}),"\n",(0,o.jsx)(r.li,{children:"Flexible: The library offers multiple ways to use error boundaries, including as components, higher-order components (HOCs), and custom Hooks. This flexibility allows developers to choose the best method based on their needs and coding style."}),"\n",(0,o.jsx)(r.li,{children:"Customizable fallback UI: The library allows for a customizable fallback UI to be displayed when an error is caught. This provides a better user experience than an application crash or a blank screen."}),"\n",(0,o.jsx)(r.li,{children:"Reset functionality: The library can reset the error state, allowing the application to recover from errors. This feature is particularly useful for transient errors that can be resolved without a full page reload."}),"\n",(0,o.jsxs)(r.li,{children:["Error reporting: Errors can be logged to an error reporting service through the ",(0,o.jsx)(r.code,{children:"onError"})," prop, providing valuable information for debugging and problem-solving."]}),"\n",(0,o.jsx)(r.li,{children:"Community and maintenance: The library is widely used in the React community and actively maintained, so regular updates and improvements can be expected."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(r.p,{children:["Whether using class components or functional components, ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," has got you covered. Its flexible API includes components, higher-order components, and custom Hooks, providing multiple ways to integrate error handling into your components. Additionally, it supports custom fallback UIs, error reset functionality, and error reporting, ensuring a smooth user experience even when problems arise."]}),"\n",(0,o.jsxs)(r.p,{children:["Using ",(0,o.jsx)(r.code,{children:"react-error-boundary"})," in a React application can lead to more robust error handling and easier debugging. By employing this library, you can spend less time managing errors and more time focusing on building outstanding product features."]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7214:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var o=n(959);const t={},a=o.createContext(t);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);