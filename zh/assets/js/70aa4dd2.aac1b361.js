"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[2300],{1453:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var n=l(1527),r=l(7214);const c={slug:"postgresql-select",title:"PostgreSQL SELECT \u8bed\u53e5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 `PostgreSQL` \u4e2d\u7684 `SELECT` \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 `SELECT` \u8bed\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002\u5728 `PostgreSQL` \u4e2d\uff0c`SELECT` \u8bed\u53e5\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\uff0c\u5b83\u53ef\u80fd\u662f\u4f7f\u7528\u6700\u591a\u7684\u8bed\u53e5\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp",tags:["postgresql","select"],date:"2024-02-21T10:00"},o=void 0,t={permalink:"/illa-website/zh/blog/postgresql-select",source:"@site/i18n/zh/docusaurus-plugin-content-blog/postgresql-select/postgresql-select.md",title:"PostgreSQL SELECT \u8bed\u53e5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 `PostgreSQL` \u4e2d\u7684 `SELECT` \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 `SELECT` \u8bed\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002\u5728 `PostgreSQL` \u4e2d\uff0c`SELECT` \u8bed\u53e5\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\uff0c\u5b83\u53ef\u80fd\u662f\u4f7f\u7528\u6700\u591a\u7684\u8bed\u53e5\u3002",date:"2024-02-21T10:00:00.000Z",formattedDate:"2024\u5e742\u670821\u65e5",tags:[{label:"postgresql",permalink:"/illa-website/zh/blog/tags/postgresql"},{label:"select",permalink:"/illa-website/zh/blog/tags/select"}],readingTime:7.485,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"postgresql-select",title:"PostgreSQL SELECT \u8bed\u53e5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 `PostgreSQL` \u4e2d\u7684 `SELECT` \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 `SELECT` \u8bed\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002\u5728 `PostgreSQL` \u4e2d\uff0c`SELECT` \u8bed\u53e5\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\uff0c\u5b83\u53ef\u80fd\u662f\u4f7f\u7528\u6700\u591a\u7684\u8bed\u53e5\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp",tags:["postgresql","select"],date:"2024-02-21T10:00"},unlisted:!1,nextItem:{title:"PostgreSQL\u4e2dISNULL\u548cISNOTNULL\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/illa-website/zh/blog/postgresql-isnull"},relatedPosts:[{title:"PostgreSQL\u8868\u683c\u6e05\u5355\u83b7\u53d6\u65b9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728PostgreSQL\u6570\u636e\u5e93\u4e2d\u5217\u51fa\u6240\u6709\u8868\u683c\u7684\u4e24\u79cd\u65b9\u6cd5\u3002PostgreSQL\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u5217\u51fa\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u683c\u3002",permalink:"/illa-website/zh/blog/list-tables-in-postgresql",formattedDate:"2024\u5e741\u67084\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.47,date:"2024-01-04T10:00:00.000Z"},{title:"PostgreSQL\u4e2dISNULL\u548cISNOTNULL\u7684\u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 PostgreSQL \u4e2d\u5982\u4f55\u4f7f\u7528 `IS NULL` \u8fd0\u7b97\u7b26\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u4e0d\u662f `NULL`\u3002PostgreSQL `IS NULL` \u662f\u4e00\u4e2a\u5e03\u5c14\u8fd0\u7b97\u7b26\uff0c\u5b83\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u4e0d\u662f`NULL`\u3002 `NULL`\u503c\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u503c\uff0c\u5b83\u8868\u793a\u4ec0\u4e48\u90fd\u6ca1\u6709\uff0c\u5b83\u5373\u4e0d\u662f\u7a7a\u5b57\u7b26\u4e32\u4e5f\u4e0d\u662ffalse\u3002",permalink:"/illa-website/zh/blog/postgresql-isnull",formattedDate:"2024\u5e742\u67084\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.245,date:"2024-02-04T11:00:00.000Z"}],authorPosts:[]},i={authorsImageUrls:[void 0]},d=[{value:"PostgreSQL SELECT \u8bed\u6cd5",id:"postgresql-select-\u8bed\u6cd5",level:2},{value:"PostgreSQL SELECT \u793a\u4f8b",id:"postgresql-select-\u793a\u4f8b",level:2},{value:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u67e5\u8be2\u4e00\u5217\u6570\u636e",id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u67e5\u8be2\u4e00\u5217\u6570\u636e",level:3},{value:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u67e5\u8be2\u591a\u5217\u6570\u636e\u793a\u4f8b",id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u67e5\u8be2\u591a\u5217\u6570\u636e\u793a\u4f8b",level:3},{value:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u67e5\u8be2\u4e00\u4e2a\u8868\u7684\u6240\u6709\u5217\u7684\u6570\u636e\u793a\u4f8b",id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u67e5\u8be2\u4e00\u4e2a\u8868\u7684\u6240\u6709\u5217\u7684\u6570\u636e\u793a\u4f8b",level:3},{value:"\u4f7f\u7528\u5e26\u6709\u8868\u8fbe\u5f0f\u7684 PostgreSQL SELECT \u8bed\u53e5\u793a\u4f8b",id:"\u4f7f\u7528\u5e26\u6709\u8868\u8fbe\u5f0f\u7684-postgresql-select-\u8bed\u53e5\u793a\u4f8b",level:3},{value:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u8ba1\u7b97\u8868\u8fbe\u5f0f\u793a\u4f8b",id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u8ba1\u7b97\u8868\u8fbe\u5f0f\u793a\u4f8b",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function a(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u672c\u6587\u4ecb\u7ecd\u4e86 ",(0,n.jsx)(s.code,{children:"PostgreSQL"})," \u4e2d\u7684 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4ece\u6570\u636e\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5728 ",(0,n.jsx)(s.code,{children:"PostgreSQL"})," \u4e2d\uff0c",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\uff0c\u5b83\u53ef\u80fd\u662f\u4f7f\u7528\u6700\u591a\u7684\u8bed\u53e5\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"postgresql-select-\u8bed\u6cd5",children:"PostgreSQL SELECT \u8bed\u6cd5"}),"\n",(0,n.jsxs)(s.p,{children:["\u8ba9\u6211\u4eec ",(0,n.jsx)(s.code,{children:"SELECT"})," \u4ece\u4ece\u5355\u4e2a\u8868\u4e2d\u68c0\u7d22\u6570\u636e\u7684\u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\u5f00\u59cb\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0b\u9762\u8bf4\u660e\u4e86 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7684\u8bed\u6cd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    expr_list\nFROM\n    table_name\n[other_clauses];\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5728\u8fd9\u4e2a\u8bed\u6cd5\u4e2d\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"SELECT"})," \u548c ",(0,n.jsx)(s.code,{children:"FROM"})," \u662f\u5173\u952e\u5b57\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"expr_list"})," \u662f\u8981\u9009\u62e9\u7684\u5217\u6216\u8005\u8868\u8fbe\u5f0f\u7684\u5217\u8868\u3002\u591a\u4e2a\u5217\u6216\u8868\u8fbe\u5f0f\u9700\u8981\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"table_name"})," \u662f\u8981\u67e5\u8be2\u7684\u6570\u636e\u8868\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"FROM table_name"})," \u662f\u53ef\u9009\u7684\u3002\u5982\u679c\u4f60\u4e0d\u67e5\u8be2\u4efb\u4f55\u8868\u4e2d\u7684\u884c\uff0c\u5219\u53ef\u4ee5\u7701\u7565 ",(0,n.jsx)(s.code,{children:"FROM"})," \u5b50\u53e5\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"other_clauses"})," \u662f ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u652f\u6301\u7684\u5b50\u53e5\u3002 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u652f\u6301\u5f88\u591a\u5b50\u53e5\uff0c\u5305\u62ec\uff1a","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"DISTINCT"})," \u8fd0\u7b97\u7b26\u9009\u62e9\u4e0d\u540c\u7684\u884c\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"ORDER BY"})," \u5b50\u53e5\u5bf9\u884c\u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"WHERE"})," \u5b50\u53e5\u8fc7\u6ee4\u884c\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"LIMIT"})," \u6216\u8005 ",(0,n.jsx)(s.code,{children:"FETCH"})," \u5b50\u53e5\u4ece\u8868\u4e2d\u9009\u62e9\u884c\u7684\u5b50\u96c6\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"GROUP BY"})," \u5b50\u53e5\u5c06\u884c\u5206\u7ec4\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"HAVING"})," \u5b50\u53e5\u8fc7\u6ee4\u7ec4\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528\u8bf8\u5982 ",(0,n.jsx)(s.code,{children:"INNER JOIN"}),", ",(0,n.jsx)(s.code,{children:"LEFT JOIN"}),", ",(0,n.jsx)(s.code,{children:"FULL OUTER JOIN"}),", ",(0,n.jsx)(s.code,{children:"CROSS JOIN"})," \u4e4b\u7c7b\u7684\u4e0e\u5176\u4ed6\u8868\u8fde\u63a5\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"UNION"})," \uff0c ",(0,n.jsx)(s.code,{children:"INTERSECT"})," \u548c ",(0,n.jsx)(s.code,{children:"EXCEPT"})," \u6267\u884c\u96c6\u5408\u8fd0\u7b97\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,n.jsx)(s.code,{children:"SQL"})," \u5173\u952e\u5b57\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\u4f46\u662f\u4e3a\u4e86\u8ba9 ",(0,n.jsx)(s.code,{children:"SQL"})," \u4ee3\u7801\u66f4\u6613\u4e8e\u9605\u8bfb\uff0c\u5c06 ",(0,n.jsx)(s.code,{children:"SQL"})," \u5173\u952e\u5b57\u4e66\u5199\u4e3a\u5927\u5199\u5f62\u5f0f\u662f\u4e00\u4e2a\u597d\u7684\u7f16\u7801\u4e60\u60ef\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u805a\u7126\u4e8e ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5176\u4ed6\u76f8\u5173\u7684\u5b50\u53e5\u7684\u7528\u6cd5\u5c06\u5728\u540e\u7eed\u7684\u6559\u7a0b\u4e2d\u5b66\u4e60\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"postgresql-select-\u793a\u4f8b",children:"PostgreSQL SELECT \u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e9b\u4f7f\u7528 PostgreSQL ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"PostgreSQL Sakila"})," \u793a\u4f8b\u6570\u636e\u5e93\u4e2d ",(0,n.jsx)(s.code,{children:"customer"})," \u8868\u8fdb\u884c\u6f14\u793a\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u67e5\u8be2\u4e00\u5217\u6570\u636e",children:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u67e5\u8be2\u4e00\u5217\u6570\u636e"}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0b\u9762\u7684 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4ece ",(0,n.jsx)(s.code,{children:"customer"})," \u8868\u4e2d\u67e5\u627e\u6240\u6709\u5ba2\u6237\u7684\u540d\u5b57\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT first_name FROM customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u8fd9\u662f\u90e8\u5206\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"first_name\n------------\nMARY\nPATRICIA\nLINDA\nBARBARA\nELIZABETH\nJENNIFER\nMARIA\nSUSAN\nMARGARET\nDOROTHY\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5728 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u672b\u5c3e\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5206\u53f7 (;) \u3002\u5206\u53f7\u4e0d\u662f SQL \u8bed\u53e5\u7684\u4e00\u90e8\u5206\u3002\u5b83\u7528\u4e8e\u5411 PostgreSQL \u53d1\u51fa SQL \u8bed\u53e5\u7ed3\u675f\u7684\u4fe1\u53f7\u3002\u5206\u53f7\u4e5f\u7528\u4e8e\u5206\u9694\u4e24\u6761 SQL \u8bed\u53e5\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u67e5\u8be2\u591a\u5217\u6570\u636e\u793a\u4f8b",children:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u67e5\u8be2\u591a\u5217\u6570\u636e\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u60f3\u77e5\u9053\u5ba2\u6237\u7684\u540d\u5b57\u3001\u59d3\u6c0f\u548c\u7535\u5b50\u90ae\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u5b50\u53e5\u4e2d\u6307\u5b9a\u8fd9\u4e9b\u5217\u540d\uff0c\u5982\u4ee5\u4e0b\u67e5\u8be2\u6240\u793a\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    first_name,\n    last_name,\n    email\nFROM\n    customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u90e8\u5206\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"first_name | last_name |                email\n------------+-----------+-------------------------------------\nMARY       | SMITH     | MARY.SMITH@sakilacustomer.org\nPATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org\nLINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org\nBARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org\nELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org\nJENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org\nMARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org\nSUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org\nMARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org\nDOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u67e5\u8be2\u4e00\u4e2a\u8868\u7684\u6240\u6709\u5217\u7684\u6570\u636e\u793a\u4f8b",children:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u67e5\u8be2\u4e00\u4e2a\u8868\u7684\u6240\u6709\u5217\u7684\u6570\u636e\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u60f3\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4ece ",(0,n.jsx)(s.code,{children:"customer"})," \u8868\u4e2d\u67e5\u627e\u6240\u6709\u7684\u5217\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u8bed\u53e5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u90e8\u5206\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:" customer_id | store_id | first_name | last_name |                email                | address_id | activebool | create_date |     last_update     | active\n-------------+----------+------------+-----------+-------------------------------------+------------+------------+-------------+---------------------+--------\n           1 |        1 | MARY       | SMITH     | MARY.SMITH@sakilacustomer.org       |          5 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           2 |        1 | PATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org |          6 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           3 |        1 | LINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org   |          7 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           4 |        2 | BARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org    |          8 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           5 |        1 | ELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  |          9 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           6 |        2 | JENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org   |         10 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           7 |        1 | MARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org     |         11 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           8 |        2 | SUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org     |         12 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n           9 |        2 | MARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org   |         13 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n          10 |        1 | DOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org   |         14 | t          | 2006-02-14  | 2006-02-15 04:57:20 |      1\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5728 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u5b50\u53e5\u4e2d\u4f7f\u7528\u4e86\u661f\u53f7 (",(0,n.jsx)(s.code,{children:"*"}),")\uff0c\u5b83\u662f\u6240\u6709\u5217\u7684\u7b80\u5199\u3002\u661f\u53f7 (",(0,n.jsx)(s.code,{children:"*"}),") \u53ef\u4ee5\u8ba9\u6211\u4eec\u8f93\u5165\u66f4\u5c11\uff0c\u800c\u4e0d\u7528\u5217\u51fa ",(0,n.jsx)(s.code,{children:"customer"})," \u8868\u4e2d\u7684\u6240\u6709\u7684\u5217\u540d\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4f46\u662f\uff0c\u5728 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4e2d\u4f7f\u7528\u661f\u53f7 (",(0,n.jsx)(s.code,{children:"*"}),") \u5e76\u4e0d\u662f\u4e00\u4e2a\u597d\u4e60\u60ef\uff0c\u539f\u56e0\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\u6570\u636e\u5e93\u6027\u80fd\u3002\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a\u5305\u542b\u8bb8\u591a\u5217\u548c\u5927\u91cf\u6570\u636e\u7684\u8868\uff0c\u5e26\u6709\u661f\u53f7 (*) \u901f\u8bb0\u7684 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u5c06\u4ece\u8868\u7684\u6240\u6709\u5217\u4e2d\u9009\u62e9\u6570\u636e\uff0c\u8fd9\u5bf9\u4e8e\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\u53ef\u80fd\u4e0d\u662f\u5fc5\u9700\u7684\u3002"]}),"\n",(0,n.jsx)(s.li,{children:"\u5e94\u7528\u6027\u80fd\u3002\u4ece\u6570\u636e\u5e93\u4e2d\u68c0\u7d22\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4f1a\u589e\u52a0\u6570\u636e\u5e93\u670d\u52a1\u5668\u548c\u5e94\u7528\u7a0b\u5e8f\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u6d41\u91cf\u3002\u56e0\u6b64\uff0c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u54cd\u5e94\u901f\u5ea6\u53ef\u80fd\u8f83\u6162\u4e14\u53ef\u6269\u5c55\u6027\u8f83\u5dee\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u7531\u4e8e\u8fd9\u4e9b\u539f\u56e0\uff0c\u6700\u597d\u5728 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u5b50\u53e5\u4e2d\u660e\u786e\u6307\u5b9a\u5217\u540d\uff0c\u4ee5\u4fbf\u4ec5\u4ece\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u5fc5\u8981\u7684\u6570\u636e\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5bf9\u4e8e\u68c0\u67e5\u6570\u636e\u5e93\u6570\u636e\u7684\u5373\u65f6\u67e5\u8be2\uff0c\u60a8\u5e94\u53ea\u4f7f\u7528\u661f\u53f7 (",(0,n.jsx)(s.code,{children:"*"}),") \u7b80\u5199\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u4f7f\u7528\u5e26\u6709\u8868\u8fbe\u5f0f\u7684-postgresql-select-\u8bed\u53e5\u793a\u4f8b",children:"\u4f7f\u7528\u5e26\u6709\u8868\u8fbe\u5f0f\u7684 PostgreSQL SELECT \u8bed\u53e5\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u9664\u4e86\u5217\u540d\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4e2d\u4f7f\u7528\u8868\u8fbe\u5f0f\u3002\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u8fd4\u56de\u6240\u6709\u5ba2\u6237\u7684\u5168\u540d\u548c\u7535\u5b50\u90ae\u4ef6\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    first_name || ' ' || last_name,\n    email\nFROM\n    customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u90e8\u5206\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"     ?column?     |                email\n------------------+-------------------------------------\n MARY SMITH       | MARY.SMITH@sakilacustomer.org\n PATRICIA JOHNSON | PATRICIA.JOHNSON@sakilacustomer.org\n LINDA WILLIAMS   | LINDA.WILLIAMS@sakilacustomer.org\n BARBARA JONES    | BARBARA.JONES@sakilacustomer.org\n ELIZABETH BROWN  | ELIZABETH.BROWN@sakilacustomer.org\n JENNIFER DAVIS   | JENNIFER.DAVIS@sakilacustomer.org\n MARIA MILLER     | MARIA.MILLER@sakilacustomer.org\n SUSAN WILSON     | SUSAN.WILSON@sakilacustomer.org\n MARGARET MOORE   | MARGARET.MOORE@sakilacustomer.org\n DOROTHY TAYLOR   | DOROTHY.TAYLOR@sakilacustomer.org\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u5b57\u7b26\u4e32\u8fde\u63a5\u8fd0\u7b97\u7b26 ",(0,n.jsx)(s.code,{children:"||"})," \u8fde\u63a5\u6bcf\u4e2a\u5ba2\u6237\u7684\u540d\u5b57\u3001\u7a7a\u683c\u548c\u59d3\u6c0f\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u4f7f\u7528-postgresql-select-\u8bed\u53e5\u8ba1\u7b97\u8868\u8fbe\u5f0f\u793a\u4f8b",children:"\u4f7f\u7528 PostgreSQL SELECT \u8bed\u53e5\u8ba1\u7b97\u8868\u8fbe\u5f0f\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u53ea\u60f3\u8981\u5355\u7eaf\u7684\u8ba1\u7b97\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u60a8\u53ef\u4ee5\u7701\u7565 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4e2d\u7684 ",(0,n.jsx)(s.code,{children:"FROM"})," \u5b50\u53e5\u3002 \u4ee5\u4e0b ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7528\u6765\u8ba1\u7b97 ",(0,n.jsx)(s.code,{children:"5 * 3"})," \u7684\u7ed3\u679c\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT 5 * 3;\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u8fd9\u662f\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"?column?\n----------\n       15\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 PostgreSQL ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u7684\u57fa\u672c\u5f62\u5f0f\u4ece\u5355\u4e2a\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u4ece\u4efb\u4f55\u8868\u67e5\u8be2\u6570\u636e\uff0c\u5219\u53ef\u4ee5\u7701\u7565 ",(0,n.jsx)(s.code,{children:"SELECT"})," \u8bed\u53e5\u4e2d\u7684 ",(0,n.jsx)(s.code,{children:"FROM"})," \u5b50\u53e5\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},7214:(e,s,l)=>{l.d(s,{Z:()=>t,a:()=>o});var n=l(959);const r={},c=n.createContext(r);function o(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);