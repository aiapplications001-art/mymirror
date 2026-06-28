import os
import re

def fix_tier_styling():
    filepath = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/best-pimple-patch-india/index.html"
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 1. Convert <div class="section-title"> to <h2 class="section-title">
    content = re.sub(r'<div class="section-title">(.*?)</div>', r'<h2 class="section-title">\1</h2>', content)
    
    # Update CSS to ensure H2 margins don't break the flexbox alignment
    content = re.sub(r'\.section-title\s*\{[^}]*\}', 
                     ".section-title { font-family: 'Kantumruy Pro', serif; font-size: 1.8rem; font-weight: 700; line-height: 1.3; margin: 0; color: var(--color-text-primary); }", 
                     content)
                     
    # 2. Upgrade Table CSS for desktop
    old_table_css = """    /* ── TABLE STYLES ── */
    .acne-table-wrapper { overflow-x: auto; margin: 2rem 0; border: 1px solid var(--color-border); border-radius: 12px; }
    .acne-table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .acne-table th { background: var(--color-bg-secondary); padding: 12px; text-align: left; border-bottom: 2px solid var(--color-border); }
    .acne-table td { padding: 12px; border-bottom: 1px solid var(--color-border); }
    .acne-table tr:last-child td { border-bottom: none; }"""
    
    new_table_css = """    /* ── TABLE STYLES ── */
    .acne-table-wrapper { overflow-x: auto; margin: 2.5rem 0; border: 1px solid var(--color-border); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); background: #fff; }
    .acne-table { width: 100%; border-collapse: collapse; font-size: 15px; }
    .acne-table th { background: var(--color-bg-tertiary); padding: 18px 20px; text-align: left; border-bottom: 2px solid var(--color-border); font-family: 'Kantumruy Pro', serif; font-size: 1.1rem; color: var(--color-text-primary); font-weight: 700; }
    .acne-table td { padding: 18px 20px; border-bottom: 1px solid var(--color-border); color: var(--color-text-secondary); line-height: 1.5; vertical-align: middle; }
    .acne-table tr:last-child td { border-bottom: none; }
    .acne-table tbody tr { transition: background 0.3s ease; }
    .acne-table tbody tr:hover { background: var(--color-bg-secondary); }"""
    
    content = content.replace(old_table_css, new_table_css)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Tier styling upgraded.")

if __name__ == "__main__":
    fix_tier_styling()
