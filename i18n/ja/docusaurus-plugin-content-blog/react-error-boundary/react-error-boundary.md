---
slug: react-error-boundary
title: "React エラー境界: React エラーをより強力に処理する方法"
description: Reactアプリケーションでreact-error-boundaryを使用することにより、より強力なエラー処理とより簡単なデバッグが可能になります。このライブラリを利用することで、エラー管理に費やす時間を減らし、杰出な製品機能の構築に集中できます。
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/react-error-boundary/cover.webp
tags: [react, コンポーネント, ライブラリ]
date: 2024-02-27T10:00
---

アプリケーションを構築する際、エラーは避けられません。最高のコーディングプラクティスを採用しても、予期しないランタイムエラーが発生し、アプリケーションがクラッシュすることがあります。そのため、エラー処理は非常に重要です。この記事では、Reactでエラーをキャッチし処理する方法を探求し、Reactエラーを処理するためのより強力な方法を紹介します！

Reactでエラーをキャッチする理由は？React 16以降、ライフサイクル中にエラーが発生し、キャッチされなければ、アプリケーション全体がアンマウントされ、クラッシュすることになります。以前は、コンポーネント内の小さなエラーが画面に残っていたが、現在はUIの一部やコントロールできないサードパーティライブラリからの未キャッチエラーがページをクラッシュさせ、白い画面にし、ユーザーエクスペリエンスに影響を与えることがあります。そのため、Reactでエラーをキャッチし処理することが必要です。

JavaScriptでは、`try...catch`を使用してエラーをキャッチできます。例えば：

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

`try...catch`は、データ取得などの命令型コードに適していますが、コンポーネント内で書かれたJSXなどの宣言型コードには適していません。では、Reactでエラーをキャッチする方法は？幸運なことに、React 16では新しい概念であるReactエラー境界（Error Boundary）が導入されました。それとは何か、どのように使用するかを見てみましょう。

## Reactエラー境界とは？

Reactエラー境界（Error Boundary）は、Reactアプリケーションでのエラー処理を扱う方法です。それは、子コンポーネントツリーのどこかでJavaScriptエラーをキャッチし、これらのエラーをログに記録し、クラッシュしたコンポーネントツリー（白い画面）ではなく、フォールバックUIを表示するReactコンポーネントです。彼らは、コンポーネントにのみ適用されるJavaScriptの`catch {}`ブロックのようなものです。

## 基本的な使用方法

エラー境界の導入前に、コンポーネント内のエラーは伝播し、最終的には白い画面や誤ったUIにつながり、ユーザーエクスペリエンスに影響を与えることになります。しかし、エラー境界を使用すると、これらの未処理のエラーを効果的にコンテインメントと管理できます。

アプリケーション全体にエラー境界を設定するか、個々のコンポーネントにより細かい制御をすることができます。エラー境界は、レンダリング、ライフサイクルメソッド、コンストラクターの間で発生したエラーのみをキャッチし、以下はキャッチしません：

- イベント処理（これには、通常の`try/catch`ブロックを使用する必要があります）
- 非同期コード（例えば、`setTimeout`や`requestAnimationFrame`のコールバック）
- サーバーサイドレンダリング
- エラー境界自体内で発生するエラー、子コンポーネントではなく

React v16でエラー境界を使用するには、クラスコンポーネントを定義し、以下の1つまたは両方のライフサイクルメソッドを追加する必要があります：

- `getDerivedStateFromError()`：エラーがスローされた後にフォールバックUIをレンダリングするために呼び出されるライフサイクルメソッド。レンダリングフェーズ中に呼び出されるため、副作用は許可されていません。
- `componentDidCatch()`：エラー情報をログに記録するために使用されるメソッド。コミットフェーズ中に呼び出されるため、副作用を実行できます。

以下は、`getDerivedStateFromError()`と`componentDidCatch()`の両方のライフサイクルメソッドを実装した`ErrorBoundary`クラスコンポーネントの例です：

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 次のレンダリングでフォールバックUIを表示するために状態を更新します。
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // カスタムフォールバックUIをレンダリングします
      return <h1>Oops! 何かがうまくいきませんでした。</h1>;
    }

    return this.props.children; 
  }
}

// コンポーネントでの使用
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

ここでは、`ErrorBoundary`エラー境界コンポーネントが定義されています。コンストラクターは状態オブジェクトを初期化し、`hasError`プロパティを`false`に設定しています。これにより、エラーが発生していないことを示しています。

