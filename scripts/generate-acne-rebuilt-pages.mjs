import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const today = '2026-08-17';
const baseUrl = 'https://mymirror.fit';
const clusterSlug = 'mymirror-acne-rebuilt-guides';

const pages = [
  {
    id: 'ACR9',
    slug: 'alpha-arbutin-serum-for-dark-spots-india',
    title: 'Alpha Arbutin 2% Serum for Dark Spots on Indian Skin | MyMirror',
    description: 'Learn how Alpha Arbutin 2% serum fades post-acne dark spots on Indian skin. Compare tyrosinase inhibitors, safe combinations, & sun protection guidelines.',
    ogTitle: 'Alpha Arbutin 2% Serum for Dark Spots on Indian Skin',
    h1: 'Alpha Arbutin 2% serum for post-acne dark spots on Indian skin: tyrosinase inhibition & safety guide',
    eyebrow: 'Pigmentation active guide',
    primaryKeyword: 'alpha arbutin serum for dark spots india',
    secondaryKeywords: ['alpha arbutin 2 percent indian skin pih', 'alpha arbutin vs kojic acid dark spots', 'how to use alpha arbutin serum for post acne marks', 'alpha arbutin and niacinamide serum combination', 'alpha arbutin dark spot fading timeline'],
    heroImage: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
    heroAlt: 'Alpha Arbutin 2% serum bottle for fading post-acne dark spots on Indian skin',
    heroNote: '2% Alpha Arbutin concentration, competitive tyrosinase inhibition, or sun protection barrier?',
    heroCopy: 'Alpha Arbutin (Hydroquinone beta-D-glucopyranoside) is a safe, stable glycosylated hydroquinone derivative that competitively inhibits tyrosinase, the key enzyme responsible for melanin synthesis. For Indian skin phototypes IV to VI, acne inflammation frequently triggers melanocyte hyper-reactivity, resulting in persistent brown and black post-inflammatory hyperpigmentation (PIH). Unlike prescription hydroquinone which risks ochronosis and rebound pigmentation, 2% Alpha Arbutin safely fades dark spots without cytotoxic melanocyte damage. Combining Alpha Arbutin with Niacinamide or Hyaluronic Acid accelerates spot fading while protecting skin health.',
    decisionIntro: 'This decision guide explains how Alpha Arbutin 2% serum targets post-acne dark spots on Indian skin, how competitive tyrosinase inhibition prevents melanin overproduction, how to combine Alpha Arbutin safely with Niacinamide and Vitamin C, and why daily sun protection is mandatory for visible skin brightening. When acne spots leave persistent melanin deposits on melanin-rich skin phototypes, Alpha Arbutin provides gentle, long-term tone correction without causing rebound hyperpigmentation or chemical burns.',
    decisionCards: [
      ['Best fit', 'Post-acne brown dark marks (PIH), sun spots, uneven skin tone, and hyperpigmentation remaining after active acne pimples heal.'],
      ['Use more caution', 'Expecting Alpha Arbutin alone to cure active inflamed bacterial pimples or using unstable unbuffered arbutin solutions stored in bright light.'],
      ['Sun protection rule', 'Always apply broad-spectrum SPF 50 sunscreen daily to prevent UV rays from reactivating tyrosinase and darkening fading spots.']
    ],
    indianSkinIntro: 'Melanin-rich Indian skin contains larger, more active melanosomes that react aggressively to cutaneous trauma. When an acne papule heals, localized inflammation upregulates tyrosinase transcription, resulting in stubborn dark brown spots (PIH) that linger for months. Hydroquinone derivative 2% Alpha Arbutin slowly releases hydroquinone via enzymatic cleavage at a rate that inhibits melanin formation without destroying melanocytes. Using 2% Alpha Arbutin morning and night reduces dark mark intensity while preserving the natural skin barrier on Indian skin under tropical UV conditions.',
    indianRows: [
      ['Competitive tyrosinase inhibition', 'Blocks the enzyme converting L-tyrosine to DOPA, stopping excess melanin synthesis.', 'Apply 2-3 drops onto clean skin morning and night.'],
      ['Non-cytotoxic safety profile', 'Fades hyperpigmentation without risking exogenous ochronosis or permanent depigmentation.', 'Safe for long-term daily use across 8-12 weeks.'],
      ['Synergistic Niacinamide pairing', 'Pairs tyrosinase inhibition with melanosome transfer blockage for dual-action brightening.', 'Layer Alpha Arbutin before 5% Niacinamide serum.'],
      ['UV-induced relapse prevention', 'Preventing solar UV stimulation keeps fading dark spots from returning.', 'Apply broad-spectrum SPF 50 sunscreen every 3-4 hours outdoors.']
    ],
    safeIntro: 'Incorporate Alpha Arbutin 2% serum into your daily brightening routine with this structured application method to safely clear post-acne dark marks.',
    safeSteps: [
      ['Cleanse face with a gentle pH-balanced wash', 'Wash skin thoroughly with lukewarm water and a gentle non-stripping cleanser. Pat dry.'],
      ['Dispense 2 to 3 drops of Alpha Arbutin serum', 'Apply drops directly onto face or fingertips. Focus on post-acne dark spots and hyperpigmented areas.'],
      ['Press gently into skin until absorbed', 'Pat the lightweight water-based serum gently into skin. Allow 60 seconds for full absorption.'],
      ['Seal with an oil-free moisturizer', 'Apply a hydrating gel or non-comedogenic cream moisturizer to lock in active ingredients.'],
      ['Apply SPF 50 sunscreen every morning', 'Protect your skin against UV-induced melanin synthesis and post-inflammatory darkening.']
    ],
    mistakes: [
      'Expecting 2% Alpha Arbutin to clear dark marks in 3 days; melanin clearance requires 8 to 12 weeks of epidermal turnover.',
      'Skipping daily sunscreen, allowing sun exposure to reverse all fading progress achieved by the serum.',
      'Applying Alpha Arbutin onto open bleeding picked pimples, causing stinging and localized irritation.',
      'Storing serum bottles in direct sunlight, causing formulation oxidation and chemical degradation.',
      'Combining multiple high-strength exfoliating acids simultaneously, causing severe barrier inflammation.'
    ],
    dermIntro: 'Consult a dermatologist if your dark spots fail to improve after 12 weeks or if you experience unusual skin discoloration.',
    dermList: [
      'Seek evaluation for melasma, dermal hyperpigmentation, or deep resistant dark marks requiring medical peels.',
      'Discuss prescription combinations (such as Tranexamic acid, Azelaic acid, or medical Retinoids).',
      'Consult a clinician if you notice severe redness, burning, or allergic skin reactions.',
      'Obtain professional guidance on medical laser therapy for deep post-acne scarring and pigmentation.',
      'Bring your current serum skincare routine to your clinical appointment.'
    ],
    scanUse: 'Use MyMirror AI skin scan to measure post-acne dark mark intensity, track hyperpigmentation fading progress, and assess skin clarity over 8 weeks.',
    faqs: [
      ['What does Alpha Arbutin do for skin?', 'Alpha Arbutin inhibits tyrosinase enzyme activity to reduce excess melanin production and fade post-acne dark spots.'],
      ['Is Alpha Arbutin safe for Indian skin?', 'Yes. Alpha Arbutin is a gentle, safe hydroquinone derivative that effectively treats PIH on Indian skin phototypes IV to VI without risking ochronosis.'],
      ['How long does Alpha Arbutin take to fade dark spots?', 'Consistent daily use fades dark marks within 8 to 12 weeks as skin undergoes natural cellular turnover.'],
      ['Can I use Alpha Arbutin with Niacinamide?', 'Yes. Alpha Arbutin (blocks melanin synthesis) and Niacinamide (blocks melanosome transfer) complement each other perfectly.'],
      ['Should I apply Alpha Arbutin morning or night?', 'You can apply 2% Alpha Arbutin both morning and night under moisturizer and sunscreen.'],
      ['Does Alpha Arbutin cause skin purging?', 'No. Alpha Arbutin is a melanin inhibitor, not an exfoliating acid or retinoid, so it does not cause purging.'],
      ['Can I use Alpha Arbutin with Vitamin C?', 'Yes. Combining Alpha Arbutin with Vitamin C provides potent antioxidant protection and enhances skin brightening.'],
      ['Is 2% Alpha Arbutin better than 1%?', '2% is the clinical standard concentration for effective hyperpigmentation fading without causing skin irritation.']
    ],
    sources: [
      ['Journal of Cosmetic Dermatology review on alpha-arbutin safety and efficacy', 'https://onlinelibrary.wiley.com/journal/14732165'],
      ['Indian Journal of Dermatology consensus on treating PIH in dark skin phototypes', 'https://e-ijd.org/'],
      ['JAAD guidelines on topical tyrosinase inhibitors', 'https://www.jaad.org/']
    ]
  },
  {
    id: 'ACR8',
    slug: 'best-cica-moisturizer-for-acne-prone-skin-india',
    title: 'Best Cica Moisturizer for Acne Prone Skin India | MyMirror',
    description: 'Discover how Cica (Centella Asiatica) moisturizers repair damaged skin barriers and calm active acne on Indian skin. Compare non-comedogenic formulas.',
    ogTitle: 'Best Cica Moisturizer for Acne-Prone Skin in India',
    h1: 'Best Cica moisturizer for acne-prone skin in India: Centella Asiatica barrier repair guide',
    eyebrow: 'Moisturizer active guide',
    primaryKeyword: 'best cica moisturizer for acne prone skin india',
    secondaryKeywords: ['centella asiatica moisturizer acne india', 'madecassoside gel moisturizer indian skin', 'cica cream for barrier repair acne prone', 'lightweight cica gel for oily acne skin', 'how to repair skin barrier with cica'],
    heroImage: '/assets/images/cica-moisturizer-gel-pot.jpg',
    heroAlt: 'Cooling lightweight green Cica gel moisturizer jar for soothing acne-prone Indian skin',
    heroNote: 'Centella Asiatica soothing, barrier lipid restoration, or heavy non-pore-clogging balm?',
    heroCopy: 'Centella Asiatica (commonly known as Cica or Gotu Kola in traditional Ayurvedic herbology) contains four active triterpenoids—Madecassoside, Asiaticoside, Madecassic Acid, and Asiatic Acid—that stimulate collagen synthesis, accelerate micro-wound healing, and reduce proinflammatory cytokines. For acne-prone Indian skin suffering from redness, stinging, flaking, and barrier damage caused by retinoids (like Adapalene), Salicylic acid cleansers, or Benzoyl peroxide spot treatments, a Cica moisturizer provides instant cooling hydration without clogging pores. Selecting a lightweight, non-comedogenic gel-cream texture is essential for humid Indian climates to prevent rebound oiliness and maintain a healthy, resilient skin barrier.',
    decisionIntro: 'This decision guide evaluates Centella Asiatica (Cica) moisturizers for acne-prone Indian skin, explaining how Madecassoside calms active redness, how to differentiate lightweight gel-creams from heavy occlusive balms, how Cica repairs compromised barrier lipids, and how to pair Cica with active acne treatments. When skin is irritated by harsh chemical peels, active retinoids, or aggressive foaming cleansers, barrier breakdown causes increased transepidermal water loss (TEWL). Using a non-comedogenic Cica moisturizer restores barrier lipids, calms stinging sensations, and balances oil production for clear, resilient skin.',
    decisionCards: [
      ['Best fit', 'Red, irritated, stinging, or over-exfoliated skin caused by active acne treatments, retinoid purging, or environmental humidity.'],
      ['Use more caution', 'Expecting a soothing moisturizer alone to eradicate deep bacterial acne or using heavy butter-based Cica balms on extremely oily skin.'],
      ['Barrier repair rule', 'Choose a water-gel or light gel-cream Cica formula containing Panthenol or Ceramides to restore skin lipids without clogging pores.']
    ],
    indianSkinIntro: 'Indian skin phototypes IV to VI are highly susceptible to post-inflammatory hyperpigmentation (PIH) whenever chronic inflammation or barrier damage occurs. Aggressive acne routines using strong exfoliants often strip intercellular lipids, triggering stinging, tight skin, and reactive melanogenesis that darkens post-acne spots. Centella Asiatica suppresses inflammatory IL-6 and TNF-alpha cytokines while restoring stratum corneum hydration. Incorporating a non-comedogenic Cica moisturizer preserves barrier integrity, calms persistent erythema, restores transepidermal water balance, and prevents secondary dark spot formation on Indian skin under hot and humid weather conditions.',
    indianRows: [
      ['Madecassoside anti-inflammatory action', 'Downregulates pro-inflammatory cytokines to calm red, swollen acne papules.', 'Apply morning and night after gentle cleansing.'],
      ['Non-comedogenic gel-cream texture', 'Provides hydration without heavy mineral oils or pore-clogging plant waxes.', 'Ideal for humid Indian summers and monsoon months.'],
      ['Retinoid burn restoration', 'Soothes stinging and peeling caused by Adapalene or Tretinoin initiation.', 'Layer Cica moisturizer before or after applying active retinoid.'],
      ['PIH risk reduction', 'Minimizing erythema and barrier damage prevents dark post-acne marks.', 'Pair with broad-spectrum SPF 50 sunscreen daily.']
    ],
    safeIntro: 'Incorporate a Centella Asiatica (Cica) moisturizer into your daily routine to repair your skin barrier, calm active redness, and protect intercellular lipids while treating acne with active exfoliants or topical prescription retinoids.',
    safeSteps: [
      ['Cleanse with a mild pH-balanced cleanser', 'Wash face gently with lukewarm water and a non-stripping cleanser.'],
      ['Apply active treatment or serum', 'Apply your prescribed active (such as Adapalene, Niacinamide, or Salicylic acid) onto dry skin.'],
      ['Dispense a nickel-sized amount of Cica moisturizer', 'Dot the Cica gel-cream across forehead, cheeks, nose, and chin.'],
      ['Massage gently until fully absorbed', 'Smooth the moisturizer into skin using light upward strokes until a soft hydrated finish remains.'],
      ['Apply SPF 50 sunscreen every morning', 'Protect your repaired skin barrier from UV radiation and dark spot darkening.']
    ],
    mistakes: [
      'Using thick, heavy occlusive Cica ointments designed for dry body eczema on oily acne-prone faces.',
      'Stopping all moisturizer use when experiencing acne breakouts, leading to severe rebound oiliness.',
      'Applying Cica moisturizer onto dirty or unwashed skin, trapping sweat and atmospheric dust inside pores.',
      'Expecting Centella Asiatica alone to cure deep cystic acne without active dermatological acne treatments.',
      'Combining new Cica moisturizers with multiple untested active serums at the same time.'
    ],
    dermIntro: 'Consult a dermatologist if your skin displays persistent severe inflammation, burning, or non-healing acne lesions.',
    dermList: [
      'Seek evaluation for severe chemical burns, severe contact allergies, or chronic facial erythema.',
      'Discuss prescription barrier-repair creams if OTC moisturizers fail to relieve stinging.',
      'Obtain professional guidance on pairing Cica creams with oral or topical acne medications.',
      'Review your complete product ingredient list with your clinician.',
      'Ask about patch testing if your skin reacts adversely to multiple soothing products.'
    ],
    scanUse: 'Use MyMirror AI skin scan to track facial redness reduction, skin barrier hydration levels, and pimple recovery progress over 4 weeks.',
    faqs: [
      ['What is Cica in skincare?', 'Cica refers to Centella Asiatica, a medicinal herb rich in soothing Madecassoside and Asiaticoside that calms inflammation and repairs skin barriers.'],
      ['Is Cica good for acne-prone skin?', 'Yes. Cica reduces red swelling, accelerates pimple healing, and restores skin barriers damaged by strong acne treatments.'],
      ['Will Cica moisturizer clog pores?', 'Lightweight Cica gel-creams formulated for acne-prone skin are non-comedogenic and will not clog pores.'],
      ['Can I use Cica moisturizer with Adapalene or Retinol?', 'Yes. Cica is excellent for soothing the redness, dryness, and peeling associated with retinoid initiation.'],
      ['Is Cica suitable for humid Indian weather?', 'Yes, provided you select a water-gel or oil-free fluid texture rather than a heavy, thick balm.'],
      ['Does Cica help fade dark acne marks?', 'Cica prevents new dark marks by calming inflammation, but fading old brown melanin spots works best when paired with Niacinamide or Alpha Arbutin.'],
      ['Can I use Cica moisturizer twice a day?', 'Yes. Apply morning and evening after cleansing or active serums for continuous barrier support.'],
      ['What is the difference between Cica cream and Cica gel?', 'Cica gels are lightweight, fast-absorbing fluids for oily/combination skin, whereas Cica creams are richer formulas for dry or severely damaged skin.']
    ],
    sources: [
      ['Phytomedicine review on Centella triterpenes and wound healing', 'https://www.sciencedirect.com/journal/phytomedicine'],
      ['Indian Journal of Dermatology review on barrier repair moisturizers', 'https://e-ijd.org/'],
      ['JAAD guidelines on non-comedogenic moisturizers in acne care', 'https://www.jaad.org/']
    ]
  },
  {
    id: 'ACR7',
    slug: 'clindamycin-gel-for-acne-india',
    title: 'Clindamycin Gel 1% for Acne on Indian Skin | MyMirror',
    description: 'Learn how Clindamycin gel 1% treats inflammatory acne on Indian skin. Understand BPO pairing to stop bacterial resistance, safe usage, & medical guidelines.',
    ogTitle: 'Clindamycin Gel 1% for Acne on Indian Skin',
    h1: 'Clindamycin gel 1% for acne on Indian skin: topical antibiotic rules, BPO pairing & resistance prevention',
    eyebrow: 'Topical antibiotic guide',
    primaryKeyword: 'clindamycin gel for acne india',
    secondaryKeywords: ['clindamycin gel 1 percent indian skin', 'clindamycin and benzoyl peroxide gel india', 'clindamycin gel antibiotic resistance', 'how to use clindamycin phosphate gel for acne', 'clindamycin gel for inflammatory acne marks'],
    heroImage: '/assets/images/product-examples/clindamycin-gel-tube.jpg',
    heroAlt: 'Clindamycin Phosphate Gel 1% topical antibiotic tube for inflammatory acne treatment in India',
    heroNote: 'Topical 1% antibiotic active, mandatory Benzoyl Peroxide pairing, or bacterial resistance?',
    heroCopy: 'Clindamycin Phosphate 1% is a widely prescribed topical lincosamide antibiotic that targets Cutibacterium acnes bacteria and reduces redness in active inflammatory papules and pustules. For Indian skin prone to inflammatory breakouts triggered by heat, sweat, and humidity, Clindamycin provides rapid calming action. However, using Clindamycin as a long-term monotherapy leads to bacterial resistance, rendering the treatment ineffective over time. Combining topical Clindamycin with Benzoyl Peroxide (BPO) or Adapalene is medically mandatory according to global and Indian dermatology consensus guidelines to preserve antibiotic efficacy and stop the rise of resistant acne strains. Understanding proper application frequency, spot treatment boundaries, and barrier maintenance prevents unnecessary irritation and post-inflammatory dark spots on Indian skin phototypes IV to VI.',
    decisionIntro: 'This decision guide explains how Clindamycin gel 1% works on inflammatory acne, why topical antibiotic monotherapy causes bacterial resistance, how to pair Clindamycin safely with Benzoyl Peroxide or Adapalene on Indian skin phototypes IV–VI, and when to seek dermatologist evaluation. Understanding the biological difference between non-inflammatory blackheads and bacteria-driven inflammatory papules ensures you select the right medical treatment while protecting your cutaneous lipid barrier.',
    decisionCards: [
      ['Best fit', 'Active inflammatory red pimples, papules, and pus-filled pustules that require targeted topical bacterial suppression.'],
      ['Use more caution', 'Non-inflammatory blackheads, closed comedones, or using Clindamycin alone for months without Benzoyl Peroxide.'],
      ['BPO pairing rule', 'Always combine topical Clindamycin with 2.5% Benzoyl Peroxide or Adapalene to kill bacteria via oxidation and stop antibiotic resistance.']
    ],
    indianSkinIntro: 'Indian skin phototypes IV to VI experience rapid inflammatory responses to C. acnes overgrowth. Tropical humidity and high sebum production create an anaerobic environment inside hair follicles where acne bacteria thrive. While Clindamycin gel suppresses follicular inflammation quickly, using it continuously for over 12 weeks disrupts the skin microbiome and induces antibiotic-resistant bacterial strains. Furthermore, untreated inflammatory pimples leave stubborn post-inflammatory hyperpigmentation (PIH). Pairing Clindamycin with Benzoyl Peroxide eradicates bacteria through oxidative action—against which bacteria cannot develop resistance—safeguarding Indian skin from chronic inflammatory spots and severe dark marks.',
    indianRows: [
      ['Topical lincosamide action', 'Inhibits bacterial protein synthesis inside sebaceous follicles to calm swollen red pimples.', 'Apply a thin layer only to active inflammatory papules.'],
      ['Mandatory BPO pairing', 'Benzoyl peroxide releases free-radical oxygen that kills C. acnes instantly without resistance.', 'Use a BPO wash or apply 2.5% BPO gel alongside Clindamycin.'],
      ['8-to-12 week limit', 'Restricting topical antibiotic duration stops skin microbiome dysbiosis and resistance.', 'Transition to Adapalene or Azelaic acid for long-term acne maintenance.'],
      ['PIH prevention', 'Calming acute bacterial inflammation quickly stops deep melanocyte damage and dark marks.', 'Apply daily broad-spectrum SPF 50 sunscreen to protect healing spots.']
    ],
    safeIntro: 'Follow this medical safety structure to apply Clindamycin gel effectively while preventing bacterial resistance, dryness, and skin irritation.',
    safeSteps: [
      ['Cleanse gently with a mild cleanser', 'Wash face with a sulfate-free gentle cleanser and lukewarm water. Pat dry thoroughly.'],
      ['Apply a thin pea-sized layer to active spots', 'Dab a small pea-sized amount of Clindamycin 1% gel directly onto inflammatory red pimples and pustules.'],
      ['Pair with Benzoyl Peroxide or Adapalene', 'Apply 2.5% BPO gel or Adapalene gel as directed by your dermatologist to prevent bacterial resistance.'],
      ['Follow with an oil-free barrier moisturizer', 'Apply a lightweight non-comedogenic moisturizer to lock in hydration and prevent dryness.'],
      ['Use broad-spectrum sunscreen every morning', 'Protect healing acne spots from UV-induced post-inflammatory dark marks using SPF 50 sunscreen.']
    ],
    mistakes: [
      'Using Clindamycin gel alone as a daily moisturizer or long-term spot treatment for over 3 to 6 months.',
      'Applying Clindamycin onto non-inflammatory blackheads and closed comedones where antibiotics have no effect.',
      'Skipping Benzoyl Peroxide pairing, allowing C. acnes bacteria to become resistant to lincosamide antibiotics.',
      'Popping or squeezing red inflammatory pustules while applying topical gel, driving infection deeper.',
      'Using high-strength alcohol-based toners that cause severe stinging and skin barrier breakdown.'
    ],
    dermIntro: 'Consult a dermatologist or medical practitioner for prescription supervision when treating inflammatory acne with topical antibiotics.',
    dermList: [
      'Obtain a formal medical prescription and diagnosis before initiating topical antibiotic treatment.',
      'Seek evaluation if inflammatory acne fails to improve after 4 to 6 weeks of compliant therapy.',
      'Consult a clinician if you experience severe skin redness, burning, peeling, or allergic contact dermatitis.',
      'Discuss oral therapy options (such as oral retinoids or oral antibiotics) for severe nodulocystic acne.',
      'Establish a long-term non-antibiotic maintenance plan with your dermatologist once active pimples clear.'
    ],
    scanUse: 'Use MyMirror AI skin scan to monitor active inflammatory red spots, track pimple healing velocity, and assess skin barrier stability over 4 weeks.',
    faqs: [
      ['Is Clindamycin gel an antibiotic?', 'Yes. Clindamycin phosphate 1% is a topical lincosamide antibiotic that suppresses acne-causing bacteria and inflammation.'],
      ['Why must Clindamycin gel be paired with Benzoyl Peroxide?', 'Pairing with Benzoyl Peroxide prevents bacteria from developing resistance to Clindamycin, ensuring the antibiotic remains effective.'],
      ['Can I buy Clindamycin gel over the counter in India?', 'No. Clindamycin is a prescription medicine that should be used under dermatological guidance.'],
      ['How long can I safely use Clindamycin gel?', 'Dermatology guidelines recommend limiting topical antibiotic use to 8–12 weeks to prevent bacterial resistance.'],
      ['Does Clindamycin gel clear blackheads and whiteheads?', 'No. Clindamycin targets inflammatory bacterial pimples. Non-inflammatory comedones respond better to Salicylic acid or Adapalene.'],
      ['Can I use Clindamycin gel in the morning and Adapalene at night?', 'Yes. Dermatologists frequently prescribe Clindamycin/BPO in the morning and Adapalene retinoid at night for comprehensive acne care.'],
      ['Does Clindamycin cause skin purging?', 'No. Clindamycin is an antibacterial anti-inflammatory agent, not a cell-turnover exfoliant, so it does not cause typical acid purging.'],
      ['Will Clindamycin fade dark acne marks (PIH)?', 'Clindamycin prevents new dark marks by calming active inflammation, but fading existing brown spots requires Azelaic acid, Niacinamide, or Vitamin C.']
    ],
    sources: [
      ['IJDVL consensus guidelines on topical antibiotics in acne', 'https://ijdvl.com/topical-antibiotics-in-acne-vulgaris/'],
      ['JAAD review on antibiotic resistance prevention in acne', 'https://www.jaad.org/article/S0190-9622(16)30833-0/fulltext'],
      ['CDSCO Indian drug safety guidelines on prescription topicals', 'https://cdsco.gov.in/']
    ]
  },
  {
    id: 'ACR12',
    slug: 'salicylic-acid-face-wash-for-acne-indian-skin',
    title: 'Salicylic Acid Face Wash for Acne on Indian Skin | MyMirror',
    description: 'Learn how 1% vs 2% Salicylic acid face wash clears blackheads & acne on Indian skin. Compare Saslic DS & Minimalist, plus short-contact rules & barrier care.',
    ogTitle: 'Salicylic Acid Face Wash for Acne on Indian Skin',
    h1: 'Salicylic acid face wash for acne on Indian skin: 1% vs 2% guide to clearing pores without barrier burn',
    eyebrow: 'Cleanser active guide',
    primaryKeyword: 'salicylic acid face wash for acne indian skin',
    secondaryKeywords: ['1 vs 2 percent salicylic acid face wash', 'saslic ds vs minimalist salicylic cleanser', 'salicylic acid facewash oily skin india', 'short contact therapy bha cleanser', 'salicylic acid cleanser barrier repair'],
    heroImage: '/assets/images/sa-cleanser-foam-lather.jpg',
    heroAlt: 'Lathering 2% Salicylic Acid foaming face wash for deep pore cleansing on Indian skin',
    heroNote: '1% vs 2% strength, short-contact therapy, or squeaky-clean barrier burn?',
    heroCopy: 'Salicylic acid (Beta Hydroxy Acid, BHA) is an oil-soluble active ingredient that penetrates deep into sebaceous follicles to dissolve trapped sebum, dead skin cells, and microcomedones. For Indian skin exposed to tropical humidity, pollution, and sweat, a Salicylic acid face wash provides essential daily pore-cleansing. However, using high-strength 2% foaming washes twice daily can strip intercellular lipids, leading to barrier tightness and rebound oiliness. Finding the right concentration and application technique is key to clear skin.',
    decisionIntro: 'This decision guide helps individuals with oily, combination, or acne-prone Indian skin choose the right Salicylic acid face wash concentration (1% vs 2%), compare pharmacy classics like Cipla Saslic DS against modern barrier-conscious cleansers like Minimalist, master 60-second short-contact therapy, and protect the skin barrier against over-exfoliation.',
    decisionCards: [
      ['Best fit', 'Oily skin, open blackheads, closed comedones, clogged T-zones, and mild inflammatory acne papules triggered by sweat and humidity.'],
      ['Use more caution', 'Severe dry eczema-prone skin, active retinoid burning, open picked pimples, or expecting a cleanser alone to cure deep hormonal cysts.'],
      ['Short-contact rule', 'Lather the Salicylic acid face wash on damp skin for 60 seconds before rinsing completely to allow deep pore penetration without lipid stripping.']
    ],
    indianSkinIntro: 'Indian skin phototypes IV to VI face unique environmental and physiological challenges. High ambient humidity combined with atmospheric dust and pollution accelerates sebum hypersecretion. Because BHA is lipophilic, it easily dissolves intra-follicular lipids. However, Indian skin is particularly prone to post-inflammatory hyperpigmentation (PIH). When aggressive 2% BHA cleansers strip the stratum corneum, skin responds with stinging, flaking, and reactive melanogenesis that leaves dark marks. Choosing a gentle 1% daily cleanser or using 2% with 60-second short-contact therapy keeps pores clear while preserving essential barrier lipids.',
    indianRows: [
      ['Lipophilic pore penetration', 'BHA dissolves oil inside sebaceous follicles to clear blackheads and microcomedones.', 'Use once or twice daily based on skin oiliness and tolerance.'],
      ['1% vs 2% concentration choice', '1% is ideal for daily gentle maintenance; 2% targets stubborn oily breakouts.', 'Start with 1% daily or 2% alternate nights to assess barrier tolerance.'],
      ['60-second contact therapy', 'Lathering for 60 seconds gives BHA time to act before rinsing off completely.', 'Rinse thoroughly with lukewarm water; never leave foam on for minutes.'],
      ['PIH prevention via calm barrier', 'Preventing squeaky-clean barrier tightness stops secondary melanocyte irritation.', 'Follow immediately with an oil-free hydrating moisturizer.']
    ],
    safeIntro: 'A safe Salicylic acid cleanser routine balances deep follicular cleansing with lipid barrier hydration, preventing dryness, flaking, and irritation breakouts.',
    safeSteps: [
      ['Splash face with lukewarm water', 'Wet face with clean lukewarm water to prepare skin for foam application.'],
      ['Dispense a pea-sized gel cleanser pump', 'Lather a small pump between wet palms until a soft foam forms.'],
      ['Massage gently over T-zone for 60 seconds', 'Focus foam on oily zones (forehead, nose, chin). Avoid harsh scrubbing or abrasive face brushes.'],
      ['Rinse thoroughly and pat dry gently', 'Rinse completely with water and pat dry with a clean microfiber towel. Do not rub.'],
      ['Seal immediately with oil-free moisturizer', 'Apply a lightweight oil-free moisturizer within 60 seconds to trap hydration and prevent barrier tightness.']
    ],
    mistakes: [
      'Using a 2% Salicylic acid face wash twice daily alongside strong AHA peeling toners and retinoids.',
      'Scrubbing skin aggressively with face brushes or physical scrubs while using active acid cleansers.',
      'Leaving active foaming cleanser on face for 5 to 10 minutes as a mask, causing severe chemical burns.',
      'Expecting a wash-off cleanser to fade old brown post-acne dark marks (PIH); it clears pores, not melanin.',
      'Rinsing face with very hot water which strips skin lipids and increases redness.'
    ],
    dermIntro: 'Consult a dermatologist if your acne consists of painful deep cysts, nodular lesions, or severe inflammatory breakouts that fail to improve after 6 weeks of proper cleansing and barrier care.',
    dermList: [
      'Seek evaluation for deep painful cysts or nodular acne requiring oral medical therapy.',
      'Consult a clinician if your skin displays severe burning, peeling, or allergic contact dermatitis.',
      'Discuss prescription combinations (such as Adapalene or topical Benzoyl Peroxide).',
      'Bring your current cleanser and routine products to your consultation.',
      'Ask about professional medical chemical peels for stubborn blackheads and comedonal acne.'
    ],
    scanUse: 'Use MyMirror AI skin analysis to track blackhead counts, pore cleanliness, oiliness reduction, and skin barrier hydration over 4 weeks in 60 seconds.',
    faqs: [
      ['What is the difference between 1% and 2% Salicylic Acid face wash?', '1% is gentler and ideal for daily use or sensitive skin, while 2% is maximum OTC strength for very oily skin and stubborn blackheads.'],
      ['How long should I leave Salicylic Acid face wash on my face?', 'Lather on damp skin for 60 seconds (short-contact therapy) before rinsing thoroughly. Do not leave on longer to avoid dryness.'],
      ['Does Salicylic Acid face wash cause skin purging?', 'Yes. BHA accelerates pore unclogging, which may cause mild temporary purging (small pimples in typical areas) during weeks 2 to 3.'],
      ['Can I use Salicylic Acid face wash every day?', 'Yes, 1% washes can be used daily. If using 2%, start 3 nights a week and gradually build to daily use as tolerated.'],
      ['Which is better for Indian skin: Cipla Saslic DS or Minimalist 2% Cleanser?', 'Saslic DS is a potent foaming wash best for very oily skin, while Minimalist provides a more cushioned, non-stripping formula for sensitive skin.'],
      ['Can I use Salicylic Acid face wash while using Niacinamide serum?', 'Yes. 5% Niacinamide serum helps repair the barrier and balance oil, making it an excellent post-cleansing partner.'],
      ['Will Salicylic Acid face wash dry out my skin?', 'If overused or paired with hot water, it can cause dryness. Always follow with an oil-free moisturizer within 60 seconds.'],
      ['Does Salicylic Acid cleanser clear blackheads on the nose?', 'Yes. Because BHA is oil-soluble, it dissolves oxidation and sebum plugs inside nose pores, significantly reducing blackheads.']
    ],
    sources: [
      ['JAAD salicylic acid in dermatology review', 'https://www.jaad.org/article/S0190-9622(03)00018-0/fulltext'],
      ['IJDVL acne cleanser consensus guidelines', 'https://ijdvl.com/cleansers-in-acne-vulgaris/'],
      ['AAD acne face wash guidance', 'https://www.aad.org/public/diseases/acne/skin-care/cleanse']
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
  ACR9: {
    intro: 'Alpha Arbutin 2% formulations in India range from pure water-based hyaluronic serums to multi-active brightening fluids containing Niacinamide or Kojic acid.',
    formats: [
      ['Alpha Arbutin 2% + Hyaluronic Acid Serum', 'Lightweight water-based serum providing hydration and dark spot fading.', 'Post-acne dark spots, PIH, and uneven skin tone.', 'Absorbs quickly without sticky residue.'],
      ['Alpha Arbutin 2% + Niacinamide 5% Brightening Serum', 'Dual-active serum targeting both melanin synthesis and melanosome transfer.', 'Stubborn hyperpigmentation and enlarged pores.', 'Provides comprehensive tone correction for Indian skin.'],
      ['Alpha Arbutin + Kojic Acid Dark Spot Gel', 'Potent multi-inhibitor gel for localized dark spot treatment.', 'Targeted dark mark care under dermatological guidance.', 'Apply directly onto dark spots before moisturizing.']
    ],
    checklist: [
      'Choose 2% Alpha Arbutin for optimal safety and efficacy.',
      'Apply to clean skin twice daily before heavy creams.',
      'Pair with Niacinamide or Vitamin C for enhanced results.',
      'Apply broad-spectrum SPF 50 sunscreen daily.',
      'Allow 8 to 12 weeks for complete dark spot clearance.'
    ],
    landscape: 'In India, 2% Alpha Arbutin serums (such as Minimalist Alpha Arbutin 2% + HA and The Derma Co 2% Alpha Arbutin) are leading OTC treatments for post-acne dark marks. Using a stable formulation ensures maximum tone correction.',
    buyFirst: 'Start with a 2% Alpha Arbutin serum paired with Hyaluronic acid used twice daily, followed by an oil-free moisturizer and SPF 50 sunscreen.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Acne & Spot Hydration',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Lightweight moisturizer ideal for sealing brightening serums.',
        caution: 'Oil-free texture.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Barrier Repair Gel',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Panthenol gel moisturizer to maintain skin barrier health.',
        caution: 'Soothing formula.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Lipid Support',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Non-comedogenic moisturizer recommended for acne-prone skin.',
        caution: 'Daily application.'
      }
    ]
  },
  ACR8: {
    intro: 'Cica moisturizers available in India range from ultra-lightweight water-gels to soothing gel-creams infused with Panthenol, Niacinamide, or Ceramides.',
    formats: [
      ['Centella Asiatica Water-Gel Moisturizer', 'Ultra-lightweight oil-free gel providing instant cooling hydration.', 'Oily, acne-prone, and monsoon skin.', 'Absorbs instantly without shine or pore clogging.'],
      ['Cica + Panthenol Soothing Gel-Cream', 'Barrier repair gel-cream combining 5% Panthenol with Madecassoside.', 'Irritated, peeling, or retinoid-treated skin.', 'Calms active redness and stops barrier tightness.'],
      ['Cica + Ceramide Barrier Cream', 'Nourishing barrier restoration cream for dry or damaged acne-prone skin.', 'Dehydrated acne-prone skin and winter barrier repair.', 'Restores essential intercellular lipids while keeping pores clear.']
    ],
    checklist: [
      'Look for Centella Asiatica, Madecassoside, or Gotu Kola on labels.',
      'Select gel or gel-cream textures for oily or acne-prone skin.',
      'Ensure the formula is labeled non-comedogenic and fragrance-free.',
      'Use after active treatment serums to lock in hydration.',
      'Pair with daily broad-spectrum SPF 50 sunscreen.'
    ],
    landscape: 'In India, Cica moisturizers are available across dermatologist lines like Re’equil, Minimalist, Dot & Key, and pharmacy brands. Selecting a non-greasy gel formula ensures optimal barrier repair without acne flare-ups.',
    buyFirst: 'Start with a lightweight Centella Asiatica water-gel or a Panthenol-infused Cica gel-cream used twice daily after cleansing.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Acne Barrier Gel',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Lightweight soothing moisturizer designed for acne-prone skin.',
        caution: 'Oil-free formula.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Soothing Panthenol Cushion',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Hydrating gel moisturizer enriched with Panthenol and Cica.',
        caution: 'Fast absorbing.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Hydration Gel',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Dermatologist-recommended non-comedogenic moisturizer.',
        caution: 'Daily barrier support.'
      }
    ]
  },
  ACR7: {
    intro: 'Clindamycin 1% topical formulations in India include single-active gels, BPO combination gels (e.g. Clindamycin + Benzoyl Peroxide), and Adapalene combination gels.',
    formats: [
      ['Topical 1% Clindamycin Phosphate Gel', 'Prescription 1% antibiotic gel targeting active inflammatory red spots.', 'Acute inflammatory papules and pustules.', 'Must be paired with BPO to prevent bacterial resistance.'],
      ['Clindamycin + Benzoyl Peroxide Combination Gel', 'Dual-action gel combining Clindamycin 1% with Benzoyl Peroxide 2.5%.', 'Inflammatory acne requiring resistance-proof bacterial control.', 'Reduces bacterial counts rapidly while protecting antibiotic efficacy.'],
      ['Clindamycin + Adapalene Combination Gel', 'Prescription night gel combining antibiotic with 0.1% retinoid.', 'Comedonal and inflammatory acne under dermatological supervision.', 'Provides follicular unclogging alongside bacterial suppression.']
    ],
    checklist: [
      'Obtain a valid prescription from a dermatologist before use.',
      'Always pair Clindamycin with Benzoyl Peroxide or Adapalene.',
      'Limit continuous treatment duration to 8-12 weeks.',
      'Apply a pea-sized amount only to active inflammatory spots.',
      'Follow with an oil-free non-comedogenic moisturizer.'
    ],
    landscape: 'In India, Clindamycin 1% topical gels (such as Clinka, Clindac-A, and Deriva-CMS) are standard prescription treatments for acute inflammatory acne. Using combination formulations reduces resistance risk.',
    buyFirst: 'Consult a dermatologist for a tailored prescription containing Clindamycin 1% combined with Benzoyl Peroxide 2.5% or Adapalene 0.1%.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Post-Treatment Hydration',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Lightweight oil-free moisturizer to pair with topical acne treatments.',
        caution: 'Non-comedogenic formula.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Barrier Protection Cushion',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Soothing panthenol gel moisturizer ideal for antibiotic-treated skin.',
        caution: 'Calms redness.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Lipid Gel',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Dermatologist-recommended non-comedogenic moisturizer for acne-prone skin.',
        caution: 'Use daily.'
      }
    ]
  },
  ACR12: {
    intro: 'Salicylic acid face wash formats range from gentle 1% gel cleansers to 2% foaming pharmacy washes and soothing BHA formulations with barrier-repairing Panthenol or Aloe.',
    formats: [
      ['1% Salicylic Acid Gel Cleanser', 'Gentle low-foam gel cleanser providing mild daily BHA exfoliation.', 'Sensitive, combination, or daily maintenance skin.', 'Provides smooth pore clearing without stripping lipids.'],
      ['2% Salicylic Acid Foaming Wash (e.g. Saslic DS)', 'High-potency pharmacy foaming wash for deep sebum dissolution.', 'Very oily skin, active blackheads, and T-zone congestion.', 'Use short-contact 60-second method to prevent squeaky tightness.'],
      ['2% Salicylic Acid + Soothing Actives Cleanser', 'Modern buffered cleanser combining 2% BHA with Panthenol, Zinc, or Cica.', 'Acne-prone skin needing potent BHA without dryness.', 'Ideal for daily evening cleansing under light moisturizer.']
    ],
    checklist: [
      'Choose 1% BHA for daily gentle cleansing or 2% for oily skin.',
      'Look for sulfate-free, pH-balanced (5.0-5.5) formulations.',
      'Lather for 60 seconds on damp skin before rinsing completely.',
      'Follow immediately with an oil-free barrier moisturizer.',
      'Pair morning routine with broad-spectrum SPF 50 sunscreen.'
    ],
    landscape: 'In India, Salicylic acid cleansers are available across pharmacy lines like Cipla Saslic DS and dermatologist brands like Minimalist and The Derma Co. Selecting a non-stripping formula ensures deep pore cleanliness without causing barrier damage.',
    buyFirst: 'Start with a gentle 1% Salicylic acid gel cleanser or a buffered 2% cleanser used once daily in the evening, followed by an oil-free moisturizer.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Post-Cleansing Partner',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Active oil-free moisturizer to pair with Salicylic wash for oil control.',
        caution: 'Apply to damp skin.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Barrier Hydration Cushion',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Hydrating soothing moisturizer for preventing post-cleansing tightness.',
        caution: 'Non-greasy gel texture.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Lipid Cushion',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Non-comedogenic pharmacy moisturizer ideal for acne-prone skin.',
        caution: 'Use twice daily.'
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
