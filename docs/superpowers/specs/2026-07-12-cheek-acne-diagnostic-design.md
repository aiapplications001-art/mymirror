# Design Specification: Cheek Acne Meaning & Triggers Guide

* **Date:** 2026-07-12
* **Target Site:** mymirror.fit
* **Target Market:** India
* **Target Audience:** Indian youth/commuters with persistent acne on one or both cheeks, seeking to understand whether their habits, environment, or diet are the primary cause.
* **Journey Stage:** `learning` (requires a soft CTA like a skin scan or routine recommendation)

---

## 1. Page Architecture & Routing
* **Target URL/Slug:** `/acne/cheek-acne-meaning/`
* **Canonical URL:** `https://mymirror.fit/acne/cheek-acne-meaning/`
* **Meta Title:** `Pimples on Cheeks Meaning: The Complete Cheek Acne Diagnostic Guide | MyMirror`
* **Meta Description:** `Free AI Skin Analysis. Experiencing breakouts on your cheeks? Perform a complete diagnostic self-audit to decode environmental, dental, and gut triggers in India.`
* **Internal Routing (Cross-linking):**
  * **Incoming links:** From `/acne/index.html`, `/acne/chin-acne-meaning/index.html` (under face mapping references), and `/acne/minimalist-acne-routine/index.html`.
  * **Outgoing links:** Links to `/acne/minimalist-acne-routine/` (for skincare steps), `/acne/pie-vs-pih-indian-skin/` (for dark marks), and the main Face Map tool (for diagnostic scans).

---

## 2. Visual Layout & Design System Integration
Adheres to the MyMirror Design System (Kantumruy Pro for headings, Plus Jakarta Sans for body text):
* **Header & Trust Bar:** Sticky header with logo and editorial trust bar attributing review to **Dr. Lipy Mehta, Board-Certified Dermatologist**.
* **Hero Section:** Premium **Dark Gradient Hero** (using `#120D0A` background and `#EC610E` brand highlights) to contrast with the page body.
* **Sticky Table of Contents (TOC):** A horizontal, mobile-scrollable `.toc-bar` that pins below the header when scrolling, providing quick jumps to the audit sections.
* **Two-Column Layout:** 
  * **Main Content Column (left, 720px max):** Uses Kantumruy Pro headings, Plus Jakarta Sans body, and warm brown `#1A1410` text.
  * **Sticky Sidebar (right, 300px):** Features the "Face AI Scan" quick widget and links to related articles.

---

## 3. Detailed Section-by-Section Plan
1. **Introduction & The Cheek Acne Conundrum:** Hooking readers on why cheek breakouts are uniquely frustrating (deep cysts that linger and leave deep dark marks/PIH on Indian skin tones).
2. **Skin Architecture: Why Cheek Skin is Different:** The thinness of cheek skin compared to the back or forehead, the presence of fine vellus hairs, and why it is highly vulnerable to permanent scarring (pitted scars).
3. **The Cheek Mapping Matrix (Upper vs. Lower):**
   * *Upper Cheek:* Cosmetic buildup, sunglasses, pillowcases, dirty makeup brushes, phone screens.
   * *Lower Cheek:* Helmet straps, jawline border friction, hair oil (champi) run-off.
4. **The "Big 5" Environmental & Cultural Triggers (Deep Dive):**
   * **Champi & Hair Oils:** Coconut, Amla, and mustard oil migration.
   * **The Commuter's Helmet Strap:** Dirt, sweat, and friction (Acne Mechanica).
   * **Phone Screen Biofilm:** The combination of makeup, sweat, and screen-heat.
   * **Monsoon & Humidity Traps:** Malassezia yeast overgrowth vs. bacterial acne.
   * **Pillowcase Friction:** Thread count, fabric type (cotton vs. silk), and bacterial accumulation.
5. **The Internal Connections: Science-Backing Traditional Map:**
   * **The Gut-Skin Connection:** Digestive sluggishness, food sensitivity, and insulin spikes from high-glycemic Indian diets (sugary chai, refined flour/maida, excessive dairy like paneer).
   * **The Dental Anchor:** How wisdom teeth inflammation or gum infections on one side can manifest as recurrent deep cheek breakouts on the same side.
6. **Habit Correction & Skincare Actives Pairing:**
   * Preventing Post-Inflammatory Hyperpigmentation (PIH) in Indian skin tones.
   * A diagnostic table pairing specific triggers to active ingredients (e.g., Salicylic Acid for screen-oil congestion, Benzoyl Peroxide for inflamed helmet-strap papules, Niacinamide/Azelaic Acid for fading the resulting brown marks).
7. **Skincare Product Sanity Check (Indian Market):**
   * Sanity-checking popular Indian OTC products for cheek acne, listing target concerns and who should avoid them (e.g., why heavy creams should be avoided on acne-prone cheeks).
8. **The 14-Day Cheek Acne Self-Audit Checklist:**
   * A practical, day-by-day or habit-by-habit checklist for phone cleaning, pillowcase swapping, champi washing, and diet tracking.
9. **Troubleshooting: "My Cheeks are Purging or Worsening":**
   * How to distinguish skin purging from an actual product breakout.
   * What to do if irritation, redness, or burning occurs.
10. **Clinical Escalation: When to See a Dermatologist:**
    * Identifying cystic nodules and when topical OTCs are not enough.
    * Preventing pitted rolling or ice-pick scars.
11. **Frequently Asked Questions (FAQs):**
    * Why is my acne only on my right cheek?
    * Does drinking water clear cheek acne?
    * Can I use toothpaste on a cheek pimple?
    * How long does it take for cheek acne marks to fade?

---

## 4. Custom Differentiated Components
1. **Upper vs. Lower Cheek Anatomy Visual:** A styled comparison visual block mapping causes to locations on the cheek.
2. **The "Big 5" Indian Triggers Bento Grid:** A 2-column grid highlighting the environmental and cultural triggers (Champi, helmet strap, polluted screen, dairy/chai, monsoon humidity) with hover translateY effects.
3. **The Cause-to-Active pairing matrix:** A structured, clean comparison table detailing which skin concern matches which active ingredient (e.g. Salicylic Acid for screen-oil congestion, Benzoyl Peroxide for inflamed helmet-strap papules).
4. **The 14-Day Self-Audit Checklist:** An interactive checklist block.
5. **Skincare Recommendation Sanity Panels:** Callout boxes detailing product cautions and recommendations.
6. **FAQ Accordion:** Interactive drop-downs utilizing bouncy spring transitions.

---

## 5. Verification & Launch Plan
* **Local QA Validation:** Verify readability, responsive layout (grid collapse on mobile < 900px), typography scales, and H-tag structure.
* **SEO Quality Gates:** Run the local replica validators (`validate-human`, `validate-gates`, `validate-depth`) and ensure the page depth and citation metrics pass.
* **Git Deploy:** Commit and push the final folder (`acne/cheek-acne-meaning/`) to `https://github.com/aiapplications001-art/mymirror`.
