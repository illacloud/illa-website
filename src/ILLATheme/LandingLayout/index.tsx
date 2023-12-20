import Head from '@docusaurus/Head';
import { CommonLayout } from '../CommonLayout';
import { CommonHeader } from '../CommonHeader';
import CommonFooter from '..//CommonFooter';
import { FC } from 'react';
import { ILandingLayoutProps } from './interface';

const LandingLayout: FC<ILandingLayoutProps> = (props) => {
  const { title, description, whiteTheme, children, keywords, footerConfig } =
    props;

  return (
    <>
      <Head>
        <html data-active-page="index" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="og:title" property="og:title" content={title} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>
      <CommonLayout
        description={description}
        whiteTheme={whiteTheme}
        title={title}
      >
        <CommonHeader whiteTheme={whiteTheme} />
        {children}
        <CommonFooter
          scrollStart={footerConfig.scrollStart}
          scrollEnd={footerConfig.scrollEnd}
          whiteTheme={whiteTheme}
        />
      </CommonLayout>
    </>
  );
};

export default LandingLayout;
