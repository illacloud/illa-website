---
slug: build-dashboard
title: 为您的老板快速创建个性化的数据仪表板
description: 每家公司都有自己独特的在线业务，随着业务的不断更新和迭代，业务的复杂性将随着时间的推移不断增加。
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/build-dashboard/cover.png
tags: [ 数据仪表板 ]
date: 2024-01-01T10:00
---

每家公司都有自己独特的在线业务，随着业务的不断更新和迭代，业务的复杂性将随着时间的推移不断增加。

当业务复杂性达到一定水平后，内部团队需要查看各种数据，以为未来的战略决策提供支持。因此，我们需要一种灵活的工具，用于创建个性化的数据仪表板，以满足内部团队成员，特别是老板的多样化定制需求，并帮助团队快速迭代。

使用高效的工具，每天提前下班。

## 建设中的一些问题

每家公司的业务分布在不同的系统中，这些系统之间存在一些连接。一些数据需要使用数据库进行查询：

- Postgresql
- Mysql
- MongoDB
- ...

一些数据来自不同类型的微服务，可能是从特定的API获取的：

- 用户详细信息API
- 产品详细信息API
- ...

最具挑战性的是，一些数据需要合并和二次处理数据库和API数据。

这些问题使得创建个性化的数据仪表板非常麻烦。如果从头开始开发，就需要适应不同的数据源，导致工程成本急剧上升。

因此，我们需要一种灵活的工具来显示数据仪表板，因为“开发”并不是最重要的；“显示”才是关键。

这个工具需要一些客观的优势：

- 丰富的图表，用于显示来自不同维度的数据。
- 支持各种主流数据源。
- 简单的安装和使用。

## 如何解决

在这里，我推荐一个用户友好的开源项目，叫做ILLA Cloud。ILLA Cloud是专门设计用于解决个性化需求场景的低代码工具。

📙 官方网站：[https://illa.cloud](https://illa.cloud?utm_source=juejin)

⏬ Github仓库：https://github.com/illacloud/illa-builder

⭐ Github Stars：9k

以下是使用虚假数据的演示，描述了一家公司产品的销售情况，包括：

- 月销售增长趋势
- 月收入
- 总收入
- 购买者数量
- 每个购买用户的详细信息

![data_dashboard](https://cdn.illacloud.com/illa-website/blog/build-dashboard/data-dashboard.png)

这个图表使用了几个组件：

- 数据网格
- 图表
- 统计
- 菜单

它是通过拖放快速构建的。数据来源于：

- Supabase：一个无服务器的Postgresql
- API

ILLA支持各种数据源，允许从各种主流来源快速检索数据。

![integration](https://cdn.illacloud.com/illa-website/blog/build-dashboard/integration.png)

## 人工智能驱动

ILLA不仅提供了仪表板，还允许使用LLM（语言模型）进一步处理查询的数据。例如，一组杂乱的数据可以根据需要进一步处理，从而使来自多个来源的数据对齐。

## 优势

使用拖放可以快速轻松地创建漂亮的仪表板，只需几分钟。

此外，与各种传统的BI工具相比，ILLA Cloud具有以下优势：

- 支持从数据库和API进行数据查询
- 简单的安装，直接在网页上使用，无需下载
- 对于二次数据处理，使用Javascript进行直接和简单的处理
- 支持各种主流图表，满足大多数需求
- 变换器功能有效地解决了来自多个来源的数据合并和处理问题，消除了有关数据格式问题的担忧

作为一个开源项目，ILLA Cloud还支持二次开发，并拥有与其他开发人员合作的活跃社区。无需担心维护问题。

此外，ILLA Cloud不仅可以构建数据仪表板，还可以快速创建独家的管理仪表板，加速您的业务迭代。

作为一个低代码工具，ILLA Cloud还支持多人协作，允许他们一起构建仪表板。

![collaboration](https://cdn.illacloud.com/illa-website/blog/build-dashboard/collaboration.png)

## 结论

使用ILLA Cloud后，您不必担心老板的个性化要求。只需几分钟，您就可以为老板创建一个个性化的数据仪表板，成为一个高效的员工。为什么不立即尝试呢！