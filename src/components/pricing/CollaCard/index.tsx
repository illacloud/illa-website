import { FC } from "react"
import { translate } from "@docusaurus/Translate"
import style from "./index.module.css"
import TechButton from "../../common/TechButton"
import { CLOUD_URL } from "@site/src/constants/url"

const CONTENT = {
  title: "Colla",
  desc: "Fees for Al Agent runtime, file storage and downloads, and ILLA Flow execution.",
  price: "$10",
  unit: "/5000Colla/month",
  products: [
    {
      label: "File storage and download1",
      desc: "5GB",
    },
    {
      label: "File storage and download2",
      desc: "5GB",
    },
    {
      label: "File storage and download3",
      desc: "5GB",
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
        <TechButton link={CLOUD_URL} btnText="get start" customClass="w-full" />
      </div>
    </div>
  )
}
export default CollaCard
