import { FC } from "react"
import Link from "@docusaurus/Link"
import { IconItem } from "../IconItem"
import { PureItem } from "../PureItem"

interface LinkItemProps {
  whiteTheme: boolean
  label: string
  to: string
  icon?: React.ReactNode
  onClick: () => void
}
export const LinkItem: FC<LinkItemProps> = (props) => {
  const { icon, to } = props
  return (
    <Link to={to} className="hover:no-underline">
      {icon ? <IconItem {...props} icon={icon!} /> : <PureItem {...props} />}
    </Link>
  )
}
