"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[7272],{6628:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(1527),o=n(7214);const a={slug:"web-worker-tutorial",title:"\u6700\u4f73\u7684Web Worker\u6559\u7a0b",description:"Web Worker\u662f\u4e00\u4e2a\u53ef\u4ee5\u5728\u540e\u53f0\u8fd0\u884cJavaScript\u7684JavaScript API\u3002\u5b83\u65e8\u5728\u5141\u8bb8\u6267\u884c\u590d\u6742\u7684\u8ba1\u7b97\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},t=void 0,i={permalink:"/illa-website/zh/blog/web-worker-tutorial",source:"@site/i18n/zh/docusaurus-plugin-content-blog/web-worker-tutorial/web-worker-tutorial.md",title:"\u6700\u4f73\u7684Web Worker\u6559\u7a0b",description:"Web Worker\u662f\u4e00\u4e2a\u53ef\u4ee5\u5728\u540e\u53f0\u8fd0\u884cJavaScript\u7684JavaScript API\u3002\u5b83\u65e8\u5728\u5141\u8bb8\u6267\u884c\u590d\u6742\u7684\u8ba1\u7b97\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002",date:"2024-01-29T10:00:00.000Z",formattedDate:"2024\u5e741\u670829\u65e5",tags:[{label:"javascript",permalink:"/illa-website/zh/blog/tags/javascript"},{label:"webworker",permalink:"/illa-website/zh/blog/tags/webworker"}],readingTime:10.44,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"web-worker-tutorial",title:"\u6700\u4f73\u7684Web Worker\u6559\u7a0b",description:"Web Worker\u662f\u4e00\u4e2a\u53ef\u4ee5\u5728\u540e\u53f0\u8fd0\u884cJavaScript\u7684JavaScript API\u3002\u5b83\u65e8\u5728\u5141\u8bb8\u6267\u884c\u590d\u6742\u7684\u8ba1\u7b97\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},unlisted:!1,nextItem:{title:"\u6700\u5b9e\u7528\u7684Typescript\u5e38\u7528\u7279\u6027",permalink:"/illa-website/zh/blog/typescript-most-practical-features-compilation"},relatedPosts:[{title:"\u6784\u5efa\u5185\u90e8\u5de5\u5177\u7684\u6700\u4f73\u5f00\u6e90\u4f4e\u4ee3\u7801\u5e73\u53f0",description:"\u5f00\u6e90\u5de5\u5177\u5f88\u5e38\u89c1\uff0c\u4f46\u5f88\u5c11\u89c1\u5230\u67091\u4e07\u9897\u661f\u7684\u3002\u6211\u8981\u5206\u4eab\u4e00\u4e2a\u5728\u6d77\u5916\u83b7\u5f971\u4e07\u9897\u661f\u7684\u4ea7\u54c1\u3002\u6709\u5f88\u591a\u4f4e\u4ee3\u7801\u5de5\u5177\uff0c\u4f46\u771f\u6b63\u6709\u7528\u7684\u5f88\u5c11\u3002\u8fd9\u4e2a\u5de5\u5177\u4e3b\u8981\u88ab\u5317\u7f8e\u7684\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\uff0c\u4ed6\u4eec\u7684Discord\u793e\u533a\u975e\u5e38\u6d3b\u8dc3\u3002",permalink:"/illa-website/zh/blog/internal-tool",formattedDate:"2024\u5e741\u67085\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.785,date:"2024-01-05T10:00:00.000Z"},{title:"\u4f4e\u4ee3\u7801\u4e0e\u4f20\u7edf\u5f00\u53d1\uff1a\u9009\u62e9\u4e2d\u7684\u6700\u4f18\u6548\u7387",description:"\u968f\u7740\u5f00\u53d1\u5b9e\u8df5\u7684\u6301\u7eed\u6f14\u8fdb\uff0c\u4f4e\u4ee3\u7801\u5de5\u5177\u7684\u51fa\u73b0\u4e3a\u5404\u79cd\u5f00\u53d1\u573a\u666f\u5e26\u6765\u4e86\u521b\u65b0\u89e3\u51b3\u65b9\u6848\u3002\u8fd9\u51cf\u8f7b\u4e86\u4ece\u5934\u5f00\u59cb\u9879\u76ee\u7684\u9700\u8981\uff0c\u4e3a\u66f4\u91cd\u8981\u7684\u4e1a\u52a1\u6d3b\u52a8\u8282\u7701\u4e86\u5927\u91cf\u65f6\u95f4\u3002\u7136\u800c\uff0c\u91cd\u8981\u7684\u662f\u8981\u8ba4\u8bc6\u5230\uff0c\u867d\u7136\u4f4e\u4ee3\u7801\u52a0\u901f\u4e86\u5f00\u53d1\uff0c\u4f46\u8fd9\u662f\u4ee5\u727a\u7272\u4e00\u5b9a\u7684\u7075\u6d3b\u6027\u4e3a\u4ee3\u4ef7\u7684\u3002\u56e0\u6b64\uff0c\u5e76\u975e\u6240\u6709\u7684\u89e3\u51b3\u65b9\u6848\u90fd\u9002\u5408\u4f4e\u4ee3\u7801\u5f00\u53d1\u3002\u8ba9\u6211\u4eec\u66f4\u6df1\u5165\u5730\u5206\u6790\u54ea\u4e9b\u573a\u666f\u66f4\u9002\u5408\u4f7f\u7528\u4f4e\u4ee3\u7801\u5de5\u5177\uff0c\u4ee5\u53ca\u54ea\u4e9b\u573a\u666f\u4e2d\u4f20\u7edf\u4ee3\u7801\u5f00\u53d1\u66f4\u4e3a\u5408\u9002\u3002\u5728\u8fd9\u4e00\u63a2\u7d22\u8fc7\u7a0b\u4e2d\uff0c\u4f4e\u4ee3\u7801\u4e0e\u4f20\u7edf\u5f00\u53d1\u7684\u5173\u952e\u6bd4\u8f83\u59cb\u7ec8\u662f\u6700\u91cd\u8981\u7684\uff0c\u5f3a\u8c03\u9009\u62e9\u6700\u6709\u6548\u65b9\u6cd5\u7684\u91cd\u8981\u6027\u3002",permalink:"/illa-website/zh/blog/lowcode-vs-traditional",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.935,date:"2024-01-03T10:00:00.000Z"},{title:"2024\u5df2\u7ecf\u5230\u6765\uff0c\u6211\u5e94\u8be5\u9009\u62e9MUI\u5417\uff1f",description:"\u6bcf\u5bb6\u516c\u53f8\u90fd\u6709\u81ea\u5df1\u72ec\u7279\u7684\u5728\u7ebf\u4e1a\u52a1\uff0c\u968f\u7740\u4e1a\u52a1\u4e0d\u65ad\u66f4\u65b0\u548c\u8fed\u4ee3\u3002",permalink:"/illa-website/zh/blog/mui-2024",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.425,date:"2024-01-03T10:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},c=[{value:"\u4ec0\u4e48\u662fWeb Worker",id:"\u4ec0\u4e48\u662fweb-worker",level:2},{value:"Web Worker\u7684\u9650\u5236",id:"web-worker\u7684\u9650\u5236",level:2},{value:"\u4f7f\u7528Web Worker",id:"\u4f7f\u7528web-worker",level:2},{value:"\u901a\u4fe1",id:"\u901a\u4fe1",level:3},{value:"\u7ec8\u6b62",id:"\u7ec8\u6b62",level:3},{value:"\u9ad8\u7ea7\u7528\u6cd5\uff1a\u57fa\u4e8ePromise\u7684\u901a\u4fe1",id:"\u9ad8\u7ea7\u7528\u6cd5\u57fa\u4e8epromise\u7684\u901a\u4fe1",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function d(e){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Web Worker\u662f\u4e00\u4e2a\u53ef\u4ee5\u5728\u540e\u53f0\u8fd0\u884cJavaScript\u7684JavaScript API\u3002\u5b83\u65e8\u5728\u5141\u8bb8\u6267\u884c\u590d\u6742\u7684\u8ba1\u7b97\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002\u8fd9\u5bf9Web\u5f00\u53d1\u4eba\u5458\u975e\u5e38\u6709\u7528\uff0c\u4f46\u5e76\u6ca1\u6709\u5e7f\u6cdb\u4f7f\u7528\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Web Worker\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u4ec0\u4e48\u662fweb-worker",children:"\u4ec0\u4e48\u662fWeb Worker"}),"\n",(0,s.jsx)(r.p,{children:"\u4f17\u6240\u5468\u77e5\uff0cJavaScript\u8bed\u8a00\u7684\u4e00\u4e2a\u4e3b\u8981\u7279\u70b9\u662f\u5176\u5355\u7ebf\u7a0b\u6027\u8d28\uff0c\u4e00\u6b21\u53ea\u80fd\u540c\u6b65\u5904\u7406\u4e00\u4e2a\u4efb\u52a1\u3002\u8fd9\u4e5f\u662f\u9488\u5bf9Node.js\u7684\u540e\u7aef\u5f00\u53d1\u8005\u7684\u4e3b\u8981\u6279\u8bc4\u70b9\u4e4b\u4e00\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u7136\u800c\uff0cJavaScript\u6700\u521d\u662f\u6709\u610f\u8bbe\u8ba1\u4e3a\u5355\u7ebf\u7a0b\u8bed\u8a00\uff0c\u4ee5\u9002\u5e94\u5f53\u65f6\u7684\u7528\u9014\u3002"}),"\n",(0,s.jsx)(r.p,{children:"JavaScript\u7684\u6700\u521d\u76ee\u6807\u662f\u901a\u8fc7\u64cd\u4f5cDOM\u6216BOM\u5143\u7d20\u6765\u4fc3\u8fdbWeb\u9875\u9762\u4e0e\u7528\u6237\u7684\u4ea4\u4e92\u3002\u4e3a\u4e86\u5728\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u4e2d\u8ffd\u6c42\u6548\u7387\uff0c\u5fc5\u987b\u6307\u5b9a\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5728\u4efb\u4f55\u65f6\u95f4\u70b9\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\u9875\u9762\u5143\u7d20\uff0c\u4ee5\u907f\u514d\u8d44\u6e90\u7ade\u4e89\u548c\u6570\u636e\u540c\u6b65\u7b49\u95ee\u9898\uff0c\u4ee5\u786e\u4fdd\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u5b89\u5168\u6027\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u7136\u800c\uff0cJavaScript\u5e76\u4e0d\u9650\u5236\u4e8e\u7ebf\u6027\u4efb\u52a1\u5904\u7406\u3002JavaScript\u5177\u6709\u6d88\u606f\u961f\u5217\u548c\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff0c\u901a\u8fc7\u5f02\u6b65\u6d88\u606f\u5904\u7406\u5b9e\u73b0\u5e76\u53d1\u5904\u7406\u3002\u5728\u9ad8I/O\u5e76\u53d1\u4e8b\u52a1\u5904\u7406\u4e2d\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u521b\u5efa\u548c\u9500\u6bc1\u7ebf\u7a0b\uff0c\u4e5f\u4e0d\u9700\u8981\u989d\u5916\u7684\u7ebf\u7a0b\u7ba1\u7406\u7a7a\u95f4\uff0c\u56e0\u6b64\u6027\u80fd\u4f18\u8d8a\u3002\u7ed3\u679c\uff0c\u63a2\u7d22\u5728\u670d\u52a1\u5668\u7aef\u4f7f\u7528JavaScript\u7684Node.js\u5728\u9ad8\u5e76\u53d1\u7f51\u7edc\u8bf7\u6c42\u5904\u7406\u65b9\u9762\u8868\u73b0\u51fa\u8272\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u867d\u7136JavaScript\u901a\u8fc7\u5176\u5f02\u6b65\u673a\u5236\u6709\u6548\u5730\u89e3\u51b3\u4e86\u4e0e\u9ad8I/O\u76f8\u5173\u7684\u6027\u80fd\u95ee\u9898\uff0c\u4f46\u5176\u5355\u7ebf\u7a0b\u6267\u884c\u7684\u57fa\u672c\u7279\u6027\u4ecd\u7136\u5b58\u5728\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u5904\u7406CPU\u5bc6\u96c6\u578b\u4efb\u52a1\u65f6\u65e0\u6cd5\u5145\u5206\u5229\u7528\u5176\u8ba1\u7b97\u8d44\u6e90\uff0c\u8fd9\u662f\u56e0\u4e3a\u5b83\u4e0d\u80fd\u5145\u5206\u5229\u7528\u73b0\u4ee3\u591a\u6838\u591a\u7ebf\u7a0b\u673a\u5668\u7684\u8ba1\u7b97\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u73b0\u4ee3\u5927\u578b\u524d\u7aef\u9879\u76ee\u4e2d\uff0c\u968f\u7740\u4ee3\u7801\u590d\u6742\u6027\u7684\u589e\u52a0\uff0c\u672c\u5730\u8ba1\u7b97\u5bc6\u96c6\u578b\u4efb\u52a1\u4e5f\u53d8\u5f97\u9700\u8981\u3002\u5982\u679c\u5c06JavaScript\u9879\u76ee\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\u8fd0\u884c\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u53d8\u5f97\u7e41\u5fd9\uff0c\u5ffd\u7565\u4e86\u9891\u7e41\u7684\u7528\u6237\u4ea4\u4e92\uff0c\u7528\u6237\u4f53\u9a8c\u53ef\u80fd\u4e0d\u4f73\u3002\u66f4\u4e25\u91cd\u7684\u662f\uff0c\u5982\u679c\u6709\u592a\u591a\u7684\u8ba1\u7b97\u5bc6\u96c6\u578b\u4efb\u52a1\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8d44\u6e90\u9971\u548c\uff0c\u4f7f\u7f51\u9875\u4e0d\u518d\u54cd\u5e94\u3002\u56e0\u6b64\uff0c\u5728Web\u9879\u76ee\u4e2d\u9700\u8981\u672c\u5730\u591a\u7ebf\u7a0b\u8ba1\u7b97\u80fd\u529b\uff0c\u8fd9\u5c31\u662fWeb Worker\u8bde\u751f\u7684\u539f\u56e0\u3002"}),"\n",(0,s.jsx)(r.p,{children:"Web Worker\u4f5c\u4e3aHTML5\u7684\u6807\u51c6\u5f15\u5165\uff0c\u5b98\u65b9\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Web Worker\u5141\u8bb8\u5728\u4e0eWeb\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u6267\u884c\u7ebf\u7a0b\u5206\u5f00\u7684\u540e\u53f0\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u811a\u672c\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u6837\uff0cJavaScript\u811a\u672c\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7ebf\u7a0b\uff0c\u5145\u5206\u5229\u7528CPU\u7684\u591a\u6838\u8ba1\u7b97\u80fd\u529b\uff0c\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff08\u901a\u5e38\u662fUI\u6e32\u67d3\u7ebf\u7a0b\uff09\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u5c3d\u7ba1Web Worker\u662fHTML5\u7684\u4e00\u90e8\u5206\uff0c\u4f46\u5b9e\u9645\u4e0a\u5b83\u57282009\u5e74\u63d0\u51fa\u4e86W3C\u7684\u8349\u6848\u3002\u56e0\u6b64\uff0c\u5b83\u5177\u6709\u5f88\u597d\u7684\u517c\u5bb9\u6027\uff0c\u5e76\u4e14\u5728\u5927\u591a\u6570\u4e3b\u8981\u7684Web\u6d4f\u89c8\u5668\u4e2d\u5f97\u5230\u652f\u6301\u3002"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/worker.png",alt:"web_worker"})}),"\n",(0,s.jsx)(r.h2,{id:"web-worker\u7684\u9650\u5236",children:"Web Worker\u7684\u9650\u5236"}),"\n",(0,s.jsx)(r.p,{children:"Web Worker\u57fa\u672c\u4e0a\u4e0d\u4f1a\u7834\u574fJavaScript\u7684\u5355\u7ebf\u7a0b\u6027\u8d28\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u5b9e\u9645\u4e0a\uff0cWeb Worker\u811a\u672c\u5185\u7684\u4ee3\u7801\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5cDOM\u8282\u70b9\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528\u5927\u591a\u6570BOM\uff08\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff09API\u3002\u5b83\u7684\u5168\u5c40\u73af\u5883\u4e0d\u662fWindow\uff0c\u800c\u662fDedicatedWorkerGlobalScope\u3002Worker\u5728\u6c99\u7bb1\u4e2d\u8fd0\u884c\uff0c\u6267\u884c\u4e0e\u4e3b\u7ebf\u7a0b\u5b8c\u5168\u72ec\u7acb\u7684JavaScript\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u4e9b\u9650\u5236\u662f\u4e3a\u4e86\u907f\u514d\u5728\u524d\u6587\u63d0\u5230\u7684\u8d44\u6e90\u7ade\u4e89\u95ee\u9898\u4e2d\u4f7f\u7528Worker\u3002\u4e3b\u8981\u7528\u9014\u662f\u4f5c\u4e3a\u4e3b\u7ebf\u7a0b\u7684\u8f85\u52a9\uff0c\u5904\u7406\u9ad8CPU\u5bc6\u96c6\u578b\u6570\u636e\u5904\u7406\u4efb\u52a1\uff0c\u5e76\u901a\u8fc7\u7ebf\u7a0b\u95f4\u901a\u4fe1\u5c06\u6267\u884c\u7ed3\u679c\u8fd4\u56de\u7ed9\u4e3b\u7ebf\u7a0b\u3002\u901a\u8fc7\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u4e3b\u7ebf\u7a0b\u53ef\u4ee5\u7ee7\u7eed\u54cd\u5e94\u7528\u6237\u4ea4\u4e92\uff0c\u6709\u6548\u5730\u9632\u6b62\u4e86\u9875\u9762\u5ef6\u8fdf\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u4f7f\u7528web-worker",children:"\u4f7f\u7528Web Worker"}),"\n",(0,s.jsx)(r.p,{children:"\u76ee\u524d\uff0cWeb Worker\u5728\u6d4f\u89c8\u5668\u4e2d\u5f97\u5230\u4e86\u5e7f\u6cdb\u652f\u6301\uff0c\u53ea\u9700\u63d0\u4f9bWorker\u811a\u672c\u7684URI\u5e76\u8fdb\u884c\u5b9e\u4f8b\u5316\u5373\u53ef\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'/* main.js */\n\nconst worker = new Worker("./worker.js")\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u901a\u4fe1",children:"\u901a\u4fe1"}),"\n",(0,s.jsxs)(r.p,{children:["Worker\u548c\u4e3b\u7ebf\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\u53ea\u9700\u8981\u4e24\u4e2aAPI\uff0c\u5373\u7528\u4e8e\u63a5\u6536\u6d88\u606f\u7684",(0,s.jsx)(r.code,{children:"onmessage"}),"\u6216",(0,s.jsx)(r.code,{children:"addEventListener"}),"\u4ee5\u53ca\u7528\u4e8e\u53d1\u9001\u6d88\u606f\u7684",(0,s.jsx)(r.code,{children:"postMessage"}),"\uff0c\u53ef\u4ee5\u65e0\u7f1d\u5730\u5b9e\u73b0\u57fa\u4e8e\u6d88\u606f\u7684\u4ea4\u4e92\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"/* main.js */\nconst worker = new Worker(\"./worker.js\");\n\n// \u4ece\u4e3b\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\nworker.postMessage({ data: '\u4ece\u4e3b\u7ebf\u7a0b\u53d1\u9001\u7684\u6570\u636e' });\n\n// \u4e3b\u7ebf\u7a0b\u63a5\u6536\u6d88\u606f\nworker.onmessage = (e) => {\n    const { data } = e;\n    if (!data) return;\n    console.log(data);\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"/* worker.js */\n// Worker\u7ebf\u7a0b\u63a5\u6536\u6d88\u606f\nself.addEventListener('message', (e) => {\n    const { data } = e;\n    if (!data) return;\n    // Worker\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\n    self.postMessage({data: 'Worker\u6536\u5230\u4e86\u6570\u636e'})\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6ce8\u610f\uff1a\u5728Worker\u5185\u90e8\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(r.code,{children:"this.xx"}),"\u3001",(0,s.jsx)(r.code,{children:"self.xx"}),"\u4ee5\u53ca\u76f4\u63a5\u4f7f\u7528",(0,s.jsx)(r.code,{children:"xx"}),"\uff0c\u5b83\u4eec\u90fd\u5904\u4e8e\u76f8\u540c\u7684\u4f5c\u7528\u57df\uff0c\u5f15\u7528\u5168\u5c40\u53d8\u91cf",(0,s.jsx)(r.code,{children:"DedicatedWorkerGlobalScope"}),"\uff0c\u53ef\u4ee5\u4e92\u6362\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"\u7ec8\u6b62",children:"\u7ec8\u6b62"}),"\n",(0,s.jsx)(r.p,{children:"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u7ec8\u6b62Worker\u3002\u53ef\u4ee5\u5728\u5185\u90e8\u7ec8\u6b62\uff0c\u4e5f\u53ef\u4ee5\u4ece\u4e3b\u7ebf\u7a0b\u53d1\u51fa\u7ec8\u6b62\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"\n\n/* main.js */\nworker.terminate();\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"/* worker.js */\nself.close();\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u9ad8\u7ea7\u7528\u6cd5\u57fa\u4e8epromise\u7684\u901a\u4fe1",children:"\u9ad8\u7ea7\u7528\u6cd5\uff1a\u57fa\u4e8ePromise\u7684\u901a\u4fe1"}),"\n",(0,s.jsx)(r.p,{children:"\u57fa\u4e8e\u524d\u9762\u7684\u90e8\u5206\uff0c\u5df2\u7ecf\u53ef\u4ee5\u4f7f\u7528Worker\u7684API\u76f8\u5bf9\u8f7b\u677e\u5730\u5229\u7528\u6d4f\u89c8\u5668\u7684\u591a\u7ebf\u7a0b\u529f\u80fd\u3002\u4f46\u662f\uff0c\u7f3a\u5c11\u4e00\u4e9b\u5e38\u7528\u529f\u80fd\uff0c\u5982\u5f02\u6b65\u54cd\u5e94\u7b49\uff0c\u8fd9\u5728\u5de5\u7a0b\u5e94\u7528\u7a0b\u5e8f\u4e2d\u901a\u5e38\u662f\u9700\u8981\u7684\u3002\u63a5\u4e0b\u6765\uff0c\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u9700\u8981\u4e00\u4e2a\u5f02\u6b65\u56de\u8c03\u96c6\u5408\uff0c\u79f0\u4e3a",(0,s.jsx)(r.code,{children:"actionHandlerMap"}),"\u3002\u5b83\u7528\u4e8e\u5b58\u50a8\u7b49\u5f85Worker\u54cd\u5e94\u7684Promise\u89e3\u6790\u65b9\u6cd5\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u552f\u4e00\u7684\u6807\u8bc6\u7b26\uff08\u786e\u4fdd\u552f\u4e00\u6027\uff09\u6307\u5b9a\u952e\u3002\u63a5\u4e0b\u6765\uff0c\u9700\u8981\u5c01\u88c5\u539f\u751f\u7684",(0,s.jsx)(r.code,{children:"postMessage"}),"\u548c",(0,s.jsx)(r.code,{children:"onmessage"}),"\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u9700\u8981\u5728\u6d88\u606f\u4e2d\u5305\u542b\u4e00\u4e2a",(0,s.jsx)(r.code,{children:"id"}),"\uff0c\u5e76\u5728",(0,s.jsx)(r.code,{children:"actionHandlerMap"}),"\u4e2d\u5b58\u50a8\u5f53\u524dPromise\u7684\u89e3\u6790\u65b9\u6cd5\u4ee5\u7b49\u5f85Worker\u7684\u54cd\u5e94\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5728",(0,s.jsx)(r.code,{children:"onmessage"}),"\u76d1\u542c\u5668\u65b9\u9762\uff0c\u63a5\u6536\u5230Worker\u7684\u54cd\u5e94\u540e\uff0c\u5c06\u5176\u4e0e\u76f8\u5e94\u7684Promise\u5339\u914d\u5e76\u6267\u884c",(0,s.jsx)(r.code,{children:".then()"}),"\u65b9\u6cd5\u3002\u5b8c\u6210\u540e\uff0c\u4ece\u96c6\u5408\u4e2d\u5220\u9664Promise\u7684\u89e3\u6790\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"/* main.js */\nlet fakeId = 0;\nclass MainThreadController {\n    constructor(options) {\n        this.worker = new Worker(options.workerUrl, { name: options.workerName });\n\n        // \u7528\u4e8e\u7b49\u5f85\u5f02\u6b65\u56de\u8c03\u7684\u96c6\u5408\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    onmessage(e) {\n        const { id, response } = e.data;\n        if (!this.actionHandlerMap[id]) return;\n\n        // \u6267\u884c\u76f8\u5e94\u7684Promise\u89e3\u6790\n        this.actionHandlerMap[id].call(this, response);\n        delete this.actionHandlerMap[id];\n    }\n\n    postMessage(action) {\n        // \u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e1a\u52a1ID\u4f5c\u4e3a\u952e\u6216\u751f\u6210\u952e\n        const id = fakeId++;\n        return new Promise((resolve, reject) => {\n            const message = {\n                id,\n                ...action,\n            };\n            this.worker.postMessage(message);\n            this.actionHandlerMap[id] = (response) => {\n                resolve(response);\n            };\n        });\n    }\n}\n\nconst mainThreadController = new MainThreadController({ workerUrl: './worker.js', workerName: 'test-worker' });\nmainThreadController\n    .postMessage({\n        actionType: 'asyncCalc',\n        payload: { msg: '\u5411Worker\u53d1\u9001\u6d88\u606f', params: 1 },\n    })\n    .then((response) => console.log('\u4eceWorker\u63a5\u6536\u5230\u6d88\u606f:', response.msg));\n"})}),"\n",(0,s.jsx)(r.p,{children:"Worker\u90e8\u5206\u7684\u5904\u7406\u8981\u7b80\u5355\u5f97\u591a\u3002\u5f53\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u5c06\u8bf7\u6c42\u7684ID\u5305\u542b\u5728\u54cd\u5e94\u4e2d\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"/* worker.js */\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // \u7528\u4e8e\u7b49\u5f85\u5f02\u6b65\u56de\u8c03\u7684\u96c6\u5408\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        switch (actionType) {\n            case 'print':\n                console.log(payload.msg);\n                self.postMessage({ id, response: { msg: '\u6d88\u606f\u5df2\u6253\u5370\u3002' } });\n                break;\n\n            case 'asyncCalc':\n                // \u6a21\u62df\u5f02\u6b65\u5904\u7406\u60c5\u666f\n                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n                self.postMessage({ id, response: { msg: `\u8ba1\u7b97\u7684\u7ed3\u679c\u4e3a ${result}\u3002` } });\n                break;\n\n            default:\n                break;\n        }\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5f53\u7136\uff0c\u5728Worker\u7aef\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6539\u8fdb\u3002\u5982\u679cWorker\u9700\u8981\u5904\u7406\u591a\u79cd\u7c7b\u578b\u7684\u8ba1\u7b97\uff0c",(0,s.jsx)(r.code,{children:"onmessage"}),"\u51fd\u6570\u4e2d\u7684",(0,s.jsx)(r.code,{children:"switch"}),"\u8bed\u53e5\u53ef\u80fd\u4f1a\u53d8\u5f97\u5f88\u957f\u3002\u57fa\u4e8e\u5b57\u7b26\u4e32\u7684\u68c0\u67e5\u4e5f\u53ef\u80fd\u4e0d\u591f\u53ef\u9760\u3002\u901a\u8fc7\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u5c06Worker\u5185\u90e8\u903b\u8f91\u5c01\u88c5\u8d77\u6765\uff0c\u53ef\u4ee5\u7b80\u5316Worker\u5185\u90e8\u7684\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"/* worker.js */\n// \u8fd9\u53ef\u4ee5\u5355\u72ec\u63d0\u53d6\u5230\u53e6\u4e00\u4e2a\u6587\u4ef6\u5e76\u5bfc\u5165\nconst api = {\n    print(payload) {\n        console.log(payload.msg);\n        return { msg: '\u6d88\u606f\u5df2\u6253\u5370\u3002' };\n    },\n    async asyncCalc(payload) {\n        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n        return { msg: `\u8ba1\u7b97\u7684\u7ed3\u679c\u4e3a ${result}\u3002` };\n    },\n};\n\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // \u7528\u4e8e\u7b49\u5f85\u5f02\u6b65\u56de\u8c03\u7684\u96c6\u5408\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        const result = await api[actionType].call(this, payload);\n        self.postMessage({ id, response: result });\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u56e0\u6b64\uff0c\u5efa\u7acb\u4e86\u4e00\u4e2a\u7b80\u5355\u4e14\u65b9\u4fbf\u7684\u57fa\u4e8ePromise\u7684Worker\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,s.jsx)(r.p,{children:"\u603b\u7ed3\u4e00\u4e0b\uff0c\u672c\u6587\u7b80\u8981\u4ecb\u7ecd\u4e86Web Worker\u7684\u6982\u5ff5\u3001\u5176\u529f\u80fd\u548c\u9650\u5236\uff0c\u5e76\u4e3a\u8bfb\u8005\u63d0\u4f9b\u4e86\u5168\u9762\u7684\u7406\u89e3\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528Web Worker\u7684\u7528\u4f8b\u3002\u8fd8\u63d0\u51fa\u4e86\u4e00\u79cd\u5c01\u88c5\u539f\u751fWorker API\u4ee5\u5b9e\u73b0\u57fa\u4e8ePromise\u8c03\u7528\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5e76\u6700\u7ec8\u5efa\u8bae\u4f7f\u7528\u5728\u56e2\u961f\u4e2d\u5df2\u7ecf\u5e7f\u6cdb\u4f7f\u7528\u4e14\u6210\u719f\u7684\u89e3\u51b3\u65b9\u6848\u3002\u5e0c\u671b\u8fd9\u5bf9\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u5bf9\u672a\u6765\u7684Worker\u6269\u5c55\u611f\u5174\u8da3\u65f6\u6709\u6240\u5e2e\u52a9\u3002"})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7214:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>t});var s=n(959);const o={},a=s.createContext(o);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);