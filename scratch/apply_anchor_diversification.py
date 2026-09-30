import os, sys, re, subprocess

CARD_ANCHOR_MAP = {
    '/acne/benzoyl-peroxide-gel-cream-india/': 'Read Benzoyl Peroxide Gel Review →',
    '/acne/clindamycin-gel-for-acne-indian-skin/': 'Read Clindamycin Gel Clinical Guide →',
    '/acne/azelaic-acid-15-20-percent-gel-cream-india/': 'Read Azelaic Acid 15%–20% Guide →',
    '/acne/salicylic-acid-face-wash-for-acne-india/': 'Read Salicylic Acid Face Wash Guide →',
    '/acne/persol-ac-2.5-vs-5-gel-india/': 'Read Persol AC 2.5% vs 5% Review →',
    '/acne/best-retinol-serum-for-acne-india/': 'Read Best Retinol for Acne Guide →',
    '/acne/best-retinol-serum-for-beginners-india/': 'Read Retinol for Beginners Guide →',
    '/acne/adapalene-benzoyl-peroxide-gel/': 'Read Adapalene + BPO Gel Guide →',
    '/acne/tretinoin-0.025-cream-acne-purge-india/': 'Read Tretinoin 0.025% Purge Guide →',
    '/acne/best-benzoyl-peroxide-face-wash-india/': 'Read BPO Face Wash Guide →',
    '/acne/best-cica-moisturizer-for-acne-prone-skin-india/': 'Read Best Cica Moisturizer Guide →',
    '/acne/niacinamide-serums-india/': 'Read Top Niacinamide Serums Guide →',
    '/acne/cica-soothing-moisturizer-for-acne-barrier-repair-india/': 'Read Cica Barrier Cream Guide →',
    '/acne/acnemoist-cream-vs-acnestar-cream-india/': 'Read Acnemoist vs Acnestar Review →',
    '/acne/cerave-moisturizing-cream-vs-lotion-acne-india/': 'Read CeraVe Cream vs Lotion Review →',
    '/acne/oil-free-moisturizer-for-acne-prone-skin-india/': 'Read Oil-Free Moisturizers Guide →',
    '/acne/adapalene-vs-tretinoin-for-comedonal-acne-india/': 'Read Adapalene vs Tretinoin Guide →',
    '/acne/alpha-arbutin-serum-for-acne-dark-spots-indian-skin/': 'Read Alpha Arbutin Dark Spots Guide →',
    '/acne/azelaic-acid-acne-dark-spots-india/': 'Read Azelaic Acid Dark Spots Guide →',
    '/acne/salicylic-acid-face-wash-vs-serum/': 'Read SA Wash vs Serum Guide →',
    '/acne/sebogel-salicylic-acid-niacinamide-gel-review-india/': 'Read Sebogel Salicylic Review →',
}

def normalize_href(h):
    return h.replace('https://mymirror.fit', '')

output = subprocess.check_output(['git', 'ls-files', 'acne/*.html', 'acne/**/*.html'], text=True)
files = [f.strip() for f in output.strip().split('\n') if f.strip() and not any(k in f for k in ['template', 'scratch', '.bak'])]

