import os, sys, re, subprocess

def test_anchors():
    output = subprocess.check_output(['git', 'ls-files', 'acne/*.html', 'acne/**/*.html'], text=True)
    files = [f.strip() for f in output.strip().split('\n') if f.strip() and not any(k in f for k in ['template', 'scratch', '.bak'])]
    
    errors = []
    
    # 1. Check for 'Read Clinical Review'
    rcr_pattern = re.compile(r'<a\s+[^>]*?class=[\"\']product-buy-btn[\"\'][^>]*>(\s*Read Clinical Review\s*→?\s*)</a>', re.I)
    
    # 2. Check for generic in-text patterns
    generic_in_text = [
        re.compile(r'<a\s+[^>]*?href=[\"\']/acne/adapalene-differin-adaferin-gel-comparison-india/[\"\'][^>]*>\s*comparison guide\s*</a>', re.I),
        re.compile(r'<a\s+[^>]*?href=[\"\']/acne/pie-vs-pih-indian-skin/[\"\'][^>]*>\s*fade dark spots\s*</a>', re.I),
        re.compile(r'<a\s+[^>]*?href=[\"\']/acne/pie-vs-pih-indian-skin/[\"\'][^>]*>\s*fading dark marks\s*</a>', re.I),
    ]
    
    # 3. Check for hero 'Read the Guide'
    hero_pattern = re.compile(r'<a\s+href=[\"\']#quick-answer[\"\'][^>]*>\s*Read the Guide\s*</a>', re.I)
    
    # 4. Check for secondary nav 'Diet Guide'
    nav_pattern = re.compile(r'<nav class=[\"\']nav-links[\"\'][^>]*>.*?<a\s+href=[\"\']/acne/hormonal-acne-diet-india/[\"\'][^>]*>\s*Diet Guide\s*</a>.*?<h1', re.DOTALL | re.I)

    for fpath in files:
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check 1
            if rcr_pattern.search(content):
                errors.append(f"{fpath}: Contains generic 'Read Clinical Review →'")
            
            # Check 2
            for pat in generic_in_text:
                if pat.search(content):
                    errors.append(f"{fpath}: Contains generic in-text anchor matching {pat.pattern}")
            
            # Check 3
            if hero_pattern.search(content):
                errors.append(f"{fpath}: Contains generic hero 'Read the Guide'")
            
            # Check 4
            if nav_pattern.search(content):
                errors.append(f"{fpath}: Contains generic secondary nav 'Diet Guide'")

        except Exception as e:
            errors.append(f"{fpath}: Error reading file - {e}")
            
    if errors:
        print(f"FAILED: Found {len(errors)} generic anchor issues:")
        for err in errors[:25]:
            print(f"  - {err}")
        if len(errors) > 25:
            print(f"  ... and {len(errors) - 25} more")
        sys.exit(1)
    else:
        print("PASS: 0 generic anchor texts found across acne cluster!")
        sys.exit(0)

if __name__ == '__main__':
    test_anchors()
