import React from "react"
import { CommonLayout } from "../CommonLayout"
import { CommonHeader } from "../CommonHeader"
import clsx from "clsx"
import { BannerModal } from "../../components/banner/modal"
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
        <html data-active-page="index" />
        <title>{metaProps?.title}</title>
        <meta property="og:title" content={metaProps?.title} />
      </Head>
      <CommonLayout {...metaProps}>
        <div className="w-full overflow-visible  bg-black relative z-[1]">
          <CommonHeader />
          <FirstScreen {...metaProps} />
          <div className="w-full lg:max-w-[1040px] xl:max-w-[1200px] mx-auto px-[20px]">
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
