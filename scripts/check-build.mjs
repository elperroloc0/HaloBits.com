// check-build.mjs — release gate. Scans the built site (dist/) for things that
// must never reach production.
//   • Local paths / dev hosts (/Users/, localhost, ngrok…): always an error on a
//     Vercel production build, a warning elsewhere.
//   • Unresolved owner placeholders (TODO_OWNER, e.g. the attorney review of
//     Privacy/Terms): a warning, so a deploy is never blocked by open owner tasks.
//     `npm run check:release` (--strict) turns EVERYTHING into an error — run it
//     by hand when you want to confirm the site is fully ready.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strict = process.argv.includes('--strict');
const onProd = process.env.VERCEL_ENV === 'production';
const checks = [
  { name: 'unresolved owner placeholder', re: /\{\{\s*TODO_OWNER|TODO_OWNER:/, soft: true },
  { name: 'local filesystem path', re: /\/Users\/|@fs\// },
  { name: 'dev/tunnel host', re: /localhost|127\.0\.0\.1|devtunnels|ngrok/ },
];

const hits = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|xml|txt|json|js|css)$/.test(f)) {
      const text = readFileSync(p, 'utf8');
      for (const c of checks) if (c.re.test(text)) hits.push({ msg: `${c.name}: ${p}`, hard: !c.soft && onProd });
    }
  }
};
walk('dist');

if (hits.length) {
  const fail = strict || hits.some((h) => h.hard);
  console.log(`\n${fail ? '✗' : '⚠'} release check found ${hits.length} issue(s):`);
  hits.forEach((h) => console.log('  - ' + h.msg));
  if (fail) process.exit(1);
} else {
  console.log('✓ release check: no placeholders or local paths in dist/');
}
