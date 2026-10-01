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

/** Online booking page (Cal.com, Calendly, Google Appointments…). Set PUBLIC_BOOKING_URL
 *  in Vercel/.env. While empty, the "book a call" button falls back to the contact page. */
export const BOOKING_URL: string = import.meta.env.PUBLIC_BOOKING_URL ?? '';

export const telHref = `tel:${SITE.phone}`;
