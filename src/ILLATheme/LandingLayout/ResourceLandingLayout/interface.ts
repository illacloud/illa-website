import { IIndexContentProps } from "../../../components/landingPage/IndexContent/interface"
import { ILandingLayoutProps } from "../interface"

export interface IResourceLandingLayoutProps
  extends Omit<ILandingLayoutProps, "children"> {
  pageName: string
  headerConfig: {
    prevPagePath?: string
    title: string
    description: string
    isShowBack?: boolean
    btnText?: string
    name?: string
    leftImage: string
    backText?: string
  }
  contentConfig: IIndexContentProps["content"]
}
