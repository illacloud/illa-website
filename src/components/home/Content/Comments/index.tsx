import style from './index.module.css';
import QuoteIcon from '@site/static/img/home3/quote.svg';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';

const COMMENT_CONTENT = {
  title: translate({
    id: 'testimonial.title.user_testimonials',
    message: 'User Testimonials',
  }),
  items: [
    {
      content: translate({
        id: 'testimonial.testimonial1_content.illa_cloud_has_been',
        message:
          'ILLA Cloud has been a game-changer for me. It helps me generate highly efficient content in less time. The customized AI Agent and App perfectly cater to my business needs.',
      }),
      userName: translate({
        id: 'testimonial.testimonial1_username.christopher',
        message: 'Christopher',
      }),
      company: translate({
        id: 'testimonial.testimonial1_usertitle.seo_specialist',
        message: 'SEO Specialist',
      }),
    },
    {
      content: translate({
        id: 'testimonial.testimonial2_content.i_think_i_become_a_b',
        message:
          "I think I become a BlogMaster now! This tool has revolutionized my content generation process, saving me valuable time. Whether it's generating blog ideas or structuring articles, the AI Agents have been a tremendous asset to me and my team.",
      }),
      userName: translate({
        id: 'testimonial.testimonial2_username.lucas',
        message: 'Lucas',
      }),
      company: translate({
        id: 'testimonial.testimonial2_usertitle.content_strategist',
        message: 'Content Strategist',
      }),
    },
    {
      content: translate({
        id: 'testimonial.testimonial3_content.it_empowers_me_to_pr',
        message:
          "It empowers me to provide exceptional customer support with minimal effort. The pre-built AI Agent and App, along with the ability to customize them for our specific needs, have significantly enhanced our team's effectiveness.",
      }),
      userName: translate({
        id: 'testimonial.testimonial3_username.harper',
        message: 'Harper',
      }),
      company: translate({
        id: 'testimonial.testimonial3_usertitle.customer_service_man',
        message: 'Customer Service Manager',
      }),
    },
    {
      content: translate({
        id: 'testimonial.testimonial4_content.ai_agent_low_code',
        message:
          'AI Agent & low-code has transformed my email writing process. It streamlines the creation of impactful emails, enabling me to craft engaging and persuasive messages effortlessly. ILLA Cloud has elevated our email communication to new heights.',
      }),
      userName: translate({
        id: 'testimonial.testimonial4_username.abigail',
        message: 'Abigail',
      }),
      company: translate({
        id: 'testimonial.testimonial4_usertitle.communication_specia',
        message: 'Communication Specialist',
      }),
    },
    {
      content: translate({
        id: 'testimonial.testimonial5_content.i_need_to_oversee_va',
        message:
          'I need to oversee various aspects of my company. ILLA Cloud provides me with a comprehensive solution. It not only saves me time and effort in development and design but also allows me to manage and monitor my business better. ',
      }),
      userName: translate({
        id: 'testimonial.testimonial5_username.matthew',
        message: 'Matthew',
      }),
      company: translate({
        id: 'testimonial.testimonial5_usertitle.business_founder',
        message: 'Business Founder',
      }),
    },
    {
      content: translate({
        id: 'testimonial.testimonial6_content.using_illa_cloud_to',
        message:
          'Using ILLA Cloud to build a management dashboard has been incredibly easy. After just one day of work, we were able to accomplish tasks such as monitoring project progress and allocating resources within this dashboard.',
      }),
      userName: translate({
        id: 'testimonial.testimonial6_username.samuel',
        message: 'Samuel',
      }),
      company: translate({
        id: 'testimonial.testimonial6_usertitle.website_administrato',
        message: 'Website Administrator',
      }),
    },
  ],
};

const Comments = () => {
  return (
    <div className={style.commentsContainerStyle}>
      <h1 className={style.commentsTitleStyle}>{COMMENT_CONTENT.title}</h1>
      <div className={style.commentsItemsContainerStyle}>
        {COMMENT_CONTENT.items.map(({ content, userName, company }, index) => (
          <div
            key={userName}
            className={clsx(
              style.borderStyle,
              style.mobileGap,
              index !== 0 ? 'lg:mt-[16px]' : '',
            )}
          >
            <div className={style.commentsItemStyle}>
              <div className={style.commentContentStyle}>
                <QuoteIcon className="w-[10px]" />
                <span className={style.contentTextStyle}>{content}</span>
                <QuoteIcon className={style.reverseQuoteStyle} />
              </div>
              <span className="flex flex-col">
                <span className={style.commentUserNameStyle}>{userName}</span>
                <span className={style.commentUserCompanyStyle}>{company}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments;
