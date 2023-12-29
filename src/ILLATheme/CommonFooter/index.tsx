import style from "./index.module.css"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import ILLA_LOGO from "@site/static/img/logo.svg"
import WHITE_LOGO from "@site/static/img/whiteLogo.svg"
import { useTransform, motion, useScroll } from "framer-motion"
import { FooterItems } from "./FooterItem"
import { sendTagEvent } from "@site/src/utils/gtag"
import { saveAs } from "file-saver"
import { useElementFirstShow } from "@site/src/hooks/useElementFirstShow"
import { useRef, FC, useCallback } from "react"
import LocaleDropdownNavbarItem from "@theme/NavbarItem/LocaleDropdownNavbarItem"
import { FOOTER_CONTENT } from "./constants"
import Translate, { translate } from "@docusaurus/Translate"
import { ICommonFooterProps } from "./interface"

const CommonFooter: FC<ICommonFooterProps> = ({
  whiteTheme = false,
  scrollStart,
  scrollEnd,
}) => {
  const ref = useRef(null)
  const reportShow = useCallback(() => {
    sendTagEvent({
      action: "click",
      category: "homepage_body_code_anywhere_show",
    })
  }, [])
  useElementFirstShow(ref, reportShow)

  const { scrollYProgress } = useScroll()
  const translateY = useTransform(
    scrollYProgress,
    [scrollStart, scrollEnd],
    [-150, 0],
  )

  return (
    <motion.footer
      ref={ref}
      className={clsx(
        style.footerContainer,
        style.mobileFooterContainer,
        whiteTheme ? "bg-white-01" : "bg-black",
      )}
      style={{ translateY }}
    >
      <div className={style.footerContentContainer}>
        {FOOTER_CONTENT.map(({ title, items }) => (
          <div className="flex flex-col items-start gap-[16px]" key={title}>
            <span
              className={clsx(
                "font-[500] text-[18px] leading-[28px]",
                whiteTheme ? "text-[#0B0C0F]" : "text-white-01",
              )}
            >
              {title}
            </span>
            <div className="flex flex-col items-start gap-[8px] w-full">
              {items.length > 6 && (
                <FooterItems items={items} whiteTheme={whiteTheme} />
              )}
              {items.length <= 6 &&
                items.map(
                  ({ label, href = "", tagCategory, icon, downloadName }) => {
                    if (downloadName) {
                      return (
                        <span
                          key={label}
                          className={clsx(
                            style.footerItem,
                            whiteTheme ? "text-[#1D2129]" : "text-white-02",
                          )}
                          onClick={() => {
                            sendTagEvent({
                              action: "click",
                              category: tagCategory,
                            })
                            saveAs(href, downloadName)
                          }}
                        >
                          {label}
                        </span>
                      )
                    } else {
                      return (
                        <Link
                          key={label}
                          href={href}
                          className="hover:no-underline"
                        >
                          {icon ? (
                            <span
                              className={clsx(
                                "flex flex-row items-center gap-[8px]",
                                whiteTheme ? "text-[#1D2129]" : "text-white-02",
                              )}
                            >
                              {icon}
                              <span
                                className={clsx(
                                  style.footerItem,
                                  whiteTheme
                                    ? "text-[#1D2129]"
                                    : "text-white-02",
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
                            </span>
                          ) : (
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
                          )}
                        </Link>
                      )
                    }
                  },
                )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.space} />
      <div className={style.footerBottom}>
        <div className="flex flex-row items-center gap-[16px]">
          {whiteTheme ? <ILLA_LOGO /> : <WHITE_LOGO />}

          <span
            className={clsx(
              "hidden lg:block",
              whiteTheme ? "text-[#1D2129]" : "text-white-02",
            )}
          >
            <Translate id="slogan-1">Build AI Driven Business App</Translate>
          </span>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-[16px] lg:gap-[32px] ">
            <div
              className={clsx(
                "flex flex-row gap-[4px] lg:gap-[8px] px-[4px] items-center",
                style.localSelectContainer,
              )}
            >
              <LocaleDropdownNavbarItem
                dropdownItemsBefore={[]}
                dropdownItemsAfter={[]}
                items={[]}
              />
            </div>
            <Link
              href="https://docs.illacloud.com/privacy-policy"
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
                    category: "homepage_footer_privacy_policy_click",
                  })
                }}
              >
                <Translate id="footer.privacy-policy">Privacy policy</Translate>
              </span>
            </Link>
            <Link
              href="https://docs.illacloud.com/terms-of-service"
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
                    category: "homepage_footer_terms_of_service_click",
                  })
                }}
              >
                <Translate id="footer.terms-of-service">
                  Terms of service
                </Translate>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default CommonFooter
