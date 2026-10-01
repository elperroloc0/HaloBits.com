// =============================================================================
// utils.ts — the helpers that make bilingual routing work.
//
// Routing model: English lives at the root (/, /about/); Spanish under /es/ and
// Russian under /ru/ (/es/about/, /ru/about/). These functions convert between
// them so we can build nav links, the language switcher, and SEO hreflang tags
// from any page.
// =============================================================================
import { ui, languages, defaultLang, type Lang } from './ui';

// Re-export so components can import the type and the helpers from one place.
export type { Lang } from './ui';

/** Every language except the default one; each lives under its own /xx/ prefix. */
const prefixed = (Object.keys(languages) as Lang[]).filter((l) => l !== defaultLang);

/** Which language is the current URL in? Looks at the first path segment. */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1]; // '' for '/', 'es' for '/es/about/'
  return prefixed.find((l) => l === seg) ?? defaultLang;
}

/** Convenience: hand a component the chrome strings for its language. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * The canonical ENGLISH path for whatever page we're on, always with a trailing
 * slash. '/es/about/' → '/about/', '/ru/' → '/', '/about' → '/about/'.
 * This is our language-neutral "page identity" used to build the other variants.
 */
export function getBasePath(url: URL): string {
  let p = url.pathname;
  const lang = getLangFromUrl(url);
  if (lang !== defaultLang) {
    if (p === `/${lang}` || p === `/${lang}/`) return '/';
    p = p.slice(lang.length + 1); // strip the '/es' or '/ru' prefix
  }
  if (!p.endsWith('/')) p += '/'; // normalise to a trailing slash
  return p === '' ? '/' : p;
}

/** Turn a canonical EN path into the URL for a given language. */
export function localizePath(basePath: string, lang: Lang): string {
  if (lang === defaultLang) return basePath;
  return basePath === '/' ? `/${lang}/` : `/${lang}${basePath}`;
}

/**
 * All language URLs for the current page, e.g.
 * { en: '/about/', es: '/es/about/', ru: '/ru/about/' }. Used by the language switcher and to
 * emit <link rel="alternate" hreflang> tags for SEO.
 */
export function getAlternateUrls(url: URL): Record<Lang, string> {
  const base = getBasePath(url);
  return { en: localizePath(base, 'en'), es: localizePath(base, 'es'), ru: localizePath(base, 'ru') };
}
