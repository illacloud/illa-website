import { FC } from "react"
import style from "./index.module.css"

interface ContentHeaderProps {
  title: string
  desc: string
  titleExtra: string
}
const ContentHeader: FC<ContentHeaderProps> = ({ title, desc, titleExtra }) => {
  return (
    <div className={style.containerStyle}>
      <span className={style.titleExtraStyle}>{titleExtra}</span>
      <h2 className={style.titleStyle}>{title}</h2>
      <p className={style.descStyle}>{desc}</p>
    </div>
  )
}

export default ContentHeader
