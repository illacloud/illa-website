import style from './index.module.css';
import Translate from '@docusaurus/Translate';
const AllContent = () => {
  return (
    <div className={style.allContentContainer}>
      <h1 className={style.allContentTitle}>
        <Translate id="content.all.title">
          ILLA Cloud integrates everything
        </Translate>
      </h1>
      <div className="w-[1200px] w-full">
        {/* Todo: src 需要看一下 */}
        <img src="https://cdn.illacloud.com/official-website/img/home/allContent.png" />
      </div>
    </div>
  );
};
export default AllContent;
