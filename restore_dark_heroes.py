import os
import subprocess
import re

def main():
    # Get all modified files in that commit
    cmd = 'cd mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo && git diff-tree --no-commit-id --name-only -r f556018'
    try:
        output = subprocess.check_output(cmd, shell=True, text=True)
    except Exception as e:
        print(f"Error running git: {e}")
        return
        
    files = [f for f in output.split('\n') if f.endswith('.html')]

    restored_count = 0

    for file in files:
        full_path = os.path.join('mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo', file)
        if not os.path.exists(full_path): continue
        
        # Get the file contents BEFORE f556018
        try:
            old_content = subprocess.check_output(f'cd mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo && git show f556018^:{file}', shell=True, text=True)
        except Exception:
            continue
            
        with open(full_path, 'r', encoding='utf-8') as f:
            current_content = f.read()
            
        # Check if the old hero had linear-gradient or text-align: center or color: #fff
        old_hero_match = re.search(r'\.hero\s*\{[^}]*(linear-gradient|text-align:\s*center|color:\s*#fff)[^}]*\}', old_content)
        
        if old_hero_match:
            old_hero_rule = old_hero_match.group(0)
            
            # Extract properties
            bg_match = re.search(r'background:\s*([^;]+);', old_hero_rule)
            color_match = re.search(r'color:\s*([^;]+);', old_hero_rule)
            align_match = re.search(r'text-align:\s*([^;]+);', old_hero_rule)
            
            new_hero_rule = '.hero { '
            if bg_match: new_hero_rule += f"{bg_match.group(0)} "
            if color_match: new_hero_rule += f"{color_match.group(0)} "
            if align_match: new_hero_rule += f"{align_match.group(0)} "
            
            # Add tightened padding
            new_hero_rule += 'padding: 3rem 2rem 4rem; margin-bottom: 0 !important; }'
            
            # Replace the broken light hero rule
            current_content = re.sub(r'\.hero\s*\{[^}]*var\(--color-bg-secondary\)[^}]*\}', new_hero_rule, current_content)
            
            # Fix the .hero-content alignment
            if align_match and 'center' in align_match.group(1):
                current_content = re.sub(r'\.hero \.hero-content\s*\{[^}]*\}', '.hero .hero-content { margin-top: 0 !important; text-shadow: none !important; text-align: center !important; }', current_content)
                
            # Fix the face-ai-subtext color and alignment
            if color_match and '#fff' in color_match.group(1).lower():
                current_content = re.sub(r'p\.face-ai-subtext\s*\{[^}]*\}', 'p.face-ai-subtext { color: rgba(255,255,255,0.85); font-size: 14px !important; font-style: italic; font-weight: 500 !important; max-width: 480px; line-height: 1.4; margin: 8px auto 0 auto !important; display: block !important; visibility: visible !important; }', current_content)
                current_content = re.sub(r'\.face-ai-cta-wrapper\s*\{[^}]*\}', '.face-ai-cta-wrapper { display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 1.5rem auto 0; text-align: center; width: 100%; position: relative; z-index: 50; }', current_content)

            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(current_content)
            restored_count += 1
            print(f"Restored dark/centered hero for {file}")

    print(f"Total restored: {restored_count}")

if __name__ == "__main__":
    main()
