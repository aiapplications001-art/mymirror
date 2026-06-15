import os
import glob
import re

def audit_contrast():
    base_dir = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne"
    html_files = glob.glob(f"{base_dir}/**/*.html", recursive=True)
    
    issues = []
    
    for filepath in html_files:
        if 'scan' in filepath.lower():
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 1. Identify if the page has a dark hero background
        # Common dark backgrounds used in the project:
        # linear-gradient(135deg, #0a0a0c 0%, #1a1410 100%)
        # linear-gradient(135deg, #111, #333)
        # background: #111 or #000
        is_dark_hero = False
        hero_class_match = re.search(r'\.(?:fast-)?hero\s*\{[^}]*background:\s*(linear-gradient[^;]+|#[0-1][0-9a-fA-F]{2,5}|var\(--color-bg-dark\))', content, re.IGNORECASE)
        
        if hero_class_match:
            bg_val = hero_class_match.group(1).lower()
            if '#0a0a0c' in bg_val or '#111' in bg_val or '#000' in bg_val or '#1a1410' in bg_val:
                is_dark_hero = True
                
        # 2. Check global CSS inclusion (forehead-acne.css sets h1 color to dark)
        # In this repo, h1 usually gets color: var(--color-text-primary) or var(--text)
        
        if is_dark_hero:
            # Check if there is an explicit rule for .hero h1 making it white
            h1_rule_match = re.search(r'\.(?:fast-)?hero(?:\s+\.hero-content)?\s+h1\s*\{[^}]*\}', content, re.IGNORECASE)
            h1_is_white = False
            
            if h1_rule_match:
                h1_rule = h1_rule_match.group(0)
                if 'color: #fff' in h1_rule.lower() or 'color: white' in h1_rule.lower():
                    h1_is_white = True
                    
            if not h1_is_white:
                issues.append(filepath)

    print(f"Total HTML files scanned: {len(html_files)}")
    print(f"Pages with dark hero but potentially dark H1 (missing explicit white color): {len(issues)}")
    for f in issues:
        print(f" - {f}")

if __name__ == "__main__":
    audit_contrast()
