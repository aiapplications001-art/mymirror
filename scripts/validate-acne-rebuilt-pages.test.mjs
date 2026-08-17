import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const pages = [
  // Previous 6
  { slug: 'salicylic-acid-cleanser-for-acne-india', hero: '/assets/images/salicylic-acid-cleanser-bottle.jpg' },
  { slug: 'clindamycin-gel-for-acne-india', hero: '/assets/images/clindamycin-gel-for-acne-india-og.jpg' },
  { slug: 'best-cica-moisturizer-for-acne-prone-skin-india', hero: '/assets/images/cica-moisturizer-gel-pot.jpg' },
  { slug: 'alpha-arbutin-serum-for-dark-spots-india', hero: '/assets/images/hyperpigmentation-treatment-india-og.jpg' },
  { slug: 'pcos-supplements-spearmint-inositol-india', hero: '/assets/images/spearmint-tea-pcos-cup.jpg' },
  { slug: 'niacinamide-serums-india', hero: '/assets/images/niacinamide-serum-india-og.jpg' },
  
  // New India 5
  { slug: 'benzoyl-peroxide-gel-2.5-vs-5-india', hero: '/assets/images/product-examples/benzac-ac-25-gel.jpg' },
  { slug: 'adapalene-0.1-percent-gel-acne-india', hero: '/assets/images/adapalene-gel-india-og.jpg' },
  { slug: 'double-cleansing-routine-acne-prone-skin-india', hero: '/assets/images/cleansing-balm-emulsification.jpg' },
  { slug: 'fungal-acne-vs-regular-acne-treatment-india', hero: '/assets/images/fungal-acne-vs-regular-acne-india-og.jpg' },
  { slug: 'tranexamic-acid-3-percent-serum-pih-india', hero: '/assets/images/tranexamic-acid-india-og.jpg' },

  // New USA 5
  { slug: 'panoxyl-10-percent-benzoyl-peroxide-acne-wash-usa', hero: '/assets/images/panoxyl.avif' },
  { slug: 'cerave-resurfacing-retinol-serum-post-acne-marks-usa', hero: '/assets/images/cerave-cream-usa-og.jpg' },
  { slug: 'hydrocolloid-pimple-patches-cystic-acne-usa', hero: '/assets/images/pimple-patch-microdart.jpg' },
  { slug: 'differin-adapalene-0.1-percent-gel-usa', hero: '/assets/images/differin-gel-usa-og.jpg' },
  { slug: 'salicylic-acid-body-wash-bacne-usa', hero: '/assets/images/salicylic-acid-body-wash-usa-og.jpg' }
];

test('rebuilt acne pages render as full-depth MyMirror guides', () => {
  for (const item of pages) {
    const filePath = path.join('/Users/tm030/acne', item.slug, 'index.html');
    assert.equal(fs.existsSync(filePath), true, `Missing generated HTML for ${item.slug}`);

    const html = fs.readFileSync(filePath, 'utf8');

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
