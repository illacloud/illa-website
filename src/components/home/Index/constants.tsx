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
]

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
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C7W3",
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
    appID: "ILAcx4p1C7W3",
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
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
      />
    ),
    appID: "ILAcx4p1C7W3",
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
    appID: "ILAcx4p1C7W3",
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
    appID: "ILAcx4p1C7W3",
    value: 4,
  },
]

const MOBILE_SOLUTIONS_IMAGE = [
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg2.svg"
        className="w-full"
      />
    ),
  },
  {
    content: (
      <img
        src="https://cdn.illacloud.com/illa-website/test/imageGenerateBg.svg"
        className="w-full"
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
