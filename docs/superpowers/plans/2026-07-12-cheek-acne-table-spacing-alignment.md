# Cheek Acne Table Spacing & Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adjust CSS padding, widths, and alignments for the Skincare Actives Matrix table in both P1 and P2 pages to optimize visual density and alignment balance on both desktop and mobile viewports.

**Architecture:** Update inline CSS stylesheet definitions inside the `<style>` block of both HTML pages, refining padding sizes and applying `text-align: center;` and `width: 150px;` constraints to first columns on desktop, and `padding: 10px 0;` for table cells on mobile.

**Tech Stack:** HTML5, CSS3, Vanilla CSS Grid/Flexbox styling rules.

## Global Constraints
- Do not use TailwindCSS. Use pure Vanilla CSS custom variables and rules.
- Maintain SEO guidelines: title, meta descriptions, unique IDs, and correct header hierachy.
- Ensure high contrast ratios are preserved for accessibility.

---

### Task 1: Update Table CSS Styles in P1 Category Page

**Files:**
- Modify: `acne/cheek-acne/index.html:103-218`

**Interfaces:**
- Consumes: Existing table markup inside `acne/cheek-acne/index.html`
- Produces: Updated styles for `.acne-table th`, `.acne-table td`, `.acne-table td:first-child`, `.acne-table th:first-child` inside desktop media queries, and `.acne-table td` inside mobile media queries.

- [ ] **Step 1: Modify table and cell styles on P1 category page**

Edit `/Users/tm030/acne/cheek-acne/index.html` as follows:

```diff
     .acne-table th {
       background: #2D231E; /* Rich deep charcoal-brown for high-contrast header */
       font-family: 'Kantumruy Pro', serif;
       font-weight: 700;
       color: #FFFFFF; /* Pure white text on dark background */
-      padding: 16px 20px; /* Aligned header padding */
+      padding: 14px 20px; /* Aligned header padding */
       border-bottom: 2px solid #1A1410;
       text-transform: uppercase;
       font-size: 11.5px;
       letter-spacing: 0.1em;
       vertical-align: top;
     }
     .acne-table td {
-      padding: 18px 20px; /* Generous breathing room but compact height */
+      padding: 16px 20px; /* Generous breathing room but compact height */
       border-bottom: 1px solid #E8DDD5;
       vertical-align: top; /* Top-aligned for natural visual reading axis */
       color: #1A1410;
       line-height: 1.6;
     }
```

And in the desktop section (`@media (min-width: 641px)`):

```diff
     /* Desktop-only First Column structure */
     @media (min-width: 641px) {
       .acne-table td {
         background: #FFFFFF;
       }
       .acne-table td:first-child {
         font-weight: 700;
         color: #2D231E;
         white-space: nowrap;
-        width: 160px;
+        width: 150px;
         background: #FDFCFB !important; /* Forces vertical accent block to display correctly */
         border-right: 1px solid #E8DDD5;
-        text-align: left; /* Left-aligned for clean readability */
+        text-align: center; /* Center-aligned for balanced symmetry */
       }
       .acne-table th:first-child {
         border-right: 1px solid #3D312A;
-        width: 160px;
-        text-align: left; /* Left-aligned header */
+        width: 150px;
+        text-align: center; /* Center-aligned header */
       }
     }
```

And in the mobile section (`@media (max-width: 640px)`):

```diff
       .acne-table td {
         display: flex;
         flex-direction: column;
         gap: 6px;
-        padding: 6px 0; /* Tight mobile padding to avoid excessive gaps */
+        padding: 10px 0; /* Adjusted mobile padding for better spacing balance */
         border-bottom: 1px solid #F2EDE8;
         text-align: left;
       }
```

- [ ] **Step 2: Verify desktop and mobile style overrides in cheek-acne page**
Validate that elements render with the correct spacing by running a simple validation or checks.

- [ ] **Step 3: Commit updates for Task 1**

```bash
git add acne/cheek-acne/index.html
git commit -m "style(cheek-acne): adjust table spacing and alignment on category page"
```

---

### Task 2: Update Table CSS Styles in P2 Guide Page

**Files:**
- Modify: `acne/cheek-acne-meaning/index.html:103-218`

**Interfaces:**
- Consumes: Existing table markup inside `acne/cheek-acne-meaning/index.html`
- Produces: Updated styles for `.acne-table th`, `.acne-table td`, `.acne-table td:first-child`, `.acne-table th:first-child` inside desktop media queries, and `.acne-table td` inside mobile media queries.

- [ ] **Step 1: Modify table and cell styles on P2 guide page**

Edit `/Users/tm030/acne/cheek-acne-meaning/index.html` as follows:

```diff
     .acne-table th {
       background: #2D231E; /* Rich deep charcoal-brown for high-contrast header */
       font-family: 'Kantumruy Pro', serif;
       font-weight: 700;
       color: #FFFFFF; /* Pure white text on dark background */
-      padding: 16px 20px; /* Aligned header padding */
+      padding: 14px 20px; /* Aligned header padding */
       border-bottom: 2px solid #1A1410;
       text-transform: uppercase;
       font-size: 11.5px;
       letter-spacing: 0.1em;
       vertical-align: top;
     }
     .acne-table td {
-      padding: 18px 20px; /* Generous breathing room but compact height */
+      padding: 16px 20px; /* Generous breathing room but compact height */
       border-bottom: 1px solid #E8DDD5;
       vertical-align: top; /* Top-aligned for natural visual reading axis */
       color: #1A1410;
       line-height: 1.6;
     }
```

And in the desktop section (`@media (min-width: 641px)`):

```diff
     /* Desktop-only First Column structure */
     @media (min-width: 641px) {
       .acne-table td {
         background: #FFFFFF;
       }
       .acne-table td:first-child {
         font-weight: 700;
         color: #2D231E;
         white-space: nowrap;
-        width: 160px;
+        width: 150px;
         background: #FDFCFB !important; /* Forces vertical accent block to display correctly */
         border-right: 1px solid #E8DDD5;
-        text-align: left; /* Left-aligned for clean readability */
+        text-align: center; /* Center-aligned for balanced symmetry */
       }
       .acne-table th:first-child {
         border-right: 1px solid #3D312A;
-        width: 160px;
-        text-align: left; /* Left-aligned header */
+        width: 150px;
+        text-align: center; /* Center-aligned header */
       }
     }
```

And in the mobile section (`@media (max-width: 640px)`):

```diff
       .acne-table td {
         display: flex;
         flex-direction: column;
         gap: 6px;
-        padding: 6px 0; /* Tight mobile padding to avoid excessive gaps */
+        padding: 10px 0; /* Adjusted mobile padding for better spacing balance */
         border-bottom: 1px solid #F2EDE8;
         text-align: left;
       }
```

- [ ] **Step 2: Verify desktop and mobile style overrides in cheek-acne-meaning page**
Validate that elements render with the correct spacing.

- [ ] **Step 3: Commit updates for Task 2**

```bash
git add acne/cheek-acne-meaning/index.html
git commit -m "style(cheek-acne-meaning): adjust table spacing and alignment on guide page"
```
