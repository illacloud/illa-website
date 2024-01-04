import React from "react"
import Link from "@docusaurus/Link"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import BlogPostItemContainer from "@theme/BlogPostItem/Container"
import { useUtmParams } from "@site/src/hooks/useUtmParams"
import { Date } from "@site/src/components/blog/common/date"
import clsx from "clsx"

export const FeaturedBlogPostItem = () => {
  const { metadata } = useBlogPost()
  const {
    permalink,
    title,
    date,
    formattedDate,
    frontMatter,
    description,
    tags,
  } = metadata

  const author = metadata.authors[0]
  const getUtmParams = useUtmParams()

  return (
    <BlogPostItemContainer>
      <Link itemProp="url" to={getUtmParams(permalink)}>
        <div className="not-prose relative m-0 h-40 hover:brightness-90 md:h-64">
          <img
            src={`${frontMatter.image}?h=256`}
            alt={title}
            className="absolute inset-0 mt-0 h-full w-full rounded-[10px] object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="px-4 py-4 md:px-6  md:py-6">
        <div
          className={clsx(
            "mb-2 gap-1 md:mb-4 2xl:mb-6",
            "flex flex-wrap items-center",
          )}
        >
          {tags.map((tag) => (
            <Link
              className={clsx(
                "text-xs",
                "bg-gray-100 dark:bg-white-09",
                "text-white-04 dark:hover:text-white-01 dark:text-white-03",
                "no-underline",
                "rounded",
                "px-2 py-1",
              )}
              href={getUtmParams(tag.permalink)}
              key={tag.permalink}
            >
              {tag.label}
            </Link>
          ))}
        </div>
        <div className="mb-2 md:mb-4 2xl:mb-6">
          <Link
            itemProp="url"
            to={getUtmParams(permalink)}
            className="no-underline hover:no-underline"
            rel="noopener dofollow"
          >
            <div
              className={clsx(
                "mb-2 md:mb-4 2xl:mb-6",
                "text-gray-700 dark:text-white-01",
                "text-sm sm:text-2xl 2xl:text-[32px] 2xl:leading-10",
                "font-lg",
                "font-bold",
              )}
            >
              {title}
            </div>
          </Link>
          <div
            className={clsx(
              "line-clamp-3",
              "text-gray-700 dark:text-white-03",
              "text-xs md:text-base 2xl:text-xl",
            )}
          >
            {description}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={clsx(
              "text-gray-600",
              "dark:text-white-04",
              "text-xs 2xl:text-base",
              "leading-6",
              "no-underline",
            )}
          >
            <Date date={date} formattedDate={formattedDate} />
          </span>
        </div>
      </div>
    </BlogPostItemContainer>
  )
}
