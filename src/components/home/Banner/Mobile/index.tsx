import Link from '@docusaurus/Link';
import { FC, useEffect, useState } from 'react';
import LinearGithubIcon from '@site/static/img/public/linearGithub.svg';
import LinearDiscordIcon from '@site/static/img/public/linearDiscord.svg';
import { sendTagEvent } from '@site/src/utils/gtag';
import { useUtmParams } from '@site/src/hooks/useUtmParams';
import style from './index.module.css';
import BannerBg from '@site/static/img/home3/bannerBg.svg';
import Translate, { translate } from '@docusaurus/Translate';
import { IBannerPCProps } from '../interface';

const BannerMobile: FC<IBannerPCProps> = (props) => {
  const [menuExpand] = useState(false);
  const { setPlayMaskShow, githubStarts } = props;
  const cloudUrl = useUtmParams('https://cloud.illacloud.com');

  useEffect(() => {
    document.body.style.overflow = menuExpand ? 'hidden' : 'auto';
  }, [menuExpand]);

  return (
    <div className={style.bannerContainer}>
      <BannerBg className={style.bgStyle} />
      <h1 className={style.sloganStyle}>
        <Translate id="slogan-1">Build AI Driven Business App</Translate>
      </h1>
      <span className={style.descStyle}>
        <Translate id="description">
          Empower your team with AI Agent and advanced low-code tools to create
          business apps
        </Translate>
      </span>
      <Link
        href={cloudUrl}
        className={style.tryBtnStyle}
        onClick={() => {
          sendTagEvent({
            action: 'click_try',
          });
          sendTagEvent({
            action: 'click',
            category: 'homepage_body_try_cloud_free_click',
            label: translate({
              id: 'illa-Cloud',
              message: 'Get start',
            }),
            value: 'https://cloud.illacloud.com/',
          });
        }}
      >
        <Translate id="illa-Cloud">Get start</Translate>
      </Link>
      <div className="flex items-center gap-[40px]">
        <Link
          href="https://github.com/illacloud/illa-builder"
          className="flex flex-col items-center gap-[8px] inline-block"
          target="__blank"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_body_github_mob_click',
              label: `${githubStarts} ${translate({
                id: 'starts',
                message: 'Starts',
              })}`,
              value: 'https://github.com/illacloud/illa-builder',
            });
          }}
        >
          <LinearGithubIcon />
          <div className="text-white-01 text-[13px] flex items-center font-medium">
            <span className="ml-[5px]">
              {githubStarts}
              <Translate id="stars">Starts</Translate>
            </span>
          </div>
        </Link>
        <Link
          href="https://discord.com/invite/illacloud"
          target="__blank"
          className="flex flex-col items-center gap-[8px] inline-block"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_body_discord_mob_click',
              label: translate({
                id: 'join-community',
                message: 'Join Discord',
              }),
              value: 'https://discord.com/invite/illacloud',
            });
          }}
        >
          <LinearDiscordIcon />
          <div className="text-white-01 text-[13px] flex items-center font-medium">
            <span className="ml-[5px] align-middle">
              <Translate id="join-community">Join Discord</Translate>
            </span>
          </div>
        </Link>
      </div>
      <div
        className="mt-[32px] relative"
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_body_video_click',
          });
          setPlayMaskShow && setPlayMaskShow(true);
        }}
      >
        <img
          src="https://cdn.illacloud.com/official-website/img/home/playVideoCover.png"
          width="2080"
          height="1294"
          alt="Screenshot of ILLA Cloud app editor"
        />
      </div>
    </div>
  );
};

export default BannerMobile;
