import React, { Fragment, FC } from "react"
import { SOLUTIONS } from "../constants"
import { Menu, Transition } from "@headlessui/react"
import ChevronDownIcon from "@site/static/img/public/arrow.svg"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { sendTagEvent } from "@site/src/utils/gtag"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import style from "./index.module.css"
import { fixedPath } from "@site/src/utils/fixedPath"

export const Solutions: FC<{ whiteTheme: boolean }> = ({ whiteTheme }) => {
  const getUtmParams = useUtmParams()
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={clsx(
          style.popoverItemStyle,
          whiteTheme ? "text-gray-02" : "text-white-01",
        )}
      >
        {SOLUTIONS.label}
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
            style.basePopoverPanelStyle,
            whiteTheme
              ? style.lightPopoverPanelStyle
              : style.darkPopoverPanelStyle,
          )}
        >
          <span
            className={clsx(
              style.subTitleStyle,
              whiteTheme
                ? "text-gray-02 hover:text-gray-02 "
                : "text-white-01 hover:text-white-01 ",
            )}
          >
            {SOLUTIONS?.subPanelTitle}
          </span>
          <div className="w-full flex flex-col">
            {SOLUTIONS.items.map((subItem) => (
              <Menu.Item key={subItem.label}>
                {() => (
                  <Link
                    to={getUtmParams(fixedPath(subItem.href))}
                    className={clsx(
                      style.basePanelItemContainerStyle,
                      whiteTheme
                        ? style.lightPanelItemContainerStyle
                        : style.darkPanelItemContainerStyle,
                    )}
                    onClick={() => {
                      sendTagEvent({
                        action: "click",
                        category: subItem.category,
                      })
                    }}
                  >
                    <span className="pt-[4px]">{subItem.icon}</span>
                    <span className="w-full flex flex-col">
                      <span
                        className={clsx(
                          style.panelItemStyle,
                          whiteTheme
                            ? "text-gray-02 hover:text-gray-02 "
                            : "text-white-01 hover:text-white-01 ",
                        )}
                      >
                        {subItem.label}
                      </span>
                      <span
                        className={clsx(
                          style.panelItemDescStyle,
                          whiteTheme
                            ? "text-gray-03 hover:text-gray-03 "
                            : "text-white-03 hover:text-white-03 ",
                        )}
                      >
                        {subItem.description}
                      </span>
                    </span>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
