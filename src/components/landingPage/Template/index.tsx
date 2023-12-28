import { Fragment } from "react"
import styles from "./style.module.css"
import { sendTagEvent } from "@site/src/utils/gtag"
import { LearnMore } from "../LearnMore"
import { TEMPLATE_CONFIG } from "@site/src/config/landingPage/landingTemplate"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

export const LpTemplate = () => {
  const getUtmParams = useUtmParams()
  const onClick = (target: string) => {
    sendTagEvent({
      action: "click",
      category: "landing_page_try_now",
      label: "Try now",
      value: target,
    })
  }

  return (
    <div className={styles.templateContainer}>
      {TEMPLATE_CONFIG.map(
        ({ label, title, description, link, itemList, btnText, target }) => (
          <Fragment key={label}>
            <div className={styles.templateHeader}>
              <h2 className={styles.templateHeaderLabel}>{label}</h2>
              <h3 className={styles.templateHeaderTitle}>{title}</h3>
              <span className={styles.templateHeaderDesc}>{description}</span>
              <LearnMore
                href={getUtmParams(link)}
                btnText={btnText}
                onClick={() => onClick(target)}
              />
            </div>
            <div className={styles.templateItemContainer}>
              {itemList &&
                itemList.map(
                  ({
                    itemImage,
                    itemDesc,
                    itemLink,
                    itemName,
                    btnText,
                    target,
                  }) => (
                    <div className={styles.templateItem} key={itemName}>
                      <img src={itemImage} alt={itemName} className="w-full" />
                      <h3 className={styles.templateItemName}>{itemName}</h3>
                      <div className="h-[64px] overflow-hidden">
                        <span className={styles.templateItemDesc}>
                          {itemDesc}
                        </span>
                      </div>
                      <LearnMore
                        href={getUtmParams(itemLink)}
                        btnText={btnText}
                        onClick={() => onClick(target)}
                      />
                    </div>
                  ),
                )}
            </div>
          </Fragment>
        ),
      )}
    </div>
  )
}
