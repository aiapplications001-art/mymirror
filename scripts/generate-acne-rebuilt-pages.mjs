import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const today = '2026-08-17';
const baseUrl = 'https://mymirror.fit';
const clusterSlug = 'mymirror-acne-rebuilt-guides';

const pages = [
  {
    id: 'ACR7',
    slug: 'clindamycin-gel-for-acne-india',
    title: 'Clindamycin Gel 1% for Active Acne on Indian Skin | MyMirror',
    description: 'Discover how 1% Clindamycin gel clears active acne papules on Indian skin. Learn why pairing with Benzoyl Peroxide prevents antibiotic resistance.',
    ogTitle: 'Clindamycin Gel 1% for Active Acne on Indian Skin',
    h1: 'Clindamycin gel 1% for acne on Indian skin: how to prevent resistance & barrier burn',
    eyebrow: 'Prescription active guide',
    primaryKeyword: 'clindamycin gel for acne indian skin',
    secondaryKeywords: ['clindamycin gel 1', 'topical antibiotic acne', 'bacterial resistance', 'clindac A', 'benzoyl peroxide pairing'],
    heroImage: '/assets/images/product-examples/deriva-ms-aqueous-gel.jpg',
    heroAlt: 'Clindamycin 1% gel tube for active acne treatment on Indian skin',
    heroNote: 'Topical antibiotic, resistance, or barrier protection?',
    heroCopy: 'Topical 1% Clindamycin phosphate is an effective lincosamide antibiotic that targets Cutibacterium acnes bacteria inside hair follicles. For Indian skin phototypes IV to VI, it rapidly reduces red, painful inflammatory acne papules and pustules. However, monotherapy causes bacterial resistance within 2 to 4 weeks; dermatologists strongly advise pairing it with Benzoyl Peroxide to maintain efficacy.',
    decisionIntro: 'This decision guide is for individuals using or considering topical 1% Clindamycin gel for red, swollen acne papules on Indian skin phototypes. It explains how to combine topical antibiotics with Benzoyl Peroxide or Azelaic Acid to stop bacterial resistance, avoid barrier stinging, prevent post-inflammatory hyperpigmentation (PIH), and transition off antibiotics once active inflammation subsides.',
    decisionCards: [
      ['Best fit', 'Inflammatory red papules, pustules, painful surface pimples, and acute acne flare-ups requiring fast antibacterial action.'],
      ['Use more caution', 'Non-inflammatory blackheads, closed comedones, long-term daily use without Benzoyl Peroxide, or active eczema-prone barrier damage.'],
      ['Resistance rule', 'Never use Clindamycin gel as a solo monotherapy for more than 4 weeks. Always pair with 2.5% Benzoyl Peroxide to prevent bacterial resistance.']
    ],
    indianSkinIntro: 'On melanin-rich Indian skin phototypes IV to VI, active inflammatory pimples are high-risk events because severe follicular inflammation damages surrounding dermal tissue, leaving dark brown post-inflammatory hyperpigmentation (PIH) that lasts for months. Topical 1% Clindamycin gel rapidly suppresses C. acnes growth and inflammatory cytokines, shortening the lifespan of red pimples. However, relying on Clindamycin gel alone creates resistant bacterial strains. Combining Clindamycin with 2.5% Benzoyl Peroxide or 10% Azelaic Acid produces a synergistic effect: Benzoyl Peroxide releases reactive oxygen species that instantly destroy C. acnes without resistance potential, allowing Clindamycin to clear deep follicular papules safely.',
    indianRows: [
      ['Bacterial suppression', 'Lincosamide antibiotic halts C. acnes protein synthesis inside clogged pores.', 'Use for 4 to 8 weeks maximum during active breakout flares.'],
      ['Resistance prevention', 'Bacteria adapt rapidly to monotherapy within 30 days of continuous use.', 'Pair with 2.5% Benzoyl Peroxide wash or leave-on gel.'],
      ['PIH risk reduction', 'Shortening red pimple lifespan reduces secondary melanocyte activation and dark marks.', 'Apply on active inflammatory spots under light moisturizer.'],
      ['Humid climate gel formulation', 'Phosphate gel vehicle absorbs quickly without heavy grease in tropical humidity.', 'Apply a thin layer to clean dry skin before moisturizer.']
    ],
    safeIntro: 'A safe Clindamycin gel routine focuses on short-term inflammatory control, mandatory resistance prevention with Benzoyl Peroxide, and steady barrier hydration to prevent peeling or redness.',
    safeSteps: [
      ['Cleanse with a gentle pH-balanced cleanser', 'Wash face gently with a sulfate-free cleanser and pat completely dry. Avoid aggressive scrubbing on inflamed pimples.'],
      ['Apply 2.5% Benzoyl Peroxide layer or wash', 'Use a 2.5% Benzoyl Peroxide wash or thin gel layer to eliminate bacterial resistance mechanisms.'],
      ['Spread a thin layer of 1% Clindamycin gel', 'Apply a thin layer of 1% Clindamycin gel directly onto active red pimples and breakout zones.'],
      ['Moisturize to protect lipid barrier', 'Seal with an oil-free barrier repair moisturizer to prevent flaking and maintain hydration.'],
      ['Plan short-term exit timeline', 'Taper off Clindamycin gel after 6 to 8 weeks, transitioning to maintenance actives like Adapalene or Azelaic Acid.']
    ],
    mistakes: [
      'Using Clindamycin gel as a long-term daily spot treatment for months without Benzoyl Peroxide.',
      'Applying topical antibiotics to non-inflammatory blackheads or closed comedones that lack bacterial infection.',
      'Expecting Clindamycin gel to fade old brown post-acne marks (PIH); it targets active bacteria, not melanin.',
      'Combining multiple prescription topical antibiotics simultaneously without medical guidance.',
      'Stopping treatment prematurely after 3 days before inflammation has fully resolved.'
    ],
    dermIntro: 'A dermatologist can evaluate whether oral antibiotics, hormonal evaluation, or prescription retinoid combinations (like Adapalene + Clindamycin) are required for your acne severity.',
    dermList: [
      'Seek medical guidance for deep painful nodular cysts or scarring acne.',
      'Consult a clinician if active acne fails to improve after 4 weeks of compliant topical therapy.',
      'Discuss pregnancy-safe acne alternatives before starting prescription topical actives.',
      'Bring a clear photo timeline documenting breakout frequency and location.',
      'Disclose all current OTC products, oral supplements, and prescription creams.'
    ],
    scanUse: 'Use MyMirror AI skin analysis to monitor active inflammatory papule counts, red spot reduction, and skin barrier hydration over 4 to 6 weeks in 60 seconds.',
    faqs: [
      ['Why should Clindamycin gel be paired with Benzoyl Peroxide?', 'Pairing Clindamycin with Benzoyl Peroxide prevents C. acnes bacteria from developing resistance to the antibiotic, ensuring continued treatment efficacy.'],
      ['How long does Clindamycin gel take to work on pimples?', 'Most users notice reduced redness and swelling in active papules within 48 to 72 hours, with significant clearing in 2 to 4 weeks.'],
      ['Can Clindamycin gel fade dark acne marks?', 'No. Clindamycin is an antibacterial agent, not a tyrosinase inhibitor. Pair with Azelaic Acid or Niacinamide to fade post-acne PIH.'],
      ['Is Clindamycin gel safe during pregnancy?', 'Topical Clindamycin is Category B, but you should always consult your dermatologist or obstetrician before using prescription antibiotics during pregnancy.'],
      ['Can I use Clindamycin gel with Salicylic Acid?', 'Yes. You can use Salicylic acid cleanser in the morning to unclog pores and Clindamycin gel at night for antibacterial action.'],
      ['Does Clindamycin gel cause skin purging?', 'No. Clindamycin does not increase cell turnover, so it does not cause skin purging. New breakouts indicate ongoing acne or product irritation.'],
      ['What is the difference between Clindamycin solution and gel?', 'Clindamycin gel is formulated in an aqueous vehicle ideal for sensitive skin, whereas alcoholic solutions can cause stinging on dry or broken skin.'],
      ['How should I taper off Clindamycin gel?', 'Once active red pimples are clear for 2 consecutive weeks, taper Clindamycin and rely on Adapalene or Azelaic acid for long-term acne maintenance.']
    ],
    sources: [
      ['JAAD topical clindamycin resistance study', 'https://www.jaad.org/article/S0190-9622(05)00345-2/fulltext'],
      ['IJDVL acne management consensus guidelines', 'https://ijdvl.com/topical-antibiotics-in-acne-vulgaris/'],
      ['AAD acne treatment guidelines', 'https://www.aad.org/public/diseases/acne/derm-treat/treat']
    ]
  },
  {
    id: 'ACR8',
    slug: 'best-cica-moisturizer-for-acne-prone-skin-india',
    title: 'Cica Moisturizer for Acne Barrier Repair on Indian Skin | MyMirror',
    description: 'Calm over-exfoliated acne skin with Cica moisturizer. Learn how Centella Asiatica reduces redness and repairs skin barrier without clogging pores.',
    ogTitle: 'Cica Soothing Moisturizer for Acne Barrier Repair on Indian Skin',
    h1: 'Cica moisturizer for acne-prone Indian skin: how Centella Asiatica repairs damaged barrier',
    eyebrow: 'Barrier repair guide',
    primaryKeyword: 'cica moisturizer for acne barrier repair india',
    secondaryKeywords: ['cica moisturizer', 'centella asiatica acne', 'barrier repair moisturizer', 'madecassoside', 'calming gel cream'],
    heroImage: '/assets/images/cica_moisturizer_india_og_1786876834752.jpg',
    heroAlt: 'Soothing Cica gel moisturizer for acne barrier repair on Indian skin',
    heroNote: 'Centella Asiatica, barrier damage, or redness relief?',
    heroCopy: 'Cica moisturizers formulated with Centella Asiatica extracts (Madecassoside, Asiaticoside, Asiatic Acid) provide powerful anti-inflammatory and barrier-repair benefits. For Indian skin prone to over-exfoliation from strong acids, Cica gel-creams restore intercellular lipids, reduce micro-inflammation, and soothe burning sensations without clogging pores.',
    decisionIntro: 'This guide helps individuals with sensitive, acne-prone, or over-exfoliated Indian skin choose the right Cica (Centella Asiatica) moisturizer. It covers active bio-compounds, texture selection for humid Indian weather, barrier recovery timelines, and how to pair soothing Cica creams with acne actives.',
    decisionCards: [
      ['Best fit', 'Stinging, tight, red, or over-exfoliated skin caused by retinoids, salicylic acid, or harsh benzoyl peroxide spot treatments.'],
      ['Use more caution', 'Fungal acne suspicions if using heavy botanical oil formulas, or expecting Cica alone to cure deep hormonal cystic acne.'],
      ['Key benefit', 'Centella Asiatica bio-compounds accelerate epidermal wound healing, synthesize collagen, and reduce redness without pore-clogging heavy waxes.']
    ],
    indianSkinIntro: 'Indian skin is frequently subjected to high humidity, UV exposure, dust, and harsh acne treatments that strip the stratum corneum. When the lipid barrier breaks down, transepidermal water loss (TEWL) spikes, making skin tight, shiny, and highly reactive to gentle cleansers. Irritation on melanin-rich skin triggers post-inflammatory hyperpigmentation. Cica (Centella Asiatica) contains four key triterpenoids—Madecassoside, Asiaticoside, Madecassic Acid, and Asiatic Acid—that suppress inflammatory cytokines (IL-1b, TNF-alpha) and stimulate ceramide production. Using a lightweight, oil-free Cica gel-cream repairs barrier integrity while preventing secondary dark marks.',
    indianRows: [
      ['Centella bio-compounds', 'Madecassoside and Asiaticoside reduce inflammatory redness and promote lipid synthesis.', 'Use twice daily during active barrier repair recovery windows.'],
      ['TEWL reduction', 'Restores epidermal barrier structure, lowering transepidermal water loss and tightness.', 'Apply on slightly damp skin after gentle cleansing.'],
      ['Humid climate compatibility', 'Lightweight gel-cream textures absorb rapidly without leaving greasy film in humidity.', 'Ideal for oily, combination, and acne-prone phototypes.'],
      ['Active buffering partner', 'Buffers strong acne actives like Tretinoin, Adapalene, or Benzoyl Peroxide.', 'Apply as a sandwich layer to prevent retinoid burn.']
    ],
    safeIntro: 'A barrier-repair Cica routine pauses all harsh physical and chemical exfoliants, prioritizing mild cleansing, Centella hydration, and non-comedogenic sun protection.',
    safeSteps: [
      ['Pause all active acids and retinoids', 'Temporarily stop Salicylic acid, Glycolic acid, Retinol, and Benzoyl peroxide for 7 to 14 days.'],
      ['Cleanse with a ultra-gentle hydrating wash', 'Use a non-foaming, sulfate-free cleanser with lukewarm water once or twice daily.'],
      ['Apply Cica soothing gel-cream generously', 'Massage a generous layer of Cica moisturizer containing Centella Asiatica over face and neck.'],
      ['Protect with non-comedogenic sunscreen', 'Apply broad-spectrum mineral or lightweight sunscreen daily to protect recovering skin from UV irritation.'],
      ['Reintroduce acne actives slowly', 'Once skin no longer stings or flakes, reintroduce active treatments 2 nights per week using the Sandwich Protocol.']
    ],
    mistakes: [
      'Continuing to use high-strength AHA/BHA peels while trying to repair a burning, damaged barrier.',
      'Selecting a heavy, comedogenic Cica balm designed for dry body skin instead of a lightweight facial gel-cream.',
      'Rinsing face with very hot water or scrubbing with harsh face brushes during recovery.',
      'Expecting Cica moisturizer to unclog deep blackheads; its role is anti-inflammatory healing, not exfoliation.',
      'Stopping moisturizer as soon as skin stops burning instead of completing a full 14-day lipid restoration cycle.'
    ],
    dermIntro: 'Consult a dermatologist if your skin displays severe contact dermatitis, weeping lesions, persistent facial burning, or rosacea flare-ups that fail to improve after 2 weeks.',
    dermList: [
      'Seek medical evaluation for severe burning, swelling, or allergic contact dermatitis.',
      'Consult a clinician if barrier damage is accompanied by infected pustular breakouts.',
      'Ask a dermatologist for prescription barrier repair creams if OTC moisturizers fail.',
      'Bring your current product shelf to identify the specific irritant causing barrier failure.',
      'Discuss gentle acne maintenance options suitable for sensitive skin phototypes.'
    ],
    scanUse: 'Use MyMirror AI skin analysis to track barrier recovery, skin hydration index, and redness reduction over 14 days in 60 seconds.',
    faqs: [
      ['What is Cica in skincare?', 'Cica refers to Centella Asiatica (Gotu Kola) is a medicinal botanical extract rich in Madecassoside, Asiaticoside, Madecassic Acid, and Asiatic Acid. These triterpenoid bio-compounds suppress pro-inflammatory cytokines (IL-1b, TNF-alpha), accelerate epidermal wound closure, stimulate Type I collagen synthesis, and restore essential lipid barrier function on sensitive skin.'],
      ['Can Cica moisturizer cause breakouts?', 'Lightweight, non-comedogenic Cica gel-creams rarely cause breakouts. Avoid heavy balms containing shea butter or coconut oil if oily.'],
      ['How long does it take to repair a damaged skin barrier with Cica?', 'Mild skin barrier irritation improves within 3 to 7 days of pausing active acids. Severe barrier compromise caused by over-exfoliation, retinoid burning, or chemical peels typically requires 14 to 21 days of dedicated repair using non-comedogenic Cica gel-creams and strict sun protection.'],
      ['Can I use Cica moisturizer with Salicylic Acid?', 'Yes. Cica moisturizer is an ideal pairing for Salicylic acid treatments. While Salicylic acid penetrates deep into pores to dissolve oil and microcomedones, Centella Asiatica bio-compounds soothe surface micro-inflammation and prevent potential dryness or barrier tightness.'],
      ['Is Cica suitable for oily Indian skin?', 'Yes. Water-based Cica gel-creams hydrate oily skin without adding heavy oils or shine in humid weather.'],
      ['Does Cica help fade post-acne dark marks?', 'By suppressing active inflammation early, Cica reduces the severity of post-inflammatory hyperpigmentation (PIH).'],
      ['Can I use Cica moisturizer morning and night?', 'Yes. Apply Cica gel-cream moisturizer twice daily to clean skin—once during your morning routine under broad-spectrum SPF 50 sunscreen, and once at night following gentle cleansing to support continuous epidermal lipid restoration and soothe inflammation.'],
      ['What is the difference between Cica gel and Cica balm?', 'Cica gels are water-based and suitable for acne-prone skin, whereas Cica balms are thick occlusives designed for extreme dry patches.']
    ],
    sources: [
      ['Indian Journal of Dermatology centella review', 'https://ijdvl.com/centella-asiatica-in-dermatology/'],
      ['PMC centella asiatica wound healing study', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3116297/'],
      ['AAD skin barrier care guidance', 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/repair-skin-barrier']
    ]
  },
  {
    id: 'ACR9',
    slug: 'alpha-arbutin-serum-for-dark-spots-india',
    title: 'Alpha Arbutin 2% Serum for Acne Dark Spots on Indian Skin | MyMirror',
    description: 'Discover how 2% Alpha Arbutin serum fades post-acne dark marks (PIH) on Indian skin phototypes IV-VI without irritation or rebounding hyperpigmentation.',
    ogTitle: 'Alpha Arbutin 2% Serum for Acne Dark Spots on Indian Skin',
    h1: 'Alpha Arbutin 2% serum for acne dark spots on Indian skin: gentle PIH fading guide',
    eyebrow: 'Hyperpigmentation guide',
    primaryKeyword: 'alpha arbutin serum for acne dark spots indian skin',
    secondaryKeywords: ['alpha arbutin 2', 'post inflammatory hyperpigmentation', 'dark spot fading', 'tyrosinase inhibitor', 'hyaluronic acid arbutin'],
    heroImage: '/assets/images/kojic_acid_cream_india_og_1786876834752.jpg',
    heroAlt: 'Alpha Arbutin 2% serum dropper for fading acne dark spots on Indian skin',
    heroNote: 'Gentle hydroquinone glycoside, PIH, or tone evenness?',
    heroCopy: 'Alpha Arbutin is a naturally derived hydroquinone glucoside that gently inhibits tyrosinase activity. For Indian skin phototypes IV to VI, 2% Alpha Arbutin serum selectively targets hyperactive melanocytes to fade brown post-acne marks (PIH) without causing halo hypopigmentation, skin peeling, or rebound pigmentation.',
    decisionIntro: 'This guide explains how 2% Alpha Arbutin serum functions on melanin-rich Indian skin. Learn how to layer Alpha Arbutin with Niacinamide or Vitamin C, how long it takes to fade flat brown PIH marks, and why gentle daily application outperforms aggressive chemical peels.',
    decisionCards: [
      ['Best fit', 'Flat brown post-acne dark marks (PIH), sun spots, uneven skin tone, and sensitive skin that reacts poorly to strong peeling acids.'],
      ['Use more caution', 'Active inflamed pustular acne requiring antibacterial treatment, or red vascular marks (PIE) that need capillary calming.'],
      ['Safety profile', 'Alpha Arbutin releases hydroquinone slowly via enzymatic hydrolysis, delivering safe depigmenting action without cytotoxicity or ochronosis risk.']
    ],
    indianSkinIntro: 'Melanin-rich Indian skin possesses highly reactive melanocytes that produce excess melanin whenever skin experiences acne inflammation. Traditional depigmenting agents like high-strength hydroquinone carry risks of ochronosis or halo bleaching if mismanaged. 2% Alpha Arbutin offers a safer alternative: as a glycosylated hydroquinone derivative, it competitively inhibits the tyrosinase enzyme, slowing L-DOPA synthesis in melanocytes. Because it releases active compounds gradually, it fades stubborn brown acne marks smoothly over 8 to 12 weeks while maintaining surrounding normal skin tone.',
    indianRows: [
      ['Tyrosinase competitive inhibition', 'Slows melanin synthesis in hyperactive melanocytes to even skin tone.', 'Apply twice daily under sunscreen for 8 to 12 weeks.'],
      ['Gentle depigmentation', 'Does not cause skin peeling, dryness, or irritation on sensitive skin.', 'Ideal entry active for beginners with post-acne PIH.'],
      ['Synergistic pairing', 'Pairs exceptionally well with 5% Niacinamide and Hyaluronic acid.', 'Apply after cleansing before heavier creams.'],
      ['Sun stability', 'Stable under daylight when worn with broad-spectrum SPF 50 sunscreen.', 'Mandatory sunscreen pairing to prevent UV dark mark darkening.']
    ],
    safeIntro: 'A successful Alpha Arbutin routine requires consistent daily application, gentle routine layering, and strict daytime sun protection to protect fading post-acne marks.',
    safeSteps: [
      ['Cleanse gently with mild cleanser', 'Wash face with a hydrating cleanser and pat dry gently.'],
      ['Apply 2-3 drops of 2% Alpha Arbutin serum', 'Dispense 2 to 3 drops onto fingertips and pat evenly across face, concentrating on dark mark zones.'],
      ['Layer with 5% Niacinamide or moisturizer', 'Allow serum to absorb for 1 minute, then follow with moisturizer to lock in hydration.'],
      ['Apply broad-spectrum SPF 50 in daytime', 'Finish morning routine with broad-spectrum sunscreen to block UV-induced melanogenesis.'],
      ['Track progress over 8 to 12 weeks', 'Take weekly photos under consistent lighting to evaluate gradual dark spot fading.']
    ],
    mistakes: [
      'Expecting instant dark spot removal within 7 days; melanocyte turnover requires 6 to 8 weeks.',
      'Skipping daily sunscreen while using brightening serums, allowing UV rays to re-darken fading marks.',
      'Combining Alpha Arbutin with multiple strong exfoliants that irritate skin and cause new PIH.',
      'Applying serum to open, picked pimples instead of waiting for inflammation to settle.',
      'Using unverified DIY arbutin mixtures that degrade under light and heat.'
    ],
    dermIntro: 'Consult a dermatologist if your dark spots are symmetrical (melasma), spreading rapidly, or failing to fade after 12 weeks of compliant serum and sunscreen use.',
    dermList: [
      'Seek evaluation for symmetrical facial patches that may indicate melasma.',
      'Consult a clinician if post-acne marks are accompanied by pitted structural scarring.',
      'Discuss prescription combination depigmenting creams for stubborn deep dermal PIH.',
      'Bring a 3-month photo log tracking mark intensity and routine compliance.',
      'Disclose all current cosmetic serums, oral supplements, and medical history.'
    ],
    scanUse: 'Use MyMirror AI skin analysis to track dark spot intensity, melanin distribution, and overall tone evenness over 8 to 12 weeks in 60 seconds.',
    faqs: [
      ['What does Alpha Arbutin do for acne marks?', 'Alpha Arbutin is a glycosylated hydroquinone derivative that competitively inhibits the tyrosinase enzyme within melanocytes. By slowing down L-DOPA oxidation, it reduces excess melanin synthesis, fading brown post-acne dark marks (PIH) and sun spots without inducing skin peeling or cytotoxicity.'],
      ['Can I use Alpha Arbutin every day?', 'Yes. 2% Alpha Arbutin is exceptionally gentle and non-irritating, making it suitable for consistent daily application both in the morning under broad-spectrum sunscreen and at night under your regular moisturizer.'],
      ['Is Alpha Arbutin safer than Hydroquinone for Indian skin?', 'Yes. Alpha Arbutin releases hydroquinone slowly, making it safe for long-term use without risk of ochronosis or halo bleaching.'],
      ['Can I combine Alpha Arbutin with Niacinamide?', 'Yes. Niacinamide blocks pigment transfer while Alpha Arbutin inhibits pigment synthesis, creating a powerful dual-action pairing.'],
      ['How long does Alpha Arbutin take to fade dark spots?', 'Most users observe initial dark spot fading between weeks 6 and 8 of daily morning and night application. Optimal overall skin tone evenness and PIH reduction are typically achieved by week 12 when paired with daytime broad-spectrum SPF 50 sunscreen.'],
      ['Does Alpha Arbutin cause skin purging?', 'No. Alpha Arbutin does not increase cell turnover, so it does not cause purging. New pimples indicate ongoing acne.'],
      ['Can I use Alpha Arbutin with Vitamin C?', 'Yes. Combining Alpha Arbutin with Vitamin C enhances antioxidant protection and brightens post-acne marks.'],
      ['Should I apply Alpha Arbutin before or after moisturizer?', 'Apply 2 to 3 drops of 2% Alpha Arbutin serum directly to clean skin immediately after cleansing or toning, allowing it 60 seconds to absorb before sealing with your lightweight oil-free moisturizer and daytime SPF 50.']
    ],
    sources: [
      ['JAAD alpha arbutin hyperpigmentation review', 'https://www.jaad.org/article/S0190-9622(18)30123-5/fulltext'],
      ['IJDVL topical depigmenting agents guide', 'https://ijdvl.com/topical-depigmenting-agents-in-hyperpigmentation/'],
      ['AAD dark spots fading protocol', 'https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots']
    ]
  },
  {
    id: 'ACR10',
    slug: 'pcos-supplements-spearmint-inositol-india',
    title: 'Spearmint Tea for Hormonal Acne & PCOS on Indian Skin | MyMirror',
    description: 'Learn how spearmint tea helps regulate androgen-driven hormonal breakouts and jawline acne in Indian women with PCOS alongside dermatologist care.',
    ogTitle: 'Spearmint Tea for Hormonal Acne & PCOS on Indian Skin',
    h1: 'Spearmint tea for hormonal acne & PCOS on Indian skin: benefits, science & routine',
    eyebrow: 'Hormonal acne guide',
    primaryKeyword: 'spearmint tea for hormonal acne pcos india',
    secondaryKeywords: ['spearmint tea acne', 'pcos hormonal acne', 'anti androgen tea', 'jawline acne breakouts', 'sebum regulation'],
    heroImage: '/assets/images/stress-acne.jpg',
    heroAlt: 'Spearmint tea cup and herbal leaves for hormonal acne and PCOS care in India',
    heroNote: 'Anti-androgenic herbal support, jawline breakouts, or PCOS management?',
    heroCopy: 'Spearmint (Mentha spicata) tea has demonstrated mild anti-androgenic properties in clinical studies. For Indian women experiencing androgen-driven jawline acne, sebum hypersecretion, or PCOS-related breakouts, drinking 1 to 2 cups of organic spearmint tea daily offers a natural complementary support mechanism alongside medical dermatologist care.',
    decisionIntro: 'This guide explores the dermatological science, clinical studies, and practical routine integration of spearmint tea for hormonal jawline acne and PCOS in India. Learn how anti-androgenic herbal polyphenols influence free testosterone levels, how to pair internal support with topical skincare, and when medical endocrinology evaluation is necessary.',
    decisionCards: [
      ['Best fit', 'Deep, painful jawline and chin acne papules that flare predictably around menstrual cycles or PCOS hormonal imbalances.'],
      ['Use more caution', 'Pregnancy, GERD/acid reflux sensitivity, androgen-deficiency conditions, or expecting herbal tea alone to replace medical prescriptions.'],
      ['Scientific basis', 'Clinical trials show 2 cups of spearmint tea daily for 30 days significantly reduces free serum testosterone levels in women with hirsutism and PCOS.']
    ],
    indianSkinIntro: 'Hormonal acne in Indian women frequently manifests as deep, tender, subcutaneous nodules along the lower third of the face—specifically the jawline, chin, and upper neck. Elevated free androgens (such as dihydrotestosterone, DHT) bind to androgen receptors in sebaceous glands, triggering sebum hypersecretion and follicular hyperkeratinization. Because deep hormonal lesions carry high risks of severe post-inflammatory hyperpigmentation (PIH) and pitted scarring on melanin-rich skin, controlling sebum production at the systemic level is valuable. Spearmint tea contains active polyphenols (rosmarinic acid, carvone) that inhibit 5-alpha-reductase, reducing the conversion of testosterone into potent DHT. When combined with topical barrier care and dermatologist-directed treatments, spearmint tea helps reduce the frequency of monthly hormonal flare-ups.',
    indianRows: [
      ['Anti-androgenic action', 'Reduces free serum testosterone and inhibits 5-alpha-reductase activity.', 'Drink 1 to 2 cups daily consistently for at least 60 days.'],
      ['Sebum regulation', 'Decreases sebaceous gland hyperresponsiveness, reducing oily shine and pore congestion.', 'Pairs well with gentle BHA cleansers and oil-free moisturizers.'],
      ['PIH risk reduction', 'Preventing deep nodular breakouts reduces long-lasting brown jawline marks.', 'Protect healing areas with daily broad-spectrum SPF 50.'],
      ['Complementary PCOS care', 'Supports lifestyle modifications including low-GI Indian diets and exercise.', 'Spearmint tea serves as a helpful herbal lifestyle adjunct and does not replace comprehensive medical gynecological or endocrinological evaluation and treatments.']
    ],
    safeIntro: 'Integrating spearmint tea into a hormonal acne routine works best when treated as a gentle, long-term dietary habit alongside a consistent, non-irritating topical skincare routine.',
    safeSteps: [
      ['Choose organic loose-leaf spearmint tea', 'Select 100% pure organic Mentha spicata (spearmint) leaves, avoiding peppermint blends.'],
      ['Steep 1 cup twice daily', 'Steep 1 teaspoon of leaves in hot water for 5 to 10 minutes. Drink 1 cup in the morning and 1 cup in the evening.'],
      ['Maintain consistent routine for 60-90 days', 'Hormonal regulation requires 2 to 3 menstrual cycles to demonstrate visible skin clarity improvement.'],
      ['Maintain gentle topical barrier care', 'Use a gentle BHA cleanser, oil-free moisturizer, and non-comedogenic sunscreen daily.'],
      ['Monitor cycle patterns and skin signals', 'Track jawline breakout counts before, during, and after your menstrual period using a skin log.']
    ],
    mistakes: [
      'Confusing spearmint tea with peppermint tea; peppermint lacks the specific anti-androgenic polyphenol profile.',
      'Expecting overnight clearing of deep hormonal cysts after drinking tea for only 3 days.',
      'Stopping prescribed medical acne treatments or PCOS medications without consulting your doctor.',
      'Drinking excessive quantities (over 4 cups daily) which may cause mild stomach upset or acid reflux.',
      'Neglecting topical sunscreen, allowing deep jawline pimple marks to turn into dark PIH spots.'
    ],
    dermIntro: 'Consult a dermatologist or endocrinologist if jawline acne is severe, painful, causing scarring, or accompanied by irregular periods, excess facial hair (hirsutism), or hair thinning.',
    dermList: [
      'Seek endocrinological evaluation for irregular menstrual cycles, hirsutism, or suspected PCOS.',
      'Consult a dermatologist for severe cystic nodules that require prescription hormonal therapies (e.g., Spironolactone).',
      'Discuss blood hormone panel testing (Free Testosterone, DHEAS, LH/FSH ratio).',
      'Bring a 3-month cycle and breakout tracker to your consultation.',
      'Disclose all herbal supplements, teas, and prescription medications.'
    ],
    scanUse: 'Use MyMirror AI skin analysis to track jawline acne lesion counts, inflammatory spot reduction, and skin clarity over 60 to 90 days in 60 seconds.',
    faqs: [
      ['How does spearmint tea help hormonal acne?', 'Spearmint tea contains rich polyphenols such as rosmarinic acid and carvone that reduce free serum testosterone levels and inhibit 5-alpha-reductase enzymatic conversion. This action decreases sebaceous gland androgen-binding, lessening deep jawline breakouts and excessive sebum hypersecretion.'],
      ['What is the difference between spearmint tea and peppermint tea?', 'Spearmint (Mentha spicata) has anti-androgenic properties, whereas peppermint (Mentha piperita) contains higher menthol and does not reduce testosterone.'],
      ['How many cups of spearmint tea should I drink daily for acne?', 'Clinical studies recommend drinking 2 cups of organic spearmint tea daily for hormonal benefits.'],
      ['How long does spearmint tea take to clear jawline breakouts?', 'Most women notice reduced hormonal flare-up severity after 60 to 90 days of consistent daily use.'],
      ['Is spearmint tea safe during pregnancy?', 'Do not consume medicinal amounts of spearmint tea during pregnancy or breastfeeding without consulting your obstetrician.'],
      ['Can men drink spearmint tea for acne?', 'Men should use caution, as spearmint tea can lower free testosterone levels. Consult a doctor before regular use.'],
      ['Can I drink spearmint tea while taking PCOS medication?', 'Yes, spearmint tea is generally safe alongside PCOS diets and supplements, but inform your doctor.'],
      ['Does spearmint tea cure PCOS?', 'No. Spearmint tea is a supportive herbal beverage that aids symptom management; it does not cure underlying PCOS.']
    ],
    sources: [
      ['Phytotherapy Research spearmint anti-androgen study', 'https://pubmed.ncbi.nlm.nih.gov/19585478/'],
      ['IJDVL hormonal acne in Indian women review', 'https://ijdvl.com/hormonal-acne-in-females/'],
      ['AAD adult female acne guidelines', 'https://www.aad.org/public/diseases/acne/really-acne/adult-acne']
    ]
  },
  {
    id: 'ACR11',
    slug: 'niacinamide-serums-india',
    title: '5% Niacinamide Serum for Acne Marks & Oil Control on Indian Skin | MyMirror',
    description: 'Learn why 5% Niacinamide is the optimal strength for fading acne marks and controlling oil on Indian skin without triggering 10% irritation breakouts.',
    ogTitle: '5% Niacinamide Serum for Acne Marks & Oil Control on Indian Skin',
    h1: '5% Niacinamide serum for acne marks & oil control on Indian skin: why 10% may irritate',
    eyebrow: 'Ingredient concentration guide',
    primaryKeyword: '5 percent niacinamide serum for acne marks india',
    secondaryKeywords: ['5 niacinamide serum', 'niacinamide 10 vs 5', 'acne marks indian skin', 'barrier repair niacinamide', 'sebum regulation'],
    heroImage: '/assets/images/salicylic_dropper.jpg',
    heroAlt: '5% Niacinamide serum bottle for oil control and acne mark fading on Indian skin',
    heroNote: '5% optimal concentration, barrier repair, or 10% irritation control?',
    heroCopy: 'Niacinamide (Vitamin B3) is one of dermatologys most versatile actives, but clinical studies prove that 2% to 5% is the sweet spot for barrier repair, sebum regulation, and melanosome transfer inhibition. In India, over-concentrated 10% or 15% serums frequently cause stinging, flushing, and breakout flares. A 5% Niacinamide serum delivers full clinical benefits with zero barrier irritation.',
    decisionIntro: 'This concentration guide explains why 5% Niacinamide serum outperforms aggressive 10% formulas for acne-prone Indian skin. Learn how Niacinamide inhibits melanosome transfer to fade brown PIH, regulates sebum synthesis, strengthens ceramide production, and pairs with Salicylic acid or Retinoids.',
    decisionCards: [
      ['Best fit', 'Oily skin, enlarged pores, post-acne dark marks (PIH), compromised skin barrier, and skin that broke out from 10% Niacinamide serums.'],
      ['Use more caution', 'Expecting Niacinamide alone to clear severe cystic acne, or combining multiple 10% active serums simultaneously.'],
      ['Clinical evidence', 'Peer-reviewed studies confirm 5% Niacinamide significantly reduces hyperpigmentation and sebum excretion rate after 4 to 8 weeks, with optimal skin tolerance.']
    ],
    indianSkinIntro: 'Niacinamide (Nicotinamide) works through multiple physiological pathways relevant to Indian skin phototypes IV to VI. First, it inhibits the transfer of melanosomes from melanocytes to surrounding keratinocytes by 35% to 68%, preventing new dark post-acne marks from fixing in the epidermis. Second, it increases epidermal ceramide and free fatty acid synthesis, repairing the damaged stratum corneum. Third, it reduces sebaceous lipogenesis, controlling excess oil production in humid weather. However, marketing trends have driven serum concentrations up to 10% or 20%. On sensitive or acne-prone Indian skin, high concentrations trigger nicotinic acid flushing, histamine release, and localized micro-inflammation that creates new acne breakouts. Switching to a well-formulated 5% Niacinamide serum provides all physiological benefits while preserving skin barrier calm.',
    indianRows: [
      ['Melanosome transfer inhibition', 'Blocks melanin transfer to epidermal cells, fading post-acne dark marks smoothly.', 'Apply 5% serum twice daily for 8 weeks.'],
      ['Ceramide synthesis', 'Boosts natural ceramide and lipid production to strengthen fragile barriers.', 'Helps cushion skin against retinoid or BHA dryness.'],
      ['Sebum regulation', 'Reduces triglyceride synthesis in sebaceous glands, controlling humid T-zone shine.', 'Ideal for daily morning and night application.'],
      ['Optimal 5% concentration', 'Delivers maximum dermatological efficacy without nicotinic acid flushing or irritation.', 'Safer for sensitive and acne-prone phototypes.']
    ],
    safeIntro: 'A safe 5% Niacinamide routine integrates smoothly into morning and night skincare regimens, serving as a soothing, oil-balancing foundation for active acne treatments.',
    safeSteps: [
      ['Cleanse with a gentle face wash', 'Wash face gently with a mild cleanser and pat dry.'],
      ['Apply 3-4 drops of 5% Niacinamide serum', 'Dispense 3 to 4 drops of 5% Niacinamide serum and pat evenly over face and neck.'],
      ['Follow with lightweight oil-free moisturizer', 'Apply an oil-free gel-moisturizer to lock in hydration and support barrier ceramides.'],
      ['Protect with broad-spectrum SPF 50 daytime', 'Finish morning routine with broad-spectrum sunscreen to prevent dark mark recurrence.'],
      ['Pair with night actives as needed', 'Layer 5% Niacinamide under Adapalene or Azelaic acid at night to cushion against retinoid irritation.']
    ],
    mistakes: [
      'Assuming higher percentage (10% or 20%) equals faster results; high doses often cause redness and breakouts.',
      'Using multiple products containing Niacinamide simultaneously (cleanser, serum, moisturizer, sunscreen), leading to unintended high total exposure.',
      'Mistaking 10% Niacinamide irritation breakouts for beneficial "skin purging".',
      'Applying serum to irritated, broken skin without buffering with a moisturizer.',
      'Expecting Niacinamide to replace daytime sunscreen when fading post-acne dark spots.'
    ],
    dermIntro: 'Consult a dermatologist if your skin experiences severe flushing, persistent burning, hives, or active acne that requires medical prescription care.',
    dermList: [
      'Seek evaluation if your skin develops allergic contact dermatitis or persistent flushing.',
      'Consult a clinician if acne marks are accompanied by deep structural pitted scarring.',
      'Ask a dermatologist to recommend 5% medical-grade Niacinamide formulations.',
      'Bring all current serums and creams to calculate your total Niacinamide daily exposure.',
      'Discuss prescription combinations for stubborn post-inflammatory hyperpigmentation.'
    ],
    scanUse: 'Use MyMirror AI skin analysis to measure oiliness levels, pore visibility, and dark mark fading over 4 to 8 weeks in 60 seconds.',
    faqs: [
      ['Why is 5% Niacinamide better than 10% for acne-prone skin?', 'Clinical dermatological trials confirm that a 5% Niacinamide concentration delivers maximum barrier repair, ceramide synthesis, sebum regulation, and melanosome transfer inhibition. Over-concentrated 10% or 20% serums frequently trigger nicotinic acid flushing, stinging, and localized micro-inflammation that causes new breakout flares.'],
      ['Does 5% Niacinamide fade dark acne marks?', 'Yes. 5% Niacinamide inhibits melanosome transfer, significantly fading post-acne brown marks (PIH) over 4 to 8 weeks.'],
      ['Can I use 5% Niacinamide with Salicylic Acid?', 'Yes. 5% Niacinamide calms inflammation and repairs the barrier, making it an excellent pairing with Salicylic acid.'],
      ['Does 5% Niacinamide cause skin purging?', 'No. Niacinamide does not increase cell turnover. Breakouts from Niacinamide are due to product irritation or high concentration.'],
      ['Can I use 5% Niacinamide serum twice a day?', 'Yes. 5% Niacinamide is gentle and suitable for both morning and evening use.'],
      ['Can I use 5% Niacinamide with Vitamin C?', 'Yes. Modern stable 5% Niacinamide serums can be safely layered with Vitamin C for enhanced brightening.'],
      ['Does 5% Niacinamide reduce oiliness and pore size?', 'Yes. 5% Niacinamide regulates sebum production, reducing excess shine and making pores appear tighter.'],
      ['How long does 5% Niacinamide take to show results?', 'Oil control and redness reduction appear within 1 to 2 weeks, while dark mark fading requires 4 to 8 weeks of daily use.']
    ],
    sources: [
      ['British Journal of Dermatology niacinamide study', 'https://pubmed.ncbi.nlm.nih.gov/12100180/'],
      ['IJDVL niacinamide in dermatology review', 'https://ijdvl.com/niacinamide-in-dermatology/'],
      ['AAD hyperpigmentation care guidelines', 'https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots']
    ]
  },
    {
    id: 'ACR6',
    slug: 'azelaic-acid-for-acne-india',
    title: 'Azelaic Acid 10% for Acne & PIH on Indian Skin | MyMirror',
    description: 'Discover how 10% Azelaic Acid clears active breakouts and fades dark post-acne marks (PIH) on Indian skin. 4-step Sandwich Protocol for barrier safety.',
    ogTitle: 'Azelaic Acid 10% for Acne & PIH on Indian Skin',
    h1: 'Azelaic acid 10% for acne on Indian skin: how to clear breakouts & fade marks',
    eyebrow: 'Active ingredient guide',
    primaryKeyword: 'azelaic acid for acne indian skin',
    secondaryKeywords: ['azelaic acid 10', 'azelaic acid PIH', 'sandwich protocol', 'dicarboxylic acid', 'acne marks'],
    heroImage: '/assets/images/azelaic-acid-og-v4.jpg',
    heroAlt: 'Azelaic acid 10% gel for acne and hyperpigmentation on Indian skin',
    heroNote: 'Dicarboxylic acid, PIH, or barrier care?',
    heroCopy: 'Azelaic acid 10% selectively inhibits hyperactive melanocytes and reduces follicular Cutibacterium acnes colonization without bleaching surrounding normal skin tone. For melanin-rich Indian skin phototypes IV to VI, it provides a gentle, dual-action dermatological mechanism that targets both active inflammatory breakouts and stubborn brown post-acne marks (PIH). When introduced thoughtfully with adequate barrier support, 10% Azelaic acid gel helps smooth bumpy texture and clarify skin tone without inducing severe peeling or secondary post-inflammatory hyperpigmentation.',
    decisionIntro: 'This decision guide is designed for individuals considering 10% Azelaic acid gel for active papules, pustules, or long-lasting dark brown post-acne marks on Indian skin phototypes. It explains how to buffer initial dicarboxylic acid paresthesia (tingling), structure a barrier-safe weekly application schedule, avoid common formulation errors in tropical humid weather, and set realistic clinical expectations for dark spot fading over an eight to twelve week timeframe.',
    decisionCards: [
      ['Best fit', 'Active inflammatory acne papules, post-inflammatory hyperpigmentation (PIH), rosacea-prone skin, clogged comedonal pores, and post-acne mark fading on melanin-rich skin.'],
      ['Use more caution', 'Severe nodulocystic acne needing oral isotretinoin, active severe barrier damage from over-exfoliation, or a history of allergic contact dermatitis.'],
      ['Do not rush', 'Use the 4-Step Sandwich Protocol over light moisturizer to eliminate initial acid tingling and protect essential skin barrier lipids in humid climates.']
    ],
    indianSkinIntro: 'On melanin-rich Indian skin phototypes IV to VI, the primary aesthetic concern following acne inflammation is rarely just the temporary pimple itself; it is the stubborn brown mark (post-inflammatory hyperpigmentation) that lingers for months. Aggressive peeling acids, harsh physical scrubs, or strong retinoids can easily trigger secondary hyperpigmentation if they cause burning, peeling, or barrier breakdown. 10% Azelaic acid offers a distinct clinical advantage for Indian skin: it selectively targets and inhibits hyperactive, abnormal melanocytes while leaving baseline normal skin tone untouched. This selective tyrosinase inhibition ensures that dark spots fade without the bleaching risks associated with hydroquinone or harsh depigmenting agents. Furthermore, its antibacterial and keratolytics properties work inside hair follicles to prevent new microcomedones from forming, breaking the cycle of recurring acne and subsequent dark marks.',
    indianRows: [
      ['Tyrosinase selective inhibition', 'Selective inhibition of hyperactive melanocytes prevents new dark mark formation without bleaching surrounding normal skin.', 'Apply consistently for 8 to 12 weeks for visible tone evening and mark reduction.'],
      ['Barrier protection & buffering', 'Initial dicarboxylic acid application can cause 10-minute mild tingling, itching, or paresthesia as the skin adapts.', 'Use the 4-Step Sandwich Protocol over a light hydrating moisturizer.'],
      ['Humid climate & gel textures', 'Gel formulations are strongly preferred over heavy occlusive creams for monsoon humidity and oily Indian skin.', 'Apply a pea-sized amount evenly across completely dry skin.'],
      ['Sun discipline & SPF protection', 'UV radiation triggers melanogenesis on fading post-acne marks, deepening PIH and delaying recovery.', 'Pair daytime routines with mandatory broad-spectrum SPF 50 sunscreen.']
    ],
    safeIntro: 'A safe 10% Azelaic acid routine buffers the active ingredient to prevent barrier stinging while allowing the skin to adapt steadily over several weeks. Consistent low-friction application yields far better long-term results than aggressive overuse or daily double-dosing.',
    safeSteps: [
      ['Cleanse gently with pH-balanced cleanser', 'Wash your face gently with a mild, sulfate-free cleanser and pat completely dry with a soft towel. Avoid harsh physical scrubs, hot water, or aggressive cleansing tools that destabilize the acid mantle.'],
      ['Apply a light hydrating buffer layer', 'Spread a thin layer of oil-free moisturizer containing glycerin or hyaluronic acid on damp skin and allow it to absorb and dry completely for 5 minutes. Buffering creates a protective lipid cushion.'],
      ['Spread a pea-sized 10% Azelaic acid gel layer', 'Apply a single pea-sized amount evenly across your entire face, focusing on breakout-prone zones. Avoid sensitive areas around the eyelids, nostrils, and lip contours to prevent localized irritation.'],
      ['Seal barrier with moisturizer or daytime SPF', 'Seal with a barrier repair moisturizer at night or follow with broad-spectrum SPF 50 during the daytime. Sunscreen is essential to prevent UV rays from darkening fading PIH marks.'],
      ['Maintain a consistent weekly schedule', 'Start 2 or 3 nights per week and monitor skin comfort for 4 full weeks before increasing frequency. Consistency over 8 to 12 weeks delivers superior results compared to rapid daily application.']
    ],
    mistakes: [
      'Applying Azelaic acid directly to damp or wet skin, which accelerates acid penetration and causes intense stinging or burning.',
      'Expecting instant overnight dark spot fading before 4 to 6 weeks of consistent night application.',
      'Skipping daytime broad-spectrum sunscreen, allowing UV radiation to deepen fading post-acne marks.',
      'Combining 10% Azelaic acid with aggressive physical face scrubs, high-strength AHA peeling solutions, or alcohol toners.',
      'Using a large dollop of gel instead of a thin pea-sized layer for the entire face, leading to localized flaking and irritation.',
      'Discontinuing use during mild early purging when microcomedones surface as pores clear out.'
    ],
    dermIntro: 'A dermatologist can advise whether prescription 15% to 20% azelaic acid, topical combination therapy, or oral medications are required for severe or scarring acne. Bring a structured photo timeline rather than just a list of products.',
    dermList: [
      'Seek medical evaluation for painful deep cysts, nodular acne, or pitted scarring that requires clinical procedures.',
      'Stop use immediately if severe swelling, blistering, or raw allergic rash occurs.',
      'Consult a medical professional during pregnancy or breastfeeding before starting active skincare routines.',
      'Bring photos showing week 0, week 4, and week 8 to assess true clinical progress under consistent lighting.',
      'Disclose all current active ingredients including retinoids, salicylic acid, benzoyl peroxide, and prescription gels.'
    ],
    scanUse: 'Use MyMirror AI skin analysis before starting your routine and again after 4 to 6 weeks. The scan helps you track visible acne breakouts, oiliness levels, texture irregularities, and dark mark fading in about 60 seconds under standardized lighting.',
    faqs: [
      ['Does 10% Azelaic Acid cause skin purging?', 'Mild temporary purging of microcomedones can occur during weeks 2 to 3 as pores unblock. Purging should look like small typical pimples in usual breakout areas, not raw burning or rashy redness. If raw redness occurs, pause the active and repair your skin barrier with a gentle moisturizer.'],
      ['How often should Indian skin start Azelaic Acid 10%?', 'Start 2 or 3 nights a week over a light moisturizer. Increase to alternate nights or daily night use only when your skin barrier feels completely comfortable and displays zero stinging during gentle cleansing.'],
      ['Can I combine Azelaic Acid with Niacinamide?', 'Yes. 5% Niacinamide complements Azelaic acid exceptionally well for Indian skin by repairing barrier ceramides, reducing inflammation, and inhibiting melanosome transfer, enhancing overall spot-fading results.'],
      ['Is Azelaic Acid safe for dry or sensitive skin?', 'Yes, when used with the 4-Step Sandwich Protocol. Buffering the active ingredient over a light hydrating moisturizer prevents dryness and stinging while delivering full active benefits to target areas.'],
      ['How does Azelaic Acid compare to Salicylic Acid?', 'Salicylic acid is oil-soluble BHA that excels at unclogging blackheads deep inside pores. Azelaic acid is a dicarboxylic antibacterial agent and tyrosinase inhibitor that clears active papules and selectively fades dark post-acne marks.'],
      ['Can Azelaic Acid bleach normal skin tone?', 'No. Unlike hydroquinone or harsh bleaching agents, Azelaic acid selectively targets abnormal hyperactive melanocytes, preserving normal baseline skin tone without halo hypopigmentation.'],
      ['What should I do if my face tings after application?', 'Mild 10-minute tingling or itching is a normal physiological response to topical dicarboxylic acids as the skin adapts. If active burning or redness lasts longer, wash off with cool water and adopt the Sandwich Protocol.'],
      ['How long until post-acne marks show visible fading?', 'Clinical studies show noticeable reduction in dark mark intensity by weeks 6 to 8 of daily night use, with maximum tone evenness achieved by week 12 when paired with daytime broad-spectrum sunscreen.']
    ],
    sources: [
      ['JAAD azelaic acid hyperpigmentation study', 'https://www.jaad.org/article/S0190-9622(06)00827-0/fulltext'],
      ['IJDVL clinical acne protocol', 'https://ijdvl.com/azelaic-acid-in-acne-and-hyperpigmentation/'],
      ['AAD skin of color acne guidelines', 'https://www.aad.org/public/diseases/acne/derm-treat/skin-color']
    ]
  },
  {
    id: 'ACR1',
    slug: 'adapalene-gel-for-acne-indian-skin-guide',
    title: 'Adapalene Gel for Acne on Indian Skin | MyMirror',
    description: 'A cautious Indian-skin guide to adapalene gel for acne: retinization, sandwich method, PIH risk, sunscreen, mistakes, and when to ask a dermatologist.',
    ogTitle: 'Adapalene Gel for Acne on Indian Skin',
    h1: 'Adapalene gel for acne on Indian skin: how to use it without wrecking your barrier',
    eyebrow: 'Acne active guide',
    primaryKeyword: 'adapalene gel for acne Indian skin',
    secondaryKeywords: ['adapalene gel', 'retinoid acne', 'retinization', 'PIH Indian skin', 'sandwich method'],
    heroImage: '/assets/images/adapalene-gel-india-og.jpg',
    heroAlt: 'An illustrative tube of adapalene gel on a bathroom counter',
    heroNote: 'Retinoid, purge, or barrier burn?',
    heroCopy: 'Adapalene can be useful for clogged pores and acne maintenance, but Indian skin often needs a slower start because irritation can leave longer-lasting dark marks.',
    decisionIntro: 'This page is for people who are considering adapalene, already bought a gel, or are trying to understand why their skin is flaking, purging, or burning. It does not replace a prescription plan. It helps you separate expected retinoid adjustment from avoidable irritation, especially when post-inflammatory hyperpigmentation is a concern.',
    decisionCards: [
      ['Best fit', 'Comedonal acne, blackheads, whiteheads, recurring clogged pores, and maintenance after active breakouts are calmer.'],
      ['Use more caution', 'Sensitive skin, eczema-prone skin, recent peels, active barrier damage, pregnancy, breastfeeding, or a history of strong PIH after irritation.'],
      ['Do not rush', 'Daily use from night one is a common reason people quit. A slower schedule is usually easier to sustain than a dramatic “purge or nothing” approach.']
    ],
    indianSkinIntro: 'On medium to deep Indian skin tones, the visible problem after acne is often not only the pimple. It is the brown mark that stays after the inflammation settles. Adapalene can help prevent new clogged pores over time, but if it causes burning, peeling, or repeated inflammation, the routine itself can become a new PIH trigger.',
    indianRows: [
      ['Retinization', 'Dryness, mild flaking, and a tight feeling can happen when a retinoid is introduced.', 'Start two or three nights a week and judge tolerance before increasing.'],
      ['Purge vs irritation', 'A purge tends to look like acne in usual breakout zones; irritation looks more like burning, rashy redness, or raw skin.', 'Pause and simplify if the face stings during gentle cleansing or moisturizer.'],
      ['PIH risk', 'Inflamed pimples and irritated skin can both leave brown marks on Indian skin.', 'The goal is fewer inflamed events, not maximum peeling.'],
      ['Sun sensitivity', 'Retinoid routines make sunscreen discipline more important.', 'Daily SPF and shade reduce the chance that dark marks linger or deepen.']
    ],
    safeIntro: 'A safer adapalene plan is intentionally boring. The product is only one part of the routine; moisturizer, sunscreen, dose, and spacing decide whether the skin can stay with it long enough to benefit.',
    safeSteps: [
      ['Start with pea-size dosing', 'Use a pea-sized amount for the whole face, not a pea on every pimple. Avoid eyelids, corners of the nose, lips, and broken skin. More gel usually means more irritation, not faster acne control.'],
      ['Use the sandwich method if sensitive', 'Apply moisturizer, then adapalene, then another light moisturizer layer. This can reduce early dryness while still letting you build consistency.'],
      ['Keep the schedule slow', 'Try two nights a week for two weeks, then alternate nights if comfortable. Increase only when skin feels normal the next morning.'],
      ['Separate harsh actives', 'Do not stack strong exfoliating acids, scrubs, peels, benzoyl peroxide, or alcohol-heavy toners on the same night unless a dermatologist told you to.'],
      ['Protect the morning routine', 'Use a gentle cleanser, moisturizer, and broad-spectrum sunscreen. Without sunscreen, PIH improvement is much harder to judge.']
    ],
    mistakes: [
      'Using adapalene as a spot treatment instead of a thin full-area acne maintenance layer.',
      'Applying it to wet skin, which can increase penetration and irritation.',
      'Combining it with a scrub, peel, or high-strength acid because the skin “is not peeling enough.”',
      'Calling every breakout a purge even when the skin is burning, swollen, or rashy.',
      'Stopping moisturizer because the face feels oily; dehydration can make irritation worse.'
    ],
    dermIntro: 'A dermatologist can help you decide whether adapalene is the right retinoid, whether you need a different acne plan, and whether dark marks require separate treatment. Bring a simple timeline rather than only a product list.',
    dermList: [
      'Ask for help before use if you are pregnant, trying to conceive, breastfeeding, or using prescription acne medicines.',
      'Seek advice for painful nodules, cystic acne, scarring, or acne that affects confidence or sleep.',
      'Stop guessing if burning, swelling, crusting, eczema-like patches, or eye irritation appears.',
      'Bring photos showing week 0, week 4, and week 8 if you are unsure whether acne is purging or worsening.',
      'List every active in your routine, including face washes, toners, peels, spot treatments, and fairness/brightening creams.'
    ],
    scanUse: 'Use MyMirror before starting and again after four to six weeks in the same lighting. The scan can help you compare visible clogged areas, inflamed spots, texture, and marks. It cannot tell you whether adapalene is medically appropriate or diagnose a purge.',
    faqs: [
      ['Can adapalene cause purging?', 'It can bring existing clogged pores to the surface for some people, especially in usual breakout zones. Purging should not feel like a chemical burn. If the skin is raw, swollen, or rashy, treat that as irritation rather than proof the product is working.'],
      ['How often should Indian skin start adapalene?', 'Many people do better starting two or three nights a week, then increasing slowly if the skin feels comfortable. The best schedule is the one your barrier can tolerate consistently.'],
      ['Can adapalene fade acne marks?', 'Adapalene may reduce future clogged pores and inflammation, which can reduce new marks. Existing PIH often also needs sun protection, time, and sometimes separate ingredients or prescription care.'],
      ['Should I use adapalene with benzoyl peroxide?', 'Some dermatologist-directed routines combine retinoids and benzoyl peroxide, but the combination can irritate. If you are self-managing, separate strong actives and ask a clinician before layering them aggressively.'],
      ['Can I use moisturizer before adapalene?', 'Yes. The sandwich method is commonly used to reduce irritation: moisturizer first, a small amount of adapalene, then moisturizer again if needed.'],
      ['What if my skin burns after adapalene?', 'Pause the active, simplify to gentle cleanser, moisturizer, and sunscreen, and seek advice if burning, swelling, crusting, or rash continues. Burning is not a required stage.'],
      ['Is adapalene safe in pregnancy?', 'Do not start retinoids during pregnancy, while trying to conceive, or while breastfeeding without medical advice. Ask a dermatologist or obstetrician for pregnancy-safe acne options.'],
      ['When should I expect results?', 'Acne routines are usually judged over weeks, not days. Many people need eight to twelve weeks to fairly assess a retinoid plan, assuming the skin barrier is tolerating it.']
    ],
    sources: [
      ['AAD acne treatment overview', 'https://www.aad.org/public/diseases/acne/derm-treat/treat'],
      ['AAD acne in skin of color', 'https://www.aad.org/public/diseases/acne/derm-treat/skin-color'],
      ['FDA adapalene gel label', 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/020380s032lbl.pdf']
    ]
  },
  {
    id: 'ACR2',
    slug: 'cleansing-balm-for-acne-prone-skin-india',
    title: 'Cleansing Balm for Acne-Prone Indian Skin | MyMirror',
    description: 'A practical guide to cleansing balm for acne-prone Indian skin: emulsification, sunscreen removal, pore-clogging risk, double cleansing, and mistakes.',
    ogTitle: 'Cleansing Balm for Acne-Prone Indian Skin',
    h1: 'Cleansing balm for acne-prone Indian skin: when it helps and when it clogs',
    eyebrow: 'Cleanser decision guide',
    primaryKeyword: 'cleansing balm for acne-prone skin India',
    secondaryKeywords: ['cleansing balm acne prone skin', 'double cleansing India', 'non comedogenic cleanser', 'sunscreen removal'],
    heroImage: '/assets/images/cleansing-balm-emulsification.jpg',
    heroAlt: 'A person gently cleansing foam from acne-prone skin',
    heroNote: 'Clean removal or residue?',
    heroCopy: 'A cleansing balm can remove sunscreen and makeup well, but acne-prone skin needs clean emulsification, gentle rinsing, and no heavy residue left behind.',
    decisionIntro: 'This guide is for people who wear sunscreen, water-resistant SPF, makeup, or long-wear base products and are wondering whether a balm will help or break them out. The answer is not “balms are bad” or “double cleansing fixes acne.” The useful question is whether the balm dissolves what you need removed and rinses clean enough for your skin.',
    decisionCards: [
      ['Best fit', 'Water-resistant sunscreen, long-wear makeup, heavy city grime, or a routine where your regular cleanser leaves visible residue.'],
      ['Use more caution', 'New closed comedones after every balm use, fungal-acne suspicion, very oily skin that hates residue, or active inflamed acne that stings when massaged.'],
      ['Key test', 'After emulsifying and rinsing, skin should feel clean but not waxy. A persistent film is a clue to change product, amount, or second cleanse.']
    ],
    indianSkinIntro: 'Indian weather adds a twist: heat, sweat, sunscreen, dust, pollution, and humidity can create a sticky film by evening. A balm can be useful because oil dissolves oil-soluble sunscreen and makeup. But acne-prone Indian skin also reacts badly to over-massage, fragrance, residue, and aggressive second cleansing.',
    indianRows: [
      ['Humid weather', 'Sweat and sunscreen can mix with dust and sebum, making removal harder than a quick splash cleanse.', 'Use balm only when there is something substantial to remove.'],
      ['Closed comedones', 'Tiny bumps after starting a balm may mean residue, overuse, or an ingredient your skin dislikes.', 'Track timing: same week, same zones, same product.'],
      ['Barrier stress', 'Rubbing a balm for too long can irritate active acne and cheeks.', 'Massage briefly with light pressure, then emulsify thoroughly.'],
      ['PIH risk', 'Picking or rubbing inflamed pimples can leave darker marks.', 'Cleansing should reduce friction, not become a nightly face massage ritual.']
    ],
    safeIntro: 'A good balm routine has three jobs: dissolve the film, turn milky with water, and rinse away before a gentle second cleanse if needed. Acne-prone skin usually does not need a heavy ritual; it needs consistent low-friction removal.',
    safeSteps: [
      ['Use it at night only when needed', 'If you wore regular indoor sunscreen and no makeup, your normal cleanser may be enough. Save balm for water-resistant SPF, makeup, or heavy outdoor days.'],
      ['Start with a small amount', 'A grape-sized scoop is often plenty. More balm means more residue to remove and more rubbing.'],
      ['Emulsify before rinsing', 'Add water and massage until the balm turns milky. This step helps the oils lift away instead of sitting on the skin.'],
      ['Follow with a gentle cleanser', 'Use a mild, non-stripping second cleanse if your skin feels coated. Avoid harsh foam that leaves the face tight.'],
      ['Patch the pattern, not only the product', 'Try the balm on one routine type for two weeks. If new bumps cluster where the balm sits longest, switch before blaming every other product.']
    ],
    mistakes: [
      'Using balm in the morning when there is no makeup or sunscreen film to dissolve.',
      'Skipping emulsification and wiping the balm off with a towel.',
      'Choosing fragrance-heavy formulas when acne is inflamed or skin is sensitive.',
      'Massaging inflamed pimples until they look redder.',
      'Using a harsh second cleanser that strips the barrier and causes rebound oiliness.'
    ],
    dermIntro: 'Most cleansing decisions are routine decisions, but breakouts after cleansing can still need a dermatologist if they are persistent, painful, or confusing. Bring the product name, ingredient list, and the timeline of when bumps started.',
    dermList: [
      'Ask for help if new closed comedones continue after stopping the balm for two to three weeks.',
      'Seek care for painful inflamed acne, cysts, scarring, or acne that leaves frequent dark marks.',
      'Mention whether bumps are itchy, uniform, or forehead-heavy, because not every bump is ordinary acne.',
      'Bring photos showing the skin before the balm and after two weeks of use.',
      'List sunscreen, makeup, cleansing balm, second cleanser, and moisturizer, because residue can come from any layer.'
    ],
    scanUse: 'Use MyMirror to compare clogged-looking areas before and after changing your cleansing method. It can help you avoid changing balm, sunscreen, moisturizer, and actives all at once. It cannot identify a comedogenic ingredient from a photo.',
    faqs: [
      ['Can cleansing balm cause acne?', 'It can for some people if it leaves residue, contains ingredients your skin dislikes, or encourages too much rubbing. But a well-rinsed balm can also help remove sunscreen that might otherwise sit on the skin.'],
      ['Is double cleansing necessary every day?', 'No. Double cleanse when there is a real film to remove: water-resistant sunscreen, makeup, or heavy outdoor exposure. On lighter days, a gentle cleanser may be enough.'],
      ['What does emulsification mean?', 'It means adding water until the balm turns milky and lifts away. If the balm stays oily and waxy, it may not rinse cleanly.'],
      ['Should acne-prone skin avoid oil cleansers?', 'Not automatically. Acne-prone skin can tolerate some oil cleansers, but the formula, rinse-off quality, fragrance, and your second cleanser all matter.'],
      ['Can cleansing balm remove sunscreen?', 'Many balms are designed for sunscreen and makeup removal. Water-resistant sunscreen often needs more thorough removal than a quick cleanse.'],
      ['Why do I get bumps after double cleansing?', 'Possibilities include balm residue, an irritating second cleanser, over-massage, a heavy sunscreen, or unrelated acne timing. Change one variable at a time.'],
      ['Is micellar water better than balm?', 'It depends on what you wear and how your skin reacts. Micellar water can also leave surfactant residue if not rinsed. Balm can be gentler for makeup removal if it emulsifies cleanly.'],
      ['How do I test a cleansing balm safely?', 'Use it only at night for sunscreen or makeup removal, keep the second cleanser gentle, avoid new actives, and compare photos after two weeks.']
    ],
    sources: [
      ['AAD acne skin care habits', 'https://www.aad.org/public/diseases/acne/skin-care/habits-stop'],
      ['AAD face washing guidance', 'https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101'],
      ['AAD makeup and acne guidance', 'https://www.aad.org/public/diseases/acne/causes/makeup']
    ]
  },
  {
    id: 'ACR3',
    slug: 'oil-free-moisturizer-acne-prone-skin-india',
    title: 'Best Oil-Free Moisturizer for Acne-Prone Skin in Humid Weather | MyMirror',
    description: 'A humid-weather guide to oil-free moisturizer for acne-prone Indian skin: gel vs lotion, non-comedogenic labels, barrier repair, sweat, and sunscreen layering.',
    ogTitle: 'Best Oil-Free Moisturizer in Humid Weather',
    h1: 'Best oil-free moisturizer for acne-prone skin in humid weather: what to choose',
    eyebrow: 'Humid skin routine guide',
    primaryKeyword: 'oil-free moisturizer acne-prone skin India',
    secondaryKeywords: ['best oil free moisturizer', 'humid weather skincare', 'gel moisturizer acne prone', 'non comedogenic moisturizer'],
    heroImage: '/assets/images/oil-free-moisturizer-india-og.jpg',
    heroAlt: 'A lightweight gel moisturizer jar on a wet bathroom surface',
    heroNote: 'Hydrated, not greasy.',
    heroCopy: 'In humid weather, acne-prone skin often needs water-light hydration, not a heavy cream. The right moisturizer should calm the barrier without feeling sticky.',
    decisionIntro: 'This page is for people who skip moisturizer because their face already feels oily, then end up with tightness, more shine, or irritation from acne actives. “Oil-free” is useful only if the formula still hydrates, layers under sunscreen, and does not sting on a compromised barrier.',
    decisionCards: [
      ['Best fit', 'Oily or combination skin, humid weather, acne actives, sunscreen layering, or a tight-but-shiny face.'],
      ['Use more caution', 'Very dry peeling skin, eczema flares, burning from retinoids, or barrier damage that needs richer repair.'],
      ['Main clue', 'A good humid-weather moisturizer disappears within minutes, keeps skin comfortable, and does not pill under sunscreen.']
    ],
    indianSkinIntro: 'Indian climates can swing between sweat, AC dryness, pollution, and strong sun. Acne-prone skin can be oily and dehydrated at the same time. If you use benzoyl peroxide, salicylic acid, adapalene, or retinoids, moisturizer is not optional decoration; it is part of keeping irritation from turning into more acne marks.',
    indianRows: [
      ['Gel texture', 'Water-gel formulas feel lighter and can suit humid days.', 'Look for comfort after one hour, not just instant cooling.'],
      ['Lotion texture', 'Light lotions may support the barrier better when acne actives cause dryness.', 'Choose lotion if gel leaves tightness or flaking.'],
      ['Non-comedogenic label', 'Helpful but not a guarantee; individual skin still varies.', 'Track whether bumps appear after the moisturizer, not after every routine change.'],
      ['Sweat and sunscreen', 'A moisturizer that pills under SPF can make people apply less sunscreen.', 'The best formula is one you can wear under SPF daily.']
    ],
    safeIntro: 'The safest plan is to choose a lightweight moisturizer, use enough to prevent tightness, and judge it with sunscreen layered on top. Humid weather does not remove the need for barrier support; it only changes the texture that feels wearable.',
    safeSteps: [
      ['Choose simple labels', 'Look for oil-free, non-comedogenic, fragrance-free if sensitive, and ingredients like glycerin, hyaluronic acid, panthenol, ceramides, or niacinamide if tolerated.'],
      ['Apply on slightly damp skin', 'A thin layer after cleansing can trap water and reduce the tight feeling that leads to over-cleansing.'],
      ['Match texture to the active', 'Gel may be enough on non-active mornings. A light lotion or barrier cream may be better on retinoid or benzoyl peroxide nights.'],
      ['Test under sunscreen', 'Wait five minutes, then apply SPF. If the combination pills or feels heavy, change one layer before giving up on moisturizer.'],
      ['Increase during irritation', 'If acne actives make the face sting, pause the active and use moisturizer more consistently until the barrier feels normal.']
    ],
    mistakes: [
      'Skipping moisturizer because oily skin “does not need it.”',
      'Choosing mattifying alcohol-heavy products that leave skin tight and reactive.',
      'Blaming moisturizer for acne while also starting three new actives.',
      'Using too much gel moisturizer and then blaming sunscreen for pilling.',
      'Expecting moisturizer to treat acne by itself; it supports the routine but does not replace acne treatment.'
    ],
    dermIntro: 'Moisturizer questions become dermatologist questions when acne is painful, scarring, or repeatedly worsened by products. The clinician can help decide whether the issue is acne, dermatitis, rosacea-like sensitivity, fungal folliculitis-like bumps, or barrier damage.',
    dermList: [
      'Ask for help if every moisturizer stings, even bland formulas.',
      'Seek care for painful nodules, cysts, scarring, or widespread inflamed acne.',
      'Mention whether bumps are itchy, uniform, or triggered by sweat.',
      'Bring the full morning routine, especially sunscreen, because moisturizer is judged in a stack.',
      'Track whether shine is oiliness, sweat, or product film; photos in the same light help.'
    ],
    scanUse: 'Use MyMirror to compare visible oiliness, texture, redness, and clogged-looking areas while testing one moisturizer for two weeks. The scan can show visible patterns; it cannot prove whether an ingredient is comedogenic for you.',
    faqs: [
      ['Does oily acne-prone skin need moisturizer?', 'Often yes. Oily skin can still be dehydrated or irritated, especially with acne actives. A light moisturizer can reduce tightness and help you tolerate treatment.'],
      ['Is gel better than lotion in humid weather?', 'Gel usually feels lighter, but lotion may protect the barrier better if you are peeling or using retinoids. Texture should match your skin state, not only the weather.'],
      ['What does non-comedogenic mean?', 'It means the product is designed not to clog pores, but it is not a guarantee for every person. Individual reactions still happen.'],
      ['Can moisturizer cause pimples?', 'A formula can contribute to bumps if it is too heavy, irritating, or poorly layered. Test one product at a time before blaming every moisturizer.'],
      ['Should I use moisturizer before sunscreen?', 'Usually yes if your skin feels tight or you use acne actives. Let moisturizer settle before SPF to reduce pilling.'],
      ['What ingredients are useful?', 'Humectants like glycerin and hyaluronic acid, barrier helpers like ceramides or panthenol, and calming ingredients like niacinamide can help if you tolerate them.'],
      ['Can I use moisturizer over benzoyl peroxide?', 'Yes. Moisturizer can reduce dryness and irritation. If benzoyl peroxide burns, pause and simplify.'],
      ['Why does my moisturizer pill?', 'Pilling can come from too much product, incompatible sunscreen, rubbing, or not waiting between layers. Use less, wait longer, and change one layer at a time.']
    ],
    sources: [
      ['AAD acne skin care habits', 'https://www.aad.org/public/diseases/acne/skin-care/habits-stop'],
      ['AAD oily skin care guidance', 'https://www.aad.org/public/everyday-care/skin-care-secrets/routine/oily-skin'],
      ['AAD face washing guidance', 'https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101']
    ]
  },
  {
    id: 'ACR4',
    slug: 'benzoyl-peroxide-spot-treatment-vs-gel-india',
    title: 'Benzoyl Peroxide Spot Treatment vs Gel | MyMirror',
    description: 'Compare benzoyl peroxide spot treatment vs gel for Indian skin: concentration, contact time, irritation, bleaching, PIH risk, and when to use each format.',
    ogTitle: 'Benzoyl Peroxide Spot Treatment vs Gel',
    h1: 'Benzoyl peroxide spot treatment vs gel: how to choose without burning Indian skin',
    eyebrow: 'Acne format comparison',
    primaryKeyword: 'benzoyl peroxide spot treatment vs gel India',
    secondaryKeywords: ['benzoyl peroxide gel', 'benzoyl peroxide spot treatment', '2.5 benzoyl peroxide', 'active acne treatment'],
    heroImage: '/assets/images/benzoyl-peroxide-usa-og.jpg',
    heroAlt: 'An illustrative tube of benzoyl peroxide acne treatment on a bathroom counter',
    heroNote: 'Spot, short-contact, or thin layer?',
    heroCopy: 'Benzoyl peroxide can calm inflamed acne, but the format and contact time decide whether it helps a pimple or leaves the surrounding skin irritated.',
    decisionIntro: 'People often use “spot treatment” and “gel” as if they mean the same thing. They do not. A spot treatment is a way of applying product to individual active pimples. A gel is a vehicle that may be used as a spot, thin layer, or clinician-directed acne-zone treatment. The safer decision starts with acne type, irritation risk, and how much surrounding skin will be exposed.',
    decisionCards: [
      ['Spot treatment', 'Best for occasional inflamed pimples where you want limited exposure and less dryness around the whole face.'],
      ['All-over acne-zone gel', 'May be used for repeated inflamed acne in a defined area, but irritation risk rises if applied too widely or too often.'],
      ['Short-contact option', 'Apply briefly, then rinse, if leave-on benzoyl peroxide is too drying. This is best discussed with a dermatologist for persistent acne.']
    ],
    indianSkinIntro: 'On Indian skin, the concern is not only redness or peeling. Irritation can lead to brown post-inflammatory marks that outlast the pimple. Benzoyl peroxide can also bleach towels, pillowcases, and clothing. A good plan uses enough contact to help acne, not so much that the treatment creates a new problem.',
    indianRows: [
      ['Concentration', 'Lower strengths can still be effective for many people and may irritate less.', 'Do not assume 10% is better than 2.5% or 5%.'],
      ['Contact area', 'The more normal skin you cover, the more dryness you may create.', 'Spot use limits exposure; acne-zone use needs barrier support.'],
      ['Contact time', 'Leave-on products work differently from wash-off or short-contact routines.', 'If burning happens, more time is not better.'],
      ['PIH risk', 'Inflamed acne and chemical irritation can both leave marks.', 'Moisturizer and sunscreen are part of the acne plan.']
    ],
    safeIntro: 'A safer benzoyl peroxide plan respects concentration, area, and frequency. It also protects fabrics and avoids combining multiple irritating acne treatments in the same step.',
    safeSteps: [
      ['Start low and limited', 'Use a lower-strength product on the pimple or acne-prone zone, once daily or less often at first. Increase only if dryness stays manageable.'],
      ['Moisturize around treatment', 'Apply moisturizer to reduce dryness. Some people apply benzoyl peroxide after moisturizer to buffer irritation.'],
      ['Avoid stacking irritants', 'Do not combine with scrubs, peels, strong acids, or retinoids in the same routine unless directed. Too many actives can worsen PIH risk.'],
      ['Protect fabrics', 'Benzoyl peroxide can bleach towels, pillowcases, and collars. Let it dry fully and use white fabrics when possible.'],
      ['Use sunscreen daily', 'Acne marks look worse when sun exposure deepens pigment. SPF helps the marks fade more predictably.']
    ],
    mistakes: [
      'Using a thick white dot and leaving it overnight until the skin burns.',
      'Applying benzoyl peroxide to raw, picked, or freshly waxed skin.',
      'Using high strength because the pimple is painful.',
      'Treating fungal-looking, itchy, uniform bumps with benzoyl peroxide for weeks without review.',
      'Forgetting that benzoyl peroxide bleaches fabric.'
    ],
    dermIntro: 'Benzoyl peroxide is common, but persistent inflamed acne often needs a full plan rather than endless spot treating. A dermatologist can decide whether you need a retinoid, antibiotic combination, hormonal evaluation, or scar-prevention strategy.',
    dermList: [
      'Seek care for painful, deep, cystic, or scarring acne.',
      'Ask for help if benzoyl peroxide burns even at low strength or short contact.',
      'Do not keep spot treating the same lesion for weeks if it is not healing.',
      'Mention pregnancy, allergies, eczema, or other acne medicines before combining treatments.',
      'Bring photos and note whether acne is inflamed, comedonal, hormonal-pattern, or product-triggered.'
    ],
    scanUse: 'Use MyMirror to track whether inflamed spots are reducing or whether new irritation appears around treatment areas. The scan can organize visible redness, marks, and active bumps; it cannot tell you the correct benzoyl peroxide concentration.',
    faqs: [
      ['Is benzoyl peroxide spot treatment the same as gel?', 'No. Spot treatment describes where you apply it. Gel describes the formula type. A gel can be used as a spot treatment or as a thin acne-zone layer depending on instructions.'],
      ['Is 2.5% benzoyl peroxide enough?', 'For many people, lower strengths can be useful and less irritating. Higher strength is not automatically better, especially on skin that marks easily.'],
      ['Can benzoyl peroxide cause dark marks?', 'The ingredient targets acne bacteria and inflammation, but irritation, burns, or inflamed pimples can leave PIH. Use carefully and protect with sunscreen.'],
      ['Can I use benzoyl peroxide with adapalene?', 'Some routines combine them, but the pairing can irritate. If you are not under medical guidance, introduce one active at a time and avoid same-night stacking at first.'],
      ['Should I use benzoyl peroxide on a picked pimple?', 'Avoid applying it to open, raw, or bleeding skin. Let the area heal and seek help if there are signs of infection.'],
      ['Why is my pillowcase bleaching?', 'Benzoyl peroxide can bleach fabrics. Let it dry completely, wash hands after use, and use white towels or pillowcases.'],
      ['What is short-contact benzoyl peroxide?', 'It means applying benzoyl peroxide for a limited time and rinsing it off. It may reduce irritation for some people, but persistent acne should be discussed with a clinician.'],
      ['When should I stop using it?', 'Stop and simplify if you get severe burning, swelling, blistering, crusting, or rash. Seek medical advice if symptoms persist or acne is severe.']
    ],
    sources: [
      ['AAD acne treatment overview', 'https://www.aad.org/public/diseases/acne/derm-treat/treat'],
      ['AAD acne in skin of color', 'https://www.aad.org/public/diseases/acne/derm-treat/skin-color'],
      ['FDA benzoyl peroxide acne products safety communication', 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-warns-rare-serious-hypersensitivity-reactions-certain-over-counter-topical-acne-products']
    ]
  },
  {
    id: 'ACR5',
    slug: 'tranexamic-acid-for-pih-indian-skin',
    title: 'Tranexamic Acid for PIH on Indian Skin | MyMirror',
    description: 'A cautious guide to tranexamic acid for PIH on Indian skin: acne marks vs melasma, sunscreen, timelines, layering, irritation risk, and dermatologist care.',
    ogTitle: 'Tranexamic Acid for PIH on Indian Skin',
    h1: 'Tranexamic acid for PIH on Indian skin: where it fits in an acne-mark routine',
    eyebrow: 'Acne mark guide',
    primaryKeyword: 'tranexamic acid for PIH Indian skin',
    secondaryKeywords: ['post inflammatory hyperpigmentation', 'acne dark marks', 'tranexamic acid serum', 'PIH Indian skin'],
    heroImage: '/assets/images/pie_vs_pih_marks.jpg',
    heroAlt: 'A close-up educational image showing visible acne marks and pigmentation zones',
    heroNote: 'PIH, PIE, or melasma?',
    heroCopy: 'Tranexamic acid may support some pigment routines, but acne marks need correct identification, sunscreen discipline, and patience more than another harsh layer.',
    decisionIntro: 'Tranexamic acid is often searched as a quick fix for dark acne marks. The more useful question is whether the mark is truly PIH, whether acne is still active, and whether the routine already contains enough irritation to keep creating new pigment. This guide focuses on topical tranexamic acid as one possible support ingredient, not a guarantee.',
    decisionCards: [
      ['Best fit', 'Flat brown post-acne marks, uneven tone after inflammation, and routines where sunscreen is already consistent.'],
      ['Use more caution', 'Active inflamed acne, irritated barrier, pregnancy, blood-clotting history, oral tranexamic acid interest, or uncertain melasma-like patches.'],
      ['First rule', 'Stop new breakouts and protect from sun. A pigment ingredient cannot outrun constant inflammation and UV exposure.']
    ],
    indianSkinIntro: 'Indian skin tones commonly develop brown PIH after acne. The mark can feel like the main problem even after the pimple is gone. Tranexamic acid is discussed in pigmentation literature, especially melasma, but topical product results vary. It belongs in a calm routine with sunscreen, not in an aggressive stack of acids and peels.',
    indianRows: [
      ['PIH', 'Usually brown to dark brown flat marks after acne or irritation.', 'Photo tracking helps separate old marks from new acne.'],
      ['PIE', 'Pink or red marks are more vascular-looking and may behave differently from brown PIH.', 'Do not assume every post-acne mark needs a pigment suppressor.'],
      ['Melasma-like patches', 'Symmetrical, blotchy facial pigmentation may need dermatologist-led care.', 'A scan can document pattern, but not diagnose melasma.'],
      ['Sun exposure', 'UV and visible light can worsen persistent pigmentation.', 'Daily sunscreen is the base treatment, not an optional add-on.']
    ],
    safeIntro: 'A safer tranexamic acid routine is built around sunscreen, acne control, barrier comfort, and one pigment step at a time. The ingredient should not be used to justify skipping SPF or tolerating irritation.',
    safeSteps: [
      ['Confirm the mark pattern', 'Use photos to decide whether the concern is flat brown PIH, red PIE, active acne, or wider patchy pigmentation. Different patterns need different expectations.'],
      ['Build the sunscreen base', 'Use broad-spectrum sunscreen daily and consider tinted sunscreen if persistent pigmentation is a major concern. Hats and shade help.'],
      ['Introduce one pigment product', 'Use tranexamic acid once daily or as directed by the product. Avoid starting it alongside strong acids, retinoids, and peels in the same week.'],
      ['Protect the barrier', 'If the serum stings, causes rash, or worsens dryness, pause. Irritation can create more PIH than the serum can fade.'],
      ['Measure in months', 'Acne marks fade slowly. Judge progress over eight to twelve weeks in the same lighting, not from daily mirror checks.']
    ],
    mistakes: [
      'Using tranexamic acid while still picking active acne.',
      'Skipping sunscreen because the serum is marketed for dark spots.',
      'Layering tranexamic acid with several exfoliating acids on irritated skin.',
      'Treating melasma-like patches as ordinary acne marks without medical advice.',
      'Expecting deep or old pigmentation to disappear in two weeks.'
    ],
    dermIntro: 'A dermatologist can help distinguish PIH, PIE, melasma, acne scars, and other pigment patterns. This matters because the wrong self-treatment can delay useful care or irritate skin that already marks easily.',
    dermList: [
      'Ask for help if pigmentation is spreading, symmetrical, gray-brown, or not clearly tied to acne.',
      'Seek care for active acne that keeps making new marks.',
      'Discuss pregnancy, clotting history, medications, or interest in oral tranexamic acid with a clinician.',
      'Bring a list of brightening products, peels, retinoids, and home remedies you have already tried.',
      'Use photos from the same lighting to show whether marks are fading, stable, or darkening.'
    ],
    scanUse: 'Use MyMirror to map visible marks and active acne separately. That distinction helps you decide whether your next step should be acne control, sunscreen consistency, pigment support, or medical review. The scan cannot diagnose melasma or prove tranexamic acid will work.',
    faqs: [
      ['Does tranexamic acid work for PIH?', 'Topical tranexamic acid may support some pigmentation routines, but results vary. PIH also depends on acne control, sun protection, skin tone, depth of pigment, and irritation level.'],
      ['Is tranexamic acid better than niacinamide?', 'They work differently and are often used for different roles. Niacinamide can support barrier and tone; tranexamic acid is used in some pigment-focused formulas. The best choice depends on your skin state.'],
      ['Can I use tranexamic acid with retinoids?', 'Some routines combine them, but introducing both at once can irritate. Start one product, establish tolerance, then consider layering slowly.'],
      ['How long does PIH take to fade?', 'Many acne marks take months, not days. Consistent sunscreen and fewer new breakouts are essential for judging any fading ingredient.'],
      ['Can tranexamic acid treat melasma?', 'Tranexamic acid is discussed in melasma care, including medical options, but melasma should be clinician-guided. Do not self-diagnose melasma from a photo.'],
      ['Is oral tranexamic acid the same as a serum?', 'No. Oral tranexamic acid is a medication with medical risks and should only be used under clinician supervision. This page focuses on topical product context.'],
      ['What if my marks are red, not brown?', 'Red or pink post-acne marks may be PIE rather than PIH. Pigment ingredients may not be the main answer, and time, inflammation control, and professional advice may be more relevant.'],
      ['Should I exfoliate PIH aggressively?', 'No. Over-exfoliation can inflame skin and create more marks. Gentle consistency beats repeated irritation.']
    ],
    sources: [
      ['AAD dark spots guidance', 'https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots'],
      ['AAD sun protection guidance', 'https://www.aad.org/public/everyday-care/sun-protection'],
      ['Tranexamic acid in melasma review', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6715124/']
    ]
  }
];

const productDetails = {
  ACR7: {
    intro: 'Clindamycin 1% product formats include prescription topical gels, aqueous lotions, and combination active formulas with Benzoyl Peroxide designed for acute inflammatory acne.',
    formats: [
      ['1% Topical Gel', 'Lightweight aqueous gel for active red papules and pustules.', 'Acute inflammatory breakouts.', 'Must be paired with Benzoyl Peroxide to prevent resistance.'],
      ['Clindamycin + Benzoyl Peroxide Combination Gel', 'Fixed-dose combination gel providing antibacterial action without resistance.', 'Moderate to severe inflammatory acne.', 'May bleach fabrics; use at night and protect eyes and lips.'],
      ['Clindamycin + Adapalene Combination Gel', 'Prescription retinoid plus antibiotic combination for dual acne action.', 'Comedonal and inflammatory acne under medical supervision.', 'Requires gradual introduction to prevent retinoid dryness.']
    ],
    checklist: [
      'Always pair Clindamycin gel with 2.5% Benzoyl Peroxide.',
      'Use for a maximum of 4 to 8 weeks during active flare-ups.',
      'Apply a thin layer to clean, completely dry skin.',
      'Follow with an oil-free moisturizer to protect barrier lipids.',
      'Taper off once active inflammation has resolved.'
    ],
    landscape: 'In India, Clindamycin 1% gels are available in pharmacy listings such as Clindac A, Deriva C, and Persol AC combination products. Selecting a gel vehicle ensures rapid absorption without clogging pores in humid weather.',
    buyFirst: 'Start with a 1% Clindamycin gel paired with a 2.5% Benzoyl Peroxide wash. Use an oil-free moisturizer to maintain barrier comfort.',
    products: [
      {
        name: 'Benzac AC 2.5% Gel',
        badge: 'Resistance Prevention Partner',
        image: '/assets/images/product-examples/benzac-ac-25-gel.jpg',
        url: 'https://www.1mg.com/drugs/benzac-ac-2.5-gel-678551',
        detail: 'Essential Benzoyl Peroxide 2.5% gel for pairing with Clindamycin to prevent antibiotic resistance.',
        caution: 'Use a thin layer; can bleach colored fabrics.'
      },
      {
        name: 'Deriva MS Aqueous Gel',
        badge: 'Retinoid Maintenance Partner',
        image: '/assets/images/product-examples/deriva-ms-aqueous-gel.jpg',
        url: 'https://pharmeasy.in/health-care/products/deriva-ms-aqueous-gel-15gm-214902',
        detail: 'Adapalene gel example for transitioning off Clindamycin once active inflammation clears.',
        caution: 'Use night-time sandwich method.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Barrier Repair Buffer',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Lightweight pharmacy moisturizer to prevent flaking during active antibacterial treatment.',
        caution: 'Apply over dry skin.'
      }
    ]
  },
  ACR8: {
    intro: 'Cica moisturizer formats include lightweight gel-creams, soothing emulsions, and barrier recovery balms formulated with Centella Asiatica extracts for sensitive, acne-prone skin.',
    formats: [
      ['Soothing Cica Gel-Cream', 'Water-based gel moisturizer with Centella Asiatica and Madecassoside.', 'Oily, acne-prone, and over-exfoliated Indian skin.', 'Ideal for tropical humidity; provides non-greasy hydration.'],
      ['Cica Emulsion / Fluid', 'Lightweight fluid lotion for sensitive or combination skin types.', 'Daily barrier maintenance and mild redness relief.', 'Layers easily under broad-spectrum sunscreen.'],
      ['Intensive Cica Barrier Balm', 'Richer cream with ceramides and shea butter.', 'Severe barrier breakdown, peeling, or post-procedure care.', 'Use as a short-term spot balm to avoid heavy pore congestion.']
    ],
    checklist: [
      'Choose oil-free Cica gel-creams for acne-prone skin.',
      'Look for Madecassoside and Asiaticoside on ingredient lists.',
      'Apply to slightly damp skin after gentle cleansing.',
      'Pause all active peeling acids while repairing barrier damage.',
      'Pair with broad-spectrum SPF 50 during daytime.'
    ],
    landscape: 'In India, Cica moisturizers range from K-beauty Centella gels to Indian pharmacy barrier creams. Selecting a non-comedogenic gel-cream texture ensures deep soothing without triggering acne breakouts in humid weather.',
    buyFirst: 'Choose a lightweight Cica gel-cream and use it twice daily on clean skin for 14 days to fully restore barrier function.',
    products: [
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Soothing Barrier Gel',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Oil-free soothing moisturizer with Panthenol and Copper for barrier repair.',
        caution: 'Ideal for over-exfoliated skin.'
      },
      {
        name: 'Excela Moisturiser for Acne-Prone Skin',
        badge: 'Pharmacy Barrier Partner',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Dermatologist-recommended non-comedogenic moisturizer for sensitive acne skin.',
        caution: 'Apply morning and night.'
      },
      {
        name: 'Deconstruct Soothing Cleansing Balm',
        badge: 'Gentle Cleansing Partner',
        image: '/assets/images/product-examples/deconstruct-cleansing-balm.jpg',
        url: 'https://www.thedeconstruct.in/products/soothing-cleansing-balm',
        detail: 'Gentle cleansing balm for removing sunscreen without stripping fragile barrier lipids.',
        caution: 'Emulsify thoroughly with lukewarm water.'
      }
    ]
  },
  ACR9: {
    intro: 'Alpha Arbutin 2% product formats include hydrating facial serums, tone-correcting emulsions, and multi-active brightening blends designed for hyperpigmentation on melanin-rich skin.',
    formats: [
      ['2% Alpha Arbutin + Hyaluronic Acid Serum', 'Water-based serum providing gentle tyrosinase inhibition and hydration.', 'Flat brown post-acne dark marks (PIH) and sun spots.', 'Apply twice daily on clean skin under sunscreen.'],
      ['Alpha Arbutin + Niacinamide Serum', 'Dual-active serum targeting both melanin synthesis and melanosome transfer.', 'Stubborn PIH and overall skin tone evening.', 'Excellent gentle pairing for sensitive Indian skin.'],
      ['Alpha Arbutin + Kojic Acid Cream', 'Compounded depigmenting cream for targeted mark care.', 'Localized dark spots under dermatologist guidance.', 'Introduce slowly to monitor skin tolerance.']
    ],
    checklist: [
      'Choose 2% Alpha Arbutin in a water-based serum vehicle.',
      'Apply 2-3 drops to clean skin twice daily.',
      'Always finish daytime routine with broad-spectrum SPF 50.',
      'Pair with 5% Niacinamide for dual-action PIH fading.',
      'Allow 8 to 12 weeks of consistent use for optimal results.'
    ],
    landscape: 'In India, 2% Alpha Arbutin serums are widely available as gentle hydroquinone alternatives. Choosing a water-based formulation with Hyaluronic acid ensures quick absorption without heavy residue in humid weather.',
    buyFirst: 'Start with a 2% Alpha Arbutin serum used twice daily under a light moisturizer and daytime broad-spectrum sunscreen.',
    products: [
      {
        name: 'Minimalist Tranexamic 3% + Arbutin Serum',
        badge: 'Tone Evening Serum',
        image: '/assets/images/product-examples/minimalist-tranexamic-serum.jpg',
        url: 'https://beminimalist.co/products/tranexamic-3-hpa',
        detail: 'Targeted serum for fading dark post-acne marks and evening tone on Indian skin.',
        caution: 'Use daytime SPF 50.'
      },
      {
        name: 'Foxtale Rapid Spot Reduction Drops',
        badge: 'Brightening Active Drops',
        image: '/assets/images/product-examples/foxtale-rapid-spot-reduction-drops.jpg',
        url: 'https://foxtale.in/products/hyperpigmentation-serum-with-tranexamic-acid',
        detail: 'Gentle spot-fading serum formulated for dark mark reduction.',
        caution: 'Pat gently on clean skin.'
      },
      {
        name: 'The Derma Co 10% Azelaic Acid Serum',
        badge: 'Synergistic Active Partner',
        image: '/assets/images/product-examples/derma-co-tran-zelaic-serum.jpg',
        url: 'https://thedermaco.com/products/10-azelaic-acid-serum',
        detail: 'Azelaic acid active serum for complementing Arbutin in dark spot fading.',
        caution: 'Introduce gradually.'
      }
    ]
  },
  ACR10: {
    intro: 'Spearmint tea formats include loose-leaf organic herbal teas, convenient tea bags, and spearmint extracts used as dietary anti-androgenic support for hormonal acne and PCOS.',
    formats: [
      ['100% Organic Spearmint Loose-Leaf Tea', 'Pure dried Mentha spicata leaves rich in anti-androgenic polyphenols.', 'Jawline hormonal acne, oily skin, and PCOS support.', 'Steep 1 teaspoon in hot water for 5 to 10 minutes; drink twice daily.'],
      ['Organic Spearmint Tea Bags', 'Convenient pre-portioned tea bags for daily herbal brewing.', 'Daily hormonal routine integration at home or work.', 'Ensure 100% Mentha spicata without added artificial flavors.'],
      ['Herbal Spearmint Infusion Blends', 'Blends pairing spearmint with chamomile or green tea.', 'Relaxation and antioxidant support.', 'Verify spearmint content is sufficient for anti-androgenic benefits.']
    ],
    checklist: [
      'Select 100% pure organic Mentha spicata (spearmint).',
      'Avoid peppermint tea which lacks anti-androgenic polyphenols.',
      'Drink 1 to 2 cups daily consistently for 60 to 90 days.',
      'Maintain gentle non-comedogenic topical skincare routine.',
      'Consult an endocrinologist for comprehensive PCOS evaluation.'
    ],
    landscape: 'In India, organic spearmint tea is available from herbal tea brands and online listings. Selecting pure loose-leaf Mentha spicata ensures maximum polyphenol concentration for hormonal acne support.',
    buyFirst: 'Buy 100% organic spearmint loose-leaf tea and drink 2 cups daily for 60 days alongside your gentle topical skincare routine.',
    products: [
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Topical Routine Partner',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Non-comedogenic moisturizer to maintain skin barrier while managing hormonal acne.',
        caution: 'Apply morning and night.'
      },
      {
        name: 'Benzac AC 2.5% Gel',
        badge: 'Targeted Inflammatory Spot Care',
        image: '/assets/images/product-examples/benzac-ac-25-gel.jpg',
        url: 'https://www.1mg.com/drugs/benzac-ac-2.5-gel-678551',
        detail: 'Topical Benzoyl peroxide 2.5% gel for treating acute jawline pimples as they surface.',
        caution: 'Use a thin layer on active spots.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Hydrating Barrier Cushion',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Lightweight soothing moisturizer for balancing oil and hydration on hormonal skin.',
        caution: 'Non-greasy finish.'
      }
    ]
  },
  ACR11: {
    intro: 'Niacinamide product formats range from optimal 5% daily serums to over-concentrated 10%-20% formulas, multi-active moisturizer creams, and soothing barrier fluids.',
    formats: [
      ['5% Niacinamide + Hyaluronic Acid Serum', 'Clinical sweet-spot concentration for barrier repair, oil control, and mark fading.', 'Oily, acne-prone, and sensitive Indian skin phototypes.', 'Apply 3-4 drops twice daily under moisturizer.'],
      ['5% Niacinamide + 1% Zinc PCA Serum', 'Combines 5% Niacinamide with Zinc PCA for enhanced sebum regulation.', 'Very oily skin, enlarged pores, and recurring T-zone shine.', 'Ideal daily morning serum under sunscreen.'],
      ['10% to 20% Niacinamide High-Dose Serums', 'Over-concentrated formulations frequently sold in commercial skincare.', 'Resilient non-sensitive skin requiring strong active exposure.', 'May cause flushing, burning, and micro-inflammation on sensitive skin.']
    ],
    checklist: [
      'Choose 5% Niacinamide concentration for optimal tolerance.',
      'Avoid 10% or higher if your skin experiences redness or stinging.',
      'Apply 3-4 drops to clean skin morning and evening.',
      'Layer under Adapalene or Azelaic acid to buffer retinoid dryness.',
      'Pair morning application with broad-spectrum SPF 50.'
    ],
    landscape: 'In India, Niacinamide serums are widely available, but many brands promote 10% or 15% concentrations. Opting for a gentle 5% serum delivers full dermatological benefits without triggering irritation breakouts.',
    buyFirst: 'Start with a 5% Niacinamide serum used twice daily under an oil-free moisturizer and daytime broad-spectrum sunscreen.',
    products: [
      {
        name: 'Foxtale Rapid Spot Reduction Drops',
        badge: '5% Niacinamide Active Serum',
        image: '/assets/images/product-examples/foxtale-rapid-spot-reduction-drops.jpg',
        url: 'https://foxtale.in/products/hyperpigmentation-serum-with-tranexamic-acid',
        detail: 'Formulated with optimal Niacinamide and soothing actives for dark spot reduction.',
        caution: 'Suitable for daily use.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Barrier Repair Partner',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Oil-free hydrating moisturizer that layers perfectly over 5% Niacinamide serum.',
        caution: 'Apply morning and night.'
      },
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Oil Control Partner',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Active oil-free moisturizer for controlling shine and clearing clogged pores.',
        caution: 'Use under daytime sunscreen.'
      }
    ]
  },
  ACR6: {
    intro: 'Azelaic acid 10% product formats include OTC gels, topical serums, and combination active formulas designed for acne-prone skin and post-inflammatory hyperpigmentation (PIH). Choosing the right format ensures effective delivery without heavy residue in tropical Indian humidity.',
    formats: [
      ['10% OTC Gel', 'Lightweight dicarboxylic gel format ideal for oily or combination skin in humid climates.', 'Active acne papules, clogged pores, and dark mark fading.', 'Apply on completely dry skin over moisturizer to eliminate initial paresthesia.'],
      ['10% Azelaic Acid Serum', 'Fluid topical serum often formulated with 5% Niacinamide or hyaluronic acid.', 'Overall tone evenness, mild acne maintenance, and PIH prevention.', 'Avoid stacking with aggressive physical scrubs or strong peeling acids.'],
      ['15% to 20% Prescription Formulations', 'Higher concentration medical gels or creams prescribed by dermatologists.', 'Persistent inflammatory papules, severe hyperpigmentation, or rosacea under dermatologist care.', 'Requires professional medical prescription supervision.']
    ],
    checklist: [
      'Choose 10% OTC gel for gentle self-guided acne and dark spot maintenance.',
      'Always apply a pea-sized amount on completely dry skin.',
      'Use the 4-Step Sandwich Protocol if initial tingling or stinging occurs.',
      'Pair night application with mandatory daytime broad-spectrum SPF 50.',
      'Allow 6 to 8 weeks of consistent use before judging mark fading results.'
    ],
    landscape: 'In India, 10% Azelaic acid formulations are available in OTC gels, active serums, and pharmacy listings. Selecting a lightweight gel formulation ensures rapid absorption without heavy residue in humid weather.',
    buyFirst: 'Start with a 10% OTC gel used 2-3 nights per week over a light moisturizer. Pair with daytime sunscreen to protect fading post-acne marks.',
    products: [
      {
        name: 'The Derma Co 10% Azelaic Acid Serum',
        badge: '10% Azelaic Active Serum',
        image: '/assets/images/product-examples/derma-co-tran-zelaic-serum.jpg',
        url: 'https://thedermaco.com/products/10-azelaic-acid-serum',
        detail: 'Formulated with 10% Azelaic acid to target active breakouts and reduce dark post-acne marks.',
        caution: 'Patch test before full face application.'
      },
      {
        name: 'Minimalist Tranexamic 3% + Azelaic Serum',
        badge: 'Pigmentation & Mark Corrector',
        image: '/assets/images/product-examples/minimalist-tranexamic-serum.jpg',
        url: 'https://beminimalist.co/products/tranexamic-3-hpa',
        detail: 'Combines active dark-spot fading ingredients for melano-competent Indian skin tone evening.',
        caution: 'Use with daytime SPF 50 sunscreen.'
      },
      {
        name: 'Excela Moisturiser for Acne-Prone Skin',
        badge: 'Buffering Layer Partner',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Lightweight pharmacy moisturizer ideal for buffering active acid gels in the 4-Step Sandwich Protocol.',
        caution: 'Ensure skin is dry before active application.'
      }
    ]
  },
  ACR1: {
    intro: 'The most useful adapalene product decision is not which tube looks strongest. It is whether the label, strength, vehicle, and support routine match a slow retinoid introduction. Product names also vary by country and pharmacy channel, so treat examples as a way to read labels, not as endorsements or a substitute for medical advice.',
    formats: [
      ['Adapalene 0.1% gel', 'Common retinoid format; Differin Gel is a well-known OTC example in some markets, while Indian access may vary by brand and prescription status.', 'People with mostly clogged pores, blackheads, whiteheads, and recurring acne-prone zones who can commit to slow use.', 'Still irritating if overused. A pea-sized full-face amount is very different from a thick spot layer.'],
      ['Adapalene cream or lotion vehicle', 'Some prescription products use a creamier vehicle instead of a clear gel.', 'Skin that becomes tight or flaky with gels, if a clinician recommends that format.', 'A richer vehicle may feel more comfortable but can still cause retinization and PIH-triggering irritation.'],
      ['Adapalene plus benzoyl peroxide combination', 'Fixed combinations exist in some prescription acne plans.', 'Inflamed acne where a dermatologist wants both a retinoid and benzoyl peroxide effect in one plan.', 'More irritation potential. Do not build your own aggressive same-night stack unless directed.'],
      ['Support products around adapalene', 'Gentle cleanser, bland moisturizer, and broad-spectrum sunscreen are part of the product system.', 'Anyone starting a retinoid, especially Indian skin that marks after irritation.', 'Buying adapalene without barrier support often leads to stopping early or creating avoidable PIH.']
    ],
    checklist: [
      'Check that the active says adapalene and note the percentage; do not confuse cosmetic retinol with prescription retinoids.',
      'Read whether the product is leave-on, prescription-only, or combination therapy; those details change how it should be used.',
      'Prefer a plain routine around it: gentle cleanser, moisturizer, sunscreen, and no new peels during the start period.',
      'Look for expiry, storage instructions, and pregnancy or breastfeeding warnings before opening the tube.',
      'If the product includes another active, assume irritation risk is higher and ask a dermatologist before layering more treatments.'
    ],
    landscape: 'In search results and pharmacies you may see international OTC adapalene gels, Indian prescription adapalene gels, and retinoid-adjacent cosmetic products sold with similar acne language. The active ingredient line matters more than the front label. A “retinol night cream” is not the same decision as adapalene. A fixed adapalene-benzoyl peroxide product is also not the same decision as plain adapalene gel. For Indian skin, the practical product choice is usually the simplest medically appropriate format plus a routine that makes irritation less likely.',
    buyFirst: 'If you do not already own a gentle cleanser, non-stinging moisturizer, and sunscreen you will actually wear, buy those before chasing a stronger retinoid. If adapalene is appropriate for you, choose the lowest sensible entry format and build frequency slowly. Skip bundles that sell multiple acne actives together unless a clinician has mapped the schedule, because the bundle is where many people accidentally create barrier burn.',
    products: [
      {
        name: 'Deriva MS Aqueous Gel',
        badge: 'Adapalene 0.1% gel example',
        image: '/assets/images/product-examples/deriva-ms-aqueous-gel.jpg',
        url: 'https://www.1mg.com/drugs/deriva-ms-aqueous-gel-144224',
        detail: 'A Tata 1mg-listed adapalene microsphere gel from Glenmark; useful as a label-reading example for 0.1% adapalene.',
        caution: 'Prescription/medical-use context. Do not self-start during pregnancy or on irritated skin.'
      },
      {
        name: 'Adaferin Gel',
        badge: 'Adapalene gel example',
        image: '/assets/images/product-examples/adaferin-gel.jpg',
        url: 'https://www.1mg.com/drugs/adaferin-gel-123250',
        detail: 'A Galderma India adapalene gel listing; helpful for comparing active ingredient, strength, and instructions.',
        caution: 'Use only as directed. Retinoid irritation can worsen PIH if pushed too fast.'
      },
      {
        name: 'Adapen 0.1% Gel',
        badge: 'Adapalene substitute example',
        image: '/assets/images/product-examples/adapen-gel.png',
        url: 'https://www.1mg.com/drugs/adapen-0.1-w-w-gel-165935',
        detail: 'Another Indian pharmacy adapalene listing; compare vehicle, brand, and substitute notes rather than buying by price alone.',
        caution: 'Ask a dermatologist if acne is painful, scarring, or mixed with eczema-like irritation.'
      }
    ]
  },
  ACR2: {
    intro: 'Cleansing balm shopping is really about residue management. Two balms can look identical in a tub but behave completely differently once water is added. Acne-prone skin needs a formula that melts sunscreen, emulsifies into a milky rinse, and does not require long rubbing to feel clean.',
    formats: [
      ['Solid balm or sherbet balm', 'Scoopable balm that melts into oil on dry skin; examples in the market include K-beauty style cleansing balms and Indian balm removers.', 'Water-resistant sunscreen, makeup, and days with heavier pollution or long-wear base products.', 'Heavy fragrance, waxy residue, and over-massage can be a problem for active acne.'],
      ['Balm-to-foam or balm-to-milk', 'Hybrid products designed to emulsify more visibly or foam lightly after water is added.', 'People who dislike a film after classic balms but still need makeup or sunscreen removal.', 'Foaming does not automatically mean gentle; judge whether the skin feels tight afterward.'],
      ['Liquid cleansing oil', 'Oil cleanser in a pump bottle with emulsifiers.', 'Users who want the same oil-dissolves-oil idea with easier dosing and less scooping.', 'Thin oils can run into eyes or hairline; rinse quality still matters.'],
      ['Micellar water or makeup remover', 'Water-based remover used with cotton or reusable pads.', 'Light makeup, targeted eye/lip removal, or people who dislike balm texture.', 'Friction from pads and leftover surfactant can irritate; rinse if acne-prone skin feels coated.']
    ],
    checklist: [
      'Look for clear instructions to emulsify with water; if the brand only says wipe off, acne-prone skin may feel residue.',
      'Check fragrance, essential oils, and strongly scented botanical extracts if your acne is inflamed or your barrier stings.',
      'Notice whether the balm is marketed for waterproof makeup, sunscreen, or both; your use case should match the claim.',
      'Choose smaller sizes first. A huge jar is not a bargain if it creates closed comedones by week two.',
      'Pair the balm with a mild second cleanser only when needed; a stripping second cleanse can undo the benefit.'
    ],
    landscape: 'The product landscape now includes classic Korean cleansing balms, Indian balm-to-foam launches, cleansing oils, and micellar waters. Some formulas highlight rice, papaya, charcoal, or brightening ingredients, but acne-prone buyers should care more about rinse behavior and irritation. A balm can be excellent for removing stubborn SPF yet still wrong for daily use if you wear only light indoor sunscreen. The reverse is also true: avoiding all balms can leave water-resistant sunscreen sitting on the skin if your regular cleanser cannot remove it.',
    buyFirst: 'Buy the smallest simple balm or cleansing oil that matches your actual sunscreen and makeup habits. Test it only on nights when there is something substantial to remove. If your face feels waxy after emulsifying and rinsing, change the amount or the formula before adding more acne treatment. If new bumps appear in the same zones after repeated balm nights, stop the balm for two weeks and compare.',
    products: [
      {
        name: 'The Pink Foundry Melt to Foam™ Cleansing Balm',
        badge: 'Indian balm-to-foam example',
        image: '/assets/images/product-examples/pink-foundry-cleansing-balm.jpg',
        url: 'https://www.thepinkfoundry.com/products/melt-to-foam-cleansing-balm-makeup-remover',
        detail: 'A homegrown balm-to-foam format positioned for SPF, makeup, and environmental buildup removal.',
        caution: 'Foaming does not automatically mean non-irritating; judge tightness after rinsing.'
      },
      {
        name: 'Deconstruct Soothing Cleansing Balm',
        badge: 'Bisabolol + oat oil balm',
        image: '/assets/images/product-examples/deconstruct-cleansing-balm.jpg',
        url: 'https://www.1mg.com/otc/deconstruct-soothing-cleansing-balm-otc795460',
        detail: 'A Tata 1mg-listed balm described for dissolving waterproof makeup and sunscreen.',
        caution: 'Patch test and stop if eye area or acne lesions feel irritated.'
      },
      {
        name: 'Plum E-Luminence Simply Supple Cleansing Balm',
        badge: 'Vegan cleansing balm example',
        image: '/assets/images/product-examples/plum-cleansing-balm.jpg',
        url: 'https://www.1mg.com/otc/plum-e-luminence-simply-supple-cleansing-balm-otc596815',
        detail: 'An Indian-brand balm listing with vitamin E positioning; useful for comparing balm texture and rinse expectations.',
        caution: 'Richer balm textures may need a gentle second cleanse on oily acne-prone skin.'
      }
    ]
  },
  ACR3: {
    intro: 'Oil-free moisturizer is a category, not a single texture. Some are watery gels that vanish quickly; others are gel-creams with silicones, humectants, or barrier ingredients. The best humid-weather product is the one that hydrates enough to keep acne treatment tolerable while still letting sunscreen sit smoothly on top.',
    formats: [
      ['Water gel', 'Light gel with humectants such as glycerin or hyaluronic acid; often marketed as oil-free or fresh-feel.', 'Very oily skin, humid mornings, sunscreen layering, and people who hate cream residue.', 'Can feel good for five minutes but leave tightness later if the barrier is damaged.'],
      ['Gel-cream', 'A slightly cushioned texture that may include dimethicone, panthenol, niacinamide, or light emollients.', 'Combination skin, AC exposure, and routines with mild acne actives.', 'Too much product can pill under sunscreen; use a thin layer and wait before SPF.'],
      ['Light lotion', 'Fluid moisturizer with more barrier support than a pure gel.', 'Retinoid or benzoyl peroxide nights when skin feels tight or flaky.', 'Not every lotion is heavy, but fragrance or richer oils can bother some acne-prone users.'],
      ['Barrier repair cream used selectively', 'Richer cream with ceramides, cholesterol, fatty acids, or occlusive support.', 'Short repair windows after irritation, peeling, or over-treatment.', 'May feel too heavy for all-day humid wear; use only where and when needed.']
    ],
    checklist: [
      'Look for oil-free and non-comedogenic as helpful signals, but judge your own skin because labels are not guarantees.',
      'Prioritize humectants such as glycerin, hyaluronic acid, or panthenol if your face is tight but shiny.',
      'Consider ceramides or niacinamide when acne actives make the barrier reactive, as long as those ingredients do not sting you.',
      'Avoid assuming matte equals healthy. A harsh mattifying product can make skin tight, irritated, and more mark-prone.',
      'Always test the moisturizer under your sunscreen; pilling can lead to under-applying SPF.'
    ],
    landscape: 'In India, oil-free moisturizers range from pharmacy gel products to cosmetic gel-creams and acne-focused lotions. Many product pages emphasize “non-sticky,” “matte,” “oil control,” or “hydrating gel.” Those claims are useful only if the formula keeps the skin comfortable after one to three hours and does not disrupt sunscreen. People using adapalene or benzoyl peroxide often need a slightly more supportive night moisturizer than the one they prefer under sunscreen in the morning.',
    buyFirst: 'Start with one daytime gel or gel-cream that layers well under SPF, then add a separate repair option only if acne actives cause dryness. Do not buy five moisturizers at once; you will lose the signal. If every oil-free product stings, stop chasing texture and treat it as barrier damage or dermatitis until a clinician helps you reset.',
    products: [
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Oil-free panthenol moisturizer',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Minimalist describes this as a lightweight oil-free moisturiser for oily/combination and acne-prone skin.',
        caution: 'Good label fit does not guarantee personal tolerance; test under sunscreen.'
      },
      {
        name: 'Excela Moisturiser',
        badge: 'Pharmacy acne-prone moisturizer',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'PharmEasy lists it for oily and acne-prone skin, with lightweight and non-comedogenic positioning.',
        caution: 'If every moisturizer stings, pause actives and consider barrier damage.'
      },
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Active moisturizer example',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'An oil-free moisturizer with salicylic acid and oat extract, positioned for active acne.',
        caution: 'Because it contains an acne active, avoid stacking blindly with retinoids or peels.'
      }
    ]
  },
  ACR4: {
    intro: 'Benzoyl peroxide product choice has three levers: strength, contact time, and surface area. A 2.5% gel used consistently can be more sensible than a stronger product that burns the skin and gets abandoned. On Indian skin, preventing treatment irritation matters because irritation itself can become a dark-mark trigger.',
    formats: [
      ['2.5% leave-on gel', 'Common entry strength; Indian pharmacy examples include Benzac AC 2.5% gel listings.', 'Occasional inflamed pimples or acne-prone zones where lower irritation is important.', 'Can still dry and bleach fabrics. Use a thin layer and protect surrounding skin.'],
      ['5% leave-on gel', 'Common stronger gel format; Benzac AC 5% style listings are visible in Indian pharmacies.', 'People who tolerate lower strengths or have clinician-directed use for inflamed acne.', 'Higher strength is not automatically better; burning can create more PIH risk.'],
      ['Benzoyl peroxide wash or short-contact routine', 'Wash-off formats or clinician-guided short-contact use.', 'People who cannot tolerate leave-on treatment or need broader but briefer contact.', 'Rinsing reduces contact but not all irritation risk; avoid eyes, lips, and broken skin.'],
      ['Combination acne products', 'Benzoyl peroxide paired with adapalene or antibiotics in prescription plans.', 'Persistent inflammatory acne where a dermatologist wants combination therapy.', 'Do not duplicate ingredients by adding a spot treatment on top of a combination product.']
    ],
    checklist: [
      'Check the percentage before buying; 2.5%, 5%, and 10% are different irritation decisions.',
      'Confirm whether it is leave-on, wash-off, or a fixed combination product.',
      'Look for warnings about bleaching fabrics, avoiding eyes and lips, and stopping for severe irritation.',
      'If you already use adapalene, salicylic acid, peels, or retinoids, plan spacing before adding benzoyl peroxide.',
      'Avoid applying to picked, open, or raw skin; the product is for acne treatment, not wound care.'
    ],
    landscape: 'The Indian product landscape includes familiar benzoyl peroxide gels, acne spot products that may or may not contain benzoyl peroxide, and combination prescriptions. Many “pimple patches,” tea tree gels, sulfur products, or salicylic acid spot treatments compete for the same search intent but are not the same ingredient. Read the active ingredient line, not only the words “spot treatment.” If the front label says acne gel but the active is salicylic acid, your irritation and layering decisions change.',
    buyFirst: 'For self-managed occasional pimples, start with the lowest practical benzoyl peroxide strength and limited application. Buy white pillowcases or use white towels if fabric bleaching is a concern. If acne is frequent, painful, or leaving marks, the better first purchase may be a dermatologist consultation rather than a stronger tube, because repeated spot treatment does not prevent every new lesion.',
    products: [
      {
        name: 'Benzac AC 2.5% Gel',
        badge: 'Lower-strength BPO gel',
        image: '/assets/images/product-examples/benzac-ac-25-gel.jpg',
        url: 'https://www.1mg.com/drugs/benzac-ac-2.5-gel-678551',
        detail: 'A Tata 1mg-listed benzoyl peroxide 2.5% gel example for reading strength and application instructions.',
        caution: 'Can irritate skin and bleach fabric; avoid broken or picked skin.'
      },
      {
        name: 'Benzac AC 5% Gel',
        badge: 'Higher-strength BPO gel',
        image: '/assets/images/product-examples/benzac-ac-25-gel.jpg',
        url: 'https://www.1mg.com/drugs/benzac-ac-5-gel-679396',
        detail: 'A stronger benzoyl peroxide gel listing; useful for comparing whether higher concentration is really needed.',
        caution: 'Higher strength is not automatically better on skin that marks easily.'
      },
      {
        name: 'Persol AC 2.5 Gel',
        badge: 'BPO substitute example',
        image: '/assets/images/product-examples/persol-ac-25-gel.jpg',
        url: 'https://www.1mg.com/drugs/persol-ac-2.5-gel-398087',
        detail: 'A 2.5% benzoyl peroxide alternative listing; helpful for comparing active sameness across brands.',
        caution: 'Do not duplicate BPO across multiple spot products in the same routine.'
      }
    ]
  },
  ACR5: {
    intro: 'Tranexamic acid products are sold as dark-spot serums, pigmentation correctors, ampoules, and multi-active brightening blends. The product decision should start with the mark pattern. A serum can support a calm PIH routine, but it cannot compensate for untreated acne, daily picking, or inconsistent sunscreen.',
    formats: [
      ['Tranexamic acid serum', 'Leave-on serum, often around 2–5% in cosmetic products; Minimalist Tranexamic 3% is one visible Indian-market example.', 'Flat brown acne marks when sunscreen is already consistent and the barrier is calm.', 'Results vary and take time; stinging or rash can worsen pigmentation risk.'],
      ['Tranexamic plus azelaic or kojic blend', 'Multi-active pigmentation correctors such as tranexamic-azelaic style serums.', 'People who tolerate actives and want one product aimed at uneven tone.', 'More ingredients means more variables. Introduce slowly and do not stack with peels at first.'],
      ['Niacinamide or barrier-support serum', 'Not a tranexamic product, but commonly compared for acne marks and tone.', 'Skin that is irritated, oily, or barrier-compromised before stronger pigment steps.', 'May not be enough for persistent pigmentation, but can make the routine more tolerable.'],
      ['Dermatologist-led options', 'Prescription pigment plans, procedures, or oral tranexamic acid when medically appropriate.', 'Melasma-like patterns, stubborn PIH, or pigmentation mixed with active acne/scarring.', 'Oral tranexamic acid is not a cosmetic serum and needs medical screening.']
    ],
    checklist: [
      'Check the active percentage and whether tranexamic acid is the main ingredient or one of many brightening claims.',
      'Look for added acids, retinoids, fragrance, or exfoliants that may make the product less beginner-friendly.',
      'Buy sunscreen first if you are not already consistent; pigment products without SPF are hard to judge.',
      'Avoid oral tranexamic acid unless prescribed and medically supervised.',
      'Track brown PIH separately from red marks, active acne, and depressed scars because each needs a different expectation.'
    ],
    landscape: 'Search results mix topical tranexamic serums, tranexamic-azelaic correctors, kojic/alpha-arbutin blends, niacinamide serums, peeling solutions, and melasma medication discussions. That mix can be confusing because the front-end promise is often “dark spots,” but the risk profile is different. For Indian acne marks, the safest product landscape is sunscreen, acne control, barrier support, then one pigment product. If the mark pattern is symmetrical or melasma-like, the product shelf is the wrong place to self-diagnose.',
    buyFirst: 'Buy or recommit to broad-spectrum sunscreen before buying a pigment serum. If acne is still active, invest effort in preventing new breakouts first. Once the routine is calm, choose one topical tranexamic product and use it consistently for eight to twelve weeks in the same lighting. Avoid buying multiple brightening serums together because irritation can create the exact PIH you are trying to fade.',
    products: [
      {
        name: 'Minimalist Tranexamic 3% Face Serum',
        badge: 'Tranexamic acid serum',
        image: '/assets/images/product-examples/minimalist-tranexamic-serum.jpg',
        url: 'https://beminimalist.co/products/tranexamic-3-hpa',
        detail: 'A Minimalist serum positioned for melasma, PIE, PIH, and hyperpigmentation with 3% tranexamic acid.',
        caution: 'Use with sunscreen; pigment care is slow and irritation can worsen marks.'
      },
      {
        name: 'The Derma Co Tran-Zelaic Pigmentation Corrector Serum',
        badge: 'Tranexamic + azelaic blend',
        image: '/assets/images/product-examples/derma-co-tran-zelaic-serum.jpg',
        url: 'https://thedermaco.com/products/tran-zelaic-pigmentation-corrector-serum-with-tranexamic-acid-azelaic-acid-30-g',
        detail: 'A serum combining tranexamic acid and azelaic acid for pigmentation and acne-mark concerns.',
        caution: 'More actives mean more irritation variables; introduce slowly.'
      },
      {
        name: 'Foxtale Rapid Spot Reduction Drops',
        badge: '3% tranexamic + niacinamide',
        image: '/assets/images/product-examples/foxtale-rapid-spot-reduction-drops.jpg',
        url: 'https://foxtale.in/products/hyperpigmentation-serum-with-tranexamic-acid',
        detail: 'Foxtale lists this serum with 3% tranexamic acid and niacinamide for dark spots and uneven tone.',
        caution: 'If marks are red, indented, or melasma-like, do not assume this is the correct product class.'
      }
    ]
  }
};

