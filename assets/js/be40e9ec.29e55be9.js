"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3157],{4654:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=s(1527),l=s(7214);const n={slug:"list-tables-in-postgresql",title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",authors:"owen",image:"https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp",tags:["postgres","postgresql","database","list","tables","psql"],date:"2024-01-04T10:00"},o=void 0,i={permalink:"/illa-website/blog/list-tables-in-postgresql",source:"@site/blog/list-tables-in-postgresql/list-tables-in-postgresql.md",title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",date:"2024-01-04T10:00:00.000Z",formattedDate:"January 4, 2024",tags:[{label:"postgres",permalink:"/illa-website/blog/tags/postgres"},{label:"postgresql",permalink:"/illa-website/blog/tags/postgresql"},{label:"database",permalink:"/illa-website/blog/tags/database"},{label:"list",permalink:"/illa-website/blog/tags/list"},{label:"tables",permalink:"/illa-website/blog/tags/tables"},{label:"psql",permalink:"/illa-website/blog/tags/psql"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"list-tables-in-postgresql",title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",authors:"owen",image:"https://cdn.illacloud.com/illa-website/blog/list-tables-in-postgresql/cover.webp",tags:["postgres","postgresql","database","list","tables","psql"],date:"2024-01-04T10:00"},unlisted:!1,prevItem:{title:"Build core app dashboard at lightning speed",permalink:"/illa-website/blog/core-app-dashboard-2"},nextItem:{title:"How to build a custom low code CRM in 2024",permalink:"/illa-website/blog/low-code-crm"},relatedPosts:[{title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.",permalink:"/illa-website/blog/postgresql-isnull",formattedDate:"February 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.435,date:"2024-02-04T11:00:00.000Z"},{title:"Top 7 Database GUIs for SQL databases",description:"Database GUI tools make working with SQL databases much simpler and more efficient for developers. Many great database GUIs are available.",permalink:"/illa-website/blog/top-7-database-guis-for-sql-databases",formattedDate:"January 9, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.385,date:"2024-01-09T10:00:00.000Z"}],authorPosts:[{title:"Best tools for IT Support",description:"In ordinary companies, the IT department's Technical Support is responsible for managing the company's information system, database",permalink:"/illa-website/blog/it-support",formattedDate:"January 23, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:8.025,date:"2024-01-23T20:00:00.000Z"},{title:"How to build a custom low code CRM in 2024",description:"With the evolution of low-code platforms, an increasing number of businesses are turning to these platforms to build their operational systems.",permalink:"/illa-website/blog/low-code-crm",formattedDate:"January 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.76,date:"2024-01-04T10:00:00.000Z"},{title:"ILLA Flow: A javascript-driven, developer-friendly product for creating automate workflow",description:"ILLA Flow is a workflow product that allows you to construct a complete workflow in a manner similar to mind mapping.",permalink:"/illa-website/blog/launch-flow",formattedDate:"January 5, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:1.91,date:"2024-01-05T10:00:00.000Z"}]},r={authorsImageUrls:[void 0]},c=[{value:"List Tables in the Database Using \\dt",id:"list-tables-in-the-database-using-dt",level:2},{value:"Query Tables from the pg_tables Table",id:"query-tables-from-the-pg_tables-table",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"\\dt"})," or ",(0,a.jsx)(t.code,{children:"\\dt+"})," in the ",(0,a.jsx)(t.code,{children:"psql"})," tool to list all tables in the current database."]}),"\n",(0,a.jsxs)(t.li,{children:["Query all tables from the ",(0,a.jsx)(t.code,{children:"pg_tables"})," table."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"list-tables-in-the-database-using-dt",children:"List Tables in the Database Using \\dt"}),"\n",(0,a.jsxs)(t.p,{children:["This example demonstrates the process of logging into the database using the ",(0,a.jsx)(t.code,{children:"psql"})," tool and listing tables in the database. Follow these steps:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Log in to the PostgreSQL server using the postgres user:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'[~] psql -U postgres\npsql (14.4)\nType "help" for help.\n'})}),"\n",(0,a.jsx)(t.p,{children:"Note: You can also use any user with the appropriate database permissions."}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Select the ",(0,a.jsx)(t.code,{children:"testdb"})," database with the following statement:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"\\c testdb;\n"})}),"\n",(0,a.jsx)(t.p,{children:"If the database hasn't been created yet, run the following statement:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"CREATE DATABASE testdb;\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["Use the ",(0,a.jsx)(t.code,{children:"\\dt"})," command to list all tables in the ",(0,a.jsx)(t.code,{children:"testdb"})," database:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"\\dt\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"            List of relations\nSchema |      Name      | Type  |  Owner\n--------+----------------+-------+----------\npublic | mytable        | table | postgres\npublic | product        | table | postgres\npublic | test_date      | table | postgres\npublic | test_time      | table | postgres\npublic | test_timestamp | table | postgres\npublic | week_day_sales | table | postgres\n(6 rows)\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["If you want to view more information about the tables, use the ",(0,a.jsx)(t.code,{children:"\\dt+"})," command:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"\\dt+\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"                                          List of relations\nSchema |      Name      | Type  |  Owner   | Persistence | Access method |    Size    | Description\n--------+----------------+-------+----------+-------------+---------------+------------+-------------\npublic | mytable        | table | postgres | permanent   | heap          | 16 kB      |\npublic | product        | table | postgres | permanent   | heap          | 16 kB      |\npublic | test_date      | table | postgres | permanent   | heap          | 8192 bytes |\npublic | test_time      | table | postgres | permanent   | heap          | 8192 bytes |\npublic | test_timestamp | table | postgres | permanent   | heap          | 8192 bytes |\npublic | week_day_sales | table | postgres | permanent   | heap          | 8192 bytes |\n(6 rows)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can see that the input of ",(0,a.jsx)(t.code,{children:"\\dt+"})," includes columns such as ",(0,a.jsx)(t.code,{children:"Persistence"}),", ",(0,a.jsx)(t.code,{children:"Access method"}),", ",(0,a.jsx)(t.code,{children:"Size"}),", and ",(0,a.jsx)(t.code,{children:"Description"})," in addition to the output of ",(0,a.jsx)(t.code,{children:"\\dt"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"query-tables-from-the-pg_tables-table",children:"Query Tables from the pg_tables Table"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to the ",(0,a.jsx)(t.code,{children:"\\dt"})," and ",(0,a.jsx)(t.code,{children:"\\dt+"})," commands, you can also query all tables in the current data from the ",(0,a.jsx)(t.code,{children:"pg_tables"})," table."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"pg_tables"})," table is a built-in table in PostgreSQL that stores all tables in the database."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"SELECT * FROM pg_tables\nWHERE schemaname = 'public';\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:" schemaname |   tablename    | tableowner | tablespace | hasindexes | hasrules | hastriggers | rowsecurity\n------------+----------------+------------+------------+------------+----------+-------------+-------------\n public     | test_date      | postgres   |            | t          | f        | f           | f\n public     | test_time      | postgres   |            | t          | f        | f           | f\n public     | test_timestamp | postgres   |            | t          | f        | f           | f\n public     | week_day_sales | postgres   |            | t          | f        | f           | f\n public     | mytable        | postgres   |            | f          | f        | f           | f\n public     | product        | postgres   |            | t          | f        | f           | f\n(6 rows)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"PostgreSQL provides two ways to list all tables in a database:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"\\dt"})," or ",(0,a.jsx)(t.code,{children:"\\dt+"})," in the psql tool to list all tables in the current database."]}),"\n",(0,a.jsxs)(t.li,{children:["Query all tables from the ",(0,a.jsx)(t.code,{children:"pg_tables"})," table."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In MySQL, you can use the ",(0,a.jsx)(t.code,{children:"SHOW TABLES"})," command to list databases."]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7214:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var a=s(959);const l={},n=a.createContext(l);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);