"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[4690],{7055:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var n=t(1527),i=t(7214);const a={slug:"backend-create-web-ui",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u30d3\u30b8\u30cd\u30b9\u30c4\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u6700\u9ad8\u306e\u88fd\u54c1",description:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u3001\u79c1\u306f\u540c\u50da\u306e\u591a\u69d8\u306a\u30cb\u30fc\u30ba\u306b\u5fdc\u3048\u308b\u305f\u3081\u306b\u591a\u304f\u306e\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3084\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3057\u305f\u3002\u591a\u69d8\u306a\u30d3\u30b8\u30cd\u30b9\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u305f\u308a\u3001CI/CD\u30bf\u30b9\u30af\u3092\u53ef\u8996\u5316\u3057\u305f\u308a\u3001\u30af\u30ea\u30b9\u30de\u30b9\u30a4\u30d9\u30f3\u30c8\u7528\u306e\u7279\u5225\u306a\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u4f5c\u6210\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304b\u3089\u3001\u3053\u308c\u3089\u3059\u3079\u3066\u3092\u308f\u305a\u304b14\u65e5\u3067\u9054\u6210\u3057\u307e\u3057\u305f\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/cover.png",tags:["\u30a4\u30f3\u30bf\u30fc\u30ca\u30eb\u30c4\u30fc\u30eb","\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9","\u7ba1\u7406\u30d1\u30cd\u30eb"],date:"2024-01-03T10:00",is_featured:!0},c=void 0,s={permalink:"/illa-website/ja/blog/backend-create-web-ui",source:"@site/i18n/ja/docusaurus-plugin-content-blog/backend-create-web-ui/backend-create-web-ui.md",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u30d3\u30b8\u30cd\u30b9\u30c4\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u6700\u9ad8\u306e\u88fd\u54c1",description:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u3001\u79c1\u306f\u540c\u50da\u306e\u591a\u69d8\u306a\u30cb\u30fc\u30ba\u306b\u5fdc\u3048\u308b\u305f\u3081\u306b\u591a\u304f\u306e\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3084\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3057\u305f\u3002\u591a\u69d8\u306a\u30d3\u30b8\u30cd\u30b9\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u305f\u308a\u3001CI/CD\u30bf\u30b9\u30af\u3092\u53ef\u8996\u5316\u3057\u305f\u308a\u3001\u30af\u30ea\u30b9\u30de\u30b9\u30a4\u30d9\u30f3\u30c8\u7528\u306e\u7279\u5225\u306a\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u4f5c\u6210\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304b\u3089\u3001\u3053\u308c\u3089\u3059\u3079\u3066\u3092\u308f\u305a\u304b14\u65e5\u3067\u9054\u6210\u3057\u307e\u3057\u305f\u3002",date:"2024-01-03T10:00:00.000Z",formattedDate:"2024\u5e741\u67083\u65e5",tags:[{label:"\u30a4\u30f3\u30bf\u30fc\u30ca\u30eb\u30c4\u30fc\u30eb",permalink:"/illa-website/ja/blog/tags/\u30a4\u30f3\u30bf\u30fc\u30ca\u30eb\u30c4\u30fc\u30eb"},{label:"\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",permalink:"/illa-website/ja/blog/tags/\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"},{label:"\u7ba1\u7406\u30d1\u30cd\u30eb",permalink:"/illa-website/ja/blog/tags/\u7ba1\u7406\u30d1\u30cd\u30eb"}],readingTime:5.17,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"backend-create-web-ui",title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u30d3\u30b8\u30cd\u30b9\u30c4\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u6700\u9ad8\u306e\u88fd\u54c1",description:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u3001\u79c1\u306f\u540c\u50da\u306e\u591a\u69d8\u306a\u30cb\u30fc\u30ba\u306b\u5fdc\u3048\u308b\u305f\u3081\u306b\u591a\u304f\u306e\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3084\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3057\u305f\u3002\u591a\u69d8\u306a\u30d3\u30b8\u30cd\u30b9\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u305f\u308a\u3001CI/CD\u30bf\u30b9\u30af\u3092\u53ef\u8996\u5316\u3057\u305f\u308a\u3001\u30af\u30ea\u30b9\u30de\u30b9\u30a4\u30d9\u30f3\u30c8\u7528\u306e\u7279\u5225\u306a\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u4f5c\u6210\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304b\u3089\u3001\u3053\u308c\u3089\u3059\u3079\u3066\u3092\u308f\u305a\u304b14\u65e5\u3067\u9054\u6210\u3057\u307e\u3057\u305f\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/cover.png",tags:["\u30a4\u30f3\u30bf\u30fc\u30ca\u30eb\u30c4\u30fc\u30eb","\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9","\u7ba1\u7406\u30d1\u30cd\u30eb"],date:"2024-01-03T10:00",is_featured:!0},unlisted:!1,prevItem:{title:"2024\u5e74\u306b\u30ab\u30b9\u30bf\u30e0\u306e\u4f4e\u30b3\u30fc\u30c9CRM\u3092\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5",permalink:"/illa-website/ja/blog/low-code-crm"},nextItem:{title:"\u30ed\u30fc\u30b3\u30fc\u30c9 vs \u30c8\u30e9\u30c7\u30a3\u30b7\u30e7\u30ca\u30eb\u958b\u767a\uff1a\u9078\u629e\u306b\u304a\u3051\u308b\u6700\u9069\u306a\u52b9\u7387\u6027",permalink:"/illa-website/ja/blog/lowcode-vs-traditional"},relatedPosts:[{title:"\u4e0a\u53f8\u306e\u305f\u3081\u306b\u7d20\u65e9\u304f\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30ba\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210",description:"\u3059\u3079\u3066\u306e\u4f01\u696d\u306f\u72ec\u81ea\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u30d3\u30b8\u30cd\u30b9\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u30d3\u30b8\u30cd\u30b9\u304c\u66f4\u65b0\u3068\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u7d9a\u3051\u308b\u306b\u3064\u308c\u3066\u3001\u30d3\u30b8\u30cd\u30b9\u306e\u8907\u96d1\u3055\u306f\u6642\u9593\u3068\u3068\u3082\u306b\u5897\u52a0\u3057\u307e\u3059\u3002",permalink:"/illa-website/ja/blog/build-dashboard",formattedDate:"2024\u5e741\u67081\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.855,date:"2024-01-01T10:00:00.000Z"}],authorPosts:[]},o={authorsImageUrls:[void 0]},r=[{value:"ILLA Cloud\u3068\u306f",id:"illa-cloud\u3068\u306f",level:2},{value:"\u306a\u305cILLA Cloud\u3092\u304a\u52e7\u3081\u3059\u308b\u306e\u304b",id:"\u306a\u305cilla-cloud\u3092\u304a\u52e7\u3081\u3059\u308b\u306e\u304b",level:2},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}];function d(e){const l={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.p,{children:"\u3053\u3093\u306b\u3061\u306f\u3001\u79c1\u306f\u30aa\u30fc\u30a6\u30a7\u30f3\u3067\u3059\u3002\u79c1\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u3001Web UI\u3092\u4f5c\u6210\u3059\u308b\u306e\u304c\u5f97\u610f\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u540c\u50da\u306e\u3055\u307e\u3056\u307e\u306a\u30cb\u30fc\u30ba\u306b\u5fdc\u3048\u308b\u305f\u3081\u306b\u3055\u307e\u3056\u307e\u306a\u30c7\u30fc\u30bf\u30d1\u30cd\u30eb\u3068\u7ba1\u7406\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u958b\u767a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u3053\u308c\u306b\u306f\u8907\u96d1\u306a\u30d3\u30b8\u30cd\u30b9\u30c7\u30fc\u30bf\u306e\u8868\u793a\u304b\u3089CI/CD\u30bf\u30b9\u30af\u306e\u53ef\u8996\u5316\u3001\u30af\u30ea\u30b9\u30de\u30b9\u30a4\u30d9\u30f3\u30c8\u7528\u306e\u7279\u5225\u306a\u7ba1\u7406\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u4f5c\u6210\u307e\u3067\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30bf\u30b9\u30af\u3092\u5358\u72ec\u3067\u5b8c\u4e86\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u305a\u3001\u7d99\u7d9a\u7684\u306a\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306b\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u5354\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u79c1\u306e\u4f5c\u696d\u52b9\u7387\u306b\u5927\u304d\u306a\u5f71\u97ff\u3092\u4e0e\u3048\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u79c1\u306f\u5185\u90e8\u30c1\u30fc\u30e0\u7528\u306e\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u3001\u500b\u4eba\u7528\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30c4\u30fc\u30eb\u3001\u304a\u3088\u3073\u6642\u9593\u306b\u8feb\u3063\u305f\u30c4\u30fc\u30eb\u3092\u72ec\u81ea\u306b\u88fd\u4f5c\u3059\u308b\u3053\u3068\u3092\u671b\u3093\u3067\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u304c\u898b\u305f\u76ee\u304c\u826f\u304f\u3001\u4f7f\u3044\u3084\u3059\u304f\u3001\u8fc5\u901f\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3053\u3068\u304c\u79c1\u306e\u6700\u5927\u306e\u8981\u671b\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u79c1\u306f\u4eca\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305f\u30c4\u30fc\u30eb\u3092\u8fc5\u901f\u306b\u69cb\u7bc9\u3067\u304d\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5b8c\u5168\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.h2,{id:"illa-cloud\u3068\u306f",children:"ILLA Cloud\u3068\u306f"}),"\n",(0,n.jsx)(l.p,{children:"ILLA\u306f\u3001\u958b\u767a\u8005\u5411\u3051\u306b\u8a2d\u8a08\u3055\u308c\u305f\u30ed\u30fc\u30b3\u30fc\u30c9\u30c4\u30fc\u30eb\u3067\u3001\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4ecb\u3057\u3066Admin\u30d1\u30cd\u30eb\u3068\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u8fc5\u901f\u306b\u958b\u767a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002ILLA Cloud\u306f\u3001\u4e00\u822c\u7684\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3084\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3001REST API\u3001GraphQL\u3092\u542b\u3080\u5e45\u5e83\u3044\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(l.p,{children:["\u516c\u5f0f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\uff1a",(0,n.jsx)(l.a,{href:"https://illacloud.com",children:"https://illacloud.com"})]}),"\n",(0,n.jsx)(l.p,{children:"ILLA\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u3092\u8fc5\u901f\u306b\u69cb\u7bc9\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Web\u304a\u3088\u3073\u30a2\u30d7\u30ea\u306e\u7ba1\u7406\u30d1\u30cd\u30eb"}),"\n",(0,n.jsx)(l.li,{children:"\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"\n",(0,n.jsx)(l.li,{children:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305fB2B\u30c4\u30fc\u30eb"}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"\u3053\u308c\u3089\u306f\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3067\u7c21\u5358\u306b\u4f5c\u6210\u3067\u304d\u3001\u8ad6\u7406\u7684\u306a\u63a5\u7d9a\u306b\u306f\u308f\u305a\u304b\u306aJavaScript\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/dashboard.png",alt:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})}),"\n",(0,n.jsx)(l.p,{children:"ILLA\u306b\u306f\u3001AI\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3001\u3055\u307e\u3056\u307e\u306aSaaS\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u7d71\u5408\u3067\u304d\u308b\u5305\u62ec\u7684\u306a\u30b3\u30cd\u30af\u30bf\u30c4\u30fc\u30eb\u306e\u30bb\u30c3\u30c8\u3082\u5099\u308f\u3063\u3066\u304a\u308a\u3001\u304a\u5ba2\u69d8\u306f\u4f5c\u6210\u3057\u305f\u88fd\u54c1\u3092\u3059\u3070\u3084\u304f\u4f7f\u7528\u3057\u3066\u3044\u308b\u88fd\u54c1\u3068\u30ea\u30f3\u30af\u3067\u304d\u307e\u3059\u3002\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30bf\u30b9\u30af\u3001Web\u30d5\u30c3\u30af\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u53d7\u3051\u6e21\u3057\u3082\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/connector.png",alt:"\u30b3\u30cd\u30af\u30bf"})}),"\n",(0,n.jsx)(l.h2,{id:"\u306a\u305cilla-cloud\u3092\u304a\u52e7\u3081\u3059\u308b\u306e\u304b",children:"\u306a\u305cILLA Cloud\u3092\u304a\u52e7\u3081\u3059\u308b\u306e\u304b"}),"\n",(0,n.jsx)(l.p,{children:"\u79c1\u305f\u3061\u306e\u30c1\u30fc\u30e0\u306b\u3088\u308b\u7d99\u7d9a\u7684\u306a\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u7d50\u679c\u3001ILLA\u306f\u73fe\u5728\u3001\u591a\u304f\u306e\u4e3b\u8981\u306a\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068API\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u958b\u767a\u8005\u306f\u3001ILLA\u3092\u4f7f\u7528\u3057\u3066\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u306e\u65b9\u6cd5\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305f\u30c4\u30fc\u30eb\u3092\u8fc5\u901f\u306b\u69cb\u7bc9\u3067\u304d\u3001\u65e5\u5e38\u696d\u52d9\u3067\u306e\u591a\u304f\u306e\u5185\u90e8\u30c4\u30fc\u30eb\u306e\u69cb\u7bc9\u901f\u5ea6\u304c\u6839\u672c\u7684\u306b\u5411\u4e0a\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/resource.png",alt:"\u30ea\u30bd\u30fc\u30b9"})}),"\n",(0,n.jsx)(l.p,{children:"\u3082\u306f\u3084\u7279\u5b9a\u306e\u30bf\u30a4\u30d7\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u7528\u306b\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002ILLA\u306f\u76f4\u63a5\u306eSQL\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30af\u30a8\u30ea\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u958b\u767a\u8005\u306b\u3068\u3063\u3066\u975e\u5e38\u306b\u30e6\u30fc\u30b6\u30fc\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u3067\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/sql.png",alt:"SQL"})}),"\n",(0,n.jsx)(l.p,{children:"ILLA\u306b\u306f\u3001Slack\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7c21\u5358\u306b\u9001\u4fe1\u3057\u305f\u308a\u3001\u96fb\u5b50\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u305f\u308a\u3001\u4ed6\u306e\u30b7\u30b9\u30c6\u30e0\u3068\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u53d6\u3063\u305f\u308a\u3059\u308b\u305f\u3081\u306e\u7d44\u307f\u8fbc\u307f\u306e\u30b3\u30cd\u30af\u30bf\u6a5f\u80fd\u3082\u5099\u308f\u3063\u3066\u304a\u308a\u3001\u3053\u308c\u3089\u306fWeb\u30d5\u30c3\u30af\u3068\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30bf\u30b9\u30af\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u3053\u308c\u306f\u8077\u5834\u3067\u306e\u591a\u304f\u306e\u81ea\u52d5\u5316\u30bf\u30b9\u30af\u306e\u958b\u767a\u52b9\u7387\u3092\u6839\u672c\u7684\u306b\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/connector.png",alt:"\u30b3\u30cd\u30af\u30bf"})}),"\n",(0,n.jsx)(l.p,{children:"\u3055\u3089\u306b\u3001ILLA\u306f\u73fe\u5728\u3001Huggingface AI\u30e2\u30c7\u30eb\u3092\u7c21\u5358\u306b\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3001AI\u99c6\u52d5\u306e\u30c4\u30fc\u30eb\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u7279\u306b\u8208\u5473\u6df1\u3044\u3067\u3059\u3002ILLA\u306b\u306fAI\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u6a5f\u80fd\u3082\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30c6\u30ad\u30b9\u30c8\u5206\u6790\u3001\u97f3\u58f0\u5206\u6790\u3001\u753b\u50cf\u5206\u6790\u306a\u3069\u306b\u4fbf\u5229\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:"ILLA\u3067\u69cb\u7bc9\u3055\u308c\u305f\u30c4\u30fc\u30eb\u306f\u3001\u3088\u308a\u30b9\u30de\u30fc\u30c8\u306b\u306a\u308b\u3088\u3046\u306b\u3059\u3070\u3084\u304fLLM\uff08Large Language Models\uff09\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/backend-create-web-ui/agent.png",alt:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})}),"\n",(0,n.jsx)(l.h2,{id:"\u6700\u5f8c\u306b",children:"\u6700\u5f8c\u306b"}),"\n",(0,n.jsx)(l.p,{children:"\u79c1\u306fILLA Cloud\u304c\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u3092\u8fc5\u901f\u306b\u69cb\u7bc9\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059\u3002ILLA Cloud\u306f\u73fe\u5728\u30d9\u30fc\u30bf\u7248\u3067\u3042\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u7a4d\u6975\u7684\u306b\u53ce\u96c6\u3057\u3066\u3044\u307e\u3059\u3002\u3054\u8cea\u554f\u3084\u63d0\u6848\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u79c1\u306f\u3059\u3079\u3066\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u7279\u5b9a\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30bf\u30b9\u30af\u306b\u82e6\u52b4\u3059\u308b\u5fc5\u8981\u306a\u304f\u3001\u52b9\u7387\u7684\u306b\u4f5c\u696d\u3067\u304d\u308b\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059\u3002"})]})}function u(e={}){const{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7214:(e,l,t)=>{t.d(l,{Z:()=>s,a:()=>c});var n=t(959);const i={},a=n.createContext(i);function c(e){const l=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(a.Provider,{value:l},e.children)}}}]);