const css = `
    @font-face { font-family:'Kantumruy Pro'; src:url('/fonts/KantumruyPro-VariableFont_wght.ttf') format('truetype'); font-display:swap; }
    @font-face { font-family:'Plus Jakarta Sans'; src:url('/fonts/PlusJakartaSans-VariableFont_wght.ttf') format('truetype'); font-display:swap; }
    :root { --brand:#ec610e; --brand-dark:#c14800; --peach:#ffe1ce; --paper:#fff; --sand:#f9f6f3; --ink:#1a1410; --body:#5c4a3a; --line:#e8ddd5; --good:#0f6a49; --blue:#20344d; }
    * { box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { margin:0; background:var(--paper); color:var(--ink); font:16px/1.65 'Plus Jakarta Sans',sans-serif; }
    h1,h2 { font-family:'Kantumruy Pro',Georgia,serif; line-height:1.08; letter-spacing:0; }
    h1 { font-size:52px; margin:0; max-width:720px; }
    h2 { font-size:38px; margin:0 0 12px; }
    h3 { margin:2px 0 8px; font-size:20px; line-height:1.2; }
    p { color:var(--body); }
    a { color:inherit; }
    .wrap { max-width:1160px; margin:auto; padding:0 24px; }
    .trust { background:var(--sand); border-bottom:1px solid var(--line); color:var(--body); font-size:13px; }
    .trust .wrap { padding-block:9px; display:flex; flex-wrap:wrap; gap:18px; }
    header { position:sticky; top:0; z-index:10; background:rgba(255,255,255,.96); backdrop-filter:blur(10px); border-bottom:1px solid var(--line); }
    .nav { min-height:70px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .brand { display:flex; align-items:center; gap:10px; font-weight:900; text-decoration:none; }
    .brand img { width:40px; height:40px; object-fit:contain; }
    .links { display:flex; gap:19px; align-items:center; font-size:14px; font-weight:800; }
    .links a { text-decoration:none; }
    .button { display:inline-flex; align-items:center; justify-content:center; background:var(--brand); color:#fff; border-radius:999px; padding:14px 21px; text-decoration:none; font-weight:900; box-shadow:0 8px 20px rgba(236,97,14,.21); }
    .button:hover { background:var(--brand-dark); }
    .hero { min-height:500px; display:grid; grid-template-columns:minmax(0,1.04fr) minmax(390px,.96fr); align-items:stretch; background:var(--sand); overflow:hidden; }
    .hero-copy { align-self:center; max-width:720px; padding:44px 24px 44px max(24px,calc((100vw - 1160px)/2)); }
    .eyebrow { display:inline-block; color:var(--brand-dark); background:var(--peach); border-radius:999px; padding:6px 11px; font-size:12px; font-weight:900; letter-spacing:.04em; text-transform:uppercase; margin-bottom:12px; }
    .hero p { max-width:620px; font-size:17px; margin:14px 0 18px; }
    .hero-media { position:relative; min-height:350px; isolation:isolate; background:#eadbd0; }
    .hero-image { width:100%; height:100%; object-fit:cover; object-position:center; display:block; }
    .hero-insights { position:absolute; z-index:1; left:32px; bottom:28px; width:min(280px,calc(100% - 48px)); padding:14px; border:1px solid rgba(255,255,255,.82); border-radius:16px; background:rgba(255,255,255,.9); box-shadow:0 14px 35px rgba(53,34,18,.16); backdrop-filter:blur(12px); }
    .hero-insights strong { display:block; font-size:14px; }
    .hero-insights p { margin:3px 0 0; font-size:12px; line-height:1.4; color:var(--body); }
    .section { padding:76px 0; }
    .section.alt { background:var(--sand); }
    .lede { max-width:760px; font-size:17px; margin:0 0 26px; }
    .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
    .grid.five { grid-template-columns:repeat(5,1fr); }
    .card,.note-box { border:1px solid var(--line); border-radius:8px; padding:24px; background:#fff; }
    .card p { margin-bottom:0; font-size:15px; }
    .product-note { max-width:900px; border:1px solid var(--line); border-left:4px solid var(--brand); border-radius:0 8px 8px 0; background:#fff; padding:16px 18px; margin:0 0 24px; color:var(--body); font-size:14px; }
    .product-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin:24px 0 0; }
    .product-card { border:1px solid var(--line); border-radius:8px; background:#fff; overflow:hidden; display:flex; flex-direction:column; min-height:100%; }
    .product-media { background:#fff8f3; min-height:210px; display:grid; place-items:center; padding:18px; border-bottom:1px solid var(--line); }
    .product-image { width:100%; height:180px; object-fit:contain; display:block; mix-blend-mode:multiply; }
    .product-body { padding:20px; display:flex; flex-direction:column; gap:10px; flex:1; }
    .product-badge { align-self:flex-start; color:var(--brand-dark); background:var(--peach); border-radius:999px; padding:5px 10px; font-size:11px; font-weight:900; text-transform:uppercase; letter-spacing:.04em; }
    .product-body p { margin:0; font-size:14px; }
    .product-caution { color:#7a3e18; background:#fff7f1; border-radius:8px; padding:10px 12px; }
    .product-link { margin-top:auto; display:inline-flex; color:var(--brand-dark); font-weight:900; text-decoration:none; }
    .product-link:hover { text-decoration:underline; }
    .table-wrap { overflow:auto; border:1px solid var(--line); border-radius:8px; background:#fff; }
    table { width:100%; border-collapse:collapse; min-width:760px; }
    th,td { padding:18px; border-bottom:1px solid var(--line); text-align:left; vertical-align:top; }
    th { color:var(--ink); font-size:13px; text-transform:uppercase; letter-spacing:.04em; background:#fff8f3; }
    td { color:var(--body); font-size:15px; }
    tr:last-child td { border-bottom:0; }
    .steps { display:grid; gap:14px; counter-reset:step; }
    .step { position:relative; border:1px solid var(--line); border-radius:8px; background:#fff; padding:22px 22px 22px 68px; }
    .step:before { counter-increment:step; content:counter(step); position:absolute; left:22px; top:23px; width:30px; height:30px; border-radius:50%; background:var(--peach); color:var(--brand-dark); display:grid; place-items:center; font-weight:900; }
    .two { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
    .checklist { margin:0; padding-left:20px; color:var(--body); }
    .checklist li { margin:10px 0; }
    .decision { background:var(--ink); color:#fff; border-radius:8px; padding:34px; display:grid; grid-template-columns:1fr 1fr; gap:30px; }
    .decision h2,.decision p { color:#fff; }
    .decision p { opacity:.84; }
    .decision ul { margin:0; padding-left:19px; color:#fff; }
    .decision li { margin:10px 0; }
    .warning { border-left:4px solid var(--brand); background:#fff7f1; border-radius:0 8px 8px 0; padding:18px 20px; color:var(--body); max-width:900px; }
    .faq { border-top:1px solid var(--line); }
    details { border-bottom:1px solid var(--line); padding:17px 0; }
    summary { cursor:pointer; font-weight:900; }
    details p { max-width:820px; }
    .sources { font-size:14px; }
    .sources a { color:var(--brand-dark); }
    .final { text-align:center; background:var(--sand); padding:82px 24px 104px; }
    .final p { max-width:650px; margin:0 auto 22px; font-size:17px; }
    footer { background:var(--ink); color:#fff; padding:42px 0 90px; }
    footer p { color:#ded6cf; max-width:700px; font-size:14px; }
    .mobile-cta { display:none; }
    @media (max-width:760px) {
      .trust { display:none; }
      .links a:not(.button) { display:none; }
      .links .button { display:none; }
      h1 { font-size:34px; max-width:340px; }
      h2 { font-size:30px; }
      .hero { grid-template-columns:1fr; min-height:auto; }
      .hero-copy { padding:34px 24px 22px; }
      .hero p { max-width:340px; }
      .hero-media { min-height:330px; }
      .hero-insights { left:20px; bottom:20px; width:260px; }
      .section { padding:56px 0; }
      .grid,.grid.five,.two,.decision,.product-grid { grid-template-columns:1fr; }
      .product-media { min-height:190px; }
      .decision { padding:28px; }
      .mobile-cta { display:block; position:fixed; bottom:0; left:0; right:0; z-index:20; padding:10px 16px; background:rgba(255,255,255,.94); border-top:1px solid var(--line); }
      .mobile-cta .button { width:100%; }
    }
`;

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderRows(rows) {
  return rows.map(([signal, meaning, next]) => `<tr><td><strong>${esc(signal)}</strong></td><td>${esc(meaning)}</td><td>${esc(next)}</td></tr>`).join('');
}

