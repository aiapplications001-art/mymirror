import os, json

base_dir = "/Users/tm030/Documents/mymirror_repo"

# Shared HTML Header & Footer Template Generator
def build_page_html(
    slug,
    title,
    description,
    canonical_url,
    og_image,
    schema_json,
    risk_level_badge,
    risk_level_title,
    risk_level_desc,
    hero_title,
    hero_subtitle,
    bento_html,
    comparison_table_html,
    mechanism_html,
    product_showcase_html,
    routine_table_html,
    clinical_guide_html,
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
    
    /* Risk Meter Banner */
    .risk-banner {{ background: var(--card-bg); border-radius: 16px; padding: 1.5rem 2rem; border: 1px solid var(--border); box-shadow: var(--shadow); margin-bottom: 2rem; display: flex; align-items: center; gap: 1.5rem; }}
    .risk-badge {{ padding: 0.5rem 1rem; border-radius: 9999px; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0; }}
    .risk-level-1 {{ background: #DCFCE7; color: #166534; border: 1px solid #BBF7D0; }}
    .risk-level-2 {{ background: #FEF9C3; color: #854D0E; border: 1px solid #FEF08A; }}
    .risk-level-3 {{ background: #FEE2E2; color: #991B1B; border: 1px solid #FCA5A5; }}
    
    /* Hero Header */
    .hero {{ text-align: center; margin-bottom: 3rem; }}
    .hero h1 {{ font-family: var(--font-heading); font-size: 2.25rem; font-weight: 700; color: #0F172A; margin-bottom: 1rem; line-height: 1.3; }}
    .hero p {{ font-size: 1.125rem; color: var(--text-muted); max-width: 800px; margin: 0 auto 1.5rem; }}
    .hero-meta {{ display: flex; align-items: center; justify-content: center; gap: 1.5rem; font-size: 0.875rem; color: var(--text-muted); }}
    
    /* Main Visual Image */
    .main-visual {{ width: 100%; max-height: 480px; object-fit: cover; border-radius: 16px; margin-bottom: 3rem; box-shadow: var(--shadow-lg); }}

    /* Bento Grid */
    .bento-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }}
    .bento-card {{ background: var(--card-bg); padding: 1.75rem; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow); transition: transform 0.2s, box-shadow 0.2s; }}
    .bento-card:hover {{ transform: translateY(-2px); box-shadow: var(--shadow-lg); }}
    .bento-icon {{ font-size: 2rem; margin-bottom: 1rem; }}
    .bento-title {{ font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #0F172A; margin-bottom: 0.5rem; }}
    .bento-desc {{ color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; }}

    /* Tables */
    .table-wrapper {{ overflow-x: auto; background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow); margin-bottom: 3rem; }}
    table {{ width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }}
    th {{ background: #F1F5F9; padding: 1rem 1.25rem; font-family: var(--font-heading); font-weight: 700; color: #0F172A; border-bottom: 1px solid var(--border); }}
    td {{ padding: 1rem 1.25rem; border-bottom: 1px solid var(--border); vertical-align: top; }}
    tr:last-child td {{ border-bottom: none; }}

    /* Product Showcase Grid */
    .product-showcase-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 3rem; }}
    .product-card {{ background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); padding: 1.5rem; box-shadow: var(--shadow); display: flex; flex-direction: column; align-items: center; text-align: center; }}
    .product-image-wrapper {{ width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 12px; margin-bottom: 1rem; background: #F1F5F9; }}
    .product-image-wrapper img {{ max-height: 100%; max-width: 100%; object-fit: contain; }}
    .product-title {{ font-family: var(--font-heading); font-weight: 700; font-size: 1.1rem; color: #0F172A; margin-bottom: 0.5rem; }}
    .product-specs {{ font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; }}
    .product-badge {{ background: var(--brand-light); color: var(--brand); font-weight: 700; font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 9999px; text-transform: uppercase; margin-bottom: 1rem; }}

    /* Content Sections */
    .content-section {{ background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border); padding: 2rem; margin-bottom: 2.5rem; box-shadow: var(--shadow); }}
    .content-section h2 {{ font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: #0F172A; margin-bottom: 1.25rem; border-bottom: 2px solid var(--brand-light); padding-bottom: 0.5rem; }}
    .content-section h3 {{ font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: #334155; margin: 1.5rem 0 0.75rem; }}
    .content-section p {{ margin-bottom: 1.25rem; color: #334155; font-size: 1rem; }}
    .content-section ul, .content-section ol {{ margin-left: 1.5rem; margin-bottom: 1.25rem; color: #334155; }}
    .content-section li {{ margin-bottom: 0.5rem; }}

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
      .risk-banner {{ flex-direction: column; text-align: center; }}
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
    <!-- Risk Meter Banner -->
    <div class="risk-banner">
      <div class="risk-badge {risk_level_badge}">Risk-o-Meter: {risk_level_title}</div>
      <div>
        <p style="font-size: 0.95rem; color: var(--text);">{risk_level_desc}</p>
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
        <span>⏱️ 11 Min Read</span>
      </div>
    </section>

    <!-- Main Visual Asset -->
    <img src="{og_image}" alt="{hero_title}" class="main-visual">

    <!-- Bento Grid Summary -->
    <div class="bento-grid">
      {bento_html}
    </div>

    <!-- Comparison Table -->
    <div class="table-wrapper">
      {comparison_table_html}
    </div>

    <!-- Mechanism Breakdown Section -->
    <section class="content-section">
      {mechanism_html}
    </section>

    <!-- Photorealistic Product Showcase -->
    <section class="content-section">
      <h2 style="text-align: center; margin-bottom: 1.5rem;">Top Derm-Approved Formulations in India</h2>
      <div class="product-showcase-grid">
        {product_showcase_html}
      </div>
    </section>

    <!-- AM/PM Routine Table Section -->
    <section class="content-section">
      <h2>Dermatologist AM/PM Routine Protocol for Indian Skin</h2>
      <div class="table-wrapper" style="margin-bottom: 0;">
        {routine_table_html}
      </div>
    </section>

    <!-- Extensive Clinical Guide Section -->
    <section class="content-section">
      {clinical_guide_html}
    </section>

    <!-- Perimeter CTA Section -->
    <section class="perimeter-cta">
      <h2>Unsure Which Active Matches Your Skin Type?</h2>
      <p>Scan your face using MyMirror's AI Skin Analyzer to measure active post-acne pigmentation depth, pore congestion, and barrier hydration score in 30 seconds.</p>
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
      <p>&copy; 2026 MyMirror Dermatological Intelligence. All Rights Reserved. Medical decision-support tool created in accordance with Indian Dermatological Standards.</p>
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

print("Helper function defined.")

# ==========================================
# PAGE 1: Salicylic Acid 2% vs Glycolic Acid 6%
# ==========================================
p1_slug = "acne/salicylic-acid-vs-glycolic-acid-for-acne-marks-india"
p1_dir = os.path.join(base_dir, p1_slug)
os.makedirs(p1_dir, exist_ok=True)

p1_title = "Salicylic Acid 2% vs Glycolic Acid 6% for Acne Marks on Indian Skin (2026) | MyMirror"
p1_desc = "Salicylic Acid 2% (BHA) vs Glycolic Acid 6% (AHA) comparison guide for treating post-acne marks (PIH/PIE) and rough skin texture in India. Check our Risk-o-Meter rating, lipid solubility vs epidermal turnover mechanics, product reviews & derm routine."
p1_url = f"https://mymirror.fit/{p1_slug}/"
p1_og = "https://mymirror.fit/assets/images/salicylic_vs_glycolic_acne_marks_india.jpg"

p1_schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": f"{p1_url}#webpage",
      "url": p1_url,
      "name": "Salicylic Acid 2% vs Glycolic Acid 6% for Acne Marks & PIH Guide",
      "description": "Standardized Risk-o-Meter evaluation for combining or choosing between Salicylic Acid 2% and Glycolic Acid 6%. Lipid solubility vs corneocyte desquamation, product reviews, and derm routines.",
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
          "name": "Is Salicylic Acid or Glycolic Acid better for post-acne dark spots on Indian skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Glycolic Acid 6% (AHA) is generally superior for superficial dark spots (PIH) because its small molecular size accelerates epidermal cell turnover to shed melanin-laden corneocytes. However, Salicylic Acid 2% (BHA) is essential if you still have active acne, blackheads, or oily pores, as it dissolves pore-clogging sebum."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Salicylic Acid 2% and Glycolic Acid 6% together in the same routine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We classify mixing 2% BHA and 6% AHA simultaneously as Level 2 🟡 Caution Risk. Layering them together can compromise the lipid skin barrier and trigger transepidermal water loss. Rotate them on alternate nights or use Salicylic Acid in the morning and Glycolic Acid 2-3 nights per week."
          }
        },
        {
          "@type": "Question",
          "name": "Does Glycolic Acid cause purging on Indian skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Because Glycolic Acid speeds up cell turnover, trapped microcomedones beneath the skin surface can surface as small whiteheads during the first 2 to 4 weeks of use. This is temporary purging."
          }
        },
        {
          "@type": "Question",
          "name": "Why is sunscreen mandatory when using Glycolic Acid in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Glycolic Acid exfoliates the outermost protective stratum corneum layer, making the skin significantly more photosensitive to intense UV radiation in India. Applying broad-spectrum SPF 50 sunscreen daily prevents rebound hyperpigmentation."
          }
        }
      ]
    }
  ]
}

p1_bento = """
<div class="bento-card">
  <div class="bento-icon">🧪</div>
  <div class="bento-title">Molecular Structure & Solubility</div>
  <div class="bento-desc">Salicylic Acid is a lipophilic BHA that dissolves sebum inside pores. Glycolic Acid is a hydrophilic AHA with the smallest molecular footprint (76 Da), rapidly penetrating the upper stratum corneum.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🎯</div>
  <div class="bento-title">Target Pigmentation Type</div>
  <div class="bento-desc">Salicylic Acid treats post-acne erythema (red marks) and prevents new inflammatory spots. Glycolic Acid targets epidermal post-inflammatory hyperpigmentation (flat brown/dark spots).</div>
</div>
<div class="bento-card">
  <div class="bento-icon">⚠️</div>
  <div class="bento-title">Melanin Sensitivity & Risk</div>
  <div class="bento-desc">Indian skin (Fitzpatrick Types IV-VI) requires cautious AHA concentration (<7%) to prevent post-chemical burn hyperpigmentation. BHA carries minimal PIH risk due to anti-inflammatory properties.</div>
</div>
"""

p1_table = """
<table>
  <thead>
    <tr>
      <th>Dermatological Metric</th>
      <th>Salicylic Acid 2% (BHA)</th>
      <th>Glycolic Acid 6% (AHA)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Chemical Family & Solubility</strong></td>
      <td>Beta-Hydroxy Acid (Lipid-Soluble / Oil-Soluble)</td>
      <td>Alpha-Hydroxy Acid (Water-Soluble)</td>
    </tr>
    <tr>
      <td><strong>Primary Site of Action</strong></td>
      <td>Intra-follicular (Deep inside sebaceous pore channel)</td>
      <td>Epidermal (Stratum corneum cell desquamation)</td>
    </tr>
    <tr>
      <td><strong>Mechanism for Acne Marks</strong></td>
      <td>Reduces ongoing inflammation & clears microcomedones</td>
      <td>Accelerates cell turnover to shed melanin-filled corneocytes</td>
    </tr>
    <tr>
      <td><strong>Best Skin Type Suitability</strong></td>
      <td>Oily, Acne-Prone, Congested, Blackhead-Prone Skin</td>
      <td>Combination, Normal, Rough Texture, Dull PIH Skin</td>
    </tr>
    <tr>
      <td><strong>Irritation & Barrier Risk</strong></td>
      <td>Low (Anti-inflammatory, mild drying if overused)</td>
      <td>Moderate (Can sting; requires strict sun protection)</td>
    </tr>
    <tr>
      <td><strong>Fitzpatrick IV-VI Safety</strong></td>
      <td>🟢 Excellent (Calms melanocyte activation)</td>
      <td>🟡 Moderate (Requires start at 5-6% with SPF 50)</td>
    </tr>
  </tbody>
</table>
"""

p1_mechanism = """
<h2>Cellular Mechanism: BHA Pore Clearance vs AHA Epidermal Exfoliation</h2>
<p>Understanding the fundamental biochemical distinction between <strong>Salicylic Acid (BHA)</strong> and <strong>Glycolic Acid (AHA)</strong> is critical when managing post-acne marks on Indian skin. While both are chemical exfoliants, their solubility, penetration depth, and cellular targets differ significantly:</p>

<h3>1. Salicylic Acid (2% BHA) — Lipophilic Pore Decongestion</h3>
<p>Salicylic acid is a lipid-soluble organic compound featuring a aromatic ring structure with a hydroxyl group adjacent to the carboxylic acid group. Because of its lipophilicity, Salicylic Acid easily bypasses the hydrophobic lipid matrix of the stratum corneum and dissolves sebum, cellular debris, and oxidized lipids trapped inside the pilosebaceous unit.</p>
<ul>
  <li><strong>Comedolytic Action:</strong> It breaks down desmosomal attachments between follicular keratinocytes, eliminating blackheads and microcomedones before they turn into inflamed acne.</li>
  <li><strong>Anti-Inflammatory Property:</strong> Derived from salicylic ring structures, BHA exhibits inherent anti-inflammatory properties similar to aspirin, calming active redness and vascular post-inflammatory erythema (PIE).</li>
</ul>

<h3>2. Glycolic Acid (6% AHA) — Hydrophilic Desmosome Cleavage & Cell Turnover</h3>
<p>Glycolic acid is the smallest alpha-hydroxy acid with a 2-carbon molecular structure (molecular weight: 76.05 Da). Because of its compact size, it rapidly diffuses into the intercellular space of the epidermis. However, being water-soluble, it cannot penetrate oily pores directly.</p>
<ul>
  <li><strong>Ionic Bond Dissolution:</strong> Glycolic Acid cleaves ionic bonds between mature corneocytes in the stratum corneum, promoting uniform desquamation of dead skin cells.</li>
  <li><strong>Melanin Dispersion:</strong> By speeding up epidermal turnover from the standard 28-day cycle down to 14–20 days, Glycolic Acid pushes melanin-pigmented keratinocytes to the surface, where they shed rapidly—fading dark post-acne spots (PIH).</li>
  <li><strong>Collagen Synthesis:</strong> At acidic pH (3.5–4.0), Glycolic Acid stimulates dermal fibroblasts, promoting collagen production to smooth shallow post-acne textural irregularities.</li>
</ul>
"""

p1_products = """
<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/minimalist-vitamin-c-serum.jpg" alt="Minimalist 2% Salicylic Acid Serum">
  </div>
  <div class="product-badge">BHA Gold Standard</div>
  <div class="product-title">Minimalist 2% Salicylic Acid Serum</div>
  <div class="product-specs">2% BHA + Oligopeptide-10 | pH 3.8-4.2 | 30ml</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Formulated with Aloe Vera extract to soothe inflammation. Excellent for decongesting active acne and oil control in Indian summer conditions.</p>
</div>

<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/glycolic-acid-toner.jpg" alt="Minimalist Glycolic Acid 8% Exfoliating Liquid">
  </div>
  <div class="product-badge">AHA Resurfacing Hero</div>
  <div class="product-title">Minimalist Glycolic Acid 8% Exfoliating Liquid</div>
  <div class="product-specs">8% AHA + Bamboo Water | pH 3.4-3.8 | 150ml</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Highly potent AHA resurfacing liquid. Ideal for body marks, rough facial texture, and stubborn epidermal dark spots when used 2-3 nights weekly.</p>
</div>
"""

p1_routine = """
<table>
  <thead>
    <tr>
      <th>Time of Day</th>
      <th>Step 1: Cleanser</th>
      <th>Step 2: Active Treatment</th>
      <th>Step 3: Moisturizer</th>
      <th>Step 4: Sunscreen / Barrier</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Morning Routine (AM)</strong></td>
      <td>Gentle Hydrating Gel Cleanser</td>
      <td>Salicylic Acid 2% Serum (Focus on oily T-zone & active spots)</td>
      <td>Lightweight Oil-Free Gel Moisturizer</td>
      <td>Broad-Spectrum SPF 50 PA++++ Sunscreen (Mandatory)</td>
    </tr>
    <tr>
      <td><strong>Evening Routine (PM) - Mon / Wed / Fri</strong></td>
      <td>Mild Sulfate-Free Foaming Cleanser</td>
      <td>Glycolic Acid 6% Cream or 8% Liquid (Apply thin layer on dry skin)</td>
      <td>Ceramide Barrier Repair Cream</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Evening Routine (PM) - Rest Nights</strong></td>
      <td>Gentle Hydrating Cleanser</td>
      <td>Niacinamide 5% or Hyaluronic Acid Serum</td>
      <td>Rich Cica / Ceramide Night Cream</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
"""

p1_clinical = """
<h2>Clinical Guidelines for Indian Skin (Fitzpatrick Types IV-VI)</h2>
<p>Melanin-rich skin types in India possess hyper-reactive melanocytes. When the skin barrier experiences chemical injury or excessive low-pH acid burn, melanocytes overproduce eumelanin as a defense mechanism—resulting in rebound post-inflammatory hyperpigmentation (PIH).</p>

<h3>1. Concentration Benchmarks</h3>
<ul>
  <li><strong>Salicylic Acid:</strong> Stick strictly to 1%–2% concentrations for daily or alternate-day leave-on use. Higher concentrations (such as 20–30% clinical peels) should only be administered by certified dermatologists.</li>
  <li><strong>Glycolic Acid:</strong> Beginners should start with 5%–6% cream or liquid formulas 2 nights per week. Avoid starting immediately with 10%–12% AHA leave-on products on unacclimated skin.</li>
</ul>

<h3>2. The Golden Rule of Acid Rotation</h3>
<p>Never apply 2% Salicylic Acid serum and 6–8% Glycolic Acid liquid in the exact same layer at night. Doing so drops skin pH below 3.0, stripping lipid ceramides and causing stinging, redness, and dark chemical burns. Instead, use BHA in the morning or alternate nights between BHA and AHA.</p>

<h3>3. Sun Protection Protocol</h3>
<p>Glycolic Acid increases skin photosensitivity to UV radiation by shedding top-layer corneocytes. In sunny Indian climates, failure to wear broad-spectrum SPF 50 sunscreen daily will darken your acne marks, completely offsetting the benefits of chemical exfoliation.</p>
"""

p1_faq = """
<div class="faq-item">
  <div class="faq-question">Is Salicylic Acid or Glycolic Acid better for post-acne dark spots on Indian skin?</div>
  <div class="faq-answer">Glycolic Acid 6% (AHA) is generally superior for superficial dark spots (PIH) because its small molecular size accelerates epidermal cell turnover to shed melanin-laden corneocytes. However, Salicylic Acid 2% (BHA) is essential if you still have active acne, blackheads, or oily pores, as it dissolves pore-clogging sebum.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Can I use Salicylic Acid 2% and Glycolic Acid 6% together in the same routine?</div>
  <div class="faq-answer">We classify mixing 2% BHA and 6% AHA simultaneously as Level 2 🟡 Caution Risk. Layering them together can compromise the lipid skin barrier and trigger transepidermal water loss. Rotate them on alternate nights or use Salicylic Acid in the morning and Glycolic Acid 2-3 nights per week.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Does Glycolic Acid cause purging on Indian skin?</div>
  <div class="faq-answer">Yes. Because Glycolic Acid speeds up cell turnover, trapped microcomedones beneath the skin surface can surface as small whiteheads during the first 2 to 4 weeks of use. This is temporary purging.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Why is sunscreen mandatory when using Glycolic Acid in India?</div>
  <div class="faq-answer">Glycolic Acid exfoliates the outermost protective stratum corneum layer, making the skin significantly more photosensitive to intense UV radiation in India. Applying broad-spectrum SPF 50 sunscreen daily prevents rebound hyperpigmentation.</div>
</div>
"""

p1_html = build_page_html(
    slug=p1_slug,
    title=p1_title,
    description=p1_desc,
    canonical_url=p1_url,
    og_image=p1_og,
    schema_json=json.dumps(p1_schema, indent=2),
    risk_level_badge="risk-level-2",
    risk_level_title="Level 2 🟡 Caution Risk",
    risk_level_desc="Simultaneous application of 2% BHA and 6% AHA in the same night routine can disrupt the epidermal lipid barrier. Alternate nights or use BHA in AM and AHA 2-3 nights per week.",
    hero_title="Salicylic Acid 2% vs Glycolic Acid 6% for Acne Marks on Indian Skin",
    hero_subtitle="Biochemical breakdown of BHA pore clearance vs AHA epidermal resurfacing to fade post-acne marks (PIH/PIE) without skin barrier damage.",
    bento_html=p1_bento,
    comparison_table_html=p1_table,
    mechanism_html=p1_mechanism,
    product_showcase_html=p1_products,
    routine_table_html=p1_routine,
    clinical_guide_html=p1_clinical,
    faq_html=p1_faq
)

with open(os.path.join(p1_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(p1_html)

with open(os.path.join(p1_dir, "page-packet.md"), "w", encoding="utf-8") as f:
    f.write(f"""# Page Packet: Salicylic Acid 2% vs Glycolic Acid 6% for Acne Marks India

- Canonical: {p1_url}
- Risk Rating: Level 2 🟡 Caution Risk
- Primary Intent: Compare BHA vs AHA for acne marks and texture on Indian skin.
""")

print("✅ Page 1 generated successfully.")


# ==========================================
# PAGE 2: Azelaic Acid 15% vs Niacinamide 10%
# ==========================================
p2_slug = "acne/azelaic-acid-15-percent-vs-niacinamide-10-percent-india"
p2_dir = os.path.join(base_dir, p2_slug)
os.makedirs(p2_dir, exist_ok=True)

p2_title = "Azelaic Acid 15% vs Niacinamide 10% for Redness & Dark Spots India (2026) | MyMirror"
p2_desc = "Azelaic Acid 15% vs Niacinamide 10% comparison guide for treating post-inflammatory erythema (PIE redness) and hyperpigmentation in India. Check our Risk-o-Meter rating, tyrosinase inhibition vs melanosome transfer mechanics, product reviews & derm routine."
p2_url = f"https://mymirror.fit/{p2_slug}/"
p2_og = "https://mymirror.fit/assets/images/azelaic_15_vs_niacinamide_10_india.jpg"

p2_schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": f"{p2_url}#webpage",
      "url": p2_url,
      "name": "Azelaic Acid 15% vs Niacinamide 10% for Redness & Dark Spots Guide",
      "description": "Standardized Risk-o-Meter evaluation for combining Azelaic Acid 15% and Niacinamide 10%. Reversible tyrosinase inhibition vs melanosome transfer blockade, product reviews, and derm routines.",
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
          "name": "Can I layer 10% Niacinamide serum with 15% Azelaic Acid gel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Azelaic Acid 15% and Niacinamide 10% form a Level 1 🟢 Synergistic combination. Niacinamide calms skin inflammation and strengthens ceramides, which counteracts the mild tingling or itching sensation caused by prescription Azelaic Acid gel."
          }
        },
        {
          "@type": "Question",
          "name": "Is Azelaic Acid 15% better for PIE (red marks) or PIH (dark spots)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Azelaic Acid 15% is exceptional for both. It reduces microvascular swelling to fade red/purple PIE marks while selectively targeting hyperactive melanocytes to fade brown PIH dark spots without altering normal skin pigmentation."
          }
        },
        {
          "@type": "Question",
          "name": "Why is 10% Niacinamide sometimes irritating for sensitive Indian skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clinical studies show 2% to 5% Niacinamide is optimal for skin barrier repair and sebum control. High 10% concentrations can trigger flushing or mild papular irritation in sensitive skin types. If 10% causes tingling, buffer it by applying moisturizer first."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for Azelaic Acid 15% and Niacinamide 10% to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Redness (PIE) typically improves within 3 to 4 weeks of consistent twice-daily use, whereas deep epidermal dark spots (PIH) require 8 to 12 weeks of dual-pathway melanin inhibition alongside daily SPF 50 sunscreen."
          }
        }
      ]
    }
  ]
}

p2_bento = """
<div class="bento-card">
  <div class="bento-icon">🔬</div>
  <div class="bento-title">Dual-Action Pigment Blockade</div>
  <div class="bento-desc">Azelaic Acid 15% inhibits tyrosinase inside hyperactive melanocytes, stopping new melanin synthesis. Niacinamide 10% prevents existing melanosomes from transferring into surface skin cells.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🔴</div>
  <div class="bento-title">PIE Redness & Rosacea Control</div>
  <div class="bento-desc">Azelaic Acid neutralizes neutrophil ROS activity and suppresses inflammatory cytokines (IL-1β, IL-6), making it the gold-standard topical for red post-acne marks (PIE) and rosacea.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🛡️</div>
  <div class="bento-title">Barrier Co-Protection</div>
  <div class="bento-desc">Niacinamide stimulates endogenous ceramide, free fatty acid, and cholesterol synthesis in keratinocytes, protecting the skin barrier from Azelaic Acid’s initial transient itching.</div>
</div>
"""

p2_table = """
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Azelaic Acid 15% Gel / Cream</th>
      <th>Niacinamide 10% Serum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Dermatological Classification</strong></td>
      <td>Prescription Dicarboxylic Acid (Rx / OTC)</td>
      <td>Vitamin B3 Derivative (Cosmeceutical)</td>
    </tr>
    <tr>
      <td><strong>Melanin Target Pathway</strong></td>
      <td>Competitive, reversible Tyrosinase inhibition</td>
      <td>Melanosome transfer blockade to keratinocytes</td>
    </tr>
    <tr>
      <td><strong>PIE Redness Efficacy</strong></td>
      <td>🟢 Outstanding (Direct anti-inflammatory & anti-rosacea)</td>
      <td>🟡 Moderate (Soothes inflammation & reduces erythema)</td>
    </tr>
    <tr>
      <td><strong>PIH Dark Spot Efficacy</strong></td>
      <td>🟢 High (Selectively targets abnormal melanocytes)</td>
      <td>🟢 High (Blocks pigment spread across epidermis)</td>
    </tr>
    <tr>
      <td><strong>Tolerance & Initial Sensations</strong></td>
      <td>Transient tingling, itching, or dryness (weeks 1-2)</td>
      <td>Generally well-tolerated; rare flushing at 10%</td>
    </tr>
    <tr>
      <td><strong>Synergy Level</strong></td>
      <td colspan="2" style="text-align: center;">🟢 <strong>Level 1 Gold-Standard Synergistic Combination</strong></td>
    </tr>
  </tbody>
</table>
"""

p2_mechanism = """
<h2>Molecular Mechanism: Tyrosinase Inhibition vs Melanosome Transfer Blockade</h2>
<p>Post-acne blemishes on Indian skin present in two distinct vascular and pigmentary phases: <strong>Post-Inflammatory Erythema (PIE)</strong>, caused by damaged capillary walls during acne inflammation, and <strong>Post-Inflammatory Hyperpigmentation (PIH)</strong>, caused by melanocytes producing excess melanin. Combining <strong>Azelaic Acid 15%</strong> with <strong>Niacinamide 10%</strong> provides a complete 360° clinical solution:</p>

<h3>1. Azelaic Acid (15%) — Reversible Tyrosinase & ROS Inhibition</h3>
<p>Azelaic Acid is a naturally occurring saturated C9 dicarboxylic acid. It acts as a competitive inhibitor of tyrosinase—the rate-limiting enzyme in melanogenesis that converts L-tyrosine to L-DOPA and subsequently to dopaquinone.</p>
<ul>
  <li><strong>Selective Cytotoxicity:</strong> Remarkably, Azelaic Acid demonstrates selective affinity for abnormal, hyperactive melanocytes (such as those in PIH or melasma) while leaving normal basal melanocytes unaffected, preventing halo hypopigmentation.</li>
  <li><strong>Scavenging Free Radicals:</strong> It reduces reactive oxygen species (ROS) produced by neutrophils during inflammatory papule breakouts, suppressing vascular endothelial growth factors that drive persistent red PIE marks.</li>
</ul>

<h3>2. Niacinamide (10%) — Melanosome Transfer Blockade & Ceramide Synthesis</h3>
<p>Niacinamide (Nicotinamide) is the biologically active amide form of Vitamin B3. Unlike direct enzyme inhibitors, Niacinamide operates downstream in the pigment pathway.</p>
<ul>
  <li><strong>Melanosome Transport Block:</strong> Melanin is synthesized inside melanocytes and packaged into microscopic vesicles called melanosomes. Niacinamide inhibits up to 68% of melanosome transfer from melanocytes into surrounding epidermal keratinocytes.</li>
  <li><strong>Sphingolipid Barrier Repair:</strong> Niacinamide upregulates mRNA levels of serine palmitoyltransferase—the key enzyme responsible for de novo ceramide synthesis. This reinforces the intercellular lipid matrix, hydrating the skin barrier and soothing any dryness from 15% Azelaic Acid.</li>
</ul>
"""

p2_products = """
<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/kojic_acid_cream_india_og.jpg" alt="Picspot 15% Azelaic Acid Gel">
  </div>
  <div class="product-badge">Rx Redness & Spot Gel</div>
  <div class="product-title">Picspot 15% / Exazel-N Azelaic Acid Gel</div>
  <div class="product-specs">15% Micronized Azelaic Acid | Pharma Gel | 15g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Dermatologist-prescribed micronized gel formula that rapidly absorbs into acne lesions to calm PIE redness and fade dark spots on Indian skin.</p>
</div>

<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/niacinamide_dropper.jpg" alt="Minimalist 10% Niacinamide Serum">
  </div>
  <div class="product-badge">Barrier & Spot Serum</div>
  <div class="product-title">Minimalist 10% Niacinamide Serum</div>
  <div class="product-specs">10% Niacinamide + 1% Zinc PCA | pH 5.5-6.5 | 30ml</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Formulated with Zinc PCA to control excess sebum, tighten enlarged pores, and block pigment transfer when layered before Azelaic Acid.</p>
</div>
"""

p2_routine = """
<table>
  <thead>
    <tr>
      <th>Routine Phase</th>
      <th>Step 1: Cleanse</th>
      <th>Step 2: Hydrate / Buffer</th>
      <th>Step 3: Treatment Layer</th>
      <th>Step 4: Moisturize & Protect</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Morning Routine (AM)</strong></td>
      <td>Gentle pH-Balanced Cleanser</td>
      <td>Niacinamide 10% Serum (3-4 drops on damp face)</td>
      <td>Lightweight Cica Hydrating Gel</td>
      <td>Broad-Spectrum Sunscreen SPF 50 PA++++</td>
    </tr>
    <tr>
      <td><strong>Evening Routine (PM)</strong></td>
      <td>Mild Cleanser</td>
      <td>Niacinamide 10% Serum</td>
      <td>Azelaic Acid 15% Gel (Pea-sized layer across face)</td>
      <td>Nourishing Ceramide Cream (Locks in active ingredients)</td>
    </tr>
  </tbody>
</table>
"""

p2_clinical = """
<h2>Dermatological Protocols for Indian Skin Types</h2>
<p>When incorporating prescription 15% Azelaic Acid alongside 10% Niacinamide into your daily regimen, follow these evidence-based dermatologist guidelines:</p>

<h3>1. Managing Initial Azelaic Acid Tingling</h3>
<p>It is completely normal to experience a light itching, pricking, or stinging sensation during the first 10 to 14 days of starting 15% Azelaic Acid. To mitigate this:</p>
<ul>
  <li>Apply 10% Niacinamide serum first and allow it to dry completely for 2 minutes before applying Azelaic Acid.</li>
  <li>Ensure your skin is 100% bone-dry before applying Azelaic Acid gel, as damp skin accelerates trans-epidermal penetration and intensifies stinging.</li>
</ul>

<h3>2. Combining with Other Actives</h3>
<p>Azelaic Acid 15% pairs exceptionally well with oral or topical retinoids (such as Tretinoin 0.025% or Adapalene 0.1%). When using with Tretinoin, apply Azelaic Acid in the morning and Tretinoin at night to prevent excessive dryness.</p>
"""

p2_faq = """
<div class="faq-item">
  <div class="faq-question">Can I layer 10% Niacinamide serum with 15% Azelaic Acid gel?</div>
  <div class="faq-answer">Yes! Azelaic Acid 15% and Niacinamide 10% form a Level 1 🟢 Synergistic combination. Niacinamide calms skin inflammation and strengthens ceramides, which counteracts the mild tingling or itching sensation caused by prescription Azelaic Acid gel.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Is Azelaic Acid 15% better for PIE (red marks) or PIH (dark spots)?</div>
  <div class="faq-answer">Azelaic Acid 15% is exceptional for both. It reduces microvascular swelling to fade red/purple PIE marks while selectively targeting hyperactive melanocytes to fade brown PIH dark spots without altering normal skin pigmentation.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Why is 10% Niacinamide sometimes irritating for sensitive Indian skin?</div>
  <div class="faq-answer">Clinical studies show 2% to 5% Niacinamide is optimal for skin barrier repair and sebum control. High 10% concentrations can trigger flushing or mild papular irritation in sensitive skin types. If 10% causes tingling, buffer it by applying moisturizer first.</div>
</div>

<div class="faq-item">
  <div class="faq-question">How long does it take for Azelaic Acid 15% and Niacinamide 10% to show results?</div>
  <div class="faq-answer">Redness (PIE) typically improves within 3 to 4 weeks of consistent twice-daily use, whereas deep epidermal dark spots (PIH) require 8 to 12 weeks of dual-pathway melanin inhibition alongside daily SPF 50 sunscreen.</div>
</div>
"""

p2_html = build_page_html(
    slug=p2_slug,
    title=p2_title,
    description=p2_desc,
    canonical_url=p2_url,
    og_image=p2_og,
    schema_json=json.dumps(p2_schema, indent=2),
    risk_level_badge="risk-level-1",
    risk_level_title="Level 1 🟢 Synergistic Risk",
    risk_level_desc="Gold-standard combination. Niacinamide 10% reinforces ceramide barrier lipids while Azelaic Acid 15% targets melanocyte tyrosinase and red PIE inflammation.",
    hero_title="Azelaic Acid 15% vs Niacinamide 10% for Redness & Dark Spots in India",
    hero_subtitle="Clinical breakdown of dicarboxylic acid tyrosinase inhibition vs Vitamin B3 melanosome transport block to clear PIE redness and PIH dark spots.",
    bento_html=p2_bento,
    comparison_table_html=p2_table,
    mechanism_html=p2_mechanism,
    product_showcase_html=p2_products,
    routine_table_html=p2_routine,
    clinical_guide_html=p2_clinical,
    faq_html=p2_faq
)

with open(os.path.join(p2_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(p2_html)

with open(os.path.join(p2_dir, "page-packet.md"), "w", encoding="utf-8") as f:
    f.write(f"""# Page Packet: Azelaic Acid 15% vs Niacinamide 10% India

- Canonical: {p2_url}
- Risk Rating: Level 1 🟢 Synergistic Risk
- Primary Intent: Dual-pathway guide for PIE redness and PIH dark spots on Indian skin.
""")

print("✅ Page 2 generated successfully.")


# ==========================================
# PAGE 3: Tretinoin Purging vs Breakout
# ==========================================
p3_slug = "acne/tretinoin-purging-vs-breakout-how-to-tell-difference-india"
p3_dir = os.path.join(base_dir, p3_slug)
os.makedirs(p3_dir, exist_ok=True)

p3_title = "Tretinoin Purging vs Breakout: How to Tell Difference on Indian Skin (2026) | MyMirror"
p3_desc = "Complete clinical guide to distinguishing retinoid microcomedone purging vs irritation breakouts from Tretinoin cream 0.025%/0.05% on Indian skin. Check our Risk-o-Meter rating, timeline benchmarks, product reviews & barrier rescue routine."
p3_url = f"https://mymirror.fit/{p3_slug}/"
p3_og = "https://mymirror.fit/assets/images/tretinoin_purging_vs_breakout_india.jpg"

p3_schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": f"{p3_url}#webpage",
      "url": p3_url,
      "name": "Tretinoin Purging vs Breakout Clinical Diagnosis Guide",
      "description": "Clinical diagnosis criteria for distinguishing retinoid acceleration purging from contact dermatitis or cosmetic pore clogging. Timeline benchmarks, anatomical zones, and barrier repair protocols for Indian skin.",
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
          "name": "How long does Tretinoin purging last on Indian skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tretinoin purging typically begins within 7 to 14 days of starting treatment and resolves within 4 to 6 weeks. If new inflammatory papules continue appearing past week 8 or 10, it is a sign of an active acne breakout, barrier destruction, or cosmetic pore clogging rather than purging."
          }
        },
        {
          "@type": "Question",
          "name": "Where does Tretinoin purging occur compared to a bad breakout?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Purging occurs exclusively in areas where you frequently get acne, blackheads, or clogged pores (e.g., chin, forehead, or cheeks). If you develop red bumps, itching, or rash in areas where you never break out (like eyelids, upper cheeks, or neck), it is an irritant contact dermatitis breakout."
          }
        },
        {
          "@type": "Question",
          "name": "Should I stop using Tretinoin if I am purging?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No! Do not stop using Tretinoin if it is genuine purging. Stopping prematurely resets your skin's retinization process. However, if your skin is burning, peeling severely, or showing angry red rash, pause Tretinoin for 5-7 days and focus on ceramide barrier repair."
          }
        },
        {
          "@type": "Question",
          "name": "Does Tretinoin cream cause more breakouts than gel in humid Indian weather?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tretinoin cream formulations contain isopropyl myristate and cetearyl alcohol—emollients that can clog pores in oily Indian skin during hot, humid months. Switching to a 0.025% or 0.04% micro-encapsulated gel formula often resolves cosmetic breakouts."
          }
        }
      ]
    }
  ]
}

