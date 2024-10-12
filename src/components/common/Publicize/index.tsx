import React from "react"
import style from "./index.module.css"
import { sendTagEvent } from "@site/src/utils/gtag"
import Link from "@docusaurus/Link"
import GithubIcon from "@site/static/img/public/github.svg"
import Translate from "@docusaurus/Translate"

const Publicize = ({ stars }) => {
  return (
    <Link
      href="https://diagnostic-mushroom-361.notion.site/11d193052cd880bbb372e18c87c13e50?pvs=4"
      className="hover:no-underline"
    >
      <div
        className={style.publicize}
        onClick={() => {
          sendTagEvent({
            action: "click",
            category: "homepage_body_github_banner_click",
          })
        }}
      >
        <span className="flex flex-row justify-between items-center h-full gap-[16px] relative z-[1]">
          <span className={style.publicIntru}>
            <Translate id="notification.stop">
              Our cloud service will be discontinued on November 11, 2024. The
              open-source version remains available.
            </Translate>
          </span>
          <span className="text-[14px] font-[600] underline color-[#E5E1E6]">
            <Translate id="notification.stop_button">Learn more</Translate>
          </span>
        </span>
      </div>
    </Link>
  )
}

export default Publicize
