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
    "Build {businessApp} with low code, make automated {flow}, create {AIAgent} easily",
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
      <div className={style.bannerContentContainer}>
        <Publicize stars={githubStarts} />
        <div className={style.bannerTextContainerStyle}>
          <div className="flex flex-col gap-[16px]">
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
                      <Translate id="website_4.description.flow">
                        flow
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
