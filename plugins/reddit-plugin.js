"use strict"
Object.defineProperty(exports, "__esModule", { value: true })

async function reddit() {
  return {
    name: "docusaurus-plugin-ILLA-reddit-plugin",
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: `
            !(function (w, d) {
              if (!w.rdt) {
                var p = (w.rdt = function () {
                  p.sendEvent
                    ? p.sendEvent.apply(p, arguments)
                    : p.callQueue.push(arguments)
                })
                p.callQueue = []
                var t = d.createElement("script")
                ;(t.src = "https://www.redditstatic.com/ads/pixel.js"), (t.async = !0)
                var s = d.getElementsByTagName("script")[0]
                s.parentNode.insertBefore(t, s)
              }
            })(window, document)
            rdt("init", "a2_edw0ai5y5tk6", {
              optOut: false,
              useDecimalCurrencyValues: true,
              aaid: "<AAID-HERE>",
              email: "<EMAIL-HERE>",
              externalId: "<EXTERNAL-ID-HERE>",
              idfa: "<IDFA-HERE>",
            })
            rdt("track", "PageVisit")
            `,
          },
        ],
      }
    },
  }
}
exports.default = reddit
