# Meta Descriptions Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul, optimize, and standardize meta descriptions across all MyMirror live content pages to achieve 100% SERP mobile compliance (135–155 characters), eliminate promotional boilerplate, fix broken/truncated tags, and maximize mobile CTR from Google Search.

**Architecture:** Python-based parsing and deterministic HTML update engine that safely replaces or inserts `<meta name="description">`, `<meta property="og:description">`, and `<meta name="twitter:description">` without corrupting DOM structure, ensuring unique `og:image` and `twitter:image` tags are intact on every touched page.

**Tech Stack:** Python 3 (html.parser, re), Git, Google Indexing API / Search Console Ping.

**Spec:** Strategic GSC Diagnostic & Meta Description Audit (`/Users/tm030/Downloads/mymirror.fit-Performance-on-Search-2026-09-30.xlsx`)

## Global Constraints
- Target character length: **135 to 155 characters** (strictly enforced to avoid mobile ellipsis truncation while filling SERP real estate).
- Zero boilerplate: Do NOT use `"Free AI Skin Analysis with 60-second results"` or generic promotional intro text.
- Front-load search queries, clinical actives, and Indian skin/climate context.
- Preserve or add unique `og:image` and `twitter:image` meta tags in `<head>` per `<RULE[user_global]>`.
- Standardize tag syntax to `<meta name="description" content="...">`.
- All modified files must be verified with automated syntax/attribute checks before commit.

---

### Task 1: Fix Tier 1 Urgent Pages (22 Boilerplate + 9 Broken/Truncated + 1 Missing + 3 Short = 35 Pages)

**Files:**
- Modify:
  - `acne/1-vs-2-percent-salicylic-acid/index.html`
  - `acne/acne-back-cure-cheat-sheet/index.html`
  - `acne/acne-pcos-treatment-indian-skin/index.html`
  - `acne/adapalene-benzoyl-peroxide-gel/index.html`
  - `acne/adult-acne-worsening/index.html`
  - `acne/anti-wrinkle-serum-usa/index.html`
  - `acne/back-acne-apple/index.html`
  - `acne/best-benzoyl-peroxide-face-wash-india/index.html`
  - `acne/best-salicylic-acid-products-india/index.html`
  - `acne/blackheads-whiteheads/index.html`
  - `acne/cheek-acne-meaning/index.html`
  - `acne/face-map/index.html`
  - `acne/forehead-acne-cheat-sheet/index.html`
  - `acne/forehead-acne/fast-treatment/index.html`
  - `acne/forehead-acne/home-remedies/index.html`
  - `acne/gut-microbiome-test-for-acne-india/index.html`
  - `acne/heavy-metal-test-for-acne-india/index.html`
  - `acne/hormonal-acne-vs-oily-skin/index.html`
  - `acne/index.html`
  - `acne/indian-acne-diet-guide/checklist.html`
  - `acne/inflammatory-markers-test-for-acne-india/index.html`
  - `acne/insulin-resistance-test-for-acne-india/index.html`
  - `acne/lipid-profile-test-for-acne-india/index.html`
  - `acne/liver-function-test-for-acne-india/index.html`
  - `acne/lower-face-treatment/index.html`
  - `acne/men-acne-faq/index.html`
  - `acne/pimple-on-forehead-hindi/index.html`
  - `acne/progesterone-estrogen-test-for-acne-india/index.html`
  - `acne/science-of-clear-skin/index.html`
  - `acne/skincare-layering-guide/index.html`
  - `acne/small-pimples-forehead-men/index.html`
  - `acne/vitamin-b12-acne-test-india/index.html`
  - `face-map-experiment-v1.html`
  - `face-map-experiment.html`
  - `scan/index.html`
- Test: `scratch/test_tier1_descriptions.py`

- [ ] **Step 1: Write validation test for Tier 1 updates**
Create a test script that validates every targeted Tier 1 file:
1. `name="description"` exists and content length is between 135 and 155 chars.
2. Description does not start with boilerplate or end in `...` or unclosed punctuation.
3. `og:image` and `twitter:image` are present and valid URLs.
4. HTML is valid (no unclosed tags introduced).

- [ ] **Step 2: Run test to verify it fails on existing files**
Run: `python3 scratch/test_tier1_descriptions.py`
Expected: FAIL (identifies boilerplate, broken lengths, missing tags).

- [ ] **Step 3: Implement Tier 1 replacements via dedicated update script**
Craft custom 135–155 character descriptions for all 35 pages and apply them cleanly using regex replacement for `<meta ...description...>`.

