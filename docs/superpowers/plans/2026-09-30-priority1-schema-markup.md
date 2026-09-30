# Implementation Plan - Priority 1: Schema Markup & E-E-A-T Injection on 43 Unstructured Pages

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement valid, comprehensive JSON-LD structured data (`MedicalWebPage`, `Physician` reviewer, `Organization` author, and `BreadcrumbList`) across all 43 live content pages currently lacking schema markup, establishing E-E-A-T entity signals and unlocking SERP breadcrumbs and medical knowledge graph trust.

**Architecture:** Python-based JSON-LD schema generation engine that extracts page titles, canonical URLs, meta descriptions, and featured images, synthesizes schema graphs conforming to Schema.org standards, and safely injects `<script type="application/ld+json">` into `<head>` before closing `</head>`.

**Tech Stack:** Python 3 (json, html.parser, re), Schema.org vocabulary (`MedicalWebPage`, `BreadcrumbList`, `Organization`, `WebSite`).

**Spec:** E-E-A-T & Google Search Console Diagnostic Report.

## Global Constraints
- Every injected schema MUST be valid JSON-LD parsing cleanly with `json.loads()`.
- Standardize on Schema.org `@graph` array format containing `MedicalWebPage` (or `WebSite`/`CollectionPage` where appropriate) and `BreadcrumbList`.
- Include `reviewedBy` pointing to `Dr. Lipy Mehta, Consultant Dermatologist` to cement YMYL medical review authority.
- `BreadcrumbList` must have valid positions (`1` for Home, `2` for Hub/Category, `3` for current page).
- Injected `<script>` must be cleanly placed before `</head>`.
- All modified files must be verified with automated JSON-LD syntax and structure tests before committing.

---

### Task 1: Write Schema Validation Test Suite

**Files:**
- Create: `scratch/test_schemas_43.py`

- [x] **Step 1: Write test script checking that all 43 pages contain valid JSON-LD schemas**
The test will verify:
1. Every target page has at least one `<script type="application/ld+json">` block.
2. The JSON inside is valid syntax (`json.loads` succeeds).
3. The schema includes `@context`: `https://schema.org`.
4. Contains either `MedicalWebPage`, `CollectionPage`, `WebSite`, or `WebPage`.
5. Contains `BreadcrumbList` with valid `itemListElement` array (except homepage which contains `WebSite`/`Organization`).
6. Contains `reviewedBy` (for clinical medical guides) or `Organization` (for root pages).

- [x] **Step 2: Run test to verify it fails currently**
Run: `python3 scratch/test_schemas_43.py`
Expected: FAIL (all 43 pages missing schema).

---

### Task 2: Implement Schema Generation & Injection Engine

**Files:**
- Create: `scratch/inject_schemas_43.py`
- Modify: 43 HTML files listed in `scratch/missing_schema_43.json`

- [x] **Step 1: Write the schema generator for Homepage (`index.html`)**
Generate `WebSite` and `Organization` schema.
- [x] **Step 2: Write the schema generator for Acne Hub (`acne/index.html`)**
Generate `CollectionPage` / `MedicalWebPage` and `BreadcrumbList` schema.
- [x] **Step 3: Write the schema generator for Clinical Acne Guides (37 files)**
Generate `MedicalWebPage` with `author`, `reviewedBy` (`Dr. Lipy Mehta`), `BreadcrumbList` (Home > Acne Hub > Page Title), and `image`.
- [x] **Step 4: Write the schema generator for Utility/Legal pages (`privacy/`, `terms/`, `scan/`)**
Generate `WebPage` and `BreadcrumbList`.
- [x] **Step 5: Run injection script across all 43 files**
Run: `python3 scratch/inject_schemas_43.py`

---

### Task 3: Validate, Verify, Commit & Deploy

**Files:**
- Test: `scratch/test_schemas_43.py`
- Deploy: `git push mymirror main`
- Indexing: `python3 submit_indexing.py`

- [x] **Step 1: Run schema validation test suite**
Run: `python3 scratch/test_schemas_43.py`
Expected: PASS (43/43 valid schemas).
- [x] **Step 2: Verify git diff and commit**
```bash
git add acne/ index.html privacy/ scan/ terms/ face-map*.html
git commit -m "feat(seo): inject comprehensive MedicalWebPage, BreadcrumbList, and E-E-A-T schemas on 43 core pages"
```
- [x] **Step 3: Push changes to main branch**
Run: `git push mymirror main`
- [x] **Step 4: Submit priority updated pages to Google Indexing API**
Run: `python3 submit_indexing.py`
- [x] **Step 5: Verify live edge response on Vercel**
Verify that live HTML served by Vercel edge contains valid JSON-LD schemas.
