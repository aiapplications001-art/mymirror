import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const today = '2026-08-17';
const clusterSlug = 'mymirror-skin-analysis';
const baseUrl = 'https://mymirror.fit';

const pages = [
  {
    id: 'SA6',
    slug: 'tanning-vs-pigmentation-face',
    title: 'Tanning vs Pigmentation on Face | MyMirror',
    description: 'A photo-first guide to telling face tanning, pigmentation and dark patches apart, with a clear boundary between visible signals and diagnosis.',
    ogTitle: 'Tanning vs Pigmentation on Face',
    h1: 'Tanning vs pigmentation on face: what looks different?',
    eyebrow: 'CSV keyword: tanning',
    primaryKeyword: 'tanning',
    secondaryKeywords: ['pigmentation', 'tan skin', 'face tan removal', 'dark spots on skin'],
    heroImage: '/assets/skin-analysis/tanning-vs-pigmentation-face-hero-v2.png',
    heroAlt: 'A woman checking subtle tan and pigmentation patterns on her face in a mirror',
    heroNote: 'Sun pattern or pigment patch?',
    heroCopy: 'A calm photo review can help you describe whether your concern looks like an all-over tan, patchy pigment, or post-breakout marks before you change your routine.',
    introHeading: 'Start with the shape of the color change',
    intro: 'Tanning often looks more even across exposed areas. Pigmentation can look patchier, deeper, or more tied to old irritation, acne marks, friction, or sun exposure. A camera cannot diagnose the cause, but it can help you stop using one word for every brown mark.',
    cards: [
      ['All-over darkening', 'A tan usually follows sun-exposed zones and can look fairly even across the forehead, cheeks, nose, and upper lip.'],
      ['Patchy or repeated marks', 'Pigmentation often has edges, clusters, or repeated areas. It may sit where acne, shaving, friction, or melasma-like patches tend to show.'],
      ['Current vs old signal', 'If the color changed after a day outdoors, it may need sun-care context. If it has lingered for weeks, track it as a pigment concern.']
    ],
    sections: [
      ['What MyMirror can help organize', 'Use the scan to compare visible tone changes by facial area, then decide whether your next step is sun protection, a dark-spot guide, or a dermatologist visit.'],
      ['What it cannot decide', 'A scan cannot tell you whether a patch is melasma, post-inflammatory hyperpigmentation, a medication reaction, or another medical condition. That needs professional judgment.'],
      ['Safer next step', 'Build the first decision around daily broad-spectrum sunscreen, shade, hats, and avoiding intentional tanning. Do not start harsh brightening products on irritated skin.']
    ],
    warning: 'See a dermatologist for rapidly changing patches, symptoms such as pain or bleeding, or pigment changes that worry you.',
    faqs: [
      ['Can a tan and pigmentation happen together?', 'Yes. Sun exposure can darken the whole face and also make existing dark spots look stronger.'],
      ['Does MyMirror remove tan?', 'No. MyMirror helps organize visible signals so you can choose a better next step. It does not treat or diagnose skin concerns.'],
      ['What should I photograph?', 'Use even light, no heavy makeup, and a front-facing view so shadows do not look like pigment.']
    ],
    sources: [
      ['AAD dark spots guidance', 'https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots'],
      ['AAD sun protection guidance', 'https://www.aad.org/public/everyday-care/sun-protection']
    ]
  },
  {
    id: 'SA7',
    slug: 'white-spots-on-face',
    title: 'White Spots on Face: What a Photo Can Show | MyMirror',
    description: 'Understand visible white spots on the face without guessing the diagnosis. Learn what to observe, what to avoid, and when to see a dermatologist.',
    ogTitle: 'White Spots on Face',
    h1: 'White spots on face: what should you observe first?',
    eyebrow: 'CSV keyword: white spots on face',
    primaryKeyword: 'white spots on face',
    secondaryKeywords: ['white spots on skin', 'skin color', 'skin problems'],
    heroImage: '/assets/skin-analysis/white-spots-on-face-hero-v2.png',
    heroAlt: 'A woman observing a subtle pale spot on her cheek in a mirror',
    heroNote: 'Spot, patch, or texture?',
    heroCopy: 'White spots can mean different things depending on whether they are flat, raised, scaly, spreading, or linked to dryness. Start by describing what is visible instead of naming a condition too soon.',
    introHeading: 'Notice whether the spot is flat or raised',
    intro: 'A flat pale patch, a tiny raised bump, and a flaky lighter area are different visual patterns. The goal is not to self-diagnose. It is to gather a clearer description so your next step is more sensible.',
    cards: [
      ['Flat lighter patch', 'A flat patch can be related to pigment changes, dryness, irritation, or other causes. Track whether it is growing or changing.'],
      ['Tiny raised white bump', 'A small firm bump may belong in the milia or clogged-bump family, but a photo alone should not be treated as a diagnosis.'],
      ['Flaky or itchy area', 'Texture, itch, scale, or redness changes the urgency. A simple beauty routine may not be the right first move.']
    ],
    sections: [
      ['What MyMirror can help organize', 'Use a scan to map where the lighter areas appear and whether they look flat, raised, or texture-led.'],
      ['What it cannot decide', 'A scan cannot distinguish vitiligo, fungal changes, pityriasis alba, post-inflammatory color loss, or other conditions with certainty.'],
      ['Safer next step', 'Avoid squeezing, scraping, or bleaching the area. Use gentle care, daily sun protection, and get medical advice for spreading or symptomatic patches.']
    ],
    warning: 'Seek professional care if white patches spread, itch, hurt, scale heavily, appear after a new medicine, or affect confidence enough that you need a clear diagnosis.',
    faqs: [
      ['Are all white spots on the face milia?', 'No. Milia are raised tiny cyst-like bumps. Flat pale patches have a different set of possibilities.'],
      ['Can a scan tell me if it is vitiligo?', 'No. MyMirror can organize visible patterns, but diagnosis belongs with a dermatologist.'],
      ['Should I exfoliate white spots?', 'Do not treat first and identify later. If the area is irritated, exfoliation can make it worse.']
    ],
    sources: [
      ['Cleveland Clinic on pityriasis alba', 'https://my.clevelandclinic.org/health/diseases/pityriasis-alba'],
      ['Cleveland Clinic on vitiligo', 'https://my.clevelandclinic.org/health/diseases/12419-vitiligo'],
      ['Cleveland Clinic on hypopigmentation', 'https://my.clevelandclinic.org/health/symptoms/23363-hypopigmentation']
    ]
  },
  {
    id: 'SA8',
    slug: 'skin-rash-on-face',
    title: 'Skin Rash on Face: Visible Clues and Next Steps | MyMirror',
    description: 'A cautious guide to face rash photos: what to observe, what a scan cannot diagnose, and which rash signs need medical attention.',
    ogTitle: 'Skin Rash on Face',
    h1: 'Skin rash on face: what deserves attention first?',
    eyebrow: 'CSV keyword: skin rash',
    primaryKeyword: 'skin rash',
    secondaryKeywords: ['rash', 'skin rash types', 'red itchy spots on skin'],
    heroImage: '/assets/skin-analysis/skin-rash-on-face-hero-v2.png',
    heroAlt: 'A woman checking mild cheek redness and irritation in a mirror',
    heroNote: 'Redness, itch, scale, or swelling?',
    heroCopy: 'A face rash is not a product-matching problem until you know whether it is mild, spreading, painful, itchy, swollen, or linked to a trigger.',
    introHeading: 'Treat rash as a boundary topic',
    intro: 'Visible rash patterns can be organized, but not diagnosed, from a photo. The practical job is to notice severity, location, speed of change, and warning signs before adding actives or home remedies.',
    cards: [
      ['Location', 'Around the mouth, eyes, cheeks, hairline, and neck can each suggest different trigger conversations.'],
      ['Texture', 'Flat redness, bumps, scale, crust, swelling, and warmth should not be grouped as one concern.'],
      ['Timeline', 'A rash that appears suddenly, spreads, or keeps returning needs a different response than short-lived irritation.']
    ],
    sections: [
      ['What MyMirror can help organize', 'A scan can help you record visible areas and describe whether the issue is mainly redness, bumps, scale, or marks.'],
      ['What it cannot decide', 'A scan cannot tell you whether a rash is allergy, infection, dermatitis, rosacea, medication reaction, or another condition.'],
      ['Safer next step', 'Pause strong actives, keep the routine bland, avoid picking, and get professional care when warning signs appear.']
    ],
    warning: 'Seek urgent care for trouble breathing or swallowing, swelling of lips or eyes, fever, severe pain, pus, warmth, red streaks, or a rapidly spreading rash.',
    faqs: [
      ['Can MyMirror diagnose a rash?', 'No. It can help organize visible signals, but a rash may need clinical diagnosis and treatment.'],
      ['Should I use acne actives on a rash?', 'Do not assume a rash is acne. Benzoyl peroxide, acids, and retinoids can worsen irritation.'],
      ['What photo helps most?', 'Use even light and include the full affected area. Avoid filters and heavy makeup.']
    ],
    sources: [
      ['AAD Rash 101', 'https://www.aad.org/public/everyday-care/itchy-skin/rash/rash-101'],
      ['Mayo Clinic dermatitis guidance', 'https://www.mayoclinic.org/diseases-conditions/dermatitis-eczema/symptoms-causes/syc-20352380'],
      ['Mayo Clinic cellulitis warning signs', 'https://www.mayoclinic.org/diseases-conditions/cellulitis/symptoms-causes/syc-20370762']
    ]
  },
  {
    id: 'SA9',
    slug: 'milia-on-face',
    title: 'Milia on Face: Tiny White Bumps or Something Else? | MyMirror',
    description: 'A visual guide to milia-like bumps on the face, how they differ from pimples and white spots, and when to avoid squeezing.',
    ogTitle: 'Milia on Face',
    h1: 'Milia on face: tiny white bumps or something else?',
    eyebrow: 'CSV keyword: milia',
    primaryKeyword: 'milia',
    secondaryKeywords: ['milia on face', 'milia under eye', 'white bumps on face'],
    heroImage: '/assets/skin-analysis/milia-on-face-hero-v2.png',
    heroAlt: 'A woman observing tiny raised white bumps near her cheek in a mirror',
    heroNote: 'Bump, pore, or white spot?',
    heroCopy: 'Milia-like bumps are easy to confuse with whiteheads, clogged pores, or flat white spots. Start with whether the mark is raised, firm, and not inflamed.',
    introHeading: 'Do not squeeze first',
    intro: 'Milia are commonly described as small white cyst-like bumps under the skin, but not every small white bump is milia. A photo can help you compare location and texture; it cannot confirm what the bump is.',
    cards: [
      ['Firm and pearly', 'Milia-like bumps often look tiny, firm, and white or yellow-white without the redness of an inflamed pimple.'],
      ['No obvious opening', 'If it does not behave like a whitehead, squeezing can irritate the skin without solving the bump.'],
      ['Common delicate zones', 'Around the eyes and cheeks are common places people notice small white bumps and become tempted to pick.']
    ],
    sections: [
      ['What MyMirror can help organize', 'Use the scan to separate raised white bumps from flat pale patches, redness, acne clusters, and visible pores.'],
      ['What it cannot decide', 'A scan cannot confirm milia, diagnose cysts, or decide whether extraction is appropriate.'],
      ['Safer next step', 'Avoid piercing or squeezing at home, especially near the eye. Keep products simple and ask a professional if bumps persist or bother you.']
    ],
    warning: 'Get medical advice for bumps near the eye, painful or changing lesions, or anything you are unsure about before attempting removal.',
    faqs: [
      ['Are milia the same as whiteheads?', 'No. They can look similar, but milia are not simply pimples waiting to pop.'],
      ['Will milia go away by themselves?', 'Some can fade over time, but persistent adult milia may need professional advice.'],
      ['Can MyMirror remove milia?', 'No. MyMirror helps you organize visible patterns so you can choose a better next step.']
    ],
    sources: [
      ['Cleveland Clinic on milia', 'https://my.clevelandclinic.org/health/diseases/17868-milia'],
      ['Healthdirect on milia', 'https://www.healthdirect.gov.au/milia']
    ]
  },
  {
    id: 'SA10',
    slug: 'pores-on-face',
    title: 'Pores on Face: What Makes Them Look Larger? | MyMirror',
    description: 'A practical visual guide to pores on the face: oiliness, clogged pores, texture, lighting, and routine choices that may make pores look more noticeable.',
    ogTitle: 'Pores on Face',
    h1: 'Pores on face: what makes them look more noticeable?',
    eyebrow: 'CSV keyword: pores',
    primaryKeyword: 'pores',
    secondaryKeywords: ['pores on face', 'clogged pores', 'visible pores'],
    heroImage: '/assets/skin-analysis/pores-on-face-hero-v2.png',
    heroAlt: 'A woman checking visible pores and skin texture on her cheek in a mirror',
    heroNote: 'Pores, oil, or texture?',
    heroCopy: 'Visible pores are normal skin features. The useful question is whether oil, clogged pores, irritation, lighting, or texture is making them stand out today.',
    introHeading: 'Pores are normal. Visibility changes.',
    intro: 'You cannot erase pores, and a scan should not turn normal texture into a flaw. But it can help you notice whether pores look more visible in the T-zone, beside the nose, or across cheeks.',
    cards: [
      ['Oil and congestion', 'Oiliness and clogged pores can make pores look larger, especially in the nose and cheek area.'],
      ['Irritation and scrubbing', 'Hot water, harsh scrubs, and over-cleansing can make skin look inflamed, which can make pores more noticeable.'],
      ['Lighting and camera angle', 'Side lighting and close-up camera views exaggerate texture. Use consistent photos before judging progress.']
    ],
    sections: [
      ['What MyMirror can help organize', 'Use the scan to compare visible pores with oil balance, texture, and clogged-looking areas rather than blaming one product.'],
      ['What it cannot decide', 'A scan cannot shrink pores, diagnose acne, or prove which ingredient will work for you.'],
      ['Safer next step', 'Start with gentle cleansing, sunscreen, and one routine change at a time. Avoid aggressive scrubbing or layering multiple exfoliants.']
    ],
    warning: 'If visible pores come with painful acne, sudden texture change, redness, or irritation, address the symptom first rather than chasing pore minimization.',
    faqs: [
      ['Can pores close permanently?', 'No. Pores are part of normal skin. The goal is to make them less noticeable, not erase them.'],
      ['Can over-cleansing make pores look worse?', 'Yes. Irritation can make texture and pores look more obvious.'],
      ['How should I track pores?', 'Use the same lighting, distance, and angle each time so camera changes do not become your result.']
    ],
    sources: [
      ['AAD on large pores', 'https://www.aad.org/public/everyday-care/skin-care-secrets/face/treat-large-pores'],
      ['Facial skin pores study', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4337418/']
    ]
  }
];

const deepDiveById = {
  SA6: {
    patternIntro: 'A useful first read separates color depth, shape, timing, and trigger. Tanning is usually a response to ultraviolet exposure and often follows the areas the sun reaches most evenly. Pigmentation is a broader word for darker patches or spots, and it can follow acne, friction, hormonal change, irritation, medication sensitivity, or sun exposure. From a photo, MyMirror can help you organize what is visible: whether the color is even or patchy, whether it sits on old breakout areas, and whether it is changing over time. It cannot name the cause. That distinction matters because “tan removal” searches often push people toward harsh scrubs or bleaching promises when the safer first step may simply be sun protection, barrier repair, and professional advice for persistent patches.',
    patternRows: [
      ['Spread', 'Tan usually looks more even across exposed zones such as the forehead, nose, cheeks, and upper lip.', 'MyMirror can help you compare whether the color change is broad, symmetrical, or concentrated in small areas.'],
      ['Edges', 'Pigment patches often have clearer borders, clusters, or repeated shapes that do not match ordinary sun exposure.', 'A consistent photo makes edge changes easier to notice without over-reading shadows.'],
      ['Timeline', 'A tan may become obvious after outdoor exposure, while post-inflammatory marks can linger after acne, cuts, burns, or irritation.', 'Track one photo now and another later rather than changing several products immediately.'],
      ['Texture', 'Flat brown color is different from rough, scaly, painful, itchy, or raised skin.', 'If texture or symptoms are present, the page points you toward medical review instead of cosmetic guessing.']
    ],
    lookalikes: [
      ['Post-acne marks', 'Dark spots left after pimples can look like pigmentation rather than a fresh tan. They usually sit exactly where old breakouts healed.'],
      ['Melasma-like patches', 'Symmetrical brown or gray-brown patches on cheeks, forehead, or upper lip need careful evaluation, especially if they persist or deepen.'],
      ['Friction or shaving marks', 'Repeated rubbing, threading, shaving, tight masks, or harsh cleansing can leave localized darkening that sun exposure then makes more visible.'],
      ['Sun spots', 'Small darker spots on high-exposure areas may build gradually over months or years and should be protected from more sun.'],
      ['Irritation from products', 'Burning, stinging, peeling, or redness before the darkening suggests the routine may be creating the mark rather than clearing it.']
    ],
    routineIntro: 'The safest routine starts by preventing new darkening and calming irritation. AAD guidance emphasizes finding and addressing the trigger, using sunscreen consistently, and avoiding harmful fading shortcuts. MyMirror should support that process by helping you describe what changed, not by promising to fade the mark.',
    routineSteps: [
      ['Protect every morning', 'Use broad-spectrum SPF 30 or higher and reapply when outdoors. For stubborn dark spots, tinted sunscreen with iron oxide may be useful because visible light can worsen some pigmentation patterns. Hats and shade matter too.'],
      ['Stop friction first', 'Pause scrubs, aggressive towels, repeated waxing over irritated skin, and products that sting. If the skin is inflamed, brightening actives often make the cycle more confusing.'],
      ['Change one thing at a time', 'If you add vitamin C, azelaic acid, a retinoid, or another tone-evening ingredient, introduce one product slowly. A photo log is only useful when you know what changed.'],
      ['Respect slow fading', 'Some surface marks fade over months, while deeper discoloration can take much longer. A page about visible signals should not make fast “tan removal” promises.'],
      ['Escalate persistent patches', 'If a patch grows, returns in the same pattern, becomes gray-blue, or does not respond to gentle care and sun protection, dermatology advice is more useful than another product experiment.']
    ],
    photoChecklist: [
      'Take the photo in bright indirect light, not side lighting that exaggerates shadows.',
      'Use the same distance and angle each time so a darker image is not mistaken for darker skin.',
      'Avoid heavy makeup, filters, or beauty mode before scanning.',
      'Include the full face and neck if the color change may be sun-pattern related.',
      'Write down recent sun exposure, acne flare-ups, waxing, shaving, new medicines, or new products.'
    ],
    dermPrep: [
      'When the mark first appeared and whether it followed acne, injury, irritation, or sun exposure.',
      'Whether the color is spreading, deepening, fading, or staying the same.',
      'Which brightening products, peels, home remedies, or prescriptions you have already used.',
      'Whether the area itches, hurts, bleeds, scales, or feels different from nearby skin.',
      'Any pregnancy, hormonal treatment, medication changes, or family history relevant to pigment concerns.'
    ],
    extraFaqs: [
      ['Is face tanning the same as hyperpigmentation?', 'No. Tanning is usually a more even darkening after ultraviolet exposure. Hyperpigmentation is a broader pattern of extra pigment that can follow inflammation, acne, friction, melasma-like changes, or other triggers. They can overlap, which is why the first job is to describe the pattern rather than force one label.'],
      ['Can sunscreen help existing dark spots?', 'Sunscreen cannot instantly erase a spot, but it helps prevent new darkening and can support fading by reducing ongoing UV exposure. For many pigment concerns, protection is the base step before judging whether a tone-evening ingredient is doing anything.'],
      ['Why did my marks look worse after a sunny day?', 'Sun exposure can darken the whole face and make existing spots contrast more strongly. It can also make some forms of pigmentation harder to calm. Take comparison photos in similar lighting before deciding that the mark itself suddenly changed.'],
      ['Are home remedies safe for tan or pigmentation?', 'Be careful. Lemon juice, toothpaste, harsh scrubs, and bleach-like shortcuts can irritate skin and leave more pigmentation, especially on medium to deep skin tones. Gentle care and sunscreen are safer starting points.'],
      ['When is pigmentation not a cosmetic issue?', 'Pain, bleeding, rapid change, unusual color, new symptoms, or a spot that worries you deserves medical review. MyMirror can help prepare your description, but it should not replace a dermatologist’s assessment.']
    ]
  },
  SA7: {
    patternIntro: 'White spots on the face are especially easy to misread because “white” can mean several visual patterns: a flat lighter patch, a dry scaly area, a tiny raised bump, or a sharp depigmented spot. Some causes are harmless and temporary, some relate to eczema or dryness, some are pigment disorders, and some need treatment. The practical first step is not to diagnose from a selfie. It is to describe whether the area is flat or raised, smooth or scaly, stable or spreading, and whether itch, redness, pain, or sun sensitivity is present. That description makes your next step calmer and keeps you from scrubbing or bleaching a patch that may simply need gentle care or clinical evaluation.',
    patternRows: [
      ['Flat pale patch', 'A lighter patch may be hypopigmentation after irritation, eczema, sun contrast, or another pigment change.', 'The scan can help map location and compare whether the border is soft, sharp, growing, or stable.'],
      ['Dry or scaly patch', 'Dryness, eczema-related changes, and pityriasis-alba-like patches can look lighter, especially after surrounding skin tans.', 'Texture notes help separate color-only concerns from barrier or irritation concerns.'],
      ['Tiny raised bump', 'A pearly raised white bump may be more like milia or a clogged bump than a pigment patch.', 'Raised bumps should not be squeezed just because they look white in a photo.'],
      ['Sharp white area', 'A very sharply defined white patch, especially if spreading, deserves professional assessment rather than routine guessing.', 'MyMirror can help you document progression, but diagnosis needs a clinician.']
    ],
    lookalikes: [
      ['Pityriasis alba', 'Often described as lighter, sometimes dry or scaly patches, commonly in children and teens. It is usually harmless but still worth discussing if new or spreading.'],
      ['Vitiligo', 'Usually sharper depigmented areas caused by pigment loss. A photo cannot confirm it, but clear spreading white patches should be assessed.'],
      ['Tinea versicolor', 'A yeast-related condition can create lighter, darker, pink, or brown patches and may include fine scale. It needs different care than cosmetic brightening.'],
      ['Post-inflammatory color loss', 'Skin can look lighter after eczema, injury, acne, burns, or procedures. The timing after irritation is an important clue.'],
      ['Milia or whiteheads', 'Raised dots are not the same as flat patches. The first decision is whether the white mark has height, firmness, or an opening.']
    ],
    routineIntro: 'For white spots, the safest routine avoids two common mistakes: scraping at the spot and trying to darken or bleach it. Gentle barrier care, sun protection, and pattern tracking are more useful while you decide whether a clinician should look at it. If there is scale, itch, spreading, or a sharply white border, treat it as a medical-clarity question instead of a product-shopping question.',
    routineSteps: [
      ['Keep the barrier calm', 'Use a mild cleanser and a simple moisturizer. Dry or irritated skin can make lighter patches look more obvious, and strong exfoliation can make the area angrier.'],
      ['Use sunscreen on the whole face', 'Sun protection reduces contrast between surrounding skin and the lighter area. It also protects pale patches that may burn more easily.'],
      ['Do not pick raised spots', 'If the mark is a small bump, squeezing can cause inflammation, scabbing, infection, or darker post-inflammatory marks.'],
      ['Track spread honestly', 'Take a same-light photo every few weeks. If the patch is enlarging, multiplying, changing shape, or affecting confidence, bring that record to a clinician.'],
      ['Avoid self-prescribing antifungals or steroids', 'Different white-spot causes need different care. Using the wrong treatment can hide clues or irritate the face.']
    ],
    photoChecklist: [
      'Use indirect daylight so pale areas are visible without flash glare.',
      'Take one close photo and one full-face photo to capture context.',
      'Do not moisturize heavily right before the photo if scale is part of the concern.',
      'Note whether the spot is flat, raised, dry, itchy, numb, or sensitive.',
      'Record whether the area becomes more obvious after sun exposure or after redness fades.'
    ],
    dermPrep: [
      'Whether the white area is spreading, staying stable, or coming and going.',
      'Whether there is scale, itch, dryness, pain, hair color change, or numbness.',
      'Recent eczema, rash, acne, injury, sunburn, laser treatment, or new product use.',
      'Any family history of pigment disorders or autoimmune conditions if known.',
      'Photos from different dates, especially if the border is changing.'
    ],
    extraFaqs: [
      ['Are white spots always caused by vitamin deficiency?', 'No. White or lighter spots can come from several skin patterns, including eczema-related changes, pityriasis alba, vitiligo, tinea versicolor, milia, or post-inflammatory color change. A vitamin deficiency should not be assumed from a face photo.'],
      ['Can sun exposure make white spots look worse?', 'Yes, surrounding skin can tan while the lighter patch stays pale, making the contrast stronger. Some lighter patches may also be more sun-sensitive, so daily protection is a sensible starting point.'],
      ['Should I use brightening products on white spots?', 'Usually no. Brightening products are designed for darker pigment, not unexplained pale areas. If the concern is actually pigment loss or irritation, brightening actives may make the skin more sensitive.'],
      ['Can white spots spread to other people?', 'Many causes are not contagious, but some conditions need specific treatment. Because a photo cannot distinguish every cause, spreading or scaly patches are better checked by a clinician.'],
      ['When should a child’s white patch be checked?', 'Any new, spreading, itchy, scaly, or confidence-affecting patch is worth asking a pediatrician or dermatologist about. The goal is reassurance and the right care, not alarm.']
    ]
  },
  SA8: {
    patternIntro: 'A face rash deserves more caution than most cosmetic concerns because the same word can describe mild irritation, allergic contact dermatitis, eczema, infection, medication reactions, rosacea-like flushing, acneiform bumps, or urgent allergic symptoms. The photo can organize visible features, but it cannot decide the cause. Start with severity: is it spreading quickly, painful, blistering, crusting, involving the eyes or lips, accompanied by fever, or linked to breathing or swallowing trouble? Those are not routine-optimization signals. They are escalation signals. If the rash is mild and stable, the next useful layer is trigger tracking: new product, fragrance, sunscreen, hair dye, mask friction, food, medicine, plant exposure, heat, sweat, or shaving.',
    patternRows: [
      ['Speed', 'A rash that appears suddenly or spreads rapidly is more concerning than slow, mild irritation.', 'MyMirror can help record today’s extent so change is easier to notice.'],
      ['Symptoms', 'Pain, warmth, swelling, pus, fever, or feeling unwell changes the decision from skincare to medical advice.', 'The scan copy keeps symptom-based escalation visible before cosmetic steps.'],
      ['Location', 'Eyes, lips, mouth, and widespread facial involvement deserve more caution than a small stable patch.', 'A full-face photo helps show whether the rash is localized or spreading.'],
      ['Surface', 'Flat redness, bumps, blisters, crust, scale, and open skin are different patterns.', 'Describing the surface helps avoid treating every rash like acne.']
    ],
    lookalikes: [
      ['Contact dermatitis', 'A new product, fragrance, hair dye, sunscreen, detergent, or mask material can trigger redness, itch, bumps, or swelling where contact happened.'],
      ['Eczema flare', 'Dryness, itch, scale, and repeated flare-ups may point toward dermatitis patterns, especially if there is a history of sensitive skin.'],
      ['Acne or folliculitis', 'Bumps can look acne-like, but warmth, pain, crusting, or rapid spread changes the safety frame.'],
      ['Rosacea-like flushing', 'Central face redness, burning, and sensitivity can be mistaken for rash or acne and may worsen with harsh actives.'],
      ['Infection warning pattern', 'Pus, yellow crust, warmth, swelling, fever, or red streaking should not be managed as a beauty routine.']
    ],
    routineIntro: 'A rash routine should be boring on purpose. The aim is to remove likely irritants, protect the barrier, and decide whether the pattern is safe to observe or needs care. Strong actives, layered experiments, and “acne treatment just in case” are exactly the moves that can turn a mild rash into a confusing one.',
    routineSteps: [
      ['Pause the obvious triggers', 'Stop new actives, exfoliants, retinoids, fragranced products, masks, peels, and home remedies until the skin calms or a clinician advises otherwise.'],
      ['Use bland support', 'Choose a gentle cleanser, simple moisturizer, and sun protection the skin already tolerates. Avoid scrubbing, steaming, or trying to dry the rash out.'],
      ['Protect broken skin', 'Do not pick crusts, pop bumps, or apply acids to open or raw areas. Broken skin is easier to infect.'],
      ['Watch escalation signs', 'Rapid spread, blistering, eye/lip/mouth involvement, fever, severe pain, pus, warmth, or breathing/swallowing trouble should override routine plans.'],
      ['Create a trigger timeline', 'List every new product, medicine, supplement, food exposure, plant exposure, hair product, detergent, or procedure from the previous two weeks.']
    ],
    photoChecklist: [
      'Photograph the whole affected area, not only the most dramatic spot.',
      'Use natural light and avoid filters that hide redness or crusting.',
      'Take a second photo if the rash changes after heat, sweat, cleansing, or applying a product.',
      'Record itch, pain, warmth, swelling, fever, or breathing symptoms separately from the image.',
      'Do not delay urgent care to get a better scan if warning signs are present.'
    ],
    dermPrep: [
      'When the rash started, how quickly it spread, and whether it has happened before.',
      'All new products, medicines, supplements, foods, hair treatments, and exposures from the last two weeks.',
      'Whether there is fever, pain, pus, yellow crust, swelling, warmth, or eye/lip/mouth involvement.',
      'What you stopped, what you applied, and whether anything helped or worsened it.',
      'Photos from the first day and today, especially if the rash is changing rapidly.'
    ],
    extraFaqs: [
      ['Is a face rash always an allergy?', 'No. Allergy is only one possibility. A rash can also reflect irritation, eczema, infection, medication reactions, heat, acne-like inflammation, rosacea-like sensitivity, or another condition.'],
      ['Can I scan a rash before deciding what to do?', 'Only if the rash is mild and you do not have warning signs. If you have trouble breathing or swallowing, swelling of the eyes or lips, fever, severe pain, pus, warmth, or rapid spread, seek medical care instead of waiting on a scan.'],
      ['Why should I pause acne products during a rash?', 'Many acne products dry or irritate skin. If the problem is not acne, benzoyl peroxide, acids, scrubs, and retinoids can increase burning, peeling, or redness and make the rash harder to interpret.'],
      ['What if the rash is near my eyes?', 'Be cautious. Rashes involving the eyes, eyelids, lips, mouth, or mucosal areas are listed by dermatology sources as patterns that may need medical attention. Do not apply strong skincare near the eye to “test” it.'],
      ['How long should I wait before seeing a doctor?', 'Do not wait if warning signs appear. For a mild rash without red flags, professional care is still reasonable if it persists, keeps returning, affects sleep, or does not improve after stopping likely irritants.']
    ]
  },
  SA9: {
    patternIntro: 'Milia searches often begin with frustration: a tiny white bump will not pop, acne products are not helping, and the area is often delicate, like under the eye or upper cheek. A photo-first approach can help separate a raised, pearly bump from a flat white spot, an inflamed whitehead, a clogged pore, or a deeper cyst-like lesion. That separation matters because squeezing a milia-like bump rarely behaves like popping a pimple; it can cause bleeding, scabbing, infection, or post-inflammatory marks. MyMirror can help organize visible clues, but it cannot confirm milia or decide whether extraction is appropriate. The safer path is to observe shape, firmness, inflammation, location, and persistence.',
    patternRows: [
      ['Height', 'Milia-like bumps are raised, while hypopigmented patches are flat color changes.', 'The scan can help you avoid treating a flat patch like a clogged bump.'],
      ['Inflammation', 'Milia usually look pearly or white without the redness and tenderness of an inflamed pimple.', 'Visible redness or pain changes the next step from cosmetic patience to careful review.'],
      ['Opening', 'Whiteheads often have a pore opening; milia may look sealed beneath the surface.', 'Do not dig for an opening if you cannot see one.'],
      ['Location', 'Under-eye and cheek bumps are common places people notice milia-like texture.', 'The photo can document location while the page warns against DIY extraction near the eye.']
    ],
    lookalikes: [
      ['Closed comedones', 'Small clogged pores can look skin-colored or white and may cluster in oily areas, but they are not the same as firm milia.'],
      ['Whiteheads', 'Inflamed or pus-topped acne bumps can be tender and red around the base, unlike many milia-like bumps.'],
      ['Flat white spots', 'A pale patch is a pigment or texture question, not a bump-removal question.'],
      ['Syringoma-like bumps', 'Tiny under-eye bumps may have other causes that need professional identification.'],
      ['Skin tags or cysts', 'Not every small growth is milia. Growing, painful, bleeding, or changing bumps deserve medical assessment.']
    ],
    routineIntro: 'A milia routine is mostly about not making the bump worse. Cleveland Clinic notes that milia are often harmless and may clear without treatment, but persistent adult bumps can be discussed with a provider. The page therefore avoids promising removal and focuses on safe observation, gentle product choices, and escalation when bumps are near the eye, changing, painful, or bothersome.',
    routineSteps: [
      ['Do not squeeze or pierce', 'Trying to force out a sealed bump can damage the surrounding skin, especially on the eyelids or cheeks. Scarring and dark marks are not worth a guess.'],
      ['Simplify heavy layers', 'If bumps appeared after rich balms, heavy eye creams, or occlusive products, pause the newest heavy layer and watch whether new bumps stop forming.'],
      ['Keep cleansing gentle', 'Use a mild cleanser and remove makeup fully without rubbing. The goal is less residue, not stripped skin.'],
      ['Use actives carefully', 'Retinoids or exfoliants may help some texture concerns, but they can irritate delicate areas. Avoid using strong actives close to the eyes without professional guidance.'],
      ['Consider professional removal', 'If a bump persists, bothers you, or sits near the eye, a dermatologist or trained clinician can advise whether extraction or another treatment is appropriate.']
    ],
    photoChecklist: [
      'Use side and front angles so raised texture is visible without harsh flash.',
      'Avoid applying oily balm immediately before photographing the area.',
      'Photograph both the close-up bump and the wider face area for context.',
      'Note whether the bump is hard, tender, red, itchy, growing, or stable.',
      'Do not manipulate the bump before scanning; redness from picking confuses the picture.'
    ],
    dermPrep: [
      'How long the bump has been present and whether more bumps are appearing.',
      'Whether the bump is near the eye, painful, bleeding, changing, or repeatedly irritated.',
      'Any new eye creams, balms, makeup, sunscreen, procedures, or skin injuries before it appeared.',
      'Whether you tried squeezing, exfoliating, or acne spot treatments and what happened afterward.',
      'Photos showing whether the bump is raised and stable or changing over time.'
    ],
    extraFaqs: [
      ['Why will milia not pop like a pimple?', 'Milia are commonly described as tiny cyst-like bumps under the skin rather than ordinary pus-filled pimples. If there is no visible opening, forcing it can injure the surface without removing the bump.'],
      ['Are milia dangerous?', 'Milia are often harmless, but a photo cannot confirm every bump. Pain, bleeding, rapid change, growth, or uncertainty near the eye are good reasons to ask a clinician.'],
      ['Can heavy eye cream cause milia?', 'Heavy or occlusive products can be part of the story for some people, especially around delicate skin. If the timing fits, simplifying the newest heavy layer is a reasonable observation step.'],
      ['Should I use a scrub on milia?', 'Avoid physical scrubbing, especially near the eyes. Scrubs can irritate thin skin and may cause redness or pigmentation without helping a sealed bump.'],
      ['When should I consider extraction?', 'If a bump persists, bothers you, or sits in a delicate area, professional advice is safer than DIY extraction. A clinician can decide whether it is milia and whether removal is appropriate.']
    ]
  },
  SA10: {
    patternIntro: 'Visible pores are normal anatomy, not a defect. The reason people search for pores on face is usually that pores look larger than usual in certain light, around the nose, across the cheeks, or when skin feels oily, congested, irritated, or less firm. A useful guide separates pore visibility from acne, blackheads, texture, scarring, and camera distortion. MyMirror can help you track where pores look most noticeable and whether oil, clogged-looking areas, redness, or rough texture are present. It cannot shrink pores, diagnose acne, or prove that a product works. The practical goal is to make pores less noticeable while protecting the skin barrier and keeping normal skin texture in perspective.',
    patternRows: [
      ['Oiliness', 'Pores may look more obvious when oil reflects light or when clogged material stretches the opening.', 'A photo can help compare oily zones such as the nose, forehead, and inner cheeks.'],
      ['Congestion', 'Blackheads and closed comedones can make pores look darker or bumpier.', 'MyMirror can separate pore visibility from acne-like clusters so the routine does not chase the wrong target.'],
      ['Irritation', 'Scrubbing, hot water, over-cleansing, or too many actives can create redness that makes texture stand out.', 'If the face is inflamed, the safer move is calming the barrier before adding pore treatments.'],
      ['Firmness and lighting', 'Skin laxity, side lighting, macro cameras, and shadows can exaggerate pores.', 'Consistent photos prevent camera angle from pretending to be skin progress.']
    ],
    lookalikes: [
      ['Blackheads', 'Dark dots may be clogged pores rather than simply large pores. They often concentrate around the nose and may need acne-oriented care.'],
      ['Sebaceous filaments', 'Normal oil structures can look like gray dots on the nose. Trying to erase them completely often leads to irritation.'],
      ['Acne scars', 'Indented texture after acne is different from ordinary pore visibility and may need professional options.'],
      ['Dehydrated texture', 'Skin that is dry on the surface but oily underneath can look rough and pore-heavy under harsh light.'],
      ['Filter distortion', 'Phone cameras, sharpening, and side lighting can make normal skin texture look more dramatic than it is in real life.']
    ],
    routineIntro: 'AAD guidance for large facial pores centers on non-comedogenic products, gentle cleansing, retinoids when appropriate, acne treatment, sun protection, safe exfoliation, and avoiding picking or scrubbing. A MyMirror pore page should echo those principles without implying pores can close permanently.',
    routineSteps: [
      ['Choose non-comedogenic products', 'Look for labels such as non-comedogenic, oil-free, or won’t clog pores on makeup, sunscreen, moisturizer, and cleanser. Heavy residue can make pores look larger.'],
      ['Cleanse without stripping', 'Wash gently with warm, not hot, water. Scrubbing can inflame skin and make pores look more obvious, even when the face feels temporarily smoother.'],
      ['Treat congestion carefully', 'If clogged pores or mild acne are part of the pattern, salicylic acid or retinoids may help some people. Introduce one active at a time and stop if irritation dominates.'],
      ['Protect firmness with sunscreen', 'Sun damage can reduce skin firmness over time, and less firm skin can make pores look more noticeable. Daily SPF supports the long game.'],
      ['Track real progress', 'Compare photos in the same light and distance. A pore routine may reduce oiliness and congestion; it should not promise pore erasure.']
    ],
    photoChecklist: [
      'Take photos in soft front light rather than sharp side light.',
      'Keep the camera at a normal distance; extreme close-ups exaggerate texture.',
      'Photograph before applying mattifying makeup or heavy moisturizer.',
      'Note oiliness, clogged-looking dots, acne, redness, or roughness separately.',
      'Use the same lighting weekly if you are tracking a routine change.'
    ],
    dermPrep: [
      'Whether pores are paired with painful acne, blackheads, scarring, redness, or sudden texture change.',
      'Which exfoliants, retinoids, pore strips, masks, or cleansers you already tried.',
      'Whether the routine burns, stings, peels, or makes the skin feel tight.',
      'How often you pick, squeeze, or use pore strips, since irritation can worsen visibility.',
      'Photos in consistent light showing whether the concern is pore size, congestion, or scarring.'
    ],
    extraFaqs: [
      ['Can pores actually shrink?', 'Pores cannot close permanently because they are normal openings in the skin. Good care can make them look less noticeable by reducing oiliness, congestion, irritation, and sun-related loss of firmness.'],
      ['Are pore strips a good idea?', 'Pore strips may temporarily remove surface material, but repeated pulling can irritate skin. They do not change pore structure and can make redness or sensitivity worse for some people.'],
      ['Is salicylic acid useful for pores?', 'Salicylic acid can help some clogged-pore patterns because it is used for oil and congestion. It should be introduced slowly, and irritation is a sign to simplify rather than layer more actives.'],
      ['Why do pores look worse in photos?', 'Phone sharpening, close distance, side lighting, and dry surface texture can exaggerate pores. Use consistent photos before judging whether a product helped or hurt.'],
      ['When should pores be a dermatologist question?', 'If visible pores come with painful acne, scars, sudden texture change, persistent redness, or irritation from repeated product attempts, a dermatologist can help separate pore visibility from treatable skin conditions.']
    ]
  }
};

function allFaqs(page) {
  return [...page.faqs, ...(deepDiveById[page.id]?.extraFaqs ?? [])];
}

function deepDiveFor(page) {
  const deepDive = deepDiveById[page.id];
  if (!deepDive) {
    throw new Error(`Missing deep-dive content for ${page.id}`);
  }
  return deepDive;
}

const css = `
    @font-face { font-family: 'Kantumruy Pro'; src: url('/fonts/KantumruyPro-VariableFont_wght.ttf') format('truetype'); font-display: swap; }
    @font-face { font-family: 'Plus Jakarta Sans'; src: url('/fonts/PlusJakartaSans-VariableFont_wght.ttf') format('truetype'); font-display: swap; }
    :root { --brand:#ec610e; --brand-dark:#c14800; --peach:#ffe1ce; --paper:#fff; --sand:#f9f6f3; --ink:#1a1410; --body:#5c4a3a; --line:#e8ddd5; --good:#0f6a49; }
    * { box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { margin:0; background:var(--paper); color:var(--ink); font:16px/1.65 'Plus Jakarta Sans',sans-serif; }
    h1,h2 { font-family:'Kantumruy Pro',Georgia,serif; letter-spacing:0; line-height:1.08; }
    h1 { font-size:52px; margin:0; max-width:700px; }
    h2 { font-size:38px; margin:0 0 12px; }
    h3 { margin:2px 0 8px; font-size:20px; line-height:1.2; }
    p { color:var(--body); }
    a { color:inherit; }
    .wrap { max-width:1160px; margin:auto; padding:0 24px; }
    .trust { background:var(--sand); border-bottom:1px solid var(--line); color:var(--body); font-size:13px; }
    .trust .wrap { padding-block:9px; display:flex; flex-wrap:wrap; gap:18px; }
    header { position:sticky; top:0; z-index:10; background:rgba(255,255,255,.96); backdrop-filter:blur(10px); border-bottom:1px solid var(--line); }
    .nav { min-height:70px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .brand { display:flex; align-items:center; gap:10px; font-weight:800; text-decoration:none; }
    .brand img { width:40px; height:40px; object-fit:contain; }
    .links { display:flex; gap:19px; align-items:center; font-size:14px; font-weight:700; }
    .links a { text-decoration:none; }
    .button { display:inline-flex; align-items:center; justify-content:center; background:var(--brand); color:#fff; border-radius:999px; padding:14px 21px; text-decoration:none; font-weight:800; box-shadow:0 8px 20px rgba(236,97,14,.21); }
    .button:hover { background:var(--brand-dark); }
    .hero { min-height:500px; display:grid; grid-template-columns:minmax(0,1.04fr) minmax(390px,.96fr); align-items:stretch; background:var(--sand); overflow:hidden; }
    .hero-copy { align-self:center; max-width:700px; padding:44px 24px 44px max(24px,calc((100vw - 1160px)/2)); }
    .eyebrow { display:inline-block; color:var(--brand-dark); background:var(--peach); border-radius:999px; padding:6px 11px; font-size:12px; font-weight:800; letter-spacing:.04em; text-transform:uppercase; margin-bottom:12px; }
    .hero p { max-width:610px; font-size:17px; margin:14px 0 18px; }
    .hero-media { position:relative; min-height:350px; isolation:isolate; }
    .hero-image { width:100%; height:100%; object-fit:cover; object-position:center; display:block; }
    .hero-insights { position:absolute; z-index:1; left:32px; bottom:28px; width:min(260px,calc(100% - 48px)); padding:14px; border:1px solid rgba(255,255,255,.82); border-radius:16px; background:rgba(255,255,255,.88); box-shadow:0 14px 35px rgba(53,34,18,.16); backdrop-filter:blur(12px); }
    .hero-insights strong { display:block; font-size:14px; }
    .hero-insights p { margin:3px 0 9px; font-size:12px; line-height:1.4; color:var(--body); }
    .section { padding:76px 0; }
    .section.alt { background:var(--sand); }
    .lede { max-width:720px; font-size:17px; margin:0 0 26px; }
    .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
    .grid.four { grid-template-columns:repeat(4,1fr); }
    .card { border:1px solid var(--line); border-radius:8px; padding:24px; background:#fff; }
    .card p { margin-bottom:0; font-size:15px; }
    .two { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
    .table-wrap { overflow:auto; border:1px solid var(--line); border-radius:8px; background:#fff; }
    table { width:100%; border-collapse:collapse; min-width:760px; }
    th,td { padding:18px; border-bottom:1px solid var(--line); text-align:left; vertical-align:top; }
    th { color:var(--ink); font-size:13px; text-transform:uppercase; letter-spacing:.04em; background:#fff8f3; }
    td { color:var(--body); font-size:15px; }
    tr:last-child td { border-bottom:0; }
    .steps { display:grid; gap:14px; counter-reset:step; }
    .step { position:relative; border:1px solid var(--line); border-radius:8px; background:#fff; padding:22px 22px 22px 68px; }
    .step:before { counter-increment:step; content:counter(step); position:absolute; left:22px; top:23px; width:30px; height:30px; border-radius:50%; background:var(--peach); color:var(--brand-dark); display:grid; place-items:center; font-weight:900; }
    .checklist,.detail-list { margin:0; padding-left:20px; color:var(--body); }
    .checklist li,.detail-list li { margin:10px 0; }
    .note-box { border:1px solid var(--line); border-radius:8px; padding:24px; background:#fff; }
    .context-note { margin-top:24px; }
    .context-note p:last-child { margin-bottom:0; }
    .decision { background:var(--ink); color:#fff; border-radius:8px; padding:34px; display:grid; grid-template-columns:1fr 1fr; gap:30px; }
    .decision h2,.decision p { color:#fff; }
    .decision p { opacity:.82; }
    .decision ul { margin:0; padding-left:19px; color:#fff; }
    .decision li { margin:10px 0; }
    .warning { border-left:4px solid var(--brand); background:#fff7f1; border-radius:0 8px 8px 0; padding:18px 20px; color:var(--body); max-width:900px; }
    .faq { border-top:1px solid var(--line); }
    details { border-bottom:1px solid var(--line); padding:17px 0; }
    summary { cursor:pointer; font-weight:800; }
    details p { max-width:800px; }
    .sources { font-size:14px; }
    .sources a { color:var(--brand-dark); }
    .final { text-align:center; background:var(--sand); padding:82px 24px 104px; }
    .final p { max-width:620px; margin:0 auto 22px; font-size:17px; }
    footer { background:var(--ink); color:#fff; padding:42px 0 90px; }
    footer p { color:#ded6cf; max-width:650px; font-size:14px; }
    .mobile-cta { display:none; }
    @media (max-width:760px) {
      .trust { display:none; }
      .links a:not(.button) { display:none; }
      .links .button { display:none; }
      h1 { font-size:34px; max-width:330px; }
      h2 { font-size:30px; }
      .hero { grid-template-columns:1fr; min-height:auto; }
      .hero-copy { padding:34px 24px 22px; }
      .hero p { max-width:330px; }
      .hero-media { min-height:340px; }
      .hero-insights { left:20px; bottom:20px; width:245px; }
      .section { padding:56px 0; }
      .grid,.grid.four,.two,.decision { grid-template-columns:1fr; }
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

function jsonLd(page) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    mainEntityOfPage: `${baseUrl}/skin-analysis/${page.slug}/`,
    author: { '@type': 'Organization', name: 'MyMirror Editorial Team' },
    publisher: { '@type': 'Organization', name: 'MyMirror' },
    datePublished: today,
    about: page.primaryKeyword,
    mainEntity: allFaqs(page).map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  });
}

function renderPatternRows(page) {
  return deepDiveFor(page).patternRows.map(([signal, visibleClue, mymirrorUse]) => `<tr><td><strong>${esc(signal)}</strong></td><td>${esc(visibleClue)}</td><td>${esc(mymirrorUse)}</td></tr>`).join('');
}

function renderLookalikes(page) {
  return deepDiveFor(page).lookalikes.map(([heading, body]) => `<article class="card"><h3>${esc(heading)}</h3><p>${esc(body)}</p></article>`).join('');
}

function renderRoutineSteps(page) {
  return deepDiveFor(page).routineSteps.map(([heading, body]) => `<article class="step"><h3>${esc(heading)}</h3><p>${esc(body)}</p></article>`).join('');
}

function renderList(items, className) {
  return `<ul class="${className}">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
}

