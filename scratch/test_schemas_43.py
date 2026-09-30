import os, sys, json, re

with open('scratch/missing_schema_43.json') as f:
    target_pages = json.load(f)

errors = []
verified_count = 0

for item in target_pages:
    filepath = item['file']
    if not os.path.exists(filepath):
        errors.append(f'{filepath}: File does not exist')
        continue

    with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()

    blocks = re.findall(r'<script\s+type=[\"\']application/ld\+json[\"\']\s*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
    if not blocks:
        errors.append(f'{filepath}: Missing JSON-LD script block')
        continue

    # Validate JSON syntax
    parsed_any = False
    for b in blocks:
        try:
            data = json.loads(b)
            if not isinstance(data, dict):
                errors.append(f'{filepath}: Root JSON-LD must be a JSON object')
                continue
            ctx = data.get('@context', '')
            if 'schema.org' not in ctx:
                errors.append(f'{filepath}: Missing @context schema.org (found: {ctx})')
                continue
            
            # Check @graph
            graph = data.get('@graph', [data])
            types = [x.get('@type') for x in graph if isinstance(x, dict)]
            
            if filepath == 'index.html':
                if not any(t in types for t in ['WebSite', 'Organization']):
                    errors.append(f'{filepath}: Missing WebSite or Organization schema')
            else:
                if not any(t in types for t in ['MedicalWebPage', 'CollectionPage', 'WebPage', 'WebApplication']):
                    errors.append(f'{filepath}: Missing primary page schema type (found {types})')
                if not any(t == 'BreadcrumbList' for t in types) and 'privacy' not in filepath and 'terms' not in filepath:
                    errors.append(f'{filepath}: Missing BreadcrumbList schema')

            parsed_any = True
        except Exception as e:
            errors.append(f'{filepath}: Invalid JSON-LD syntax: {e}')

    if parsed_any:
        verified_count += 1

if errors:
    print(f'Schema Test FAIL: {len(errors)} issues found:')
    for err in errors[:15]:
        print('  x', err)
    if len(errors) > 15:
        print(f'  ... and {len(errors) - 15} more')
    sys.exit(1)
else:
    print(f'Schema Test PASS: All {len(target_pages)} pages contain valid, structured JSON-LD schemas!')
    sys.exit(0)
