"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[1626],{2306:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(1527),o=r(7214);const a={slug:"web-worker-tutorial",title:"\u30d9\u30b9\u30c8\u306aWeb Worker\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",description:"Web Worker\u306f\u3001JavaScript\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308bJavaScript API\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u3092\u30d6\u30ed\u30c3\u30af\u305b\u305a\u306b\u8907\u96d1\u306a\u8a08\u7b97\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},t=void 0,i={permalink:"/illa-website/ja/blog/web-worker-tutorial",source:"@site/i18n/ja/docusaurus-plugin-content-blog/web-worker-tutorial/web-worker-tutorial.md",title:"\u30d9\u30b9\u30c8\u306aWeb Worker\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",description:"Web Worker\u306f\u3001JavaScript\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308bJavaScript API\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u3092\u30d6\u30ed\u30c3\u30af\u305b\u305a\u306b\u8907\u96d1\u306a\u8a08\u7b97\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002",date:"2024-01-29T10:00:00.000Z",formattedDate:"2024\u5e741\u670829\u65e5",tags:[{label:"javascript",permalink:"/illa-website/ja/blog/tags/javascript"},{label:"webworker",permalink:"/illa-website/ja/blog/tags/webworker"}],readingTime:12.825,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"web-worker-tutorial",title:"\u30d9\u30b9\u30c8\u306aWeb Worker\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",description:"Web Worker\u306f\u3001JavaScript\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308bJavaScript API\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u3092\u30d6\u30ed\u30c3\u30af\u305b\u305a\u306b\u8907\u96d1\u306a\u8a08\u7b97\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/cover.webp",tags:["javascript","webworker"],date:"2024-01-29T10:00"},unlisted:!1,nextItem:{title:"\u6700\u3082\u5b9f\u7528\u7684\u306aTypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd",permalink:"/illa-website/ja/blog/typescript-most-practical-features-compilation"},relatedPosts:[{title:"2024\u5e74\u304c\u5230\u6765\u3057\u307e\u3057\u305f\u3001Shadcn UI\u3092\u9078\u3076\u3079\u304d\u3067\u3057\u3087\u3046\u304b\uff1f",description:"2024\u5e74\u304c\u5230\u6765\u3057\u3001React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306f\u4f9d\u7136\u3068\u3057\u3066\u6d3b\u6c17\u306b\u6e80\u3061\u3066\u3044\u307e\u3059\u3002",permalink:"/illa-website/ja/blog/shadcn-ui-2024",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.74,date:"2024-01-03T10:00:00.000Z"},{title:"2024\u5e74\u306eMac\u3067\u306eNode.js\u7ba1\u7406\u306b\u304a\u3051\u308bnvm\u306e\u512a\u308c\u305f\u4f7f\u3044\u65b9",description:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u57fa\u76e4\u3068\u3057\u3066\u306eNode.js\u306f\u3001\u3082\u306f\u3084\u5358\u306a\u308b\u300cJS\u30b5\u30fc\u30d0\u30fc\u30e9\u30f3\u30bf\u30a4\u30e0\u300d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002",permalink:"/illa-website/ja/blog/nvm-use-2024",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:7.69,date:"2024-01-03T10:00:00.000Z"},{title:"\u5185\u90e8\u30c4\u30fc\u30eb\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u6700\u9ad8\u306e\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u4f4e\u30b3\u30fc\u30c9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",description:"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u306f\u4e00\u822c\u7684\u3067\u3059\u304c\u30011\u4e07\u306e\u30b9\u30bf\u30fc\u3092\u6301\u3064\u3082\u306e\u306f\u73cd\u3057\u3044\u3067\u3059\u3002",permalink:"/illa-website/ja/blog/internal-tool",formattedDate:"2024\u5e741\u67085\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:4.725,date:"2024-01-05T10:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},c=[{value:"Web Worker\u3068\u306f",id:"web-worker\u3068\u306f",level:2},{value:"Web Worker\u306e\u5236\u9650\u4e8b\u9805",id:"web-worker\u306e\u5236\u9650\u4e8b\u9805",level:2},{value:"Web Worker\u306e\u4f7f\u7528\u6cd5",id:"web-worker\u306e\u4f7f\u7528\u6cd5",level:2},{value:"\u901a\u4fe1",id:"\u901a\u4fe1",level:3},{value:"\u7d42\u4e86",id:"\u7d42\u4e86",level:3},{value:"\u4e0a\u7d1a\u8005\u5411\u3051: \u901a\u4fe1\u3092Promise\u30d9\u30fc\u30b9\u306b\u3059\u308b",id:"\u4e0a\u7d1a\u8005\u5411\u3051-\u901a\u4fe1\u3092promise\u30d9\u30fc\u30b9\u306b\u3059\u308b",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Web Worker\u306f\u3001JavaScript\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308bJavaScript API\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u3092\u30d6\u30ed\u30c3\u30af\u305b\u305a\u306b\u8907\u96d1\u306a\u8a08\u7b97\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306fWeb\u958b\u767a\u8005\u306b\u3068\u3063\u3066\u975e\u5e38\u306b\u4fbf\u5229\u306a\u6a5f\u80fd\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u5e83\u304f\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001Web Worker\u306e\u4f7f\u7528\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"web-worker\u3068\u306f",children:"Web Worker\u3068\u306f"}),"\n",(0,s.jsx)(n.p,{children:"\u3088\u304f\u77e5\u3089\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001JavaScript\u8a00\u8a9e\u306e\u4e3b\u8981\u306a\u7279\u5fb4\u306e1\u3064\u306f\u3001\u30b7\u30f3\u30b0\u30eb\u30b9\u30ec\u30c3\u30c9\u6027\u3067\u3042\u308a\u3001\u4e00\u5ea6\u306b1\u3064\u306e\u30bf\u30b9\u30af\u3057\u304b\u540c\u671f\u7684\u306b\u51e6\u7406\u3067\u304d\u306a\u3044\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u3053\u306e\u8a00\u8a9e\u304b\u3089\u6d3e\u751f\u3057\u305fNode.js\u306e\u767b\u5834\u306b\u5bfe\u3059\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u958b\u767a\u8005\u306e\u4e3b\u8981\u306a\u6279\u5224\u70b9\u3067\u3082\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u305f\u3060\u3057\u3001JavaScript\u304c\u6700\u521d\u306b\u8a2d\u8a08\u3055\u308c\u305f\u3068\u304d\u3001\u5f53\u6642\u306e\u7528\u9014\u306b\u5408\u308f\u305b\u3066\u610f\u56f3\u7684\u306b\u30b7\u30f3\u30b0\u30eb\u30b9\u30ec\u30c3\u30c9\u306e\u8a00\u8a9e\u3068\u3057\u3066\u8a2d\u8a08\u3055\u308c\u307e\u3057\u305f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"JavaScript\u306e\u5143\u306e\u76ee\u7684\u306f\u3001Web\u30da\u30fc\u30b8\u3068\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u5bfe\u8a71\u3092\u5bb9\u6613\u306b\u3057\u3001DOM\u307e\u305f\u306fBOM\u8981\u7d20\u3092\u64cd\u4f5c\u3059\u308b\u3053\u3068\u3067\u3057\u305f\u3002\u3053\u306e\u6587\u8108\u3067\u52b9\u7387\u6027\u3092\u8ffd\u6c42\u3059\u308b\u305f\u3081\u306b\u8907\u6570\u306e\u30b9\u30ec\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ea\u30bd\u30fc\u30b9\u7af6\u5408\u3084\u30c7\u30fc\u30bf\u540c\u671f\u306a\u3069\u306e\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u4efb\u610f\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u30671\u3064\u306e\u30b9\u30ec\u30c3\u30c9\u3060\u3051\u304c\u30da\u30fc\u30b8\u8981\u7d20\u3092\u76f4\u63a5\u64cd\u4f5c\u3067\u304d\u308b\u3068\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u5b89\u5b9a\u6027\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u4fdd\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u3057\u304b\u3057\u3001JavaScript\u306f\u7dda\u5f62\u30bf\u30b9\u30af\u51e6\u7406\u306b\u5236\u7d04\u3055\u308c\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002JavaScript\u306b\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u30ad\u30e5\u30fc\u3068\u30a4\u30d9\u30f3\u30c8\u30eb\u30fc\u30d7\u30e1\u30ab\u30cb\u30ba\u30e0\u304c\u3042\u308a\u3001\u975e\u540c\u671f\u30e1\u30c3\u30bb\u30fc\u30b8\u51e6\u7406\u3092\u901a\u3058\u3066\u4e26\u884c\u51e6\u7406\u304c\u53ef\u80fd\u3067\u3059\u3002\u9ad8I/O\u540c\u6642\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u51e6\u7406\u3067\u306f\u3001\u624b\u52d5\u3067\u30b9\u30ec\u30c3\u30c9\u3092\u4f5c\u6210\u3057\u7834\u68c4\u3057\u3001\u8ffd\u52a0\u306e\u30b9\u30ec\u30c3\u30c9\u7ba1\u7406\u30b9\u30da\u30fc\u30b9\u3092\u5360\u6709\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u512a\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067JavaScript\u3092\u63a2\u6c42\u3059\u308bNode.js\u306f\u3001\u9ad8\u4e26\u884c\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u306b\u304a\u3044\u3066\u8457\u3057\u3044\u5229\u70b9\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"JavaScript\u306f\u305d\u306e\u975e\u540c\u671f\u30e1\u30ab\u30cb\u30ba\u30e0\u306b\u3088\u3063\u3066\u9ad8I/O\u95a2\u9023\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u554f\u984c\u306b\u52b9\u679c\u7684\u306b\u5bfe\u51e6\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30b7\u30f3\u30b0\u30eb\u30b9\u30ec\u30c3\u30c9\u306e\u5b9f\u884c\u306e\u57fa\u672c\u7684\u306a\u6027\u8cea\u306f\u5909\u308f\u308a\u307e\u305b\u3093\u3002\u3053\u308c\u306f\u3001CPU\u96c6\u7a4d\u30bf\u30b9\u30af\u3092\u51e6\u7406\u3059\u308b\u969b\u306b\u305d\u306e\u8a08\u7b97\u30ea\u30bd\u30fc\u30b9\u3092\u5b8c\u5168\u306b\u6d3b\u7528\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u554f\u984c\u304c\u660e\u767d\u3067\u3059\u3002\u73fe\u4ee3\u306e\u30de\u30eb\u30c1\u30b3\u30a2\u3001\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u306e\u30de\u30b7\u30f3\u306e\u8a08\u7b97\u30ea\u30bd\u30fc\u30b9\u3092\u5341\u5206\u306b\u6d3b\u7528\u3067\u304d\u306a\u3044\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u73fe\u4ee3\u306e\u5927\u898f\u6a21\u306a\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u30b3\u30fc\u30c9\u306e\u8907\u96d1\u3055\u304c\u5897\u3059\u306b\u3064\u308c\u3066\u3001\u30ed\u30fc\u30ab\u30eb\u306e\u8a08\u7b97\u96c6\u7d04\u30bf\u30b9\u30af\u3082\u8981\u6c42\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002JavaScript\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5358\u4e00\u306e\u30b9\u30ec\u30c3\u30c9\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u8a08\u7b97\u306b\u5fd9\u3057\u304f\u306a\u308a\u3001\u983b\u7e41\u306a\u30e6\u30fc\u30b6\u30fc\u306e\u76f8\u4e92\u4f5c\u7528\u3092\u7121\u8996\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u304c\u6700\u9069\u3067\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3088\u308a\u6df1\u523b\u306a\u5834\u5408\u3001\u8a08\u7b97\u96c6\u7d04\u30bf\u30b9\u30af\u304c\u591a\u3059\u304e\u308b\u5834\u5408\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u98fd\u548c\u306b\u3088\u308aWeb\u30da\u30fc\u30b8\u304c\u5fdc\u7b54\u3057\u306a\u304f\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Web\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30ed\u30fc\u30ab\u30eb\u306e\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u8a08\u7b97\u80fd\u529b\u304c\u5fc5\u8981\u3068\u3055\u308c\u3001Web Worker\u304c\u8a95\u751f\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Web Worker\u306fHTML5\u306e\u6a19\u6e96\u3068\u3057\u3066\u5c0e\u5165\u3055\u308c\u3001\u516c\u5f0f\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Web Worker\u306f\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e1\u30a4\u30f3\u5b9f\u884c\u30b9\u30ec\u30c3\u30c9\u3068\u306f\u5225\u306e\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30b9\u30ec\u30c3\u30c9\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001JavaScript\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u8907\u6570\u306e\u30b9\u30ec\u30c3\u30c9\u3092\u4f5c\u6210\u3067\u304d\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\uff08\u901a\u5e38\u306fUI\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b9\u30ec\u30c3\u30c9\u3068\u547c\u3070\u308c\u307e\u3059\uff09\u3092\u30d6\u30ed\u30c3\u30af\u305b\u305a\u306bCPU\u306e\u30de\u30eb\u30c1\u30b3\u30a2\u8a08\u7b97\u80fd\u529b\u3092\u5b8c\u5168\u306b\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Web Worker\u306fHTML5\u306e\u6a19\u6e96\u306e\u4e00\u90e8\u3067\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f2009\u5e74\u306bW3C\u306e\u30c9\u30e9\u30d5\u30c8\u3067\u63d0\u6848\u3055\u308c\u305f\u3082\u306e\u3067\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u3001\u4e92\u63db\u6027\u306f\u512a\u308c\u3066\u304a\u308a\u3001\u307b\u3068\u3093\u3069\u306e\u4e3b\u8981\u306aWeb\u30d6\u30e9\u30a6\u30b6\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["![web_worker](",(0,s.jsx)(n.a,{href:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/",children:"https://cdn.illacloud.com/illa-website/blog/web-worker-tutorial/"})]}),"\n",(0,s.jsx)(n.p,{children:"worker.png)"}),"\n",(0,s.jsx)(n.h2,{id:"web-worker\u306e\u5236\u9650\u4e8b\u9805",children:"Web Worker\u306e\u5236\u9650\u4e8b\u9805"}),"\n",(0,s.jsx)(n.p,{children:"Web Worker\u306f\u57fa\u672c\u7684\u306bJavaScript\u306e\u30b7\u30f3\u30b0\u30eb\u30b9\u30ec\u30c3\u30c9\u6027\u3092\u5d29\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5b9f\u969b\u3001Web Worker\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u306e\u30b3\u30fc\u30c9\u306fDOM\u30ce\u30fc\u30c9\u3092\u76f4\u63a5\u64cd\u4f5c\u3067\u304d\u305a\u3001\u307b\u3068\u3093\u3069\u306eBOM\uff08\u30d6\u30e9\u30a6\u30b6\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb\uff09API\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u305d\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u74b0\u5883\u306fWindow\u3067\u306f\u306a\u304fDedicatedWorkerGlobalScope\u3067\u3059\u3002Worker\u306f\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u5185\u3067\u52d5\u4f5c\u3057\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u304b\u3089\u5b8c\u5168\u306b\u72ec\u7acb\u3057\u305fJavaScript\u30d5\u30a1\u30a4\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u5236\u7d04\u306f\u3001\u3053\u306e\u8a18\u4e8b\u306e\u5192\u982d\u3067\u8ff0\u3079\u305f\u30ea\u30bd\u30fc\u30b9\u7af6\u5408\u306e\u554f\u984c\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306bWorker\u306b\u8ab2\u305b\u3089\u308c\u305f\u3082\u306e\u3067\u3059\u3002\u4e3b\u306a\u4f7f\u7528\u4f8b\u306f\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u306e\u88dc\u52a9\u3068\u3057\u3066\u3001\u9ad8\u3044CPU\u96c6\u7a4d\u30c7\u30fc\u30bf\u51e6\u7406\u30bf\u30b9\u30af\u3092\u51e6\u7406\u3057\u3001\u305d\u306e\u5b9f\u884c\u7d50\u679c\u3092\u30b9\u30ec\u30c3\u30c9\u9593\u901a\u4fe1\u3092\u4ecb\u3057\u3066\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u306b\u623b\u3059\u3053\u3068\u3067\u3059\u3002\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u901a\u3058\u3066\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u76f8\u4e92\u4f5c\u7528\u306b\u5bfe\u3057\u3066\u5f15\u304d\u7d9a\u304d\u5fdc\u7b54\u3057\u3001\u30da\u30fc\u30b8\u306e\u9045\u5ef6\u306e\u554f\u984c\u3092\u52b9\u679c\u7684\u306b\u9632\u304e\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"web-worker\u306e\u4f7f\u7528\u6cd5",children:"Web Worker\u306e\u4f7f\u7528\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"\u73fe\u5728\u3001Web Worker\u306e\u30d6\u30e9\u30a6\u30b6\u30b5\u30dd\u30fc\u30c8\u306f\u975e\u5e38\u306b\u5305\u62ec\u7684\u3067\u3042\u308a\u3001\u5358\u306bWorker\u30b9\u30af\u30ea\u30d7\u30c8\u306eURI\u3092\u63d0\u4f9b\u3057\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u3053\u3068\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'/* main.js */\n\nconst worker = new Worker("./worker.js")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u901a\u4fe1",children:"\u901a\u4fe1"}),"\n",(0,s.jsxs)(n.p,{children:["Worker\u3068\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u306e\u9593\u306e\u901a\u4fe1\u306b\u306f\u3001\u53d7\u4fe1\u7528\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u3051\u53d6\u308b\u305f\u3081\u306e",(0,s.jsx)(n.code,{children:"onmessage"}),"\u307e\u305f\u306f",(0,s.jsx)(n.code,{children:"addEventListener"}),"\u3068\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306e",(0,s.jsx)(n.code,{children:"postMessage"}),"\u306e2\u3064\u306eAPI\u3060\u3051\u304c\u5fc5\u8981\u3067\u3042\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u30d9\u30fc\u30b9\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* main.js */\nconst worker = new Worker(\"./worker.js\");\n\n// \u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\nworker.postMessage({ data: '\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u304b\u3089\u30c7\u30fc\u30bf\u3092\u9001\u4fe1' });\n\n// \u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\nworker.onmessage = (e) => {\n    const { data } = e;\n    if (!data) return;\n    console.log(data);\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* worker.js */\n// Worker\u30b9\u30ec\u30c3\u30c9\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\nself.addEventListener('message', (e) => {\n    const { data } = e;\n    if (!data) return;\n    // Worker\u30b9\u30ec\u30c3\u30c9\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\n    self.postMessage({data: 'Worker\u304c\u30c7\u30fc\u30bf\u3092\u53d7\u4fe1\u3057\u307e\u3057\u305f'})\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff1aWorker\u5185\u3067\u306f\u3001",(0,s.jsx)(n.code,{children:"this.xx"}),"\u3001",(0,s.jsx)(n.code,{children:"self.xx"}),"\u3001\u304a\u3088\u3073\u76f4\u63a5",(0,s.jsx)(n.code,{children:"xx"}),"\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3059\u3079\u3066\u540c\u3058\u30b9\u30b3\u30fc\u30d7\u3067\u3042\u308a\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570",(0,s.jsx)(n.code,{children:"DedicatedWorkerGlobalScope"}),"\u3092\u53c2\u7167\u3057\u3001\u4e92\u63db\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7d42\u4e86",children:"\u7d42\u4e86"}),"\n",(0,s.jsx)(n.p,{children:"Worker\u3092\u7d42\u4e86\u3059\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002\u5185\u90e8\u3067\u7d42\u4e86\u3059\u308b\u304b\u3001\u30e1\u30a4\u30f3\u30b9\u30ec\u30c3\u30c9\u304b\u3089\u7d42\u4e86\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"/* main.js */\nworker.terminate();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"/* worker.js */\nself.close();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0a\u7d1a\u8005\u5411\u3051-\u901a\u4fe1\u3092promise\u30d9\u30fc\u30b9\u306b\u3059\u308b",children:"\u4e0a\u7d1a\u8005\u5411\u3051: \u901a\u4fe1\u3092Promise\u30d9\u30fc\u30b9\u306b\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u524d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u57fa\u3065\u3044\u3066\u3001\u65e2\u306b\u30d6\u30e9\u30a6\u30b6\u306e\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u6a5f\u80fd\u3092\u6bd4\u8f03\u7684\u7c21\u5358\u306b\u6d3b\u7528\u3059\u308b\u65b9\u6cd5\u3092Worker\u306eAPI\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u73fe\u3067\u304d\u307e\u3057\u305f\u3002\u3057\u304b\u3057\u3001\u3053\u308c\u306b\u306f\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3088\u304f\u5fc5\u8981\u3068\u3055\u308c\u308b\u975e\u540c\u671f\u5fdc\u7b54\u306a\u3069\u306e\u4f7f\u3044\u3084\u3059\u3055\u306e\u6a5f\u80fd\u304c\u6b20\u3051\u3066\u3044\u307e\u3059\u3002\u6b21\u306b\u305d\u308c\u3092\u884c\u3044\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u307e\u305a\u6700\u521d\u306b\u3001",(0,s.jsx)(n.code,{children:"actionHandlerMap"})," \u3068\u3044\u3046\u975e\u540c\u671f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306f\u3001Worker\u304b\u3089\u306e\u5fdc\u7b54\u3092\u5f85\u3064Promise\u306e\u89e3\u6c7a\u30e1\u30bd\u30c3\u30c9\u3092\u683c\u7d0d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30ad\u30fc\u306f\u901a\u4fe1\u304b\u3089\u306e\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3092\u4f7f\u7528\u3057\u3066\u6307\u5b9a\u3067\u304d\u307e\u3059\uff08\u4e00\u610f\u6027\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u304c\u5341\u5206\u3067\u3059\uff09\u3002\u6b21\u306b\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e ",(0,s.jsx)(n.code,{children:"postMessage"})," \u304a\u3088\u3073 ",(0,s.jsx)(n.code,{children:"onmessage"})," \u30e1\u30bd\u30c3\u30c9\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"postMessage"})," \u3067\u9001\u4fe1\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u306f ",(0,s.jsx)(n.code,{children:"id"})," \u3092\u542b\u3081\u3001\u73fe\u5728\u306ePromise\u306e\u89e3\u6c7a\u30e1\u30bd\u30c3\u30c9\u3092 ",(0,s.jsx)(n.code,{children:"actionHandlerMap"})," \u306b\u914d\u7f6e\u3057\u3066Worker\u306e\u5fdc\u7b54\u3092\u5f85\u3061\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"onmessage"})," \u30ea\u30b9\u30ca\u30fc\u306b\u95a2\u3057\u3066\u306f\u3001Worker\u304b\u3089\u306e\u5fdc\u7b54\u3092\u53d7\u4fe1\u3057\u305f\u5f8c\u3001\u305d\u308c\u3092\u5bfe\u5fdc\u3059\u308bPromise\u3068\u4e00\u81f4\u3055\u305b\u3001",(0,s.jsx)(n.code,{children:".then()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u5b8c\u4e86\u5f8c\u3001Promise\u306e\u89e3\u6c7a\u95a2\u6570\u3092\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* main.js */\nlet fakeId = 0;\nclass MainThreadController {\n    constructor(options) {\n        this.worker = new Worker(options.workerUrl, { name: options.workerName });\n\n        // \u975e\u540c\u671f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5f85\u3064\u305f\u3081\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    onmessage(e) {\n        const { id, response } = e.data;\n        if (!this.actionHandlerMap[id]) return;\n\n        // \u5bfe\u5fdc\u3059\u308bPromise\u306e\u89e3\u6c7a\u3092\u5b9f\u884c\n        this.actionHandlerMap[id].call(this, response);\n        delete this.actionHandlerMap[id];\n    }\n\n    postMessage(action) {\n        // \u5b9f\u969b\u306e\u4f7f\u7528\u3067\u306f\u3001\u30ad\u30fc\u3068\u3057\u3066\u30d3\u30b8\u30cd\u30b9ID\u3092\u6307\u5b9a\u307e\u305f\u306f\u751f\u6210\u3067\u304d\u307e\u3059\n        const id = fakeId++;\n        return new Promise((resolve, reject) => {\n            const message = {\n                id,\n                ...action,\n            };\n            this.worker.postMessage(message);\n            this.actionHandlerMap[id] = (response) => {\n                resolve(response);\n            };\n        });\n    }\n}\n\nconst mainThreadController = new MainThreadController({ workerUrl: './worker.js', workerName: 'test-worker' });\nmainThreadController\n    .postMessage({\n        actionType: 'asyncCalc',\n        payload: { msg: '\u30ef\u30fc\u30ab\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1', params: 1 },\n    })\n    .then((response) => console.log('\u30ef\u30fc\u30ab\u30fc\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1:', response.msg));\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u30ef\u30fc\u30ab\u30fc\u306e\u90e8\u5206\u306e\u51e6\u7406\u306f\u306f\u308b\u304b\u306b\u7c21\u5358\u3067\u3059\u3002\u8a08\u7b97\u51e6\u7406\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306eID\u3092\u5fdc\u7b54\u306b\u542b\u3081\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* worker.js */\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // \u975e\u540c\u671f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5f85\u3064\u305f\u3081\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        switch (actionType) {\n            case 'print':\n                console.log(payload.msg);\n                self.postMessage({ id, response: { msg: '\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5370\u5237\u3055\u308c\u307e\u3057\u305f\u3002' } });\n                break;\n\n            case 'asyncCalc':\n                // \u975e\u540c\u671f\u51e6\u7406\u30b7\u30ca\u30ea\u30aa\u3092\u6a21\u5023\n                const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n                self.postMessage({ id, response: { msg: `\u8a08\u7b97\u3055\u308c\u305f\u7b54\u3048\u306f ${result} \u3067\u3059\u3002` } });\n                break;\n\n            default:\n                break;\n        }\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3061\u308d\u3093\u3001\u30ef\u30fc\u30ab\u30fc\u5074\u3067\u3055\u3089\u306a\u308b\u6539\u5584\u304c\u3067\u304d\u307e\u3059\u3002\u30ef\u30fc\u30ab\u30fc\u304c\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u8a08\u7b97\u3092\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"onmessage"})," \u95a2\u6570\u5185\u3067\u306e ",(0,s.jsx)(n.code,{children:"switch"})," \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u306f\u9577\u5927\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u6587\u5b57\u5217\u30d9\u30fc\u30b9\u306e\u30c1\u30a7\u30c3\u30af\u3082\u5341\u5206\u306b\u4fe1\u983c\u6027\u304c\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002Worker\u5185\u306e\u30ed\u30b8\u30c3\u30af\u3092\u6226\u7565\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ab\u30d7\u30bb\u30eb\u5316\u3059\u308b\u3053\u3068\u3067\u3001Worker\u5185\u306e\u30ed\u30b8\u30c3\u30af\u3092\u7c21\u7d20\u5316\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* worker.js */\n// \u3053\u308c\u306f\u5225\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u62bd\u51fa\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\nconst api = {\n    print(payload) {\n        console.log(payload.msg);\n        return { msg: '\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5370\u5237\u3055\u308c\u307e\u3057\u305f\u3002' };\n    },\n    async asyncCalc(payload) {\n        const result = await new Promise((resolve) => setTimeout(() => resolve(payload.params * 2), 1000));\n        return { msg: `\u8a08\u7b97\u3055\u308c\u305f\u7b54\u3048\u306f ${result} \u3067\u3059\u3002` };\n    },\n};\n\nclass WorkerThreadController {\n    constructor() {\n        this.worker = self;\n\n        // \u975e\u540c\u671f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5f85\u3064\u305f\u3081\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\n        this.actionHandlerMap = {};\n\n        this.worker.onmessage = this.onmessage.bind(this);\n    }\n\n    async onmessage(e) {\n        const { id, actionType, payload } = e.data;\n        const result = await api[actionType].call(this, payload);\n        self.postMessage({ id, response: result });\n    }\n}\n\nconst workerThreadController = new WorkerThreadController();\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3057\u305f\u304c\u3063\u3066\u3001\u30b7\u30f3\u30d7\u30eb\u3067\u4fbf\u5229\u306aPromise\u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30ab\u30fc\u304c\u69cb\u7bc9\u3055\u308c\u307e\u3057\u305f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u7d04\u3059\u308b\u3068\u3001\u3053\u306e\u8a18\u4e8b"}),"\n",(0,s.jsx)(n.p,{children:"\u3067\u306fWeb\u30ef\u30fc\u30ab\u30fc\u306e\u6982\u8981\u3001\u305d\u306e\u6a5f\u80fd\u3068\u5236\u9650\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u3001\u8aad\u8005\u306b\u305d\u306e\u4f7f\u7528\u4e8b\u4f8b\u306b\u3064\u3044\u3066\u5305\u62ec\u7684\u306a\u7406\u89e3\u3092\u63d0\u4f9b\u3057\u307e\u3057\u305f\u3002\u30cd\u30a4\u30c6\u30a3\u30d6\u306eWorker API\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3057\u3066Promise\u30d9\u30fc\u30b9\u306e\u547c\u3073\u51fa\u3057\u3092\u53ef\u80fd\u306b\u3059\u308b\u89e3\u6c7a\u7b56\u3092\u63d0\u6848\u3057\u3001\u6700\u5f8c\u306b\u3001\u30c1\u30fc\u30e0\u5185\u3067\u73fe\u5728\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u6a5f\u80fd\u8c4a\u5bcc\u3067\u6210\u719f\u3057\u305f\u89e3\u6c7a\u7b56\u3092\u63a8\u5968\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5c06\u6765\u306e\u30ef\u30fc\u30ab\u30fc\u306e\u62e1\u5f35\u306b\u8208\u5473\u3092\u6301\u3064\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u958b\u767a\u8005\u306b\u5f79\u7acb\u3064\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7214:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>t});var s=r(959);const o={},a=s.createContext(o);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);