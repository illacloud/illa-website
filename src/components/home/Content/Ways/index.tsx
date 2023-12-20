import style from './index.module.css';
import SwitchContent from './SwitchContent';
import { useState } from 'react';
import Translate from '@docusaurus/Translate';
import SwitchPC from './Switch/PC';

const options = [
  'solutions.option1.customer_comms',
  'solutions.option2.applicant_tracking',
  'solutions.option3.image_content_manage',
];

const Ways = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={style.waysContainerStyle}>
      <h1 className={style.waysTitleStyle}>
        <Translate id="solutions.title.how_illa_ai_improves">
          How ILLA AI Improves Work Practices
        </Translate>
      </h1>
      <SwitchPC
        onClick={(i) => setActiveIndex(i)}
        activeIndex={activeIndex}
        options={options}
      />
      {/* <Switch onClick={(i) => setActiveIndex(i)} activeIndex={activeIndex} /> */}
      <SwitchContent activeIndex={activeIndex} />
    </div>
  );
};

export default Ways;
