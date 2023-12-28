import React from "react"
import ErrorBoundary from "@docusaurus/ErrorBoundary"
import { PageMetadata } from "@docusaurus/theme-common"
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal"
import ErrorPageContent from "@theme/ErrorPageContent"
import LayoutProvider from "@theme/Layout/Provider"
import SkipToContent from "@theme/SkipToContent"
import { LivePreviewProvider } from "../../components/LivePreviewContext"
import clsx from "clsx"

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
          whiteTheme ? "bg-gray-0" : "bg-gray-900",
          "transition-colors",
          "duration-150",
          "ease-in-out",
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          <LivePreviewProvider>{children}</LivePreviewProvider>
        </ErrorBoundary>
      </div>
    </LayoutProvider>
  )
}
