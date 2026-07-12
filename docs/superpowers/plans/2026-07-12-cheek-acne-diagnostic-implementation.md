# Cheek Acne Meaning & Triggers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create, validate, and deploy a comprehensive, evidence-backed cheek acne diagnostic page (`/acne/cheek-acne-meaning/`) for mymirror.fit.

**Architecture:** We will use the local replica CLI (`seo-page-creator-agent`) to initialize the workspace, and then construct the Step 0A through Step 8 contracts. We will perform local-market research, draft final copy following the design system, run the validation gates, build the final page packet, and push the folder to the GitHub repository.

**Tech Stack:** Node.js CLI, HTML5, Vanilla CSS, Git, Markdown.

## Global Constraints
- Target market: India.
- Headings: Title Case (never ALL CAPS).
- Font system: Kantumruy Pro (headings), Plus Jakarta Sans (body).
- Text color: `#1A1410` (no pure `#000000` black).
- Maximum content width: 720px for articles, 1100px for sections.
- Primary colors: `--color-brand: #EC610E`, `--color-bg-primary: #FFFFFF`, `--color-bg-secondary: #F9F6F3`.
- No placeholders, "TBD", or "TODO" in any final files.
- Deliver final copy that fits Dr. Lipy Mehta's reviewer profile.

---

### Task 1: Step 0A Foundation
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/foundation.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/foundation.md`

- [ ] **Step 1.1: Define topic boundary and business relevance**
  Write topic boundary (Cheek Acne), included subareas (phone friction, champi hair oil, helmet straps, diet/gut connections, dental issues), and excluded subareas (forehead/chin acne, clinical lasers, prescription tretinoin details). Define business relevance as `supported` by MyMirror's diagnostic positioning.
- [ ] **Step 1.2: Gather 8 natural user phrases for problem-language**
  Collect 8 real Indian user query patterns or forum questions (e.g. "acne only on left cheek", "pimples from helmet strap", "champi hair oil pimples side of face", "cheek pimples dairy diet india"). Register sources as `audience_language` (Reddit/Quora) or `search_surface` (PAA).
- [ ] **Step 1.3: Save foundation files and verify pass verdict**
  Save files and ensure `foundationVerdict` is set to `pass`.

---

### Task 2: Step 0B Page Scope Contract
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/scope-contract.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/scope-contract.md`

- [ ] **Step 2.1: Freeze exact keywords and supporting query cluster**
  Target keyword: `pimples on cheeks meaning`. Query cluster: `cheek acne causes`, `acne on cheeks triggers`, `pimple on one cheek meaning`, `how to stop cheek acne india`.
- [ ] **Step 2.2: Define scope inclusions and exclusions**
  Add 8 items to `mustCover` (champi, helmet, phone screens, maida/dairy, wisdom teeth, PIH markings, non-comedogenic care, diagnostic questions). Add 4 items to `mustNotCover` with appropriate routing.
- [ ] **Step 2.3: Generate contractHash and save files**
  Generate a unique SHA-256 hash representing this scope configuration. Save JSON and MD files.

---

### Task 3: Step 1 Page Job Contract
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/page-job.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/page-job.md`

- [ ] **Step 3.1: Define audience segment and user task**
  Audience segment: young Indian commuters/lifestyle users. User task: self-audit daily habits to identify cheek breakout triggers. Primary help format: `diagnostic_guide`.
- [ ] **Step 3.2: Set outcome, business role, and risk layers**
  User outcome: identify cheek acne cause and take habit-correcting actions. Primary business role: educational authority. Risk level: `low_to_medium` (no diagnostic prescription claims, medical disclaimer mandatory).
- [ ] **Step 3.3: Generate pageJobHash and save files**
  Generate SHA-256 hash. Save JSON and MD files.

---

### Task 4: Step 2 Search Intent Contract
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/search-intent.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/search-intent.md`

- [ ] **Step 4.1: Classify dominant broad and deeper intents**
  Dominant broad intent: `informational`. Primary deeper intent: `cause_meaning_diagnostic`. Depth level: `comprehensive`.
- [ ] **Step 4.2: Perform light SERP validation and set satisfaction condition**
  Set `mustInclude` (causes, map, Indian context, hygiene fixes, doctor checklist).
- [ ] **Step 4.3: Generate searchIntentHash and save files**
  Generate SHA-256 hash. Save JSON and MD files.

---