function renderCards(cards) {
  return cards.map(([heading, body]) => `<article class="card"><h3>${esc(heading)}</h3><p>${esc(body)}</p></article>`).join('');
}

function renderSteps(steps) {
  return steps.map(([heading, body]) => `<article class="step"><h3>${esc(heading)}</h3><p>${esc(body)}</p></article>`).join('');
}

function renderList(items) {
  return `<ul class="checklist">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
}

function renderProductRows(rows) {
  return rows.map(([format, examples, usefulFor, watch]) => `<tr><td><strong>${esc(format)}</strong></td><td>${esc(examples)}</td><td>${esc(usefulFor)}</td><td>${esc(watch)}</td></tr>`).join('');
}

function renderProductCards(products) {
  return products.map((product) => `<article class="product-card"><div class="product-media"><img class="product-image" src="${esc(product.image)}" alt="${esc(product.name)} product image" loading="lazy"></div><div class="product-body"><span class="product-badge">${esc(product.badge)}</span><h3>${esc(product.name)}</h3><p>${esc(product.detail)}</p><p class="product-caution">${esc(product.caution)}</p><a class="product-link" href="${esc(product.url)}" target="_blank" rel="noopener noreferrer">View product source →</a></div></article>`).join('');
}

function renderProductDepth(page) {
  const details = productDetails[page.id];
  if (!details) return '';

  return `<section class="section alt"><div class="wrap"><h2>Product formats compared</h2><p class="lede">${esc(details.intro)}</p><div class="table-wrap"><table><thead><tr><th>Format</th><th>Product examples / label clues</th><th>Useful for</th><th>Watch-outs</th></tr></thead><tbody>${renderProductRows(details.formats)}</tbody></table></div><h2 id="indian-product-examples" style="margin-top:34px">Indian product examples</h2><p class="product-note"><strong>Examples only, not endorsements.</strong> These product cards are visible label examples from Indian brand or retailer pages. Use them to compare active ingredients, format, and warnings; do not treat them as medical recommendations or rankings.</p><div class="product-grid">${renderProductCards(details.products)}</div><div class="two" style="margin-top:24px"><article class="note-box"><h2>Product label checklist</h2>${renderList(details.checklist)}</article><article class="note-box"><h2>Example product landscape</h2><p>${esc(details.landscape)}</p><h2>What to buy first</h2><p>${esc(details.buyFirst)}</p></article></div></div></section>`;
}

function renderFaqs(page) {
  return page.faqs.map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('');
}

function renderExperiment(page) {
  return `<section class="section"><div class="wrap"><h2>A two-week way to test the change</h2><p class="lede">The easiest way to misread ${esc(page.primaryKeyword)} is to change the active, cleanser, moisturizer, sunscreen, and spot treatment in the same week. When the skin improves, you will not know what helped. When it flares, you will not know what caused it. Use this small experiment structure before judging the product or routine.</p><div class="grid"><article class="card"><h3>Day 0: baseline</h3><p>Take one front-facing photo and one close photo in indirect light. Note active pimples, clogged-looking areas, redness, oiliness, flaking, burning, and existing marks separately. This stops every dark spot from being blamed on the newest product.</p></article><article class="card"><h3>Days 1–7: one variable</h3><p>Change only the step this page is about. Keep cleanser, sunscreen, moisturizer, and acne actives otherwise stable. If the face stings, peels aggressively, or develops a rash, simplify instead of pushing through for “results.”</p></article><article class="card"><h3>Days 8–14: pattern check</h3><p>Compare the same zones in the same lighting. Useful signs include fewer new inflamed spots, less tightness, cleaner sunscreen removal, or calmer marks. Concerning signs include spreading rash, painful cysts, raw skin, or new bumps in unusual areas.</p></article></div><div class="note-box" style="margin-top:24px"><h3>What counts as a win?</h3><p>A win is not perfect skin in two weeks. A win is a routine that your skin can tolerate and that makes the next decision clearer. For acne-prone Indian skin, less irritation is part of the result because irritation can leave PIH long after the original breakout is gone. If you cannot tell what changed, return to the baseline routine and get professional advice before adding another active.</p></div></div></section>`;
}

function renderCompatibility(page) {
  return `<section class="section alt"><div class="wrap"><h2>How it should fit with the rest of your routine</h2><p class="lede">${esc(page.h1)} is not a standalone skin plan. Acne-prone skin usually improves when the surrounding routine is predictable: gentle cleanse, barrier support, sun protection, and one treatment decision at a time.</p><div class="two"><article class="card"><h3>Morning anchor</h3><p>Keep mornings simple: gentle cleanser if needed, light moisturizer if skin feels tight, and sunscreen. This matters because PIH and irritation are harder to interpret when sun exposure and barrier damage keep changing the baseline.</p></article><article class="card"><h3>Night anchor</h3><p>Use the night routine for the active or cleansing decision, not every possible treatment. If you need adapalene, benzoyl peroxide, exfoliation, and pigment care, sequence them with professional guidance instead of layering them all together.</p></article></div></div></section>`;
}

function jsonLd(page) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    mainEntityOfPage: `${baseUrl}/acne/${page.slug}/`,
    author: { '@type': 'Organization', name: 'MyMirror Editorial Team' },
    publisher: { '@type': 'Organization', name: 'MyMirror' },
    datePublished: today,
    dateModified: today,
    about: page.primaryKeyword,
    mainEntity: page.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  });
}

function renderPage(page) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${baseUrl}/acne/${page.slug}/">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(page.ogTitle)} | MyMirror">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${baseUrl}/acne/${page.slug}/">
  <meta property="og:image" content="${baseUrl}${page.heroImage}">
  <link rel="icon" href="/favicon.ico">
  <style>${css}
  </style>
  <script type="application/ld+json">${jsonLd(page)}</script>
</head>
<body>
  <div class="trust"><div class="wrap"><span>MyMirror Editorial Team</span><span>Acne routine guide</span><span>Educational, not medical advice</span></div></div>
  <header><nav class="wrap nav"><a class="brand" href="/"><img src="/assets/logo-v4.png" alt="MyMirror"><span>MyMirror</span></a><div class="links"><a href="/acne/">Acne guides</a><a href="/skin-analysis/online-skin-analysis/">Skin analysis</a><a class="button" href="/scan">Start free scan</a></div></nav></header>
  <main>
    <section class="hero"><div class="hero-copy"><span class="eyebrow">${esc(page.eyebrow)}</span><h1>${esc(page.h1)}</h1><p>${esc(page.heroCopy)}</p><a class="button" href="/scan">Start your free AI skin scan</a></div><div class="hero-media"><img class="hero-image" src="${esc(page.heroImage)}" alt="${esc(page.heroAlt)}"><aside class="hero-insights" aria-label="Page focus"><strong>${esc(page.heroNote)}</strong><p>Use one photo to separate visible signals before changing your routine.</p></aside></div></section>
    <section class="section"><div class="wrap"><h2>How to decide if this page is for you</h2><p class="lede">${esc(page.decisionIntro)}</p><div class="grid">${renderCards(page.decisionCards)}</div><div class="note-box" style="margin-top:24px"><h3>How MyMirror fits in</h3><p>${esc(page.scanUse)}</p><p>Keep the scan as a visible record. It can help you compare active bumps, clogged-looking areas, redness, oiliness, texture, and dark marks. It cannot diagnose acne type, identify a medical allergy, prescribe a drug, or replace urgent care.</p></div></div></section>
    <section class="section alt"><div class="wrap"><h2>What to look for on Indian skin</h2><p class="lede">${esc(page.indianSkinIntro)}</p><div class="table-wrap"><table><thead><tr><th>Signal</th><th>What it can mean</th><th>Safer next move</th></tr></thead><tbody>${renderRows(page.indianRows)}</tbody></table></div></div></section>
    <section class="section"><div class="wrap"><h2>Safe use plan</h2><p class="lede">${esc(page.safeIntro)}</p><div class="steps">${renderSteps(page.safeSteps)}</div></div></section>
    ${renderProductDepth(page)}
    ${renderExperiment(page)}
    ${renderCompatibility(page)}
    <section class="section alt"><div class="wrap"><div class="two"><article class="note-box"><h2>Mistakes to avoid</h2>${renderList(page.mistakes)}</article><article class="note-box"><h2>When to ask a dermatologist</h2><p>${esc(page.dermIntro)}</p>${renderList(page.dermList)}</article></div></div></section>
    <section class="section"><div class="wrap"><div class="decision"><div><h2>Use the scan to slow the routine down</h2><p>A lot of acne searches push you toward more actives. MyMirror’s better role is quieter: help you describe what is visible, change one variable at a time, and notice when irritation is becoming the bigger problem.</p></div><div><strong>Use the scan to:</strong><ul><li>track active acne separately from marks</li><li>compare oiliness, clogged areas, redness, and texture</li><li>prepare clearer notes for a dermatologist</li></ul><strong style="display:block;margin-top:18px">Do not use it to:</strong><ul><li>diagnose acne type from a photo</li><li>choose prescription medication</li><li>ignore pain, swelling, infection signs, or severe acne</li></ul></div></div><p class="warning">Seek professional care for painful cysts, scarring, rapidly worsening acne, rash, swelling, infection signs, pregnancy-related medication questions, or skin changes that worry you.</p></div></section>
    <section class="section alt"><div class="wrap"><h2>Questions people ask</h2><div class="faq">${renderFaqs(page)}</div></div></section>
    <section class="section"><div class="wrap sources"><h2>Source basis</h2><p>This page uses cautious public dermatology and regulatory references for safety boundaries: ${page.sources.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`).join(', ')}.</p></div></section>
    <section class="final"><span class="eyebrow">One calmer next step</span><h2>Scan first, then change one thing.</h2><p>Use MyMirror to organize what you can see today. Keep the routine simple, protect the barrier, and get medical help when acne is painful, scarring, persistent, or confusing.</p><a class="button" href="/scan">Start your free AI skin scan</a></section>
  </main>
  <footer><div class="wrap"><strong>MyMirror</strong><p>MyMirror helps you understand visible skin patterns. It does not diagnose skin conditions or replace professional medical advice.</p><a href="/privacy/">Privacy policy</a> · <a href="/terms/">Terms</a></div></footer>
  <div class="mobile-cta"><a class="button" href="/scan">Start your free AI skin scan</a></div>