p3_bento = """
<div class="bento-card">
  <div class="bento-icon">⚡</div>
  <div class="bento-title">Mechanism of Retinoid Purge</div>
  <div class="bento-desc">Tretinoin accelerates cellular mitosis in the basal layer, pushing pre-existing subclinical microcomedones (trapped sebum & dead cells) to the surface faster than normal.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">🚨</div>
  <div class="bento-title">Irritation & Barrier Breakdown</div>
  <div class="bento-desc">Breakouts occur when Tretinoin strips intercellular lipid bilayers, triggering transepidermal water loss (TEWL) and irritant contact dermatitis, or when vehicle cream ingredients clog pores.</div>
</div>
<div class="bento-card">
  <div class="bento-icon">⏱️</div>
  <div class="bento-title">The 6-Week Timeline Rule</div>
  <div class="bento-desc">True purging resolves cleanly within 4 to 6 weeks as retinization establishes. Persistent breakouts beyond week 8 signal vehicle intolerance or skin barrier damage.</div>
</div>
"""

p3_table = """
<table>
  <thead>
    <tr>
      <th>Diagnostic Parameter</th>
      <th>Retinoid Purging (True Purge)</th>
      <th>Irritant Breakout / Vehicle Reaction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Biological Cause</strong></td>
      <td>Accelerated turnover pushing microcomedones to surface</td>
      <td>Barrier disruption, contact allergy, or pore-clogging vehicle</td>
    </tr>
    <tr>
      <td><strong>Anatomical Location</strong></td>
      <td>Exclusively in your usual acne-prone zones (T-zone, chin)</td>
      <td>New areas where you rarely or never get pimples (e.g., neck)</td>
    </tr>
    <tr>
      <td><strong>Lesion Morphology & Lifecycle</strong></td>
      <td>Small papules/pustules that heal faster than usual (3-5 days)</td>
      <td>Deep, painful cysts or red itchy bumps that linger 2+ weeks</td>
    </tr>
    <tr>
      <td><strong>Sensation & Skin Texture</strong></td>
      <td>Normal skin feel around spots; minimal stinging</td>
      <td>Burning sensation when applying basic moisturizer; severe peeling</td>
    </tr>
    <tr>
      <td><strong>Duration Benchmark</strong></td>
      <td>Starts week 1-2, peaks week 3-4, clears by week 6</td>
      <td>Persists past week 8-12 without signs of improvement</td>
    </tr>
    <tr>
      <td><strong>Recommended Action</strong></td>
      <td>🟢 Continue Tretinoin with Sandwich Method & SPF 50</td>
      <td>🔴 Pause Tretinoin; repair ceramide barrier for 7 days</td>
    </tr>
  </tbody>
</table>
"""

