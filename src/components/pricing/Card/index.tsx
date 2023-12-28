import clsx from "clsx"
import style from "./index.module.css"
import AgentCardBgIcon from "@site/static/img/pricing/agentCardBg.svg"
import BuilderCardBgIcon from "@site/static/img/pricing/builderCardBg.svg"
import TitleCycleIcon from "@site/static/img/pricing/titleCycle.svg"
import PriceTipIcon from "@site/static/img/pricing/priceTip.svg"
import { UpgradeButton } from "../UpgradeButton"
import {
  COLLAR_UNIT_PRICE,
  LICENSE_UNIT_PRICE,
  PRICE_BUILDER_LIST,
  PRICE_COLLAR_LIST,
} from "@site/src/config/Pricing"
import Translate from "@docusaurus/Translate"

const Card = () => {
  return (
    <div className={style.premiumCardContainerStyle}>
      <div className={style.premiumCardContainer}>
        <div className={style.premiumHeaderStyle}>
          <span className={style.premiumTitleStyle}>Premium</span>
          <span className={style.premiumDescStyle}>
            <Translate id="pricing.billing.pricing.premium.desc">
              Upgrade your team to access advanced features
            </Translate>
          </span>
        </div>
        <div className={clsx(style.cardBaseStyle, style.priceCardStyle)}>
          <BuilderCardBgIcon className={style.cardBgStyle} />
          <div className={style.priceListTitleContainerStyle}>
            <TitleCycleIcon
              className={clsx(style.listIconStyle, style.builderListTitleStyle)}
            />
            <span className={style.priceListTitleStyle}>ILLA Builder</span>
          </div>
          <div className={style.priceListStyle}>
            {PRICE_BUILDER_LIST.map((item) => {
              return (
                <div key={item} className={style.listItemStyle}>
                  <PriceTipIcon
                    className={clsx(
                      style.cardIconStyle,
                      style.builderListTitleStyle,
                      style.listIconStyle,
                    )}
                  />
                  <span className={style.listItemNameStyle}>{item}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className={style.operatingStyle}>
          <div>
            <span className={style.priceNumStyle}>
              ${LICENSE_UNIT_PRICE.MONTHLY}
            </span>
            <span className={style.priceNumDescStyle}>
              <Translate id="pricing.billing.pricing.premium.price">
                /month/editor
              </Translate>
            </span>
          </div>
          <UpgradeButton />
        </div>
      </div>

      <div className={style.premiumCardContainer}>
        <div className={style.premiumHeaderStyle}>
          <span className={style.premiumTitleStyle}>Colla</span>
          <span className={style.premiumDescStyle}>
            <Translate id="pricing.billing.pricing.colla.desc">
              Used to pay for value-added services in ILLA Cloud
            </Translate>
          </span>
        </div>
        <div className={clsx(style.cardBaseStyle, style.priceCardStyle)}>
          <AgentCardBgIcon className={style.cardBgStyle} />
          <div className={style.priceListStyle}>
            {PRICE_COLLAR_LIST.map((item) => {
              return (
                <div key={item} className={style.listItemStyle}>
                  <PriceTipIcon
                    className={clsx(
                      style.cardIconStyle,
                      style.agentListTitleStyle,
                      style.listIconStyle,
                    )}
                  />
                  <span className={style.listItemNameStyle}>{item}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className={style.operatingStyle}>
          <div>
            <span className={style.priceNumStyle}>
              ${COLLAR_UNIT_PRICE.MONTHLY}
            </span>
            <span className={style.priceNumDescStyle}>
              <Translate id="pricing.billing.pricing.colla.price">
                /month/5k Colla
              </Translate>
            </span>
          </div>
          <UpgradeButton />
        </div>
      </div>
    </div>
  )
}

export default Card