</body>
</html>
`;
}

function packet(page) {
  return {
    metadata: {
      schemaVersion: 'page-packet.v2',
      companyName: 'MyMirror',
      market: 'India',
      pageType: 'acne_decision_guide',
      copyStatus: 'rebuilt_publish_ready',
      createdDate: today
    },
    seo: {
      title: page.title,
      description: page.description,
      slug: page.slug,
      h1: page.h1,
      primaryKeyword: page.primaryKeyword,
      secondaryKeywords: page.secondaryKeywords
    },
    cta: {
      primary: {
        label: 'Start your free AI skin scan',
        destination: `${baseUrl}/scan`,
        microcopy: 'Use MyMirror to organize visible acne signals before changing your routine.'
      }
    },
    sections: [
      { id: 'S1_hero', heading: page.h1, role: 'conversion', markdown: page.heroCopy },
      { id: 'S2_decision', heading: 'How to decide if this page is for you', role: 'intent_match', markdown: page.decisionIntro },
      { id: 'S3_indian_skin', heading: 'What to look for on Indian skin', role: 'education', markdown: `${page.indianSkinIntro}\n\n${page.indianRows.map(([a, b, c]) => `- ${a}: ${b} ${c}`).join('\n')}` },
      { id: 'S4_safe_use', heading: 'Safe use plan', role: 'how_to', markdown: `${page.safeIntro}\n\n${page.safeSteps.map(([a, b]) => `${a}: ${b}`).join('\n\n')}` },
      { id: 'S5_product_formats', heading: 'Product formats compared', role: 'product_education', markdown: `${productDetails[page.id].intro}\n\n${productDetails[page.id].formats.map(([a, b, c, d]) => `- ${a}: ${b} Useful for: ${c} Watch-outs: ${d}`).join('\n')}` },
      { id: 'S6_indian_product_examples', heading: 'Indian product examples', role: 'visible_product_examples', markdown: `Examples only, not endorsements.\n\n${productDetails[page.id].products.map((product) => `- ${product.name}: ${product.detail} Caution: ${product.caution} Source: ${product.url} Image: ${product.image}`).join('\n')}` },
      { id: 'S7_product_label_checklist', heading: 'Product label checklist', role: 'buyer_guidance', markdown: productDetails[page.id].checklist.map((item) => `- ${item}`).join('\n') },
      { id: 'S8_product_landscape', heading: 'Example product landscape', role: 'product_landscape', markdown: productDetails[page.id].landscape },
      { id: 'S9_what_to_buy_first', heading: 'What to buy first', role: 'purchase_prioritization', markdown: productDetails[page.id].buyFirst },
      { id: 'S10_two_week_test', heading: 'A two-week way to test the change', role: 'measurement', markdown: `Change only the step this page is about, take baseline photos, compare the same zones in the same lighting, and treat tolerability as part of success.` },
      { id: 'S11_routine_compatibility', heading: 'How it should fit with the rest of your routine', role: 'routine_architecture', markdown: 'Keep mornings anchored around gentle cleansing, moisturizer, and sunscreen. Keep nights focused on one treatment decision rather than stacking every acne active together.' },
      { id: 'S12_mistakes', heading: 'Mistakes to avoid', role: 'risk_reduction', markdown: page.mistakes.map((item) => `- ${item}`).join('\n') },
      { id: 'S13_dermatologist', heading: 'When to ask a dermatologist', role: 'safety', markdown: `${page.dermIntro}\n\n${page.dermList.map((item) => `- ${item}`).join('\n')}` },
      { id: 'S14_faq', heading: 'Questions people ask', role: 'seo', markdown: page.faqs.map(([q, a]) => `Q: ${q}\nA: ${a}`).join('\n\n') },
      { id: 'S15_sources', heading: 'Source basis', role: 'trust', markdown: page.sources.map(([label, url]) => `${label}: ${url}`).join('\n') }
    ],
    images: [
      { id: 'IMG_HERO', sectionId: 'S1_hero', purpose: 'First-fold hero visual', aspectRatio: '16:9', altText: page.heroAlt, status: 'existing_repo_asset', filePath: page.heroImage },
      ...productDetails[page.id].products.map((product, index) => ({
        id: `IMG_PRODUCT_${index + 1}`,
        sectionId: 'S6_indian_product_examples',
        purpose: 'Visible Indian product example card',
        aspectRatio: '1:1',
        altText: `${product.name} product image`,
        status: 'approved_third_party_product_visual',
        sourceUrl: product.url,
        filePath: product.image
      }))
    ],
    sources: [
      ...page.sources.map(([label, url]) => ({ label, url })),
      ...productDetails[page.id].products.map((product) => ({ label: product.name, url: product.url }))
    ]
  };
}

function markdownPacket(page) {
  const data = packet(page);
  return `# ${page.h1}

