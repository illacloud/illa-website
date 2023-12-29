"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

async function microsoftClarity() {
  return {
    name: "docusaurus-plugin-ILLA-twitter",
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: `!function(e,t,n,s,u,a)
            {e.twq ||
              ((s = e.twq =
                function () {
                  s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
                }),
              (s.version = '1.1'),
              (s.queue = []),
              (u = t.createElement(n)),
              (u.async = !0),
              (u.src = 'https://static.ads-twitter.com/uwt.js'),
              (a = t.getElementsByTagName(n)[0]),
              a.parentNode.insertBefore(u, a))}
            (window,document,'script'); twq('config','ogv2a');`,
          },
        ]
      };
    },
  };
}
exports.default = microsoftClarity;
