export interface IIndexContentProps {
  content: {
    title: string;
    contentList: {
      logo: string;
      name: string;
      path: string;
      description: string;
    }[];
  }[];
  pageName: string;
}

export interface IContentItemsProps {
  contentList: {
    logo: string;
    name: string;
    path: string;
    description: string;
  }[];
  pageName: string;
}
