import DiscordIcon from '@site/static/img/public/discord.svg';
import GithubIcon from '@site/static/img/public/github.svg';
import LinkedInIcon from '@site/static/img/public/linkedin.svg';
import ProductHuntIcon from '@site/static/img/public/productHunt.svg';
import TwitterIcon from '@site/static/img/public/twitter.svg';
import { translate } from '@docusaurus/Translate';
import { IFootContentItem } from './interface';

export const Community: IFootContentItem[] = [
  {
    icon: <GithubIcon />,
    href: 'https://github.com/illacloud/illa-builder',
    tagCategory: 'homepage_footer_github_click',
    label: 'GitHub',
  },
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/illacloudhq',
    tagCategory: 'homepage_footer_twitter_click',
    label: 'Twitter',
  },
  {
    icon: <DiscordIcon />,
    href: 'https://discord.com/invite/illacloud',
    tagCategory: 'homepage_footer_discord_click',
    label: 'Discord',
  },
  {
    icon: <ProductHuntIcon />,
    href: 'https://www.producthunt.com/posts/illa',
    tagCategory: 'homepage_footer_producthunt_click',
    label: 'ProductHunt',
  },
  {
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/company/illacloud/',
    tagCategory: 'homepage_footer_linkedin_click',
    label: 'LinkedIn',
  },
];

const AboutUs: IFootContentItem[] = [
  {
    label: translate({
      message: 'Status',
      id: 'footer.status',
    }),
    href: 'https://status.illacloud.com/',
    tagCategory: 'homepage_footer_status_click',
    target: 'Status',
  },
  {
    label: translate({
      message: 'Roadmap',
      id: 'footer.roadmap',
    }),
    href: 'https://github.com/orgs/illacloud/projects/4',
    tagCategory: 'homepage_footer_roadmap_click',
    target: 'Roadmap',
  },
  {
    label: translate({
      message: 'Changelog',
      id: 'footer.changelog',
    }),
    href: 'https://github.com/illacloud/illa-builder/releases',
    tagCategory: 'homepage_footer_changelog_click',
    target: 'Changelog',
  },
  {
    label: translate({
      message: 'Media Kit',
      id: 'footer.media',
    }),
    href: 'https://illa-cloud-storage.illacloud.com/system-assets/media-kit/illa_media_kit.20230228.zip',
    downloadName: 'ILLA Media Kit.zip',
    tagCategory: 'homepage_footer_mediakit_click',
  },
];

const Product: IFootContentItem[] = [
  {
    label: translate({
      message: 'ILLA Drive',
      id: 'footer.drive',
    }),
    href: '/illadrive',
    tagCategory: 'homepage_footer_drive_click',
    target: 'drive',
  },
  {
    label: translate({
      message: 'ILLA AI',
      id: 'footer.cloud',
    }),
    href: '/illacloud',
    tagCategory: 'homepage_footer_cloud_click',
    target: 'cloud',
  },
  {
    label: translate({
      message: 'Self host',
      id: 'footer.selfhost',
    }),
    href: '/illa-self-host',
    tagCategory: 'homepage_footer_self_host_click',
    target: 'self_host',
  },
];

