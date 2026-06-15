import os
import glob
import re

def fix_seo_indexing_blockers():
    base_dir = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne"
    html_files = glob.glob(f"{base_dir}/**/*.html", recursive=True)
    
    fixed_titles_count = 0
    fixed_domains_count = 0
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # 1. Fix malformed <title> tags containing <a> links
        # Find everything between <title> and </title>
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
        if title_match:
            title_text = title_match.group(1)
            # If there's an anchor tag in the title
            if '<a ' in title_text.lower():
                # Strip all HTML tags from the title text
                clean_title = re.sub(r'<[^>]+>', '', title_text)
                content = content[:title_match.start(1)] + clean_title + content[title_match.end(1):]
                fixed_titles_count += 1
                
        # 2. Fix incorrect domain mymirror.in -> mymirror.fit
        if 'mymirror.in' in content:
            content = content.replace('mymirror.in', 'mymirror.fit')
            fixed_domains_count += 1
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
                
    print(f"Successfully fixed malformed <title> tags in {fixed_titles_count} pages.")
    print(f"Successfully fixed incorrect mymirror.in domains in {fixed_domains_count} pages.")

if __name__ == "__main__":
    fix_seo_indexing_blockers()
