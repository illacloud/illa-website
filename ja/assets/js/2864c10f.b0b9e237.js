"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3807],{1641:(e,t,a)=>{a.d(t,{Z:()=>i});var o,n=a(959);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},l.apply(this,arguments)}const i=e=>{let{title:t,titleId:a,...i}=e;return n.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:15,height:13,viewBox:"0 0 15 13",fill:"none","aria-labelledby":a},i),t?n.createElement("title",{id:a},t):null,o||(o=n.createElement("path",{d:"M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},117:(e,t,a)=>{a.d(t,{Z:()=>F});var o=a(0),n=a(5341);const l="baseLinkButtonStyle_PuMK",i="smallSizeStyle_AohM",s="normalSizeStyle_qzr1",r="largeSizeStyle_kJWZ",c="darkColorStyle_MxJT",d="lightColorStyle_JCL1",u="baseArrowStyle_lXyW",m="smallArrowStyle_XZaI",g="normalArrowStyle_XxGa",p="largeArrowStyle_sKWX",h="darkArrowStyle_go7n",f="lightArrowStyle_QtFv",w="linkButtonBgStyle_WFWO",y="linesStyle_lbFy",b="lineContainerStyle_Y3Ta",_="lineStyle__sNm",v="darkLineStyle__Ris",x="lightLineStyle_xduB";var E=a(1641),B=a(1527);const F=e=>{let{href:t,children:a,size:F,colorType:S,handleClick:C}=e;return(0,B.jsxs)(o.Z,{to:t,onClick:C,className:(0,n.Z)(l,"small"===F&&i,"normal"===F&&s,"large"===F&&r,"dark"===S?c:d),children:[(0,B.jsxs)("span",{className:w,children:[(0,B.jsx)("span",{className:y,children:Array.from({length:10}).map(((e,t)=>(0,B.jsx)("span",{className:b,children:(0,B.jsx)("span",{className:(0,n.Z)(_,"dark"===S?v:x)},t)},t)))}),(0,B.jsx)("span",{className:(0,n.Z)(u,"small"===F&&m,"normal"===F&&g,"large"===F&&p,"dark"===S?h:f),children:(0,B.jsx)(E.Z,{})})]}),(0,B.jsx)("span",{className:"relative z-[1]",children:a})]})}},3090:(e,t,a)=>{a.d(t,{G:()=>n});var o=a(959);const n=(e,t)=>{const a=(0,o.useRef)(null),n=(0,o.useCallback)((()=>{const o=e.current;if(!o)return;const n=o.getContext("2d");o.width=t.current.clientWidth,o.height=t.current.clientHeight;a.current=(n.clearRect(0,0,o.width,o.height),void(()=>{n.strokeStyle="rgba(255, 255, 255, 0.1)";for(let e=0;e<=o.height;e+=56)n.beginPath(),n.moveTo(0,e),n.lineTo(o.width,e),n.stroke();for(let e=0;e<=o.width;e+=56)n.beginPath(),n.moveTo(e,0),n.lineTo(e,o.height),n.stroke()})())}),[e]);(0,o.useEffect)((()=>{const e=t.current,o=new ResizeObserver((()=>{a.current&&cancelAnimationFrame(a.current),n()}));return o.observe(e),n(),()=>{o&&o.unobserve(e)}}),[t,n]),(0,o.useEffect)((()=>()=>{a.current&&cancelAnimationFrame(a.current),a.current=null}),[])}},3712:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ve});var o=a(959),n=a(5341),l=a(1610),i=a(421),s=a(1153),r=a(7393),c=a(1643),d=a(1502),u=a(565),m=a(4491),g=a(2330),p=a(5628),h=a(700),f=a(3090);const w="containerStyle_IK43",y="indexBgStyle_Nusz",b="canvasContainerStyle_tBLh",_="contentContainer_kErA",v="textContainerStyle_LZMZ",x="sloganStyle_L8z2",E="colorSloganStyle_oMou",B="descStyle_uxY4",F="demoContainerStyle_taMy",S="demoImgStyle_SvRF",C="linkButtonStyle_m6Tn";var I=a(5374),A=a(117),j=a(3630),O=a(168),k=a(5231),G=a(7224),U=a(8618),T=a(8930),D=a(1527);const L=e=>{let{slogan:t,colorSlogan:a,description:n,colorStart:l,colorEnd:i,appID:s,image:r,imageAlt:c,bg:d}=e;const u=(0,p.f)(),m=(0,o.useRef)(null),g=(0,o.useRef)(null),{scrollYProgress:L}=(0,O.v)(),M=(0,k.H)(L,[0,.03],[10,0]),H=(0,k.H)(L,[0,.03],[.95,1]),N=(0,k.H)(L,[0,.03],["15%","0%"]);(0,f.G)(m,g);return(0,D.jsxs)("div",{ref:g,className:w,children:[(0,D.jsx)("div",{className:b,children:(0,D.jsx)("canvas",{ref:m})}),(0,D.jsx)("span",{className:y,children:d}),(0,D.jsxs)("div",{className:_,children:[(0,D.jsxs)("div",{className:v,children:[(0,D.jsx)("h1",{className:x,children:(0,D.jsx)(j.Z,{values:{colorSlogan:(0,D.jsx)("span",{className:E,style:{backgroundImage:`linear-gradient(to right, ${l}, ${i})`},children:a})},children:t})}),(0,D.jsx)("span",{className:B,children:n})]}),(0,D.jsxs)("div",{className:F,children:[(0,D.jsx)(G.E.div,{className:S,style:{rotateX:M,scale:H,y:N},children:(0,D.jsx)("img",{src:r,width:"100%",alt:c})}),(0,D.jsx)("img",{className:"lg:hidden block w-full rounded-[8px]",src:r,alt:c})]}),(0,D.jsx)("div",{className:C,children:(0,D.jsx)(A.Z,{href:(e=>{const t=(0,U.M)(`${T.kS}/${e}/detail`,{operateType:"fork"});return u(`${T.E}?redirectURL=${encodeURIComponent(t)}`)})(s),size:"small",colorType:"dark",handleClick:()=>{(0,h.l)({action:"solution_try_for_free"})},children:(0,D.jsx)(I.Z,{id:"website_4.solution.use_this_template",children:"Try now"})})})]})]})},M={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-image-generator",name:"Customize AI Image Generator for your business with ILLA Cloud ",description:"Text-to-Image, transform your imaginative ideas into stunning visuals. Image-to-image, enhance your images or drafts by applying artistic styles or modifying image content based on your description."},{"@type":"HowTo",name:"Customize AI Image Generator for your business",description:"Text-to-Image, transform your imaginative ideas into stunning visuals. Image-to-image, enhance your images or drafts by applying artistic styles or modifying image content based on your description.",image:"https://cdn.illacloud.com/official-website/img/solutions/ai-image1.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-image-generator"},{"@type":"HowToStep",text:"Connect to APIs to generate images such as text to image, draft to image, change the style of images...",image:"https://cdn.illacloud.com/official-website/img/solutions/draft-to-image.svg",name:"Connect to APIs to generate images",url:"https://www.illacloud.com/solutions-image-generator"}]}]},H={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-ai-voice-generator",name:"Build AI Voice Generator for your business",description:"Speech-to-text, transcribe the audio into text and translate or summarize it. Text-to-speech, create natural AI voices instantly in any language and let your content go beyond text. "},{"@type":"HowTo",name:"Build AI Voice Generator for your business",description:"Speech-to-text, transcribe the audio into text and translate or summarize it. Text-to-speech, create natural AI voices instantly in any language and let your content go beyond text.",image:"https://cdn.illacloud.com/official-website/img/solutions/audio/audio-cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-ai-voice-generator"},{"@type":"HowToStep",text:"Connect to APIs to transcribe the audio into text in any language or create natural AI voices instantly in any language.",image:"https://cdn.illacloud.com/official-website/img/solutions/audio/meeting.svg",name:"Connect to APIs to transcribe the audio into text in any language or create natural AI voices instantly in any language.",url:"https://www.illacloud.com/solutions-ai-voice-generator"}]}]},N={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-dashboard",name:"Customize Data Analysis Dashboard for Your Business",description:"Build comprehensive data analysis dashboards and drive your business growth with minimal investment."},{"@type":"HowTo",name:"Build Data Analysis Dashboard in minutes",description:"Build comprehensive data analysis dashboards and drive your business growth with minimal investment.",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-dashboard"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-dashboard"},{"@type":"HowToStep",text:"Analysis with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/analysis.gif",name:"Analysis with AI",url:"https://www.illacloud.com/solutions-dashboard"}]}]},Z={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-image-generator",name:"Build CMS and operate more efficiently",description:"Built content management system for efficient operations. AI-powered, integrate with AI capabilities, enabling you to efficiently create both visual and textual content. File management, support file storage and delivering, simplifying the content management workflow."},{"@type":"HowTo",name:"Build CMS in minutes",description:"Built content management system for efficient operations. AI-powered, integrate with AI capabilities, enabling you to efficiently create both visual and textual content. File management, support file storage and delivering, simplifying the content management workflow.",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-cms"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-cms"},{"@type":"HowToStep",text:"Generate content such as images, descriptions, etc with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/ai.gif",name:"Generate content such as images, descriptions, etc with AI",url:"https://www.illacloud.com/solutions-cms"}]}]},z={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-crm",name:"Better sales CRM solution to close deals faster",description:"Efficiently manage all your leads, customer relationships, sales pipeline, and tasks in one place, so you can streamline your sales process and focus on closing the deals."},{"@type":"HowTo",name:"Better sales CRM solution to close deals faster",description:"Efficiently manage all your leads, customer relationships, sales pipeline, and tasks in one place, so you can streamline your sales process and focus on closing the deals.",image:"https://cdn.illacloud.com/official-website/img/solutions/crm/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-crm"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-crm"},{"@type":"HowToStep",text:"Generate marketing content such as emails, SMS, etc with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/crm/send.gif",name:"Generate marketing content such as emails, SMS, etc with AI",url:"https://www.illacloud.com/solutions-crm"}]}]},P={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"ILLA Cloud",url:"https://www.illacloud.com/#organization",logo:"https://www.illacloud.com/#logo",sameAs:["https://twitter.com/illacloudhq","https://github.com/illacloud/illa-builder","https://www.illacloud.com/","https://www.youtube.com/@illacloud","https://www.linkedin.com/company/illacloud/"]},{"@type":"WebPage",url:"https://www.illacloud.com/solutions-admin-panel",name:"Build Customized Admin Panel for Website and Apps",description:"Build admin panels at 10x speed to manage data or perform operations and allow developers to focus on business development. "},{"@type":"HowTo",name:"Build Customized Admin Panel for Website and Apps",description:"Build admin panels at 10x speed to manage data or perform operations and allow developers to focus on business development.",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/cover.svg",estimatedCost:{"@type":"MonetaryAmount",currency:"",value:""},tool:{"@type":"HowToTool",name:"ILLA Cloud"},step:[{"@type":"HowToStep",text:"Design interface in minites by dragging and dropping the components",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/design-in-minutes.svg",name:"Design interface in minites by dragging and dropping the components",url:"https://www.illacloud.com/solutions-admin-panel"},{"@type":"HowToStep",text:"Connect to your data sources",image:"https://cdn.illacloud.com/official-website/img/solutions/cms/data-source.svg",name:"Connect to your data sources",url:"https://www.illacloud.com/solutions-admin-panel"},{"@type":"HowToStep",text:"Analysis with AI",image:"https://cdn.illacloud.com/official-website/img/solutions/dashboard/analysis.gif",name:"Analysis with AI",url:"https://www.illacloud.com/solutions-admin-panel"}]}]};var R,W,q;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},$.apply(this,arguments)}const X=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",$({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,R||(R=o.createElement("g",{filter:"url(#image-generator-bg_svg__a)"},o.createElement("path",{d:"M1268.31 1403c367.12 0 664.72-136.11 664.72-304 0-167.895-297.6-304-664.72-304-367.109 0-664.714 136.105-664.714 304 0 167.89 297.605 304 664.714 304Z",fill:"url(#image-generator-bg_svg__b)"}))),W||(W=o.createElement("g",{filter:"url(#image-generator-bg_svg__c)"},o.createElement("path",{d:"M1894.83 1730c497.93 0 901.57-231.69 901.57-517.5 0-285.807-403.64-517.5-901.57-517.5-497.92 0-901.571 231.693-901.571 517.5 0 285.81 403.651 517.5 901.571 517.5Z",fill:"url(#image-generator-bg_svg__d)"}))),q||(q=o.createElement("defs",null,o.createElement("linearGradient",{id:"image-generator-bg_svg__b",x1:603.596,y1:1099,x2:1933.03,y2:1099,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#DFFF1B"}),o.createElement("stop",{offset:1,stopColor:"#FF18CC"})),o.createElement("linearGradient",{id:"image-generator-bg_svg__d",x1:993.259,y1:1212.5,x2:2796.4,y2:1212.5,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#B42121"}),o.createElement("stop",{offset:1,stopColor:"#FF21A6"})),o.createElement("filter",{id:"image-generator-bg_svg__a",x:103.596,y:295,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2803_19716"})),o.createElement("filter",{id:"image-generator-bg_svg__c",x:493.259,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2803_19716"})))))};var J,Y,K;function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},V.apply(this,arguments)}const Q=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",V({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,J||(J=o.createElement("g",{filter:"url(#voice-generator-bg_svg__a)"},o.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#voice-generator-bg_svg__b)"}))),Y||(Y=o.createElement("g",{filter:"url(#voice-generator-bg_svg__c)"},o.createElement("path",{d:"M1894.83 1730c497.93 0 901.57-231.69 901.57-517.5 0-285.807-403.64-517.5-901.57-517.5-497.92 0-901.571 231.693-901.571 517.5 0 285.81 403.651 517.5 901.571 517.5Z",fill:"url(#voice-generator-bg_svg__d)"}))),K||(K=o.createElement("defs",null,o.createElement("linearGradient",{id:"voice-generator-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#FF18CC"}),o.createElement("stop",{offset:.68,stopColor:"#1BFFF0"})),o.createElement("linearGradient",{id:"voice-generator-bg_svg__d",x1:993.259,y1:1212.5,x2:2796.4,y2:1212.5,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#2199B4"}),o.createElement("stop",{offset:1,stopColor:"#B821FF"})),o.createElement("filter",{id:"voice-generator-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19748"})),o.createElement("filter",{id:"voice-generator-bg_svg__c",x:493.259,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19748"})))))};var ee,te,ae;function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},oe.apply(this,arguments)}const ne=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",oe({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,ee||(ee=o.createElement("g",{filter:"url(#dashboard-bg_svg__a)"},o.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#dashboard-bg_svg__b)"}))),te||(te=o.createElement("g",{filter:"url(#dashboard-bg_svg__c)"},o.createElement("path",{d:"M1894.57 1652c497.93 0 901.58-231.69 901.58-517.5 0-285.807-403.65-517.5-901.58-517.5C1396.65 617 993 848.693 993 1134.5c0 285.81 403.65 517.5 901.57 517.5Z",fill:"url(#dashboard-bg_svg__d)"}))),ae||(ae=o.createElement("defs",null,o.createElement("linearGradient",{id:"dashboard-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#18FFAC"}),o.createElement("stop",{offset:.68,stopColor:"#FF1BF6"})),o.createElement("linearGradient",{id:"dashboard-bg_svg__d",x1:993,y1:1134.5,x2:2796.15,y2:1134.5,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#423FFF"}),o.createElement("stop",{offset:1,stopColor:"#21CAFF"})),o.createElement("filter",{id:"dashboard-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19751"})),o.createElement("filter",{id:"dashboard-bg_svg__c",x:493,y:117,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19751"})))))};var le,ie,se;function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},re.apply(this,arguments)}const ce=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",re({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,le||(le=o.createElement("g",{filter:"url(#crm-bg_svg__a)"},o.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#crm-bg_svg__b)"}))),ie||(ie=o.createElement("g",{filter:"url(#crm-bg_svg__c)"},o.createElement("path",{d:"M1894.57 1730c497.93 0 901.58-231.69 901.58-517.5 0-285.807-403.65-517.5-901.58-517.5C1396.65 695 993 926.693 993 1212.5c0 285.81 403.65 517.5 901.57 517.5Z",fill:"url(#crm-bg_svg__d)"}))),se||(se=o.createElement("defs",null,o.createElement("linearGradient",{id:"crm-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#1BC8FF"}),o.createElement("stop",{offset:1,stopColor:"#18ACFF"})),o.createElement("linearGradient",{id:"crm-bg_svg__d",x1:993,y1:1212.5,x2:2796.15,y2:1212.5,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#B9FF24"}),o.createElement("stop",{offset:1,stopColor:"#2187FF"})),o.createElement("filter",{id:"crm-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19762"})),o.createElement("filter",{id:"crm-bg_svg__c",x:493,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19762"})))))};var de,ue,me;function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},ge.apply(this,arguments)}const pe=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",ge({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,de||(de=o.createElement("g",{filter:"url(#cms-bg_svg__a)"},o.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#cms-bg_svg__b)"}))),ue||(ue=o.createElement("g",{filter:"url(#cms-bg_svg__c)"},o.createElement("path",{d:"M1894.83 1730c497.93 0 901.57-231.69 901.57-517.5 0-285.807-403.64-517.5-901.57-517.5-497.92 0-901.571 231.693-901.571 517.5 0 285.81 403.651 517.5 901.571 517.5Z",fill:"url(#cms-bg_svg__d)"}))),me||(me=o.createElement("defs",null,o.createElement("linearGradient",{id:"cms-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#A718FF"}),o.createElement("stop",{offset:.68,stopColor:"#1BFFF0"})),o.createElement("linearGradient",{id:"cms-bg_svg__d",x1:993.259,y1:1212.5,x2:2796.4,y2:1212.5,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#2FDAFF"}),o.createElement("stop",{offset:1,stopColor:"#21BCFF"})),o.createElement("filter",{id:"cms-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19754"})),o.createElement("filter",{id:"cms-bg_svg__c",x:493.259,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19754"})))))};var he,fe,we;function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},ye.apply(this,arguments)}const be=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",ye({width:3400,height:2270,viewBox:"0 0 3400 2270",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,he||(he=o.createElement("g",{filter:"url(#admin-panel-bg_svg__a)"},o.createElement("path",{d:"M1230.72 1439c367.11 0 664.72-136.11 664.72-304 0-167.895-297.61-304-664.72-304C863.605 831 566 967.105 566 1135c0 167.89 297.605 304 664.72 304Z",fill:"url(#admin-panel-bg_svg__b)"}))),fe||(fe=o.createElement("g",{filter:"url(#admin-panel-bg_svg__c)"},o.createElement("path",{d:"M1894.57 1730c497.93 0 901.58-231.69 901.58-517.5 0-285.807-403.65-517.5-901.58-517.5C1396.65 695 993 926.693 993 1212.5c0 285.81 403.65 517.5 901.57 517.5Z",fill:"url(#admin-panel-bg_svg__d)"}))),we||(we=o.createElement("defs",null,o.createElement("linearGradient",{id:"admin-panel-bg_svg__b",x1:566,y1:1135,x2:1895.44,y2:1135,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#1BC8FF"}),o.createElement("stop",{offset:1,stopColor:"#18ACFF"})),o.createElement("linearGradient",{id:"admin-panel-bg_svg__d",x1:993,y1:1212.5,x2:2796.15,y2:1212.5,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#2496FF"}),o.createElement("stop",{offset:1,stopColor:"#90FF21"})),o.createElement("filter",{id:"admin-panel-bg_svg__a",x:66,y:331,width:2329.44,height:1608,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19765"})),o.createElement("filter",{id:"admin-panel-bg_svg__c",x:493,y:195,width:2803.15,height:2035,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feGaussianBlur",{stdDeviation:250,result:"effect1_foregroundBlur_2813_19765"})))))},_e=e=>{const{children:t}=e,{frontMatter:a,metadata:o}=(0,u.C)(),{schemaData:n,bg:l}=(e=>{const t=/solutions-/;if(!t.test(e))return;switch(e.split(t)[1]){case"image-generator":return{schemaData:M,bg:(0,D.jsx)(X,{className:"absolute"})};case"ai-voice-generator":return{schemaData:H,bg:(0,D.jsx)(Q,{className:"absolute"})};case"dashboard":return{schemaData:N,bg:(0,D.jsx)(ne,{className:"absolute"})};case"cms":return{schemaData:Z,bg:(0,D.jsx)(pe,{className:"absolute"})};case"crm":return{schemaData:z,bg:(0,D.jsx)(ce,{className:"absolute"})};case"admin-panel":return{schemaData:P,bg:(0,D.jsx)(be,{className:"absolute"})}}})(o.permalink);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(m.Z,{children:[(0,D.jsx)("meta",{name:"twitter:title",content:a.title}),(0,D.jsx)("meta",{name:"twitter:description",content:a.description}),(0,D.jsx)("script",{type:"application/ld+json",children:JSON.stringify(n)})]}),(0,D.jsxs)(s.j,{...a,children:[(0,D.jsxs)("div",{className:"w-full overflow-visible  bg-black relative z-[1]",children:[(0,D.jsx)(r.f,{}),(0,D.jsx)(L,{...a,bg:l}),(0,D.jsx)("div",{className:"w-full lg:max-w-[680px] mx-auto px-[20px] pb-[100px] lg:pb-[200px]",children:(0,D.jsx)("div",{className:"refine-prose markdown",children:(0,D.jsx)(d.Z,{children:t})})}),(0,D.jsx)(g.Z,{scrollStart:.9,scrollEnd:1})]}),(0,D.jsx)(c.Z,{scrollStart:.9,scrollEnd:1})]})]})};function ve(e){const t=e.content;return(0,D.jsx)(u.n,{content:e.content,children:(0,D.jsx)(l.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:(0,D.jsx)(_e,{children:(0,D.jsx)(t,{})})})})}},8618:(e,t,a)=>{a.d(t,{M:()=>o});const o=(e,t)=>{const a=new URL(e);for(const o in t)t[o]&&a.searchParams.append(o,t[o]);return a.toString()}}}]);