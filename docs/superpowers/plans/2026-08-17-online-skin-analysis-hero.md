# Online Skin Analysis Hero Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the online skin analysis page's first fold immediately communicate value, effort, privacy, and its single scan CTA.

**Architecture:** Keep the existing static page and CSS structure. Replace only the hero content and associated hero asset, and expand the static validator test to protect the new first-fold requirements.

**Tech Stack:** Static HTML, inline CSS, Node.js built-in test runner, generated PNG asset.

## Global Constraints

- Preserve the existing `/scan` CTA route and one-H1 page contract.
- State that the scan is not a diagnosis.
- Use MyMirror's existing warm neutral visual system.
- Create a versioned hero asset; do not overwrite the existing asset.

---

### Task 1: Protect the first-fold contract

**Files:**
- Modify: `scripts/validate-skin-analysis-pages.test.mjs`
- Test: `scripts/validate-skin-analysis-pages.test.mjs`

**Interfaces:**
- Consumes: rendered HTML at `skin-analysis/online-skin-analysis/index.html`
- Produces: a regression assertion for the `hero-proof` class and `online-skin-analysis-hero-v2.png` asset reference

- [ ] **Step 1: Write the failing test**

```js
test('SA1 hero makes the free, fast, private scan promise visible before scrolling', async () => {
  const html = await readFile('skin-analysis/online-skin-analysis/index.html', 'utf8');
  assert.match(html, /class="hero-proof"/);
  assert.match(html, /online-skin-analysis-hero-v2\.png/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/validate-skin-analysis-pages.test.mjs`

Expected: FAIL because the existing hero has neither the proof row nor the versioned asset reference.

- [ ] **Step 3: Implement the minimal page changes**

Replace the hero heading, supporting copy, metadata copy, and image reference. Add the `hero-proof` elements and responsive CSS that keeps them readable on a small screen.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/validate-skin-analysis-pages.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add skin-analysis/online-skin-analysis/index.html scripts/validate-skin-analysis-pages.test.mjs assets/skin-analysis/online-skin-analysis-hero-v2.png docs/superpowers
git commit -m "feat: improve skin analysis hero"
```
