import { FC } from "react"
import style from "./index.module.css"
import ContentHeader from "../ContentHeader"
import Translate, { translate } from "@docusaurus/Translate"
import Interpolate from "@docusaurus/Interpolate"
import AutomateIcon from "@site/static/img/flow/automateIcon.svg"
import clsx from "clsx"

const CONTENT = {
  titleExtra: translate({
    id: "illa_flow.how_it_works.how_it_works",
    message: "How it works",
  }),
  title: translate({
    id: "illa_flow.how_it_works.automate_anything",
    message: "Automate anything",
  }),
  desc: translate({
    id: "illa_flow.how_it_works.illa_flow_allow_to_integrate",
    message:
      "ILLA Flow allow to integrate with any databases or apis to automate any task you need.",
  }),
  contentImageLeft: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/automate1.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.send_data",
      message:
        "Effortlessly automate your daily data analysis and reporting with our tool. Simply set up scheduled tasks to retrieve data, generate reports, and seamlessly deliver them to your Slack workspace.",
    }),
    desc: translate({
      id: "illa_flow.how_it_works_automate.send_data",
      message: "Send sales report to {everyDay}",
    }),
  },
  contentImageRightTop: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/automate2.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.send_marketing_email",
      message:
        "Streamline your marketing efforts with our AI-powered tool. Generate compelling marketing emails and effortlessly send them to your customers' inbox.",
    }),
    desc: translate({
      id: "illa_flow.how_it_works_automate.send_marketing_email",
      message: "Send {marketing} emails",
    }),
  },

  contentImageRightBottom: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/automate3.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.ecommercial",
      message:
        "Easily retrieve all product information from your data table, and efficiently generate descriptive details for each product using a looping task. Keep your data table up-to-date with the latest product descriptions.",
    }),
    desc: translate({
      id: "illa_flow.how_it_works_code.transformer",
      message: "E-commerial: buil update product description",
    }),
  },
}

const AutomateContent: FC = () => {
  const {
    titleExtra,
    title,
    desc,
    contentImageLeft,
    contentImageRightTop,
    contentImageRightBottom,
  } = CONTENT
  return (
    <div className={style.containerStyle}>
      <ContentHeader title={title} desc={desc} titleExtra={titleExtra} />
      <div className={style.contentContainerStyle}>
        <div
          className={clsx(
            style.contentBaseImageStyle,
            style.contentImageLeftStyle,
          )}
        >
          <span className={style.contentTextStyle}>
            <Interpolate
              values={{
                everyDay: (
                  <span className={style.colorContentTextStyle}>
                    <AutomateIcon className="w-[16px] lg:w-[20px]" />
                    <Translate id="illa_flow.how_it_works_automate.every_day">
                      Every day
                    </Translate>
                  </span>
                ),
              }}
            >
              {contentImageLeft.desc}
            </Interpolate>
          </span>
          <img
            src={contentImageLeft.imageSrc}
            alt={contentImageLeft.imageAlt}
            className={style.imageStyle}
          />
        </div>
        <div className="flex flex-col gap-[12px] lg:gap-[24px] w-full lg:w-[696px]">
          <div
            className={clsx(
              style.contentBaseImageStyle,
              style.contentImageRightTopStyle,
            )}
          >
            <span className={style.contentTextStyle}>
              <Interpolate
                values={{
                  marketing: (
                    <span className={style.colorContentTextStyle}>
                      <Translate id="illa_flow.how_it_works_automate.ecommercial">
                        Marketing
                      </Translate>
                    </span>
                  ),
                }}
              >
                {contentImageRightTop.desc}
              </Interpolate>
            </span>
            <img
              src={contentImageRightTop.imageSrc}
              alt={contentImageRightTop.imageAlt}
              className={style.imageStyle}
            />
          </div>
          <div
            className={clsx(
              style.contentBaseImageStyle,
              style.contentImageRightBottomStyle,
            )}
          >
            <span
              className={clsx(
                style.contentTextStyle,
                "px-[20px] py-0 lg:px-[40px] lg:py-[80px]",
              )}
            >
              {contentImageRightBottom.desc}
            </span>
            <div className="w-full">
              <img
                src={contentImageRightBottom.imageSrc}
                alt={contentImageRightBottom.imageAlt}
                className={clsx(style.imageStyle, "lg:h-full")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomateContent
