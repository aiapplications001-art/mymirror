import os, json

base_dir = "/Users/tm030/Documents/mymirror_repo"

def build_non_comp_html(
    slug,
    title,
    description,
    canonical_url,
    og_image,
    schema_json,
    badge_class,
    badge_text,
    badge_desc,
    hero_title,
    hero_subtitle,
    bento_html,
    section1_title,
    section1_body,
    section2_title,
    section2_body,
    product_showcase_html,
    routine_title,
    routine_table_html,
    guide_title,
    guide_body,
    faq_html
):
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="{canonical_url}">

  <!-- Favicons -->
  <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png?v=3">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3">

  <!-- Open Graph / Social Meta Tags -->
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:type" content="article">
  <meta property="og:image" content="{og_image}">

  <!-- Legacy WhatsApp Web Image Link Fallback -->
  <link rel="image_src" href="{og_image}">

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="{og_image}">

  <!-- Google Analytics Tracker -->
  <script defer src="/assets/site-analytics.js"></script>

  <!-- Google Fonts Import -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,300..700;1,300..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  {schema_json}
  </script>

  <style>
    :root {{
      --brand: #EC610E;
      --brand-dark: #C44E09;
      --brand-light: #FFF4EE;
      --text: #1E293B;
      --text-muted: #64748B;
      --bg: #F8FAFC;
      --card-bg: #FFFFFF;
      --border: #E2E8F0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);
      --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04);
      --font-heading: 'Kantumruy Pro', sans-serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: var(--font-body); color: var(--text); background: var(--bg); line-height: 1.7; font-size: 16px; }}
    header {{ background: var(--card-bg); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; }}
    .nav-container {{ max-width: 1200px; margin: 0 auto; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; }}
    .logo {{ font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--brand); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; }}
    .nav-links {{ display: flex; gap: 1.5rem; list-style: none; }}
    .nav-links a {{ text-decoration: none; color: var(--text); font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }}
    .nav-links a:hover {{ color: var(--brand); }}
    
    .container {{ max-width: 1000px; margin: 0 auto; padding: 2.5rem 1.5rem; }}
    
    /* Protocol Banner */
    .protocol-banner {{ background: var(--card-bg); border-radius: 16px; padding: 1.5rem 2rem; border: 1px solid var(--border); box-shadow: var(--shadow); margin-bottom: 2rem; display: flex; align-items: center; gap: 1.5rem; }}
    .protocol-badge {{ padding: 0.5rem 1rem; border-radius: 9999px; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0; }}
    .badge-green {{ background: #DCFCE7; color: #166534; border: 1px solid #BBF7D0; }}
    .badge-yellow {{ background: #FEF9C3; color: #854D0E; border: 1px solid #FEF08A; }}
    
    /* Hero Header */
    .hero {{ text-align: center; margin-bottom: 3rem; }}
    .hero h1 {{ font-family: var(--font-heading); font-size: 2.25rem; font-weight: 700; color: #0F172A; margin-bottom: 1rem; line-height: 1.3; }}
    .hero p {{ font-size: 1.125rem; color: var(--text-muted); max-width: 800px; margin: 0 auto 1.5rem; }}
    .hero-meta {{ display: flex; align-items: center; justify-content: center; gap: 1.5rem; font-size: 0.875rem; color: var(--text-muted); }}
    
    /* Main Visual Image */
    .main-visual {{ width: 100%; max-height: 480px; object-fit: cover; border-radius: 16px; margin-bottom: 3rem; box-shadow: var(--shadow-lg); }}

    /* Bento Grid */
    .bento-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }}
    .bento-card {{ background: var(--card-bg); padding: 1.75rem; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow); transition: transform 0.2s, box-shadow 0.2s; }}
    .bento-card:hover {{ transform: translateY(-2px); box-shadow: var(--shadow-lg); }}
    .bento-icon {{ font-size: 2rem; margin-bottom: 1rem; }}
    .bento-title {{ font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 0.5rem; }}
    .bento-desc {{ color: var(--text-muted); font-size: 0.925rem; line-height: 1.6; }}

    /* Content Sections */
    .content-section {{ background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); padding: 2rem; margin-bottom: 2.5rem; box-shadow: var(--shadow); }}
    .content-section h2 {{ font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: #0F172A; margin-bottom: 1.25rem; border-bottom: 2px solid var(--brand-light); padding-bottom: 0.5rem; }}
    .content-section h3 {{ font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: #334155; margin: 1.5rem 0 0.75rem; }}
    .content-section p {{ margin-bottom: 1.25rem; color: #334155; font-size: 1rem; }}
    .content-section ul, .content-section ol {{ margin-left: 1.5rem; margin-bottom: 1.25rem; color: #334155; }}
    .content-section li {{ margin-bottom: 0.5rem; }}

    /* Tables */
    .table-wrapper {{ overflow-x: auto; background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow); margin-bottom: 3rem; }}
    table {{ width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }}
    th {{ background: #F1F5F9; padding: 1rem 1.25rem; font-family: var(--font-heading); font-weight: 700; color: #0F172A; border-bottom: 1px solid var(--border); }}
    td {{ padding: 1rem 1.25rem; border-bottom: 1px solid var(--border); vertical-align: top; }}
    tr:last-child td {{ border-bottom: none; }}

    /* Product Showcase Grid */
    .product-showcase-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1rem; }}
    .product-card {{ background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); padding: 1.5rem; box-shadow: var(--shadow); display: flex; flex-direction: column; align-items: center; text-align: center; }}
    .product-image-wrapper {{ width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 12px; margin-bottom: 1rem; background: #F1F5F9; }}
    .product-image-wrapper img {{ max-height: 100%; max-width: 100%; object-fit: contain; }}
    .product-title {{ font-family: var(--font-heading); font-weight: 700; font-size: 1.1rem; color: #0F172A; margin-bottom: 0.5rem; }}
    .product-specs {{ font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; }}
    .product-badge {{ background: var(--brand-light); color: var(--brand); font-weight: 700; font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 9999px; text-transform: uppercase; margin-bottom: 1rem; }}

    /* FAQ Section */
    .faq-item {{ border-bottom: 1px solid var(--border); padding: 1.25rem 0; }}
    .faq-item:last-child {{ border-bottom: none; }}
    .faq-question {{ font-family: var(--font-heading); font-weight: 700; font-size: 1.1rem; color: #0F172A; margin-bottom: 0.5rem; }}
    .faq-answer {{ color: #334155; font-size: 0.95rem; line-height: 1.6; }}

    /* Perimeter CTA Banner */
    .perimeter-cta {{ background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color: #FFFFFF; border-radius: 20px; padding: 2.5rem; text-align: center; margin: 3rem 0; box-shadow: var(--shadow-lg); }}
    .perimeter-cta h2 {{ font-family: var(--font-heading); font-size: 1.75rem; color: #FFFFFF; margin-bottom: 1rem; }}
    .perimeter-cta p {{ color: #94A3B8; font-size: 1.05rem; max-width: 650px; margin: 0 auto 1.5rem; }}
    .cta-btn {{ display: inline-block; background: var(--brand); color: #FFFFFF; font-weight: 700; font-size: 1rem; padding: 0.875rem 2rem; border-radius: 9999px; text-decoration: none; transition: background 0.2s, transform 0.2s; }}
    .cta-btn:hover {{ background: var(--brand-dark); transform: scale(1.02); }}

    footer {{ background: var(--card-bg); border-top: 1px solid var(--border); padding: 3rem 1.5rem; color: var(--text-muted); font-size: 0.875rem; margin-top: 4rem; }}
    .footer-container {{ max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; text-align: center; }}
    .footer-links {{ display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }}
    .footer-links a {{ color: var(--text-muted); text-decoration: none; }}
    .footer-links a:hover {{ color: var(--brand); }}

    @media (max-width: 768px) {{
      .hero h1 {{ font-size: 1.75rem; }}
      .product-showcase-grid {{ grid-template-columns: 1fr; }}
      .protocol-banner {{ flex-direction: column; text-align: center; }}
    }}
  </style>
</head>
<body>
  <header>
    <div class="nav-container">
      <a href="/" class="logo">
        <span>🪞 MyMirror</span>
      </a>
      <ul class="nav-links">
        <li><a href="/acne/">Acne Guides</a></li>
        <li><a href="/skin-analysis/">Skin Scan</a></li>
        <li><a href="/about/">About Us</a></li>
      </ul>
    </div>
  </header>

  <main class="container">
    <!-- Protocol Banner -->
    <div class="protocol-banner">
      <div class="protocol-badge {badge_class}">{badge_text}</div>
      <div>
        <p style="font-size: 0.95rem; color: var(--text);">{badge_desc}</p>
      </div>
    </div>

    <!-- Hero Header -->
    <section class="hero">
      <h1>{hero_title}</h1>
      <p>{hero_subtitle}</p>
      <div class="hero-meta">
        <span>✍️ Medically Reviewed by Dr. Lipy Mehta, MD</span>
        <span>•</span>
        <span>📅 Updated August 2026</span>
        <span>•</span>
        <span>⏱️ 10 Min Read</span>
      </div>
    </section>

    <!-- Main Visual Asset -->
    <img src="{og_image}" alt="{hero_title}" class="main-visual">

    <!-- Bento Grid Key Pillars -->
    <div class="bento-grid">
      {bento_html}
    </div>

    <!-- Clinical Section 1 -->
    <section class="content-section">
      <h2>{section1_title}</h2>
      {section1_body}
    </section>

    <!-- Clinical Section 2 -->
    <section class="content-section">
      <h2>{section2_title}</h2>
      {section2_body}
    </section>

    <!-- Recommended Products Showcase -->
    <section class="content-section">
      <h2 style="text-align: center; margin-bottom: 1.5rem;">Recommended Formulations for Indian Skin</h2>
      <div class="product-showcase-grid">
        {product_showcase_html}
      </div>
    </section>

    <!-- Routine Table Section -->
    <section class="content-section">
      <h2>{routine_title}</h2>
      <div class="table-wrapper" style="margin-bottom: 0;">
        {routine_table_html}
      </div>
    </section>

    <!-- Clinical Step Guide Section -->
    <section class="content-section">
      <h2>{guide_title}</h2>
      {guide_body}
    </section>

    <!-- Perimeter CTA Section -->
    <section class="perimeter-cta">
      <h2>Unsure About Your Skin Barrier Status?</h2>
      <p>Scan your face using MyMirror's AI Skin Analyzer to assess barrier hydration, active redness, and pore congestion in 30 seconds.</p>
      <a href="https://mymirror.fit/analyze-face" class="cta-btn">Analyze My Skin Free 🔍</a>
    </section>

    <!-- FAQ Section -->
    <section class="content-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-container">
        {faq_html}
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-container">
      <p>&copy; 2026 MyMirror Dermatological Intelligence. All Rights Reserved. Clinical decision-support protocol created in accordance with Indian Dermatological Standards.</p>
      <div class="footer-links">
        <a href="/privacy-policy/">Privacy Policy</a>
        <a href="/terms-of-service/">Terms of Service</a>
        <a href="/acne/">Acne Index</a>
        <a href="/sitemap.xml">Sitemap</a>
      </div>
    </div>
  </footer>
</body>
</html>
"""
    return html

print("Non-comparison HTML builder function ready.")

# ==============================================================
# PAGE 1: How to Heal Damaged Skin Barrier from Acne Actives
# ==============================================================
p1_slug = "acne/active-burn-skin-barrier-healing-guide-india"
p1_dir = os.path.join(base_dir, p1_slug)
os.makedirs(p1_dir, exist_ok=True)

p1_title = "How to Heal a Damaged Skin Barrier from Acne Actives in India (2026) | MyMirror"
p1_desc = "Complete clinical guide to repairing a compromised lipid skin barrier caused by retinoids, AHA/BHA, or benzoyl peroxide on Indian skin. Check our 7-day active fast protocol, ceramide repair products & derm routine."
p1_url = f"https://mymirror.fit/{p1_slug}/"
p1_og = "https://mymirror.fit/assets/images/skin_barrier_repair_acne_actives_india.jpg"

p1_schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": f"{p1_url}#webpage",
      "url": p1_url,
      "name": "How to Heal Damaged Skin Barrier from Acne Actives Protocol Guide",
      "description": "Clinical emergency recovery protocol for repairing over-exfoliated skin barrier from acne actives. Transepidermal water loss reduction, ceramide lipid restoration, product reviews, and derm routines.",
      "aspect": ["Treatment", "Diagnosis", "Prevention"],
      "medicalAudience": "Patient",
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "reviewedBy": { "@type": "Person", "name": "Dr. Lipy Mehta", "jobTitle": "Board-Certified Dermatologist" }
    },
    {
      "@type": "FAQPage",
      "@id": f"{p1_url}#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to repair a damaged skin barrier from acne actives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For mild active burn or over-exfoliation, initial relief occurs within 3 to 7 days using an Active Fast and Ceramide cream. Complete structural restoration of stratum corneum lipid bilayers typically takes 14 to 28 days—matching your skin's natural epidermal cell renewal cycle."
          }
        },
        {
          "@type": "Question",
          "name": "Can a damaged skin barrier cause more acne breakouts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! When your skin barrier is compromised, microscopic cracks develop in the lipid corneum. Bacteria (Cutibacterium acnes) easily penetrate, while transepidermal water loss triggers your sebaceous glands to overproduce oil—leading to rapid rebound acne breakouts."
          }
        },
        {
          "@type": "Question",
          "name": "Should I completely stop using Salicylic Acid and Retinoids while repairing my barrier?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You must implement a 100% Active Fast. Cease all Salicylic Acid, Glycolic Acid, Retinoids (Tretinoin/Adapalene), Benzoyl Peroxide, and Vitamin C for at least 7 to 10 days until all stinging, redness, and peeling subside."
          }
        },
        {
          "@type": "Question",
          "name": "Is Aloe Vera gel enough to repair a severely damaged skin barrier?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While Aloe Vera provides temporary cooling and hydration, it lacks essential structural lipids (Ceramides, Fatty Acids, Cholesterol) required to seal intercellular microscopic gaps. Pair Aloe Vera or Cica with a dedicated Ceramide-based moisturizer."
          }
        }
      ]
    }
  ]
}

p1_bento = """
<div class="bento-card">
  <div class="bento-icon">🛑</div>
  <div class="bento-title">1. Immediate Active Fast</div>
  <div class="bento-desc">Instantly pause all retinoids, AHA/BHA exfoliants, benzoyl peroxide, and Vitamin C. Allow epidermal stem cells time to synthesize new desmosomal junctions without chemical disruption.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🧬</div>
  <div class="bento-title">2. Ceramide Replenishment</div>
  <div class="bento-desc">Rebuild intercellular cement using bio-identical Ceramides (NP, AP, EOP), Fatty Acids, and Cholesterol in a 3:1:1 physiological ratio to plug microscopic stratum corneum fissures.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🌿</div>
  <div class="bento-title">3. Cica & Centella Soothing</div>
  <div class="bento-desc">Incorporate Madecassoside and Centella Asiatica to suppress neutrophil-mediated interleukin (IL-1α) cascade, halting facial stinging and hot flushing.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🔒</div>
  <div class="bento-title">4. TEWL Moisture Lock</div>
  <div class="bento-desc">Seal in hydration with non-comedogenic occlusives like Squalane or Hyaluronic Acid to stop Transepidermal Water Loss (TEWL) and eliminate micro-peeling.</div>
</div>
"""

p1_sec1_title = "5 Clinical Signs Your Skin Barrier Is Damaged from Acne Actives"
p1_sec1_body = """
<p>Over-exfoliating or combining powerful acne actives (such as 0.025% Tretinoin, 2% Salicylic Acid, or 5% Benzoyl Peroxide) can strip the intercellular lipid matrix of your stratum corneum. Recognising barrier damage early prevents severe chemical burns and rebound hyperpigmentation on Indian skin:</p>

<h3>1. Stinging Upon Applying Plain Water or Basic Moisturizer</h3>
<p>When lipid bilayers dissolve, bare nerve endings in the upper dermis become exposed. If your usual gentle cleanser or plain room-temperature water causes a sharp burning or stinging sensation, your skin barrier is severely compromised.</p>

<h3>2. Persistent Hot Flushing and Erythema</h3>
<p>Pro-inflammatory cytokines (TNF-α, IL-6) surge in response to epidermal lipid loss, dilating superficial blood vessels. Your face may feel hot to the touch and display persistent red or pink patches.</p>

<h3>3. Tight, Shiny, Porcelain-Like Skin Texture</h3>
<p>Skin that looks smooth and shiny but feels uncomfortably tight when smiling is not "glowing"—it is stripped of natural moisturising factors (NMF) and corneocyte layers.</p>

<h3>4. Micro-Flaking, Roughness & Peeling</h3>
<p>Without adequate lipid cement, corneocytes detach irregularly instead of shedding invisibly, resulting in fine dry flakes around the mouth, nose, and chin.</p>

<h3>5. Sudden Rebound Papular Breakouts</h3>
<p>A compromised barrier allows <em>C. acnes</em> bacteria to easily enter microscopic skin fissures, while TEWL forces your oil glands to over-secrete sebum, causing rapid new breakouts.</p>
"""

p1_sec2_title = "The Science of Epidermal Barrier Repair"
p1_sec2_body = """
<p>The stratum corneum is structurally modeled as a <strong>brick-and-mortar system</strong>: dead corneocytes represent the bricks, while intercellular lipids (50% Ceramides, 25% Cholesterol, 15% Free Fatty Acids) form the protective mortar.</p>
<p>When acne actives lower skin pH below 3.0 or dissolve lipids, this protective mortar breaks down. Repairing the barrier requires replenishing these precise lipids alongside anti-inflammatory agents to halt TEWL and allow epidermal recovery.</p>
"""

p1_products = """
<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/cica_moisturizer_india_og.jpg" alt="Minimalist 0.3% Ceramide Barrier Repair Cream">
  </div>
  <div class="product-badge">Ceramide Repair Hero</div>
  <div class="product-title">Minimalist 0.3% Ceramide Barrier Cream</div>
  <div class="product-specs">3 Ceramides + Bisabolol + Madecassoside | 50g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Formulated with 5 essential ceramides in a 3:1:1 lipid ratio to rebuild damaged stratum corneum bilayers and eliminate stinging on Indian skin.</p>
</div>

<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/oil_free_moisturizer_og.jpg" alt="Cetaphil / CeraVe Damaged Skin Relief Cream">
  </div>
  <div class="product-badge">Soothe & Hydrate</div>
  <div class="product-title">Cetaphil Damaged Barrier Relief Cream</div>
  <div class="product-specs">Niacinamide + Panthenol + Glycerin | 100g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Hypoallergenic, non-comedogenic moisture cream that seals in TEWL protection without clogging acne-prone pores during barrier recovery.</p>
</div>
"""

p1_routine_title = "7-Day Emergency Barrier Repair Routine (AM/PM Protocol)"
p1_routine_table = """
<table>
  <thead>
    <tr>
      <th>Recovery Phase</th>
      <th>Step 1: Cleanse</th>
      <th>Step 2: Soothe & Hydrate</th>
      <th>Step 3: Barrier Repair Cream</th>
      <th>Step 4: Sun Defense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Days 1 – 2 (Active Fast Phase)</strong></td>
      <td>Lukewarm Water Rinse or Ultra-Gentle Lotion Cleanser</td>
      <td>Pure Centella / Hyaluronic Serum (on damp skin)</td>
      <td>Rich Ceramide 3:1:1 Repair Cream (Generous layer)</td>
      <td>Physical Mineral Sunscreen (Zinc Oxide preferred)</td>
    </tr>
    <tr>
      <td><strong>Days 3 – 5 (Restoration Phase)</strong></td>
      <td>Sulfate-Free Non-Foaming Cleanser</td>
      <td>Cica / Panthenol Hydrating Essence</td>
      <td>Ceramide + Madecassoside Cream</td>
      <td>Mineral SPF 50 PA++++ Sunscreen</td>
    </tr>
    <tr>
      <td><strong>Days 6 – 7 (Fortification Phase)</strong></td>
      <td>Gentle Hydrating Gel Cleanser</td>
      <td>5% Niacinamide / Hyaluronic Serum</td>
      <td>Ceramide Barrier Cream</td>
      <td>Broad-Spectrum SPF 50 Sunscreen</td>
    </tr>
  </tbody>
</table>
"""

p1_guide_title = "Step-by-Step 7-Day Clinical Barrier Healing Protocol"
p1_guide_body = """
<h3>Step 1: Declare an Immediate Active Fast</h3>
<p>Stop using all chemical exfoliants (Salicylic Acid, Glycolic Acid, Lactic Acid), retinoids (Tretinoin, Adapalene, Retinol), Benzoyl Peroxide, and Vitamin C for a minimum of 7 consecutive days. Do not scrub or exfoliate manually.</p>

<h3>Step 2: Switch to Lukewarm Water & Non-Foaming Cleanser</h3>
<p>Avoid hot water, which strips natural lipids. Use a pH 5.5 lotion cleanser free from harsh sulfates (SLS/SLES), fragrances, or essential oils.</p>

<h3>Step 3: Apply Ceramides on Damp Skin</h3>
<p>Within 60 seconds of washing your face, apply a ceramide-rich repair cream while skin is still slightly damp. This locks in moisture and accelerates lipid bilayer assembly.</p>

<h3>Step 4: Protect with Mineral Sunscreen</h3>
<p>Chemical sunscreen filters (like Avobenzone) can sting a damaged barrier. Use physical mineral sunscreens containing Zinc Oxide or Titanium Dioxide to reflect UV rays without burning.</p>
"""

p1_faq = """
<div class="faq-item">
  <div class="faq-question">How long does it take to repair a damaged skin barrier from acne actives?</div>
  <div class="faq-answer">For mild active burn or over-exfoliation, initial relief occurs within 3 to 7 days using an Active Fast and Ceramide cream. Complete structural restoration of stratum corneum lipid bilayers typically takes 14 to 28 days—matching your skin's natural epidermal cell renewal cycle.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Can a damaged skin barrier cause more acne breakouts?</div>
  <div class="faq-answer">Yes! When your skin barrier is compromised, microscopic cracks develop in the lipid corneum. Bacteria (Cutibacterium acnes) easily penetrate, while transepidermal water loss triggers your sebaceous glands to overproduce oil—leading to rapid rebound acne breakouts.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Should I completely stop using Salicylic Acid and Retinoids while repairing my barrier?</div>
  <div class="faq-answer">Yes. You must implement a 100% Active Fast. Cease all Salicylic Acid, Glycolic Acid, Retinoids (Tretinoin/Adapalene), Benzoyl Peroxide, and Vitamin C for at least 7 to 10 days until all stinging, redness, and peeling subside.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Is Aloe Vera gel enough to repair a severely damaged skin barrier?</div>
  <div class="faq-answer">No. While Aloe Vera provides temporary cooling and hydration, it lacks essential structural lipids (Ceramides, Fatty Acids, Cholesterol) required to seal intercellular microscopic gaps. Pair Aloe Vera or Cica with a dedicated Ceramide-based moisturizer.</div>
</div>
"""

p1_html = build_non_comp_html(
    slug=p1_slug,
    title=p1_title,
    description=p1_desc,
    canonical_url=p1_url,
    og_image=p1_og,
    schema_json=json.dumps(p1_schema, indent=2),
    badge_class="badge-green",
    badge_text="Barrier Rescue Protocol",
    badge_desc="Step-by-step 7-day emergency protocol to repair an over-exfoliated lipid skin barrier caused by acne actives on Indian skin.",
    hero_title="How to Heal a Damaged Skin Barrier from Acne Actives in India",
    hero_subtitle="Clinical emergency recovery guide to restore stratum corneum lipid bilayers, stop facial burning, and prevent rebound hyperpigmentation.",
    bento_html=p1_bento,
    section1_title=p1_sec1_title,
    section1_body=p1_sec1_body,
    section2_title=p1_sec2_title,
    section2_body=p1_sec2_body,
    product_showcase_html=p1_products,
    routine_title=p1_routine_title,
    routine_table_html=p1_routine_table,
    guide_title=p1_guide_title,
    guide_body=p1_guide_body,
    faq_html=p1_faq
)

with open(os.path.join(p1_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(p1_html)

print("✅ True Non-Comparison Page 1 built successfully.")


# ==============================================================
# PAGE 2: Post-Inflammatory Erythema (PIE) Red Marks Treatment
# ==============================================================
p2_slug = "acne/pie-red-spots-treatment-routine-india"
p2_dir = os.path.join(base_dir, p2_slug)
os.makedirs(p2_dir, exist_ok=True)

p2_title = "Post-Inflammatory Erythema (PIE) Red Acne Marks Treatment India (2026) | MyMirror"
p2_desc = "Dermatologist guide to treating post-inflammatory erythema (PIE red/purple acne marks) on Indian skin. Check our active ingredient protocols (Azelaic Acid 15%, Tranexamic Acid 5%), product reviews & derm routine."
p2_url = f"https://mymirror.fit/{p2_slug}/"
p2_og = "https://mymirror.fit/assets/images/pie_red_acne_marks_treatment_india.jpg"

p2_schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": f"{p2_url}#webpage",
      "url": p2_url,
      "name": "Post-Inflammatory Erythema (PIE) Red Acne Marks Treatment Protocol Guide",
      "description": "Dermatological clinical guide for treating PIE red vascular marks on Indian skin. Azelaic acid, tranexamic acid, vascular laser recommendations, product reviews, and derm routines.",
      "aspect": ["Treatment", "Diagnosis", "Prevention"],
      "medicalAudience": "Patient",
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "reviewedBy": { "@type": "Person", "name": "Dr. Lipy Mehta", "jobTitle": "Board-Certified Dermatologist" }
    },
    {
      "@type": "FAQPage",
      "@id": f"{p2_url}#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between PIE (red spots) and PIH (dark spots)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PIE (Post-Inflammatory Erythema) is caused by damaged or dilated dermal blood capillaries, resulting in flat red, pink, or purple marks. PIH (Post-Inflammatory Hyperpigmentation) is caused by excess melanin deposition in the epidermis, resulting in flat brown or black spots."
          }
        },
        {
          "@type": "Question",
          "name": "How can I tell if my mark is PIE or PIH at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perform the simple Glass Diascopy Test: press a clear glass or transparent slide against the mark. If the spot temporarily disappears or turns white (blanches), it is PIE (vascular). If the spot stays dark brown, it is PIH (melanin)."
          }
        },
        {
          "@type": "Question",
          "name": "Does Salicylic Acid or Hydroquinone fade PIE red marks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Melanin-inhibiting agents like Hydroquinone do not treat PIE because PIE is a vascular blood vessel issue, not a melanin pigment issue. Use Azelaic Acid 15%, Tranexamic Acid 5%, or Centella Asiatica to constrict microcapillaries."
          }
        },
        {
          "@type": "Question",
          "name": "How long does PIE take to fade on Indian skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Without treatment, PIE can take 3 to 12 months to fade naturally. Consistent daily application of 15% Azelaic Acid gel and 3-5% Tranexamic Acid serum, combined with strict broad-spectrum SPF 50 sunscreen, reduces recovery time to 4–8 weeks."
          }
        }
      ]
    }
  ]
}

p2_bento = """
<div class="bento-card">
  <div class="bento-icon">🩺</div>
  <div class="bento-title">1. Dermal Capillary Target</div>
  <div class="bento-desc">PIE stems from damaged microvascular capillary networks in the upper dermis following acne papule inflammation. Treatments must target vascular endothelial growth rather than melanin.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">⚡</div>
  <div class="bento-title">2. Azelaic Acid 15%</div>
  <div class="bento-desc">Inhibits neutrophil reactive oxygen species (ROS) and suppresses inflammatory cytokines, calming persistent vascular redness and accelerating capillary repair.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">💧</div>
  <div class="bento-title">3. Tranexamic Acid 5%</div>
  <div class="bento-desc">Blocks plasminogen activator pathways, reducing neovascularization and preventing capillary leakage that sustains purple and red post-acne blemishes.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">☀️</div>
  <div class="bento-title">4. Strict UV Photoprotection</div>
  <div class="bento-desc">UV radiation triggers melanocytes above PIE lesions. Daily broad-spectrum SPF 50 sunscreen prevents red PIE marks from darkening into stubborn brown PIH.</div>
</div>
"""

p2_sec1_title = "PIE (Red Vascular Marks) vs PIH (Melanin Dark Spots): The Diagnostic Test"
p2_sec1_body = """
<p>Many individuals in India treat all post-acne spots with melanin-lightening creams, leading to zero progress. Understanding whether your mark is <strong>PIE</strong> or <strong>PIH</strong> is essential:</p>

<h3>The Glass Diascopy Test</h3>
<p>Take a clean, transparent glass or clear plastic slide and press it firmly against the blemish for 5 seconds:</p>
<ul>
  <li><strong>Blanches (Disappears / Turns White):</strong> It is <strong>PIE</strong>. The pressure empties blood from dilated capillaries. Vascular actives (Azelaic Acid, Tranexamic Acid) are required.</li>
  <li><strong>Does Not Blanch (Stays Brown / Black):</strong> It is <strong>PIH</strong>. The pigment is melanin deposited in epidermal keratinocytes. Tyrosinase inhibitors (Alpha Arbutin, Glycolic Acid) are required.</li>
</ul>
"""

p2_sec2_title = "Dermatologist-Approved Topical Actives for Fading PIE"
p2_sec2_body = """
<p>Because PIE is a vascular condition, effective topicals must calm microvascular inflammation and suppress capillary dilation:</p>

<h3>1. Azelaic Acid (15% Gel / Cream)</h3>
<p>Azelaic Acid is the gold-standard topical for PIE. It reduces neutrophil-driven reactive oxygen species (ROS) and downregulates inflammatory mediators (IL-1, IL-6, TNF-α), visibly fading red marks in 4 weeks.</p>

<h3>2. Tranexamic Acid (3% to 5% Serum)</h3>
<p>Tranexamic Acid inhibits UV- and inflammation-induced plasminogen activity. This suppresses both microvascular growth (reducing red PIE) and melanocyte activation.</p>

<h3>3. Centella Asiatica & Madecassoside</h3>
<p>Centella Asiatica stimulates type I collagen synthesis and micro-vessel microcirculation, speeding up tissue repair under healing acne spots.</p>
"""

p2_products = """
<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/kojic_acid_cream_india_og.jpg" alt="Picspot 15% Azelaic Acid Gel">
  </div>
  <div class="product-badge">Rx Redness Gel</div>
  <div class="product-title">Picspot / Exazel-N 15% Azelaic Acid Gel</div>
  <div class="product-specs">15% Micronized Azelaic Acid | Pharma Gel | 15g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">First-line prescription gel in India for clearing vascular red acne marks (PIE), inflammatory papules, and rosacea erythema.</p>
</div>

<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/niacinamide_dropper.jpg" alt="Minimalist 3% Tranexamic Acid Serum">
  </div>
  <div class="product-badge">Vascular & Spot Serum</div>
  <div class="product-title">Minimalist 3% Tranexamic Acid Serum</div>
  <div class="product-specs">3% Tranexamic + 1% Mandelic Acid | 30ml</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Inhibits plasminogen activity to reduce capillary redness, soothe erythema, and prevent red PIE spots from turning into dark PIH.</p>
</div>
"""

p2_routine_title = "Dermatologist AM/PM Routine Protocol for Fading PIE Red Marks"
p2_routine_table = """
<table>
  <thead>
    <tr>
      <th>Routine Phase</th>
      <th>Step 1: Cleanse</th>
      <th>Step 2: Vascular Active</th>
      <th>Step 3: Soothing Barrier Cream</th>
      <th>Step 4: Photoprotection</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Morning (AM Routine)</strong></td>
      <td>Gentle Hydrating Cleanser</td>
      <td>Tranexamic Acid 3-5% Serum (3-4 drops)</td>
      <td>Lightweight Cica Moisturizing Gel</td>
      <td>Broad-Spectrum Sunscreen SPF 50 PA++++ (Mandatory)</td>
    </tr>
    <tr>
      <td><strong>Evening (PM Routine)</strong></td>
      <td>Mild Cleanser</td>
      <td>Azelaic Acid 15% Gel (Pea-sized layer on dry skin)</td>
      <td>Nourishing Ceramide Repair Cream</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
"""

p2_guide_title = "Clinical Step-by-Step PIE Clearance Strategy"
p2_guide_body = """
<h3>Step 1: Stop Picking & Squeezing Active Pimples</h3>
<p>Physical trauma ruptures deep dermal capillary beds, multiplying the intensity and duration of red PIE marks. Apply hydrocolloid pimple patches over active lesions to prevent touching.</p>

<h3>Step 2: Apply Tranexamic Acid Morning and Azelaic Acid Night</h3>
<p>Use 3-5% Tranexamic Acid serum in your morning routine under sunscreen, and apply 15% Azelaic Acid gel in your evening routine on clean, dry skin.</p>

<h3>Step 3: Strict Broad-Spectrum Sun Protection</h3>
<p>UV radiation stimulates melanocytes overlying red PIE marks. Apply broad-spectrum SPF 50 sunscreen daily to prevent red vascular marks from darkening into persistent brown melanin PIH.</p>
"""

p2_faq = """
<div class="faq-item">
  <div class="faq-question">What is the difference between PIE (red spots) and PIH (dark spots)?</div>
  <div class="faq-answer">PIE (Post-Inflammatory Erythema) is caused by damaged or dilated dermal blood capillaries, resulting in flat red, pink, or purple marks. PIH (Post-Inflammatory Hyperpigmentation) is caused by excess melanin deposition in the epidermis, resulting in flat brown or black spots.</div>
</div>

<div class="faq-item">
  <div class="faq-question">How can I tell if my mark is PIE or PIH at home?</div>
  <div class="faq-answer">Perform the simple Glass Diascopy Test: press a clear glass or transparent slide against the mark. If the spot temporarily disappears or turns white (blanches), it is PIE (vascular). If the spot stays dark brown, it is PIH (melanin).</div>
</div>

<div class="faq-item">
  <div class="faq-question">Does Salicylic Acid or Hydroquinone fade PIE red marks?</div>
  <div class="faq-answer">No. Melanin-inhibiting agents like Hydroquinone do not treat PIE because PIE is a vascular blood vessel issue, not a melanin pigment issue. Use Azelaic Acid 15%, Tranexamic Acid 5%, or Centella Asiatica to constrict microcapillaries.</div>
</div>

<div class="faq-item">
  <div class="faq-question">How long does PIE take to fade on Indian skin?</div>
  <div class="faq-answer">Without treatment, PIE can take 3 to 12 months to fade naturally. Consistent daily application of 15% Azelaic Acid gel and 3-5% Tranexamic Acid serum, combined with strict broad-spectrum SPF 50 sunscreen, reduces recovery time to 4–8 weeks.</div>
</div>
"""

p2_html = build_non_comp_html(
    slug=p2_slug,
    title=p2_title,
    description=p2_desc,
    canonical_url=p2_url,
    og_image=p2_og,
    schema_json=json.dumps(p2_schema, indent=2),
    badge_class="badge-green",
    badge_text="PIE Vascular Protocol",
    badge_desc="Dermatologist clinical guide to clearing red/purple post-inflammatory erythema (PIE) vascular acne marks on Indian skin.",
    hero_title="Post-Inflammatory Erythema (PIE) Red Acne Marks Treatment India",
    hero_subtitle="Complete clinical protocol targeting microvascular capillary dilation and inflammation to clear red post-acne spots.",
    bento_html=p2_bento,
    section1_title=p2_sec1_title,
    section1_body=p2_sec1_body,
    section2_title=p2_sec2_title,
    section2_body=p2_sec2_body,
    product_showcase_html=p2_products,
    routine_title=p2_routine_title,
    routine_table_html=p2_routine_table,
    guide_title=p2_guide_title,
    guide_body=p2_guide_body,
    faq_html=p2_faq
)

with open(os.path.join(p2_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(p2_html)

print("✅ True Non-Comparison Page 2 built successfully.")


# ==============================================================
# PAGE 3: How to Use Tretinoin Without Peeling or Irritation
# ==============================================================
p3_slug = "acne/tretinoin-without-peeling-routine-guide-india"
p3_dir = os.path.join(base_dir, p3_slug)
os.makedirs(p3_dir, exist_ok=True)

p3_title = "How to Use Tretinoin Without Peeling or Irritation on Indian Skin (2026) | MyMirror"
p3_desc = "Step-by-step clinical guide to using prescription Tretinoin 0.025%/0.05% without redness, peeling, or dryness on Indian skin. Check our Sandwich Technique protocol, product reviews & derm routine."
p3_url = f"https://mymirror.fit/{p3_slug}/"
p3_og = "https://mymirror.fit/assets/images/tretinoin_sandwich_method_india.jpg"

p3_schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": f"{p3_url}#webpage",
      "url": p3_url,
      "name": "How to Use Tretinoin Without Peeling Protocol Guide",
      "description": "Dermatological clinical protocol for starting Tretinoin on Indian skin without peeling or retinoid dermatitis. Sandwich Technique, short-contact therapy, moisture buffering, product reviews, and derm routines.",
      "aspect": ["Treatment", "Diagnosis", "Prevention"],
      "medicalAudience": "Patient",
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "reviewedBy": { "@type": "Person", "name": "Dr. Lipy Mehta", "jobTitle": "Board-Certified Dermatologist" }
    },
    {
      "@type": "FAQPage",
      "@id": f"{p3_url}#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Sandwich Technique for Tretinoin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Sandwich Technique involves applying a layer of gentle moisturizer, waiting 10 minutes, applying a pea-sized amount of Tretinoin, and then topping it with a second layer of moisturizer. This buffers the retinoid, slowing down trans-epidermal absorption and preventing peeling and irritation."
          }
        },
        {
          "@type": "Question",
          "name": "Should I apply Tretinoin on wet or dry skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always apply Tretinoin on 100% bone-dry skin! Applying retinoids to damp skin dramatically increases trans-epidermal absorption rate, which triggers severe stinging, redness, and peeling."
          }
        },
        {
          "@type": "Question",
          "name": "How often should beginners in India apply Tretinoin 0.025%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Beginners should start with Tretinoin 0.025% just 2 nights per week (e.g., Monday and Thursday) for the first 3 to 4 weeks. Gradually increase to alternate nights once your skin demonstrates full tolerance without peeling."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my skin starts peeling or burning from Tretinoin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pause Tretinoin for 3 to 5 days. Apply a Ceramide repair cream twice daily. Once burning and peeling resolve completely, reintroduce Tretinoin using the Sandwich Technique at a lower frequency."
          }
        }
      ]
    }
  ]
}

p3_bento = """
<div class="bento-card">
  <div class="bento-icon">🥪</div>
  <div class="bento-title">1. The Sandwich Technique</div>
  <div class="bento-desc">Layer moisturizer &rarr; Tretinoin &rarr; moisturizer. Buffers retinoid penetration rate to eliminate peeling while maintaining full therapeutic efficacy.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🫛</div>
  <div class="bento-title">2. Strict Pea-Sized Dosing</div>
  <div class="bento-desc">Limit your dose to a single 0.25g pea-sized dot for your entire face. Dot on forehead, cheeks, and chin before spreading evenly.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">⏱️</div>
  <div class="bento-title">3. The 15-Minute Dry Rule</div>
  <div class="bento-desc">Wait 15 minutes after washing your face before applying Tretinoin. Applying on damp skin accelerates trans-epidermal spike and causes stinging.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">⏳</div>
  <div class="bento-title">4. Short-Contact Therapy</div>
  <div class="bento-desc">For ultra-sensitive Indian skin, apply Tretinoin for 30 to 60 minutes in the evening, then wash off with water before applying moisturizer.</div>
</div>
"""

p3_sec1_title = "The Science of Retinization: Why Peeling & Irritation Occurs"
p3_sec1_body = """
<p>When starting prescription <strong>Tretinoin (0.025% or 0.05%)</strong>, retinoic acid binds to nuclear receptors in epidermal keratinocytes, causing rapid cell turnover. During the first 2 to 6 weeks (the <em>retinization phase</em>), several physiological changes take place:</p>

<h3>1. Temporary Ceramide Dip</h3>
<p>Tretinoin temporarily downregulates endogenous ceramide synthesis during the first 14 days, causing stratum corneum desquamation and transepidermal water loss (TEWL).</p>

<h3>2. Irregular Corneocyte Shedding</h3>
<p>As basal cells divide faster, surface corneocytes detach prematurely in visible white flakes—especially around the mouth and nostrils.</p>
"""

p3_sec2_title = "The 3-Phase Retinization Schedule for Indian Skin"
p3_sec2_body = """
<p>To avoid retinoid dermatitis, follow this progressive 3-phase dermatologist schedule:</p>

<h3>Phase 1: Introduction (Weeks 1 – 3)</h3>
<p>Apply Tretinoin 0.025% <strong>2 nights per week</strong> using the Sandwich Technique. Focus on hydration on rest nights.</p>

<h3>Phase 2: Escalation (Weeks 4 – 8)</h3>
<p>Increase frequency to <strong>alternate nights (3–4 nights per week)</strong>. If zero peeling occurs, apply Tretinoin directly after a light moisturizer.</p>

<h3>Phase 3: Maintenance (Weeks 9+)</h3>
<p>Apply Tretinoin <strong>5 nights per week</strong>. Enjoy smooth, clear skin, diminished acne microcomedones, and boosted collagen synthesis.</p>
"""

p3_products = """
<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/retino_a_cream.jpg" alt="Retino-A 0.025% Tretinoin Cream">
  </div>
  <div class="product-badge">Rx Retinoid Gold Standard</div>
  <div class="product-title">Retino-A / A-Ret 0.025% Cream</div>
  <div class="product-specs">Tretinoin 0.025% w/w | Rx Cream/Gel | 20g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">First-line prescription retinoid for acne and photoaging. Requires slow introduction (2 nights/week) using the Sandwich Method on dry skin.</p>
</div>

<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/cerave_resurfacing_retinol.jpg" alt="Cetaphil / CeraVe Moisturizing Lotion">
  </div>
  <div class="product-badge">Ideal Retinoid Buffer</div>
  <div class="product-title">Cetaphil / CeraVe Moisturizing Cream</div>
  <div class="product-specs">3 Essential Ceramides + Hyaluronic Acid | 100g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Non-comedogenic ceramide buffer cream engineered to cushion retinoid penetration, stop peeling, and hydrate Indian skin types.</p>
</div>
"""

p3_routine_title = "Weekly Tretinoin Retinization & Layering Protocol"
p3_routine_table = """
<table>
  <thead>
    <tr>
      <th>Night Phase</th>
      <th>Step 1: Cleanse</th>
      <th>Step 2: First Buffer Layer</th>
      <th>Step 3: Active Retinoid</th>
      <th>Step 4: Top Seal Layer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tretinoin Night (Mon & Thu)</strong></td>
      <td>Gentle Lotion Cleanser &rarr; Towel Dry (Wait 15 Mins)</td>
      <td>Light Layer of Ceramide Lotion</td>
      <td><em>Pea-Sized Tretinoin 0.025%</em></td>
      <td>Thick Ceramide Cream (Sandwich Seal)</td>
    </tr>
    <tr>
      <td><strong>Rest Night (Tue, Wed, Fri, Sat, Sun)</strong></td>
      <td>Gentle Cleanser</td>
      <td>Hyaluronic Acid / Niacinamide 5% Serum</td>
      <td>—</td>
      <td>Rich Cica / Ceramide Night Cream</td>
    </tr>
  </tbody>
</table>
"""

p3_guide_title = "Step-by-Step Application Protocol (The Sandwich Method)"
p3_guide_body = """
<h3>Step 1: Cleanse & Wait 15 Minutes</h3>
<p>Wash your face with a mild cleanser. Pat completely dry with a soft towel and wait 15 minutes to ensure skin is 100% bone-dry.</p>

<h3>Step 2: Apply First Moisturizer Layer</h3>
<p>Apply a thin layer of ceramide moisturizer across your face. Allow it to absorb for 5 minutes.</p>

<h3>Step 3: Apply Pea-Sized Tretinoin</h3>
<p>Squeeze a strict pea-sized dot of Tretinoin 0.025% onto your fingertip. Dot onto your forehead, cheeks, and chin. Gently spread evenly, avoiding nostrils and eye contours.</p>

<h3>Step 4: Top with Second Moisturizer Layer</h3>
<p>Follow with a second layer of moisturizer to lock in hydration and buffer retinoid penetration overnight.</p>
"""

p3_faq = """
<div class="faq-item">
  <div class="faq-question">What is the Sandwich Technique for Tretinoin?</div>
  <div class="faq-answer">The Sandwich Technique involves applying a layer of gentle moisturizer, waiting 10 minutes, applying a pea-sized amount of Tretinoin, and then topping it with a second layer of moisturizer. This buffers the retinoid, slowing down trans-epidermal absorption and preventing peeling and irritation.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Should I apply Tretinoin on wet or dry skin?</div>
  <div class="faq-answer">Always apply Tretinoin on 100% bone-dry skin! Applying retinoids to damp skin dramatically increases trans-epidermal absorption rate, which triggers severe stinging, redness, and peeling.</div>
</div>

<div class="faq-item">
  <div class="faq-question">How often should beginners in India apply Tretinoin 0.025%?</div>
  <div class="faq-answer">Beginners should start with Tretinoin 0.025% just 2 nights per week (e.g., Monday and Thursday) for the first 3 to 4 weeks. Gradually increase to alternate nights once your skin demonstrates full tolerance without peeling.</div>
</div>

<div class="faq-item">
  <div class="faq-question">What should I do if my skin starts peeling or burning from Tretinoin?</div>
  <div class="faq-answer">Pause Tretinoin for 3 to 5 days. Apply a Ceramide repair cream twice daily. Once burning and peeling resolve completely, reintroduce Tretinoin using the Sandwich Technique at a lower frequency.</div>
</div>
"""

p3_html = build_non_comp_html(
    slug=p3_slug,
    title=p3_title,
    description=p3_desc,
    canonical_url=p3_url,
    og_image=p3_og,
    schema_json=json.dumps(p3_schema, indent=2),
    badge_class="badge-green",
    badge_text="Retinization Protocol",
    badge_desc="Step-by-step clinical protocol to start Tretinoin 0.025%/0.05% on Indian skin without peeling, redness, or barrier damage.",
    hero_title="How to Use Tretinoin Without Peeling or Irritation on Indian Skin",
    hero_subtitle="Mastering the Sandwich Technique, moisture buffering, and short-contact therapy for smooth retinization.",
    bento_html=p3_bento,
    section1_title=p3_sec1_title,
    section1_body=p3_sec1_body,
    section2_title=p3_sec2_title,
    section2_body=p3_sec2_body,
    product_showcase_html=p3_products,
    routine_title=p3_routine_title,
    routine_table_html=p3_routine_table,
    guide_title=p3_guide_title,
    guide_body=p3_guide_body,
    faq_html=p3_faq
)

with open(os.path.join(p3_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(p3_html)

print("✅ True Non-Comparison Page 3 built successfully.")

