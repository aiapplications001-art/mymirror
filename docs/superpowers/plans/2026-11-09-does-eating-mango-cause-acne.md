# Does Eating Mango Cause Acne Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a high-performing, dermatologist-verified SEO pillar guide for the high-demand query "Does Eating Mango Cause Acne?", fully adhering to Google E-E-A-T, Schema markup, MyMirror brand design, zero AI-slop editorial standards, and GEO citation readiness.

**Architecture:** Approach A ("Direct-Answer & Protocol-First Flow") presenting an immediate answer card, metabolic insulin/IGF-1 breakdown, the 3 hidden triggers (mango shakes, urushiol sap, phytic acid), an actionable 4-step preparation protocol, an embedded expert video, a 3-step summer acne recovery kit, an Indian summer fruit comparison matrix, and vernacular Hindi FAQs. The page uses semantic HTML5, responsive CSS matching MyMirror's design system (Kantumruy Pro + Plus Jakarta Sans + `#EC610E`), and a complete JSON-LD schema graph.

**Tech Stack:** Semantic HTML5, CSS3, Schema.org JSON-LD (MedicalWebPage, VideoObject, Product, BreadcrumbList, FAQPage), Python (image generation / optimization, schema validator, sitemap updater).

**Spec:** [docs/superpowers/specs/2026-11-09-does-eating-mango-cause-acne-design.md](file:///Users/tm030/docs/superpowers/specs/2026-11-09-does-eating-mango-cause-acne-design.md)

## Global Constraints

- Always include unique `og:image` and `twitter:image` meta tags in the HTML `<head>` section when creating new pages to ensure proper SEO indexing and prevent 'Crawled - currently not indexed' errors.
- Use MyMirror design system: Primary accent `#EC610E`, headings in `Kantumruy Pro`, body in `Plus Jakarta Sans`, 2-column desktop layout with sticky right sidebar.
- Zero AI slop: No generic filler phrases ("in today's fast-paced world", "delve into", "tapestry", "in conclusion"). Tone must be natural, human, conversational, and medically accurate.
- Schema markup must strictly validate without errors or missing fields using `validate_all_schemas.py`.
- Product packshots must use genuine authentic product photos already verified in the repository.

---

### Task 1: Scaffolding Directory & Image Asset Preparation

**Files:**
- Create: `acne/does-eating-mango-cause-acne/images/`
- Copy: 
  - `acne/cipla-saslic-ds-salicylic-acid-foaming-wash-india/images/prod-cipla-saslic-ds.jpg` -> `acne/does-eating-mango-cause-acne/images/prod-cipla-saslic-ds.jpg`
  - `acne/dry-skin-acne-treatment/images/prod-aziderm-10-gel.jpg` -> `acne/does-eating-mango-cause-acne/images/prod-aziderm-10-gel.jpg`
  - `acne/skin-microbiome-acne-gut-skin-axis-india/images/sebamed-clear-face-gel.jpg` -> `acne/does-eating-mango-cause-acne/images/prod-sebamed-clear-face-gel.jpg`
- Generate:
  - `acne/does-eating-mango-cause-acne/images/does-eating-mango-cause-acne-og.jpg` (1200x630)
  - `acne/does-eating-mango-cause-acne/images/does-eating-mango-cause-acne-twitter.jpg` (1200x675)
  - `acne/does-eating-mango-cause-acne/images/mango-acne-hero.jpg`
  - `acne/does-eating-mango-cause-acne/images/mango-insulin-sebum-cycle.jpg`
  - `acne/does-eating-mango-cause-acne/images/mango-soaking-protocol.jpg`

- [ ] **Step 1: Create image directory and copy existing product packshots**
- [ ] **Step 2: Generate visual infographics and hero banner via Python/Canvas rendering script**
- [ ] **Step 3: Generate unique OG and Twitter social cards (satisfying global indexing rule)**
- [ ] **Step 4: Verify all image files exist and are under 250KB each**

---

### Task 2: Page Packet Blueprint Generation

**Files:**
- Create: `.seo-agent-workspace/page-packets/acne/does-eating-mango-cause-acne/page-packet.md`
- Create: `.seo-agent-workspace/page-packets/acne/does-eating-mango-cause-acne/page-packet.json`

- [ ] **Step 1: Create structured page packet markdown with all pre-approved sections and sloptotal guardrails**
- [ ] **Step 2: Create machine-readable JSON mirror with entity mappings and schema payloads**

---

### Task 3: Assemble Production HTML Page (`index.html`)

**Files:**
- Create: `acne/does-eating-mango-cause-acne/index.html`

- [ ] **Step 1: Build semantic HTML5 head section with unique OG & Twitter meta tags, viewport, fonts, and canonical tag**
- [ ] **Step 2: Embed comprehensive Schema.org JSON-LD graph (`MedicalWebPage`, `VideoObject`, `Product` x3, `BreadcrumbList`, `FAQPage`)**
- [ ] **Step 3: Implement global header and navigation matching MyMirror design system**
- [ ] **Step 4: Implement Hero Section with Direct Answer Card & Medical Reviewer E-E-A-T credentials**
- [ ] **Step 5: Implement Section 2: "Garmi" Myth vs Real Science (Insulin/IGF-1/Sebum pathway) + Visual Diagram**
- [ ] **Step 6: Implement Section 3: The 3 Hidden Triggers (Mango Shake Trap, Urushiol Sap, Phytic Acid)**
- [ ] **Step 7: Implement Section 4: Dermatologist Safe Eating Protocol (4-Step Action Guide)**
- [ ] **Step 8: Implement Section 5: Video Breakdown (Celebre Aesthetics Dermatologist Explains Mango & Acne)**
- [ ] **Step 9: Implement Section 6: Summer Acne Recovery Kit (3 Product Cards with real packshots, MRP, ratings, and usage steps)**
- [ ] **Step 10: Implement Section 7: Summer Fruit Comparison Table (Mango vs Watermelon vs Papaya vs Guava vs Berries)**
- [ ] **Step 11: Implement Section 8: Vernacular & English FAQ Accordions**
- [ ] **Step 12: Implement Section 9: E-E-A-T Medical Review and Clinical Bibliography**
- [ ] **Step 13: Implement 2-Column Desktop Layout with Sticky Right Sidebar (TOC + Skin Analysis Widget)**
- [ ] **Step 14: Implement Mobile Sticky CTA Bar and Footer**

---

### Task 4: Sloptotal & Content Quality Verification

**Files:**
- Test: `acne/does-eating-mango-cause-acne/index.html`

- [ ] **Step 1: Run sloptotal linguistic checks against AI clichés, passive voice excess, and generic fluff**
- [ ] **Step 2: Validate tone is human, empathetic, conversational, and direct for Indian readers**
- [ ] **Step 3: Verify all medical claims are accompanied by genuine scientific citations and external DOIs**

---

### Task 5: Technical SEO, Schema Validation & Sitemap Integration

**Files:**
- Modify: `sitemap.xml`
- Test: `validate_all_schemas.py`
- Modify: `acne/index.html` (add contextual internal link to new guide)
- Modify: `acne/skin-microbiome-acne-gut-skin-axis-india/index.html` (add relevant cross-link)

- [ ] **Step 1: Run schema validation script on `acne/does-eating-mango-cause-acne/index.html`**
- [ ] **Step 2: Add `/acne/does-eating-mango-cause-acne/` to `sitemap.xml` with current date and 0.8 priority**
- [ ] **Step 3: Add contextual internal links from existing acne hub pages**
- [ ] **Step 4: Verify all internal links, image paths, and video embeds load cleanly**

---

### Task 6: Final Verification & Git Commit

**Files:**
- Review: `git status`, `git diff`

- [ ] **Step 1: Review git diff for clean code, no unwanted artifacts, and correct indentation**
- [ ] **Step 2: Commit all changes with clear descriptive commit message**
- [ ] **Step 3: Present completed guide and live URL to user**
