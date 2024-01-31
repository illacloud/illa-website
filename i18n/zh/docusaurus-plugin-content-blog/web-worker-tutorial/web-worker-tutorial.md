---
slug: web-worker-tutorial
title: 最佳的Web Worker教程
description: Web Worker是一个可以在后台运行JavaScript的JavaScript API。它旨在允许执行复杂的计算而不会阻塞主线程。
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp
tags: [javascript, webworker]
date: 2024-01-29T10:00
---

Web Worker是一个可以在后台运行JavaScript的JavaScript API。它旨在允许执行复杂的计算而不会阻塞主线程。这对Web开发人员非常有用，但并没有广泛使用。本文将介绍如何使用Web Worker。

## 什么是Web Worker

众所周知，JavaScript语言的一个主要特点是其单线程性质，一次只能同步处理一个任务。这也是针对Node.js的后端开发者的主要批评点之一。

然而，JavaScript最初是有意设计为单线程语言，以适应当时的用途。

JavaScript的最初目标是通过操作DOM或BOM元素来促进Web页面与用户的交互。为了在这个上下文中追求效率，必须指定只有一个线程在任何时间点可以直接操作页面元素，以避免资源竞争和数据同步等问题，以确保系统的稳定性和安全性。

然而，JavaScript并不限制于线性任务处理。JavaScript具有消息队列和事件循环机制，通过异步消息处理实现并发处理。在高I/O并发事务处理中，不需要手动创建和销毁线程，也不需要额外的线程管理空间，因此性能优越。结果，探索在服务器端使用JavaScript的Node.js在高并发网络请求处理方面表现出色。

虽然JavaScript通过其异步机制有效地解决了与高I/O相关的性能问题，但其单线程执行的基本特性仍然存在。这是因为在处理CPU密集型任务时无法充分利用其计算资源，这是因为它不能充分利用现代多核多线程机器的计算资源。

在现代大型前端项目中，随着代码复杂性的增加，本地计算密集型任务也变得需要。如果将JavaScript项目在单个线程中运行，应用程序可能会变得繁忙，忽略了频繁的用户交互，用户体验可能不佳。更严重的是，如果有太多的计算密集型任务，可能会导致资源饱和，使网页不再响应。因此，在Web项目中需要本地多线程计算能力，这就是Web Worker诞生的原因。

Web Worker作为HTML5的标准引入，官方定义如下：

> Web Worker允许在与Web应用程序的主执行线程分开的后台线程中运行脚本操作。

这样，JavaScript脚本可以创建多个线程，充分利用CPU的多核计算能力，而不会阻塞主线程（通常是UI渲染线程）。

尽管Web Worker是HTML5的一部分，但实际上它在2009年提出了W3C的草案。因此，它具有很好的兼容性，并且在大多数主要的Web浏览器中得到支持。

![web_worker](https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/worker.png)

## Web Worker的限制

Web Worker基本上不会破坏JavaScript的单线程性质。

实际上，Web Worker脚本内的代码不能直接操作DOM节点，也不能使用大多数BOM（浏览器对象模型）API。它的全局环境不是Window，而是DedicatedWorkerGlobalScope。Worker在沙箱中运行，执行与主线程完全独立的JavaScript文件。

这些限制是为了避免在前文提到的资源竞争问题中使用Worker。主要用途是作为主线程的辅助，处理高CPU密集型数据处理任务，并通过线程间通信将执行结果返回给主线程。通过这个过程，主线程可以继续响应用户交互，有效地防止了页面延迟的问题。

## 使用Web Worker

目前，Web Worker在浏览器中得到了广泛支持，只需提供Worker脚本的URI并进行实例化即可使用。

```javascript
/* main.js */

const worker = new Worker("./worker.js")
```

### 通信

Worker和主线程之间的通信只需要两个API，即用于接收消息的`onmessage`或`addEventListener`以及用于发送消息的`postMessage`，可以无缝地实现基于消息的交互。

```js
/* main.js */
const worker = new Worker("./worker.js");

// 从主线程发送消息
worker.postMessage({ data: '从主线程发送的数据' });

// 主线程接收消息
worker.onmessage = (e) => {
    const { data } = e;
    if (!data) return;
    console.log(data);
}
```

