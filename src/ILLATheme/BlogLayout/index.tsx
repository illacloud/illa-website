import React, { useEffect, useState } from "react"
import { CommonLayout } from "../CommonLayout"
import { CommonHeader } from "../CommonHeader"
// import { BlogFooter } from './blog-footer';
import clsx from "clsx"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { BannerSidebar } from "../../components/banner/siderBar"
import { BannerModal } from "../../components/banner/modal"
import CommonFooter from "../CommonFooter"

type Props = {
  showSidebarBanner?: boolean
} & Record<string, any>

export const ILLABlogLayout = (props: Props) => {
  const [shouldShowBanner, setShouldShowBanner] = useState(false)
  const { children, toc, showSidebarBanner = true, ...layoutProps } = props
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!showSidebarBanner) return

    if (latest > 0.2) {
      setShouldShowBanner(true)
    }

    if (latest < 0.2) {
      setShouldShowBanner(false)
    }
  })

  // const tracker = useScrollTracker();

  // useEffect(() => {
  //   if (!showSidebarBanner) return;

  //   if (tracker.scrollY > 20) {
  //     setShouldShowBanner(true);
  //   }

  //   if (tracker.scrollY < 20) {
  //     setShouldShowBanner(false);
  //   }
  // }, [tracker.scrollY, showSidebarBanner]);

  return (
    <CommonLayout {...layoutProps}>
      {/* If there's TOC, then we can say that this is a blog post page. */}
      {/* Then we can pass `trackProgress` prop to the header. */}
      <CommonHeader hasSticky={true} trackProgress={!!toc} />
      <div
        className={clsx(
          "flex",
          "justify-center",
          "mx-auto",
          "max-w-screen-blog-max",
          "w-full",
        )}
      >
        {showSidebarBanner && (
          <div
            className={clsx(
              "relative",
              "w-[264px]",
              "pl-4",
              "py-10 blog-sm:py-12 blog-md:py-16",
              "hidden xl:block",
              shouldShowBanner && "opacity-100",
              !shouldShowBanner && "opacity-0",
              "transition-opacity duration-300 ease-in-out",
            )}
          >
            <div
              className={clsx(
                "sticky",
                "w-[264px]",
                "z-[1]",
                "top-32",
                "left-0",
              )}
            >
              <BannerSidebar shouldShowBanner={shouldShowBanner} />
            </div>
          </div>
        )}
        <div className={clsx("refine-prose", "flex-1", "min-w-0", "xl:px-8")}>
          {children}
        </div>
        {toc && (
          <div
            className={clsx(
              "w-[280px]",
              "hidden blog-md:block",
              "flex-shrink-0",
            )}
          >
            {toc}
          </div>
        )}
      </div>
      <CommonFooter scrollStart={0} scrollEnd={0} />
      <BannerModal />
    </CommonLayout>
  )
}
