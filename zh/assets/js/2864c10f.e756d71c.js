"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3807],{1641:(e,t,o)=>{o.d(t,{Z:()=>s});var i,n=o(959);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:o,...s}=e;return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:15,height:13,viewBox:"0 0 15 13",fill:"none","aria-labelledby":o},s),t?n.createElement("title",{id:o},t):null,i||(i=n.createElement("path",{d:"M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},117:(e,t,o)=>{o.d(t,{Z:()=>j});var i=o(0),n=o(5341);const a="baseLinkButtonStyle_PuMK",s="smallSizeStyle_AohM",l="normalSizeStyle_qzr1",c="largeSizeStyle_kJWZ",r="darkColorStyle_MxJT",d="lightColorStyle_JCL1",m="baseArrowStyle_lXyW",u="smallArrowStyle_XZaI",p="normalArrowStyle_XxGa",g="largeArrowStyle_sKWX",w="darkArrowStyle_go7n",h="lightArrowStyle_QtFv",y="linkButtonBgStyle_WFWO",f="linesStyle_lbFy",b="lineContainerStyle_Y3Ta",x="lineStyle__sNm",v="darkLineStyle__Ris",A="lightLineStyle_xduB";var S=o(1641),C=o(1527);const j=e=>{let{href:t,children:o,size:j,colorType:I,handleClick:T}=e;return(0,C.jsxs)(i.Z,{to:t,onClick:T,className:(0,n.Z)(a,"small"===j&&s,"normal"===j&&l,"large"===j&&c,"dark"===I?r:d),children:[(0,C.jsxs)("span",{className:y,children:[(0,C.jsx)("span",{className:f,children:Array.from({length:10}).map(((e,t)=>(0,C.jsx)("span",{className:b,children:(0,C.jsx)("span",{className:(0,n.Z)(x,"dark"===I?v:A)},t)},t)))}),(0,C.jsx)("span",{className:(0,n.Z)(m,"small"===j&&u,"normal"===j&&p,"large"===j&&g,"dark"===I?w:h),children:(0,C.jsx)(S.Z,{})})]}),(0,C.jsx)("span",{className:"relative z-[1]",children:o})]})}},3090:(e,t,o)=>{o.d(t,{G:()=>n});var i=o(959);const n=(e,t)=>{const o=(0,i.useRef)(null),n=(0,i.useCallback)((()=>{const i=e.current;if(!i)return;const n=i.getContext("2d");i.width=t.current.clientWidth,i.height=t.current.clientHeight;o.current=(n.clearRect(0,0,i.width,i.height),void(()=>{n.strokeStyle="rgba(255, 255, 255, 0.1)";for(let e=0;e<=i.height;e+=56)n.beginPath(),n.moveTo(0,e),n.lineTo(i.width,e),n.stroke();for(let e=0;e<=i.width;e+=56)n.beginPath(),n.moveTo(e,0),n.lineTo(e,i.height),n.stroke()})())}),[e]);(0,i.useEffect)((()=>{const e=t.current,i=new ResizeObserver((()=>{o.current&&cancelAnimationFrame(o.current),n()}));return i.observe(e),n(),()=>{i&&i.unobserve(e)}}),[t,n]),(0,i.useEffect)((()=>()=>{o.current&&cancelAnimationFrame(o.current),o.current=null}),[])}},6641:(e,t,o)=>{o.r(t),o.d(t,{default:()=>q});var i=o(959),n=o(5341),a=o(1610),s=o(421),l=o(1153),c=o(7393),r=o(7546),d=o(1502),m=o(565),u=o(4491),p=o(2330),g=o(5628),w=o(700),h=o(3090);const y="containerStyle_IK43",f="indexBgStyle_Nusz",b="canvasContainerStyle_tBLh",x="contentContainer_kErA",v="textContainerStyle_LZMZ",A="sloganStyle_L8z2",S="colorSloganStyle_oMou",C="descStyle_uxY4",j="demoContainerStyle_taMy",I="demoImgStyle_SvRF",T="linkButtonStyle_m6Tn";var k=o(5374),_=o(117),L=o(3630),H=o(168),z=o(5231),N=o(7224),B=o(8618),M=o(8930),P=o(1527);const Z=e=>{let{slogan:t,colorSlogan:n,description:a,colorStart:s,colorEnd:l,appID:c,image:r,imageAlt:d}=e;const m=(0,g.f)(),u=(0,i.useRef)(null),p=(0,i.useRef)(null),{scrollYProgress:Z}=(0,H.v)(),D=(0,z.H)(Z,[0,.03],[10,0]),W=(0,z.H)(Z,[0,.03],[.95,1]),E=(0,z.H)(Z,[0,.03],["15%","0%"]);(0,h.G)(u,p);return(0,P.jsxs)("div",{ref:p,className:y,children:[(0,P.jsx)("div",{className:b,children:(0,P.jsx)("canvas",{ref:u})}),(0,P.jsx)("span",{className:f,children:(0,P.jsx)("img",{src:o(308).Z,alt:""})}),(0,P.jsxs)("div",{className:x,children:[(0,P.jsxs)("div",{className:v,children:[(0,P.jsx)("h1",{className:A,children:(0,P.jsx)(L.Z,{values:{colorSlogan:(0,P.jsx)("span",{className:S,style:{backgroundImage:`linear-gradient(to right, ${s}, ${l})`},children:n})},children:t})}),(0,P.jsx)("span",{className:C,children:a})]}),(0,P.jsxs)("div",{className:j,children:[(0,P.jsx)(N.E.div,{className:I,style:{rotateX:D,scale:W,y:E},children:(0,P.jsx)("img",{src:r,width:"100%",alt:d})}),(0,P.jsx)("img",{className:"lg:hidden block w-full rounded-[8px]",src:r,alt:d})]}),(0,P.jsx)("div",{className:T,children:(0,P.jsx)(_.Z,{href:(e=>{const t=(0,B.M)(`${M.kS}/${e}/detail`,{operateType:"fork"});return m(`${M.E}?redirectURL=${encodeURIComponent(t)}`)})(c),size:"small",colorType:"dark",handleClick:()=>{(0,w.l)({action:"solution_try_for_free"})},children:(0,P.jsx)(k.Z,{id:"website_4.solution.use_this_template",children:"Try now"})})})]})]})},D={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-image-generator",name:"Customize AI Image Generator for your business with ILLA Cloud ",description:"Text-to-Image, transform your imaginative ideas into stunning visuals. Image-to-image, enhance your images or drafts by applying artistic styles or modifying image content based on your description."},{"@type":"HowTo",name:"Customize AI Image Generator for your business",description:"Text-to-Image, transform your imaginative ideas into stunning visuals. Image-to-image, enhance your images or drafts by applying artistic styles or modifying image content based on your description.",image:"https://cdn.illacloud.com/official-website/img/solutions/ai-image1.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-image-generator"},{"@type":"HowToStep",text:"Connect to APIs to generate images such as text to image, draft to image, change the style of images...",image:"https://cdn.illacloud.com/official-website/img/solutions/draft-to-image.svg",name:"Connect to APIs to generate images",url:"https://www.illacloud.com/solutions-image-generator"}]}]},W={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-ai-voice-generator",name:"Build AI Voice Generator for your business",description:"Speech-to-text, transcribe the audio into text and translate or summarize it. Text-to-speech, create natural AI voices instantly in any language and let your content go beyond text. "},{"@type":"HowTo",name:"Build AI Voice Generator for your business",description:"Speech-to-text, transcribe the audio into text and translate or summarize it. Text-to-speech, create natural AI voices instantly in any language and let your content go beyond text.",image:"https://cdn.illacloud.com/official-website/img/solutions/audio/audio-cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-ai-voice-generator"},{"@type":"HowToStep",text:"Connect to APIs to transcribe the audio into text in any language or create natural AI voices instantly in any language.",image:"https://cdn.illacloud.com/official-website/img/solutions/audio/meeting.svg",name:"Connect to APIs to transcribe the audio into text in any language or create natural AI voices instantly in any language.",url:"https://www.illacloud.com/solutions-ai-voice-generator"}]}]},E={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-dashboard",name:"Customize Data Analysis Dashboard for Your Business",description:"Build comprehensive data analysis dashboards and drive your business growth with minimal investment."},{"@type":"HowTo",name:"Build Data Analysis Dashboard in minutes",description:"Build comprehensive data analysis dashboards and drive your business growth with minimal investment.",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-dashboard"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-dashboard"},{"@type":"HowToStep",text:"Analysis with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/analysis.gif",name:"Analysis with AI",url:"https://www.illacloud.com/solutions-dashboard"}]}]},O={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-image-generator",name:"Build CMS and operate more efficiently",description:"Built content management system for efficient operations. AI-powered, integrate with AI capabilities, enabling you to efficiently create both visual and textual content. File management, support file storage and delivering, simplifying the content management workflow."},{"@type":"HowTo",name:"Build CMS in minutes",description:"Built content management system for efficient operations. AI-powered, integrate with AI capabilities, enabling you to efficiently create both visual and textual content. File management, support file storage and delivering, simplifying the content management workflow.",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-cms"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-cms"},{"@type":"HowToStep",text:"Generate content such as images, descriptions, etc with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/ai.gif",name:"Generate content such as images, descriptions, etc with AI",url:"https://www.illacloud.com/solutions-cms"}]}]},G={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-crm",name:"Better sales CRM solution to close deals faster",description:"Efficiently manage all your leads, customer relationships, sales pipeline, and tasks in one place, so you can streamline your sales process and focus on closing the deals."},{"@type":"HowTo",name:"Better sales CRM solution to close deals faster",description:"Efficiently manage all your leads, customer relationships, sales pipeline, and tasks in one place, so you can streamline your sales process and focus on closing the deals.",image:"https://cdn.illacloud.com/official-website/img/solutions/crm/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-crm"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-crm"},{"@type":"HowToStep",text:"Generate marketing content such as emails, SMS, etc with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/crm/send.gif",name:"Generate marketing content such as emails, SMS, etc with AI",url:"https://www.illacloud.com/solutions-crm"}]}]},R={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-admin-panel",name:"Build Customized Admin Panel for Website and Apps",description:"Build admin panels at 10x speed to manage data or perform operations and allow developers to focus on business development. "},{"@type":"HowTo",name:"Build Customized Admin Panel for Website and Apps",description:"Build admin panels at 10x speed to manage data or perform operations and allow developers to focus on business development.",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-admin-panel"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-admin-panel"},{"@type":"HowToStep",text:"Analysis with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/analysis.gif",name:"Analysis with AI",url:"https://www.illacloud.com/solutions-admin-panel"}]}]},F=e=>{const{children:t}=e,{frontMatter:o,metadata:i}=(0,m.C)(),n=(e=>{const t=/solutions-/;if(!t.test(e))return;switch(e.split(t)[1]){case"image-generator":return D;case"ai-voice-generator":return W;case"dashboard":return E;case"cms":return O;case"crm":return G;case"admin-panel":return R}})(i.permalink);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(u.Z,{children:[(0,P.jsx)("meta",{name:"twitter:title",content:o.title}),(0,P.jsx)("meta",{name:"twitter:description",content:o.description}),(0,P.jsx)("script",{type:"application/ld+json",children:JSON.stringify(n)})]}),(0,P.jsxs)(l.j,{...o,children:[(0,P.jsxs)("div",{className:"w-full overflow-visible  bg-black relative z-[1]",children:[(0,P.jsx)(c.f,{}),(0,P.jsx)(Z,{...o}),(0,P.jsx)("div",{className:"w-full lg:max-w-[680px] mx-auto px-[20px] pb-[100px] lg:pb-[200px]",children:(0,P.jsx)("div",{className:"refine-prose markdown",children:(0,P.jsx)(d.Z,{children:t})})}),(0,P.jsx)(p.Z,{scrollStart:.9,scrollEnd:1})]}),(0,P.jsx)(r.Z,{scrollStart:.9,scrollEnd:1})]})]})};function q(e){const t=e.content;return(0,P.jsx)(m.n,{content:e.content,children:(0,P.jsx)(a.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:(0,P.jsx)(F,{children:(0,P.jsx)(t,{})})})})}},8618:(e,t,o)=>{o.d(t,{M:()=>i});const i=(e,t)=>{const o=new URL(e);for(const i in t)t[i]&&o.searchParams.append(i,t[i]);return o.toString()}},308:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/indexBg-7b78fdbbebf1afb9f265ff4a69d886fb.webp"}}]);