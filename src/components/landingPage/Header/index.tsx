import BackIcon from '@site/static/img/public/backIcon.svg';
import clsx from 'clsx';
import style from './style.module.css';
import Link from '@docusaurus/Link';
import { sendTagEvent } from '@site/src/utils/gtag';
import { FC } from 'react';
import { IHeaderProps } from './interface';

export const LpHeader: FC<IHeaderProps> = ({
  prevPagePath,
  title,
  description,
  isShowBack = false,
  btnText = '',
  name = '',
  leftImage,
  backText,
}) => {
  return (
    <div className={style.lpHeader}>
      <div
        className={clsx(
          style.lpHeaderLeft,
          isShowBack ? 'w-full' : 'xl:pt-[48px] xl:w-[570px] w-full ',
        )}
      >
        {isShowBack && (
          <Link href={`/${prevPagePath}`}>
            <span
              className={style.back}
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: 'landing_page_back',
                  label:
                    prevPagePath === 'integrations'
                      ? 'Back to integrations'
                      : 'Back to components',
                });
              }}
            >
              <BackIcon className="text-tech-purple-01" />
              <span>{backText}</span>
            </span>
          </Link>
        )}
        <h1 className={style.headerTitle}>{title}</h1>
        <span className={style.headerDesc}>{description}</span>
        <Link
          className={style.headerGo}
          href="https://cloud.illacloud.com/"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: isShowBack
                ? 'landing_page_build_with'
                : 'landing_page_try_for_free',
              label: isShowBack ? 'Build with' : 'Try for free',
              value: name,
            });
          }}
        >
          {btnText}
        </Link>
      </div>
      {!isShowBack && (
        <img src={leftImage} alt="" className="w-full xl:w-[550px]" />
      )}
    </div>
  );
};
