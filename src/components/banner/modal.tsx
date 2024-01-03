import React, { FC, Fragment, useRef, useState } from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { Dialog, Transition } from "@headlessui/react"
import { translate } from "@docusaurus/Translate"
import useLocalStorage from "@site/src/hooks/localstorage"
import { useLocation } from "@docusaurus/router"
import { useMotionValueEvent, useScroll } from "framer-motion"
import CloseIcon from "@site/static/img/public/close.svg"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { CLOUD_URL } from "@site/src/constants/url"

const SCROLL_TRESHOLD = 0.79
const SCROLL_MAX = 1
const MAX_VISIT_COUNT = 9

type Props = {
  title?: string
  variant?: "gray" | "purple"
  image?: {
    src?: string
    alt?: string
    href?: string
  }
  button?: {
    text: string
    href?: string
    onClick?: () => void
  }
}

export const BannerModal: FC<Props> = ({
  title = translate({
    id: "blog.scroll_down",
    message: "Build AI Driven Business Apps with ILLA Cloud",
  }),
  variant = "purple",
  image = {
    src: "https://cdn.illacloud.com/illa-website/home/blogIcon/modalIcon.webp",
    alt: "Build AI Driven Business Apps with ILLA Cloud",
    href: CLOUD_URL,
  },
}) => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [visitCount, setVisitCount] = useLocalStorage("banner-modal", null)
  const scrollTresholdExceeded = useRef(false)
  const getUtmParams = useUtmParams()

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathname === "/blog/" || pathname === "/blog") return
    if (scrollTresholdExceeded.current || isOpen) return

    if (latest > SCROLL_TRESHOLD && latest < SCROLL_MAX) {
      scrollTresholdExceeded.current = true

      if (visitCount === MAX_VISIT_COUNT || visitCount === null) {
        setIsOpen(true)
        setVisitCount(0)
      } else {
        setVisitCount(visitCount + 1)
        scrollTresholdExceeded.current = true
      }
    }
  })

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-modal"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel
                className={clsx(
                  "w-full min-h-screen",
                  "flex flex-col justify-center items-center",
                )}
              >
                <div
                  className={clsx(
                    "relative",
                    "rounded-3xl",
                    "max-w-[576px]",
                    "py-8",
                    "px-4 md:px-8",
                    variant === "gray" && "bg-banner-examples-modal-gray",
                    variant === "purple" && "bg-banner-examples-modal-purple",
                  )}
                >
                  <div
                    className={clsx(
                      "flex",
                      "flex-col",
                      "items-center",
                      "gap-8",
                      "text-center",
                      "not-prose",
                    )}
                  >
                    <Link
                      to={getUtmParams(image?.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "flex",
                        "h-auto xl:h-[192px]",
                        "flex-shrink-0",
                        "rounded-lg",
                        "overflow-hidden",
                        "focus:outline-none",
                      )}
                    >
                      <img
                        className={clsx("object-contain")}
                        src={image?.src}
                        alt={image?.alt ?? title}
                        loading="lazy"
                      />
                    </Link>
                    <p
                      className={clsx(
                        "text-2xl",
                        "font-semibold",
                        variant === "gray" && "bg-clip-text",
                        variant === "gray" && "text-transparent",
                        variant === "gray" && "bg-banner-examples-text",
                        variant === "purple" && "text-gray-0",
                      )}
                    >
                      {title}
                    </p>
                    {/* <LandingRainbowButton
                      className={clsx('w-max')}
                      buttonClassname={clsx('!px-4', '!py-4')}
                      href={button.href}
                      onClick={button.onClick}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={clsx(
                          'text-gray-900',
                          'text-base',
                          'font-bold',
                        )}
                      >
                        {button.text}
                      </div>
                      <ArrowRightIcon className={clsx('w-4', 'h-4')} />
                    </LandingRainbowButton> */}
                  </div>
                  <button
                    className={clsx(
                      "absolute",
                      "top-2 right-2",
                      "w-8 h-8",
                      "flex items-center justify-center flex-shrink-0",
                      "text-gray-0",
                      "rounded-full",
                      "bg-gray-900/20",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon className="w-4 h-4" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
