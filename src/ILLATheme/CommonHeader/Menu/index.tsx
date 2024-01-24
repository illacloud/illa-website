import React, { FC } from "react"
import { MENU_ITEMS, OPERATE_MENU_ITEMS } from "../constants"
import { IHeaderMenuProps } from "../interface"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { sendTagEvent } from "@site/src/utils/gtag"
import style from "./index.module.css"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { Solutions } from "../SolutionsItem"
import ProductsItem from "../ProductsItem"

export const HeaderMenu: FC<IHeaderMenuProps> = (props) => {
  const { whiteTheme, hasBgColor } = props
  const getUtmParams = useUtmParams()

  return (
    <div className="w-full flex items-center justify-between">
      <div className={style.menuItemContainerStyle}>
        <ProductsItem whiteTheme={whiteTheme} />
        <Solutions whiteTheme={whiteTheme} />
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={getUtmParams(item.href)}
            onClick={() => {
              sendTagEvent({
                action: "click",
                category: item.category,
              })
            }}
            className={clsx(
              style.menuItemStyle,
              whiteTheme
                ? "text-gray-02 hover:text-gray-02"
                : "text-white-01 hover:text-white-01",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className={style.menuItemContainerStyle}>
        {OPERATE_MENU_ITEMS.map((item) => {
          return (
            <Link
              key={item.label}
              to={getUtmParams(item.href)}
              className={clsx(
                style.operateItemStyle,
                whiteTheme
                  ? "text-gray-02 hover:text-gray-02 border-gray-02 "
                  : "text-white-01 hover:text-white-01 border-white-01 ",
                item.hasBorder && !hasBgColor ? "border-[1px]" : "border-0",
                item.hasBorder && hasBgColor && style.operateItemStyleBg,
              )}
              onClick={() => {
                sendTagEvent({
                  action: "click",
                  category: item.category,
                })
                item.gaAction &&
                  sendTagEvent({
                    action: item.gaAction,
                  })
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
