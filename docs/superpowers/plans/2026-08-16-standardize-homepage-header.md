# Standardize Homepage Header & Trust Bar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize the header and trust bar on `https://mymirror.fit/` (`/Users/tm030/index.html`) to match the exact design system used across all other sitemap pages (such as `/acne/glycolic-acid-toner-for-acne-india/`).

**Architecture:** Replace the legacy `<header>` markup in `index.html` with `.site-header` (`mymirror.fit` logo + pill CTA) and add the standardized `.trust-bar` component with dermatologist review metadata. Ensure CSS tokens and sticky positions align across all viewports.

**Tech Stack:** HTML5, CSS3, Git

**Spec:** User request to align homepage (`https://mymirror.fit/`) header and trust bar with the rest of the sitemap pages.

## Global Constraints

- Target file: `/Users/tm030/index.html`
- Reference template: `/Users/tm030/acne/glycolic-acid-toner-for-acne-india/index.html`
- Header brand logo: `mymirror<span>.fit</span>`
- Header CTA link: `/scan` with SVG camera icon & copy "Scan Face (Free)"
- Trust bar: Editorial Team + Dr. Lipy Mehta, Dermatologist review badge

---

### Task 1: Update Header and Trust Bar CSS & HTML in `index.html`

**Files:**
- Modify: `/Users/tm030/index.html` (CSS styles & header markup)

**Interfaces:**
- Consumes: Sitemap header & trust bar design tokens
- Produces: Standardized `.site-header` and `.trust-bar` on homepage

- [ ] **Step 1: Add `.site-header`, `.brand-logo`, `.header-cta`, `.trust-bar`, and `.trust-badge-icon` CSS to `index.html` `<style>`**

Add the standardized header CSS definitions to `index.html`:

```css
        /* TOP HEADER BAR & TRUST BAR (Sitemap Standard) */
        .site-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            height: 60px;
            background: #FFFFFF;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1.5rem;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 0.2rem;
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 1.35rem;
            color: var(--brand-dark);
            text-decoration: none;
        }

        .brand-logo span {
            color: var(--brand);
        }

        .header-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--brand-dark);
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .header-cta:hover {
            background: var(--brand-light);
            border-color: var(--brand);
        }

        .trust-bar {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 0.6rem 1rem;
            text-align: center;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--brand-dark);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 0.5rem 1.25rem;
        }

        .trust-badge-icon {
            width: 16px;
            height: 16px;
            fill: var(--brand);
            display: inline-block;
            vertical-align: middle;
        }
```

- [ ] **Step 2: Replace legacy `<header>` HTML with standardized `.site-header` and `.trust-bar`**

Replace:
```html
    <header>
        <div class="container nav-inner">
            <a href="/" class="logo">MyMirror</a>
            <nav class="nav-links">
                <a href="#how-it-works">How it works</a>
                <a href="#payoff">What you'll get</a>
                <a href="#guides">Skin guides</a>
                <a href="#faq">FAQs</a>
            </nav>
            <a href="https://mymirror.fit/scan" class="btn btn-primary">Start free scan</a>
        </div>
    </header>
```
With:
```html
    <header class="site-header">
        <a href="/" class="brand-logo">mymirror<span>.fit</span></a>
        <a href="/scan" class="header-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Scan Face (Free)
        </a>
    </header>

    <div class="trust-bar">
        <span>Editorial Team: <strong>MyMirror.fit</strong></span>
        <span>•</span>
        <span><svg class="trust-badge-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Reviewed by Dr. Lipy Mehta, Dermatologist</span>
    </div>
```

- [ ] **Step 3: Commit and push changes to GitHub**

Run:
```bash
git add index.html docs/superpowers/plans/2026-08-16-standardize-homepage-header.md
git commit -m "feat: align homepage header and trust bar with sitemap design system"
git push
```

- [ ] **Step 4: Verify production deployment on Vercel**

Run:
```bash
sleep 6 && curl -s https://mymirror.fit/ | grep -i "site-header"
```
Expected output: Match of standardized `.site-header` and `.trust-bar` in live homepage HTML.
