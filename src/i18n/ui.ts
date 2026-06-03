// =============================================================================
// ui.ts — the language list + the small, shared "chrome" strings (nav, footer,
// language switcher). Page/section copy lives in content.ts.
//
// Why a typed dictionary? `Record<Lang, Ui>` forces BOTH languages to define the
// exact same shape — if you add a string to `en` but forget `es`, `npm run check`
// fails. Translations can never silently drift out of sync.
// =============================================================================

// The languages we ship. `as const` makes the keys literal types ('en' | 'es')
// instead of plain `string`, which powers the autocomplete you get everywhere.
export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages; // 'en' | 'es'
export const defaultLang: Lang = 'en';

// The shape every language's chrome strings must satisfy.
export interface Ui {
  nav: {
    whatWeBuild: string;
    about: string;
    contact: string;
  };
  langSwitch: {
    /** aria-label for the switcher */
    label: string;
  };
  footer: {
    tagline: string;
    location: string;
    rights: string;
  };
}

export const ui: Record<Lang, Ui> = {
  en: {
    nav: { whatWeBuild: 'What we build', about: 'About', contact: 'Contact' },
    langSwitch: { label: 'Change language' },
    footer: {
      tagline: 'Not a service. A partner.',
      location: 'Miami, FL',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: { whatWeBuild: 'Qué construimos', about: 'Nosotros', contact: 'Contacto' },
    langSwitch: { label: 'Cambiar idioma' },
    footer: {
      tagline: 'No es un servicio. Es un socio.',
      location: 'Miami, FL',
      rights: 'Todos los derechos reservados.',
    },
  },
};
