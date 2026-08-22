import os, re

pages = [
    "clindamycin-nicotinamide-gel-acne-india",
    "spot-treatment-for-pimples-dark-spots-india",
    "azelaic-acid-15-20-percent-gel-cream-india",
    "glycolic-acid-toner-peel-acne-scars-india",
    "bacne-body-acne-treatment-routine-india",
    "panoxyl-4-percent-vs-10-percent-acne-wash-usa",
    "mighty-patch-vs-cosrx-pimple-patches-usa",
    "cerave-acne-foaming-cream-cleanser-4-percent-bpo-usa",
    "obagi-clenziderm-md-acne-therapeutic-system-usa",
    "proactiv-vs-differin-acne-treatment-system-usa"
]

all_images = set()
for p in pages:
    filepath = f"acne/{p}/index.html"
    if os.path.exists(filepath):
        content = open(filepath).read()
        imgs = re.findall(r'(?:src|content)=["\']([^"\']+\.(?:jpg|jpeg|png|webp|avif|gif|ico))["\']', content, re.IGNORECASE)
        for img in imgs:
            all_images.add((p, img))

print("Found referenced image URLs:")
for page, img in sorted(all_images):
    local_path = img.replace("https://mymirror.fit/", "").lstrip("/")
    exists = os.path.exists(local_path)
    status = "EXISTS" if exists else "MISSING"
    print(f"[{status}] [{page}] {img} -> {local_path}")
