// =============================================================================
// env.ts — "is this build the real production site?"
//
// Vercel sets VERCEL_ENV to 'production' | 'preview' | 'development' during a
// build. Preview/staging deployments must NOT be indexed (duplicate content,
// half-finished copy), production must always be. Outside Vercel (local
// `npm run build`) VERCEL_ENV is unset → we treat it as production-like, so a
// local build never hides pages by accident.
// =============================================================================
const vercelEnv = process.env.VERCEL_ENV;

/** True only on Vercel preview deployments (or when forced with SITE_ENV=staging). */
export const IS_PREVIEW: boolean =
  process.env.SITE_ENV === 'staging' || (!!vercelEnv && vercelEnv !== 'production');
