import re

ref_file = '/Users/tm030/Documents/mymirror_repo/acne/adapalene-0.1-percent-gel-acne-india/index.html'
target_file = '/Users/tm030/Documents/mymirror_repo/acne/spot-treatment-for-pimples-dark-spots-india/index.html'

with open(ref_file, 'r', encoding='utf-8') as f:
    ref_content = f.read()

# Extract exact CSS block (lines 120-1034 roughly, between <style> and </style>)
match = re.search(r'<style>(.*?)</style>', ref_content, re.DOTALL)
if match:
    css_content = match.group(0)
else:
    print("Could not find style in reference")
    exit(1)

html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Spot Treatment for Pimples & Dark Spots in India (2026) | MyMirror</title>
  <meta name="description" content="Dermatologist ranking of the best spot treatments for pimples and post-acne dark spots in India. Compare Sebogel, Benzac AC, Zitcare, and Hydrocolloid patches.">
  <link rel="canonical" href="https://mymirror.fit/acne/spot-treatment-for-pimples-dark-spots-india/">

  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://mymirror.fit/acne/spot-treatment-for-pimples-dark-spots-india/">
  <meta property="og:title" content="Best Spot Treatment for Pimples & Dark Spots in India (2026) | MyMirror">
  <meta property="og:description" content="Dermatologist ranking of the best spot treatments for pimples and post-acne dark spots in India. Compare Sebogel, Benzac AC, Zitcare, and Hydrocolloid patches.">
  <meta property="og:image" content="https://mymirror.fit/assets/images/spot_treatment_india.jpg">

  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://mymirror.fit/acne/spot-treatment-for-pimples-dark-spots-india/">
  <meta property="twitter:title" content="Best Spot Treatment for Pimples & Dark Spots in India (2026) | MyMirror">
  <meta property="twitter:description" content="Dermatologist ranking of the best spot treatments for pimples and post-acne dark spots in India. Compare Sebogel, Benzac AC, Zitcare, and Hydrocolloid patches.">
  <meta property="twitter:image" content="https://mymirror.fit/assets/images/spot_treatment_india.jpg">

  <!-- JSON-LD Schema Markup -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Spot Treatment for Pimples & Dark Spots in India (2026) | MyMirror",
    "description": "Dermatologist ranking of the best spot treatments for pimples and post-acne dark spots in India. Compare Sebogel, Benzac AC, Zitcare, and Hydrocolloid patches.",
    "author": {{
      "@type": "Organization",
      "name": "MyMirror Editorial Team"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "MyMirror Skin Health",
      "logo": {{
        "@type": "ImageObject",
        "url": "https://mymirror.fit/favicon.png"
      }}
    }},
    "mainEntityOfPage": {{
      "@type": "WebPage",
      "@id": "https://mymirror.fit/acne/spot-treatment-for-pimples-dark-spots-india/"
    }},
    "image": "https://mymirror.fit/assets/images/spot_treatment_india.jpg",
    "datePublished": "2026-08-21",
    "dateModified": "2026-08-21"
  }}
  </script>

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {{
        "@type": "Question",
        "name": "What is the fastest spot treatment for a painful pimple in India?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "For inflamed red pimples, 2.5% Benzoyl Peroxide gel (Benzac AC 2.5%) or 2% Salicylic Acid + 6% Niacinamide gel (Sebogel) flattens swelling within 12-24 hours."
        }}
      }},
      {{
        "@type": "Question",
        "name": "Should I apply spot treatments all over my face?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "No. Spot treatments contain concentrated active ingredients (2-5% BPO or 2% BHA) designed ONLY for active pimple heads. Applying them all over dry or un-congested skin will cause severe barrier peeling and redness."
        }}
      }},
      {{
        "@type": "Question",
        "name": "How do I treat a pimple spot without getting a dark mark (PIH)?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Never pick, pop, or squeeze the pimple. Apply a hydrocolloid pimple patch overnight to absorb fluid cleanly, then apply 10% Azelaic Acid or Alpha Arbutin serum morning and night once the head flattens."
        }}
      }},
      {{
        "@type": "Question",
        "name": "Is Sebogel good as a spot treatment for Indian skin?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Yes! Sebogel contains 2% Salicylic Acid to unclog the pore and 6% Niacinamide to prevent hyperpigmentation. It is one of the most dermatologist-recommended OTC spot gels in India."
        }}
      }},
      {{
        "@type": "Question",
        "name": "Can I use Benzoyl Peroxide 5% or 10% as a spot treatment?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Start with 2.5% Benzoyl Peroxide. Clinical studies show 2.5% Benzoyl Peroxide kills C. acnes bacteria just as effectively as 10% BPO, but with 70% less redness and dryness on Indian skin tones."
        }}
      }},
      {{
        "@type": "Question",
        "name": "When should I apply a pimple spot treatment in my routine?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Apply spot treatments after cleansing and light hydration, but directly onto dry target bumps before heavy occlusive moisturizers."
        }}
      }},
      {{
        "@type": "Question",
        "name": "Can I leave a spot gel on overnight?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Yes. Most BPO and BHA spot gels (like Zitcare S or Benzac AC) are designed for overnight leave-on application."
        }}
      }},
      {{
        "@type": "Question",
        "name": "What spot treatment works best for deep cystic bumps under the skin?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Deep cysts without a visible whitehead respond best to warm compresses, followed by 15% Azelaic Acid or an oral anti-inflammatory prescribed by a dermatologist. Do not pop blind cysts."
        }}
      }}
    ]
  }}
  </script>

  <!-- Google Analytics Tracker (Deferred) -->
  <script defer src="/assets/site-analytics.js"></script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

  {css_content}

