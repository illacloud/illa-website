"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[5938],{576:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var t=a(1527),i=a(7214);const n={slug:"build-dashboard",title:"Quickly create a personalized data dashboard for your boss",description:"Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time.After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly.Using efficient tools to leave work early every day.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/build-dashboard/cover.png",tags:["data dashboard"],date:"2024-01-01T10:00",is_featured:!0},o=void 0,l={permalink:"/illa-website/de/blog/build-dashboard",source:"@site/blog/build-dashboard/build-dashboard.md",title:"Quickly create a personalized data dashboard for your boss",description:"Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time.After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly.Using efficient tools to leave work early every day.",date:"2024-01-01T10:00:00.000Z",formattedDate:"1. Januar 2024",tags:[{label:"data dashboard",permalink:"/illa-website/de/blog/tags/data-dashboard"}],readingTime:3.12,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"build-dashboard",title:"Quickly create a personalized data dashboard for your boss",description:"Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time.After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly.Using efficient tools to leave work early every day.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/build-dashboard/cover.png",tags:["data dashboard"],date:"2024-01-01T10:00",is_featured:!0},unlisted:!1,prevItem:{title:"Best Open-Source Low-Code Platforms in 2024",permalink:"/illa-website/de/blog/top-5-best-open-source-low-code-platforms-in-2024"},nextItem:{title:"Top 7 Redis GUI Tools in 2023",permalink:"/illa-website/de/blog/top-7-redis-gui-tools-in-2023"},relatedPosts:[{title:"I created a tool that helps non-front-end engineers quickly build beautiful Web UIs.",description:"Despite my background as a Backend Engineer, I frequently found myself immersed in creating numerous data dashboards and admin panels to cater to my colleagues' diverse needs. From showcasing multifaceted business data to visualizing CI/CD tasks and crafting a special Admin Panel for a Christmas event, I managed to accomplish all these in just 14 days.",permalink:"/illa-website/de/blog/backend-create-web-ui",formattedDate:"3. Januar 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:1.47,date:"2024-01-03T10:00:00.000Z"}],authorPosts:[]},r={authorsImageUrls:[void 0]},d=[{value:"Some issues in the construction",id:"some-issues-in-the-construction",level:2},{value:"How to solve",id:"how-to-solve",level:2},{value:"AI-driven",id:"ai-driven",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const s={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time."}),"\n",(0,t.jsx)(s.p,{children:"After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly."}),"\n",(0,t.jsx)(s.p,{children:"Using efficient tools to leave work early every day."}),"\n",(0,t.jsx)(s.h2,{id:"some-issues-in-the-construction",children:"Some issues in the construction"}),"\n",(0,t.jsx)(s.p,{children:"The business of each company is distributed across different systems, and there are some connections between these systems. Some data needs to be queried using databases:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Postgresql"}),"\n",(0,t.jsx)(s.li,{children:"Mysql"}),"\n",(0,t.jsx)(s.li,{children:"MongoDB"}),"\n",(0,t.jsx)(s.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Some data comes from different types of microservices, possibly obtained from a specific API:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"User Detail API"}),"\n",(0,t.jsx)(s.li,{children:"Product Detail API"}),"\n",(0,t.jsx)(s.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The most challenging thing is that some data requires merging and secondary processing of both database and API data."}),"\n",(0,t.jsx)(s.p,{children:"These issues make it very troublesome to build a personalized data dashboard. If starting development from scratch, we need to adapt to different data sources, leading to a steep increase in engineering costs."}),"\n",(0,t.jsx)(s.p,{children:'Therefore, we need a flexible tool for displaying data dashboards, as "development" is not the most important; "display" is.'}),"\n",(0,t.jsx)(s.p,{children:"This tool needs some objective advantages:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Rich charts to display data from different dimensions."}),"\n",(0,t.jsx)(s.li,{children:"Support for various mainstream data sources."}),"\n",(0,t.jsx)(s.li,{children:"Simple installation and usage."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-solve",children:"How to solve"}),"\n",(0,t.jsx)(s.p,{children:"Here, I recommend a user-friendly open-source project called ILLA Cloud. ILLA Cloud is a low-code tool specifically designed to address scenarios with personalized requirements."}),"\n",(0,t.jsxs)(s.p,{children:["\ud83d\udcd9 Official website: ",(0,t.jsx)(s.a,{href:"https://illa.cloud?utm_source=juejin",children:"https://illa.cloud"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u23ec Github repository: ",(0,t.jsx)(s.a,{href:"https://github.com/illacloud/illa-builder",children:"https://github.com/illacloud/illa-builder"})]}),"\n",(0,t.jsx)(s.p,{children:"\u2b50 Github Stars: 9k"}),"\n",(0,t.jsx)(s.p,{children:"Below is a demo using fake data, depicting the sales situation of a product in a company, including:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Monthly sales growth trends"}),"\n",(0,t.jsx)(s.li,{children:"Monthly revenue"}),"\n",(0,t.jsx)(s.li,{children:"Total revenue obtained"}),"\n",(0,t.jsx)(s.li,{children:"Number of purchasers"}),"\n",(0,t.jsx)(s.li,{children:"Detailed information about each purchasing user"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://cdn.illacloud.com/illa-website/blog/build-dashboard/data-dashboard.png",alt:"data_dashboard"})}),"\n",(0,t.jsx)(s.p,{children:"This chart uses several components:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Data Grid"}),"\n",(0,t.jsx)(s.li,{children:"Chart"}),"\n",(0,t.jsx)(s.li,{children:"Statistic"}),"\n",(0,t.jsx)(s.li,{children:"Menu"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"It was quickly built through drag and drop. The data sources come from:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Supabase: A Serverless Postgresql"}),"\n",(0,t.jsx)(s.li,{children:"API"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"ILLA supports various data sources, allowing quick retrieval of data from a wide range of mainstream sources."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://cdn.illacloud.com/illa-website/blog/build-dashboard/integration.png",alt:"integration"})}),"\n",(0,t.jsx)(s.h2,{id:"ai-driven",children:"AI-driven"}),"\n",(0,t.jsx)(s.p,{children:"ILLA not only provides a dashboard but also allows the queried data to be processed further using LLM (Language Model). For example, a set of messy data can be processed into another format as required, enabling alignment of data from multiple sources."}),"\n",(0,t.jsx)(s.h2,{id:"advantages",children:"Advantages"}),"\n",(0,t.jsx)(s.p,{children:"Building a beautiful dashboard is quick and easy using drag and drop within a few minutes."}),"\n",(0,t.jsx)(s.p,{children:"Moreover, compared to various traditional BI tools, ILLA Cloud:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Supports data querying from both databases and APIs"}),"\n",(0,t.jsx)(s.li,{children:"Simple installation, directly usable on the web page without any downloads"}),"\n",(0,t.jsx)(s.li,{children:"For secondary data processing, uses Javascript for direct and simple processing"}),"\n",(0,t.jsx)(s.li,{children:"Supports various mainstream charts, meeting most requirements"}),"\n",(0,t.jsx)(s.li,{children:"The Transformer feature effectively solves the problem of merging and processing data between multiple sources, eliminating worries about data format issues"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"As an open-source project, ILLA Cloud also supports secondary development, with an active community for collaboration with other developers. No need to worry about maintenance issues."}),"\n",(0,t.jsx)(s.p,{children:"Additionally, ILLA Cloud can not only build data dashboards but also quickly create exclusive management dashboards, accelerating your business iteration."}),"\n",(0,t.jsx)(s.p,{children:"As a low-code tool, ILLA Cloud also supports collaboration among multiple people, allowing them to build dashboards together."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://cdn.illacloud.com/illa-website/blog/build-dashboard/collaboration.png",alt:"collaboration"})}),"\n",(0,t.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"After using ILLA Cloud, there's no need to worry about the boss's personalized requirements. Within a few minutes, you can build a personalized data dashboard for the boss, becoming a highly efficient employee. Why not give it a try now!"})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7214:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>o});var t=a(959);const i={},n=t.createContext(i);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);