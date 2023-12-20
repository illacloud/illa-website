import { FC, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Publicize from '@site/src/components/common/Publicize';
import { useUtmParams } from '@site/src/hooks/useUtmParams';
import clsx from 'clsx';
import { sendTagEvent } from '@site/src/utils/gtag';
import { usePaintBg } from '../hooks/usePaintBg';
import style from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { IBannerPCProps } from '../interface';
// import bannerBg from '@site/static/img/home3/bannerBg.mp4';

const BannerPC: FC<IBannerPCProps> = (props) => {
  const { setPlayMaskShow, githubStarts } = props;

  const [canClick, setCanClcik] = useState(true);
  const cloudUrl = useUtmParams('https://cloud.illacloud.com');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  usePaintBg(canvasRef, containerRef);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (leatest) => {
    if (leatest >= 0.038) {
      setCanClcik(false);
    } else {
      setCanClcik(true);
    }
  });

  return (
    <div ref={containerRef} className={style.bannerContainerStyle}>
      <div className={style.canvasContainerStyle}>
        <canvas ref={canvasRef} />
      </div>
      {/* <video className={style.bgStyle} loop autoPlay muted>
        <source src={bannerBg} type="video/mp4" />
      </video> */}
      <div
        className={clsx(style.bannerContentContainer, {
          'pointer-events-none': !canClick,
        })}
      >
        <Publicize stars={githubStarts} />
        <div className={style.bannerTextContainerStyle}>
          <h1 className={style.sloganStyle}>
            <Translate id="slogan-1">Build AI Driven Business App</Translate>
          </h1>
          <span className={style.descStyle}>
            <Translate id="description">
              Empower your team with AI Agent and advanced low-code tools to
              create business apps
            </Translate>
          </span>
          <div className={style.buttonContainerStyle}>
            <Link
              href={cloudUrl}
              className="h-[48px] w-[400px] bg-tech-purple-01 rounded-[24px] px-[32px] py-[10px] font-normal text-white-01 text-center hover:bg-tech-purple-02 active:bg-tech-purple-n-01"
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: 'homepage_body_try_cloud_free_click',
                  label: translate({
                    id: 'illa-Cloud',
                    message: 'Get start',
                  }),
                  value: 'https://cloud.illacloud.com/',
                });
                sendTagEvent({
                  action: 'click_try',
                });
              }}
            >
              <Translate id="illa-Cloud">Get start</Translate>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.bannerImageStyle}>
        <img
          src="https://cdn.illacloud.com/official-website/img/home/playVideoCover.png"
          className="flex items-center justify-center"
          alt="Screenshot of ILLA Cloud app editor"
          width={1040}
          height={648}
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_body_video_click',
            });
            setPlayMaskShow && setPlayMaskShow(true);
          }}
        />
      </div>
    </div>
  );
};
export default BannerPC;
