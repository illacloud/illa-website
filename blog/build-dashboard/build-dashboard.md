---
slug: build-dashboard
title: Quickly create a personalized data dashboard for your boss
description: Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time.After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly.Using efficient tools to leave work early every day.
authors: [ owen ]
image: https://cdn.illacloud.com/illa-website/blog/build-dashboard/cover.png
tags: [ data dashboard ]
date: 2024-01-01T10:00
is_featured: true
---

Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time.

After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly.

Using efficient tools to leave work early every day.

## Some issues in the construction

The business of each company is distributed across different systems, and there are some connections between these systems. Some data needs to be queried using databases:

- Postgresql
- Mysql
- MongoDB
- ...

Some data comes from different types of microservices, possibly obtained from a specific API:

- User Detail API
- Product Detail API
- ...

The most challenging thing is that some data requires merging and secondary processing of both database and API data.

These issues make it very troublesome to build a personalized data dashboard. If starting development from scratch, we need to adapt to different data sources, leading to a steep increase in engineering costs.

Therefore, we need a flexible tool for displaying data dashboards, as "development" is not the most important; "display" is.

This tool needs some objective advantages:

- Rich charts to display data from different dimensions.
- Support for various mainstream data sources.
- Simple installation and usage.

## How to solve

Here, I recommend a user-friendly open-source project called ILLA Cloud. ILLA Cloud is a low-code tool specifically designed to address scenarios with personalized requirements.

📙 Official website: [https://illa.cloud](https://illa.cloud?utm_source=juejin)

⏬ Github repository: https://github.com/illacloud/illa-builder

⭐ Github Stars: 9k

Below is a demo using fake data, depicting the sales situation of a product in a company, including:

- Monthly sales growth trends
- Monthly revenue
- Total revenue obtained
- Number of purchasers
- Detailed information about each purchasing user

![data_dashboard](https://cdn.illacloud.com/illa-website/blog/build-dashboard/data-dashboard.png)

This chart uses several components:

- Data Grid
- Chart
- Statistic
- Menu

It was quickly built through drag and drop. The data sources come from:

- Supabase: A Serverless Postgresql
- API

ILLA supports various data sources, allowing quick retrieval of data from a wide range of mainstream sources.

![integration](https://cdn.illacloud.com/illa-website/blog/build-dashboard/integration.png)

## AI-driven

ILLA not only provides a dashboard but also allows the queried data to be processed further using LLM (Language Model). For example, a set of messy data can be processed into another format as required, enabling alignment of data from multiple sources.

## Advantages

Building a beautiful dashboard is quick and easy using drag and drop within a few minutes.

Moreover, compared to various traditional BI tools, ILLA Cloud:

- Supports data querying from both databases and APIs
- Simple installation, directly usable on the web page without any downloads
- For secondary data processing, uses Javascript for direct and simple processing
- Supports various mainstream charts, meeting most requirements
- The Transformer feature effectively solves the problem of merging and processing data between multiple sources, eliminating worries about data format issues

As an open-source project, ILLA Cloud also supports secondary development, with an active community for collaboration with other developers. No need to worry about maintenance issues.

Additionally, ILLA Cloud can not only build data dashboards but also quickly create exclusive management dashboards, accelerating your business iteration.

As a low-code tool, ILLA Cloud also supports collaboration among multiple people, allowing them to build dashboards together.

![collaboration](https://cdn.illacloud.com/illa-website/blog/build-dashboard/collaboration.png)

## Conclusion

After using ILLA Cloud, there's no need to worry about the boss's personalized requirements. Within a few minutes, you can build a personalized data dashboard for the boss, becoming a highly efficient employee. Why not give it a try now!
