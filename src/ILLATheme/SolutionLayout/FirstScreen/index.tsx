import { FC, useRef } from "react"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { sendTagEvent } from "@site/src/utils/gtag"
import { usePaintBg } from "@site/src/hooks/usePaintBg"
import style from "./index.module.css"
import Translate, { translate } from "@docusaurus/Translate"
import { CLOUD_URL } from "@site/src/constants/url"
import LinkButton from "@site/src/components/common/LinkButton"
import Link from "@docusaurus/Link"
import Interpolate from "@docusaurus/Interpolate"
import { motion, useScroll, useTransform } from "framer-motion"

interface IFirstScreenProps {
  slogan: string
  colorSlogan: string
  description: string
  colorStart: string
  colorEnd: string
  href: string
  image: string
}

const FirstScreen: FC<IFirstScreenProps> = ({
  slogan,
  colorSlogan,
  description,
  colorStart,
  colorEnd,
  href,
  image,
}) => {
  const getUtmParams = useUtmParams()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const rotateX = useTransform(scrollYProgress, [0, 0.002], [10, 0])
  const scale = useTransform(scrollYProgress, [0, 0.002], [0.95, 1])

  usePaintBg(canvasRef, containerRef)

  return (
    <div ref={containerRef} className={style.containerStyle}>
      <div className={style.canvasContainerStyle}>
        <canvas ref={canvasRef} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.textContainerStyle}>
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
        <div className={style.demoContainerStyle}>
          <motion.div
            className={style.demoImgStyle}
            style={{
              rotateX: rotateX,
              scale: scale,
            }}
          >
            <img src={image} width="100%" alt="" />
          </motion.div>
          <img className="lg:hidden block w-full" src={image} alt="" />
        </div>
      </div>
    </div>
  )
}
export default FirstScreen
