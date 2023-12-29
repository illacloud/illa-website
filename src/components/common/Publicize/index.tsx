import React from "react"
import style from "./index.module.css"
import { sendTagEvent } from "@site/src/utils/gtag"
import Link from "@docusaurus/Link"
import GithubIcon from "@site/static/img/public/github.svg"
import Translate from "@docusaurus/Translate"

const Publicize = ({ stars }) => {
  return (
    <Link
      href="https://github.com/illacloud/illa-builder"
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
        <span className={style.publicizeStyle} />
        <span className="flex flex-row justify-between items-center h-full gap-[16px] relative z-[1]">
          <span className="flex flex-row justify-between">
            <span className={style.publicIntru}>
              <GithubIcon className="h-[24px] w-[24px]" />

              <span>
                <span>
                  <Translate id="title.github">Github</Translate>
                </span>
                <span className="inline-block w-[45px] text-center">
                  {stars}
                </span>
                <span>
                  <Translate id="title.stars">Stars</Translate>
                </span>
              </span>
            </span>
          </span>
          <span className={style.publicSlogan} role="img" aria-label="star us">
            <Translate id="title.star-us">Star us</Translate> 👉
          </span>
        </span>
      </div>
    </Link>
  )
}

export default Publicize
