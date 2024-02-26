---
slug: react-markdown
title: Remarkを使用してNext.jsブログにインタラクティブな目次を作成する
description: 目次には多くの利点があり、特にブログなどのWebサイトにとって価値のある追加機能です。整理されたナビゲーションしやすい目次は、必要な情報を見つけるプロセスを読者にとって容易にすることでユーザーエクスペリエンスを大幅に向上させます。目次を追加することで、読者にシンプルなナビゲーションを提供するだけでなく、コンテンツの全体的なアクセシビリティと使いやすさを向上させることができます。
authors: [ owen ] 
image: https://cdn.illacloud.com/illa-website/blog/react-markdown/cover.webp
tags: [ postgresql, select ]
date: 2024-02-26T10:00
---

目次には多くの利点があり、特にブログなどのWebサイトにとって価値のある追加機能です。整理されたナビゲーションしやすい目次は、必要な情報を見つけるプロセスを読者にとって容易にすることでユーザーエクスペリエンスを大幅に向上させます。目次を追加することで、読者にシンプルなナビゲーションを提供するだけでなく、コンテンツの全体的なアクセシビリティと使いやすさを向上させることができます。


この記事では、強力なMarkdownプロセッサであるRemarkを使用して、Next.jsブログにインタラクティブな目次を作成するために必要な手順を説明します。 一部のRemarkプラグイン(remark-tocなど)はこの機能を提供していますが、生成された目次はコンテンツ自体の内部にあり、その可能な用途が制限されます。 たとえば、このブログの目次はブログコンテンツの外側にレンダリングされているため、ナビゲーション中に表示されたままです。 これは、このチュートリアルで構築する目次のタイプです。 Remarkの基本、そのプラグイン、Next.jsとの統合についての簡単な説明から始めます。 次に、カスタム目次を実装する実際の手順を詳しく調べ、最後に目次のアイテムをクリックするとページが対応するセクションにスクロールするインタラクティブなものにします。


## Remarkとそのプラグイン

Remarkは、MarkdownファイルをHTMLやその他の形式に変換するプロセスを簡略化する拡張可能なMarkdownプロセッサです。 Remarkの重要な点は、開発者が機能を拡張およびカスタマイズできるようにするプラグインベースのアーキテクチャです。 これらのプラグインは、構文のハイライト表示、目次の追加、カスタムMarkdown構文の解析などのタスクを処理できます。 RemarkをNext.jsと統合することは非常に簡単です。通常、ビルドプロセス中にMarkdownファイルを処理するためにgetStaticProps関数とともに使用されます。 MDXファイルも処理できるため、新しい「アプリ」ディレクトリを使用するNext.js Webサイトの実行可能な選択肢です。 Remarkの強力な処理機能とNext.jsとのシームレスな統合により、Next.jsブログとWebサイトのコンテンツとユーザーエクスペリエンスを向上させるのに理想的な選択肢です。


## はじめに

カスタム目次を構築していますが、すべてをゼロから記述する必要はありません。 Markdown/MDXコンテンツをフロントマターから分離するために、Gray-matterパッケージを使用します。 Markdownファイルにフロントマターがない場合はオプションです。 Markdown自体を処理するために、Remarkパッケージを使用します。 ノードツリーを走査するunist-util-visitパッケージと、ノードのテキストコンテンツを取得するmdast-util-to-stringパッケージも必要です。

これらのパッケージをすべてインストールしましょう。

```shell
npm i remark mdast-util-to-string gray-matter unist-util-visit
```


## コンテンツから見出しを抽出するためのカスタムRemarkプラグイン

目次をレンダリングする前に、すべての見出しをMarkdownファイルから抽出し、ノード配列として編成する必要があります。 このプロセスは次の手順に分けることができます。

1. ファイルコンテンツを解析して、フロントマターとコンテンツを区別する。
2. 各見出し要素にIDを生成します。 これは、後で「部分にスクロール」機能を実装するために必要です。
3. コンテンツを解析し、見出しとその属性を抽出する。

