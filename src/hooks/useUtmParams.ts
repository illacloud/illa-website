import useIsBrowser from '@docusaurus/useIsBrowser';

export const useUtmParams = (url: string) => {
  const isBrowser = useIsBrowser();
  const location = isBrowser ? window.location.href : 'fetching location...';

  if (isBrowser) {
    const currentURL = new URL(location);
    const searchParams = currentURL.searchParams;
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const targetURL = new URL(url);

    utm_source && targetURL.searchParams.append('utm_source', utm_source);
    utm_medium && targetURL.searchParams.append('utm_medium', utm_medium);
    utm_campaign && targetURL.searchParams.append('utm_campaign', utm_campaign);
    return targetURL.toString();
  } else {
    return url;
  }
};
