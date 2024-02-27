 ---
slug: react-error-boundary
title: "React-Fehlergrenze: Wie man React-Fehler effektiver behandeln kann"
description: Durch die Verwendung von react-error-boundary in Ihrer React-Anwendung wird eine leistungsstarke Fehlerbehandlung und eine einfachere Debugging möglich. Mit dieser Bibliothek können Sie Zeit für das Fehlermanagement sparen und sich auf das Aufbauen hervorragender Produktfunktionen konzentrieren.
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/react-error-boundary/cover.webp
tags: [react, Komponenten, Bibliothek]
date: 2024-02-27T10:00
---

Beim Aufbau einer Anwendung ist es unvermeidlich, dass Fehler auftreten. Selbst mit den besten Codierungspraktiken kann es zu unerwarteten Laufzeitfehlern kommen, die die Anwendung zum Absturz bringen. Daher ist die Fehlerbehandlung sehr wichtig. In diesem Artikel werden wir uns mit der Methode zur Erfassung und Behandlung von Fehlern in React beschäftigen und eine leistungsstärkere Methode für die Behandlung von React-Fehlern vorstellen!

Warum ist es wichtig, Fehler in React zu erfassen? Seit React 16 führt das Auftreten von Fehlern während des Lebenszyklus dazu, dass die gesamte Anwendung unmontiert und abstürzt, wenn sie nicht erfasst werden. Früher blieben kleine Fehler innerhalb von Komponenten auf dem Bildschirm, aber heute können unerfasste Fehler von Drittanbieterbibliotheken, die nicht kontrolliert werden können, einen Teil der Benutzeroberfläche oder die Seite zum Absturz bringen, ein weißes Bildschirm und beeinträchtigen die Benutzererfahrung. Daher ist es notwendig, Fehler in React zu erfassen und zu behandeln.

In JavaScript können Sie Fehler mit `try...catch` erfassen. Zum Beispiel:

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

`try...catch` ist gut für imperativen Code geeignet, wie z.B. Datenabholung, aber nicht für deklarativen Code wie JSX, der innerhalb von Komponenten geschrieben ist. Wie kann man dann Fehler in React erfassen? Glücklicherweise wurde mit React 16 das neue Konzept der React-Fehlergrenze eingeführt. Lassen Sie uns sehen, was das ist und wie man es verwendet.

## Was ist eine React-Fehlergrenze?

Eine React-Fehlergrenze ist eine Methode zur Behandlung von Fehlern in einer React-Anwendung. Sie dient dazu, JavaScript-Fehler irgendwo im Baum der Kinderkomponenten zu erfassen und diese zu loggen und stattdessen eine Fallback-UI anzuzeigen, anstatt den gesamten Baum der Komponenten (einen weißen Bildschirm) zu unmontieren. Sie sind wie `catch {}`-Blöcke in JavaScript, die nur auf Komponenten angewendet werden.

## Grundlegende Verwendung

Bevor Fehlergrenzen eingeführt wurden, würden Fehler in Komponenten weitergegeben und letztendlich zu einem weißen Bildschirm oder einer falschen UI führen, was die Benutzererfahrung beeinträchtigt. Mit Fehlergrenzen können Sie diese unverarbeiteten Fehler effektiv containerisieren und verwalten.

Sie können entweder eine Fehlergrenze für die gesamte Anwendung einrichten oder eine detailliertere Kontrolle für einzelne Komponenten haben. Fehlergrenzen erfassen nur Fehler, die während der Rendering-, Lebenszyklusmethoden oder Konstruktoren auftreten, und erfassen nicht:

- Ereignisbehandlungen (hier ist es erforderlich, normale `try/catch`-Blöcke zu verwenden)
- Asynchroner Code (z.B. Callbacks von `setTimeout` oder `requestAnimationFrame`)
- Serverseitige Rendering
- Fehler, die innerhalb der Fehlergrenze selbst auftreten, nicht die Kinderkomponenten

Um Fehlergrenzen in React v16 zu verwenden, müssen Sie eine Klassenkomponente definieren und eine oder beide der folgenden Lebenszyklusmethoden hinzufügen:

