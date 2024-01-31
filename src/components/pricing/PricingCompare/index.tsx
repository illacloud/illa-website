import React from "react"
import clsx from "clsx"
import style from "./index.module.css"
import Translate from "@docusaurus/Translate"
import Compare from "@site/src/components/common/Compare"
import { compare } from "../tempContent"

export const PricingCompare = () => {
  return (
    <div className={style.compareContainerStyle}>
      <h2 className={style.compareTitle}>
        <Translate id="pricing.compare.title">Compare</Translate>
      </h2>
      <Compare colNum={5} compare={compare} />
    </div>
  )
}
