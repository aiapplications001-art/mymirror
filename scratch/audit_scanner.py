import re

for filename in ["scan/index.html", "scan/script.js", "scan/style.css"]:
    content = open(filename).read()
    matches = re.findall(r'["\']([^"\']+\.(?:png|jpg|jpeg|gif|avif|webp|mp3|wav|ogg|json|wasm|pb))["\']', content, re.IGNORECASE)
    print(f"=== {filename} ===")
    for m in sorted(set(matches)):
        print("  ", m)
