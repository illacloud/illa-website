import React, { Fragment, FC } from 'react';
import { MENU_ITEMS } from './constants';
import { IHeaderMenuProps, NavbarItemType } from './interface';
import { Menu, Transition } from '@headlessui/react';
import ChevronDownIcon from '@site/static/img/public/arrow.svg';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export const HeaderMenu: FC<IHeaderMenuProps> = (props) => {
  const { whiteTheme } = props;
  return (
    <>
      {MENU_ITEMS.map((item) => {
        if (item.isPopover) {
          return (
            <Menu
              as="div"
              className={clsx(
                'relative inline-block text-left py-3 px-4 font-medium',
              )}
              key={item.label}
            >
              <Menu.Button
                className={clsx(
                  'flex gap-[8px] items-center text-[14px]',
                  whiteTheme ? 'text-gray-02' : 'text-white-01',
                )}
              >
                {item.label}
                <ChevronDownIcon
                  aria-hidden="true"
                  className={clsx(
                    'w-3 h-3',
                    whiteTheme ? 'text-gray-02' : 'text-white-01',
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
                    'absolute left-0 right-0 mt-2 origin-top-right rounded-md shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)]  focus:outline-none py-[4px] ',
                    whiteTheme ? 'bg-white-01' : 'bg-gray-02',
                  )}
                >
                  {item.items.map((subItem) => (
                    <Menu.Item key={subItem.label}>
                      {({ active }) => (
                        <button
                          className={clsx(
                            'group flex  items-center justify-center text-[14px]  leading-10 w-full',
                            whiteTheme ? 'text-gray-02' : 'text-white-01',
                          )}
                        >
                          <Link
                            href={subItem.link}
                            className={clsx(
                              'hover:no-underline font-medium	',
                              whiteTheme
                                ? 'text-gray-02 hover:text-gray-02'
                                : 'text-white-01 hover:text-white-01',
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
          );
        }

        return (
          <Link
            key={item.label}
            to={(item as NavbarItemType).href}
            className={clsx(
              'px-4 text-[14px] hover:no-underline font-medium',
              whiteTheme
                ? 'text-gray-02 hover:text-gray-02'
                : 'text-white-01 hover:text-white-01',
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
};
