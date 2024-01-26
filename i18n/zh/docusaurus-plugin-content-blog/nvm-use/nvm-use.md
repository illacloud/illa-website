---
slug: nvm-use-2024
title: 2024年在Mac上优雅使用nvm管理Node.js
description: Node.js作为前端能力的基础，不再仅仅是“JS服务器运行时”。
authors: [owen]
image: https://cdn.illacloud.com/illa-website/blog/nvm-use/cover.png
tags: [nvm, nodejs, mac, javascript]
date: 2024-01-03T10:00
---

Node.js作为前端能力的基础，不再仅仅是“JS服务器运行时”。许多工具库、本地包管理、模拟环境等都是基于Node.js构建的，使其真正成为前端世界的基础设施。

蓬勃发展的生态系统使每个人在构建前端项目时都需要安装Node.js。然而，由于产品的悠久历史，版本管理成为一个常见问题，一些项目需要新版本，而其他项目需要旧版本。管理多个Node.js版本一直是开发者面临的持续挑战。

目前，开源工具nvm解决了这个问题。使用简单的命令行操作，开发者可以快速在不同的Node.js版本之间切换，从而专注于开发而不是浪费时间在环境配置上。

前端开发的主要设备仍然是MacBook。因此，本文将解释如何在Mac上优雅地安装和使用nvm，以高效管理Node.js版本。

## 推荐一个后端开发的开源项目

[ILLA Cloud](https://illacloud.com) 是一个开箱即用的低代码工具，可以使用简单的JS快速构建内部工具，无需创建新项目。

- Web和应用程序管理面板
- 数据仪表板
- 定制的B2B工具

与使用组件库构建的场景相比，ILLA Cloud允许以10倍的速度构建上述工具。此外，ILLA Cloud支持多用户之间的协作，促进了快速定制后端能力的团队合作。

![仪表板](https://cdn.illacloud.com/illa-website/blog/nvm-use/dashboard.png)

## 介绍nvm

⏬ GitHub仓库：https://github.com/nvm-sh/nvm

⭐ GitHub Stars：72.4k

💪🏼 首次发布日期：2014年12月22日

nvm是一个开源项目，已经维护了将近10年。积极的评价使该项目保持强大，并通过持续维护成为“Node.js版本管理”的完美解决方案。

## 安装nvm

由于我们在开发中使用的是Mac，我强烈建议使用[Homebrew](https://brew.sh)进行包管理，然后使用[Homebrew](https://brew.sh)安装nvm。

要安装Homebrew，建议使用安装脚本。它需要最少的配置，允许立即使用。此外，如果需要，Homebrew会轻松清理卸载存储库。

```shell
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

运行此命令将安装最新版本的Homebrew，自动处理MacOS环境中Xcode Command Tools的安装。

当然，所有这些都是自动化的。以下是安装过程示例。

![homebrew_install](https://cdn.illacloud.com/illa-website/blog/nvm-use/homebrew-install.png)

稍等片刻后，我们可以继续使用已安装的Homebrew安装nvm。

```shell
> brew install nvm
```

在确认同意后，nvm将完全安装。如果您决定不再需要它，可以使用以下命令卸载：

```shell
# 如果不需要nvm，请删除它。
> brew uninstall nvm
```

## 使用nvm

一旦安装了nvm，以下是一些常用命令，可以帮助您入门。这些命令应该可以满足您的日常需求。

```shell
> nvm list
```

“list”命令会显示各种主流Node.js版本。您可以根据需要安装版本，它还会显示您计算机上当前使用的Node.js版本。它将显示一些代号。

![nvm_list](https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-list.png)

例如，“lts/gallim”是Node.js v16的版本名称。要使用此代号进行安装，nvm会自动安装v16的最新版本。这非常方便。您还可以使用此命令检查当前使用的版本。

另一个命令允许您检查当前的Node.js版本：

```shell
> node --version
```

输入此命令后，您可以验证Node.js版本是否已成功切换。

```shell
> nvm install stable
```

第二个命令安装特定的Node.js版本；“stable”指的是特定版本号。您还可以使用特定版本的代号。例如，要安装“Node.js 18”，您将使用“nvm install 18”。在这里，我正在安装“stable”版本。nvm会自动确定最新的Stable版本并为我安装。安装成功后，它将自动切换到已安装的版本。

![stable-install](https://cdn.illacloud.com/illa-website/blog/nvm-use/stable-install.png)

有安装命令的地方，也有卸载命令。使用：

```shell
> nvm uninstall stable
```

来删除相应的版本。

![nvm-uninstall](https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-uninstall.png)

一旦您学会了如何安装和卸载，下一个重要步骤是版本切换。

```shell
> nvm use stable
```

“use”命令允许您快速在当前使用的Node.js版本之间

切换。您还可以使用“stable”代号。这样，您可以在不同项目的不同版本之间快速切换。

![nvm-use](https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-use.png)

## 结论

本文从安装到使用nvm为初学者解释了整个过程。您可以快速尝试并更好地管理您的Node.js版本。

Node.js版本管理是一个长期讨论的问题，nvm是一个优秀的开源项目，有效地解决了这个问题。当然，没有项目是完美的。如果您有其他推荐，请随时留下评论，让更多人了解优秀的开源项目，这是开源爱好者的使命！