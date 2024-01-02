import React from "react"
import clsx from "clsx"
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common"
import BlogLayout from "@theme/BlogLayout"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import BlogPostItems from "@theme/BlogPostItems"
import { FeaturedBlogPostItems } from "../../components/blog/FeaturedBlogPostItems"
import Head from "@docusaurus/Head"
import { BLOG_META_INFO } from "@site/src/config/Blog"

function BlogListPageMetadata() {
  return (
    <>
      <Head>
        <meta name="twitter:title" content={BLOG_META_INFO.title} />
        <meta name="twitter:description" content={BLOG_META_INFO.description} />
      </Head>
      <PageMetadata {...BLOG_META_INFO} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  )
}
function BlogListPageContent(props) {
  const { metadata, items, tags } = props

  const isFirstPage = metadata.page === 1

  const featuredPosts = items.filter(
    (post) => post.content.metadata.frontMatter.is_featured === true,
  )

  const paginatedPosts = items.filter(
    (post) => post.content.metadata.frontMatter.is_featured !== true,
  )

  return (
    <BlogLayout showSidebarBanner={false}>
      {isFirstPage && <FeaturedBlogPostItems items={featuredPosts} />}
      <div
        className={clsx(
          "px-4",
          "max-w-[512px]",
          "blog-md:px-7",
          "blog-md:max-w-screen-blog-md",
          "blog-2xl:px-0",
          "blog-2xl:max-w-screen-blog-md",
          "w-full",
          "mx-auto",
          "blog-md:block hidden",
        )}
      >
        <div className="border-b border-gray-100 dark:border-gray-700"></div>
      </div>
      <BlogPostItems items={paginatedPosts} tags={tags} metadata={metadata} />
      <div
        className={clsx(
          "max-w-[512px]",
          "blog-md:max-w-screen-blog-md",
          "blog-2xl:max-w-screen-blog-md",
          "w-full",
          "mx-auto",
          "blog-md:border-t border-t-gray-200 dark:border-t-gray-700",
          "blog-sm:mb-16 blog-2xl:mb-20 mb-10",
        )}
      >
        <BlogListPaginator metadata={metadata} />
      </div>
    </BlogLayout>
  )
}
export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}
