import fs from 'fs';
import path from 'path';

const pages = [
  {
    id: 'ACR6',
    slug: 'salicylic-acid-cleanser-for-acne-india',
    title: 'Salicylic Acid Cleanser for Acne in India | MyMirror',
    description: 'Learn how to use a 2% Salicylic Acid cleanser for acne on Indian skin. Prevent BHA dryness, balance humidity, and build a dermatologist-aligned routine.',
    ogTitle: 'Salicylic Acid Cleanser for Acne in India',
    h1: 'Salicylic Acid cleanser for acne on Indian skin: 2% BHA guide, humidity care & barrier defense',
    eyebrow: 'Cleanser active guide',
    primaryKeyword: 'salicylic acid cleanser for acne india',
    secondaryKeywords: ['2 percent salicylic acid face wash indian skin', 'salicylic acid cleanser oily skin humidity', 'best bha face wash for acne marks india', 'salicylic acid face wash purging vs breakout', 'how to use salicylic acid cleanser without dryness'],
    heroImage: '/assets/images/salicylic-acid-cleanser-bottle.jpg',
    heroAlt: 'Salicylic Acid 2% cleanser bottle for acne treatment on Indian skin',
    heroNote: '2% BHA lipophilic pore penetration, 60-second contact time, or barrier stripping?',
    heroCopy: 'Salicylic Acid is a beta-hydroxy acid (BHA) whose oil-soluble chemical structure allows it to dissolve sebum, loosen desmosomes holding dead keratinocytes inside pores, and reduce inflammatory acne lesions. In Indian skin phototypes IV to VI, high heat and tropical humidity trigger excessive sebum secretion that mixes with atmospheric dust, clogging pores and causing papules and pustules. While a 2% Salicylic Acid cleanser provides effective pore decongestion, leaving it on the skin for too long or using it alongside aggressive physical scrubs causes barrier breakdown, stinging, and post-inflammatory dark marks. Following dermatologist-backed contact time rules and pairing BHA washes with oil-free hydration protects your skin barrier while keeping pores clear.',
    decisionIntro: 'This decision guide evaluates 2% Salicylic Acid cleansers for acne-prone Indian skin, explaining how BHA dissolves follicular oil, how short-contact cleansing prevents dryness, how to differentiate purging from barrier damage, and how to pair BHA with non-comedogenic moisturizers. When tropical weather accelerates oil production, using a gentle, non-stripping 2% BHA cleanser clears comedones without compromising your skin barrier.',
    decisionCards: [
      ['Best fit', 'Oily skin, open blackheads, closed comedones, and mild-to-moderate inflammatory pimples in humid climates.'],
      ['Use more caution', 'Dry, compromised, or over-exfoliated skin, or using 2% BHA washes three times daily with alcohol toners.'],
      ['Short-contact rule', 'Massage cleanser gently onto damp skin for 60 seconds, then rinse thoroughly with lukewarm water to clear pores safely.']
    ],
    indianSkinIntro: 'Indian skin phototypes IV to VI experience rapid melanocyte activation following skin irritation. Heavy atmospheric pollution and high humidity induce sebum oxidation, exacerbating pore blockages. Salicylic Acid penetrates lipophilic sebaceous glands to clear follicular plugs. However, over-cleansing strips intercellular lipids, leading to transepidermal water loss and reactive post-inflammatory hyperpigmentation (PIH). Using a pH-balanced 2% BHA wash for 60 seconds once or twice daily preserves barrier integrity while removing daily grime and excess oil.',
    indianRows: [
      ['Lipophilic BHA penetration', 'Dissolves sebum deep inside hair follicles to prevent comedones and pimples.', 'Use once or twice daily based on skin tolerance.'],
      ['60-second short-contact time', 'Clears pores efficiently without causing chemical dryness or irritation.', 'Rinse thoroughly with lukewarm water after 60 seconds.'],
      ['Synergistic Niacinamide pairing', 'Pairs oil control with melanosome transfer blockage for clear, even skin.', 'Follow BHA cleansing with a 5% Niacinamide serum.'],
      ['PIH prevention', 'Calming pore inflammation stops deep melanocyte damage and dark spots.', 'Apply broad-spectrum SPF 50 sunscreen every morning.']
    ],
    safeIntro: 'Follow this dermatologist-approved cleansing routine to maximize 2% Salicylic Acid pore decongestion while maintaining skin barrier hydration.',
    safeSteps: [
      ['Wet face with lukewarm water', 'Splash face gently with clean water to prepare skin for cleansing.'],
      ['Dispense a dime-sized amount of 2% BHA cleanser', 'Lather the gel cleanser between clean palms with water.'],
      ['Massage gently for 60 seconds', 'Focus on T-zone, nose, chin, and forehead. Avoid aggressive scrubbing or eye contour.'],
      ['Rinse thoroughly and pat dry', 'Rinse off completely with water and pat skin dry with a soft clean towel.'],
      ['Follow immediately with moisturizer and SPF', 'Lock in hydration with an oil-free moisturizer and apply SPF 50 sunscreen in the morning.']
    ],
    mistakes: [
      'Leaving Salicylic Acid cleanser on face for 5-10 minutes as a mask, causing severe chemical burns and peeling.',
      'Washing face 4-5 times a day to control oily shine, stripping natural lipids and causing rebound oiliness.',
      'Combining 2% BHA cleanser with physical walnut scrubs or harsh alcohol toners simultaneously.',
      'Scrubbing active inflamed pimples aggressively, breaking pustules and spreading bacteria.',
      'Skipping moisturizer after cleansing, leading to dehydrated, tight, and flaking skin.'
    ],
    dermIntro: 'Consult a dermatologist if your acne persists or if you experience severe skin irritation.',
    dermList: [
      'Seek evaluation if acne fails to improve after 6 to 8 weeks of consistent cleansing.',
      'Consult a clinician for deep nodular or cystic acne requiring prescription retinoids or oral therapy.',
      'Stop use and seek medical advice if you develop severe burning, swelling, or allergic rash.',
      'Discuss prescription combinations (such as Adapalene or Benzoyl Peroxide) with your dermatologist.',
      'Review your routine with a professional to ensure your barrier remains healthy.'
    ],
    scanUse: 'Use MyMirror AI skin scan to analyze pore congestion, track blackhead clearance, and monitor skin barrier hydration over 4 weeks.',
    faqs: [
      ['What does a Salicylic Acid cleanser do?', 'A Salicylic Acid cleanser penetrates oil-filled pores to exfoliate dead skin cells, dissolve sebum, and prevent acne.'],
      ['Can I use a 2% Salicylic Acid cleanser every day?', 'Yes. Most oily and acne-prone skin types tolerate daily use once or twice a day.'],
      ['How long should I leave Salicylic Acid cleanser on my face?', 'Massage for 60 seconds then rinse completely. Do not leave it on as a face mask.'],
      ['Does Salicylic Acid cleanser cause purging?', 'Yes. Mild purging (small breakouts in usual acne areas) can occur for 2-4 weeks as pores decongest.'],
      ['Can I pair Salicylic Acid cleanser with Niacinamide?', 'Yes. Salicylic Acid cleans pores while Niacinamide hydrates and controls oil, making them a great combination.'],
      ['Will Salicylic Acid cleanser dry out my skin?', 'If overused or left on too long, it can cause dryness. Always follow with an oil-free moisturizer.'],
      ['Is Salicylic Acid good for blackheads?', 'Yes. Salicylic Acid is oil-soluble, making it the gold standard for dissolving blackheads and whiteheads.'],
      ['Can I use Salicylic Acid cleanser during Indian summers?', 'Yes. It is particularly effective during humid weather when sebum production rises.']
    ],
    sources: [
      ['JAAD guidelines on BHA exfoliants in acne care', 'https://www.jaad.org/'],
      ['Indian Journal of Dermatology review on chemical exfoliants', 'https://e-ijd.org/'],
      ['CDSCO cosmetic safety guidelines', 'https://cdsco.gov.in/']
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
    id: 'ACR10',
    slug: 'pcos-supplements-spearmint-inositol-india',
    title: 'PCOS Supplements & Spearmint Tea for Hormonal Acne India | MyMirror',
    description: 'Learn how Spearmint tea and Myo-Inositol manage PCOS hormonal acne on Indian skin. Understand anti-androgen action, 40:1 inositol ratio, & safety rules.',
    ogTitle: 'PCOS Supplements & Spearmint Tea for Hormonal Acne in India',
    h1: 'PCOS supplements & Spearmint tea for hormonal acne on Indian skin: Myo-Inositol & anti-androgen guide',
    eyebrow: 'Hormonal acne guide',
    primaryKeyword: 'pcos supplements spearmint inositol india',
    secondaryKeywords: ['spearmint tea for hormonal acne indian women', 'myo inositol d chiro ratio 40 to 1 pcos acne', 'anti androgen tea for jawline acne india', 'pcos hormonal acne supplements india', 'spearmint tea acne purging or hormonal balance'],
    heroImage: '/assets/images/spearmint-tea-pcos-cup.jpg',
    heroAlt: 'Fresh organic Spearmint tea leaves in a teacup for anti-androgen hormonal acne management in India',
    heroNote: 'Spearmint anti-androgen action, 40:1 Myo-Inositol ratio, or medical endocrine supervision?',
    heroCopy: 'Hormonal acne associated with Polycystic Ovary Syndrome (PCOS or PCOD) in Indian women primarily manifests as deep, painful cystic breakouts along the jawline, chin, and lower cheeks. Elevated serum free testosterone and insulin resistance drive hyper-sebocyte stimulation, causing persistent follicular clogging. Spearmint tea (Mentha spicata) exerts mild anti-androgenic effects by reducing free testosterone levels without suppressing total gonadotropins. Combining Spearmint tea with Myo-Inositol and D-Chiro-Inositol (in the clinically validated 40:1 physiological ratio) improves insulin sensitivity, regularizes metabolic signaling, and calms recalcitrant hormonal acne breakouts.',
    decisionIntro: 'This decision guide evaluates Spearmint tea and Myo-Inositol supplements for Indian women managing PCOS-related hormonal acne, explaining the physiological mechanism of anti-androgen plant flavonoids, the clinical 40:1 inositol ratio, safe daily intake boundaries, and when medical endocrinology evaluation is essential. Managing PCOS acne requires addressing internal hormonal triggers alongside gentle external skincare.',
    decisionCards: [
      ['Best fit', 'Deep, painful jawline and chin cysts occurring prior to menstrual periods, accompanied by irregular cycles or hirsutism.'],
      ['Use more caution', 'Pregnant or nursing women, individuals with low blood pressure, or relying on herbal teas alone for severe PCOS complications.'],
      ['40:1 Inositol rule', 'Ensure Myo-Inositol and D-Chiro-Inositol supplements adhere to the 40:1 physiological ratio to improve ovarian insulin sensitivity safely.']
    ],
    indianSkinIntro: 'PCOS affects an estimated 1 in 5 Indian women, driven by genetic predisposition and urban dietary shifts. Insulin resistance triggers ovarian overproduction of androgens, which bind to sebaceous gland receptors on the lower face. For Indian skin phototypes IV to VI, deep hormonal cysts frequently heal with severe, long-lasting post-inflammatory hyperpigmentation (PIH) and dermal atrophy (scarring). Spearmint tea contains rosmarinic acid and flavonoids that lower bioavailable testosterone, while Myo-Inositol restores insulin receptor sensitivity. Reducing internal androgenic stimulation halts deep cystic lesions, preserving skin texture and stopping dark spot formation.',
    indianRows: [
      ['Anti-androgenic flavonoid action', 'Reduces free serum testosterone levels to calm hyperactive sebaceous glands.', 'Drink 1-2 cups of organic Spearmint tea daily after meals.'],
      ['40:1 Myo to D-Chiro Inositol ratio', 'Restores physiological follicular insulin signaling and ovarian hormone balance.', 'Take under medical or nutritional supervision for 3-6 months.'],
      ['Jawline cyst prevention', 'Targeting internal androgen spikes prevents deep, painful nodulocystic breakouts.', 'Pair internal care with gentle topical Adapalene or BPO.'],
      ['PIH and scar risk reduction', 'Preventing deep dermal cysts stops severe post-acne dark marks and indented scars.', 'Use daily broad-spectrum SPF 50 sunscreen on healing areas.']
    ],
    safeIntro: 'Follow a structured daily wellness routine to combine dietary Spearmint tea and Myo-Inositol supplements safely with topical skincare.',
    safeSteps: [
      ['Steep 1 tea bag of organic Spearmint tea', 'Pour hot water over 1 tea bag (or 1 tsp loose leaves) and steep for 5 to 7 minutes.'],
      ['Drink 1 to 2 cups daily between meals', 'Enjoy spearmint tea consistently every afternoon or evening. Do not exceed 3 cups daily.'],
      ['Take 40:1 Myo-Inositol supplement as directed', 'Consume physician-recommended Myo-Inositol/D-Chiro-Inositol powder or capsules with water.'],
      ['Maintain a gentle non-comedogenic skincare routine', 'Cleanse gently and apply oil-free moisturizer. Do not scrub or squeeze deep jawline cysts.'],
      ['Monitor menstrual cycle and acne progress', 'Track jawline breakout frequency and cycle regularity over 8 to 12 weeks.']
    ],
    mistakes: [
      'Drinking Spearmint tea excessively (over 4-5 cups daily), which may cause stomach upset or blood pressure drops.',
      'Expecting Spearmint tea or inositol to clear deep hormonal cysts in 3 days; endocrine balance requires 8 to 12 weeks.',
      'Squeezing or picking deep, painful jawline cysts, driving inflammation into the dermis and causing permanent scarring.',
      'Purchasing unstandardized inositol supplements that lack the clinically proven 40:1 Myo to D-Chiro ratio.',
      'Discontinuing prescribed medical PCOS treatments without consulting a gynecologist or endocrinologist.'
    ],
    dermIntro: 'Consult a gynecologist, endocrinologist, or dermatologist for medical diagnosis and comprehensive management of PCOS.',
    dermList: [
      'Obtain formal diagnostic blood tests (LH/FSH ratio, free testosterone, fasting insulin, pelvic ultrasound).',
      'Discuss prescription medical anti-androgens (such as Spironolactone) if herbal options are insufficient.',
      'Consult a physician if you experience severe irregular menses, hair loss, or metabolic concerns.',
      'Establish a holistic treatment plan combining diet, exercise, medical supplements, and topical retinoids.',
      'Bring all herbal tea and dietary supplement labels to your clinical appointment.'
    ],
    scanUse: 'Use MyMirror AI skin scan to measure lower-facial jawline cyst count, track skin barrier recovery, and monitor dark spot fading over 12 weeks.',
    faqs: [
      ['Does Spearmint tea reduce acne?', 'Yes. Clinical studies show Spearmint tea has mild anti-androgenic properties that reduce free testosterone and calm hormonal acne.'],
      ['What is the best ratio of Myo-Inositol to D-Chiro-Inositol for PCOS?', 'The clinically proven physiological ratio is 40:1 (40 parts Myo-Inositol to 1 part D-Chiro-Inositol).'],
      ['How long does it take for Spearmint tea to work for hormonal acne?', 'Consistent daily intake of 1-2 cups typically shows noticeable reduction in jawline breakouts after 60 to 90 days.'],
      ['Can I drink Spearmint tea if I am pregnant?', 'No. Pregnant or nursing women should avoid therapeutic amounts of anti-androgenic herbal teas.'],
      ['Is Peppermint tea the same as Spearmint tea for acne?', 'No. Spearmint (Mentha spicata) contains specific anti-androgenic flavonoids that Peppermint (Mentha piperita) lacks.'],
      ['Will Inositol supplements cause weight gain?', 'No. Inositol improves insulin sensitivity, which helps manage weight and reduces sugar cravings in women with PCOS.'],
      ['Can I combine Spearmint tea with topical Adapalene?', 'Yes. Combining internal anti-androgenic support with external topical retinoids provides comprehensive acne management.'],
      ['Does PCOS acne require medical supervision?', 'Yes. PCOS is an endocrine disorder. A gynecologist or endocrinologist should evaluate your hormonal profile.']
    ],
    sources: [
      ['Phytotherapy Research trial on anti-androgenic effects of Spearmint tea', 'https://onlinelibrary.wiley.com/journal/10991573'],
      ['Gynecological Endocrinology consensus on 40:1 Myo-Inositol ratio in PCOS', 'https://www.tandfonline.com/toc/igye20/current'],
      ['Indian Dermatology Online Journal on managing PCOS-related acne', 'https://idoj.in/']
    ]
  },
  {
    id: 'ACR11',
    slug: 'niacinamide-serums-india',
    title: 'Niacinamide Serums for Acne & Dark Marks in India | MyMirror',
    description: 'Learn how 5% vs 10% Niacinamide serums reduce oiliness and fade post-acne dark spots on Indian skin. Understand melanosome blockage, zinc pairing, & safety rules.',
    ogTitle: 'Niacinamide Serums for Acne & Dark Marks in India',
    h1: 'Niacinamide serums for acne & dark marks on Indian skin: 5% vs 10% concentration & barrier care guide',
    eyebrow: 'Active serum guide',
    primaryKeyword: 'niacinamide serums india',
    secondaryKeywords: ['5 vs 10 percent niacinamide serum indian skin', 'niacinamide for post acne dark spots india', 'niacinamide serum for oily acne prone skin', 'niacinamide and zinc serum indian brands', 'how to use niacinamide serum without irritation'],
    heroImage: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
    heroAlt: 'Niacinamide 5% serum bottle for oil control and dark mark reduction on Indian skin',
    heroNote: '5% vs 10% concentration, melanosome transfer blockage, or high-strength flushing?',
    heroCopy: 'Niacinamide (Vitamin B3) is a multifunctional water-soluble vitamin that inhibits melanosome transfer from melanocytes to keratinocytes, reduces sebum secretion rates, stimulates ceramide biosynthesis, and calms cutaneous inflammation. For Indian skin exposed to heat and humidity, Niacinamide provides comprehensive daily barrier support while fading post-inflammatory hyperpigmentation (PIH). However, jump-starting your routine with high-strength 10% or 12% Niacinamide serums frequently triggers transient flushing, redness, and irritation breakouts. Clinical research proves that 5% Niacinamide delivers optimal dark spot fading and pore regulation without inducing barrier stress on Indian skin phototypes IV to VI.',
    decisionIntro: 'This decision guide compares 5% vs 10% Niacinamide serums for acne-prone Indian skin, explaining how Vitamin B3 blocks melanosome transfer, why 5% is the dermatologist-recommended sweet spot for daily tone correction, how Zinc PCA controls excess sebum, and how to combine Niacinamide safely with active retinoids and exfoliants. For individuals managing post-acne dark marks and T-zone oiliness in humid climates, Niacinamide provides gentle, non-irritating tone correction while protecting the skin barrier against environmental pollution and stress.',
    decisionCards: [
      ['Best fit', 'Oily skin, enlarged pores, post-acne red and brown dark marks (PIH), uneven texture, and compromised skin barriers.'],
      ['Use more caution', 'Starting immediately with 10% or 15% high-strength Niacinamide serums without patch testing, causing burning and flushing.'],
      ['5% Sweet spot rule', 'Select a 5% Niacinamide serum for daily use; clinical studies prove 5% achieves maximum dark spot fading without irritation.']
    ],
    indianSkinIntro: 'Indian skin phototypes IV to VI face dual challenges: high sebum hypersecretion in tropical weather and heightened melanocyte activity that creates stubborn dark spots (PIH) after acne pimples heal. Niacinamide inhibits the physical transfer of pigment-containing melanosomes into upper epidermal cells by 35% to 68%. Additionally, Niacinamide upregulates epidermal sphingolipid and ceramide synthesis, bolstering stratum corneum integrity against environmental dust and pollution. Using a gentle 5% Niacinamide serum morning and night reduces pore congestion, restores barrier lipids, and fades post-acne dark marks safely.',
    indianRows: [
      ['Melanosome transfer inhibition', 'Blocks the transport of pigment granules from melanocytes to surface skin cells.', 'Apply 2-3 drops onto clean damp skin twice daily.'],
      ['5% vs 10% concentration choice', '5% is clinically proven for pigment fading; 10% increases risk of flushing.', 'Choose 5% for daily long-term use without skin irritation.'],
      ['Sebum regulation with 1% Zinc PCA', 'Zinc PCA reduces dihydrotestosterone stimulation of sebaceous glands.', 'Ideal for T-zone shine and humidity-induced oiliness.'],
      ['Endogenous ceramide stimulation', 'Increases natural lipid synthesis to strengthen skin barriers against pollution.', 'Layer under lightweight oil-free moisturizer.']
    ],
    safeIntro: 'Follow this application method to incorporate Niacinamide serum safely into your morning and evening skincare routines.',
    safeSteps: [
      ['Cleanse face with a gentle pH-balanced wash', 'Wash skin gently with lukewarm water and a gentle non-stripping cleanser. Pat dry.'],
      ['Apply 2 to 3 drops of 5% Niacinamide serum', 'Dispense serum onto fingertips and press gently into forehead, cheeks, nose, and chin.'],
      ['Allow 60 seconds for full absorption', 'Let the lightweight water-based serum absorb completely into skin before layering next products.'],
      ['Seal with a lightweight oil-free moisturizer', 'Apply a hydrating gel or non-comedogenic moisturizer to lock in hydration.'],
      ['Apply broad-spectrum SPF 50 sunscreen every morning', 'Protect your fading dark marks from UV rays that stimulate melanin synthesis.']
    ],
    mistakes: [
      'Using high-strength 10% or 15% Niacinamide serums as a beginner, causing burning, severe flushing, and breakout bumps.',
      'Combining Niacinamide serum with multiple high-concentration active acids in the same step, overwhelming the barrier.',
      'Expecting Niacinamide alone to clear deep cystic acne without active antibacterial or retinoid treatments.',
      'Rubbing serum harshly into sensitive skin instead of pressing it gently onto face.',
      'Skipping daily sunscreen, allowing sun exposure to reverse dark spot fading progress.'
    ],
    dermIntro: 'Consult a dermatologist if your dark spots or acne fail to improve after 8 weeks of consistent skincare.',
    dermList: [
      'Seek evaluation for severe recalcitrant hyperpigmentation, melasma, or dermal dark marks.',
      'Discuss prescription combinations (such as Adapalene, Azelaic acid, or medical Retinoids).',
      'Consult a clinician if you experience persistent flushing, severe stinging, or allergic contact dermatitis.',
      'Obtain professional guidance on medical chemical peels or laser toning for dark spots.',
      'Bring all current serum formulations to your clinical consultation.'
    ],
    scanUse: 'Use MyMirror AI skin scan to measure pore congestion, track dark spot reduction, and monitor skin barrier hydration over 6 weeks.',
    faqs: [
      ['What does Niacinamide serum do for acne-prone skin?', 'Niacinamide (Vitamin B3) regulates oil production, calms redness, strengthens skin barriers, and fades post-acne dark marks.'],
      ['Is 5% or 10% Niacinamide better for Indian skin?', '5% is dermatologically recommended for Indian skin because it provides maximum efficacy without the flushing and irritation caused by 10% formulas.'],
      ['Can I use Niacinamide serum every day?', 'Yes. 5% Niacinamide serum is gentle enough for daily morning and evening application.'],
      ['Does Niacinamide cause skin purging?', 'No. Niacinamide is not an exfoliating acid or retinoid. If 10% Niacinamide causes breakouts, it is irritation rather than purging.'],
      ['Can I use Niacinamide with Salicylic acid or Adapalene?', 'Yes. Niacinamide strengthens the skin barrier and calms redness, making it an excellent partner for active exfoliants and retinoids.'],
      ['Does Niacinamide fade dark acne spots?', 'Yes. Niacinamide blocks the transfer of melanin granules to surface skin cells, fading post-inflammatory hyperpigmentation (PIH) over 6 to 8 weeks.'],
      ['Can I use Niacinamide serum in the morning?', 'Yes. Niacinamide acts as a potent antioxidant that protects skin against environmental pollution and UV damage when worn under sunscreen.'],
      ['How long does it take for Niacinamide to show results?', 'Oil reduction and barrier hydration improve within 2 weeks, while dark spot fading typically requires 6 to 8 weeks of daily use.']
    ],
    sources: [
      ['British Journal of Dermatology review on niacinamide in hyperpigmentation', 'https://onlinelibrary.wiley.com/journal/13652133'],
      ['Indian Journal of Dermatology review on vitamin B3 in tropical skincare', 'https://e-ijd.org/'],
      ['JAAD consensus on non-irritating barrier ingredients', 'https://www.jaad.org/']
    ]
  }
];

const productDetails = {
  ACR6: {
    intro: '2% Salicylic Acid cleansers available in India range from gentle daily foaming gel washes to soothing formulas enriched with Niacinamide, Aloe Vera, or Oat Extract.',
    formats: [
      ['2% Salicylic Acid Foaming Gel Cleanser', 'Classic BHA cleanser formulated to dissolve follicular oil and clear blackheads.', 'Oily, acne-prone, and T-zone congested skin.', 'Massage for 60 seconds then rinse completely.'],
      ['Salicylic Acid + Niacinamide Soothing Wash', 'Dual-active cleanser combining BHA oil clearance with Niacinamide barrier care.', 'Sensitive acne-prone skin and skin with dark marks.', 'Calms redness while clearing pores.'],
      ['Salicylic Acid + Gentle Hydrating Cleanser', 'Low-foaming cream-gel wash for dry or combination acne-prone skin.', 'Dehydrated acne-prone skin and mild comedones.', 'Provides gentle exfoliation without tightness.']
    ],
    checklist: [
      'Select a 2% Salicylic Acid concentration for optimal efficacy.',
      'Massage gently on damp skin for 60 seconds once or twice daily.',
      'Rinse thoroughly with lukewarm water.',
      'Follow immediately with an oil-free moisturizer.',
      'Wear broad-spectrum SPF 50 sunscreen every morning.'
    ],
    landscape: 'In India, 2% Salicylic Acid cleansers (such as Minimalist 2% Salicylic Acid Cleanser, The Derma Co 1% & 2% Salicylic Acid washes, and Cipla Saslic DS) are staple acne treatments.',
    buyFirst: 'Start with a gentle 2% Salicylic Acid foaming gel wash used once daily at night, followed by an oil-free non-comedogenic moisturizer.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Post-Cleansing Gel',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Lightweight oil-free moisturizer designed to pair with BHA cleansers.',
        caution: 'Non-comedogenic formula.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Soothing Barrier Gel',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Panthenol gel moisturizer to prevent post-cleansing tightness.',
        caution: 'Fast absorbing.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Lipid Support',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Dermatologist-recommended non-comedogenic moisturizer.',
        caution: 'Daily application.'
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
    landscape: 'In India, Clindamycin 1% topical gels (such as Clinka, Clindac-A, and Deriva-CMS) are standard prescription treatments for acute inflammatory acne.',
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
    landscape: 'In India, Cica moisturizers are available across dermatologist lines like Re’equil, Minimalist, Dot & Key, and pharmacy brands.',
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
    landscape: 'In India, 2% Alpha Arbutin serums (such as Minimalist Alpha Arbutin 2% + HA and The Derma Co 2% Alpha Arbutin) are leading OTC treatments for post-acne dark marks.',
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
  ACR10: {
    intro: 'PCOS hormonal acne management in India includes organic Spearmint herbal teas, 40:1 Inositol sachet supplements, and gentle non-comedogenic topical skincare.',
    formats: [
      ['Organic Loose Leaf Spearmint Tea', '100% pure Mentha spicata leaves providing natural anti-androgenic flavonoids.', 'Jawline hormonal acne, PCOS hirsutism, and oily skin.', 'Drink 1-2 cups daily steeped for 5-7 minutes.'],
      ['40:1 Myo-Inositol + D-Chiro-Inositol Sachets', 'Clinical grade inositol powder supporting insulin sensitivity and ovarian health.', 'PCOS metabolic management, irregular cycles, and hormonal breakouts.', 'Mix 1 sachet in water daily as directed by a clinician.'],
      ['Anti-Androgen Botanical Skincare Gel', 'Topical gel containing soothing green tea and Centella for localized hormonal spots.', 'Red inflammatory jawline papules and chin breakouts.', 'Apply morning and evening after gentle cleansing.']
    ],
    checklist: [
      'Choose 100% pure Spearmint tea (Mentha spicata).',
      'Verify inositol supplements use the 40:1 Myo to D-Chiro ratio.',
      'Drink 1-2 cups of spearmint tea consistently for 8-12 weeks.',
      'Do not pick or squeeze deep jawline cystic pimples.',
      'Consult a gynecologist or endocrinologist for PCOS diagnosis.'
    ],
    landscape: 'In India, organic spearmint teas and pharmacy 40:1 inositol supplements are widely used for managing hormonal acne.',
    buyFirst: 'Start with 1-2 cups of organic Spearmint tea daily paired with a gentle oil-free moisturizer, and consult a doctor for a 40:1 inositol prescription.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Hormonal Spot Hydration',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Lightweight moisturizer for oily jawline skin.',
        caution: 'Oil-free formula.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Soothing Barrier Gel',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Panthenol gel moisturizer to calm inflamed cysts.',
        caution: 'Non-comedogenic.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Lipid Support',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Dermatologist-tested non-comedogenic moisturizer.',
        caution: 'Daily application.'
      }
    ]
  },
  ACR11: {
    intro: 'Niacinamide serums in India range from pure 5% Vitamin B3 fluids to 10% formulas paired with 1% Zinc PCA for intense oil control.',
    formats: [
      ['Niacinamide 5% Gentle Brightening Serum', 'Dermatologist-recommended 5% serum for daily barrier support and PIH fading.', 'All skin types, sensitive skin, and post-acne dark marks.', 'Fades spots without flushing or stinging.'],
      ['Niacinamide 10% + Zinc 1% Oil Control Serum', 'High-strength serum targeting excessive T-zone oiliness and enlarged pores.', 'Extremely oily skin and persistent sebum congestion.', 'Use with caution on sensitive or dry-leaning skin.'],
      ['Niacinamide + Cica Soothing Barrier Serum', 'Hybrid serum combining 5% Niacinamide with Madecassoside for irritated skin.', 'Red, sensitive, or retinoid-treated acne-prone skin.', 'Calms redness while restoring barrier ceramides.']
    ],
    checklist: [
      'Choose 5% Niacinamide for daily gentleness and spot fading.',
      'Look for formulas enriched with Zinc PCA or Hyaluronic acid.',
      'Apply 2-3 drops to clean damp skin twice daily.',
      'Follow with an oil-free barrier moisturizer.',
      'Wear broad-spectrum SPF 50 sunscreen every morning.'
    ],
    landscape: 'In India, Niacinamide serums (such as Minimalist 5% Niacinamide, The Derma Co 10% Niacinamide, and Plum 10% Niacinamide) are top-selling active treatments.',
    buyFirst: 'Start with a gentle 5% Niacinamide serum used twice daily under a non-comedogenic moisturizer and broad-spectrum sunscreen.',
    products: [
      {
        name: 'The Derma Co 1% Salicylic Acid Oil-Free Moisturizer',
        badge: 'Acne Barrier Hydration',
        image: '/assets/images/product-examples/derma-co-salicylic-moisturizer.jpg',
        url: 'https://thedermaco.com/products/1-salicylic-acid-oil-free-moisturizer-for-face-with-oat-extract-50g',
        detail: 'Oil-free moisturizer ideal for pairing with Niacinamide.',
        caution: 'Non-comedogenic.'
      },
      {
        name: 'Minimalist Vitamin B5 10% Moisturizer',
        badge: 'Soothing Barrier Gel',
        image: '/assets/images/product-examples/minimalist-vitamin-b5-moisturizer.jpg',
        url: 'https://beminimalist.co/products/vitamin-b5-10-moisturizer',
        detail: 'Panthenol gel moisturizer to maintain skin barrier health.',
        caution: 'Lightweight texture.'
      },
      {
        name: 'Excela Acne-Prone Moisturizer',
        badge: 'Pharmacy Lipid Support',
        image: '/assets/images/product-examples/excela-moisturiser.jpg',
        url: 'https://pharmeasy.in/health-care/products/excela-moisturiser-bottle-of-50gm-pump-208388',
        detail: 'Dermatologist-recommended non-comedogenic moisturizer.',
        caution: 'Daily application.'
      }
    ]
  }
};

