---
slug: web-worker-tutorial
title: Best Web Worker Tutorial
description: Web Worker is a JavaScript API that allows you to run JavaScript in the background. It is designed to run complex calculations without blocking the main thread. 
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp
tags: [ javascript, webworker ]
date: 2024-01-29T10:00
---

Web Worker is a JavaScript API that allows you to run JavaScript in the background. It is designed to run complex calculations without blocking the main thread. This is a very useful feature for web developers. However, it is not widely used. In this article, I will show you how to use Web Worker.

## What is Web Worker

As is well known, one of the key features of the JavaScript language is its single-threaded nature, meaning it can only synchronously process one task at a time. This is also a significant point of criticism by backend developers for the emergence of Node.js, which is derived from this language.

However, when JavaScript was initially designed, it was intentionally designed as a single-threaded language, primarily due to its intended use case at the time.

The original purpose of JavaScript was to facilitate interaction between the web page and the user, manipulating DOM or BOM elements. If multiple threads were used to pursue efficiency in this context, it would lead to issues such as resource contention and data synchronization. Therefore, it was necessary to specify that only one thread could directly manipulate page elements at any given time to ensure system stability and security.

Despite this, JavaScript is not limited to linear task processing. JavaScript has message queues and an event loop mechanism, allowing concurrency through asynchronous message handling. In high I/O-concurrent transaction processing, the performance is excellent because it eliminates the need to manually create and destroy threads and occupy additional thread management space. Consequently, Node.js, as an explorer of JavaScript on the server side, exhibits significant advantages in handling high-concurrency network requests.

Although JavaScript effectively addresses the performance issues related to high I/O with its asynchronous mechanisms, the fundamental nature of single-threaded execution remains unchanged. The drawback is evident when it comes to handling CPU-intensive tasks, as it cannot fully harness the computational resources of modern multi-core, multi-threaded machines.

In modern large-scale frontend projects, as code complexity increases, local compute-intensive tasks also become more demanding. Running JavaScript projects in a single thread inevitably results in the application being busy with computations and neglecting the frequent user interactions, leading to suboptimal user experiences. In more severe cases, when there are too many compute-intensive tasks, it can lead to the web page becoming unresponsive due to resource saturation. Therefore, the need for local multi-threaded computing capability in web projects became imperative, giving rise to Web Workers.

Web Workers were introduced as a standard in HTML5, and they are officially defined as follows:

> Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application.

It allows JavaScript scripts to create multiple threads, thus fully utilizing the CPU's multi-core computing capabilities without blocking the main thread (typically referred to as the UI rendering thread).

Although Web Workers are part of the HTML5 standard, they were actually proposed in a draft by W3C as early as 2009. Therefore, their compatibility is excellent, and they are supported by virtually all major web browsers.

![web_worker](https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/worker.png)

## The Limitations of Web Workers

It's important to note that Web Workers fundamentally do not break JavaScript's single-threaded nature.

In fact, the code within a Web Worker script cannot directly manipulate DOM nodes and cannot use the majority of BOM (Browser Object Model) APIs. Its global environment is DedicatedWorkerGlobalScope rather than Window. The Worker operates in a sandbox, running entirely separate JavaScript files from the main thread.

These limitations imposed on Workers are designed to avoid the resource contention issues mentioned at the beginning of this article. Their primary use case is to act as adjuncts to the main thread, handling high CPU-intensive data processing tasks and then passing the execution results back to the main thread through inter-thread communication. Throughout this process, the main thread continues to be responsive to user interactions, effectively preventing page lagging issues.

## The usage of Web Workers

Currently, browser support for Web Workers is quite comprehensive, and you can typically use them by simply providing the URI of the Worker script and instantiating it.

```javascript
/* main.js */

const worker = new Worker("./worker.js")
```

### Communication

Communication between a Worker and the main thread requires only two APIs on each side: `onmessage` or `addEventListener` for receiving messages and `postMessage` for sending messages, enabling seamless message-based interaction.

```js
/* main.js */
const worker = new Worker("./worker.js");

// Main thread sends a message
worker.postMessage({ data: 'Main thread sends data' });

// Main thread receives a message
worker.onmessage = (e) => {
    const { data } = e;
    if (!data) return;
    console.log(data);
}
```

