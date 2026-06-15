import os
import re

def fix_contrast():
    files_to_fix = [
        "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/index.html",
        "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/forehead-acne-cheat-sheet/index.html",
        "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/back-acne-faq/index.html",
        "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/back-acne-faq-hindi/index.html",
        "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/minimalist-acne-routine/index.html",
        "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/acne-diet-india/index.html"
    ]
    
    fixed = 0
    for filepath in files_to_fix:
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # We need to find the rule for `.hero h1` or `.hero .hero-content h1` and inject color: #ffffff !important;
        # If the rule doesn't exist, we'll create it right after the `.hero { ... }` block
        
        # Check if .hero h1 rule exists
        h1_match = re.search(r'(\.(?:fast-)?hero(?:\s+\.hero-content)?\s+h1\s*\{)([^}]*)\}', content)
        
        if h1_match:
            # Rule exists, inject the color override
            inner_content = h1_match.group(2)
            if 'color' in inner_content:
                # Replace existing color rule
                new_inner = re.sub(r'color:\s*[^;]+;', 'color: #ffffff !important;', inner_content)
            else:
                # Append color rule
                new_inner = inner_content + ' color: #ffffff !important;'
                
            new_rule = h1_match.group(1) + new_inner + '}'
            content = content[:h1_match.start()] + new_rule + content[h1_match.end():]
        else:
            # Rule doesn't exist, inject it after .hero { ... }
            hero_match = re.search(r'(\.hero\s*\{[^}]*\})', content)
            if hero_match:
                new_rule = hero_match.group(1) + '\n    .hero h1 { color: #ffffff !important; }'
                content = content[:hero_match.start()] + new_rule + content[hero_match.end():]
                
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed += 1
            print(f"Fixed contrast in {filepath}")
            
    print(f"Total fixed: {fixed}")

if __name__ == "__main__":
    fix_contrast()
