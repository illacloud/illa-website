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
      "Build {businessApp} with low code, make automated {flow}, create {AIAgent} easily",
  })

  useEffect(() => {
    document.body.style.overflow = menuExpand ? "hidden" : "auto"
  }, [menuExpand])

  return (
    <div className={style.bannerContainer}>
      <div className={style.textContainerStyle}>
        <h1 className={style.sloganStyle}>
          <Translate id="slogan-1">
            Create AI-Driven Apps like Assembling Blocks
          </Translate>
        </h1>
        <span className={style.descStyle}>
          <Interpolate
            values={{
              AIAgent: (
                <span className={style.colorDescAgentStyle}>
                  <Translate id="website_4.description.ai_agent">
                    AI Agent
                  </Translate>
                </span>
              ),
              businessApp: (
                <span className={style.colorDescAppStyle}>
                  <Translate id="website_4.description.business_app">
                    website&app
                  </Translate>
                </span>
              ),
              flow: (
                <span className={style.colorDescFlowStyle}>
                  <Translate id="website_4.description.flow">flow</Translate>
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
          <Translate id="first_button">Get started</Translate>
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
              <Translate id="title.stars">Stars</Translate>
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
