import React from "react"
import style from "./index.module.css"
import Translate from "@docusaurus/Translate"
import Compare from "./Compare"
import { compare } from "../content"

export const PricingCompare = () => {
  return (
    <div className={style.compareContainerStyle}>
      <h2 className={style.compareTitle}>
        <Translate id="new_pricing.compare.compare">Compare</Translate>
      </h2>
      <Compare colNum={5} compare={compare} />
    </div>
  )
}
