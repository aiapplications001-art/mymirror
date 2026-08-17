# Skin Analysis CSV Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add five full-depth CSV-derived MyMirror skin-analysis SEO pages and publishable packet artifacts.

**Architecture:** A small deterministic generator writes static HTML pages and matching SEO packet artifacts from a page data array plus page-specific deep-dive blocks. The validation test asserts that all new pages satisfy the MyMirror page contract and remain full-depth guides rather than thin starter pages.

**Tech Stack:** Static HTML, inline CSS matching existing MyMirror theme, Node.js validation tests, Vercel static deployment.

## Global Constraints

- Keep pages under `skin-analysis/<slug>/index.html`.
- Keep packet artifacts under `.seo-agent-workspace/v2/page-packets/mymirror-skin-analysis/<page-id>/`.
- Use only existing repository image assets.
- Keep the approved CTA text: "Start your free skin analysis now".
- Maintain one H1, canonical URL, meta description, hero image alt text, and JSON-LD per page.
- Maintain 1,500 to 2,200 main-content words per CSV-derived page.
- Render the deep sections: "How to read the visible pattern", "Common lookalikes to keep separate", "A safer routine plan", "Photo checklist before you scan", and "What to tell a dermatologist".
- Render exactly eight FAQs per CSV-derived page.

---

### Task 1: Validation Contract

**Files:**
- Modify: `scripts/validate-skin-analysis-pages.test.mjs`

**Interfaces:**
- Consumes: `validateCampaign(rootDirectory, slugs)`
- Produces: a failing test for SA6-SA10 before page generation.

- [x] **Step 1: Write the failing test**
- [x] **Step 2: Run test to verify it fails**

### Task 2: Generate Full-Depth HTML and Packet Artifacts

**Files:**
- Create: `scripts/generate-skin-analysis-csv-pages.mjs`
- Create: `skin-analysis/tanning-vs-pigmentation-face/index.html`
- Create: `skin-analysis/white-spots-on-face/index.html`
- Create: `skin-analysis/skin-rash-on-face/index.html`
- Create: `skin-analysis/milia-on-face/index.html`
- Create: `skin-analysis/pores-on-face/index.html`
- Create: `.seo-agent-workspace/v2/page-packets/mymirror-skin-analysis/SA6-SA10/*`
- Modify: `sitemap.xml`

**Interfaces:**
- Consumes: the page data array in the generator.
- Produces: static pages and traceable SEO artifacts.

- [x] **Step 1: Implement generator**
- [x] **Step 2: Run generator**
- [ ] **Step 3: Run tests to verify green**

### Task 3: Publish

**Files:**
- Uses existing static site and Vercel deployment setup.

**Interfaces:**
- Consumes: verified source tree.
- Produces: pushed `main` branch and live URLs.

- [ ] **Step 1: Run static validation and tests**
- [ ] **Step 2: Commit**
- [ ] **Step 3: Push to `main`**
- [ ] **Step 4: Deploy and verify live URLs**
