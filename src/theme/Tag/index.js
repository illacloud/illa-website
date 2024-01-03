import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { useUtmParams } from "@site/src/hooks/useUtmParams"

export default function Tag({ permalink, label, isActive, className }) {
  const getUtmParams = useUtmParams()
  return (
    <Link
      to={getUtmParams(permalink)}
      onClick={(e) => console.log("1234")}
      className={clsx(
        "no-underline hover:no-underline",
        "text-xs",
        !isActive && "bg-gray-100 dark:bg-gray-700",
        !isActive && "text-gray-600 dark:text-white-04",
        "rounded",
        "py-1",
        "px-2",
        isActive && "bg-gray-200 text-gray-500",
        isActive && "dark-bg-gray-700 text-gray-300",
        className,
      )}
    >
      {label}
    </Link>
  )
}
