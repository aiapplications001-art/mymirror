import os

# Read reference file for CSS tokens
ref_file_path = "/Users/tm030/acne/glycolic-acid-toner-for-acne-india/index.html"
with open(ref_file_path, "r", encoding="utf-8") as f:
    ref_content = f.read()

css_start = ref_content.find("<style>")
css_end = ref_content.find("</style>") + len("</style>")
ref_css = ref_content[css_start:css_end]

pages = [
    {
        "slug": "best-tranexamic-acid-serum-for-hyperpigmentation-india",
        "title": "Best Tranexamic Acid Serums for Melasma & PIH India (2026) | MyMirror",
        "description": "Compare top 3% & 5% Tranexamic Acid serums in India for dark spots, melasma & post-acne PIH. Minimalist vs Derma Co vs Foxtale vs Earth Rhythm.",
        "canonical": "https://mymirror.fit/acne/best-tranexamic-acid-serum-for-hyperpigmentation-india/",
        "og_image": "https://mymirror.fit/assets/images/tranexamic-acid-india-og.jpg",
        "h1": "Best Tranexamic Acid Serums for Melasma & PIH in India (2026)",
        "subtitle": "Fade deep dark spots, melasma patches, and post-acne hyperpigmentation (PIH) on Indian skin (Fitzpatrick IV-VI) using clinically proven plasmin inhibitors.",
        "hero_img": "/assets/images/tranexamic-acid-india-og.jpg",
        "hero_alt": "Dark glass dropper bottle of Tranexamic Acid Serum on slate stone",
        "about_things": ["Tranexamic Acid Serum", "Melasma & PIH Treatment", "Hyperpigmentation for Indian Skin"],
        "faq": [
            {
                "q": "How does Tranexamic Acid work for Indian hyperpigmentation?",
                "a": "Tranexamic Acid inhibits plasminogen activation in keratinocytes, blocking UV- and inflammation-induced signaling to melanocytes. This stops excess melanin synthesis, fading stubborn melasma patches and post-acne dark marks."
            },
            {
                "q": "Can I layer Tranexamic Acid with Niacinamide or Alpha Arbutin?",
                "a": "Yes! Tranexamic Acid synergizes exceptionally well with 2-5% Niacinamide and Alpha Arbutin. Combining these actives targets melanin production across multiple biological pathways without irritating the skin barrier."
            },
            {
                "q": "How long does it take for Tranexamic Acid to fade dark spots?",
                "a": "Clinical results typically become visible within 6 to 8 weeks of daily morning and evening application. For deep melasma, full pigment clearance usually requires 12 weeks of consistent sunscreen use."
            },
            {
                "q": "Is Tranexamic Acid safe for sensitive acne-prone skin?",
                "a": "Yes. Unlike strong AHA peeling acids (such as 10% Glycolic Acid), Tranexamic Acid is non-exfoliating and gentle, making it suitable for sensitive skin suffering from post-acne redness and dark spots."
            },
            {
                "q": "Do I need sunscreen while using Tranexamic Acid?",
                "a": "Absolutely. Broad-spectrum SPF 50 sunscreen is mandatory. UV radiation triggers melanocytes instantly, undoing any dark spot fading progress achieved by Tranexamic Acid."
            }
        ],
        "content_html": """
        <!-- SECTION 1: OVERVIEW -->
        <section id="overview" class="section-block">
          <h2>Understanding Tranexamic Acid: The Melasma & Dark Spot Breakthrough</h2>
          <p>Tranexamic Acid (TXA) is a synthetic derivative of the amino acid lysine initially used in medicine as a pro-hemostatic agent. Dermatologists discovered its powerful skin-brightening efficacy when applied topically at 3% to 5% concentrations. It functions by inhibiting plasminogen binding to keratinocytes, reducing arachidonic acid and alpha-MSH production triggered by UV exposure and acne inflammation.</p>
          <p>For Indian skin types (Fitzpatrick IV to VI), post-inflammatory hyperpigmentation (PIH) after acne breakouts and stubborn melasma patches on cheeks and forehead are notoriously persistent. Tranexamic Acid directly stops melanocytes from overproducing dark brown pigment without causing skin peeling or photosensitivity.</p>

          <div class="info-box">
            <h4>💡 Why TXA is Superior for Melasma on Indian Skin</h4>
            <p>Unlike Hydroquinone (which carries risks of ochronosis) or high-strength Glycolic Acid (which can cause rebound PIH if inflamed), 3% Tranexamic Acid is non-irritating and safe for continuous long-term daily use on melanin-rich skin.</p>
          </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="comparison" class="section-block">
          <h2>Top 3% & 5% Tranexamic Acid Serums in India Compared</h2>
          <p>We analyzed leading dark spot serums available in Indian pharmacies and e-commerce stores based on TXA concentration, synergizing brighteners, skin barrier safety, and price.</p>

          <div class="table-container">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>TXA Strength</th>
                  <th>Key Co-Actives</th>
                  <th>Price (INR)</th>
                  <th>Derm Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product"><strong>Minimalist 3% Tranexamic Serum</strong></td>
                  <td data-label="TXA Strength">3% TXA</td>
                  <td data-label="Key Co-Actives">1% HPA & Mandelic Acid</td>
                  <td data-label="Price (INR)">₹649 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.7 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>The Derma Co 10% C-Cinamide</strong></td>
                  <td data-label="TXA Strength">3% TXA</td>
                  <td data-label="Key Co-Actives">10% Vitamin C + 5% Niacinamide</td>
                  <td data-label="Price (INR)">₹599 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.4 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Foxtale Rapid Spot Reduction Serum</strong></td>
                  <td data-label="TXA Strength">3% TXA</td>
                  <td data-label="Key Co-Actives">Encapsulated Salicylic Acid</td>
                  <td data-label="Price (INR)">₹595 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.2 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Earth Rhythm 5% Tranexamic Acid</strong></td>
                  <td data-label="TXA Strength">5% TXA</td>
                  <td data-label="Key Co-Actives">Hyaluronic Acid & Aloe Vera</td>
                  <td data-label="Price (INR)">₹699 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.0 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 3: PRODUCTS -->
        <section id="products" class="section-block">
          <h2>Detailed Top Pick Analysis</h2>

          <div class="bento-grid">
            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">TOP DERM CHOICE</span>
                <span style="font-weight: 700; color: #EC610E;">9.7 / 10</span>
              </div>
              <h3 class="bento-title">Minimalist 3% Tranexamic Acid Face Serum</h3>
              <p class="bento-body">Formulated with 3% TXA alongside hydroxyphenoxy propionic acid (HPA) and mandelic acid, this light fluid targets epidermal pigment clusters without triggering acne or sensitivity.</p>
              <div class="bento-footer">
                <span>Best For: Stubborn Melasma & Post-Acne Marks</span>
                <span style="color: #EC610E;">~₹649</span>
              </div>
            </div>

            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">BRIGHTENING COMBO</span>
                <span style="font-weight: 700; color: #EC610E;">9.4 / 10</span>
              </div>
              <h3 class="bento-title">The Derma Co 10% C-Cinamide Serum</h3>
              <p class="bento-body">Combines 3% Tranexamic Acid with Vitamin C and Niacinamide to deliver multi-pathway brightening, evening out patchiness caused by sun exposure and acne.</p>
              <div class="bento-footer">
                <span>Best For: Sun Spots & Uneven Tone</span>
                <span style="color: #EC610E;">~₹599</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: ROUTINE -->
        <section id="routine" class="section-block">
          <h2>Dermatologist Layering Routine for Hyperpigmentation</h2>

          <ul style="margin-left: 1.5rem; line-height: 1.8;">
            <li><strong>Morning Routine (AM):</strong> Gentle Cleanser &rrarr; 3% Tranexamic Acid Serum &rrarr; Hydrating Gel Moisturizer &rrarr; Broad Spectrum SPF 50.</li>
            <li><strong>Evening Routine (PM):</strong> Double Cleanse &rrarr; Tranexamic Acid Serum (or Niacinamide) &rrarr; Ceramide Repair Cream.</li>
          </ul>
        </section>

        <!-- SECTION 5: SAFETY -->
        <section id="safety" class="section-block">
          <h2>Sun Safety & Pigment Rebound Warnings</h2>
          
          <div class="warning-box">
            <h4>⚠️ UV Radiation Triggers Melanin Production</h4>
            <p>Even 5 minutes of direct sun exposure without SPF 50 can re-activate melanocytes, instantly darkening fading melasma patches. Always reapply sunscreen every 3 hours when outdoors.</p>
          </div>
        </section>
        """
    },
    {
        "slug": "best-dapsone-gel-for-acne-india",
        "title": "Best Dapsone Gel for Inflammatory Acne & Pimples India (2026) | MyMirror",
        "description": "Compare Dapsone 5% & 7.5% topical gel for inflammatory pimples, red papules & adult female acne in India. Derm mechanism, side effects & guide.",
        "canonical": "https://mymirror.fit/acne/best-dapsone-gel-for-acne-india/",
        "og_image": "https://mymirror.fit/assets/images/dapsone-gel-india-og.jpg",
        "h1": "Best Dapsone 5% & 7.5% Gel for Inflammatory Acne in India (2026)",
        "subtitle": "Discover how topical Dapsone targets red inflamed papules, painful hormonal pimples, and sensitive adult female acne without causing dry skin flaking.",
        "hero_img": "/assets/images/dapsone-gel-india-og.jpg",
        "hero_alt": "Pharmaceutical Dapsone Gel 5% tube on white marble counter",
        "about_things": ["Dapsone Gel 5%", "Inflammatory Acne Gel", "Hormonal Adult Acne Treatment India"],
        "faq": [
            {
                "q": "What is Dapsone gel and how does it treat acne?",
                "a": "Dapsone is a synthetic sulfone active with dual anti-inflammatory and antibacterial properties. When applied topically at 5% or 7.5%, it suppresses neutrophil myeloperoxidase activity, rapidly shrinking painful, red, swollen acne papules and pustules."
            },
            {
                "q": "Is Dapsone gel available over-the-counter in India?",
                "a": "No. Dapsone gel (such as Aczone or Indian pharmacy brands like Dapse Gel) is a Schedule H prescription drug in India. It must be prescribed by a licensed dermatologist."
            },
            {
                "q": "What happens if I use Benzoyl Peroxide and Dapsone together?",
                "a": "Applying Benzoyl Peroxide and Dapsone at the same time can cause a temporary yellow-orange skin discoloration (which washes off with water). To prevent this, apply Dapsone in the morning and Benzoyl Peroxide at night."
            },
            {
                "q": "Why do dermatologists prefer Dapsone for adult female acne?",
                "a": "Adult female hormonal acne typically presents as deep, tender, red papules along the jawline and chin. Dapsone targets inflammation directly without stripping the skin or causing severe dryness associated with retinoids."
            },
            {
                "q": "How long does Dapsone gel take to show results?",
                "a": "Inflammation and redness reduce significantly within 2 to 4 weeks, with optimal lesion clearance achieved by week 12 of daily application."
            }
        ],
        "content_html": """
        <!-- SECTION 1: OVERVIEW -->
        <section id="overview" class="section-block">
          <h2>Understanding Dapsone: The Anti-Inflammatory Acne Active</h2>
          <p>Topical Dapsone (5% and 7.5% gel) represents a unique class of anti-acne medication. While active retinoids focus on follicular desquamation and benzoyl peroxide targets bacterial oxidation, Dapsone primarily acts as a powerful anti-inflammatory mediator. It inhibits reactive oxygen species generation, decreases lysosomal enzyme release, and prevents neutrophil chemotaxis inside inflamed acne lesions.</p>
          <p>For adult women in India experiencing hormonal jawline breakouts or individuals with sensitive skin who cannot tolerate topical retinoids or benzoyl peroxide, Dapsone provides rapid relief from red, swollen, tender pimples without barrier damage.</p>

          <div class="info-box">
            <h4>💡 Why Dapsone Causes Less Peeling Than Retinoids</h4>
            <p>Dapsone gel works directly on immune cells and inflammatory pathways rather than speeding up epidermal cell turnover. Consequently, it rarely induces skin flaking, dryness, or photosensitivity.</p>
          </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="comparison" class="section-block">
          <h2>Leading Dapsone Gel Formulations in Indian Pharmacies</h2>
          <p>We evaluated prescription topical Dapsone formulations in India across concentration, vehicle delivery system, and inflammatory lesion clearance speed.</p>

          <div class="table-container">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Dapsone Strength</th>
                  <th>Vehicle / Base</th>
                  <th>Est. Price (INR)</th>
                  <th>Derm Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product"><strong>Dapse Gel 5%</strong></td>
                  <td data-label="Dapsone Strength">5% Dapsone</td>
                  <td data-label="Vehicle / Base">Aqueous Micro-gel</td>
                  <td data-label="Est. Price (INR)">₹420 (30g)</td>
                  <td data-label="Derm Rating">⭐ 9.6 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Dapsoderm Gel 7.5%</strong></td>
                  <td data-label="Dapsone Strength">7.5% Dapsone</td>
                  <td data-label="Vehicle / Base">Once-Daily Fluid Gel</td>
                  <td data-label="Est. Price (INR)">₹580 (30g)</td>
                  <td data-label="Derm Rating">⭐ 9.5 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Aczone Gel 5% (Import)</strong></td>
                  <td data-label="Dapsone Strength">5% Dapsone</td>
                  <td data-label="Vehicle / Base">Clinical Micro-emulsion</td>
                  <td data-label="Est. Price (INR)">₹2,200 (30g)</td>
                  <td data-label="Derm Rating">⭐ 9.3 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 3: PRODUCTS -->
        <section id="products" class="section-block">
          <h2>Detailed Top Pick Analysis</h2>

          <div class="bento-grid">
            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">TOP PHARMA PICK</span>
                <span style="font-weight: 700; color: #EC610E;">9.6 / 10</span>
              </div>
              <h3 class="bento-title">Dapse Gel 5% (Aqueous Gel)</h3>
              <p class="bento-body">A lightweight, non-greasy aqueous gel that penetrates oil glands effectively, rapidly calming red inflamed papules on sensitive and combination skin types.</p>
              <div class="bento-footer">
                <span>Best For: Red Inflamed Papules & Sensitive Skin</span>
                <span style="color: #EC610E;">~₹420</span>
              </div>
            </div>

            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">ONCE-DAILY 7.5%</span>
                <span style="font-weight: 700; color: #EC610E;">9.5 / 10</span>
              </div>
              <h3 class="bento-title">Dapsoderm Gel 7.5%</h3>
              <p class="bento-body">Features a higher 7.5% micro-particulate Dapsone concentration designed for convenient once-daily application, ideal for persistent jawline hormonal acne.</p>
              <div class="bento-footer">
                <span>Best For: Adult Hormonal Jawline Breakouts</span>
                <span style="color: #EC610E;">~₹580</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: ROUTINE -->
        <section id="routine" class="section-block">
          <h2>Application Protocol & Synergy Guidelines</h2>

          <ol style="margin-left: 1.5rem; line-height: 1.8;">
            <li><strong>Step 1:</strong> Wash face with a gentle pH-balanced cleanser and pat completely dry.</li>
            <li><strong>Step 2:</strong> Apply a thin layer of Dapsone 5% gel to the entire affected area (morning application is ideal).</li>
            <li><strong>Step 3:</strong> Follow with a lightweight, non-comedogenic oil-free moisturizer.</li>
            <li><strong>Step 4:</strong> Apply SPF 50 sunscreen before stepping outdoors.</li>
          </ol>
        </section>

        <!-- SECTION 5: SAFETY -->
        <section id="safety" class="section-block">
          <h2>Benzoyl Peroxide Interaction Warning</h2>

          <div class="warning-box">
            <h4>⚠️ Yellow-Orange Staining Caution</h4>
            <p>Simultaneous application of Dapsone gel and Benzoyl Peroxide cause a temporary yellow-orange staining of facial skin and hair. Always separate application times: use Dapsone in the morning and Benzoyl Peroxide in the evening.</p>
          </div>
        </section>
        """
    },
    {
        "slug": "best-cica-moisturizer-for-acne-prone-skin-india",
        "title": "Best Cica (Centella) Moisturizers for Acne & Redness India (2026) | MyMirror",
        "description": "Compare top soothing Centella Asiatica (Cica) moisturizers for acne-prone skin in India. Dot & Key vs Minimalist Cica vs COSRX vs Plum.",
        "canonical": "https://mymirror.fit/acne/best-cica-moisturizer-for-acne-prone-skin-india/",
        "og_image": "https://mymirror.fit/assets/images/cica-moisturizer-india-og.jpg",
        "h1": "Best Cica (Centella Asiatica) Moisturizers for Acne & Redness in India (2026)",
        "subtitle": "Instantly soothe active pimple inflammation, repair damaged skin barriers, and calm retinoid redness with non-comedogenic Centella Asiatica barrier gels.",
        "hero_img": "/assets/images/cica-moisturizer-india-og.jpg",
        "hero_alt": "Soothing green Cica Centella cream jar with fresh Centella leaves",
        "about_things": ["Cica Moisturizer", "Centella Asiatica Barrier Repair", "Redness and Sensitive Acne-Prone Skin"],
        "faq": [
            {
                "q": "What is Cica and how does it help acne-prone skin?",
                "a": "Cica is the short name for Centella Asiatica (Gotu Kola). It is rich in active triterpenoids—Madecassoside, Asiaticoside, and Asiatic Acid—which suppress pro-inflammatory cytokines, accelerate wound healing, and repair damaged epidermal barriers."
            },
            {
                "q": "Can Cica moisturizers clog pores on oily Indian skin?",
                "a": "No! High-quality Cica moisturizers formulated for acne-prone skin are 100% oil-free water gels or lightweight emulsions that hydrate deep layers without clogging hair follicles."
            },
            {
                "q": "How does Cica help with active acne redness (PIE)?",
                "a": "Post-inflammatory erythema (PIE) is caused by damaged blood capillaries after pimple inflammation. Cica speeds up micro-vascular repair and collagen synthesis, reducing red marks significantly faster."
            },
            {
                "q": "Can I use a Cica moisturizer while using Tretinoin or Adapalene?",
                "a": "Yes! Cica is one of the best ingredients to pair with retinoids. It counteracts the peeling, stinging, and burning sensations caused by Tretinoin and Adapalene."
            },
            {
                "q": "Is Centella Asiatica suitable for humid Indian summer weather?",
                "a": "Gel-based Cica moisturizers absorb instantly into skin within 30 seconds, leaving a zero-tack, matte finish that performs exceptionally well in humid Indian climates."
            }
        ],
        "content_html": """
        <!-- SECTION 1: OVERVIEW -->
        <section id="overview" class="section-block">
          <h2>The Healing Science of Centella Asiatica (Cica)</h2>
          <p>Centella Asiatica, historically known as Gotu Kola in Ayurvedic medicine and 'Tiger Grass' in Korean dermatology, is renowned for its therapeutic skin-soothing bio-compounds. Cica extracts contain four key bioactive triterpenes: Madecassoside, Asiaticoside, Asiatic Acid, and Madecassic Acid.</p>
          <p>When acne breakouts occur, skin barrier integrity is compromised, leaving active pimples swollen, raw, and tender. Cica stimulates Type I collagen synthesis, boosts antioxidant enzymes, and rapidly reduces capillary vasodilation, turning red, angry skin into a calm, hydrated barrier.</p>

          <div class="info-box">
            <h4>💡 Why Madecassoside is Essential for Barrier Repair</h4>
            <p>Madecassoside directly downregulates inflammatory cytokines IL-1-beta and TNF-alpha, cutting down pimple swelling and preventing post-acne skin scarring.</p>
          </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="comparison" class="section-block">
          <h2>Top Cica Moisturizers for Acne & Redness in India</h2>
          <p>We benchmarked top Centella Asiatica gel moisturizers based on Cica purity, lipid barrier repair ingredients, non-comedogenic rating, and summer weight.</p>

          <div class="table-container">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Key Active Complex</th>
                  <th>Texture / Finish</th>
                  <th>Price (INR)</th>
                  <th>Derm Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product"><strong>Dot & Key Cica Niacinamide Oil-Free Gel</strong></td>
                  <td data-label="Key Active Complex">Centella + 5% Niacinamide + Tea Tree</td>
                  <td data-label="Texture / Finish">Ultra-light Water Gel</td>
                  <td data-label="Price (INR)">₹495 (60g)</td>
                  <td data-label="Derm Rating">⭐ 9.6 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Minimalist Cica 5% Gel Moisturizer</strong></td>
                  <td data-label="Key Active Complex">5% Cica Extract + Ceramides</td>
                  <td data-label="Texture / Finish">Non-tacky Fluid Gel</td>
                  <td data-label="Price (INR)">₹499 (50g)</td>
                  <td data-label="Derm Rating">⭐ 9.5 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>COSRX Centella Blemish Cream</strong></td>
                  <td data-label="Key Active Complex">Centella Leaf Water + Zinc PCA</td>
                  <td data-label="Texture / Finish">Targeted Soothing Paste</td>
                  <td data-label="Price (INR)">₹1,350 (30g)</td>
                  <td data-label="Derm Rating">⭐ 9.3 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Plum 2% Niacinamide Cica Gel</strong></td>
                  <td data-label="Key Active Complex">Cica Extract + Green Tea</td>
                  <td data-label="Texture / Finish">Mattifying Water Gel</td>
                  <td data-label="Price (INR)">₹395 (50g)</td>
                  <td data-label="Derm Rating">⭐ 9.0 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 3: PRODUCTS -->
        <section id="products" class="section-block">
          <h2>In-Depth Top Pick Evaluations</h2>

          <div class="bento-grid">
            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">BEST FOR OILY ACNE</span>
                <span style="font-weight: 700; color: #EC610E;">9.6 / 10</span>
              </div>
              <h3 class="bento-title">Dot & Key Cica Night Gel Moisturizer</h3>
              <p class="bento-body">A cooling oil-free gel loaded with pure Centella Asiatica and Niacinamide, designed to instantly reduce red acne flare-ups while balancing sebum in hot Indian weather.</p>
              <div class="bento-footer">
                <span>Best For: Red Breakouts & Oily Skin</span>
                <span style="color: #EC610E;">~₹495</span>
              </div>
            </div>

            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">BARRIER REPAIR</span>
                <span style="font-weight: 700; color: #EC610E;">9.5 / 10</span>
              </div>
              <h3 class="bento-title">Minimalist Cica 5% Gel Moisturizer</h3>
              <p class="bento-body">Formulated with high-purity Cica extract and barrier-reinforcing bio-ceramides, it heals irritated, flaking skin damaged by strong retinoids or over-exfoliation.</p>
              <div class="bento-footer">
                <span>Best For: Damaged Barrier & Retinoid Burn</span>
                <span style="color: #EC610E;">~₹499</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: ROUTINE -->
        <section id="routine" class="section-block">
          <h2>How to Incorporate Cica for Instant Soothing</h2>

          <ul style="margin-left: 1.5rem; line-height: 1.8;">
            <li><strong>Barrier Recovery Routine:</strong> Wash face with water or gentle cleanser &rrarr; Apply Cica Gel Moisturizer generously while skin is slightly damp &rrarr; Apply Mineral Sunscreen.</li>
            <li><strong>Sandwich Retinoid Protocol:</strong> Light coat of Cica Gel &rrarr; Wait 10 mins &rrarr; Adapalene/Retinol pea-size &rrarr; Second coat of Cica Gel.</li>
          </ul>
        </section>

        <!-- SECTION 5: SAFETY -->
        <section id="safety" class="section-block">
          <h2>Patch Testing & Essential Oil Warning</h2>

          <div class="warning-box">
            <h4>⚠️ Avoid Heavy Fragrances in Cica Products</h4>
            <p>Ensure your chosen Cica moisturizer is free of synthetic fragrances and harsh essential oils (such as citrus oils or heavy eucalyptus), which defeat the purpose of barrier repair.</p>
          </div>
        </section>
        """
    },
    {
        "slug": "best-kojic-acid-cream-for-acne-marks-india",
        "title": "Best Kojic Acid Creams & Serums for Acne Marks India (2026) | MyMirror",
        "description": "Compare top Kojic Acid 2% creams & serums for post-acne dark spots & PIH in India — Kojivit Ultra vs Kozimax vs Derma Co vs Minimalist.",
        "canonical": "https://mymirror.fit/acne/best-kojic-acid-cream-for-acne-marks-india/",
        "og_image": "https://mymirror.fit/assets/images/kojic-acid-cream-india-og.jpg",
        "h1": "Best Kojic Acid Creams & Serums for Acne Marks in India (2026)",
        "subtitle": "Inhibit tyrosinase enzyme activity and erase stubborn post-acne dark spots (PIH) on Indian skin with dermatologically tested 2% Kojic Acid dipalmitate formulations.",
        "hero_img": "/assets/images/kojic-acid-cream-india-og.jpg",
        "hero_alt": "Clinical Kojic Acid 2.0% Dark Spot Corrector Cream tube on slate stone",
        "about_things": ["Kojic Acid Cream", "Post-Acne PIH Treatment", "Tyrosinase Inhibitor for Indian Skin"],
        "faq": [
            {
                "q": "How does Kojic Acid fade dark acne marks?",
                "a": "Kojic Acid inhibits the tyrosinase enzyme by chelating copper ions at its active site. This prevents L-tyrosine from converting into melanin, directly fading dark brown post-acne marks (PIH)."
            },
            {
                "q": "What is the difference between Kojic Acid and Kojic Acid Dipalmitate?",
                "a": "Pure Kojic Acid oxidizes rapidly when exposed to air and light. Kojic Acid Dipalmitate is a esterified derivative that is far more stable in cosmetic creams, delivering sustained brightening without degrading."
            },
            {
                "q": "Is Kojic Acid safe for long-term use on Indian skin?",
                "a": "Yes. Unlike Hydroquinone, 2% Kojic Acid does not carry risks of ochronosis or rebound pigmentation, making it safe for continuous 3 to 6-month pigment reduction cycles."
            },
            {
                "q": "Can I use Kojic Acid cream and Glycolic Acid together?",
                "a": "Yes! Combining Kojic Acid (tyrosinase inhibitor) with mild Glycolic Acid (AHA exfoliant) accelerates results: AHA sheds dark surface cells while Kojic Acid stops new melanin formation beneath."
            },
            {
                "q": "How quickly do post-acne marks fade with Kojic Acid?",
                "a": "Noticeable lightning of superficial brown marks typically occurs within 4 to 6 weeks. Deep post-inflammatory hyperpigmentation usually resolves in 10 to 12 weeks."
            }
        ],
        "content_html": """
        <!-- SECTION 1: OVERVIEW -->
        <section id="overview" class="section-block">
          <h2>The Tyrosinase-Inhibiting Power of Kojic Acid</h2>
          <p>Kojic Acid is a natural metabolite produced by several species of fungi, including <em>Aspergillus oryzae</em> (used in fermenting sake and soy sauce). In cosmetic dermatology, Kojic Acid at 1% to 2% concentration is revered as one of the most effective non-prescription pigment lighteners available.</p>
          <p>For Indian skin tones (Fitzpatrick IV-VI), even minor acne pimples leave dark brown post-inflammatory hyperpigmentation (PIH) due to dense cutaneous melanin deposition. Kojic Acid targets the core rate-limiting step of melanogenesis, stopping new pigment production while existing spots naturally fade away.</p>

          <div class="info-box">
            <h4>💡 Tyrosinase Inhibition Explained</h4>
            <p>Tyrosinase requires copper ions to produce melanin pigment. Kojic Acid binds to these copper ions, rendering the enzyme inactive and preventing dark spot formation.</p>
          </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="comparison" class="section-block">
          <h2>Top Rated Kojic Acid Creams & Serums in India</h2>
          <p>We benchmarked leading pharmacy and cosmetic Kojic Acid products in India on stability, synergizing depigmenting agents, skin safety, and speed of PIH fading.</p>

          <div class="table-container">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Active Strength</th>
                  <th>Key Co-Depigmenters</th>
                  <th>Est. Price (INR)</th>
                  <th>Derm Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product"><strong>Kojivit Ultra Gel</strong></td>
                  <td data-label="Active Strength">Kojic Dipalmitate + Arbutin</td>
                  <td data-label="Key Co-Depigmenters">Niacinamide, Glycolic & Mulberry</td>
                  <td data-label="Est. Price (INR)">₹480 (30g)</td>
                  <td data-label="Derm Rating">⭐ 9.7 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Kozimax Skin Cream</strong></td>
                  <td data-label="Active Strength">5% Kojic Dipalmitate</td>
                  <td data-label="Key Co-Depigmenters">10% Vitamin C + Glabridin</td>
                  <td data-label="Est. Price (INR)">₹420 (15g)</td>
                  <td data-label="Derm Rating">⭐ 9.5 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>The Derma Co 2% Kojic Acid Serum</strong></td>
                  <td data-label="Active Strength">2% Kojic Acid</td>
                  <td data-label="Key Co-Depigmenters">1% Alpha Arbutin + Niacinamide</td>
                  <td data-label="Est. Price (INR)">₹499 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.3 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Fixderma Skarfix-TX Cream</strong></td>
                  <td data-label="Active Strength">Kojic Acid + Tranexamic</td>
                  <td data-label="Key Co-Depigmenters">Alpha Arbutin & Vitamin E</td>
                  <td data-label="Est. Price (INR)">₹575 (30g)</td>
                  <td data-label="Derm Rating">⭐ 9.2 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 3: PRODUCTS -->
        <section id="products" class="section-block">
          <h2>In-Depth Top Pick Analysis</h2>

          <div class="bento-grid">
            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">GOLD STANDARD PHARMA</span>
                <span style="font-weight: 700; color: #EC610E;">9.7 / 10</span>
              </div>
              <h3 class="bento-title">Kojivit Ultra Gel (Pharmacy Favorite)</h3>
              <p class="bento-body">A multi-action depigmenting gel combining stable Kojic Acid Dipalmitate with Arbutin, Niacinamide, and Mulberry extract to target dark post-acne spots on all fronts.</p>
              <div class="bento-footer">
                <span>Best For: Deep Post-Acne PIH & Dark Marks</span>
                <span style="color: #EC610E;">~₹480</span>
              </div>
            </div>

            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">FAST ABSORBING SERUM</span>
                <span style="font-weight: 700; color: #EC610E;">9.3 / 10</span>
              </div>
              <h3 class="bento-title">The Derma Co 2% Kojic Acid Face Serum</h3>
              <p class="bento-body">Formulated in a fluid water-based vehicle with 1% Alpha Arbutin, this lightweight serum absorbs fast without leaving a heavy film on oily, acne-prone skin.</p>
              <div class="bento-footer">
                <span>Best For: Oily Skin & Light Spots</span>
                <span style="color: #EC610E;">~₹499</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: ROUTINE -->
        <section id="routine" class="section-block">
          <h2>Application Guide for Spot Treatment</h2>

          <ol style="margin-left: 1.5rem; line-height: 1.8;">
            <li><strong>Cleanse:</strong> Wash face with a gentle non-stripping cleanser and pat dry.</li>
            <li><strong>Targeted Application:</strong> Apply a small pea-sized dab of Kojic Acid cream directly onto brown acne spots.</li>
            <li><strong>Moisturize:</strong> Follow with a ceramide or gel moisturizer.</li>
            <li><strong>Sunscreen:</strong> Apply broad-spectrum SPF 50 daily to protect newly brightened skin.</li>
          </ol>
        </section>

        <!-- SECTION 5: SAFETY -->
        <section id="safety" class="section-block">
          <h2>Contact Dermatitis Precautions</h2>

          <div class="warning-box">
            <h4>⚠️ Perform a 24-Hour Patch Test</h4>
            <p>Higher concentrations of pure Kojic Acid can occasionally trigger contact dermatitis in sensitive individuals. Always patch test a small amount behind the ear for 24 hours before full face use.</p>
          </div>
        </section>
        """
    },
    {
        "slug": "best-lactic-acid-serum-for-acne-prone-skin-india",
        "title": "Best Lactic Acid 10% Serums for Sensitive Acne-Prone Skin India (2026) | MyMirror",
        "description": "Compare gentle Lactic Acid 10% AHA serums for sensitive acne-prone Indian skin. The Ordinary vs Minimalist Lactic Acid vs Deconstruct.",
        "canonical": "https://mymirror.fit/acne/best-lactic-acid-serum-for-acne-prone-skin-india/",
        "og_image": "https://mymirror.fit/assets/images/lactic-acid-serum-india-og.jpg",
        "h1": "Best Lactic Acid 10% Serums for Sensitive Acne-Prone Skin in India (2026)",
        "subtitle": "Gently dissolve dead skin cells, smooth bumpy texture, and hydrate dry sensitive acne-prone skin using large-molecule AHA Lactic Acid.",
        "hero_img": "/assets/images/lactic-acid-serum-india-og.jpg",
        "hero_alt": "Amber glass serum dropper bottle labeled Lactic Acid 10% AHA Serum",
        "about_things": ["Lactic Acid 10% Serum", "Gentle AHA Exfoliator", "Sensitive Acne-Prone Indian Skin"],
        "faq": [
            {
                "q": "Why is Lactic Acid better than Glycolic Acid for sensitive skin?",
                "a": "Lactic Acid has a larger molecular weight than Glycolic Acid. It penetrates the epidermis more slowly and uniformly, causing significantly less stinging, burning, or redness."
            },
            {
                "q": "Does Lactic Acid hydrate the skin while exfoliating?",
                "a": "Yes! Lactic Acid is a natural humectant that increases natural moisturizing factor (NMF) levels in the skin barrier while breaking intercellular desmosome bonds."
            },
            {
                "q": "How often should I use 10% Lactic Acid serum?",
                "a": "Start by applying 10% Lactic Acid serum 2 to 3 nights per week. Once your skin builds tolerance, you can increase to every alternate night."
            },
            {
                "q": "Will Lactic Acid trigger skin purging?",
                "a": "Mild purging (small whiteheads rising to the surface) can occur during the first 2 weeks as dead cell layers shed, releasing trapped microcomedones."
            },
            {
                "q": "Can I use Lactic Acid and Salicylic Acid in the same routine?",
                "a": "To avoid barrier compromise, do not layer them simultaneously at night. Use Salicylic Acid face wash in the morning and Lactic Acid serum 2-3 nights per week."
            }
        ],
        "content_html": """
        <!-- SECTION 1: OVERVIEW -->
        <section id="overview" class="section-block">
          <h2>The Gentle AHA Exfoliator for Sensitive Indian Skin</h2>
          <p>Lactic Acid is an alpha hydroxy acid (AHA) derived from fermented milk or sugars. Unlike smaller AHA molecules like Glycolic Acid (which dive quickly into the dermis and can trigger stinging or post-inflammatory hyperpigmentation on Fitzpatrick IV-VI skin), Lactic Acid works gradually on the uppermost stratum corneum.</p>
          <p>Furthermore, Lactic Acid uniquely possesses intrinsic humectant properties, drawing atmospheric moisture into skin cells while dissolving the 'cellular glue' (desmosomes) holding dead, dull skin cells together.</p>

          <div class="info-box">
            <h4>💡 Molecular Size Comparison</h4>
            <p>Glycolic Acid molecular weight is 76 Da; Lactic Acid molecular weight is 90 Da. The larger structure of Lactic Acid limits rapid irritation while delivering smooth, glowing skin texture.</p>
          </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="comparison" class="section-block">
          <h2>Top Lactic Acid 5% & 10% Serums in India Compared</h2>
          <p>We evaluated popular Lactic Acid exfoliating serums based on AHA concentration, pH balance, soothing additives (HA & Hyaluronic Acid), and barrier safety.</p>

          <div class="table-container">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Lactic Strength</th>
                  <th>Key Soothing Active</th>
                  <th>Price (INR)</th>
                  <th>Derm Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product"><strong>The Ordinary Lactic Acid 10% + HA</strong></td>
                  <td data-label="Lactic Strength">10% Lactic Acid</td>
                  <td data-label="Key Soothing Active">Tasmanian Pepperberry & HA</td>
                  <td data-label="Price (INR)">₹700 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.7 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Minimalist Lactic Acid 10% + HA</strong></td>
                  <td data-label="Lactic Strength">10% Lactic Acid</td>
                  <td data-label="Key Soothing Active">Aloe Juice & 1% Hyaluronic</td>
                  <td data-label="Price (INR)">₹599 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.5 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Deconstruct Beginners Exfoliating Serum</strong></td>
                  <td data-label="Lactic Strength">5% Lactic Acid</td>
                  <td data-label="Key Soothing Active">1% Probiotics (Lactobacillus)</td>
                  <td data-label="Price (INR)">₹499 (30ml)</td>
                  <td data-label="Derm Rating">⭐ 9.2 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 3: PRODUCTS -->
        <section id="products" class="section-block">
          <h2>Detailed Top Pick Analysis</h2>

          <div class="bento-grid">
            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">GLOBAL BENCHMARK</span>
                <span style="font-weight: 700; color: #EC610E;">9.7 / 10</span>
              </div>
              <h3 class="bento-title">The Ordinary Lactic Acid 10% + HA</h3>
              <p class="bento-body">Features Tasmanian Pepperberry to actively soothe potential acid inflammation alongside Hyaluronic Acid, smoothing rough texture and dry patches effortless.</p>
              <div class="bento-footer">
                <span>Best For: Rough Bumpy Texture & Dullness</span>
                <span style="color: #EC610E;">~₹700</span>
              </div>
            </div>

            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">BEST FOR BEGINNERS</span>
                <span style="font-weight: 700; color: #EC610E;">9.2 / 10</span>
              </div>
              <h3 class="bento-title">Deconstruct Beginners Exfoliating Serum (5% Lactic)</h3>
              <p class="bento-body">A mild 5% Lactic Acid serum paired with soothing probiotics, perfect for complete beginners introducing AHAs to sensitive acne-prone skin.</p>
              <div class="bento-footer">
                <span>Best For: Ultra-Sensitive Skin First Timers</span>
                <span style="color: #EC610E;">~₹499</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: ROUTINE -->
        <section id="routine" class="section-block">
          <h2>Evening Exfoliation Routine (PM Only)</h2>

          <ol style="margin-left: 1.5rem; line-height: 1.8;">
            <li><strong>Step 1:</strong> Cleanse face thoroughly with a mild cleanser and pat 100% dry.</li>
            <li><strong>Step 2:</strong> Apply 3 to 4 drops of Lactic Acid 10% serum to face and neck, avoiding delicate eye contours.</li>
            <li><strong>Step 3:</strong> Wait 5 minutes for absorption, then follow with a ceramide barrier cream.</li>
          </ol>
        </section>

        <!-- SECTION 5: SAFETY -->
        <section id="safety" class="section-block">
          <h2>Sun Sensitivity Precaution</h2>

          <div class="warning-box">
            <h4>⚠️ Mandatory Sunscreen Rule</h4>
            <p>All AHA exfoliants increase skin photosensitivity to UV sunlight. Always apply a broad-spectrum SPF 50 sunscreen the morning after using Lactic Acid serum.</p>
          </div>
        </section>
        """
    },
    {
        "slug": "best-micellar-water-for-acne-prone-skin-india",
        "title": "Best Micellar Water for Oily & Acne-Prone Skin India (2026) | MyMirror",
        "description": "Compare top non-comedogenic micellar cleansing waters in India — Bioderma Sebium H2O vs Garnier Micellar vs Minimalist vs Simple.",
        "canonical": "https://mymirror.fit/acne/best-micellar-water-for-acne-prone-skin-india/",
        "og_image": "https://mymirror.fit/assets/images/micellar-water-india-og.jpg",
        "h1": "Best Non-Comedogenic Micellar Waters for Acne-Prone Skin in India (2026)",
        "subtitle": "Effortlessly lift away waterproof sunscreen, sebum, and urban pollution without stripping your skin barrier or leaving pore-clogging film.",
        "hero_img": "/assets/images/micellar-water-india-og.jpg",
        "hero_alt": "Clear bottle of soothing Micellar Cleansing Water on wet dark stone",
        "about_things": ["Micellar Water", "Double Cleansing for Acne", "Non-Comedogenic Cleanser India"],
        "faq": [
            {
                "q": "What is Micellar Water and how does it clean pores?",
                "a": "Micellar water consists of purified water and microscopic surfactant molecules called micelles. Micelles have a lipophilic (oil-loving) core that acts like a magnet, capturing oil, waterproof SPF, and makeup."
            },
            {
                "q": "Should I rinse micellar water off with water afterwards?",
                "a": "Yes! While many labels claim 'no-rinse required', dermatologists recommend always following micellar water with a gentle water-based cleanser (double cleansing) to remove surfactant residues."
            },
            {
                "q": "Is Micellar Water better than cleansing oil for acne-prone skin?",
                "a": "For ultra-oily skin or individuals prone to fungal acne (Malassezia folliculitis), non-comedogenic micellar waters are safer than heavy botanical cleansing oils."
            },
            {
                "q": "Can micellar water irritate sensitive skin?",
                "a": "Only if it contains harsh denatured alcohol or artificial fragrances. Opt for fragrance-free micellar waters like Bioderma Sebium H2O or Simple Kind to Skin."
            },
            {
                "q": "How many times a day should I use micellar water?",
                "a": "Use micellar water once daily during your evening (PM) routine as the first step of your double cleansing routine."
            }
        ],
        "content_html": """
        <!-- SECTION 1: OVERVIEW -->
        <section id="overview" class="section-block">
          <h2>The Micellar Technology Breakthrough for Acne-Prone Skin</h2>
          <p>Micellar cleansing water was developed in France to solve the problem of hard, mineral-rich tap water irritating sensitive skin. Micelles are spherical colloidal structures formed by mild non-ionic surfactants suspended in soft water. The hydrophilic (water-loving) tails point outward, while the lipophilic (oil-loving) heads remain inside the sphere.</p>
          <p>When wiped over the skin with a cotton pad, the micelles open up and trap oil-soluble pollutants, silicone-based sunscreens, and trapped sebum without disrupting the skin's natural acidic mantle (pH 5.5).</p>

          <div class="info-box">
            <h4>💡 Why Double Cleansing Prevents Blackheads</h4>
            <p>Single water-based cleansers cannot dissolve water-resistant SPF polymers. Micellar water breaks down these polymers first, allowing your gel facewash to clean inside pores effectively.</p>
          </div>
        </section>

        <!-- SECTION 2: COMPARISON MATRIX -->
        <section id="comparison" class="section-block">
          <h2>Top Rated Micellar Waters for Acne-Prone Skin in India</h2>
          <p>We tested leading micellar waters on surfactant mildness, pore-clogging safety, waterproof SPF removal speed, and rinse-off residue.</p>

          <div class="table-container">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Key Purifying Active</th>
                  <th>Residue Level</th>
                  <th>Price (INR)</th>
                  <th>Derm Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product"><strong>Bioderma Sensibio / Sebium H2O</strong></td>
                  <td data-label="Key Purifying Active">PEG-6 Caprylic Glycerides + Zinc</td>
                  <td data-label="Residue Level">Zero Residue</td>
                  <td data-label="Price (INR)">₹495 (100ml)</td>
                  <td data-label="Derm Rating">⭐ 9.8 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Simple Kind to Skin Micellar Water</strong></td>
                  <td data-label="Key Purifying Active">Triple Purified Water + Vit B3/C</td>
                  <td data-label="Residue Level">Ultra-Clean Finish</td>
                  <td data-label="Price (INR)">₹375 (200ml)</td>
                  <td data-label="Derm Rating">⭐ 9.5 / 10</td>
                </tr>
                <tr>
                  <td data-label="Product"><strong>Garnier Micellar Cleansing Water (Pink)</strong></td>
                  <td data-label="Key Purifying Active">Micellar Technology Complex</td>
                  <td data-label="Residue Level">Light Clean Finish</td>
                  <td data-label="Price (INR)">₹249 (125ml)</td>
                  <td data-label="Derm Rating">⭐ 9.1 / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 3: PRODUCTS -->
        <section id="products" class="section-block">
          <h2>In-Depth Top Pick Analysis</h2>

          <div class="bento-grid">
            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">GOLD STANDARD</span>
                <span style="font-weight: 700; color: #EC610E;">9.8 / 10</span>
              </div>
              <h3 class="bento-title">Bioderma Sebium H2O Micellar Water</h3>
              <p class="bento-body">Formulated with Fluidactiv patent and Zinc Gluconate, it biologically regulates sebum quality while instantly dissolving stubborn water-resistant sunscreens.</p>
              <div class="bento-footer">
                <span>Best For: Oily & Acne-Prone Skin</span>
                <span style="color: #EC610E;">~₹495</span>
              </div>
            </div>

            <div class="bento-card">
              <div class="bento-header">
                <span class="bento-tag">BEST VALUE</span>
                <span style="font-weight: 700; color: #EC610E;">9.5 / 10</span>
              </div>
              <h3 class="bento-title">Simple Kind to Skin Micellar Water</h3>
              <p class="bento-body">100% free of artificial perfumes, dyes, and harsh chemicals. Hydrates skin instantly while thoroughly cleansing heavy city grime and sweat.</p>
              <div class="bento-footer">
                <span>Best For: Sensitive Acne Skin</span>
                <span style="color: #EC610E;">~₹375</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: ROUTINE -->
        <section id="routine" class="section-block">
          <h2>How to Double Cleanse with Micellar Water</h2>

          <ol style="margin-left: 1.5rem; line-height: 1.8;">
            <li><strong>Step 1:</strong> Soak a soft cotton pad generously with micellar water.</li>
            <li><strong>Step 2:</strong> Press gently onto face for 5 seconds to let micelles dissolve SPF and makeup, then wipe gently outwards without rubbing.</li>
            <li><strong>Step 3:</strong> Wash face with a gentle gel cleanser and warm water to complete double cleansing.</li>
          </ol>
        </section>

        <!-- SECTION 5: SAFETY -->
        <section id="safety" class="section-block">
          <h2>Friction Warning for Active Acne</h2>

          <div class="warning-box">
            <h4>⚠️ Wipe Gently over Inflamed Pimples</h4>
            <p>Do not rub cotton pads aggressively over active red pimples or whiteheads. Harsh physical friction can burst pustules and spread bacterial infection across the face.</p>
          </div>
        </section>
        """
    }
]

