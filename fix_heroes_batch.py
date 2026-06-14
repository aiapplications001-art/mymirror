import os
import glob
import re

def fix_heroes():
    base_dir = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne"
    html_files = glob.glob(f"{base_dir}/**/*.html", recursive=True)
    
    fixed_count = 0
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if "face-ai-cta-wrapper" not in content:
            continue
            
        original_content = content
        
        # 1. Fix Global CSS Bleed (Move forehead-acne.css ABOVE <style>)
        # Find the <link rel="stylesheet" href="/assets/styles/forehead-acne.css"> and move it
        css_link_pattern = r'<link[^>]*href="[^"]*forehead-acne\.css"[^>]*>'
        css_links = re.findall(css_link_pattern, content)
        
        if css_links:
            # Remove all occurrences
            content = re.sub(css_link_pattern, '', content)
            # Inject it right before <style>
            content = re.sub(r'<style>', f'{css_links[0]}\n  <style>', content, count=1)
            
        # 2. Fix Huge Padding
        content = re.sub(r'\.hero\s*\{[^}]*padding:\s*6rem\s+2rem\s+10rem[^}]*\}', 
                         '.hero { background: var(--color-bg-secondary); border-bottom: 1px solid var(--color-border); padding: 1rem 2rem 3rem; margin-bottom: 0 !important; }', 
                         content)
        content = re.sub(r'\.hero\s*\{[^}]*padding:\s*4rem\s+2rem\s+4rem[^}]*\}', 
                         '.hero { background: var(--color-bg-secondary); border-bottom: 1px solid var(--color-border); padding: 1rem 2rem 3rem; margin-bottom: 0 !important; }', 
                         content)
                         
        # 3. Add aggressive hero-content overrides if not present
        if '.hero .hero-content' not in content:
            content = re.sub(r'\.hero-inner\s*\{[^}]*\}',
                             r'\g<0>\n    .hero .hero-content { margin-top: 0 !important; text-shadow: none !important; text-align: left !important; }',
                             content)
                             
        # 4. Fix Old Subtext CSS
        old_subtext_pattern = r'\.face-ai-subtext\s*\{[^}]*\}'
        new_subtext_css = 'p.face-ai-subtext { color: var(--color-text-tertiary); font-size: 14px !important; font-style: italic; font-weight: 500 !important; max-width: 480px; line-height: 1.4; margin: 8px 0 0 0 !important; display: block !important; visibility: visible !important; }'
        content = re.sub(old_subtext_pattern, new_subtext_css, content)
        
        # 5. Fix HTML Structure: Un-nest the CTA from <div class="hero-tag">
        # Pattern: <div class="hero-tag">...<div class="face-ai-cta-wrapper"...</div></div>...<h1>...<p>...
        # We want to extract the CTA wrapper, close the hero tag early, and inject the CTA AFTER the first <p> block in the hero.
        
        # Regex to match the malformed block:
        # <div class="hero-tag">TAG_TEXT
        #   <!-- CTA -->
        #   <div class="face-ai-cta-wrapper">...</div>
        # </div>
        # <h1>...</h1>
        # <p>...</p>
        
        nested_cta_match = re.search(r'(<div class="hero-tag">.*?)(<!-- Face AI Skin Analysis CTA -->.*?</div>\s*</div>\s*</div>)(.*?<h1[^>]*>.*?</h1>.*?<p[^>]*>.*?</p>)', content, re.DOTALL)
        
        if nested_cta_match:
            # We found the weird nesting. Let's fix it safely.
            tag_start = nested_cta_match.group(1).strip()
            cta_block_with_extra_divs = nested_cta_match.group(2)
            heading_and_p = nested_cta_match.group(3)
            
            # The cta block usually ends with </div>\n</div> because it was injected inside the hero-tag which was then closed.
            # Let's extract just the pure CTA wrapper.
            pure_cta = re.search(r'(<!-- Face AI Skin Analysis CTA -->.*?<p class="face-ai-subtext".*?</p>\s*</div>)', cta_block_with_extra_divs, re.DOTALL)
            
            if pure_cta:
                clean_cta = pure_cta.group(1)
                
                # Reconstruct the HTML
                # 1. Close the hero tag properly.
                fixed_html = f"{tag_start}</div>\n{heading_and_p}\n\n{clean_cta}"
                
                content = content[:nested_cta_match.start()] + fixed_html + content[nested_cta_match.end():]
                
                # We also need to add style="margin-top: 0 !important;..." to hero-content if possible
                content = re.sub(r'<div class="hero-content">', r'<div class="hero-content" style="margin-top: 0 !important; text-shadow: none !important; text-align: left !important;">', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed_count += 1

    print(f"Successfully fixed {fixed_count} pages.")

if __name__ == "__main__":
    fix_heroes()
