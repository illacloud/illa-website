"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3157],{4654:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=s(1527),l=s(7214);const n={slug:"list-tables-in-postgresql",title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",authors:"owen",image:"https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp",tags:["postgres","postgresql","database","list","tables","psql"],date:"2024-01-04T10:00"},o=void 0,i={permalink:"/blog/list-tables-in-postgresql",source:"@site/blog/list-tables-in-postgresql/list-tables-in-postgresql.md",title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",date:"2024-01-04T10:00:00.000Z",formattedDate:"January 4, 2024",tags:[{label:"postgres",permalink:"/blog/tags/postgres"},{label:"postgresql",permalink:"/blog/tags/postgresql"},{label:"database",permalink:"/blog/tags/database"},{label:"list",permalink:"/blog/tags/list"},{label:"tables",permalink:"/blog/tags/tables"},{label:"psql",permalink:"/blog/tags/psql"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"list-tables-in-postgresql",title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",authors:"owen",image:"https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp",tags:["postgres","postgresql","database","list","tables","psql"],date:"2024-01-04T10:00"},unlisted:!1,prevItem:{title:"Build core app dashboard at lightning speed",permalink:"/blog/core-app-dashboard-2"},nextItem:{title:"How to build a custom low code CRM in 2024",permalink:"/blog/low-code-crm"},relatedPosts:[{title:"Top 7 Database GUIs for SQL databases",description:"Database GUI tools make working with SQL databases much simpler and more efficient for developers. Many great database GUIs are available.",permalink:"/blog/top-7-database-guis-for-sql-databases",formattedDate:"January 9, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.385,date:"2024-01-09T10:00:00.000Z"},{title:"Using Remark to Create an Interactive Table of Contents in a Next.js Blog",description:"A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content.",permalink:"/blog/react-markdown",formattedDate:"February 26, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:9.965,date:"2024-02-26T10:00:00.000Z"},{title:"PostgreSQL SELECT Statement",description:"This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.",permalink:"/blog/postgresql-select",formattedDate:"February 21, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.82,date:"2024-02-21T10:00:00.000Z"}],authorPosts:[{title:"Best tools for IT Support",description:"In ordinary companies, the IT department's Technical Support is responsible for managing the company's information system, database",permalink:"/blog/it-support",formattedDate:"January 23, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:8.025,date:"2024-01-23T20:00:00.000Z"},{title:"Build core app dashboard at lightning speed",description:"The Core App Dashboard is the nerve center of any sophisticated application.",permalink:"/blog/core-app-dashboard-2",formattedDate:"January 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:7.445,date:"2024-01-04T10:00:00.000Z"},{title:"Low Code vs Traditional Development: Optimal Efficiency in Choice",description:"With the continuous evolution of development practices, the advent of low-code tools has introduced innovative solutions to various development scenarios.",permalink:"/blog/lowcode-vs-traditional",formattedDate:"January 3, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.33,date:"2024-01-03T10:00:00.000Z"}]},r={authorsImageUrls:[void 0]},d=[{value:"List Tables in the Database Using \\dt",id:"list-tables-in-the-database-using-dt",level:2},{value:"Query Tables from the pg_tables Table",id:"query-tables-from-the-pg_tables-table",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"\\dt"})," or ",(0,a.jsx)(t.code,{children:"\\dt+"})," in the ",(0,a.jsx)(t.code,{children:"psql"})," tool to list all tables in the current database."]}),"\n",(0,a.jsxs)(t.li,{children:["Query all tables from the ",(0,a.jsx)(t.code,{children:"pg_tables"})," table."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"list-tables-in-the-database-using-dt",children:"List Tables in the Database Using \\dt"}),"\n",(0,a.jsxs)(t.p,{children:["This example demonstrates the process of logging into the database using the ",(0,a.jsx)(t.code,{children:"psql"})," tool and listing tables in the database. Follow these steps:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Log in to the PostgreSQL server using the postgres user:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'[~] psql -U postgres\npsql (14.4)\nType "help" for help.\n'})}),"\n",(0,a.jsx)(t.p,{children:"Note: You can also use any user with the appropriate database permissions."}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Select the ",(0,a.jsx)(t.code,{children:"testdb"})," database with the following statement:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"\\c testdb;\n"})}),"\n",(0,a.jsx)(t.p,{children:"If the database hasn't been created yet, run the following statement:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"CREATE DATABASE testdb;\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["Use the ",(0,a.jsx)(t.code,{children:"\\dt"})," command to list all tables in the ",(0,a.jsx)(t.code,{children:"testdb"})," database:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"\\dt\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"            List of relations\nSchema |      Name      | Type  |  Owner\n--------+----------------+-------+----------\npublic | mytable        | table | postgres\npublic | product        | table | postgres\npublic | test_date      | table | postgres\npublic | test_time      | table | postgres\npublic | test_timestamp | table | postgres\npublic | week_day_sales | table | postgres\n(6 rows)\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["If you want to view more information about the tables, use the ",(0,a.jsx)(t.code,{children:"\\dt+"})," command:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"\\dt+\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"                                          List of relations\nSchema |      Name      | Type  |  Owner   | Persistence | Access method |    Size    | Description\n--------+----------------+-------+----------+-------------+---------------+------------+-------------\npublic | mytable        | table | postgres | permanent   | heap          | 16 kB      |\npublic | product        | table | postgres | permanent   | heap          | 16 kB      |\npublic | test_date      | table | postgres | permanent   | heap          | 8192 bytes |\npublic | test_time      | table | postgres | permanent   | heap          | 8192 bytes |\npublic | test_timestamp | table | postgres | permanent   | heap          | 8192 bytes |\npublic | week_day_sales | table | postgres | permanent   | heap          | 8192 bytes |\n(6 rows)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can see that the input of ",(0,a.jsx)(t.code,{children:"\\dt+"})," includes columns such as ",(0,a.jsx)(t.code,{children:"Persistence"}),", ",(0,a.jsx)(t.code,{children:"Access method"}),", ",(0,a.jsx)(t.code,{children:"Size"}),", and ",(0,a.jsx)(t.code,{children:"Description"})," in addition to the output of ",(0,a.jsx)(t.code,{children:"\\dt"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"query-tables-from-the-pg_tables-table",children:"Query Tables from the pg_tables Table"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to the ",(0,a.jsx)(t.code,{children:"\\dt"})," and ",(0,a.jsx)(t.code,{children:"\\dt+"})," commands, you can also query all tables in the current data from the ",(0,a.jsx)(t.code,{children:"pg_tables"})," table."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"pg_tables"})," table is a built-in table in PostgreSQL that stores all tables in the database."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"SELECT * FROM pg_tables\nWHERE schemaname = 'public';\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:" schemaname |   tablename    | tableowner | tablespace | hasindexes | hasrules | hastriggers | rowsecurity\n------------+----------------+------------+------------+------------+----------+-------------+-------------\n public     | test_date      | postgres   |            | t          | f        | f           | f\n public     | test_time      | postgres   |            | t          | f        | f           | f\n public     | test_timestamp | postgres   |            | t          | f        | f           | f\n public     | week_day_sales | postgres   |            | t          | f        | f           | f\n public     | mytable        | postgres   |            | f          | f        | f           | f\n public     | product        | postgres   |            | t          | f        | f           | f\n(6 rows)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"PostgreSQL provides two ways to list all tables in a database:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"\\dt"})," or ",(0,a.jsx)(t.code,{children:"\\dt+"})," in the psql tool to list all tables in the current database."]}),"\n",(0,a.jsxs)(t.li,{children:["Query all tables from the ",(0,a.jsx)(t.code,{children:"pg_tables"})," table."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In MySQL, you can use the ",(0,a.jsx)(t.code,{children:"SHOW TABLES"})," command to list databases."]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},7214:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var a=s(959);const l={},n=a.createContext(l);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);