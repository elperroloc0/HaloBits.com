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

/** Online booking page (Cal.com, 15-minute intro call). Override per environment with
 *  PUBLIC_BOOKING_URL; set it to an empty string to fall back to the contact page. */
export const BOOKING_URL: string = import.meta.env.PUBLIC_BOOKING_URL ?? 'https://cal.com/halobits/15min';

export const telHref = `tel:${SITE.phone}`;
