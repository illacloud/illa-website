import React from "react"
import { translate } from "@docusaurus/Translate"
import NotFoundContent from "@theme/NotFound/Content"
import { CommonLayout } from "@site/src/ILLATheme/CommonLayout"
import { CommonHeader } from "@site/src/ILLATheme/CommonHeader"
import CommonFooter from "@site/src/ILLATheme/CommonFooter"
import CommBottom from "@site/src/components/common/CommBottom"
export default function Index() {
  const title = translate({
    id: "theme.NotFound.title",
    message: "Page Not Found",
  })
  return (
    <CommonLayout title={title}>
      <div className="bg-black overflow-visible w-full relative z-[1] flex flex-col h-screen">
        <CommonHeader />
        <NotFoundContent className="h-full" />
        <CommBottom scrollStart={1} scrollEnd={1} />
        <CommonFooter scrollStart={1} scrollEnd={1} />
      </div>
    </CommonLayout>
  )
}
