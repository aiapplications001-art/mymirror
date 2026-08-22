import re

with open('/Users/tm030/Documents/mymirror_repo/acne/adapalene-0.1-percent-gel-acne-india/index.html', 'r', encoding='utf-8') as f:
    adapalene_html = f.read()

css_match = re.search(r'<style>(.*?)</style>', adapalene_html, re.DOTALL)
if css_match:
    css = css_match.group(1)
else:
    print("Could not find CSS in reference")

with open('/Users/tm030/Documents/mymirror_repo/acne/panoxyl-4-percent-vs-10-percent-acne-wash-usa/index.html', 'r', encoding='utf-8') as f:
    panoxyl_html = f.read()

# Extract metas
title = re.search(r'<title>(.*?)</title>', panoxyl_html).group(1)
desc = re.search(r'<meta name="description" content="(.*?)">', panoxyl_html).group(1)

# Schemas
schemas = re.findall(r'<script type="application/ld\+json">.*?</script>', panoxyl_html, re.DOTALL)

# Let's generate the whole HTML directly

html_content = f"""<!DOCTYPE html>
<html lang="en-US">
<head>
  <!-- Favicons (Cache Busted v3) -->
  <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png?v=3">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png?v=3">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=3">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=3">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3">
  <link rel="shortcut icon" href="/favicon.ico?v=3">
  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://mymirror.fit/acne/panoxyl-4-percent-vs-10-percent-acne-wash-usa/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://mymirror.fit/acne/panoxyl-4-percent-vs-10-percent-acne-wash-usa/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:image" content="https://mymirror.fit/assets/images/panoxyl_wash_usa.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://mymirror.fit/acne/panoxyl-4-percent-vs-10-percent-acne-wash-usa/">
  <meta property="twitter:title" content="{title}">
  <meta property="twitter:description" content="{desc}">
  <meta property="twitter:image" content="https://mymirror.fit/assets/images/panoxyl_wash_usa.jpg">

  {schemas[0]}

  {schemas[1]}

  <!-- Google Analytics Tracker (Deferred) -->
  <script defer src="/assets/site-analytics.js"></script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

  <style>
{css}
  </style>
</head>
<body>
  <header class="site-header">
    <a href="/" class="brand-logo">
      <img src="https://mymirror.fit/favicon.png" alt="MyMirror Logo" style="width: 24px; height: 24px;">
      My<span>Mirror</span>
    </a>
    <a href="https://face3layerscanner.onrender.com/" class="header-cta">
      Scan Face <span>✨</span>
    </a>
  </header>

  <div class="trust-bar">
    <svg class="trust-badge-icon" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
    </svg>
    <span>Reviewed by Dr. Lipy Mehta, Dermatologist • August 2026</span>
  </div>

  <nav class="sticky-toc-bar">
    <div class="toc-inner">
      <span class="toc-label">Contents</span>
      <a class="toc-link" href="#science-bpo">Science of BPO</a>
      <a class="toc-link" href="#deep-dive">Deep Dive</a>
      <a class="toc-link" href="#comparison">Comparison</a>
      <a class="toc-link" href="#protocols">Protocols</a>
      <a class="toc-link" href="#compatibility">Compatibility</a>
      <a class="toc-link" href="#conclusion">Conclusion</a>
      <a class="toc-link" href="#faq">FAQs</a>
      <a class="toc-link" href="#clinical-analysis">Clinical Analysis</a>
    </div>
  </nav>

  <section class="dark-hero">
    <div class="hero-container">
      <div>
        <span class="hero-badge">Clinical Comparison Guide (2026)</span>
        <h1 class="hero-title">{title}</h1>
        <p class="hero-subtitle">{desc}</p>
        <div class="hero-meta-list">
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            BPO Face vs Body
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            Short-Contact Therapy
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            FDA OTC Monograph
          </div>
        </div>
        <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta">
          Check Active Ingredient Compatibility ✨
        </a>
      </div>
      <div class="hero-image-card">
        <img src="https://mymirror.fit/assets/images/panoxyl_wash_usa.jpg" alt="PanOxyl Wash USA">
        <div class="hero-image-tag">
          <span>PanOxyl USA Protocol</span>
          <span class="hero-tag-accent">4% vs 10% BPO</span>
        </div>
      </div>
    </div>
  </section>

  <div class="main-container">
    <article class="article-content">
      <section class="section-block">
        <p>In the landscape of over-the-counter (OTC) acne treatments in the United States, few active ingredients carry the weight and clinical legacy of benzoyl peroxide (BPO). For decades, it has stood as the gold standard for combating acne vulgaris, acting as a potent bactericidal agent against <i>Cutibacterium acnes</i>. Among the myriad of formulations available on pharmacy shelves, the PanOxyl brand remains highly recommended by dermatologists. However, consumers frequently face a critical dilemma: Should they opt for the <strong>PanOxyl 4% Creamy Wash</strong> or the maximum strength <strong>PanOxyl 10% Foaming Wash</strong>?</p>
        <p>This comprehensive clinical guide breaks down the science, the US FDA regulations surrounding OTC acne products, and the specific use cases for each formulation to help you achieve clear skin without compromising your <a href="/acne/skin-barrier-repair-guide/">skin barrier</a>.</p>
      </section>

      <section id="science-bpo" class="section-block">
        <h2>1. The Science of Benzoyl Peroxide (BPO)</h2>
        <p>Before dissecting the specific PanOxyl formulations, it is crucial to understand how benzoyl peroxide operates. Unlike antibiotics, which can lead to bacterial resistance over time, BPO introduces oxygen into the pores. <i>C. acnes</i> thrives in an anaerobic (oxygen-free) environment; by flooding the pilosebaceous unit with oxygen, BPO effectively eradicates the acne-causing bacteria. Furthermore, benzoyl peroxide possesses mild keratolytic properties, meaning it helps to unglue dead skin cells, preventing the clogged pores (<a href="/acne/comedones-blackheads-whiteheads-explained/">comedones</a>) that trigger breakouts.</p>
        
        <div class="info-box">
          <h4>Free-radical oxygen mechanism</h4>
          <p>Benzoyl peroxide penetrates the pilosebaceous unit and releases free-radical oxygen species. This oxygen-rich environment is toxic to anaerobic <i>C. acnes</i> bacteria, effectively sterilizing the pore without the risk of creating antibiotic-resistant bacterial strains.</p>
        </div>
        
        <p><strong>Clinical Insight:</strong> Studies have shown that BPO concentrations of 2.5%, 5%, and 10% offer comparable antibacterial efficacy, but higher concentrations are associated with a steeper curve of irritation, erythema (redness), and peeling.</p>
      </section>

      <section id="fda-regulations" class="section-block">
        <h2>2. US FDA Regulations on OTC Benzoyl Peroxide</h2>
        <p>In the United States, the Food and Drug Administration (FDA) strictly regulates the formulations of OTC acne medications under the Acne Monograph. According to these guidelines, benzoyl peroxide can be formulated in concentrations ranging from 2.5% up to a maximum of 10%. Anything exceeding 10% requires a prescription and is rarely utilized due to the high risk of severe contact dermatitis. Both PanOxyl 4% and 10% comply with these stringent regulations, offering safe, standardized efficacy for consumers.</p>
      </section>

      <section id="deep-dive" class="section-block">
        <h2>3. Deep Dive: PanOxyl 4% vs 10%</h2>
        
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-tag">Face Focus</span>
            </div>
            <h3 class="bento-title">PanOxyl 4% Creamy Wash</h3>
            <div class="bento-body">
              <p>The 4% Creamy Wash is often the dermatologist’s first choice for facial acne and individuals with sensitive skin. Formulated as a creamy emulsion, this cleanser prioritizes barrier protection while delivering a clinically effective dose of BPO.</p>
              <ul>
                  <li><strong>Texture:</strong> Creamy, non-lathering</li>
                  <li><strong>Target Area:</strong> Face, sensitive body areas</li>
                  <li><strong>Best for:</strong> Mild to moderate facial acne, hormonal acne management on the jawline, first-time BPO users</li>
              </ul>
              <p>Because the skin on the face is thinner and possesses a higher density of sebaceous glands, it is more susceptible to irritation. The 4% concentration hits the "sweet spot" for facial application.</p>
            </div>
            <div class="bento-footer">Daily Use Friendly</div>
          </div>
          
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-tag">Body Focus</span>
            </div>
            <h3 class="bento-title">PanOxyl 10% Foaming Wash</h3>
            <div class="bento-body">
              <p>At the upper limit of FDA OTC regulations, the 10% Foaming Wash brings maximum strength bactericidal action. Formulated with surfactants that create a rich lather, it cuts through thick sebum.</p>
              <ul>
                  <li><strong>Texture:</strong> Foaming, lathering</li>
                  <li><strong>Target Area:</strong> Back, chest, shoulders</li>
                  <li><strong>Best for:</strong> Severe body acne (bacne), thick/resilient skin, acne mechanica from sports equipment</li>
              </ul>
              <p>The 10% formulation is generally too aggressive for daily facial use for the average person, but highly effective on thicker body skin.</p>
            </div>
            <div class="bento-footer">Maximum OTC Strength</div>
          </div>
        </div>
      </section>

      <section id="comparison" class="section-block">
        <h2>4. Head-to-Head Comparison: Which Should You Choose?</h2>
        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>PanOxyl 4% Creamy</th>
                <th>PanOxyl 10% Foaming</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Feature"><strong>Irritation Potential</strong></td>
                <td data-label="PanOxyl 4% Creamy">Low to Moderate</td>
                <td data-label="PanOxyl 10% Foaming">High (if used on face)</td>
              </tr>
              <tr>
                <td data-label="Feature"><strong>Skin Type</strong></td>
                <td data-label="PanOxyl 4% Creamy">Sensitive, Dry, Normal</td>
                <td data-label="PanOxyl 10% Foaming">Very Oily, Resilient</td>
              </tr>
              <tr>
                <td data-label="Feature"><strong>Primary Use Case</strong></td>
                <td data-label="PanOxyl 4% Creamy">Facial Acne, Rosacea-related pustules</td>
                <td data-label="PanOxyl 10% Foaming">Body Acne (Chest, Back, Shoulders)</td>
              </tr>
              <tr>
                <td data-label="Feature"><strong>Hydration Factor</strong></td>
                <td data-label="PanOxyl 4% Creamy">Contains emollients to reduce dryness</td>
                <td data-label="PanOxyl 10% Foaming">Formulated to deeply cleanse; can be stripping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="protocols" class="section-block">
        <h2>5. Dermatological Protocols: How to Maximize Efficacy</h2>
        <h3>The Short Contact Therapy Method</h3>
        <p>One of the biggest mistakes consumers make with benzoyl peroxide washes is rinsing them off immediately. To allow the active ingredient sufficient time to penetrate the pore and neutralize bacteria, dermatologists strongly recommend "Short Contact Therapy."</p>
        
        <div class="info-box">
          <h4>2-3 min contact time protocol</h4>
          <p>Apply the wash to damp skin and massage gently. <strong>Leave the product on the skin for 2 to 3 minutes</strong> before rinsing thoroughly. This allows the BPO to act efficiently while minimizing prolonged contact irritation.</p>
        </div>

        <div class="caution-box">
          <h4>Start with 4% if new to BPO</h4>
          <p>If you are new to benzoyl peroxide or have sensitive skin, start with the 4% Creamy formulation. BPO carries a significant dryness risk, and allowing your skin to acclimate reduces the chances of a damaged skin barrier.</p>
        </div>

        <h3>The Bleach Warning</h3>
        <div class="warning-box">
          <h4>BPO bleaches towels/pillowcases</h4>
          <p>Benzoyl peroxide is a potent oxidizing agent that will bleach colored fabrics. Always rinse thoroughly, ensure your skin is completely dry before getting dressed, and use dedicated white towels and white pillowcases to prevent bleaching.</p>
        </div>
      </section>

      <section id="compatibility" class="section-block">
        <h2>6. Compatibility with Other Skincare Actives</h2>
        <p>Integrating PanOxyl into an existing skincare routine requires careful consideration to avoid severe barrier disruption. Benzoyl peroxide is highly active and can conflict with other potent ingredients.</p>
        <ul>
            <li><strong>With Retinoids (Tretinoin, Adapalene):</strong> Generally, BPO and retinoids should not be applied at the same time as they can destabilize each other and cause intense irritation. However, using a BPO wash in the morning and a <a href="/acne/adapalene-differin-gel-guide/">retinoid</a> at night is a standard, highly effective dermatological protocol.</li>
            <li><strong>With Salicylic Acid (BHA) or Glycolic Acid (AHA):</strong> Combining PanOxyl with exfoliating acids in the same routine drastically increases the risk of peeling and chemical burns. Alternate days or use the BHA/AHA on areas where PanOxyl is not applied.</li>
            <li><strong>With Vitamin C:</strong> BPO can oxidize Vitamin C, rendering it ineffective. Use them at different times of the day.</li>
            <li><strong>With Niacinamide and Ceramides:</strong> Excellent pairings. Follow your PanOxyl wash with a gentle moisturizer rich in <a href="/acne/ceramides-for-acne-prone-skin/">ceramides</a> to soothe the skin and rebuild the barrier.</li>
        </ul>
      </section>

      <section id="conclusion" class="section-block">
        <h2>7. Conclusion: The Final Verdict</h2>
        <p>Choosing between PanOxyl 4% and 10% comes down to the location and severity of your acne, as well as your skin's inherent tolerance. For over 80% of users targeting facial breakouts, the <strong>4% Creamy Wash</strong> is the superior choice, offering the necessary antibacterial action without the debilitating side effects of excessive dryness. Conversely, for stubborn truncal acne (chest and back), the <strong>10% Foaming Wash</strong> provides the heavy-lifting required to penetrate thicker skin and resolve persistent blemishes.</p>
        <p>Always follow up with a non-comedogenic moisturizer and a broad-spectrum <a href="/acne/best-sunscreens-for-acne-prone-skin/">sunscreen</a>, as benzoyl peroxide can increase photosensitivity.</p>
      </section>

      <section id="faq" class="section-block">
        <h2>8. Frequently Asked Questions (FAQs)</h2>
        <div class="faq-accordion">
          
          <div class="faq-item">
            <button class="faq-header">
              Can I use PanOxyl 10% on my face?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                <p>While FDA approved for facial use, dermatologists typically advise against using the 10% formulation on the face for most individuals. The high concentration often leads to severe peeling, redness, and barrier damage. It is better to start with the 4% and only graduate to higher percentages under medical supervision.</p>
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-header">
              Does PanOxyl cause a "purging" phase?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                <p>Unlike retinoids or chemical exfoliants that rapidly increase cell turnover and bring microcomedones to the surface (purging), benzoyl peroxide primarily acts as an antibacterial agent. Therefore, it does not typically cause true skin purging. If you experience an initial flare-up, it is more likely irritation rather than a purge. See our guide on <a href="/acne/purging-vs-breakouts/">purging vs breakouts</a> for more info.</p>
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-header">
              Is PanOxyl safe to use during pregnancy?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                <p>Benzoyl peroxide is generally considered safe for use during pregnancy as systemic absorption is low. However, it is always recommended to consult with your OB/GYN or a board-certified dermatologist before introducing new active ingredients while pregnant. Read our <a href="/acne/pregnancy-safe-acne-treatments/">pregnancy safe acne treatments</a> guide.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-header">
              Can I use PanOxyl every day?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                <p>Yes, but frequency should be tailored to your skin's tolerance. Many users start by using it every other day to allow the skin to acclimatize, gradually increasing to daily use as tolerated. If severe dryness occurs, scale back the frequency.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-header">
              What should I do if my skin barrier is damaged from BPO?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                <p>Stop using all active ingredients immediately. Switch to a gentle, non-medicated cleanser and apply a thick, soothing barrier repair cream containing ceramides, panthenol, and hyaluronic acid. Wait until the redness and stinging completely subside before slowly reintroducing the 4% wash. More details in our <a href="/acne/damaged-skin-barrier-recovery/">barrier recovery protocol</a>.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="clinical-analysis" class="section-block">
        <h2>9. Dermatological Clinical Analysis & Patient Application Guidelines</h2>
        <p>Achieving long-term clearing of active acne lesions while preserving stratum corneum integrity requires strict adherence to evidence-based active dosing protocols. Dermatologists emphasize that over-application of topical keratolytics or antibacterial agents leads to acute trans-epidermal water loss (TEWL), triggering reactive sebum hyper-secretion and exacerbating microcomedone formation.</p>

        <h3>Mechanism of Action & Follicular Dynamics</h3>
        <p>Topical active ingredients target acne through distinct biological pathways. Keratolytic agents like Salicylic Acid (BHA) and Glycolic Acid (AHA) cleave ionic desmosomal bonds holding dead corneocytes together, shedding follicular plugs. Antimicrobial compounds like Benzoyl Peroxide (BPO) release free radical oxygen species that sterilize anaerobic <em>Cutibacterium acnes</em> bacteria without inducing bacterial resistance. Dicarboxylic acids like Azelaic Acid selectively inhibit tyrosinase enzymes to prevent post-inflammatory hyperpigmentation (PIH).</p>

        <h3>Barrier Preservation & Retinoid Layering Protocol</h3>
        <p>To avoid chemical irritation and severe flaking, always follow the <strong>Sandwich Protocol</strong> when layering retinoids or high-strength acids: apply a light hydrating layer of non-comedogenic ceramide lotion, allow 10 minutes for absorption, apply your active treatment, and seal with a barrier moisturizer.</p>
        <ul>
          <li><strong>Morning Routine (AM):</strong> Cleanse with a mild hydrating wash, apply active spot treatment or serum, follow with barrier moisturizer, and complete with broad-spectrum SPF 50+ sunscreen.</li>
          <li><strong>Evening Routine (PM):</strong> Double-cleanse to remove UV filters and urban particulate matter, apply targeted treatment on 100% dry skin, and lock in hydration with ceramide-rich creams.</li>
        </ul>

        <h3>Preventing Post-Inflammatory Hyperpigmentation (PIH) on Dark Skin Tones</h3>
        <p>Melanin-rich skin (Fitzpatrick IV–VI) responds to skin barrier trauma by accelerating melanin synthesis. Never pick, pop, or scratch active inflammatory papules. Use hydrocolloid patches on whiteheads to absorb exudate, and introduce brightening actives like 4% Niacinamide, 2% Alpha Arbutin, or 15% Azelaic Acid once inflammation subsides.</p>
      </section>
      
      <p style="font-size: 0.9rem; color: #64748b; margin-top: 3rem;">
        Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a healthcare professional for specific concerns regarding your skin.<br><br>
        Internal links for further reading: 
        <a href="/acne/cystic-acne-causes/">Cystic Acne</a> | 
        <a href="/acne/benzoyl-peroxide-vs-salicylic-acid/">BPO vs SA</a> | 
        <a href="/acne/adult-acne-treatments/">Adult Acne</a> | 
        <a href="/acne/post-inflammatory-hyperpigmentation/">PIH</a> | 
        <a href="/acne/acne-scars-treatment/">Acne Scars</a>
      </p>
    </article>

    <aside class="desktop-sidebar">
      <div class="sidebar-card">
        <h4 class="sidebar-title">💡 Medical Review</h4>
        <p style="font-size: 0.9rem; color: #475569;">All guides on MyMirror are reviewed by board-certified specialists. This cell-turnover purging protocol is approved by <strong>Dr. Lipy Mehta</strong>.</p>
      </div>

      <div class="sidebar-card">
        <h4 class="sidebar-title">Quick Stats</h4>
        <ul class="sidebar-list">
          <li>Active: Benzoyl Peroxide (BPO)</li>
          <li>Strengths: 4% (Face) & 10% (Body)</li>
          <li>Method: Short Contact Therapy (2-3 min)</li>
          <li>Warning: Bleaches fabrics</li>
        </ul>
      </div>

      <div class="sidebar-card" style="background: #FFFBEB; border-color: #FCD34D;">
        <h4 class="sidebar-title" style="color: #92400E;">When to Consult a Doctor</h4>
        <p style="font-size: 0.9rem; color: #92400E; margin-bottom: 0.75rem;">Seek dermatological advice if your breakouts exhibit:</p>
        <ul class="sidebar-list" style="color: #92400E;">
          <li>Severe redness or peeling</li>
          <li>Suspected contact dermatitis</li>
          <li>Deep cystic acne not improving</li>
        </ul>
      </div>
    </aside>
  </div>

  <div class="sticky-bottom-bar">
    <div class="mobile-bar-text">
      <strong>Free AI Skin Analysis</strong>
      Check active compatibility
    </div>
    <a href="https://face3layerscanner.onrender.com/" class="mobile-bar-btn">Scan Now</a>
  </div>

  <footer class="site-footer">
    <div class="footer-inner" style="display: flex; justify-content: space-between; align-items: center;">
      <a href="/" class="brand-logo" style="color: #FFFFFF;">
        <img src="https://mymirror.fit/favicon.png" alt="MyMirror Logo" style="width: 24px; height: 24px;">
        My<span style="color: var(--brand);">Mirror</span>
      </a>
      <p>&copy; 2026 MyMirror.fit • Science-Based Skin Health</p>
    </div>
  </footer>

  <script>
    // FAQ Accordion Toggle
    document.querySelectorAll('.faq-header').forEach(button => {{
      button.addEventListener('click', () => {{
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {{
          item.classList.remove('active');
        }});
        
        if (!isActive) {{
          faqItem.classList.add('active');
        }}
      }});
    }});

    // TOC Scroll Spy
    const sections = document.querySelectorAll('.section-block');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    window.addEventListener('scroll', () => {{
      let current = '';
      sections.forEach(section => {{
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {{
          current = section.getAttribute('id');
        }}
      }});
      
      tocLinks.forEach(link => {{
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {{
          link.classList.add('active');
        }}
      }});
    }});
  </script>
</body>
</html>
"""

with open('/Users/tm030/Documents/mymirror_repo/acne/panoxyl-4-percent-vs-10-percent-acne-wash-usa/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Rebuild complete!")
