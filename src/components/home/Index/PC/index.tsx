import { FC, useRef } from "react"
import Publicize from "@site/src/components/common/Publicize"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { sendTagEvent } from "@site/src/utils/gtag"
import { usePaintBg } from "@site/src/hooks/usePaintBg"
import style from "./index.module.css"
import Translate, { translate } from "@docusaurus/Translate"
import { IBannerPCProps } from "../interface"
import Solutions from "../components/Solutions"
import LinkButton from "@site/src/components/common/LinkButton"
import { CLOUD_URL } from "@site/src/constants/url"
import Interpolate from "@docusaurus/Interpolate"

const description = translate({
  id: "description",
  message:
    "Empower your team with {AIAgent} and advanced low-code tools to create {businessApp}",
})

const BannerPC: FC<IBannerPCProps> = (props) => {
  const { githubStarts } = props

  const getUtmParams = useUtmParams()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  usePaintBg(canvasRef, containerRef)

  return (
    <div ref={containerRef} className={style.bannerContainerStyle}>
      <div className={style.canvasContainerStyle}>
        <canvas ref={canvasRef} />
      </div>
      <video className={style.bgStyle} loop autoPlay muted>
        <source
          src={require("/img/home3/bannerBg.mp4")?.default}
          type="video/mp4"
        />
      </video>
      <div className={style.bannerContentContainer}>
        <Publicize stars={githubStarts} />
        <div className={style.bannerTextContainerStyle}>
          <div className="flex flex-col gap-[16px]">
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
          </div>
          <div className={style.buttonContainerStyle}>
            <LinkButton
              href={getUtmParams(CLOUD_URL)}
              colorType="light"
              size="large"
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
        </div>
      </div>
      <Solutions />
    </div>
  )
}
export default BannerPC
