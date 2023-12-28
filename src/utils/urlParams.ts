export const addUrlParams = (
  url: string,
  params: Record<string, string | undefined>,
) => {
  const urlObj = new URL(url)
  for (const key in params) {
    params[key] && urlObj.searchParams.append(key, params[key]!)
  }
  return urlObj.toString()
}
