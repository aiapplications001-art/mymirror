import re

with open('/Users/tm030/Documents/mymirror_repo/acne/adapalene-0.1-percent-gel-acne-india/index.html', 'r') as f:
    adapalene_html = f.read()

# Extract CSS from lines 120 to 1034
lines = adapalene_html.split('\n')
css_block = '\n'.join(lines[119:1034]) # 0-indexed: 119 to 1033

with open('/Users/tm030/Documents/mymirror_repo/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/index.html', 'r') as f:
    target_html = f.read()

# I will write out the full new HTML manually in Python to ensure I have full control over the template.

new_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review</title>
  <meta name="description" content="Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.">
  <link rel="canonical" href="https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/">

  <!-- Open Graph / Social Meta Tags -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/">
  <meta property="og:title" content="Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review">
  <meta property="og:description" content="Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.">
  <meta property="og:image" content="https://mymirror.fit/assets/images/obagi_clenziderm.jpg">

  <!-- Twitter Card Meta Tags -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/">
  <meta property="twitter:title" content="Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review">
  <meta property="twitter:description" content="Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.">
  <meta property="twitter:image" content="https://mymirror.fit/assets/images/obagi_clenziderm.jpg">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

  <!-- Structured Data -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review",
    "description": "Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.",
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
      "@id": "https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/"
    }},
    "image": "https://mymirror.fit/assets/images/obagi_clenziderm.jpg",
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
        "name": "How does solubilized 5% BPO differ from traditional BPO?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Solubilized BPO is formulated to penetrate deep into the follicle, reaching the P. acnes bacteria more effectively than micro-milled suspensions which sit on the skin's surface."
        }}
      }},
      {{
        "@type": "Question",
        "name": "Can I use Obagi Clenziderm MD every day?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Yes, but clinical protocols recommend a gradual introduction to prevent excessive trans-epidermal water loss (TEWL) and barrier disruption."
        }}
      }}
    ]
  }}
  </script>

  <!-- Google Analytics Tracker (Deferred) -->
  <script defer src="/assets/site-analytics.js"></script>

