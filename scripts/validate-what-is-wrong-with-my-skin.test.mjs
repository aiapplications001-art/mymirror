import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const pagePath = new URL('../skin-analysis/what-is-wrong-with-my-skin/index.html', import.meta.url);
const sitemapPath = new URL('../sitemap.xml', import.meta.url);

test('the skin concern guide provides a long-form, scan-ready self-triage experience', async () => {
  const [html, sitemap] = await Promise.all([readFile(pagePath, 'utf8'), readFile(sitemapPath, 'utf8')]);
  assert.match(html, /<h1>What is wrong with my skin\?/);
  assert.match(html, /Free to start · About 60 seconds · No account needed · Trusted by 50,000\+ users/);
  assert.match(html, /Four clues before you name it/);
  assert.match(html, /What changed recently\?/);
  assert.match(html, /A product-routine audit/);
  assert.match(html, /Skin-tone-aware observations/);
  assert.match(html, /Help your MyMirror scan see the clearest picture/);
  assert.doesNotMatch(html, /Take a useful photo, not a flattering one/);
  assert.match(html, /When a scan is not the right next step/);
  assert.equal((html.match(/<details>/g) || []).length, 8);
  assert.ok(html.match(/<main[\s\S]*<\/main>/)?.[0].replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length > 1500);
  assert.match(sitemap, /https:\/\/mymirror\.fit\/skin-analysis\/what-is-wrong-with-my-skin\//);
});