modified_count = 0
cards_updated = 0
intext_updated = 0
hero_updated = 0
nav_updated = 0

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        orig = f.read()
    
    content = orig

    # 1. Product Cards
    card_pat = re.compile(r'(<div class=[\"\']product-card[\"\']>.*?<a\s+href=[\"\']([^\"\']+)[\"\'][^>]*class=[\"\']product-buy-btn[\"\']>)\s*Read Clinical Review\s*→?\s*(</a>\s*</div>)', re.DOTALL | re.I)
    
    def repl_card(m):
        global cards_updated
        href = m.group(2)
        norm = normalize_href(href)
        new_anchor = CARD_ANCHOR_MAP.get(norm)
        if new_anchor:
            cards_updated += 1
            return m.group(1) + new_anchor + m.group(3)
        return m.group(0)

    content = card_pat.sub(repl_card, content)

    # 2. In-text generic links
    # adapalene-before-after-results
    if 'adapalene-before-after-results' in fpath:
        old_sub = 'Learn more in our <a href="/acne/adapalene-differin-adaferin-gel-comparison-india/" style="color: inherit; text-decoration: underline;">comparison guide</a>.'
        new_sub = 'Compare formulations in our <a href="/acne/adapalene-differin-adaferin-gel-comparison-india/" style="color: inherit; text-decoration: underline;">Adapalene vs Differin vs Adaferin comparison guide</a>.'
        if old_sub in content:
            content = content.replace(old_sub, new_sub)
            intext_updated += 1

    # cheek-acne
    if fpath == 'acne/cheek-acne/index.html':
        p1_old = 'Learn more about <a href="/acne/chin-acne-meaning/">chin acne triggers</a> for comparison.'
        p1_new = 'Compare with our guide on <a href="/acne/chin-acne-meaning/">chin acne causes, hormones, and breakout triggers</a>.'
        p2_old = 'Learn more in our <a href="/acne/cleansing-balm-for-acne-prone-skin-india/">double cleansing guide</a> to reset your skin.'
        p2_new = 'Reset your skin using our <a href="/acne/cleansing-balm-for-acne-prone-skin-india/">double cleansing routine for acne-prone skin</a>.'
        p3_old = 'Read our guide on <a href="/acne/pie-vs-pih-indian-skin/">fade dark spots</a> to treat lingering marks.'
        p3_new = 'Follow our clinical guide on <a href="/acne/pie-vs-pih-indian-skin/">fading post-acne erythema and PIH dark spots</a>.'
        for o, n in [(p1_old, p1_new), (p2_old, p2_new), (p3_old, p3_new)]:
            if o in content:
                content = content.replace(o, n)
                intext_updated += 1

    # chin-acne-meaning
    if fpath == 'acne/chin-acne-meaning/index.html':
        c_old = 'Learn more about gentle cleansers in our <a href="/acne/cleansing-balm-for-acne-prone-skin-india/">double cleansing guide</a>.'
        c_new = 'Choose barrier-safe cleansers in our <a href="/acne/cleansing-balm-for-acne-prone-skin-india/">double cleansing guide for acne-prone skin</a>.'
        if c_old in content:
            content = content.replace(c_old, c_new)
            intext_updated += 1

    # cheek-acne-comparison
    if fpath == 'acne/cheek-acne-comparison/index.html':
        c_old = 'Read our guide on <a href="/acne/pie-vs-pih-indian-skin/">fading dark marks</a> for post-breakout recovery tips.'
        c_new = 'Read our clinical protocol for <a href="/acne/pie-vs-pih-indian-skin/">fading PIE red marks and PIH dark spots</a>.'
        if c_old in content:
            content = content.replace(c_old, c_new)
            intext_updated += 1

    # cheek-acne-meaning
    if fpath == 'acne/cheek-acne-meaning/index.html':
        c_old = 'Read our guide on <a href="/acne/chin-acne-meaning/">chin acne triggers</a> for comparison.'
        c_new = 'Compare with our guide on <a href="/acne/chin-acne-meaning/">hormonal chin acne triggers and breakout zones</a>.'
        if c_old in content:
            content = content.replace(c_old, c_new)
            intext_updated += 1

    # 3. Hero jump buttons
    if fpath == 'acne/nighttime-routine-forehead-acne-prevention/index.html':
        if '>Read the Guide</a>' in content:
            content = content.replace('>Read the Guide</a>', '>Explore Night Routine Protocol</a>')
            hero_updated += 1
    elif fpath == 'acne/post-acne-mark-removal-forehead-india/index.html':
        if '>Read the Guide</a>' in content:
            content = content.replace('>Read the Guide</a>', '>Explore Mark Removal Protocol</a>')
            hero_updated += 1
    elif fpath == 'acne/when-to-see-dermatologist-for-acne-india/index.html':
        if '>Read the Guide</a>' in content:
            content = content.replace('>Read the Guide</a>', '>Explore Dermatology Checklist</a>')
            hero_updated += 1

    # 4. Secondary nav Diet Guide -> Acne Diet Guide
    # <a href="/acne/hormonal-acne-diet-india/" ...>Diet Guide</a>
    diet_nav_pat = re.compile(r'(<a\s+[^>]*?href=[\"\']/acne/hormonal-acne-diet-india/[\"\'][^>]*>)\s*Diet Guide\s*(</a>)', re.I)
    if diet_nav_pat.search(content):
        content = diet_nav_pat.sub(r'\1Acne Diet Guide\2', content)
        nav_updated += 1

    if content != orig:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1

print(f"Replacement complete:")
print(f"  Files modified: {modified_count}")
print(f"  Product cards updated: {cards_updated}")
print(f"  In-text links updated: {intext_updated}")
print(f"  Hero CTA buttons updated: {hero_updated}")
print(f"  Nav Diet Guide updated: {nav_updated}")
