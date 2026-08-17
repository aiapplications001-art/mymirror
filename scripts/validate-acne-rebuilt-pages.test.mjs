import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const pages = [
  {
    slug: 'salicylic-acid-cleanser-for-acne-india',
    h1Pattern: /Salicylic Acid cleanser for acne on Indian skin/,
    hero: '/assets/images/salicylic-acid-cleanser-bottle.jpg'
  },
  {
    slug: 'clindamycin-gel-for-acne-india',
    h1Pattern: /Clindamycin gel 1% for acne on Indian skin/,
    hero: '/assets/images/product-examples/clindamycin-gel-tube.jpg'
  },
  {
    slug: 'best-cica-moisturizer-for-acne-prone-skin-india',
    h1Pattern: /Best Cica moisturizer for acne-prone skin in India/,
    hero: '/assets/images/cica-moisturizer-gel-pot.jpg'
  },
  {
    slug: 'alpha-arbutin-serum-for-dark-spots-india',
    h1Pattern: /Alpha Arbutin 2% serum for post-acne dark spots on Indian skin/,
    hero: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg'
  },
  {
    slug: 'pcos-supplements-spearmint-inositol-india',
    h1Pattern: /PCOS supplements & Spearmint tea for hormonal acne on Indian skin/,
    hero: '/assets/images/spearmint-tea-pcos-cup.jpg'
  },
  {
    slug: 'niacinamide-serums-india',
    h1Pattern: /Niacinamide serums for acne & dark marks on Indian skin/,
    hero: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg'
  }
];

test('rebuilt acne pages render as full-depth MyMirror guides', () => {
  for (const item of pages) {
    const filePath = path.join('/Users/tm030/acne', item.slug, 'index.html');
    assert.equal(fs.existsSync(filePath), true, `Missing generated HTML for ${item.slug}`);

    const html = fs.readFileSync(filePath, 'utf8');

    assert.match(html, item.h1Pattern, `Title pattern mismatch for ${item.slug}`);
    assert.match(html, new RegExp(item.hero.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Missing hero image asset for ${item.slug}`);
    assert.match(html, /1\. The Science of/, `Missing Science section for ${item.slug}`);
    assert.match(html, /Frequently Asked Questions/, `Missing FAQ section for ${item.slug}`);
    assert.match(html, /"MedicalWebPage"/, `Missing MedicalWebPage schema for ${item.slug}`);
    assert.match(html, /"FAQPage"/, `Missing FAQPage schema for ${item.slug}`);

    const textOnly = html.replace(/<style[\s\S]*?<\/style>/gi, '')
                         .replace(/<script[\s\S]*?<\/script>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ');
    const wordCount = textOnly.trim().split(' ').length;
    assert.ok(wordCount >= 1000, `Word count floor under 1000 for ${item.slug}: got ${wordCount}`);
  }
});

test('rebuilt acne pages keep mobile first-fold and navigation compact', () => {
  for (const item of pages) {
    const filePath = path.join('/Users/tm030/acne', item.slug, 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    assert.match(html, /class="dark-hero"/, `Missing dark-hero container in ${item.slug}`);
    assert.match(html, /class="hero-container"/, `Missing hero-container in ${item.slug}`);
  }
});
