import { FC, Fragment, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import clsx from "clsx"
import style from "./index.module.css"
import { sendTagEvent } from "@site/src/utils/gtag"
import Translate from "@docusaurus/Translate"
import { TAB_OPTIONS, SOLUTIONS_IMAGE } from "../../constants"
import LinkButton from "@site/src/components/common/LinkButton"
import { addUrlParams } from "@site/src/utils/urlParams"
import { CLOUD_URL, DEMO_BASE_URL } from "@site/src/constants/url"

const Solutions: FC = () => {
  const [selectIndex, setSelectIndex] = useState(0)
  const timeId = useRef<NodeJS.Timeout | null>(null)
  const getUtmParams = useUtmParams()

  const handleDemoHref = (appID: string) => {
    const redirectURL = addUrlParams(`${DEMO_BASE_URL}/${appID}/detail`, {
      operateType: "fork",
    })
    const url = getUtmParams(
      `${CLOUD_URL}?redirectURL=${encodeURIComponent(redirectURL)}`,
    )
    return url
  }

  const handleClickTab = (i: number) => {
    setSelectIndex(i)
    if (timeId.current) {
      clearInterval(timeId.current)
    }
    timeId.current = setInterval(() => {
      setSelectIndex((prev) => {
        if (prev === TAB_OPTIONS.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)
  }

  useEffect(() => {
    if (timeId.current) {
      clearInterval(timeId.current)
    }
    timeId.current = setInterval(() => {
      setSelectIndex((prev) => {
        if (prev === TAB_OPTIONS.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => {
      if (timeId.current) {
        clearInterval(timeId.current)
      }
    }
  }, [])
  return (
    <div className={style.solutionContainerStyle}>
      <div className={style.tabsContainerStyle}>
        {TAB_OPTIONS.map((item) => {
          return (
            <div
              key={item.value}
              className={clsx(
                style.tabsItemStyle,
                item.value === selectIndex && style.selectedTabStyle,
              )}
              onClick={() => handleClickTab(item.value)}
            >
              <span className="w-full h-full relative z-[1] text-nowrap">
                {item.label}
              </span>
              {item.value === selectIndex && (
                <motion.div
                  layout="position"
                  className={style.splitterItemStyle}
                  layoutId="underline"
                />
              )}
            </div>
          )
        })}
      </div>
      <div className={style.solutionImageContainerStyle}>
        {SOLUTIONS_IMAGE.map((item) => (
          <Fragment key={item.value}>
            <div
              className={clsx(
                style.solutionBaseBgStyle,
                selectIndex === item.value
                  ? style.solutionSelectBgStyle
                  : style.solutionUnSelectBgStyle,
              )}
            >
              {item.contentBg}
              <div
                className={clsx(
                  style.solutionBaseImageStyle,
                  selectIndex === item.value && style.solutionSelectImageStyle,
                )}
              >
                {item.content}
              </div>
            </div>

            <div className={style.linkButtonStyle}>
              <LinkButton
                href={handleDemoHref(item.appID)}
                size="small"
                colorType="dark"
                handleClick={() => {
                  sendTagEvent({
                    action: "solution_try_for_free",
                  })
                }}
              >
                <Translate id="website_4.solution.use_this_template">
                  Try now
                </Translate>
              </LinkButton>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Solutions
