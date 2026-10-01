// check-build.mjs — release gate. Scans the built site (dist/) for things that
// must never reach production: unresolved owner placeholders and local paths.
//   npm run build           → runs this in WARN mode (prints findings, exits 0)
//   npm run check:release   → STRICT mode: any finding fails (exit 1)
// On Vercel production builds (VERCEL_ENV=production) it is strict too.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strict = process.argv.includes('--strict') || process.env.VERCEL_ENV === 'production';
const checks = [
  { name: 'unresolved owner placeholder', re: /\{\{\s*TODO_OWNER|TODO_OWNER:/ },
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
      for (const c of checks) if (c.re.test(text)) hits.push(`${c.name}: ${p}`);
    }
  }
};
walk('dist');

if (hits.length) {
  console.log(`\n${strict ? '✗' : '⚠'} release check found ${hits.length} issue(s):`);
  hits.forEach((h) => console.log('  - ' + h));
  if (strict) process.exit(1);
} else {
  console.log('✓ release check: no placeholders or local paths in dist/');
}
