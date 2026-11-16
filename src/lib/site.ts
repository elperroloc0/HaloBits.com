// =============================================================================
// site.ts — facts about the business that appear in more than one place
// (footer, contact page, SEO structured data). Change them here, once.
// =============================================================================
export const SITE = {
  name: 'HaloBits',
  url: 'https://halobits.com',
  email: 'hello@halobits.com',
  /** E.164 format for tel: links */
  phone: '+17869167736',
  /** Human-readable form shown on the page */
  phoneDisplay: '+1 (786) 916-7736',
  city: 'Miami',
  region: 'FL',
  country: 'US',
} as const;

/** Short description of the business for structured data (JSON-LD). The English text
 *  matches the Google Business Profile description; keep the two in sync. No price. */
export const ORG_DESCRIPTION = {
  en: 'HaloBits is a Miami studio that builds websites, automation and custom software for small businesses. We work with you as a partner. We work in English, Spanish and Russian and serve businesses across Miami and the surrounding area.',
  es: 'HaloBits es un estudio de Miami que crea sitios web, automatización y software a la medida para negocios pequeños. Trabajamos contigo como socios. Trabajamos en inglés, español y ruso y atendemos negocios en Miami y sus alrededores.',
  ru: 'HaloBits — студия в Майами, которая делает сайты, автоматизацию и программы на заказ для малого бизнеса. Работаем с вами как партнёр. Работаем на английском, испанском и русском и обслуживаем бизнес в Майами и окрестностях.',
} as const;

/** Online booking page (Cal.com, 15-minute intro call). Override per environment with
 *  PUBLIC_BOOKING_URL; set it to an empty string to fall back to the contact page. */
export const BOOKING_URL: string = import.meta.env.PUBLIC_BOOKING_URL ?? 'https://cal.com/halobits/15min';

export const telHref = `tel:${SITE.phone}`;
