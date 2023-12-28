import style from "./index.module.css"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { sendTagEvent } from "@site/src/utils/gtag"
import VectorIcon from "@site/static/img/public/vector.svg"
import { FC } from "react"
import { ILearnMoreProps } from "./interface"

const LearnMore: FC<ILearnMoreProps> = ({
  href,
  title,
  category,
  leftPadding = false,
}) => {
  return (
    <Link
      className={clsx(style.swipeMore, leftPadding ? "lg:pl-[30px]" : "")}
      to={href}
      target="_self"
      onClick={() => {
        sendTagEvent({
          action: "click",
          category,
        })
      }}
    >
      <span className="underline">{title}</span>
      <VectorIcon />
    </Link>
  )
}

export default LearnMore
