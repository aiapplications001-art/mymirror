import json, subprocess, re

with open('vercel.json') as f:
    vdata = json.load(f)

redirects = {r['source']: r['destination'] for r in vdata.get('redirects', [])}

output = subprocess.check_output(['git', 'ls-files', '*.html', 'acne/*.html', 'acne/**/*.html', 'pigmentation/**/*.html', 'skin-analysis/**/*.html'], text=True)
files = [f.strip() for f in output.strip().split('\n') if f.strip() and not any(k in f for k in ['template', 'scratch', '.bak'])]

canonical_pat = re.compile(r'<link\s+[^>]*?rel=[\"\']canonical[\"\'][^>]*?href=[\"\']([^\"\']+)[\"\'][^>]*>', re.I)
canonical_pat_alt = re.compile(r'<link\s+[^>]*?href=[\"\']([^\"\']+)[\"\'][^>]*?rel=[\"\']canonical[\"\'][^>]*>', re.I)

modified_files = 0
links_fixed = 0
canonicals_added = 0
canonicals_updated = 0

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    orig = content

    route = '/' + fpath
    if route.endswith('/index.html'):
        route = route[:-10]
    r_slash = route if route.endswith('/') else route + '/'
    r_noslash = route.rstrip('/')
    dest = redirects.get(r_slash) or redirects.get(r_noslash)

    # 1. Add canonical if missing
    matches = canonical_pat.findall(content) + canonical_pat_alt.findall(content)
    matches = list(dict.fromkeys(matches))

    if not matches:
        if fpath == 'privacy/index.html':
            canon_tag = '\n    <link rel="canonical" href="https://mymirror.fit/privacy/">'
            content = content.replace('</title>', '</title>' + canon_tag, 1)
            canonicals_added += 1
        elif fpath == 'terms/index.html':
            canon_tag = '\n    <link rel="canonical" href="https://mymirror.fit/terms/">'
            content = content.replace('</title>', '</title>' + canon_tag, 1)
            canonicals_added += 1
        elif dest:
            dest_url = 'https://mymirror.fit' + (dest if dest.endswith('/') else dest + '/')
            canon_tag = f'\n    <link rel="canonical" href="{dest_url}">'
            if '</title>' in content:
                content = content.replace('</title>', '</title>' + canon_tag, 1)
            elif '</head>' in content:
                content = content.replace('</head>', f'{canon_tag}\n</head>', 1)
            canonicals_added += 1
    else:
        # If legacy redirected file, ensure canonical points directly to final destination
        if dest:
            dest_url = 'https://mymirror.fit' + (dest if dest.endswith('/') else dest + '/')
            # check current canonical
            curr = matches[0].strip()
            if curr != dest_url:
                # Replace canonical href with dest_url
                content = re.sub(r'(<link\s+[^>]*?rel=[\"\']canonical[\"\'][^>]*?href=)[\"\'][^\"\']+[\"\']', rf'\1"{dest_url}"', content, flags=re.I)
                content = re.sub(r'(<link\s+[^>]*?href=)[\"\'][^\"\']+[\"\']([^>]*?rel=[\"\']canonical[\"\'])', rf'\1"{dest_url}"\2', content, flags=re.I)
                canonicals_updated += 1

    # 2. Fix trailing slashes on internal links
    # Replace href="/privacy" with href="/privacy/"
    def fix_link(m):
        global links_fixed
        links_fixed += 1
        full = m.group(0)
        return full.replace(m.group(1), m.group(1) + '/')

    # Patterns for links without trailing slash
    content = re.sub(r'<a\s+([^>]*?)href=[\"\'](/privacy)[\"\']', r'<a \1href="/privacy/"', content)
    content = re.sub(r'<a\s+([^>]*?)href=[\"\'](/terms)[\"\']', r'<a \1href="/terms/"', content)
    content = re.sub(r'<a\s+([^>]*?)href=[\"\'](https://mymirror\.fit/privacy)[\"\']', r'<a \1href="https://mymirror.fit/privacy/"', content)
    content = re.sub(r'<a\s+([^>]*?)href=[\"\'](https://mymirror\.fit/terms)[\"\']', r'<a \1href="https://mymirror.fit/terms/"', content)

    if content != orig:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_files += 1

print(f"Canonical & Trailing Slash Fixes Complete:")
print(f"  Files modified:       {modified_files}")
print(f"  Canonicals added:     {canonicals_added}")
print(f"  Canonicals updated:   {canonicals_updated}")
