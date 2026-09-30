import re, json, sys, html

pages = [
    {
        'file': 'acne/mixing-salicylic-acid-with-retinol-adapalene/index.html',
        'title_keyword': 'Can You Use Salicylic Acid with Adapalene & Retinol?',
        'content_keyword': 'Can I use Salicylic Acid with Adapalene?',
    },
    {
        'file': 'acne/salicylic-acid-purging-timeline/index.html',
        'title_keyword': 'BHA Purging: Salicylic Acid Purge Timeline & Duration',
        'content_keyword': 'What is BHA Purging',
    },
    {
        'file': 'acne/salicylic-acid-face-wash-vs-serum/index.html',
        'title_keyword': 'Salicylic Acid Cleanser vs Serum: Which Works Better?',
        'content_keyword': 'Salicylic Acid Cleanser vs Serum: Which is better',
    },
    {
        'file': 'acne/cystic-chin-pimple/index.html',
        'title_keyword': 'Why Am I Getting Cystic Acne on My Chin?',
        'content_keyword': 'Why am I getting cystic acne on my chin?',
    },
    {
        'file': 'acne/acne-patches-hydrocolloid-vs-pimple-patches-india/index.html',
        'title_keyword': 'How Does a Hydrocolloid Patch Work?',
        'content_keyword': 'How does a hydrocolloid patch work?',
    }
]

errors = []
for p in pages:
    try:
        with open(p['file'], 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check title
        m_title = re.search(r'<title>(.*?)</title>', content)
        title_text = html.unescape(m_title.group(1)) if m_title else ''
        if not m_title or p['title_keyword'] not in title_text:
            errors.append(f"{p['file']}: Title missing '{p['title_keyword']}' (found: {title_text if m_title else 'None'})")
            
        # Check content keyword
        if p['content_keyword'].lower() not in content.lower():
            errors.append(f"{p['file']}: Content missing target query phrase '{p['content_keyword']}'")
            
        # Check JSON-LD
        ld_blocks = re.findall(r'<script type=[\"\']application/ld\+json[\"\']>(.*?)</script>', content, re.DOTALL)
        if not ld_blocks:
            errors.append(f"{p['file']}: No JSON-LD block found")
        for i, b in enumerate(ld_blocks):
            try:
                json.loads(b.strip())
            except Exception as e:
                errors.append(f"{p['file']}: Invalid JSON-LD block {i}: {e}")

    except Exception as e:
        errors.append(f"{p['file']}: Error - {e}")

if errors:
    print(f"FAILED with {len(errors)} issues:")
    for err in errors:
        print(f"  - {err}")
    sys.exit(1)
else:
    print("PASS: All 5 pages have optimized titles, direct answer headings, and valid JSON-LD schemas!")
    sys.exit(0)
