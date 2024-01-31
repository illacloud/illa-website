import React, { FC, MouseEvent } from "react"
import clsx from "clsx"
import style from "./index.module.css"
import DoubtIcon from "@site/static/img/pricing/doubt.svg"
import PriceTipIcon from "@site/static/img/public/priceTip.svg"

interface CardListProps {
  name: string
  values: {
    text: string
    tip: string
    hasLineThrough?: boolean
    whiteThroughLine?: boolean
  }[]
  mouseLeave: () => void
  mouseOver: (
    e: MouseEvent,
    value: string,
    index: number,
    isBound?: boolean,
  ) => void
  index: number
}

export const CardList: FC<CardListProps> = ({
  name,
  values,
  mouseLeave,
  mouseOver,
  index,
}) => {
  return (
    <div className="w-full">
      <p className={style.cardListTitle}>{name}</p>
      {values.map(({ text, tip, hasLineThrough, whiteThroughLine }, i) => {
        return (
          <p className={style.cardListContent} key={`${text}${i}`}>
            {text && !hasLineThrough && (
              <PriceTipIcon className={style.cardListIcon} />
            )}
            <span
              className={clsx(
                hasLineThrough && style.lineThroughStyle,
                whiteThroughLine && "line-through",
              )}
            >
              {text}
              {!hasLineThrough && tip && (
                <>
                  <span
                    className={clsx(style.doubt, "inline-block lg:hidden")}
                    onMouseOver={(e) => {
                      mouseOver(e, tip, index, true)
                    }}
                    onMouseLeave={mouseLeave}
                  >
                    <DoubtIcon className="h-[16px] w-[16px]" />
                  </span>
                  <span
                    className={clsx(style.doubt, "hidden lg:inline-block")}
                    onMouseOver={(e) => {
                      mouseOver(e, tip, index)
                    }}
                    onMouseLeave={mouseLeave}
                  >
                    <DoubtIcon className="h-[16px] w-[16px]" />
                  </span>
                </>
              )}
            </span>
          </p>
        )
      })}
    </div>
  )
}
