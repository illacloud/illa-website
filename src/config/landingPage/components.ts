import { translate } from "@docusaurus/Translate"

export const COMPONENTS_META_INFO = {
  title: translate({
    id: "landingPage.components.meta.title",
    message: "ILLA Cloud Components",
  }),
  description: translate({
    id: "landingPage.components.meta.description",
    message:
      "Learn how to use the prebuilt components to customize your app in ILLA Cloud.",
  }),
}

export const INDEX_COMPONENTS_HEADER_DATA = {
  title: translate({
    id: "landingPage.components.headerContent.title",
    message: "Library of built-in components",
  }),
  description: translate({
    id: "landingPage.components.headerContent.description",
    message:
      "ILLA provides a range of commonly used front-end development components, enabling users to easily build front-end interfaces and respond to user actions and display data through simple drag-and-drop operations. Users can construct complex components such as tables, charts, forms, lists, and more through ILLA.",
  }),
  btnText: translate({
    id: "landingPage.components.headerContent.btnText",
    message: "Try for Free",
  }),
  name: "components",
  leftImage:
    "https://cdn.illacloud.com/official-website/img/official-site/features/componentIndex.svg",
}

export const INDEX_COMPONENTS_CONTENT_DATA = [
  {
    title: translate({
      id: "landingPage.components.classify.inputs.title",
      message: "Inputs",
    }),
    contentList: [
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20upload.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.upload.title",
          message: "Upload",
        }),
        path: "Upload",
        description: translate({
          id: "landingPage.components.classify.inputs.upload.description",
          message:
            "The 'Upload' component in ILLA Cloud provides a way for users to upload any type of files to their application.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Switch.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.switch.title",
          message: "Switch",
        }),
        path: "Switch",
        description: translate({
          id: "landingPage.components.classify.inputs.switch.description",
          message:
            "The 'Switch' component in ILLA Cloud provides a toggle switch that allows users to turn on or turn off a particular setting or feature.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Select.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.select.title",
          message: "Select",
        }),
        path: "Select",
        description: translate({
          id: "landingPage.components.classify.inputs.select.description",
          message:
            "The 'Select' component in ILLA Cloud is a drop-down selector that allows users to choose from a list of options, providing a user-friendly and space-efficient way to input data.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Radio%20Group.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.radioGroup.title",
          message: "Radio group",
        }),
        path: "Radio group",
        description: translate({
          id: "landingPage.components.classify.inputs.radioGroup.description",
          message:
            "The 'Radio Group' component in ILLA Cloud is a radio selector that allows users to choose one option from a list of choices, providing a simple and clear way to input and manage data.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Check%20Box.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.checkboxGroup.title",
          message: "Checkbox Group",
        }),
        path: "Checkbox Group",
        description: translate({
          id: "landingPage.components.classify.inputs.checkboxGroup.description",
          message:
            "The 'Checkbox Group' component in ILLA Cloud is a checkbox selector that allows users to select multiple options from a list, providing a simple and efficient way to manage data.",
        }),
      },
    ],
  },
  {
    title: translate({
      id: "landingPage.components.classify.data.title",
      message: "Data",
    }),
    contentList: [
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Chart.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.chart.title",
          message: "Chart",
        }),
        path: "Chart",
        description: translate({
          id: "landingPage.components.classify.inputs.chart.description",
          message:
            "The 'Chart' component in ILLA Cloud displays multiple types of charts based on linked data, providing users with clear and visually appealing representations of complex data.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Table.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.tables.title",
          message: "Tables",
        }),
        path: "Tables",
        description: translate({
          id: "landingPage.components.classify.inputs.tables.description",
          message:
            "The 'Table' component in ILLA Cloud displays data from a database in a tabular format, making it easy for users to view, sort, and analyze large amounts of information at a glance.",
        }),
      },
    ],
  },
  {
    title: translate({
      id: "landingPage.components.classify.Presentation.title",
      message: "Presentation",
    }),
    contentList: [
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20PDF.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.pdf.title",
          message: "PDF",
        }),
        path: "PDF",
        description: translate({
          id: "landingPage.components.classify.inputs.pdf.description",
          message:
            "The 'PDF' component in ILLA Cloud is a display element that allows users to view and interact with PDF files within the application.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Video.svg",
        name: translate({
          id: "landingPage.components.classify.inputs.video.title",
          message: "Video",
        }),
        path: "Video",
        description: translate({
          id: "landingPage.components.classify.inputs.video.description",
          message:
            "The 'Video' component in ILLA Cloud is a display element that allows users to play and interact with videos within the application.",
        }),
      },
    ],
  },
]

export const COMPONENTS_SCHEMA_DATA = {
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
      "@type": "WebPage",
      url: "www.illacloud.com/components/#WebPage",
      name: "ILLA Components",
      description:
        "ILLA Cloud provides multiple component which allows users to create front-end interfacecs quickly",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/official-site/features/componentIndex.svg",
      datePublished: "2023-06-15",
      description:
        "Build your internal tools with table, form, chart, list in ILLA Cloud",
      name: "ILLA Components",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Table.svg",
      datePublished: "2023-06-15",
      description: "Build internal tools with table in ILLA Cloud",
      name: "ILLA Cloud & Table",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Chart.svg",
      datePublished: "2023-06-15",
      description: "Build internal tools with table in ILLA Cloud",
      name: "ILLA Cloud & Table",
    },
    {
      "@type": "ImageObject",
      author: "ILLA Cloud",
      contentUrl:
        "https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20upload.svg",
      datePublished: "2023-06-15",
      description: "Build internal tools with upload in ILLA Cloud",
      name: "ILLA Cloud & Upload",
    },
  ],
}
