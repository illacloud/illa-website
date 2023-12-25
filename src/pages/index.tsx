import Head from '@docusaurus/Head'
import { CommonLayout } from '../ILLATheme/CommonLayout'
import { CommonHeader } from '../ILLATheme/CommonHeader'
import CommonFooter from '../ILLATheme/CommonFooter'
import { useState } from 'react'
import { useRaf } from 'react-use'
import NewContent from '../components/home/Content'
import BannerPC from '../components/home/Banner/PC'
import BannerMobile from '../components/home/Banner/Mobile'
import { useGetGithubStars } from '../components/home/Banner/hooks/useGithubStars'

export default function Home(): JSX.Element {
  const title = 'ILLA'
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const step = useRaf(1000, 0)

  const [, githubStarts] = useGetGithubStars()

  return (
    <>
      <Head>
        <html data-active-page="index" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <CommonLayout description="Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.">
        <div className="bg-black overflow-visible w-full relative z-[1]">
          <CommonHeader />
          <BannerPC
            setPlayMaskShow={setPlayMaskShow}
            githubStarts={githubStarts}
          />
          <BannerMobile
            setPlayMaskShow={setPlayMaskShow}
            githubStarts={githubStarts}
          />
          <NewContent />
          <CommonFooter scrollStart={0.939} scrollEnd={1} />
        </div>
      </CommonLayout>
    </>
  )
}
