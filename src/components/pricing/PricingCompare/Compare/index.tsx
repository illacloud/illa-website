import style from "./index.module.css"
import clsx from "clsx"
import PriceTip from "@site/static/img/public/priceTip.svg"
import { Fragment } from "react"
import MobileCompare from "./MobileCompare"
import TechButton from "../../../common/TechButton"
import PCHeader from "./PCHeader"
import { sendTagEvent } from "@site/src/utils/gtag"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { SELF_HOST_DOC_URL } from "@site/src/constants/url"

const Compare = ({ compare, colNum = 3 }) => {
  const noBorder = compare.tableHeader.length - 1
  const getUtmParams = useUtmParams()
  return (
    <>
      <div
        className={clsx(style.compareContainer)}
        style={{
          gridTemplateColumns: `repeat(${colNum}, minmax(0, 1fr))`,
        }}
      >
        <PCHeader />
        <div
          className={clsx(style.tableHeader, style.tableSticky, "border-r")}
        />
        {compare.tableHeader.map(({ label, btnText, link }, i) => (
          <div
            className={clsx(
              style.tableHeader,
              style.tableSticky,
              i !== noBorder ? "border-r" : "",
            )}
            key={`${label}${link}${i}`}
          >
            <h2 className="font-[500] text-[22px] leading-[28px] text-center px-[16px]">
              {label}
            </h2>
            <TechButton
              link={getUtmParams(link)}
              btnText={btnText}
              handleClick={() =>
                link !== SELF_HOST_DOC_URL &&
                sendTagEvent({
                  action: "pricing_try",
                })
              }
            />
          </div>
        ))}
        {compare.items.map(({ isTitle, title, texts }, index) => (
          <Fragment key={`${title}${index}`}>
            <div
              className={clsx(
                isTitle ? style.titleTableContent : style.tableContent,
              )}
            >
              <p
                className={clsx(
                  isTitle
                    ? style.titleTableContentTitle
                    : style.tableContentTitle,
                )}
              >
                {title}
              </p>
            </div>
            {texts.map((val, i) => (
              <div
                className={clsx(
                  style.tableSelect,
                  i !== noBorder ? "border-r" : "",
                )}
                key={`${val}${i}`}
              >
                {typeof val === "boolean" ? (
                  val && (
                    <PriceTip className="w-[24px] h-[24px] text-tech-purple-03" />
                  )
                ) : (
                  <span className="font-[400] text-[14px] leading-[20px] text-white-03 text-center px-[16px]">
                    {val}
                  </span>
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <MobileCompare compare={compare} />
    </>
  )
}

export default Compare
