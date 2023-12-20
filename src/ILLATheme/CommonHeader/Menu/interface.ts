import { ReactNode } from 'react';

export type NavbarPopoverItemType = {
  isPopover: true;
  label: string;
  items: {
    label: string;
    link: string;
    category: string;
    target?: string;
  }[];
};

export type NavbarItemType = {
  isPopover?: false;
  label: string;
  href?: string;
  category?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export interface IMenuItemProps {
  item: NavbarPopoverItemType['items'][0];
}

export interface IHeaderMenuProps {
  whiteTheme?: boolean;
}
