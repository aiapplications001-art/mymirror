import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { validateCampaign, validatePage } from './validate-skin-analysis-pages.mjs';

const validPage = `<!doctype html>
<html lang="en">
  <head>
    <title>Example Guide | MyMirror</title>
    <meta name="description" content="A sufficiently descriptive summary that helps readers understand the page before opening it.">
    <link rel="canonical" href="https://mymirror.fit/skin-analysis/example/">
  </head>
  <body>
    <h1>One clear page heading</h1>
    <a href="/scan">Start your free skin analysis now</a>
    <img class="hero-image" src="/assets/skin-analysis/example-hero.webp" alt="An abstract illustration of a face analysis">
    <script type="application/ld+json">{}</script>
  </body>
</html>`;

test('accepts a page with one H1, metadata, CTA, image alt text, and schema', () => {
  assert.deepEqual(validatePage({ slug: 'example', html: validPage }), []);
});

test('reports each missing required page element', () => {
  const errors = validatePage({ slug: 'example', html: '<html><body><h1>A</h1><h1>B</h1></body></html>' });

  assert.deepEqual(errors, [
    'title is missing or does not identify MyMirror',
    'meta description is missing',
    'canonical URL is missing or incorrect',
    'page must contain exactly one H1',
    'approved scan CTA is missing',
    'hero image or descriptive alt text is missing',
    'JSON-LD block is missing'
  ]);
});

test('SA1 passes the static MyMirror page contract', async () => {
  assert.deepEqual(await validateCampaign(process.cwd(), ['online-skin-analysis']), []);
});

test('SA1 hero makes the free, fast, private scan promise visible before scrolling', async () => {
  const html = await readFile('skin-analysis/online-skin-analysis/index.html', 'utf8');

  assert.match(html, /class="hero-proof"/);
  assert.match(html, /online-skin-analysis-hero-v2\.png/);
  assert.match(html, /Free to start/);
  assert.match(html, /About 60 seconds/);
  assert.match(html, /Private by design/);
});

test('SA1 desktop hero stays compact without losing its decision cues', async () => {
  const html = await readFile('skin-analysis/online-skin-analysis/index.html', 'utf8');

  assert.match(html, /\.hero \{ min-height:480px;/);
  assert.match(html, /font-size:clamp\(2\.35rem,3\.7vw,3\.4rem\)/);
  assert.match(html, /<h1>See your skin more clearly\.<\/h1>/);
});

test('SA2 passes the static MyMirror page contract', async () => {
  assert.deepEqual(await validateCampaign(process.cwd(), ['how-to-know-your-skin-type']), []);
});

test('SA3 passes the static MyMirror page contract', async () => {
  assert.deepEqual(await validateCampaign(process.cwd(), ['oily-vs-dehydrated-skin']), []);
});

test('SA4 passes the static MyMirror page contract', async () => {
  assert.deepEqual(await validateCampaign(process.cwd(), ['combination-skin-routine-india']), []);
});

test('SA5 passes the static MyMirror page contract', async () => {
  assert.deepEqual(await validateCampaign(process.cwd(), ['uneven-skin-texture-causes']), []);
});

test('SA6-SA10 CSV-derived pages pass the static MyMirror page contract', async () => {
  assert.deepEqual(await validateCampaign(process.cwd(), [
    'tanning-vs-pigmentation-face',
    'white-spots-on-face',
    'skin-rash-on-face',
    'milia-on-face',
    'pores-on-face'
  ]), []);
});

test('sitemap is closed and includes the CSV-derived skin-analysis URLs', async () => {
  const xml = await readFile('sitemap.xml', 'utf8');

  assert.equal((xml.match(/<url>/g) ?? []).length, (xml.match(/<\/url>/g) ?? []).length);
  assert.match(xml, /<\/urlset>\s*$/);
  for (const slug of [
    'tanning-vs-pigmentation-face',
    'white-spots-on-face',
    'skin-rash-on-face',
    'milia-on-face',
    'pores-on-face'
  ]) {
    assert.match(xml, new RegExp(`https://mymirror\\.fit/skin-analysis/${slug}/`));
  }
});

test('SA6-SA10 generated pages protect mobile first-fold content from horizontal clipping', async () => {
  const html = await readFile('skin-analysis/skin-rash-on-face/index.html', 'utf8');

  assert.match(html, /\.links \.button \{ display:none; \}/);
  assert.match(html, /h1 \{ font-size:34px; max-width:330px; \}/);
  assert.match(html, /\.hero p \{ max-width:330px; \}/);
});

test('SA6-SA10 use dedicated topic-relevant skin-analysis hero assets', async () => {
  const slugs = [
    'tanning-vs-pigmentation-face',
    'white-spots-on-face',
    'skin-rash-on-face',
    'milia-on-face',
    'pores-on-face'
  ];

  for (const slug of slugs) {
    const html = await readFile(`skin-analysis/${slug}/index.html`, 'utf8');
    assert.match(html, new RegExp(`/assets/skin-analysis/${slug}-hero-v2\\.png`));
    assert.doesNotMatch(html, /<img class="hero-image" src="\/assets\/images\//);
  }
});

test('SA6-SA10 heroes do not show keyword proof chips or diagnostic microcopy below the CTA', async () => {
  const slugs = [
    'tanning-vs-pigmentation-face',
    'white-spots-on-face',
    'skin-rash-on-face',
    'milia-on-face',
    'pores-on-face'
  ];

  for (const slug of slugs) {
    const html = await readFile(`skin-analysis/${slug}/index.html`, 'utf8');
    assert.doesNotMatch(html, /class="hero-proof"/);
    assert.doesNotMatch(html, /CSV volume:/);
    assert.doesNotMatch(html, /Low competition/);
    assert.doesNotMatch(html, /Photo-led guide|Non-diagnostic|Triage-first|Bump-focused|Texture-led/);
    assert.doesNotMatch(html, /A visible-signal starting point\. Not a medical diagnosis\./);
  }
});