### Task 5: Step 3 Page Format Contract
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/page-format.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/page-format.md`

- [ ] **Step 5.1: Define primary page type and internal content format**
  Primary page type: `guide_blog`. Primary internal content format: `diagnostic_checklist`.
- [ ] **Step 5.2: Set format boundaries and supporting elements**
  Add supporting elements: bento grid, trigger table, habit checklist, FAQ accordion.
- [ ] **Step 5.3: Generate pageFormatHash and save files**
  Generate SHA-256 hash. Save JSON and MD.

---

### Task 6: Step 4 Next Action Contract
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/next-action.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/next-action.md`

- [ ] **Step 6.1: Set journey stage and CTA strength**
  User journey stage: `learning`. CTA strength: `soft`.
- [ ] **Step 6.2: Define primary and secondary next actions**
  Primary next action: Face AI skin analysis. Secondary next action: Read minimalist acne routine guide.
- [ ] **Step 6.3: Generate nextActionHash and save files**
  Generate SHA-256 hash. Save JSON and MD.

---

### Task 7: Step 5 SERP Competitor Analysis
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/serp-competitor-analysis.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/serp-competitor-analysis.md`

- [ ] **Step 7.1: Perform competitive analysis of top 3 Indian SERP competitors**
  Analyze competitors (e.g. SkinKraft, BeBeautiful, generic medical sites) for cheek acne triggers. Record their strengths/weaknesses.
- [ ] **Step 7.2: Define minimum bar and opportunity gaps**
  Minimum bar: cover phone hygiene and dirty pillowcases. Opportunity gaps: cover Champi oil runoff, helmet straps, and dental health connections.
- [ ] **Step 7.3: Generate serpCompetitorHash and save files**
  Generate SHA-256 hash. Save files.

---

### Task 8: Step 6 Topic Research Bank
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/topic-research-bank.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/topic-research-bank.md`

- [ ] **Step 8.1: Gather evidence-backed research sources**
  Register 10 credible sources (dermatology articles, clinical journals, Indian market reviews, community forums like Reddit `r/IndianSkincareAddicts`).
- [ ] **Step 8.2: Extract 35+ facts and organize by research categories**
  Extract facts about friction, Malassezia yeast, Maida/Dairy, dental wisdom teeth swelling, and PIH marks.
- [ ] **Step 8.3: Generate topicResearchHash and save files**
  Generate SHA-256 hash. Save files.

---

### Task 9: Step 7 Unique Angle and Information Gain
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/unique-angle-information-gain.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/unique-angle-information-gain.md`

- [ ] **Step 9.1: Define primary and supporting improvement angles**
  Primary angle: India-specific physical friction (helmets, champi oil) combined with internal (dental wisdom teeth, maida diet) diagnostic mapping.
- [ ] **Step 9.2: Detail the required superiority assets**
  Primary asset: Upper vs. Lower Cheek Anatomy Visual. Supporting asset: "Big 5" Indian Triggers Bento Grid.
- [ ] **Step 9.3: Generate uniqueAngleHash and save files**
  Generate SHA-256 hash. Save files.

---

### Task 10: Step 8 SEO Content Brief
**Files:**
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/seo-content-brief.json`
- Create: `.seo-agent-workspace/clusters/cheek-acne/prewriting/P1/seo-content-brief.md`

- [ ] **Step 10.1: Define word-count floor and writer instructions**
  Set word-count floor to 1800 words. Setup instruction registry mapping all must-carry-forward requirements.
- [ ] **Step 10.2: Configure brand voice and localized market requirements**
  Set voice: authoritative, category manager with empathy. localization: Indian climates, local food terms, helmet rules.
- [ ] **Step 10.3: Generate contentBriefHash and save files**
  Generate SHA-256 hash. Save JSON and MD. Write entry to `.seo-agent-workspace/batch-runs/run-03/run-ledger.jsonl`.

---

### Task 11: Prepare Page Workspace and V2 Research Ledger
**Files:**
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/...` (via CLI)
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/serp-research-ledger.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/social-video-research.json`

- [ ] **Step 11.1: Run CLI prepare-page command**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" v2 prepare-page --cluster cheek-acne --page-id P1 --page-type guide_blog`
- [ ] **Step 11.2: Populate SERP Research Ledger**
  Fill the SERP research ledger with top 10 webpage extractions (content summaries, ranking titles).
