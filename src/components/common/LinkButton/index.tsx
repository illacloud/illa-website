import { FC } from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import style from "./index.module.css"
import VectorIcon from "@site/static/img/public/vector.svg"

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  size: "small" | "normal" | "large"
  colorType: "dark" | "light"
  handleClick?: () => void
}

const LINE_NUM = 10

const LinkButton: FC<LinkButtonProps> = ({
  href,
  children,
  size,
  colorType,
  handleClick,
}) => {
  return (
    <Link
      to={href}
      target="_self"
      onClick={handleClick}
      className={clsx(
        style.baseLinkButtonStyle,
        size === "small" && style.smallSizeStyle,
        size === "normal" && style.normalSizeStyle,
        size === "large" && style.largeSizeStyle,
        colorType === "dark" ? style.darkColorStyle : style.lightColorStyle,
      )}
    >
      <span className={style.linkButtonBgStyle}>
        <span className={style.linesStyle}>
          {Array.from({ length: LINE_NUM }).map((_, index) => (
            <span className={style.lineContainerStyle} key={index}>
              <span
                key={index}
                className={clsx(
                  style.lineStyle,
                  colorType === "dark"
                    ? style.darkLineStyle
                    : style.lightLineStyle,
                )}
              />
            </span>
          ))}
        </span>
        <span
          className={clsx(
            style.baseArrowStyle,
            size === "small" && style.smallArrowStyle,
            size === "normal" && style.normalArrowStyle,
            size === "large" && style.largeArrowStyle,
            colorType === "dark" ? style.darkArrowStyle : style.lightArrowStyle,
          )}
        >
          <VectorIcon />
        </span>
      </span>
      <span className="relative z-[1]">{children}</span>
    </Link>
  )
}

export default LinkButton
