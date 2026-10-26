// Build step for Vercel: copies the site into dist/ and minifies HTML (with its inline CSS and JS), CSS and JS.
// Source files stay readable in the repo; only the deployed copy is minified.
import fs from 'node:fs';
import path from 'node:path';
import { minify } from 'html-minifier-terser';
import CleanCSS from 'clean-css';
import { minify as terser } from 'terser';

const OUT = 'dist';
const SKIP = new Set(['.git', '.vercel', '.gitignore', '.DS_Store', 'node_modules', OUT, 'build.mjs', 'package.json', 'package-lock.json', 'vercel.json', 'README.md', 'api']);

const htmlOptions = {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: { mangle: false },
};

async function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (SKIP.has(entry.name) || entry.name.startsWith('.env')) continue;
    if (entry.isDirectory()) { await walk(rel); continue; }
    const out = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    if (rel.endsWith('.html')) {
      fs.writeFileSync(out, await minify(fs.readFileSync(rel, 'utf8'), htmlOptions));
    } else if (rel.endsWith('.css')) {
      fs.writeFileSync(out, new CleanCSS().minify(fs.readFileSync(rel, 'utf8')).styles);
    } else if (rel.endsWith('.js')) {
      fs.writeFileSync(out, (await terser(fs.readFileSync(rel, 'utf8'), { mangle: false })).code);
    } else {
      fs.copyFileSync(rel, out);
    }
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
await walk('.');
console.log('Built to ' + OUT);