p3_mechanism = """
<h2>Dermatological Mechanism: Desquamation Acceleration vs Barrier Compromise</h2>
<p>Starting prescription <strong>Tretinoin (all-trans retinoic acid 0.025% / 0.05%)</strong> is the gold standard for acne treatment and anti-aging in Indian dermatology. However, the first 60 days require careful clinical monitoring to differentiate between beneficial retinoid purging and harmful skin barrier damage:</p>

<h3>1. Retinoid Purging — Accelerated Microcomedone Maturation</h3>
<p>Acne begins invisible to the naked eye as a <em>microcomedone</em>—a microscopic plug of keratinocytes and sebum inside the hair follicle. Under normal conditions, a microcomedone takes 6 to 8 weeks to mature into a visible whitehead or blackhead.</p>
<ul>
  <li><strong>RA Receptor Activation:</strong> Tretinoin binds directly to retinoic acid receptors (RAR-α, RAR-β, RAR-γ) in keratinocyte nuclei, speeding up cell division in the stratum basale.</li>
  <li><strong>Fast-Forward Effect:</strong> This rapid cellular turnover acts like a fast-forward button, surfacing dozens of pre-existing microcomedones simultaneously within 2 to 4 weeks. These lesions appear, come to a head, and heal significantly faster than normal pimples.</li>
</ul>

<h3>2. Irritant Breakout — Transepidermal Water Loss & Vehicle Comedogenicity</h3>
<p>In contrast, a true reaction breakout stems from two negative cutaneous events:</p>
<ul>
  <li><strong>Epidermal Lipid Depletion:</strong> During early retinization, Tretinoin downregulates ceramide synthesis temporarily, causing stratum corneum desquamation and transepidermal water loss (TEWL). When the barrier breaks down, environmental bacteria and irritants penetrate deeply, triggering papular inflammation.</li>
  <li><strong>Vehicle Comedogenicity:</strong> Traditional Tretinoin creams (such as Retino-A 0.025%) use emollient bases containing isopropyl myristate or mineral oil. In oily Indian skin exposed to tropical heat, these thick cream emollients can physically block sebaceous ducts, creating new comedones.</li>
</ul>
"""

