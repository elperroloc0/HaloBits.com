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

export const telHref = `tel:${SITE.phone}`;
