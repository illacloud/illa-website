import { FC } from "react"
import { translate } from "@docusaurus/Translate"
import style from "./index.module.css"
import TechButton from "../../common/TechButton"
import { CLOUD_URL } from "@site/src/constants/url"

const CONTENT = {
  title: translate({
    id: "new_pricing.colla.colla",
    message: "Colla",
  }),
  desc: translate({
    id: "new_pricing.colla.fees_for_ai_agent_runtime",
    message:
      "Fees for AI Agent runtime, file storage and downloads, and ILLA Flow execution.",
  }),
  price: "$10",
  unit: translate({
    id: "new_pricing.colla.compare.colla_price",
    message: "/5,000 Colla/month",
  }),
  products: [
    {
      label: translate({
        id: "new_pricing.colla.compare.storage",
        message: "File storage and download",
      }),
      desc: translate({
        id: "new_pricing.colla.compare.storage_pricing",
        message: "5GB",
      }),
    },
    {
      label: translate({
        id: "execution	new_pricing.colla.compare.ai_agent_execution",
        message: "AI Agent",
      }),
      desc: translate({
        id: "new_pricing.colla.compare.approximately",
        message: "Approximately 100,000 words",
      }),
    },
    {
      label: translate({
        id: "new_pricing.colla.compare.illa_flow_execution",
        message: "ILLA Flow execution",
      }),
      desc: translate({
        id: "new_pricing.colla.compare.flow",
        message: "5,000 minutes*blocks",
      }),
    },
  ],
}

const CollaCard: FC = () => {
  const { title, desc, price, unit, products } = CONTENT
  return (
    <div className={style.containerStyle}>
      <div className={style.headerStyle}>
        <h2 className={style.titleStyle}>{title}</h2>
        <span className={style.descStyle}>{desc}</span>
      </div>
      <div className={style.cardContainerStyle}>
        <span className={style.cardPriceContainerStyle}>
          <span className={style.cardPriceStyle}>{price}</span>
          <span className={style.cardUnitStyle}>{unit}</span>
        </span>
        <div className="flex flex-col gap-[24px]">
          {products.map(({ label, desc }) => (
            <div className={style.cardItemStyle} key={label}>
              <span className={style.cardItemLabelStyle}>{label}</span>
              <span className={style.cardItemDescStyle}>{desc}</span>
            </div>
          ))}
        </div>
        <TechButton
          link={CLOUD_URL}
          btnText={translate({
            id: "new_pricing.colla.compare.get_started",
            message: "Get started",
          })}
          customClass="w-full"
        />
      </div>
    </div>
  )
}
export default CollaCard
