# Cheek Acne Table Spacing & Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adjust CSS padding, widths, alignments, and apply global inheritance resets for the Skincare Actives Matrix table in both P1 and P2 pages to optimize visual density and alignment balance on both desktop and mobile viewports, stripping any unwanted legacy styles.

**Architecture:** Update inline CSS stylesheet definitions inside the `<style>` block of both HTML pages, refining padding sizes, applying `text-align: center;` and `width: 150px;` constraints to first columns on desktop, resetting border-radius and row margins/shadows using `!important`, and setting `padding: 10px 0;` for table cells on mobile.

**Tech Stack:** HTML5, CSS3, Vanilla CSS.

## Global Constraints
- Do not use TailwindCSS. Use pure Vanilla CSS custom variables and rules.
- Maintain SEO guidelines: title, meta descriptions, unique IDs, and correct header hierachy.
- Ensure high contrast ratios are preserved for accessibility.

---

### Task 1: Update Table CSS Styles in P1 Category Page

**Files:**
- Modify: `acne/cheek-acne/index.html:86-246`

**Interfaces:**
- Consumes: Existing table markup inside `acne/cheek-acne/index.html`
- Produces: Updated styles for `.acne-table`, `.acne-table tr`, `.acne-table th`, `.acne-table td`, `.acne-table td:first-child`, `.acne-table th:first-child` inside desktop media queries, and `.acne-table td` inside mobile media queries.

- [ ] **Step 1: Modify table, cell, and row styles on P1 category page**

Edit `/Users/tm030/acne/cheek-acne/index.html` to update the table styles block:

```css
    /* ── HIGH-CONTRAST PREMIUM TABLE STYLES ── */
    .acne-table-wrapper {
      margin: 2.5rem 0;
      border: 2px solid #D9C8BC; /* Darker border for structure */
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 24px rgba(26, 20, 16, 0.05);
      background: #FFFFFF; /* Pure white background for maximum contrast */
    }
    .acne-table {
      width: 100% !important;
      margin: 0 !important;
      border-collapse: collapse !important; /* Forces cells to merge flush against each other */
      border-spacing: 0 !important;
      font-size: 14px;
      color: #1A1410; /* Max contrast dark charcoal */
      text-align: left;
    }
    .acne-table tr {
      background: transparent !important;
      box-shadow: none !important;
      transform: none !important;
    }
    .acne-table th {
      background: #2D231E; /* Rich deep charcoal-brown for high-contrast header */
      font-family: 'Kantumruy Pro', serif;
      font-weight: 700;
      color: #FFFFFF; /* Pure white text on dark background */
      padding: 14px 20px; /* Aligned header padding */
      border-bottom: 2px solid #1A1410;
      text-transform: uppercase;
      font-size: 11.5px;
      letter-spacing: 0.1em;
      vertical-align: top;
      border-radius: 0 !important;
    }
    .acne-table td {
      padding: 16px 20px; /* Generous breathing room but compact height */
      border-bottom: 1px solid #E8DDD5;
      vertical-align: top; /* Top-aligned for natural visual reading axis */
      color: #1A1410;
      line-height: 1.6;
      border-radius: 0 !important;
    }
    .acne-table tr:last-child td {
      border-bottom: none;
    }
    .acne-table tr:hover td {
      background-color: #FDFCFB; /* Very subtle warm hover */
    }
    
    .acne-table td strong {
      color: inherit;
    }
    
    /* Desktop-only First Column structure */
    @media (min-width: 641px) {
      .acne-table td {
        background: #FFFFFF;
      }
      .acne-table td:first-child {
        font-weight: 700;
        color: #2D231E;
        white-space: nowrap;
        width: 150px;
        background: #FDFCFB !important; /* Forces vertical accent block to display correctly */
        border-right: 1px solid #E8DDD5;
        text-align: center; /* Center-aligned for balanced symmetry */
        border-radius: 0 !important;
      }
      .acne-table th:first-child {
        border-right: 1px solid #3D312A;
        width: 150px;
        text-align: center; /* Center-aligned header */
        border-radius: 0 !important;
      }
    }
```

And in the mobile section (`@media (max-width: 640px)`):

```css
    /* Mobile-first responsive grid for tables with high contrast */
    @media (max-width: 640px) {
      .acne-table-wrapper {
        border: none;
        box-shadow: none;
        background: transparent;
        margin: 1.5rem 0;
      }
      .acne-table, 
      .acne-table thead, 
      .acne-table tbody, 
      .acne-table th, 
      .acne-table td, 
      .acne-table tr {
        display: block;
        width: 100% !important;
      }
      .acne-table thead {
        display: none;
      }
      .acne-table tr {
        background: #FFFFFF !important; /* Pure white card to contrast body background */
        border: 2px solid #D9C8BC !important; /* Stronger border */
        border-radius: 16px !important;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 4px 15px rgba(26,20,16,0.04) !important;
      }
      .acne-table td {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 0; /* Adjusted mobile padding for better spacing balance */
        border-bottom: 1px solid #F2EDE8;
        text-align: left;
        border-radius: 0 !important;
      }
      .acne-table td:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      
      /* Format first cell as card header on mobile */
      .acne-table tr td:first-child {
        font-size: 16px;
        font-weight: 800;
        color: #2D231E;
        border-bottom: 2px solid #E8DDD5;
        padding-top: 0; /* Align perfectly with card top padding */
        padding-bottom: 10px; /* Tighter padding */
        margin-bottom: 6px;
        border-radius: 0 !important;
      }
      .acne-table tr td:first-child::before {
        display: none; /* Hide redundant label */
      }
      
      .acne-table td::before {
        content: attr(data-label);
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #5C4A3A; /* Darker brown-charcoal for clear contrast */
        font-weight: 800;
      }
      .active-badge {
        align-self: flex-start;
        margin-top: 4px;
      }
    }
```

- [ ] **Step 2: Commit updates for Task 1**

```bash
git add acne/cheek-acne/index.html
git commit -m "style(cheek-acne): override global table stylesheet pollution and reset border radius/shadows"
```

---

### Task 2: Update Table CSS Styles in P2 Guide Page

**Files:**
- Modify: `acne/cheek-acne-meaning/index.html:86-246`

**Interfaces:**
- Consumes: Existing table markup inside `acne/cheek-acne-meaning/index.html`
- Produces: Updated styles for `.acne-table`, `.acne-table tr`, `.acne-table th`, `.acne-table td`, `.acne-table td:first-child`, `.acne-table th:first-child` inside desktop media queries, and `.acne-table td` inside mobile media queries.

- [ ] **Step 1: Modify table, cell, and row styles on P2 guide page**

Edit `/Users/tm030/acne/cheek-acne-meaning/index.html` to update the table styles block in the exact same manner.

- [ ] **Step 2: Commit updates for Task 2**

```bash
git add acne/cheek-acne-meaning/index.html
git commit -m "style(cheek-acne-meaning): override global table stylesheet pollution and reset border radius/shadows"
```
