"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[5376],{2136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(1527),s=n(7214);const i={title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",slug:"react-crm-with-refine",tags:["refine","react"],authors:{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png"},is_featured:!0,image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-02-refine-crm-overview/social.jpg",hide_table_of_contents:!1},r=void 0,o={permalink:"/illa-website/zh/blog/react-crm-with-refine",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2023-10-02-refine-crm-overview.md",title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",date:"2023-10-02T00:00:00.000Z",formattedDate:"2023\u5e7410\u67082\u65e5",tags:[{label:"refine",permalink:"/illa-website/zh/blog/tags/refine"},{label:"react",permalink:"/illa-website/zh/blog/tags/react"}],readingTime:5.1,hasTruncateMarker:!1,authors:[{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png",imageURL:"https://github.com/wgao19.png"}],frontMatter:{title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",slug:"react-crm-with-refine",tags:["refine","react"],authors:{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png",imageURL:"https://github.com/wgao19.png"},is_featured:!0,image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-02-refine-crm-overview/social.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Kubectl \u4f5c\u5f0a\u6a21\u5f0f\u2014\u2014\u4f7f\u7528\u793a\u4f8b",permalink:"/illa-website/zh/blog/kubectl-cheat-sheat-table"},nextItem:{title:"\u6b22\u8fce\u4f7f\u7528",permalink:"/illa-website/zh/blog/\u6b22\u8fce"},relatedPosts:[],authorPosts:[]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features of the CRM App",id:"key-features-of-the-crm-app",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Calendar Integration",id:"calendar-integration",level:3},{value:"Scrumboard-Project Kanban",id:"scrumboard-project-kanban",level:3},{value:"Sales Pipeline",id:"sales-pipeline",level:3},{value:"Companies",id:"companies",level:3},{value:"Contacts",id:"contacts",level:3},{value:"Quotes",id:"quotes",level:3},{value:"Administration",id:"administration",level:3},{value:"Authentication &amp; Authorization",id:"authentication--authorization",level:3},{value:"Technologies Used",id:"technologies-used",level:2},{value:"1. refine",id:"1-refine",level:3},{value:"2. Ant Design",id:"2-ant-design",level:3},{value:"3. GraphQL",id:"3-graphql",level:3},{value:"Best Practices and Ecosystem Integration",id:"best-practices-and-ecosystem-integration",level:2},{value:"Where Can You Use This CRM As A Reference Template?",id:"where-can-you-use-this-crm-as-a-reference-template",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/CRM-app/crm-general.gif",alt:"Image description"})}),"\n",(0,a.jsx)(t.p,{children:"I want to introduce our newest example app \u2013 a full-fledged React CRM (Customer Relationship Management) application built using refine, Ant Design, and GraphQL."}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udc49 ",(0,a.jsx)(t.a,{href:"https://example.crm.refine.dev/",children:"Live Demo"})]}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udc49 ",(0,a.jsx)(t.a,{href:"https://github.com/refinedev/refine/tree/master/examples/app-crm",children:"You can find the source code on GitHub here"})]}),"\n",(0,a.jsx)(t.p,{children:"This example is open-source, which means anyone can freely utilize and customize the source code as they see fit. It's not just another application; it's a comprehensive solution that boasts all the features and functionalities required for an accurate enterprise-level application."}),"\n",(0,a.jsx)(t.p,{children:"Moreover, this application serves as a guiding light for all developers. Whether you're a seasoned pro or just starting, our project is a valuable resource that can be used as a reference to better understand best practices and modern development techniques."}),"\n",(0,a.jsx)(t.p,{children:"We'll publish an article series and Video tutorials on YouTube on building this CRM app from scratch. You can follow the refine to get notified when it's ready!"}),"\n",(0,a.jsxs)(t.p,{children:["Twitter: ",(0,a.jsx)(t.a,{href:"https://twitter.com/refine_dev",children:"https://twitter.com/refine_dev"}),"\nGitHub: ",(0,a.jsx)(t.a,{href:"https://github.com/refinedev/refine",children:"https://github.com/refinedev/refine"})]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"This article briefly overviews the CRM application built using refine, an open-source React framework designed for rapidly developing web applications."}),"\n",(0,a.jsx)(t.p,{children:"We'll explore the key features of our CRM app, the technologies we used, and how you can adapt this template for various business needs."}),"\n",(0,a.jsx)(t.p,{children:"Step we'll cover:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#key-features-of-the-crm-app",children:"Key Features of the CRM App"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#technologies-used",children:"Technologies Used"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#best-practices-and-ecosystem-integration",children:"Best Practices and Ecosystem Integration"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#where-can-you-use-this-crm-as-a-reference-template",children:"Where Can You Use This CRM As A Reference Template?"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"key-features-of-the-crm-app",children:"Key Features of the CRM App"}),"\n",(0,a.jsx)(t.p,{children:"Our CRM application is feature-rich and comes with everything you need to manage customer relationships efficiently:"}),"\n",(0,a.jsx)(t.h3,{id:"dashboard",children:"Dashboard"}),"\n",(0,a.jsx)(t.p,{children:"The Dashboard provides an at-a-glance overview of your CRM activities. It displays key metrics, recent customer interactions, and upcoming events, offering valuable insights to help you make informed decisions."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/halx7sfl9ctke1fu3w35.png",alt:"Image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"calendar-integration",children:"Calendar Integration"}),"\n",(0,a.jsx)(t.p,{children:"Effortlessly manage appointments, meetings, and important events with the integrated Calendar feature. Stay organized and ensure you never miss a crucial interaction with your customers."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m2v8ghazuheiznefwat9.png",alt:"Image description"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"scrumboard-project-kanban",children:"Scrumboard-Project Kanban"}),"\n",(0,a.jsx)(t.p,{children:"Our Scrumboard or Project Kanban page streamlines project management. Visualize project progress, manage tasks, and facilitate team collaboration with ease. Move tasks through customizable boards to keep your projects on track."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0hcll7tbqx3t71i6v7a9.png",alt:"Image description"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"sales-pipeline",children:"Sales Pipeline"}),"\n",(0,a.jsx)(t.p,{children:"Effectively manage your sales process from lead generation to deal closure. The Sales Pipeline provides a visual representation of your sales stages, helping your team prioritize leads and track conversions."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5uoj722wasvw2fx8z49.png",alt:"Image description"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"companies",children:"Companies"}),"\n",(0,a.jsx)(t.p,{children:"The Companies page allows you to organize and categorize your business contacts. Maintain detailed profiles for each company, including contact information, communication history, and associated contacts."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gjlahcc1icfthu2n31ar.png",alt:"Imag"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"contacts",children:"Contacts"}),"\n",(0,a.jsx)(t.p,{children:"Manage individual contacts efficiently using the Contacts page. Keep track of customer interactions, schedule follow-ups, and access critical contact information quickly."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4c0ef7tv7nktax4gt3oz.png",alt:"Imag"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"quotes",children:"Quotes"}),"\n",(0,a.jsx)(t.p,{children:"Create, send, and manage quotes seamlessly with the Quotes feature. Generate professional quotes for your customers, track their status, and convert them into sales."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9rqj0pzgkrure7ov5mr9.png",alt:"Image"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"administration",children:"Administration"}),"\n",(0,a.jsx)(t.p,{children:"The Administration section empowers you to configure and customize your CRM application to suit your specific business needs. Manage user roles, access permissions, and system settings effortlessly."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m5deq6ceue79kloeuryz.png",alt:"Image description"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"authentication--authorization",children:"Authentication & Authorization"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m1r04i2h0cf1jegasbte.png",alt:"Image description"})}),"\n",(0,a.jsx)(t.p,{children:"This example app is a comprehensive set of features that ensures you can streamline your customer interactions, project management, and sales processes, all within a single, user-friendly platform. Whether you're managing contacts, tracking sales, or overseeing projects, our CRM app provides the tools you need for success."}),"\n",(0,a.jsx)(t.h2,{id:"technologies-used",children:"Technologies Used"}),"\n",(0,a.jsx)(t.p,{children:"Our CRM app's modular structure and use of open-source tools make it adaptable to various business needs. So you can build all kinds of web apps like internal tools, admin panels, or dashboards on top of it."}),"\n",(0,a.jsx)(t.p,{children:"To bring our CRM app to life, we leveraged several cutting-edge technologies:"}),"\n",(0,a.jsx)(t.h3,{id:"1-refine",children:"1. refine"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/refinedev/refine",children:"refine"})," served as the backbone of our CRM application. It offers a wide range of tools and components for easily building data-intensive applications."]}),"\n",(0,a.jsx)(t.p,{children:"refine's internal hooks and components simplify the development process and eliminate repetitive tasks by providing industry-standard solutions for crucial aspects of a project, including authentication, access control, routing, networking, state management, and i18n."}),"\n",(0,a.jsx)(t.h3,{id:"2-ant-design",children:"2. Ant Design"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://ant.design/",children:"Ant Design"}),", a popular UI library, provided the sleek and responsive user interface that our CRM app needed. Its pre-built components saved us time and effort."]}),"\n",(0,a.jsx)(t.p,{children:"It's consistent and polished UI components ensured a professional and user-friendly interface. refine has a built-in integration for Ant Design."}),"\n",(0,a.jsx)(t.h3,{id:"3-graphql",children:"3. GraphQL"}),"\n",(0,a.jsxs)(t.p,{children:["We used ",(0,a.jsx)(t.a,{href:"https://graphql.org/",children:"GraphQL"})," for effective data retrieval and updating from our server. Additionally, we integrated ",(0,a.jsx)(t.a,{href:"https://www.apollographql.com/docs/react/data/subscriptions/",children:"GraphQL Subscriptions"})," to manage real-time modifications."]}),"\n",(0,a.jsx)(t.p,{children:"For instance, on the Project Kanban page, tasks get updated automatically when cards are dragged and dropped between sections."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/CRM-app/real-time.gif",alt:"Image"})}),"\n",(0,a.jsx)(t.p,{children:"GraphQL's efficient data-fetching capabilities made working with large datasets a breeze. It's flexibility allowed us to tailor our queries to our exact requirements."}),"\n",(0,a.jsx)(t.p,{children:"refine has built-in data provider support for GraphQL.You can set it up during the project creation phase."}),"\n",(0,a.jsx)(t.h2,{id:"best-practices-and-ecosystem-integration",children:"Best Practices and Ecosystem Integration"}),"\n",(0,a.jsx)(t.p,{children:"Throughout the development process, we adhered to best practices and incorporated elements from the broader ecosystem. This ensures our CRM app is not only functional but also scalable and maintainable."}),"\n",(0,a.jsx)(t.p,{children:"The group responsible for the CRM example app is the core refine framework team. Feel free to explore the best practices within the ecosystem!"}),"\n",(0,a.jsx)(t.h2,{id:"where-can-you-use-this-crm-as-a-reference-template",children:"Where Can You Use This CRM As A Reference Template?"}),"\n",(0,a.jsx)(t.p,{children:"Our CRM template isn't limited to just one use case. You can adapt it for various purposes, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"B2B Applications"}),": Streamline customer interactions in a business-to-business context."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Internal Tools"}),": Use it as an internal tool to manage employee or departmental tasks and interactions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"All CRUD Applications"}),": The template's versatility means it can serve as the foundation for creating all sorts of CRUD applications."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this article, we've introduced you to our CRM application built with refine. We've highlighted its key features, the technologies we used, and the advantages of our approach. With this CRM template, you have the power to tailor your customer relationship management system to meet your unique business needs. Whether you're running a B2B operation, need an efficient internal tool, or want a versatile CRUD application, our CRM template has you covered."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7214:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(959);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);