import { FC } from "react"
import style from "./index.module.css"
import ContentHeader from "../ContentHeader"
import { translate } from "@docusaurus/Translate"
import clsx from "clsx"

const tempContent = {
  titleExtra: translate({
    id: "illa_flow.how_it_works.how_it_works",
    message: "How it works",
  }),
  title: translate({
    id: "illa_flow.how_it_works.customize_your_business_automation",
    message: "Unlock Team's Potential with ILLA Product Hub",
  }),
  desc: translate({
    id: "illa_flow.how_it_works.customize_your_business_automation_effortlessly,_unleash_productivity,_accelerate_business_growth.",
    message:
      "Customize Your Business Automation Effortlessly, Unleash Productivity, Accelerate Business Growth.",
  }),
  contentImageTop: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/design1.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.centralize",
      message:
        "Centralize your resources with us by seamlessly connecting to your database, building applications, creating automated workflows, and integrating AI capabilities all in one place. Streamline your operations for maximum efficiency",
    }),
    title: translate({
      id: "illa_flow.how_it_works.centralize_resources",
      message: "Centralize resources",
    }),
    desc: translate({
      id: "illa_flow.how_it_works.centralize_your_resources",
      message:
        "Centralize your resources and address your business needs in one place.",
    }),
  },
  contentImageBottomLeft: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/design2.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.more_intelligent",
      message:
        "Integrate with AI effortlessly and customize AI behavior without the need for coding skills. Tailor AI performance to your specific requirements with ease.",
    }),
    title: translate({
      id: "illa_flow.how_it_works.more_intelligent",
      message: "More intelligent",
    }),
    desc: translate({
      id: "illa_flow.how_it_works.integration_with_ai_agent",
      message: "Integration with AI Agent, make the workflow more intelligent.",
    }),
  },
  contentImageBottomRight: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/design3.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.integrate",
      message:
        "Enhance the capabilities of your internal tools by seamlessly connecting with ILLA Builder's App. Unlock new functionalities and features to optimize your internal processes.",
    }),
    title: translate({
      id: "illa_flow.how_it_works.integrate_with_illa_builder",
      message: "Integrate with ILLA Builder",
    }),
    desc: translate({
      id: "illa_flow.how_it_works.enhance_the_power_of_your_internal_tools",
      message: "Enhance the power of your internal tools.",
    }),
  },
}

const DesignContent: FC = () => {
  const {
    titleExtra,
    title,
    desc,
    contentImageTop,
    contentImageBottomLeft,
    contentImageBottomRight,
  } = tempContent
  return (
    <div className={style.containerStyle}>
      <ContentHeader title={title} desc={desc} titleExtra={titleExtra} />
      <div className={clsx(style.contentImageStyle, "flex-col lg:flex-row")}>
        <div className={style.contentImageTopTextStyle}>
          <span className={style.contentTitleStyle}>
            {contentImageTop.title}
          </span>
          <span className={style.contentDescStyle}>{contentImageTop.desc}</span>
        </div>
        <div className="w-full">
          <img
            src={contentImageTop.imageSrc}
            alt={contentImageTop.imageAlt}
            className={style.imageStyle}
          />
        </div>
      </div>
      <div className={style.contentContainerStyle}>
        <div className={clsx(style.contentImageStyle, "flex-col")}>
          <div className={style.contentImageBottomTextStyle}>
            <span className={style.contentTitleStyle}>
              {contentImageBottomLeft.title}
            </span>
            <span className={style.contentDescStyle}>
              {contentImageBottomLeft.desc}
            </span>
          </div>
          <img
            src={contentImageBottomLeft.imageSrc}
            alt={contentImageBottomLeft.imageAlt}
            className={style.imageStyle}
          />
        </div>
        <div className={clsx(style.contentImageStyle, "flex-col")}>
          <div className={style.contentImageBottomTextStyle}>
            <span className={style.contentTitleStyle}>
              {contentImageBottomRight.title}
            </span>
            <span className={style.contentDescStyle}>
              {contentImageBottomRight.desc}
            </span>
          </div>
          <img
            src={contentImageBottomRight.imageSrc}
            alt={contentImageBottomRight.imageAlt}
            className={style.imageStyle}
          />
        </div>
      </div>
    </div>
  )
}

export default DesignContent
