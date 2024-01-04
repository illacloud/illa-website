import { translate } from "@docusaurus/Translate"

export const TAB_OPTIONS = [
  {
    label: translate({
      id: "ai_header.solutions_title.dashboard",
      message: "Data Analysis Dashboard",
    }),
    value: 0,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.image_generator",
      message: "AI Image Generator",
    }),
    value: 1,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.ai_voice_generator",
      message: "AI Voice Generator",
    }),
    value: 2,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.cms",
      message: "Content Management",
    }),
    value: 3,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.crm",
      message: "Sales CRM",
    }),
    value: 4,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.admin_panel",
      message: "Admin Panel",
    }),
    value: 5,
  },
]

//   3. Dashboard: ILAcx4p1C7Xz
//   1. Image generator: ILAcx4p1C7Bc
//   2. AI Voice Generator:  ILAcx4p1C7Bb
//   4. CMS: ILAcx4p1C72G
//   5. CRM: ILAcx4p1C7N5
//   6. Admin Panel: ILAcx4p1C7Oy
export const SOLUTIONS_IMAGE = [
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/dashboard_content.webp"
        className="w-full"
        alt="Dashboard content image"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/dashboard_bg.webp"
        className="w-full"
        alt="Dashboard content background image"
      />
    ),
    appID: "ILAcx4p1C7Xz",
    value: 0,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/image_generate_content.webp"
        className="w-full"
        alt="Image generate content image"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/image_generate_bg.webp"
        className="w-full"
        alt="Image generate background image"
      />
    ),
    appID: "ILAcx4p1C7Bc",
    value: 1,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/ai_voice_content.webp"
        className="w-full"
        alt="AI voice content image"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/ai_voice_bg.webp"
        className="w-full"
        alt="AI voice content background image"
      />
    ),
    appID: "ILAcx4p1C7Bb",
    value: 2,
  },
  {
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/cms_bg.webp"
        className="w-full"
        alt="CMS background image"
      />
    ),
    appID: "ILAcx4p1C72G",
    value: 3,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/crm_content.webp"
        className="w-full"
        alt="CRM content image"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/crm_bg.webp"
        className="w-full"
        alt="CRM background image"
      />
    ),
    appID: "ILAcx4p1C7N5",
    value: 4,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/admin_content.webp"
        className="w-full"
        alt="Admin panel content image"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/admin_panel_bg.webp"
        className="w-full"
        alt="Admin panel background image"
      />
    ),
    appID: "ILAcx4p1C7Oy",
    value: 5,
  },
]

const MOBILE_SOLUTIONS_IMAGE = [
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/mix_dashboard.webp"
        className="w-full max-w-[320px]"
        alt="Dashboard content image"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/mix_image_generator.webp"
        className="w-full max-w-[320px]"
        alt="Image generator content image"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/mix_ai_voice.webp"
        className="w-full max-w-[320px]"
        alt="AI voice content image"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/cms_bg.webp"
        className="w-full max-w-[320px]"
        alt="CMS content image"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/mix_crm.webp"
        className="w-full max-w-[320px]"
        alt="CRM content image"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/home/solutions/mix_admin_panel.webp"
        className="w-full max-w-[320px]"
        alt="Admin panel content image"
      />
    ),
  },
]

export const MOBILE_SOLUTIONS = MOBILE_SOLUTIONS_IMAGE.map((item, i) => {
  return {
    ...item,
    ...TAB_OPTIONS[i],
  }
})
