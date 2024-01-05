import { useState } from "react"
import { sendTagEvent } from "@site/src/utils/gtag"
import style from "./index.module.css"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { LinkItem } from "../LinkItem"

const SHOULD_FOLD_ITEMS = 6

export const FoldItems = ({ items, whiteTheme }) => {
  const [showMore, setShowMore] = useState(false)
  const getUtmParams = useUtmParams()

  const handleShowMore = () => {
    setShowMore(!showMore)
    sendTagEvent({
      action: "click",
      category: showMore
        ? "homepage_footer_show_less"
        : "homepage_footer_show_more",
    })
  }

  return (
    <>
      {items
        .slice(0, SHOULD_FOLD_ITEMS)
        .map(({ label, href = "", tagCategory }) => (
          <LinkItem
            key={label}
            to={getUtmParams(href)}
            label={label}
            whiteTheme={whiteTheme}
            onClick={() => {
              sendTagEvent({
                action: "click",
                category: tagCategory,
              })
            }}
          />
        ))}
      {showMore &&
        items
          .slice(SHOULD_FOLD_ITEMS)
          .map(({ label, href = "", tagCategory }) => (
            <LinkItem
              key={label}
              to={getUtmParams(href)}
              label={label}
              whiteTheme={whiteTheme}
              onClick={() => {
                sendTagEvent({
                  action: "click",
                  category: tagCategory,
                })
              }}
            />
          ))}
      <span
        className={clsx(
          style.footerItem,
          "underline",
          whiteTheme ? "text-grayBlue-02" : "text-white-02",
        )}
        onClick={handleShowMore}
      >
        {showMore ? (
          <Translate id="footer.less">Show less</Translate>
        ) : (
          <Translate id="footer.more">Show more</Translate>
        )}
      </span>
    </>
  )
}
