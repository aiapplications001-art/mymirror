# Hero Banner Facial Scan Animation Update & Performance Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the hero banner on `https://mymirror.fit/` (`index.html`) to use the new animation from `/Users/tm030/Documents/New project 11/output/facial-scan/facial_scan_once.gif`, while optimizing asset weight from 33MB down to <1.5MB to ensure blazingly fast mobile and desktop page load times.

**Architecture:** Convert the 33MB raw GIF into web-optimized H.264 MP4 and WebM video formats with faststart metadata headers and a lightweight poster JPEG fallback. Update the `<video>` element in `index.html` to serve these progressive assets in order of browser efficiency.

**Tech Stack:** HTML5 `<video>`, ffmpeg, Git, Vercel

**Spec:** User request to update hero banner on `https://mymirror.fit/` with `facial_scan_once.gif` with zero performance degradation / low load time.

## Global Constraints

- Source asset: `/Users/tm030/Documents/New project 11/output/facial-scan/facial_scan_once.gif` (33MB raw)
- Target page: `/Users/tm030/index.html`
- Max target media size: < 1.5 MB total stream weight
- Video attributes: `autoplay loop muted playsinline`

---

### Task 1: Convert & Optimize 33MB GIF to High-Performance Web Video Formats

**Files:**
- Source: `/Users/tm030/Documents/New project 11/output/facial-scan/facial_scan_once.gif`
- Create: `/Users/tm030/assets/images/facial_scan_once.mp4`
- Create: `/Users/tm030/assets/images/facial_scan_once.webm`
- Create: `/Users/tm030/assets/images/facial_scan_once_poster.jpg`

**Interfaces:**
- Consumes: Raw 33MB GIF animation
- Produces: `facial_scan_once.mp4` (~1MB), `facial_scan_once.webm` (~700KB), `facial_scan_once_poster.jpg` (~30KB)

- [ ] **Step 1: Convert GIF to web-optimized H.264 MP4 with faststart flag**

Run:
```bash
/opt/homebrew/bin/ffmpeg -y -i "/Users/tm030/Documents/New project 11/output/facial-scan/facial_scan_once.gif" -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -crf 22 /Users/tm030/assets/images/facial_scan_once.mp4
```

- [ ] **Step 2: Convert GIF to WebM format for extra compression**

Run:
```bash
/opt/homebrew/bin/ffmpeg -y -i "/Users/tm030/Documents/New project 11/output/facial-scan/facial_scan_once.gif" -c:v libvpx-vp9 -crf 30 -b:v 0 /Users/tm030/assets/images/facial_scan_once.webm
```

- [ ] **Step 3: Extract first frame poster image for instant render**

Run:
```bash
/opt/homebrew/bin/ffmpeg -y -i "/Users/tm030/assets/images/facial_scan_once.mp4" -vframes 1 -q:v 2 /Users/tm030/assets/images/facial_scan_once_poster.jpg
```

- [ ] **Step 4: Verify generated file sizes**

Run:
```bash
ls -lh /Users/tm030/assets/images/facial_scan_once*
```
Expected output: MP4 and WebM files < 2MB (vs original 33MB GIF).

- [ ] **Step 5: Commit converted assets**

Run:
```bash
git add assets/images/facial_scan_once.mp4 assets/images/facial_scan_once.webm assets/images/facial_scan_once_poster.jpg
git commit -m "perf: add compressed mp4, webm and poster image for facial_scan_once animation"
```

---

### Task 2: Update Homepage Hero Section in `index.html`

**Files:**
- Modify: `/Users/tm030/index.html:656-658`

**Interfaces:**
- Consumes: `assets/images/facial_scan_once.mp4`, `assets/images/facial_scan_once.webm`, `assets/images/facial_scan_once_poster.jpg`
- Produces: Updated `<video>` markup in `index.html` hero section

- [ ] **Step 1: Replace old video tag with optimized responsive video stack in `index.html`**

Replace:
```html
<video src="/assets/images/face_scan_HQ.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
```
With:
```html
<video autoplay loop muted playsinline preload="auto" poster="/assets/images/facial_scan_once_poster.jpg" style="width: 100%; height: 100%; object-fit: cover;">
    <source src="/assets/images/facial_scan_once.webm" type="video/webm">
    <source src="/assets/images/facial_scan_once.mp4" type="video/mp4">
</video>
```

- [ ] **Step 2: Verify git diff on `index.html`**

Run:
```bash
git diff index.html
```

- [ ] **Step 3: Commit and push changes to GitHub**

Run:
```bash
git add index.html
git commit -m "feat: update hero banner to use optimized facial_scan_once animation"
git push
```

- [ ] **Step 4: Verify production deployment on Vercel**

Run:
```bash
sleep 6 && curl -s https://mymirror.fit/ | grep -i "facial_scan_once"
```
Expected output: Clean match of new video sources in live HTML.
