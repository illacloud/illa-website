import { MenuItemType, NavbarPopoverItemType } from "./interface"
import { translate } from "@docusaurus/Translate"
import { CLOUD_URL, DISCORD_URL } from "@site/src/constants/url"
import ImageGeneratorIcon from "@site/static/img/solutions/image-generator.svg"
import VoiceGeneratorIcon from "@site/static/img/solutions/voice-generator.svg"
import DashboardIcon from "@site/static/img/solutions/dashboard.svg"
import CmsIcon from "@site/static/img/solutions/cms.svg"
import CrmIcon from "@site/static/img/solutions/crm.svg"
import AdminPanelIcon from "@site/static/img/solutions/admin-panel.svg"

export const SOLUTIONS: NavbarPopoverItemType = {
  label: translate({
    id: "ai_header.solutions_title.solutions",
    message: "Solutions",
  }),
  subPanelTitle: translate({
    id: "ai_header.solutions_sub_title.solutions_by_use_case",
    message: "Solutions by use case",
  }),
  items: [
    {
      label: translate({
        id: "ai_header.solutions_title.image_generator",
        message: "AI Image Generator",
      }),
      description: translate({
        id: "ai_header.solutions_description.image_generator",
        message:
          "Generate images with AI. Make the communication of ideas more efficient.",
      }),
      icon: <ImageGeneratorIcon className="w-[24px] h-[24px]" />,
      href: "/image-generator",
      category: "homepage_menu_solutions_image_generator_click",
    },
    {
      label: translate({
        id: "ai_header.solutions_title.ai_voice_generator",
        message: "AI Voice Generator",
      }),
      description: translate({
        id: "ai_header.solutions_description.ai_voice_generator",
        message:
          "Translation and redubbing, enabling efficient production of video content for diverse language regions.",
      }),
      icon: <VoiceGeneratorIcon className="w-[24px] h-[24px]" />,
      href: "/ai-voice-generator",
      category: "homepage_menu_solutions_ai_voice_generator_click",
    },
    {
      label: translate({
        id: "ai_header.solutions_title.dashboard",
        message: "Data Analysis Dashboard",
      }),
      description: translate({
        id: "ai_header.solutions_description.dashboard",
        message:
          "Build comprehensive data analysis dashboards and drive your business growth with minimal investment.",
      }),
      icon: <DashboardIcon className="w-[24px] h-[24px]" />,
      href: "/dashboard",
      category: "homepage_menu_solutions_dashboard_click",
    },
    {
      label: translate({
        id: "ai_header.solutions_title.cms",
        message: "Content Management",
      }),
      description: translate({
        id: "ai_header.solutions_description.cms",
        message:
          "Deliver consistent content experiences across any platform, web or mobile app",
      }),
      icon: <CmsIcon className="w-[24px] h-[24px]" />,
      href: "/cms",
      category: "homepage_menu_solutions_cms_click",
    },
    {
      label: translate({
        id: "ai_header.solutions_title.crm",
        message: "Sales CRM",
      }),
      description: translate({
        id: "ai_header.solutions_description.crm",
        message: "Better sales CRM solution to close deals faster",
      }),
      icon: <CrmIcon className="w-[24px] h-[24px]" />,
      href: "/crm",
      category: "homepage_menu_solutions_crm_click",
    },
    {
      label: translate({
        id: "ai_header.solutions_title.admin_panel",
        message: "Admin Panel",
      }),
      description: translate({
        id: "ai_header.solutions_description.admin_panel",
        message:
          "Build admin panels at 10x speed to manage data or perform operations",
      }),
      icon: <AdminPanelIcon className="w-[24px] h-[24px]" />,
      href: "/admin-panel",
      category: "homepage_menu_solutions_admin_panel_click",
    },
  ],
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    isPopover: true,
    label: translate({ id: "nav.resource", message: "Resource" }),
    items: [
      {
        label: translate({
          id: "sub_nav.resource.integrations",
          message: "Integrations",
        }),
        category: "homepage_menu_resource_integration_click",
        href: "/integrations",
      },
      {
        label: translate({
          id: "sub_nav.resource.components",
          message: "Components",
        }),
        category: "homepage_menu_resource_components_click",
        href: "/components",
      },
    ],
  },
  {
    isPopover: false,
    label: translate({
      id: "nav.pricing",
      message: "Pricing",
    }),
    href: "/pricing",
    category: "homepage_menu_pricing_click",
  },
  {
    isPopover: false,
    label: translate({
      id: "nav.doc",
      message: "Doc",
    }),
    href: "https://docs.illacloud.com",
    category: "homepage_menu_doc_click",
  },
  {
    isPopover: false,
    label: translate({
      id: "nav.blog",
      message: "Blog",
    }),
    href: "/blog",
    category: "homepage_menu_blog_click",
  },
]

export const OPERATE_MENU_ITEMS = [
  {
    label: translate({
      id: "nav.contact",
      message: "Contact us",
    }),
    href: DISCORD_URL,
    category: "homepage_menu_discord_click",
  },
  {
    label: translate({
      id: "nav.login",
      message: "Login",
    }),
    href: CLOUD_URL,
    category: "homepage_menu_login_click",
    gaAction: "click_signin",
  },
  {
    label: translate({
      id: "nav.signup",
      message: "Get started for free",
    }),
    hasBorder: true,
    href: CLOUD_URL,
    category: "homepage_menu_signup_click",
    gaAction: "click_signup",
  },
]
