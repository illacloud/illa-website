import { translate } from "@docusaurus/Translate"

export const TAB_OPTIONS = [
  {
    label: translate({
      id: "ai_header.solutions_title.image_generator",
      message: "Image generator",
    }),
    value: 0,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.ai_voice_generator",
      message: "AI Voice Generator",
    }),
    value: 1,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.dashboard",
      message: "Dashboard",
    }),
    value: 2,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.cms",
      message: "CMS",
    }),
    value: 3,
  },
  {
    label: translate({
      id: "ai_header.solutions_title.crm",
      message: "CRM",
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

//   1. Image generator: ILAcx4p1C7Bc
//   2. AI Voice Generator:  ILAcx4p1C7Bb
//   3. Dashboard: ILAcx4p1C7Xz
//   4. CMS: ILAcx4p1C72G
//   5. CRM: ILAcx4p1C7N5
//   6. Admin Panel: ILAcx4p1C7Oy
export const SOLUTIONS_IMAGE = [
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerate.svg"
        className="w-full"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/Browser%202.png"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C7Bc",
    value: 0,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerate2.svg"
        className="w-full"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg2.svg"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C7Bb",
    value: 1,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerate.svg"
        className="w-full"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/Browser.png"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C7Xz",
    value: 2,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerate2.svg"
        className="w-full"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg2.svg"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C72G",
    value: 3,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerate.svg"
        className="w-full"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C7N5",
    value: 4,
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerate2.svg"
        className="w-full"
      />
    ),
    contentBg: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg2.svg"
        className="w-full"
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
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full max-w-[320px]"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full max-w-[320px]"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full max-w-[320px]"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg2.svg"
        className="w-full max-w-[320px]"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full max-w-[320px]"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg2.svg"
        className="w-full max-w-[320px]"
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