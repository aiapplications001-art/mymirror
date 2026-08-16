# Standardize Mobile Bottom Nav CTA & Hero Banner Mobile Hiding Across All Pages

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure that across ALL pages on `https://mymirror.fit/` (except `/scan`), the primary action CTA is positioned directly in the sticky bottom navigation bar on mobile (`< 768px`), while being hidden in the hero banner on mobile to prevent clutter and redundancy. Ensure desktop (`>= 769px`) UI/UX remains 100% intact, pristine, and animated.

**Architecture:**
1. **Desktop (`>= 769px`):**
   - Hero Banner CTA is fully visible (`display: inline-flex` / `display: flex`).
   - Sticky Bottom Navigation CTA is hidden (`display: none !important`).
2. **Mobile (`< 768px`):**
   - Hero Banner CTA container (`.face-ai-cta-wrapper`, `.hero-cta-group`, `.perimeter-cta`, `.mobile-hero-cta-hide`) is hidden (`display: none !important`).
   - Sticky Bottom Navigation CTA (`.mobile-sticky-cta`, `.sticky-cta-mobile`) is displayed as a fixed glassmorphism bar with a full-width pill button (`Free AI Skin Analysis ✨` / `Start Free Scan →`) linking to `/scan`.
3. **Exceptions:**
   - `/scan/` page: Does NOT display sticky bottom scan CTA (since the user is already on the scan interface).

**Tech Stack:** HTML5, CSS3, Git

---

### Task 1: Audit and Update Global Stylesheet (`/assets/styles/forehead-acne.css`)

**Files:**
- Modify: `/Users/tm030/assets/styles/forehead-acne.css`

- [ ] **Step 1: Update `.sticky-cta-mobile`, `.mobile-sticky-cta`, and hero CTA rules in `forehead-acne.css`**

Add CSS rules:
```css
/* ── GLOBAL MOBILE STICKY BOTTOM CTA & HERO HIDING ── */
.mobile-sticky-cta,
.sticky-cta-mobile {
    display: none; /* Hidden on desktop */
}

@media (min-width: 769px) {
    .face-ai-cta-wrapper,
    .hero-cta-container,
    .perimeter-cta,
    .hero-cta {
        display: flex !important;
    }
    .mobile-sticky-cta,
    .sticky-cta-mobile {
        display: none !important;
    }
}

@media (max-width: 768px) {
    /* Hide hero CTA on mobile to move action to bottom sticky nav */
    .hero .face-ai-cta-wrapper,
    .dark-hero .perimeter-cta,
    .hero-content .face-ai-cta-wrapper,
    .hero-cta-mobile-hide {
        display: none !important;
    }

    /* Display fixed bottom nav CTA on mobile */
    .mobile-sticky-cta,
    .sticky-cta-mobile {
        display: flex !important;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(15, 19, 22, 0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: 10px 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        z-index: 9999;
        box-shadow: 0 -6px 24px rgba(0, 0, 0, 0.2);
        align-items: center;
        justify-content: center;
    }

    .mobile-sticky-cta a,
    .sticky-cta-mobile a,
    .sticky-cta-mobile .nav-cta {
        display: block;
        width: 100%;
        text-align: center;
        background: #EC610E;
        color: #FFFFFF !important;
        padding: 13px 20px;
        border-radius: 9999px;
        font-weight: 800;
        font-size: 1rem;
        text-decoration: none;
        box-shadow: 0 4px 16px rgba(236, 97, 14, 0.4);
        white-space: nowrap;
    }

    body {
        padding-bottom: 68px !important;
    }
}
```

---

### Task 2: Standardize Homepage (`index.html`) Header, Hero & Mobile Sticky Bottom CTA

**Files:**
- Modify: `/Users/tm030/index.html`

- [ ] **Step 1: Check `index.html` CSS for `.face-ai-cta-wrapper` and `.mobile-sticky-cta`**

Ensure `index.html` internal `<style>` contains:
```css
        @media (max-width: 768px) {
            .hero-content .face-ai-cta-wrapper {
                display: none !important;
            }
            .mobile-sticky-cta {
                display: flex !important;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                padding: 10px 16px;
                border-top: 1px solid var(--border);
                z-index: 9999;
                box-shadow: 0 -4px 20px rgba(0,0,0,0.08);
            }
            .mobile-sticky-cta a {
                display: block;
                width: 100%;
                background: var(--brand);
                color: #ffffff !important;
                text-align: center;
                padding: 14px;
                border-radius: 9999px;
                font-weight: 800;
                font-size: 1rem;
                text-decoration: none;
            }
            body {
                padding-bottom: 68px;
            }
        }
        @media (min-width: 769px) {
            .mobile-sticky-cta {
                display: none !important;
            }
            .hero-content .face-ai-cta-wrapper {
                display: flex !important;
            }
        }
```

- [ ] **Step 2: Ensure markup in `index.html` has `.mobile-sticky-cta` before `</body>`**

```html
    <div class="mobile-sticky-cta">
        <a href="/scan">Start Free AI Scan ✨</a>
    </div>
```

---

### Task 3: Standardize Science of Clear Skin & Minimalist Routine Pages

**Files:**
- Modify: `/Users/tm030/acne/science-of-clear-skin/index.html`
- Modify: `/Users/tm030/acne/minimalist-acne-routine/index.html`

- [ ] **Step 1: Ensure `science-of-clear-skin/index.html` hides hero CTA on mobile and displays sticky bottom nav CTA**
- [ ] **Step 2: Ensure `minimalist-acne-routine/index.html` hides hero CTA on mobile and displays sticky bottom nav CTA**

---

### Task 4: Audit & Commit All Sitemap Pages

**Files:**
- Audit remaining sitemap pages to ensure no mobile duplicate CTAs exist and all pages feature the fixed bottom CTA.

- [ ] **Step 1: Run git commit and push to main**
```bash
git add assets/styles/forehead-acne.css index.html acne/science-of-clear-skin/index.html acne/minimalist-acne-routine/index.html docs/superpowers/plans/2026-08-16-mobile-bottom-nav-cta-standardization.md
git commit -m "feat: standardize mobile bottom nav CTA and hide hero CTA on mobile view across pages"
git push
```

- [ ] **Step 2: Verify production deployment on Vercel**
