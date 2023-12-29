import Link from "@docusaurus/Link"
import { FC, useEffect, useState } from "react"
import LinearGithubIcon from "@site/static/img/public/linearGithub.svg"
import LinearDiscordIcon from "@site/static/img/public/linearDiscord.svg"
import { sendTagEvent } from "@site/src/utils/gtag"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import style from "./index.module.css"
import Translate, { translate } from "@docusaurus/Translate"
import { IBannerPCProps } from "../interface"
import { CLOUD_URL } from "@site/src/constants/url"
import LinkButton from "../../../common/LinkButton"
import SolutionsMobile from "../components/SolutionsMobile"
import Interpolate from "@docusaurus/Interpolate"

const BannerMobile: FC<IBannerPCProps> = (props) => {
  const [menuExpand] = useState(false)
  const { githubStarts } = props
  const getUtmParams = useUtmParams()
  const description = translate({
    id: "description",
    message:
      "Empower your team with {AIAgent} and advanced low-code tools to create {businessApp}",
  })

  useEffect(() => {
    document.body.style.overflow = menuExpand ? "hidden" : "auto"
  }, [menuExpand])

  return (
    <div className={style.bannerContainer}>
      <div className={style.textContainerStyle}>
        <h1 className={style.sloganStyle}>
          <Translate id="slogan-1">Build AI Driven Business App</Translate>
        </h1>
        <span className={style.descStyle}>
          <Interpolate
            values={{
              businessApp: (
                <span className={style.colorDescLeftStyle}>
                  <Translate id="website_4.description.ai_agent">
                    AI Agent
                  </Translate>
                </span>
              ),
              AIAgent: (
                <span className={style.colorDescRightStyle}>
                  <Translate id="website_4.description.business_app">
                    business app
                  </Translate>
                </span>
              ),
            }}
          >
            {description}
          </Interpolate>
        </span>
        <LinkButton
          href={getUtmParams(CLOUD_URL)}
          colorType="light"
          size="normal"
          handleClick={() => {
            sendTagEvent({
              action: "click",
              category: "homepage_body_try_cloud_free_click",
            })
            sendTagEvent({
              action: "click_try",
            })
          }}
        >
          <Translate id="illa-Cloud">Get started!</Translate>
        </LinkButton>
      </div>
      <div className="flex items-center gap-[40px]">
        <Link
          href="https://github.com/illacloud/illa-builder"
          className={style.linkGroupItemStyle}
          onClick={() => {
            sendTagEvent({
              action: "click",
              category: "homepage_body_github_mob_click",
            })
          }}
        >
          <LinearGithubIcon />
          <div className="text-white-01 text-[13px] flex items-center font-medium">
            <span className="ml-[5px]">
              {githubStarts}
              <Translate id="stars">Starts</Translate>
            </span>
          </div>
        </Link>
        <Link
          href="https://discord.com/invite/illacloud"
          className="flex flex-col items-center gap-[8px]"
          onClick={() => {
            sendTagEvent({
              action: "click",
              category: "homepage_body_discord_mob_click",
            })
          }}
        >
          <LinearDiscordIcon />
          <div className="text-white-01 text-[13px] flex items-center font-medium">
            <span className="ml-[5px] align-middle">
              <Translate id="join-community">Join Discord</Translate>
            </span>
          </div>
        </Link>
      </div>
      <SolutionsMobile />
    </div>
  )
}

export default BannerMobile
