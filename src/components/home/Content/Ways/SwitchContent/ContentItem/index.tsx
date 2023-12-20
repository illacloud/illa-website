import style from './index.module.css';
import JoinItemIcon from '@site/static/img/home3/joinItem.svg';

const JoinItem = () => {
  return (
    <span className={style.joinItemStyle}>
      <JoinItemIcon className={style.joinItemIconStyle} />
    </span>
  );
};

const ContentItem = ({ iconSrc, text, isLast }) => {
  return (
    <div className={style.contentItemContainerStyle}>
      <div className={style.borderContainerStyle}>
        <div className={style.ItemContainerStyle}>
          <img src={iconSrc} className={style.ItemIconStyle} alt="" />
          <span>{text}</span>
        </div>
      </div>
      {!isLast && <JoinItem />}
    </div>
  );
};
export default ContentItem;
