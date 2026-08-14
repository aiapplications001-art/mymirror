import re

with open('/Users/tm030/acne/salicylic-acid-cream-gel-face-india/index.html', 'r') as f:
    template = f.read()

css = re.search(r'<style>.*?</style>', template, re.DOTALL).group(0)

html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Vitamin C Serum for Face India: L-Ascorbic Acid vs Derivatives (2026) | MyMirror</title>
  <meta name="description" content="Compare the 8 best Vitamin C serums for Indian skin. L-Ascorbic Acid vs 3-O-Ethyl Ascorbic Acid vs MAP — pH stability, melanin inhibition rates & layering guide for oily, pigmented skin.">
  <link rel="canonical" href="https://mymirror.fit/acne/best-vitamin-c-serum-for-face-india/">

  <!-- Open Graph / Social Meta Tags -->
  <meta property="og:title" content="Best Vitamin C Serum for Face India: L-Ascorbic Acid vs Derivatives (2026) | MyMirror">
  <meta property="og:description" content="Compare the 8 best Vitamin C serums for Indian skin. L-Ascorbic Acid vs 3-O-Ethyl Ascorbic Acid vs MAP — pH stability, melanin inhibition rates & layering guide for oily, pigmented skin.">
  <meta property="og:url" content="https://mymirror.fit/acne/best-vitamin-c-serum-for-face-india/">
  <meta property="og:type" content="article">
  <meta property="og:image" content="https://mymirror.fit/assets/images/best-vitamin-c-serum-india-og.jpg">

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Best Vitamin C Serum for Face India: L-Ascorbic Acid vs Derivatives (2026) | MyMirror">
  <meta name="twitter:description" content="Compare the 8 best Vitamin C serums for Indian skin. L-Ascorbic Acid vs 3-O-Ethyl Ascorbic Acid vs MAP — pH stability, melanin inhibition rates & layering guide for oily, pigmented skin.">
  <meta name="twitter:image" content="https://mymirror.fit/assets/images/best-vitamin-c-serum-india-og.jpg">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

  <!-- Structured Data: MedicalWebPage & FAQPage Schemas -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Best Vitamin C Serum for Face India: L-Ascorbic Acid vs Derivatives",
    "url": "https://mymirror.fit/acne/best-vitamin-c-serum-for-face-india/",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Lipy Mehta",
      "medicalSpecialty": "Dermatology"
    },
    "description": "Compare the 8 best Vitamin C serums for Indian skin. L-Ascorbic Acid vs 3-O-Ethyl Ascorbic Acid vs MAP — pH stability, melanin inhibition rates & layering guide for oily, pigmented skin."
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use Vitamin C serum every day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Vitamin C is best used daily in the morning to protect against free radicals and environmental damage."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Vitamin C with retinol at night?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is recommended to use Vitamin C in the morning and Retinol at night to avoid irritation and pH conflicts."
        }
      },
      {
        "@type": "Question",
        "name": "Why did my Vitamin C serum turn orange/brown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This indicates oxidation. Once it turns dark orange or brown, it has lost its efficacy and should be discarded."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for pigmentation: Vitamin C or Alpha Arbutin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both work well, but they target pigmentation differently. Vitamin C also provides antioxidant benefits, while Alpha Arbutin is highly targeted for dark spots. They can be layered together."
        }
      },
      {
        "@type": "Question",
        "name": "Is 20% Vitamin C too strong for Indian skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For beginners, yes. It's best to start with 10% and slowly work your way up to higher concentrations to prevent barrier damage."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Vitamin C serum if I have active acne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L-Ascorbic Acid can irritate active acne. A derivative like Sodium Ascorbyl Phosphate (SAP) is a better choice as it has antimicrobial properties against acne bacteria."
        }
      }
    ]
  }
  </script>

  __CSS_PLACEHOLDER__
