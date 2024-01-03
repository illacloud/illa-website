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

const getSchemaData = (path: string) => {
  const prefix = /solutions-/
  if (!prefix.test(path)) return
  const pageName = path.split(prefix)[1]
  switch (pageName) {
    case "image-generator":
      return IMAGE_GENERATE_SCHEMA_DATA
    case "ai-voice-generator":
      return AI_VOICE_GENERATOR_SCHEMA_DATA
    case "dashboard":
      return DASHBOARD_SCHEMA_DATA
    case "cms":
      return CMS_SCHEMA_DATA
    case "crm":
      return CRM_SCHEMA_DATA
    case "admin-panel":
      return ADMIN_PANEL_SCHEMA_DATA
  }
}

export const SolutionLayout = (props: Record<string, any>) => {
  const { children } = props
  const { frontMatter: metaProps, metadata }: any = useBlogPost()
  const schemaData = getSchemaData(metadata.permalink)
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
          <FirstScreen {...metaProps} />
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
