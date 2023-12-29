import { translate } from "@docusaurus/Translate"

export const INTEGRATIONS_META_INFO = {
  title: translate({
    id: "landingPage.integrations.meta.title",
    message: "ILLA Cloud Integrations",
  }),
  description: translate({
    id: "landingPage.integrations.meta.description",
    message:
      "Learn how to use the integrations to access and work with data resource.",
  }),
}

export const INDEX_INTEGRATIONS_HEADER_DATA = {
  title: translate({
    id: "landingPage.integrations.headerContent.title",
    message: "Connect to any data source",
  }),
  description: translate({
    id: "landingPage.integrations.headerContent.description",
    message:
      "With the ability to connect to mainstream databases or any data connected through APIs, ILLA Cloud allows developers to tightly integrate data obtained from the back-end with front-end components. This enables developers to easily write data calls and achieve extensive information interaction by adding resources and actions to response to user events.",
  }),
  btnText: translate({
    id: "landingPage.integrations.headerContent.btnText",
    message: "Try for Free",
  }),
  name: "integrations",
  leftImage:
    "https://cdn.illacloud.com/official-website/img/official-site/features/dataSource.svg",
}

export const INDEX_INTEGRATIONS_CONTENT_DATA = [
  {
    title: translate({
      id: "landingPage.integrations.classify.database.title",
      message: "Database Integrations",
    }),
    contentList: [
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/mySQL.svg",
        name: "MySQL",
        path: "MySQL",
        description: translate({
          id: "landingPage.integrations.classify.database.mysql.description",
          message:
            "An open-source relational database management system that enables efficient storage and retrieval of data.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/postgres.svg",
        name: "PostgreSQL",
        path: "PostgreSQL",
        description: translate({
          id: "landingPage.integrations.classify.database.postgreSQL.description",
          message:
            "An advanced open-source relational database management system known for its stability and reliability.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/MariaDB.svg",
        name: "MariaDB",
        path: "MariaDB",
        description: translate({
          id: "landingPage.integrations.classify.database.mariadb.description",
          message:
            "A community-driven open-source fork of MySQL with enhanced features and performance improvements.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/TiDB.svg",
        name: "TiDB",
        path: "TiDB",
        description: translate({
          id: "landingPage.integrations.classify.database.tidb.description",
          message:
            "A distributed SQL database that supports both SQL and NoSQL workloads with horizontal scalability and fault tolerance.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/redis.svg",
        name: "Redis",
        path: "Redis",
        description: translate({
          id: "landingPage.integrations.classify.database.redis.description",
          message:
            "An in-memory data structure store often used as a database, cache, and message broker.",
        }),
      },
      {
        name: "Appwrite",
        path: "Appwrite",
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/appwrite.svg",
        description: translate({
          id: "landingPage.integrations.classify.database.appwrite.description",
          message:
            "An open-source backend server platform that provides authentication, database, and storage services for web and mobile applications.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/MongoDB.svg",
        name: "MongoDB",
        path: "MongoDB",
        description: translate({
          id: "landingPage.integrations.classify.database.mongodb.description",
          message:
            "A NoSQL document database that stores data in flexible, JSON-like documents.",
        }),
      },
      {
        name: "Oracle DB",
        path: "Oracle DB",
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/oracledb.svg",
        description: translate({
          id: "landingPage.integrations.classify.database.oracleDB.description",
          message:
            "A high-performance, scalable relational database management system that offers a comprehensive set of features and tools.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/Elastic%20search.svg",
        name: "Elastic Search",
        path: "Elastic Search",
        description: translate({
          id: "landingPage.integrations.classify.database.elasticSearch.description",
          message:
            "A distributed, RESTful search and analytics engine capable of handling large volumes of data.",
        }),
      },
      {
        name: "CouchDB",
        path: "CouchDB",
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/couchDB.svg",
        description: translate({
          id: "landingPage.integrations.classify.database.couchDB.description",
          message:
            "A NoSQL document-oriented database that provides a distributed architecture with incremental replication and conflict detection.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/firebse.svg",
        name: "Firebase",
        path: "Firebase",
        description: translate({
          id: "landingPage.integrations.classify.database.firebase.description",
          message:
            "A platform that offers backend services, including a real-time database, authentication, cloud messaging, and more, for mobile and web applications.",
        }),
      },
      {
        name: "Microsoft SQL Server",
        path: "Microsoft SQL Server",
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/msdb.svg",
        description: translate({
          id: "landingPage.integrations.classify.database.mssql.description",
          message:
            "A relational database management system developed by Microsoft that supports transaction processing, business intelligence, and analytics applications.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/supabase.svg",
        name: "Supabase DB",
        path: "Supabase DB",
        description: translate({
          id: "landingPage.integrations.classify.database.supabaseDB.description",
          message:
            "An open-source alternative to Firebase that offers real-time database, authentication, and storage services.",
        }),
      },
      {
        name: "Neon",
        path: "Neon",
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/NEON.svg",
        description: translate({
          id: "landingPage.integrations.classify.database.neon.description",
          message:
            "The fully managed multi-cloud Postgres with a generous free tier. We separated storage and compute to offer autoscaling, branching, and bottomless storage.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/clickhouse%201.svg",
        name: "Clickhouse",
        path: "Clickhouse",
        description: translate({
          id: "landingPage.integrations.classify.database.supabaseDB.description",
          message:
            "An open-source column-oriented database management system designed for online analytical processing (OLAP) workloads.",
        }),
      },
      {
        name: "Hydra",
        path: "Hydra",
        logo: "https://cdn.illacloud.com/official-website/img/landingpage/Hydra.svg",
        description: translate({
          id: "landingPage.integrations.classify.database.hydra.description",
          message: "An open source, column-oriented RDBMS built on Postgres",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/dynamoDB.svg",
        name: "Amazon DynamoDB",
        path: "Amazon DynamoDB",
        description: translate({
          id: "landingPage.integrations.classify.database.dynamoDB.description",
          message:
            "A fully managed NoSQL database service that offers high performance, scalability, and reliability.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/Snowflake.svg",
        name: "Snowflake",
        path: "Snowflake",
        description: translate({
          id: "landingPage.integrations.classify.database.snowflake.description",
          message:
            "A cloud-based data warehousing platform designed for large-scale data storage and analysis.",
        }),
      },
    ],
  },
  {
    title: translate({
      id: "landingPage.integrations.classify.api.title",
      message: "API Integrations",
    }),
    contentList: [
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/huggingface.svg",
        name: "Hugging Face Inference API ",
        path: "Hugging Face Inference API",
        description: translate({
          id: "landingPage.integrations.classify.api.hfAPI.description",
          message:
            "An API that offers easy-to-use pre-trained natural language processing models for inference tasks.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/huggingface-1.svg",
        name: "Hugging Face Inference Endpoint",
        path: "Hugging Face Inference Endpoint",
        description: translate({
          id: "landingPage.integrations.classify.api.hfEndpoint.description",
          message:
            "An endpoint that allows for easy deployment and scaling of Hugging Face models for inference tasks.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/rest%20api.svg",
        name: "REST API",
        path: "REST API",
        description: translate({
          id: "landingPage.integrations.classify.api.restAPI.description",
          message:
            "A web-based architectural style for building web services that use HTTP protocols to exchange data between client and server.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/Amazon%20S3.svg",
        name: "S3",
        path: "S3",
        description: translate({
          id: "landingPage.integrations.classify.api.s3.description",
          message:
            "A cloud-based object storage service that provides scalable, secure, and durable data storage for various use cases.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/SMTP.svg",
        name: "SMTP",
        path: "SMTP",
        description: translate({
          id: "landingPage.integrations.classify.api.smtp.description",
          message:
            "A protocol used for sending and receiving email messages over the internet.",
        }),
      },
      {
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/GraphQL.svg",
        name: "GraphQL",
        path: "GraphQL",
        description: translate({
          id: "landingPage.integrations.classify.api.graphQL.description",
          message:
            "A query language for APIs that provides a more efficient, powerful, and flexible alternative to traditional REST APIs.",
        }),
      },
      {
        name: "Google Sheets",
        path: "Google Sheets",
        logo: "https://cdn.illacloud.com/official-website/img/official-site/intergration/Google%20sheets.svg",
        description: translate({
          id: "landingPage.integrations.classify.api.googleSheets.description",
          message:
            "A cloud-based spreadsheet software that enables users to create and edit spreadsheets online while collaborating with others in real-time.",
        }),
      },
      {
        name: "Airtable",
        path: "Airtable",
        logo: "https://cdn.illacloud.com/official-website/img/landingpage/airtable.svg",
        description: translate({
          id: "landingPage.integrations.classify.api.airtable.description",
          message:
            "A flexible and collaborative platform for managing projects, data, and teams seamlessly.",
        }),
      },
    ],
  },
]