const Components: IFootContentItem[] = [
  {
    label: translate({
      message: 'Table',
      id: 'footer.table',
    }),
    href: '/components/Tables',
    tagCategory: 'homepage_footer_table_click',
    target: 'footer_table',
  },
  {
    label: translate({
      message: 'Chart',
      id: 'footer.chart',
    }),
    href: '/components/Chart',
    tagCategory: 'homepage_footer_chart_click',
    target: 'footer_chart',
  },
  {
    label: translate({
      message: 'Upload',
      id: 'footer.upload',
    }),
    href: '/components/Upload',
    tagCategory: 'homepage_footer_upload_click',
    target: 'footer_upload',
  },
  {
    label: translate({
      message: 'Switch',
      id: 'footer.switch',
    }),
    href: '/components/Switch',
    tagCategory: 'homepage_footer_switch_click',
    target: 'footer_switch',
  },
  {
    label: translate({
      message: 'Select',
      id: 'footer.select',
    }),
    href: '/components/Select',
    tagCategory: 'homepage_footer_select_click',
    target: 'footer_select',
  },
  {
    label: translate({
      message: 'Radio Group',
      id: 'footer.radio_group',
    }),
    href: '/components/Radio%20group',
    tagCategory: 'homepage_footer_radio_group_click',
    target: 'footer_radio_group',
  },
  {
    label: translate({
      message: 'Checkbox Group',
      id: 'footer.checkbox_group',
    }),
    href: '/components/Checkbox%20Group',
    tagCategory: 'homepage_footer_checkbox_group_click',
    target: 'footer_checkbox_group',
  },
  {
    label: translate({
      message: 'PDF',
      id: 'footer.pdf',
    }),
    href: '/components/PDF',
    tagCategory: 'homepage_footer_pdf_click',
    target: 'footer_pdf',
  },
  {
    label: translate({
      message: 'Video',
      id: 'footer.video',
    }),
    href: '/components/Video',
    tagCategory: 'homepage_footer_video_click',
    target: 'footer_video',
  },
];

const Integrations: IFootContentItem[] = [
  {
    label: translate({
      message: 'MySQL',
      id: 'footer.mysql',
    }),
    href: '/integrations/MySQL',
    tagCategory: 'homepage_footer_mysql_click',
    target: 'footer_mysql',
  },
  {
    label: translate({
      message: 'PostgreSQL',
      id: 'footer.postgre',
    }),
    href: '/integrations/PostgreSQL',
    tagCategory: 'homepage_footer_postgre_click',
    target: 'footer_postgre',
  },
  {
    label: translate({
      message: 'MongoDB',
      id: 'footer.mongodb',
    }),
    href: '/integrations/MongoDB',
    tagCategory: 'homepage_footer_mongodb_click',
    target: 'footer_mongodb',
  },
  {
    label: translate({
      message: 'Firebase',
      id: 'footer.firebase',
    }),
    href: '/integrations/Firebase',
    tagCategory: 'homepage_footer_firebase_click',
    target: 'footer_firebase',
  },
  {
    label: translate({
      message: 'Elastic Search',
      id: 'footer.elasticsearch',
    }),
    href: '/integrations/Elastic%20Search',
    tagCategory: 'homepage_footer_elastic_search_click',
    target: 'footer_elastic_search',
  },
  {
    label: translate({
      message: 'Microsoft SQL Server',
      id: 'footer.mssql',
    }),
    href: '/integrations/Microsoft%20SQL%20Server',
    tagCategory: 'homepage_footer_mssql_click',
    target: 'footer_mssql',
  },
  {
    label: translate({
      message: 'Supabase',
      id: 'footer.supabase',
    }),
    href: '/integrations/Supabase%20DB',
    tagCategory: 'homepage_footer_supabase',
    target: 'footer_supabase',
  },
  {
    label: translate({
      message: 'DynamoDB',
      id: 'footer.dynamo',
    }),
    href: '/integrations/Amazon%20DynamoDB',
    tagCategory: 'homepage_footer_dynamo',
    target: 'footer_dynamo',
  },
  {
    label: translate({
      message: 'Hugging Face Inference API',
      id: 'footer.hf',
    }),
    href: '/integrations/Hugging%20Face%20Inference%20API',
    tagCategory: 'homepage_footer_hf_api_click',
    target: 'footer_hf',
  },
];

export const footerContent = [
  {
    title: translate({
      message: 'Components',
      id: 'footer.components',
    }),
    items: Components,
  },

  {
    title: translate({
      message: 'Integrations',
      id: 'footer.integrations',
    }),
    items: Integrations,
  },
  // {
  //   title: translate({
  //     message: 'Products',
  //     id: 'footer.product',
  //   }),
  //   items: Product,
  // },
  {
    title: translate({
      message: 'Company',
      id: 'footer.company',
    }),
    items: AboutUs,
  },
  {
    title: translate({
      message: 'Community',
      id: 'footer.community',
    }),
    items: Community,
  },
];