第2ステップの場合、 `##見出し1 {#heading-id}` のようなカスタムMarkdown属性としてIDを手動で追加し、`Remark-heading-id` のようなライブラリを使用してHTMLとしてレンダリングできます。 ただし、この方法では見出しの手動追加とメンテナンスが必要で、効率が悪くなります。 より効率的な方法は、HTMLにレンダリングされたときに、見出し `Heading 1` が自動的に `heading-1` というIDを取得するように、見出しテキストに基づいてIDを自動生成することです。

さらに、カスタムRemarkプラグインを作成することにより、ステップ2と3を組み合わせることができます。

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

ここでは、ドキュメントから見出しを抽出して処理済みコンテンツに `headings` プロパティとして追加するカスタム Remark プラグイン `headingTree` があります。

プラグインの主なコンポーネントは、ノードツリーを走査し操作するアクセサー関数である `getHeadings` 関数です。 読みやすさのために、この関数は2つの部分に分割されています。

`addID`関数は、ドキュメント内の見出しノードを巡回し、すべての特殊文字を置き換え、スペースをダッシュに置き換えた小文字の文字列として出力します。 これらのIDは見出しの `hProperties` 属性に保存されます。

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

各見出しがドキュメントで発生する回数を追跡するために `nodes` 変数を使用していることに注意してください。 これは、ドキュメントで複数回発生する見出し(たとえば、一部のセクションには同じテキストのサブ見出しがある場合があります)に数値のプレフィックスを付けるためです。 `transformNode` 関数は、解析された Markdown 抽象構文木(AST)から取得したノードを受け取り、目次の構築に適した形式に変換します。

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