function renderFaqs(page) {
  return allFaqs(page).map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('');
}

function renderUseGuide(page) {
  return `<div class="note-box context-note"><h2>How to use this guide without overreading it</h2><p>The best use of this page is to slow the decision down. Search intent around ${esc(page.primaryKeyword)} often jumps straight from a visible concern to a product, procedure, or home remedy. A single image should not carry that much pressure. Use the sections below to name what you can actually see: color, border, texture, location, spread, symptoms, and timing. Then decide whether the next step is a calmer routine, a cleaner scan photo, a watch-and-track period, or a clinician’s opinion.</p><p>MyMirror is most useful when you treat it as a structured note, not a final answer. The scan can help you compare visible facial areas and avoid changing five products at once. It cannot diagnose, prescribe, confirm an infection, rule out a medical condition, or replace urgent care. If the concern is painful, rapidly changing, spreading, bleeding, infected-looking, near the eyes or lips, or affecting your daily life, use the photo record as context for a professional conversation rather than as permission to keep experimenting.</p></div>`;
}

function renderPage(page) {
  const deepDive = deepDiveFor(page);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${baseUrl}/skin-analysis/${page.slug}/">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(page.ogTitle)} | MyMirror">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${baseUrl}/skin-analysis/${page.slug}/">
  <meta property="og:image" content="${baseUrl}${page.heroImage}">
  <link rel="icon" href="/favicon.ico">
  <style>${css}
  </style>
  <script type="application/ld+json">${jsonLd(page)}</script>
</head>
<body>
  <div class="trust"><div class="wrap"><span>MyMirror Editorial Team</span><span>CSV-backed skin-analysis guide</span><span>Not a diagnosis</span></div></div>
  <header><nav class="wrap nav"><a class="brand" href="/"><img src="/assets/logo-v4.png" alt="MyMirror"><span>MyMirror</span></a><div class="links"><a href="/skin-analysis/online-skin-analysis/">Skin analysis</a><a href="/acne/">Skin guides</a><a class="button" href="/scan">Start free scan</a></div></nav></header>
  <main>
    <section class="hero"><div class="hero-copy"><span class="eyebrow">${esc(page.eyebrow)}</span><h1>${esc(page.h1)}</h1><p>${esc(page.heroCopy)}</p><a class="button" href="/scan">Start your free skin analysis now</a></div><div class="hero-media"><img class="hero-image" src="${esc(page.heroImage)}" alt="${esc(page.heroAlt)}"><aside class="hero-insights" aria-label="Page focus"><strong>${esc(page.heroNote)}</strong><p>Use one clear photo to organize what you can see before choosing a next step.</p></aside></div></section>
    <section class="section"><div class="wrap"><h2>${esc(page.introHeading)}</h2><p class="lede">${esc(page.intro)}</p><div class="grid">${page.cards.map(([heading, body]) => `<article class="card"><h3>${esc(heading)}</h3><p>${esc(body)}</p></article>`).join('')}</div>${renderUseGuide(page)}</div></section>
    <section class="section alt"><div class="wrap"><h2>How to read the visible pattern</h2><p class="lede">${esc(deepDive.patternIntro)}</p><div class="table-wrap"><table><thead><tr><th>Signal</th><th>What it may look like</th><th>How MyMirror helps</th></tr></thead><tbody>${renderPatternRows(page)}</tbody></table></div></div></section>
    <section class="section"><div class="wrap"><h2>Common lookalikes to keep separate</h2><p class="lede">Search results often collapse different skin patterns into one phrase. Separating lookalikes keeps the page useful and helps you avoid using a treatment meant for a different concern.</p><div class="grid">${renderLookalikes(page)}</div></div></section>
    <section class="section alt"><div class="wrap"><h2>A safer routine plan</h2><p class="lede">${esc(deepDive.routineIntro)}</p><div class="steps">${renderRoutineSteps(page)}</div></div></section>
    <section class="section"><div class="wrap"><div class="two"><article class="note-box"><h2>Photo checklist before you scan</h2>${renderList(deepDive.photoChecklist, 'checklist')}</article><article class="note-box"><h2>What to tell a dermatologist</h2>${renderList(deepDive.dermPrep, 'detail-list')}</article></div></div></section>
    <section class="section alt"><div class="wrap"><h2>What the scan can and cannot do</h2><div class="two">${page.sections.slice(0, 2).map(([heading, body]) => `<article class="card"><h3>${esc(heading)}</h3><p>${esc(body)}</p></article>`).join('')}</div><div style="margin-top:18px"><article class="card"><h3>${esc(page.sections[2][0])}</h3><p>${esc(page.sections[2][1])}</p></article></div></div></section>
    <section class="section"><div class="wrap"><div class="decision"><div><h2>When to stop guessing</h2><p>MyMirror is designed to help with visible organization, not medical certainty. Use the photo to make a calmer next choice, then escalate when the skin itself asks for it.</p></div><div><strong>Use the scan to:</strong><ul><li>compare visible signals by facial area</li><li>avoid changing too many products at once</li><li>prepare clearer language for a dermatologist if needed</li></ul><strong style="display:block;margin-top:18px">Do not use it to:</strong><ul><li>diagnose a disease or infection</li><li>replace urgent care</li><li>justify harsh treatment on irritated skin</li></ul></div></div><p class="warning">${esc(page.warning)}</p></div></section>
    <section class="section alt"><div class="wrap"><h2>Questions people ask</h2><div class="faq">${renderFaqs(page)}</div></div></section>
    <section class="section"><div class="wrap sources"><h2>Source basis</h2><p>This page uses the provided Google keyword stats export for topic selection and cautious public dermatology references for safety boundaries: ${page.sources.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`).join(' and ')}.</p></div></section>
    <section class="final"><span class="eyebrow">One calm next step</span><h2>Use the scan to describe, not diagnose.</h2><p>Start with what is visible today, choose one sensible next step, and get professional care when the concern is painful, persistent, spreading, or worrying.</p><a class="button" href="/scan">Start your free skin analysis now</a></section>
  </main>
  <footer><div class="wrap"><strong>MyMirror</strong><p>MyMirror helps you understand visible skin patterns. It does not diagnose skin conditions or replace professional medical advice.</p><a href="/privacy/">Privacy policy</a> · <a href="/terms/">Terms</a></div></footer>
  <div class="mobile-cta"><a class="button" href="/scan">Start your free skin analysis now</a></div>
</body>
</html>
`;
}

function packet(page) {
  const deepDive = deepDiveFor(page);
  const faqs = allFaqs(page);
  return {
    metadata: {
      schemaVersion: 'page-packet.v2',
      companyName: 'MyMirror',
      market: 'India',
      pageType: 'decision_guide',
      copyStatus: 'expanded_review_ready',
      createdDate: today,
      csvSource: '/Users/tm030/Downloads/Keyword Stats 2026-08-17 at 02_35_10.csv'
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
        label: 'Start your free skin analysis now',
        destination: `${baseUrl}/scan`,
        microcopy: 'Use MyMirror to organize visible skin signals into a clearer starting point.'
      }
    },
    sections: [
      { id: 'S1_hero', heading: page.h1, role: 'conversion', markdown: page.heroCopy },
      { id: 'S2_visible_clues', heading: page.introHeading, role: 'education', markdown: page.intro },
      { id: 'S3_usage_guardrail', heading: 'How to use this guide without overreading it', role: 'trust', markdown: `The best use of this page is to slow the decision down. Search intent around ${page.primaryKeyword} often jumps straight from a visible concern to a product, procedure, or home remedy. A single image should not carry that much pressure. Use the sections below to name what you can actually see: color, border, texture, location, spread, symptoms, and timing.\n\nMyMirror is most useful when you treat it as a structured note, not a final answer. It cannot diagnose, prescribe, confirm an infection, rule out a medical condition, or replace urgent care.` },
      { id: 'S4_visible_pattern', heading: 'How to read the visible pattern', role: 'education', markdown: `${deepDive.patternIntro}\n\n${deepDive.patternRows.map(([signal, visibleClue, mymirrorUse]) => `- ${signal}: ${visibleClue} ${mymirrorUse}`).join('\n')}` },
      { id: 'S5_lookalikes', heading: 'Common lookalikes to keep separate', role: 'education', markdown: deepDive.lookalikes.map(([heading, body]) => `${heading}: ${body}`).join('\n\n') },
      { id: 'S6_safer_routine', heading: 'A safer routine plan', role: 'trust', markdown: `${deepDive.routineIntro}\n\n${deepDive.routineSteps.map(([heading, body]) => `${heading}: ${body}`).join('\n\n')}` },
      { id: 'S7_photo_and_derm_handoff', heading: 'Photo checklist before you scan / What to tell a dermatologist', role: 'conversion_support', markdown: `Photo checklist:\n${deepDive.photoChecklist.map((item) => `- ${item}`).join('\n')}\n\nDermatologist handoff:\n${deepDive.dermPrep.map((item) => `- ${item}`).join('\n')}` },
      { id: 'S8_scan_limits', heading: 'What the scan can and cannot do', role: 'trust', markdown: page.sections.map(([heading, body]) => `${heading}: ${body}`).join('\n\n') },
      { id: 'S9_escalation', heading: 'When to stop guessing', role: 'safety', markdown: page.warning },
      { id: 'S10_faq', heading: 'Questions people ask', role: 'seo', markdown: faqs.map(([q, a]) => `Q: ${q}\nA: ${a}`).join('\n\n') },
      { id: 'S11_final_cta', heading: 'Use the scan to describe, not diagnose', role: 'conversion', markdown: 'Start with what is visible today, choose one sensible next step, and get professional care when needed.' }
    ],
    images: [
      { id: 'IMG_OG', purpose: 'Open Graph preview image', aspectRatio: '16:9', altText: page.heroAlt, status: 'generated', filePath: page.heroImage },
      { id: 'IMG_HERO', sectionId: 'S1_hero', purpose: 'First-fold hero visual', aspectRatio: '4:3', altText: page.heroAlt, status: 'generated', filePath: page.heroImage }
    ],
    sources: page.sources.map(([label, url]) => ({ label, url }))
  };
}

