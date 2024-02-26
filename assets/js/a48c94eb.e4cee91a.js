"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[8347],{9261:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=s(1527),a=s(7214);const l={slug:"postgresql-isnull",title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp",tags:["postgresql","isnull","isnotnull"],date:"2024-02-04T11:00"},o=void 0,i={permalink:"/illa-website/blog/postgresql-isnull",source:"@site/blog/postgresql-isnull/postgresql-isnull.md",title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.",date:"2024-02-04T11:00:00.000Z",formattedDate:"February 4, 2024",tags:[{label:"postgresql",permalink:"/illa-website/blog/tags/postgresql"},{label:"isnull",permalink:"/illa-website/blog/tags/isnull"},{label:"isnotnull",permalink:"/illa-website/blog/tags/isnotnull"}],readingTime:2.435,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"postgresql-isnull",title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/postgresql-isnull/cover.webp",tags:["postgresql","isnull","isnotnull"],date:"2024-02-04T11:00"},unlisted:!1,prevItem:{title:"PostgreSQL SELECT Statement",permalink:"/illa-website/blog/postgresql-select"},nextItem:{title:"Most Popular 5 React Component Libraries in 2024",permalink:"/illa-website/blog/react-component-library"},relatedPosts:[{title:"PostgreSQL SELECT Statement",description:"This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.",permalink:"/illa-website/blog/postgresql-select",formattedDate:"February 21, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.82,date:"2024-02-21T10:00:00.000Z"},{title:"Using Remark to Create an Interactive Table of Contents in a Next.js Blog",description:"A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content.",permalink:"/illa-website/blog/react-markdown",formattedDate:"February 26, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:9.965,date:"2024-02-26T10:00:00.000Z"},{title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",permalink:"/illa-website/blog/list-tables-in-postgresql",formattedDate:"January 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.91,date:"2024-01-04T10:00:00.000Z"}],authorPosts:[]},r={authorsImageUrls:[void 0]},c=[{value:"PostgreSQL IS NULL Syntax",id:"postgresql-is-null-syntax",level:2},{value:"PostgreSQL IS NULL Operator Rules",id:"postgresql-is-null-operator-rules",level:2},{value:"PostgreSQL IS NULL Examples",id:"postgresql-is-null-examples",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This article explains how to use the ",(0,n.jsx)(t.code,{children:"IS NULL"})," operator in PostgreSQL to check if a value is ",(0,n.jsx)(t.code,{children:"NULL"}),".\nPostgreSQL ",(0,n.jsx)(t.code,{children:"IS NULL"})," is a boolean operator that checks if a value is ",(0,n.jsx)(t.code,{children:"NULL"}),". A ",(0,n.jsx)(t.code,{children:"NULL"})," value is a special value that\nindicates nothing, it is neither an empty string nor false."]}),"\n",(0,n.jsx)(t.h2,{id:"postgresql-is-null-syntax",children:"PostgreSQL IS NULL Syntax"}),"\n",(0,n.jsxs)(t.p,{children:["PostgreSQL ",(0,n.jsx)(t.code,{children:"IS NULL"})," is a unary comparison operator that only requires one operand. The syntax for the ",(0,n.jsx)(t.code,{children:"IS NULL"}),"\noperator is:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"expr IS NULL\nexpr IS NOT NULL\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Breakdown:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"expr"})," can be a field name, a value, or an expression."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"IS NOT NULL"})," is the negation of ",(0,n.jsx)(t.code,{children:"IS NULL"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"IS NULL"})," and ",(0,n.jsx)(t.code,{children:"IS NOT NULL"})," can be used in ",(0,n.jsx)(t.code,{children:"SELECT"})," statements or ",(0,n.jsx)(t.code,{children:"WHERE"})," clauses."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"postgresql-is-null-operator-rules",children:"PostgreSQL IS NULL Operator Rules"}),"\n",(0,n.jsxs)(t.p,{children:["When the operand on the left side of the PostgreSQL ",(0,n.jsx)(t.code,{children:"IS NULL"})," operator is ",(0,n.jsx)(t.code,{children:"NULL"}),", the ",(0,n.jsx)(t.code,{children:"IS NULL"})," operator returns ",(0,n.jsx)(t.code,{children:"t"}),",\notherwise it returns ",(0,n.jsx)(t.code,{children:"f"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'SELECT\n    NULL IS NULL "NULL IS NULL",\n    0 IS NULL "0 IS NULL",\n    1 IS NULL "1 IS NULL";\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:" NULL IS NOT NULL | 0 IS NOT NULL | 1 IS NOT NULL\n------------------+---------------+---------------\n f                | t             | t\n"})}),"\n",(0,n.jsx)(t.h2,{id:"postgresql-is-null-examples",children:"PostgreSQL IS NULL Examples"}),"\n",(0,n.jsxs)(t.p,{children:["We will use the tables in the ",(0,n.jsx)(t.code,{children:"Sakila"})," sample database for demonstration. Please install the ",(0,n.jsx)(t.code,{children:"Sakila"})," sample database in\nPostgreSQL first."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Sakila"})," sample database is one of the most widely used and best sample databases. The ",(0,n.jsx)(t.code,{children:"Sakila"})," sample database was\noriginally developed by Mike Hillyer, a former member of the MySQL AB documentation team. It is designed to provide a\nstandard schema that can be used for example demonstrations in books, tutorials, articles, etc."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Sakila"})," database models a DVD rental store business, including movies, actors, movie-actor relationships, and a\ncentral inventory table that connects movies, stores, and rental transactions."]}),"\n",(0,n.jsxs)(t.p,{children:["As one of the best sample databases, the ",(0,n.jsx)(t.code,{children:"Sakila"})," database has been ported to platforms such as PostgreSQL, Oracle, DB2,\nand SQLite."]}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"Sakila"})," sample database, the ",(0,n.jsx)(t.code,{children:"staff"})," table stores employee information for the DVD rental store."]}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"staff"})," table, ",(0,n.jsx)(t.code,{children:"picture"})," stores the employee's photo file. To query for employees who have not uploaded a photo\nfrom the ",(0,n.jsx)(t.code,{children:"staff"})," table, you need to check if ",(0,n.jsx)(t.code,{children:"picture"})," is ",(0,n.jsx)(t.code,{children:"NULL"}),". Use the following SQL statement with ",(0,n.jsx)(t.code,{children:"IS NULL"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"SELECT\n    first_name, last_name, picture\nFROM\n    staff\nWHERE\n    picture IS NULL;\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:" first_name | last_name | picture\n------------+-----------+---------\n Mike       | Hillyer   | <null>\n Jon        | Stephens  | <null>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(t.p,{children:["In this article, we learned the syntax and usage of the ",(0,n.jsx)(t.code,{children:"IS NULL"})," and ",(0,n.jsx)(t.code,{children:"IS NOT NULL"})," comparison operators in PostgreSQL.\nHere are the key takeaways from this article:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"IS NULL"})," and ",(0,n.jsx)(t.code,{children:"IS NOT NULL"})," are unary comparison operators."]}),"\n",(0,n.jsxs)(t.li,{children:["Use the ",(0,n.jsx)(t.code,{children:"IS NULL"})," operator to check if a value is ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"IS NOT NULL"})," operator is the negation of ",(0,n.jsx)(t.code,{children:"IS NULL"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"NULL IS NULL"})," evaluates to true."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7214:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(959);const a={},l=n.createContext(a);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);