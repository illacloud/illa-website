import { translate } from "@docusaurus/Translate"

export const PRICING_META_INFO = {
  title: translate({
    id: "pricing.title",
    message: "Pricing",
  }),
  description: translate({
    id: "pricing.meta-desc",
    message:
      "Start free with all the features individual developers or small teams need to build internal applications.",
  }),
}

export const PRICE_BUILDER_LIST = [
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.viewer",
    message: "FREE for unlimited viewers",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.audit_log",
    message: "Audit logs",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.public",
    message: "App public",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.sql",
    message: "AI SQL Generation",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.history",
    message: "Backup editing history & restore",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.theme",
    message: "Custom themes for your apps ( coming soon )",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.multi_environment",
    message: "Multi-environment ( coming soon )",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.builder.deployed_version",
    message: "Keep deployed versions & revert ( coming soon )",
  }),
  translate({
    id: "pricing.billing.pricing.premium.feature.agent.gpt",
    message: "Access to more models such as GPT-4, \nGPT-3.5-turbo-16k",
  }),
]

export const PRICE_COLLAR_LIST = [
  translate({
    id: "pricing.billing.pricing.colla.feature.storage",
    message: "Storage",
  }),
  translate({
    id: "pricing.billing.pricing.colla.feature.traffic",
    message: "Traffic",
  }),
  translate({
    id: "pricing.billing.pricing.colla.feature.token",
    message: "AI Agent",
  }),
]

export const LICENSE_UNIT_PRICE = {
  FREE: 0,
  MONTHLY: 20,
  YEARLY: 200,
}
export const COLLAR_UNIT_PRICE = {
  FREE: 0,
  MONTHLY: 10,
  YEARLY: 100,
}

export const FAQ_CONTENT = {
  title: translate({
    id: "pricing.faq.title",
    message: "Frequently Asked Questions",
  }),
  content: [
    {
      question: translate({
        id: "pricing.faq.content.0.question",
        message: "Who are the users that are charged for the product?",
      }),
      answer: translate({
        id: "pricing.faq.content.0.answer",
        message:
          "Users with editing permissions (editor) are charged for the product.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.1.question",
        message: "What are the different types of editors?",
      }),
      answer: translate({
        id: "pricing.faq.content.1.answer",
        message: "The different types of editors are owner, admin, and editor.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.2.question",
        message: "Are viewers charged for using the product?",
      }),
      answer: translate({
        id: "pricing.faq.content.2.answer",
        message: "No, viewers are not charged for using the product.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.3.question",
        message: "How to invite a viewer?",
      }),
      answer: translate({
        id: "pricing.faq.content.3.answer",
        message:
          "To invite a viewer, you need to upgrade the team to any of the Plus, Premium, or Enterprise plans and invite the user via email or link.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.4.question",
        message: "What services does ILLA Cloud provide?",
      }),
      answer: translate({
        id: "pricing.faq.content.4.answer",
        message: "ILLA Builder, ILLA Drive and AI Agent.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.5.question",
        message: "What is ILLA Drive?",
      }),
      answer: translate({
        id: "pricing.faq.content.5.answer",
        message:
          "ILLA Drive is a CDN (Content Delivery Network) that allows storing any files and distributing them to users through the company's websites or other products. Usage of storage and traffic is billed separately.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.6.question",
        message: "What is AI Agent?",
      }),
      answer: translate({
        id: "pricing.faq.content.6.answer",
        message:
          "We provide an open-source AI Agent community with thousands of AI Agents provided by prompt experts and enthusiasts. Everyone can run or modify these AI Agents.",
      }),
    },
    {
      question: translate({
        id: "pricing.faq.content.7.question",
        message: "How is billing done for AI Agent usage?",
      }),
      answer: translate({
        id: "pricing.faq.content.7.answer",
        message:
          "Billing for AI Agent usage is based on Colla, which is a billing concept within ILLA. Colla measures the resources consumed during the runtime of AI Agents.",
      }),
    },
  ],
}

export const PRICING_SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ILLA Cloud",
      url: "https://www.illacloud.com/#organization",
      logo: "https://www.illacloud.com/#logo",
      sameAs: [
        "https://twitter.com/illacloudhq",
        "https://github.com/illacloud/illa-builder",
        "https://www.illacloud.com/",
        "https://www.youtube.com/@illacloud",
        "https://www.linkedin.com/company/illacloud/",
      ],
    },
    {
      "@type": "WebSite",
      name: "ILLA Cloud",
      url: "https://www.illacloud.com/#Website",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.illacloud.com/?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
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
        {
          "@type": "Question",
          name: "What can I build in ILLA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can use ILLA to build websites for any device. We provide dozens of components and data resources, which you can use to develop internal websites (such as dashboard, admin panel, etc) and AI applications such as (speech to text, text to generate pictures, etc.)",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to learn ILLA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It generally takes an engineer around ten minutes to understand the concepts of ILLA, and another hour for it to feel natural.",
          },
        },
        {
          "@type": "Question",
          name: "Can I deploy ILLA on-premises and how to deploy ILLA Cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ILLA CLI enables you to deploy the open-source ILLA Builder on-premises in your own VPC. The setup is via Docker and takes around 15 minutes to get running. We provide all features individual developers or small teams need to build internal applications in the open-source version.If you need more advanced features, please book a call with an engineer to learn more about the Enterprise plan above.",
          },
        },
        {
          "@type": "Question",
          name: "Who counts as a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the Free plan, a user in the team as an owner, administrator, editor, or viewer is counted as a member. In the Plus plan, only the owner, administrator, and editor in your team will be counted as a member to be charged.",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      url: "www.illacloud.com/pricing/#WebPage",
      name: "ILLA Cloud Pricing",
      description:
        "ILLA Cloud Plus supports access control, SQL generation, Audit logs",
    },
  ],
}
