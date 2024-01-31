import style from "./index.module.css"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"

const PCHeader = () => {
  return (
    <>
      <div className={clsx(style.containerStyle, "col-start-2")}>
        <div className={style.baseStyle}>
          <Translate id="new_pricing.compare.open_source">
            Open source
          </Translate>
        </div>
      </div>
      <div className={clsx(style.containerStyle, "col-span-3")}>
        <div className={style.baseStyle}>
          <Translate id="new_pricing.compare.cloud">Cloud version</Translate>
        </div>
      </div>
    </>
  )
}

export default PCHeader
