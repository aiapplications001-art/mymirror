import subprocess, re, sys, json
from urllib.parse import urlparse

def test_canonicals():
    with open('vercel.json') as f:
        vdata = json.load(f)
    redirects = {r['source']: r['destination'] for r in vdata.get('redirects', [])}

    output = subprocess.check_output(['git', 'ls-files', '*.html', 'acne/*.html', 'acne/**/*.html', 'pigmentation/**/*.html', 'skin-analysis/**/*.html'], text=True)
    files = [f.strip() for f in output.strip().split('\n') if f.strip() and not any(k in f for k in ['template', 'scratch', '.bak'])]

    canonical_pat = re.compile(r'<link\s+[^>]*?rel=[\"\']canonical[\"\'][^>]*?href=[\"\']([^\"\']+)[\"\'][^>]*>', re.I)
    canonical_pat_alt = re.compile(r'<link\s+[^>]*?href=[\"\']([^\"\']+)[\"\'][^>]*?rel=[\"\']canonical[\"\'][^>]*>', re.I)
    a_pat = re.compile(r'<a\s+[^>]*?href=[\"\']([^\"\']+)[\"\'][^>]*>', re.I)

    errors = []

    for fpath in files:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        route = '/' + fpath
        if route.endswith('/index.html'):
            route = route[:-10]
        r_slash = route if route.endswith('/') else route + '/'
        r_noslash = route.rstrip('/')
        
        is_redirect = redirects.get(r_slash) or redirects.get(r_noslash)

        # 1. Check canonical presence for live pages
        if not is_redirect and fpath not in ['MyMirror_Progress_Summary_Beautified.html', 'face-map-experiment-v1.html', 'face-map-experiment.html', 'local-preview/vs-table.html']:
            matches = canonical_pat.findall(content) + canonical_pat_alt.findall(content)
            matches = list(dict.fromkeys(matches))
            if not matches:
                errors.append(f"{fpath}: Live page missing canonical tag")
            else:
                canon = matches[0].strip()
                expected = 'https://mymirror.fit' + (route if route.endswith('/') else route + '/')
                if canon != expected:
                    errors.append(f"{fpath}: Canonical mismatch - got {canon}, expected {expected}")

        # 2. Check internal links for missing trailing slash on /privacy and /terms
        for m in a_pat.finditer(content):
            href = m.group(1).strip()
            if href in ['/privacy', '/terms', 'https://mymirror.fit/privacy', 'https://mymirror.fit/terms']:
                errors.append(f"{fpath}: Link to '{href}' is missing trailing slash")

    if errors:
        print(f"FAILED: Found {len(errors)} canonical and trailing slash issues:")
        for err in errors[:25]:
            print(f"  - {err}")
        if len(errors) > 25:
            print(f"  ... and {len(errors) - 25} more")
        sys.exit(1)
    else:
        print("PASS: All live pages have verified canonicals and 0 trailing slash link issues!")
        sys.exit(0)

if __name__ == '__main__':
    test_canonicals()