function renderPage(p) {
  const pd = productDetails[p.id];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://mymirror.fit/acne/${p.slug}/#webpage`,
        'url': `https://mymirror.fit/acne/${p.slug}/`,
        'name': p.title,
        'description': p.description,
        'aspect': ['Treatment', 'Diagnosis', 'Prevention'],
        'medicalAudience': 'Patient'
      },
      {
        '@type': 'FAQPage',
        '@id': `https://mymirror.fit/acne/${p.slug}/#faq`,
        'mainEntity': p.faqs.map(([q, a]) => ({
          '@type': 'Question',
          'name': q,
          'acceptedAnswer': { '@type': 'Answer', 'text': a }
        }))
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <meta name="description" content="${p.description}">
  <link rel="canonical" href="https://mymirror.fit/acne/${p.slug}/">
  <meta property="og:title" content="${p.ogTitle}">
  <meta property="og:description" content="${p.description}">
  <meta property="og:url" content="https://mymirror.fit/acne/${p.slug}/">
  <meta property="og:type" content="article">
  <meta property="og:image" content="https://mymirror.fit${p.heroImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${p.ogTitle}">
  <meta name="twitter:description" content="${p.description}">
  <meta name="twitter:image" content="https://mymirror.fit${p.heroImage}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,300..700;1,300..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
  <style>
    :root {
      --bg: #090D16;
      --card-bg: #111827;
      --text: #F9FAFB;
      --text-muted: #9CA3AF;
      --accent: #38BDF8;
      --accent-glow: rgba(56, 189, 248, 0.15);
      --border: #1F2937;
      --font-heading: 'Kantumruy Pro', sans-serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: var(--font-body); line-height: 1.6; padding-bottom: 60px; }
    header { background: rgba(9, 13, 22, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); sticky: top 0; z-index: 100; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: #FFF; text-decoration: none; display: flex; align-items: center; gap: 8px; }
    .logo span { color: var(--accent); }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    .hero { padding: 60px 0 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
    .hero-eyebrow { color: var(--accent); text-transform: uppercase; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px; }
    .hero h1 { font-family: var(--font-heading); font-size: 2.25rem; line-height: 1.25; margin-bottom: 20px; }
    .hero p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 24px; }
    .cta-btn { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0EA5E9, #0284C7); color: #FFF; font-weight: 700; padding: 14px 28px; border-radius: 99px; text-decoration: none; box-shadow: 0 4px 20px rgba(14, 165, 233, 0.4); transition: transform 0.2s; }
    .cta-btn:hover { transform: translateY(-2px); }
    .hero-img-wrap { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid var(--border); background: var(--card-bg); }
    .hero-img-wrap img { width: 100%; height: auto; display: block; object-fit: cover; }
    .hero-img-note { padding: 12px 16px; background: rgba(17, 24, 39, 0.9); font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border); }
    .trust-bar { display: flex; gap: 24px; border-y: 1px solid var(--border); padding: 20px 0; margin: 40px 0; font-size: 0.9rem; color: var(--text-muted); justify-content: space-around; flex-wrap: wrap; }
    .trust-item { display: flex; align-items: center; gap: 8px; }
    .section-title { font-family: var(--font-heading); font-size: 1.75rem; margin: 40px 0 20px; }
    .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px; }
    .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 24px; }
    .card-title { font-size: 1.15rem; font-weight: 700; color: var(--accent); margin-bottom: 12px; }
    .table-wrap { overflow-x: auto; margin: 24px 0 40px; border: 1px solid var(--border); border-radius: 12px; }
    table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }
    th { background: #1F2937; padding: 14px 18px; color: #FFF; font-weight: 600; }
    td { padding: 14px 18px; border-top: 1px solid var(--border); color: var(--text-muted); }
    tr:nth-child(even) { background: rgba(31, 41, 55, 0.3); }
    .step-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
    .step-item { display: flex; gap: 16px; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 18px; align-items: flex-start; }
    .step-num { background: var(--accent); color: #090D16; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0; }
    .faq-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
    .faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
    .faq-q { font-weight: 700; color: #FFF; margin-bottom: 8px; font-size: 1.05rem; }
    .faq-a { color: var(--text-muted); font-size: 0.95rem; }
    .sources-list { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 40px; }
    .sources-list a { color: var(--accent); text-decoration: none; }
    @media (max-width: 768px) {
      .hero { grid-template-columns: 1fr; gap: 24px; text-align: left; }
      .hero h1 { font-size: 1.75rem; }
    }
  </style>
</head>
<body>
  <header>
    <a href="https://mymirror.fit/" class="logo">My<span>Mirror</span></a>
    <a href="https://mymirror.fit/acne/" class="cta-btn" style="padding: 8px 18px; font-size: 0.85rem;">Acne Hub</a>
  </header>

  <main class="container">
    <section class="hero">
      <div>
        <div class="hero-eyebrow">${p.eyebrow}</div>
        <h1>${p.h1}</h1>
        <p>${p.heroCopy}</p>
        <a href="#decision" class="cta-btn">View Decision Guide</a>
      </div>
      <div class="hero-img-wrap">
        <img src="${p.heroImage}" alt="${p.heroAlt}">
        <div class="hero-img-note">${p.heroNote}</div>
      </div>
    </section>

    <div class="trust-bar">
      <div class="trust-item">✓ Dermatologist Reviewed</div>
      <div class="trust-item">✓ Indian Skin Phototype IV-VI Focus</div>
      <div class="trust-item">✓ Evidence-Based Safety Rules</div>
    </div>

    <section id="decision">
      <h2 class="section-title">Clinical Decision Framework</h2>
      <p style="color: var(--text-muted); margin-bottom: 24px;">${p.decisionIntro}</p>
      <div class="card-grid">
        ${p.decisionCards.map(([title, desc]) => `
          <div class="card">
            <div class="card-title">${title}</div>
            <p style="color: var(--text-muted); font-size: 0.95rem;">${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section>
      <h2 class="section-title">Indian Skin Phototype Considerations</h2>
      <p style="color: var(--text-muted); margin-bottom: 20px;">${p.indianSkinIntro}</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Biological Factor</th>
              <th>Clinical Effect on Indian Skin</th>
              <th>Actionable Routine Guidance</th>
            </tr>
          </thead>
          <tbody>
            ${p.indianRows.map(([f, e, g]) => `
              <tr>
                <td style="color: #FFF; font-weight: 600;">${f}</td>
                <td>${e}</td>
                <td>${g}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 class="section-title">Step-by-Step Safe Application Method</h2>
      <p style="color: var(--text-muted); margin-bottom: 20px;">${p.safeIntro}</p>
      <div class="step-list">
        ${p.safeSteps.map(([title, desc], i) => `
          <div class="step-num">${i + 1}</div>
          <div>
            <div style="font-weight: 700; color: #FFF; margin-bottom: 4px;">${title}</div>
            <div style="color: var(--text-muted); font-size: 0.95rem;">${desc}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section>
      <h2 class="section-title">Common Application Mistakes to Avoid</h2>
      <div class="card-grid">
        ${p.mistakes.map(m => `
          <div class="card" style="border-left: 4px solid #EF4444;">
            <div style="color: #EF4444; font-weight: 700; margin-bottom: 6px;">⚠️ Caution</div>
            <p style="color: var(--text-muted); font-size: 0.95rem;">${m}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section>
      <h2 class="section-title">Formulation Comparison & Product Landscape</h2>
      <p style="color: var(--text-muted); margin-bottom: 20px;">${pd.landscape}</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Formulation Type</th>
              <th>Mechanism & Benefits</th>
              <th>Target Skin Condition</th>
              <th>Usage Guidance</th>
            </tr>
          </thead>
          <tbody>
            ${pd.formats.map(([fmt, mech, tgt, use]) => `
              <tr>
                <td style="color: #FFF; font-weight: 600;">${fmt}</td>
                <td>${mech}</td>
                <td>${tgt}</td>
                <td>${use}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 class="section-title">Recommended Product Checklist</h2>
      <div class="card" style="margin-bottom: 40px;">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
          ${pd.checklist.map(item => `
            <li style="display: flex; align-items: center; gap: 10px; color: var(--text-muted);">
              <span style="color: var(--accent); font-weight: 800;">✓</span> ${item}
            </li>
          `).join('')}
        </ul>
      </div>
    </section>

    <section>
      <h2 class="section-title">When to See a Dermatologist</h2>
      <p style="color: var(--text-muted); margin-bottom: 20px;">${p.dermIntro}</p>
      <div class="card" style="margin-bottom: 40px; border-left: 4px solid var(--accent);">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
          ${p.dermList.map(item => `
            <li style="display: flex; align-items: center; gap: 10px; color: var(--text-muted);">
              <span style="color: var(--accent); font-weight: 800;">👨‍⚕️</span> ${item}
            </li>
          `).join('')}
        </ul>
      </div>
    </section>

    <section>
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-list">
        ${p.faqs.map(([q, a]) => `
          <div class="faq-item">
            <div class="faq-q">Q: ${q}</div>
            <div class="faq-a">${a}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="sources-list">
      <h3 style="color: #FFF; margin-bottom: 12px;">Clinical References & Medical Sources</h3>
      <ul>
        ${p.sources.map(([title, url]) => `
          <li><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></li>
        `).join('')}
      </ul>
    </section>
  </main>
</body>
</html>`;
}

for (const p of pages) {
  const dir = path.join('/Users/tm030/acne', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderPage(p));
  console.log(`Generated HTML for ${p.slug}`);
}

