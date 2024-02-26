---
slug: react-markdown 
title: 在 Next.js 博客中使用 Remark 创建交互式目录
description: 目录具有许多好处，对于网站，特别是博客，是一项有价值的增加。一个组织良好且易于导航的目录显著提升用户体验，为读者简化查找所需信息的过程。通过添加目录，您不仅可以为读者提供简化的导航，还可以提高内容的整体可访问性和可用性。 
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp
tags: [ postgresql, select ]
date: 2024-02-26T10:00  
---

目录具有许多好处，对于网站，特别是博客，是一项有价值的增加。一个组织良好且易于导航的目录显著提升用户体验，为读者简化查找所需信息的过程。通过添加目录，您不仅可以为读者提供简化的导航，还可以提高内容的整体可访问性和可用性。

在这篇文章中，我们将介绍使用Remark（一种强大的Markdown处理器）为`Next.js`博客创建交互式目录的必要步骤。虽然一些Remark插件（如`Remark-toc`）提供了这种功能，但生成的目录位于内容本身内部，限制了其潜在用途。例如，在此博客上，目录被呈现在博客内容之外，使其在导航时可见。这是我们将在本教程中构建的目录类型。我们将从简要讨论Remark的基本知识、其插件以及与Next.js的集成开始。然后，我们将深入研究实现自定义目录的实际步骤，最后，我们将使其具有交互性，以便单击目录项将页面滚动到相应的部分。

## Remark及其插件

Remark是一款可扩展的Markdown处理器，简化了将Markdown文件转换为HTML或其他格式的过程。Remark的关键方面是其基于插件的架构，使开发人员能够扩展和定制其功能。这些插件可以处理诸如语法高亮显示、添加目录或解析自定义Markdown语法等任务。将Remark与Next.js集成非常简单——通常与`getStaticProps`函数一起使用，以在构建过程中处理Markdown文件。它还可以处理MDX文件，使其成为使用新的“app”目录的Next.js网站的可行选择。Remark强大的处理能力和与Next.js的无缝集成使其成为增强Next.js博客和网站内容以及用户体验的理想选择。

## 入门

尽管我们正在构建一个自定义目录，但我们不必从头开始编写所有内容。为了将Markdown/MDX内容与前置内容分离，我们将使用`Gray-matter`包。如果Markdown文件中没有前置内容，这是可选的。为了处理Markdown本身，我们将使用Remark包。我们还需要`unist-util-visit`包来遍历节点树，以及`mdast-util-to-string`包来获取节点的文本内容。

让我们安装所有这些包。

```shell
npm i remark mdast-util-to-string gray-matter unist-util-visit
```

## 用于从内容中提取标题的自定义Remark插件

在呈现目录之前，我们必须从Markdown文件中提取所有标题，并将它们组织成一个节点数组。这个过程可以分为几个步骤：

1. 解析文件内容以将前置内容与内容分离。
2. 为每个标题元素生成ID。这对于后面实现滚动到部分功能是必要的。
3. 解析内容，提取标题及其属性。

对于第2步，我们可以手动添加IDs作为自定义Markdown属性，例如`## Heading 1 {#heading-id}`，然后使用类似`Remark-heading-id`的库将它们渲染为HTML。然而，这种方法需要手动添加和维护这些标题，效率较低。更高效的方法是根据标题文本自动生成IDs，例如，当转换为HTML时，标题`Heading 1`将自动获得ID `heading-1`。
此外，我们可以通过创建自定义Remark插件将步骤2和3结合起来。
js复制代码

```javascript
export function headingTree() {
  return (node, file) => {
    file.data.headings = getHeadings(node);
  };
}

function getHeadings(root) {
  const nodes = {};
  const output = [];
  const indexMap = {};
  visit(root, "heading", (node) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}
```

在这里，我们有我们的自定义Remark插件`headingTree`，它从文档中提取标题并将它们作为`headings`属性添加到处理后的内容中。

插件的主要组件是`getHeadings`函数，这是一个访问器函数，遍历节点树并操纵它们。为了提高可读性，该函数分为两个部分。

