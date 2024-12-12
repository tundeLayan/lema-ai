export function constructUrl(
  baseUrl: string,
  params: { [key: string]: string | boolean | undefined | null },
): string {
  let url = `${baseUrl}?`;
  const queryParams = Object.entries(params)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  url += queryParams;
  return url.endsWith("?") ? url.slice(0, -1) : url;
}
