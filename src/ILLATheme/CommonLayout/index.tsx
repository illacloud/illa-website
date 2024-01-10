import React from "react"
import ErrorBoundary from "@docusaurus/ErrorBoundary"
import { PageMetadata } from "@docusaurus/theme-common"
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal"
import ErrorPageContent from "@theme/ErrorPageContent"
import LayoutProvider from "@theme/Layout/Provider"
import SkipToContent from "@theme/SkipToContent"
import { LivePreviewProvider } from "../../components/LivePreviewContext"
import DiscordIcon from "@site/static/img/public/discord.svg"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { DISCORD_URL } from "@site/src/constants/url"

export const CommonLayout = (props: any) => {
  const { children, title, description, keywords, whiteTheme, image } = props

  useKeyboardNavigation()

  return (
    <LayoutProvider>
      <PageMetadata
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      <SkipToContent />
      <div
        className={clsx(
          "main-wrapper",
          "h-full",
          "flex flex-col",
          whiteTheme ? "bg-gray-0" : "bg-black",
          "transition-colors",
          "duration-150",
          "ease-in-out",
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          <LivePreviewProvider>{children}</LivePreviewProvider>
        </ErrorBoundary>
      </div>
      <Link
        to={DISCORD_URL}
        className="w-[64px] h-[64px] fixed z-[99] right-[32px] bottom-[32px] flex justify-center items-center bg-[#5728DD] rounded-[50%] cursor-pointer text-white-01 hover:text-white-01"
      >
        <DiscordIcon width="22px" />
      </Link>
    </LayoutProvider>
  )
}
