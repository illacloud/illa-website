import style from './index.module.css';
import clsx from 'clsx';
import { Fragment } from 'react';

const SwitchItem = ({ text, isActive, onClick }) => {
  return (
    <span
      className={clsx(
        style.baseSwitchItemStyle,
        isActive ? style.activeItemStyle : style.notActionItemStyle,
      )}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

const SwitchMobile = ({ activeIndex, onClick, options }) => {
  return (
    <div className={style.switchContainerStyle}>
      {options.map((item, i) => (
        <Fragment key={item}>
          <SwitchItem
            text={item}
            isActive={i === activeIndex}
            onClick={() => onClick(i)}
          />
        </Fragment>
      ))}
    </div>
  );
};
export default SwitchMobile;
