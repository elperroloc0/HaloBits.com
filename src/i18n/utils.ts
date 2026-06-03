// =============================================================================
// utils.ts — the helpers that make bilingual routing work.
//
// Routing model: English lives at the root (/, /about/) and Spanish under /es/
// (/es/, /es/about/). These functions convert between the two so we can build
// nav links, the language switcher, and SEO hreflang tags from any page.
// =============================================================================
import { ui, defaultLang, type Lang } from './ui';

// Re-export so components can import the type and the helpers from one place.
export type { Lang } from './ui';

/** Which language is the current URL in? Looks at the first path segment. */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1]; // '' for '/', 'es' for '/es/about/'
  return seg === 'es' ? 'es' : 'en';
}

/** Convenience: hand a component the chrome strings for its language. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * The canonical ENGLISH path for whatever page we're on, always with a trailing
 * slash. '/es/about/' → '/about/', '/es/' → '/', '/about' → '/about/'.
 * This is our language-neutral "page identity" used to build the other variants.
 */
export function getBasePath(url: URL): string {
  let p = url.pathname;
  if (p === '/es' || p === '/es/') return '/';
  if (p.startsWith('/es/')) p = p.slice(3); // strip the '/es' prefix
  if (!p.endsWith('/')) p += '/'; // normalise to a trailing slash
  return p === '' ? '/' : p;
}

/** Turn a canonical EN path into the URL for a given language. */
export function localizePath(basePath: string, lang: Lang): string {
  if (lang === defaultLang) return basePath;
  return basePath === '/' ? '/es/' : `/es${basePath}`;
}

/**
 * Both language URLs for the current page, e.g.
 * { en: '/about/', es: '/es/about/' }. Used by the language switcher and to
 * emit <link rel="alternate" hreflang> tags for SEO.
 */
export function getAlternateUrls(url: URL): Record<Lang, string> {
  const base = getBasePath(url);
  return { en: localizePath(base, 'en'), es: localizePath(base, 'es') };
}
