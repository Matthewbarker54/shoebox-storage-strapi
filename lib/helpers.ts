/**
 * Trim start of url and any trailing slashes
 * @param url
 */
export const cleanURL = (url: string) => {
  if(url.includes(`https://`)) return url.replace(`https://${process.env.WP_BASE}/`, "").replace(/\/$/, "");
  else return url.replace(`http://3.129.234.178/`, "").replace(/\/$/, "");
}

