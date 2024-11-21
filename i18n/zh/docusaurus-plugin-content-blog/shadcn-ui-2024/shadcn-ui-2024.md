---
slug: shadcn-ui-2024
title: 2024年已到来，我应该选择Shadcn UI吗？
description: 2024年已到来，React组件库的生态系统依然充满活力。
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/cover.png
tags: [ shadcn-ui, react, javascript ]
date: 2024-01-03T10:00
---

2024年已经到来，React组件库的生态系统依然充满活力。本文将从不同角度剖析两个当前流行的组件库，提供客观分析，以帮助用户做出更明智的选择。

## 为什么选择组件库？

一般来说，公司在构建Web应用程序时会选择组件库，以简化重复的任务。组件库提供了一系列开箱即用的组件，如选择框、输入框、复选框等。这些组件具有可自定义的样式或内置的吸引人的样式，可以快速开发出外观美观的网站，而无需从零开始。

总之，我们通常在两种场景下使用组件库：

- 外部工具：直接面向公司用户，通常与公司的风格一致，外观更美观，响应更灵敏。
- 内部工具：针对公司员工内部使用，强调设计美学和快速功能实现。

接下来，我们将基于以下几个方面分析Shadcn UI组件库：

1. 设计
2. 功能丰富性
3. 在不同场景下如何选择

## 内部工具场景的其他选择

[ILLA Cloud](https://illacloud.com/)是一个开箱即用的低代码工具，可以使用简单的JS快速构建内部工具，无需创建新项目。

- Web和应用管理面板
- 数据仪表板
- 自定义的B2B工具

与使用组件库构建相比，ILLA Cloud可以实现10倍更快的工具构建，并支持团队内协作编辑。

![仪表板](https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/dashboard.png)

## Shadcn UI的特点

关于Shadcn的一些详细数据：

- ⭐ GitHub Stars：37k
- ⏬ NPM下载量：每周23,962次下载
- 💪🏼 首次发布日期：2023年3月8日

Shadcn UI是一个相对较新的项目，在不到一年的时间内获得了37k的星标，表明它在开源社区中迅速得到了认可。

![Shadcn UI](https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/shadcn-ui.png)

### 设计

在设计方面，Shadcn UI偏向于商业风格，具有干净的用户界面，适用于内部工具和严肃的应用场景。Shadcn UI支持自定义主题，但似乎只提供以下自定义选项：

- 颜色
- 边框半径
- 暗模式/亮模式
- 预定义的“默认”和“纽约”样式

在字体和字体大小等细粒度控制方面，似乎缺乏灵活性。但是，对于内部工具场景，这种程度的控制可能足够了，但对于外部工具而言，可能会有一些限制。

在CSS方面，Shadcn UI支持传统的CSS和CSS-in-JS，使用[Stitches](https://stitches.dev/)作为CSS-in-JS解决方案。默认情况下支持传统的CSS，但可能需要额外的配置以适应less和sass，而且它不是开箱即用的。

### 功能丰富性

该库的功能丰富性完全满足日常开发需求，支持大多数功能并提供全面的回调。Shadcn UI支持关键功能，包括但不限于：

- SSR（服务器端渲染）
- 可访问性
- 动画

但是，对于更高级的需求，如非常丰富的图表和高性能的表格，似乎不受支持。随着项目的不断发展，预计项目将随着时间的推移而发展。

## 如何选择

✅ 优点

如果您是一个充满好奇心的开源爱好者，不需要高度定制的用户界面，并且没有复杂的数据处理需求，那么建议使用Shadcn UI进行开发。它轻巧，配置更简单，可立即使用，无需担心细节，可直接进行开发。

❌ 缺点

如果您对用户界面和组件定制有很高的需求，并计划在大型项目中使用Shadcn UI，那么不建议使用。Shadcn UI的定制能力不如其他组件库强大，而且不提供开箱即用的图表和高性能的数据组件。在这种情况下，您可能需要寻找其他开源项目来补充这些功能。