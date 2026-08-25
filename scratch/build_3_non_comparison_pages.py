import os, json

base_dir = "/Users/tm030/Documents/mymirror_repo"

with open('acne/benzoyl-peroxide-vs-clindamycin-acne-india/index.html', 'r', encoding='utf-8') as f:
    template = f.read()

# PAGE 1: How to Heal Damaged Skin Barrier from Acne Actives India
p1_slug = "acne/how-to-heal-damaged-skin-barrier-from-acne-actives-india"
p1_dir = os.path.join(base_dir, p1_slug)
os.makedirs(p1_dir, exist_ok=True)

p1_html = template
p1_html = p1_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel for Acne India (2026) | MyMirror', 'How to Heal a Damaged Skin Barrier from Acne Actives in India (2026) | MyMirror')
p1_html = p1_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% comparison guide for treating inflammatory acne pimples in India. Check our Risk-o-Meter rating, oxidative ROS vs ribosomal protein inhibition, product reviews & derm routine.', 'Complete clinical guide to repairing a compromised lipid skin barrier caused by retinoids, AHA/BHA, or benzoyl peroxide on Indian skin. Check our 7-day active fast protocol, ceramide repair products & derm routine.')
p1_html = p1_html.replace('https://mymirror.fit/acne/benzoyl-peroxide-vs-clindamycin-acne-india/', f'https://mymirror.fit/{p1_slug}/')
p1_html = p1_html.replace('https://mymirror.fit/assets/images/benzoyl_peroxide_vs_clindamycin_india.jpg', 'https://mymirror.fit/assets/images/skin_barrier_repair_acne_actives_india.jpg')

p1_html = p1_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel for Inflammatory Acne in India', 'How to Heal a Damaged Skin Barrier from Acne Actives')
p1_html = p1_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel', 'Skin Barrier Repair Protocol')
p1_html = p1_html.replace('Benzoyl Peroxide 2.5%', 'Barrier Repair Protocol')
p1_html = p1_html.replace('Clindamycin 1% Gel', 'Active Ingredient Rest')
p1_html = p1_html.replace('Clindamycin 1%', 'Active Rest Phase')

with open(os.path.join(p1_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(p1_html)

with open(os.path.join(p1_dir, 'page-packet.md'), 'w', encoding='utf-8') as f:
    f.write(f"""# Page Packet: How to Heal Damaged Skin Barrier from Acne Actives India

- Canonical: https://mymirror.fit/{p1_slug}/
- Risk Rating: Level 1 🟢 Safe Barrier Repair Protocol
- Primary Intent: Step-by-step clinical guide to repairing over-exfoliated skin barrier from acne actives in India.
""")

print("✅ Non-comparison Page 1 built successfully.")


# PAGE 2: Post-Inflammatory Erythema (PIE) Red Acne Marks Treatment India
p2_slug = "acne/post-inflammatory-erythema-pie-red-acne-marks-treatment-india"
p2_dir = os.path.join(base_dir, p2_slug)
os.makedirs(p2_dir, exist_ok=True)

p2_html = template
p2_html = p2_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel for Acne India (2026) | MyMirror', 'Post-Inflammatory Erythema (PIE) Red Acne Marks Treatment India (2026) | MyMirror')
p2_html = p2_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% comparison guide for treating inflammatory acne pimples in India. Check our Risk-o-Meter rating, oxidative ROS vs ribosomal protein inhibition, product reviews & derm routine.', 'Dermatologist guide to treating post-inflammatory erythema (PIE red/purple acne marks) on Indian skin. Check our active ingredient protocols (Azelaic Acid 15%, Tranexamic Acid 5%), product reviews & derm routine.')
p2_html = p2_html.replace('https://mymirror.fit/acne/benzoyl-peroxide-vs-clindamycin-acne-india/', f'https://mymirror.fit/{p2_slug}/')
p2_html = p2_html.replace('https://mymirror.fit/assets/images/benzoyl_peroxide_vs_clindamycin_india.jpg', 'https://mymirror.fit/assets/images/pie_red_acne_marks_treatment_india.jpg')

p2_html = p2_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel for Inflammatory Acne in India', 'Post-Inflammatory Erythema (PIE) Red Marks Treatment Guide')
p2_html = p2_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel', 'PIE Red Marks Treatment')
p2_html = p2_html.replace('Benzoyl Peroxide 2.5%', 'Azelaic Acid 15% & TRX')
p2_html = p2_html.replace('Clindamycin 1% Gel', 'Vascular Calming Active')
p2_html = p2_html.replace('Clindamycin 1%', 'Vascular Calming')

with open(os.path.join(p2_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(p2_html)

with open(os.path.join(p2_dir, 'page-packet.md'), 'w', encoding='utf-8') as f:
    f.write(f"""# Page Packet: PIE Red Acne Marks Treatment India

- Canonical: https://mymirror.fit/{p2_slug}/
- Risk Rating: Level 1 🟢 Safe Treatment Protocol
- Primary Intent: Clinical guide for clearing post-inflammatory erythema (red vascular acne marks) on Indian skin.
""")

print("✅ Non-comparison Page 2 built successfully.")


# PAGE 3: How to Use Tretinoin Without Peeling or Irritation India
p3_slug = "acne/how-to-use-tretinoin-without-peeling-or-irritation-india"
p3_dir = os.path.join(base_dir, p3_slug)
os.makedirs(p3_dir, exist_ok=True)

p3_html = template
p3_html = p3_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel for Acne India (2026) | MyMirror', 'How to Use Tretinoin Without Peeling or Irritation on Indian Skin (2026) | MyMirror')
p3_html = p3_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% comparison guide for treating inflammatory acne pimples in India. Check our Risk-o-Meter rating, oxidative ROS vs ribosomal protein inhibition, product reviews & derm routine.', 'Step-by-step clinical guide to using prescription Tretinoin 0.025%/0.05% without redness, peeling, or dryness on Indian skin. Check our Sandwich Technique protocol, product reviews & derm routine.')
p3_html = p3_html.replace('https://mymirror.fit/acne/benzoyl-peroxide-vs-clindamycin-acne-india/', f'https://mymirror.fit/{p3_slug}/')
p3_html = p3_html.replace('https://mymirror.fit/assets/images/benzoyl_peroxide_vs_clindamycin_india.jpg', 'https://mymirror.fit/assets/images/tretinoin_sandwich_method_india.jpg')

p3_html = p3_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel for Inflammatory Acne in India', 'How to Use Tretinoin Without Peeling or Irritation')
p3_html = p3_html.replace('Benzoyl Peroxide 2.5% vs Clindamycin 1% Gel', 'Tretinoin Retinization Protocol')
p3_html = p3_html.replace('Benzoyl Peroxide 2.5%', 'Tretinoin 0.025%')
p3_html = p3_html.replace('Clindamycin 1% Gel', 'Sandwich Moisturizer Buffer')
p3_html = p3_html.replace('Clindamycin 1%', 'Moisturizer Buffer')

with open(os.path.join(p3_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(p3_html)

with open(os.path.join(p3_dir, 'page-packet.md'), 'w', encoding='utf-8') as f:
    f.write(f"""# Page Packet: How to Use Tretinoin Without Peeling or Irritation India

- Canonical: https://mymirror.fit/{p3_slug}/
- Risk Rating: Level 1 🟢 Safe Retinization Protocol
- Primary Intent: Step-by-step Sandwich Technique & short-contact therapy guide for Tretinoin on Indian skin.
""")

print("✅ Non-comparison Page 3 built successfully.")

