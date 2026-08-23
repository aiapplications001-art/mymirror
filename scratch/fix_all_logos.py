import os, re

fixed_count = 0

# Multi-line pattern for brand-logo / logo-text anchor tags
header_pattern = re.compile(
    r'<a\s+href=[\"\'][^\"\']*[\"\']\s+class=[\"\'](brand-logo|logo-text)[\"\'][^>]*>[\s\S]*?</a>',
    re.IGNORECASE
)
header_replacement = '<a href="https://mymirror.fit/" class="brand-logo"><img src="/assets/logo-v4.png" alt="MyMirror" style="height: 32px; width: auto; display: block;"></a>'

footer_pattern = re.compile(
    r'<div\s+class=[\"\'](footer-brand|footer-logo)[\"\'][^>]*>[\s\S]*?</div>',
    re.IGNORECASE
)
footer_replacement = '<div class="footer-brand"><img src="/assets/logo-v4.png" alt="MyMirror" style="height: 26px; width: auto; display: block; filter: brightness(0) invert(1); opacity: 0.9;"></div>'

for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root or '.vercel' in root or 'scratch' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            orig = content
            # Only replace if text logo inside header or footer
            if 'MyMirror<span>.fit</span>' in content or 'MyMirror' in content and 'logo' in content:
                content = header_pattern.sub(header_replacement, content)
                content = footer_pattern.sub(footer_replacement, content)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as fp:
                    fp.write(content)
                fixed_count += 1
                print(f"Updated logo in: {path}")

print(f"\nDone! Total files updated: {fixed_count}")