</head>
<body>

  <!-- SITE HEADER -->
  <header class="site-header">
    <a href="https://mymirror.fit" class="brand-logo">
      MyMirror<span>.fit</span>
    </a>
    <a href="https://face3layerscanner.onrender.com/" class="header-cta" target="_blank" rel="noopener">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      Free AI Skin Scan
    </a>
  </header>

  <!-- TRUST BAR -->
  <div class="trust-bar">
    <svg class="trust-badge-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
    Reviewed by Dr. Lipy Mehta, Board-Certified Dermatologist | Updated August 2026
  </div>

  <!-- STICKY TOC BAR -->
  <nav class="sticky-toc-bar" aria-label="Table of Contents">
    <div class="toc-inner">
      <span class="toc-label">CONTENTS</span>
      <a href="#section-1" class="toc-link">1. Clinical Overview</a>
      <a href="#section-2" class="toc-link">2. Product Comparison</a>
      <a href="#section-3" class="toc-link">3. Treatment Routine</a>
      <a href="#faq" class="toc-link">4. FAQs</a>
    </div>
  </nav>

  <!-- DARK HERO SECTION -->
  <section class="dark-hero">
    <div class="hero-container">
      <div class="hero-text-col">
        <div class="hero-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Clinical Treatment Guide (2026)
        </div>
        <h1 class="hero-title">Best Spot Treatment for Pimples & Dark Spots in India</h1>
        <p class="hero-subtitle">
          Dermatologist ranking of the best spot treatments for pimples and post-acne dark spots in India. Compare Sebogel, Benzac AC, Zitcare, and Hydrocolloid patches.
        </p>
        <div class="hero-meta-list">
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Emergency Spot Corrector
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            PIH-Safe Protocol
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            12-24hr Action
          </div>
        </div>

        <!-- ANIMATED PERIMETER-RAIL CTA BUTTON -->
        <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta" target="_blank" rel="noopener">
          <span>Check Active Ingredient Compatibility ✨</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>

      <div class="hero-image-card">
        <img src="https://mymirror.fit/assets/images/spot_treatment_india.jpg" alt="Best Spot Treatment for Pimples & Dark Spots in India">
        <div class="hero-image-tag">
          <span>Treatment Efficacy</span>
          <span class="hero-tag-accent">12-24 HRS</span>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN CONTENT CONTAINER -->
  <div class="main-container">
    
    <!-- ARTICLE CONTENT -->
    <article class="article-content">
      
      <section id="section-1" class="section-block">
        <h2>1. Emergency Spot Treatment Matrix for Indian Skin</h2>
        <p>Not all pimples are identical. Applying the wrong active spot treatment to a blind cyst or open whitehead can worsen tissue damage and cause permanent Post-Inflammatory Hyperpigmentation (PIH). Use this clinical matrix to select the right spot treatment:</p>

        <!-- Product Comparison Table -->
        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Pimple Type</th>
                <th>Primary Active</th>
                <th>Top Indian Product</th>
                <th>Action Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Pimple Type"><strong>Red Inflamed Papule</strong></td>
                <td data-label="Primary Active">2.5% Benzoyl Peroxide</td>
                <td data-label="Top Indian Product"><a href="/acne/benzoyl-peroxide-gel-2.5-vs-5-india/">Benzac AC 2.5%</a></td>
                <td data-label="Action Time">12 - 24 hours</td>
              </tr>
              <tr>
                <td data-label="Pimple Type"><strong>Pus-Filled Whitehead</strong></td>
                <td data-label="Primary Active">2% BHA + 6% Niacinamide</td>
                <td data-label="Top Indian Product"><a href="/acne/sebogel-salicylic-acid-niacinamide-gel-review-india/">Sebogel</a></td>
                <td data-label="Action Time">24 - 36 hours</td>
              </tr>
              <tr>
                <td data-label="Pimple Type"><strong>Popped / Drained Spot</strong></td>
                <td data-label="Primary Active">Hydrocolloid Patch</td>
                <td data-label="Top Indian Product">CosRX / Urban Yog Patch</td>
                <td data-label="Action Time">6 - 8 hours</td>
              </tr>
              <tr>
                <td data-label="Pimple Type"><strong>Deep Blind Cyst</strong></td>
                <td data-label="Primary Active">15% Azelaic Acid</td>
                <td data-label="Top Indian Product"><a href="/acne/azelaic-acid-15-20-percent-gel-cream-india/">Aziderm 15% Gel</a></td>
                <td data-label="Action Time">48 - 72 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Understanding how active pharmacological compounds interact with the follicular unit is critical for clearing stubborn acne. Treatment success depends on using targeted active strengths, preventing skin barrier collapse, and supporting cellular repair.</p>
        
        <div class="info-box">
          <h4>Hydrocolloid Patch Science</h4>
          <p>Hydrocolloid patches create a moist healing environment that draws out wound exudate (pus) and prevents bacterial secondary infection while stopping you from picking at the lesion.</p>
        </div>
      </section>

      <section id="section-2" class="section-block">
        <h2>2. Clinical Matrix: Active Papule vs Dark Spot Spot Correctors</h2>
        <p>Treating active acne papules requires antibacterial and keratolytic agents, whereas fading post-acne dark marks requires tyrosinase enzyme inhibitors. Applying strong peeling acids to active inflamed pimples on melanin-rich skin (Fitzpatrick IV–VI) causes thermal irritation that triggers extra melanin production, leaving permanent dark spots (PIH).</p>

        <div class="caution-box">
          <h4>Precaution: Acid Application</h4>
          <p>Don't apply peeling acids to inflamed lesions. Over-exfoliation during the active inflammatory stage can worsen tissue damage and extend healing times.</p>
        </div>

        <!-- Bento Grid -->
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-tag">Active Papule</span>
            </div>
            <h3 class="bento-title">Benzoyl Peroxide (BPO)</h3>
            <p class="bento-body">Antimicrobial compound that releases oxygen into the pore, sterilizing anaerobic <em>C. acnes</em> bacteria. Highly effective for early red swelling and inflammatory lesions.</p>
            <div class="bento-footer">
              <span>Goal: Shrink bump</span>
              <span style="color:var(--brand);">12-24hr Action</span>
            </div>
          </div>
          
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-tag">Dark Spot</span>
            </div>
            <h3 class="bento-title">Azelaic Acid</h3>
            <p class="bento-body">Dicarboxylic acid that selectively inhibits tyrosinase enzymes to prevent and fade Post-Inflammatory Hyperpigmentation (PIH) left behind by healed acne.</p>
            <div class="bento-footer">
              <span>Goal: Fade pigment</span>
              <span style="color:var(--brand);">Skin-brightening</span>
            </div>
          </div>
        </div>
      </section>

      <section id="section-3" class="section-block">
        <h2>3. Clinical Considerations & Treatment Protocol</h2>
        <p>Melanin-rich skin requires deliberate care when treating active acne. Inflammatory lesions rapidly trigger <strong>Post-Inflammatory Hyperpigmentation (PIH)</strong> if over-exfoliated or picked. Indian climate factors—such as high humidity during monsoons—increase sebum oxidation and Malassezia yeast activity.</p>
        
        <div class="warning-box">
          <h4>Warning: Hyperpigmentation Risk</h4>
          <p>Never pick or pop active pimples on dark skin. Physical trauma to the follicle aggressively accelerates melanin synthesis and guarantees a long-lasting dark mark.</p>
        </div>

        <p>Always pair active spot correctors or retinoids with morning <a href="/acne/episoft-ac-spf-30-moisturizer-acne-prone-skin-india/">non-comedogenic SPF 50 sunscreen</a> and follow evening treatments with a <a href="/acne/best-cica-moisturizer-for-acne-prone-skin-india/">ceramide barrier moisturizer</a>.</p>

        <div class="info-box">
          <h4>3-Stage Treatment Protocol for Indian Skin</h4>
          <p><strong>Stage 1 (Early Red Swelling):</strong> Apply 2.5% Benzoyl Peroxide gel or 2% Salicylic Acid gel twice daily for 24-48 hours.<br>
          <strong>Stage 2 (Drained Whitehead):</strong> Cover with a hydrocolloid pimple patch to draw out fluid and protect the barrier.<br>
          <strong>Stage 3 (Post-Acne Mark / PIH):</strong> Apply Azelaic Acid 15% or Alpha Arbutin 2% Serum morning and night to clear residual pigment.</p>
        </div>

        <h3>Dermatologist Treatment Protocol</h3>
        <p>Follow this structured active application schedule to achieve maximum clinical efficacy while minimizing stinging, flaking, or reactive hyperpigmentation:</p>
        <ul>
          <li><strong>Cleanse Gently:</strong> Wash with a non-stripping cleanser before applying active treatments.</li>
          <li><strong>Apply Targeted Active:</strong> Use a pea-sized amount or 2-3 drops directly on dry skin.</li>
          <li><strong>Buffer & Hydrate:</strong> Always follow with a non-comedogenic ceramide moisturizer.</li>
          <li><strong>Daily Sun Protection:</strong> Broad-spectrum SPF 50+ is non-negotiable every morning.</li>
        </ul>
        
        <p>Achieving long-term clearing of active acne lesions while preserving stratum corneum integrity requires strict adherence to evidence-based active dosing protocols. Dermatologists emphasize that over-application of topical keratolytics or antibacterial agents leads to acute trans-epidermal water loss (TEWL), triggering reactive sebum hyper-secretion and exacerbating microcomedone formation.</p>

      </section>

      <section id="faq" class="section-block">
        <h2>4. Frequently Asked Questions</h2>
        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              What is the fastest spot treatment for a painful pimple in India?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                For inflamed red pimples, 2.5% Benzoyl Peroxide gel (Benzac AC 2.5%) or 2% Salicylic Acid + 6% Niacinamide gel (Sebogel) flattens swelling within 12-24 hours.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              Should I apply spot treatments all over my face?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                No. Spot treatments contain concentrated active ingredients (2-5% BPO or 2% BHA) designed ONLY for active pimple heads. Applying them all over dry or un-congested skin will cause severe barrier peeling and redness.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              How do I treat a pimple spot without getting a dark mark (PIH)?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Never pick, pop, or squeeze the pimple. Apply a hydrocolloid pimple patch overnight to absorb fluid cleanly, then apply 10% Azelaic Acid or Alpha Arbutin serum morning and night once the head flattens.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              Is Sebogel good as a spot treatment for Indian skin?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Yes! Sebogel contains 2% Salicylic Acid to unclog the pore and 6% Niacinamide to prevent hyperpigmentation. It is one of the most dermatologist-recommended OTC spot gels in India.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              Can I use Benzoyl Peroxide 5% or 10% as a spot treatment?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Start with 2.5% Benzoyl Peroxide. Clinical studies show 2.5% Benzoyl Peroxide kills C. acnes bacteria just as effectively as 10% BPO, but with 70% less redness and dryness on Indian skin tones.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              When should I apply a pimple spot treatment in my routine?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Apply spot treatments after cleansing and light hydration, but directly onto dry target bumps before heavy occlusive moisturizers.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              Can I leave a spot gel on overnight?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Yes. Most BPO and BHA spot gels (like Zitcare S or Benzac AC) are designed for overnight leave-on application.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" aria-expanded="false">
              What spot treatment works best for deep cystic bumps under the skin?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Deep cysts without a visible whitehead respond best to warm compresses, followed by 15% Azelaic Acid or an oral anti-inflammatory prescribed by a dermatologist. Do not pop blind cysts.
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </article>

    <!-- DESKTOP SIDEBAR -->
    <aside class="desktop-sidebar">
      <div class="sidebar-card">
        <h4 class="sidebar-title">💡 Medical Review</h4>
        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 0;">All guides on MyMirror are reviewed by board-certified dermatologists. Protocol approved by <strong>Dr. Lipy Mehta</strong>.</p>
      </div>

      <div class="sidebar-card">
        <h4 class="sidebar-title">Key Protocol Rules</h4>
        <ul class="sidebar-list">
          <li>Apply on 100% dry skin</li>
          <li>Never pick active pimples</li>
          <li>Daily SPF 50 is mandatory</li>
        </ul>
      </div>
      
      <div class="sidebar-card">
        <h4 class="sidebar-title">Essential Protocols</h4>
        <ul class="sidebar-list" style="font-size: 0.85rem;">
          <li><a href="/acne/skin-purging-vs-breakout-india/">Skin Purging vs Breakout</a></li>
          <li><a href="/acne/adapalene-0.1-percent-gel-acne-india/">Adapalene 0.1% Retinoid Gel</a></li>
          <li><a href="/acne/pie-vs-pih-indian-skin/">PIE vs PIH on Brown Skin</a></li>
          <li><a href="/acne/best-cica-moisturizer-for-acne-prone-skin-india/">Best Cica Moisturizers</a></li>
        </ul>
      </div>
    </aside>
    
  </div>

  <!-- STICKY BOTTOM MOBILE CTA -->
  <div class="sticky-bottom-bar">
    <div class="mobile-bar-text">
      <strong>Free AI Skin Scan</strong>
      Check active ingredient compatibility
    </div>
    <a href="https://face3layerscanner.onrender.com/" class="mobile-bar-btn" target="_blank" rel="noopener">Start Scan</a>
  </div>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">MyMirror<span>.fit</span></div>
        <p class="footer-disclaimer">
          Science-Based Skin Health. MyMirror provides dermatologist-reviewed protocols for acne, pigmentation, and barrier repair tailored for Indian skin types.
        </p>
      </div>
      <div>
        <h4 style="color: #F8FAFC; margin-bottom: 1rem; font-size: 1rem;">Clinical Guides</h4>
        <ul style="list-style: none; padding: 0; line-height: 2;">
          <li><a href="/acne/types-of-acne/" style="color: #94A3B8;">Acne Types</a></li>
          <li><a href="/acne/forehead-acne/meaning/" style="color: #94A3B8;">Acne Meaning</a></li>
          <li><a href="/acne/forehead-acne/home-remedies/" style="color: #94A3B8;">Natural Remedies</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color: #F8FAFC; margin-bottom: 1rem; font-size: 1rem;">Tools</h4>
        <ul style="list-style: none; padding: 0; line-height: 2;">
          <li><a href="https://face3layerscanner.onrender.com/" style="color: #94A3B8;" target="_blank">AI Skin Scanner</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 MyMirror.fit • All Rights Reserved. Medical information is for educational purposes and does not replace professional consultation.
    </div>
  </footer>

  <!-- SCRIPTS -->
  <script>
    // FAQ Accordion Toggle
    document.querySelectorAll('.faq-header').forEach(button => {{
      button.addEventListener('click', () => {{
        const item = button.closest('.faq-item');
        const isActive = item.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(faq => {{
          faq.classList.remove('active');
          faq.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
        }});
        
        if (!isActive) {{
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
        }}
      }});
    }});

    // Intersection Observer for Section Reveal
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }}
      }});
    }}, {{ threshold: 0.1 }});

    document.querySelectorAll('.section-block').forEach((el) => {{
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    }});

    // TOC Scroll Spy
    const sections = document.querySelectorAll('.section-block');
    const navLinks = document.querySelectorAll('.toc-link');
    
    window.addEventListener('scroll', () => {{
      let current = '';
      sections.forEach(section => {{
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {{
          current = section.getAttribute('id');
        }}
      }});
      
      navLinks.forEach(link => {{
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${{current}}`) {{
          link.classList.add('active');
        }}
      }});
    }});
  </script>
</body>
</html>
"""

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(html_template)
print("Done!")