`addID`函数遍历文档中的标题节点，替换它们所有的特殊字符，并将它们作为小写字符串输出，其中空格由破折号替换。这些ID将存储在标题的`hProperties`属性中。

```javascript
function addID(node, nodes) {
  const id = node.children.map((c) => c.value).join("");
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`
        .replace(/[^a-zA-Z\d\s-]/g, "")
        .split(" ")
        .join("-")
        .toLowerCase(),
    },
  };
}
```

注意，我们使用`nodes`变量来跟踪每个标题出现的次数。这样做是为了在文档中出现多次的标题（例如，某些部分可能具有相同文本的子标题）前缀带有数字。`transformNode`函数接受从解析后的Markdown抽象语法树（AST）中得到的节点，并将其转换为一个更适用于构建目录的格式。

```javascript
import { toString } from "mdast-util-to-string";

function transformNode(node, output, indexMap) {
  const transformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}
```

该函数检查节点是否具有深度为2（Markdown中的##元素）。如果是，转换后的节点将添加到输出数组中，并保存在`indexMap`中相应深度的位置。这表示转换后的节点位于目录的顶级。在此处，我们将深度2指定为顶级深度，因为这将在HTML输出中产生`<h2>`标签。我们不使用深度1，因为在页面上有多个`<h1>`元素对于页面的可访问性和SEO来说并不好。

如果节点的深度大于2（例如，###或####元素），该函数通过查找`indexMap`中当前节点上一级深度的位置（即`node.depth - 1`）来识别父节点。如果找到父节点，则将转换后的节点添加到父节点的`children`数组中，并相应地更新`indexMap`。这有助于构建目录的嵌套结构，其中深层次的节点成为较高层次节点的子节点。

值得注意的是，为了使该函数正常工作，目录应具有有效的结构，例如，不应该在节点深度2直接跳转到深度4。

现在我们有了实现`getHeadings`函数所需的一切。

```javascript
import matter from "gray-matter";
import { remark } from "remark";

