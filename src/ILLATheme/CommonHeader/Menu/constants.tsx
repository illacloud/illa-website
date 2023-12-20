import { MenuItemType } from './interface';
import { translate } from '@docusaurus/Translate';

export const MENU_ITEMS: MenuItemType[] = [
  {
    isPopover: true,
    label: translate({ id: 'nav.resource', message: 'Resource' }),
    items: [
      {
        label: translate({
          id: 'sub_nav.resource.integrations',
          message: 'Integrations',
        }),
        category: 'homepage_menu_resource_integration_click',
        link: '/integrations',
        target: 'integrations',
      },
      {
        label: translate({
          id: 'sub_nav.resource.components',
          message: 'Components',
        }),
        category: 'homepage_menu_resource_components_click',
        link: '/components',
        target: 'components',
      },
    ],
  },
  {
    isPopover: false,
    label: translate({
      id: 'nav.pricing',
      message: 'Pricing',
    }),
    href: '/pricing',
    category: 'homepage_menu_pricing_click',
  },
  {
    isPopover: false,
    label: translate({
      id: 'nav.doc',
      message: 'Doc',
    }),
    href: 'https://docs.illacloud.com',
    category: 'homepage_menu_doc_click',
  },
  {
    isPopover: false,
    label: translate({
      id: 'nav.blog',
      message: 'Blog',
    }),
    href: '/blog',
    category: 'homepage_menu_blog_click',
  },
  {
    isPopover: false,
    href: 'https://illa.ai',
    label: translate({
      id: 'nav.marketplace',
      message: 'Marketplace',
    }),
  },
];
