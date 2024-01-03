import ResourceTemplateLayout from '../../../ILLATheme/LandingLayout/ResourceTemplateLayout';
import { META_INFO } from '../../../config/landingPage/integrationDetail/tidb';
import { translate } from '@docusaurus/Translate';

export default function () {
  return (
    <ResourceTemplateLayout
      title={META_INFO.metaTitle}
      description={META_INFO.metaDescription}
      headerConfig={{
        title: META_INFO.title,
        description: META_INFO.description,
        btnText: translate(
          {
            id: 'landingPage.build_with',
            message: 'Build with {name}',
          },
          {
            name: META_INFO.name,
          },
        ),
        name: META_INFO.name,
        isShowBack: true,
        backText: translate({
          id: 'landingPage.back_to_integrations',
          message: 'Back to integrations',
        }),
        prevPagePath: 'integrations',
      }}
      footerConfig={{
        scrollStart: 0.777,
        scrollEnd: 1,
      }}
    />
  );
}