- [ ] **Step 4: Run test to verify it passes**
Run: `python3 scratch/test_tier1_descriptions.py`
Expected: PASS (all 35 files strictly 135–155 chars, 0 boilerplate, 0 unclosed tags, all OG tags intact).

- [ ] **Step 5: Commit Tier 1 batch**
```bash
git add acne/ face-map*.html scan/
git commit -m "fix(seo): overhaul 35 Tier 1 meta descriptions eliminating boilerplate and truncated snippets"
```

---

### Task 2: Optimize Tier 2 High-Impression GSC Ranking Pages

**Files:**
- Modify:
  - `acne/fungal-acne-safe-sunscreen-india/index.html`
  - `acne/adapalene-before-after-results/index.html`
  - `acne/mixing-salicylic-acid-with-retinol-adapalene/index.html`
  - `acne/salicylic-acid-face-wash-vs-serum/index.html`
  - `acne/tretinoin-not-working-reasons-india/index.html`
  - `acne/acne-marks-vs-acne-scars-difference-india/index.html`
  - `acne/best-fungal-acne-safe-moisturizer-india/index.html`
  - `acne/acnestar-soap-vs-perobar-soap-india/index.html`
  - `acne/best-non-comedogenic-moisturizer-india/index.html`
  - `acne/nodule-cyst/index.html`
  - `acne/salicylic-acid-cleanser-for-acne-india/index.html`
  - `acne/iron-deficiency-test-for-acne-india/index.html`
  - `acne/fungal-acne-safe-moisturizers/index.html`
  - `acne/gym-body-acne-post-workout-routine/index.html`
  - `acne/non-comedogenic-sunscreen-acne-prone-skin-india/index.html`
  - `acne/chemical-vs-mineral-sunscreen-for-acne-prone-indian-skin/index.html`
  - `acne/bacne-body-acne-treatment-routine-india/index.html`
- Test: `scratch/test_tier2_descriptions.py`

- [ ] **Step 1: Write validation test for Tier 2 updates**
Create a test script verifying that all 17 top GSC pages have descriptions between 135 and 155 chars, include target keywords, and have intact OG tags.

- [ ] **Step 2: Run test to verify it fails on existing files**
Run: `python3 scratch/test_tier2_descriptions.py`
Expected: FAIL (flags descriptions >160 chars and truncated endings).

- [ ] **Step 3: Implement Tier 2 high-CTR descriptions**
Apply clinical, query-focused descriptions tailored for top search queries.

- [ ] **Step 4: Run test to verify it passes**
Run: `python3 scratch/test_tier2_descriptions.py`
Expected: PASS.

- [ ] **Step 5: Commit Tier 2 batch**
```bash
git add acne/
git commit -m "feat(seo): optimize meta descriptions for top 17 high-impression GSC pages to 135-155 chars"
```

---

### Task 3: Tighten and Format Remaining Overly Long Descriptions (>165 chars)

**Files:**
- Modify: Remaining live content pages in `acne/` and other directories where length > 165 characters.
- Test: `scratch/test_all_live_descriptions.py`

- [ ] **Step 1: Write global validation script**
Audit every live tracked HTML content page for:
- Length: between 120 and 160 characters (ideal 135–155).
- No boilerplate prefixes.
- No trailing ellipsis or unclosed sentences.
- Valid OG/Twitter images.

- [ ] **Step 2: Systematically trim and rewrite long descriptions**
Use intelligent sentence-boundary truncation and keyword-preserving condensation to bring all >165 char descriptions into the 135–155 character range.

- [ ] **Step 3: Run global validation script**
Run: `python3 scratch/test_all_live_descriptions.py`
Expected: PASS (0 broken, 0 boilerplate, 0 truncated, 100% within SERP bounds).

- [ ] **Step 4: Commit global optimization**
```bash
git add acne/
git commit -m "fix(seo): condense and standardize remaining long meta descriptions for mobile SERP CTR"
```

---

### Task 4: Deployment & Indexing Submission

**Files:**
- Deploy to remote: `git push mymirror main`
- Run indexing: `python3 submit_indexing.py`

- [ ] **Step 1: Push changes to main branch**
Run: `git push mymirror main`

- [ ] **Step 2: Submit updated priority URLs to Google Indexing API**
Run: `python3 submit_indexing.py` with the updated URLs to expedite recrawl.

- [ ] **Step 3: Verify live edge response**
Run curl checks against 5 sample URLs to confirm Vercel deployed the new meta description tags.
