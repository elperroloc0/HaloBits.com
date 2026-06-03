# halobits-site

Marketing site for HaloBits — **halobits.com**. Static, built with
[Astro 5](https://astro.build), deployed on Vercel.

> New to the stack? Read **[LEARNING.md](LEARNING.md)** — a from-scratch guide to
> everything in this repo (Astro, CSS, components, SEO, deploy).

## Develop

```bash
npm install
npm run dev      # → http://localhost:4321
```

## Scripts

| Command           | What it does                                              |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload.                    |
| `npm run build`   | Build the static site into `dist/` (+ sitemap).          |
| `npm run preview` | Serve the built `dist/` locally, as production would.    |
| `npm run check`   | Type-check `.astro`/TS files with `astro check`.         |
| `npm run format`  | Format the codebase with Prettier.                       |

## Deploy

Auto-deploys to Vercel on push to `main` (Astro is auto-detected; build command
`npm run build`, output `dist/`). DNS + subdomain notes live in
[.sidefiles/halobits-site-starter.md](.sidefiles/halobits-site-starter.md).

## Products live on subdomains

- **concierge.halobits.com** — bilingual AI receptionist (separate repo).

Each product keeps its own repo + subdomain; this site is the brand/SEO layer
that links out to them.
