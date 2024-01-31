import React, { FC, useMemo, useRef, useState, MouseEvent } from "react"
import style from "./index.module.css"
import Translate, { translate } from "@docusaurus/Translate"
import clsx from "clsx"
import { monthlyContent, annuallyContent } from "./tempContent"
import SwitchPricing from "./SwicthPricing"
import Interpolate from "@docusaurus/Interpolate"
import Link from "@docusaurus/Link"
import { CardList } from "./CardList"
import { PricingCompare } from "./PricingCompare"
import CollaCard from "./CollaCard"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

interface TooltipProps {
  content: string
  styles: {
    top: number
    left: number
    visibility: boolean
  }
  isBound: boolean
}

const Tooltip: FC<TooltipProps> = ({ content, styles, isBound }) => {
  const ref = useRef(null)
  const iconWidth = 8,
    gap = 5,
    width = 200
  const { top, left, visibility } = styles
  const offsetHeight = ref.current?.offsetHeight
  const currentStyle = {
    top: isBound
      ? `${top + 24 + gap}px`
      : `${top - offsetHeight / 2 + iconWidth * 2 - gap}px`,
    left: isBound
      ? `${left - width / 1.5 + iconWidth}px`
      : `${left + iconWidth * 2 + gap * 2}px`,
  }
  return (
    <div
      className={clsx(
        isBound ? style.bottomTip : style.rightTip,
        style.tooltip,
      )}
      ref={ref}
      style={{ visibility: visibility ? "visible" : "hidden", ...currentStyle }}
    >
      <p className={style.tipContent}>{content}</p>
    </div>
  )
}

const PricingContent: FC = () => {
  const [tipContent, setTipContent] = useState("")
  const [isBound, setIsBound] = useState(false)
  const [visibility, setVisibility] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)
  const annuallyText = translate({
    id: "pricing.header.annually",
    message: "Annually {discount}",
  })

  const getUtmParams = useUtmParams()
  const activeList = useMemo(() => {
    return !activeBtn ? monthlyContent : annuallyContent
  }, [activeBtn])

  const onMouseLeave = () => {
    setVisibility(false)
  }

  const onMouseOver = (
    e: MouseEvent,
    value: string,
    index: number,
    isBound?: boolean,
  ) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    setVisibility(true)
    setTop(top)
    setLeft(left)
    setTipContent(value)
    setIsBound(isBound ?? index === activeList.length - 1)
  }

  const resolveMobile = (e) => {
    if (!visibility) return
    e.target?.nodeName !== "SVG" && onMouseLeave()
  }
  return (
    <div className={style.pricingContent} onTouchMove={resolveMobile}>
      <div className={style.pridingListContent}>
        <div className={style.headerContainerStyle}>
          <div className={style.headerTitleContainerStyle}>
            <span className={style.pricingContentTitleExtra}>
              <Translate id="pricing.sub-title">✌️ Free for viewers</Translate>
            </span>
            <h1 className={style.pricingContentTitle}>
              <Translate id="pricing.title">Pricing</Translate>
            </h1>
          </div>
          <div className={style.headerSwitchContainer}>
            <span
              onClick={() => setActiveBtn(false)}
              className={clsx(
                style.pricingContentBtn,
                !activeBtn ? style.pricingContentBtnActive : "",
              )}
            >
              <Translate id="pricing.header.monthly">Monthly</Translate>
            </span>
            <span
              onClick={() => setActiveBtn(true)}
              className={clsx(
                style.pricingContentBtn,
                activeBtn ? style.pricingContentBtnActive : "",
              )}
            >
              <Interpolate
                values={{
                  discount: (
                    <span className={style.discountStyle}>
                      <Translate id="pricing.header.annually_discount">
                        (Save up to ≈ 16%)
                      </Translate>
                    </span>
                  ),
                }}
              >
                {annuallyText}
              </Interpolate>
            </span>
          </div>
        </div>
        <div className={style.cardContainer}>
          {activeList.map(
            (
              {
                title,
                editor,
                viewer,
                href,
                btnContent,
                list,
                isFree,
                hasSpecialColor,
                subTitle,
              },
              index,
            ) => (
              <div
                className={clsx(
                  style.card,
                  hasSpecialColor ? style.lightCard : style.darkStyle,
                )}
                key={`${title}${index}`}
              >
                <div
                  onClick={() => setActiveBtn(!activeBtn)}
                  className={style.cardTitleContainer}
                >
                  <div className="flex justify-between w-full items-center">
                    <span
                      className={clsx(
                        style.cardTitle,
                        hasSpecialColor
                          ? "text-tech-purple-03"
                          : "text-white-01",
                      )}
                    >
                      {title}
                    </span>
                    {subTitle && (
                      <span className={style.subTitle}>{subTitle}</span>
                    )}
                  </div>

                  <span className={style.cardSwitchContainer}>
                    <SwitchPricing
                      isActive={activeBtn}
                      setSwitchState={() => setActiveBtn(!activeBtn)}
                    />
                    <span className={style.cardDesc}>
                      <Translate id="pricing.cycle_switch">
                        Buy 10 Months, Get 2 Free!
                      </Translate>
                    </span>
                  </span>
                </div>

                <div className="flex flex-row gap-[16px] items-center">
                  <div className={style.cardPriceContent}>
                    <span className={style.cardTitleStyle}>
                      <span className={style.priceNum}>{editor.price}</span>
                      <span className={style.priceExtra}>
                        <Translate id="pricing.cycle_month">/month</Translate>
                      </span>
                    </span>
                    <span className={style.priceExtra}>{editor.content}</span>
                  </div>
                  {viewer && (
                    <>
                      <span>+</span>
                      <div className={style.cardPriceContent}>
                        <span className={style.cardTitleStyle}>
                          <span className={style.priceNum}>{viewer.price}</span>
                          <span className={style.priceExtra}>
                            <Translate id="pricing.cycle_month">
                              /month
                            </Translate>
                          </span>
                        </span>
                        <span className={style.priceExtra}>
                          {viewer.content}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <Link href={getUtmParams(href)} className="hover:no-underline">
                  <span
                    className={clsx(
                      style.cardBtn,
                      hasSpecialColor ? style.lightCardBtn : style.darkButton,
                    )}
                  >
                    {btnContent}
                  </span>
                </Link>
                <div className="flex flex-col item-start w-full gap-[12px]">
                  {list.map(({ name, values }) => {
                    return (
                      <CardList
                        key={name}
                        name={name}
                        index={index}
                        values={values}
                        mouseLeave={onMouseLeave}
                        mouseOver={onMouseOver}
                        isFree={isFree}
                      />
                    )
                  })}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <PricingCompare />
      <CollaCard />
      <Tooltip
        content={tipContent}
        styles={{ visibility, left, top }}
        isBound={isBound}
      />
    </div>
  )
}

export default PricingContent
