import Link from "@docusaurus/Link"
import clsx from "clsx"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import React, { useState } from "react"
import ILLA_LOGO from "@site/static/img/logo.svg"
import WHITE_LOGO from "@site/static/img/whiteLogo.svg"
import MenuIcon from "@site/static/img/public/menu.svg"
import { HeaderMenu } from "./Menu"
import MobileMenu from "./MobileMenu"
import { sendTagEvent } from "@site/src/utils/gtag"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

type Props = {
  hasSticky?: boolean
  trackProgress?: boolean
  whiteTheme?: boolean
}

export const CommonHeader = ({ trackProgress, whiteTheme }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const getUtmParams = useUtmParams()

  const [hasBgColor, setHasBgColor] = useState(false)

  const progressPercentage = useTransform(
    scrollYProgress,
    [0.03, 0.95],
    ["0%", "100%"],
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.04 && !hasBgColor) {
      setHasBgColor(true)
    } else if (latest < 0.004 && hasBgColor) {
      setHasBgColor(false)
    }
  })

  return (
    <>
      <header
        className={clsx(
          "sticky",
          "top-0",
          "z-[100]",
          "backdrop-blur-[50px]",
          hasBgColor
            ? whiteTheme
              ? `bg-[rgba(255,255,255,0.75)] `
              : `bg-[#000000bf]`
            : "",
        )}
      >
        <div
          className={clsx(
            "relative z-[100] px-[20px] py-[22px] lg:py-[16px] lg:px-[40px]",
          )}
        >
          <div
            className={clsx(
              "flex",
              "items-center",
              "w-full",
              "justify-between",
              "gap-[24px]",
            )}
          >
            <Link to={getUtmParams("/")}>
              {whiteTheme ? (
                <ILLA_LOGO className="w-[51px] h-[24px]" />
              ) : (
                <WHITE_LOGO className="w-[51px] h-[24px]" />
              )}
            </Link>
            <button
              type="button"
              className={clsx(
                "text-gray-900 dark:text-white-01",
                "block lg:hidden",
              )}
              onClick={() => {
                sendTagEvent({
                  action: "click",
                  category: "homepage_menu_unfold_mob_click",
                })
                setIsModalOpen(true)
              }}
            >
              <MenuIcon />
            </button>
            <div
              className={clsx(
                "hidden lg:flex",
                "flex-1",
                "w-full",
                "items-center",
                "gap-[8px]",
              )}
            >
              <HeaderMenu whiteTheme={whiteTheme} />
            </div>

            <MobileMenu
              menuExpand={isModalOpen}
              closeMenu={() => {
                setIsModalOpen(false)
              }}
            />
          </div>
        </div>
        {trackProgress && (
          <div className={clsx("w-full", "h-0.5", "translate")}>
            <motion.div
              className={clsx("h-full", "bg-refine-blue")}
              style={{ width: progressPercentage }}
            />
          </div>
        )}
      </header>
    </>
  )
}
