import style from './index.module.css';
import AllContent from './AllContent';
import Ways from './Ways';
import CardContent from './CardContent';
import MoreTemplate from './MoreTemplate';
import CommBottom from '@site/src/components/common/CommBottom';
import LogoWall from '@site/src/components/home/Content/LogoWall';
import Comments from './Comments';

const NewContent = () => {
  return (
    <div className={style.contentContainer}>
      <div className={style.content}>
        <LogoWall />
        <AllContent />
        <Ways />
        <CardContent />
        <MoreTemplate />
        <Comments />
      </div>
      <div className={style.commBottomContainerStyle}>
        <CommBottom scrollStart={0.9368} scrollEnd={1} />
      </div>
    </div>
  );
};

export default NewContent;
