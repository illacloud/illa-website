import { translate } from "@docusaurus/Translate"

export const HOME_META_INFO = {
  title: translate({
    id: "meta.title",
    message: "Create business apps like assembling blocks",
  }),
  description: translate({
    id: "meta.description",
    message:
      "Empower your team with AI Agent and advanced low-code tools to create business apps",
  }),
  keywords:
    "illa,illacloud,illa cloud,艾拉云科,Retool,Budibase,Tooljet,UIBakery, Low-code,open-source, developers, developer tool, internal, rust,illa, illabuilder, illa-builder, retool alternative, Appsmith, Appsmith alternative, open-source alternative, budibase alternative,ローコード,低代码,开发者工具,낮은 코드,오픈 소스,オープンソース",
}

export const FAQ_CONTENT = {
  title: translate({
    id: "faq.title",
    message: "Frequently Asked Questions",
  }),
  content: [
    {
      question: translate({
        id: "faq.content.0.question",
        message: "What kind of content can I build with ILLA Cloud?",
      }),
      answer: translate({
        id: "faq.content.0.answer",
        message:
          "You can build any internal application or AI tool you need, and you can also integrate AI with internal applications. For example, a dashboard, an admin panel, file content management, customer management system, text generation tool, image generation tool, email generation tool, and so on.",
      }),
    },
    {
      question: translate({
        id: "faq.content.1.question",
        message: "Who can use ILLA Cloud?",
      }),
      answer: translate({
        id: "faq.content.1.answer",
        message:
          "Whether you are a product manager, full-stack developer, project manager, data analyst...anyone can use ILLA Cloud to build tools: From designing front-end interfaces with drag-and-drop components to integrating with data sources and generating queries using AI assistance, ILLA provides a streamlined experience that removes unnecessary complexities. You don't need to be a tech expert to create your own applications.",
      }),
    },
    {
      question: translate({
        id: "faq.content.2.question",
        message: "How can I benefit from ILLA Cloud?",
      }),
      answer: translate({
        id: "faq.content.2.answer",
        message:
          "ILLA AI not only reduces the cost of building your tools but also integrates any AI capabilities you desire, making your work more efficient and enabling you to generate more valuable content in less time.",
      }),
    },
    {
      question: translate({
        id: "faq.content.3.question",
        message: "Can I customize the AI Agent for my specific business needs?",
      }),
      answer: translate({
        id: "faq.content.3.answer",
        message:
          "Yes, you can! AI Agent is based on a large language model and can be customized to perform specific tasks. You can define the behavior of the AI Agent based on your business requirements. By using ILLA Builder, you can feed data into the AI Agent and train it to accomplish designated tasks such as text processing, image recognition, and natural language processing.",
      }),
    },
    {
      question: translate({
        id: "faq.content.4.question",
        message: "What data sources does ILLA support?",
      }),
      answer: translate({
        id: "faq.content.4.answer",
        message:
          "ILLA supports integration with a variety of data sources, including PostgreSQL, MongoDB, REST API, GraphQL, Google Sheets, and more. You can swiftly connect to any data source without writing code, enabling seamless access to your desired data.",
      }),
    },
    {
      question: translate({
        id: "faq.content.5.question",
        message:
          "Is there any technical support available for ILLA Cloud users?",
      }),
      answer: translate({
        id: "faq.content.5.answer",
        message:
          "Yes, ILLA Cloud offers technical support to its users. If you encounter any issues or have questions about the platform's features, you can reach out to our support team for assistance. We are dedicated to helping you have a seamless experience with ILLA Cloud.",
      }),
    },
  ],
}

