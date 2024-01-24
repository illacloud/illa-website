import useIsBrowser from "@docusaurus/useIsBrowser"

export const useUtmParams = () => {
  const isBrowser = useIsBrowser()
  const location = isBrowser ? window.location.href : "fetching location..."

  const getUtmParams = (url: string) => {
    if (isBrowser) {
      try {
        const currentURL = new URL(location)
        const searchParams = currentURL.searchParams
        const utm_source = searchParams.get("utm_source")
        const utm_medium = searchParams.get("utm_medium")
        const utm_campaign = searchParams.get("utm_campaign")
        let mergeURL = url
        if (url.startsWith("/") && !url.startsWith("http")) {
          const [pathname, search] = url.split("?")
          const searchParams = new URLSearchParams(search)
          utm_source && searchParams.append("utm_source", utm_source!)
          utm_medium && searchParams.append("utm_medium", utm_medium!)
          utm_campaign && searchParams.append("utm_campaign", utm_campaign!)
          const path = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
          mergeURL = path + "?" + searchParams.toString()
          if (mergeURL.endsWith("/")) {
            mergeURL = mergeURL.slice(0, -1)
          }
          return mergeURL
        } else {
          const targetURL = new URL(mergeURL)
          utm_source && targetURL.searchParams.append("utm_source", utm_source)
          utm_medium && targetURL.searchParams.append("utm_medium", utm_medium)
          utm_campaign &&
            targetURL.searchParams.append("utm_campaign", utm_campaign)

          const result = targetURL.toString()
          if (result.endsWith("/")) {
            return result.slice(0, -1)
          }
          return result
        }
      } catch (e) {
        return url
      }
    } else {
      return url
    }
  }

  return getUtmParams
}
