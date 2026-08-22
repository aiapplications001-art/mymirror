import re

# Read reference CSS
with open('/Users/tm030/Documents/mymirror_repo/acne/adapalene-0.1-percent-gel-acne-india/index.html', 'r') as f:
    ref_lines = f.readlines()
    
# Extract lines 120-1034 (which is index 119 to 1033)
css_lines = "".join(ref_lines[119:1034])

html_part_1 = """<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hero Cosmetics Mighty Patch vs CosRX Acne Master Patch: A Clinical Comparison</title>
  <meta name="description" content="In-depth clinical comparison of Hero Cosmetics Mighty Patch Original and CosRX Acne Pimple Master Patch. Explore hydrocolloid efficacy, exudate absorption, and daytime invisibility.">
  <link rel="canonical" href="https://mymirror.fit/acne/mighty-patch-vs-cosrx-pimple-patches-usa/">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://mymirror.fit/acne/mighty-patch-vs-cosrx-pimple-patches-usa/">
  <meta property="og:title" content="Hero Cosmetics Mighty Patch vs CosRX Acne Master Patch: A Clinical Comparison">
  <meta property="og:description" content="In-depth clinical comparison of Hero Cosmetics Mighty Patch Original and CosRX Acne Pimple Master Patch. Explore hydrocolloid efficacy, exudate absorption, and daytime invisibility.">
  <meta property="og:image" content="https://mymirror.fit/assets/images/mighty_patch_cosrx.jpg">
  
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://mymirror.fit/acne/mighty-patch-vs-cosrx-pimple-patches-usa/">
  <meta property="twitter:title" content="Hero Cosmetics Mighty Patch vs CosRX Acne Master Patch: A Clinical Comparison">
  <meta property="twitter:description" content="In-depth clinical comparison of Hero Cosmetics Mighty Patch Original and CosRX Acne Pimple Master Patch. Explore hydrocolloid efficacy, exudate absorption, and daytime invisibility.">
  <meta property="twitter:image" content="https://mymirror.fit/assets/images/mighty_patch_cosrx.jpg">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hero Cosmetics Mighty Patch vs CosRX Acne Master Patch: A Clinical Comparison",
    "description": "In-depth clinical comparison of Hero Cosmetics Mighty Patch Original and CosRX Acne Pimple Master Patch. Explore hydrocolloid efficacy, exudate absorption, and daytime invisibility.",
    "author": {
      "@type": "Organization",
      "name": "MyMirror Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MyMirror Skin Health",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mymirror.fit/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mymirror.fit/acne/mighty-patch-vs-cosrx-pimple-patches-usa/"
    },
    "image": "https://mymirror.fit/assets/images/mighty_patch_cosrx.jpg",
    "datePublished": "2024-01-15",
    "dateModified": "2026-08-21"
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How long should I leave a hydrocolloid patch on a pimple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For optimal exudate absorption and wound healing, it is recommended to leave a hydrocolloid patch on for 6 to 8 hours, ideally overnight. You should remove it once it has turned completely opaque white, indicating it has absorbed maximal fluid."
      }
    }, {
      "@type": "Question",
      "name": "Can I wear makeup over the CosRX or Mighty Patch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with caveats. The CosRX Clear Fit Master Patch and Hero Cosmetics Mighty Patch Invisible+ (variations of the originals) feature tapered edges designed specifically for daytime wear and can sit relatively discreetly under makeup. The original versions discussed here are thicker and more visible."
      }
    }]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
"""

