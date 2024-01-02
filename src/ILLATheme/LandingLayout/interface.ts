import { ReactNode } from "react"

export interface ILandingLayoutProps {
  whiteTheme?: boolean
  keywords?: string
  title: string
  description: string
  children: ReactNode
  footerConfig: {
    scrollStart: number
    scrollEnd: number
  }
  schemaData?: Record<string, any>
}
