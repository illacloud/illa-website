import { FC } from "react"
import style from "./index.module.css"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { FLOW_URL } from "@site/src/constants/url"
import Translate from "@docusaurus/Translate"
import { sendTagEvent } from "@site/src/utils/gtag"

const FirstScreen: FC = () => {
  const getUtmParams = useUtmParams()
  return (
    <div className={style.containerStyle}>
      <div className={clsx(style.contentContainerStyle, style.contentWidth)}>
        <div className={style.textContainerStyle}>
          <p className={style.titleExtraStyle}>
            <Translate id="illa_flow.first_screen.illa_flow">
              ILLA Flow
            </Translate>
          </p>
          <h1 className={style.titleStyle}>
            <Translate id="illa_flow.first_screen.surpassing_developers">
              Surpassing developers' expectations, effortlessly automating
              workflows
            </Translate>
          </h1>
        </div>
        <Link
          className={style.tryButtonStyle}
          href={getUtmParams(FLOW_URL)}
          onClick={() => {
            sendTagEvent({
              action: "flow_try_free",
            })
          }}
        >
          <Translate id="illa_flow.first_screen.get_started_for_free">
            Get started for free
          </Translate>
        </Link>
      </div>
      <div className={style.demoContainerStyle}>
        <iframe
          src="https://demo.arcade.software/f3fbFgbkutobcljsUn04?embed"
          loading="lazy"
          allowFullScreen
          className={style.demoStyle}
        />
      </div>
    </div>
  )
}

export default FirstScreen
