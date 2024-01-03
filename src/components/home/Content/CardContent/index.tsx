import style from "./index.module.css"
import CardContentItem from "./CardContentItem"
import { translate } from "@docusaurus/Translate"
import { CLOUD_URL } from "@site/src/constants/url"

const CARD_CONTENT = {
  title: translate({
    id: "how_to_use.title.3_steps_to_customize",
    message: "steps to customize your business apps",
  }),
  desc: translate({
    id: "how_to_use.description.build_tools_through",
    message:
      "Build tools through drag-and-drop components, customize your AI Agent, connect to your data sources, and make AI a smart tool tailored to your needs and data, making your work more intelligent.",
  }),
  items: [
    {
      imageIcon: (
        <img
          src="https://cdn.illacloud.com/illa-website/home/step/step1.webp"
          className={style.imgStyle}
        />
      ),
      title: translate({
        id: "how_to_use.step1_title.create_ai_agent_for",
        message: "Drag and drop components to design UI",
      }),
      desc: translate({
        id: "how_to_use.step1_description.you_can_create_an_ai",
        message:
          "By dragging and dropping components, you can quickly build the UI of the apps and implement any functionality you desire.",
      }),
      moreTitle: translate({
        id: "how_to_use.step1_button.ai_agent_marketplace",
        message: "Start building UI with ILLA",
      }),
      moreHref: CLOUD_URL,
    },
    {
      imageIcon: (
        <img
          src="https://cdn.illacloud.com/illa-website/home/step/step2.webp"
          className={style.imgStyle}
        />
      ),
      title: translate({
        id: "how_to_use.step2_title.build_the_frontend_p",
        message: "Connect to your data sources",
      }),
      desc: translate({
        id: "how_to_use.step2_description.by_dragging_and_drop",
        message:
          "Connect to your own data sources, including MySQL, PostgreSQL, and other databases, REST APIs, GraphQL, etc. Build CRUD apps in just one minute.",
      }),
      moreTitle: translate({
        id: "how_to_use.step2_button.illa_app_marketplace",
        message: "Start building Apps with your data sources",
      }),
      moreHref: CLOUD_URL,
      reverse: true,
    },
    {
      imageIcon: (
        <img
          src="https://cdn.illacloud.com/illa-website/home/step/step3.webp"
          className={style.imgStyle}
        />
      ),
      title: translate({
        id: "how_to_use.step3_title.connect_to_your_data",
        message: "Configure and connect to AI agents",
      }),
      desc: translate({
        id: "how_to_use.step3_description.enable_data_integrat",
        message:
          "Integrating AI agents into your app and empower it with AI capabilities such as intelligent analysis, content generation, and more, without AI development skills.",
      }),
      moreTitle: translate({
        id: "how_to_use.step3_button.supported_data_sourc",
        message: "Start building AI driven apps",
      }),
      moreHref: CLOUD_URL,
    },
  ],
}

const CardContent = () => {
  return (
    <div className={style.cardContentContainerStyle}>
      <div className={style.headerContainerStyle}>
        <h2 className={style.textTitleStye}>
          <span className={style.textTitleNumStyle}>3&nbsp;</span>
          {CARD_CONTENT.title}
        </h2>
        <span className={style.textDescStyle}>{CARD_CONTENT.desc}</span>
      </div>
      <div className={style.cardContainerStyle}>
        {CARD_CONTENT.items.map(
          ({ imageIcon, title, desc, moreHref, moreTitle, reverse }, i) => (
            <CardContentItem
              key={title}
              imageIcon={imageIcon}
              desc={desc}
              title={title}
              moreTitle={moreTitle}
              reverse={reverse}
              moreHref={moreHref}
              stepNum={i + 1}
            />
          ),
        )}
      </div>
    </div>
  )
}
export default CardContent