- `getDerivedStateFromError()`: Ein Lebenszyklus-Methode, die nach einem geworfenen Fehler aufgerufen wird, um die Fallback-UI für das nächste Rendering zu aktualisieren. Sie wird während der Renderingphase aufgerufen, daher sind Nebeneffekte nicht erlaubt.
- `componentDidCatch()`: Eine Methode, die zum Protokollieren von Fehlerinformationen verwendet wird. Sie wird während der Commit-Phase aufgerufen, daher können Nebeneffekte ausgeführt werden.

Hier ist ein Beispiel einer `ErrorBoundary`-Klassenkomponente, die beide Lebenszyklusmethoden `getDerivedStateFromError()` und `componentDidCatch()` implementiert:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Aktualisieren Sie den Zustand, um die Fallback-UI im nächsten Rendering anzuzeigen.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Rendern Sie die benutzerdefinierte Fallback-UI
      return <h1>Oops! Etwas ist schiefgelaufen.</h1>;
    }

    return this.props.children; 
  }
}

// Verwendung in Komponenten
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

Hier ist die `ErrorBoundary`-Fehlergrenze definiert. Der Konstruktor initialisiert ein Zustandsobjekt und setzt die `hasError`-Eigenschaft auf `false`, was bedeutet, dass es noch keine Fehler gab.

- Die `getDerivedStateFromError()`-Methode wird aufgerufen, wenn ein Fehler abgefangen wird, und nimmt ein `error`-Objekt als Parameter entgegen und gibt ein neues Zustandsobjekt zurück. Dadurch wird die Fallback-UI im nächsten Rendering angezeigt.
- Die `componentDidCatch()`-Methode wird nach dem Abfangen eines Fehlers aufgerufen und protokolliert die Fehler- und Fehlerinformationen im Konsolenprotokoll.

In der `render()`-Methode wird basierend auf dem Wert von `hasError` entschieden, ob die ursprünglichen Kinderkomponenten gerendert werden sollen oder die Fallback-UI. Wenn `hasError` wahr ist, wird `<h1>Oops! Etwas ist schiefgelaufen.</h1>` gerendert. Andernfalls werden die ursprünglichen Kinderkomponenten gerendert. Um eine Fehlergrenze in einer React-Komponente zu verwenden, wickeln Sie den zu schützenden beliebigen Komponenten in `<ErrorBoundary>` ein. Dadurch wird verhindert, dass ein Absturz eines kleinen Komponenten die gesamte Anwendung zum Absturz bringt, und es wird ein weißer Bildschirm entsteht. Nur der fehlerhafte Komponenten wird nicht ordnungsgemäß gerendert, und die Fallback-UI wird angezeigt, was es einfacher macht, das betroffene Komponentenproblem schnell zu identifizieren.

### Fehlergrenze Implementierung: Allgemeine Designmuster

Beim Implementieren einer Fehlergrenze in React können Sie eine der folgenden drei Designmuster verwenden.

### Komponentenlevel-Fehlergrenze

Dieses Ansatz ermöglicht es, einzelne Komponenten in einer Fehlergrenze zu wickeln. Dadurch bietet es eine hohe Granularität, um Fehler innerhalb jeder Komponente zu isolieren und zu behandeln. Wenn eine Komponente abstürzt, hält die Fehlergrenze den Fehler ab und verhindert, dass er sich durch den Komponentenbaum ausbreitet. Das bedeutet, dass nur der abstürzende Komponenten betroffen ist und die restliche Anwendung normal ausgeführt wird.

Komponentenlevel-Fehlergrenzen sind besonders nützlich, wenn Sie Komponenten haben, die voneinander unabhängig sind und keinen Zustand teilen. Wenn eine Komponente das Rendering fehlschlägt, beeinflusst sie keine anderen Komponenten. Allerdings kann diese Methode potenziell viel redundanten Code verursachen, wenn viele Komponenten ihre eigenen Fehlergrenzen benötigen.

### Top-Level Error Boundaries

Top-Level Error Boundaries are placed at the very top of the component tree. They are a general solution for handling any errors within an application. This approach guarantees that no matter where an error occurs in the application, it can be caught and handled gracefully.

This prevents the entire application from crashing when an error occurs. However, Top-Level Error Boundaries are the coarsest method. Errors can affect not only the component or group of components where the error occurred but also the entire application.

## Using the `react-error-boundary` Library

