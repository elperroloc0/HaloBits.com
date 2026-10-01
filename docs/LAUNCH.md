# Launch checklist (owner actions)

## 1. Deploy on Vercel
1. Push the branch, then in Vercel: **Add New → Project → import the GitHub repo**. Framework is detected as Astro; `vercel.json` already sets build/output.
2. Environment variables (Project → Settings → Environment Variables), all optional until needed:
   - `PUBLIC_CONTACT_ENDPOINT` — form backend URL (Formspree-style JSON POST). Without it the form falls back to opening the visitor's email app.
   - `PUBLIC_GSC_VERIFICATION` — token for Google Search Console (step 3).
3. Project → Settings → Domains: add `halobits.com` and `www.halobits.com` (redirect www → apex). At your DNS provider set the records Vercel shows (A `76.76.21.21` for apex, CNAME `cname.vercel-dns.com` for www — use the values Vercel displays if they differ).
4. Project → Analytics: switch **Web Analytics** on.
5. Preview deployments are automatically `noindex` + `Disallow: /` (see `src/lib/env.ts`). Production is indexable. After the first production deploy, confirm:
   - `https://halobits.com/robots.txt` shows `Allow: /` and the sitemap line
   - view-source of the home page has **no** `<meta name="robots">`
6. Before launch run `npm run build && npm run check:release`. It fails while any `TODO_OWNER` placeholder (currently: the attorney review of Privacy/Terms) is still in the output. A normal Vercel build only *warns* about placeholders, so open owner tasks never block a deploy; local paths or dev hosts in the output DO fail a production build.

## 2. Google Search Console
1. search.google.com/search-console → **Add property → URL prefix → https://halobits.com**.
2. Choose **HTML tag**, copy only the `content="..."` value into `PUBLIC_GSC_VERIFICATION`, redeploy, click Verify. (Or verify via DNS TXT record instead — then the env var is not needed.)
3. Sitemaps → submit `sitemap-index.xml`. A week later check Pages → the `/`, `/es/` and `/ru/` URLs are indexed.

## 3. Email deliverability for hello@halobits.com (DNS, do at your DNS host)
- [ ] **SPF**: one TXT record on `halobits.com`: `v=spf1 include:<your mail provider> ~all` (only ONE spf record allowed; include your form-delivery service too if it sends as @halobits.com).
- [ ] **DKIM**: your mail provider gives a selector + key; publish as TXT/CNAME at `<selector>._domainkey.halobits.com`.
- [ ] **DMARC**: TXT at `_dmarc.halobits.com`: start with `v=DMARC1; p=none; rua=mailto:hello@halobits.com`, move to `p=quarantine` after a few weeks of clean reports.
- [ ] **Test**: send an email to the address mail-tester.com gives you; aim for 9–10/10. Also send to a Gmail and an Outlook inbox and check it's not in spam.
