# Batch-Compress Oversized PNG Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Compress all 57 oversized PNG assets (>1MB each, total 213MB) into lightweight WebP images (<150KB each, total <8MB), optimize original PNG fallbacks in-place, and update all HTML image references to achieve instant mobile LCP (<1.2s) and 100% Core Web Vitals compliance.

**Architecture:** Python PIL/Pillow batch conversion pipeline with Lanczos high-DPI downscaling (max width 1400px), intelligent alpha detection, WebP quality 82 compression, in-place PNG optimization, and deterministic HTML `<img>` src updating.

**Tech Stack:** Python 3 (PIL/Pillow), Git, Vercel Edge.

**Spec:** Core Web Vitals Mobile LCP Diagnostic (`/Users/tm030/Downloads/mymirror.fit-Performance-on-Search-2026-09-30.xlsx`)

## Global Constraints
- Target WebP size: **< 200KB per image** (ideal 40KB–120KB) with zero perceptible visual degradation.
- Max width: **1400px** (crisp 3x retina coverage for mobile, 2x for desktop).
- Quality: **WebP quality 82, method 6** for optimal rate-distortion efficiency.
- Dual-format safety: Keep optimized `.png` in-place for `og:image` and legacy crawler compatibility (WhatsApp/FB link previewers require JPG/PNG < 300KB).
- Update all `<img>` tags, CSS backgrounds, and manifest references in HTML to point to the new `.webp` assets.
- Preserve unique `og:image` and `twitter:image` per `<RULE[user_global]>`.

---

### Task 1: Write Verification Test & Inventory Contract

**Files:**
- Create: `scratch/test_image_compression.py`

- [ ] **Step 1: Write test script checking WebP existence, sizes, and HTML references**
- [ ] **Step 2: Run test to verify it fails currently**
Run: `python3 scratch/test_image_compression.py`
Expected: FAIL (missing WebP files, large PNGs still referenced in HTML).

---

### Task 2: Implement Batch WebP Conversion & PNG In-Place Optimization

**Files:**
- Create: `scratch/batch_convert_images.py`
- Modify: 57 tracked PNG files (generate `.webp` alongside, optimize `.png` in-place)

- [ ] **Step 1: Write batch conversion script with PIL/Pillow**
- [ ] **Step 2: Run batch conversion across all 57 large images**
- [ ] **Step 3: Verify converted image files and inspect total byte savings**

---

### Task 3: Update HTML & CSS Image References to WebP

**Files:**
- Create: `scratch/update_html_image_refs.py`
- Modify: All HTML files currently referencing the oversized PNGs in `<img src="...">` and CSS backgrounds

- [ ] **Step 1: Write reference updater script**
- [ ] **Step 2: Run updater script across all HTML and CSS files**
- [ ] **Step 3: Run verification test to confirm all references point to WebP**
Run: `python3 scratch/test_image_compression.py`
Expected: PASS.

---

### Task 4: Commit, Deploy & Live Verification

**Files:**
- Deploy to remote: `git push mymirror main`

- [ ] **Step 1: Stage and commit converted WebP assets and HTML updates**
```bash
git add assets/ acne/ skin-analysis/ face-1.*
git commit -m "perf(images): convert 57 oversized PNGs to WebP, slashing payload from 213MB to <8MB for mobile LCP"
```
- [ ] **Step 2: Push changes to main branch**
Run: `git push mymirror main`
- [ ] **Step 3: Verify live edge response on Vercel**
Test HTTP 200, Content-Type `image/webp`, and Content-Length on sample URLs.
