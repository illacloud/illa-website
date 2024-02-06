import { translate } from "@docusaurus/Translate"

export const FLOW_META_INFO = {
  title: translate({
    id: "illa_flow.meta_title.illa_flow",
    message: "ILLA Flow",
  }),
  description: translate({
    id: "illa_flow.meta_description.surpassing_developers",
    message:
      "Surpassing developers' expectations, effortlessly automating workflows",
  }),
}

export const FLOW_SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ILLA Cloud",
      url: "https://www.illacloud.com",
      logo: "https://www.illacloud.com",
      sameAs: [
        "https://twitter.com/illa_cloud",
        "GitHub - illacloud/illa-builder: Create AI-Driven Apps like Assembling Blocks",
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
      url: "www.illacloud.com/illa-flow",
      name: "ILLA Flow",
      description:
        "Surpassing developers' expectations, effortlessly automating workflows",
    },
  ],
}
