import React from "react"
import { CommonLayout } from "../CommonLayout"
import { CommonHeader } from "../CommonHeader"
import CommonFooter from "../CommonFooter"
import MDXContent from "@theme/MDXContent"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import Head from "@docusaurus/Head"
import CommBottom from "@site/src/components/common/CommBottom"
import FirstScreen from "./FirstScreen"

export const SolutionLayout = (props: Record<string, any>) => {
  const { children } = props
  const { frontMatter: metaProps }: any = useBlogPost()

  return (
    <>
      <Head>
        <meta name="twitter:title" content={metaProps.title} />
        <meta name="twitter:description" content={metaProps.description} />
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
