import React, { FC, useRef } from "react"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { sendTagEvent } from "@site/src/utils/gtag"
import { usePaintBg } from "@site/src/hooks/usePaintBg"
import style from "./index.module.css"
import Translate from "@docusaurus/Translate"
import LinkButton from "@site/src/components/common/LinkButton"
import Interpolate from "@docusaurus/Interpolate"
import { motion, useScroll, useTransform } from "framer-motion"
import { addUrlParams } from "@site/src/utils/urlParams"
import { CLOUD_URL, DEMO_BASE_URL } from "@site/src/constants/url"

interface IFirstScreenProps {
  slogan: string
  colorSlogan: string
  description: string
  colorStart: string
  colorEnd: string
  appID: string
  image: string
  imageAlt: string
  bg: React.ReactNode
}

const FirstScreen: FC<IFirstScreenProps> = ({
  slogan,
  colorSlogan,
  description,
  colorStart,
  colorEnd,
  appID,
  image,
  imageAlt,
  bg,
}) => {
  const getUtmParams = useUtmParams()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const rotateX = useTransform(scrollYProgress, [0, 0.03], [10, 0])
  const scale = useTransform(scrollYProgress, [0, 0.03], [0.95, 1])
  const scrollY = useTransform(scrollYProgress, [0, 0.03], ["15%", "0%"])

  usePaintBg(canvasRef, containerRef)

  const handleDemoHref = (appID: string) => {
    const redirectURL = addUrlParams(`${DEMO_BASE_URL}/${appID}/detail`, {
      operateType: "fork",
    })
    const url = getUtmParams(
      `${CLOUD_URL}?redirectURL=${encodeURIComponent(redirectURL)}`,
    )
    return url
  }

  return (
    <div ref={containerRef} className={style.containerStyle}>
      <div className={style.canvasContainerStyle}>
        <canvas ref={canvasRef} />
      </div>
      <span className={style.indexBgStyle}>{bg}</span>
      <div className={style.contentContainer}>
        <div className={style.textContainerStyle}>
          <div className="flex flex-col gap-[16px] items-center">
            <h1 className={style.sloganStyle}>
              <Interpolate
                values={{
                  colorSlogan: (
                    <span
                      className={style.colorSloganStyle}
                      style={{
                        backgroundImage: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
                      }}
                    >
                      {colorSlogan}
                    </span>
                  ),
                }}
              >
                {slogan}
              </Interpolate>
            </h1>
            <span className={style.descStyle}>{description}</span>
          </div>
          <div className="hidden lg:block">
            <LinkButton
              href={handleDemoHref(appID)}
              colorType="light"
              size="large"
              handleClick={() => {
                sendTagEvent({
                  action: "solution_try_for_free",
                })
              }}
            >
              <Translate id="website_4.solution.use_this_template">
                Try now
              </Translate>
            </LinkButton>
          </div>
        </div>
        <div className={style.demoContainerStyle}>
          <motion.div
            className={style.demoImgStyle}
            style={{
              rotateX: rotateX,
              scale: scale,
              y: scrollY,
            }}
          >
            <img src={image} width="100%" alt={imageAlt} />
          </motion.div>
          <img
            className="lg:hidden block w-full rounded-[8px]"
            src={image}
            alt={imageAlt}
          />
        </div>
        <div className={style.linkButtonStyle}>
          <LinkButton
            href={handleDemoHref(appID)}
            size="small"
            colorType="dark"
            handleClick={() => {
              sendTagEvent({
                action: "solution_try_for_free",
              })
            }}
          >
            <Translate id="website_4.solution.use_this_template">
              Try now
            </Translate>
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
export default FirstScreen
