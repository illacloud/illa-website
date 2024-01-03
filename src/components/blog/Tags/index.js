import React from "react"
import Link from "@docusaurus/Link"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import clsx from "clsx"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { fixedPath } from "@site/src/utils/fixedPath"

export const Tags = () => {
  const { metadata } = useBlogPost()
  const getUtmParams = useUtmParams()
  return (
    <div className="flex flex-wrap gap-2 pb-6 pl-1">
      {metadata.tags.map((tag) => (
        <Link
          to={getUtmParams(fixedPath(tag.permalink))}
          className={clsx(
            "text-xs",
            "bg-gray-100 dark:bg-gray-700",
            "text-gray-600 dark:text-white-04 dark:hover:text-white-01",
            "rounded",
            "py-1",
            "px-2",
            "no-underline hover:no-underline",
            "whitespace-nowrap",
          )}
          key={tag.permalink}
        >
          {tag.label}
        </Link>
      ))}
    </div>
  )
}
