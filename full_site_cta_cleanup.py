import os
import glob
import re

def full_site_cta_cleanup():
    base_dir = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne"
    html_files = glob.glob(f"{base_dir}/**/*.html", recursive=True)
    
    fixed_count = 0
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # We want to identify the hero content area.
        # It's typically inside <div class="hero-content"> or <div class="hero-inner">
        # Let's target ANY large button that looks like a legacy CTA in the hero section,
        # but EXCLUDE the new premium `.face-ai-btn` or mobile sticky CTAs.
        
        # Regex to find links styled like buttons (excluding face-ai-btn) that sit in the hero.
        # Legacy CTA patterns:
        # <a href="..." style="display:inline-block; padding:16px..." ...>...</a>
        # <a href="..." class="btn-brand"...>...</a>
        # <a href="..." class="btn-primary"...>...</a>
        
        # To be safe, we will specifically target the block between <div class="hero... and </section> or </header>
        hero_match = re.search(r'(<(?:section|header|div)[^>]*class="[^"]*hero[^"]*"[^>]*>.*?)(</(?:section|header|div)>)', content, re.DOTALL | re.IGNORECASE)
        
        if hero_match:
            hero_block = hero_match.group(1)
            
            # Find all anchor tags in the hero block
            a_tags = re.findall(r'<a\s+[^>]*>.*?</a>', hero_block, re.DOTALL | re.IGNORECASE)
            
            for a_tag in a_tags:
                # If it's the premium CTA, skip it
                if "face-ai-btn" in a_tag:
                    continue
                
                # If it's a TOC link or normal inline link, skip it
                if "toc-link" in a_tag or "text-decoration: none" not in a_tag and "btn" not in a_tag:
                    # Actually, legacy CTAs almost always have padding > 10px or class btn
                    if not re.search(r'padding:\s*[1-2][0-9]px', a_tag) and not re.search(r'class="[^"]*btn', a_tag):
                        continue
                        
                # If it's a structural link like the title link, skip it
                if ">Back Acne<" in a_tag or "color: inherit" in a_tag:
                    if not re.search(r'padding', a_tag) and "btn" not in a_tag:
                        continue
                
                # This is likely a legacy CTA button!
                print(f"Removing legacy CTA from {filepath}: {a_tag.strip()[:60]}...")
                content = content.replace(a_tag, '')
                
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed_count += 1

    print(f"\nSuccessfully cleaned legacy CTAs from {fixed_count} additional pages.")

if __name__ == "__main__":
    full_site_cta_cleanup()