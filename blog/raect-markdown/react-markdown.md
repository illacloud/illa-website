---
slug: react-markdown 
title: Using Remark to Create an Interactive Table of Contents in a Next.js Blog
description: A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content. 
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp
tags: [ postgresql, select ]
date: 2024-02-26T10:00  
---

A table of contents has numerous benefits, and is a valuable addition for websites, especially blogs. An organized and easily navigable table of contents significantly improves the user experience, simplifying the process for readers to find information they require. By adding a table of contents, not only do you provide readers with streamlined navigation, but you also increase the overall accessibility and usability of content.

In this article, we'll cover the necessary steps for creating an interactive table of contents for a `Next.js` blog using Remark (a powerful Markdown processor). While some Remark plugins (like `Remark-toc`) offer this functionality, the generated table of contents resides within the content itself, limiting its potential use cases. For example, in this blog the table of contents is rendered outside the blog content, keeping it visible whilst navigating. This is the type of table of contents we will build in this tutorial. We'll start by briefly discussing the basics of Remark, its plugins, and integration with Next.js. We'll then dive into the actual steps to implement the custom table of contents, and finally, we'll make it interactive so clicking the table of contents items will scroll the page to the corresponding section.

## Remark and its Plugins

Remark is an extensible Markdown processor that simplifies the process of converting Markdown files into HTML or other formats. A key aspect of Remark is its plugin-based architecture which enables developers to extend and customize its functionality. These plugins can handle tasks like syntax highlighting, adding a table of contents, or parsing custom Markdown syntax. Integrating Remark with Next.js is very straightforward – usually used along with the `getStaticProps` function to process Markdown files during build. It can also handle MDX files making it a viable choice for Next.js sites using the new `app` directory. Remark’s powerful processing capabilities and seamless integration with Next.js make it an ideal choice for enhancing Next.js blogs and websites content as well as user experience.

## Getting Started

Although we're building a custom table of contents, we don't need to write everything from scratch. To separate frontmatter content from Markdown/MDX content itself, we'll utilize the `Gray-matter` package. This is optional if there is no frontmatter in the Markdown files. To process the Markdown itself, we'll use the Remark package. We'll also need the `unist-util-visit` package to traverse the node tree and the `mdast-util-to-string` package to get node text content.

Let's install all these packages:

```shell
npm i remark mdast-util-to-string gray-matter unist-util-visit
```

## Custom Remark Plugin to Extract Headings from Content

Before rendering the table of contents, we need to extract all headings from the Markdown file and organize them into an array of nodes. This process can be broken down into a few steps:

1. Parse file contents to separate frontmatter from content
2. Generate IDs for each heading element. This is necessary later for implementing scroll to section functionality.
3. Parse content and extract headings with their properties

For step 2, we could manually add IDs as custom markdown attributes e.g. `## Heading 1 {#heading-id}` and then use a library like `Remark-heading-id` to render them into the HTML. However, this approach requires manually adding and maintaining these headings across titles, less efficient. A more efficient way is to automatically generate IDs based on heading text e.g. the heading `Heading 1` will automatically get ID `heading-1` when converted to HTML.

Additionally, we can combine steps 2 and 3 by creating a custom Remark plugin.

```javascript
export function headingTree() {
  return (node, file) => {
    file.data.headings = getHeadings(node);
  };
}

function getHeadings(root) {
  // implementation details  
}
```

Here we have our custom Remark plugin `headingTree` which extracts headings from the document and adds them as a `headings` property to the processed content.

The main component is the `getHeadings` function which is an accessor function that traverses the node tree and manipulates nodes. For improved readability, the function is split into two parts.

The `addID` function traverses heading nodes in the document, replaces all special characters in them, and outputs them as lowercase strings with spaces replaced by hyphens. These IDs will be stored in the `hProperties` attribute of the headings.

```javascript
function addID(node, nodes) {
  // implementation details
}
```

Note that we use a `nodes` variable to keep track of occurrences of each heading. This is to prefix them with a number in case there are duplicate headings in the document (e.g. some sections may have subheadings with the same text). The `transformNode` function takes nodes obtained from the parsed Markdown abstract syntax tree (AST) and transforms them into a format more suitable for building the table of contents.

```javascript
import { toString } from "mdast-util-to-string"; 

function transformNode(node, output, indexMap) {
  // implementation details
}
```

