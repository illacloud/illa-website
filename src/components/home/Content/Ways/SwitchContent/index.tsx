import AIContent from './AIContent';
import HumanContent from './HumanContent';
import style from './index.module.css';
import VSIcon from '@site/static/img/home3/vs.svg';
const SwitchContent = ({ activeIndex }) => {
  return (
    <div className={style.switchContentStyle}>
      <HumanContent activeIndex={activeIndex} />
      <VSIcon className={style.vsStyle} />
      <AIContent activeIndex={activeIndex} />
    </div>
  );
};

export default SwitchContent;
