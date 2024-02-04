"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[9733],{6924:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>L});var n=l(1527),r=l(7214);const i={slug:"postgresql-isnull",title:"PostgreSQL\u306eISNULL\u304a\u3088\u3073ISNOTNULL\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001PostgreSQL\u306e `IS NULL` \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u5024\u304c `NULL` \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002PostgreSQL\u306e `IS NULL` \u306f\u3001\u5024\u304c `NULL` \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d6\u30fc\u30eb\u6f14\u7b97\u5b50\u3067\u3059\u3002`NULL` \u5024\u306f\u4f55\u3082\u793a\u3055\u306a\u3044\u7279\u6b8a\u306a\u5024\u3067\u3042\u308a\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3067\u3082\u306a\u304f\u3001false\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp",tags:["postgresql","isnull","isnotnull"],date:"2024-02-04T11:00",is_featured:!0},c=void 0,t={permalink:"/illa-website/ja/blog/postgresql-isnull",source:"@site/i18n/ja/docusaurus-plugin-content-blog/postgresql-isnull/postgresql-isnull.md",title:"PostgreSQL\u306eISNULL\u304a\u3088\u3073ISNOTNULL\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001PostgreSQL\u306e `IS NULL` \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u5024\u304c `NULL` \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002PostgreSQL\u306e `IS NULL` \u306f\u3001\u5024\u304c `NULL` \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d6\u30fc\u30eb\u6f14\u7b97\u5b50\u3067\u3059\u3002`NULL` \u5024\u306f\u4f55\u3082\u793a\u3055\u306a\u3044\u7279\u6b8a\u306a\u5024\u3067\u3042\u308a\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3067\u3082\u306a\u304f\u3001false\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002",date:"2024-02-04T11:00:00.000Z",formattedDate:"2024\u5e742\u67084\u65e5",tags:[{label:"postgresql",permalink:"/illa-website/ja/blog/tags/postgresql"},{label:"isnull",permalink:"/illa-website/ja/blog/tags/isnull"},{label:"isnotnull",permalink:"/illa-website/ja/blog/tags/isnotnull"}],readingTime:3.73,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"postgresql-isnull",title:"PostgreSQL\u306eISNULL\u304a\u3088\u3073ISNOTNULL\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001PostgreSQL\u306e `IS NULL` \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u5024\u304c `NULL` \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002PostgreSQL\u306e `IS NULL` \u306f\u3001\u5024\u304c `NULL` \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d6\u30fc\u30eb\u6f14\u7b97\u5b50\u3067\u3059\u3002`NULL` \u5024\u306f\u4f55\u3082\u793a\u3055\u306a\u3044\u7279\u6b8a\u306a\u5024\u3067\u3042\u308a\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3067\u3082\u306a\u304f\u3001false\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp",tags:["postgresql","isnull","isnotnull"],date:"2024-02-04T11:00",is_featured:!0},unlisted:!1,nextItem:{title:"2024\u5e74\u306b\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b5\u3064\u306eReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/illa-website/ja/blog/react-component-library"},relatedPosts:[],authorPosts:[]},o={authorsImageUrls:[void 0]},L=[{value:"PostgreSQL\u306eIS NULL\u69cb\u6587",id:"postgresql\u306eis-null\u69cb\u6587",level:2},{value:"PostgreSQL\u306eIS NULL\u6f14\u7b97\u5b50\u306e\u898f\u5247",id:"postgresql\u306eis-null\u6f14\u7b97\u5b50\u306e\u898f\u5247",level:2},{value:"PostgreSQL\u306eIS NULL\u306e\u4f8b",id:"postgresql\u306eis-null\u306e\u4f8b",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function d(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001PostgreSQL\u306e ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u5024\u304c ",(0,n.jsx)(s.code,{children:"NULL"})," \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002PostgreSQL\u306e ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u306f\u3001\u5024\u304c ",(0,n.jsx)(s.code,{children:"NULL"})," \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d6\u30fc\u30eb\u6f14\u7b97\u5b50\u3067\u3059\u3002",(0,n.jsx)(s.code,{children:"NULL"})," \u5024\u306f\u4f55\u3082\u793a\u3055\u306a\u3044\u7279\u6b8a\u306a\u5024\u3067\u3042\u308a\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3067\u3082\u306a\u304f\u3001false\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"postgresql\u306eis-null\u69cb\u6587",children:"PostgreSQL\u306eIS NULL\u69cb\u6587"}),"\n",(0,n.jsxs)(s.p,{children:["PostgreSQL\u306e ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u306f\u3001\u5358\u9805\u6bd4\u8f03\u6f14\u7b97\u5b50\u3067\u30011\u3064\u306e\u30aa\u30da\u30e9\u30f3\u30c9\u3060\u3051\u304c\u5fc5\u8981\u3067\u3059\u3002 ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u6f14\u7b97\u5b50\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"expr IS NULL\nexpr IS NOT NULL\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u5206\u89e3:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"expr"})," \u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u540d\u3001\u5024\u3001\u307e\u305f\u306f\u5f0f\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"IS NOT NULL"})," \u306f ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u306e\u5426\u5b9a\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"IS NULL"})," \u304a\u3088\u3073 ",(0,n.jsx)(s.code,{children:"IS NOT NULL"})," \u306f ",(0,n.jsx)(s.code,{children:"SELECT"})," \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u307e\u305f\u306f ",(0,n.jsx)(s.code,{children:"WHERE"})," \u53e5\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"postgresql\u306eis-null\u6f14\u7b97\u5b50\u306e\u898f\u5247",children:"PostgreSQL\u306eIS NULL\u6f14\u7b97\u5b50\u306e\u898f\u5247"}),"\n",(0,n.jsxs)(s.p,{children:["PostgreSQL\u306e ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u6f14\u7b97\u5b50\u306e\u5de6\u5074\u306e\u30aa\u30da\u30e9\u30f3\u30c9\u304c ",(0,n.jsx)(s.code,{children:"NULL"})," \u306e\u5834\u5408\u3001",(0,n.jsx)(s.code,{children:"IS NULL"})," \u6f14\u7b97\u5b50\u306f ",(0,n.jsx)(s.code,{children:"t"})," \u3092\u8fd4\u3057\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f ",(0,n.jsx)(s.code,{children:"f"})," \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'SELECT\n    NULL IS NULL "NULL IS NULL",\n    0 IS NULL "0 IS NULL",\n    1 IS NULL "1 IS NULL";\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:" NULL IS NOT NULL | 0 IS NOT NULL | 1 IS NOT NULL\n------------------+---------------+---------------\n f                | t             | t\n"})}),"\n",(0,n.jsx)(s.h2,{id:"postgresql\u306eis-null\u306e\u4f8b",children:"PostgreSQL\u306eIS NULL\u306e\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u306f ",(0,n.jsx)(s.code,{children:"Sakila"})," \u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u307e\u305a\u3001PostgreSQL\u306b ",(0,n.jsx)(s.code,{children:"Sakila"})," \u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Sakila"})," \u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306f\u6700\u3082\u5e83\u304f\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e1\u3064\u3067\u3059\u3002",(0,n.jsx)(s.code,{children:"Sakila"})," \u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306f\u5143\u3005MySQL AB\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u30c1\u30fc\u30e0\u306e\u5143\u30e1\u30f3\u30d0\u30fc\u3067\u3042\u308bMike Hillyer\u306b\u3088\u3063\u3066\u958b\u767a\u3055\u308c\u307e\u3057\u305f\u3002\u3053\u308c\u306f\u3001\u672c\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3001\u8a18\u4e8b\u306a\u3069\u3067\u306e\u4f8b\u793a\u306b\u4f7f\u7528\u3067\u304d\u308b\u6a19\u6e96\u306e\u30b9\u30ad\u30fc\u30de\u3092\u63d0\u4f9b\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Sakila"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306fDVD\u30ec\u30f3\u30bf\u30eb\u5e97\u306e\u30d3\u30b8\u30cd\u30b9\u3092\u30e2\u30c7\u30eb\u5316\u3057\u3066\u304a\u308a\u3001\u6620\u753b\u3001\u4ff3\u512a\u3001\u6620\u753b\u4ff3\u512a\u306e\u95a2\u4fc2\u3001\u304a\u3088\u3073\u6620\u753b\u3001\u5e97\u8217\u3001\u30ec\u30f3\u30bf\u30eb\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u63a5\u7d9a\u3059\u308b\u4e2d\u592e\u306e\u5728\u5eab\u30c6\u30fc\u30d6\u30eb\u3092\u542b\u3093\u3067\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6700\u9ad8\u306e\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e1\u3064\u3068\u3057\u3066\u3001",(0,n.jsx)(s.code,{children:"Sakila"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306fPostgreSQL\u3001Oracle\u3001DB2\u3001\u304a\u3088\u3073SQLite\u306a\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u79fb\u690d\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Sakila"})," \u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u306f\u3001",(0,n.jsx)(s.code,{children:"staff"})," \u30c6\u30fc\u30d6\u30eb\u304cDVD\u30ec\u30f3\u30bf\u30eb\u5e97\u306e\u5f93\u696d\u54e1\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"staff"})," \u30c6\u30fc\u30d6\u30eb\u3067\u306f\u3001",(0,n.jsx)(s.code,{children:"picture"})," \u304c\u5f93\u696d\u54e1\u306e\u5199\u771f\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.jsx)(s.code,{children:"staff"})," \u30c6\u30fc\u30d6\u30eb\u304b\u3089\u5199\u771f\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u3044\u306a\u3044\u5f93\u696d\u54e1\u3092\u30af\u30a8\u30ea\u3059\u308b\u306b\u306f\u3001",(0,n.jsx)(s.code,{children:"picture"})," \u304c ",(0,n.jsx)(s.code,{children:"NULL"})," \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6b21\u306e ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u3092\u4f7f\u7528\u3057\u305fSQL\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"SELECT\n    first_name, last_name, picture\nFROM\n    staff\nWHERE\n    picture IS NULL;\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:" first_name | last_name | picture\n------------+-----------+---------\n Mike       | Hillyer   | <null>\n Jon        | Stephens  | <null>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,n.jsxs)(s.p,{children:["\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001PostgreSQL\u306e ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u304a\u3088\u3073 ",(0,n.jsx)(s.code,{children:"IS NOT NULL"})," \u6bd4\u8f03\u6f14\u7b97\u5b50\u306e\u69cb\u6587\u3068\u4f7f\u7528\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002\u4ee5\u4e0b\u306f\u3053\u306e\u8a18\u4e8b\u306e\u8981\u70b9\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"IS NULL"})," \u304a\u3088\u3073 ",(0,n.jsx)(s.code,{children:"IS NOT NULL"})," \u306f\u5358\u9805\u6bd4\u8f03\u6f14\u7b97\u5b50\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"IS NULL"})," \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u5024\u304c ",(0,n.jsx)(s.code,{children:"NULL"})," \u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"IS NOT NULL"})," \u6f14\u7b97\u5b50\u306f ",(0,n.jsx)(s.code,{children:"IS NULL"})," \u306e\u5426\u5b9a\u5f62\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"NULL IS NULL"})," \u306f true \u3068\u8a55\u4fa1\u3055\u308c\u307e\u3059\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7214:(e,s,l)=>{l.d(s,{Z:()=>t,a:()=>c});var n=l(959);const r={},i=n.createContext(r);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);