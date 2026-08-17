# Acne Page Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild five acne pages into full-depth, mobile-safe MyMirror guides and publish them to production.

**Architecture:** A deterministic Node.js generator writes the exact requested static page slugs, matching SEO packet artifacts, sitemap entries, and planning docs. A Node test suite asserts page depth, mobile-safe structure, FAQ count, source visibility, CTA, schema, and removal of the old dark template.

**Tech Stack:** Static HTML, inline CSS matching MyMirror skin-analysis pages, Node.js test runner, Vercel production deployment.

## Global Constraints

- Keep pages under `acne/<slug>/index.html`.
- Keep the CTA text `Start your free AI skin scan`.
- Do not include unsupported dermatologist-review claims.
- Render exactly eight FAQs per page.
- Keep each rebuilt page at 1,900 to 3,000 main-content words.
- Include product-format comparison, product label checklist, example product landscape, and what-to-buy-first sections.
- Use existing repository assets only.
- Push only to `main`.

---

### Task 1: Regression Contract

**Files:**
- Create: `scripts/validate-acne-rebuilt-pages.test.mjs`

**Interfaces:**
- Consumes: generated HTML under `acne/<slug>/index.html`.
- Produces: failing tests before local pages exist.

- [x] **Step 1: Write the failing test**
- [x] **Step 2: Run it and confirm it fails because pages are missing**

### Task 2: Generator and Pages

**Files:**
- Create: `scripts/generate-acne-rebuilt-pages.mjs`
- Create: five `acne/<slug>/index.html` pages
- Modify: `sitemap.xml`
- Create: `.seo-agent-workspace/v2/page-packets/mymirror-acne-rebuilt-guides/*`

**Interfaces:**
- Consumes: page data array and existing repository images.
- Produces: static HTML pages and traceable SEO artifacts.

- [x] **Step 1: Implement generator**
- [ ] **Step 2: Run generator**
- [ ] **Step 3: Run tests and static checks**

### Task 3: Publish

**Files:**
- Uses generated static site output.

**Interfaces:**
- Consumes: verified source tree.
- Produces: pushed `main`, production deployment, live URLs.

- [ ] **Step 1: Visual QA desktop and mobile**
- [ ] **Step 2: Commit**
- [ ] **Step 3: Push `HEAD:main`**
- [ ] **Step 4: Deploy production**
- [ ] **Step 5: Live-check all five URLs**