html_part_2 = """
</head>
<body>
  <header class="site-header">
    <a href="/" class="brand-logo">MyMirror<span>.fit</span></a>
    <a href="https://face3layerscanner.onrender.com/" class="header-cta">Scan Face ✨</a>
  </header>

  <div class="trust-bar">
    <svg class="trust-badge-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
    <span>Reviewed by Dr. Lipy Mehta, Dermatologist • Updated Aug 2026</span>
  </div>

  <nav class="sticky-toc-bar">
    <div class="toc-inner">
      <span class="toc-label">CONTENTS</span>
      <a href="#overview" class="toc-link">Overview</a>
      <a href="#mechanism" class="toc-link">Mechanism</a>
      <a href="#comparison" class="toc-link">Comparison</a>
      <a href="#recommendations" class="toc-link">Recommendations</a>
      <a href="#guidelines" class="toc-link">Guidelines</a>
      <a href="#faq" class="toc-link">FAQ</a>
    </div>
  </nav>

  <section class="dark-hero">
    <div class="hero-container">
      <div>
        <span class="hero-badge">Clinical Patch Comparison (2026)</span>
        <h1 class="hero-title">Mighty Patch vs CosRX Pimple Patches (USA)</h1>
        <p class="hero-subtitle">In-depth clinical comparison of Hero Cosmetics Mighty Patch Original and CosRX Acne Pimple Master Patch. Explore hydrocolloid efficacy, exudate absorption, and daytime invisibility.</p>
        <div class="hero-meta-list">
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Hydrocolloid Science
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            6-8hr Wear
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            Daytime Invisible
          </div>
        </div>
        <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta">Build Your Custom Active Routine ✨</a>
      </div>
      <div class="hero-image-card">
        <img src="https://mymirror.fit/assets/images/mighty_patch_cosrx.jpg" alt="Mighty Patch vs CosRX">
        <div class="hero-image-tag">
          <span>Targeted Exudate Extraction</span>
          <span class="hero-tag-accent">Moist Healing</span>
        </div>
      </div>
    </div>
  </section>

  <div class="main-container">
    <article class="article-content">
      
      <section id="overview" class="section-block">
        <h2>The Advent of Hydrocolloid Technology in Acne Management</h2>
        <p>The paradigm of localized acne treatment has shifted dramatically over the past decade, moving away from harsh, drying spot treatments (such as concentrated benzoyl peroxide or high-percentage salicylic acid) toward the more sophisticated, barrier-protective approach of hydrocolloid dressings. Originally developed in the 1980s for advanced wound care—specifically for managing exudating venous ulcers and pressure sores—hydrocolloid technology has been brilliantly repurposed for dermatological acne management.</p>
        <p>This comprehensive clinical analysis examines two titans of the industry: the <a href="/acne/hero-cosmetics-mighty-patch-review/">Hero Cosmetics Mighty Patch Original</a> and the <a href="/acne/cosrx-acne-pimple-master-patch-review/">CosRX Acne Pimple Master Patch</a>. Both rely on the fundamental principles of moist wound healing, yet they exhibit distinct structural, adhesive, and absorptive profiles that dictate their optimal clinical utility.</p>
        <p>To fully appreciate the efficacy of these patches, one must understand the pathogenesis of acne vulgaris, particularly the inflammatory phase characterized by papules and pustules. When a comedone ruptures within the dermis, it triggers a cascade of inflammatory mediators, leading to localized erythema, edema, and purulence. The hydrocolloid patch acts as an occlusive, sterile environment that not only physically protects the compromised epidermal barrier from excoriation (the "picking" phenomenon) but also actively draws out serous fluid and purulent exudate through osmotic gradients.</p>
      </section>

      <section id="mechanism" class="section-block">
        <h2>Mechanism of Action</h2>
        <p>Hydrocolloids are composed of gel-forming agents (such as pectin, gelatin, or sodium carboxymethylcellulose) dispersed within a hydrophobic elastomer matrix (often polyurethane). When applied to an exuding lesion, the hydrophilic particles absorb fluid, swelling to form a cohesive gel that maintains a moist environment, facilitating autolytic debridement and re-epithelialization.</p>
        
        <div class="info-box">
          <h4>Hydrocolloid Exudate Absorption Mechanism</h4>
          <p>Hydrocolloid dressings are constructed from sodium carboxymethylcellulose (CMC) embedded in a translucent polyurethane film. When placed over an open whitehead, hydrocolloid particles absorb inflammatory pus and fluid (exudate) through capillary action, turning into a protective gel bubble while maintaining a moist wound-healing environment.</p>
        </div>
        
        <div class="info-box">
          <h4>When to patch vs when to treat?</h4>
          <p>Patches are highly effective for superficial, inflammatory lesions that have come to a head (whiteheads) or have been recently extracted. They are NOT effective for treating underlying microcomedones or preventing future breakouts—that requires topical keratolytics like Salicylic Acid or Retinoids.</p>
        </div>

        <div class="warning-box">
          <h4>Warning: Ineffective on Deep Cysts</h4>
          <p>Only use on surfaced whiteheads. Hydrocolloid patches won't work on deep cysts or nodular acne. These occur deep within the dermis and lack a tract for exudate to reach the skin surface. Attempting to patch these will not extract fluid and may delay proper dermatological treatment.</p>
        </div>

        <h3>The Moist Wound Healing Paradigm</h3>
        <p>Contrary to the outdated notion that wounds should be "dried out," modern dermatology recognizes that a moist environment accelerates epidermal migration, angiogenesis, and collagen synthesis while minimizing scar formation and post-inflammatory hyperpigmentation (PIH).</p>
      </section>

      <section id="comparison" class="section-block">
        <h2>Mighty Patch vs CosRX: Deep Dive Comparison</h2>
        
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-tag">Hero Cosmetics</span>
            </div>
            <h3 class="bento-title">Mighty Patch Original</h3>
            <p class="bento-body">Features a thick 0.3mm hydrocolloid with ultra-strong overnight adhesion for heavy fluid drainage. Ideally suited for nocturnal application to extract maximum exudate from mature pustules.</p>
            <div class="bento-footer">
              <span>Best for: Large Whiteheads</span>
              <span style="color:var(--brand)">6-8h Wear</span>
            </div>
          </div>
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-tag">CosRX</span>
            </div>
            <h3 class="bento-title">Acne Pimple Master Patch</h3>
            <p class="bento-body">Includes 3 distinct circle sizes (7mm, 10mm, 12mm) in a budget-friendly pack. Offers enhanced flexibility and a lower profile on the skin, adapting well to contoured areas.</p>
            <div class="bento-footer">
              <span>Best for: Varied Sizes</span>
              <span style="color:var(--brand)">Flexible Wear</span>
            </div>
          </div>
        </div>
        
        <div class="caution-box">
          <h4>Caution: Chemical Burn Risk</h4>
          <p>Don't apply actives UNDER a patch. Applying concentrated treatments (like Salicylic Acid or Benzoyl Peroxide) immediately under an occlusive hydrocolloid patch forces the active deeply into the skin, significantly increasing the risk of chemical burns, severe irritation, and post-inflammatory hyperpigmentation.</p>
        </div>

        <h3>Full Patch Product Comparison</h3>
        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Hero Cosmetics Mighty Patch Original</th>
                <th>CosRX Acne Pimple Master Patch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Parameter">Hydrocolloid Thickness</td>
                <td data-label="Mighty Patch">Thicker (approx. 0.3mm); optimized for high-volume exudate absorption.</td>
                <td data-label="CosRX">Slightly thinner; offers better flexibility and adherence over contoured areas.</td>
              </tr>
              <tr>
                <td data-label="Parameter">Size Variability & Count</td>
                <td data-label="Mighty Patch">Uniform size (12mm) in the Original pack. Usually 36 or 72 count.</td>
                <td data-label="CosRX">Multiple sizes (7mm, 10mm, 12mm) per pack (24 count) for tailored application.</td>
              </tr>
              <tr>
                <td data-label="Parameter">Optimal Wear Time</td>
                <td data-label="Mighty Patch">Overnight (6-8+ hours); excellent for intensive fluid extraction.</td>
                <td data-label="CosRX">Flexible (Day or Night); adaptable to varying lesion sizes.</td>
              </tr>
              <tr>
                <td data-label="Parameter">Daytime Visibility</td>
                <td data-label="Mighty Patch">More visible due to thickness (recommend Invisible+ for daytime).</td>
                <td data-label="CosRX">Slightly more discreet, though still visible (recommend Clear Fit for daytime).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="recommendations" class="section-block">
        <h2>Evidence-Based Clinical Recommendations</h2>
        <p>The decision between the Hero Cosmetics Mighty Patch Original and the CosRX Acne Pimple Master Patch should be predicated on the specific morphological characteristics of the acne lesion and the patient's lifestyle requirements.</p>
        <p><strong>Choose Hero Cosmetics Mighty Patch Original when:</strong></p>
        <ul>
            <li>Dealing with a particularly large, mature pustule ("whitehead") that is highly exudative.</li>
            <li>Application is strictly nocturnal, prioritizing maximum absorptive capacity over aesthetic discretion.</li>
            <li>Seeking a robust patch that is unlikely to dislodge during restless sleep.</li>
        </ul>
        <p><strong>Choose CosRX Acne Pimple Master Patch when:</strong></p>
        <ul>
            <li>Presenting with multiple lesions of varying sizes across the face.</li>
            <li>Applying to highly contoured areas of the face (e.g., the alar crease, jawline) where flexibility is paramount.</li>
            <li>Requiring a slightly lower-profile patch that offers a balance between absorption and subtlety.</li>
        </ul>
      </section>

      <section id="guidelines" class="section-block">
        <h2>Dermatological Clinical Analysis & Patient Application Guidelines</h2>
        <p>Achieving long-term clearing of active acne lesions while preserving stratum corneum integrity requires strict adherence to evidence-based active dosing protocols. Dermatologists emphasize that over-application of topical keratolytics or antibacterial agents leads to acute trans-epidermal water loss (TEWL), triggering reactive sebum hyper-secretion and exacerbating microcomedone formation.</p>

        <h3>Barrier Preservation & Retinoid Layering Protocol</h3>
        <p>To avoid chemical irritation and severe flaking, always follow the <strong>Sandwich Protocol</strong> when layering retinoids or high-strength acids: apply a light hydrating layer of non-comedogenic ceramide lotion, allow 10 minutes for absorption, apply your active treatment, and seal with a barrier moisturizer.</p>
        <ul>
          <li><strong>Morning Routine (AM):</strong> Cleanse with a mild hydrating wash, apply active spot treatment or serum, follow with barrier moisturizer, and complete with broad-spectrum SPF 50+ sunscreen.</li>
          <li><strong>Evening Routine (PM):</strong> Double-cleanse to remove UV filters and urban particulate matter, apply targeted treatment on 100% dry skin, and lock in hydration with ceramide-rich creams.</li>
        </ul>

        <h3>Preventing Post-Inflammatory Hyperpigmentation (PIH)</h3>
        <p>Melanin-rich skin responds to skin barrier trauma by accelerating melanin synthesis. Never pick, pop, or scratch active inflammatory papules. Use hydrocolloid patches on whiteheads to absorb exudate, and introduce brightening actives like 4% Niacinamide, 2% Alpha Arbutin, or 15% Azelaic Acid once inflammation subsides.</p>
      </section>

      <section id="faq" class="section-block">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-accordion">
          
          <div class="faq-item">
            <button class="faq-header">
              How long should I leave a hydrocolloid patch on a pimple?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <p>For optimal exudate absorption and wound healing, it is recommended to leave a hydrocolloid patch on for 6 to 8 hours, ideally overnight. You should remove it once it has turned completely opaque white, indicating it has absorbed maximal fluid.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-header">
              Can I wear makeup over the CosRX or Mighty Patch?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <p>Yes, but with caveats. The CosRX Clear Fit Master Patch and Hero Cosmetics Mighty Patch Invisible+ (variations of the originals) feature tapered edges designed specifically for daytime wear and can sit relatively discreetly under makeup. The original versions discussed here are thicker and more visible.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="resources" class="section-block">
        <h2>Explore Related Clinical Acne Resources</h2>
        <ul>
            <li><a href="/acne/pathogenesis-of-acne-vulgaris/">Understanding the Pathogenesis of Acne Vulgaris</a></li>
            <li><a href="/acne/role-of-salicylic-acid-in-comedolytic-therapy/">The Role of Salicylic Acid in Comedolytic Therapy</a></li>
            <li><a href="/acne/benzoyl-peroxide-vs-antibiotics-for-p-acnes/">Benzoyl Peroxide vs. Topical Antibiotics for P. acnes Eradication</a></li>
            <li><a href="/acne/managing-post-inflammatory-hyperpigmentation/">Managing Post-Inflammatory Hyperpigmentation (PIH)</a></li>
            <li><a href="/acne/retinoids-in-acne-management/">Topical Retinoids: The Cornerstone of Acne Management</a></li>
            <li><a href="/acne/hydrocolloid-patches-for-cystic-acne-myths/">Debunking Myths: Hydrocolloid Patches for Cystic Acne</a></li>
            <li><a href="/acne/impact-of-diet-on-sebum-production/">The Impact of Glycemic Index on Sebum Production</a></li>
            <li><a href="/acne/hormonal-acne-spironolactone-efficacy/">Hormonal Acne and the Efficacy of Spironolactone</a></li>
            <li><a href="/acne/ceramides-and-skin-barrier-repair/">Ceramides and Epidermal Barrier Repair in Acne Patients</a></li>
            <li><a href="/acne/exfoliation-chemical-vs-physical-for-acne/">Chemical vs. Physical Exfoliation for Acne-Prone Skin</a></li>
            <li><a href="/acne/niacinamide-for-sebum-regulation/">Niacinamide (Vitamin B3) for Sebum Regulation</a></li>
            <li><a href="/acne/azelaic-acid-for-rosacea-and-acne/">Azelaic Acid: Dual Efficacy in Rosacea and Acne</a></li>
            <li><a href="/acne/sunscreen-formulations-for-acne-prone-skin/">Non-Comedogenic Sunscreen Formulations</a></li>
            <li><a href="/acne/isotretinoin-clinical-guidelines/">Clinical Guidelines for Isotretinoin (Accutane) Therapy</a></li>
            <li><a href="/acne/gut-microbiome-and-skin-axis/">The Gut-Skin Axis: Probiotics and Acne</a></li>
        </ul>
      </section>
      
    </article>

    <aside class="desktop-sidebar">
      <div class="sidebar-card" style="background: var(--brand-light); border-color: rgba(236,97,14,0.2);">
        <h4 style="color: var(--brand-dark);">💡 Medical Review</h4>
        <p>All guides on MyMirror are reviewed by board-certified specialists. This clinical comparison protocol is approved by <strong>Dr. Lipy Mehta, Dermatologist</strong>.</p>
      </div>

      <div class="sidebar-card">
        <h4>Quick Timeline Stats</h4>
        <ul style="list-style: none; margin-top: 10px; padding: 0;">
          <li style="margin-bottom: 8px; font-size: 14px;">✅ Ideal wear time: 6-8 hrs</li>
          <li style="margin-bottom: 8px; font-size: 14px;">✅ Mechanism: Moist healing</li>
          <li style="margin-bottom: 8px; font-size: 14px;">✅ Primary target: Exudative pustules</li>
          <li style="margin-bottom: 8px; font-size: 14px;">✅ Application: On dry skin</li>
        </ul>
      </div>

      <div class="sidebar-card" style="background: var(--bg2);">
        <h4>When to Consult a Doctor</h4>
        <p>Seek dermatological advice if your breakouts exhibit:</p>
        <ul style="list-style: none; margin-top: 10px; padding: 0;">
          <li style="margin-bottom: 8px; font-size: 14px;">⚠️ Painful, deep cysts lasting >4 weeks</li>
          <li style="margin-bottom: 8px; font-size: 14px;">⚠️ Extreme burning or peeling barrier</li>
          <li style="margin-bottom: 8px; font-size: 14px;">⚠️ Breakouts spreading to new clean zones</li>
        </ul>
      </div>
    </aside>
  </div>

  <div class="sticky-bottom-bar">
    <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta" style="width: 100%; text-align: center; border-radius: 0;">Scan Your Face for Free ✨</a>
  </div>

  <footer class="site-footer" style="background: var(--dark-bg); padding: 4rem 1.5rem; text-align: center; color: #94A3B8;">
    <p>&copy; 2026 MyMirror.fit • Science-Based Skin Health for India</p>
  </footer>

  <script>
    // Intersection Observer for Section Blocks
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
          const activeLink = document.querySelector('.toc-link[href="#' + id + '"]');
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    document.querySelectorAll('.section-block').forEach(section => {
      observer.observe(section);
    });

    // FAQ Accordion Toggle
    document.querySelectorAll('.faq-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const body = item.querySelector('.faq-body');
        const icon = item.querySelector('.faq-icon');
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-body').style.maxHeight = null;
          i.querySelector('.faq-icon').textContent = '+';
        });

        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + "px";
          icon.textContent = '-';
        }
      });
    });
  </script>
</body>
</html>
"""

html_content = html_part_1 + css_lines + html_part_2

with open('/Users/tm030/Documents/mymirror_repo/acne/mighty-patch-vs-cosrx-pimple-patches-usa/index.html', 'w') as f:
    f.write(html_content)

print("Done")
