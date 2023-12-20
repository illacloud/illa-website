import style from './index.module.css';
import LearnMore from '../LearnMore';
import { useUtmParams } from '@site/src/hooks/useUtmParams';
import { translate } from '@docusaurus/Translate';

const MORE_TEMPLATE_CONTENT = {
  title: translate({
    id: 'template.title.quickly_start_from_a',
    message: 'Quickly start from a template',
  }),
  href: 'https://illa.ai',
  moreTitle: translate({
    id: 'template.button.explore_more_templat',
    message: 'Explore more templates',
  }),
  items: [
    {
      templateTitle: translate({
        id: 'template.template1_title.car_rental_admin_pan',
        message: 'Car rental admin panel',
      }),
      templateDesc: translate({
        id: 'template.template1_description.build_for_car_rental',
        message:
          'Build for car rental companies to identify and track trends in vehicle usage, costs, and servicing',
      }),
      templateSrc:
        'https://cdn.illacloud.com/official-website/img/home/ChatGPT%20Plugin.svg',
      mobileTemplateSrc:
        'https://cdn.illacloud.com/official-website/img/mobile/homepage/ChatGPT%20Plugin.png',
      templateMoreTitle: translate({
        id: 'template.template1_button.learn_more',
        message: 'Learn more',
      }),
      templateMoreHref: 'https://illa.ai/app/ILAcx4p1C7GP/detail',
    },
    {
      templateTitle: translate({
        id: 'template.template2_title.cms_with_content_gen',
        message: 'CMS with content generation',
      }),
      templateDesc: translate({
        id: 'template.template2_description.build_for_business_o',
        message:
          'Build for business operations teams to create and manage content more efficiently',
      }),
      templateSrc:
        'https://cdn.illacloud.com/official-website/img/home/Builder%20for%20Developers.svg',
      mobileTemplateSrc:
        'https://cdn.illacloud.com/official-website/img/mobile/homepage/Builder%20for%20Developers.png',
      templateMoreTitle: translate({
        id: 'template.template2_button.learn_more',
        message: 'Learn more',
      }),
      templateMoreHref: 'https://illa.ai/app/ILAcx4p1C7J0/detail',
    },
    {
      templateTitle: translate({
        id: 'template.template3_title.applicant_tracking',
        message: 'Applicant tracking',
      }),
      templateDesc: translate({
        id: 'template.template3_description.build_for_the_human',
        message:
          'Build for the human resources team to collect resumes and track progress',
      }),
      templateSrc:
        'https://cdn.illacloud.com/official-website/img/home/Integrate%20with%20Any%20data%20source.svg',
      mobileTemplateSrc:
        'https://cdn.illacloud.com/official-website/img/mobile/homepage/Integrate%20with%20Any%20data%20source.png',
      templateMoreTitle: translate({
        id: 'template.template3_button.learn_more',
        message: 'Learn more',
      }),
      templateMoreHref: 'https://illa.ai/app/ILAcx4p1C7GO/detail',
    },
  ],
};

const MoeTemplateItem = ({ content, isMobile }) => {
  const {
    templateDesc,
    templateMoreHref,
    templateMoreTitle,
    templateSrc,
    templateTitle,
    mobileTemplateSrc,
  } = content;
  const utmTemplateDetailUrl = useUtmParams(templateMoreHref);
  return (
    <div key={templateTitle} className={style.templateItemStyle}>
      <img
        src={isMobile ? mobileTemplateSrc : templateSrc}
        className="w-full"
        alt=""
      />
      <div className={style.templateTextStyle}>
        <h2 className={style.templateTextTitleStyle}>{templateTitle}</h2>
        <p className={style.templateTextDescStyle}>{templateDesc}</p>
        <LearnMore href={utmTemplateDetailUrl} title={templateMoreTitle} />
      </div>
    </div>
  );
};

const MoreTemplate = () => {
  const utmMoreUrl = useUtmParams(MORE_TEMPLATE_CONTENT.href);

  return (
    <div className={style.templateContainerStyle}>
      <div className={style.templateHeadContainerStyle}>
        <h1>{MORE_TEMPLATE_CONTENT.title}</h1>
        <LearnMore href={utmMoreUrl} title={MORE_TEMPLATE_CONTENT.moreTitle} />
      </div>
      <div className={style.templateItemContainerStyle}>
        {MORE_TEMPLATE_CONTENT.items.map((content) => (
          <MoeTemplateItem
            key={content.templateTitle}
            content={content}
            isMobile={false}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreTemplate;
