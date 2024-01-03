import Head from "@docusaurus/Head"
import { CommonLayout } from "../ILLATheme/CommonLayout"
import { CommonHeader } from "../ILLATheme/CommonHeader"
import CommonFooter from "../ILLATheme/CommonFooter"
import { HOME_META_INFO, HOME_SCHEMA_DATA } from "../config/Home"
import NewContent from "../components/home/Content"
import BannerPC from "../components/home/Index/PC"
import BannerMobile from "../components/home/Index/Mobile"
import { useGetGithubStars } from "../components/home/Index/hooks/useGithubStars"

export default function Home(): JSX.Element {
  const [, githubStarts] = useGetGithubStars()

  return (
    <>
      <Head>
        <html data-active-page="index" />
        <meta name="twitter:title" content={HOME_META_INFO.title} />
        <meta name="twitter:description" content={HOME_META_INFO.description} />
        <script type="application/ld+json">
          {JSON.stringify(HOME_SCHEMA_DATA)}
        </script>
      </Head>
      <CommonLayout {...HOME_META_INFO}>
        <div className="bg-black overflow-visible w-full relative z-[1]">
          <CommonHeader />
          <BannerPC githubStarts={githubStarts} />
          <BannerMobile githubStarts={githubStarts} />
          <NewContent />
          <CommonFooter scrollStart={0.939} scrollEnd={1} />
        </div>
      </CommonLayout>
    </>
  )
}
