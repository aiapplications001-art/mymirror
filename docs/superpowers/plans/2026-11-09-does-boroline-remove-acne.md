# Does Boroline Remove Acne Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a high-performing, dermatologist-verified SEO pillar guide for the query "Does Boroline Remove Acne?", fully adhering to Google E-E-A-T, Schema markup, MyMirror brand design, zero AI-slop editorial standards, and GEO citation readiness.

**Architecture:** Option 1 ("The Myth-Buster & The Picked-Pimple Paradox Flow") presenting a 10-second dermatologist verdict card, an ingredient breakdown (Zinc Oxide vs Occlusive Petrolatum/Wax base), the anaerobic *C. acnes* bacterial trap, the picked-pimple wound healing paradox, the safe vs unsafe decision rules, an embedded expert video (Dr. Aanchal Panth), a 3-step non-comedogenic alternative kit (Cipla Saslic DS, Micro Labs Aziderm 10, Sebamed Clear Face Gel), a high-density comparison matrix, and vernacular Hindi FAQs.

**Tech Stack:** Semantic HTML5, CSS3, Schema.org JSON-LD (MedicalWebPage, VideoObject, Product, BreadcrumbList, FAQPage), Python (Chrome headless image generation, schema validation, sitemap updating).

**Spec:** [docs/superpowers/specs/2026-11-09-does-boroline-remove-acne-design.md](file:///Users/tm030/docs/superpowers/specs/2026-11-09-does-boroline-remove-acne-design.md)

## Global Constraints

- Always include unique `og:image` and `twitter:image` meta tags in the HTML `<head>` section when creating new pages to ensure proper SEO indexing and prevent 'Crawled - currently not indexed' errors.
- Use MyMirror design system: Primary accent `#EC610E`, headings in `Kantumruy Pro`, body in `Plus Jakarta Sans`, 2-column desktop layout with sticky right sidebar.
- Zero AI slop: No generic filler phrases ("in today's fast-paced world", "delve into", "tapestry", "in conclusion"). Tone must be natural, human, conversational, and medically accurate.
- Schema markup must strictly validate without errors or missing fields using the verification script.
- Product packshots must use genuine authentic product photos already verified in the repository.

---

### Task 1: Scaffolding Directory & Image Asset Preparation

**Files:**
- Create: `acne/does-boroline-remove-acne/images/`
- Copy: 
  - `acne/cipla-saslic-ds-salicylic-acid-foaming-wash-india/images/prod-cipla-saslic-ds.jpg` -> `acne/does-boroline-remove-acne/images/prod-cipla-saslic-ds.jpg`
  - `acne/dry-skin-acne-treatment/images/prod-aziderm-10-gel.jpg` -> `acne/does-boroline-remove-acne/images/prod-aziderm-10-gel.jpg`
  - `acne/skin-microbiome-acne-gut-skin-axis-india/images/sebamed-clear-face-gel.jpg` -> `acne/does-boroline-remove-acne/images/prod-sebamed-clear-face-gel.jpg`
- Generate via Chrome Headless & PIL:
  - `acne/does-boroline-remove-acne/images/does-boroline-remove-acne-og.jpg` (1200x630)
  - `acne/does-boroline-remove-acne/images/does-boroline-remove-acne-twitter.jpg` (1200x675, distinct layout)
  - `acne/does-boroline-remove-acne/images/boroline-acne-hero.jpg` (1200x630)
  - `acne/does-boroline-remove-acne/images/boroline-pore-occlusion-mechanism.jpg` (1200x630)
  - `acne/does-boroline-remove-acne/images/boroline-safe-vs-unsafe-rules.jpg` (1200x630)
- Copy social cards to `assets/images/`:
  - `assets/images/does-boroline-remove-acne-og.jpg`
  - `assets/images/does-boroline-remove-acne-twitter.jpg`

- [ ] **Step 1: Create image directory and copy existing product packshots**
- [ ] **Step 2: Generate visual infographics and hero banner via Python rendering script**
- [ ] **Step 3: Generate unique OG and Twitter social cards (satisfying global indexing rule)**
- [ ] **Step 4: Verify all image files exist and are under 250KB each**

---

### Task 2: Page Packet Blueprint Generation

**Files:**
- Create: `.seo-agent-workspace/page-packets/acne/does-boroline-remove-acne/page-packet.md`
- Create: `.seo-agent-workspace/page-packets/acne/does-boroline-remove-acne/page-packet.json`

- [ ] **Step 1: Create structured page packet markdown with all pre-approved sections and sloptotal guardrails**
- [ ] **Step 2: Create machine-readable JSON mirror with entity mappings and schema payloads**

---

### Task 3: Assemble Production HTML Page (`index.html`)

**Files:**
- Create: `acne/does-boroline-remove-acne/index.html`

- [ ] **Step 1: Build semantic HTML5 head with unique OG & Twitter meta tags, viewport, fonts, and canonical tag**
- [ ] **Step 2: Embed comprehensive Schema.org JSON-LD graph (`MedicalWebPage`, `VideoObject`, `Product` x3, `BreadcrumbList`, `FAQPage`)**
- [ ] **Step 3: Implement global header and navigation matching MyMirror design system**
- [ ] **Step 4: Implement Hero Section with 10-Second Verdict Card & Medical Reviewer credentials**
- [ ] **Step 5: Implement Section 1: The Anatomy of Boroline (Zinc Oxide vs Occlusive Base)**
- [ ] **Step 6: Implement Section 2: Why Slathering Boroline on Acne Backfires (The Anaerobic Trap & Closed Comedones)**
- [ ] **Step 7: Implement Section 3: The Picked-Pimple Paradox (Why People Mistake Wound Healing for Acne Cure)**
- [ ] **Step 8: Implement Section 4: Safe vs Unsafe Uses (The Micro-Dab Rule on Dry Scabs Only)**
- [ ] **Step 9: Implement Section 5: Video Breakdown (Dr. Aanchal Panth on Boroline)**
- [ ] **Step 10: Implement Section 6: Non-Comedogenic Acne Treatment Routine (3 Products with real packshots, MRP, and usage)**
- [ ] **Step 11: Implement Section 7: Comparison Matrix (Boroline vs Salicylic Acid vs Benzoyl Peroxide vs Azelaic Acid)**
- [ ] **Step 12: Implement Section 8: Vernacular & English FAQ Accordions**
- [ ] **Step 13: Implement Section 9: E-E-A-T Medical Review and Clinical Bibliography**
- [ ] **Step 14: Implement 2-Column Desktop Layout with Sticky Right Sidebar and Mobile Sticky CTA Bar**

---

### Task 4: Sloptotal & Content Quality Verification

**Files:**
- Test: `acne/does-boroline-remove-acne/index.html`

- [ ] **Step 1: Run sloptotal linguistic checks against AI clichés and passive filler**
- [ ] **Step 2: Validate empathetic, conversational tone addressing Indian readers**
- [ ] **Step 3: Verify all medical claims are accompanied by genuine scientific citations and external DOIs**

---

### Task 5: Technical SEO, Schema Validation & Sitemap Integration

**Files:**
- Modify: `sitemap.xml`
- Test: Schema validator script
- Modify: `acne/index.html` (add contextual internal link)
- Modify: `acne/skin-microbiome-acne-gut-skin-axis-india/index.html` (add cross-link)

- [ ] **Step 1: Run schema validation script on `acne/does-boroline-remove-acne/index.html`**
- [ ] **Step 2: Add `/acne/does-boroline-remove-acne/` to `sitemap.xml` with current date and 0.8 priority**
- [ ] **Step 3: Add contextual internal links from existing acne hub pages**
- [ ] **Step 4: Verify all internal links, image paths, and video embeds load cleanly**

---

### Task 6: Final Verification & Git Commit

**Files:**
- Review: `git status`, `git diff`

- [ ] **Step 1: Review git diff for clean code, no unwanted artifacts, and correct indentation**
- [ ] **Step 2: Commit all changes with clear descriptive commit message**
- [ ] **Step 3: Push commit to `mymirror/main` and verify live HTTP 200**