This function checks if a node has depth 2 (## elements in Markdown). If yes, the transformed node is added to the output array and stored at the corresponding depth position in `indexMap`. This indicates the transformed node resides at the top level of the table of contents. Here, we designate depth 2 as the top level depth since this will produce `<h2>` tags in the HTML output. We don't use depth 1 since having multiple `<h1>` elements on a page isn't good for accessibility and SEO.

If a node has depth greater than 2 (e.g. ### or #### elements), the function identifies the parent node by looking up the position of the node's previous level depth (i.e. `node.depth - 1`) in `indexMap`. If a parent is found, the transformed node is appended to the parent's `children` array and `indexMap` is updated accordingly. This helps build the nested structure of the table of contents where deeper level nodes become children of higher level nodes.

It's worth noting that for this function to work properly, the table of contents should have a valid structure e.g. there shouldn't be jumps from node depth 2 directly to depth 4.

Now we have everything needed to implement the `getHeadings` function.

```javascript  
import matter from "gray-matter";
import { remark } from "remark";

import { headingTree } from "./headings";

const postsDirectory = path.join(process.cwd(), "posts");  

export async function getHeadings(id) {
  // Gets Markdown file
  // Parses frontmatter with gray-matter
  
  // Use remark to process Markdown
  const processedContent = await remark() 
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;  
}
```

With this, we have the array of headings from the document along with their data properties. The structure of the array is:

```javascript
[
  {
    value: "Heading 1",
    depth: 2,
    data: { hProperties: { id: "heading-1"} },
    children: [
      // nested headings
    ]
  }
] 
```

## Rendering the Table of Contents

Now that we have the heading data, we can use it to render the table of contents. First, we'll create a `TableOfContents` component which will be the wrapper for the rendering logic of the table of contents.

```jsx
"use client";  

export const TableOfContents = ({ nodes }) => {
  if (!nodes?.length) {
    return null;
  }

  return ( 
    <div className={"toc"}>
      <h3 className={"secondary-text"}>Table of contents</h3>
      {renderNodes(nodes)} 
    </div>
  );
};
```

Note you need the `"use client"` directive to mark this component as a client component if using Next.js `app` directory.

The actual rendering will be handled by the `renderNodes` function since the rendering logic is recursive, we define it in a separate function instead of inside the component.

```jsx 
function renderNodes(nodes) {
  return (
    <ul>
     {nodes.map((node) => (
       <li key={node.data.hProperties.id}>
         <a href={`#${node.data.hProperties.id}`}>{node.value}</a>
         {node.children?.length > 0 && 
           renderNodes(node.children)}
       </li>
     ))}
    </ul>
  );
}
```

Each element in the table of contents is a link which points to the corresponding heading's ID via its `href` attribute.

## Adding Smooth Scroll Effect on Table of Contents Link Click

The basic table of contents is now complete. On the page where we render the article, we can get the headings by calling `await getHeadings(postId)` (or executing this in `getStaticProps` when using the "pages" directory) and pass the data to the TableOfContents component. When we click on table of contents links on the article page, navigation should happen to the corresponding part of the page. Instead of abruptly jumping however, we can enable smooth scrolling. As an additional enhancement, we can gradually decrease font size of child links based on their depth.

To achieve this, we'll introduce a `TOCLink` component that is responsible for smooth scrolling and styling individual links, then we'll use it in `renderNodes`.

```jsx
function renderNodes(nodes) {
  return ( 
    <ul>
     {nodes.map((node) => (
       <li key={node.data.hProperties.id}>
         <TOCLink node={node} />
         {node.children?.length > 0 && 
           renderNodes(node.children)}
       </li>
     ))}
    </ul>
  ); 
}
 
const TOCLink = ({ node }) => {

  // Smooth scroll implementation

  // Depth based font size classes 
};
```

For smooth scrolling to a specific element on the page, we first locate the element using its ID, then use the `scrollIntoView` method with `behavior: "smooth"` option. See MDN for more on this method. It has wide browser support but `smooth` option may not be compatible with some older browsers. With this approach, clicking on table of contents links now produces a nice scrolling animation rather than the abrupt transition previously.

If you need to add an offset when scrolling to heading elements (e.g. when page has a fixed navbar), you can apply the `scroll-margin-top` CSS property to heading elements.

Additionally, we can leverage `TailwindCSS` and its `text` utility classes to gradually decrease font size of table of contents links based on depth.

## Highlighting Active Links

For enhanced navigation with the table of contents, a final touch is to highlight table of contents links as their corresponding title comes into view on the page.

To detect visibility of elements on page, we'll utilize the `Intersection Observer API` which has good browser support but some caveats. Additionally, we'll move this functionality into a custom hook that returns a boolean indicating if link is highlighted and provides callback to manually set highlight state. This hook will be consumed in the `TOCLink` component.

```jsx
import { useEffect, useRef, useState } from "react";
 
function useHighlighted(id) {

  // Implementation details

  return [highlighted, setHighlighted];  
}
 
const TOCLink = ({ node }) => {

  const [highlighted, setHighlighted] = useHighlighted(id);

  // Other implementation details
};
```

In this hook, the `handleObserver` function serves as callback for `Intersection Observer`, handling visibility changes of observed elements, taking an entries array as its parameter.

The `handleObserver` loops through entries, including h2, h3, h4 elements, checks if `isIntersecting` is `true` – indicating element is visible in viewport – and if so, updates active section in table of contents via `setActiveId`. When link is clicked we set it to be highlighted via the `setHighlighted` callback.

Additionally, we store a new `Intersection Observer` instance in a `ref` to persist its identity across component renders.

By scrolling the page, you can see the effect of this in action on this page, observing how the active section in table of contents updates as page reaches corresponding sections.

## Conclusion

Overall, using Remark and custom plugins to create a table of contents for a Next.js blog can bring many benefits for your site's user experience and accessibility. Through Remark, this powerful Markdown processor, and its rich range of plugins, it's easy to extract headings from Markdown files and transform them into an interactive, easy to navigate table of contents.

By introducing a table of contents, you can enhance user experience on your Next.js blogs, making it easier for readers to find information they need. Additionally, using Remark to create custom table of contents plugins enables you to integrate the table outside of content itself, further increasing content availability and accessibility. By leveraging plugins like `mdast-util-to-string` and `unist-util-visit`, headings can be extracted from content, unique IDs can be generated, and they can be parsed into a format suitable for building the table of contents.

This tutorial has walked through that process by creating a custom table of contents with nested structure, smooth scrolling, and active link highlighting. Readers can now quickly find and navigate to content they are interested in, enhancing overall usability and value of the blog.