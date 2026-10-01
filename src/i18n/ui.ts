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
    /** aria-label for the <nav> landmark */
    label: string;
    home: string;
    whatWeBuild: string;
    about: string;
    faq: string;
    contact: string;
    talk: string;
    menu: string;
    close: string;
  };
  /** aria-label for the EN / ES switcher */
  langLabel: string;
  footer: {
    location: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const ui: Record<Lang, Ui> = {
  en: {
    nav: {
      label: 'Main',
      home: 'Home',
      whatWeBuild: 'What we build',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      talk: "Let's talk",
      menu: 'Menu',
      close: 'Close',
    },
    langLabel: 'Language',
    footer: { location: 'Miami, FL', rights: 'HaloBits LLC', privacy: 'Privacy', terms: 'Terms' },
  },
  es: {
    nav: {
      label: 'Principal',
      home: 'Inicio',
      whatWeBuild: 'Qué hacemos',
      about: 'Nosotros',
      faq: 'Preguntas',
      contact: 'Contacto',
      talk: 'Hablemos',
      menu: 'Menú',
      close: 'Cerrar',
    },
    langLabel: 'Idioma',
    footer: { location: 'Miami, FL', rights: 'HaloBits LLC', privacy: 'Privacidad', terms: 'Términos' },
  },
};
