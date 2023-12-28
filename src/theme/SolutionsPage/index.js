import React from "react"
import clsx from "clsx"
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common"
import SolutionLayout from "@theme/SolutionLayout"
import { BlogPostProvider } from "@docusaurus/theme-common/internal"

export default function SolutionPage(props) {
  const SolutionContent = props.content
  return (
    <BlogPostProvider content={props.content}>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}
      >
        <SolutionLayout>
          <SolutionContent />
        </SolutionLayout>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  )
}
