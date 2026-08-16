# Align Homepage Header with Science of Clear Skin Header

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the header and trust bar on the homepage (`/Users/tm030/index.html`) to match the exact header from `https://mymirror.fit/acne/science-of-clear-skin/` (`/Users/tm030/acne/science-of-clear-skin/index.html`).

**Architecture:** Update CSS definitions for `.trust-bar`, `nav`, `.nav-inner`, `.nav-logo`, and `.nav-links`. Position the trust bar above the sticky `<nav>` bar, and use the logo image (`/acne/forehead-acne/logo-v4.png`) and clean nav links.

**Tech Stack:** HTML5, CSS3, Git

**Spec:** User directive to replicate the header from `https://mymirror.fit/acne/science-of-clear-skin/` on `https://mymirror.fit/`.

## Global Constraints

- Reference template: `/Users/tm030/acne/science-of-clear-skin/index.html`
- Target file: `/Users/tm030/index.html`
- Trust Bar position: Above sticky `<nav>`
- Logo: `<a class="nav-logo" href="/"><img fetchpriority="high" decoding="async" src="/acne/forehead-acne/logo-v4.png" alt="mymirror" /></a>`
- Links: Knowledge Hub, Face Map, Cheat Sheet (or CTA button)

---

### Task 1: Update Header & Trust Bar Markup & CSS on Homepage

**Files:**
- Modify: `/Users/tm030/index.html`

**Interfaces:**
- Consumes: Header & Trust Bar layout from `science-of-clear-skin`
- Produces: Exact matching header on homepage

- [ ] **Step 1: Update CSS rules in `index.html` `<style>` to match `science-of-clear-skin`**

Replace:
```css
        /* TOP HEADER BAR & TRUST BAR (Sitemap Standard) */
        ...
```
With:
```css
        /* ── TRUST BAR ── */
        .trust-bar { background: var(--bg-card, #F9F6F3); border-bottom: 1px solid var(--border, #E8DDD5); padding: 8px 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; font-size: 12px; color: var(--text-muted, #5C4A3A); }
        .verified { display: flex; align-items: center; gap: 5px; color: #059669; font-weight: 600; }
        .verified::before { content: '✓'; background: #059669; color: #fff; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; }

        /* ── NAV ── */
        nav.site-nav { background: #FFFFFF; border-bottom: 1px solid var(--border, #E8DDD5); box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 1000; height: 60px; display: flex; align-items: center; }
        .nav-inner { max-width: 1100px; margin: 0 auto; width: 100%; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo img { height: 28px; margin: 0; box-shadow: none; border-radius: 0; background: transparent; display: block; }
        .nav-links { display: flex; gap: 10px; list-style: none; align-items: center; }
        .nav-links a { font-size: 13px; font-weight: 500; color: var(--text-muted, #5C4A3A); text-decoration: none; padding: 6px 12px; border-radius: 6px; transition: all 0.2s ease; }
        .nav-links a:hover { background: var(--brand-light, #FFE1CE); color: var(--brand, #EC610E); font-weight: 600; }
        .nav-cta-btn { background: var(--brand, #EC610E) !important; color: #FFFFFF !important; font-weight: 700 !important; border-radius: 9999px !important; padding: 8px 18px !important; }
        .nav-cta-btn:hover { background: var(--brand-dark, #C14800) !important; }
```

- [ ] **Step 2: Update HTML body markup in `index.html`**

Replace:
```html
    <header class="site-header">
        ...
    </header>

    <div class="trust-bar">
        ...
    </div>
```
With:
```html
    <div class="trust-bar">
        <span>Editorial Team: <strong>MyMirror.fit</strong></span>
        <span class="verified">Reviewed by Dr. Lipy Mehta, Dermatologist</span>
        <span>Updated April 2026</span>
    </div>

    <nav class="site-nav">
        <div class="nav-inner">
            <a class="nav-logo" href="/"><img fetchpriority="high" decoding="async" src="/acne/forehead-acne/logo-v4.png" alt="mymirror" /></a>
            <ul class="nav-links">
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#guides">Skin guides</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="https://mymirror.fit/scan" class="nav-cta-btn">Start free scan</a></li>
            </ul>
        </div>
    </nav>
```

- [ ] **Step 3: Commit and push changes to GitHub**

Run:
```bash
git add index.html docs/superpowers/plans/2026-08-16-match-science-of-clear-skin-header.md
git commit -m "feat: replicate science-of-clear-skin header and trust bar on homepage"
git push
```

- [ ] **Step 4: Verify production deployment on Vercel**

Run:
```bash
sleep 6 && curl -s https://mymirror.fit/ | grep -i "logo-v4.png"
```
Expected output: Match of `logo-v4.png` in live HTML.
