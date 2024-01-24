import { FC, useState } from "react"
import ContentHeader from "../ContentHeader"
import clsx from "clsx"
import style from "./index.module.css"
import TabLottie from "./TabLottie"
import temp from "@site/src/constants/drag.json"
import webhookIcon from "@site/src/constants/lottie/webhookIcon.json"
import schedule from "@site/src/constants/lottie/schedule.json"
import pollIcon from "@site/src/constants/lottie/pollIcon.json"
import { TAB_LOTTIE_TYPE } from "./constants"
import { translate } from "@docusaurus/Translate"
import MobileContent from "./MobileContent"

const CONTENT = {
  header: {
    titleExtra: translate({
      id: "illa_flow.how_it_works.how_it_works",
      message: "How it works",
    }),
    title: translate({
      id: "illa_flow.how_it_works.trigger_anytime",
      message: "Trigger anytime, anywhere",
    }),
    desc: translate({
      id: "illa_flow.how_it_works.multiple_types_of",
      message:
        "Multiple types of triggers enable you to automate your workflow anytime, anywhere.",
    }),
  },
  tabs: [
    {
      id: "Schedule",
      icon: schedule,
      title: translate({
        id: "illa_flow.how_it_works.schedule",
        message: "Schedule",
      }),
      desc: translate({
        id: "illa_flow.how_it_works.schedule_your_recurring_routine_tasks.",
        message: "Schedule your recurring routine tasks.",
      }),
    },
    {
      id: "Webhook",
      icon: webhookIcon,
      title: translate({
        id: "illa_flow.how_it_works.webhook",
        message: "Webhook",
      }),
      desc: translate({
        id: "illa_flow.how_it_works.trigger_automatic_workflow_execution_on_any_platform",
        message: "Trigger automatic workflow execution on any platform",
      }),
    },
    {
      id: "Poll",
      icon: pollIcon,
      hasExtra: true,
      title: translate({
        id: "illa_flow.how_it_works.poll",
        message: "Poll",
      }),
      desc: translate({
        id: "illa_flow.how_it_works.request_at_a_minimum",
        message:
          "Request at a minimum frequency of once every 1 minute to ensure you receive the latest data.",
      }),
    },
  ],
  lottieContents: [
    {
      id: "Schedule",
      lottie: temp,
    },
    {
      id: "Webhook",
      lottie: temp,
    },
    {
      id: "Poll",
      lottie: temp,
    },
  ],
}
const SwitchContent: FC = () => {
  const { header, tabs, lottieContents } = CONTENT
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  return (
    <div className={style.containerStyle}>
      <ContentHeader {...header} />
      <div className={style.tabContainerStyle}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={clsx(
              style.tabStyle,
              activeTab === tab.id ? "opacity-100" : "opacity-50",
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            <TabLottie
              content={tab.icon}
              isPlay={activeTab === tab.id}
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
        ))}
      </div>
      <div className={style.contentContainerStyle}>
        {lottieContents.map((content) => (
          <div
            key={content.id}
            className={clsx(
              style.baseContentStyle,
              activeTab === content.id
                ? style.contentSelectStyle
                : style.contentUnSelectStyle,
            )}
          >
            <TabLottie
              content={content.lottie}
              isPlay={activeTab === content.id}
              lottieType={TAB_LOTTIE_TYPE.CONTENT}
            />
          </div>
        ))}
      </div>
      <MobileContent tabs={tabs} lottieContents={lottieContents} />
    </div>
  )
}

export default SwitchContent
