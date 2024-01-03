import DiscordIcon from "@site/static/img/public/discord.svg"
import GithubIcon from "@site/static/img/public/github.svg"
import LinkedInIcon from "@site/static/img/public/linkedin.svg"
import ProductHuntIcon from "@site/static/img/public/productHunt.svg"
import TwitterIcon from "@site/static/img/public/twitter.svg"
import { translate } from "@docusaurus/Translate"
import { IFootContentItem } from "./interface"

export const Community: IFootContentItem[] = [
  {
    icon: <GithubIcon />,
    href: "https://github.com/illacloud/illa-builder",
    tagCategory: "homepage_footer_github_click",
    label: "GitHub",
  },
  {
    icon: <TwitterIcon />,
    href: "https://twitter.com/illacloudhq",
    tagCategory: "homepage_footer_twitter_click",
    label: "Twitter",
  },
  {
    icon: <DiscordIcon />,
    href: "https://discord.com/invite/illacloud",
    tagCategory: "homepage_footer_discord_click",
    label: "Discord",
  },
  {
    icon: <ProductHuntIcon />,
    href: "https://www.producthunt.com/posts/illa",
    tagCategory: "homepage_footer_producthunt_click",
    label: "ProductHunt",
  },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/company/illacloud/",
    tagCategory: "homepage_footer_linkedin_click",
    label: "LinkedIn",
  },
]

const AboutUs: IFootContentItem[] = [
  {
    label: translate({
      message: "Status",
      id: "footer.status",
    }),
    href: "https://status.illacloud.com/",
    tagCategory: "homepage_footer_status_click",
  },
  {
    label: translate({
      message: "Roadmap",
      id: "footer.roadmap",
    }),
    href: "https://github.com/orgs/illacloud/projects/4",
    tagCategory: "homepage_footer_roadmap_click",
  },
  {
    label: translate({
      message: "Changelog",
      id: "footer.changelog",
    }),
    href: "https://github.com/illacloud/illa-builder/releases",
    tagCategory: "homepage_footer_changelog_click",
  },
  {
    label: translate({
      message: "Media Kit",
      id: "footer.media",
    }),
    href: "https://illa-cloud-storage.illacloud.com/system-assets/media-kit/illa_media_kit.20230228.zip",
    downloadName: "ILLA Media Kit.zip",
    tagCategory: "homepage_footer_mediakit_click",
  },
]

const Solution: IFootContentItem[] = [
  {
    label: translate({
      id: "ai_header.solutions_title.image_generator",
      message: "AI Image Generator",
    }),
    href: "/image-generator",
    tagCategory: "homepage_menu_solutions_image_generator_click",
  },
  {
    label: translate({
      id: "ai_header.solutions_title.ai_voice_generator",
      message: "AI Voice Generator",
    }),
    href: "/ai-voice-generator",
    tagCategory: "homepage_menu_solutions_ai_voice_generator_click",
  },
  {
    label: translate({
      id: "ai_header.solutions_title.dashboard",
      message: "Data Analysis Dashboard",
    }),
    href: "/dashboard",
    tagCategory: "homepage_menu_solutions_dashboard_click",
  },
  {
    label: translate({
      id: "ai_header.solutions_title.cms",
      message: "Content Management",
    }),
    href: "/cms",
    tagCategory: "homepage_menu_solutions_dashboard_click",
  },
  {
    label: translate({
      id: "ai_header.solutions_title.crm",
      message: "Sales CRM",
    }),
    href: "/crm",
    tagCategory: "homepage_menu_solutions_dashboard_click",
  },
  {
    label: translate({
      id: "ai_header.solutions_title.admin_panel",
      message: "Admin Panel",
    }),
    href: "/admin-panel",
    tagCategory: "homepage_menu_solutions_dashboard_click",
  },
]

