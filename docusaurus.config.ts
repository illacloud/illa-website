import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "ILLA Cloud",
  tagline: "Dinosaurs are cool",
  favicon: "img/public/favicon.ico",

  // Set the production url of your site here
  url: process.env.ILLA_URL ?? "https://illacloud.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.ILLA_BASE_URL ? process.env.ILLA_BASE_URL : "/",
  organizationName: process.env.ILLA_BASE_URL ? "illacloud" : "", // Usually your GitHub org/user name.
  projectName: process.env.ILLA_BASE_URL ? "illa-website" : "", // Usually your repo name.
  staticDirectories: ["public", "static"],

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ja", "de"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        pages: false,
        theme: {
          customCss: ["./src/ILLATheme/css/custom.css", "./src/css/custom.css"],
        },
        gtag: {
          trackingID: "G-QW745VE33W",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card-large.png",
    colorMode: {
      defaultMode: "dark",
    },
    metadata: [
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@illaCloudHQ",
      },
      {
        name: "twitter:creator",
        content: "@illaCloudHQ",
      },
      {
        name: "keywords",
        content:
          "illa,illacloud,illa cloud,艾拉云科,Retool,Budibase,Tooljet,UIBakery, Low-code,open-source, developers, developer tool, internal, rust,illa, illabuilder, illa-builder, retool alternative, Appsmith, Appsmith alternative, open-source alternative, budibase alternative,ローコード,低代码,开发者工具,낮은 코드,오픈 소스,オープンソース",
      },
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    // @ts-ignore
    async function prefixSvgIdsPlugin() {
      return {
        name: "prefix-svg-ids",
        configureWebpack(config) {
          const svgRule = config.module.rules.find(
            // @ts-ignore
            (rule) => rule.test?.source === "\\.svg$",
          )
          if (svgRule) {
            const svgRuleTyped = svgRule
            const {
              // @ts-ignore
              oneOf: [
                {
                  use: [
                    {
                      options: { svgoConfig },
                    },
                  ],
                },
              ],
            } = svgRuleTyped
            svgoConfig.plugins.push("prefixIds")
          }
        },
      }
    },
    async function taildindcss() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(options) {
          options.plugins.push(
            require("postcss-import"),
            require("tailwindcss"),
            require("postcss-nested"),
            require("autoprefixer"),
          )

          return options
        },
      }
    },
    [
      "./plugins/blog-plugin.js",
      {
        blogTitle: "Blog",
        blogDescription:
          "A resource for ILLA, front-end ecosystem, and web development",
        routeBasePath: "/blog",
        postsPerPage: 12,
        blogSidebarTitle: "All posts",
        blogSidebarCount: 0,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} ILLA.`,
        },
      },
    ],
    "./plugins/solution-plugin.js",
    "./plugins/linkedin.js",
    "./plugins/twitter.js",
    "./plugins/reddit-plugin.js",
    "./plugins/clearbit-plugin.js",
  ],
}

export default config