この関数は、ノードが深さ2(Markdownの##要素)を持っているかどうかをチェックします。 はいの場合、変換されたノードが出力配列に追加され、`indexMap` の対応する深さの位置に保存されます。 これは、変換されたノードがディレクトリのトップレベルにあることを意味します。 ここで、深さ2をトップレベルの深さとして指定しています。これにより、HTML出力で `<h2>` タグが生成されます。 深さ1は使用しません。ページ上に複数の `<h1>` 要素があると、そのページのアクセシビリティとSEOの点で望ましくありません。

ノードの深さが大きい場合(たとえば、###または####要素)、この関数は `indexMap` で現在のノードの1つ上の深さの位置(つまり、 `node.depth - 1`)を調べて親ノードを特定します。 親ノードが見つかった場合、変換されたノードが親ノードの `children` 配列に追加され、 `indexMap` が適切に更新されます。 これは、下位レベルのノードが上位レベルノードの子ノードになる目次の入れ子構造の構築に役立ちます。


この関数が適切に機能するには、ディレクトリに有効な構造が必要です。つまり、ノードの深さがレベル2から直接レベル4に飛ぶべきではありません。

これで、`getHeadings`関数を実装するために必要なすべてが揃いました。

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

これで、ドキュメントからの見出し配列とそのデータ属性が得られました。 配列の構造は次のとおりです。


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

## 目次のレンダリング

これでタイトルデータが得られたので、目次をレンダリングするために使用できます。 まず、目次のレンダリングロジックのラッパーとなる `TableOfContents` コンポーネントを作成します。


```jsx
"use client";  

export const TableOfContents = ({ nodes }) => {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={"toc"}>
      <h3 className={"secondary-text"}>目次</h3>
      {renderNodes(nodes)}
    </div>
  ); 
};
```

Next.jsの「アプリ」ディレクトリを使用している場合は、 `"use client"`ディレクティブを使用してこのコンポーネントをクライアントコンポーネントとしてマークする必要があることに注意してください。


目次自体のレンダリングは、`renderNodes`関数によって管理されます。 レンダリングロジックは再帰的であるため、コンポーネント内で定義するのではなく、個別の関数を使用します。

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

目次の各要素は、`href`属性を介して対応する見出しIDを指すリンクです。

## 目次リンクをクリックしたときにスムーススクロールエフェクトを追加する

基本的な目次が完成しました。記事をレンダリングするページで、`await getHeadings(postId)` を呼び出すか、「ページ」ディレクトリを使用している場合は `getStaticProps` 内でこの操作を実行することによって見出しを取得し、そのデータを TableOfContents コンポーネントに渡すことができます。記事ページ上で目次リンクをクリックしたとき、ページの対応する部分に移動する必要があります。ただし、見出しに突然ジャンプする代わりに、スムーススクロールを有効にできます。追加の強化として、深さに基づいて子リンクのフォントサイズを徐々に縮小できます。

これを実現するために、スムーススクロールと個々のリンクスタイルを担当する `TOCLink` コンポーネントを導入し、 `renderNodes` 内でそれを使用します。

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

Web ページ上の特定の要素にスムーススクロールするために、最初に ID を使用して要素を特定し、 `behavior: "smooth"` オプションを使用した `scrollIntoView` メソッドを使用します。このメソッドの詳細については、 `MDN`  Webサイトをご覧ください。このメソッドはブラウザのサポートが広範囲に渡っていますが、 `smooth` オプションは一部の古いブラウザと互換性がない場合があります。この方法を採用することで、今では目次リンクをクリックすると以前の突然の遷移ではなくきれいなスクロールアニメーションが発生します。

見出し要素にスクロールするときにオフセットを追加する必要がある場合(ページに固定ナビゲーションバーがある場合など)は、見出し要素に `scroll-margin-top` CSSプロパティを適用できます。

加えて、`TailwindCSS` とその `text` ユーティリティクラスを使用して、深さに基づいて目次リンクのフォントサイズを徐々に縮小できます。

## アクティブリンクの強調表示

目次ナビゲーションを強化するための最後のポイントは、対応する見出しがページ上に表示されているときに目次リンクを強調表示することです。

ページ上の要素の可視性を検出するために、 `Intersection Observer API` を使用します。この API はブラウザのサポートが広範囲に渡っていますが、いくつかの小さな問題があります。 加えて、この機能をカスタムフックに移し替えます。このフックは、リンクが強調表示されているかどうかを示すブール値を返し、強調表示状態を手動で設定するコールバックを提供します。 このフックは、 `TOCLink` コンポーネントで使用されます。

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

このフックの `handleObserver` 関数は、`Intersection Observer` のコールバック関数として機能し、観察対象の要素の可視性の変更を処理し、エントリー配列をパラメータとして受け取ります。 `handleObserver` 関数は、h2、h3、h4要素を含むエントリーを反復処理し、 `isIntersecting` プロパティが `true` であるかどうかをチェックします。つまり、要素がビューポート内で可視であるかどうかを示します。可視の場合は、 `setActiveId` を使用して目次内のアクティブなセクションを更新します。リンクがクリックされると、 `setHighlighted` コールバックを使用してそれを強調表示に設定します。

加えて、新しい `Intersection Observer` インスタンスを `ref` に格納して、コンポーネントのレンダリング中にそのアイデンティティを保持します。

ページをスクロールすると、ページが対応するセクションに到達したときに目次内のアクティブなセクションがどのように更新されるかを、このページでこの目次の実際の効果を確認できます。

## 結論

全体として、Remarkとカスタムプラグインを使用してNext.jsブログ用の目次を作成することで、Webサイトのユーザーエクスペリエンスとアクセシビリティが大幅に向上します。 Remarkという強力なマークダウン・プロセッサと、その豊富なプラグインの範囲により、マークダウンファイルから見出しを簡単に抽出し、インタラクティブでナビゲーションが容易な目次に変換することができます。

目次を導入することで、Next.jsブログ上のユーザーエクスペリエンスを向上させ、読者が必要な情報をより簡単に見つけられるようになります。 加えて、Remarkを使用してカスタム目次プラグインを作成することで、コンテンツから目次を分離してコンテンツの可用性とアクセシビリティを向上させることができます。 `mdast-util-to-string` や `unist-util-visit` などのプラグインを使用することで、コンテンツから見出しを抽出し、一意のIDを生成し、目次の構築に適した形式に解析できます。

このチュートリアルでは、入れ子構造、スムーススクロール、アクティブリンクの強調表示を備えたカスタム目次を作成することで、このプロセスを案内しました。 したがって、読者は今や関心のあるコンテンツをすばやく見つけてナビゲートできるようになり、ブログの全体的な可用性と価値が向上しました。