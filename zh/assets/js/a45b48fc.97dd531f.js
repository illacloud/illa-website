"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[7617],{82:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=s(1527),n=s(7214);const a={slug:"list-tables-in-postgresql",title:"PostgreSQL\u8868\u683c\u6e05\u5355\u83b7\u53d6\u65b9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728PostgreSQL\u6570\u636e\u5e93\u4e2d\u5217\u51fa\u6240\u6709\u8868\u683c\u7684\u4e24\u79cd\u65b9\u6cd5\u3002PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002",authors:"owen",image:"https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp",tags:["postgres","postgresql","database","list","tables","psql"],date:"2024-01-04T10:00"},i=void 0,r={permalink:"/illa-website/zh/blog/list-tables-in-postgresql",source:"@site/i18n/zh/docusaurus-plugin-content-blog/list-tables-in-postgresql/list-tables-in-postgresql.md",title:"PostgreSQL\u8868\u683c\u6e05\u5355\u83b7\u53d6\u65b9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728PostgreSQL\u6570\u636e\u5e93\u4e2d\u5217\u51fa\u6240\u6709\u8868\u683c\u7684\u4e24\u79cd\u65b9\u6cd5\u3002PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002",date:"2024-01-04T10:00:00.000Z",formattedDate:"2024\u5e741\u67084\u65e5",tags:[{label:"postgres",permalink:"/illa-website/zh/blog/tags/postgres"},{label:"postgresql",permalink:"/illa-website/zh/blog/tags/postgresql"},{label:"database",permalink:"/illa-website/zh/blog/tags/database"},{label:"list",permalink:"/illa-website/zh/blog/tags/list"},{label:"tables",permalink:"/illa-website/zh/blog/tags/tables"},{label:"psql",permalink:"/illa-website/zh/blog/tags/psql"}],readingTime:3.47,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"list-tables-in-postgresql",title:"PostgreSQL\u8868\u683c\u6e05\u5355\u83b7\u53d6\u65b9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728PostgreSQL\u6570\u636e\u5e93\u4e2d\u5217\u51fa\u6240\u6709\u8868\u683c\u7684\u4e24\u79cd\u65b9\u6cd5\u3002PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002",authors:"owen",image:"https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp",tags:["postgres","postgresql","database","list","tables","psql"],date:"2024-01-04T10:00"},unlisted:!1,prevItem:{title:"\u4ee5\u95ea\u7535\u901f\u5ea6\u6784\u5efa\u6838\u5fc3\u5e94\u7528\u4eea\u8868\u677f",permalink:"/illa-website/zh/blog/core-app-dashboard-2"},nextItem:{title:"\u5982\u4f55\u57282024\u5e74\u6784\u5efa\u81ea\u5b9a\u4e49\u4f4e\u4ee3\u7801CRM",permalink:"/illa-website/zh/blog/low-code-crm"},relatedPosts:[{title:"PostgreSQL SELECT \u8bed\u53e5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 `PostgreSQL` \u4e2d\u7684 `SELECT` \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 `SELECT` \u8bed\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002\u5728 `PostgreSQL` \u4e2d\uff0c`SELECT` \u8bed\u53e5\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\uff0c\u5b83\u53ef\u80fd\u662f\u4f7f\u7528\u6700\u591a\u7684\u8bed\u53e5\u3002",permalink:"/illa-website/zh/blog/postgresql-select",formattedDate:"2024\u5e742\u670821\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:7.485,date:"2024-02-21T10:00:00.000Z"},{title:"PostgreSQL\u4e2dISNULL\u548cISNOTNULL\u7684\u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 PostgreSQL \u4e2d\u5982\u4f55\u4f7f\u7528 `IS NULL` \u8fd0\u7b97\u7b26\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u4e0d\u662f `NULL`\u3002PostgreSQL `IS NULL` \u662f\u4e00\u4e2a\u5e03\u5c14\u8fd0\u7b97\u7b26\uff0c\u5b83\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u4e0d\u662f`NULL`\u3002 `NULL`\u503c\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u503c\uff0c\u5b83\u8868\u793a\u4ec0\u4e48\u90fd\u6ca1\u6709\uff0c\u5b83\u5373\u4e0d\u662f\u7a7a\u5b57\u7b26\u4e32\u4e5f\u4e0d\u662ffalse\u3002",permalink:"/illa-website/zh/blog/postgresql-isnull",formattedDate:"2024\u5e742\u67084\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.245,date:"2024-02-04T11:00:00.000Z"}],authorPosts:[{title:"\u4ee5\u95ea\u7535\u901f\u5ea6\u6784\u5efa\u6838\u5fc3\u5e94\u7528\u4eea\u8868\u677f",description:"\u6838\u5fc3\u5e94\u7528\u4eea\u8868\u677f\u662f\u4efb\u4f55\u590d\u6742\u5e94\u7528\u7a0b\u5e8f\u7684\u4e2d\u67a2\u63a7\u5236\u4e2d\u5fc3\u3002",permalink:"/illa-website/zh/blog/core-app-dashboard-2",formattedDate:"2024\u5e741\u67084\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:13.48,date:"2024-01-04T10:00:00.000Z"},{title:"IT\u652f\u6301\u7684\u6700\u4f73\u5de5\u5177",description:"\u5728\u666e\u901a\u516c\u53f8\u4e2d\uff0cIT\u90e8\u95e8\u7684\u6280\u672f\u652f\u6301\u8d1f\u8d23\u7ba1\u7406\u516c\u53f8\u7684\u4fe1\u606f\u7cfb\u7edf\u3001\u6570\u636e\u5e93",permalink:"/illa-website/zh/blog/it-support",formattedDate:"2024\u5e741\u670823\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:13.89,date:"2024-01-23T20:00:00.000Z"},{title:"ILLA Flow\uff1a\u4e00\u4e2a\u7531JavaScript\u9a71\u52a8\u3001\u9762\u5411\u5f00\u53d1\u8005\u53cb\u597d\u7684\u4ea7\u54c1\uff0c\u7528\u4e8e\u521b\u5efa\u81ea\u52a8\u5316\u5de5\u4f5c\u6d41\u7a0b",description:"ILLA Flow\u662f\u4e00\u4e2a\u5de5\u4f5c\u6d41\u4ea7\u54c1\uff0c\u5141\u8bb8\u60a8\u4ee5\u7c7b\u4f3c\u601d\u7ef4\u5bfc\u56fe\u7684\u65b9\u5f0f\u6784\u5efa\u5b8c\u6574\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4ece\u800c\u5b9e\u73b0\u4e0e\u5404\u79cd\u6570\u636e\u5e93\u548cAPI\u7684\u8fde\u63a5\u548c\u8c03\u5ea6\u3002",permalink:"/illa-website/zh/blog/launch-flow",formattedDate:"2024\u5e741\u67085\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.025,date:"2024-01-05T10:00:00.000Z"}]},o={authorsImageUrls:[void 0]},c=[{value:"\u4f7f\u7528\\dt\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c",id:"\u4f7f\u7528dt\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c",level:2},{value:"\u4ecepg_tables\u8868\u4e2d\u67e5\u8be2\u8868\u683c",id:"\u4ecepg_tables\u8868\u4e2d\u67e5\u8be2\u8868\u683c",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728PostgreSQL\u6570\u636e\u5e93\u4e2d\u5217\u51fa\u6240\u6709\u8868\u683c\u7684\u4e24\u79cd\u65b9\u6cd5\u3002PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\uff1a"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\u4f7f\u7528",(0,l.jsx)(t.code,{children:"psql"}),"\u5de5\u5177\u7684",(0,l.jsx)(t.code,{children:"\\dt"}),"\u6216",(0,l.jsx)(t.code,{children:"\\dt+"}),"\u547d\u4ee4\u5217\u51fa\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:["\u901a\u8fc7\u67e5\u8be2",(0,l.jsx)(t.code,{children:"pg_tables"}),"\u8868\u5217\u51fa\u6240\u6709\u8868\u683c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u4f7f\u7528dt\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c",children:"\u4f7f\u7528\\dt\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c"}),"\n",(0,l.jsxs)(t.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528",(0,l.jsx)(t.code,{children:"psql"}),"\u5de5\u5177\u767b\u5f55\u6570\u636e\u5e93\u5e76\u5217\u51fa\u5176\u4e2d\u8868\u683c\u7684\u8fc7\u7a0b\u3002\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"\u4f7f\u7528postgres\u7528\u6237\u767b\u5f55\u5230PostgreSQL\u670d\u52a1\u5668\uff1a"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'[~] psql -U postgres\npsql (14.4)\nType "help" for help.\n'})}),"\n",(0,l.jsx)(t.p,{children:"\u6ce8\u610f\uff1a\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u9002\u5f53\u6570\u636e\u5e93\u6743\u9650\u7684\u4efb\u4f55\u7528\u6237\u3002"}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsxs)(t.li,{children:["\u4f7f\u7528\u4ee5\u4e0b\u8bed\u53e5\u9009\u62e9",(0,l.jsx)(t.code,{children:"testdb"}),"\u6570\u636e\u5e93\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"\\c testdb;\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u5982\u679c\u6570\u636e\u5e93\u5c1a\u672a\u521b\u5efa\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"CREATE DATABASE testdb;\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"3",children:["\n",(0,l.jsxs)(t.li,{children:["\u4f7f\u7528",(0,l.jsx)(t.code,{children:"\\dt"}),"\u547d\u4ee4\u5217\u51fa",(0,l.jsx)(t.code,{children:"testdb"}),"\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"\\dt\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"            Relations List\nSchema |      Name      | Type  |  Owner\n--------+----------------+-------+----------\npublic | mytable        | table | postgres\npublic | product        | table | postgres\npublic | test_date      | table | postgres\npublic | test_time      | table | postgres\npublic | test_timestamp | table | postgres\npublic | week_day_sales | table | postgres\n(6 rows)\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsxs)(t.li,{children:["\u82e5\u8981\u67e5\u770b\u6709\u5173\u8868\u683c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u4f7f\u7528",(0,l.jsx)(t.code,{children:"\\dt+"}),"\u547d\u4ee4\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"\\dt+\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"                                          Relations List\nSchema |      Name      | Type  |  Owner   | Persistence | Access method |    Size    | Description\n--------+----------------+-------+----------+-------------+---------------+------------+-------------\npublic | mytable        | table | postgres | permanent   | heap          | 16 kB      |\npublic | product        | table | postgres | permanent   | heap          | 16 kB      |\npublic | test_date      | table | postgres | permanent   | heap          | 8192 bytes |\npublic | test_time      | table | postgres | permanent   | heap          | 8192 bytes |\npublic | test_timestamp | table | postgres | permanent   | heap          | 8192 bytes |\npublic | week_day_sales | table | postgres | permanent   | heap          | 8192 bytes |\n(6 rows)\n"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"\\dt+"}),"\u7684\u8f93\u51fa\u5305\u542b",(0,l.jsx)(t.code,{children:"\\dt"}),"\u8f93\u51fa\u4ee5\u53ca\u989d\u5916\u5217\uff0c\u5982",(0,l.jsx)(t.code,{children:"Persistence"}),"\u3001",(0,l.jsx)(t.code,{children:"Access method"}),"\u3001",(0,l.jsx)(t.code,{children:"Size"}),"\u548c",(0,l.jsx)(t.code,{children:"Description"}),"\u3002"]}),"\n",(0,l.jsx)(t.h2,{id:"\u4ecepg_tables\u8868\u4e2d\u67e5\u8be2\u8868\u683c",children:"\u4ecepg_tables\u8868\u4e2d\u67e5\u8be2\u8868\u683c"}),"\n",(0,l.jsxs)(t.p,{children:["\u9664\u4e86",(0,l.jsx)(t.code,{children:"\\dt"}),"\u548c",(0,l.jsx)(t.code,{children:"\\dt+"}),"\u547d\u4ee4\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2",(0,l.jsx)(t.code,{children:"pg_tables"}),"\u8868\u5217\u51fa\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"pg_tables"}),"\u8868\u662fPostgreSQL\u7684\u5185\u7f6e\u8868\uff0c\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"SELECT * FROM pg_tables\nWHERE schemaname = 'public';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:" schemaname |   tablename    | tableowner | tablespace | hasindexes | hasrules | hastriggers | rowsecurity\n------------+----------------+------------+------------+------------+----------+-------------+-------------\n public     | test_date      | postgres   |            | t          | f        | f           | f\n public     | test_time      | postgres   |            | t          | f        | f           | f\n public     | test_timestamp | postgres   |            | t          | f        | f           | f\n public     | week_day_sales | postgres   |            | t          | f        | f           | f\n public     | mytable        | postgres   |            | f          | f        | f           | f\n public     | product        | postgres   |            | t          | f        | f           | f\n(6 rows)\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,l.jsx)(t.p,{children:"PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\u683c\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\u4f7f\u7528",(0,l.jsx)(t.code,{children:"psql"}),"\u5de5\u5177\u7684",(0,l.jsx)(t.code,{children:"\\dt"}),"\u6216",(0,l.jsx)(t.code,{children:"\\dt+"}),"\u547d\u4ee4\u5217\u51fa\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:["\u901a\u8fc7\u67e5\u8be2",(0,l.jsx)(t.code,{children:"pg_tables"}),"\u8868\u5217\u51fa\u6240\u6709\u8868\u683c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["\u5728MySQL\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(t.code,{children:"SHOW TABLES"}),"\u547d\u4ee4\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u8868\u683c\u3002"]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},7214:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var l=s(959);const n={},a=l.createContext(n);function i(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);