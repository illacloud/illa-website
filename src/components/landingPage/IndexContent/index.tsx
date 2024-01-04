import { FC, Fragment } from "react"
import styles from "./style.module.css"
import { sendTagEvent } from "@site/src/utils/gtag"
import clsx from "clsx"
import { IContentItemsProps, IIndexContentProps } from "./interface"
import { LearnMore } from "../LearnMore"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

const ContentItems: FC<IContentItemsProps> = ({ contentList, pageName }) => {
  const getUtmParams = useUtmParams()
  const onClick = (name: string) => {
    sendTagEvent({
      action: "click",
      category: "landing_page_learn_more",
      label: "Learn more",
      value: name,
    })
  }
  if (!contentList) return null
  return contentList.map(({ logo, name, description, path }) => {
    return (
      <div
        className={clsx(
          styles.item,
          pageName === "integrations" ? styles.itemBg : "",
        )}
        key={name}
      >
        {pageName === "integrations" && (
          <img src={logo} alt={name} className="h-[24px] lg:h-[40px]" />
        )}
        {pageName === "components" && (
          <div className={styles.itemImage}>
            <img src={logo} alt={name} className="w-full" />
          </div>
        )}
        <div className="flex flex-col items-start gap-[8px]">
          <h3 className="lg:h-[26px] h-[20px] overflow-hidden">
            <span
              className={clsx(
                styles.itemNameCommon,
                pageName === "integrations"
                  ? styles.itemNameIntegrations
                  : styles.itemNameComponents,
              )}
            >
              {name}
            </span>
          </h3>
          <div className="h-[72px] overflow-hidden">
            <span className={styles.itemDescription}>{description}</span>
          </div>
          <LearnMore
            href={getUtmParams(`/${pageName}/${path}`)}
            onClick={() => onClick(name)}
          />
        </div>
      </div>
    )
  })
}

export const IndexContent: FC<IIndexContentProps> = (props) => {
  const { content, pageName } = props
  return (
    <div className="flex flex-col gap-[24px] pb-[60px] lg:pb-[100px]">
      {content.map(({ title, contentList }) => {
        return (
          <Fragment key={title}>
            <h2 className={styles.contentTitle}>{title}</h2>
            <div className={styles.itemsContainer}>
              <ContentItems contentList={contentList} pageName={pageName} />
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
