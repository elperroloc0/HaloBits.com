# Learning this codebase from scratch

A from-zero guide to **everything** in this repo: what Astro is, how the files
fit together, the CSS, the SEO, and how it ships to the world. No prior web
framework experience assumed. Read it top to bottom once, then keep it open
beside the code — each chapter ends with the files it maps to.

> If a term is unfamiliar, check the **[Glossary](#glossary)** at the bottom.

## Contents

1. [What this is & why Astro](#1-what-this-is--why-astro)
2. [Prerequisites: Node, npm, the terminal](#2-prerequisites-node-npm-the-terminal)
3. [How Astro works](#3-how-astro-works)
4. [CSS from zero](#4-css-from-zero)
5. [Components & layouts](#5-components--layouts)
6. [SEO & social previews](#6-seo--social-previews)
7. [Git & deploying to Vercel](#7-git--deploying-to-vercel)
8. [Where to go next](#8-where-to-go-next)
- [Glossary](#glossary)

---

## 1. What this is & why Astro

This repo is **halobits.com** — the marketing/brand website for the HaloBits
studio. Its whole job is to:

- explain who HaloBits is and what it builds,
- rank in Google (SEO),
- look good when shared, and
- link out to products that live on their own subdomains
  (e.g. `concierge.halobits.com`).

It is **not** an app. There's no login, no database, no buttons that do work.
That distinction drives every technical choice below.

### Three ways a website can render

| Approach | What the browser receives | Good for | Cost |
| --- | --- | --- | --- |
| **CSR** (client-side render, e.g. a React SPA) | A near-empty HTML file + a big JS bundle that *builds* the page in the browser | Highly interactive apps | Slower first paint; worse SEO unless patched |
| **SSR** (server-side render, e.g. Next.js) | HTML built fresh *per request* on a server | Personalized/real-time pages | Needs a running server |
| **SSG** (static site generation) | Fully-built HTML files, made **once at build time** | Content/marketing sites | Almost none — just files on a CDN |

This site is **SSG**. Astro builds plain `.html` files ahead of time and serves
them as static files. Result: the visitor's browser gets finished HTML
instantly, and ships **zero JavaScript** by default.

### Why Astro and not React/Next here

- A React SPA (CSR) would send an empty page first, then download JS to draw it
  — bad for a site whose #1 job is SEO and speed.
- Next.js *can* do SSG too, but it carries a heavier baseline (it's a full React
  framework) for a site that has no app-like interactivity.
- Astro is built for exactly this: content-first, static by default, and it can
  still drop in a React/Vue/Svelte "island" on the one day you need real
  interactivity (see [chapter 8](#8-where-to-go-next)).

So: **right tool for this job.** If this site ever merges with an interactive
app, revisit Next.js.

---

## 2. Prerequisites: Node, npm, the terminal

**Node.js** is a program that runs JavaScript on your computer (outside a
browser). Astro's build tool is a Node program. **npm** ("node package
manager") ships with Node and installs the libraries a project depends on.

The few terminal commands you actually need here:

```bash
npm install      # read package.json, download dependencies into node_modules/
npm run dev      # start the local dev server (hot-reloads as you edit)
npm run build    # produce the final static site in dist/
npm run preview  # serve the built dist/ exactly as production would
npm run check    # type-check the .astro/TS files
```

### Files that make this work

- **[package.json](package.json)** — the project's manifest. Its `scripts`
  block defines the commands above (so `npm run dev` actually runs `astro dev`).
  `dependencies` ship to production; `devDependencies` are build-time-only tools
  (Prettier, the type checker). `engines.node` documents the Node version we
  support.
- **node_modules/** — where `npm install` puts the downloaded code. It's huge
  and regenerable, so it's **gitignored** — never committed. Anyone clones the
  repo and runs `npm install` to recreate it.
- **[.nvmrc](.nvmrc)** — pins the Node version (`20`) so everyone (and Vercel)
  builds on the same line. If you use `nvm`, `nvm use` reads this file.

---

## 3. How Astro works

### Project layout

```
src/
  pages/       ← each file here becomes a URL (routing)
  layouts/     ← page shells you wrap content in
  components/  ← reusable UI pieces (Nav, Footer)
  styles/      ← global CSS
public/        ← static files copied verbatim to the site root
astro.config.mjs ← configures the build tool itself
```

### File-based routing

There is **no router to configure**. A file's path under `src/pages/` *is* its
URL:

| File | URL |
| --- | --- |
| `src/pages/index.astro` | `/` |
| `src/pages/products.astro` | `/products` |
| `src/pages/about.astro` | `/about` |
| `src/pages/404.astro` | the not-found page (special, reserved name) |

> See [src/pages/](src/pages/). Add `src/pages/pricing.astro` and `/pricing`
> exists — that's the whole step.

### Anatomy of a `.astro` file

Every `.astro` file has up to three parts:

```astro
---
// 1) FRONTMATTER — JavaScript/TypeScript between the --- fences.
//    Runs ON THE SERVER, AT BUILD TIME. Never shipped to the browser.
//    Imports, props, data fetching, loops all happen here.
const year = new Date().getFullYear();
---

<!-- 2) TEMPLATE — HTML, with {curlyBraces} to drop in values from above. -->
<footer>© {year} HaloBits</footer>

<style>
  /* 3) STYLE — CSS that is automatically SCOPED to just this component. */
  footer { color: gray; }
</style>
```

The mental model that unlocks Astro: **frontmatter is build-time, template is
the output.** `new Date().getFullYear()` in
[Footer.astro](src/components/Footer.astro) runs when you build — so the year is
baked into the HTML, not computed in the visitor's browser.

### Build-time vs run-time, and "zero JS"

Because the frontmatter runs during `npm run build`, the *result* is static
HTML. Open [the Nav](src/components/Nav.astro): it highlights the current page
with an `active()` function — but that runs at build time, producing a plain
`class="active"` in the HTML. **No JavaScript is sent to do it.** That's why
Astro sites are fast.

When you *do* need browser interactivity, Astro uses **islands**: you opt a
single component into shipping JS, and the rest of the page stays static. We
don't use any yet (nothing here needs it) — see [chapter 8](#8-where-to-go-next).

### What `dist/` contains

After `npm run build`, look in `dist/`:

```
dist/index.html            ← the homepage, fully rendered
dist/about/index.html      ← /about
dist/_astro/*.css          ← bundled stylesheets
dist/og.png, favicon.svg   ← copied from public/
dist/sitemap-index.xml     ← generated for search engines
```

These are just files. A CDN (Vercel) serves them directly — there's no server
running your code. That's SSG.

---

## 4. CSS from zero

All shared styling lives in **[src/styles/global.css](src/styles/global.css)**,
imported once by the layout so every page inherits it.

### The cascade & inheritance

CSS = "Cascading Style Sheets." Rules flow *down* the document tree: a `color`
set on `<body>` is inherited by the paragraphs inside it unless something more
specific overrides it. "More specific" wins (an id beats a class beats a tag).
Keeping that in mind explains why we set base type on `body` and only override
where needed.

### Design tokens (CSS custom properties)

At the top of global.css, `:root { --accent: #1f3fc3; ... }` defines
**variables**. `:root` is the `<html>` element — the top of the cascade — so
these are inherited everywhere. Any rule can then say `color: var(--accent)`.
Change the value once and the whole site updates. This is our single source of
truth for the brand, and it's why the colors match the Concierge app.

### Fluid type with `clamp()`

```css
font-size: clamp(3rem, 7vw, 6rem);
```

Reads as `clamp(MIN, PREFERRED, MAX)`. The middle value (`7vw` = 7% of viewport
width) scales the text with the screen, but it's never smaller than `3rem` or
bigger than `6rem`. One line replaces a stack of media queries — the headline is
readable on a phone and a desktop without extra rules.

### The box model & our reset

Every element is a box: content → padding → border → margin. Browsers ship
inconsistent default margins, so global.css starts with a reset:

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
```

`box-sizing: border-box` makes an element's declared width *include* its padding
and border — so a `width: 100px` box is actually 100px wide. Far more intuitive
than the default.

### Layout: flexbox vs grid

- **Flexbox** (`display: flex`) lays items along one axis (a row or a column).
  We use it for the nav (brand on the left, links on the right via
  `justify-content: space-between`) and button rows.
- **Grid** (`display: grid`) lays items in two dimensions (rows *and* columns).
  We use it for the product cards (`grid-template-columns: repeat(2, 1fr)` = two
  equal columns) and the footer.

### Responsive breakpoints

```css
@media (max-width: 720px) {
  .product-grid { grid-template-columns: 1fr; }
}
```

A media query applies rules only under a condition — here, screens ≤ 720px wide.
We use it to collapse two-column grids into one column on phones. Resize the
browser narrow in `npm run dev` to watch it happen.

### Why utility classes

global.css defines `.btn`, `.tag`, `.paper`, `.card` once. Pages just *use*
them. Define a button's look in one place → every button matches, and a restyle
is a one-spot change. Variants (`.btn-primary`, `.btn-ghost`) only declare what
differs from the base.

---

## 5. Components & layouts

Two reuse mechanisms, both `.astro` files:

### Layouts — the page shell (`<slot />`)

[src/layouts/Base.astro](src/layouts/Base.astro) is the HTML skeleton every page
shares: `<html>`, `<head>` (meta tags, fonts), the `<Nav />`, the `<Footer />`,
and — crucially — a `<slot />`. The slot is the hole where each page's unique
content drops in. Think of Base as a picture frame and `<slot />` as the opening.

A page uses it like this (see [index.astro](src/pages/index.astro)):

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="HaloBits — AI tools for small businesses">
  <!-- everything in here lands in Base's <slot /> -->
  <h1>...</h1>
</Base>
```

### Props — passing data in, with types

`title="..."` above is a **prop**. Base declares what props it accepts and their
types:

```ts
interface Props {
  title: string;        // required
  description?: string; // optional (the ?)
}
const { title, description = '...default...' } = Astro.props;
```

Because our [tsconfig.json](tsconfig.json) extends Astro's *strict* config,
TypeScript will flag a page that forgets `title` **before** you ever run it —
that's the payoff of typing the contract. `npm run check` runs that check.

### Components — smaller reusable pieces

[Nav.astro](src/components/Nav.astro) and
[Footer.astro](src/components/Footer.astro) are imported by Base, so they appear
on every page automatically. Each carries its own scoped `<style>`, so a `.nav`
rule there can't leak out and clash with a `.nav` elsewhere — Astro tags the
markup with a `data-astro-cid-…` attribute and rewrites the CSS to match. (You
can see that attribute in the built HTML.)

**None of this ships JavaScript.** Composition, props, and the active-link logic
all resolve at build time into plain HTML + CSS.

---

## 6. SEO & social previews

SEO ("search engine optimization") is the site's main job, and it's mostly about
the `<head>` — all set in [Base.astro](src/layouts/Base.astro).

- **`<title>` + `<meta name="description">`** — the headline and snippet Google
  shows in results, and the tab label.
- **`<link rel="canonical">`** — "this is the official URL for this page." If the
  same page is reachable via several URLs, this tells search engines which one
  counts, avoiding duplicate-content penalties. We build it from `Astro.url`.
- **Open Graph (`og:*`) + Twitter (`twitter:*`) tags** — control the rich
  preview card when a link is pasted into iMessage, Slack, Facebook, LinkedIn,
  X. `og:image` must be an **absolute URL** and a **raster** image (PNG/JPG) —
  scrapers don't render SVG. That's why [public/og.png](public/og.png) is a real
  1200×630 PNG, and why we build its URL with `new URL('/og.png', Astro.site)`
  (`Astro.site` is the `site` value from astro.config.mjs).

### Sitemap & robots

- **Sitemap** — `@astrojs/sitemap` (wired up in
  [astro.config.mjs](astro.config.mjs)) walks every built page and writes
  `dist/sitemap-index.xml`, a machine-readable list of all URLs so crawlers find
  everything. It needs the `site` value to write full URLs — which is why that
  config field is required.
- **[public/robots.txt](public/robots.txt)** — tells crawlers they may index
  everything and points them at the sitemap.

### How to test an unfurl

After deploying, paste the URL into [opengraph.xyz](https://www.opengraph.xyz)
(or just into Slack/iMessage) to see the card render. Locally you can confirm the
tags exist by viewing source on `npm run preview`.

---

## 7. Git & deploying to Vercel

### Git hygiene

[.gitignore](.gitignore) lists what must **never** be committed:

- `node_modules/` — huge and regenerable (`npm install` rebuilds it).
- `dist/` and `.astro/` — build output, regenerated by `npm run build`.
- `.env` / `.env.production` — **secrets**. The #1 rule of git: never commit
  credentials. Once pushed, treat a secret as compromised even if you delete it
  later.

### Deploying (documented — you run these)

1. Push the repo to GitHub.
2. On **vercel.com → Add New Project**, pick the repo. Vercel auto-detects
   Astro (build command `npm run build`, output `dist/`).
3. In **Settings → Domains**, add `halobits.com`.
4. Point DNS at Vercel (see the records in
   [.sidefiles/halobits-site-starter.md](.sidefiles/halobits-site-starter.md)):
   an `A` record for the apex, a `CNAME` for `www`, and a separate `CNAME` for
   `concierge` that points at the product's own host.

After that, every push to `main` auto-deploys.

### The subdomain-per-product model

`halobits.com` (this repo) is just the brand layer. Each product
(`concierge.halobits.com`, future ones) keeps its **own repo and own host**, and
this site links out to them. Independent deploys, independent uptime — a bug in
a product can't take the marketing site down, and vice-versa.

---

## 8. Where to go next

The spec's "later" list, each a small on-ramp from what you now understand:

- **Blog** — Astro **Content Collections**: drop Markdown files in
  `src/content/blog/*.md`, and Astro gives you typed, queryable content. Great
  next step because it builds directly on file-based routing.
- **Spanish version** — Astro **i18n routing**: a parallel `src/pages/es/*` tree
  serves `/es/...`. Reuses the same layouts and components.
- **Lead/contact form** — a static site has no backend, so use a form service
  like **Formspree**: point a plain `<form action>` at it, no server needed.
- **Dynamic OG images** — instead of one static `og.png`, generate a per-page
  card at request time with **@vercel/og**. This *would* introduce a tiny server
  function — the first non-static thing here.
- **An interactive widget** — the moment you need real browser interactivity
  (a pricing calculator, a live demo), add a **React island**: install
  `@astrojs/react`, write a normal React component, and tag it with a
  `client:*` directive so only *that* component ships JS. The rest of the page
  stays static. This is the bridge back to your earlier "what if React?"
  question — you can have it, surgically, without giving up SSG.

---

## Glossary

- **Astro** — the static-first web framework this site is built with.
- **SSG / SSR / CSR** — static generation (build once) / server render (per
  request) / client render (in the browser). This site is SSG.
- **Island** — a single interactive component that ships JS, on an otherwise
  static page.
- **Frontmatter** — the `---`-fenced JS/TS at the top of a `.astro` file; runs
  at build time.
- **Slot** — the placeholder (`<slot />`) in a layout where page content is
  injected.
- **Prop** — a typed value passed into a component/layout (e.g. `title`).
- **Design token** — a CSS custom property (`--accent`) used as a single source
  of truth for a style value.
- **Cascade** — CSS's rule for which style wins (specificity + order).
- **Media query** — `@media (...)`, applies CSS only under a condition (e.g. a
  screen width) — the basis of responsive design.
- **Open Graph** — the `og:*` meta tags that control link-preview cards.
- **Canonical URL** — the one official URL for a page, declared to search
  engines.
- **Sitemap** — an XML list of all the site's URLs, for crawlers.
- **CDN** — a network of servers that serves static files fast from near the
  visitor; where Vercel hosts `dist/`.
- **npm / package.json / node_modules** — the package manager / the project
  manifest / the folder of installed dependencies.
