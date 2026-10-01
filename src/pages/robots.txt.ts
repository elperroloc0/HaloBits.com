// robots.txt is generated (not a static file in public/) so preview/staging
// deployments can disallow everything while production allows everything.
import type { APIRoute } from 'astro';
import { IS_PREVIEW } from '../lib/env';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).toString();
  const body = IS_PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
