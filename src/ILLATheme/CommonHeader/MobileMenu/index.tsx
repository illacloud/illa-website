import clsx from "clsx"
import { useEffect } from "react"
import Link from "@docusaurus/Link"
import IllaLogoWhiteIcon from "@site/static/img/whiteLogo.svg"
import { sendTagEvent } from "@site/src/utils/gtag"
import { MENU_ITEMS, SOLUTIONS } from "../constants"
import LocaleDropdownNavbarItem from "@theme/NavbarItem/LocaleDropdownNavbarItem"
import CloseWhiteIcon from "@site/static/img/public/close.svg"
import { Disclosure } from "@headlessui/react"
import { MenuItem } from "./menuItem"
import style from "./index.module.css"
import ChevronDownIcon from "@site/static/img/public/arrow.svg"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

const MobileMenu = ({ menuExpand, closeMenu }) => {
  const getUtmParams = useUtmParams()
  useEffect(() => {
    if (menuExpand) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [menuExpand])

  return (
    <div
      className={clsx(
        "h-screen w-full bg-gray-01 absolute top-0 left-0 px-[20px] z-[55] font-medium text-[16px] text-white-01",
        "overflow-x-hidden",
        menuExpand ? "block" : "hidden",
      )}
    >
      <div className="justify-between  w-full h-[64px] flex items-center mb-[40px]">
        <Link
          href={getUtmParams("/")}
          className="flex items-center w-[42.5px] h-[20px]"
        >
          <IllaLogoWhiteIcon />
        </Link>
        <span
          onClick={() => {
            sendTagEvent({
              action: "click",
              category: "homepage_menu_fold_mob_click",
            })
            closeMenu && closeMenu()
          }}
        >
          <CloseWhiteIcon />
        </span>
      </div>
      <div className="flex flex-col w-full">
        {[SOLUTIONS, ...MENU_ITEMS].map((item) => {
          if (item?.isPopover === false) {
            return <MenuItem key={item.label} item={item} />
          }
          return (
            <Disclosure key={item.label}>
              <Disclosure.Button className={style.menuItemStyle}>
                {item.label}
                <ChevronDownIcon className="w-[12px] h-[12px]" />
              </Disclosure.Button>
              <Disclosure.Panel className="pl-[32px]">
                {item.items.map((subItem) => (
                  <MenuItem key={subItem.label} item={subItem} />
                ))}
              </Disclosure.Panel>
            </Disclosure>
          )
        })}
      </div>

      <div className="max-h-[180px] overflow-y-auto list-none	">
        <LocaleDropdownNavbarItem
          dropdownItemsBefore={[]}
          dropdownItemsAfter={[]}
          items={[]}
          mobile
        />
      </div>
    </div>
  )
}

export default MobileMenu