- `getDerivedStateFromError()`メソッドは、エラーがキャッチされたときに呼び出され、`error`オブジェクトをパラメータとして受け取り、新しい状態オブジェクトを返します。これにより、次のレンダリングでフォールバックUIが表示されます。
- `componentDidCatch()`メソッドは、エラーがキャッチされた後に呼び出され、エラーとエラー情報をコンソールにログに記録します。

`render()`メソッドでは、`hasError`の値に基づいて、元の子コンポーネントのレンダリングまたはフォールバックUIのレンダリングを決定します。`hasError`がtrueの場合は、`<h1>Oops! 何かがうまくいきませんでした。</h1>`をレンダリングします。そうでない場合は、元の子コンポーネントをレンダリングします。Reactコンポーネントでエラー境界を使用する際は、エラー境界保護が必要な任意のコンポーネントを`<ErrorBoundary>`でラップします。これにより、小さなコンポーネントのクラッシュが全体アプリケーションのクラッシュにつながらず、白い画面になります。エラーがあるコンポーネントのみが正常にレンダリングされず、フォールバックUIが表示され、問題のあるコンポーネントを迅速に特定するのが容易になります。

### エラー境界の実装：一般的なデザインパターン

Reactエラー境界を実装する際には、以下の3つのデザインパターンのうちの1つを使用できます。

### コンポーネントレベルのエラー境界

このアプローチでは、エラー境界で個々のコンポーネントをラップします。これにより、各コンポーネント内のエラーを分離して処理できる高い粒度が提供されます。コンポーネントがクラッシュすると、エラー境界はエラーをキャッチし、コンポーネントツリーに伝播するのを防ぎます。これは、クラッシュしたコンポーネントのみが影響を受け、残りのアプリケーションが正常に実行されることを意味します。

コンポーネントレベルのエラー境界は、相互に分離され、状態を共有しないコンポーネントがある場合に特に役立ちます。1つのコンポーネントがレンダリングに失敗しても、他のコンポーネントには影響しません。しかし、多くのコンポーネントが独自のエラー境界を必要とする場合、この方法は大量の重複コードを招く可能性があります。

### トップレベルエラー境界

トップレベルエラー境界は、コンポーネントツリーの最上位に配置されます。アプリケーション内でのあらゆるエラーを処理できる一般的な解決策です。このアプローチは、アプリケーションのどこかでエラーが発生した場合でも、それをキャッチして優雅に処理できることを保証します。

これにより、エラーが発生した場合にアプリケーション全体がクラッシュするのを防ぐことができます。ただし、トップレベルエラー境界は最も粗い方法です。エラーは、エラーが発生したコンポーネントやコンポーネントグループだけでなく、アプリケーション全体に影響を与えることができます。

## `react-error-boundary` ライブラリの使用

前述したように、Reactエラー境界にはいくつかの制限があり、特定の特殊なケースを処理できないことがあります。以下は、Reactでエラーを処理するためのより強力な方法です：`react-error-boundary` ライブラリ。これは、Reactアプリケーションでのエラーを処理するための強化された機能とより柔軟な方法を提供する小さなReactエラー処理ライブラリであり、開発者がより強力でユーザーフレンドリーなエラー処理メカニズムを作成することを可能にします。

`react-error-boundary`は、React Hooksと関数コンポーネントを採用するより現代的なアプローチを取り、React開発の現在のトレンドに合わせています。それは、潜在的なエラーをラップするシンプルなコンポーネント `ErrorBoundary` を使用します。

`react-error-boundary`が提供するpropsは以下の通りです：

- `FallbackComponent`：エラー境界内でエラーが発生した場合にレンダリングするカスタムコンポーネントを指定するために使用されます。エラーを表示し、必要なアクションを提供するための視覚的に魅力的で情報豊富なユーザーインターフェースを作成する柔軟性を提供します。
- `fallbackRender`：`FallbackComponent`と似ていますが、このpropsはエラーフォールバックインターフェースをレンダリングするためのカスタムレンダリング関数を定義するために使用されます。レンダリングプロセスをより制御でき、より高度なエラー処理ロジックを可能にします。
- `onError`：エラー境界がエラーをキャッチしたときに呼び出されるコールバック関数を受け入れます。エラーオブジェクトとコンポーネントスタックトレース情報を渡します。エラーをログに記録したり、エラーレポートを外部サービスに送信するなどの追加のアクションを実行できます。
- `onReset`：エラー境界が正常にリセットされた後にトリガーされるコールバック関数を受け入れます。エラーが回復された後にコンポーネントの状態を更新したり、クリーンアップ操作を実行したりするために使用できます。
- `fallbackProps`：`FallbackComponent`または`fallbackRender`関数に追加の`props`を渡すことができます。エラーフォールバックインターフェースにコンテキストや追加のデータを提供するために使用できます。
- `retry`：エラー境界がエラーを引き起こした操作を再試行することを許可するかどうかを決定するブール値。trueに設定すると、エラーフォールバックインターフェースから`resetErrorBoundary`関数を呼び出して操作を再試行できます。

