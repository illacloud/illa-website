import { FC } from "react"
import LandingLayout from "../../LandingLayout"
import { IResourceLandingLayoutProps } from "./interface"
import { LpHeader } from "../../../components/landingPage/Header"
import styles from "./style.module.css"
import { IndexContent } from "../../../components/landingPage/IndexContent"
import CommBottom from "../../../components/common/CommBottom"
const ResourceLandingLayout: FC<IResourceLandingLayoutProps> = (props) => {
  const {
    title,
    description,
    headerConfig,
    contentConfig,
    pageName,
    footerConfig,
    schemaData,
  } = props
  return (
    <LandingLayout
      title={title}
      description={description}
      whiteTheme
      footerConfig={footerConfig}
      schemaData={schemaData}
    >
      <div className="w-full relative z-[1] bg-white-01">
        <div className={styles.lpContainer}>
          <LpHeader
            title={headerConfig.title}
            description={headerConfig.description}
            btnText={headerConfig.btnText}
            name={headerConfig.name}
            leftImage={headerConfig.leftImage}
          />
          <IndexContent content={contentConfig} pageName={pageName} />
        </div>
        <CommBottom whiteTheme scrollStart={0.763} scrollEnd={0.81} />
      </div>
    </LandingLayout>
  )
}

export default ResourceLandingLayout
