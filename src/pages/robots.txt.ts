// robots.txt is generated (not a static file in public/) so preview/staging
// deployments can disallow everything while production allows everything.
import type { APIRoute } from 'astro';
import { IS_PREVIEW } from '../lib/env';

// AI *search* crawlers (they fetch pages to cite them in answers). Allowing them
// explicitly documents the decision; `User-agent: *` already allows everything.
// Training-only bots (GPTBot, ClaudeBot, Google-Extended) are intentionally not
// listed → they follow `*` (allowed). Confirm current names in each vendor's docs.
const AI_SEARCH_BOTS = ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot', 'Claude-User'];

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).toString();
  const body = IS_PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\n# AI search crawlers\n${AI_SEARCH_BOTS.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
