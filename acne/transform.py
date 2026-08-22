import re

master_path = '/Users/tm030/Documents/mymirror_repo/acne/salicylic-acid-purging-timeline/index.html'
target_path = '/Users/tm030/Documents/mymirror_repo/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/index.html'

with open(master_path, 'r') as f:
    master_lines = f.readlines()

# Master lines 144-643 (0-indexed 143-642)
master_style = "".join(master_lines[143:643])

html_content = f"""<!DOCTYPE html>
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
    <title>Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review</title>
    <meta name="description" content="Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.">
    <link rel="canonical" href="https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/">
    <meta property="og:title" content="Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review">
    <meta property="og:description" content="Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.">
    <meta property="og:image" content="https://mymirror.fit/assets/images/obagi_clenziderm.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://mymirror.fit/acne/obagi-clenziderm-md-acne-therapeutic-system-usa/">
    <meta property="twitter:title" content="Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review">
    <meta property="twitter:description" content="Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System. Learn about solubilized 5% BPO, 2% BHA Pore Therapy, and treatment protocols for USA patients.">
    <meta property="twitter:image" content="https://mymirror.fit/assets/images/obagi_clenziderm.jpg">

    <!-- JSON-LD Schema Markup -->
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

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

{master_style}                
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
                <span class="hero-tag">CLINICAL REVIEW • USA</span>
                <h1 class="hero-title">Obagi Clenziderm MD Acne Therapeutic System: Deep Clinical Review</h1>
                <p class="hero-subtitle">Discover the clinical efficacy of the Obagi Clenziderm MD Acne Therapeutic System and treatment protocols for USA patients.</p>
                
                <!-- Face AI Skin Analysis CTA (V2.1 Standard) -->
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
                        <img src="https://mymirror.fit/assets/images/obagi_clenziderm.jpg" alt="Obagi CLENZIderm M.D. Acne Therapeutic System">
                    </div>
                    <div class="hero-stat-card">
                        <span class="stat-num">5% BPO</span>
                        <span class="stat-label">Solubilized benzoyl peroxide in patented vehicle for deeper penetration</span>
                    </div>
                </div>
                <div class="hero-photo-card">
                    <div class="hero-photo">
                        <img src="/assets/images/clear_skin_texture.jpg" alt="Clear skin texture post-treatment">
                    </div>
                    <div class="hero-stat-card">
                        <span class="stat-num">8-12 Weeks</span>
                        <span class="stat-label">Full treatment cycle for moderate-to-severe acne clearance</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sticky TOC Bar -->
    <div class="toc-bar">
        <div class="toc-inner">
            <a class="toc-link" href="#introduction"><span class="toc-num">1</span> Introduction</a>
            <a class="toc-link" href="#architecture"><span class="toc-num">2</span> 3-Step System</a>
            <a class="toc-link" href="#bha"><span class="toc-num">3</span> 2% BHA Pore Therapy</a>
            <a class="toc-link" href="#bpo"><span class="toc-num">4</span> 5% Solubilized BPO</a>
            <a class="toc-link" href="#micro-crystals"><span class="toc-num">5</span> Micro-Crystals</a>
            <a class="toc-link" href="#synergy"><span class="toc-num">6</span> Synergistic Efficacy</a>
            <a class="toc-link" href="#comparison"><span class="toc-num">7</span> Obagi vs OTC</a>
            <a class="toc-link" href="#protocol"><span class="toc-num">8</span> Application Protocol</a>
            <a class="toc-link" href="#maintenance"><span class="toc-num">9</span> Long-term Maintenance</a>
            <a class="toc-link" href="#guidelines"><span class="toc-num">10</span> Guidelines</a>
            <a class="toc-link" href="#pharmacokinetics"><span class="toc-num">11</span> Pharmacokinetics</a>
            <a class="toc-link" href="#faq"><span class="toc-num">12</span> FAQs</a>
        </div>
    </div>

    <!-- Main Content Layout -->
    <div class="page-body">
        <main>
            <section id="introduction" class="reveal">
                <h2>1. Introduction to the Clinical Paradigm Shift</h2>
                <p>For decades, acne therapeutics have relied on formulations that prioritize surface-level desquamation, often ignoring the architectural depth of the pilosebaceous unit. The <a href="/acne/treatments/">acne treatment landscape</a> shifted with the introduction of the Obagi Clenziderm MD Acne Therapeutic System. By leveraging a unique 5% solubilized benzoyl peroxide (BPO) coupled with a synergistic 2% salicylic acid (BHA) Pore Therapy, the system offers an unprecedented pharmacokinetic profile. This document explores the molecular interactions, stratum corneum penetration rates, and clinical efficacy of this comprehensive 3-step system.</p>
                <p>Patients battling <a href="/acne/cystic-acne/">cystic acne</a> or <a href="/acne/hormonal-acne/">hormonal breakouts</a> often experience a plateau with standard over-the-counter interventions. The Clenziderm system is uniquely formulated for the USA market, adhering to stringent clinical guidelines while maintaining potent active concentrations.</p>
            </section>

            <section id="architecture" class="reveal">
                <h2>2. The Architecture of the 3-Step System</h2>
                <p>The Obagi Clenziderm MD protocol consists of three meticulously calibrated phases:</p>
                <ol>
                    <li><strong>Daily Care Foaming Cleanser:</strong> Infused with 2% Salicylic Acid to dissolve sebum and disrupt desmosome linkages.</li>
                    <li><strong>Pore Therapy (2% BHA):</strong> A liquid vehicle designed for deep follicular penetration.</li>
                    <li><strong>Therapeutic Lotion (5% Solubilized BPO):</strong> The cornerstone of the system, targeting <em>Cutibacterium acnes</em> at the source.</li>
                </ol>
                <p>To fully appreciate the efficacy, one must understand how these components interact to regulate sebum production, mitigate hyperkeratinization, and reduce inflammation, which are the primary pillars of <a href="/acne/causes/">acne pathogenesis</a>.</p>
            </section>

            <section id="bha" class="reveal">
                <h2>3. Mechanism of Action: 2% BHA Pore Therapy</h2>
                <p>Salicylic acid, a lipophilic beta-hydroxy acid, is widely recognized for its comedolytic properties. However, the vehicle in which it is delivered significantly alters its bioavailability. The Obagi Pore Therapy utilizes an advanced delivery matrix that enhances its ability to partition into the lipid-rich environment of the sebaceous gland.</p>
                <p>Upon application, the 2% BHA initiates keratolysis by disrupting cellular junctions in the stratum corneum. This not only unplugs existing comedones but also primes the follicular ostia, creating a clear pathway for the subsequent application of the therapeutic lotion. This <a href="/acne/skincare-routine/">skincare synergy</a> is vital for maximizing the bactericidal effects of BPO.</p>
            </section>

            <section id="bpo" class="reveal">
                <h2>4. Deep Dive: 5% Solubilized Benzoyl Peroxide</h2>
                <p>The critical differentiation of the Clenziderm system lies in its proprietary 5% solubilized Benzoyl Peroxide. Traditional BPO formulations—even those utilizing micro-milled or micronized particles—exist as crystalline suspensions. These crystals are often too large (typically >10 microns) to easily penetrate the ostium of the follicle, remaining primarily on the skin's surface, leading to irritation without optimal follicular clearance.</p>
                <p>Obagi's formulation solubilizes the BPO, effectively shrinking the particle size to sub-micron dimensions (approximately 1/10,000 the size of typical BPO crystals). This allows the active oxygen radicals to deeply penetrate the pilosebaceous duct and completely eradicate <em>C. acnes</em> colonies. This is particularly effective for patients suffering from <a href="/acne/severe-acne/">severe acne manifestations</a>.</p>
            </section>

            <section id="micro-crystals" class="reveal">
                <h2>5. Clinical Micro-Crystals and Exfoliation Dynamics</h2>
                <p>Mechanical and chemical exfoliation must be balanced carefully to preserve the <a href="/acne/skin-barrier-health/">skin barrier integrity</a>. The micro-crystals integrated into the cleansing phase provide a gentle physical exfoliation that complements the chemical keratolysis of the BHA. This dual-action mechanism ensures that hyperkeratotic plugs are continuously removed, preventing the anaerobic environment required for acne proliferation.</p>
            </section>

            <section id="synergy" class="reveal">
                <h2>6. Synergistic Efficacy: The Combined Effect</h2>
                <p>When used in sequence, the system creates a hostile environment for pathogenic bacteria. The cleanser removes superficial lipids, the Pore Therapy lowers the pH and unplugs the follicle, and the solubilized BPO delivers the fatal oxidative stress to the bacteria. Clinical studies indicate a significant reduction in inflammatory lesions within the first two weeks of adherence to this <a href="/acne/dermatologist-recommended-regimens/">dermatologist-recommended regimen</a>.</p>
                
                <section>
                    <h3>Step 1: Preparation</h3>
                    <p>Lowering surface tension and removing environmental pollutants to prepare the epidermis.</p>
                    <h3>Step 2: Penetration</h3>
                    <p>Lipophilic BHA dives into the sebaceous matrix to clear blockages.</p>
                    <h3>Step 3: Eradication</h3>
                    <p>Solubilized BPO destroys bacterial DNA via rapid oxidation.</p>
                </section>
            </section>

            <section id="comparison" class="reveal">
                <h2>7. Comparative Analysis: Obagi Clenziderm vs OTC Alternatives</h2>
                <p>Patients often question the value proposition of a clinical system versus over-the-counter (OTC) alternatives. The core difference lies in the formulation chemistry.</p>
                
                <div class="acne-table-wrapper">
                    <table class="acne-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Obagi Clenziderm MD</th>
                                <th>Standard OTC 3-Step Kits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Feature"><strong>BPO Formulation</strong></td>
                                <td data-label="Obagi Clenziderm MD">Solubilized (Sub-micron)</td>
                                <td data-label="Standard OTC 3-Step Kits">Suspension (Micro-milled)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature"><strong>Follicular Penetration</strong></td>
                                <td data-label="Obagi Clenziderm MD">High (Deep pilosebaceous reach)</td>
                                <td data-label="Standard OTC 3-Step Kits">Low (Surface localized)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature"><strong>Irritation Profile</strong></td>
                                <td data-label="Obagi Clenziderm MD">Moderate (Transient, highly effective)</td>
                                <td data-label="Standard OTC 3-Step Kits">High (Due to surface accumulation)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature"><strong>Onset of Action</strong></td>
                                <td data-label="Obagi Clenziderm MD">Rapid (1-2 weeks)</td>
                                <td data-label="Standard OTC 3-Step Kits">Delayed (4-8 weeks)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>For more comparisons, review our guide on <a href="/acne/clinical-vs-otc/">clinical versus OTC acne treatments</a>.</p>
            </section>

            <section id="protocol" class="reveal">
                <h2>8. Application Protocol and Tolerability Management</h2>
                <p>Because the Obagi Clenziderm system is highly active, integrating it into a <a href="/acne/daily-skincare/">daily skincare protocol</a> requires a strategic approach. Patients are advised to begin application every other day to assess tolerability. Erythema and desquamation are expected pharmacodynamic responses during the initial phase.</p>
                <p>To mitigate trans-epidermal water loss, it is crucial to incorporate a non-comedogenic, ceramide-rich moisturizer. Understanding <a href="/acne/purging-vs-breakouts/">purging versus breakouts</a> is essential; the initial acceleration of comedone expulsion (purging) is a positive clinical sign of the BHA's efficacy.</p>
            </section>

            <section id="maintenance" class="reveal">
                <h2>9. Long-term Maintenance and Considerations</h2>
                <p>Once clinical clearance is achieved, patients may titrate the frequency of the therapeutic lotion to a maintenance schedule. Continual use of the Pore Therapy is often recommended to prevent microcomedone formation. Incorporating a broad-spectrum SPF is non-negotiable, as BHA and BPO can increase photosensitivity, risking <a href="/acne/post-inflammatory-hyperpigmentation/">post-inflammatory hyperpigmentation (PIH)</a>.</p>
                <p>Consultation with a board-certified dermatologist via our <a href="/consultations/telehealth/">telehealth platform</a> can help customize the long-term application strategy.</p>
            </section>

            <section id="guidelines" class="reveal">
                <h2>10. Dermatological Clinical Analysis & Patient Application Guidelines</h2>
                <p>Achieving long-term clearing of active acne lesions while preserving stratum corneum integrity requires strict adherence to evidence-based active dosing protocols. Dermatologists emphasize that over-application of topical keratolytics or antibacterial agents leads to acute trans-epidermal water loss (TEWL), triggering reactive sebum hyper-secretion and exacerbating microcomedone formation.</p>

                <h3>1. Mechanism of Action & Follicular Dynamics</h3>
                <p>Topical active ingredients target acne through distinct biological pathways. Keratolytic agents like Salicylic Acid (BHA) and Glycolic Acid (AHA) cleave ionic desmosomal bonds holding dead corneocytes together, shedding follicular plugs. Antimicrobial compounds like Benzoyl Peroxide (BPO) release free radical oxygen species that sterilize anaerobic <em>Cutibacterium acnes</em> bacteria without inducing bacterial resistance. Dicarboxylic acids like Azelaic Acid selectively inhibit tyrosinase enzymes to prevent post-inflammatory hyperpigmentation (PIH).</p>

                <h3>2. Barrier Preservation & Retinoid Layering Protocol</h3>
                <p>To avoid chemical irritation and severe flaking, always follow the <strong>Sandwich Protocol</strong> when layering retinoids or high-strength acids: apply a light hydrating layer of non-comedogenic ceramide lotion, allow 10 minutes for absorption, apply your active treatment, and seal with a barrier moisturizer.</p>
                <ul>
                  <li><strong>Morning Routine (AM):</strong> Cleanse with a mild hydrating wash, apply active spot treatment or serum, follow with barrier moisturizer, and complete with broad-spectrum SPF 50+ sunscreen.</li>
                  <li><strong>Evening Routine (PM):</strong> Double-cleanse to remove UV filters and urban particulate matter, apply targeted treatment on 100% dry skin, and lock in hydration with ceramide-rich creams.</li>
                </ul>

                <h3>3. Preventing Post-Inflammatory Hyperpigmentation (PIH) on Dark Skin Tones</h3>
                <p>Melanin-rich skin (Fitzpatrick IV–VI) responds to skin barrier trauma by accelerating melanin synthesis. Never pick, pop, or scratch active inflammatory papules. Use hydrocolloid patches on whiteheads to absorb exudate, and introduce brightening actives like 4% Niacinamide, 2% Alpha Arbutin, or 15% Azelaic Acid once inflammation subsides.</p>

                <h3>4. Clinical Safety Considerations & UV Defense</h3>
                <p>Active exfoliants and retinoids increase skin sensitivity to ultraviolet radiation (UVB and UVA rays). Exposure to sun rays without adequate broad-spectrum protection degrades collagen, impairs skin repair, and triggers melanin overproduction. Daily broad-spectrum SPF 50 sunscreen application is mandatory for anyone using active acne formulations.</p>
            </section>
            
            <section id="pharmacokinetics" class="reveal">
                <h2>11. Pharmacokinetics of Topical BPO</h2>
                <p>Benzoyl peroxide is absorbed by the skin where it is metabolized to benzoic acid and oxygen free radicals. The solubilized state of Obagi's formulation means the kinetic rate of this metabolism occurs deeper within the dermis, specifically targeting the anaerobic environment favored by acne-causing bacteria. Understanding the <a href="/acne/pharmacology-of-acne-medications/">pharmacology of acne medications</a> allows for better patient compliance and expectation management.</p>
            </section>
            
            <!-- Dark Callout CTA -->
            <div class="dark-callout reveal">
                <h2>Ready for clearer skin?</h2>
                <p>Join thousands of others who have cleared their acne.</p>
                <div class="face-ai-cta-wrapper" style="align-items: center; text-align: center;">
                    <a href="/scan/" class="face-ai-btn">
                        <span class="face-ai-btn-text">Start Free AI Skin Scan</span>
                        <div class="face-ai-energy-rail"></div>
                    </a>
                    <p class="face-ai-subtext" style="color: #F5EDE6;">Clinically validated analysis in 30 seconds. No credit card required.</p>
                </div>
            </div>
            
            <!-- FAQs Section -->
            <section id="faq" class="reveal">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-item">
                    <div class="faq-question">
                        How does solubilized 5% BPO differ from traditional BPO?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Solubilized BPO is formulated to penetrate deep into the follicle, reaching the P. acnes bacteria more effectively than micro-milled suspensions which sit on the skin's surface.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        Can I use Obagi Clenziderm MD every day?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Yes, but clinical protocols recommend a gradual introduction to prevent excessive trans-epidermal water loss (TEWL) and barrier disruption.</p>
                    </div>
                </div>
            </section>

        </main>
        
        <aside class="sidebar">
            <div class="sidebar-card" style="background: var(--brand-light); border-color: var(--brand);">
                <h4>⚕️ Medical Review</h4>
                <p>Reviewed by Dr. Lipy Mehta, Dermatologist. Content strictly adheres to clinical guidelines for acne treatment in the USA.</p>
            </div>
            
            <div class="sidebar-card">
                <h4>Quick Stats</h4>
                <ul class="sidebar-list">
                    <li><strong>Treatment Duration:</strong> 8-12 weeks</li>
                    <li><strong>Active Ingredient:</strong> 5% Solubilized BPO, 2% BHA</li>
                    <li><strong>Target:</strong> Moderate-to-severe acne</li>
                    <li><strong>Usage:</strong> Titrate slowly</li>
                </ul>
            </div>
            
            <div class="sidebar-card">
                <h4>When to Consult</h4>
                <p>If you experience excessive peeling, severe erythema, or no improvement after 12 weeks, discontinue use and consult a board-certified dermatologist.</p>
            </div>
        </aside>
    </div>

    <!-- Footer -->
    <footer class="main-footer">
        <img src="https://mymirror.fit/assets/logo-v4.png" alt="MyMirror Logo" class="footer-logo">
        <p class="footer-text">Review our <a href="/legal/terms/">Terms of Service</a> and <a href="/legal/privacy/">Privacy Policy</a>.</p>
        <p class="footer-text">&copy; 2026 MyMirror Dermatology</p>
    </footer>
    
    <!-- Mobile Sticky CTA -->
    <div class="sticky-cta-mobile">
        <a href="/scan" class="nav-cta">Analyze My Acne Fast</a>
    </div>

    <!-- Scripts -->
    <script>
        // Scroll Reveal Observer
        const observerOptions = {{
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }};

        const observer = new IntersectionObserver((entries, observer) => {{
            entries.forEach(entry => {{
                if (entry.isIntersecting) {{
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }}
            }});
        }}, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {{
            observer.observe(element);
        }});

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(question => {{
            question.addEventListener('click', () => {{
                const item = question.closest('.faq-item');
                const isActive = item.classList.contains('active-faq');
                
                // Close all others
                document.querySelectorAll('.faq-item').forEach(otherItem => {{
                    otherItem.classList.remove('active-faq');
                }});
                
                // Toggle clicked
                if (!isActive) {{
                    item.classList.add('active-faq');
                }}
            }});
        }});

        // Active TOC Highlighting
        const sections = document.querySelectorAll('section[id]');
        const tocLinks = document.querySelectorAll('.toc-link');

        window.addEventListener('scroll', () => {{
            let current = '';
            sections.forEach(section => {{
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 150)) {{
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

with open(target_path, 'w') as f:
    f.write(html_content)
