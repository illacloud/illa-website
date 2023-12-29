import React, { useRef, useCallback, FC } from "react"
import LearnMoreIcon from "@site/static/img/landingPage/learnMoreIcon.svg"
import style from "./style.module.css"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { sendTagEvent } from "@site/src/utils/gtag"
import { useElementFirstShow } from "@site/src/hooks/useElementFirstShow"
import { translate } from "@docusaurus/Translate"
import { ILearnMoreProps } from "./interface"

export const LearnMore: FC<ILearnMoreProps> = ({
  href,
  btnText,
  onClick,
  customClass,
  showReport,
}) => {
  const ref = useRef(null)
  const reportShow = useCallback(() => {
    if (!!showReport) {
      sendTagEvent({
        action: "click",
        category: showReport,
      })
    }
  }, [showReport])
  useElementFirstShow(ref, reportShow)

  return (
    <Link
      ref={ref}
      className={clsx(style.learnMore, customClass)}
      onClick={onClick}
      href={href}
    >
      <span>
        {btnText || translate({ id: "learn_more", message: "Learn more" })}
      </span>
      <LearnMoreIcon />
    </Link>
  )
}
