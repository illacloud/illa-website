import { ILandingLayoutProps } from '../interface';

export interface IResourceTemplateLayoutProps
  extends Omit<ILandingLayoutProps, 'children'> {
  headerConfig: {
    prevPagePath?: string;
    title: string;
    description: string;
    isShowBack?: boolean;
    btnText?: string;
    name?: string;
    leftImage?: string;
    backText?: string;
  };
}
