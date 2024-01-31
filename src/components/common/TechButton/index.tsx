import { FC } from "react"
import style from "./index.module.css"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

interface TechButtonProps {
  btnText: string
  link?: string
  customClass?: string
  handleClick?: () => void
}

const TechButton: FC<TechButtonProps> = ({
  btnText,
  link,
  customClass,
  handleClick,
}) => {
  const getUtmParams = useUtmParams()
  return (
    <Link
      to={getUtmParams(link)}
      className={clsx("hover:no-underline", customClass)}
      onClick={handleClick}
    >
      <span className={style.techBtn}>{btnText}</span>
    </Link>
  )
}
export default TechButton
