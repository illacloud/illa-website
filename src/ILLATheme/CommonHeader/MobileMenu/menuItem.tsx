import React from "react"
import Link from "@docusaurus/Link"
import { IMenuItemProps } from "../interface"
import style from "./index.module.css"
import { sendTagEvent } from "@site/src/utils/gtag"

export const MenuItem: React.FC<IMenuItemProps> = ({ item }) => {
  return (
    <Link
      to={item.href}
      className={style.menuItemStyle}
      onClick={() => {
        sendTagEvent({
          action: "click",
          category: item.category,
        })
      }}
    >
      {item.label}
    </Link>
  )
}