const Components: IFootContentItem[] = [
  {
    label: translate({
      message: "Table",
      id: "footer.table",
    }),
    href: "/components/Tables",
    tagCategory: "homepage_footer_table_click",
  },
  {
    label: translate({
      message: "Chart",
      id: "footer.chart",
    }),
    href: "/components/Chart",
    tagCategory: "homepage_footer_chart_click",
  },
  {
    label: translate({
      message: "Upload",
      id: "footer.upload",
    }),
    href: "/components/Upload",
    tagCategory: "homepage_footer_upload_click",
  },
  {
    label: translate({
      message: "Switch",
      id: "footer.switch",
    }),
    href: "/components/Switch",
    tagCategory: "homepage_footer_switch_click",
  },
  {
    label: translate({
      message: "Select",
      id: "footer.select",
    }),
    href: "/components/Select",
    tagCategory: "homepage_footer_select_click",
  },
  {
    label: translate({
      message: "Radio Group",
      id: "footer.radio_group",
    }),
    href: "/components/RadioGroup",
    tagCategory: "homepage_footer_radio_group_click",
  },
  {
    label: translate({
      message: "Checkbox Group",
      id: "footer.checkbox_group",
    }),
    href: "/components/CheckboxGroup",
    tagCategory: "homepage_footer_checkbox_group_click",
  },
  {
    label: translate({
      message: "PDF",
      id: "footer.pdf",
    }),
    href: "/components/PDF",
    tagCategory: "homepage_footer_pdf_click",
  },
  {
    label: translate({
      message: "Video",
      id: "footer.video",
    }),
    href: "/components/Video",
    tagCategory: "homepage_footer_video_click",
  },
]

const Integrations: IFootContentItem[] = [
  {
    label: translate({
      message: "MySQL",
      id: "footer.mysql",
    }),
    href: "/integrations/MySQL",
    tagCategory: "homepage_footer_mysql_click",
  },
  {
    label: translate({
      message: "PostgreSQL",
      id: "footer.postgre",
    }),
    href: "/integrations/PostgreSQL",
    tagCategory: "homepage_footer_postgre_click",
  },
  {
    label: translate({
      message: "MongoDB",
      id: "footer.mongodb",
    }),
    href: "/integrations/MongoDB",
    tagCategory: "homepage_footer_mongodb_click",
  },
  {
    label: translate({
      message: "Firebase",
      id: "footer.firebase",
    }),
    href: "/integrations/Firebase",
    tagCategory: "homepage_footer_firebase_click",
  },
  {
    label: translate({
      message: "Elastic Search",
      id: "footer.elasticsearch",
    }),
    href: "/integrations/ElasticSearch",
    tagCategory: "homepage_footer_elastic_search_click",
  },
  {
    label: translate({
      message: "Microsoft SQL Server",
      id: "footer.mssql",
    }),
    href: "/integrations/MicrosoftSQLServer",
    tagCategory: "homepage_footer_mssql_click",
  },
  {
    label: translate({
      message: "Supabase",
      id: "footer.supabase",
    }),
    href: "/integrations/SupabaseDB",
    tagCategory: "homepage_footer_supabase",
  },
  {
    label: translate({
      message: "DynamoDB",
      id: "footer.dynamo",
    }),
    href: "/integrations/AmazonDynamoDB",
    tagCategory: "homepage_footer_dynamo",
  },
  {
    label: translate({
      message: "Hugging Face Inference API",
      id: "footer.hf",
    }),
    href: "/integrations/HuggingFaceInferenceAPI",
    tagCategory: "homepage_footer_hf_api_click",
  },
]

export const FOOTER_CONTENT = [
  {
    title: translate({
      message: "Components",
      id: "footer.components",
    }),
    items: Components,
  },

  {
    title: translate({
      message: "Integrations",
      id: "footer.integrations",
    }),
    items: Integrations,
  },
  {
    title: translate({
      message: "Solutions",
      id: "ai_header.solutions_title.solutions",
    }),
    items: Solution,
  },
  {
    title: translate({
      message: "Company",
      id: "footer.company",
    }),
    items: AboutUs,
  },
  {
    title: translate({
      message: "Community",
      id: "footer.community",
    }),
    items: Community,
  },
]
