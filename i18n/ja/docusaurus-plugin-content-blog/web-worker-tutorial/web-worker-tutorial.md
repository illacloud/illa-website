---
slug: web-worker-tutorial
title: ベストなWeb Workerチュートリアル
description: Web Workerは、JavaScriptをバックグラウンドで実行できるJavaScript APIです。これは、メインスレッドをブロックせずに複雑な計算を実行するために設計されています。
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp
tags: [javascript, webworker]
date: 2024-01-29T10:00
---

Web Workerは、JavaScriptをバックグラウンドで実行できるJavaScript APIです。これは、メインスレッドをブロックせずに複雑な計算を実行するために設計されています。これはWeb開発者にとって非常に便利な機能です。ただし、広く使用されていません。この記事では、Web Workerの使用方法を説明します。

## Web Workerとは

よく知られているように、JavaScript言語の主要な特徴の1つは、シングルスレッド性であり、一度に1つのタスクしか同期的に処理できないことです。これは、この言語から派生したNode.jsの登場に対するバックエンド開発者の主要な批判点でもあります。

ただし、JavaScriptが最初に設計されたとき、当時の用途に合わせて意図的にシングルスレッドの言語として設計されました。

JavaScriptの元の目的は、Webページとユーザーとの対話を容易にし、DOMまたはBOM要素を操作することでした。この文脈で効率性を追求するために複数のスレッドを使用すると、リソース競合やデータ同期などの問題が発生する可能性があるため、任意のタイミングで1つのスレッドだけがページ要素を直接操作できると指定する必要があり、システムの安定性とセキュリティを確保する必要がありました。

しかし、JavaScriptは線形タスク処理に制約されているわけではありません。JavaScriptにはメッセージキューとイベントループメカニズムがあり、非同期メッセージ処理を通じて並行処理が可能です。高I/O同時トランザクション処理では、手動でスレッドを作成し破棄し、追加のスレッド管理スペースを占有する必要がないため、パフォーマンスが優れています。その結果、サーバーサイドでJavaScriptを探求するNode.jsは、高並行ネットワークリクエストの処理において著しい利点を示しています。

JavaScriptはその非同期メカニズムによって高I/O関連のパフォーマンス問題に効果的に対処していますが、シングルスレッドの実行の基本的な性質は変わりません。これは、CPU集積タスクを処理する際にその計算リソースを完全に活用できないため、問題が明白です。現代のマルチコア、マルチスレッドのマシンの計算リソースを十分に活用できないためです。

現代の大規模なフロントエンドプロジェクトでは、コードの複雑さが増すにつれて、ローカルの計算集約タスクも要求されるようになります。JavaScriptプロジェクトを単一のスレッドで実行すると、アプリケーションは計算に忙しくなり、頻繁なユーザーの相互作用を無視し、ユーザーエクスペリエンスが最適でないことがあります。より深刻な場合、計算集約タスクが多すぎる場合、リソースの飽和によりWebページが応答しなくなることがあります。そのため、Webプロジェクトでローカルのマルチスレッド計算能力が必要とされ、Web Workerが誕生しました。

Web WorkerはHTML5の標準として導入され、公式には以下のように定義されています。

> Web Workerは、Webアプリケーションのメイン実行スレッドとは別のバックグラウンドスレッドでスクリプト操作を実行できるようにします。

これにより、JavaScriptスクリプトが複数のスレッドを作成でき、メインスレッド（通常はUIレンダリングスレッドと呼ばれます）をブロックせずにCPUのマルチコア計算能力を完全に活用できます。

Web WorkerはHTML5の標準の一部ですが、実際には2009年にW3Cのドラフトで提案されたものでした。そのため、互換性は優れており、ほとんどの主要なWebブラウザでサポートされています。

![web_worker](https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/

worker.png)

## Web Workerの制限事項

Web Workerは基本的にJavaScriptのシングルスレッド性を崩しません。

実際、Web Workerスクリプト内のコードはDOMノードを直接操作できず、ほとんどのBOM（ブラウザオブジェクトモデル）APIを使用できません。そのグローバル環境はWindowではなくDedicatedWorkerGlobalScopeです。Workerはサンドボックス内で動作し、メインスレッドから完全に独立したJavaScriptファイルを実行します。

これらの制約は、この記事の冒頭で述べたリソース競合の問題を回避するためにWorkerに課せられたものです。主な使用例は、メインスレッドの補助として、高いCPU集積データ処理タスクを処理し、その実行結果をスレッド間通信を介してメインスレッドに戻すことです。このプロセスを通じて、メインスレッドはユーザーの相互作用に対して引き続き応答し、ページの遅延の問題を効果的に防ぎます。

## Web Workerの使用法

現在、Web Workerのブラウザサポートは非常に包括的であり、単にWorkerスクリプトのURIを提供してインスタンス化することで使用できます。

```javascript
/* main.js */

const worker = new Worker("./worker.js")
```

### 通信

Workerとメインスレッドの間の通信には、受信用のメッセージを受け取るための`onmessage`または`addEventListener`と、メッセージを送信するための`postMessage`の2つのAPIだけが必要であり、メッセージベースのインタラクションをシームレスに実現できます。

```js
/* main.js */
const worker = new Worker("./worker.js");

// メインスレッドからメッセージを送信
worker.postMessage({ data: 'メインスレッドからデータを送信' });

// メインスレッドはメッセージを受信
worker.onmessage = (e) => {
    const { data } = e;
    if (!data) return;
    console.log(data);
}
```

