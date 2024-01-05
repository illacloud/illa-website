import { FC } from "react"
import style from "./index.module.css"
import clsx from "clsx"

interface PureItemProps {
  whiteTheme: boolean
  label: string
  onClick: () => void
}
export const PureItem: FC<PureItemProps> = ({ whiteTheme, label, onClick }) => {
  return (
    <span
      className={clsx(
        style.footerItem,
        whiteTheme ? "text-grayBlue-02" : "text-white-02",
      )}
      onClick={onClick}
    >
      {label}
    </span>
  )
}
