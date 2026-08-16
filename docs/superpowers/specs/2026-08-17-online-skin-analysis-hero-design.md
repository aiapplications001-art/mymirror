# Online Skin Analysis Hero Refresh

## Goal

Improve the first fold of the online skin-analysis guide so a visitor immediately understands the product value, expected effort, privacy boundary, and next action.

## Approved design

The existing split hero remains, using MyMirror's warm neutral palette, serif headline, orange rounded CTA, and non-diagnostic tone. The copy becomes more direct: a benefit-led headline, a short explanation of the face scan, and a compact proof row for free access, approximately 60-second completion, and privacy. The primary CTA remains the existing `/scan` route.

The hero visual is replaced with a product-led banner: a fully clothed Indian woman holding a phone with a subtle, non-clinical skin-insights panel. It must leave visual room for the UI overlay, include no scores, medical claims, competitor marks, or in-image text, and support the same calm terracotta and cream visual language.

## Constraints

- Preserve one H1, canonical metadata, JSON-LD, the approved CTA route, and the guide's remaining sections.
- Keep the explicit statement that a scan is not a diagnosis.
- Retain accessible descriptive alt text and responsive desktop/mobile behavior.
- Use a new versioned hero asset rather than overwriting the current image.

## Verification

The static campaign test will assert that the hero contains the first-fold proof row and the new visual asset reference. The existing campaign validation and a production build will then run.
