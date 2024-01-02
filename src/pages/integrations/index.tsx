import ResourceLandingLayout from "../../ILLATheme/LandingLayout/ResourceLandingLayout"
import {
  INDEX_INTEGRATIONS_CONTENT_DATA,
  INDEX_INTEGRATIONS_HEADER_DATA,
  INTEGRATIONS_META_INFO,
  INTEGRATION_SCHEMA_DATA,
} from "../../config/landingPage/integrations"

export default function () {
  return (
    <ResourceLandingLayout
      title={INTEGRATIONS_META_INFO.title}
      description={INTEGRATIONS_META_INFO.description}
      headerConfig={INDEX_INTEGRATIONS_HEADER_DATA}
      contentConfig={INDEX_INTEGRATIONS_CONTENT_DATA}
      schemaData={INTEGRATION_SCHEMA_DATA}
      pageName="integrations"
      footerConfig={{
        scrollStart: 0.81,
        scrollEnd: 1,
      }}
    />
  )
}
