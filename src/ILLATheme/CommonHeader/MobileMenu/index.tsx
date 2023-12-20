import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import IllaLogoWhiteIcon from '@site/static/img/whiteLogo.svg';
import { sendTagEvent } from '@site/src/utils/gtag';
import { MENU_ITEMS } from '../Menu/constants';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import CloseWhiteIcon from '@site/static/img/public/close.svg';
import { CONTACT_US_URL } from './constant';
import Translate, { translate } from '@docusaurus/Translate';
import { Disclosure } from '@headlessui/react';
import { MenuItem } from './menuItem';

const MobileMenu = ({ menuExpand, closeMenu, onChangeShow }) => {
  useEffect(() => {
    if (menuExpand) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuExpand]);

  return (
    <div
      className={clsx(
        'h-screen w-full bg-illa-gray-01 absolute top-0 left-0 px-[20px] z-[55] font-medium text-[16px] text-white-01',
        'overflow-x-hidden',
        menuExpand ? 'block' : 'hidden',
      )}
    >
      <div className="justify-between  w-full h-[64px] flex items-center mb-[40px]">
        <Link href="/" className="flex items-center w-[42.5px] h-[20px]">
          <IllaLogoWhiteIcon />
        </Link>
        <span
          onClick={() => {
            closeMenu && closeMenu();
          }}
        >
          <CloseWhiteIcon />
        </span>
      </div>
      <div className="flex flex-col">
        {MENU_ITEMS.map((item) => {
          if (item.isPopover) {
            return (
              <Disclosure key={item.label}>
                <Disclosure.Button className="py-1 text-left px-3">
                  {item.label}
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                  {item.items.map((subItem) => (
                    <MenuItem key={subItem.label} item={subItem} />
                  ))}
                </Disclosure.Panel>
              </Disclosure>
            );
          }
          return <div key={item.label} />;
        })}
      </div>
      {/* {selectItems.map((options, index) => (
        <MenuSelect options={options} key={index} />
      ))}
      {menuItems.map(({ href, category, title }) => (
        <Link legacyBehavior href={href} key={title}>
          <a
            className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category,
                label: t(title),
              });
            }}
          >
            {t(title)}
          </a>
        </Link>
      ))} */}
      <Link
        href={CONTACT_US_URL}
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_contact_click',
            label: translate({
              id: 'nav.contact',
              message: 'Book demo',
            }),
          });
          closeMenu && closeMenu();
          onChangeShow();
        }}
        className="w-full cursor-pointer flex flex-row flex-nowrap items-center h-[32px] gap-[8px] px-3 py-[6px]"
      >
        <Translate id="nav.contact">Book demo</Translate>
      </Link>

      <div className="max-h-[180px] overflow-y-auto list-none	">
        <LocaleDropdownNavbarItem
          dropdownItemsBefore={[]}
          dropdownItemsAfter={[]}
          items={[]}
          mobile
        />
      </div>
    </div>
  );
};

export default MobileMenu;
