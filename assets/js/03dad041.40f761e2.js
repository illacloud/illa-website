"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3815],{7909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(1527),s=t(7214);const r={slug:"web-worker-tutorial",title:"Best Web Worker Tutorial",description:"Web Worker is a JavaScript API that allows you to run JavaScript in the background. It is designed to run complex calculations without blocking the main thread.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},o=void 0,i={permalink:"/blog/web-worker-tutorial",source:"@site/blog/web-worker-tutorial/web-worker-tutorial.md",title:"Best Web Worker Tutorial",description:"Web Worker is a JavaScript API that allows you to run JavaScript in the background. It is designed to run complex calculations without blocking the main thread.",date:"2024-01-29T10:00:00.000Z",formattedDate:"January 29, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"webworker",permalink:"/blog/tags/webworker"}],readingTime:7.64,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"web-worker-tutorial",title:"Best Web Worker Tutorial",description:"Web Worker is a JavaScript API that allows you to run JavaScript in the background. It is designed to run complex calculations without blocking the main thread.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},unlisted:!1,prevItem:{title:"Most Popular 5 React Component Libraries in 2024",permalink:"/blog/react-component-library"},nextItem:{title:"Most Practical TypeScript Features",permalink:"/blog/typescript-most-practical-features-compilation"},relatedPosts:[{title:"2024 has arrived, should I choose MUI?",description:"Every company has its own exclusive online business, and as the business continues to update and iterate.",permalink:"/blog/mui-2024",formattedDate:"January 3, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.255,date:"2024-01-03T10:00:00.000Z"},{title:"Elegant Use of nvm for Node.js Management on Mac in 2024",description:'Node.js, as the foundation of frontend capabilities, is no longer just a "JS Server Runtime."',permalink:"/blog/nvm-use-2024",formattedDate:"January 3, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:4.035,date:"2024-01-03T10:00:00.000Z"},{title:"Low Code vs Traditional Development: Optimal Efficiency in Choice",description:"With the continuous evolution of development practices, the advent of low-code tools has introduced innovative solutions to various development scenarios.",permalink:"/blog/lowcode-vs-traditional",formattedDate:"January 3, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.33,date:"2024-01-03T10:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},c=[{value:"What is Web Worker",id:"what-is-web-worker",level:2},{value:"The Limitations of Web Workers",id:"the-limitations-of-web-workers",level:2},{value:"The usage of Web Workers",id:"the-usage-of-web-workers",level:2},{value:"Communication",id:"communication",level:3},{value:"Termination",id:"termination",level:3},{value:"Advanced: Making Communication Promise-Based",id:"advanced-making-communication-promise-based",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Web Worker is a JavaScript API that allows you to run JavaScript in the background. It is designed to run complex calculations without blocking the main thread. This is a very useful feature for web developers. However, it is not widely used. In this article, I will show you how to use Web Worker."}),"\n",(0,a.jsx)(n.h2,{id:"what-is-web-worker",children:"What is Web Worker"}),"\n",(0,a.jsx)(n.p,{children:"As is well known, one of the key features of the JavaScript language is its single-threaded nature, meaning it can only synchronously process one task at a time. This is also a significant point of criticism by backend developers for the emergence of Node.js, which is derived from this language."}),"\n",(0,a.jsx)(n.p,{children:"However, when JavaScript was initially designed, it was intentionally designed as a single-threaded language, primarily due to its intended use case at the time."}),"\n",(0,a.jsx)(n.p,{children:"The original purpose of JavaScript was to facilitate interaction between the web page and the user, manipulating DOM or BOM elements. If multiple threads were used to pursue efficiency in this context, it would lead to issues such as resource contention and data synchronization. Therefore, it was necessary to specify that only one thread could directly manipulate page elements at any given time to ensure system stability and security."}),"\n",(0,a.jsx)(n.p,{children:"Despite this, JavaScript is not limited to linear task processing. JavaScript has message queues and an event loop mechanism, allowing concurrency through asynchronous message handling. In high I/O-concurrent transaction processing, the performance is excellent because it eliminates the need to manually create and destroy threads and occupy additional thread management space. Consequently, Node.js, as an explorer of JavaScript on the server side, exhibits significant advantages in handling high-concurrency network requests."}),"\n",(0,a.jsx)(n.p,{children:"Although JavaScript effectively addresses the performance issues related to high I/O with its asynchronous mechanisms, the fundamental nature of single-threaded execution remains unchanged. The drawback is evident when it comes to handling CPU-intensive tasks, as it cannot fully harness the computational resources of modern multi-core, multi-threaded machines."}),"\n",(0,a.jsx)(n.p,{children:"In modern large-scale frontend projects, as code complexity increases, local compute-intensive tasks also become more demanding. Running JavaScript projects in a single thread inevitably results in the application being busy with computations and neglecting the frequent user interactions, leading to suboptimal user experiences. In more severe cases, when there are too many compute-intensive tasks, it can lead to the web page becoming unresponsive due to resource saturation. Therefore, the need for local multi-threaded computing capability in web projects became imperative, giving rise to Web Workers."}),"\n",(0,a.jsx)(n.p,{children:"Web Workers were introduced as a standard in HTML5, and they are officially defined as follows:"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It allows JavaScript scripts to create multiple threads, thus fully utilizing the CPU's multi-core computing capabilities without blocking the main thread (typically referred to as the UI rendering thread)."}),"\n",(0,a.jsx)(n.p,{children:"Although Web Workers are part of the HTML5 standard, they were actually proposed in a draft by W3C as early as 2009. Therefore, their compatibility is excellent, and they are supported by virtually all major web browsers."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/worker.png",alt:"web_worker"})}),"\n",(0,a.jsx)(n.h2,{id:"the-limitations-of-web-workers",children:"The Limitations of Web Workers"}),"\n",(0,a.jsx)(n.p,{children:"It's important to note that Web Workers fundamentally do not break JavaScript's single-threaded nature."}),"\n",(0,a.jsx)(n.p,{children:"In fact, the code within a Web Worker script cannot directly manipulate DOM nodes and cannot use the majority of BOM (Browser Object Model) APIs. Its global environment is DedicatedWorkerGlobalScope rather than Window. The Worker operates in a sandbox, running entirely separate JavaScript files from the main thread."}),"\n",(0,a.jsx)(n.p,{children:"These limitations imposed on Workers are designed to avoid the resource contention issues mentioned at the beginning of this article. Their primary use case is to act as adjuncts to the main thread, handling high CPU-intensive data processing tasks and then passing the execution results back to the main thread through inter-thread communication. Throughout this process, the main thread continues to be responsive to user interactions, effectively preventing page lagging issues."}),"\n",(0,a.jsx)(n.h2,{id:"the-usage-of-web-workers",children:"The usage of Web Workers"}),"\n",(0,a.jsx)(n.p,{children:"Currently, browser support for Web Workers is quite comprehensive, and you can typically use them by simply providing the URI of the Worker script and instantiating it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'/* main.js */\n\nconst worker = new Worker("./worker.js")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"communication",children:"Communication"}),"\n",(0,a.jsxs)(n.p,{children:["Communication between a Worker and the main thread requires only two APIs on each side: ",(0,a.jsx)(n.code,{children:"onmessage"})," or ",(0,a.jsx)(n.code,{children:"addEventListener"})," for receiving messages and ",(0,a.jsx)(n.code,{children:"postMessage"})," for sending messages, enabling seamless message-based interaction."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/* main.js */\nconst worker = new Worker(\"./worker.js\");\n\n// Main thread sends a message\nworker.postMessage({ data: 'Main thread sends data' });\n\n// Main thread receives a message\nworker.onmessage = (e) => {\n    const { data } = e;\n    if (!data) return;\n    console.log(data);\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/* worker.js */\n// Worker thread receives a message\nself.addEventListener('message', (e) => {\n    const { data } = e;\n    if (!data) return;\n    // Worker thread sends a message\n    self.postMessage({data: 'Worker received data'})\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note: In the Worker, ",(0,a.jsx)(n.code,{children:"this.xx"}),", ",(0,a.jsx)(n.code,{children:"self.xx"}),", and directly using ",(0,a.jsx)(n.code,{children:"xx"})," all have the same scope, referring to the global variable ",(0,a.jsx)(n.code,{children:"DedicatedWorkerGlobalScope"}),", and can be used interchangeably."]}),"\n",(0,a.jsx)(n.h3,{id:"termination",children:"Termination"}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to terminate a Worker: it can be terminated internally or can be instructed to terminate by the main thread."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"/* main.js */\nworker.terminate();\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"/* worker.js */\nself.close();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"advanced-making-communication-promise-based",children:"Advanced: Making Communication Promise-Based"}),"\n",(0,a.jsx)(n.p,{children:"Based on the previous section, we have already been able to use the Worker's API to harness the browser's multi-threading capabilities quite simply. However, it lacks some usability features that are often needed in engineering applications, such as asynchronous responses. Let's do that next."}),"\n",(0,a.jsxs)(n.p,{children:["Firstly, we need an asynchronous callback collection called ",(0,a.jsx)(n.code,{children:"actionHandlerMap"}),", which is used to store Promise resolve methods awaiting responses from the Worker. The keys can be specified using some unique identifier from the communication (ensuring uniqueness is sufficient). Next, we need to encapsulate the native ",(0,a.jsx)(n.code,{children:"postMessage"})," and ",(0,a.jsx)(n.code,{children:"onmessage"})," methods."]}),"\n",(0,a.jsxs)(n.p,{children:["In the messages sent via ",(0,a.jsx)(n.code,{children:"postMessage"}),", we include an ",(0,a.jsx)(n.code,{children:"id"})," and place the current Promise's resolve method into ",(0,a.jsx)(n.code,{children:"actionHandlerMap"}),", awaiting the Worker's response."]}),"\n",(0,a.jsxs)(n.p,{children:["Regarding the ",(0,a.jsx)(n.code,{children:"onmessage"})," listener, after receiving a response from the Worker, we match it with the corresponding Promise and execute the ",(0,a.jsx)(n.code,{children:".then()"})," method. After completion, we remove the Promise's resolve function from the collection."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/* main.js */\nlet fakeId = 0;\nclass MainThreadController {\n    constructor(options) {\n        this.worker = new Worker(options.workerUrl, { name: options.workerName });\n\n        // Collection for awaiting asynchronous callbacks\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    onmessage(e) {\n        const { id, response } = e.data;\n        if (!this.actionHandlerMap[id]) return;\n\n        // Execute the corresponding Promise resolve\n        this.actionHandlerMap[id].call(this, response);\n        delete this.actionHandlerMap[id];\n    }\n\n    postMessage(action) {\n        // In practical use, you can specify or generate a business id as the key\n        const id = fakeId++;\n        return new Promise((resolve, reject) => {\n            const message = {\n                id,\n                ...action,\n            };\n            this.worker.postMessage(message);\n            this.actionHandlerMap[id] = (response) => {\n                resolve(response);\n            };\n        });\n    }\n}\n\nconst mainThreadController = new MainThreadController({ workerUrl: './worker.js', workerName: 'test-worker' });\nmainThreadController\n    .postMessage({\n        actionType: 'asyncCalc',\n        payload: { msg: 'send messages to worker', params: 1 },\n    })\n    .then((response) => console.log('Message received from worker:', response.msg));\n"})}),"\n",(0,a.jsx)(n.p,{children:"The handling of the worker part is much simpler. After completing the computational processing, include the request's id in the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/* worker.js */\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // Collection for awaiting asynchronous callbacks\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        switch (actionType) {\n            case 'print':\n                console.log(payload.msg);\n                self.postMessage({ id, response: { msg: 'Message has been printed.' } });\n                break;\n\n            case 'asyncCalc':\n                // Simulate an asynchronous processing scenario\n                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n                self.postMessage({ id, response: { msg: `The calculated answer is ${result}.` } });\n                break;\n\n            default:\n                break;\n        }\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Of course, further improvements can be made on the worker side. We've noticed that as the Worker needs to handle more types of computations, using a switch statement in the ",(0,a.jsx)(n.code,{children:"onmessage"})," function can become lengthy. String-based checks may also not be reliable enough. We can simplify the logic within the Worker by encapsulating it using a strategy pattern."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/* worker.js */\n// This can be extracted into a separate file and then imported\nconst api = {\n    print(payload) {\n        console.log(payload.msg);\n        return { msg: 'Message has been printed.' };\n    },\n    async asyncCalc(payload) {\n        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n        return { msg: `The calculated answer is ${result}.` };\n    },\n};\n\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // Collection for awaiting asynchronous callbacks\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        const result = await api[actionType].call(this, payload);\n        self.postMessage({ id, response: result });\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Thus, a simple and useful Promise-based Worker has been established."}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"In summary, this article provided a brief overview of Web Workers, including their capabilities and limitations, to give readers a comprehensive understanding of their use cases. It proposed a solution for encapsulating the native Worker API to enable Promise-based invocation. Finally, it recommended a feature-rich mature solution currently used within the team, with the hope of assisting frontend developers interested in working on Worker enhancements in the near future."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7214:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(959);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);