import Link from "@docusaurus/Link"
import style from "./index.module.css"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { CLOUD_URL } from "@site/src/constants/url"
import Translate from "@docusaurus/Translate"

export const UpgradeButton = () => {
  const getUtmParams = useUtmParams()
  return (
    <Link href={getUtmParams(CLOUD_URL)} target="_self">
      <span className={style.upgradeButtonStyle}>
        <Translate id="pricing.billing.plus-btn">Upgrade</Translate>
      </span>
    </Link>
  )
}
