import CommBottom from "@site/src/components/common/CommBottom"
import { FLOW_META_INFO, FLOW_SCHEMA_DATA } from "@site/src/config/Flow"
import { CommonLayout } from "@site/src/ILLATheme/CommonLayout"
import { CommonHeader } from "@site/src/ILLATheme/CommonHeader"
import CommonFooter from "@site/src/ILLATheme/CommonFooter"
import { FC } from "react"
import Head from "@docusaurus/Head"
import FirstScreen from "@site/src/components/flow/FirstScreen"
import SwitchContent from "@site/src/components/flow/SwitchContent"
import AutomateContent from "@site/src/components/flow/AutomateContent"
import CodeContent from "@site/src/components/flow/CodeContent"
import DesignContent from "@site/src/components/flow/DesignContent"

const Flow: FC = () => {
  return (
    <>
      <Head>
        <meta name="twitter:title" content={FLOW_META_INFO.title} />
        <meta name="twitter:description" content={FLOW_META_INFO.description} />
        <script type="application/ld+json">
          {JSON.stringify(FLOW_SCHEMA_DATA)}
        </script>
      </Head>
      <CommonLayout {...FLOW_META_INFO}>
        <div className="bg-black overflow-visible w-full relative z-[1]">
          <CommonHeader />
          <div className="w-full mx-auto px-[16px] flex flex-col gap-[100px] lg:gap-[200px] lg:max-w-[1040px] xl:max-w-[1200px] pb-[100px] lg:pb-[200px]">
            <FirstScreen />
            <SwitchContent />
            <AutomateContent />
            <CodeContent />
            <DesignContent />
          </div>
          <CommBottom
            scrollStart={0.88}
            scrollEnd={0.93}
            bgColorFrom="rgba(0, 240, 255, 0.00)"
            bgColorEnd="rgba(0, 240, 255, 0.50)"
          />
        </div>
        <CommonFooter scrollStart={0.9} scrollEnd={1} />
      </CommonLayout>
    </>
  )
}

export default Flow
