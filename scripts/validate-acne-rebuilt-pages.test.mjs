import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const pages = [
  {
    slug: 'azelaic-acid-for-acne-india',
    h1Pattern: /Azelaic acid 10% for acne on Indian skin/,
    hero: '/assets/images/azelaic-acid-og-v4.jpg'
  },
  {
    slug: 'adapalene-gel-for-acne-indian-skin-guide',
    h1Pattern: /Adapalene gel for acne on Indian skin/,
    hero: '/assets/images/adapalene-gel-india-og.jpg'
  },
  {
    slug: 'cleansing-balm-for-acne-prone-skin-india',
    h1Pattern: /Cleansing balm for acne-prone Indian skin/,
    hero: '/assets/images/cleansing-balm-emulsification.jpg'
  },
  {
    slug: 'oil-free-moisturizer-acne-prone-skin-india',
    h1Pattern: /Best oil-free moisturizer for acne-prone skin in humid weather/,
    hero: '/assets/images/oil-free-moisturizer-india-og.jpg'
  },
  {
    slug: 'benzoyl-peroxide-spot-treatment-vs-gel-india',
    h1Pattern: /Benzoyl peroxide spot treatment vs gel/,
    hero: '/assets/images/benzoyl-peroxide-usa-og.jpg'
  },
  {
    slug: 'tranexamic-acid-for-pih-indian-skin',
    h1Pattern: /Tranexamic acid for PIH on Indian skin/,
    hero: '/assets/images/pie_vs_pih_marks.jpg'
  }
];

function mainText(html) {
  const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1] ?? html;
  return main
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

test('rebuilt acne pages render as full-depth MyMirror guides', async () => {
  for (const page of pages) {
    const html = await readFile(`acne/${page.slug}/index.html`, 'utf8');
    const text = mainText(html);

    assert.match(html, /<title>[^<]+ \| MyMirror<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]{120,170}">/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://mymirror\\.fit/acne/${page.slug}/">`));
    assert.equal((html.match(/<h1/g) ?? []).length, 1, `${page.slug} should have exactly one H1`);
    assert.match(html, page.h1Pattern);
    assert.match(html, /href="\/scan"[^>]*>Start your free AI skin scan<\/a>/);
    assert.match(html, new RegExp(`<img class="hero-image" src="${page.hero.replaceAll('/', '\\/')}"`));
    assert.match(html, /<script type="application\/ld\+json">/);
    assert.ok(wordCount(text) >= 1900, `${page.slug} should have at least 1900 main-content words`);
    assert.ok(wordCount(text) <= 3000, `${page.slug} should stay focused under 3000 main-content words`);
    assert.equal((html.match(/<details>/g) ?? []).length, 8, `${page.slug} should render 8 FAQs`);
    assert.match(html, /How to decide if this page is for you/);
    assert.match(html, /What to look for on Indian skin/);
    assert.match(html, /Safe use plan/);
    assert.match(html, /Product formats compared/);
    assert.match(html, /Product label checklist/);
    assert.match(html, /Example product landscape/);
    assert.match(html, /What to buy first/);
    assert.match(html, /Indian product examples/);
    assert.match(html, /Examples only, not endorsements/);
    assert.ok((html.match(/class="product-card"/g) ?? []).length >= 3, `${page.slug} should render at least 3 visible product cards`);
    assert.ok((html.match(/class="product-image"/g) ?? []).length >= 3, `${page.slug} should render at least 3 product images`);
    assert.ok((html.match(/class="product-link"/g) ?? []).length >= 3, `${page.slug} should render at least 3 outbound product links`);
    assert.match(html, /Mistakes to avoid/);
    assert.match(html, /When to ask a dermatologist/);
    assert.match(html, /Source basis/);
    assert.doesNotMatch(html, /Clinical Dermatological Guide/);
    assert.doesNotMatch(html, /Dr\. Lipy Mehta/);
    assert.doesNotMatch(html, /body lotion|Nécessaire|The Body Lotion/i);
  }
});

test('rebuilt acne pages keep mobile first-fold and navigation compact', async () => {
  const html = await readFile('acne/adapalene-gel-for-acne-indian-skin-guide/index.html', 'utf8');

  assert.match(html, /\.hero \{ min-height:500px;/);
  assert.match(html, /h1 \{ font-size:52px;/);
  assert.match(html, /\.links a:not\(\.button\) \{ display:none; \}/);
  assert.match(html, /h1 \{ font-size:34px; max-width:340px; \}/);
  assert.match(html, /\.mobile-cta \{ display:block;/);
});
