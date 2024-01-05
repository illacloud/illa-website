import { FC } from "react"
import style from "./index.module.css"
import clsx from "clsx"

interface IconItemProps {
  whiteTheme: boolean
  label: string
  icon: React.ReactNode
  onClick: () => void
}
export const IconItem: FC<IconItemProps> = ({
  whiteTheme,
  label,
  icon,
  onClick,
}) => {
  return (
    <span
      className={clsx(
        "flex flex-row items-center gap-[8px]",
        whiteTheme ? "text-grayBlue-02" : "text-white-02",
      )}
    >
      {icon}
      <span
        className={clsx(
          style.footerItem,
          whiteTheme ? "text-grayBlue-02" : "text-white-02",
        )}
        onClick={onClick}
      >
        {label}
      </span>
    </span>
  )
}
