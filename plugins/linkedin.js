"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

async function microsoftClarity() {
  return {
    name: "docusaurus-plugin-ILLA-linkedin",
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: ` (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);`,
          },
          {
            tagName: "script",
            innerHTML: `_linkedin_partner_id = "4707852";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
          },
          {
            tagName: "noscript",
            innerHTML: `<img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=4707852&fmt=gif"
          />`
          }
        ]
      };
    },
  };
}
exports.default = microsoftClarity;