p3_products = """
<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/retino_a_cream.jpg" alt="Retino-A 0.025% Tretinoin Cream">
  </div>
  <div class="product-badge">Rx Retinoid Gold Standard</div>
  <div class="product-title">Retino-A / A-Ret 0.025% Cream</div>
  <div class="product-specs">Tretinoin 0.025% w/w | Rx Gel/Cream | 20g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">First-line prescription retinoid for acne and photoaging. Requires slow introduction (2 nights/week) using the Sandwich Method on dry skin.</p>
</div>

<div class="product-card">
  <div class="product-image-wrapper">
    <img src="/assets/images/cerave_resurfacing_retinol.jpg" alt="Cetaphil / CeraVe Moisturizing Cream">
  </div>
  <div class="product-badge">Barrier Rescue Hero</div>
  <div class="product-title">Cetaphil / CeraVe Moisturizing Cream</div>
  <div class="product-specs">3 Essential Ceramides + Hyaluronic Acid | 100g</div>
  <p style="font-size: 0.9rem; color: var(--text-muted);">Rich ceramide barrier repair cream designed to soothe retinoid irritation, eliminate peeling, and stop TEWL during the purging phase.</p>
</div>
"""

p3_routine = """
<table>
  <thead>
    <tr>
      <th>Retinization Stage</th>
      <th>Evening (PM) Routine</th>
      <th>Morning (AM) Routine</th>
      <th>Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Weeks 1 – 2 (Introduction Phase)</strong></td>
      <td>Gentle Cleanser &rarr; Ceramide Moisturizer &rarr; <em>Pea-size Tretinoin 0.025%</em> &rarr; Moisturizer (Sandwich Method)</td>
      <td>Gentle Cleanser &rarr; Barrier Cream &rarr; <strong>SPF 50 Sunscreen</strong></td>
      <td>2 nights per week (e.g., Mon & Thu)</td>
    </tr>
    <tr>
      <td><strong>Weeks 3 – 6 (Purge Peak Phase)</strong></td>
      <td>Gentle Cleanser &rarr; Dry 10 Mins &rarr; <em>Tretinoin 0.025%</em> &rarr; Ceramide Cream</td>
      <td>Hydrating Cleanser &rarr; Hyaluronic Serum &rarr; <strong>SPF 50 Sunscreen</strong></td>
      <td>3 nights per week (Alternate nights)</td>
    </tr>
    <tr>
      <td><strong>Weeks 7+ (Maintenance Phase)</strong></td>
      <td>Gentle Cleanser &rarr; <em>Tretinoin 0.025%</em> &rarr; Moisturizer</td>
      <td>Gentle Cleanser &rarr; Vitamin C / Niacinamide &rarr; <strong>SPF 50 Sunscreen</strong></td>
      <td>4 to 5 nights per week</td>
    </tr>
  </tbody>
</table>
"""