export const HOME_SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ILLA Cloud",
      url: "https://www.illacloud.com",
      logo: "https://www.illacloud.com",
      sameAs: [
        "https://twitter.com/illa_cloud",
        "GitHub - illacloud/illa-builder: Create business apps like assembling blocks",
        "https://www.illacloud.com/",
        "https://www.youtube.com/@illacloud",
        "https://www.linkedin.com/company/illacloud",
      ],
    },
    {
      "@type": "WebSite",
      name: "ILLA Cloud",
      url: "https://www.illacloud.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.illacloud.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      url: "www.illacloud.com/illadrive/#WebPage",
      name: "ILLA Cloud",
      description:
        "An open-source low-code platform with react component library to build AI native internal applications in minutes.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ILLA Cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ILLA Cloud is a low-code platform that inherits multiple capabilities from ILLA Builder and ILLA Drive. It provides a seamless experience by allowing users to log in and register to access its features. With ILLA Cloud, you can effortlessly build internal tools, dashboards, CRUD (create, read, update, delete) applications, and more. The platform significantly improves work efficiency and helps companies save costs.",
          },
        },
        {
          "@type": "Question",
          name: "Who can use ILLA Cloud",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whether you are a product manager, full-stack developer, project manager, data analyst...anyone can use ILLA Cloud to build tools: From designing front-end interfaces with drag-and-drop components to integrating with data sources and generating queries using AI assistance, ILLA provides a streamlined experience that removes unnecessary complexities. You don't need to be a tech expert to create your own applications.",
          },
        },
        {
          "@type": "Question",
          name: "What kinds of applications can you develop using ILLA Cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1. Rapid idea implementation: When enterprises experience a high demand for internal tools during rapid growth, ILLA can significantly accelerate the development speed and quality of your internal applications. This helps expedite your company's growth by quickly addressing the tooling needs. 2. No skill limitations for editors: With ILLA, any individual within the organization can build the tools they need without requiring specialized teams or technical skills. This empowers employees across various roles to create their own solutions, fostering innovation and productivity. 3. Cost reduction: By leveraging ILLA, enterprises can allocate their time, workforce, and financial resources towards core business activities. This results in reduced costs as ILLA streamlines the development process, eliminates the need for specialized teams, and minimizes the investment required for tooling development.",
          },
        },
        {
          "@type": "Question",
          name: "What problems can ILLA Cloud solve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With ILLA Cloud, you can build any application you need, such as commonly used internal tools like Dashboards, Admin Panels, CRUD apps, CRM, CMS, and more. Additionally, you can develop AI applications, such as text-to-image applications with Stable Diffusion, audio-to-text applications with Whisper, and even embed OpenAI's GPT models to assist you in completing various tasks.",
          },
        },
        {
          "@type": "Question",
          name: "Which data sources does ILLA support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ILLA supports integration with a variety of data sources, including PostgreSQL, MongoDB, REST API, GraphQL, Google Sheets, and more. You can swiftly connect to any data source without writing code, enabling seamless access to your desired data.",
          },
        },
      ],
    },
    {
      "@type": "VideoObject",
      name: "What is ILLA Cloud",
      description:
        "ILLA Cloud is a low-code platform to make users build internal tools faster.",
      thumbnailUrl:
        "https://cdn.illacloud.com/official-website/img/home/playVideoCover.png",
      uploadDate: "2023-06-15T08:00:00+08:00",
      duration: "PT1M20S",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/video.webm",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/home3/Frame%203341.svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description: "40+ components in ILLA Cloud",
      name: "ILLA Cloud components",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/home3/Frame%203340.svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description: "SQL Generation based on OpenAI in ILLA Cloud",
      name: "ILLA Cloud SQL Generation",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/home3/Frame%203340%20(1).svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description: "Real-time collaboration based on OpenAI in ILLA Cloud",
      name: "ILLA Cloud real-time collaboration",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/datasource/datasource.svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description:
        "ILLA Cloud supports to connect multiple datasource with GUI mode. No code required. ",
      name: "ILLA Cloud data source integration",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/home3/Codepartbgweb.svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description:
        "Build dashboard or any other internal tools with ILLA Cloud in minutes",
      name: "Build dashboard with ILLA Cloud",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/home3/Frame%203356.svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description: "Friendly CDN.Register to use, no configure required",
      name: "ILLA Drive",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/home/home3/Frame%203356%20(1).svg",
      datePublished: "2023-06-15T08:00:00+08:00",
      description:
        "Friendly CDN.Register to use, no configure required. Support anti-leech links",
      name: "Storage and share files via ILLA Drive",
    },
  ],
}
