import Link from "@docusaurus/Link"
import clsx from "clsx"
import React from "react"
import { translate } from "@docusaurus/Translate"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { CLOUD_URL } from "@site/src/constants/url"

const text = translate({
  id: "blog.blog_desc_left_title",
  message: "Struggling with internal tools?",
})
const description = translate({
  id: "blog.blog_desc_left_desc",
  message:
    "Start building CRUD apps, Dashboards, Admin panels, Sales CRM, AI image generator, etc with ILLA Cloud in minutes!",
})
const image =
  "https://cdn.illacloud.com/illa-website/home/blogIcon/sideBarIcon.webp"

export const BannerSidebar = ({ shouldShowBanner }) => {
  const getUtmParams = useUtmParams()
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "gap-6",
        "py-6",
        "px-4",
        "rounded-2xl",
        "bg-banner-examples-sider-purple",
        "not-prose",
      )}
    >
      <Link
        to={getUtmParams(CLOUD_URL)}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "flex",
          "w-full h-auto xl:h-[152px]",
          "flex-shrink-0",
          "rounded-md",
          "overflow-hidden",
        )}
      >
        <img src={image} alt={text} loading="lazy" />
      </Link>

      <h2 className={clsx("text-2xl font-semibold", "text-gray-0")}>{text}</h2>
      <p className={clsx("text-base", "text-gray-100")}>{description}</p>
    </div>
  )
}