p3_clinical = """
<h2>Clinical Troubleshooting: What to Do If Your Skin Is Reaction-Breaking Out</h2>
<p>If you have evaluated your skin against the diagnostic benchmarks and concluded that you are experiencing an <strong>irritant breakout or vehicle reaction</strong> rather than genuine purging, follow this 4-step dermatologist rescue protocol:</p>

<h3>Step 1: Implement a 7-Day Retinoid Fast</h3>
<p>Completely pause Tretinoin, AHA/BHA exfoliants, and Vitamin C for 7 consecutive days. Stripping all active ingredients gives your epidermal stem cells time to re-synthesize desmosomes and lipid layers.</p>

<h3>Step 2: Apply the Ceramide & Cica Rescue Buffer</h3>
<p>Wash your face only with lukewarm water or a non-foaming lotion cleanser. Apply a ceramide-rich barrier cream (containing Ceramides NP, AP, EOP, and Centella Asiatica) morning and night to restore transepidermal hydration.</p>

<h3>Step 3: Switch Formulations (Cream to Micro-Gel)</h3>
<p>If you suspect the heavy emollient base of Tretinoin cream is clogging your pores, consult your dermatologist to switch to a <strong>0.04% Tretinoin Micro-Encapsulated Gel</strong> or <strong>0.1% Adapalene Gel</strong>. Micro-gels release retinoic acid slowly over several hours, drastically reducing surface irritation and pore clogging in tropical Indian weather.</p>

<h3>Step 4: Re-introduce using the "Sandwich Method"</h3>
<p>Once burning and peeling subside completely, re-introduce Tretinoin using the Sandwich Method: apply a thin layer of moisturizer, wait 10 minutes, apply a pea-sized amount of Tretinoin, and follow with another layer of moisturizer.</p>
"""

