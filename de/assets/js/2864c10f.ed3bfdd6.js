"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3807],{1641:(e,t,l)=>{l.d(t,{Z:()=>i});var a,o=l(959);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},n.apply(this,arguments)}const i=e=>{let{title:t,titleId:l,...i}=e;return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:15,height:13,viewBox:"0 0 15 13",fill:"none","aria-labelledby":l},i),t?o.createElement("title",{id:l},t):null,a||(a=o.createElement("path",{d:"M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},2330:(e,t,l)=>{l.d(t,{Z:()=>E});const a="commBottomContainer_rcOJ",o="commBottomBtnBg_ws3H",n="commBottomTitle_zpUk",i="bottomTitle__Qxb",s="whiteBottomTitle_r_oZ",r="commBottomDesc_DyZe",c="commBottomBtn_pFSF";var u=l(168),d=l(5231),m=l(7224),g=l(0),p=l(5341),h=l(8848),w=l(6193),f=l(5628),y=l(959),b=l(700),_=l(5374),v=l(8930),x=l(1527);const E=e=>{let{scrollStart:t,scrollEnd:l,whiteTheme:E=!1,bgColorFrom:B="rgba(101, 74, 236, 0)",bgColorEnd:S="rgba(101, 74, 236, 0.5)"}=e;const{scrollYProgress:C}=(0,u.v)(),A=(0,d.H)(C,[t,l],[120,410]),I=(0,y.useRef)(null),F=(0,f.f)(),j=(()=>{const e=(0,f.f)();return(0,y.useCallback)((async()=>{try{const t=await fetch(`https://cloud-api.illacloud.com/supervisor/api/v1/oauth/github/uri/redirectTo/${encodeURIComponent(e(v.d9).toString())}/landing/signup`);return(await t.json()).uri}catch(t){return""}}),[])})(),k=(0,y.useCallback)((()=>{(0,b.l)({action:"click",category:"homepage_call_action_show"})}),[]);return(0,w.k)(I,k),(0,x.jsxs)("div",{ref:I,className:a,children:[(0,x.jsx)(m.E.div,{style:{height:A,backgroundImage:`linear-gradient(180deg,${B}, ${S})`},className:(0,p.Z)(o,"hidden lg:block")}),(0,x.jsx)("div",{className:(0,p.Z)(o,"block lg:hidden h-full"),style:{backgroundImage:`linear-gradient(180deg,${B}, ${S})`}}),(0,x.jsxs)("div",{className:"flex flex-col items-center gap-[24px] w-full lg:w-[800px] lg:h-[210px]",children:[(0,x.jsx)("h2",{className:(0,p.Z)(n,E?s:i),children:(0,x.jsx)(_.Z,{id:"call-to-action.title",children:"Start Building Apps with ILLA Cloud"})}),(0,x.jsx)("p",{className:(0,p.Z)(r,E?"text-grayBlue-02":"text-white-02"),children:(0,x.jsx)(_.Z,{id:"call-to-action.desc",children:"Any internal tool you need can be built using ILLA Cloud in 1 minute."})}),(0,x.jsxs)("div",{className:"flex flex-col lg:flex-row gap-[24px] w-full lg:w-auto",children:[(0,x.jsx)(g.Z,{to:F(v.E),className:(0,p.Z)(c,E?"bg-tech-purple-03 text-white-01 hover:text-white-01":"bg-white-01 text-[#0b0c0f] hover:text-[#0b0c0f]"),onClick:()=>{(0,b.l)({action:"click",category:"homepage_call_action_try_cloud_click"}),(0,b.l)({action:"click_try"})},children:(0,x.jsx)(_.Z,{id:"call-to-action.button-1",children:"Try Cloud for free"})}),(0,x.jsxs)("button",{className:(0,p.Z)(c,"gap-[10px]",E?"bg-white-01 text-[#0b0c0f] hover:text-[#0b0c0f]":"bg-white-09 text-white-01 hover:text-white-01"),onClick:async()=>{(0,b.l)({action:"click",category:"homepage_call_action_try_cloud_click"}),(0,b.l)({action:"click_signin"});const e=await j();e&&(window.location.href=e)},children:[E?(0,x.jsx)(h.Z,{className:"text-[#0B0C0F]"}):(0,x.jsx)(h.Z,{}),(0,x.jsx)("span",{children:(0,x.jsx)(_.Z,{id:"call-to-action.button-2",children:"sign in with GitHub"})})]})]})]})]})}},117:(e,t,l)=>{l.d(t,{Z:()=>S});var a=l(0),o=l(5341);const n="baseLinkButtonStyle_PuMK",i="smallSizeStyle_AohM",s="normalSizeStyle_qzr1",r="largeSizeStyle_kJWZ",c="darkColorStyle_MxJT",u="lightColorStyle_JCL1",d="baseArrowStyle_lXyW",m="smallArrowStyle_XZaI",g="normalArrowStyle_XxGa",p="largeArrowStyle_sKWX",h="darkArrowStyle_go7n",w="lightArrowStyle_QtFv",f="linkButtonBgStyle_WFWO",y="linesStyle_lbFy",b="lineContainerStyle_Y3Ta",_="lineStyle__sNm",v="darkLineStyle__Ris",x="lightLineStyle_xduB";var E=l(1641),B=l(1527);const S=e=>{let{href:t,children:l,size:S,colorType:C,handleClick:A}=e;return(0,B.jsxs)(a.Z,{to:t,onClick:A,className:(0,o.Z)(n,"small"===S&&i,"normal"===S&&s,"large"===S&&r,"dark"===C?c:u),children:[(0,B.jsxs)("span",{className:f,children:[(0,B.jsx)("span",{className:y,children:Array.from({length:10}).map(((e,t)=>(0,B.jsx)("span",{className:b,children:(0,B.jsx)("span",{className:(0,o.Z)(_,"dark"===C?v:x)},t)},t)))}),(0,B.jsx)("span",{className:(0,o.Z)(d,"small"===S&&m,"normal"===S&&g,"large"===S&&p,"dark"===C?h:w),children:(0,B.jsx)(E.Z,{})})]}),(0,B.jsx)("span",{className:"relative z-[1]",children:l})]})}},3090:(e,t,l)=>{l.d(t,{G:()=>o});var a=l(959);const o=(e,t)=>{const l=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const a=e.current;if(!a)return;const o=a.getContext("2d");a.width=t.current.clientWidth,a.height=t.current.clientHeight;l.current=(o.clearRect(0,0,a.width,a.height),void(()=>{o.strokeStyle="rgba(255, 255, 255, 0.1)";for(let e=0;e<=a.height;e+=56)o.beginPath(),o.moveTo(0,e),o.lineTo(a.width,e),o.stroke();for(let e=0;e<=a.width;e+=56)o.beginPath(),o.moveTo(e,0),o.lineTo(e,a.height),o.stroke()})())}),[e]);(0,a.useEffect)((()=>{const e=t.current,a=new ResizeObserver((()=>{l.current&&cancelAnimationFrame(l.current),o()}));return a.observe(e),o(),()=>{a&&a.unobserve(e)}}),[t,o]),(0,a.useEffect)((()=>()=>{l.current&&cancelAnimationFrame(l.current),l.current=null}),[])}},3712:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ve});var a=l(959),o=l(5341),n=l(1610),i=l(421),s=l(1153),r=l(1112),c=l(1643),u=l(1502),d=l(565),m=l(4491),g=l(2330),p=l(5628),h=l(700),w=l(3090);const f="containerStyle_IK43",y="indexBgStyle_Nusz",b="canvasContainerStyle_tBLh",_="contentContainer_kErA",v="textContainerStyle_LZMZ",x="sloganStyle_L8z2",E="colorSloganStyle_oMou",B="descStyle_uxY4",S="demoContainerStyle_taMy",C="demoImgStyle_SvRF",A="linkButtonStyle_m6Tn";var I=l(5374),F=l(117),j=l(3630),k=l(168),T=l(5231),O=l(7224),G=l(8618),L=l(8930),U=l(1527);const D=e=>{let{slogan:t,colorSlogan:l,description:o,colorStart:n,colorEnd:i,appID:s,image:r,imageAlt:c,bg:u}=e;const d=(0,p.f)(),m=(0,a.useRef)(null),g=(0,a.useRef)(null),{scrollYProgress:D}=(0,k.v)(),Z=(0,T.H)(D,[0,.03],[10,0]),H=(0,T.H)(D,[0,.03],[.95,1]),N=(0,T.H)(D,[0,.03],["15%","0%"]);(0,w.G)(m,g);const M=e=>{const t=(0,G.M)(`${L.kS}/${e}/detail`,{operateType:"fork"});return d(`${L.E}?redirectURL=${encodeURIComponent(t)}`)};return(0,U.jsxs)("div",{ref:g,className:f,children:[(0,U.jsx)("div",{className:b,children:(0,U.jsx)("canvas",{ref:m})}),(0,U.jsx)("span",{className:y,children:u}),(0,U.jsxs)("div",{className:_,children:[(0,U.jsxs)("div",{className:v,children:[(0,U.jsxs)("div",{className:"flex flex-col gap-[16px] items-center",children:[(0,U.jsx)("h1",{className:x,children:(0,U.jsx)(j.Z,{values:{colorSlogan:(0,U.jsx)("span",{className:E,style:{backgroundImage:`linear-gradient(to right, ${n}, ${i})`},children:l})},children:t})}),(0,U.jsx)("span",{className:B,children:o})]}),(0,U.jsx)("div",{className:"hidden lg:block",children:(0,U.jsx)(F.Z,{href:M(s),colorType:"light",size:"large",handleClick:()=>{(0,h.l)({action:"solution_try_for_free"})},children:(0,U.jsx)(I.Z,{id:"website_4.solution.use_this_template",children:"Try now"})})})]}),(0,U.jsxs)("div",{className:S,children:[(0,U.jsx)(O.E.div,{className:C,style:{rotateX:Z,scale:H,y:N},children:(0,U.jsx)("img",{src:r,width:"100%",alt:c})}),(0,U.jsx)("img",{className:"lg:hidden block w-full rounded-[8px]",src:r,alt:c})]}),(0,U.jsx)("div",{className:A,children:(0,U.jsx)(F.Z,{href:M(s),size:"small",colorType:"dark",handleClick:()=>{(0,h.l)({action:"solution_try_for_free"})},children:(0,U.jsx)(I.Z,{id:"website_4.solution.use_this_template",children:"Try now"})})})]})]})},Z={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com",logo:"https://www.illacloud.com",sameAs:["https://twitter.com/illacloudhq","GitHub - illacloud/illa-builder: Build AI Driven Business App","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud"]},{"@type":"WebSite",name:"ILLA Cloud",url:"https://www.illacloud.com",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.illacloud.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-image-generator",name:"Customize AI Image Generator for your business with ILLA Cloud ",description:"Text-to-Image, transform your imaginative ideas into stunning visuals. Image-to-image, enhance your images or drafts by applying artistic styles or modifying image content based on your description."},{"@type":"HowTo",name:"Customize AI Image Generator for your business",description:"Text-to-Image, transform your imaginative ideas into stunning visuals. Image-to-image, enhance your images or drafts by applying artistic styles or modifying image content based on your description.",image:"https://cdn.illacloud.com/official-website/img/solutions/ai-image1.svg",totalTime:"PT10M",estimatedCost:{"@type":"MonetaryAmount",currency:"USD",value:"0"},supply:{"@type":"HowToSupply",name:"Access ILLA Cloud and register an account to use it"},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-image-generator"},{"@type":"HowToStep",text:"Connect to APIs to generate images such as text to image, draft to image, change the style of images...",image:"https://cdn.illacloud.com/official-website/img/solutions/draft-to-image.svg",name:"Connect to APIs to generate images",url:"https://www.illacloud.com/solutions-image-generator"}]}]},H={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com",logo:"https://www.illacloud.com",sameAs:["https://twitter.com/illacloudhq","GitHub - illacloud/illa-builder: Build AI Driven Business App","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud"]},{"@type":"WebSite",name:"ILLA Cloud",url:"https://www.illacloud.com",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.illacloud.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-ai-voice-generator",name:"Build AI Voice Generator for your business",description:"Speech-to-text, transcribe the audio into text and translate or summarize it. Text-to-speech, create natural AI voices instantly in any language and let your content go beyond text. "},{"@type":"HowTo",name:"Build AI Voice Generator for your business",description:"Speech-to-text, transcribe the audio into text and translate or summarize it. Text-to-speech, create natural AI voices instantly in any language and let your content go beyond text.",image:"https://cdn.illacloud.com/official-website/img/solutions/audio/audio-cover.svg",totalTime:"PT10M",estimatedCost:{"@type":"MonetaryAmount",currency:"USD",value:"0"},supply:{"@type":"HowToSupply",name:"Access ILLA Cloud and register an account to use it"},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-ai-voice-generator"},{"@type":"HowToStep",text:"Connect to APIs to transcribe the audio into text in any language or create natural AI voices instantly in any language.",image:"https://cdn.illacloud.com/official-website/img/solutions/audio/meeting.svg",name:"Connect to APIs to transcribe the audio into text in any language or create natural AI voices instantly in any language.",url:"https://www.illacloud.com/solutions-ai-voice-generator"}]}]},N={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com",logo:"https://www.illacloud.com",sameAs:["https://twitter.com/illacloudhq","GitHub - illacloud/illa-builder: Build AI Driven Business App","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud"]},{"@type":"WebSite",name:"ILLA Cloud",url:"https://www.illacloud.com",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.illacloud.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-dashboard",name:"Customize Data Analysis Dashboard for Your Business",description:"Build comprehensive data analysis dashboards and drive your business growth with minimal investment."},{"@type":"HowTo",name:"Build Data Analysis Dashboard in minutes",description:"Build comprehensive data analysis dashboards and drive your business growth with minimal investment.",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/cover.svg",totalTime:"PT10M",estimatedCost:{"@type":"MonetaryAmount",currency:"USD",value:"0"},supply:{"@type":"HowToSupply",name:"Access ILLA Cloud and register an account to use it"},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-dashboard"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-dashboard"},{"@type":"HowToStep",text:"Analysis with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/analysis.gif",name:"Analysis with AI",url:"https://www.illacloud.com/solutions-dashboard"}]}]},M={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com",logo:"https://www.illacloud.com",sameAs:["https://twitter.com/illacloudhq","GitHub - illacloud/illa-builder: Build AI Driven Business App","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud"]},{"@type":"WebSite",name:"ILLA Cloud",url:"https://www.illacloud.com",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.illacloud.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-image-generator",name:"Build CMS and operate more efficiently",description:"Built content management system for efficient operations. AI-powered, integrate with AI capabilities, enabling you to efficiently create both visual and textual content. File management, support file storage and delivering, simplifying the content management workflow."},{"@type":"HowTo",name:"Build CMS in minutes",description:"Built content management system for efficient operations. AI-powered, integrate with AI capabilities, enabling you to efficiently create both visual and textual content. File management, support file storage and delivering, simplifying the content management workflow.",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/cover.svg",totalTime:"PT10M",estimatedCost:{"@type":"MonetaryAmount",currency:"USD",value:"0"},supply:{"@type":"HowToSupply",name:"Access ILLA Cloud and register an account to use it"},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-cms"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-cms"},{"@type":"HowToStep",text:"Generate content such as images, descriptions, etc with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/ai.gif",name:"Generate content such as images, descriptions, etc with AI",url:"https://www.illacloud.com/solutions-cms"}]}]},P={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com",logo:"https://www.illacloud.com",sameAs:["https://twitter.com/illacloudhq","GitHub - illacloud/illa-builder: Build AI Driven Business App","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud"]},{"@type":"WebSite",name:"ILLA Cloud",url:"https://www.illacloud.com",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.illacloud.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-crm",name:"Better sales CRM solution to close deals faster",description:"Efficiently manage all your leads, customer relationships, sales pipeline, and tasks in one place, so you can streamline your sales process and focus on closing the deals."},{"@type":"HowTo",name:"Better sales CRM solution to close deals faster",description:"Efficiently manage all your leads, customer relationships, sales pipeline, and tasks in one place, so you can streamline your sales process and focus on closing the deals.",image:"https://cdn.illacloud.com/official-website/img/solutions/crm/cover.svg",totalTime:"PT10M",estimatedCost:{"@type":"MonetaryAmount",currency:"USD",value:"0"},supply:{"@type":"HowToSupply",name:"Access ILLA Cloud and register an account to use it"},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-crm"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-crm"},{"@type":"HowToStep",text:"Generate marketing content such as emails, SMS, etc with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/crm/send.gif",name:"Generate marketing content such as emails, SMS, etc with AI",url:"https://www.illacloud.com/solutions-crm"}]}]},z={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com",logo:"https://www.illacloud.com",sameAs:["https://twitter.com/illacloudhq","GitHub - illacloud/illa-builder: Build AI Driven Business App","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud"]},{"@type":"WebSite",name:"ILLA Cloud",url:"https://www.illacloud.com",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.illacloud.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-admin-panel",name:"Build Customized Admin Panel for Website and Apps",description:"Build admin panels at 10x speed to manage data or perform operations and allow developers to focus on business development. "},{"@type":"HowTo",name:"Build Customized Admin Panel for Website and Apps",description:"Build admin panels at 10x speed to manage data or perform operations and allow developers to focus on business development.",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/cover.svg",totalTime:"PT10M",estimatedCost:{"@type":"MonetaryAmount",currency:"USD",value:"0"},supply:{"@type":"HowToSupply",name:"Access ILLA Cloud and register an account to use it"},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-admin-panel"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-admin-panel"},{"@type":"HowToStep",text:"Analysis with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/analysis.gif",name:"Analysis with AI",url:"https://www.illacloud.com/solutions-admin-panel"}]}]};var R,q,W;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},$.apply(this,arguments)}const J=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",$({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,R||(R=a.createElement("g",{filter:"url(#image-generator-bg_svg__a)"},a.createElement("path",{d:"M1268.31 1403c367.12 0 664.72-136.11 664.72-304 0-167.895-297.6-304-664.72-304-367.109 0-664.714 136.105-664.714 304 0 167.89 297.605 304 664.714 304Z",fill:"url(#image-generator-bg_svg__b)"}))),q||(q=a.createElement("g",{filter:"url(#image-generator-bg_svg__c)"},a.createElement("path",{d:"M1894.83 1730c497.93 0 901.57-231.69 901.57-517.5 0-285.807-403.64-517.5-901.57-517.5-497.92 0-901.571 231.693-901.571 517.5 0 285.81 403.651 517.5 901.571 517.5Z",fill:"url(#image-generator-bg_svg__d)"}))),W||(W=a.createElement("defs",null,a.createElement("linearGradient",{id:"image-generator-bg_svg__b",x1:603.596,y1:1099,x2:1933.03,y2:1099,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#DFFF1B"}),a.createElement("stop",{offset:1,stopColor:"#FF18CC"})),a.createElement("linearGradient",{id:"image-generator-bg_svg__d",x1:993.259,y1:1212.5,x2:2796.4,y2:1212.5,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#B42121"}),a.createElement("stop",{offset:1,stopColor:"#FF21A6"})),a.createElement("filter",{id:"image-generator-bg_svg__a",x:103.596,y:295,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2803_19716"})),a.createElement("filter",{id:"image-generator-bg_svg__c",x:493.259,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2803_19716"})))))};var X,Y,K;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},Q.apply(this,arguments)}const V=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",Q({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,X||(X=a.createElement("g",{filter:"url(#voice-generator-bg_svg__a)"},a.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#voice-generator-bg_svg__b)"}))),Y||(Y=a.createElement("g",{filter:"url(#voice-generator-bg_svg__c)"},a.createElement("path",{d:"M1894.83 1730c497.93 0 901.57-231.69 901.57-517.5 0-285.807-403.64-517.5-901.57-517.5-497.92 0-901.571 231.693-901.571 517.5 0 285.81 403.651 517.5 901.571 517.5Z",fill:"url(#voice-generator-bg_svg__d)"}))),K||(K=a.createElement("defs",null,a.createElement("linearGradient",{id:"voice-generator-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#FF18CC"}),a.createElement("stop",{offset:.68,stopColor:"#1BFFF0"})),a.createElement("linearGradient",{id:"voice-generator-bg_svg__d",x1:993.259,y1:1212.5,x2:2796.4,y2:1212.5,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#2199B4"}),a.createElement("stop",{offset:1,stopColor:"#B821FF"})),a.createElement("filter",{id:"voice-generator-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19748"})),a.createElement("filter",{id:"voice-generator-bg_svg__c",x:493.259,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19748"})))))};var ee,te,le;function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},ae.apply(this,arguments)}const oe=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",ae({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,ee||(ee=a.createElement("g",{filter:"url(#dashboard-bg_svg__a)"},a.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#dashboard-bg_svg__b)"}))),te||(te=a.createElement("g",{filter:"url(#dashboard-bg_svg__c)"},a.createElement("path",{d:"M1894.57 1652c497.93 0 901.58-231.69 901.58-517.5 0-285.807-403.65-517.5-901.58-517.5C1396.65 617 993 848.693 993 1134.5c0 285.81 403.65 517.5 901.57 517.5Z",fill:"url(#dashboard-bg_svg__d)"}))),le||(le=a.createElement("defs",null,a.createElement("linearGradient",{id:"dashboard-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#18FFAC"}),a.createElement("stop",{offset:.68,stopColor:"#FF1BF6"})),a.createElement("linearGradient",{id:"dashboard-bg_svg__d",x1:993,y1:1134.5,x2:2796.15,y2:1134.5,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#423FFF"}),a.createElement("stop",{offset:1,stopColor:"#21CAFF"})),a.createElement("filter",{id:"dashboard-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19751"})),a.createElement("filter",{id:"dashboard-bg_svg__c",x:493,y:117,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19751"})))))};var ne,ie,se;function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},re.apply(this,arguments)}const ce=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",re({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,ne||(ne=a.createElement("g",{filter:"url(#crm-bg_svg__a)"},a.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#crm-bg_svg__b)"}))),ie||(ie=a.createElement("g",{filter:"url(#crm-bg_svg__c)"},a.createElement("path",{d:"M1894.57 1730c497.93 0 901.58-231.69 901.58-517.5 0-285.807-403.65-517.5-901.58-517.5C1396.65 695 993 926.693 993 1212.5c0 285.81 403.65 517.5 901.57 517.5Z",fill:"url(#crm-bg_svg__d)"}))),se||(se=a.createElement("defs",null,a.createElement("linearGradient",{id:"crm-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#1BC8FF"}),a.createElement("stop",{offset:1,stopColor:"#18ACFF"})),a.createElement("linearGradient",{id:"crm-bg_svg__d",x1:993,y1:1212.5,x2:2796.15,y2:1212.5,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#B9FF24"}),a.createElement("stop",{offset:1,stopColor:"#2187FF"})),a.createElement("filter",{id:"crm-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19762"})),a.createElement("filter",{id:"crm-bg_svg__c",x:493,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19762"})))))};var ue,de,me;function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},ge.apply(this,arguments)}const pe=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",ge({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,ue||(ue=a.createElement("g",{filter:"url(#cms-bg_svg__a)"},a.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#cms-bg_svg__b)"}))),de||(de=a.createElement("g",{filter:"url(#cms-bg_svg__c)"},a.createElement("path",{d:"M1894.83 1730c497.93 0 901.57-231.69 901.57-517.5 0-285.807-403.64-517.5-901.57-517.5-497.92 0-901.571 231.693-901.571 517.5 0 285.81 403.651 517.5 901.571 517.5Z",fill:"url(#cms-bg_svg__d)"}))),me||(me=a.createElement("defs",null,a.createElement("linearGradient",{id:"cms-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#A718FF"}),a.createElement("stop",{offset:.68,stopColor:"#1BFFF0"})),a.createElement("linearGradient",{id:"cms-bg_svg__d",x1:993.259,y1:1212.5,x2:2796.4,y2:1212.5,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#2FDAFF"}),a.createElement("stop",{offset:1,stopColor:"#21BCFF"})),a.createElement("filter",{id:"cms-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19754"})),a.createElement("filter",{id:"cms-bg_svg__c",x:493.259,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19754"})))))};var he,we,fe;function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},ye.apply(this,arguments)}const be=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",ye({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,he||(he=a.createElement("g",{filter:"url(#admin-panel-bg_svg__a)"},a.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#admin-panel-bg_svg__b)"}))),we||(we=a.createElement("g",{filter:"url(#admin-panel-bg_svg__c)"},a.createElement("path",{d:"M1894.57 1730c497.93 0 901.58-231.69 901.58-517.5 0-285.807-403.65-517.5-901.58-517.5C1396.65 695 993 926.693 993 1212.5c0 285.81 403.65 517.5 901.57 517.5Z",fill:"url(#admin-panel-bg_svg__d)"}))),fe||(fe=a.createElement("defs",null,a.createElement("linearGradient",{id:"admin-panel-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#1BC8FF"}),a.createElement("stop",{offset:1,stopColor:"#18ACFF"})),a.createElement("linearGradient",{id:"admin-panel-bg_svg__d",x1:993,y1:1212.5,x2:2796.15,y2:1212.5,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#2496FF"}),a.createElement("stop",{offset:1,stopColor:"#90FF21"})),a.createElement("filter",{id:"admin-panel-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19765"})),a.createElement("filter",{id:"admin-panel-bg_svg__c",x:493,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19765"})))))},_e=e=>{const{children:t}=e,{frontMatter:l,metadata:a}=(0,d.C)(),{schemaData:o,bg:n}=(e=>{const t=/solutions-/;if(!t.test(e))return;switch(e.split(t)[1]){case"image-generator":return{schemaData:Z,bg:(0,U.jsx)(J,{className:"absolute"})};case"ai-voice-generator":return{schemaData:H,bg:(0,U.jsx)(V,{className:"absolute"})};case"dashboard":return{schemaData:N,bg:(0,U.jsx)(oe,{className:"absolute"})};case"cms":return{schemaData:M,bg:(0,U.jsx)(pe,{className:"absolute"})};case"crm":return{schemaData:P,bg:(0,U.jsx)(ce,{className:"absolute"})};case"admin-panel":return{schemaData:z,bg:(0,U.jsx)(be,{className:"absolute"})}}})(a.permalink);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(m.Z,{children:[(0,U.jsx)("meta",{name:"twitter:title",content:l.title}),(0,U.jsx)("meta",{name:"twitter:description",content:l.description}),(0,U.jsx)("script",{type:"application/ld+json",children:JSON.stringify(o)})]}),(0,U.jsxs)(s.j,{...l,children:[(0,U.jsxs)("div",{className:"w-full overflow-visible  bg-black relative z-[1]",children:[(0,U.jsx)(r.f,{}),(0,U.jsx)(D,{...l,bg:n}),(0,U.jsx)("div",{className:"w-full lg:max-w-[680px] mx-auto px-[20px] pb-[100px] lg:pb-[200px]",children:(0,U.jsx)("div",{className:"refine-prose markdown",children:(0,U.jsx)(u.Z,{children:t})})}),(0,U.jsx)(g.Z,{scrollStart:.9,scrollEnd:1})]}),(0,U.jsx)(c.Z,{scrollStart:.9,scrollEnd:1})]})]})};function ve(e){const t=e.content;return(0,U.jsx)(d.n,{content:e.content,children:(0,U.jsx)(n.FG,{className:(0,o.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:(0,U.jsx)(_e,{children:(0,U.jsx)(t,{})})})})}},8618:(e,t,l)=>{l.d(t,{M:()=>a});const a=(e,t)=>{const l=new URL(e);for(const a in t)t[a]&&l.searchParams.append(a,t[a]);return l.toString()}}}]);