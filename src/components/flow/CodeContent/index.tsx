import { FC } from "react"
import style from "./index.module.css"
import ContentHeader from "../ContentHeader"
import Translate, { translate } from "@docusaurus/Translate"
import Interpolate from "@docusaurus/Interpolate"
import clsx from "clsx"

const CONTENT = {
  titleExtra: translate({
    id: "illa_flow.how_it_works.how_it_works",
    message: "How it works",
  }),
  title: translate({
    id: "illa_flow.how_it_works.code_anywhere",
    message: "Code Anywhere",
  }),
  desc: translate({
    id: "illa_flow.how_it_works.write_javascript",
    message:
      "Write JavaScript to customize the format of data and implement more functions.",
  }),
  contentImageLeft: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/codeLeft.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.code.left",
      message:
        "Enhance flexibility by coding the definition of data input and output. With custom code, you can tailor data handling to your specific needs, ensuring greater adaptability and control.",
    }),
    title: translate({
      id: "illa_flow.how_it_works_code.transformer_desc",
      message: "Transformer",
    }),
    desc: translate({
      id: "illa_flow.how_it_works_code.js",
      message: "Write JavaScript to manipulate data",
    }),
  },
  contentImageRight: {
    imageSrc: "https://cdn.illacloud.com/illa-website/home/flow/codeRight.webp",
    imageAlt: translate({
      id: "illa_flow.image_alt.code.right",
      message:
        "Increase adaptability and control by customizing data input and output definitions through coding. This allows for greater flexibility in handling data to meet your specific requirements.",
    }),
    title: translate({
      id: "illa_flow.how_it_works_code.js",
      message: "Write {jsCode}",
    }),
    desc: translate({
      id: "illa_flow.how_it_works_code.js_desc",
      message: "in any type of resources",
    }),
  },
}

const CodeContent: FC = () => {
  const { titleExtra, title, desc, contentImageLeft, contentImageRight } =
    CONTENT
  return (
    <div className={style.containerStyle}>
      <ContentHeader title={title} desc={desc} titleExtra={titleExtra} />
      <div className={style.contentContainerStyle}>
        <div
          className={clsx(
            style.contentStyle,
            "border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-grayBlue-08",
          )}
        >
          <div className={style.contentHeaderStyle}>
            <span
              className={clsx(
                style.contentTextStyle,
                style.colorContentTextStyle,
              )}
            >
              {contentImageLeft.title}
            </span>
            <span className={style.contentTextStyle}>
              {contentImageLeft.desc}
            </span>
          </div>
          <img
            src={contentImageLeft.imageSrc}
            alt={contentImageLeft.imageAlt}
            className="w-full"
          />
        </div>
        <div className={style.contentStyle}>
          <div className={style.contentHeaderStyle}>
            <span className={style.contentTextStyle}>
              <Interpolate
                values={{
                  jsCode: (
                    <span className={style.colorContentTextStyle}>
                      <Translate id="illa_flow.how_it_works_code.js_code">
                        JS Code
                      </Translate>
                    </span>
                  ),
                }}
              >
                {contentImageRight.title}
              </Interpolate>
            </span>
            <span className={style.contentTextStyle}>
              {contentImageRight.desc}
            </span>
          </div>
          <img
            src={contentImageRight.imageSrc}
            alt={contentImageRight.imageAlt}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default CodeContent