</head>
<body>

  <!-- SITE HEADER -->
  <header class="site-header">
    <a href="https://mymirror.fit" class="brand-logo">
      MyMirror<span>.fit</span>
    </a>
    <a href="https://face3layerscanner.onrender.com/" class="header-cta" target="_blank" rel="noopener">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
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
      <a href="#section-1" class="toc-link">1. How It Works</a>
      <a href="#section-2" class="toc-link">2. Vitamin C Forms</a>
      <a href="#section-3" class="toc-link">3. Product Comparison</a>
      <a href="#section-4" class="toc-link">4. The Oxidation Problem</a>
      <a href="#section-5" class="toc-link">5. How to Layer</a>
      <a href="#section-6" class="toc-link">6. The Duke Patent</a>
      <a href="#section-7" class="toc-link">7. Common Mistakes</a>
      <a href="#section-8" class="toc-link">8. Find Your Serum Quiz</a>
      <a href="#section-9" class="toc-link">9. FAQ</a>
    </div>
  </nav>

  <!-- DARK HERO SECTION -->
  <section class="dark-hero">
    <div class="hero-container">
      <div class="hero-text-col">
        <div class="hero-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Dermatology Clinical Guide (2026)
        </div>
        <h1 class="hero-title">Best Vitamin C Serum for Face India: L-Ascorbic Acid vs Derivatives</h1>
        <p class="hero-subtitle">
          Compare the 8 best Vitamin C serums for Indian skin. Discover the right form for your skin type, understand pH stability, and learn how to layer safely to fight pigmentation.
        </p>
        <div class="hero-meta-list">
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Optimal pH Levels
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            PIH Protection
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Safe Layering Protocol
          </div>
        </div>

        <!-- ANIMATED PERIMETER-RAIL CTA BUTTON -->
        <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta" target="_blank" rel="noopener">
          <span>Scan Your Skin Now</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>

      <div class="hero-image-col">
        <div class="hero-image-card">
          <img src="/assets/images/best-vitamin-c-serum-india-og.jpg" alt="Vitamin C Serum Bottles" width="600" height="338" loading="eager">
          <div class="hero-image-tag">
            <span><strong>8 Top Vitamin C Serums</strong> Reviewed</span>
            <span class="hero-tag-accent">Fitzpatrick III-V Safe</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN CONTENT CONTAINER -->
  <div class="main-container">
    <article class="article-content">

      <!-- SECTION 1 -->
      <section id="section-1" class="section-block">
        <h2>1. How Vitamin C Fights Pigmentation & Acne Scars on Indian Skin</h2>
        <p>Melanin biochemistry explains the magic: Vitamin C (ascorbic acid) acts as a powerful tyrosinase inhibitor. It blocks the tyrosinase enzyme, preventing the transfer of melanin from melanocytes to keratinocytes.</p>
        <p>Indian skin (Fitzpatrick III-V) is particularly prone to pigmentation due to higher melanocyte density and reactive melanogenesis after inflammation, commonly known as Post-Inflammatory Hyperpigmentation (PIH). Furthermore, Vitamin C boosts collagen synthesis by acting as a co-factor for hydroxylase enzymes, which is vital for acne scar remodeling.</p>
        
        <div class="info-box">
          <h4>Did you know?</h4>
          <p>The vehicle dictates how fast and how deeply Vitamin C enters Indian skin. While fast-acting liquid serums provide a rapid surge, they can trigger irritation on sensitive skin. Using the right form prevents barrier damage.</p>
        </div>
      </section>

      <!-- SECTION 2 -->
      <section id="section-2" class="section-block">
        <h2>2. L-Ascorbic Acid vs Derivatives: Which Form Should You Choose?</h2>
        
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">L-Ascorbic Acid (LAA)</span>
              <span class="bento-tag">Gold Standard</span>
            </div>
            <div class="bento-body">
              <p>The gold standard with the highest clinical evidence. Requires a low pH of 2.5–3.5 for penetration. It's unstable in heat and humidity (oxidizes to a brown color) and can irritate sensitive skin. Best for experienced users.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">3-O-Ethyl Ascorbic Acid (EAA)</span>
              <span class="bento-tag">Stable & Gentle</span>
            </div>
            <div class="bento-body">
              <p>A lipophilic derivative that converts to LAA in the skin. Stable at neutral pH and won't oxidize easily in the Indian summer. Gentle for beginners with a growing evidence base.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">Sodium Ascorbyl Phosphate (SAP)</span>
              <span class="bento-tag">Acne Safe</span>
            </div>
            <div class="bento-body">
              <p>Water-soluble and stable. Possesses antimicrobial properties against C. acnes. Formulated at pH 6-7, making it gentle, though it has lower brightening potency.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">Ascorbyl Glucoside (AG)</span>
              <span class="bento-tag">Ultra Gentle</span>
            </div>
            <div class="bento-body">
              <p>The most stable derivative and incredibly gentle. Frequently used in Japanese formulations. It yields slower results but carries zero irritation risk.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3 -->
      <section id="section-3" class="section-block">
        <h2>3. Product Comparison Matrix</h2>
        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Serum</th>
                <th>Vitamin C Form</th>
                <th>Concentration</th>
                <th>pH</th>
                <th>Stability</th>
                <th>Best For</th>
                <th>₹ Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Serum">Foxtale 15% L-Ascorbic + Vit E</td>
                <td data-label="Vitamin C Form">L-Ascorbic Acid</td>
                <td data-label="Concentration">15%</td>
                <td data-label="pH">3.0 - 3.5</td>
                <td data-label="Stability">Moderate</td>
                <td data-label="Best For">Stubborn Pigmentation</td>
                <td data-label="₹ Price">₹595</td>
              </tr>
              <tr>
                <td data-label="Serum">Minimalist 10% EAA</td>
                <td data-label="Vitamin C Form">3-O-Ethyl Ascorbic Acid</td>
                <td data-label="Concentration">10%</td>
                <td data-label="pH">4.0 - 5.0</td>
                <td data-label="Stability">High</td>
                <td data-label="Best For">Beginners, Sensitive Skin</td>
                <td data-label="₹ Price">₹699</td>
              </tr>
              <tr>
                <td data-label="Serum">The Derma Co 10% Vit C + 5% Niacinamide</td>
                <td data-label="Vitamin C Form">3-O-Ethyl Ascorbic Acid</td>
                <td data-label="Concentration">10%</td>
                <td data-label="pH">6.0</td>
                <td data-label="Stability">High</td>
                <td data-label="Best For">Oily, Acne Prone</td>
                <td data-label="₹ Price">₹649</td>
              </tr>
              <tr>
                <td data-label="Serum">Deconstruct 10% EAA</td>
                <td data-label="Vitamin C Form">3-O-Ethyl Ascorbic Acid</td>
                <td data-label="Concentration">10%</td>
                <td data-label="pH">5.0 - 6.0</td>
                <td data-label="Stability">High</td>
                <td data-label="Best For">Dullness</td>
                <td data-label="₹ Price">₹699</td>
              </tr>
              <tr>
                <td data-label="Serum">Plum 15% Vitamin C Serum</td>
                <td data-label="Vitamin C Form">Ethyl Ascorbic Acid</td>
                <td data-label="Concentration">15%</td>
                <td data-label="pH">4.5</td>
                <td data-label="Stability">High</td>
                <td data-label="Best For">Glow, All Skin Types</td>
                <td data-label="₹ Price">₹790</td>
              </tr>
              <tr>
                <td data-label="Serum">Dr. Sheth's 20% Vit C + E + Ferulic</td>
                <td data-label="Vitamin C Form">L-Ascorbic Acid</td>
                <td data-label="Concentration">20%</td>
                <td data-label="pH">3.0 - 3.5</td>
                <td data-label="Stability">Moderate</td>
                <td data-label="Best For">Advanced Users</td>
                <td data-label="₹ Price">₹899</td>
              </tr>
              <tr>
                <td data-label="Serum">Pilgrim 10% Vitamin C + HA</td>
                <td data-label="Vitamin C Form">Ascorbyl Glucoside</td>
                <td data-label="Concentration">10%</td>
                <td data-label="pH">5.5 - 6.5</td>
                <td data-label="Stability">Very High</td>
                <td data-label="Best For">Very Sensitive Skin</td>
                <td data-label="₹ Price">₹550</td>
              </tr>
              <tr>
                <td data-label="Serum">Cipla VC15 Vitamin C Serum</td>
                <td data-label="Vitamin C Form">L-Ascorbic Acid</td>
                <td data-label="Concentration">15%</td>
                <td data-label="pH">3.0</td>
                <td data-label="Stability">Moderate</td>
                <td data-label="Best For">Dermatologist Recommended</td>
                <td data-label="₹ Price">₹1800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 4 -->
      <section id="section-4" class="section-block">
        <h2>4. The Oxidation Problem: Why Your Vitamin C Serum Turned Brown</h2>
        <div style="margin: 1.5rem 0;">
          <img src="/assets/images/vitamin-c-dropper-closeup.jpg" alt="Vitamin C Dropper Close Up" width="800" height="600" style="border-radius: var(--radius-md); border: 1px solid var(--border);" loading="lazy">
        </div>
        <p>L-Ascorbic Acid is highly susceptible to auto-oxidation when exposed to air, light, and heat. The visual degradation timeline usually goes from clear/pale yellow to dark orange and eventually brown. Once it turns dark orange or brown, it has oxidized into Erythrulose and lost its antioxidant efficacy.</p>
        <p><strong>Storage Rules:</strong> Look for opaque, airless pump bottles. Store your serum in the refrigerator and try to use it within 3 months of opening. Indian summers, where room temperatures frequently exceed 35°C, can rapidly accelerate this degradation.</p>
        <p>Signs your serum has gone bad: A dark brown color and a distinct metallic or hot-dog-like smell.</p>
      </section>

      <!-- SECTION 5 -->
      <section id="section-5" class="section-block">
        <h2>5. How to Layer Vitamin C in Your Indian Skincare Routine</h2>
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">Step 1: Cleanse</span>
            </div>
            <div class="bento-body">
              <p>Start with a gentle cleanser to remove overnight oil and impurities.</p>
            </div>
          </div>
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">Step 2: Vitamin C</span>
            </div>
            <div class="bento-body">
              <p>Apply 3-4 drops on damp skin. Wait 60 seconds to allow for complete absorption.</p>
            </div>
          </div>
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">Step 3: Moisturizer</span>
            </div>
            <div class="bento-body">
              <p>Apply a lightweight moisturizer (if your skin requires it) to lock in hydration.</p>
            </div>
          </div>
          <div class="bento-card">
            <div class="bento-header">
              <span class="bento-title">Step 4: Sunscreen</span>
            </div>
            <div class="bento-body">
              <p>Non-negotiable. Apply SPF 50 generously to protect against UV damage.</p>
            </div>
          </div>
        </div>
        
        <div class="warning-box">
          <h4>WARNING</h4>
          <p>Never mix pure Vitamin C (LAA) with Niacinamide at a high pH (risk of flushing), and never layer with AHAs/BHAs in the same step to avoid extreme pH conflicts and barrier damage.</p>
        </div>
      </section>

      <!-- SECTION 6 -->
      <section id="section-6" class="section-block">
        <h2>6. Vitamin C + Ferulic Acid Synergy: The Duke Patent Explained</h2>
        <p>In 2005, Dr. Sheldon Pinnell formulated the "Duke Patent," demonstrating that combining 1% Ferulic Acid and 1% Vitamin E with 15% L-Ascorbic Acid doubled the photoprotection of the serum and stabilized the inherently unstable LAA formula, making it last 8x longer.</p>
        <p>This is why Indian serums attempting to replicate this golden trio, such as Foxtale and Dr. Sheth's, are often worth the premium price tag.</p>
      </section>

      <!-- SECTION 7 -->
      <section id="section-7" class="section-block">
        <h2>7. Common Vitamin C Mistakes Indian Users Make</h2>
        <div class="caution-box">
          <h4>Using LAA on sensitized skin</h4>
          <p>Applying L-Ascorbic acid on skin treated with strong retinoids can cause severe barrier damage.</p>
        </div>
        <div class="caution-box">
          <h4>Applying at night only</h4>
          <p>Applying Vitamin C at night instead of morning means missing out on its crucial daytime antioxidant shield against UV and pollution.</p>
        </div>
        <div class="caution-box">
          <h4>Mixing with Niacinamide</h4>
          <p>Mixing LAA with niacinamide above pH 3.5 can cause the niacinamide to convert to niacin, resulting in skin flushing and redness.</p>
        </div>
        <div class="caution-box">
          <h4>Over-concentrating</h4>
          <p>Jumping straight to 20%+ concentrations too early often leads to irritant contact dermatitis.</p>
        </div>
        <div class="caution-box">
          <h4>Skipping Sunscreen</h4>
          <p>Neglecting sunscreen while using Vitamin C will cause melanin to rebound, worsening pigmentation.</p>
        </div>
      </section>

      <!-- SECTION 8 -->
      <section id="section-8" class="section-block">
        <h2>8. Interactive Diagnostic Quiz: Which Vitamin C Is Right for You?</h2>
        <div class="quiz-card" id="bha-quiz-app">
          <h3 class="quiz-title">Find Your Vitamin C Form</h3>
          <p class="quiz-desc">Answer 3 questions to find the best Vitamin C form for your skin type.</p>

          <div class="quiz-step" id="quiz-step-1">
            <div class="quiz-question">Q1: How sensitive is your skin?</div>
            <div class="quiz-options">
              <button class="quiz-option-btn" onclick="selectQuizOption(1, 'very')">Very sensitive</button>
              <button class="quiz-option-btn" onclick="selectQuizOption(1, 'normal')">Normal</button>
              <button class="quiz-option-btn" onclick="selectQuizOption(1, 'tough')">Tough/Oily</button>
            </div>
          </div>

          <div class="quiz-step" id="quiz-step-2" style="display:none;">
            <div class="quiz-question">Q2: What's your primary concern?</div>
            <div class="quiz-options">
              <button class="quiz-option-btn" onclick="selectQuizOption(2, 'spots')">Dark spots</button>
              <button class="quiz-option-btn" onclick="selectQuizOption(2, 'aging')">Anti-aging</button>
              <button class="quiz-option-btn" onclick="selectQuizOption(2, 'glow')">Overall glow</button>
            </div>
          </div>

          <div class="quiz-step" id="quiz-step-3" style="display:none;">
            <div class="quiz-question">Q3: Storage environment?</div>
            <div class="quiz-options">
              <button class="quiz-option-btn" onclick="selectQuizOption(3, 'cool')">Cool room / AC</button>
              <button class="quiz-option-btn" onclick="selectQuizOption(3, 'hot')">Hot environment</button>
            </div>
          </div>

          <div class="quiz-result-box" id="quiz-result">
            <span class="result-badge">YOUR MATCH</span>
            <h4 id="result-title" style="font-size:1.25rem; color:var(--brand-dark); margin:0.5rem 0;"></h4>
            <p id="result-desc" style="font-size:0.95rem; color:#334155; margin-bottom:1rem;"></p>
            <a href="https://face3layerscanner.onrender.com/" class="header-cta" style="display:inline-flex;" target="_blank" rel="noopener">Confirm Routine via Free AI Scan →</a>
            <button class="quiz-option-btn" style="margin-top: 10px;" onclick="location.reload()">Retake Quiz</button>
          </div>
        </div>
      </section>

      <!-- SECTION 9 -->
      <section id="section-9" class="section-block">
        <h2>9. Frequently Asked Questions (FAQ)</h2>
        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-header" onclick="toggleFaq(this)">
              <span>Can I use Vitamin C serum every day?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Yes, Vitamin C is best used daily in the morning to protect against free radicals and environmental damage.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" onclick="toggleFaq(this)">
              <span>Can I use Vitamin C with retinol at night?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                It is recommended to use Vitamin C in the morning and Retinol at night to avoid irritation and pH conflicts.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" onclick="toggleFaq(this)">
              <span>Why did my Vitamin C serum turn orange/brown?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                This indicates oxidation. Once it turns dark orange or brown, it has lost its efficacy and should be discarded.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" onclick="toggleFaq(this)">
              <span>Which is better for pigmentation: Vitamin C or Alpha Arbutin?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                Both work well, but they target pigmentation differently. Vitamin C also provides antioxidant benefits, while Alpha Arbutin is highly targeted for dark spots. They can be layered together.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" onclick="toggleFaq(this)">
              <span>Is 20% Vitamin C too strong for Indian skin?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                For beginners, yes. It's best to start with 10% and slowly work your way up to higher concentrations to prevent barrier damage.
              </div>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-header" onclick="toggleFaq(this)">
              <span>Can I use Vitamin C serum if I have active acne?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                L-Ascorbic Acid can irritate active acne. A derivative like Sodium Ascorbyl Phosphate (SAP) is a better choice as it has antimicrobial properties against acne bacteria.
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>

    <!-- DESKTOP SIDEBAR -->
    <aside class="desktop-sidebar">
      <div class="sidebar-card">
        <h3 class="sidebar-title">Quick Derm Summary</h3>
        <ul class="sidebar-list">
          <li><strong>Sensitive Skin:</strong> Choose derivatives like EAA or AG.</li>
          <li><strong>Storage:</strong> Keep in a cool, dark place (fridge preferred).</li>
          <li><strong>Layering:</strong> Apply on damp skin, wait 60s, follow with moisturizer.</li>
          <li><strong>Sun Protection:</strong> Daily SPF 50 PA++++ required.</li>
          <li><strong>Synergy:</strong> LAA + Ferulic Acid + Vitamin E is the gold standard.</li>
        </ul>
      </div>

      <div class="sidebar-card" style="background: linear-gradient(135deg, #FFF5EE 0%, #FFE1CE 100%); border-color: var(--brand-light);">
        <h3 class="sidebar-title" style="color:var(--brand-dark);">AI Skin Diagnostics</h3>
        <p style="font-size:0.875rem; color:#475569; margin-bottom:1rem;">
          Get an instant 3-layer pore analysis &amp; personalized Vitamin C routine tailored to your Fitzpatrick skin type.
        </p>
        <a href="https://face3layerscanner.onrender.com/" class="perimeter-cta" style="width:100%; text-align:center; padding:12px 20px; font-size:0.9rem;" target="_blank" rel="noopener">
          Start Free AI Scan
        </a>
      </div>
      
      <div class="sidebar-card">
        <h3 class="sidebar-title">Related Articles</h3>
        <ul class="sidebar-list">
            <li><a href="/acne/vitamin-c-serum-for-acne-scars-india/" style="text-decoration:none; color:#334155;">Vitamin C for Acne Scars</a></li>
            <li><a href="/acne/niacinamide-vs-vitamin-c-dark-spots-india/" style="text-decoration:none; color:#334155;">Niacinamide vs Vitamin C</a></li>
            <li><a href="/acne/hyperpigmentation-treatment-india/" style="text-decoration:none; color:#334155;">Hyperpigmentation Treatments</a></li>
            <li><a href="/acne/glycolic-acid-toner-for-pigmentation-india/" style="text-decoration:none; color:#334155;">Glycolic Acid for Pigmentation</a></li>
            <li><a href="/acne/best-sunscreen-for-acne-prone-skin-india/" style="text-decoration:none; color:#334155;">Best Sunscreens for Acne</a></li>
        </ul>
      </div>
    </aside>
  </div>

  <!-- STICKY BOTTOM MOBILE CTA BAR -->
  <div class="sticky-bottom-bar">
    <div class="mobile-bar-text">
      <strong>Not sure which Vitamin C to pick?</strong>
      <span>Analyze skin with 3-Layer AI</span>
    </div>
    <a href="https://face3layerscanner.onrender.com/" class="mobile-bar-btn" target="_blank" rel="noopener">
      Scan Face Now
    </a>
  </div>

  <!-- SITE FOOTER -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">MyMirror</div>
        <p style="font-size:0.875rem; color:#94A3B8;">
          Evidence-based skincare diagnostics and dermatological guides tailored for Indian skin types (Fitzpatrick III-V).
        </p>
        <div class="footer-disclaimer">
          Medical Disclaimer: Content on MyMirror is for educational purposes only and does not constitute medical advice, diagnosis, or prescription. Always consult a qualified dermatologist for severe inflammatory acne or persistent cutaneous disorders.
        </div>
      </div>
      <div>
        <h4 style="color:#FFFFFF; font-size:1rem; margin-bottom:1rem;">Acne Guides</h4>
        <ul style="list-style:none; line-height:2;">
          <li><a href="/acne/vitamin-c-serum-for-acne-scars-india/" style="color:#94A3B8; text-decoration:none;">Vitamin C for Acne Scars</a></li>
          <li><a href="/acne/niacinamide-vs-vitamin-c-dark-spots-india/" style="color:#94A3B8; text-decoration:none;">Niacinamide vs Vit C</a></li>
          <li><a href="/acne/hyperpigmentation-treatment-india/" style="color:#94A3B8; text-decoration:none;">Pigmentation</a></li>
          <li><a href="/acne/glycolic-acid-toner-for-pigmentation-india/" style="color:#94A3B8; text-decoration:none;">Glycolic Acid</a></li>
          <li><a href="/acne/best-sunscreen-for-acne-prone-skin-india/" style="color:#94A3B8; text-decoration:none;">Sunscreen</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color:#FFFFFF; font-size:1rem; margin-bottom:1rem;">Interactive Tools</h4>
        <ul style="list-style:none; line-height:2;">
          <li><a href="https://face3layerscanner.onrender.com/" style="color:#FF8B42; font-weight:700; text-decoration:none;" target="_blank" rel="noopener">3-Layer AI Skin Scanner</a></li>
          <li><a href="#section-8" style="color:#94A3B8; text-decoration:none;">Vitamin C Quiz</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 MyMirror.fit. All rights reserved. Reviewed by Board-Certified Dermatologists.
    </div>
  </footer>

  <!-- JAVASCRIPT FOR QUIZ AND ACCORDION -->
  <script>
    // FAQ Accordion Toggle
    function toggleFaq(btnElement) {
      const item = btnElement.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other accordions
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
      });

      // Toggle clicked accordion
      if (!isActive) {
        item.classList.add('active');
      }
    }

    // Interactive Quiz State
    let quizAnswers = { step1: '', step2: '', step3: '' };

    function selectQuizOption(step, choice) {
      if (step === 1) {
        quizAnswers.step1 = choice;
        document.getElementById('quiz-step-1').style.display = 'none';
        document.getElementById('quiz-step-2').style.display = 'block';
      } else if (step === 2) {
        quizAnswers.step2 = choice;
        document.getElementById('quiz-step-2').style.display = 'none';
        document.getElementById('quiz-step-3').style.display = 'block';
      } else if (step === 3) {
        quizAnswers.step3 = choice;
        document.getElementById('quiz-step-3').style.display = 'none';
        calculateQuizResult();
      }
    }

    function calculateQuizResult() {
      const resultBox = document.getElementById('quiz-result');
      const titleEl = document.getElementById('result-title');
      const descEl = document.getElementById('result-desc');

      let title = "";
      let desc = "";

      if (quizAnswers.step1 === 'very' || quizAnswers.step3 === 'hot') {
        title = "Ascorbyl Glucoside or Ethyl Ascorbic Acid";
        desc = "Based on your sensitivity and storage needs, a stable derivative like a 10% EAA serum or Ascorbyl Glucoside is your best bet for consistent results without irritation.";
      } else if (quizAnswers.step1 === 'tough' && quizAnswers.step3 === 'cool') {
        title = "15% L-Ascorbic Acid (LAA)";
        desc = "Your skin is resilient! A 15% L-Ascorbic Acid serum (like Foxtale or Dr. Sheth's) stored in a cool place will provide maximum brightening and anti-aging benefits.";
      } else {
        title = "10% Ethyl Ascorbic Acid (EAA)";
        desc = "A 10% Ethyl Ascorbic Acid serum offers a great balance of efficacy, gentle formulation, and stability in Indian weather conditions.";
      }

      titleEl.innerText = title;
      descEl.innerText = desc;
      resultBox.style.display = 'block';
    }

    // Scroll Highlight for Sticky TOC
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.section-block');
      const navLinks = document.querySelectorAll('.toc-link');

      let currentSection = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  </script>
</body>
</html>
"""

html = html.replace('__CSS_PLACEHOLDER__', css)

with open('/Users/tm030/acne/best-vitamin-c-serum-for-face-india/index.html', 'w') as f:
    f.write(html)