p3_faq = """
<div class="faq-item">
  <div class="faq-question">How long does Tretinoin purging last on Indian skin?</div>
  <div class="faq-answer">Tretinoin purging typically begins within 7 to 14 days of starting treatment and resolves within 4 to 6 weeks. If new inflammatory papules continue appearing past week 8 or 10, it is a sign of an active acne breakout, barrier destruction, or cosmetic pore clogging rather than purging.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Where does Tretinoin purging occur compared to a bad breakout?</div>
  <div class="faq-answer">Purging occurs exclusively in areas where you frequently get acne, blackheads, or clogged pores (e.g., chin, forehead, or cheeks). If you develop red bumps, itching, or rash in areas where you never break out (like eyelids, upper cheeks, or neck), it is an irritant contact dermatitis breakout.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Should I stop using Tretinoin if I am purging?</div>
  <div class="faq-answer">No! Do not stop using Tretinoin if it is genuine purging. Stopping prematurely resets your skin's retinization process. However, if your skin is burning, peeling severely, or showing angry red rash, pause Tretinoin for 5-7 days and focus on ceramide barrier repair.</div>
</div>

<div class="faq-item">
  <div class="faq-question">Does Tretinoin cream cause more breakouts than gel in humid Indian weather?</div>
  <div class="faq-answer">Yes. Tretinoin cream formulations contain isopropyl myristate and cetearyl alcohol—emollients that can clog pores in oily Indian skin during hot, humid months. Switching to a 0.025% or 0.04% micro-encapsulated gel formula often resolves cosmetic breakouts.</div>
</div>
"""

