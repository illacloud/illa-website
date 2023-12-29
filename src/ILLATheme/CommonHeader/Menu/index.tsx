import React, { Fragment, FC } from "react"
import { MENU_ITEMS, OPERATE_MENU_ITEMS } from "../constants"
import { IHeaderMenuProps } from "../interface"
import { Menu, Transition } from "@headlessui/react"
import ChevronDownIcon from "@site/static/img/public/arrow.svg"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { sendTagEvent } from "@site/src/utils/gtag"
import style from "./index.module.css"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { Solutions } from "../SolutionsItem"

export const HeaderMenu: FC<IHeaderMenuProps> = (props) => {
  const { whiteTheme } = props
  const getUtmParams = useUtmParams()
  return (
    <div className="w-full flex items-center justify-between">
      <div className={style.menuItemContainerStyle}>
        <Solutions whiteTheme={whiteTheme} />
        {MENU_ITEMS.map((item) => {
          if (item.isPopover === false) {
            return (
              <Link
                key={item.label}
                to={getUtmParams(item.href)}
                onClick={() => {
                  sendTagEvent({
                    action: "click",
                    category: item.category,
                  })
                }}
                className={clsx(
                  style.menuItemStyle,
                  whiteTheme
                    ? "text-gray-02 hover:text-gray-02"
                    : "text-white-01 hover:text-white-01",
                )}
              >
                {item.label}
              </Link>
            )
          }
          return (
            <Menu
              as="div"
              className={style.popoverContainerStyle}
              key={item.label}
            >
              <Menu.Button
                className={clsx(
                  style.popoverItemStyle,
                  whiteTheme ? "text-gray-02" : "text-white-01",
                )}
              >
                {item.label}
                <ChevronDownIcon
                  aria-hidden="true"
                  className={clsx(
                    "w-[12px] h-[12px]",
                    whiteTheme ? "text-gray-02" : "text-white-01",
                  )}
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={clsx(
                    style.popoverPanelStyle,
                    whiteTheme ? "bg-white-01" : "bg-gray-02",
                  )}
                >
                  {item.items.map((subItem) => (
                    <Menu.Item key={subItem.label}>
                      {() => (
                        <button
                          className={clsx(
                            style.panelItemContainerStyle,
                            whiteTheme
                              ? "text-gray-02 hover:bg-garyBlue-09"
                              : "text-white-01 hover:bg-white-09",
                          )}
                          onClick={() => {
                            sendTagEvent({
                              action: "click",
                              category: subItem.category,
                            })
                          }}
                        >
                          <Link
                            to={getUtmParams(subItem.href)}
                            className={clsx(
                              style.panelItemStyle,
                              whiteTheme
                                ? "text-gray-02 hover:text-gray-02"
                                : "text-white-01 hover:text-white-01",
                            )}
                          >
                            {subItem.label}
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          )
        })}
      </div>
      <div className={style.menuItemContainerStyle}>
        {OPERATE_MENU_ITEMS.map((item) => {
          return (
            <Link
              key={item.label}
              to={getUtmParams(item.href)}
              className={clsx(
                style.operateItemStyle,
                whiteTheme
                  ? "text-gray-02 hover:text-gray-02 border-gray-02 "
                  : "text-white-01 hover:text-white-01 border-white-01 ",
                item.hasBorder ? "border-[1px]" : "border-0",
              )}
              onClick={() => {
                sendTagEvent({
                  action: "click",
                  category: item.category,
                })
                item.gaAction &&
                  sendTagEvent({
                    action: item.gaAction,
                  })
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
