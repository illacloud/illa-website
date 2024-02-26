"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[6939],{860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(1527),s=n(7214);const o={slug:"react-markdown",title:"Using Remark to Create an Interactive Table of Contents in a Next.js Blog",description:"A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp",tags:["postgresql","select"],date:"2024-02-26T10:00"},a=void 0,r={permalink:"/illa-website/blog/react-markdown",source:"@site/blog/raect-markdown/react-markdown.md",title:"Using Remark to Create an Interactive Table of Contents in a Next.js Blog",description:"A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content.",date:"2024-02-26T10:00:00.000Z",formattedDate:"February 26, 2024",tags:[{label:"postgresql",permalink:"/illa-website/blog/tags/postgresql"},{label:"select",permalink:"/illa-website/blog/tags/select"}],readingTime:9.965,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"react-markdown",title:"Using Remark to Create an Interactive Table of Contents in a Next.js Blog",description:"A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content.",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp",tags:["postgresql","select"],date:"2024-02-26T10:00"},unlisted:!1,nextItem:{title:"PostgreSQL SELECT Statement",permalink:"/illa-website/blog/postgresql-select"},relatedPosts:[{title:"How to list tables in PostgreSQL",description:"This article introduces two methods to list tables in a PostgreSQL database. PostgreSQL provides two ways to list all tables in a database.",permalink:"/illa-website/blog/list-tables-in-postgresql",formattedDate:"January 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.91,date:"2024-01-04T10:00:00.000Z"},{title:"Best Practices for PostgreSQL ISNULL and ISNOTNULL",description:"This article explains how to use the `IS NULL` operator in PostgreSQL to check if a value is `NULL`. PostgreSQL `IS NULL` is a boolean operator that checks if a value is `NULL`. A `NULL` value is a special value that indicates nothing, it is neither an empty string nor false.",permalink:"/illa-website/blog/postgresql-isnull",formattedDate:"February 4, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.435,date:"2024-02-04T11:00:00.000Z"},{title:"PostgreSQL SELECT Statement",description:"This article introduces the basic form of the `SELECT` statement in `PostgreSQL`, as well as how to use `SELECT` statements to query data from tables. In `PostgreSQL`, the `SELECT` statement is used to retrieve data from one or more tables and it is perhaps the most widely used statement.",permalink:"/illa-website/blog/postgresql-select",formattedDate:"February 21, 2024",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.82,date:"2024-02-21T10:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},d=[{value:"Remark and its Plugins",id:"remark-and-its-plugins",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Custom Remark Plugin to Extract Headings from Content",id:"custom-remark-plugin-to-extract-headings-from-content",level:2},{value:"Rendering the Table of Contents",id:"rendering-the-table-of-contents",level:2},{value:"Adding Smooth Scroll Effect on Table of Contents Link Click",id:"adding-smooth-scroll-effect-on-table-of-contents-link-click",level:2},{value:"Highlighting Active Links",id:"highlighting-active-links",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content."}),"\n",(0,i.jsxs)(t.p,{children:["In this article, we'll cover the necessary steps for creating an interactive table of contents for a ",(0,i.jsx)(t.code,{children:"Next.js"})," blog using Remark (a powerful Markdown processor). While some Remark plugins (like ",(0,i.jsx)(t.code,{children:"Remark-toc"}),") offer this functionality, the generated table of contents resides within the content itself, limiting its potential use cases. For example, in this blog the table of contents is rendered outside the blog content, keeping it visible whilst navigating. This is the type of table of contents we will build in this tutorial. We'll start by briefly discussing the basics of Remark, its plugins, and integration with Next.js. We'll then dive into the actual steps to implement the custom table of contents, and finally, we'll make it interactive so clicking the table of contents items will scroll the page to the corresponding section."]}),"\n",(0,i.jsx)(t.h2,{id:"remark-and-its-plugins",children:"Remark and its Plugins"}),"\n",(0,i.jsxs)(t.p,{children:["Remark is an extensible Markdown processor that simplifies the process of converting Markdown files into HTML or other formats. A key aspect of Remark is its plugin-based architecture which enables developers to extend and customize its functionality. These plugins can handle tasks like syntax highlighting, adding a table of contents, or parsing custom Markdown syntax. Integrating Remark with Next.js is very straightforward \u2013 usually used along with the ",(0,i.jsx)(t.code,{children:"getStaticProps"})," function to process Markdown files during build. It can also handle MDX files making it a viable choice for Next.js sites using the new ",(0,i.jsx)(t.code,{children:"app"})," directory. Remark\u2019s powerful processing capabilities and seamless integration with Next.js make it an ideal choice for enhancing Next.js blogs and websites content as well as user experience."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["Although we're building a custom table of contents, we don't need to write everything from scratch. To separate frontmatter content from Markdown/MDX content itself, we'll utilize the ",(0,i.jsx)(t.code,{children:"Gray-matter"})," package. This is optional if there is no frontmatter in the Markdown files. To process the Markdown itself, we'll use the Remark package. We'll also need the ",(0,i.jsx)(t.code,{children:"unist-util-visit"})," package to traverse the node tree and the ",(0,i.jsx)(t.code,{children:"mdast-util-to-string"})," package to get node text content."]}),"\n",(0,i.jsx)(t.p,{children:"Let's install all these packages:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npm i remark mdast-util-to-string gray-matter unist-util-visit\n"})}),"\n",(0,i.jsx)(t.h2,{id:"custom-remark-plugin-to-extract-headings-from-content",children:"Custom Remark Plugin to Extract Headings from Content"}),"\n",(0,i.jsx)(t.p,{children:"Before rendering the table of contents, we need to extract all headings from the Markdown file and organize them into an array of nodes. This process can be broken down into a few steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Parse file contents to separate frontmatter from content"}),"\n",(0,i.jsx)(t.li,{children:"Generate IDs for each heading element. This is necessary later for implementing scroll to section functionality."}),"\n",(0,i.jsx)(t.li,{children:"Parse content and extract headings with their properties"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For step 2, we could manually add IDs as custom markdown attributes e.g. ",(0,i.jsx)(t.code,{children:"## Heading 1 {#heading-id}"})," and then use a library like ",(0,i.jsx)(t.code,{children:"Remark-heading-id"})," to render them into the HTML. However, this approach requires manually adding and maintaining these headings across titles, less efficient. A more efficient way is to automatically generate IDs based on heading text e.g. the heading ",(0,i.jsx)(t.code,{children:"Heading 1"})," will automatically get ID ",(0,i.jsx)(t.code,{children:"heading-1"})," when converted to HTML."]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, we can combine steps 2 and 3 by creating a custom Remark plugin."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"export function headingTree() {\n  return (node, file) => {\n    file.data.headings = getHeadings(node);\n  };\n}\n\nfunction getHeadings(root) {\n  // implementation details  \n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Here we have our custom Remark plugin ",(0,i.jsx)(t.code,{children:"headingTree"})," which extracts headings from the document and adds them as a ",(0,i.jsx)(t.code,{children:"headings"})," property to the processed content."]}),"\n",(0,i.jsxs)(t.p,{children:["The main component is the ",(0,i.jsx)(t.code,{children:"getHeadings"})," function which is an accessor function that traverses the node tree and manipulates nodes. For improved readability, the function is split into two parts."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"addID"})," function traverses heading nodes in the document, replaces all special characters in them, and outputs them as lowercase strings with spaces replaced by hyphens. These IDs will be stored in the ",(0,i.jsx)(t.code,{children:"hProperties"})," attribute of the headings."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"function addID(node, nodes) {\n  // implementation details\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that we use a ",(0,i.jsx)(t.code,{children:"nodes"})," variable to keep track of occurrences of each heading. This is to prefix them with a number in case there are duplicate headings in the document (e.g. some sections may have subheadings with the same text). The ",(0,i.jsx)(t.code,{children:"transformNode"})," function takes nodes obtained from the parsed Markdown abstract syntax tree (AST) and transforms them into a format more suitable for building the table of contents."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import { toString } from "mdast-util-to-string"; \n\nfunction transformNode(node, output, indexMap) {\n  // implementation details\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This function checks if a node has depth 2 (## elements in Markdown). If yes, the transformed node is added to the output array and stored at the corresponding depth position in ",(0,i.jsx)(t.code,{children:"indexMap"}),". This indicates the transformed node resides at the top level of the table of contents. Here, we designate depth 2 as the top level depth since this will produce ",(0,i.jsx)(t.code,{children:"<h2>"})," tags in the HTML output. We don't use depth 1 since having multiple ",(0,i.jsx)(t.code,{children:"<h1>"})," elements on a page isn't good for accessibility and SEO."]}),"\n",(0,i.jsxs)(t.p,{children:["If a node has depth greater than 2 (e.g. ### or #### elements), the function identifies the parent node by looking up the position of the node's previous level depth (i.e. ",(0,i.jsx)(t.code,{children:"node.depth - 1"}),") in ",(0,i.jsx)(t.code,{children:"indexMap"}),". If a parent is found, the transformed node is appended to the parent's ",(0,i.jsx)(t.code,{children:"children"})," array and ",(0,i.jsx)(t.code,{children:"indexMap"})," is updated accordingly. This helps build the nested structure of the table of contents where deeper level nodes become children of higher level nodes."]}),"\n",(0,i.jsx)(t.p,{children:"It's worth noting that for this function to work properly, the table of contents should have a valid structure e.g. there shouldn't be jumps from node depth 2 directly to depth 4."}),"\n",(0,i.jsxs)(t.p,{children:["Now we have everything needed to implement the ",(0,i.jsx)(t.code,{children:"getHeadings"})," function."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'import matter from "gray-matter";\nimport { remark } from "remark";\n\nimport { headingTree } from "./headings";\n\nconst postsDirectory = path.join(process.cwd(), "posts");  \n\nexport async function getHeadings(id) {\n  // Gets Markdown file\n  // Parses frontmatter with gray-matter\n  \n  // Use remark to process Markdown\n  const processedContent = await remark() \n    .use(headingTree)\n    .process(matterResult.content);\n\n  return processedContent.data.headings;  \n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"With this, we have the array of headings from the document along with their data properties. The structure of the array is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'[\n  {\n    value: "Heading 1",\n    depth: 2,\n    data: { hProperties: { id: "heading-1"} },\n    children: [\n      // nested headings\n    ]\n  }\n] \n'})}),"\n",(0,i.jsx)(t.h2,{id:"rendering-the-table-of-contents",children:"Rendering the Table of Contents"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we have the heading data, we can use it to render the table of contents. First, we'll create a ",(0,i.jsx)(t.code,{children:"TableOfContents"})," component which will be the wrapper for the rendering logic of the table of contents."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'"use client";  \n\nexport const TableOfContents = ({ nodes }) => {\n  if (!nodes?.length) {\n    return null;\n  }\n\n  return ( \n    <div className={"toc"}>\n      <h3 className={"secondary-text"}>Table of contents</h3>\n      {renderNodes(nodes)} \n    </div>\n  );\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Note you need the ",(0,i.jsx)(t.code,{children:'"use client"'})," directive to mark this component as a client component if using Next.js ",(0,i.jsx)(t.code,{children:"app"})," directory."]}),"\n",(0,i.jsxs)(t.p,{children:["The actual rendering will be handled by the ",(0,i.jsx)(t.code,{children:"renderNodes"})," function since the rendering logic is recursive, we define it in a separate function instead of inside the component."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"function renderNodes(nodes) {\n  return (\n    <ul>\n     {nodes.map((node) => (\n       <li key={node.data.hProperties.id}>\n         <a href={`#${node.data.hProperties.id}`}>{node.value}</a>\n         {node.children?.length > 0 && \n           renderNodes(node.children)}\n       </li>\n     ))}\n    </ul>\n  );\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Each element in the table of contents is a link which points to the corresponding heading's ID via its ",(0,i.jsx)(t.code,{children:"href"})," attribute."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-smooth-scroll-effect-on-table-of-contents-link-click",children:"Adding Smooth Scroll Effect on Table of Contents Link Click"}),"\n",(0,i.jsxs)(t.p,{children:["The basic table of contents is now complete. On the page where we render the article, we can get the headings by calling ",(0,i.jsx)(t.code,{children:"await getHeadings(postId)"})," (or executing this in ",(0,i.jsx)(t.code,{children:"getStaticProps"}),' when using the "pages" directory) and pass the data to the TableOfContents component. When we click on table of contents links on the article page, navigation should happen to the corresponding part of the page. Instead of abruptly jumping however, we can enable smooth scrolling. As an additional enhancement, we can gradually decrease font size of child links based on their depth.']}),"\n",(0,i.jsxs)(t.p,{children:["To achieve this, we'll introduce a ",(0,i.jsx)(t.code,{children:"TOCLink"})," component that is responsible for smooth scrolling and styling individual links, then we'll use it in ",(0,i.jsx)(t.code,{children:"renderNodes"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"function renderNodes(nodes) {\n  return ( \n    <ul>\n     {nodes.map((node) => (\n       <li key={node.data.hProperties.id}>\n         <TOCLink node={node} />\n         {node.children?.length > 0 && \n           renderNodes(node.children)}\n       </li>\n     ))}\n    </ul>\n  ); \n}\n \nconst TOCLink = ({ node }) => {\n\n  // Smooth scroll implementation\n\n  // Depth based font size classes \n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For smooth scrolling to a specific element on the page, we first locate the element using its ID, then use the ",(0,i.jsx)(t.code,{children:"scrollIntoView"})," method with ",(0,i.jsx)(t.code,{children:'behavior: "smooth"'})," option. See MDN for more on this method. It has wide browser support but ",(0,i.jsx)(t.code,{children:"smooth"})," option may not be compatible with some older browsers. With this approach, clicking on table of contents links now produces a nice scrolling animation rather than the abrupt transition previously."]}),"\n",(0,i.jsxs)(t.p,{children:["If you need to add an offset when scrolling to heading elements (e.g. when page has a fixed navbar), you can apply the ",(0,i.jsx)(t.code,{children:"scroll-margin-top"})," CSS property to heading elements."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, we can leverage ",(0,i.jsx)(t.code,{children:"TailwindCSS"})," and its ",(0,i.jsx)(t.code,{children:"text"})," utility classes to gradually decrease font size of table of contents links based on depth."]}),"\n",(0,i.jsx)(t.h2,{id:"highlighting-active-links",children:"Highlighting Active Links"}),"\n",(0,i.jsx)(t.p,{children:"For enhanced navigation with the table of contents, a final touch is to highlight table of contents links as their corresponding title comes into view on the page."}),"\n",(0,i.jsxs)(t.p,{children:["To detect visibility of elements on page, we'll utilize the ",(0,i.jsx)(t.code,{children:"Intersection Observer API"})," which has good browser support but some caveats. Additionally, we'll move this functionality into a custom hook that returns a boolean indicating if link is highlighted and provides callback to manually set highlight state. This hook will be consumed in the ",(0,i.jsx)(t.code,{children:"TOCLink"})," component."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'import { useEffect, useRef, useState } from "react";\n \nfunction useHighlighted(id) {\n\n  // Implementation details\n\n  return [highlighted, setHighlighted];  \n}\n \nconst TOCLink = ({ node }) => {\n\n  const [highlighted, setHighlighted] = useHighlighted(id);\n\n  // Other implementation details\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this hook, the ",(0,i.jsx)(t.code,{children:"handleObserver"})," function serves as callback for ",(0,i.jsx)(t.code,{children:"Intersection Observer"}),", handling visibility changes of observed elements, taking an entries array as its parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"handleObserver"})," loops through entries, including h2, h3, h4 elements, checks if ",(0,i.jsx)(t.code,{children:"isIntersecting"})," is ",(0,i.jsx)(t.code,{children:"true"})," \u2013 indicating element is visible in viewport \u2013 and if so, updates active section in table of contents via ",(0,i.jsx)(t.code,{children:"setActiveId"}),". When link is clicked we set it to be highlighted via the ",(0,i.jsx)(t.code,{children:"setHighlighted"})," callback."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, we store a new ",(0,i.jsx)(t.code,{children:"Intersection Observer"})," instance in a ",(0,i.jsx)(t.code,{children:"ref"})," to persist its identity across component renders."]}),"\n",(0,i.jsx)(t.p,{children:"By scrolling the page, you can see the effect of this in action on this page, observing how the active section in table of contents updates as page reaches corresponding sections."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Overall, using Remark and custom plugins to create a table of contents for a Next.js blog can bring many benefits for your site's user experience and accessibility. Through Remark, this powerful Markdown processor, and its rich range of plugins, it's easy to extract headings from Markdown files and transform them into an interactive, easy to navigate table of contents."}),"\n",(0,i.jsxs)(t.p,{children:["By introducing a table of contents, you can enhance user experience on your Next.js blogs, making it easier for readers to find information they need. Additionally, using Remark to create custom table of contents plugins enables you to integrate the table outside of content itself, further increasing content availability and accessibility. By leveraging plugins like ",(0,i.jsx)(t.code,{children:"mdast-util-to-string"})," and ",(0,i.jsx)(t.code,{children:"unist-util-visit"}),", headings can be extracted from content, unique IDs can be generated, and they can be parsed into a format suitable for building the table of contents."]}),"\n",(0,i.jsx)(t.p,{children:"This tutorial has walked through that process by creating a custom table of contents with nested structure, smooth scrolling, and active link highlighting. Readers can now quickly find and navigate to content they are interested in, enhancing overall usability and value of the blog."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7214:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(959);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);