"use strict";(self.webpackChunkilla_website=self.webpackChunkilla_website||[]).push([[2529],{5083:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=i(1527),t=i(7214);const l={title:"\u6700\u3082\u5b9f\u7528\u7684\u306aTypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd",tags:["typescript"],slug:"typescript-most-practical-features-compilation",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306e\u578b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u91cd\u8981\u6027\u306f\u8a00\u3046\u307e\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001TypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd\u3092\u307e\u3068\u3081\u3001TypeScript\u306e\u4f7f\u7528\u3092\u719f\u7df4\u3055\u305b\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp",date:"2024-01-25T10:00"},s=void 0,c={permalink:"/illa-website/ja/blog/typescript-most-practical-features-compilation",source:"@site/i18n/ja/docusaurus-plugin-content-blog/typescript-most-practical-features-compilation/typescript-most-practical-features-compilation.md",title:"\u6700\u3082\u5b9f\u7528\u7684\u306aTypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306e\u578b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u91cd\u8981\u6027\u306f\u8a00\u3046\u307e\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001TypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd\u3092\u307e\u3068\u3081\u3001TypeScript\u306e\u4f7f\u7528\u3092\u719f\u7df4\u3055\u305b\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",date:"2024-01-25T10:00:00.000Z",formattedDate:"2024\u5e741\u670825\u65e5",tags:[{label:"typescript",permalink:"/illa-website/ja/blog/tags/typescript"}],readingTime:14.345,hasTruncateMarker:!1,authors:[{name:"Owen Chen",title:"CEO",url:"https://github.com/smallSohoSolo",imageURL:"https://avatars.githubusercontent.com/u/7929686?v=4",key:"owen"}],frontMatter:{title:"\u6700\u3082\u5b9f\u7528\u7684\u306aTypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd",tags:["typescript"],slug:"typescript-most-practical-features-compilation",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306e\u578b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u91cd\u8981\u6027\u306f\u8a00\u3046\u307e\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001TypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd\u3092\u307e\u3068\u3081\u3001TypeScript\u306e\u4f7f\u7528\u3092\u719f\u7df4\u3055\u305b\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",authors:["owen"],image:"https://cdn.illacloud.com/illa-website/blog/typescript-most-practical-features-compilation/cover.webp",date:"2024-01-25T10:00"},unlisted:!1,nextItem:{title:"IT\u30b5\u30dd\u30fc\u30c8\u306e\u305f\u3081\u306e\u6700\u9069\u306a\u30c4\u30fc\u30eb",permalink:"/illa-website/ja/blog/it-support"},relatedPosts:[],authorPosts:[]},a={authorsImageUrls:[void 0]},d=[{value:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c8\u30fb\u30bf\u30a4\u30d7",id:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c8\u30bf\u30a4\u30d7",level:2},{value:"\u4ea4\u5dee\u578b",id:"\u4ea4\u5dee\u578b",level:3},{value:"\u30e6\u30cb\u30aa\u30f3\u578b",id:"\u30e6\u30cb\u30aa\u30f3\u578b",level:3},{value:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b",id:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b",level:3},{value:"\u6570\u5024\u30ea\u30c6\u30e9\u30eb\u578b",id:"\u6570\u5024\u30ea\u30c6\u30e9\u30eb\u578b",level:3},{value:"\u30d6\u30fc\u30eb\u30ea\u30c6\u30e9\u30eb\u578b",id:"\u30d6\u30fc\u30eb\u30ea\u30c6\u30e9\u30eb\u578b",level:3},{value:"\u6587\u5b57\u5217\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u578b",id:"\u6587\u5b57\u5217\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u578b",level:3},{value:"\u6f14\u7b97\u5b50",id:"\u6f14\u7b97\u5b50",level:2},{value:"keyof",id:"keyof",level:3},{value:"typeof",id:"typeof",level:3},{value:"in",id:"in",level:3},{value:"T[K]",id:"tk",level:3},{value:"\u6f14\u7b97\u5b50",id:"\u6f14\u7b97\u5b50-1",level:2},{value:"\u975enull\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u6f14\u7b97\u5b50",id:"\u975enull\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u6f14\u7b97\u5b50",level:3},{value:"\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u30c1\u30a7\u30a4\u30f3\u6f14\u7b97\u5b50",id:"\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u30c1\u30a7\u30a4\u30f3\u6f14\u7b97\u5b50",level:3},{value:"nullish\u5408\u4f75\u6f14\u7b97\u5b50",id:"nullish\u5408\u4f75\u6f14\u7b97\u5b50",level:3},{value:"\u6570\u5024\u30bb\u30d1\u30ec\u30fc\u30bf",id:"\u6570\u5024\u30bb\u30d1\u30ec\u30fc\u30bf",level:3},{value:"\u578b\u30a8\u30a4\u30ea\u30a2\u30b9",id:"\u578b\u30a8\u30a4\u30ea\u30a2\u30b9",level:2},{value:"\u578b\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3",id:"\u578b\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3",level:2},{value:"\u578b\u30ac\u30fc\u30c9",id:"\u578b\u30ac\u30fc\u30c9",level:2},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af",level:2},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u7d39\u4ecb",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u7d39\u4ecb",level:3},{value:"\u547d\u540d\u898f\u5247",id:"\u547d\u540d\u898f\u5247",level:3},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",level:3},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5236\u7d04\uff08extends\u6f14\u7b97\u5b50\uff09",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5236\u7d04extends\u6f14\u7b97\u5b50",level:3},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",level:3},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u6761\u4ef6",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u6761\u4ef6",level:3},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u63a8\u8ad6\uff08infer\u6f14\u7b97\u5b50\uff09",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u63a8\u8ad6infer\u6f14\u7b97\u5b50",level:3},{value:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u578b",id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u578b",level:2},{value:"\u30de\u30c3\u30d7\u578b",id:"\u30de\u30c3\u30d7\u578b",level:3},{value:"Partial",id:"partial",level:3},{value:"Required",id:"required",level:3},{value:"Readonly",id:"readonly",level:3},{value:"Pick",id:"pick",level:3},{value:"Record",id:"record",level:3},{value:"ReturnType",id:"returntype",level:3},{value:"Exclude",id:"exclude",level:3},{value:"Extract",id:"extract",level:3},{value:"Omit",id:"omit",level:3},{value:"NonNullable",id:"nonnullable",level:3},{value:"Parameters",id:"parameters",level:3},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306e\u578b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u91cd\u8981\u6027\u306f\u8a00\u3046\u307e\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001TypeScript\u306e\u4e00\u822c\u7684\u306a\u6a5f\u80fd\u3092\u307e\u3068\u3081\u3001TypeScript\u306e\u4f7f\u7528\u3092\u719f\u7df4\u3055\u305b\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c8\u30bf\u30a4\u30d7",children:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c8\u30fb\u30bf\u30a4\u30d7"}),"\n",(0,r.jsx)(n.h3,{id:"\u4ea4\u5dee\u578b",children:"\u4ea4\u5dee\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u4ea4\u5dee\u578b\u306f\u3001& \u8a18\u53f7\u3092\u4f7f\u7528\u3057\u3066\u8907\u6570\u306e\u578b\u30921\u3064\u306e\u578b\u306b\u7d50\u5408\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'interface I1 {\n  name: string;\n}\n\ninterface I2 {\n  age: number;\n}\n\ntype T3 = I1 & I2\n\nconst a: T3 = {\n  name: "tj",\n  age: 11,\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30e6\u30cb\u30aa\u30f3\u578b",children:"\u30e6\u30cb\u30aa\u30f3\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u30e6\u30cb\u30aa\u30f3\u578b\u306f\u3001| \u8a18\u53f7\u3092\u4f7f\u7528\u3057\u3066\u5024\u304c\u3044\u304f\u3064\u304b\u306e\u578b\u306e\u3046\u3061\u306e\u3069\u308c\u304b\u3067\u3042\u308b\u3053\u3068\u3092\u8868\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a: string | number = 1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b",children:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u578b\u306f\u3001\u6587\u5b57\u5217\u578b\u3092\u5909\u6570\u306e\u578b\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a: 'number' = 'number'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u5024\u30ea\u30c6\u30e9\u30eb\u578b",children:"\u6570\u5024\u30ea\u30c6\u30e9\u30eb\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u5024\u30ea\u30c6\u30e9\u30eb\u578b\u306f\u3001\u6570\u5b57\u3092\u5909\u6570\u306e\u578b\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a: 1 = 1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30d6\u30fc\u30eb\u30ea\u30c6\u30e9\u30eb\u578b",children:"\u30d6\u30fc\u30eb\u30ea\u30c6\u30e9\u30eb\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u30d6\u30fc\u30eb\u30ea\u30c6\u30e9\u30eb\u578b\u306f\u3001\u771f\u507d\u5024\u3092\u5909\u6570\u306e\u578b\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a: true = true\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6587\u5b57\u5217\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u578b",children:"\u6587\u5b57\u5217\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u6587\u5b57\u5217\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u578b\u306f\u3001ES6\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u6587\u5b57\u5217\u69cb\u6587\u3092\u4f7f\u7528\u3057\u3066\u578b\u3092\u5236\u7d04\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type https = `https://${string}`\nconst a: https = `https://jd.com`\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6f14\u7b97\u5b50",children:"\u6f14\u7b97\u5b50"}),"\n",(0,r.jsx)(n.h3,{id:"keyof",children:"keyof"}),"\n",(0,r.jsx)(n.p,{children:"keyof\u306f\u3001\u7279\u5b9a\u306e\u578b\u306e\u3059\u3079\u3066\u306e\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u3001\u305d\u306e\u623b\u308a\u5024\u306f\u30e6\u30cb\u30aa\u30f3\u578b\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// const a: 'name' | 'age' = 'name'\nconst a: keyof {\n  name: string,\n  age: number\n} = 'name'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"typeof",children:"typeof"}),"\n",(0,r.jsx)(n.p,{children:"typeof\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u95a2\u6570\u306e\u69cb\u9020\u578b\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a2 = {\n  name: 'tj',\n}\n\ntype T1 = typeof a2 // {name: string}\n\nfunction fn1(x: number): number {\n  return x * 10\n}\n\ntype T2 = typeof fn1 // (x: number) => number\n"})}),"\n",(0,r.jsx)(n.h3,{id:"in",children:"in"}),"\n",(0,r.jsx)(n.p,{children:"in\u306f\u3001\u30e6\u30cb\u30aa\u30f3\u578b\u3092\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const obj = {\n  name: "tj",\n  age: 11,\n}\n\ntype T5 = {\n  [P in keyof typeof obj]: any\n}\n\n/*\n{\n  name: any,\n  age: any\n}\n*/\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tk",children:"T[K]"}),"\n",(0,r.jsx)(n.p,{children:"T[K]\u306f\u3001\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u5024\u306e\u30e6\u30cb\u30aa\u30f3\u578b\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface I3 {\n  name: string,\n  age: number\n}\ntype T6 = I3[keyof I3] // string | number\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6f14\u7b97\u5b50-1",children:"\u6f14\u7b97\u5b50"}),"\n",(0,r.jsx)(n.h3,{id:"\u975enull\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u6f14\u7b97\u5b50",children:"\u975enull\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u6f14\u7b97\u5b50"}),"\n",(0,r.jsx)(n.p,{children:"\u975enull\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u6f14\u7b97\u5b50 ! \u306f\u3001\u8981\u7d20\u304cnull\u307e\u305f\u306fundefined\u3067\u306a\u3044\u3053\u3068\u3092\u5f37\u8abf\u3057\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u660e\u793a\u7684\u306b\u5024\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3053\u3068\u3092TypeScript\u306b\u4f1d\u3048\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function Demo(): JSX.Element () {\n   const divRef = useRef<HTMLDivElement>()\n   useEffect(() => {\n      divRef.current!.scrollIntoView() // divRef.current\u304cnull\u307e\u305f\u306fundefined\u3067\u306a\u3044\u3053\u3068\u3092\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\n   }, [])\n   return <div ref={divRef}>divDemo</div>\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u30c1\u30a7\u30a4\u30f3\u6f14\u7b97\u5b50",children:"\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u30c1\u30a7\u30a4\u30f3\u6f14\u7b97\u5b50"}),"\n",(0,r.jsx)(n.p,{children:"\u30aa\u30d7\u30b7\u30e7\u30ca\u30eb\u30c1\u30a7\u30a4\u30f3\u6f14\u7b97\u5b50 ?. \u306f\u3001\u5de6\u5074\u306e\u5f0f\u306e\u5024\u304cnull\u307e\u305f\u306fundefined\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3057\u3001\u305d\u3046\u3067\u3042\u308c\u3070\u5f0f\u306e\u5b9f\u884c\u3092\u505c\u6b62\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a = b?.a\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nullish\u5408\u4f75\u6f14\u7b97\u5b50",children:"nullish\u5408\u4f75\u6f14\u7b97\u5b50"}),"\n",(0,r.jsx)(n.p,{children:"nullish\u5408\u4f75\u6f14\u7b97\u5b50 ?? \u306f\u3001\u5de6\u5074\u306e\u5f0f\u306e\u5024\u304cnull\u307e\u305f\u306fundefined\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3057\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u53f3\u5074\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const a = b ?? 10\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u5024\u30bb\u30d1\u30ec\u30fc\u30bf",children:"\u6570\u5024\u30bb\u30d1\u30ec\u30fc\u30bf"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u5024\u30bb\u30d1\u30ec\u30fc\u30bf _ \u306f\u3001\u9577\u3044\u6570\u5b57\u3092\u533a\u5207\u308a\u3001\u6570\u5b57\u3092\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30b3\u30f3\u30d1\u30a4\u30eb\u7d50\u679c\u3067\u306f _ \u306f\u81ea\u52d5\u7684\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const num: number = 1_111_111_111\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u578b\u30a8\u30a4\u30ea\u30a2\u30b9",children:"\u578b\u30a8\u30a4\u30ea\u30a2\u30b9"}),"\n",(0,r.jsx)(n.p,{children:"\u578b\u30a8\u30a4\u30ea\u30a2\u30b9\u306f\u3001\u578b\u306b\u65b0\u3057\u3044\u540d\u524d\u3092\u4ed8\u3051\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Message = string | string[]\nlet greet = (message: Message) => {\n// ...\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u578b\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3",children:"\u578b\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsx)(n.p,{children:"\u578b\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306b\u5bfe\u3057\u3066\u578b\u3092\u660e\u793a\u7684\u306b\u6307\u5b9a\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// \u5c16\u62ec\u5f27\u69cb\u6587\nlet someValue: any = "this is a string";\nlet strLength: number = (<string>someValue).length;\n\n// as\n\n\u69cb\u6587\nlet someValue: any = "this is a string";\nlet strLength: number = (someValue as string).length;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u578b\u30ac\u30fc\u30c9",children:"\u578b\u30ac\u30fc\u30c9"}),"\n",(0,r.jsx)(n.p,{children:"\u578b\u30ac\u30fc\u30c9\u306f\u3001\u5b9f\u884c\u6642\u306b\u7279\u5b9a\u306e\u30b9\u30b3\u30fc\u30d7\u5185\u306e\u578b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u3044\u304f\u3064\u304b\u306e\u5f0f\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'interface A {\n  name: string;\n  age: number;\n}\n\ninterface B {\n  sex: string;\n  home: string;\n}\n\nfunction doSomething(person: A | B): void {\n  if (person.name) {\n    // \u30a8\u30e9\u30fc\n    // ...\n  }\n}\n\n// `in`\u578b\u30ac\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\nfunction doSomething(person: A | B): void {\n  if ("name" in person) {\n    // OK\n    // ...\n  }\n}\n\n// `typeof`\u578b\u30ac\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\nfunction A(a: string | number): string | number {\n  if (typeof a === "string") {\n    // OK\n    return a + ""\n  }\n  if (typeof a === "number") {\n    // OK\n    return a + 2\n  }\n  return ""\n}\n\n// `instanceof`\u578b\u30ac\u30fc\u30c9\nclass Foo {\n}\n\nclass Bar {\n}\n\nfunction test(input: Foo | Bar) {\n  if (input instanceof Foo) {\n    // \u3053\u3053\u3067 `input` \u306e\u578b\u304c\u300c\u72ed\u307e\u308b\u300d\n  } else {\n    // \u3053\u3053\u3067 `input` \u306e\u578b\u304c\u300c\u72ed\u307e\u308b\u300d\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u7d39\u4ecb",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u7d39\u4ecb"}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306f\u3001\u578b\u306b\u5f15\u6570\u3092\u6e21\u3057\u3066\u3088\u308a\u6c4e\u7528\u7684\u306a\u578b\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002\u95a2\u6570\u306b\u5f15\u6570\u3092\u6e21\u3059\u3088\u3046\u306b\u3001\u578b\u306b\u3082\u5f15\u6570\u3092\u6e21\u3057\u3066\u65b0\u3057\u3044\u578b\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u578bT1\u3092\u53d6\u5f97\u3057\u3001\u5f15\u6570\u3092\u6e21\u3059\u3053\u3068\u3067T2\u578b\u304cstring[]\u3001T3\u578b\u304cnumber[]\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type T1<T> = T[]\ntype T2 = T1<string> // string[]\ntype T3 = T1<number> // number[]\n"})}),"\n",(0,r.jsx)(n.p,{children:"T\u306f\u5909\u6570\u3067\u3042\u308a\u3001\u4efb\u610f\u306e\u4ed6\u306e\u5909\u6570\u540d\u3067\u4ee3\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type T4<A> = A[]\ntype T5 = T4<string> // string[]\ntype T6 = T4<number> // number[]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u547d\u540d\u898f\u5247",children:"\u547d\u540d\u898f\u5247"}),"\n",(0,r.jsx)(n.p,{children:"TypeScript\u306e\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5909\u6570\u306e\u547d\u540d\u898f\u5247\u3067\u306f\u3001\u901a\u5e384\u3064\u306e\u4e00\u822c\u7684\u306a\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5909\u6570\u540d\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u3066\u304a\u308a\u3001\u53ef\u8aad\u6027\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u4ed6\u306e\u5909\u6570\u540d\u3092\u4f7f\u7528\u3057\u306a\u3044\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"T\uff1a\u6700\u521d\u306e\u5f15\u6570\u3092\u8868\u3059\nK\uff1a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ad\u30fc\u30bf\u30a4\u30d7\u3092\u8868\u3059\nV\uff1a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5024\u306e\u578b\u3092\u8868\u3059\nE\uff1a\u8981\u7d20\u306e\u578b\u3092\u8868\u3059"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306f\u3001\u524d\u8ff0\u306e\u4f8b\u3068\u540c\u69d8\u306b\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u578b\u5f15\u6570\u3092\u6e21\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface I1<T, U> {\n  name: T;\n  age: U;\n}\ntype I2 = I1<string, number>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5236\u7d04extends\u6f14\u7b97\u5b50",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5236\u7d04\uff08extends\u6f14\u7b97\u5b50\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u6642\u6298\u3001\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5236\u7d04\u3057\u3001\u5404\u5909\u6570\u306e\u578b\u3092\u5236\u9650\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002TypeScript\u306fextends\u3092\u4f7f\u7528\u3057\u3066\u578b\u5236\u7d04\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u5236\u7d04\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u540d extends \u578b\nT\u3092Length\u3068\u3057\u3066\u6307\u5b9a\u3057\u3001T\u306e\u578b\u304clength\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u307f\u3001\u305d\u306e\u578b\u304cnumber\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308b\u5236\u7d04\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface Length {\n  length: number\n}\n\nfunction fn1<T extends Length>(arg: T): number {\n  return arg.length\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"extends\u3092\u4f7f\u7528\u3057\u3066K\u304cT\u306e\u30ad\u30fc\u3067\u3042\u308b\u3053\u3068\u3092\u5236\u7d04\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key]\n}\n\nlet tsInfo = {\n  name: "Typescript",\n  supersetOf: "Javascript",\n  difficulty: Difficulty.Intermediate,\n}\n\nlet difficulty: Difficulty =\n  getProperty(tsInfo, "difficulty") // OK\n\nlet supersetOf: string =\n  getProperty(tsInfo, "superset_of") // \u30a8\u30e9\u30fc\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f\u3001\u95a2\u6570\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u540c\u69d8\u306b\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'interface I4<T = string> {\n  name: T;\n}\n\nconst S1: I4 = { name: "123" } // \u30c7\u30d5\u30a9\u30eb\u30c8\u3067name: string\u578b\nconst S2: I4<number> = { name: 123 }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u6761\u4ef6",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u6761\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u6761\u4ef6\u578b\u306f\u3001JavaScript\u306e\u6761\u4ef6\u6587\u3068\u540c\u3058\u3088\u3046\u306b\u3001\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u308b\u5834\u5408\u306fxx\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306fyy\u3092\u610f\u5473\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6761\u4ef6\u578b\u306e\u8868\u73fe\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"T extends U ? X : Y"}),"\n",(0,r.jsx)(n.p,{children:"T\u304cU\u306b\u4ee3\u5165\u53ef\u80fd\u3067\u3042\u308c\u3070\u3001\u578b\u306fX\u3067\u3042\u308a\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u578b\u306fY\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type T1<T> = T extends string ? 'string' : 'number'\ntype T2 = T1<string> // 'string'\ntype T3 = T1<number> // 'number'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u63a8\u8ad6infer\u6f14\u7b97\u5b50",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u63a8\u8ad6\uff08infer\u6f14\u7b97\u5b50\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u63a8\u8ad6\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u306finfer\u3067\u3042\u308a\u3001\u69cb\u6587\u306finfer\u578b\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\u3001\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u6761\u4ef6\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3057\u3001\u5177\u4f53\u4f8b\u3092\u7406\u89e3\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bfT\u304c\u578b",(0,r.jsx)(n.code,{children:"{t: infer Test}"}),"\u306b\u4ee3\u5165\u53ef\u80fd\u3067\u3042\u308b\u5834\u5408\u3001\u578bTest\u304c\u63a8\u8ad6\u3055\u308c\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306fstring\u578b\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Foo<T> = T extends {t: infer Test} ? Test : string\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bfnumber\u306b\u306ft\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u306a\u3044\u305f\u3081\u3001\u578b\u306fstring\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type One = Foo<number> // string\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306et\u30d7\u30ed\u30d1\u30c6\u30a3\u304cboolean\u3067\u3042\u308b\u305f\u3081\u3001\u578b\u306fboolean\u306b\u63a8\u8ad6\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Two = Foo<{ t: boolean }> // boolean\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306et\u30d7\u30ed\u30d1\u30c6\u30a3\u304c() => void\u3067\u3042\u308b\u305f\u3081\u3001\u578b\u306f() => void\u306b\u63a8\u8ad6\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Three = Foo<{ a: number, t: () => void }> // () => void\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u578b",children:"\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u578b"}),"\n",(0,r.jsx)(n.h3,{id:"\u30de\u30c3\u30d7\u578b",children:"\u30de\u30c3\u30d7\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u30de\u30c3\u30d7\u578b\u306f\u3001\u5143\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b\u3092\u65b0\u3057\u3044\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b\u306b\u30de\u30c3\u30d7\u3059\u308b\u305f\u3081\u306e\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u578b\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u7684\u306a\u30de\u30c3\u30d7\u578b\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"{ [ P in K ] : T }\n{ [ P in K ] ?: T }\n{ [ P in K ] -?: T }\n{ readonly [ P in K ] : T }\n{ readonly [ P in K ] ?: T }\n{ -readonly [ P in K ] ?: T }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u30de\u30c3\u30d7\u578b\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Partial<T> = {\n  [P in keyof T]?: T[P]\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"partial",children:"Partial"}),"\n",(0,r.jsx)(n.p,{children:"TypeScript\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u4e00\u822c\u7684\u306a\u30de\u30c3\u30d7\u578b\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001Partial\u306f\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Partial<T> = {\n  [P in keyof T]?: T[P]\n}\n\ntype T1 = Partial<{\n  name: string,\n}>\n\nconst a: T1 = {} // name\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u306a\u304f\u3066\u3082\u30a8\u30e9\u30fc\u306b\u306a\u3089\u306a\u3044\n"})}),"\n",(0,r.jsx)(n.h3,{id:"required",children:"Required"}),"\n",(0,r.jsx)(n.p,{children:"Required\u306f\u3001\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5fc5\u9808\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'type Required<T> = {\n  [P in keyof T]-?: T[P]\n}\n\ntype T2 = Required<{\n  name?: string,\n}>\n\nconst b: T2 = {} // \u30a8\u30e9\u30fc\u3001\u30d7\u30ed\u30d1\u30c6\u30a3 "name" \u304c\u6b20\u3051\u3066\u3044\u307e\u3059\u304c\u3001\u578b "Required<{ name?: string | undefined; }>" \u3067\u306f\u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u5fc5\u8981\u3067\u3059\u3002ts(2741)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u69cb\u6587\u306e-?\u306f\u3001?\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\uff09\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u53d6\u308a\u9664\u304f\u610f\u5473\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"readonly",children:"Readonly"}),"\n",(0,r.jsx)(n.p,{children:"Readonly\u306f\u3001\u30b8\u30a7\u30cd\u30ea\u30c3\u30af\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'type T3 = Readonly<{\n  name: string,\n}>\n\nconst c: T3 = {\n  name: "tj",\n}\n\nc.name = "tj1" // \u30a8\u30e9\u30fc\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u30d7\u30ed\u30d1\u30c6\u30a3 "name" \u306b\u306f\u4ee3\u5165\u3067\u304d\u307e\u305b\u3093\u3002ts(2540)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pick",children:"Pick"}),"\n",(0,r.jsx)(n.p,{children:"Pick\u306f\u578b\u304b\u3089\u7279\u5b9a\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9078\u629e\u3057\u3001\u65b0\u3057\u3044\u578b\u3092\u751f\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'type Pick<T, K extends keyof T> = {\n  [P in K]: T[P]\n}\n\ntype T4 = Pick<\n  {\n    name: string,\n    age: number,\n  },\n  "name"\n>\n\n/*\n\u3053\u308c\u306f\u65b0\u3057\u3044\u578b\u3067\u3001T4={name: string}\n*/\n\nconst d: T4 = {\n  name: "tj",\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"record",children:"Record"}),"\n",(0,r.jsx)(n.p,{children:"Record\u306f\u30ad\u30fc\u3068\u5024\u3092T\u578b\u306b\u5909\u63db\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Record<K extends keyof any, T> = {\n  [key in K]: T\n}\nconst e: Record<string, string> = {\n  name: 'tj',\n}\n\nconst f: Record<string, number> = {\n  age: 11,\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"keyof any\u306fnumber | string | symbol\u306b\u5bfe\u5fdc\u3057\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ad\u30fc\u306e\u578b\u30bb\u30c3\u30c8\u3092\u8868\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"returntype",children:"ReturnType"}),"\n",(0,r.jsx)(n.p,{children:"ReturnType\u306fT\u578b\u306b\u5bfe\u5fdc\u3059\u308b\u95a2\u6570\u306e\u623b\u308a\u5024\u306e\u578b\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type ReturnType<T extends (...args: any) => any> = T extends (...args: infer P) => any\n? P : never;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"exclude",children:"Exclude"}),"\n",(0,r.jsx)(n.p,{children:"Exclude\u306fT\u578b\u304b\u3089U\u578b\u306b\u5c5e\u3059\u308b\u578b\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'type Exclude<T, U> = T extends U ? never : T;\ntype T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"\ntype T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"\ntype T2 = Exclude<string | number | (() => void), Function>; // string | number\n'})}),"\n",(0,r.jsx)(n.h3,{id:"extract",children:"Extract"}),"\n",(0,r.jsx)(n.p,{children:"Extract\u306fT\u578b\u304b\u3089U\u578b\u3092\u62bd\u51fa\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'type Extract<T, U> = T extends U ? T : never;\ntype T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"\ntype T1 = Extract<string | number | (() => void), Function>; // () => void\n'})}),"\n",(0,r.jsx)(n.h3,{id:"omit",children:"Omit"}),"\n",(0,r.jsx)(n.p,{children:"Omit\u306fT\u578b\u304b\u3089K\u578b\u3092\u9664\u5916\u3057\u3066\u65b0\u3057\u3044\u578b\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\n\ninterface Todo {\n  title: string;\n  completed: boolean;\n  description: string;\n}\n\ntype TodoPreview = Omit<Todo, "description">;\n\n/*\n{\ntitle: string;\ncompleted: boolean;\n}\n*/\n'})}),"\n",(0,r.jsx)(n.h3,{id:"nonnullable",children:"NonNullable"}),"\n",(0,r.jsx)(n.p,{children:"NonNullable\u306f\u578b\u304b\u3089null\u3068undefined\u306e\u578b\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type NonNullable<T> = T extends null | undefined ? never : T;\ntype T0 = NonNullable<string | number | undefined>; // string | number\ntype T1 = NonNullable<string[] | null | undefined>; // string[]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Parameters\u306f\u95a2\u6570\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u578b\u306e\u30bf\u30d7\u30eb\u578b\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any\n? P : never;\n\ntype A = Parameters<() =>void>; // []\ntype B = Parameters<typeofArray.isArray>; // [any]\ntype C = Parameters<typeofparseInt>; // [string, (number | undefined)?]\ntype D = Parameters<typeofMath.max>; // number[]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u5f8c\u306b",children:"\u6700\u5f8c\u306b"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3092\u304a\u6c17\u306b\u5165\u308a\u306b\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\uff01"})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7214:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var r=i(959);const t={},l=r.createContext(t);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);