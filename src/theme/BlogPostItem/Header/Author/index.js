import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
function MaybeLink(props) {
  const getUtmParams = useUtmParams()
  if (props.href) {
    return <Link {...props} to={getUtmParams(props.to)} />
  }
  return <>{props.children}</>
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author
  const link = url || (email && `mailto:${email}`) || undefined
  return (
    <div className={clsx("avatar margin-bottom--sm", className)}>
      {imageURL && (
        <MaybeLink to={link} className="avatar__photo-link">
          <img
            className="avatar__photo"
            src={imageURL}
            alt={name}
            itemProp="image"
          />
        </MaybeLink>
      )}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="avatar__name">
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
          </div>
          {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )}
        </div>
      )}
    </div>
  )
}