As mentioned earlier, React Error Boundaries have some limitations and may not handle specific special cases. The following is a more powerful method for handling errors in React: the `react-error-boundary` library. This is a small React error handling library that provides enhanced functionality and a more flexible approach for processing errors in React applications, allowing developers to create more robust and user-friendly error handling mechanisms.

`react-error-boundary` adopts a more modern approach with React Hooks and functional components, aligning with the current trends in React development. It uses a simple component `ErrorBoundary` to wrap potential errors.

The props provided by `react-error-boundary` are as follows:

- `FallbackComponent`: Used to specify a custom component to render when an error occurs within the error boundary. It provides flexibility to create a visually appealing and informative user interface to display errors and offer necessary actions.
- `fallbackRender`: Similar to `FallbackComponent`, this prop is used to define a custom rendering function for the error fallback interface. It allows for more control over the rendering process and enables more advanced error handling logic.
- `onError`: Accepts a callback function that is invoked when the error boundary catches an error. It passes the error object and component stack trace information. Additional actions such as logging errors or sending error reports to external services can be performed.
- `onReset`: Accepts a callback function that is triggered after the error boundary has been successfully reset. It can be used to update the component's state or perform cleanup operations after the error has been recovered.
- `fallbackProps`: Allows passing additional `props` to `FallbackComponent` or `fallbackRender` function. It can be used to provide context and additional data to the error fallback interface.
- `retry`: A boolean value that determines whether the error boundary allows the operation that caused the error to be retried. If set to true, the `resetErrorBoundary` function can be called from the error fallback interface to retry the operation.

## ErrorBoundary Component

The `ErrorBoundary` component provided by `react-error-boundary` has a prop `fallbackRender` that accepts a function or React element to display when an error is caught. It also provides a prop `resetKeys` that allows the component's state to be reset when specific props change.

The charm of `react-error-boundary` is that it eliminates the need to manually write class components and manage state. Everything is done in the background, allowing developers to focus on building the application. Here is an example of using `react-error-boundary` in a component:

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p> Oops! Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}> Retry </button>
    </div>
  )
}

function MyComponent() {
  // Component logic that may throw a JavaScript error
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // Clean up the application state
      }}
      resetKeys={['someKey']}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}
```

In this example, when `ErrorBoundary` catches an error, it renders `MyFallbackComponent`. It displays the error message and provides a button to reset the error state and attempt to re-render the component. The `onReset` prop is used to perform cleanup actions after the error, and the `resetKeys` prop is used to control the timing of when the component's state is reset.

The `onError` prop of `ErrorBoundary` is a function that is called every time an error is caught. This property can be used to report errors:

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

One of the most powerful features of `react-error-boundary` is the ability to reset the state of the error boundary. This allows errors to be cleared and the component tree to be re-rendered. This is very convenient when the error is likely temporary, such as a transient network error.

The `resetErrorBoundary` function provided to the fallback component can be used to reset the error boundary. For example, this function can be called on a button click, allowing users to manually retry a failed operation.

`ErrorBoundary` can accept a `onReset` prop that is called before the error state is reset. This function is helpful for performing cleanup and state reset operations before the component is re-rendered after the error.

The `resetKeys` prop is an array of values that reset the error boundary when a specific `prop` or state value changes. This is convenient when a change in specific `props` or state values resolves the error. Here is an example of how to use these properties:

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p> Oops! Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}> Retry </button>
    </div>
  )
}

function MyComponent({ someKey }) {
  // Component logic that may throw a JavaScript error
}

function App() {
  const [someKey, setSomeKey] = React.useState(null)

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // Reset the application state here
      resetKeys={[someKey]} // Reset the error boundary when someKey changes
    >
      <MyComponent someKey={someKey} />
    </ErrorBoundary>
  )
}
```

Eines der mächtigsten Features von `react-error-boundary` ist die Fähigkeit, den Zustand der Fehlergrenze zurückzusetzen. Dies ermöglicht es, Fehler zu bereinigen und einen erneuten Render-Versuch des Komponentenbaums zu unternehmen. Dies ist besonders nützlich, wenn Fehler temporär sein könnten, wie z.B. bei einem vorübergehenden Netzwerkfehler.

Die Funktion `resetErrorBoundary`, die der Fallback-Komponente bereitgestellt wird, kann verwendet werden, um die Fehlergrenze zurückzusetzen. Beispielsweise kann diese Funktion durch einen Button-Klick aufgerufen werden, um dem Benutzer die Möglichkeit zu geben, eine fehlgeschlagene Aktion manuell erneut zu versuchen.

