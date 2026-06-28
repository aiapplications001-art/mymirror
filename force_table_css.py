import os

def force_table_css():
    filepath = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/adapalene-clindamycin-phosphate-gel/index.html"
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    old_css = """    /* ── TABLE STYLES ── */
    .acne-table-wrapper { overflow-x: auto; margin: 2rem 0; border: 1px solid var(--color-border); border-radius: 12px; }
    .acne-table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .acne-table th { background: var(--color-bg-secondary); padding: 12px; text-align: left; border-bottom: 2px solid var(--color-border); }
    .acne-table td { padding: 12px; border-bottom: 1px solid var(--color-border); }
    .acne-table tr:last-child td { border-bottom: none; }"""
    
    new_css = """    /* ── TABLE STYLES ── */
    .acne-table-wrapper { overflow-x: auto; margin: 2.5rem 0; border: 1px solid var(--color-border); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); background: #fff; }
    .acne-table { width: 100%; min-width: 600px; border-collapse: collapse; font-size: 15px; }
    .acne-table th { background: var(--color-bg-tertiary); padding: 18px 20px; text-align: left; border-bottom: 2px solid var(--color-border); font-family: 'Kantumruy Pro', serif; font-size: 1.1rem; color: var(--color-text-primary); font-weight: 700; white-space: nowrap; }
    .acne-table td { padding: 18px 20px; border-bottom: 1px solid var(--color-border); color: var(--color-text-secondary); line-height: 1.5; vertical-align: top; }
    .acne-table tr:last-child td { border-bottom: none; }
    .acne-table tbody tr { transition: background 0.3s ease; }
    .acne-table tbody tr:hover { background: var(--color-bg-secondary); }"""
    
    if old_css in content:
        content = content.replace(old_css, new_css)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully replaced table CSS.")
    else:
        print("Old CSS not found. Please check exact spacing.")

if __name__ == "__main__":
    force_table_css()