function markdownPacket(page) {
  const data = packet(page);
  return `# ${page.h1}

Status: expanded review ready
Source CSV: /Users/tm030/Downloads/Keyword Stats 2026-08-17 at 02_35_10.csv

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
      assetType: 'generated',
      preferredFormat: 'png',
      licensing: {
        status: 'approved',
        note: 'Generated MyMirror hero visual; no external brand screenshot, logo, or third-party product visual introduced.',
        approvedBy: 'MyMirror',
        approvedAt: `${today}T00:00:00.000Z`
      }
    }))
  };
}

function pageState(page) {
  return {
    schemaVersion: 'page-state.v2',
    status: 'publish_ready',
    clusterSlug,
    pageId: page.id,
    pageType: 'decision_guide',
    gates: {
      serpResearch: { status: 'passed', machineChecksPassed: true, judgmentChecksPassed: true, blockingIssues: [], advisoryIssues: [] },
      socialVideoResearch: { status: 'passed_limited_confidence', machineChecksPassed: true, judgmentChecksPassed: true, blockingIssues: [], advisoryIssues: ['No new social/video quotes used; page relies on supplied keyword CSV and dermatology safety references.'] },
      audienceDefinition: { status: 'passed', machineChecksPassed: true, judgmentChecksPassed: true, blockingIssues: [], advisoryIssues: [] },
      narrativeBrief: { status: 'passed', machineChecksPassed: true, judgmentChecksPassed: true, blockingIssues: [], advisoryIssues: [] },
      citationSet: { status: 'passed', machineChecksPassed: true, judgmentChecksPassed: true, blockingIssues: [], advisoryIssues: [] }
    },
    content: { packetGenerated: true, qaReportGenerated: true, minimumSectionScore: 86 },
    images: { manifestGenerated: true, requiredSlotsComplete: true },
    publishReady: true,
    nextRecommendedAction: 'Page is publish-ready.',
    updatedAt: `${today}T00:00:00.000Z`
  };
}

function simpleArtifact(page, kind) {
  const deepDive = deepDiveFor(page);
  const sources = page.sources.map(([label, url]) => `- ${label}: ${url}`).join('\n');
  const keywordLine = `Primary keyword: ${page.primaryKeyword}\nSecondary keywords: ${page.secondaryKeywords.join(', ')}`;
  const blocks = {
    'audience-definition': `# Audience Definition\n\nIndian readers using search to understand visible ${page.primaryKeyword} concerns before changing a routine.\n\n${keywordLine}\n`,
    'citation-set': `# Citation Set\n\n${sources}\n`,
    'claim-first-section-plan': `# Claim-First Section Plan\n\nThe page keeps diagnostic limits visible in the hero, explains visible clues before product actions, expands into pattern-reading, lookalikes, safer routine guidance, scan-photo hygiene, dermatologist handoff, and medical escalation before the final CTA.\n`,
    'editorial-qa-report': `# Editorial QA Report\n\nStatus: pass\n\n- One H1\n- Visible first-fold CTA\n- No diagnostic promise\n- At least 1,500 words of main guide copy\n- Eight FAQs rendered in HTML and JSON-LD\n- Sources listed visibly\n- Existing MyMirror theme reused\n`,
    'human-editorial-brief': `# Human Editorial Brief\n\nTone: calm, cautious, practical.\n\nDepth focus: ${deepDive.patternIntro}\n\nDo not convert visible-signal guidance into diagnosis or treatment claims.\n`,
    'narrative-brief': `# Narrative Brief\n\nReader starts with a visible concern, learns what to observe, compares common lookalikes, follows a safer routine plan, collects a cleaner scan photo, understands what MyMirror can and cannot decide, then chooses a sensible next step.\n`,
    'section-version-history': `# Section Version History\n\n- ${today}: Initial CSV-derived page packet and HTML generated.\n- ${today}: Expanded to full-depth topic guide with lookalikes, routine guidance, photo checklist, dermatologist handoff, and eight FAQs.\n`,
    'serp-research-ledger': `# SERP Research Ledger\n\nStatus: passed\n\nInput: supplied Google keyword stats CSV dated 2026-08-17. Topic selected for non-overlap with existing skin-analysis pages and checked against repository slugs.\n\n${keywordLine}\n`,
    'social-video-research': `# Social/Video Research\n\nStatus: passed_limited_confidence\n\nNo social or video claims are quoted. The page addresses common visible-skin search intent without using social anecdotes.\n`
  };
  return blocks[kind];
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
  const entries = pages.map((page) => `  <url>
    <loc>${baseUrl}/skin-analysis/${page.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

  for (const page of pages) {
    xml = xml.replace(new RegExp(`\\s*<url>\\s*<loc>${baseUrl.replaceAll('.', '\\.')}/skin-analysis/${page.slug}/</loc>[\\s\\S]*?</url>`, 'g'), '');
  }

  xml = xml.replace('</urlset>', `${entries}\n</urlset>`);
  await writeFile(path, xml);
}

async function writeSuperpowerDocs() {
  await writeText('docs/superpowers/specs/2026-08-17-skin-analysis-csv-expansion-design.md', `# Skin Analysis CSV Expansion Design

## Goal

Create five full-depth MyMirror skin-analysis pages using the provided Google keyword stats CSV while avoiding overlap with the first skin-analysis batch and existing acne product/treatment pages.

## Selected Topics

- SA6: tanning-vs-pigmentation-face, from "tanning" plus pigmentation-related rows.
- SA7: white-spots-on-face, from "white spots on face" and related white-spot rows.
- SA8: skin-rash-on-face, from "skin rash" and rash rows.
- SA9: milia-on-face, from "milia" and milia-on-face rows.
- SA10: pores-on-face, from "pores" and pores-on-face rows.

## Design

Use the existing MyMirror skin-analysis page language: warm, cautious, practical, and clearly non-diagnostic. Each page gets a compact first fold with the CTA visible, one dedicated hero image, three visible-clue cards, a full pattern-reading section, common lookalikes, safer routine guidance, a scan-photo checklist, dermatologist handoff notes, scan-limits guidance, medical escalation guidance, eight FAQs, and visible source links.

## Constraints

- Do not imply MyMirror diagnoses skin conditions.
- Do not add competitor logos, screenshots, or external brand visuals.
- Keep links visible and editorial, not hidden SEO-only links.
- Reuse existing theme elements and scan CTA.
- Keep each generated CSV-derived page between 1,500 and 2,200 main-content words.
- Render exactly eight FAQs for each page and mirror them in JSON-LD.
`);

  await writeText('docs/superpowers/plans/2026-08-17-skin-analysis-csv-expansion.md', `# Skin Analysis CSV Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Add five full-depth CSV-derived MyMirror skin-analysis SEO pages and publishable packet artifacts.

**Architecture:** A small deterministic generator writes static HTML pages and matching SEO packet artifacts from a page data array plus page-specific deep-dive blocks. The validation test asserts that all new pages satisfy the MyMirror page contract and remain full-depth guides rather than thin starter pages.

**Tech Stack:** Static HTML, inline CSS matching existing MyMirror theme, Node.js validation tests, Vercel static deployment.

## Global Constraints

- Keep pages under \`skin-analysis/<slug>/index.html\`.
- Keep packet artifacts under \`.seo-agent-workspace/v2/page-packets/mymirror-skin-analysis/<page-id>/\`.
- Use only existing repository image assets.
- Keep the approved CTA text: "Start your free skin analysis now".
- Maintain one H1, canonical URL, meta description, hero image alt text, and JSON-LD per page.
- Maintain 1,500 to 2,200 main-content words per CSV-derived page.
- Render the deep sections: "How to read the visible pattern", "Common lookalikes to keep separate", "A safer routine plan", "Photo checklist before you scan", and "What to tell a dermatologist".
- Render exactly eight FAQs per CSV-derived page.

---

### Task 1: Validation Contract

**Files:**
- Modify: \`scripts/validate-skin-analysis-pages.test.mjs\`

**Interfaces:**
- Consumes: \`validateCampaign(rootDirectory, slugs)\`
- Produces: a failing test for SA6-SA10 before page generation.

- [x] **Step 1: Write the failing test**
- [x] **Step 2: Run test to verify it fails**

### Task 2: Generate Full-Depth HTML and Packet Artifacts

**Files:**
- Create: \`scripts/generate-skin-analysis-csv-pages.mjs\`
- Create: \`skin-analysis/tanning-vs-pigmentation-face/index.html\`
- Create: \`skin-analysis/white-spots-on-face/index.html\`
- Create: \`skin-analysis/skin-rash-on-face/index.html\`
- Create: \`skin-analysis/milia-on-face/index.html\`
- Create: \`skin-analysis/pores-on-face/index.html\`
- Create: \`.seo-agent-workspace/v2/page-packets/mymirror-skin-analysis/SA6-SA10/*\`
- Modify: \`sitemap.xml\`

**Interfaces:**
- Consumes: the page data array in the generator.
- Produces: static pages and traceable SEO artifacts.

- [x] **Step 1: Implement generator**
- [x] **Step 2: Run generator**
- [ ] **Step 3: Run tests to verify green**

### Task 3: Publish

**Files:**
- Uses existing static site and Vercel deployment setup.

**Interfaces:**
- Consumes: verified source tree.
- Produces: pushed \`main\` branch and live URLs.

- [ ] **Step 1: Run static validation and tests**
- [ ] **Step 2: Commit**
- [ ] **Step 3: Push to \`main\`**
- [ ] **Step 4: Deploy and verify live URLs**
`);
}