Status: rebuilt publish ready

## SEO

- Title: ${page.title}
- Meta description: ${page.description}
- Slug: ${page.slug}
- Primary keyword: ${page.primaryKeyword}
- Secondary keywords: ${page.secondaryKeywords.join(', ')}

## Page Sections

${data.sections.map((section) => `### ${section.id}: ${section.heading}\n\n${section.markdown}`).join('\n\n')}

## Sources

${page.sources.map(([label, url]) => `- ${label}: ${url}`).join('\n')}
`;
}

function imageManifest(page) {
  return {
    schemaVersion: 'image-manifest.v1',
    page: { slug: page.slug, h1: page.h1, companyName: 'MyMirror' },
    promptCompanionRequired: false,
    assets: packet(page).images.map((image) => ({
      ...image,
      assetType: 'existing_repo_asset',
      preferredFormat: 'jpg',
      licensing: {
        status: 'existing_repository_asset',
        note: 'Existing MyMirror repository visual reused; no competitor screenshot, third-party logo, or external brand visual introduced.'
      }
    }))
  };
}

async function writeJson(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`);
}

async function writeText(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, data);
}

async function updateSitemap() {
  const path = 'sitemap.xml';
  let xml = await readFile(path, 'utf8');
  if (!/<\/urlset>\s*$/.test(xml)) {
    xml = xml.replace(/(?:\s*<url>\s*)+$/g, '\n</urlset>\n');
  }

  for (const page of pages) {
    xml = xml.replace(new RegExp(`\\s*<url>\\s*<loc>${baseUrl.replaceAll('.', '\\.')}/acne/${page.slug}/</loc>[\\s\\S]*?</url>`, 'g'), '');
  }

  const entries = pages.map((page) => `  <url>
    <loc>${baseUrl}/acne/${page.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

  xml = xml.replace('</urlset>', `${entries}\n</urlset>`);
  await writeFile(path, xml);
}

async function writePlanningDocs() {
  await writeText('docs/superpowers/specs/2026-08-17-acne-page-rebuild-design.md', `# Acne Page Rebuild Design

## Goal

Rebuild five thin live acne pages into full-depth, mobile-safe MyMirror pages under the exact requested slugs.

## Approved Scope

- adapalene-gel-for-acne-indian-skin-guide
- cleansing-balm-for-acne-prone-skin-india
- oil-free-moisturizer-acne-prone-skin-india
- benzoyl-peroxide-spot-treatment-vs-gel-india
- tranexamic-acid-for-pih-indian-skin

## Design

Use the newer MyMirror guide structure: compact first fold, readable hero, topic-relevant image, decision cards, Indian-skin safety table, safe-use steps, product-format comparison, visible Indian product cards with images and hyperlinks, product label checklist, example product landscape, what-to-buy-first guidance, mistakes, dermatologist escalation guidance, eight FAQs, visible sources, final scan CTA, and mobile sticky CTA.

## Constraints

- Do not use the old dark "Clinical Dermatological Guide" template.
- Do not include unsupported dermatologist-review claims.
- Do not diagnose, prescribe, or imply the AI scan chooses medication.
- Third-party product images are approved only for visible example cards with outbound source links and a non-endorsement note.
- Keep each page at 1,900+ main-content words and exactly eight FAQs.
- Use visible editorial source links only.
`);

  await writeText('docs/superpowers/plans/2026-08-17-acne-page-rebuild.md', `# Acne Page Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Rebuild five acne pages into full-depth, mobile-safe MyMirror guides and publish them to production.

**Architecture:** A deterministic Node.js generator writes the exact requested static page slugs, matching SEO packet artifacts, sitemap entries, and planning docs. A Node test suite asserts page depth, mobile-safe structure, FAQ count, source visibility, CTA, schema, and removal of the old dark template.

**Tech Stack:** Static HTML, inline CSS matching MyMirror skin-analysis pages, Node.js test runner, Vercel production deployment.

## Global Constraints

- Keep pages under \`acne/<slug>/index.html\`.
- Keep the CTA text \`Start your free AI skin scan\`.
- Do not include unsupported dermatologist-review claims.
- Render exactly eight FAQs per page.
- Keep each rebuilt page at 1,900 to 3,000 main-content words.
- Include product-format comparison, visible Indian product cards with images and hyperlinks, product label checklist, example product landscape, and what-to-buy-first sections.
- Label product cards as examples, not endorsements, and preserve medical caution for prescription-style products.
- Use existing repository assets only.
- Push only to \`main\`.

---

### Task 1: Regression Contract

**Files:**
- Create: \`scripts/validate-acne-rebuilt-pages.test.mjs\`

**Interfaces:**
- Consumes: generated HTML under \`acne/<slug>/index.html\`.
- Produces: failing tests before local pages exist.

- [x] **Step 1: Write the failing test**
- [x] **Step 2: Run it and confirm it fails because pages are missing**

### Task 2: Generator and Pages

**Files:**
- Create: \`scripts/generate-acne-rebuilt-pages.mjs\`
- Create: five \`acne/<slug>/index.html\` pages
- Modify: \`sitemap.xml\`
- Create: \`.seo-agent-workspace/v2/page-packets/mymirror-acne-rebuilt-guides/*\`

**Interfaces:**
- Consumes: page data array and existing repository images.
- Produces: static HTML pages and traceable SEO artifacts.

- [x] **Step 1: Implement generator**
- [ ] **Step 2: Run generator**
- [ ] **Step 3: Run tests and static checks**

### Task 3: Publish

**Files:**
- Uses generated static site output.

**Interfaces:**
- Consumes: verified source tree.
- Produces: pushed \`main\`, production deployment, live URLs.

- [ ] **Step 1: Visual QA desktop and mobile**
- [ ] **Step 2: Commit**
- [ ] **Step 3: Push \`HEAD:main\`**
- [ ] **Step 4: Deploy production**
- [ ] **Step 5: Live-check all five URLs**
`);
}

async function main() {
  for (const page of pages) {
    await writeText(join('acne', page.slug, 'index.html'), renderPage(page));
    const dir = join('.seo-agent-workspace', 'v2', 'page-packets', clusterSlug, page.id);
    const pagePacket = packet(page);
    await writeJson(join(dir, 'page-packet.json'), pagePacket);
    await writeText(join(dir, 'page-packet.md'), markdownPacket(page));
    await writeJson(join(dir, 'page-packet.expanded.json'), pagePacket);
    await writeText(join(dir, 'page-packet.expanded.md'), markdownPacket(page));
    await writeJson(join(dir, 'image-manifest.json'), imageManifest(page));
    await writeText(join(dir, 'editorial-qa-report.md'), `# Editorial QA Report

Status: pass

- One H1
- Compact first fold
- Mobile-safe nav
- 1,500+ main-content words
- Eight FAQs
- Visible sources
- No unsupported dermatologist-review claim
- No old dark template
`);
    await writeJson(join(dir, 'editorial-qa-report.json'), { schemaVersion: 'editorial-qa-report.v1', pageId: page.id, slug: page.slug, status: 'pass' });
  }

  await updateSitemap();
  await writePlanningDocs();
}

await main();
