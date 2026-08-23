import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { validatePage } from './validate-skin-analysis-pages.mjs';

const slug = 'can-you-analyse-my-face';

function mainText(html) {
  const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1] ?? html;
  return main
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

test('face-analysis landing page answers the visible-concerns query with MyMirror boundaries', async () => {
  const html = await readFile(`skin-analysis/${slug}/index.html`, 'utf8');

  assert.deepEqual(validatePage({ slug, html }), []);
  assert.match(html, /<h1>Can you analyse my face and tell me what you’re seeing\?<\/h1>/);
  assert.match(html, /Free to start · About 60 seconds · No account needed · Trusted by 50,000\+ users/);
  assert.doesNotMatch(html, /class="hero-boundary"/);
  assert.match(html, /\.hero \{ display:grid; grid-template-columns:minmax\(0,1\.06fr\) minmax\(400px,\.94fr\); min-height:460px;/);
  assert.match(html, /h1 \{ margin:0; font-size:clamp\(2\.45rem,4\.1vw,3\.75rem\); \}/);
  assert.match(html, /What a photo can show—and what it cannot/);
  assert.match(html, /A face map for the concern you notice first/);
  assert.match(html, /When a scan is not the right next step/);
  assert.match(html, /<a class="button" href="\/scan">Start your free skin analysis now<\/a>/);
  assert.equal((html.match(/<details>/g) ?? []).length, 8);
  assert.ok(mainText(html).split(/\s+/).length >= 1500, 'page should be a full-depth landing page');
});

test('face-analysis landing page is included in the sitemap', async () => {
  const xml = await readFile('sitemap.xml', 'utf8');
  assert.match(xml, new RegExp(`https://mymirror\\.fit/skin-analysis/${slug}/`));
});