```js
/* worker.js */
// Worker thread receives a message
self.addEventListener('message', (e) => {
    const { data } = e;
    if (!data) return;
    // Worker thread sends a message
    self.postMessage({data: 'Worker received data'})
});
```

Note: In the Worker, `this.xx`, `self.xx`, and directly using `xx` all have the same scope, referring to the global variable `DedicatedWorkerGlobalScope`, and can be used interchangeably.

### Termination

There are two ways to terminate a Worker: it can be terminated internally or can be instructed to terminate by the main thread.

```javascript
/* main.js */
worker.terminate();
```

```javascript
/* worker.js */
self.close();
```

### Advanced: Making Communication Promise-Based

Based on the previous section, we have already been able to use the Worker's API to harness the browser's multi-threading capabilities quite simply. However, it lacks some usability features that are often needed in engineering applications, such as asynchronous responses. Let's do that next.

Firstly, we need an asynchronous callback collection called `actionHandlerMap`, which is used to store Promise resolve methods awaiting responses from the Worker. The keys can be specified using some unique identifier from the communication (ensuring uniqueness is sufficient). Next, we need to encapsulate the native `postMessage` and `onmessage` methods.

In the messages sent via `postMessage`, we include an `id` and place the current Promise's resolve method into `actionHandlerMap`, awaiting the Worker's response.

Regarding the `onmessage` listener, after receiving a response from the Worker, we match it with the corresponding Promise and execute the `.then()` method. After completion, we remove the Promise's resolve function from the collection.

```js
/* main.js */
let fakeId = 0;
class MainThreadController {
    constructor(options) {
        this.worker = new Worker(options.workerUrl, { name: options.workerName });

        // Collection for awaiting asynchronous callbacks
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    onmessage(e) {
        const { id, response } = e.data;
        if (!this.actionHandlerMap[id]) return;

        // Execute the corresponding Promise resolve
        this.actionHandlerMap[id].call(this, response);
        delete this.actionHandlerMap[id];
    }

    postMessage(action) {
        // In practical use, you can specify or generate a business id as the key
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
        payload: { msg: 'send messages to worker', params: 1 },
    })
    .then((response) => console.log('Message received from worker:', response.msg));
```

The handling of the worker part is much simpler. After completing the computational processing, include the request's id in the response.

```js
/* worker.js */
class WorkerThreadController {
    constructor() {
        this.worker = self;

        // Collection for awaiting asynchronous callbacks
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    async onmessage(e) {
        const { id, actionType, payload } = e.data;
        switch (actionType) {
            case 'print':
                console.log(payload.msg);
                self.postMessage({ id, response: { msg: 'Message has been printed.' } });
                break;

            case 'asyncCalc':
                // Simulate an asynchronous processing scenario
                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
                self.postMessage({ id, response: { msg: `The calculated answer is ${result}.` } });
                break;

            default:
                break;
        }
    }
}

const workerThreadController = new WorkerThreadController();
```

Of course, further improvements can be made on the worker side. We've noticed that as the Worker needs to handle more types of computations, using a switch statement in the `onmessage` function can become lengthy. String-based checks may also not be reliable enough. We can simplify the logic within the Worker by encapsulating it using a strategy pattern.

```js
/* worker.js */
// This can be extracted into a separate file and then imported
const api = {
    print(payload) {
        console.log(payload.msg);
        return { msg: 'Message has been printed.' };
    },
    async asyncCalc(payload) {
        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
        return { msg: `The calculated answer is ${result}.` };
    },
};

class WorkerThreadController {
    constructor() {
        this.worker = self;

        // Collection for awaiting asynchronous callbacks
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

Thus, a simple and useful Promise-based Worker has been established.

## Conclusion

In summary, this article provided a brief overview of Web Workers, including their capabilities and limitations, to give readers a comprehensive understanding of their use cases. It proposed a solution for encapsulating the native Worker API to enable Promise-based invocation. Finally, it recommended a feature-rich mature solution currently used within the team, with the hope of assisting frontend developers interested in working on Worker enhancements in the near future.