```js
/* worker.js */
// Worker线程接收消息
self.addEventListener('message', (e) => {
    const { data } = e;
    if (!data) return;
    // Worker线程发送消息
    self.postMessage({data: 'Worker收到了数据'})
});
```

注意：在Worker内部，可以使用`this.xx`、`self.xx`以及直接使用`xx`，它们都处于相同的作用域，引用全局变量`DedicatedWorkerGlobalScope`，可以互换使用。

### 终止

有两种方法可以终止Worker。可以在内部终止，也可以从主线程发出终止指令。

```javascript


/* main.js */
worker.terminate();
```

```javascript
/* worker.js */
self.close();
```

### 高级用法：基于Promise的通信

基于前面的部分，已经可以使用Worker的API相对轻松地利用浏览器的多线程功能。但是，缺少一些常用功能，如异步响应等，这在工程应用程序中通常是需要的。接下来，将介绍如何实现这些功能。

首先，需要一个异步回调集合，称为`actionHandlerMap`。它用于存储等待Worker响应的Promise解析方法，并可以使用唯一的标识符（确保唯一性）指定键。接下来，需要封装原生的`postMessage`和`onmessage`方法。

在发送消息时，需要在消息中包含一个`id`，并在`actionHandlerMap`中存储当前Promise的解析方法以等待Worker的响应。

在`onmessage`监听器方面，接收到Worker的响应后，将其与相应的Promise匹配并执行`.then()`方法。完成后，从集合中删除Promise的解析函数。

```js
/* main.js */
let fakeId = 0;
class MainThreadController {
    constructor(options) {
        this.worker = new Worker(options.workerUrl, { name: options.workerName });

        // 用于等待异步回调的集合
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    onmessage(e) {
        const { id, response } = e.data;
        if (!this.actionHandlerMap[id]) return;

        // 执行相应的Promise解析
        this.actionHandlerMap[id].call(this, response);
        delete this.actionHandlerMap[id];
    }

    postMessage(action) {
        // 在实际使用中，可以使用业务ID作为键或生成键
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
        payload: { msg: '向Worker发送消息', params: 1 },
    })
    .then((response) => console.log('从Worker接收到消息:', response.msg));
```

Worker部分的处理要简单得多。当计算完成后，将请求的ID包含在响应中。

```js
/* worker.js */
class WorkerThreadController {
    constructor() {
        this.worker = self;

        // 用于等待异步回调的集合
        this.actionHandlerMap = {};

        this.worker.onmessage = this.onmessage.bind(this);
    }

    async onmessage(e) {
        const { id, actionType, payload } = e.data;
        switch (actionType) {
            case 'print':
                console.log(payload.msg);
                self.postMessage({ id, response: { msg: '消息已打印。' } });
                break;

            case 'asyncCalc':
                // 模拟异步处理情景
                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
                self.postMessage({ id, response: { msg: `计算的结果为 ${result}。` } });
                break;

            default:
                break;
        }
    }
}

const workerThreadController = new WorkerThreadController();
```

当然，在Worker端可以进一步改进。如果Worker需要处理多种类型的计算，`onmessage`函数中的`switch`语句可能会变得很长。基于字符串的检查也可能不够可靠。通过使用策略模式将Worker内部逻辑封装起来，可以简化Worker内部的逻辑。

```js
/* worker.js */
// 这可以单独提取到另一个文件并导入
const api = {
    print(payload) {
        console.log(payload.msg);
        return { msg: '消息已打印。' };
    },
    async asyncCalc(payload) {
        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));
        return { msg: `计算的结果为 ${result}。` };
    },
};

class WorkerThreadController {
    constructor() {
        this.worker = self;

        // 用于等待异步回调的集合
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

因此，建立了一个简单且方便的基于Promise的Worker。

## 结论

总结一下，本文简要介绍了Web Worker的概念、其功能和限制，并为读者提供了全面的理解以及如何使用Web Worker的用例。还提出了一种封装原生Worker API以实现基于Promise调用的解决方案，并最终建议使用在团队中已经广泛使用且成熟的解决方案。希望这对前端开发人员对未来的Worker扩展感兴趣时有所帮助。