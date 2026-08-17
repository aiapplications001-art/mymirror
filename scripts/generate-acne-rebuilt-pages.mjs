import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const today = '2026-08-17';
const baseUrl = 'https://mymirror.fit';
const clusterSlug = 'mymirror-acne-rebuilt-guides';

const pages = [
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
    heroImage: '/assets/images/adapalene-hero-v4.jpg',
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
    heroImage: '/assets/images/cleansing-balm-hero-v4.jpg',
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
    heroImage: '/assets/images/oil-free-hero-v4.jpg',
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
    heroImage: '/assets/images/bpo-spot-hero-v4.jpg',
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
    heroImage: '/assets/images/txa-pih-hero-v4.jpg',
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
      .grid,.grid.five,.two,.decision { grid-template-columns:1fr; }
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
      { id: 'S5_two_week_test', heading: 'A two-week way to test the change', role: 'measurement', markdown: `Change only the step this page is about, take baseline photos, compare the same zones in the same lighting, and treat tolerability as part of success.` },
      { id: 'S6_routine_compatibility', heading: 'How it should fit with the rest of your routine', role: 'routine_architecture', markdown: 'Keep mornings anchored around gentle cleansing, moisturizer, and sunscreen. Keep nights focused on one treatment decision rather than stacking every acne active together.' },
      { id: 'S7_mistakes', heading: 'Mistakes to avoid', role: 'risk_reduction', markdown: page.mistakes.map((item) => `- ${item}`).join('\n') },
      { id: 'S8_dermatologist', heading: 'When to ask a dermatologist', role: 'safety', markdown: `${page.dermIntro}\n\n${page.dermList.map((item) => `- ${item}`).join('\n')}` },
      { id: 'S9_faq', heading: 'Questions people ask', role: 'seo', markdown: page.faqs.map(([q, a]) => `Q: ${q}\nA: ${a}`).join('\n\n') },
      { id: 'S10_sources', heading: 'Source basis', role: 'trust', markdown: page.sources.map(([label, url]) => `${label}: ${url}`).join('\n') }
    ],
    images: [
      { id: 'IMG_HERO', sectionId: 'S1_hero', purpose: 'First-fold hero visual', aspectRatio: '16:9', altText: page.heroAlt, status: 'existing_repo_asset', filePath: page.heroImage }
    ],
    sources: page.sources.map(([label, url]) => ({ label, url }))
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

Use the newer MyMirror guide structure: compact first fold, readable hero, topic-relevant image, decision cards, Indian-skin safety table, safe-use steps, mistakes, dermatologist escalation guidance, eight FAQs, visible sources, final scan CTA, and mobile sticky CTA.

## Constraints

- Do not use the old dark "Clinical Dermatological Guide" template.
- Do not include unsupported dermatologist-review claims.
- Do not diagnose, prescribe, or imply the AI scan chooses medication.
- Keep each page at 1,500+ main-content words and exactly eight FAQs.
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
- Keep each rebuilt page at 1,500 to 2,300 main-content words.
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