## ErrorBoundary コンポーネント

`react-error-boundary`が提供する`ErrorBoundary`コンポーネントには、エラーがキャッチされたときに表示する関数またはReact要素を受け入れる`fallbackRender`というpropsがあります。また、特定のpropsが変更されたときにコンポーネントの状態をリセットできる`resetKeys`というpropsも提供します。

`react-error-boundary`の魅力は、クラスコンポーネントを手動で書くことや状態を管理する必要がないことです。すべてがバックグラウンドで行われ、開発者がアプリケーションの構築に集中できるようにします。以下は、コンポーネントで`react-error-boundary`を使用する例です：

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p> Oops! 何かがうまくいきませんでした：</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}> 再試行 </button>
    </div>
  )
}

function MyComponent() {
  // JavaScriptエラーを投げる可能性のあるコンポーネントロジック
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // アプリケーションの状態をクリーンアップします
      }}
      resetKeys={['someKey']}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}
```

この例では、`ErrorBoundary`がエラーをキャッチすると、`MyFallbackComponent`をレンダリングします。エラーメッセージを表示し、エラー状態をリセットしてコンポーネントを再レンダリングを試行するボタンを提供します。`onReset` propsは、エラーが投げられた前の副作用をクリーンアップするために使用され、`resetKeys` propsは、コンポーネントの状態がリセットされるタイミングを制御するために使用されます。

`ErrorBoundary`の`onError` propsは、エラーがキャッチされるたびに呼び出される関数です。このプロパティはエラーを報告するために使用できます：

```javascript
// エラー報告関数
function logErrorToService(error, info) {
  // エラー報告ロジック...
  console.error("エラーをキャッチしました：", error, info);
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

`react-error-boundary`の最も強力な機能の1つは、エラー境界の状態をリセットする能力です。これにより、エラーをクリアしてコンポーネントツリーを再レンダリングを試みることができます。これは、一時的なネットワークエラーなど、エラーが一時的である可能性がある場合に非常に便利です。

フォールバックコンポーネントに提供される`resetErrorBoundary`関数は、エラー境界をリセットするために使用できます。例えば、この関数は、ボタンクリックで呼び出され、ユーザーが失敗した操作を手動で再試行することを可能にします。

`ErrorBoundary`は、エラー状態がリセットされる前に呼び出される`onReset` propsを受け入れることができます。この関数は、エラー後にコンポーネントが再レンダリングされる前にクリーンアップや状態リセット操作を実行するために役立ちます。

`resetKeys` propsは、変更が特定の`props`または状態値を変更したときにエラー境界をリセットする値の配列です。これは、特定の`props`または状態値の変更がエラーを解決する場合に便利です。これらのプロパティの使用方法の例は以下の通りです：

```javascript
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p> Oops! 何かがうまくいきませんでした：</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}> 再試行 </button>
    </div>
  )
}

function MyComponent({ someKey }) {
  // JavaScriptエラーを投げる可能性のあるコンポーネントロジック
}

function App() {
  const [someKey, setSomeKey] = React.useState(null)

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // ここでアプリケーションの状態をリセットします
      resetKeys={[someKey]} // someKeyが変更されたときにエラー境界をリセットします
    >
      <MyComponent someKey={someKey} />
    </ErrorBoundary>
  )
}
```

この例では、`MyComponent`内でエラーがキャッチされた場合、`ErrorFallback`コンポーネントがレンダリングされ、エラーメッセージを表示し、「再試行」ボタンを提供します。このボタンがクリックされると、`resetErrorBoundary`を呼び出して、`onReset`関数をトリガーし、エラー状態をクリアして`MyComponent`を再レンダリングします。`someKey`が変更されると、エラー境界もリセットされ、アプリケーションの状態の変更に基づいてエラーから回復する柔軟な方法を提供します。

### useErrorHandler フック

`react-error-boundary`は、関数コンポーネントのどこからでもエラーをスローできるカスタムReactフックである`useErrorHandler`も提供しています。スローされたエラーは、最近のエラー境界によってキャッチされます。これは、クラスコンポーネントのライフサイクルメソッドやレンダリング関数からスローされたエラーがエラー境界によってキャッチされるのと同様です。

`useErrorHandler`フックは、非同期コードを扱う際に特に便利です。なぜなら、この方法でスローされたエラーはコンポーネントエラー境界によってキャッチされないからです。以下は`useErrorHandler`を使用する例です。

```javascript
import { useErrorHandler } from 'react-error-boundary'

function MyComponent() {
  const handleError = useErrorHandler()

  async function fetchData() {
    try {
      // データの取得
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

この例では、`MyComponent`は`useErrorHandler`を使用してエラー処理用の関数を取得します。この関数は、データを取得し、エラーをキャッチするための非同期関数です。エラーが発生すると、エラーを`handleError`関数に渡し、エラーをスローして`ErrorBoundary`によってキャッチされるようにします。

`useErrorHandler`は、関数コンポーネントでのエラー処理の強力な方法を提供します。`react-error-boundary`の`ErrorBoundary`コンポーネントとシームレスに連携し、Reactでのエラー処理をより直感的で明確にします。

## withErrorBoundary HOC

`react-error-boundary`パッケージは、`withErrorBoundary HOC`（Higher-Order Component）というソリューションも提供しています。これは、指定されたコンポーネント内でエラーをキャッチするためにラップするHOCです。このアプローチの利点は、コンポーネントのオリジナル実装を変更せず、コンポーネントツリーに追加のJSXを追加することなく、エラー境界をコンポーネントに追加できることです。

```javascript
import { withErrorBoundary } from 'react-error-boundary'

function MyComponent() {
  // コンポーネントロジック
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

この例では、`MyComponent`は`withErrorBoundary`を使用してエラー境界でラップされます。`withErrorBoundary`の2番目の引数は、`ErrorBoundary`コンポーネントと同じ`props`を提供できるオプションオブジェクトです：`FallbackComponent`、`onError`、`onReset`、`resetKeys`。

このHOCアプローチは、実装を変更せずにコンポーネントにエラー境界を追加するための優雅な解決策です。特に`Hooks`を使用できないクラスコンポーネントには便利です。`react-error-boundary`が異なるコーディングスタイルやReact開発パラダイムに適応する柔軟性を示しています。

## 利点

`react-error-boundary`の基本的な使用方法を見てみましたが、`react-error-boundary`を使用する利点を要約しましょう。

- 使いやすい：ライブラリはシンプルで直感的なAPIを提供し、エラー処理の複雑性を抽象化して、開発者がエラーを管理するための明確で直截了な方法を提示します。
- 関数コンポーネントに優しい：従来のReactエラー境界がクラスコンポーネントを要求するのに対し、react-error-boundaryは関数コンポーネントに特化した設計です。Hooksを使用し、React開発の現在のトレンドに合わせています。
- 柔軟性：ライブラリは、コンポーネント、高階コンポーネント（HOCs）、カスタムフックなど、エラー境界を使用する複数の方法を提供します。この柔軟性により、開発者はニーズとコーディングスタイルに基づいて最適な方法を選択できます。
- カスタマイズ可能なフォールバックUI：ライブラリは、エラーがキャッチされたときに表示されるカスタマイズ可能なフォールバックUIを許可します。これにより、アプリケーションのクラッシュや空白画面よりもユーザーエクスペリエンスが向上します。
- リセット機能：ライブラリはエラー状態をリセットでき、アプリケーションがエラーから回復できます。この機能は、完全なページリロードなしで解決できる一時的なエラーに特に役立ちます。
- エラー報告：`onError`プロパティを介してエラーをエラー報告サービスにログに記録でき、デバッグと問題解決のための貴重な情報を提供します。
- コミュニティとメンテナンス：ライブラリはReactコミュニティで広く使用されており、積極的にメンテナンスされています。そのため、定期的なアップデートと改善が期待できます。

## 結論

クラスコンポーネントを使用している場合でも、関数コンポーネントを使用している場合でも、`react-error-boundary`はカバーしています。その柔軟なAPIには、コンポーネント、高階コンポーネント、カスタムフックが含まれており、エラー処理をコンポーネントに統合する複数の方法を提供しています。さらに、カスタマイズ可能なフォールバックUI、エラーリセット機能、エラー報告をサポートし、問題が発生した場合でも滑らかなユーザーエクスペリエンスを確保します。

Reactアプリケーションで`react-error-boundary`を使用することにより、より強力なエラー処理とより簡単なデバッグが可能になります。このライブラリを利用することで、エラー管理に費やす時間を減らし、杰出な製品機能の構築に集中できます。