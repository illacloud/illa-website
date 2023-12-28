import { ReactNode } from "react"

export interface IFootContentItem {
  label: string
  href: string
  downloadName?: string
  tagCategory: string
  icon?: ReactNode
}

export interface ICommonFooterProps {
  whiteTheme?: boolean
  scrollStart: number
  scrollEnd: number
}
