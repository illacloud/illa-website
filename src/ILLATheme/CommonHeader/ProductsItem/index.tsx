import { FC, Fragment } from "react"
import style from "./index.module.css"
import { Menu, Transition } from "@headlessui/react"
import clsx from "clsx"
import { PRODUCT_ITEMS } from "../constants"
import ChevronDownIcon from "@site/static/img/public/arrow.svg"
import { sendTagEvent } from "@site/src/utils/gtag"
import Link from "@docusaurus/Link"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

interface ProductsItemProps {
  whiteTheme: boolean
}
const ProductsItem: FC<ProductsItemProps> = ({ whiteTheme }) => {
  const { items } = PRODUCT_ITEMS
  const getUtmParams = useUtmParams()
  return (
    <Menu
      as="div"
      className={style.popoverContainerStyle}
      key={PRODUCT_ITEMS.label}
    >
      <Menu.Button
        className={clsx(
          style.popoverItemStyle,
          whiteTheme ? "text-gray-02" : "text-white-01",
        )}
      >
        {PRODUCT_ITEMS.label}
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
          {items.map((subItem) => (
            <Menu.Item key={subItem.label}>
              {() => (
                <button
                  className={clsx(
                    style.panelItemContainerStyle,
                    whiteTheme
                      ? "text-gray-02 hover:bg-grayBlue-09"
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
}
export default ProductsItem
