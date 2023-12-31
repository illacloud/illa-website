import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import styles from "./styles.module.css"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
export default function BlogPostItemHeaderTitle({ className }) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const getUtmParams = useUtmParams()
  const { permalink, title } = metadata
  const TitleHeading = isBlogPostPage ? "h1" : "h2"
  return (
    <TitleHeading className={clsx(styles.title, className)} itemProp="headline">
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={getUtmParams(permalink)}>
          {title}
        </Link>
      )}
    </TitleHeading>
  )
}
