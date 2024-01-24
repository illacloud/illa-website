import { FC } from "react"
import style from "./index.module.css"
import TabLottie from "../TabLottie"
import { TAB_LOTTIE_TYPE } from "../constants"

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
            <div>
              <div className={style.tabTitleContainerStyle}>
                <p className={style.tabTitleStyle}>{tab.title}</p>
                {tab.hasExtra && <span className={style.betaStyle}>Beta</span>}
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
