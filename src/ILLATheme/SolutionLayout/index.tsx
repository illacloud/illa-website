import React from "react"
import { CommonLayout } from "../CommonLayout"
import { CommonHeader } from "../CommonHeader"
import CommonFooter from "../CommonFooter"
import MDXContent from "@theme/MDXContent"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import Head from "@docusaurus/Head"
import CommBottom from "@site/src/components/common/CommBottom"
import FirstScreen from "./FirstScreen"
import {
  ADMIN_PANEL_SCHEMA_DATA,
  AI_VOICE_GENERATOR_SCHEMA_DATA,
  CMS_SCHEMA_DATA,
  CRM_SCHEMA_DATA,
  DASHBOARD_SCHEMA_DATA,
  IMAGE_GENERATE_SCHEMA_DATA,
} from "@site/src/config/Solutions"
import ImageGenerateBg from "@site/static/img/solutions/indexBg/image-generator-bg.svg"
import VoiceGenerateBg from "@site/static/img/solutions/indexBg/voice-generator-bg.svg"
import DashBoardBg from "@site/static/img/solutions/indexBg/dashboard-bg.svg"
import CRMBg from "@site/static/img/solutions/indexBg/crm-bg.svg"
import CMSBg from "@site/static/img/solutions/indexBg/cms-bg.svg"
import AdminPanelBg from "@site/static/img/solutions/indexBg/admin-panel-bg.svg"

const getDataForPage = (path: string) => {
  const prefix = /solutions-/
  if (!prefix.test(path)) return
  const pageName = path.split(prefix)[1]
  switch (pageName) {
    case "image-generator":
      return {
        schemaData: IMAGE_GENERATE_SCHEMA_DATA,
        bg: <ImageGenerateBg className="absolute" />,
      }
    case "ai-voice-generator":
      return {
        schemaData: AI_VOICE_GENERATOR_SCHEMA_DATA,
        bg: <VoiceGenerateBg className="absolute" />,
      }
    case "dashboard":
      return {
        schemaData: DASHBOARD_SCHEMA_DATA,
        bg: <DashBoardBg className="absolute" />,
      }
    case "cms":
      return {
        schemaData: CMS_SCHEMA_DATA,
        bg: <CMSBg className="absolute" />,
      }
    case "crm":
      return {
        schemaData: CRM_SCHEMA_DATA,
        bg: <CRMBg className="absolute" />,
      }
    case "admin-panel":
      return {
        schemaData: ADMIN_PANEL_SCHEMA_DATA,
        bg: <AdminPanelBg className="absolute" />,
      }
  }
}

export const SolutionLayout = (props: Record<string, any>) => {
  const { children } = props
  const { frontMatter: metaProps, metadata }: any = useBlogPost()
  const { schemaData, bg } = getDataForPage(metadata.permalink)
  return (
    <>
      <Head>
        <meta name="twitter:title" content={metaProps.title} />
        <meta name="twitter:description" content={metaProps.description} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <CommonLayout {...metaProps}>
        <div className="w-full overflow-visible  bg-black relative z-[1]">
          <CommonHeader />
          <FirstScreen {...metaProps} bg={bg} />
          <div className="w-full lg:max-w-[680px] mx-auto px-[20px] pb-[100px] lg:pb-[200px]">
            <div className="refine-prose markdown">
              <MDXContent>{children}</MDXContent>
            </div>
          </div>
          <CommBottom scrollStart={0.9} scrollEnd={1} />
        </div>
        <CommonFooter scrollStart={0.9} scrollEnd={1} />
      </CommonLayout>
    </>
  )
}