- [ ] **Step 11.3: Populate Social/Video Research**
  Review at least 7 social/video assets (creator tips, community obections). Save findings.

---

### Task 12: Pre-Draft Quality Brief & Structure Plan
**Files:**
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/audience-definition.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/narrative-brief.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/human-editorial-brief.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/claim-first-section-plan.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/pre-draft-quality-brief.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/depth-score.json`

- [ ] **Step 12.1: Fill audience, narrative, and human editorial briefs**
  Define target cohort, tone (empathetic expert), examples (champi oil wash, helmet scrub), and human devices (analogies, direct address).
- [ ] **Step 12.2: Establish claim-first section plan**
  Map out 11 distinct section IDs. Match each section to its claim, reader question, evidence needed, and transition purpose.
- [ ] **Step 12.3: Compile Pre-Draft Quality Brief and depth-score**
  Verify 6 sub-intents, 4 diagnostic items, 4 Indian angles, standout elements, and troubleshooting details. Record depth-score >= 85.

---

### Task 13: Draft Final Copy & Superiority Component
**Files:**
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/final-copy-draft.json`
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/citation-set.json`

- [ ] **Step 13.1: Write final copy draft section prose**
  Draft complete HTML/Markdown content for all 11 sections. Ensure style tokens like Kantumruy Pro titles and Plus Jakarta Sans are respected.
- [ ] **Step 13.2: Implement the Upper vs. Lower Cheek Anatomy Visual**
  Embed a clean, styled HTML/CSS layout mapping triggers to upper vs. lower cheeks.
- [ ] **Step 13.3: Implement the "Big 5" Bento Grid and Cause-to-Active Matrix**
  Embed the bento grid with `.bento-card` and the comparison table. Save citations to `citation-set.json`.

---

### Task 14: Run Local Validators & QA Report
**Files:**
- Modify: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/qa-report.json`

- [ ] **Step 14.1: Run CLI validate-human validator**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" v2 validate-human --cluster cheek-acne --page-id P1`
- [ ] **Step 14.2: Run CLI validate-gates validator**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" v2 validate-gates --cluster cheek-acne --page-id P1`
- [ ] **Step 14.3: Run CLI validate-depth validator**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" v2 validate-depth --cluster cheek-acne --page-id P1`
- [ ] **Step 14.4: Expand final copy**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" final-copy expand --cluster cheek-acne --page-id P1`

---

### Task 15: Image Manifest & Asset Generation
**Files:**
- Create: `.seo-agent-workspace/v2/page-packets/cheek-acne/P1/image-manifest.json`
- Create: `assets/images/cheek-acne-hero.jpg` (via generate_image)
- Create: `assets/images/cheek-acne-og.jpg` (via generate_image)

- [ ] **Step 15.1: Run CLI images plan command**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" images plan --cluster cheek-acne --page-id P1`
- [ ] **Step 15.2: Generate hero image asset**
  Generate `cheek-acne-hero.jpg` using the `generate_image` tool. Ensure correct dimensions and styling.
- [ ] **Step 15.3: Generate OG image asset**
  Generate `cheek-acne-og.jpg` using the `generate_image` tool. Save to `/Users/tm030/assets/images/`.

---

### Task 16: Build Page Packet & Deploy
**Files:**
- Create: `acne/cheek-acne-meaning/index.html`
- Modify: `acne/index.html`, `acne/chin-acne-meaning/index.html`, `acne/minimalist-acne-routine/index.html`
- Modify: `sitemap.xml`

- [ ] **Step 16.1: Build page-packet using CLI**
  Run: `node "/Users/tm030/Documents/Random Thoughts/replicas/seo-page-creator-agent/dist/cli/index.js" page-packet build --cluster cheek-acne --page-id P1`
- [ ] **Step 16.2: Copy output HTML to workspace location**
  Copy the compiled `index.html` from the page packet to `/Users/tm030/acne/cheek-acne-meaning/index.html`. Add local assets.
- [ ] **Step 16.3: Implement cross-links and update sitemap**
  Edit other pages to link to this page. Update sitemap.xml.
- [ ] **Step 16.4: Commit and push to Git**
  Run: `git add acne/ sitemap.xml assets/ && git commit -m "feat(acne): add cheek acne diagnostic guide" && git push mymirror main`
- [ ] **Step 16.5: Verify HTTP status code**
  Verify sitemap and structure are correct. Clear the workspace page lock.
