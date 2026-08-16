import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export function validatePage({ slug, html }) {
  const errors = [];

  if (!/<title>[^<]*\|\s*MyMirror<\/title>/i.test(html)) {
    errors.push('title is missing or does not identify MyMirror');
  }
  if (!/<meta\s+name=["']description["']\s+content=["'][^"']{20,}["']/i.test(html)) {
    errors.push('meta description is missing');
  }
  const canonical = new RegExp(`<link\\s+rel=["']canonical["']\\s+href=["']https://mymirror\\.fit/skin-analysis/${slug}/["']`, 'i');
  if (!canonical.test(html)) {
    errors.push('canonical URL is missing or incorrect');
  }
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) {
    errors.push('page must contain exactly one H1');
  }
  if (!/>Start your free skin analysis now</i.test(html)) {
    errors.push('approved scan CTA is missing');
  }
  if (!/<img\b[^>]*hero[^>]*\balt=["'][^"']{8,}["']/i.test(html)) {
    errors.push('hero image or descriptive alt text is missing');
  }
  if (!/<script\s+type=["']application\/ld\+json["']/i.test(html)) {
    errors.push('JSON-LD block is missing');
  }

  return errors;
}

export async function validateCampaign(rootDirectory, slugs) {
  const errors = [];

  for (const slug of slugs) {
    const html = await readFile(join(rootDirectory, 'skin-analysis', slug, 'index.html'), 'utf8');
    errors.push(...validatePage({ slug, html }).map((error) => `${slug}: ${error}`));
  }

  return errors;
}
