import os
import re

def force_replace_table():
    filepath = "mystic-tarot/tarot-reading-site/whatsapp-relay/forehead-acne-seo/acne/adapalene-clindamycin-phosphate-gel/index.html"
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 1. Clean up garbage at the end
    garbage_pattern = r'</html>\'\);\s*}\);\s*}\);\s*</script>\s*<div class="sticky-cta-mobile">\s*<a href="https://face3layerscanner.onrender.com/" class="nav-cta" target="_blank" rel="noopener">Free AI Skin Analysis ✨</a>\s*</div>\s*</body>\s*</html>'
    content = re.sub(garbage_pattern, '</html>', content)
    
    # Also clean any other trailing garbage
    if '</body>\n</html>' in content:
        parts = content.split('</body>\n</html>')
        content = parts[0] + '</body>\n</html>'
        
    # 2. Replace the HTML table
    old_table_pattern = r'<h4 style="color: var\(--color-brand\); margin-top: 1\.5rem;">Vs Comparison: Adapalene vs Other Acne Treatments</h4>\s*<div class="acne-table-wrapper">\s*<table class="acne-table">.*?</table>\s*</div>'
    
    new_table = """<h4 style="color: var(--color-brand); margin-top: 1.5rem;">Vs Comparison: Adapalene vs Other Acne Treatments</h4>
        <div class="vs-table-container">
          <!-- Header Row -->
          <div class="vs-row vs-header-row">
            <div class="vs-cell vs-header">Feature</div>
            <div class="vs-cell vs-header vs-winner">Adapalene</div>
            <div class="vs-cell vs-header">Tretinoin</div>
          </div>

          <!-- Row 1 -->
          <div class="vs-row">
            <div class="vs-cell vs-feature">Irritation Potential</div>
            <div class="vs-mobile-split">
              <div class="vs-cell vs-product vs-winner"><strong>Lower</strong> 🟢</div>
              <div class="vs-cell vs-product vs-loser">Higher 🔴</div>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="vs-row">
            <div class="vs-cell vs-feature">Stability</div>
            <div class="vs-mobile-split">
              <div class="vs-cell vs-product vs-winner">
                <strong>More stable</strong>
                <span class="vs-subtext">Won't degrade in sunlight</span>
              </div>
              <div class="vs-cell vs-product vs-loser">Less stable</div>
            </div>
          </div>

          <!-- Row 3 -->
          <div class="vs-row">
            <div class="vs-cell vs-feature">Beginner Friendly</div>
            <div class="vs-mobile-split">
              <div class="vs-cell vs-product vs-winner"><strong>Yes</strong> ✅</div>
              <div class="vs-cell vs-product vs-loser">Moderate ⚠️</div>
            </div>
          </div>
        </div>"""
        
    content = re.sub(old_table_pattern, new_table, content, flags=re.DOTALL)
    
    # 3. Ensure the CSS is injected correctly. It seems the desktop CSS wasn't injected correctly either.
    desktop_css_pattern = r'/\* ── PREMIUM COMPARISON TABLE ── \*/.*?\n\s+/\* ── TABLE STYLES ── \*/'
    
    if "PREMIUM COMPARISON TABLE" not in content:
        desktop_css = """    /* ── PREMIUM COMPARISON TABLE ── */
    .vs-table-container { margin: 2.5rem 0; border-radius: 16px; border: 1px solid var(--color-border); background: #fff; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
    .vs-row { display: grid; grid-template-columns: 1.2fr 1fr 1fr; border-bottom: 1px solid var(--color-border); }
    .vs-row:last-child { border-bottom: none; }
    .vs-cell { padding: 18px 20px; font-size: 15px; color: var(--color-text-secondary); line-height: 1.5; display: flex; flex-direction: column; justify-content: center; }
    .vs-header { background: var(--color-bg-tertiary); font-family: 'Kantumruy Pro', serif; font-weight: 700; font-size: 1.1rem; color: var(--color-text-primary); }
    .vs-feature { font-weight: 700; color: var(--color-text-primary); background: #fafafa; }
    .vs-winner { background: #fff8f1; border-left: 2px solid var(--color-brand); border-right: 2px solid var(--color-brand); }
    .vs-header.vs-winner { background: var(--color-brand); color: #fff; border: none; }
    .vs-subtext { font-size: 12px; color: var(--color-text-tertiary); margin-top: 4px; }
    
    /* ── TABLE STYLES ── */"""
        content = content.replace("    /* ── TABLE STYLES ── */", desktop_css)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Force replaced table HTML and CSS.")

if __name__ == "__main__":
    force_replace_table()