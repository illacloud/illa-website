import React, { FC } from "react"
import style from "./index.module.css"
import Card from "./Card"
import Translate from "@docusaurus/Translate"

const PricingContent: FC = () => {
  return (
    <div className={style.pricingContent}>
      <div className="w-full flex flex-col items-center justify-center gap-[8px]">
        <span className={style.pricingContentTitleExtra}>
          <Translate id="pricing.sub-title">✌️ Free for viewers</Translate>
        </span>
        <span className={style.pricingContentTitle}>
          <Translate id="pricing.title">Pricing</Translate>
        </span>
      </div>
      <div className="px-[24px] font-[400] text-[14px] leading-[17px] lg:text-[16px] lg:leading-[19px] text-center lg:w-[1040px] w-full">
        <Translate id="pricing.page-desc">
          With the launch of ILLA Cloud Billing, you'll gain access to exclusive
          features such as Audit Logs and Public App. Our billing system is
          based on members with editing rights, including owner, admin, and
          editor roles. Once you subscribe, you can add unlimited viewers at no
          extra cost.
        </Translate>
      </div>
      <div className={style.cardContainerStyle}>
        <Card />
      </div>
    </div>
  )
}

export default PricingContent
