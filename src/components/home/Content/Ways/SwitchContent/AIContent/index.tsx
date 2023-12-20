import style from './index.module.css';
import ContentItem from '../ContentItem';
import { AI_AGENT_CONTENT } from './constant';
import Translate from '@docusaurus/Translate';

const AIContent = ({ activeIndex }) => {
  const aiContent = AI_AGENT_CONTENT;
  return (
    <div className={style.borderContainerStyle}>
      <div className={style.aiContentContainerStyle}>
        <span className={style.titleStyle}>
          <Translate id="solutions.illa_title.illa_ai">ILLA Cloud</Translate>
        </span>
        <div className={style.contentItemContainerStyle}>
          {Array.isArray(aiContent[activeIndex]) &&
            aiContent[activeIndex].map(({ icon, desc }, i) => (
              <ContentItem
                key={desc}
                iconSrc={icon}
                text={desc}
                isLast={i === aiContent[activeIndex].length - 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default AIContent;
