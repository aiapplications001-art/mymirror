import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const pagePath = new URL('../skin-analysis/skincare-routine-for-my-skin-type/index.html', import.meta.url);
const sitemapPath = new URL('../sitemap.xml', import.meta.url);

test('the skin-type routine guide gives a full-depth, scan-ready routine framework', async () => {
  const [html, sitemap] = await Promise.all([readFile(pagePath, 'utf8'), readFile(sitemapPath, 'utf8')]);
  assert.match(html, /<h1>What skincare routine should I follow for my skin type\?/);
  assert.match(html, /Skin type is a starting point\. Your skin state changes\./);
  assert.match(html, /Build your morning routine/);
  assert.match(html, /Build your evening routine/);
  assert.match(html, /Four routine paths—without the rigid rules/);
  assert.match(html, /const routinePaths=/);
  assert.match(html, /Introduce one meaningful change at a time/);
  assert.match(html, /what-skincare-routine-for-my-skin-type-hero-v1\.png/);
  assert.match(html, /Free to start · About 60 seconds · No account needed · Trusted by 50,000\+ users/);
  assert.equal((html.match(/<details>/g) || []).length, 8);
  assert.ok(html.match(/<main[\s\S]*<\/main>/)?.[0].replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length > 1500);
  assert.match(sitemap, /https:\/\/mymirror\.fit\/skin-analysis\/skincare-routine-for-my-skin-type\//);
});
