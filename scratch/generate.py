import re
import os

MASTER_FILE = "/Users/tm030/Documents/mymirror_repo/acne/salicylic-acid-purging-timeline/index.html"
TARGET_FILE = "/Users/tm030/Documents/mymirror_repo/acne/proactiv-vs-differin-acne-treatment-system-usa/index.html"

with open(MASTER_FILE, "r") as f:
    master_html = f.read()

# Extract styles from master
style_match = re.search(r'(<style>.*?</style>)', master_html, re.DOTALL)
styles = style_match.group(1) if style_match else "<style></style>"

new_html = f"""<!DOCTYPE html>
<html lang="en">
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
    <title>Proactiv vs Differin Acne Treatment System USA: Clinical Review</title>
    <meta name="description" content="An in-depth clinical comparison of Proactiv (BPO + Glycolic Acid) and Differin (Adapalene 0.1% Gel) for acne treatment in the USA market. Explore mechanisms, time to clearing, and anti-aging benefits.">
    <link rel="canonical" href="https://mymirror.fit/acne/proactiv-vs-differin-acne-treatment-system-usa/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://mymirror.fit/acne/proactiv-vs-differin-acne-treatment-system-usa/">
    <meta property="og:title" content="Proactiv vs Differin Acne Treatment System USA: Clinical Review">
    <meta property="og:description" content="An in-depth clinical comparison of Proactiv (BPO + Glycolic Acid) and Differin (Adapalene 0.1% Gel) for acne treatment in the USA market. Explore mechanisms, time to clearing, and anti-aging benefits.">
    <meta property="og:image" content="https://mymirror.fit/assets/images/proactiv_differin.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://mymirror.fit/acne/proactiv-vs-differin-acne-treatment-system-usa/">
    <meta property="twitter:title" content="Proactiv vs Differin Acne Treatment System USA: Clinical Review">
    <meta property="twitter:description" content="An in-depth clinical comparison of Proactiv (BPO + Glycolic Acid) and Differin (Adapalene 0.1% Gel) for acne treatment in the USA market. Explore mechanisms, time to clearing, and anti-aging benefits.">
    <meta property="twitter:image" content="https://mymirror.fit/assets/images/proactiv_differin.jpg">

    <!-- JSON-LD Schema Markup -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Proactiv vs Differin Acne Treatment System USA: Clinical Review",
      "datePublished": "2026-08-21T08:00:00+00:00",
      "dateModified": "2026-08-21T08:00:00+00:00",
      "author": {{
        "@type": "Organization",
        "name": "MyMirror Clinical Team"
      }},
      "publisher": {{
        "@type": "Organization",
        "name": "MyMirror Skin Health",
        "logo": {{
          "@type": "ImageObject",
          "url": "https://mymirror.fit/favicon.png"
        }}
      }}
    }}
    </script>

    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{{
        "@type": "Question",
        "name": "Can I use Proactiv and Differin together?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Using Benzoyl Peroxide (Proactiv) and Adapalene (Differin) together can be highly efficacious but may cause severe irritation. It is often recommended to use Proactiv in the morning and Differin at night, rather than layering them simultaneously."
        }}
      }}, {{
        "@type": "Question",
        "name": "Which acts faster: Proactiv or Differin?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "Proactiv (Benzoyl Peroxide) typically reduces inflammatory lesions faster (within 1-2 weeks), whereas Differin takes 4-12 weeks to alter follicular desquamation and show significant clearing."
        }}
      }}]
    }}
    </script>

    <!-- Google Analytics Tracker (Deferred) -->
    <script defer src="/assets/site-analytics.js"></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

{styles}
    <link rel="stylesheet" href="/assets/styles/forehead-acne.css">
</head>
<body>
    <!-- Trust Bar -->
    <div class="trust-bar">
        <span>✍️ MyMirror Editorial</span>
        <span class="trust-reviewer">✓ Reviewed by Dr. Lipy Mehta, Dermatologist</span>
        <span>Updated August 2026</span>
    </div>

    <!-- Header -->
    <header class="sticky-header">
        <div class="header-content">
            <a href="/"><img src="https://mymirror.fit/assets/logo-v4.png" alt="mymirror" class="logo"></a>
            <nav class="nav">
                <a href="/acne/types-of-acne/" class="nav-link">Acne Types</a>
                <a href="/acne/forehead-acne/meaning/" class="nav-link accent-brain">Acne Meaning 🧠</a>
                <a href="/acne/forehead-acne/home-remedies/" class="nav-link accent-natural">Natural Remedies 🌿</a>
                <a href="/acne/forehead-acne/fast-treatment/" class="nav-link accent-fast">Fast Fixes ⚡</a>
            </nav>
        </div>
    </header>

    <!-- Split Hero Section -->
    <section class="hero">
        <div class="hero-inner reveal">
            <div class="hero-content">
                <span class="hero-tag">CLINICAL COMPARISON • USA</span>
                <h1 class="hero-title">Proactiv vs Differin Acne Treatment System USA: Clinical Review</h1>
                <p class="hero-subtitle">An in-depth clinical comparison of Proactiv (BPO + Glycolic Acid) and Differin (Adapalene 0.1% Gel) for acne treatment in the USA market. Explore mechanisms, time to clearing, and anti-aging benefits.</p>
                
                <div class="face-ai-cta-wrapper">
                    <a href="/scan" class="face-ai-btn">
                        <span class="face-ai-btn-text">Check Skin Purge vs Breakout</span>
                        <div class="face-ai-energy-rail"></div>
                    </a>
                    <p class="face-ai-subtext">Scan your face in 60s to determine whether active bumps are normal cell turnover purging or a damaged skin barrier.</p>
                </div>
            </div>
            <div class="hero-image-stack">
                <div class="hero-photo-card">
                    <div class="hero-photo">
                        <img src="https://mymirror.fit/assets/images/proactiv_differin.jpg" alt="Proactiv vs Differin">
                    </div>
                    <div class="hero-stat-card">
                        <span class="stat-num">BPO vs Retinoid</span>
                        <span class="stat-label">Fundamentally different mechanisms: oxidative kill vs cellular turnover</span>
                    </div>
                </div>
                <div class="hero-photo-card">
                    <div class="hero-photo">
                        <img src="/assets/images/clear_skin_texture.jpg" alt="Clear skin texture post-treatment">
                    </div>
                    <div class="hero-stat-card">
                        <span class="stat-num">12 Weeks</span>
                        <span class="stat-label">Minimum commitment for fair head-to-head efficacy comparison</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sticky TOC Bar -->
    <div class="toc-bar">
        <div class="toc-inner">
            <a class="toc-link" href="#intro"><span class="toc-num">1</span> Introduction</a>
            <a class="toc-link" href="#proactiv"><span class="toc-num">2</span> Proactiv</a>
            <a class="toc-link" href="#differin"><span class="toc-num">3</span> Differin</a>
            <a class="toc-link" href="#comparison"><span class="toc-num">4</span> Comparison</a>
            <a class="toc-link" href="#pricing"><span class="toc-num">5</span> Pricing</a>
            <a class="toc-link" href="#maintenance"><span class="toc-num">6</span> Maintenance</a>
            <a class="toc-link" href="#guidelines"><span class="toc-num">7</span> Guidelines</a>
            <a class="toc-link" href="#faq"><span class="toc-num">8</span> FAQs</a>
        </div>
    </div>

    <!-- Main Content Layout -->
    <div class="page-body">
        <main>
            <section id="intro" class="reveal">
                <h2>1. Introduction to the Acne Treatment Landscape in the USA</h2>
                <p>The management of acne vulgaris in the United States encompasses a vast array of over-the-counter (OTC) and prescription methodologies. For decades, the OTC landscape was dominated by multi-step regimens, with <a href="/acne/benzoyl-peroxide-guide/">Benzoyl Peroxide (BPO)</a> being the cornerstone active pharmaceutical ingredient. The Proactiv Acne Treatment System emerged as a paradigm-shifting commercial juggernaut, combining BPO with keratolytic agents like <a href="/skincare/glycolic-acid-benefits/">Glycolic Acid</a>. However, the FDA's 2016 approval of Adapalene 0.1% gel (Differin) for OTC use fundamentally altered dermatological treatment algorithms. This transition allowed broad consumer access to a third-generation synthetic retinoid, historically relegated to prescription-only status.</p>
                <p>This comprehensive clinical analysis dissects the mechanistic, pharmacological, and pragmatic differences between the Proactiv system (specifically iterations utilizing BPO and Glycolic Acid) and Differin Gel (Adapalene 0.1%). We will evaluate their respective efficacies targeting the pathophysiological factors of acne: follicular hyperkeratinization, sebum production, <em>Cutibacterium acnes</em> (<em>C. acnes</em>) proliferation, and inflammatory cascades.</p>
            </section>

            <section id="proactiv" class="reveal">
                <h2>2. Deep Dive: The Proactiv System (BPO + Glycolic Acid)</h2>
                <p>The classical Proactiv formulation relies on a synergistic, albeit occasionally irritating, combination of antibacterial and desquamating agents. Benzoyl Peroxide is a lipophilic, oxidizing antimicrobial compound. Upon penetrating the pilosebaceous unit, BPO decomposes to release free oxygen radicals. <em>C. acnes</em>, being an aerotolerant anaerobe, is highly susceptible to this oxidative stress. Notably, unlike topical antibiotics (e.g., <a href="/acne/clindamycin-topical/">Clindamycin</a>), bacterial resistance to BPO has not been documented, making it an enduring staple in <a href="/acne/inflammatory-acne-treatment/">inflammatory acne</a> management.</p>
                <p>Furthermore, Proactiv systems frequently integrate Glycolic Acid, an alpha-hydroxy acid (AHA). Glycolic acid possesses the smallest molecular weight of the AHAs, granting it profound epidermal penetration. It functions by disrupting the desmosomal cohesion between corneocytes, promoting epidermolysis and mitigating the follicular plugging (microcomedone formation) that precedes clinical acne lesions. This dual-action approach—bactericidal (BPO) and comedolytic (Glycolic Acid)—provides a rapid reduction in active inflammatory papules and pustules.</p>
            </section>

            <section id="differin" class="reveal">
                <h2>3. Deep Dive: Differin (Adapalene 0.1% Gel)</h2>
                <p>Adapalene is a naphthoic acid derivative with retinoid-like properties. Unlike first-generation retinoids such as <a href="/acne/tretinoin-cream-gel/">Tretinoin</a>, Adapalene boasts a highly stable molecular structure, rendering it resistant to photodegradation and oxidative destruction (even when combined with BPO, a feature leveraged in prescription formulations like <a href="/acne/epiduo-forte/">Epiduo</a>).</p>
                <p>Adapalene exerts its pharmacological effects by selectively binding to specific retinoic acid nuclear receptors (RAR-beta and RAR-gamma) within the epidermis. This selective binding is crucial; it normalizes the differentiation of follicular epithelial cells, thereby preventing the microcomedone formation that is the absolute prerequisite for all acne lesions. By downregulating the expression of transglutaminase-1 and keratin 10, Adapalene exhibits profound comedolytic activity. Furthermore, Adapalene possesses intrinsic anti-inflammatory properties, inhibiting the chemotactic and chemokinetic responses of human polymorphonuclear leukocytes and modulating the lipoxygenase pathway.</p>
            </section>

            <section id="comparison" class="reveal">
                <h2>4. Head-to-Head Clinical Comparison</h2>
                
                <section>
                    <h3>Mechanism of Action</h3>
                    <p><strong>Proactiv:</strong> Direct oxidative destruction of <em>C. acnes</em> and enzymatic dissolution of desmosomes.</p>
                    <p><strong>Differin:</strong> Nuclear receptor modulation to normalize follicular keratinization and inhibit inflammatory pathways.</p>
                </section>
                <section>
                    <h3>Time to Clearing</h3>
                    <p><strong>Proactiv:</strong> Fast acting on inflammatory lesions (1-3 weeks). May plateau.</p>
                    <p><strong>Differin:</strong> Slower onset (4-12 weeks). Requires a "retinization" phase, often accompanied by <a href="/acne/retinoid-purging/">skin purging</a>.</p>
                </section>
                <section>
                    <h3>Anti-Aging & Collagense</h3>
                    <p><strong>Proactiv:</strong> Glycolic acid provides mild epidermal thickening and glow.</p>
                    <p><strong>Differin:</strong> Retinoids stimulate dermal fibroblasts, promoting collagen type I synthesis, offering superior long-term <a href="/skincare/anti-aging-retinoids/">anti-aging</a> benefits.</p>
                </section>

                <p>Choosing between Proactiv (Benzoyl Peroxide + Glycolic Acid system) and Differin (<a href="/acne/differin-adapalene-0.1-percent-gel-usa/">Adapalene 0.1% Gel</a>) represents a fundamental choice between antibacterial surface control and cellular retinization.</p>
                <p><strong>Proactiv</strong> uses 2.5% BPO to kill acne bacteria quickly (1-2 weeks), but requires ongoing daily use to prevent new breakouts. <strong>Differin</strong> (a 3rd-generation topical retinoid) normalizes skin cell turnover, clearing existing microcomedones and offering long-term anti-aging collagen benefits after 8-12 weeks.</p>

                <h3>Comparative Table</h3>
                <div class="acne-table-wrapper">
                    <table class="acne-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Proactiv (BPO + Glycolic)</th>
                                <th>Differin (Adapalene 0.1%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Feature"><strong>Primary Action</strong></td>
                                <td data-label="Proactiv (BPO + Glycolic)">Bactericidal & Keratolytic</td>
                                <td data-label="Differin (Adapalene 0.1%)">Comedolytic & Anti-inflammatory</td>
                            </tr>
                            <tr>
                                <td data-label="Feature"><strong>Skin Barrier Impact</strong></td>
                                <td data-label="Proactiv (BPO + Glycolic)">Can cause <a href="/skincare/skin-barrier-repair/">barrier disruption</a> and extreme dryness.</td>
                                <td data-label="Differin (Adapalene 0.1%)">Initial retinoid dermatitis, leading to long-term tolerance.</td>
                            </tr>
                            <tr>
                                <td data-label="Feature"><strong>Hyperpigmentation</strong></td>
                                <td data-label="Proactiv (BPO + Glycolic)">AHA assists in fading superficial pigment.</td>
                                <td data-label="Differin (Adapalene 0.1%)">Accelerates cell turnover, effectively treating <a href="/acne/post-inflammatory-hyperpigmentation/">PIH</a>.</td>
                            </tr>
                            <tr>
                                <td data-label="Feature"><strong>Application Complexity</strong></td>
                                <td data-label="Proactiv (BPO + Glycolic)">Multi-step (Cleanser, Toner, Treatment).</td>
                                <td data-label="Differin (Adapalene 0.1%)">Single step (Pea-sized amount globally).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="pricing" class="reveal">
                <h2>5. Pricing, Accessibility, and the USA Market</h2>
                <p>In the USA, Proactiv operates primarily on a subscription model, which can lead to higher long-term cumulative costs (averaging $30-$50/month). Conversely, Differin 0.1% gel is available at virtually all major pharmacies (CVS, Walgreens, Target) for approximately $15-$20 per tube, which can last up to 3 months with proper (pea-sized) application. This makes Differin significantly more cost-effective for long-term maintenance of <a href="/acne/hormonal-acne/">hormonal</a> or persistent acne.</p>
            </section>
            
            <div class="dark-callout reveal">
                <h2>Check Retinoid Tolerance & Skin Barrier</h2>
                <p>Take our clinical assessment to determine if your skin is ready for Adapalene.</p>
                <br>
                <a href="/assessment/retinoid-tolerance" class="face-ai-btn">
                    <span class="face-ai-btn-text">Start Assessment</span>
                </a>
            </div>

            <section id="maintenance" class="reveal">
                <h2>6. Dermatologist Protocol: Long-Term Maintenance & Active Cycling</h2>
                <p>Choosing between Proactiv and Differin depends entirely on your acne morphology and skin resilience. For rapid reduction of red, inflamed pimples, BPO is unparalleled. For long-term prevention of comedones (blackheads/whiteheads) and structural skin improvement, Adapalene is the dermatological gold standard. Many patients eventually graduate from BPO systems to retinoids to maintain clearance and achieve anti-aging benefits.</p>
                <p>Once initial inflammatory acne lesions subside, maintaining skin barrier homeostasis and preventing microcomedone recurrence requires structured active cycling. Continuous daily application of high-potency chemical exfoliants or antibacterial washes can cause sub-clinical inflammation, leading to hyper-keratinization and recurrent breakouts.</p>
                
                <h3>Active Cycling Schedule (Skin Cycling Method)</h3>
                <p>Implement a 4-night skin cycling schedule to balance cell renewal with barrier recovery:</p>
                <ul>
                  <li><strong>Night 1 (Exfoliation):</strong> Use chemical exfoliants like Salicylic Acid (BHA) or Glycolic Acid (AHA) to clear pore debris and dead surface keratinocytes.</li>
                  <li><strong>Night 2 (Retinization):</strong> Apply topical retinoids (such as <a href="/acne/adapalene-0.1-percent-gel-acne-india/">Adapalene 0.1% Gel</a> or <a href="/acne/retinol-vs-tretinoin-acne-india/">Tretinoin</a>) to regulate cell turnover and stimulate collagen synthesis.</li>
                  <li><strong>Nights 3 & 4 (Recovery & Repair):</strong> Pause all direct active treatments. Focus exclusively on barrier restoration using ceramide-rich creams (<a href="/acne/best-cica-moisturizer-for-acne-prone-skin-india/">Cica Gel Moisturizers</a>), hyaluronic acid, and centella asiatica extracts.</li>
                </ul>

                <h3>Non-Comedogenic Sunscreen Guidelines</h3>
                <p>Ultraviolet (UV) radiation triggers sebum lipid peroxidation, worsening pore blockages and exacerbating post-acne dark marks (<a href="/acne/pie-vs-pih-indian-skin/">PIH</a>). Always finish your morning skincare routine with a lightweight, non-comedogenic broad-spectrum SPF 50+ sunscreen.</p>
            </section>
            
            <section id="guidelines" class="reveal">
                <h2>7. Dermatological Clinical Analysis & Patient Application Guidelines</h2>
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
                
                <h3>Clinical Safety Considerations & UV Defense</h3>
                <p>Active exfoliants and retinoids increase skin sensitivity to ultraviolet radiation (UVB and UVA rays). Exposure to sun rays without adequate broad-spectrum protection degrades collagen, impairs skin repair, and triggers melanin overproduction. Daily broad-spectrum SPF 50 sunscreen application is mandatory for anyone using active acne formulations.</p>
            </section>

            <section id="faq" class="reveal">
                <h2>8. Frequently Asked Questions (FAQ)</h2>
                
                <div class="faq-item">
                    <div class="faq-question">Can I use Proactiv and Differin together? <span class="faq-icon">+</span></div>
                    <div class="faq-answer">
                        <p>Using Benzoyl Peroxide (Proactiv) and Adapalene (Differin) together can be highly efficacious but may cause severe irritation. It is often recommended to use Proactiv in the morning and Differin at night, rather than layering them simultaneously. This mirrors the efficacy of <a href="/acne/combination-therapy/">combination therapy</a>.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Which acts faster: Proactiv or Differin? <span class="faq-icon">+</span></div>
                    <div class="faq-answer">
                        <p>Proactiv (Benzoyl Peroxide) typically reduces inflammatory lesions faster (within 1-2 weeks), whereas Differin takes 4-12 weeks to alter follicular desquamation and show significant clearing.</p>
                    </div>
                </div>
            </section>

        </main>
        
        <aside class="sidebar">
            <div class="sidebar-card">
                <h4>✓ Medical Review</h4>
                <p>This content was medically reviewed by the MyMirror Editorial Board for clinical accuracy in acne care guidelines.</p>
            </div>
            
            <div class="sidebar-card">
                <h4>Quick Facts</h4>
                <ul class="sidebar-list">
                    <li><a href="/acne/salicylic-acid/">Salicylic Acid (BHA)</a></li>
                    <li><a href="/acne/azelaic-acid-rosacea/">Azelaic Acid</a></li>
                    <li><a href="/skincare/ceramide-moisturizers/">Ceramide Moisturizers</a></li>
                    <li><a href="/acne/cystic-acne/">Cystic Acne</a></li>
                    <li><a href="/skincare/sunscreen-for-acne-prone-skin/">SPF for Acne-Prone Skin</a></li>
                    <li><a href="/acne/diet-and-acne/">Diet and Acne</a></li>
                    <li><a href="/acne/spironolactone-for-acne/">Spironolactone</a></li>
                    <li><a href="/acne/accutane-isotretinoin/">Isotretinoin</a></li>
                </ul>
            </div>
            
            <div class="sidebar-card">
                <h4>When to Consult</h4>
                <p>If OTC treatments like Proactiv or Differin do not provide relief after 12 weeks, consult a dermatologist for prescription alternatives.</p>
            </div>
        </aside>
    </div>

    <!-- Footer -->
    <footer class="main-footer">
        <img src="https://mymirror.fit/assets/logo-v4.png" alt="MyMirror" class="footer-logo">
        <p class="footer-text">© 2026 MyMirror.fit. Empowering your skin health journey with AI.<br>Information provided is for educational purposes and does not replace professional medical advice.</p>
    </footer>

    <!-- Sticky Mobile CTA -->
    <div class="sticky-cta-mobile">
        <a href="/scan" class="nav-cta">Check Skin Purge vs Breakout</a>
    </div>

    <!-- Scripts -->
    <script>
        // Scroll Reveal
        const observer = new IntersectionObserver((entries) => {{
            entries.forEach(entry => {{
                if (entry.isIntersecting) {{
                    entry.target.classList.add('active');
                }}
            }});
        }}, {{ threshold: 0.1 }});
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(btn => {{
            btn.addEventListener('click', () => {{
                const parent = btn.parentElement;
                const wasActive = parent.classList.contains('active-faq');
                
                document.querySelectorAll('.faq-item').forEach(item => {{
                    item.classList.remove('active-faq');
                }});

                if (!wasActive) {{
                    parent.classList.add('active-faq');
                }}
            }});
        }});

        // TOC Active State
        const tocLinks = document.querySelectorAll('.toc-link');
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {{
            let current = '';
            sections.forEach(section => {{
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 120) {{
                    current = section.getAttribute('id');
                }}
            }});

            tocLinks.forEach(link => {{
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

with open(TARGET_FILE, "w") as f:
    f.write(new_html)

print("Transform complete.")
