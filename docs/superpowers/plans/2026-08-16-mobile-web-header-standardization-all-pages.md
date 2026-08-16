# Standardize Mobile Web Header Across All Sitemap Pages

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replicate the mobile header experience from `https://mymirror.fit/` across all sitemap pages (except `/scan`). Guarantee a sticky 60px header row with logo on left, clean non-wrapping CTA button on right, hidden secondary text links on mobile, and a responsive trust bar.

**Architecture:**
- **Master Stylesheet (`/assets/styles/forehead-acne.css`):**
  Update `.site-header`, `nav.site-nav`, `.header-container`, `.nav-inner`, `.logo`, `.nav-links`, `.nav-cta`, `.header-cta`, and `.trust-bar` rules.
- **Mobile Media Query (`< 768px` / `< 900px`):**
  - Sticky 60px height header with `top: 0; z-index: 1000`.
  - Secondary text links hidden (`.nav-links li:not(:last-child)`, `.nav-links a:not(.nav-cta)... { display: none !important; }`).
  - Hamburger menu icon hidden or overridden to enforce a clean 2-element row (Logo + CTA).
  - CTA button (`.nav-cta`, `.header-cta`, `.nav-cta-btn`) locked to single line (`white-space: nowrap !important;`, `font-size: 12px`, `padding: 6px 14px`).
  - Trust bar styled with flex-wrap and responsive padding.
- **Desktop Media Query (`>= 769px`):**
  - Full nav links and desktop CTA button visible and aligned.

**Tech Stack:** HTML5, CSS3, Git

---

### Task 1: Update Master Stylesheet (`/assets/styles/forehead-acne.css`)

**Files:**
- Modify: `/Users/tm030/assets/styles/forehead-acne.css`

- [ ] **Step 1: Replace legacy header & mobile media query CSS in `forehead-acne.css`**

Update `forehead-acne.css`:
```css
/* ── UNIFIED TRUST BAR & HEADER (Sitemap Standard) ── */
.trust-bar {
    background: var(--color-bg-secondary, #F9F6F3);
    border-bottom: 1px solid var(--color-border, #E8DDD5);
    padding: 8px 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem 1.5rem;
    font-size: 12px;
    color: var(--color-text-secondary, #5C4A3A);
    text-align: center;
}

.verified { display: flex; align-items: center; gap: 5px; color: #059669; font-weight: 600; }
.verified::before { content: '✓'; background: #059669; color: #fff; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; flex-shrink: 0; }

.site-header,
nav.site-nav {
    position: sticky !important;
    top: 0 !important;
    z-index: 1000 !important;
    height: 60px !important;
    min-height: 60px !important;
    background: #FFFFFF !important;
    border-bottom: 1px solid var(--color-border, #E8DDD5) !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05) !important;
    display: flex !important;
    align-items: center !important;
    width: 100% !important;
}

.header-container,
.nav-inner {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-direction: row !important;
    gap: 0 !important;
}

.logo-wrapper,
.nav-logo {
    height: 32px;
    display: flex;
    align-items: center;
}

.logo,
.nav-logo img,
.logo-wrapper img {
    height: 28px !important;
    width: auto !important;
    object-fit: contain;
    mix-blend-mode: multiply;
    display: block;
    margin: 0 !important;
}

.nav-links {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    position: static !important;
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    width: auto !important;
}

.nav-links a {
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-secondary, #5C4A3A);
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.2s ease;
}

.nav-links .nav-cta,
.nav-links .nav-cta-btn,
.header-cta {
    background: var(--color-brand, #EC610E) !important;
    color: #FFFFFF !important;
    font-weight: 700 !important;
    border-radius: 9999px !important;
    padding: 8px 18px !important;
    white-space: nowrap !important;
    font-size: 13px !important;
    box-shadow: 0 4px 14px rgba(236,97,14,0.30) !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
}

.hamburger-btn {
    display: none !important;
}

@media (max-width: 768px) {
    .trust-bar { padding: 6px 1rem; font-size: 11px; gap: 0.35rem 0.75rem; }
    .header-container, .nav-inner { padding: 0 1rem !important; }
    .logo, .nav-logo img, .logo-wrapper img { height: 22px !important; }
    .nav-links li:not(:last-child),
    .nav-links a:not(.nav-cta):not(.nav-cta-btn):not(.header-cta) {
        display: none !important;
    }
    .nav-links .nav-cta,
    .nav-links .nav-cta-btn,
    .header-cta {
        padding: 6px 14px !important;
        font-size: 12px !important;
    }
}
```

---

### Task 2: Audit HTML Files to Clean Up Header Structure & Classes

**Files:**
- Audit & Update HTML pages with custom inline styles overriding header layout.

- [ ] **Step 1: Check standalone pages (`acne/face-map.html`, `acne/indian-acne-diet-guide/index.html`, etc.) for inline style overrides**
- [ ] **Step 2: Ensure header elements match `.site-header` / `nav.site-nav` structure**

---

### Task 3: Commit and Deploy

- [ ] **Step 1: Commit and push changes to GitHub `main`**
```bash
git add assets/styles/forehead-acne.css docs/superpowers/plans/2026-08-16-mobile-web-header-standardization-all-pages.md
git commit -m "feat: standardize mobile web header across all sitemap pages matching mymirror.fit"
git push
```
- [ ] **Step 2: Verify production deployment on Vercel**