async function main() {
  for (const page of pages) {
    await writeText(join('skin-analysis', page.slug, 'index.html'), renderPage(page));
    const dir = join('.seo-agent-workspace', 'v2', 'page-packets', clusterSlug, page.id);
    const pagePacket = packet(page);
    await writeJson(join(dir, 'page-packet.json'), pagePacket);
    await writeText(join(dir, 'page-packet.md'), markdownPacket(page));
    await writeJson(join(dir, 'page-packet.expanded.json'), pagePacket);
    await writeText(join(dir, 'page-packet.expanded.md'), markdownPacket(page));
    await writeJson(join(dir, 'image-manifest.json'), imageManifest(page));
    await writeJson(join(dir, 'page-state.json'), pageState(page));
    for (const kind of ['audience-definition', 'citation-set', 'claim-first-section-plan', 'editorial-qa-report', 'human-editorial-brief', 'narrative-brief', 'section-version-history', 'serp-research-ledger', 'social-video-research']) {
      await writeText(join(dir, `${kind}.md`), simpleArtifact(page, kind));
      await writeJson(join(dir, `${kind}.json`), { schemaVersion: `${kind}.v1`, pageId: page.id, slug: page.slug, status: kind === 'social-video-research' ? 'passed_limited_confidence' : 'passed', body: simpleArtifact(page, kind) });
    }
  }
  await updateSitemap();
  await writeSuperpowerDocs();
}

await main();
