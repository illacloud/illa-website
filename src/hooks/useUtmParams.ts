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
          mergeURL = window.location.origin + url
        }
        const targetURL = new URL(mergeURL)

        utm_source && targetURL.searchParams.append("utm_source", utm_source)
        utm_medium && targetURL.searchParams.append("utm_medium", utm_medium)
        utm_campaign &&
          targetURL.searchParams.append("utm_campaign", utm_campaign)
        return targetURL.toString()
      } catch (e) {
        return url
      }
    } else {
      return url
    }
  }

  return getUtmParams
}