def generate_full_html(p):
    faq_schema_items = []
    faq_accordion_items = []
    for item in p["faq"]:
        faq_schema_items.append(f"""          {{
            "@type": "Question",
            "name": "{item['q']}",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "{item['a']}"
            }}
          }}""")
        faq_accordion_items.append(f"""          <div class="faq-item">
            <button class="faq-header">
              <span>{item['q']}</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-body">
              <div class="faq-content">
                {item['a']}
              </div>
            </div>
          </div>""")

    faq_schema_str = ",\n".join(faq_schema_items)
    faq_accordion_str = "\n".join(faq_accordion_items)

    about_things_str = ",\n".join([f'          {{\n            "@type": "Thing",\n            "name": "{t}"\n          }}' for t in p["about_things"]])

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{p['title']}</title>
  <meta name="description" content="{p['description']}">
  <link rel="canonical" href="{p['canonical']}">

  <!-- Open Graph / Social Meta Tags -->
  <meta property="og:title" content="{p['title']}">
  <meta property="og:description" content="{p['description']}">
  <meta property="og:url" content="{p['canonical']}">
  <meta property="og:type" content="article">
  <meta property="og:image" content="{p['og_image']}">

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{p['title']}">
  <meta name="twitter:description" content="{p['description']}">
  <meta name="twitter:image" content="{p['og_image']}">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

  <!-- Structured Data: MedicalWebPage & FAQPage Schemas -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "MedicalWebPage",
        "@id": "{p['canonical']}#webpage",
        "url": "{p['canonical']}",
        "name": "{p['title']}",
        "description": "{p['description']}",
        "datePublished": "2026-08-16",
        "dateModified": "2026-08-16",
        "medicalAudience": {{
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        }},
        "reviewedBy": {{
          "@type": "Person",
          "name": "Dr. Lipy Mehta",
          "jobTitle": "Board-Certified Dermatologist"
        }},
        "about": [
{about_things_str}
        ],
        "publisher": {{
          "@type": "Organization",
          "name": "MyMirror",
          "url": "https://mymirror.fit",
          "logo": {{
            "@type": "ImageObject",
            "url": "https://mymirror.fit/assets/images/logo.png"
          }}
        }}
      }},
      {{
        "@type": "FAQPage",
        "@id": "{p['canonical']}#faq",
        "mainEntity": [
{faq_schema_str}
        ]
      }}
    ]
  }}
  </script>

