import os, sys, json, re

with open('scratch/missing_schema_43.json') as f:
    target_pages = json.load(f)

def clean_title(title_raw):
    # Remove HTML tags if present (like in experiment files)
    t = re.sub(r'<[^>]+>', '', title_raw)
    t = t.split('|')[0].strip()
    return t

def clean_breadcrumb_name(clean_title_str):
    # Shorten for breadcrumb
    b = clean_title_str
    if len(b) > 40:
        # shorten at colon or dash if present
        for sep in [':', '—', '-', 'vs']:
            if sep in b:
                cand = b.split(sep)[0].strip()
                if 10 <= len(cand) <= 40:
                    return cand
        b = b[:38].strip() + '...'
    return b

def get_og_image(content):
    m = re.search(r'<meta[^>]*?property=[\"\']og:image[\"\'][^>]*?content=[\"\'](.*?)[\"\']', content, re.I)
    if not m:
        m = re.search(r'<meta[^>]*?content=[\"\'](.*?)[\"\'][^>]*?property=[\"\']og:image[\"\']', content, re.I)
    if m:
        return m.group(1).strip()
    return 'https://mymirror.fit/assets/images/mymirror-og.jpg'

def build_schema_for_page(filepath, content, title_raw, canonical, desc):
    title = clean_title(title_raw)
    image = get_og_image(content)

    if filepath == 'index.html':
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebSite",
                    "@id": "https://mymirror.fit/#website",
                    "url": "https://mymirror.fit/",
                    "name": "MyMirror",
                    "description": "Evidence-based dermatology guides and AI skin analysis designed specifically for Indian and South Asian skin types.",
                    "publisher": {
                        "@type": "Organization",
                        "@id": "https://mymirror.fit/#organization"
                    }
                },
                {
                    "@type": "Organization",
                    "@id": "https://mymirror.fit/#organization",
                    "name": "MyMirror",
                    "url": "https://mymirror.fit/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://mymirror.fit/acne/forehead-acne/logo-v4.png"
                    },
                    "sameAs": [
                        "https://www.instagram.com/mymirror.fit/"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "customer support",
                        "url": "https://mymirror.fit"
                    }
                }
            ]
        }

    if filepath == 'acne/index.html':
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "CollectionPage",
                    "@id": "https://mymirror.fit/acne/#webpage",
                    "url": "https://mymirror.fit/acne/",
                    "name": "Acne Treatment & Skincare Routine Guides",
                    "description": desc or "Evidence-based dermatological guides for acne, dark spots, and barrier repair tailored for South Asian and Indian skin types.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "MyMirror",
                        "url": "https://mymirror.fit"
                    },
                    "image": image
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://mymirror.fit/acne/#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://mymirror.fit/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Acne Hub",
                            "item": "https://mymirror.fit/acne/"
                        }
                    ]
                }
            ]
        }

    if filepath == 'scan/index.html':
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebApplication",
                    "@id": "https://mymirror.fit/scan/#webpage",
                    "url": "https://mymirror.fit/scan/",
                    "name": "Instant AI Skin Scan & Face Mapping",
                    "description": desc or "Start your free AI skin scan: Instantly map facial acne zones, analyze active breakout patterns, and get a dermatologist-aligned routine.",
                    "applicationCategory": "HealthApplication",
                    "operatingSystem": "All",
                    "image": image
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://mymirror.fit/scan/#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://mymirror.fit/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "AI Skin Scan",
                            "item": "https://mymirror.fit/scan/"
                        }
                    ]
                }
            ]
        }

    if filepath in ['privacy/index.html', 'terms/index.html']:
        slug = filepath.split('/')[0]
        url = f"https://mymirror.fit/{slug}/"
        return {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    "@id": f"{url}#webpage",
                    "url": url,
                    "name": title,
                    "description": desc or f"MyMirror {title}"
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": f"{url}#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://mymirror.fit/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": url
                        }
                    ]
                }
            ]
        }

    # Clinical acne guides
    canon_url = canonical or f"https://mymirror.fit/{filepath.replace('/index.html', '/')}"
    if not canon_url.endswith('/'):
        canon_url += '/'
        
    b_name = clean_breadcrumb_name(title)

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalWebPage",
                "@id": f"{canon_url}#webpage",
                "url": canon_url,
                "name": title,
                "description": desc,
                "dateModified": "2026-09-30",
                "author": {
                    "@type": "Organization",
                    "name": "MyMirror Clinical Dermatology Team",
                    "url": "https://mymirror.fit"
                },
                "reviewedBy": {
                    "@type": "Person",
                    "name": "Dr. Lipy Mehta",
                    "jobTitle": "Consultant Dermatologist",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "MyMirror Skin Science"
                    }
                },
                "image": image
            },
            {
                "@type": "BreadcrumbList",
                "@id": f"{canon_url}#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://mymirror.fit/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Acne Hub",
                        "item": "https://mymirror.fit/acne/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": b_name,
                        "item": canon_url
                    }
                ]
            }
        ]
    }

injected = 0
for item in target_pages:
    fpath = item['file']
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8') as fp:
        c = fp.read()

    schema_dict = build_schema_for_page(fpath, c, item['title'], item['canonical'], item['desc'])
    schema_json = json.dumps(schema_dict, indent=2)
    script_tag = f'\n  <script type="application/ld+json">\n{schema_json}\n  </script>\n'

    # Insert right before </head>
    if '</head>' in c:
        c_new = c.replace('</head>', f'{script_tag}</head>', 1)
        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(c_new)
        injected += 1
        print(f'Injected schema in {fpath}')
    else:
        print(f'ERROR: No </head> found in {fpath}')

print(f'\nFinished! Successfully injected schemas into {injected} / {len(target_pages)} pages.')
