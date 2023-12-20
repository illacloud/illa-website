import style from './index.module.css';
import { useTransform, motion, useScroll } from 'framer-motion';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import GithubIcon from '@site/static/img/public/github.svg';
import { useElementFirstShow } from '@site/src/hooks/useElementFirstShow';
import { useUtmParams } from '@site/src/hooks/useUtmParams';
import { useRef, useCallback, FC } from 'react';
import { sendTagEvent } from '@site/src/utils/gtag';
import Translate from '@docusaurus/Translate';
import { ICommonBottom } from './interface';

export const useGetGithubOauth = () => {
  const redirectURI = useUtmParams('https://cloud.illacloud.com/oauth');

  const getGithubOAuthURL = useCallback(async () => {
    try {
      const res = await fetch(
        `https://cloud-api.illacloud.com/supervisor/api/v1/oauth/github/uri/redirectTo/${encodeURIComponent(
          redirectURI.toString(),
        )}/landing/signup`,
      );
      const resJSON = await res.json();
      return resJSON.uri;
    } catch (e) {
      return '';
    }
  }, []);

  return getGithubOAuthURL;
};

const CommBottom: FC<ICommonBottom> = ({
  scrollStart,
  scrollEnd,
  whiteTheme = false,
}) => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(
    scrollYProgress,
    [scrollStart, scrollEnd],
    [120, 410],
  );
  const ref = useRef(null);
  const cloudUrl = useUtmParams('https://cloud.illacloud.com');

  const getGithubOAuthURL = useGetGithubOauth();

  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: 'homepage_call_action_show',
    });
  }, []);
  useElementFirstShow(ref, reportShow);
  return (
    <div ref={ref} className={style.commBottomContainer}>
      <motion.div
        style={{ height }}
        className={clsx(
          style.commBottomBtnBg,
          'hidden xl:block',
          whiteTheme ? style.whiteBottomBg : style.bottomBg,
        )}
      />
      <div
        className={clsx(
          style.commBottomBtnBg,
          'block xl:hidden h-full',
          whiteTheme ? style.whiteBottomBg : style.bottomBg,
        )}
      />
      <div className="flex flex-col items-center gap-[24px] w-full xl:w-[800px] xl:h-[210px]">
        <h1
          className={clsx(
            style.commBottomTitle,
            whiteTheme ? style.whiteBottomTitle : style.bottomTitle,
          )}
        >
          <Translate id="call-to-action.title">
            Start Building Apps with ILLA Cloud
          </Translate>
        </h1>
        <p
          className={clsx(
            style.commBottomDesc,
            whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
          )}
        >
          <Translate id="call-to-action.desc">
            Any internal tool you need can be built using ILLA Cloud in 1
            minute.
          </Translate>
        </p>
        <div className="flex flex-col xl:flex-row gap-[24px] w-full xl:w-auto">
          <Link
            href={cloudUrl}
            className={clsx(
              style.commBottomBtn,
              whiteTheme
                ? 'bg-tech-purple-01 text-white-01'
                : 'bg-white-01 text-[#0b0c0f]',
            )}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_call_action_try_cloud_click',
              });
              sendTagEvent({
                action: 'click_try',
              });
            }}
          >
            <Translate id="call-to-action.button-1">
              Try Cloud for free
            </Translate>
          </Link>
          <Link
            className={clsx(
              style.commBottomBtn,
              'gap-[10px]',
              whiteTheme
                ? 'bg-white-01 text-[#0b0c0f]'
                : 'bg-white-09 text-white-01',
            )}
            onClick={async () => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_call_action_try_cloud_click',
              });
              sendTagEvent({
                action: 'click_signin',
              });
              const URL = await getGithubOAuthURL();
              if (URL) {
                window.location.href = URL;
              }
            }}
          >
            {whiteTheme ? (
              <GithubIcon className="text-[#0B0C0F]" />
            ) : (
              <GithubIcon />
            )}
            <span>
              <Translate id="call-to-action.button-2">
                sign in with GitHub
              </Translate>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommBottom;