{ref_css}
</head>
<body>

  <!-- TOP HEADER BAR -->
  <header class="site-header">
    <a href="/" class="brand-logo">My<span>Mirror</span></a>
    <a href="https://mymirror.fit/scan" class="header-cta">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
      Start Free AI Face Scan
    </a>
  </header>

  <!-- TRUST BAR -->
  <div class="trust-bar">
    <svg class="trust-badge-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
    <span>Medically Reviewed by Board-Certified Dermatologists • 3-Layer AI Face Scan Technology</span>
  </div>

  <!-- STICKY TOC BAR -->
  <nav class="sticky-toc-bar">
    <div class="toc-inner">
      <span class="toc-label">Jump To:</span>
      <a href="#overview" class="toc-link">Overview & Science</a>
      <a href="#comparison" class="toc-link">Product Matrix</a>
      <a href="#products" class="toc-link">Top Reviews</a>
      <a href="#routine" class="toc-link">Routine Guide</a>
      <a href="#safety" class="toc-link">Safety & Precautions</a>
      <a href="#faq" class="toc-link">FAQ</a>
    </div>
  </nav>

  <!-- DARK HERO SECTION -->
  <section class="dark-hero">
    <div class="hero-container">
      <div>
        <div class="hero-badge">
          <span style="display:inline-block; width:6px; height:6px; background:#FF8B42; border-radius:50%;"></span>
          2026 CLINICAL DERM GUIDE
        </div>
        <h1 class="hero-title">{p['h1']}</h1>
        <p class="hero-subtitle">{p['subtitle']}</p>
        
        <div class="hero-meta-list">
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <span>Reviewed by <strong>Dr. Lipy Mehta</strong></span>
          </div>
          <div class="hero-meta-item">
            <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <span>Updated Aug 2026</span>
          </div>
        </div>

        <a href="https://mymirror.fit/scan" class="perimeter-cta">
          <span>Start Free AI Face Scan</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <div class="hero-image-card">
        <img src="{p['hero_img']}" alt="{p['hero_alt']}">
        <div class="hero-image-tag">
          <span>Clinical Product Benchmark</span>
          <span class="hero-tag-accent">Derm Grade A+</span>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN CONTENT CONTAINER -->
  <main class="main-container">
    <article class="article-content">
{p['content_html']}

      <!-- BENTO BOX CTA -->
      <div style="background: linear-gradient(135deg, #121619 0%, #1E2328 100%); color: #FFFFFF; padding: 2rem; border-radius: var(--radius-lg); margin: 3rem 0; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
        <h3 style="color: #FFFFFF; font-size: 1.5rem; margin-bottom: 0.75rem;">Avoid Wasting Money on the Wrong Actives</h3>
        <p style="color: #94A3B8; margin-bottom: 1.5rem; font-size: 0.95rem;">Unsure if your skin barrier is damaged or what active strength you need? Get instant dermatological clarity with our 3-Layer AI Skin Scan.</p>
        <a href="https://mymirror.fit/scan" class="perimeter-cta">
          <span>Start Free AI Face Scan</span>
        </a>
      </div>

      <!-- FAQ SECTION -->
      <section id="faq" class="section-block" style="margin-top: 3.5rem;">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div class="faq-accordion">
{faq_accordion_str}
        </div>
      </section>

      <!-- RELATED GUIDES -->
      <section class="section-block" style="margin-top: 3.5rem;">
        <h2>Related Skincare & Acne Guides</h2>
        <div class="bento-grid">
          <a href="/acne/glycolic-acid-toner-for-acne-india/" class="bento-card" style="text-decoration: none;">
            <h4 style="font-size: 1.05rem; color: #0F172A; margin-bottom: 0.5rem;">Glycolic Acid Toner Guide</h4>
            <p style="font-size: 0.85rem; color: #64748B;">Complete guide on AHA exfoliation for dark spots and texture.</p>
          </a>
          <a href="/acne/face-map/" class="bento-card" style="text-decoration: none;">
            <h4 style="font-size: 1.05rem; color: #0F172A; margin-bottom: 0.5rem;">Acne Face Mapping Guide</h4>
            <p style="font-size: 0.85rem; color: #64748B;">Understand what pimples on your forehead and chin mean.</p>
          </a>
        </div>
      </section>

      <!-- BOTTOM BANNER -->
      <div style="background: linear-gradient(135deg, #121619 0%, #1E2328 100%); color: #FFFFFF; padding: 2.5rem; border-radius: var(--radius-lg); margin-top: 4rem; text-align: center;">
        <h3 style="color: #FFFFFF; font-size: 1.6rem; margin-bottom: 0.75rem;">Ready to Clear Your Acne for Good?</h3>
        <p style="color: #94A3B8; margin-bottom: 1.5rem;">Join over 100,000 users who cleared their skin using AI-driven root cause analysis.</p>
        <a href="https://mymirror.fit/scan" class="perimeter-cta">
          <span>Start Free AI Face Scan</span>
        </a>
      </div>
    </article>

    <!-- DESKTOP SIDEBAR -->
    <aside class="desktop-sidebar">
      <div style="position: sticky; top: 120px; background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
        <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem;">Instant 3D AI Skin Analysis</h3>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.25rem;">Scan your skin in 60 seconds with our clinical 3-Layer AI scanner.</p>
        <a href="https://mymirror.fit/scan" class="perimeter-cta" style="width: 100%; box-sizing: border-box; font-size: 0.9rem; padding: 12px 20px;">
          <span>Start Free AI Scan</span>
        </a>
      </div>
    </aside>
  </main>

  <!-- STICKY BOTTOM MOBILE CTA BAR -->
  <div class="sticky-bottom-bar">
    <div class="mobile-bar-text">
      <strong>Not sure which product to pick?</strong>
      <span>Analyze acne with 3-Layer AI</span>
    </div>
    <a href="https://mymirror.fit/scan" class="mobile-bar-btn">
      Scan Face Now
    </a>
  </div>

  <!-- FOOTER -->
  <footer class="site-footer">
    <p>&copy; 2026 MyMirror fit. All rights reserved. Medically reviewed content for educational purposes.</p>
    <p style="margin-top: 0.5rem;">
      <a href="/privacy">Privacy Policy</a> | 
      <a href="/terms">Terms of Service</a> | 
      <a href="/contact">Contact Derm Team</a>
    </p>
  </footer>

  <script>
    // Simple Accordion Toggle logic
    document.querySelectorAll('.faq-header').forEach(btn => {{
      btn.addEventListener('click', function() {{
        const item = this.parentElement;
        item.classList.toggle('active');
        const icon = this.querySelector('.faq-icon');
        if (icon) {{
          icon.textContent = item.classList.contains('active') ? '-' : '+';
        }}
      }});
    }});

    // TOC Active State on Scroll
    const sections = document.querySelectorAll('.section-block');
    const navLinks = document.querySelectorAll('.toc-link');

    window.addEventListener('scroll', () => {{
      let current = '';
      sections.forEach(section => {{
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {{
          current = section.getAttribute('id');
        }}
      }});
      navLinks.forEach(link => {{
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {{
          link.classList.add('active');
        }}
      }});
    }});
  </script>
</body>
</html>"""
    return html

for p in pages:
    dir_path = os.path.join("/Users/tm030/acne", p["slug"])
    os.makedirs(dir_path, exist_ok=True)
    file_path = os.path.join(dir_path, "index.html")
    full_html = generate_full_html(p)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"Generated page: {file_path}")
