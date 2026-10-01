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
6. Before launch run `npm run build && npm run check:release`. It fails while any `TODO_OWNER` placeholder is still in the output (none today). A normal Vercel build only *warns* about placeholders, so open owner tasks never block a deploy; local paths or dev hosts in the output DO fail a production build.

## 2. Google Search Console
1. search.google.com/search-console → **Add property → URL prefix → https://halobits.com**.
2. Choose **HTML tag**, copy only the `content="..."` value into `PUBLIC_GSC_VERIFICATION`, redeploy, click Verify. (Or verify via DNS TXT record instead — then the env var is not needed.)
3. Sitemaps → submit `sitemap-index.xml`. A week later check Pages → the `/`, `/es/` and `/ru/` URLs are indexed.

## 3. Send mail from @halobits.com for free (Gmail + Resend)
Receiving is done by Cloudflare Email Routing (all @halobits.com addresses forward to your Gmail). This section adds *sending*: you write in Gmail, the message goes out "from" hello@halobits.com / angel@halobits.com through Resend's free SMTP (3,000 mails/month, 100/day).

1. **Resend account**: resend.com → sign up → *Domains → Add Domain* → `halobits.com` (region US East). Resend shows DNS records.
2. **DNS in Cloudflare** (DNS → Records), add exactly what Resend shows. Typically:
   - `MX  send` → `feedback-smtp.<region>.amazonses.com` (priority 10)
   - `TXT send` → `v=spf1 include:amazonses.com ~all`  (this SPF lives on the `send` subdomain, so it does NOT conflict with the root SPF that Cloudflare Email Routing created)
   - `TXT resend._domainkey` → the long DKIM key Resend gives you
   - Set these records to **DNS only** (grey cloud), not proxied. Click *Verify* in Resend until the domain shows **Verified**.
3. **DMARC** (one more TXT in Cloudflare): name `_dmarc`, value `v=DMARC1; p=none; rua=mailto:hello@halobits.com`. After a few weeks of clean reports change `p=none` to `p=quarantine`.
4. **SMTP key**: Resend → *API Keys → Create* (permission: *Sending access*, domain: halobits.com). Copy the key (shown once).
5. **Gmail → Settings (gear) → See all settings → Accounts and Import → Send mail as → Add another email address**:
   - Name: `HaloBits` (or your name), Email: `hello@halobits.com`, leave "Treat as an alias" ticked
   - SMTP server: `smtp.resend.com`, port `465`, SSL; username `resend`, password = the API key
   - Gmail sends a confirmation code to hello@halobits.com. It arrives in your Gmail through Cloudflare routing: paste the code.
   - Repeat for `angel@halobits.com` (and any other alias you want to send from).
   - Optional: in the same screen choose "Reply from the same address the message was sent to".
6. **Test**: send a mail from hello@halobits.com to mail-tester.com (aim for 9–10/10) and to a Gmail and an Outlook inbox. In Gmail open the message → *Show original*: SPF, DKIM and DMARC should all say PASS.

If a record is rejected or the domain will not verify, check that the `send` records are not proxied and that you copied the values without extra quotes or spaces.