`ErrorBoundary` kann `onReset` Props akzeptieren, die vor dem Zurücksetzen des Fehlerzustands aufgerufen werden. Diese Funktion kann hilfreich sein, um Bereinigungs- oder Zustandsrücksetzungsaktionen durchzuführen, bevor die Komponente nach einem Fehler erneut gerendert wird.

Die `resetKeys` Props sind ein Array von Werten, die die Fehlergrenze zurücksetzen, wenn Änderungen an bestimmten `props` oder Zustandswerten vorgenommen werden. Dies ist nützlich, wenn Änderungen an bestimmten `props` oder Zustandswerten den Fehler beheben können. Ein Beispiel für die Verwendung dieser Eigenschaften ist wie folgt:

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Oops! Etwas ist schief gelaufen:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Erneut versuchen</button>
    </div>
  )
}

function MyComponent({ someKey }) {
  // Komponentenlogik, die einen JavaScript-Fehler werfen könnte
}

function App() {
  const [someKey, setSomeKey] = React.useState(null)

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // Setzen Sie hier den Zustand der Anwendung zurück
      resetKeys={[someKey]} // Setzt die Fehlergrenze zurück, wenn `someKey` geändert wird
    >
      <MyComponent someKey={someKey} />
    </ErrorBoundary>
  )
}
```

In diesem Beispiel, wenn ein Fehler innerhalb von `MyComponent` gefangen wird, wird die `ErrorFallback`-Komponente gerendert, um die Fehlermeldung anzuzeigen und einen "Erneut versuchen"-Button bereitzustellen. Wenn dieser Button geklickt wird, wird die `resetErrorBoundary`-Funktion aufgerufen, um die `onReset`-Funktion auszulösen und den Fehlerzustand zu bereinigen, bevor `MyComponent` erneut gerendert wird. Wenn `someKey` geändert wird, wird die Fehlergrenze ebenfalls zurückgesetzt, was eine flexible Methode bietet, sich von Fehlern zu erholen, basierend auf Änderungen im Zustand der Anwendung.

### useErrorHandler Hook

`react-error-boundary` bietet auch einen benutzerdefinierten React-Hook namens `useErrorHandler`, der es ermöglicht, Fehler von überall in einer Funktionskomponente zu werfen. Die geworfenen Fehler werden von der nächstgelegenen Fehlergrenze gefangen, ähnlich wie Fehler, die in Lebenszyklusmethoden oder Renderfunktionen von Klassenkomponenten geworfen werden, von Fehlergrenzen gefangen werden.

Der `useErrorHandler`-Hook ist besonders nützlich beim Umgang mit asynchronem Code, da auf diese Weise geworfene Fehler nicht von Komponentenfehlergrenzen gefangen werden. Hier ist ein Beispiel, wie `useErrorHandler` verwendet werden kann:

```javascript
import { useErrorHandler } from 'react-error-boundary'