p3_html = build_page_html(
    slug=p3_slug,
    title=p3_title,
    description=p3_desc,
    canonical_url=p3_url,
    og_image=p3_og,
    schema_json=json.dumps(p3_schema, indent=2),
    risk_level_badge="risk-level-2",
    risk_level_title="Level 2 🟡 Caution Risk",
    risk_level_desc="Mistaking barrier destruction or cream vehicle comedogenicity for purging leads to severe retinoid dermatitis & post-inflammatory hyperpigmentation on Indian skin.",
    hero_title="Tretinoin Purging vs Breakout: How to Tell the Difference on Indian Skin",
    hero_subtitle="Clinical diagnostic criteria to differentiate microcomedone acceleration from contact dermatitis, barrier damage, and cream vehicle pore clogging.",
    bento_html=p3_bento,
    comparison_table_html=p3_table,
    mechanism_html=p3_mechanism,
    product_showcase_html=p3_products,
    routine_table_html=p3_routine,
    clinical_guide_html=p3_clinical,
    faq_html=p3_faq
)

with open(os.path.join(p3_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(p3_html)

with open(os.path.join(p3_dir, "page-packet.md"), "w", encoding="utf-8") as f:
    f.write(f"""# Page Packet: Tretinoin Purging vs Breakout Difference India

- Canonical: {p3_url}
- Risk Rating: Level 2 🟡 Caution Risk
- Primary Intent: Clinical diagnosis of retinoid purging vs breakout on Indian skin.
""")

print("✅ Page 3 generated successfully.")

