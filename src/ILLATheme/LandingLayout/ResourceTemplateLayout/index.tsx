import { FC } from "react"
import LandingLayout from ".."
import { IResourceTemplateLayoutProps } from "./interface"
import { LpHeader } from "../../../components/landingPage/Header"
import styles from "./style.module.css"
import CommBottom from "../../../components/common/CommBottom"
import { LpTemplate } from "../../../components/landingPage/Template"

const ResourceTemplateLayout: FC<IResourceTemplateLayoutProps> = (props) => {
  const { title, description, headerConfig, footerConfig, schemaData } = props
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
            isShowBack={headerConfig.isShowBack}
            backText={headerConfig.backText}
            prevPagePath={headerConfig.prevPagePath}
          />
          <LpTemplate />
        </div>
        <CommBottom
          whiteTheme
          scrollStart={0.763}
          scrollEnd={0.81}
          bgColorFrom="rgba(81, 106, 181, 0)"
          bgColorEnd="rgba(81, 106, 181, 0.08)"
        />
      </div>
    </LandingLayout>
  )
}

export default ResourceTemplateLayout
