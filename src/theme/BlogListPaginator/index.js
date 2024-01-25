import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import NextIcon from "@site/static/img/public/nextIcon.svg"
import PreviousIcon from "@site/static/img/public/previousIcon.svg"
export default function BlogListPaginator(props) {
  const { metadata } = props
  const { previousPage, nextPage } = metadata
  return (
    <nav
      className="w-full grid grid-cols-2 pt-[16px]"
      aria-label={translate({
        id: "theme.blog.paginator.navAriaLabel",
        message: "Blog list page navigation",
        description: "The ARIA label for the blog pagination",
      })}
    >
      {previousPage && (
        <label className="col-start-1 flex justify-start">
          <Link
            to={previousPage}
            className=" text-tech-purple-03 px-[16px] py-[6px] flex justify-center items-center gap-[8px] text-[16px] font-[500] leading-[28px] rounded-[24px] hover:bg-tech-purple-03/[0.2] no-underline hover:no-underline"
          >
            <PreviousIcon width="16px" />
            <Translate
              id="theme.blog.paginator.newerEntries"
              description="The label used to navigate to the newer blog posts page (previous page)"
            >
              Newer Entries
            </Translate>
          </Link>
        </label>
      )}
      {nextPage && (
        <label className="col-start-2 flex justify-end">
          <Link
            to={nextPage}
            className=" text-tech-purple-03 px-[16px] py-[6px] flex justify-center items-center gap-[8px] text-[16px] font-[500] leading-[28px] rounded-[24px] hover:bg-tech-purple-03/[0.2] no-underline hover:no-underline"
          >
            <Translate
              id="theme.blog.paginator.olderEntries"
              description="The label used to navigate to the older blog posts page (next page)"
            >
              Older Entries
            </Translate>
            <NextIcon width="16px" />
          </Link>
        </label>
      )}
    </nav>
  )
}
