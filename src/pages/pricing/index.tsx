import FAQ from "@site/src/components/common/FAQ"
import CommBottom from "@site/src/components/common/CommBottom"
import {
  FAQ_CONTENT,
  PRICING_META_INFO,
  PRICING_SCHEMA_DATA,
} from "@site/src/config/Pricing"
import { CommonLayout } from "@site/src/ILLATheme/CommonLayout"
import { CommonHeader } from "@site/src/ILLATheme/CommonHeader"
import CommonFooter from "@site/src/ILLATheme/CommonFooter"
import { FC, useEffect, useRef, useState } from "react"
import { PricingMask } from "@site/src/components/pricing/PricingMask/PricingMask"
import PricingContent from "@site/src/components/pricing"
import Head from "@docusaurus/Head"

const Pricing: FC = () => {
  const ref = useRef<HTMLDivElement>()
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    const item = ref.current
    const observer = new ResizeObserver(() => {
      if (item) {
        setContainerHeight(item.scrollHeight)
      }
    })
    observer.observe(item)
    return () => {
      if (observer) {
        observer.unobserve(item)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="twitter:title" content={PRICING_META_INFO.title} />
        <meta
          name="twitter:description"
          content={PRICING_META_INFO.description}
        />
        <script type="application/ld+json">
          {JSON.stringify(PRICING_SCHEMA_DATA)}
        </script>
      </Head>
      <CommonLayout {...PRICING_META_INFO}>
        <PricingMask height={containerHeight} />
        <div ref={ref} className="w-full px-0">
          <div className="w-full relative z-[1]">
            <CommonHeader />
            <div className="w-full text-white flex flex-col lg:gap-[120px] gap-[60px] lg:pt-[40px] bg-transparent">
              <PricingContent />
              <div className="px-[20px] mx-auto">
                <FAQ title={FAQ_CONTENT.title} content={FAQ_CONTENT.content} />
              </div>
              <CommBottom scrollStart={0.88} scrollEnd={0.93} />
            </div>
          </div>
        </div>
        <CommonFooter scrollStart={0.85} scrollEnd={1} />
      </CommonLayout>
    </>
  )
}

export default Pricing
