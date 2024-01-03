import { useState } from "react"
import { sendTagEvent } from "@site/src/utils/gtag"
import style from "../index.module.css"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { fixedPath } from "@site/src/utils/fixedPath"

export const FooterItems = ({ items, whiteTheme }) => {
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
      {items.slice(0, 6).map(({ label, href = "", tagCategory }) => (
        <Link
          key={label}
          to={getUtmParams(fixedPath(href))}
          className="hover:no-underline"
        >
          <span
            className={clsx(
              style.footerItem,
              whiteTheme ? "text-[#1D2129]" : "text-white-02",
            )}
            onClick={() => {
              sendTagEvent({
                action: "click",
                category: tagCategory,
              })
            }}
          >
            {label}
          </span>
        </Link>
      ))}
      {showMore &&
        items.slice(6).map(({ label, href = "", tagCategory }) => (
          <Link
            key={label}
            to={getUtmParams(href)}
            className="hover:no-underline"
          >
            <span
              className={clsx(
                style.footerItem,
                whiteTheme ? "text-[#1D2129]" : "text-white-02",
              )}
              onClick={() => {
                sendTagEvent({
                  action: "click",
                  category: tagCategory,
                })
              }}
            >
              {label}
            </span>
          </Link>
        ))}
      <span
        className={clsx(
          style.footerItem,
          "underline",
          whiteTheme ? "text-[#1D2129]" : "text-white-02",
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
