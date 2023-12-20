import style from './index.module.css';
import ContentItem from '../ContentItem';
import { HUMAN_CONTENT } from './constant';
import Translate from '@docusaurus/Translate';

const HumanContent = ({ activeIndex }) => {
  return (
    <div className={style.borderContainerStyle}>
      <div className={style.humanContentContainerStyle}>
        <span className={style.titleStyle}>
          <Translate id="solutions.human_title.human_work">
            Human work
          </Translate>
        </span>
        <div className={style.contentItemContainerStyle}>
          {Array.isArray(HUMAN_CONTENT[activeIndex]) &&
            HUMAN_CONTENT[activeIndex].map(({ icon, desc }, i) => (
              <ContentItem
                key={desc}
                iconSrc={icon}
                text={desc}
                isLast={i === HUMAN_CONTENT[activeIndex].length - 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default HumanContent;