```js
/* worker.js */
// Workerスレッドはメッセージを受信
self.addEventListener('message', (e) => {
    const { data } = e;
    if (!data) return;
    // Workerスレッドはメッセージを送信
    self.postMessage({data: 'Workerがデータを受信しました'})
});
```

注意：Worker内では、`this.xx`、`self.xx`、および直接`xx`を使用することはすべて同じスコープであり、グローバル変数`DedicatedWorkerGlobalScope`を参照し、互換できます。

### 終了

Workerを終了する方法は2つあります。内部で終了するか、メインスレッドから終了するように指示されます。

```javascript
/* main.js */
worker.terminate();
```

```javascript
/* worker.js */
self.close();
```

### 上級者向け: 通信をPromiseベースにする

前のセクションに基づいて、既にブラウザのマルチスレッド機能を比較的簡単に活用する方法をWorkerのAPIを使用して実現できました。しかし、これにはエンジニアリングアプリケーションでよく必要とされる非同期応答などの使いやすさの機能が欠けています。次にそれを行いましょう。

まず最初に、`actionHandlerMap` という非同期コールバックのコレクションが必要です。これは、Workerからの応答を待つPromiseの解決メソッドを格納するために使用されます。キーは通信からの一意の識別子を使用して指定できます（一意性を確保することが十分です）。次に、ネイティブの `postMessage` および `onmessage` メソッドをカプセル化する必要があります。

`postMessage` で送信されたメッセージには `id` を含め、現在のPromiseの解決メソッドを `actionHandlerMap` に配置してWorkerの応答を待ちます。

`onmessage` リスナーに関しては、Workerからの応答を受信した後、それを対応するPromiseと一致させ、`.then()` メソッドを実行します。完了後、Promiseの解決関数をコレクションから削除します。

```js
/* main.js */
let fakeId = 0;
class MainThreadController {
    constructor(options) {
        this.worker = new Worker(options.workerUrl, { name: options.workerName });

        // 非同期コールバックを待つためのコレクション
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    onmessage(e) {
        const { id, response } = e.data;
        if (!this.actionHandlerMap[id]) return;

        // 対応するPromiseの解決を実行
        this.actionHandlerMap[id].call(this, response);
        delete this.actionHandlerMap[id];
    }

    postMessage(action) {
        // 実際の使用では、キーとしてビジネスIDを指定または生成できます
        const id = fakeId++;
        return new Promise((resolve, reject) => {
            const message = {
                id,
                ...action,
            };
            this.worker.postMessage(message);
            this.actionHandlerMap[id] = (response) => {
                resolve(response);
            };
        });
    }
}

const mainThreadController = new MainThreadController({ workerUrl: './worker.js', workerName: 'test-worker' });
mainThreadController
    .postMessage({
        actionType: 'asyncCalc',
        payload: { msg: 'ワーカーにメッセージを送信', params: 1 },
    })
    .then((response) => console.log('ワーカーからのメッセージを受信:', response.msg));
```

ワーカーの部分の処理ははるかに簡単です。計算処理が完了したら、リクエストのIDを応答に含めます。

```js
/* worker.js */
class WorkerThreadController {
    constructor() {
        this.worker = self;

        // 非同期コールバックを待つためのコレクション
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    async onmessage(e) {
        const { id, actionType, payload } = e.data;
        switch (actionType) {
            case 'print':
                console.log(payload.msg);
                self.postMessage({ id, response: { msg: 'メッセージが印刷されました。' } });
                break;

            case 'asyncCalc':
                // 非同期処理シナリオを模倣
                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
                self.postMessage({ id, response: { msg: `計算された答えは ${result} です。` } });
                break;

            default:
                break;
        }
    }
}

const workerThreadController = new WorkerThreadController();
```

もちろん、ワーカー側でさらなる改善ができます。ワーカーがさまざまな種類の計算を処理する必要がある場合、`onmessage` 関数内での `switch` ステートメントは長大になる可能性があります。文字列ベースのチェックも十分に信頼性がないかもしれません。Worker内のロジックを戦略パターンを使用してカプセル化することで、Worker内のロジックを簡素化できます。

```js
/* worker.js */
// これは別のファイルに抽出してインポートできます
const api = {
    print(payload) {
        console.log(payload.msg);
        return { msg: 'メッセージが印刷されました。' };
    },
    async asyncCalc(payload) {
        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
        return { msg: `計算された答えは ${result} です。` };
    },
};

class WorkerThreadController {
    constructor() {
        this.worker = self;

        // 非同期コールバックを待つためのコレクション
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    async onmessage(e) {
        const { id, actionType, payload } = e.data;
        const result = await api[actionType].call(this, payload);
        self.postMessage({ id, response: result });
    }
}

const workerThreadController = new WorkerThreadController();
```

したがって、シンプルで便利なPromiseベースのワーカーが構築されました。

## 結論

要約すると、この記事

ではWebワーカーの概要、その機能と制限について簡単に説明し、読者にその使用事例について包括的な理解を提供しました。ネイティブのWorker APIをカプセル化してPromiseベースの呼び出しを可能にする解決策を提案し、最後に、チーム内で現在使用されている機能豊富で成熟した解決策を推奨しました。これにより、将来のワーカーの拡張に興味を持つフロントエンド開発者に役立つことを期待しています。