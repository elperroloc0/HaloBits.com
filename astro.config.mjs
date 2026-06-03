// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This file configures Astro itself (the build tool), not any single page.
// `defineConfig` is just an identity helper that gives us TypeScript
// autocomplete/checking for the options object below.
export default defineConfig({
  // `site` is the canonical, absolute origin of the deployed site.
  // It is REQUIRED for two things we rely on:
  //   1. The sitemap integration — it needs a real domain to write full URLs.
  //   2. Absolute URLs in our SEO tags, via `new URL('/og.png', Astro.site)`.
  // Locally you'll still develop on http://localhost:4321; this value is only
  // baked into the *built* output.
  site: 'https://halobits.com',

  // i18n routing. We serve two languages:
  //   en → at the root   (/, /about/, ...)         because prefixDefaultLocale=false
  //   es → under /es/     (/es/, /es/about/, ...)
  // This gives Astro `Astro.currentLocale` and tells integrations (sitemap) about
  // our locales. The actual ES pages live in src/pages/es/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },

  // Integrations are opt-in plugins. `sitemap()` walks every page Astro builds
  // and emits /sitemap-index.xml (+ /sitemap-0.xml) so search engines can
  // discover all routes. The i18n option makes it emit <xhtml:link hreflang>
  // alternates, so Google knows /about/ and /es/about/ are the same page in two
  // languages. robots.txt (in public/) points crawlers at the sitemap.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  // Allow external hosts like ngrok tunnels to reach the dev server.
  // `allowedHosts: true` means any hostname is accepted — safe for local dev,
  // never affects the production build.
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok-free.dev',
        '.ngrok.io',
        'unspurned-unredressable-dennise.ngrok-free.dev',
      ],
    },
  },
});