{css_block}
</head>
<body>

  <!-- 1. Header -->
  <header class="site-header">
    <a href="/" class="brand-logo">MyMirror<span>.fit</span></a>
    <a href="https://face3layerscanner.onrender.com/" class="header-cta">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
      Scan Face
    </a>
  </header>

  <!-- 2. Trust Bar -->
  <div class="trust-bar">
    <svg class="trust-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    <span>Reviewed by Dr. Lipy Mehta, Dermatologist • Updated August 2026</span>
  </div>

  <!-- 3. Sticky TOC Bar -->
  <nav class="sticky-toc-bar">
    <div class="toc-inner">
      <span class="toc-label">CONTENTS</span>
      <a href="#section-1" class="toc-link">Introduction</a>
      <a href="#section-2" class="toc-link">3-Step System</a>
      <a href="#section-3" class="toc-link">Mechanism of Action</a>
      <a href="#section-4" class="toc-link">Comparisons</a>
      <a href="#section-5" class="toc-link">Application & Protocol</a>
      <a href="#section-6" class="toc-link">FAQs</a>
    </div>
  </nav>

  <!-- 4. Dark Hero Section -->
  <section class="dark-hero">
    <div class="hero-container">
      <div class="hero-content">
        <span class="hero-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
          Clinical System Review (2026)
        </span>
        <h1 class="hero-title">Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review</h1>
        <p class="hero-subtitle">Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System and treatment protocols for USA patients.</p>
        
        <div class="hero-meta-list">
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Solubilized 5% BPO</span>
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>3-Step System</span>
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Derm-Dispensed</span>
          </div>
        </div>

        <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta">
          Start Free AI Skin Scan ✨
        </a>
      </div>

      <div class="hero-image-card">
        <img src="https://mymirror.fit/assets/images/obagi_clenziderm.jpg" alt="Obagi CLENZIderm M.D. Acne Therapeutic System" width="600" height="400">
        <div class="hero-image-tag">
          <span>Clinical Efficacy</span>
          <span class="hero-tag-accent">8-12 Weeks to Clear</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Main Container (Grid with Article + Sidebar) -->
  <div class="main-container">
    <article class="article-content">
      
      <section id="section-1" class="section-block">
        <h2>1. Introduction to the Clinical Paradigm Shift</h2>
        <p>For decades, acne therapeutics have relied on formulations that prioritize surface-level desquamation, often ignoring the architectural depth of the pilosebaceous unit. The <a href="/acne/treatments/">acne treatment landscape</a> shifted with the introduction of the Obagi Clenziderm MD Acne Therapeutic System. By leveraging a unique 5% solubilized benzoyl peroxide (BPO) coupled with a synergistic 2% salicylic acid (BHA) Pore Therapy, the system offers an unprecedented pharmacokinetic profile. This document explores the molecular interactions, stratum corneum penetration rates, and clinical efficacy of this comprehensive 3-step system.</p>
        <p>Patients battling <a href="/acne/cystic-acne/">cystic acne</a> or <a href="/acne/hormonal-acne/">hormonal breakouts</a> often experience a plateau with standard over-the-counter interventions. The Clenziderm system is uniquely formulated for the USA market, adhering to stringent clinical guidelines while maintaining potent active concentrations.</p>
        
        <div class="warning-box">
          <h4>Premium Price Point Alert</h4>
          <p>Obagi Clenziderm MD is a premium, derm-dispensed product line averaging <strong>$50-70 per product</strong> (or $150+ for the full kit). Due to the high cost, counterfeit products are common. Ensure you make a genuine purchase through an authorized medical provider or Obagi's official website.</p>
        </div>
      </section>

      <section id="section-2" class="section-block">
        <h2>2. The Architecture of the 3-Step System</h2>
        <p>The Obagi Clenziderm MD protocol consists of three meticulously calibrated phases:</p>
        
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-header">
              <h3 class="bento-title" style="margin:0; font-size: 1.1rem;">Step 1: Daily Care Foaming Cleanser</h3>
              <span class="bento-tag">2% BHA</span>
            </div>
            <div class="bento-body">
              Infused with 2% Salicylic Acid to dissolve sebum and disrupt desmosome linkages, providing a gentle physical exfoliation that complements chemical keratolysis.
            </div>
          </div>
          <div class="bento-card">
            <div class="bento-header">
              <h3 class="bento-title" style="margin:0; font-size: 1.1rem;">Step 2: Pore Therapy</h3>
              <span class="bento-tag">2% BHA Liquid</span>
            </div>
            <div class="bento-body">
              A liquid vehicle designed for deep follicular penetration. Lowers the pH and unplugs the follicle, creating a clear pathway for the therapeutic lotion.
            </div>
          </div>
          <div class="bento-card" style="grid-column: 1 / -1;">
            <div class="bento-header">
              <h3 class="bento-title" style="margin:0; font-size: 1.1rem;">Step 3: Therapeutic Lotion</h3>
              <span class="bento-tag">5% Solubilized BPO</span>
            </div>
            <div class="bento-body">
              The cornerstone of the system. Delivers fatal oxidative stress to <em>C. acnes</em> colonies. Targets bacteria at the source within the pilosebaceous duct.
            </div>
          </div>
        </div>

        <p>To fully appreciate the efficacy, one must understand how these components interact to regulate sebum production, mitigate hyperkeratinization, and reduce inflammation, which are the primary pillars of <a href="/acne/causes/">acne pathogenesis</a>.</p>
        
        <div class="info-box">
          <h4>Synergistic Exfoliation</h4>
          <p>The 2% BHA Pore Therapy acts as a powerful comedolytic agent, disrupting cellular junctions in the stratum corneum and clearing the path for the subsequent application of the therapeutic lotion.</p>
        </div>
      </section>

      <section id="section-3" class="section-block">
        <h2>3. Deep Dive: Mechanism of Action & BPO</h2>
        <p>Salicylic acid, a lipophilic beta-hydroxy acid, is widely recognized for its comedolytic properties. However, the vehicle in which it is delivered significantly alters its bioavailability. The Obagi Pore Therapy utilizes an advanced delivery matrix that enhances its ability to partition into the lipid-rich environment of the sebaceous gland.</p>
        
        <div class="info-box">
          <h4>Solubilized vs Suspended BPO</h4>
          <p>Traditional BPO formulations exist as crystalline suspensions with large particles (>10 microns) that sit on the skin's surface. Obagi's formulation <strong>solubilizes the BPO</strong>, shrinking particle size to sub-micron dimensions (1/10,000 the size of crystals). This allows it to penetrate deeply into the follicle to eradicate bacteria, rather than causing surface-level irritation.</p>
        </div>

        <p>Upon application, the 2% BHA initiates keratolysis by disrupting cellular junctions in the stratum corneum. This not only unplugs existing comedones but also primes the follicular ostia, creating a clear pathway for the subsequent application of the therapeutic lotion. This <a href="/acne/skincare-routine/">skincare synergy</a> is vital for maximizing the bactericidal effects of BPO.</p>
        
        <div class="caution-box">
          <h4>Higher Irritation Risk</h4>
          <p>Because the <strong>solubilized BPO penetrates deeper</strong> than traditional formulations, there is a higher irritation risk for sensitive skin types. Gradual titration is essential to avoid severe erythema and barrier compromise.</p>
        </div>

        <p>The micro-crystals integrated into the cleansing phase provide a gentle physical exfoliation that complements the chemical keratolysis of the BHA. This dual-action mechanism ensures that hyperkeratotic plugs are continuously removed, preventing the anaerobic environment required for acne proliferation.</p>
      </section>

      <section id="section-4" class="section-block">
        <h2>4. Comparative Analysis: System vs Alternatives</h2>
        <p>Patients often question the value proposition of a clinical system versus over-the-counter (OTC) alternatives. The core difference lies in the formulation chemistry.</p>
        
        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Obagi Clenziderm MD</th>
                <th>Proactiv (Original)</th>
                <th>CeraVe Acne System</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Feature">BPO Formulation</td>
                <td data-label="Obagi">5% Solubilized (Sub-micron)</td>
                <td data-label="Proactiv">2.5% Micro-crystal Suspension</td>
                <td data-label="CeraVe">4% Suspended with Ceramides</td>
              </tr>
              <tr>
                <td data-label="Feature">Follicular Penetration</td>
                <td data-label="Obagi">Very High (Deep reach)</td>
                <td data-label="Proactiv">Low-Moderate (Surface)</td>
                <td data-label="CeraVe">Low-Moderate (Surface)</td>
              </tr>
              <tr>
                <td data-label="Feature">Exfoliants Included</td>
                <td data-label="Obagi">2% BHA Cleanser & Toner</td>
                <td data-label="Proactiv">Glycolic Acid (AHA) Toner</td>
                <td data-label="CeraVe">AHA/BHA gel (separate)</td>
              </tr>
              <tr>
                <td data-label="Feature">Irritation Profile</td>
                <td data-label="Obagi">High (Titration needed)</td>
                <td data-label="Proactiv">Moderate (Drying)</td>
                <td data-label="CeraVe">Low (Barrier-friendly)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>For more comparisons, review our guide on <a href="/acne/clinical-vs-otc/">clinical versus OTC acne treatments</a>.</p>
      </section>

      <section id="section-5" class="section-block">
        <h2>5. Application Protocol and Maintenance</h2>
        <p>Because the Obagi Clenziderm system is highly active, integrating it into a <a href="/acne/daily-skincare/">daily skincare protocol</a> requires a strategic approach. Patients are advised to begin application every other day to assess tolerability. Erythema and desquamation are expected pharmacodynamic responses during the initial phase.</p>
        <p>To mitigate trans-epidermal water loss, it is crucial to incorporate a non-comedogenic, ceramide-rich moisturizer. Understanding <a href="/acne/purging-vs-breakouts/">purging versus breakouts</a> is essential; the initial acceleration of comedone expulsion (purging) is a positive clinical sign of the BHA's efficacy.</p>
        
        <h3>Dermatological Clinical Analysis & Patient Application Guidelines</h3>
        <p>Achieving long-term clearing of active acne lesions while preserving stratum corneum integrity requires strict adherence to evidence-based active dosing protocols. Dermatologists emphasize that over-application of topical keratolytics or antibacterial agents leads to acute trans-epidermal water loss (TEWL), triggering reactive sebum hyper-secretion and exacerbating microcomedone formation.</p>

        <p>To avoid chemical irritation and severe flaking, always follow the <strong>Sandwich Protocol</strong> when layering retinoids or high-strength acids: apply a light hydrating layer of non-comedogenic ceramide lotion, allow 10 minutes for absorption, apply your active treatment, and seal with a barrier moisturizer.</p>
        <ul>
          <li><strong>Morning Routine (AM):</strong> Cleanse with a mild hydrating wash, apply active spot treatment or serum, follow with barrier moisturizer, and complete with broad-spectrum SPF 50+ sunscreen.</li>
          <li><strong>Evening Routine (PM):</strong> Double-cleanse to remove UV filters and urban particulate matter, apply targeted treatment on 100% dry skin, and lock in hydration with ceramide-rich creams.</li>
        </ul>

        <h3>Preventing Post-Inflammatory Hyperpigmentation (PIH)</h3>
        <p>Melanin-rich skin (Fitzpatrick IV–VI) responds to skin barrier trauma by accelerating melanin synthesis. Never pick, pop, or scratch active inflammatory papules. Use hydrocolloid patches on whiteheads to absorb exudate, and introduce brightening actives like 4% Niacinamide, 2% Alpha Arbutin, or 15% Azelaic Acid once inflammation subsides.</p>
        <p>Once clinical clearance is achieved, patients may titrate the frequency of the therapeutic lotion to a maintenance schedule. Continual use of the Pore Therapy is often recommended to prevent microcomedone formation. Incorporating a broad-spectrum SPF is non-negotiable, as BHA and BPO can increase photosensitivity, risking <a href="/acne/post-inflammatory-hyperpigmentation/">post-inflammatory hyperpigmentation (PIH)</a>.</p>
      </section>
      
      <section id="section-6" class="section-block">
        <h2>6. Frequently Asked Questions</h2>
        
        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-header">
              How does solubilized 5% BPO differ from traditional BPO?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <p>Solubilized BPO is formulated to penetrate deep into the follicle, reaching the P. acnes bacteria more effectively than micro-milled suspensions which sit on the skin's surface.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-header">
              Can I use Obagi Clenziderm MD every day?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <p>Yes, but clinical protocols recommend a gradual introduction to prevent excessive trans-epidermal water loss (TEWL) and barrier disruption.</p>
            </div>
          </div>
        </div>
      </section>

    </article>

    <!-- 7. Desktop Sidebar -->
    <aside class="desktop-sidebar">
      <div class="sidebar-card" style="background: var(--brand-light); border-color: var(--brand); position: sticky; top: 120px;">
        <h4 style="margin-bottom: 0.5rem; color: var(--brand-dark);">⚕️ Medical Review</h4>
        <p style="font-size: 0.85rem; color: #475569; margin-bottom: 1rem;">Reviewed by Dr. Lipy Mehta, Dermatologist. Content strictly adheres to clinical guidelines for acne treatment in the USA.</p>
        
        <h4 style="margin-bottom: 0.5rem; font-size: 1rem;">Quick Stats</h4>
        <ul style="list-style: none; padding: 0; font-size: 0.85rem; color: #475569;">
          <li style="margin-bottom: 0.5rem; display: flex; gap: 0.5rem;">
            <span style="color: var(--brand);">✓</span> <strong>Treatment:</strong> 8-12 weeks
          </li>
          <li style="margin-bottom: 0.5rem; display: flex; gap: 0.5rem;">
            <span style="color: var(--brand);">✓</span> <strong>Actives:</strong> 5% Solubilized BPO, 2% BHA
          </li>
          <li style="margin-bottom: 0.5rem; display: flex; gap: 0.5rem;">
            <span style="color: var(--brand);">✓</span> <strong>Target:</strong> Mod-severe acne
          </li>
        </ul>
        
        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; font-size: 1rem;">When to Consult</h4>
        <p style="font-size: 0.85rem; color: #475569;">If you experience excessive peeling, severe erythema, or no improvement after 12 weeks, discontinue use and consult a board-certified dermatologist.</p>
      </div>
    </aside>
  </div>

  <!-- 8. Mobile Sticky Bottom Bar -->
  <div class="sticky-bottom-bar" style="position: fixed; bottom: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 0.8rem 1.2rem; box-shadow: 0 -5px 20px rgba(0,0,0,0.1); z-index: 2000; border-top: 1px solid var(--border); display: none;">
    <a href="https://face3layerscanner.onrender.com/" style="display: block; width: 100%; text-align: center; padding: 12px 0; font-size: 1.05rem; box-shadow: 0 8px 20px rgba(236,97,14,0.3); text-decoration: none; border-radius: 9999px; background: var(--brand); color: #fff; font-weight: 800;">Analyze My Acne Fast</a>
  </div>
  <style>
    @media (max-width: 991px) {{
      .sticky-bottom-bar {{
        display: block !important;
      }}
    }}
  </style>

  <!-- 9. Site Footer -->
  <footer class="site-footer" style="background: #0F1316; padding: 4rem 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); color: #94A3B8; text-align: center;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; text-align: left;">
      <div>
        <h4 style="color: #FFFFFF; font-family: 'Kantumruy Pro', serif; font-size: 1.2rem; margin-bottom: 1rem;">MyMirror<span style="color: var(--brand);">.fit</span></h4>
        <p style="font-size: 0.85rem;">Clinical skincare insights and AI analysis for Indian skin types.</p>
      </div>
      <div>
        <h4 style="color: #FFFFFF; margin-bottom: 1rem;">Legal</h4>
        <ul style="list-style: none; padding: 0; font-size: 0.85rem;">
          <li style="margin-bottom: 0.5rem;"><a href="/legal/terms/" style="color: #94A3B8;">Terms of Service</a></li>
          <li style="margin-bottom: 0.5rem;"><a href="/legal/privacy/" style="color: #94A3B8;">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <p style="font-size: 0.85rem;">&copy; 2026 MyMirror Dermatology</p>
      </div>
    </div>
  </footer>

  <!-- 10. Scripts -->
  <script>
    // Intersection Observer for scroll spy
    const observerOptions = {{
        root: null,
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0
    }};
    
    const sections = document.querySelectorAll('.section-block');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    const observer = new IntersectionObserver((entries) => {{
        entries.forEach(entry => {{
            if (entry.isIntersecting) {{
                const id = entry.target.getAttribute('id');
                tocLinks.forEach(link => {{
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${{id}}`) {{
                        link.classList.add('active');
                    }}
                }});
            }}
        }});
    }}, observerOptions);
    
    sections.forEach(section => observer.observe(section));

    // FAQ Accordion
    document.querySelectorAll('.faq-header').forEach(button => {{
        button.addEventListener('click', () => {{
            const faqItem = button.closest('.faq-item');
            const isActive = faqItem.classList.contains('active-faq');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(item => {{
                item.classList.remove('active-faq');
                item.querySelector('.faq-body').style.maxHeight = null;
            }});
            
            // Open clicked if it wasn't active
            if (!isActive) {{
                faqItem.classList.add('active-faq');
                const body = faqItem.querySelector('.faq-body');
                body.style.maxHeight = body.scrollHeight + "px";
            }}
        }});
    }});
  </script>
</body>
</html>"""

with open('/Users/tm030/Documents/mymirror_repo/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/index.html', 'w') as f:
    f.write(new_html)

print("Successfully written HTML")
