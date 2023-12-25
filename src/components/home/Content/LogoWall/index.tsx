import style from './index.module.css';
import Translate from '@docusaurus/Translate';
import GoogleIcon from '@site/static/img/home3/logoWall/googleIcon.svg'
import MetaIcon from '@site/static/img/home3/logoWall/metaIcon.svg'
import ByteDanceIcon from '@site/static/img/home3/logoWall/byteDanceIcon.svg'
import AliBabaIcon from '@site/static/img/home3/logoWall/alibaba.svg'
import IPhoneIcon from '@site/static/img/home3/logoWall/iphone.svg'
import JsDesignIcon from '@site/static/img/home3/logoWall/jsDesignIcon.svg'
import { Fragment } from 'react';

const LOGO_WALL = [
  {
    id: 'google',
    icon: <GoogleIcon className={style.logoStyle} />,
  },
  {
    id: 'meta',
    icon: <MetaIcon className={style.logoStyle} />,
  },
  {
    id: 'byteDance',
    icon: <ByteDanceIcon className={style.logoStyle} />,
  },
  {
    id: 'aliBaba',
    icon: <AliBabaIcon className={style.logoStyle} />,
  },
  {
    id: 'iPhone',
    icon: <IPhoneIcon className={style.logoStyle} />,
  },
  {
    id: 'jsDesign',
    icon: <JsDesignIcon className={style.logoStyle} />,
  },
];

function LogoWall() {

  return (
    <div className={style.wallContainerStyle}>
      <span className={style.logoTitleStyle}>
        <Translate id="customer.title">Trusted by thousands of teams</Translate>
      </span>
      <div className={style.logoContainerStyle}>
        {LOGO_WALL.map(({id, icon}) => <Fragment key={id}>{icon}</Fragment>)}
      </div>
    </div>
  );
}

export default LogoWall;
