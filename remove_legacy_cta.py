import re
import os

pages = [
    "acne/forehead-acne/index.html",
    "acne/back-acne/index.html",
    "acne/chin-acne/index.html",
    "acne/nose-acne-treatment/index.html",
    "acne/minimalist-acne-routine/index.html",
    "acne/salicylic-acid-for-beginners/index.html",
    "acne/adapalene-before-after-results/index.html",
    "acne/back-acne-women-30s/index.html",
    "acne/men-acne-faq/index.html",
    "acne/teenage-acne-india-parents-guide/index.html",
    "acne/pcos-acne-treatment-india/index.html",
    "acne/hormonal-acne-diet-india/index.html",
    "acne/fungal-acne-safe-sunscreen-india/index.html"
]

def process_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Match the legacy hero CTA:
    # 1. href="https://face3layerscanner.onrender.com/"
    # 2. style contains 'padding:16px' or 'padding:18px' or 'padding: 16px' etc. (these are the large buttons)
    # 3. or class="btn-brand" (sometimes used)
    
    # We will specifically target the <a> tag that looks like a hero button.
    # regex matches: <a href="https://face3layerscanner.onrender.com/" [^>]*style="[^"]*padding:\s*1[68]px[^"]*"[^>]*>.*?</a>
    # or class="btn-brand"
    
    pattern1 = re.compile(r'\s*<a href="https://face3layerscanner\.onrender\.com/"[^>]*style="[^"]*padding:\s*1[68]px[^"]*"[^>]*>.*?</a>', re.IGNORECASE | re.DOTALL)
    pattern2 = re.compile(r'\s*<a href="https://face3layerscanner\.onrender\.com/"[^>]*class="btn-brand"[^>]*>.*?</a>', re.IGNORECASE | re.DOTALL)
    
    new_content, count1 = pattern1.subn('', content)
    new_content, count2 = pattern2.subn('', new_content)
    
    # Let's also check for `<a href="https://face3layerscanner.onrender.com/" class="nav-cta" ...>Try Free Skin Analysis ✨</a>` in forehead-acne/index.html which might be a hero one, wait nav-cta is usually in the nav.
    # Looking at forehead-acne/index.html grep results:
    # `acne/forehead-acne/index.html:             <a href="https://face3layerscanner.onrender.com/" class="nav-cta" target="_blank" rel="noopener">Try Free Skin Analysis ✨</a>`
    # Let's see if there is any other large button.
    # But it's safer to only remove the explicitly large hero CTA buttons.
    
    count = count1 + count2
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath} (removed {count} legacy CTAs)")
    else:
        print(f"No changes in {filepath}. Checking for other legacy CTA formats...")
        # Check if there's any other a tag in hero-content
        # Let's print out all a tags in hero-content for manual review if missed
        hero_match = re.search(r'<div class="hero-content.*?>(.*?)</div>\s*<div class="hero-image', new_content, re.DOTALL)
        if hero_match:
            a_tags = re.findall(r'<a[^>]*>.*?</a>', hero_match.group(1), re.DOTALL)
            for a in a_tags:
                if "face3layer" in a:
                    print(f"  Found potential legacy CTA in hero: {a.strip()}")

for p in pages:
    process_file(p)
