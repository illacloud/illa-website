"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

async function chatwoot() {
  return {
    name: "docusaurus-plugin-ILLA-chatwoot",
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: `(function(d,t) {
              var BASE_URL="https://app.chatwoot.com";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.defer = true;
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 'ECxzx85niyQqKpnUytwMjpUM',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");`,
          },
        ]
      };
    },
  };
}
exports.default = chatwoot;
