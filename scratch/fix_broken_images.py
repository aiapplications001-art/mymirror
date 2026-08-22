import os, shutil

image_mapping = {
    "clindamycin_nicotinamide_gel.jpg": "clindamycin-gel-for-acne-india-og.jpg",
    "spot_treatment_india.jpg": "sa-spot-treatment-hero.jpg",
    "azelaic_acid_gel_india.jpg": "azelaic-acid-india-og.jpg",
    "glycolic_acid_toner_india.jpg": "glycolic-toner-india-og.jpg",
    "bacne_treatment_india.jpg": "salicylic-acid-body-wash-usa-og.jpg",
    "panoxyl_wash_usa.jpg": "bpo-spot-hero-v4.jpg",
    "mighty_patch_cosrx.jpg": "pimple-patch-usa-og.jpg",
    "cerave_bpo_cleanser_usa.jpg": "cerave-hydrating-cleanser-usa-og.jpg",
    "obagi_clenziderm.jpg": "pharmacy_tubes.jpg",
    "proactiv_differin.jpg": "differin-gel-usa-og.jpg"
}

assets_dir = "assets/images"

for target_name, source_name in image_mapping.items():
    source_path = os.path.join(assets_dir, source_name)
    target_path = os.path.join(assets_dir, target_name)
    
    if os.path.exists(source_path):
        shutil.copyfile(source_path, target_path)
        print(f"✅ Copied {source_name} -> {target_name} ({os.path.getsize(target_path)} bytes)")
    else:
        print(f"❌ Source missing: {source_name}")

