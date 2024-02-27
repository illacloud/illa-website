"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[6397],{8758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=t(1527),s=t(7214);const d={slug:"react-markdown",title:"\u5728 Next.js \u535a\u5ba2\u4e2d\u4f7f\u7528 Remark \u521b\u5efa\u4ea4\u4e92\u5f0f\u76ee\u5f55",description:"\u76ee\u5f55\u5177\u6709\u8bb8\u591a\u597d\u5904\uff0c\u5bf9\u4e8e\u7f51\u7ad9\uff0c\u7279\u522b\u662f\u535a\u5ba2\uff0c\u662f\u4e00\u9879\u6709\u4ef7\u503c\u7684\u589e\u52a0\u3002\u4e00\u4e2a\u7ec4\u7ec7\u826f\u597d\u4e14\u6613\u4e8e\u5bfc\u822a\u7684\u76ee\u5f55\u663e\u8457\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u4e3a\u8bfb\u8005\u7b80\u5316\u67e5\u627e\u6240\u9700\u4fe1\u606f\u7684\u8fc7\u7a0b\u3002\u901a\u8fc7\u6dfb\u52a0\u76ee\u5f55\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u8bfb\u8005\u63d0\u4f9b\u7b80\u5316\u7684\u5bfc\u822a\uff0c\u8fd8\u53ef\u4ee5\u63d0\u9ad8\u5185\u5bb9\u7684\u6574\u4f53\u53ef\u8bbf\u95ee\u6027\u548c\u53ef\u7528\u6027\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp",tags:["postgresql","select"],date:"2024-02-26T10:00"},o=void 0,i={permalink:"/illa-website/zh/blog/react-markdown",source:"@site/i18n/zh/docusaurus-plugin-content-blog/raect-markdown/react-markdown.md",title:"\u5728 Next.js \u535a\u5ba2\u4e2d\u4f7f\u7528 Remark \u521b\u5efa\u4ea4\u4e92\u5f0f\u76ee\u5f55",description:"\u76ee\u5f55\u5177\u6709\u8bb8\u591a\u597d\u5904\uff0c\u5bf9\u4e8e\u7f51\u7ad9\uff0c\u7279\u522b\u662f\u535a\u5ba2\uff0c\u662f\u4e00\u9879\u6709\u4ef7\u503c\u7684\u589e\u52a0\u3002\u4e00\u4e2a\u7ec4\u7ec7\u826f\u597d\u4e14\u6613\u4e8e\u5bfc\u822a\u7684\u76ee\u5f55\u663e\u8457\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u4e3a\u8bfb\u8005\u7b80\u5316\u67e5\u627e\u6240\u9700\u4fe1\u606f\u7684\u8fc7\u7a0b\u3002\u901a\u8fc7\u6dfb\u52a0\u76ee\u5f55\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u8bfb\u8005\u63d0\u4f9b\u7b80\u5316\u7684\u5bfc\u822a\uff0c\u8fd8\u53ef\u4ee5\u63d0\u9ad8\u5185\u5bb9\u7684\u6574\u4f53\u53ef\u8bbf\u95ee\u6027\u548c\u53ef\u7528\u6027\u3002",date:"2024-02-26T10:00:00.000Z",formattedDate:"2024\u5e742\u670826\u65e5",tags:[{label:"postgresql",permalink:"/illa-website/zh/blog/tags/postgresql"},{label:"select",permalink:"/illa-website/zh/blog/tags/select"}],readingTime:16.265,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"react-markdown",title:"\u5728 Next.js \u535a\u5ba2\u4e2d\u4f7f\u7528 Remark \u521b\u5efa\u4ea4\u4e92\u5f0f\u76ee\u5f55",description:"\u76ee\u5f55\u5177\u6709\u8bb8\u591a\u597d\u5904\uff0c\u5bf9\u4e8e\u7f51\u7ad9\uff0c\u7279\u522b\u662f\u535a\u5ba2\uff0c\u662f\u4e00\u9879\u6709\u4ef7\u503c\u7684\u589e\u52a0\u3002\u4e00\u4e2a\u7ec4\u7ec7\u826f\u597d\u4e14\u6613\u4e8e\u5bfc\u822a\u7684\u76ee\u5f55\u663e\u8457\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u4e3a\u8bfb\u8005\u7b80\u5316\u67e5\u627e\u6240\u9700\u4fe1\u606f\u7684\u8fc7\u7a0b\u3002\u901a\u8fc7\u6dfb\u52a0\u76ee\u5f55\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u8bfb\u8005\u63d0\u4f9b\u7b80\u5316\u7684\u5bfc\u822a\uff0c\u8fd8\u53ef\u4ee5\u63d0\u9ad8\u5185\u5bb9\u7684\u6574\u4f53\u53ef\u8bbf\u95ee\u6027\u548c\u53ef\u7528\u6027\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp",tags:["postgresql","select"],date:"2024-02-26T10:00"},unlisted:!1,prevItem:{title:"React error boundary: \u66f4\u5f3a\u5927\u7684 React \u9519\u8bef\u5904\u7406\u65b9\u5f0f",permalink:"/illa-website/zh/blog/react-error-boundary"},nextItem:{title:"PostgreSQL SELECT \u8bed\u53e5",permalink:"/illa-website/zh/blog/postgresql-select"},relatedPosts:[{title:"PostgreSQL SELECT \u8bed\u53e5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 `PostgreSQL` \u4e2d\u7684 `SELECT` \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 `SELECT` \u8bed\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002\u5728 `PostgreSQL` \u4e2d\uff0c`SELECT` \u8bed\u53e5\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\uff0c\u5b83\u53ef\u80fd\u662f\u4f7f\u7528\u6700\u591a\u7684\u8bed\u53e5\u3002",permalink:"/illa-website/zh/blog/postgresql-select",formattedDate:"2024\u5e742\u670821\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:7.485,date:"2024-02-21T10:00:00.000Z"},{title:"PostgreSQL\u4e2dISNULL\u548cISNOTNULL\u7684\u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 PostgreSQL \u4e2d\u5982\u4f55\u4f7f\u7528 `IS NULL` \u8fd0\u7b97\u7b26\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u4e0d\u662f `NULL`\u3002PostgreSQL `IS NULL` \u662f\u4e00\u4e2a\u5e03\u5c14\u8fd0\u7b97\u7b26\uff0c\u5b83\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u4e0d\u662f`NULL`\u3002 `NULL`\u503c\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u503c\uff0c\u5b83\u8868\u793a\u4ec0\u4e48\u90fd\u6ca1\u6709\uff0c\u5b83\u5373\u4e0d\u662f\u7a7a\u5b57\u7b26\u4e32\u4e5f\u4e0d\u662ffalse\u3002",permalink:"/illa-website/zh/blog/postgresql-isnull",formattedDate:"2024\u5e742\u67084\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.245,date:"2024-02-04T11:00:00.000Z"},{title:"PostgreSQL\u8868\u683c\u6e05\u5355\u83b7\u53d6\u65b9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728PostgreSQL\u6570\u636e\u5e93\u4e2d\u5217\u51fa\u6240\u6709\u8868\u683c\u7684\u4e24\u79cd\u65b9\u6cd5\u3002PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002",permalink:"/illa-website/zh/blog/list-tables-in-postgresql",formattedDate:"2024\u5e741\u67084\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.47,date:"2024-01-04T10:00:00.000Z"}],authorPosts:[]},a={authorsImageUrls:[void 0]},l=[{value:"Remark\u53ca\u5176\u63d2\u4ef6",id:"remark\u53ca\u5176\u63d2\u4ef6",level:2},{value:"\u5165\u95e8",id:"\u5165\u95e8",level:2},{value:"\u7528\u4e8e\u4ece\u5185\u5bb9\u4e2d\u63d0\u53d6\u6807\u9898\u7684\u81ea\u5b9a\u4e49Remark\u63d2\u4ef6",id:"\u7528\u4e8e\u4ece\u5185\u5bb9\u4e2d\u63d0\u53d6\u6807\u9898\u7684\u81ea\u5b9a\u4e49remark\u63d2\u4ef6",level:2},{value:"\u6e32\u67d3\u76ee\u5f55",id:"\u6e32\u67d3\u76ee\u5f55",level:2},{value:"\u5355\u51fb\u76ee\u5f55\u94fe\u63a5\u65f6\u6dfb\u52a0\u5e73\u6ed1\u6eda\u52a8\u6548\u679c",id:"\u5355\u51fb\u76ee\u5f55\u94fe\u63a5\u65f6\u6dfb\u52a0\u5e73\u6ed1\u6eda\u52a8\u6548\u679c",level:2},{value:"\u5f3a\u8c03\u6d3b\u52a8\u94fe\u63a5",id:"\u5f3a\u8c03\u6d3b\u52a8\u94fe\u63a5",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u76ee\u5f55\u5177\u6709\u8bb8\u591a\u597d\u5904\uff0c\u5bf9\u4e8e\u7f51\u7ad9\uff0c\u7279\u522b\u662f\u535a\u5ba2\uff0c\u662f\u4e00\u9879\u6709\u4ef7\u503c\u7684\u589e\u52a0\u3002\u4e00\u4e2a\u7ec4\u7ec7\u826f\u597d\u4e14\u6613\u4e8e\u5bfc\u822a\u7684\u76ee\u5f55\u663e\u8457\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u4e3a\u8bfb\u8005\u7b80\u5316\u67e5\u627e\u6240\u9700\u4fe1\u606f\u7684\u8fc7\u7a0b\u3002\u901a\u8fc7\u6dfb\u52a0\u76ee\u5f55\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u8bfb\u8005\u63d0\u4f9b\u7b80\u5316\u7684\u5bfc\u822a\uff0c\u8fd8\u53ef\u4ee5\u63d0\u9ad8\u5185\u5bb9\u7684\u6574\u4f53\u53ef\u8bbf\u95ee\u6027\u548c\u53ef\u7528\u6027\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4f7f\u7528Remark\uff08\u4e00\u79cd\u5f3a\u5927\u7684Markdown\u5904\u7406\u5668\uff09\u4e3a",(0,r.jsx)(n.code,{children:"Next.js"}),"\u535a\u5ba2\u521b\u5efa\u4ea4\u4e92\u5f0f\u76ee\u5f55\u7684\u5fc5\u8981\u6b65\u9aa4\u3002\u867d\u7136\u4e00\u4e9bRemark\u63d2\u4ef6\uff08\u5982",(0,r.jsx)(n.code,{children:"Remark-toc"}),"\uff09\u63d0\u4f9b\u4e86\u8fd9\u79cd\u529f\u80fd\uff0c\u4f46\u751f\u6210\u7684\u76ee\u5f55\u4f4d\u4e8e\u5185\u5bb9\u672c\u8eab\u5185\u90e8\uff0c\u9650\u5236\u4e86\u5176\u6f5c\u5728\u7528\u9014\u3002\u4f8b\u5982\uff0c\u5728\u6b64\u535a\u5ba2\u4e0a\uff0c\u76ee\u5f55\u88ab\u5448\u73b0\u5728\u535a\u5ba2\u5185\u5bb9\u4e4b\u5916\uff0c\u4f7f\u5176\u5728\u5bfc\u822a\u65f6\u53ef\u89c1\u3002\u8fd9\u662f\u6211\u4eec\u5c06\u5728\u672c\u6559\u7a0b\u4e2d\u6784\u5efa\u7684\u76ee\u5f55\u7c7b\u578b\u3002\u6211\u4eec\u5c06\u4ece\u7b80\u8981\u8ba8\u8bbaRemark\u7684\u57fa\u672c\u77e5\u8bc6\u3001\u5176\u63d2\u4ef6\u4ee5\u53ca\u4e0eNext.js\u7684\u96c6\u6210\u5f00\u59cb\u3002\u7136\u540e\uff0c\u6211\u4eec\u5c06\u6df1\u5165\u7814\u7a76\u5b9e\u73b0\u81ea\u5b9a\u4e49\u76ee\u5f55\u7684\u5b9e\u9645\u6b65\u9aa4\uff0c\u6700\u540e\uff0c\u6211\u4eec\u5c06\u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027\uff0c\u4ee5\u4fbf\u5355\u51fb\u76ee\u5f55\u9879\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76f8\u5e94\u7684\u90e8\u5206\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"remark\u53ca\u5176\u63d2\u4ef6",children:"Remark\u53ca\u5176\u63d2\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["Remark\u662f\u4e00\u6b3e\u53ef\u6269\u5c55\u7684Markdown\u5904\u7406\u5668\uff0c\u7b80\u5316\u4e86\u5c06Markdown\u6587\u4ef6\u8f6c\u6362\u4e3aHTML\u6216\u5176\u4ed6\u683c\u5f0f\u7684\u8fc7\u7a0b\u3002Remark\u7684\u5173\u952e\u65b9\u9762\u662f\u5176\u57fa\u4e8e\u63d2\u4ef6\u7684\u67b6\u6784\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u6269\u5c55\u548c\u5b9a\u5236\u5176\u529f\u80fd\u3002\u8fd9\u4e9b\u63d2\u4ef6\u53ef\u4ee5\u5904\u7406\u8bf8\u5982\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a\u3001\u6dfb\u52a0\u76ee\u5f55\u6216\u89e3\u6790\u81ea\u5b9a\u4e49Markdown\u8bed\u6cd5\u7b49\u4efb\u52a1\u3002\u5c06Remark\u4e0eNext.js\u96c6\u6210\u975e\u5e38\u7b80\u5355\u2014\u2014\u901a\u5e38\u4e0e",(0,r.jsx)(n.code,{children:"getStaticProps"}),"\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5904\u7406Markdown\u6587\u4ef6\u3002\u5b83\u8fd8\u53ef\u4ee5\u5904\u7406MDX\u6587\u4ef6\uff0c\u4f7f\u5176\u6210\u4e3a\u4f7f\u7528\u65b0\u7684\u201capp\u201d\u76ee\u5f55\u7684Next.js\u7f51\u7ad9\u7684\u53ef\u884c\u9009\u62e9\u3002Remark\u5f3a\u5927\u7684\u5904\u7406\u80fd\u529b\u548c\u4e0eNext.js\u7684\u65e0\u7f1d\u96c6\u6210\u4f7f\u5176\u6210\u4e3a\u589e\u5f3aNext.js\u535a\u5ba2\u548c\u7f51\u7ad9\u5185\u5bb9\u4ee5\u53ca\u7528\u6237\u4f53\u9a8c\u7684\u7406\u60f3\u9009\u62e9\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5165\u95e8",children:"\u5165\u95e8"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c3d\u7ba1\u6211\u4eec\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u76ee\u5f55\uff0c\u4f46\u6211\u4eec\u4e0d\u5fc5\u4ece\u5934\u5f00\u59cb\u7f16\u5199\u6240\u6709\u5185\u5bb9\u3002\u4e3a\u4e86\u5c06Markdown/MDX\u5185\u5bb9\u4e0e\u524d\u7f6e\u5185\u5bb9\u5206\u79bb\uff0c\u6211\u4eec\u5c06\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Gray-matter"}),"\u5305\u3002\u5982\u679cMarkdown\u6587\u4ef6\u4e2d\u6ca1\u6709\u524d\u7f6e\u5185\u5bb9\uff0c\u8fd9\u662f\u53ef\u9009\u7684\u3002\u4e3a\u4e86\u5904\u7406Markdown\u672c\u8eab\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Remark\u5305\u3002\u6211\u4eec\u8fd8\u9700\u8981",(0,r.jsx)(n.code,{children:"unist-util-visit"}),"\u5305\u6765\u904d\u5386\u8282\u70b9\u6811\uff0c\u4ee5\u53ca",(0,r.jsx)(n.code,{children:"mdast-util-to-string"}),"\u5305\u6765\u83b7\u53d6\u8282\u70b9\u7684\u6587\u672c\u5185\u5bb9\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5b89\u88c5\u6240\u6709\u8fd9\u4e9b\u5305\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm i remark mdast-util-to-string gray-matter unist-util-visit\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7528\u4e8e\u4ece\u5185\u5bb9\u4e2d\u63d0\u53d6\u6807\u9898\u7684\u81ea\u5b9a\u4e49remark\u63d2\u4ef6",children:"\u7528\u4e8e\u4ece\u5185\u5bb9\u4e2d\u63d0\u53d6\u6807\u9898\u7684\u81ea\u5b9a\u4e49Remark\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5448\u73b0\u76ee\u5f55\u4e4b\u524d\uff0c\u6211\u4eec\u5fc5\u987b\u4eceMarkdown\u6587\u4ef6\u4e2d\u63d0\u53d6\u6240\u6709\u6807\u9898\uff0c\u5e76\u5c06\u5b83\u4eec\u7ec4\u7ec7\u6210\u4e00\u4e2a\u8282\u70b9\u6570\u7ec4\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u4ee5\u5206\u4e3a\u51e0\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u89e3\u6790\u6587\u4ef6\u5185\u5bb9\u4ee5\u5c06\u524d\u7f6e\u5185\u5bb9\u4e0e\u5185\u5bb9\u5206\u79bb\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3a\u6bcf\u4e2a\u6807\u9898\u5143\u7d20\u751f\u6210ID\u3002\u8fd9\u5bf9\u4e8e\u540e\u9762\u5b9e\u73b0\u6eda\u52a8\u5230\u90e8\u5206\u529f\u80fd\u662f\u5fc5\u8981\u7684\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u89e3\u6790\u5185\u5bb9\uff0c\u63d0\u53d6\u6807\u9898\u53ca\u5176\u5c5e\u6027\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7b2c2\u6b65\uff0c\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0IDs\u4f5c\u4e3a\u81ea\u5b9a\u4e49Markdown\u5c5e\u6027\uff0c\u4f8b\u5982",(0,r.jsx)(n.code,{children:"## Heading 1 {#heading-id}"}),"\uff0c\u7136\u540e\u4f7f\u7528\u7c7b\u4f3c",(0,r.jsx)(n.code,{children:"Remark-heading-id"}),"\u7684\u5e93\u5c06\u5b83\u4eec\u6e32\u67d3\u4e3aHTML\u3002\u7136\u800c\uff0c\u8fd9\u79cd\u65b9\u6cd5\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u548c\u7ef4\u62a4\u8fd9\u4e9b\u6807\u9898\uff0c\u6548\u7387\u8f83\u4f4e\u3002\u66f4\u9ad8\u6548\u7684\u65b9\u6cd5\u662f\u6839\u636e\u6807\u9898\u6587\u672c\u81ea\u52a8\u751f\u6210IDs\uff0c\u4f8b\u5982\uff0c\u5f53\u8f6c\u6362\u4e3aHTML\u65f6\uff0c\u6807\u9898",(0,r.jsx)(n.code,{children:"Heading 1"}),"\u5c06\u81ea\u52a8\u83b7\u5f97ID ",(0,r.jsx)(n.code,{children:"heading-1"}),"\u3002\n\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u81ea\u5b9a\u4e49Remark\u63d2\u4ef6\u5c06\u6b65\u9aa42\u548c3\u7ed3\u5408\u8d77\u6765\u3002\njs\u590d\u5236\u4ee3\u7801"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'export function headingTree() {\n  return (node, file) => {\n    file.data.headings = getHeadings(node);\n  };\n}\n\nfunction getHeadings(root) {\n  const nodes = {};\n  const output = [];\n  const indexMap = {};\n  visit(root, "heading", (node) => {\n    addID(node, nodes);\n    transformNode(node, output, indexMap);\n  });\n\n  return output;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u6709\u6211\u4eec\u7684\u81ea\u5b9a\u4e49Remark\u63d2\u4ef6",(0,r.jsx)(n.code,{children:"headingTree"}),"\uff0c\u5b83\u4ece\u6587\u6863\u4e2d\u63d0\u53d6\u6807\u9898\u5e76\u5c06\u5b83\u4eec\u4f5c\u4e3a",(0,r.jsx)(n.code,{children:"headings"}),"\u5c5e\u6027\u6dfb\u52a0\u5230\u5904\u7406\u540e\u7684\u5185\u5bb9\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63d2\u4ef6\u7684\u4e3b\u8981\u7ec4\u4ef6\u662f",(0,r.jsx)(n.code,{children:"getHeadings"}),"\u51fd\u6570\uff0c\u8fd9\u662f\u4e00\u4e2a\u8bbf\u95ee\u5668\u51fd\u6570\uff0c\u904d\u5386\u8282\u70b9\u6811\u5e76\u64cd\u7eb5\u5b83\u4eec\u3002\u4e3a\u4e86\u63d0\u9ad8\u53ef\u8bfb\u6027\uff0c\u8be5\u51fd\u6570\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"addID"}),"\u51fd\u6570\u904d\u5386\u6587\u6863\u4e2d\u7684\u6807\u9898\u8282\u70b9\uff0c\u66ff\u6362\u5b83\u4eec\u6240\u6709\u7684\u7279\u6b8a\u5b57\u7b26\uff0c\u5e76\u5c06\u5b83\u4eec\u4f5c\u4e3a\u5c0f\u5199\u5b57\u7b26\u4e32\u8f93\u51fa\uff0c\u5176\u4e2d\u7a7a\u683c\u7531\u7834\u6298\u53f7\u66ff\u6362\u3002\u8fd9\u4e9bID\u5c06\u5b58\u50a8\u5728\u6807\u9898\u7684",(0,r.jsx)(n.code,{children:"hProperties"}),"\u5c5e\u6027\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function addID(node, nodes) {\n  const id = node.children.map((c) => c.value).join("");\n  nodes[id] = (nodes[id] || 0) + 1;\n  node.data = node.data || {\n    hProperties: {\n      id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`\n        .replace(/[^a-zA-Z\\d\\s-]/g, "")\n        .split(" ")\n        .join("-")\n        .toLowerCase(),\n    },\n  };\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u6211\u4eec\u4f7f\u7528",(0,r.jsx)(n.code,{children:"nodes"}),"\u53d8\u91cf\u6765\u8ddf\u8e2a\u6bcf\u4e2a\u6807\u9898\u51fa\u73b0\u7684\u6b21\u6570\u3002\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u5728\u6587\u6863\u4e2d\u51fa\u73b0\u591a\u6b21\u7684\u6807\u9898\uff08\u4f8b\u5982\uff0c\u67d0\u4e9b\u90e8\u5206\u53ef\u80fd\u5177\u6709\u76f8\u540c\u6587\u672c\u7684\u5b50\u6807\u9898\uff09\u524d\u7f00\u5e26\u6709\u6570\u5b57\u3002",(0,r.jsx)(n.code,{children:"transformNode"}),"\u51fd\u6570\u63a5\u53d7\u4ece\u89e3\u6790\u540e\u7684Markdown\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u4e2d\u5f97\u5230\u7684\u8282\u70b9\uff0c\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a\u66f4\u9002\u7528\u4e8e\u6784\u5efa\u76ee\u5f55\u7684\u683c\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import { toString } from "mdast-util-to-string";\n\nfunction transformNode(node, output, indexMap) {\n  const transformedNode = {\n    value: toString(node),\n    depth: node.depth,\n    data: node.data,\n    children: [],\n  };\n\n  if (node.depth === 2) {\n    output.push(transformedNode);\n    indexMap[node.depth] = transformedNode;\n  } else {\n    const parent = indexMap[node.depth - 1];\n    if (parent) {\n      parent.children.push(transformedNode);\n      indexMap[node.depth] = transformedNode;\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u68c0\u67e5\u8282\u70b9\u662f\u5426\u5177\u6709\u6df1\u5ea6\u4e3a2\uff08Markdown\u4e2d\u7684##\u5143\u7d20\uff09\u3002\u5982\u679c\u662f\uff0c\u8f6c\u6362\u540e\u7684\u8282\u70b9\u5c06\u6dfb\u52a0\u5230\u8f93\u51fa\u6570\u7ec4\u4e2d\uff0c\u5e76\u4fdd\u5b58\u5728",(0,r.jsx)(n.code,{children:"indexMap"}),"\u4e2d\u76f8\u5e94\u6df1\u5ea6\u7684\u4f4d\u7f6e\u3002\u8fd9\u8868\u793a\u8f6c\u6362\u540e\u7684\u8282\u70b9\u4f4d\u4e8e\u76ee\u5f55\u7684\u9876\u7ea7\u3002\u5728\u6b64\u5904\uff0c\u6211\u4eec\u5c06\u6df1\u5ea62\u6307\u5b9a\u4e3a\u9876\u7ea7\u6df1\u5ea6\uff0c\u56e0\u4e3a\u8fd9\u5c06\u5728HTML\u8f93\u51fa\u4e2d\u4ea7\u751f",(0,r.jsx)(n.code,{children:"<h2>"}),"\u6807\u7b7e\u3002\u6211\u4eec\u4e0d\u4f7f\u7528\u6df1\u5ea61\uff0c\u56e0\u4e3a\u5728\u9875\u9762\u4e0a\u6709\u591a\u4e2a",(0,r.jsx)(n.code,{children:"<h1>"}),"\u5143\u7d20\u5bf9\u4e8e\u9875\u9762\u7684\u53ef\u8bbf\u95ee\u6027\u548cSEO\u6765\u8bf4\u5e76\u4e0d\u597d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u8282\u70b9\u7684\u6df1\u5ea6\u5927\u4e8e2\uff08\u4f8b\u5982\uff0c###\u6216####\u5143\u7d20\uff09\uff0c\u8be5\u51fd\u6570\u901a\u8fc7\u67e5\u627e",(0,r.jsx)(n.code,{children:"indexMap"}),"\u4e2d\u5f53\u524d\u8282\u70b9\u4e0a\u4e00\u7ea7\u6df1\u5ea6\u7684\u4f4d\u7f6e\uff08\u5373",(0,r.jsx)(n.code,{children:"node.depth - 1"}),"\uff09\u6765\u8bc6\u522b\u7236\u8282\u70b9\u3002\u5982\u679c\u627e\u5230\u7236\u8282\u70b9\uff0c\u5219\u5c06\u8f6c\u6362\u540e\u7684\u8282\u70b9\u6dfb\u52a0\u5230\u7236\u8282\u70b9\u7684",(0,r.jsx)(n.code,{children:"children"}),"\u6570\u7ec4\u4e2d\uff0c\u5e76\u76f8\u5e94\u5730\u66f4\u65b0",(0,r.jsx)(n.code,{children:"indexMap"}),"\u3002\u8fd9\u6709\u52a9\u4e8e\u6784\u5efa\u76ee\u5f55\u7684\u5d4c\u5957\u7ed3\u6784\uff0c\u5176\u4e2d\u6df1\u5c42\u6b21\u7684\u8282\u70b9\u6210\u4e3a\u8f83\u9ad8\u5c42\u6b21\u8282\u70b9\u7684\u5b50\u8282\u70b9\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4e3a\u4e86\u4f7f\u8be5\u51fd\u6570\u6b63\u5e38\u5de5\u4f5c\uff0c\u76ee\u5f55\u5e94\u5177\u6709\u6709\u6548\u7684\u7ed3\u6784\uff0c\u4f8b\u5982\uff0c\u4e0d\u5e94\u8be5\u5728\u8282\u70b9\u6df1\u5ea62\u76f4\u63a5\u8df3\u8f6c\u5230\u6df1\u5ea64\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u6211\u4eec\u6709\u4e86\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"getHeadings"}),"\u51fd\u6570\u6240\u9700\u7684\u4e00\u5207\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import matter from "gray-matter";\nimport { remark } from "remark";\n\nimport { headingTree } from "./headings";\n\nconst postsDirectory = path.join(process.cwd(), "posts");\n\nexport async function getHeadings(id) {\n  const fullPath = path.join(postsDirectory, `${id}.mdx`);\n  const fileContents = fs.readFileSync(fullPath, "utf8");\n\n  // Use gray-matter to parse the post metadata section\n  const matterResult = matter(fileContents);\n\n  // Use remark to convert Markdown into HTML string\n  const processedContent = await remark()\n    .use(headingTree)\n    .process(matterResult.content);\n\n  return processedContent.data.headings;\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u4e86\u8fd9\u4e2a\uff0c\u6211\u4eec\u5c31\u6709\u4e86\u6765\u81ea\u6587\u6863\u7684\u6807\u9898\u6570\u7ec4\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u6570\u636e\u5c5e\u6027\u3002\u6570\u7ec4\u7684\u7ed3\u6784\u5982\u4e0b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'[\n  {\n    value: "Heading 1",\n    depth: 2,\n    data: { hProperties: { id: "heading-1" } },\n    children: [\n      {\n        value: "Heading 2",\n        depth: 3,\n        data: { hProperties: { id: "heading-2" } },\n        children: [\n          {\n            value: "Heading 3",\n            depth: 4,\n            data: { hProperties: { id: "heading-3" } },\n            children: [],\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: "Heading 4",\n    depth: 2,\n    data: { hProperties: { id: "heading-4" } },\n    children: [],\n  },\n];\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6e32\u67d3\u76ee\u5f55",children:"\u6e32\u67d3\u76ee\u5f55"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u6211\u4eec\u6709\u4e86\u6807\u9898\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u6e32\u67d3\u76ee\u5f55\u3002\u9996\u5148\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"TableOfContents"}),"\u7ec4\u4ef6\uff0c\u5b83\u5c06\u662f\u76ee\u5f55\u6e32\u67d3\u903b\u8f91\u7684\u5305\u88c5\u5668\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'"use client";\n\nexport const TableOfContents = ({ nodes }) => {\n  if (!nodes?.length) {\n    return null;\n  }\n\n  return (\n    <div className={"toc"}>\n      <h3 className={"secondary-text"}>Table of contents</h3>\n      {renderNodes(nodes)}\n    </div>\n  );\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fNext.js\u7684\u201capp\u201d\u76ee\u5f55\uff0c\u60a8\u9700\u8981\u4f7f\u7528",(0,r.jsx)(n.code,{children:'"use client"'}),"\u6307\u4ee4\u5c06\u6b64\u7ec4\u4ef6\u6807\u8bb0\u4e3a\u5ba2\u6237\u7aef\u7ec4\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u5f55\u7684\u5b9e\u9645\u6e32\u67d3\u5c06\u7531",(0,r.jsx)(n.code,{children:"renderNodes"}),"\u51fd\u6570\u7ba1\u7406\u3002\u7531\u4e8e\u6e32\u67d3\u903b\u8f91\u662f\u9012\u5f52\u7684\uff0c\u6211\u4eec\u4f7f\u7528\u5355\u72ec\u7684\u51fd\u6570\u800c\u4e0d\u662f\u5728\u7ec4\u4ef6\u5185\u90e8\u5b9a\u4e49\u5b83\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function renderNodes(nodes) {\n  return (\n    <ul>\n      {nodes.map((node) => (\n        <li key={node.data.hProperties.id}>\n          <a href={`#${node.data.hProperties.id}`}>{node.value}</a>\n          {node.children?.length > 0 && renderNodes(node.children)}\n        </li>\n      ))}\n    </ul>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u5f55\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u94fe\u63a5\uff0c\u901a\u8fc7\u5176",(0,r.jsx)(n.code,{children:"href"}),"\u5c5e\u6027\u6307\u5411\u76f8\u5e94\u6807\u9898\u7684ID\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5355\u51fb\u76ee\u5f55\u94fe\u63a5\u65f6\u6dfb\u52a0\u5e73\u6ed1\u6eda\u52a8\u6548\u679c",children:"\u5355\u51fb\u76ee\u5f55\u94fe\u63a5\u65f6\u6dfb\u52a0\u5e73\u6ed1\u6eda\u52a8\u6548\u679c"}),"\n",(0,r.jsxs)(n.p,{children:["\u57fa\u672c\u7684\u76ee\u5f55\u5df2\u7ecf\u5b8c\u6210\u3002\u5728\u6211\u4eec\u6e32\u67d3\u6587\u7ae0\u7684\u9875\u9762\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528",(0,r.jsx)(n.code,{children:"await getHeadings(postId)"}),'\u6216\u8005\u5728\u4f7f\u7528 "pages" \u76ee\u5f55\u65f6\u5728',(0,r.jsx)(n.code,{children:"getStaticProps"}),"\u4e2d\u6267\u884c\u6b64\u64cd\u4f5c\uff09\u83b7\u53d6\u6807\u9898\uff0c\u5e76\u5c06\u6570\u636e\u4f20\u9012\u7ed9 TableOfContents \u7ec4\u4ef6\u3002\u5728\u6587\u7ae0\u9875\u9762\u4e0a\uff0c\u5f53\u6211\u4eec\u70b9\u51fb\u76ee\u5f55\u94fe\u63a5\u65f6\uff0c\u5e94\u8be5\u5bfc\u822a\u5230\u9875\u9762\u7684\u76f8\u5e94\u90e8\u5206\u3002\u7136\u800c\uff0c\u4e0e\u5176\u7a81\u7136\u8df3\u8f6c\u5230\u6807\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u542f\u7528\u5e73\u6ed1\u6eda\u52a8\u3002\u4f5c\u4e3a\u9644\u52a0\u7684\u589e\u5f3a\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u5176\u6df1\u5ea6\u9010\u6e10\u51cf\u5c0f\u5b50\u94fe\u63a5\u7684\u5b57\u4f53\u5927\u5c0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u5c06\u5f15\u5165\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"TOCLink"}),"\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u5e73\u6ed1\u6eda\u52a8\u548c\u4e2a\u522b\u94fe\u63a5\u6837\u5f0f\uff0c\u7136\u540e\u6211\u4eec\u5c06\u5728",(0,r.jsx)(n.code,{children:"renderNodes"}),"\u4e2d\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'function renderNodes(nodes) {\n  return (\n    <ul>\n      {nodes.map((node) => (\n        <li key={node.data.hProperties.id}>\n          <TOCLink node={node} />\n          {node.children?.length > 0 && renderNodes(node.children)}\n        </li>\n      ))}\n    </ul>\n  );\n}\n \nconst TOCLink = ({ node }) => {\n  const fontSizes = { 2: "base", 3: "sm", 4: "xs" };\n  const id = node.data.hProperties.id;\n  return (\n    <a\n      href={`#${id}`}\n      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1`}\n      onClick={(e) => {\n        e.preventDefault();\n        document\n          .getElementById(id)\n          .scrollIntoView({ behavior: "smooth", block: "start" });\n      }}\n    >\n      {node.value}\n    </a>\n  );\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5e73\u6ed1\u6eda\u52a8\u5230\u7f51\u9875\u4e0a\u7684\u7279\u5b9a\u5143\u7d20\uff0c\u6211\u4eec\u9996\u5148\u4f7f\u7528\u5176 ID \u5b9a\u4f4d\u5143\u7d20\uff0c\u7136\u540e\u4f7f\u7528\u5e26\u6709",(0,r.jsx)(n.code,{children:'behavior: "smooth"'}),"\u9009\u9879\u7684",(0,r.jsx)(n.code,{children:"scrollIntoView"}),"\u65b9\u6cd5\u3002\u6709\u5173\u6b64\u65b9\u6cd5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.code,{children:"MDN"}),"\u7f51\u7ad9\u3002\u8be5\u65b9\u6cd5\u5728",(0,r.jsx)(n.code,{children:"\u6d4f\u89c8\u5668\u652f\u6301"}),"\u65b9\u9762\u5177\u6709\u5e7f\u6cdb\u7684\u652f\u6301\uff0c\u4f46",(0,r.jsx)(n.code,{children:"smooth"}),"\u9009\u9879\u53ef\u80fd\u4e0e\u4e00\u4e9b\u8f83\u65e7\u7684\u6d4f\u89c8\u5668\u4e0d\u517c\u5bb9\u3002\u901a\u8fc7\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u73b0\u5728\u70b9\u51fb\u76ee\u5f55\u94fe\u63a5\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6f02\u4eae\u7684\u6eda\u52a8\u52a8\u753b\uff0c\u800c\u4e0d\u662f\u4e4b\u524d\u7684\u7a81\u7136\u8fc7\u6e21\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u5728\u6eda\u52a8\u5230\u6807\u9898\u5143\u7d20\u65f6\u6dfb\u52a0\u504f\u79fb\u91cf\uff08\u4f8b\u5982\uff0c\u5f53\u9875\u9762\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u5bfc\u822a\u680f\u65f6\uff09\uff0c\u60a8\u53ef\u4ee5\u5c06",(0,r.jsx)(n.code,{children:"scroll-margin-top"})," CSS \u5c5e\u6027\u5e94\u7528\u4e8e\u6807\u9898\u5143\u7d20\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"TailwindCSS"}),"\u548c\u5176",(0,r.jsx)(n.code,{children:"text"}),"\u5b9e\u7528\u7a0b\u5e8f\u7c7b\uff0c\u6839\u636e\u6df1\u5ea6\u9010\u6e10\u51cf\u5c0f\u76ee\u5f55\u94fe\u63a5\u7684\u5b57\u4f53\u5927\u5c0f\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f3a\u8c03\u6d3b\u52a8\u94fe\u63a5",children:"\u5f3a\u8c03\u6d3b\u52a8\u94fe\u63a5"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u589e\u5f3a\u76ee\u5f55\u5bfc\u822a\uff0c\u6700\u540e\u7684\u4e00\u70b9\u662f\u5728\u9875\u9762\u4e0a\u67e5\u770b\u5176\u76f8\u5e94\u6807\u9898\u65f6\u7a81\u51fa\u663e\u793a\u76ee\u5f55\u94fe\u63a5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u68c0\u6d4b\u9875\u9762\u4e0a\u5143\u7d20\u7684\u53ef\u89c1\u6027\uff0c\u6211\u4eec\u5c06\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Intersection Observer API"}),"\uff0c\u8be5API\u5177\u6709\u826f\u597d\u7684\u6d4f\u89c8\u5668\u652f\u6301\uff0c\u4f46\u6709\u4e00\u4e9b\u5c0f\u95ee\u9898\u3002\u6b64\u5916\uff0c\u6211\u4eec\u5c06\u6b64\u529f\u80fd\u8f6c\u79fb\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u94a9\u5b50\u4e2d\uff0c\u8be5\u94a9\u5b50\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u793a\u94fe\u63a5\u662f\u5426\u7a81\u51fa\u663e\u793a\uff0c\u5e76\u63d0\u4f9b\u624b\u52a8\u8bbe\u7f6e\u9ad8\u4eae\u72b6\u6001\u7684\u56de\u8c03\u3002\u8fd9\u4e2a\u94a9\u5b50\u5c06\u5728",(0,r.jsx)(n.code,{children:"TOCLink"}),"\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import { useEffect, useRef, useState } from "react";\n \nfunction useHighlighted(id) {\n  const observer = useRef();\n  const [activeId, setActiveId] = useState("");\n \n  useEffect(() => {\n    const handleObserver = (entries) => {\n      entries.forEach((entry) => {\n        if (entry?.isIntersecting) {\n          setActiveId(entry.target.id);\n        }\n      });\n    };\n \n    observer.current = new IntersectionObserver(handleObserver, {\n      rootMargin: "0% 0% -35% 0px",\n    });\n \n    const elements = document.querySelectorAll("h2, h3, h4");\n    elements.forEach((elem) => observer.current.observe(elem));\n    return () => observer.current?.disconnect();\n  }, []);\n \n  return [activeId === id, setActiveId];\n}\n \nconst TOCLink = ({ node }) => {\n  const fontSizes = { 2: "base", 3: "sm", 4: "xs" };\n  const id = node.data.hProperties.id;\n  const [highlighted, setHighlighted] = useHighlighted(id);\n  return (\n    <a\n      href={`#${id}`}\n      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1 ${\n        highlighted && "accent-color"\n      }`}\n      onClick={(e) => {\n        e.preventDefault();\n        setHighlighted(id);\n        document\n          .getElementById(id)\n          .scrollIntoView({ behavior: "smooth", block: "start" });\n      }}\n    >\n      {node.value}\n    </a>\n  );\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u94a9\u5b50\u4e2d",(0,r.jsx)(n.code,{children:"handleObserver"}),"\u51fd\u6570\u4f5c\u4e3a",(0,r.jsx)(n.code,{children:"Intersection Observer"}),"\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5904\u7406\u88ab\u89c2\u5bdf\u5143\u7d20\u7684\u53ef\u89c1\u6027\u53d8\u5316\uff0c\u63a5\u53d7\u4e00\u4e2a\u6761\u76ee\u6570\u7ec4\u4f5c\u4e3a\u5176\u53c2\u6570\u3002\n",(0,r.jsx)(n.code,{children:"handleObserver"}),"\u51fd\u6570\u904d\u5386\u6761\u76ee\uff0c\u5176\u4e2d\u5305\u62ec h2\u3001h3 \u548c h4 \u5143\u7d20\uff0c\u68c0\u67e5",(0,r.jsx)(n.code,{children:"isIntersecting"}),"\u5c5e\u6027\u662f\u5426\u4e3a",(0,r.jsx)(n.code,{children:"true"})," \u2014 \u8868\u793a\u5143\u7d20\u5728\u89c6\u53e3\u4e2d\u53ef\u89c1 \u2014 \u5982\u679c\u662f\uff0c\u4f7f\u7528",(0,r.jsx)(n.code,{children:"setActiveId"}),"\u66f4\u65b0\u76ee\u5f55\u4e2d\u7684\u6d3b\u52a8\u90e8\u5206\u3002\u5f53\u94fe\u63a5\u88ab\u70b9\u51fb\u65f6\uff0c\u6211\u4eec\u901a\u8fc7",(0,r.jsx)(n.code,{children:"setHighlighted"}),"\u56de\u8c03\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7a81\u51fa\u663e\u793a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6211\u4eec\u5c06\u4e00\u4e2a\u65b0\u7684",(0,r.jsx)(n.code,{children:"Intersection Observer"}),"\u5b9e\u4f8b\u5b58\u50a8\u5728\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"ref"}),"\u4e2d\uff0c\u4ee5\u5728\u7ec4\u4ef6\u6e32\u67d3\u671f\u95f4\u4fdd\u6301\u5176\u8eab\u4efd\u4e0d\u53d8\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u6eda\u52a8\u9875\u9762\uff0c\u60a8\u53ef\u4ee5\u5728\u6b64\u9875\u9762\u4e0a\u770b\u5230\u8fd9\u4e2a\u76ee\u5f55\u7684\u5b9e\u9645\u6548\u679c\uff0c\u89c2\u5bdf\u968f\u7740\u9875\u9762\u5230\u8fbe\u76f8\u5e94\u90e8\u5206\uff0c\u76ee\u5f55\u4e2d\u7684\u6d3b\u52a8\u90e8\u5206\u5982\u4f55\u66f4\u65b0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,r.jsx)(n.p,{children:"\u603b\u7684\u6765\u8bf4\uff0c\u4f7f\u7528Remark\u548c\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4e3a Next.js \u535a\u5ba2\u521b\u5efa\u76ee\u5f55\u53ef\u4ee5\u4e3a\u60a8\u7684\u7f51\u7ad9\u7684\u7528\u6237\u4f53\u9a8c\u548c\u53ef\u8bbf\u95ee\u6027\u5e26\u6765\u8bb8\u591a\u597d\u5904\u3002\u901a\u8fc7 Remark\uff0c\u8fd9\u4e2a\u5f3a\u5927\u7684 Markdown \u5904\u7406\u5668\uff0c\u4ee5\u53ca\u5b83\u4e30\u5bcc\u7684\u63d2\u4ef6\u8303\u56f4\uff0c\u53ef\u4ee5\u8f7b\u677e\u4ece Markdown \u6587\u4ef6\u4e2d\u63d0\u53d6\u6807\u9898\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u4ea4\u4e92\u5f0f\u548c\u6613\u4e8e\u5bfc\u822a\u7684\u76ee\u5f55\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u5f15\u5165\u76ee\u5f55\uff0c\u60a8\u53ef\u4ee5\u589e\u5f3a Next.js \u535a\u5ba2\u4e0a\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u4f7f\u8bfb\u8005\u66f4\u5bb9\u6613\u627e\u5230\u4ed6\u4eec\u9700\u8981\u7684\u4fe1\u606f\u3002\u6b64\u5916\uff0c\u4f7f\u7528 Remark \u521b\u5efa\u81ea\u5b9a\u4e49\u76ee\u5f55\u63d2\u4ef6\u4f7f\u60a8\u80fd\u591f\u5c06\u76ee\u5f55\u96c6\u6210\u5230\u5185\u5bb9\u4e4b\u5916\uff0c\u4ece\u800c\u63d0\u9ad8\u5185\u5bb9\u7684\u53ef\u7528\u6027\u548c\u53ef\u8bbf\u95ee\u6027\u3002\u901a\u8fc7\u4f7f\u7528\u8bf8\u5982",(0,r.jsx)(n.code,{children:"mdast-util-to-string"}),"\u548c",(0,r.jsx)(n.code,{children:"unist-util-visit"}),"\u7b49\u63d2\u4ef6\uff0c\u53ef\u4ee5\u4ece\u5185\u5bb9\u4e2d\u63d0\u53d6\u6807\u9898\uff0c\u751f\u6210\u552f\u4e00\u7684 ID\uff0c\u5e76\u5c06\u5b83\u4eec\u89e3\u6790\u4e3a\u9002\u7528\u4e8e\u6784\u5efa\u76ee\u5f55\u7684\u683c\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u901a\u8fc7\u521b\u5efa\u5177\u6709\u5d4c\u5957\u7ed3\u6784\u3001\u5e73\u6ed1\u6eda\u52a8\u548c\u6d3b\u52a8\u94fe\u63a5\u7a81\u51fa\u663e\u793a\u7684\u81ea\u5b9a\u4e49\u76ee\u5f55\uff0c\u5f15\u5bfc\u60a8\u5b8c\u6210\u4e86\u8fd9\u4e2a\u8fc7\u7a0b\u3002\u56e0\u6b64\uff0c\u8bfb\u8005\u73b0\u5728\u53ef\u4ee5\u5feb\u901f\u627e\u5230\u5e76\u5bfc\u822a\u5230\u4ed6\u4eec\u611f\u5174\u8da3\u7684\u5185\u5bb9\uff0c\u589e\u5f3a\u4e86\u535a\u5ba2\u7684\u6574\u4f53\u53ef\u7528\u6027\u548c\u4ef7\u503c\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7214:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(959);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);