import { headingTree } from "./headings";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getHeadings(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert Markdown into HTML string
  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;
}
```

有了这个，我们就有了来自文档的标题数组，以及它们的数据属性。数组的结构如下。

```javascript
[
  {
    value: "Heading 1",
    depth: 2,
    data: { hProperties: { id: "heading-1" } },
    children: [
      {
        value: "Heading 2",
        depth: 3,
        data: { hProperties: { id: "heading-2" } },
        children: [
          {
            value: "Heading 3",
            depth: 4,
            data: { hProperties: { id: "heading-3" } },
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: "Heading 4",
    depth: 2,
    data: { hProperties: { id: "heading-4" } },
    children: [],
  },
];
```

## 渲染目录

现在我们有了标题数据，可以使用它来渲染目录。首先，我们将创建一个`TableOfContents`组件，它将是目录渲染逻辑的包装器。

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

请注意，如果您使用的是Next.js的“app”目录，您需要使用`"use client"`指令将此组件标记为客户端组件。

目录的实际渲染将由`renderNodes`函数管理。由于渲染逻辑是递归的，我们使用单独的函数而不是在组件内部定义它。

```jsx
function renderNodes(nodes) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id}>
          <a href={`#${node.data.hProperties.id}`}>{node.value}</a>
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}
```

目录中的每个元素都是一个链接，通过其`href`属性指向相应标题的ID。

## 单击目录链接时添加平滑滚动效果

基本的目录已经完成。在我们渲染文章的页面上，我们可以通过调用`await getHeadings(postId)`或者在使用 "pages" 目录时在`getStaticProps`中执行此操作）获取标题，并将数据传递给 TableOfContents 组件。在文章页面上，当我们点击目录链接时，应该导航到页面的相应部分。然而，与其突然跳转到标题，我们可以启用平滑滚动。作为附加的增强，我们可以根据其深度逐渐减小子链接的字体大小。

为了实现这一点，我们将引入一个`TOCLink`组件，负责平滑滚动和个别链接样式，然后我们将在`renderNodes`中使用它。

```jsx
function renderNodes(nodes) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}
 
const TOCLink = ({ node }) => {
  const fontSizes = { 2: "base", 3: "sm", 4: "xs" };
  const id = node.data.hProperties.id;
  return (
    <a
      href={`#${id}`}
      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1`}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};
```

为了平滑滚动到网页上的特定元素，我们首先使用其 ID 定位元素，然后使用带有`behavior: "smooth"`选项的`scrollIntoView`方法。有关此方法的更多信息，请参阅`MDN`网站。该方法在`浏览器支持`方面具有广泛的支持，但`smooth`选项可能与一些较旧的浏览器不兼容。通过采用这种方法，现在点击目录链接会产生一个漂亮的滚动动画，而不是之前的突然过渡。

如果您需要在滚动到标题元素时添加偏移量（例如，当页面有一个固定的导航栏时），您可以将`scroll-margin-top` CSS 属性应用于标题元素。

此外，我们可以使用`TailwindCSS`和其`text`实用程序类，根据深度逐渐减小目录链接的字体大小。

## 强调活动链接

为了增强目录导航，最后的一点是在页面上查看其相应标题时突出显示目录链接。

为了检测页面上元素的可见性，我们将使用`Intersection Observer API`，该API具有良好的浏览器支持，但有一些小问题。此外，我们将此功能转移到一个自定义的钩子中，该钩子返回一个布尔值，指示链接是否突出显示，并提供手动设置高亮状态的回调。这个钩子将在`TOCLink`组件中使用。

```jsx
import { useEffect, useRef, useState } from "react";
 
function useHighlighted(id) {
  const observer = useRef();
  const [activeId, setActiveId] = useState("");
 
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
 
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -35% 0px",
    });
 
    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current.observe(elem));
    return () => observer.current?.disconnect();
  }, []);
 
  return [activeId === id, setActiveId];
}
 
const TOCLink = ({ node }) => {
  const fontSizes = { 2: "base", 3: "sm", 4: "xs" };
  const id = node.data.hProperties.id;
  const [highlighted, setHighlighted] = useHighlighted(id);
  return (
    <a
      href={`#${id}`}
      className={`block text-${fontSizes[node.depth]} hover:accent-color py-1 ${
        highlighted && "accent-color"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setHighlighted(id);
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};
```

在这个钩子中`handleObserver`函数作为`Intersection Observer`的回调函数，处理被观察元素的可见性变化，接受一个条目数组作为其参数。
`handleObserver`函数遍历条目，其中包括 h2、h3 和 h4 元素，检查`isIntersecting`属性是否为`true` — 表示元素在视口中可见 — 如果是，使用`setActiveId`更新目录中的活动部分。当链接被点击时，我们通过`setHighlighted`回调将其设置为突出显示。

此外，我们将一个新的`Intersection Observer`实例存储在一个`ref`中，以在组件渲染期间保持其身份不变。

通过滚动页面，您可以在此页面上看到这个目录的实际效果，观察随着页面到达相应部分，目录中的活动部分如何更新。

## 结论

总的来说，使用Remark和自定义插件为 Next.js 博客创建目录可以为您的网站的用户体验和可访问性带来许多好处。通过 Remark，这个强大的 Markdown 处理器，以及它丰富的插件范围，可以轻松从 Markdown 文件中提取标题，并将它们转换为交互式和易于导航的目录。

通过引入目录，您可以增强 Next.js 博客上的用户体验，使读者更容易找到他们需要的信息。此外，使用 Remark 创建自定义目录插件使您能够将目录集成到内容之外，从而提高内容的可用性和可访问性。通过使用诸如`mdast-util-to-string`和`unist-util-visit`等插件，可以从内容中提取标题，生成唯一的 ID，并将它们解析为适用于构建目录的格式。

本教程通过创建具有嵌套结构、平滑滚动和活动链接突出显示的自定义目录，引导您完成了这个过程。因此，读者现在可以快速找到并导航到他们感兴趣的内容，增强了博客的整体可用性和价值。