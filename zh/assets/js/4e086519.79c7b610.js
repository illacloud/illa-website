"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[7324],{7380:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var n=t(1527),s=t(7214);const a={slug:"automate-send-to-slack",title:"\u81ea\u52a8\u53d1\u9001\u6d88\u606f\u5230Slack\u7684\u6700\u4f73\u5f00\u53d1\u8005\u53cb\u597d\u5de5\u5177",description:"Slack\u4f5c\u4e3a\u8bb8\u591a\u4eba\u5de5\u4f5c\u4e2d\u7684\u4e3b\u8981\u6c9f\u901a\u5de5\u5177\uff0c\u5df2\u6210\u4e3a\u5fc5\u987b\u6bcf\u5929\u6253\u5f00\u7684\u57fa\u672c\u5de5\u5177\u4e4b\u4e00\u3002\u652f\u6301\u5f3a\u5927\u7684\u6587\u672c\u548c\u5a92\u4f53\u683c\u5f0f\uff0cSlack\u5141\u8bb8\u6211\u4eec\u53d1\u9001\u5404\u79cd\u6d88\u606f\u3002\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u6709\u8bb8\u591a\u9700\u8981\u81ea\u52a8\u5316\u7684\u4efb\u52a1\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/automate-send-to-slack/cover.webp",tags:["\u5de5\u4f5c\u6d41\u7a0b","Slack","\u81ea\u52a8\u5316"],date:"2024-01-17T10:00"},i=void 0,o={permalink:"/illa-website/zh/blog/automate-send-to-slack",source:"@site/i18n/zh/docusaurus-plugin-content-blog/automate-send-to-slack/automate-send-to-slack.md",title:"\u81ea\u52a8\u53d1\u9001\u6d88\u606f\u5230Slack\u7684\u6700\u4f73\u5f00\u53d1\u8005\u53cb\u597d\u5de5\u5177",description:"Slack\u4f5c\u4e3a\u8bb8\u591a\u4eba\u5de5\u4f5c\u4e2d\u7684\u4e3b\u8981\u6c9f\u901a\u5de5\u5177\uff0c\u5df2\u6210\u4e3a\u5fc5\u987b\u6bcf\u5929\u6253\u5f00\u7684\u57fa\u672c\u5de5\u5177\u4e4b\u4e00\u3002\u652f\u6301\u5f3a\u5927\u7684\u6587\u672c\u548c\u5a92\u4f53\u683c\u5f0f\uff0cSlack\u5141\u8bb8\u6211\u4eec\u53d1\u9001\u5404\u79cd\u6d88\u606f\u3002\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u6709\u8bb8\u591a\u9700\u8981\u81ea\u52a8\u5316\u7684\u4efb\u52a1\u3002",date:"2024-01-17T10:00:00.000Z",formattedDate:"2024\u5e741\u670817\u65e5",tags:[{label:"\u5de5\u4f5c\u6d41\u7a0b",permalink:"/illa-website/zh/blog/tags/\u5de5\u4f5c\u6d41\u7a0b"},{label:"Slack",permalink:"/illa-website/zh/blog/tags/slack"},{label:"\u81ea\u52a8\u5316",permalink:"/illa-website/zh/blog/tags/\u81ea\u52a8\u5316"}],readingTime:5.42,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"automate-send-to-slack",title:"\u81ea\u52a8\u53d1\u9001\u6d88\u606f\u5230Slack\u7684\u6700\u4f73\u5f00\u53d1\u8005\u53cb\u597d\u5de5\u5177",description:"Slack\u4f5c\u4e3a\u8bb8\u591a\u4eba\u5de5\u4f5c\u4e2d\u7684\u4e3b\u8981\u6c9f\u901a\u5de5\u5177\uff0c\u5df2\u6210\u4e3a\u5fc5\u987b\u6bcf\u5929\u6253\u5f00\u7684\u57fa\u672c\u5de5\u5177\u4e4b\u4e00\u3002\u652f\u6301\u5f3a\u5927\u7684\u6587\u672c\u548c\u5a92\u4f53\u683c\u5f0f\uff0cSlack\u5141\u8bb8\u6211\u4eec\u53d1\u9001\u5404\u79cd\u6d88\u606f\u3002\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u6709\u8bb8\u591a\u9700\u8981\u81ea\u52a8\u5316\u7684\u4efb\u52a1\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/automate-send-to-slack/cover.webp",tags:["\u5de5\u4f5c\u6d41\u7a0b","Slack","\u81ea\u52a8\u5316"],date:"2024-01-17T10:00"},unlisted:!1,prevItem:{title:"Create AI Tools like building with blocks",permalink:"/illa-website/zh/blog/build-ai-tools"},nextItem:{title:"Best product that enables freelancers to create admin panels",permalink:"/illa-website/zh/blog/boost-freelancer"},relatedPosts:[],authorPosts:[]},c={authorsImageUrls:[void 0]},r=[{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2},{value:"\u53d6\u5f97\u7684\u7ed3\u679c",id:"\u53d6\u5f97\u7684\u7ed3\u679c",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function d(e){const l={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.p,{children:"Slack\u4f5c\u4e3a\u8bb8\u591a\u4eba\u5de5\u4f5c\u4e2d\u7684\u4e3b\u8981\u6c9f\u901a\u5de5\u5177\uff0c\u5df2\u6210\u4e3a\u5fc5\u987b\u6bcf\u5929\u6253\u5f00\u7684\u57fa\u672c\u5de5\u5177\u4e4b\u4e00\u3002\u652f\u6301\u5f3a\u5927\u7684\u6587\u672c\u548c\u5a92\u4f53\u683c\u5f0f\uff0cSlack\u5141\u8bb8\u6211\u4eec\u53d1\u9001\u5404\u79cd\u6d88\u606f\u3002\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u6709\u8bb8\u591a\u9700\u8981\u81ea\u52a8\u5316\u7684\u4efb\u52a1\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u4ee3\u7801\u7f16\u8bd1\u548c\u6784\u5efa"}),"\uff1a\u81ea\u52a8\u5316\u4ee3\u7801\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u7279\u522b\u662f\u5728\u5927\u578b\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u6548\u7387\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u6d4b\u8bd5\u6267\u884c"}),"\uff1a\u81ea\u52a8\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u3001\u96c6\u6210\u6d4b\u8bd5\u548c\u6027\u80fd\u6d4b\u8bd5\u4ee5\u786e\u4fdd\u4ee3\u7801\u8d28\u91cf\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u4ee3\u7801\u90e8\u7f72"}),"\uff1a\u81ea\u52a8\u5316\u4ee3\u7801\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u6216\u6d4b\u8bd5\u73af\u5883\uff0c\u8fd9\u662f\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u90e8\u7f72\uff08CI/CD\uff09\u6d41\u7a0b\u4e2d\u7684\u5e38\u89c1\u505a\u6cd5\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u6570\u636e\u5907\u4efd\u548c\u6062\u590d"}),"\uff1a\u5b9a\u671f\u81ea\u52a8\u5907\u4efd\u6570\u636e\u5e93\u548c\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\uff0c\u5e76\u5728\u9700\u8981\u65f6\u8fdb\u884c\u6062\u590d\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u76d1\u63a7\u548c\u8b66\u62a5"}),"\uff1a\u81ea\u52a8\u76d1\u63a7\u7cfb\u7edf\u548c\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\uff0c\u5e76\u5728\u51fa\u73b0\u95ee\u9898\u65f6\u53d1\u9001\u8b66\u62a5\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u65e5\u5fd7\u6587\u4ef6\u7ba1\u7406"}),"\uff1a\u81ea\u52a8\u6536\u96c6\u3001\u5206\u6790\u548c\u5b58\u6863\u65e5\u5fd7\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u73af\u5883\u914d\u7f6e"}),"\uff1a\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u81ea\u52a8\u8bbe\u7f6e\u548c\u7ef4\u62a4\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u6587\u6863\u751f\u6210"}),"\uff1a\u4ece\u4ee3\u7801\u6ce8\u91ca\u6216\u6570\u636e\u5e93\u7ed3\u6784\u81ea\u52a8\u751f\u6210\u6587\u6863\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u6279\u91cf\u6570\u636e\u6216\u6587\u4ef6\u5904\u7406"}),"\uff1a\u81ea\u52a8\u6267\u884c\u6570\u636e\u8f6c\u6362\u3001\u8fc1\u79fb\u6216\u5176\u4ed6\u6279\u91cf\u5904\u7406\u4efb\u52a1\u3002"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u4f9d\u8d56\u7ba1\u7406"}),"\uff1a\u81ea\u52a8\u7ba1\u7406\u9879\u76ee\u4f9d\u8d56\u9879\uff0c\u4ee5\u786e\u4fdd\u4f7f\u7528\u6700\u65b0\u548c\u517c\u5bb9\u7684\u5e93\u548c\u6846\u67b6\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"\u8fd9\u4e9b\u4efb\u52a1\u901a\u5e38\u901a\u8fc7\u5404\u79cd\u5de5\u5177\u548c\u811a\u672c\u81ea\u52a8\u5316\u5b8c\u6210\uff0c\u4f8b\u5982\u4f7f\u7528Jenkins\u6216GitHub Actions\u8fdb\u884cCI/CD\u6d41\u7a0b\uff0c\u6216\u4f7f\u7528Ansible\u3001Puppet\u8fdb\u884c\u73af\u5883\u914d\u7f6e\u548c\u7ba1\u7406\u3002\u5f00\u53d1\u8005\u4f7f\u7528\u8bb8\u591a\u5de5\u5177\u6765\u5b8c\u6210\u8fd9\u4e9b\u4efb\u52a1\uff0c\u4f46\u8fd9\u4e9b\u5de5\u5177\u901a\u5e38\u662f\u72ec\u7acb\u7684\u3002\u5b8c\u6210\u4efb\u52a1\u540e\uff0c\u6211\u76f8\u4fe1\u6bcf\u4e2a\u4eba\u90fd\u4f1a\u6b23\u8d4f\u7efc\u5408\u6027\u7684\u66f4\u65b0\u901a\u77e5\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u7814\u7a76\u8868\u660e\uff0c\u5982\u679c\u5728\u95ee\u9898\u521b\u5efa\u65f6\u901a\u8fc7Slack\u901a\u77e5\uff0c\u89e3\u51b3\u65f6\u95f4\u53ef\u4ee5\u7f29\u77ed50%\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u81ea\u52a8\u53d1\u9001\u6d88\u606f\u5230Slack\uff0c\u5141\u8bb8\u6211\u4eec\u5728\u4e00\u4e2a\u5730\u65b9\u67e5\u770b\u6240\u6709\u6d88\u606f\uff0c\u800c\u4e0d\u662f\u68c0\u67e5\u5404\u79cd\u5de5\u5177\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/automate-send-to-slack/connector.png",alt:"\u8fde\u63a5\u5668"})}),"\n",(0,n.jsx)(l.h2,{id:"\u89e3\u51b3\u65b9\u6cd5",children:"\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,n.jsx)(l.p,{children:"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u4e00\u4e2a\u540d\u4e3aILLA Flow\u7684\u5de5\u5177\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5b83\u662f\u4e00\u4e2a\u9488\u5bf9\u5f00\u53d1\u8005\u7684\u8fde\u63a5\u5de5\u5177\uff0c\u5e2e\u52a9\u4ed6\u4eec\u5feb\u901f\u6784\u5efa\u5404\u79cd\u81ea\u52a8\u5316\u4efb\u52a1\uff0c\u5305\u62ec\u81ea\u52a8\u53d1\u9001\u6d88\u606f\u5230Slack\u3002"}),"\n",(0,n.jsx)(l.p,{children:"ILLA Flow\u63d0\u4f9b\u5404\u79cd\u96c6\u6210\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6700\u5e38\u7528\u7684RestAPI\u3001GraphQL\u4ee5\u53ca\u5927\u91cf\u7684\u6570\u636e\u5e93\u8fde\u63a5\u548c\u5404\u79cdSaaS\u5e73\u53f0\u529f\u80fd\uff0c\u5141\u8bb8\u60a8\u5feb\u901f\u5c06\u60a8\u7684\u4ea7\u54c1\u4e0e\u5ba2\u6237\u4f7f\u7528\u7684\u4ea7\u54c1\u8fde\u63a5\u8d77\u6765\u3002ILLA Flow\u8fd8\u652f\u6301\u5b9a\u671f\u4efb\u52a1\u3001Webhook\u548c\u53c2\u6570\u4f20\u9012\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/automate-send-to-slack/resource.png",alt:"\u8d44\u6e90"})}),"\n",(0,n.jsx)(l.p,{children:"ILLA Flow\u6700\u72ec\u7279\u7684\u529f\u80fd\u662f\u5c06AI\u4ee3\u7406\u96c6\u6210\u5230\u5de5\u4f5c\u6d41\u4e2d\u7684\u80fd\u529b\u3002\u8fd9\u4f7f\u60a8\u53ef\u4ee5\u5728\u53d1\u9001\u901a\u77e5\u4e4b\u524d\u4f7f\u7528\u7531OpenAI\u6a21\u578b\u521b\u5efa\u7684AI\u4ee3\u7406\u6765\u5904\u7406\u901a\u77e5\uff0c\u4f7f\u901a\u77e5\u53d8\u5f97\u66f4\u52a0\u667a\u80fd\u548c\u6709\u8da3\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528AI\u4ee3\u7406\u8fdb\u884c\u590d\u6742\u7684\u5206\u6790\uff0c\u7b80\u5316\u4ee5\u524d\u5177\u6709\u6311\u6218\u6027\u7684\u6458\u8981\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/automate-send-to-slack/agent.png",alt:"\u4ee3\u7406"})}),"\n",(0,n.jsx)(l.h2,{id:"\u53d6\u5f97\u7684\u7ed3\u679c",children:"\u53d6\u5f97\u7684\u7ed3\u679c"}),"\n",(0,n.jsx)(l.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728ILLA Flow\u4e2d\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u6d41\uff0c\u7136\u540e\u5728\u5de5\u4f5c\u6d41\u4e2d\u8c03\u7528Slack\u7684Webhook\u6765\u5b9e\u73b0\u81ea\u52a8\u53d1\u9001\u6d88\u606f\u5230Slack\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u5728\u5b8c\u6210CI/CD\u5de5\u5177\u6216\u6bcf\u65e5\u8ba1\u5212\u4efb\u52a1\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728Slack\u4e2d\u770b\u5230\u6d88\u606f\u3002"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://cdn.illacloud.com/illa-website/blog/automate-send-to-slack/connector.png",alt:"\u8fde\u63a5\u5668"})}),"\n",(0,n.jsx)(l.p,{children:"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5c06ILLA Flow\u8fde\u63a5\u5230GitHub\uff0c\u5141\u8bb8\u6211\u4eec\u5728GitHub Issues\u4e2d\u770b\u5230\u7531ILLA Flow\u53d1\u9001\u7684\u6d88\u606f\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5c06ILLA Flow\u8fde\u63a5\u5230\u8b66\u62a5\u76d1\u63a7\u7cfb\u7edf\uff0c\u56e0\u6b64\u5f53\u53d1\u751f\u8b66\u62a5\u6216\u5f02\u5e38\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728Slack\u4e2d\u770b\u5230\u6d88\u606f\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u6700\u540e\uff0cILLA\u7684\u53e6\u4e00\u6b3e\u4ea7\u54c1ILLA Builder\u652f\u6301\u6784\u5efa\u81ea\u5b9a\u4e49\u9762\u677f\uff0c\u5141\u8bb8\u6211\u4eec\u901a\u8fc7Slack\u53d1\u9001\u7684\u94fe\u63a5\u76f4\u63a5\u8df3\u8f6c\u5230ILLA Builder\uff0c\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u94fe\u63a5\u67e5\u770b\u66f4\u591a\u4fe1\u606f\uff0c\u4f7f\u901a\u77e5\u53d8\u5f97\u975e\u5e38\u667a\u80fd\u548c\u8be6\u7ec6\u3002"}),"\n",(0,n.jsx)(l.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,n.jsx)(l.p,{children:"\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\uff0c\u5b58\u5728\u8bb8\u591a\u81ea\u52a8\u5316\u573a\u666f\uff0c\u800cILLA Flow\u662f\u4e00\u4e2a\u9762\u5411\u5f00\u53d1\u8005\u7684\u5de5\u5177\u3002\u5927\u591a\u6570\u5176\u4ed6\u81ea\u52a8\u8fde\u63a5\u5de5\u5177\u9762\u5411\u4e00\u822c\u7528\u6237\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4f7f\u5f00\u53d1\u8005\u7684\u914d\u7f6e\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u3002"}),"\n",(0,n.jsx)(l.p,{children:"\u4f7f\u7528ILLA Flow\uff0c\u60a8\u53ef\u4ee5\u4e00\u952e\u96c6\u6210AI\u4ee3\u7406\u548c\u5404\u79cdSaaS\uff0c\u4f7f\u5185\u90e8\u56e2\u961f\u7684\u6d41\u7a0b\u66f4\u52a0\u81ea\u52a8\u5316\uff0c\u5e76\u4f7f\u901a\u77e5\u66f4\u52a0\u667a\u80fd\u3002"})]})}function h(e={}){const{wrapper:l}={...(0,s.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7214:(e,l,t)=>{t.d(l,{Z:()=>o,a:()=>i});var n=t(959);const s={},a=n.createContext(s);function i(e){const l=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:l},e.children)}}}]);