function MyComponent() {
  const handleError = useErrorHandler()

  async function fetchData() {
    try {
      // Daten abrufen
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

In diesem Beispiel erhält `MyComponent` eine Funktion zur Fehlerbehandlung mithilfe von `useErrorHandler`. Diese Funktion ist in einer asynchronen Funktion enthalten, die Daten abruft und Fehler fängt. Wenn ein Fehler auftritt, wird dieser an die `handleError`-Funktion übergeben, um den Fehler zu werfen und sicherzustellen, dass er von der `ErrorBoundary` gefangen wird.

`useErrorHandler` bietet eine leistungsstarke Methode zur Fehlerbehandlung in Funktionskomponenten und arbeitet nahtlos mit der `ErrorBoundary`-Komponente von `react-error-boundary` zusammen, um die Fehlerbehandlung in React intuitiver und klarer zu gestalten.

## withErrorBoundary HOC

Das Paket `react-error-boundary` bietet auch eine Lösung namens `withErrorBoundary HOC` (Higher-Order Component) an. Es handelt sich um einen HOC, der um eine bestimmte Komponente gewickelt wird, um Fehler innerhalb dieser Komponente abzufangen. Der Vorteil dieses Ansatzes ist, dass Sie Fehlergrenzen zu einer Komponente hinzufügen können, ohne die ursprüngliche Implementierung der Komponente zu ändern und ohne zusätzliches JSX zum Komponentenbaum hinzuzufügen.

```javascript
import { withErrorBoundary } from 'react-error-boundary'

function MyComponent() {
  // Komponentenlogik
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

In diesem Beispiel wird `MyComponent` mit `withErrorBoundary` umhüllt, um eine Fehlergrenze hinzuzufügen. Das zweite Argument von `withErrorBoundary` ist ein Optionsobjekt, das dieselben `props` wie die `ErrorBoundary` Komponente bereitstellen kann: `FallbackComponent`, `onError`, `onReset`, `resetKeys`.

Dieser HOC-Ansatz ist eine elegante Lösung, um Fehlergrenzen zu einer Komponente hinzuzufügen, ohne die Implementierung zu ändern. Es ist besonders nützlich für Klassenkomponenten, bei denen Hooks nicht verwendet werden können. `react-error-boundary` zeigt Flexibilität in der Anpassung an verschiedene Codierungsstile und React-Entwicklungsparadigmen.

## Vorteile

Nachdem wir uns die grundlegende Verwendung von `react-error-boundary` angesehen haben, fassen wir die Vorteile der Verwendung von `react-error-boundary` zusammen.

- Benutzerfreundlich: Die Bibliothek bietet eine einfache und intuitive API, abstrahiert die Komplexität der Fehlerbehandlung und bietet Entwicklern eine klare und direkte Methode zum Verwalten von Fehlern.
- Freundlich zu Funktionskomponenten: Im Gegensatz zu traditionellen React-Fehlergrenzen, die Klassenkomponenten erfordern, ist `react-error-boundary` speziell für Funktionskomponenten ausgelegt. Es nutzt Hooks und passt sich dem aktuellen Trend in der React-Entwicklung an.
- Flexibilität: Die Bibliothek bietet mehrere Möglichkeiten, Fehlergrenzen zu verwenden, einschließlich Komponenten, Higher-Order Components (HOCs) und benutzerdefinierten Hooks. Diese Flexibilität ermöglicht es Entwicklern, die für ihre Bedürfnisse und ihren Codierungsstil am besten geeignete Methode auszuwählen.
- Anpassbare Fallback-UI: Die Bibliothek ermöglicht eine anpassbare Fallback-UI, die angezeigt wird, wenn ein Fehler abgefangen wird. Dies verbessert die Benutzererfahrung gegenüber einem Anwendungsabsturz oder einem leeren Bildschirm.
- Reset-Funktion: Die Bibliothek ermöglicht das Zurücksetzen des Fehlerzustands, sodass die Anwendung von einem Fehler erholen kann. Diese Funktion ist besonders nützlich für vorübergehende Fehler, die ohne vollständiges Neuladen der Seite behoben werden können.
- Fehlerberichterstattung: Über die `onError`-Eigenschaft können Fehler in einem Fehlerberichtsdienst protokolliert werden, was wertvolle Informationen für das Debugging und die Problemlösung liefert.
- Community und Wartung: Die Bibliothek wird in der React-Community weit verbreitet und aktiv gewartet. Daher können regelmäßige Updates und Verbesserungen erwartet werden.

## Fazit

Sowohl bei der Verwendung von Klassenkomponenten als auch von Funktionskomponenten deckt `react-error-boundary` ab. Seine flexible API umfasst Komponenten, High-Order-Komponenten und benutzerdefinierte Hooks und bietet verschiedene Möglichkeiten zur Integration der Fehlerbehandlung in Komponenten. Darüber hinaus unterstützt es anpassbare Fallback-Benutzeroberflächen, Fehlerzurücksetzungsfunktionen und Fehlerberichte, um eine reibungslose Benutzererfahrung auch bei auftretenden Problemen zu gewährleisten.

Durch die Verwendung von `react-error-boundary` in React-Anwendungen können Sie eine leistungsstarke Fehlerbehandlung und einfachere Debugging-Möglichkeiten erreichen. Die Nutzung dieser Bibliothek reduziert die Zeit, die für das Fehlermanagement aufgewendet wird, und ermöglicht es Ihnen, sich auf den Aufbau herausragender Produktfunktionen zu konzentrieren.