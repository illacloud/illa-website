import style from './index.module.css';
import CardContentItem from './CardContentItem';
import Translate, { translate } from '@docusaurus/Translate';

const CARD_CONTENT = {
  title: translate({
    id: 'how_to_use.title.3_steps_to_customize',
    message: 'steps to customize your AI tools',
  }),
  desc: translate({
    id: 'how_to_use.description.build_tools_through',
    message:
      'Build tools through drag-and-drop components, customize your AI Agent, connect to your data sources, and make AI a smart tool tailored to your needs and data, making your work more intelligent.',
  }),
  items: [
    {
      imageSrc: 'https://cdn.illacloud.com/official-website/img/home/step1.svg',
      mobileImageSrc:
        'https://cdn.illacloud.com/official-website/img/mobile/homepage/step1.png',
      title: translate({
        id: 'how_to_use.step1_title.create_ai_agent_for',
        message: 'Create AI Agent for a specific purpose',
      }),
      desc: translate({
        id: 'how_to_use.step1_description.you_can_create_an_ai',
        message:
          'You can create an AI Agent for a specific purpose and make it more helpful at specific tasks, at work, or in your daily life. ',
      }),
      moreTitle: translate({
        id: 'how_to_use.step1_button.ai_agent_marketplace',
        message: 'AI Agent Marketplace',
      }),
      moreHref: 'https://illa.ai',
    },
    {
      imageSrc: 'https://cdn.illacloud.com/official-website/img/home/step2.svg',
      mobileImageSrc:
        'https://cdn.illacloud.com/official-website/img/mobile/homepage/step2.png',
      title: translate({
        id: 'how_to_use.step2_title.build_the_frontend_p',
        message: 'Build the frontend page in a few minutes',
      }),
      desc: translate({
        id: 'how_to_use.step2_description.by_dragging_and_drop',
        message:
          'By dragging and dropping components, you can quickly build the interface of the tool and implement any functionality you desire.',
      }),
      moreTitle: translate({
        id: 'how_to_use.step2_button.illa_app_marketplace',
        message: 'ILLA App Marketplace',
      }),
      moreHref: 'https://illa.ai/app',
      reverse: true,
    },
    {
      imageSrc: 'https://cdn.illacloud.com/official-website/img/home/step3.svg',
      mobileImageSrc:
        'https://cdn.illacloud.com/official-website/img/mobile/homepage/step3.png',
      title: translate({
        id: 'how_to_use.step3_title.connect_to_your_data',
        message: 'Connect to your data sources and AI Agents',
      }),
      desc: translate({
        id: 'how_to_use.step3_description.enable_data_integrat',
        message:
          'Enable data integration and automation. AI Agent will perform specific tasks based on your requirements and data.',
      }),
      moreTitle: translate({
        id: 'how_to_use.step3_button.supported_data_sourc',
        message: 'Supported data sources',
      }),
      moreHref: 'https://www.illacloud.com/integrations',
    },
  ],
};

const CardContent = () => {
  return (
    <div className={style.cardContentContainerStyle}>
      <div className={style.headerContainerStyle}>
        <h1 className={style.textTitleStye}>
          <span className={style.textTitleNumStyle}>3&nbsp;</span>
          {CARD_CONTENT.title}
        </h1>
        <span className={style.textDescStyle}>{CARD_CONTENT.desc}</span>
      </div>
      {CARD_CONTENT.items.map(
        (
          {
            imageSrc,
            mobileImageSrc,
            title,
            desc,
            moreHref,
            moreTitle,
            reverse,
          },
          i,
        ) => (
          <CardContentItem
            key={title}
            imageSrc={imageSrc}
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
  );
};
export default CardContent;
