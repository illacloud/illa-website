import ResourceLandingLayout from '../../ILLATheme/LandingLayout/ResourceLandingLayout';
import {
  COMPONENTS_META_INFO,
  INDEX_COMPONENTS_CONTENT_DATA,
  INDEX_COMPONENTS_HEADER_DATA,
} from '../../config/landingPage/components';

export default function () {
  return (
    <ResourceLandingLayout
      title={COMPONENTS_META_INFO.title}
      description={COMPONENTS_META_INFO.description}
      headerConfig={INDEX_COMPONENTS_HEADER_DATA}
      contentConfig={INDEX_COMPONENTS_CONTENT_DATA}
      pageName="components"
      footerConfig={{
        scrollStart: 0.81,
        scrollEnd: 1,
      }}
    />
  );
}
