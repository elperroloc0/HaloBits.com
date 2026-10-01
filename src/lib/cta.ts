// =============================================================================
// cta.ts — the site's two standard actions, so every page says the same thing.
//   primary   → "Book a 15-min call" (booking page) — or, until a booking
//               URL is configured, "Let's talk" → the contact page.
//   secondary → "Text us" (SMS to the studio phone, pre-filled message).
// =============================================================================
import { ui, type Lang } from '../i18n/ui';
import { localizePath } from '../i18n/utils';
import { BOOKING_URL, SITE } from './site';

/** `where` names the spot on the page (hero, closing, about…) for analytics. */
export function primaryCta(lang: Lang, where: string) {
  const t = ui[lang].cta;
  return BOOKING_URL
    ? { href: BOOKING_URL, label: t.book, external: true, track: `cta_primary_${where}` }
    : { href: localizePath('/contact/', lang), label: t.talk, external: false, track: `cta_primary_${where}` };
}

export function smsCta(lang: Lang, where: string) {
  const t = ui[lang].cta;
  return {
    // "?&body=" is the form that works on both iOS and Android.
    href: `sms:${SITE.phone}?&body=${encodeURIComponent(t.smsBody)}`,
    label: t.sms,
    track: `cta_sms_${where}`,
  };
}
