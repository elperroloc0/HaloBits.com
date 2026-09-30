// =============================================================================
// placeholders.ts — one switch for "not real yet" content.
//
// The design has slots for things we don't own yet: product screenshots, the
// team photo, client quotes, project stats. The handoff says: never publish
// invented numbers or quotes. So those blocks are shown while developing
// (npm run dev) and hidden in the production build.
//
// To preview the full design in a build, run:
//   PUBLIC_SHOW_PLACEHOLDERS=true npm run build
// =============================================================================
export const SHOW_PLACEHOLDERS: boolean =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_PLACEHOLDERS === 'true';
