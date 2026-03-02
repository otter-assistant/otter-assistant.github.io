import { g as generatePostSlug } from './index.6141d682.js';

function getPostUrl(entry) {
  const slug = generatePostSlug(entry);
  return `/post/${slug}.html`;
}
function getPostAbsUrl(entry, siteUrl) {
  return `${siteUrl}${getPostUrl(entry)}`;
}

export { getPostAbsUrl as a, getPostUrl as g };
