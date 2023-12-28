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
