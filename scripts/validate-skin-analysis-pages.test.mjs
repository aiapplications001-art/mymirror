import assert from 'node:assert/strict';
import test from 'node:test';
import { validatePage } from './validate-skin-analysis-pages.mjs';

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
