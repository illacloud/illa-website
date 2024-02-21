"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[2525],{9551:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=t(1527),o=t(7214);const l={slug:"postgresql-select",title:"PostgreSQL SELECT Statement",description:"This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp",tags:["postgresql","select"],date:"2024-02-21T10:00"},a=void 0,r={permalink:"/illa-website/blog/postgresql-select",source:"@site/blog/postgresql-select/postgresql-select.md",title:"PostgreSQL SELECT Statement",description:"This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.",date:"2024-02-21T10:00:00.000Z",formattedDate:"February 21, 2024",tags:[{label:"postgresql",permalink:"/illa-website/blog/tags/postgresql"},{label:"select",permalink:"/illa-website/blog/tags/select"}],readingTime:5.82,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"postgresql-select",title:"PostgreSQL SELECT Statement",description:"This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/posgresql-select/cover.webp",tags:["postgresql","select"],date:"2024-02-21T10:00"},unlisted:!1,nextItem:{title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",permalink:"/illa-website/blog/postgresql-isnull"},relatedPosts:[{title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",permalink:"/illa-website/blog/list-tables-in-postgresql",formattedDate:"January 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.91,date:"2024-01-04T10:00:00.000Z"},{title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.",permalink:"/illa-website/blog/postgresql-isnull",formattedDate:"February 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.435,date:"2024-02-04T11:00:00.000Z"}],authorPosts:[]},i={authorsImageUrls:[void 0]},c=[{value:"PostgreSQL SELECT Syntax",id:"postgresql-select-syntax",level:2},{value:"PostgreSQL SELECT Examples",id:"postgresql-select-examples",level:2},{value:"Query One Column with PostgreSQL SELECT",id:"query-one-column-with-postgresql-select",level:3},{value:"Query Multiple Columns with PostgreSQL SELECT",id:"query-multiple-columns-with-postgresql-select",level:3},{value:"Query All Columns from a Table with PostgreSQL SELECT",id:"query-all-columns-from-a-table-with-postgresql-select",level:3},{value:"Query with Expressions in PostgreSQL SELECT",id:"query-with-expressions-in-postgresql-select",level:3},{value:"Calculate Expressions with PostgreSQL SELECT",id:"calculate-expressions-with-postgresql-select",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This article introduces the basic form of the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement in ",(0,n.jsx)(s.code,{children:"PostgreSQL"}),", as well as how to use ",(0,n.jsx)(s.code,{children:"SELECT"})," statements to query data from tables."]}),"\n",(0,n.jsxs)(s.p,{children:["In ",(0,n.jsx)(s.code,{children:"PostgreSQL"}),", the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement."]}),"\n",(0,n.jsx)(s.h2,{id:"postgresql-select-syntax",children:"PostgreSQL SELECT Syntax"}),"\n",(0,n.jsxs)(s.p,{children:["Let's start with the basic form of a ",(0,n.jsx)(s.code,{children:"SELECT"})," statement for retrieving data from a single table."]}),"\n",(0,n.jsxs)(s.p,{children:["The syntax of a ",(0,n.jsx)(s.code,{children:"SELECT"})," statement is shown below:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    expr_list\nFROM \n    table_name\n[other_clauses];\n"})}),"\n",(0,n.jsx)(s.p,{children:"In this syntax:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"SELECT"})," and ",(0,n.jsx)(s.code,{children:"FROM"})," are keywords."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"expr_list"})," is a list of columns or expressions to select. Multiple columns or expressions need to be separated by commas."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"table_name"})," is the data table to query from."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"FROM table_name"})," is optional. You can omit the ",(0,n.jsx)(s.code,{children:"FROM"})," clause if you are not querying rows from any table."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"other_clauses"})," are clauses supported by the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement. The ",(0,n.jsx)(s.code,{children:"SELECT"})," statement supports many clauses including:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.code,{children:"DISTINCT"})," operator to select distinct rows."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.code,{children:"ORDER BY"})," clause to sort rows."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.code,{children:"WHERE"})," clause to filter rows."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.code,{children:"LIMIT"})," or ",(0,n.jsx)(s.code,{children:"FETCH"})," clause to select a subset of rows from the table."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.code,{children:"GROUP BY"})," clause to group rows."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.code,{children:"HAVING"})," clause to filter groups."]}),"\n",(0,n.jsxs)(s.li,{children:["Use joins such as ",(0,n.jsx)(s.code,{children:"INNER JOIN"}),", ",(0,n.jsx)(s.code,{children:"LEFT JOIN"}),", ",(0,n.jsx)(s.code,{children:"FULL OUTER JOIN"}),", ",(0,n.jsx)(s.code,{children:"CROSS JOIN"})," to join with other tables."]}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"UNION"}),", ",(0,n.jsx)(s.code,{children:"INTERSECT"})," and ",(0,n.jsx)(s.code,{children:"EXCEPT"})," to perform set operations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Note that SQL keywords are case insensitive. However, it is a good coding practice to write SQL keywords in uppercase for better readability of SQL code."}),"\n",(0,n.jsxs)(s.p,{children:["In this tutorial, we'll focus on the basic usage of the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement. The usage of other related clauses will be covered in subsequent tutorials."]}),"\n",(0,n.jsx)(s.h2,{id:"postgresql-select-examples",children:"PostgreSQL SELECT Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Let's look at some examples of using PostgreSQL ",(0,n.jsx)(s.code,{children:"SELECT"})," statements."]}),"\n",(0,n.jsxs)(s.p,{children:["We'll use the ",(0,n.jsx)(s.code,{children:"customer"})," table from the ",(0,n.jsx)(s.code,{children:"PostgreSQL Sakila"})," sample database for the demonstration."]}),"\n",(0,n.jsx)(s.h3,{id:"query-one-column-with-postgresql-select",children:"Query One Column with PostgreSQL SELECT"}),"\n",(0,n.jsxs)(s.p,{children:["The following ",(0,n.jsx)(s.code,{children:"SELECT"})," statement finds all customer first names from the ",(0,n.jsx)(s.code,{children:"customer"})," table:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT first_name FROM customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is partial output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"first_name\n------------  \nMARY\nPATRICIA\nLINDA\nBARBARA\nELIZABETH\nJENNIFER\nMARIA  \nSUSAN\nMARGARET\nDOROTHY\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Note that we added a semicolon (;) at the end of the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement. The semicolon is not part of the SQL statement. It is used to signal the end of the SQL statement to PostgreSQL. Semicolon is also used to separate two SQL statements."]}),"\n",(0,n.jsx)(s.h3,{id:"query-multiple-columns-with-postgresql-select",children:"Query Multiple Columns with PostgreSQL SELECT"}),"\n",(0,n.jsxs)(s.p,{children:["If you want to know the customer's first name, last name, and email, you can specify these column names in the ",(0,n.jsx)(s.code,{children:"SELECT"})," clause as shown in the following query:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    first_name,\n    last_name,\n    email\nFROM\n    customer; \n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is partial output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"first_name | last_name |                email                \n------------+-----------+-------------------------------------\nMARY       | SMITH     | MARY.SMITH@sakilacustomer.org       \nPATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org\nLINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org   \nBARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org    \nELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  \nJENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org   \nMARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org     \nSUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org     \nMARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org   \nDOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org\n"})}),"\n",(0,n.jsx)(s.h3,{id:"query-all-columns-from-a-table-with-postgresql-select",children:"Query All Columns from a Table with PostgreSQL SELECT"}),"\n",(0,n.jsxs)(s.p,{children:["If you want to find all columns from the ",(0,n.jsx)(s.code,{children:"customer"})," table using the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement, use the following statement:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is partial output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:" customer_id | store_id | first_name | last_name |                email                 | address_id | activebool | create_date |     last_update     | active   \n-------------+----------+------------+-----------+-------------------------------------+------------+------------+-------------+---------------------+---------\n           1 |        1 | MARY       | SMITH     | MARY.SMITH@sakilacustomer.org        |          5 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           2 |        1 | PATRICIA   | JOHNSON   | PATRICIA.JOHNSON@sakilacustomer.org |          6 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           3 |        1 | LINDA      | WILLIAMS  | LINDA.WILLIAMS@sakilacustomer.org   |          7 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           4 |        2 | BARBARA    | JONES     | BARBARA.JONES@sakilacustomer.org    |          8 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           5 |        1 | ELIZABETH  | BROWN     | ELIZABETH.BROWN@sakilacustomer.org  |          9 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           6 |        2 | JENNIFER   | DAVIS     | JENNIFER.DAVIS@sakilacustomer.org   |         10 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           7 |        1 | MARIA      | MILLER    | MARIA.MILLER@sakilacustomer.org     |         11 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           8 |        2 | SUSAN      | WILSON    | SUSAN.WILSON@sakilacustomer.org     |         12 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n           9 |        2 | MARGARET   | MOORE     | MARGARET.MOORE@sakilacustomer.org   |         13 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n          10 |        1 | DOROTHY    | TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org   |         14 | t          | 2006-02-14  | 2006-02-15 04:57:20 |       1\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In this example, we used the asterisk (",(0,n.jsxs)(s.em,{children:[") in the ",(0,n.jsx)(s.code,{children:"SELECT"})," clause which is shorthand for all columns. The asterisk ("]}),") allows us to type less without having to list out all column names in the ",(0,n.jsx)(s.code,{children:"customer"})," table."]}),"\n",(0,n.jsxs)(s.p,{children:["However, using asterisk (*) in ",(0,n.jsx)(s.code,{children:"SELECT"})," statements is not a good practice for the following reasons:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Database performance. Assuming you have a table with lots of columns and large amounts of data, a ",(0,n.jsx)(s.code,{children:"SELECT"})," statement with asterisk (*) shorthand will select data from all columns of the table which may not be necessary for the application."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Application performance. Retrieving unnecessary data from the database increases traffic between the database server and application server. Hence your application's response time may be slower and less scalable."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For these reasons, it is best to explicitly specify column names in the ",(0,n.jsx)(s.code,{children:"SELECT"})," clause to only get required data from the database."]}),"\n",(0,n.jsx)(s.p,{children:"You should only use the asterisk (*) shorthand for adhoc queries that check database data."}),"\n",(0,n.jsx)(s.h3,{id:"query-with-expressions-in-postgresql-select",children:"Query with Expressions in PostgreSQL SELECT"}),"\n",(0,n.jsxs)(s.p,{children:["In addition to column names, you can also use expressions in the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement. The following example uses a ",(0,n.jsx)(s.code,{children:"SELECT"})," statement to return the full name and email of all customers:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\n    first_name || ' ' || last_name, \n    email\nFROM\n    customer;\n"})}),"\n",(0,n.jsx)(s.p,{children:"Here is partial output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"     ?column?      |                 email                 \n-------------------+-------------------------------------\n MARY SMITH        | MARY.SMITH@sakilacustomer.org\n PATRICIA JOHNSON  | PATRICIA.JOHNSON@sakilacustomer.org  \n LINDA WILLIAMS    | LINDA.WILLIAMS@sakilacustomer.org\n BARBARA JONES     | BARBARA.JONES@sakilacustomer.org\n ELIZABETH BROWN   | ELIZABETH.BROWN@sakilacustomer.org\n JENNIFER DAVIS    | JENNIFER.DAVIS@sakilacustomer.org\n MARIA MILLER      | MARIA.MILLER@sakilacustomer.org\n SUSAN WILSON      | SUSAN.WILSON@sakilacustomer.org\n MARGARET MOORE    | MARGARET.MOORE@sakilacustomer.org\n DOROTHY TAYLOR    | DOROTHY.TAYLOR@sakilacustomer.org   \n"})}),"\n",(0,n.jsxs)(s.p,{children:["In this example, we concatenated each customer's first name, space and last name using the string concatenation operator ",(0,n.jsx)(s.code,{children:"||"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"calculate-expressions-with-postgresql-select",children:"Calculate Expressions with PostgreSQL SELECT"}),"\n",(0,n.jsxs)(s.p,{children:["If you just want to calculate the result of an expression, you can omit the ",(0,n.jsx)(s.code,{children:"FROM"})," clause in the ",(0,n.jsx)(s.code,{children:"SELECT"})," statement. The following ",(0,n.jsx)(s.code,{children:"SELECT"})," statement is used to calculate the result of ",(0,n.jsx)(s.code,{children:"5 * 3"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT 5 * 3;\n"})}),"\n",(0,n.jsx)(s.p,{children:"The output is:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"?column?\n----------\n       15\n"})}),"\n",(0,n.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(s.p,{children:["In this tutorial, you learned how to use the basic form of PostgreSQL ",(0,n.jsx)(s.code,{children:"SELECT"})," statements to query data from a single table. You can omit the ",(0,n.jsx)(s.code,{children:"FROM"})," clause in ",(0,n.jsx)(s.code,{children:"SELECT"})," statements if you do not need to query data from any table."]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7214:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>a});var n=t(959);const o={},l=n.createContext(o);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);