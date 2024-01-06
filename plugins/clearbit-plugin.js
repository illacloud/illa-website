"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

async function clearBit() {
  return {
    name: "docusaurus-plugin-ILLA-clearbit",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              referrerpolicy: "strict-origin-when-cross-origin",
              src: "https://tag.clearbitscripts.com/v1/pk_f16327730ef3bdec6215360e27413581/tags.js"
            }

          }
        ],
      };
    },
  };
}
exports.default = clearBit;
