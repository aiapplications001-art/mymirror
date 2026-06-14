import os
import glob
import re

def audit_heroes():
    base_dir = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne"
    html_files = glob.glob(f"{base_dir}/**/*.html", recursive=True)
    
    issues = {
        "cta_before_h1": [],
        "huge_padding": [],
        "old_subtext_css": [],
        "global_css_bleed_risk": []
    }
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if "face-ai-cta-wrapper" not in content:
            continue
            
        # 1. Check if CTA is placed before H1 (indicates the nested hero-tag bug)
        h1_idx = content.find("<h1")
        cta_idx = content.find("face-ai-cta-wrapper")
        if h1_idx != -1 and cta_idx != -1 and cta_idx < h1_idx:
            issues["cta_before_h1"].append(filepath)
            
        # 2. Check for massive 6rem 10rem padding
        if re.search(r'\.hero\s*\{[^}]*padding:\s*6rem\s+2rem\s+10rem', content):
            issues["huge_padding"].append(filepath)
            
        # 3. Check for old subtext CSS (13px or rgba white)
        if re.search(r'\.face-ai-subtext\s*\{[^}]*(13px|rgba\(255,255,255)', content):
            issues["old_subtext_css"].append(filepath)
            
        # 4. Check if global forehead-acne.css is loaded AFTER inline <style>
        style_idx = content.find("<style>")
        css_link_idx = content.rfind("forehead-acne.css")
        if style_idx != -1 and css_link_idx != -1 and css_link_idx > style_idx:
            issues["global_css_bleed_risk"].append(filepath)
            
    print(f"Total HTML files with CTA: {len([f for f in html_files if 'face-ai-cta-wrapper' in open(f).read()])}")
    print(f"CTA before H1 (Nested Bug): {len(issues['cta_before_h1'])}")
    print(f"Huge Padding Bug: {len(issues['huge_padding'])}")
    print(f"Old Subtext CSS: {len(issues['old_subtext_css'])}")
    print(f"Global CSS Bleed Risk: {len(issues['global_css_bleed_risk'])}")
    
    # Print a sample of files that need major restructuring
    print("\nSample files needing structural fix (CTA before H1):")
    for f in issues["cta_before_h1"][:10]:
        print(f" - {f}")

if __name__ == "__main__":
    audit_heroes()
