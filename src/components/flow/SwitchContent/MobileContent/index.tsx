import { FC } from "react"
import style from "./index.module.css"
import TabLottie from "../TabLottie"
import { TAB_LOTTIE_TYPE } from "../constants"
import Translate from "@docusaurus/Translate"

interface MobileContentProps {
  tabs: {
    id: string
    icon: Record<string, unknown>
    title: string
    desc: string
    hasExtra?: boolean
  }[]
  contents: {
    id: string
    imageSrc: string
  }[]
}

const MobileContent: FC<MobileContentProps> = ({ tabs, contents }) => {
  return (
    <div className={style.containerStyle}>
      {tabs.map((tab, index) => (
        <div key={tab.id} className={style.contentContainerStyle}>
          <div className={style.tabStyle}>
            <TabLottie
              content={tab.icon}
              isPlay
              lottieType={TAB_LOTTIE_TYPE.ICON}
            />
            <div className="flex flex-col gap-[4px]">
              <div className={style.tabTitleContainerStyle}>
                <p className={style.tabTitleStyle}>{tab.title}</p>
                {tab.hasExtra && (
                  <span className={style.betaStyle}>
                    {" "}
                    <Translate id="illa_flow.how_it_works.coming_soon">
                      Coming soon
                    </Translate>
                  </span>
                )}
              </div>
              <p className={style.tabDescStyle}>{tab.desc}</p>
            </div>
          </div>
          <div className={style.baseContentStyle}>
            <img
              src={contents[index].imageSrc}
              alt={tab.title}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MobileContent
