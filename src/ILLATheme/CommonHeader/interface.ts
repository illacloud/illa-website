export interface NavItemProps {
  label: string
  description?: string
  icon?: JSX.Element
  href: string
  category: string
}

export type NavbarPopoverItemType = {
  isPopover?: true
  label: string
  subPanelTitle?: string
  items: NavItemProps[]
}

export type NavbarItemType = {
  isPopover?: false
  label: string
  href?: string
  category?: string
}

export type MenuItemType = NavbarPopoverItemType | NavbarItemType

export interface IMenuItemProps {
  item: NavbarItemType
}

export interface IHeaderMenuProps {
  whiteTheme?: boolean
}

export interface OperateItemProps {
  label: string
  href: string
}
