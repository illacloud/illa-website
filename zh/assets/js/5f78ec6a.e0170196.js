"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[3096],{2369:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=o(1527),t=o(7214);const i={slug:"nvm-use-2024",title:"Elegant Use of nvm for Node.js Management on Mac in 2024",description:'Node.js, as the foundation of frontend capabilities, is no longer just a "JS Server Runtime." Numerous tool libraries, local package management, mock environments, and more are built on Node.js, making it truly the infrastructure of the frontend world.The flourishing ecosystem has made it essential for everyone to install Node.js when building frontend projects. However, with the long history of products, versioning becomes a common issue\u2014some projects require new versions, while others need older ones. Managing multiple versions of Node.js has been a persistent challenge for developers.Currently, the open-source tool nvm addresses this issue. With simple command-line usage, developers can quickly switch between different versions of Node.js, allowing them to focus on development rather than wasting time on environment configuration.The predominant machines for frontend development are still Macbooks. Therefore, this article will explain how to elegantly install and use nvm on Mac to efficiently manage Node.js versions.',authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/nvm-use/cover.png",tags:["nvm","nodejs","mac","javascript"],date:"2024-01-03T10:00"},l=void 0,a={permalink:"/illa-website/zh/blog/nvm-use-2024",source:"@site/blog/nvm-use/nvm-use.md",title:"Elegant Use of nvm for Node.js Management on Mac in 2024",description:'Node.js, as the foundation of frontend capabilities, is no longer just a "JS Server Runtime." Numerous tool libraries, local package management, mock environments, and more are built on Node.js, making it truly the infrastructure of the frontend world.The flourishing ecosystem has made it essential for everyone to install Node.js when building frontend projects. However, with the long history of products, versioning becomes a common issue\u2014some projects require new versions, while others need older ones. Managing multiple versions of Node.js has been a persistent challenge for developers.Currently, the open-source tool nvm addresses this issue. With simple command-line usage, developers can quickly switch between different versions of Node.js, allowing them to focus on development rather than wasting time on environment configuration.The predominant machines for frontend development are still Macbooks. Therefore, this article will explain how to elegantly install and use nvm on Mac to efficiently manage Node.js versions.',date:"2024-01-03T10:00:00.000Z",formattedDate:"2024\u5e741\u67083\u65e5",tags:[{label:"nvm",permalink:"/illa-website/zh/blog/tags/nvm"},{label:"nodejs",permalink:"/illa-website/zh/blog/tags/nodejs"},{label:"mac",permalink:"/illa-website/zh/blog/tags/mac"},{label:"javascript",permalink:"/illa-website/zh/blog/tags/javascript"}],readingTime:4.035,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{slug:"nvm-use-2024",title:"Elegant Use of nvm for Node.js Management on Mac in 2024",description:'Node.js, as the foundation of frontend capabilities, is no longer just a "JS Server Runtime." Numerous tool libraries, local package management, mock environments, and more are built on Node.js, making it truly the infrastructure of the frontend world.The flourishing ecosystem has made it essential for everyone to install Node.js when building frontend projects. However, with the long history of products, versioning becomes a common issue\u2014some projects require new versions, while others need older ones. Managing multiple versions of Node.js has been a persistent challenge for developers.Currently, the open-source tool nvm addresses this issue. With simple command-line usage, developers can quickly switch between different versions of Node.js, allowing them to focus on development rather than wasting time on environment configuration.The predominant machines for frontend development are still Macbooks. Therefore, this article will explain how to elegantly install and use nvm on Mac to efficiently manage Node.js versions.',authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/nvm-use/cover.png",tags:["nvm","nodejs","mac","javascript"],date:"2024-01-03T10:00"},unlisted:!1,prevItem:{title:"2024 has arrived, should I choose MUI?",permalink:"/illa-website/zh/blog/mui-2024"},nextItem:{title:"2024 has arrived, should I choose Shadcn UI?",permalink:"/illa-website/zh/blog/shadcn-ui-2024"},relatedPosts:[{title:"\u4f4e\u4ee3\u7801\u4e0e\u4f20\u7edf\u5f00\u53d1\uff1a\u9009\u62e9\u4e2d\u7684\u6700\u4f18\u6548\u7387",description:"\u968f\u7740\u5f00\u53d1\u5b9e\u8df5\u7684\u6301\u7eed\u6f14\u8fdb\uff0c\u4f4e\u4ee3\u7801\u5de5\u5177\u7684\u51fa\u73b0\u4e3a\u5404\u79cd\u5f00\u53d1\u573a\u666f\u5e26\u6765\u4e86\u521b\u65b0\u89e3\u51b3\u65b9\u6848\u3002\u8fd9\u51cf\u8f7b\u4e86\u4ece\u5934\u5f00\u59cb\u9879\u76ee\u7684\u9700\u8981\uff0c\u4e3a\u66f4\u91cd\u8981\u7684\u4e1a\u52a1\u6d3b\u52a8\u8282\u7701\u4e86\u5927\u91cf\u65f6\u95f4\u3002\u7136\u800c\uff0c\u91cd\u8981\u7684\u662f\u8981\u8ba4\u8bc6\u5230\uff0c\u867d\u7136\u4f4e\u4ee3\u7801\u52a0\u901f\u4e86\u5f00\u53d1\uff0c\u4f46\u8fd9\u662f\u4ee5\u727a\u7272\u4e00\u5b9a\u7684\u7075\u6d3b\u6027\u4e3a\u4ee3\u4ef7\u7684\u3002\u56e0\u6b64\uff0c\u5e76\u975e\u6240\u6709\u7684\u89e3\u51b3\u65b9\u6848\u90fd\u9002\u5408\u4f4e\u4ee3\u7801\u5f00\u53d1\u3002\u8ba9\u6211\u4eec\u66f4\u6df1\u5165\u5730\u5206\u6790\u54ea\u4e9b\u573a\u666f\u66f4\u9002\u5408\u4f7f\u7528\u4f4e\u4ee3\u7801\u5de5\u5177\uff0c\u4ee5\u53ca\u54ea\u4e9b\u573a\u666f\u4e2d\u4f20\u7edf\u4ee3\u7801\u5f00\u53d1\u66f4\u4e3a\u5408\u9002\u3002\u5728\u8fd9\u4e00\u63a2\u7d22\u8fc7\u7a0b\u4e2d\uff0c\u4f4e\u4ee3\u7801\u4e0e\u4f20\u7edf\u5f00\u53d1\u7684\u5173\u952e\u6bd4\u8f83\u59cb\u7ec8\u662f\u6700\u91cd\u8981\u7684\uff0c\u5f3a\u8c03\u9009\u62e9\u6700\u6709\u6548\u65b9\u6cd5\u7684\u91cd\u8981\u6027\u3002",permalink:"/illa-website/zh/blog/lowcode-vs-traditional",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:5.935,date:"2024-01-03T10:00:00.000Z"},{title:"2024 has arrived, should I choose MUI?",description:"Every company has its own exclusive online business, and as the business continues to update and iterate, the complexity of the business will continuously increase over time.After the business complexity reaches a high level, internal teams need to view various data to make decisions for future strategies. Therefore, we need a flexible tool to create personalized data dashboards to meet the diverse customization needs of internal team members, especially the boss, and help the team iterate quickly.Using efficient tools to leave work early every day.",permalink:"/illa-website/zh/blog/mui-2024",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:3.265,date:"2024-01-03T10:00:00.000Z"},{title:"2024 has arrived, should I choose Shadcn UI?",description:"2024 has arrived, and the ecosystem of React component libraries remains vibrant. This article will dissect two currently popular component libraries from various perspectives, providing an objective analysis to help users make more informed choices.",permalink:"/illa-website/zh/blog/shadcn-ui-2024",formattedDate:"2024\u5e741\u67083\u65e5",authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],readingTime:2.96,date:"2024-01-03T10:00:00.000Z"}],authorPosts:[]},r={authorsImageUrls:[void 0]},c=[{value:"Recommending an Open Source Project for Backend Development",id:"recommending-an-open-source-project-for-backend-development",level:2},{value:"Introduction to nvm",id:"introduction-to-nvm",level:2},{value:"Installing nvm",id:"installing-nvm",level:2},{value:"Using nvm",id:"using-nvm",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Node.js, as the foundation of frontend capabilities, is no longer just a "JS Server Runtime." Numerous tool libraries, local package management, mock environments, and more are built on Node.js, making it truly the infrastructure of the frontend world.'}),"\n",(0,s.jsx)(n.p,{children:"The flourishing ecosystem has made it essential for everyone to install Node.js when building frontend projects. However, with the long history of products, versioning becomes a common issue\u2014some projects require new versions, while others need older ones. Managing multiple versions of Node.js has been a persistent challenge for developers."}),"\n",(0,s.jsx)(n.p,{children:"Currently, the open-source tool nvm addresses this issue. With simple command-line usage, developers can quickly switch between different versions of Node.js, allowing them to focus on development rather than wasting time on environment configuration."}),"\n",(0,s.jsx)(n.p,{children:"The predominant machines for frontend development are still Macbooks. Therefore, this article will explain how to elegantly install and use nvm on Mac to efficiently manage Node.js versions."}),"\n",(0,s.jsx)(n.h2,{id:"recommending-an-open-source-project-for-backend-development",children:"Recommending an Open Source Project for Backend Development"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://illacloud.com",children:"ILLA Cloud"})," is an out-of-the-box low-code tool that enables the rapid construction of internal tools using simple JS, without the need to create new projects."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Web & App Admin Panel"}),"\n",(0,s.jsx)(n.li,{children:"Data Dashboard"}),"\n",(0,s.jsx)(n.li,{children:"Customized B2B Tools"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Compared to scenarios built with component libraries, ILLA Cloud allows for 10x faster construction of the mentioned tools. Additionally, ILLA Cloud supports collaboration among multiple users, facilitating teamwork for rapid customization of backend capabilities."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/dashboard.png",alt:"dashboard"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction-to-nvm",children:"Introduction to nvm"}),"\n",(0,s.jsxs)(n.p,{children:["\u23ec GitHub Repository: ",(0,s.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"https://github.com/nvm-sh/nvm"})]}),"\n",(0,s.jsx)(n.p,{children:"\u2b50 GitHub Stars: 72.4k"}),"\n",(0,s.jsx)(n.p,{children:"\ud83d\udcaa\ud83c\udffc First Release Date: Dec 22, 2014"}),"\n",(0,s.jsx)(n.p,{children:'nvm is an open-source project that has been maintained for nearly 10 years. Positive reviews have kept this project robust and, through continuous maintenance, it has become a perfect solution for "Node.js version management."'}),"\n",(0,s.jsx)(n.h2,{id:"installing-nvm",children:"Installing nvm"}),"\n",(0,s.jsxs)(n.p,{children:["Since we are using a Mac for development, I strongly recommend using ",(0,s.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," for package management and then using ",(0,s.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," to install nvm."]}),"\n",(0,s.jsx)(n.p,{children:"To install Homebrew, it is recommended to use the installation script. It requires minimal configuration and allows immediate use. Moreover, Homebrew makes it easy to uninstall repositories cleanly if needed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Running this command will install the latest version of Homebrew, automatically handling the installation of Xcode Command Tools in the MacOS environment."}),"\n",(0,s.jsx)(n.p,{children:"Of course, all of this is automated. Below is an installation process example."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/homebrew-install.png",alt:"homebrew_install"})}),"\n",(0,s.jsx)(n.p,{children:"After a short wait, we can proceed with the installation of nvm using the installed Homebrew."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"> brew install nvm\n"})}),"\n",(0,s.jsx)(n.p,{children:"After confirming agreement, nvm will be completely installed. If you decide you don't want it anymore, you can use the following command to uninstall:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# delete nvm if you don't need it.\n> brew uninstall nvm\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-nvm",children:"Using nvm"}),"\n",(0,s.jsx)(n.p,{children:"Once nvm is installed, here are some commonly used commands to help you get started. These commands should fulfill your daily needs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"> nvm list\n"})}),"\n",(0,s.jsx)(n.p,{children:'The "list" command displays various mainstream Node.js versions. You can install versions according to your needs, and it will also show the currently used Node.js version on your machine. It will display some codenames.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-list.png",alt:"nvm_list"})}),"\n",(0,s.jsx)(n.p,{children:'For example, "lts/gallim" is the version name for Node.js v16. To install using this codename, nvm will automatically install the latest version of v16. It\'s quite convenient. You can also use this command to check the currently used version.'}),"\n",(0,s.jsx)(n.p,{children:"Another command allows you to check the current Node.js version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"> node --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"After entering this command, you can verify whether the Node.js version has been successfully switched."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"> nvm install stable\n"})}),"\n",(0,s.jsx)(n.p,{children:'The second command installs a specific Node.js version; "stable" refers to a specific version number. You can also use the codename for a particular version. For example, to install "Node.js 18," you would use "nvm install 18." Here, I\'m installing the "stable" version. nvm will automatically determine the latest Stable version and install it for me. After successful installation, it will automatically switch to the installed version.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/stable-install.png",alt:"stable-install"})}),"\n",(0,s.jsx)(n.p,{children:"Where there's an installation command, there's also an uninstallation command. Use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"> nvm uninstall stable\n"})}),"\n",(0,s.jsx)(n.p,{children:"To delete the corresponding version."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-uninstall.png",alt:"nvm-uninstall"})}),"\n",(0,s.jsx)(n.p,{children:"Once you've learned how to install and uninstall, the next important step is version switching."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"> nvm use stable\n"})}),"\n",(0,s.jsx)(n.p,{children:'The "use" command allows you to quickly switch between Node.js versions currently in use. You can also use the "stable" codename. This way, you can quickly switch between versions for different projects.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://cdn.illacloud.com/illa-website/blog/nvm-use/nvm-use.png",alt:"nvm-use"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"This article has explained the entire process for a beginner, from installing to using nvm. You can quickly try it out and better manage your Node.js versions."}),"\n",(0,s.jsx)(n.p,{children:"Node.js version management is a long-discussed issue, and nvm is an excellent open-source project that effectively addresses this problem. Of course, no project is perfect. If you have other recommendations, feel free to leave a comment and let more people know about outstanding projects\u2014that's the mission of open-source enthusiasts!"})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7214:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>l});var s=o(959);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);