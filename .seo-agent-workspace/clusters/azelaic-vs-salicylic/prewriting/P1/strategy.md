# Pre-Writing Strategy: azelaic-vs-salicylic Category Page

Company: MyMirror
Market: India
Cluster: azelaic-vs-salicylic
Selected page: P1

## Audience And Tone

- Audience cohort: IndianAcneCareSeekers
- Tone selected: authoritative_warm
- Tone options: professional compact, clear advisory, conversion-supportive
- User tone selection required: no

## Keywords And Depth

- Primary keyword: Not provided
- Secondary keywords: None provided
- Cluster seed keywords: azelaic acid vs salicylic acid for acne india, 15% azelaic acid gel india, salicylic acid serum acne marks
- Content depth target: 1800-2400 words
- Strict range: no

## CTA Strategy

- Primary CTA goal: Route users to the category's primary product or action destination.
- Recommended destination: Not found
- First-fold CTA required: yes
- Mobile sticky CTA recommended: yes

## Section Plan

Intent pattern: comparison
Structure variant: comparison_matrix
Inference confidence: medium
Inference signals: comparison language
Inference notes: Comparison intent needs methodology, criteria, and tradeoff structure.

| Section ID | Role | Section Intent | Evidence Budget (facts/cited claims/examples) | Required Devices | Notes |
| --- | --- | --- | --- | --- | --- |
| S1_hero | conversion | first-fold promise | 2/0/1 | H1, primary CTA, CTA microcopy | State the comparison promise and primary CTA without declaring a winner before evidence. Primary actionable must be visible in the first fold on desktop and mobile. |
| S2_quick_verdict | seo | quick comparison verdict | 3/1/2 | best-for/avoid-if callout | Use a qualified verdict, not a universal winner. |
| S3_comparison_methodology | trust | comparison methodology | 3/2/1 | methodology note, scoring rubric | Include a concise comparison methodology and qualitative labels unless numeric scoring is explicitly requested. |
| S4_decision_criteria | ux | decision criteria | 4/2/1 | criteria checklist | Make each criterion actionable and tied to the search intent. |
| S5_side_by_side_matrix | seo | side-by-side evaluation | 5/3/2 | side-by-side comparison matrix | Matrix cells must be specific; avoid generic good/better/best language. |
| S6_reader_fit_tradeoffs | ux | reader-fit tradeoffs | 4/2/2 | best-for/avoid-if blocks, reader scenarios | Spell out tradeoffs by reader need, not just feature lists. |
| S7_trust_proof | trust | trust and methodology proof | 3/1/1 | author/reviewer block, methodology note, proof points | Include authored-by visibility and page creation or update date. |
| S8_faq | seo | FAQ support | 4/2/0 | FAQ entries, FAQ schema draft | Include FAQ schema draft when this section is present. |
| S9_final_cta | conversion | final conversion path | 2/0/1 | final CTA, short closing copy | Use one primary CTA variant in V1. |
| S10_references | reference | source record | 0/0/0 | reference list | Only URL/source metadata belongs here. |

## Reference Requirements

- Live SERP review required: yes
- Quote/reference URLs required: yes
- External links open in new tab: yes
- Notes: Review top live search results before finalizing page structure. Use cited source URLs for claims and reference notes. Do not copy competitor wording.

## Image Requirements

- Default generated image count: 3-5
- OG image required: yes
- Brand guideline required: yes
- Notes: Generate top 3-5 high-impact in-page images when possible. Include a separate OG image asset. Use image briefs only when generation is unavailable or time-bounded by the user.

## Approval Queues

| Risk | Item | Reason |
| --- | --- | --- |
| critical | Competitor or external brand mentions | Comparison pages may mention competitors or external products and require explicit approval before inclusion. |
| medium | Tone and content depth | The user should choose tone per page and content depth is treated as a target range. |
| medium | Brand-led generated images | Images should follow brand guidelines and include logo/brand signals only when appropriate. |
| low | Selected section order | Standard V1 section order is proposed before full copy is drafted. |

## Source-Backed Inference Notes

- Selected page P1 came from cluster opportunity startup_conversion. Evidence strength: low. Source: cluster_strategy.
- Audience cohort supplied: IndianAcneCareSeekers. Evidence strength: high. Source: user_input.
- Cluster quality score at strategy time was 74/100. Evidence strength: medium. Source: cluster_strategy.

## Machine-Readable JSON

```json
{
  "companyName": "MyMirror",
  "market": "India",
  "category": {
    "name": "azelaic-vs-salicylic",
    "slug": "azelaic-vs-salicylic"
  },
  "selectedPage": {
    "id": "P1",
    "title": "azelaic-vs-salicylic Category Page",
    "pageType": "product_category",
    "strategyCategory": "startup_conversion",
    "targetIntent": "Help users understand the category and route them toward the best product or diagnostic action.",
    "primaryCtaGoal": "Route users to the category's primary product or action destination.",
    "suggestedUrlSlug": "azelaic-vs-salicylic",
    "evidenceStrength": "low"
  },
  "audience": {
    "cohort": "IndianAcneCareSeekers",
    "market": "India"
  },
  "tone": {
    "selected": "authoritative_warm",
    "requiresUserSelection": false,
    "options": [
      "professional compact",
      "clear advisory",
      "conversion-supportive"
    ]
  },
  "keywords": {
    "secondary": [],
    "clusterSeeds": [
      "azelaic acid vs salicylic acid for acne india",
      "15% azelaic acid gel india",
      "salicylic acid serum acne marks"
    ]
  },
  "contentDepth": {
    "targetRange": "1800-2400 words",
    "strict": false
  },
  "cta": {
    "primaryGoal": "Route users to the category's primary product or action destination.",
    "firstFoldRequired": true,
    "mobileSticky": {
      "recommended": true,
      "shortenedLabelRequired": true
    }
  },
  "pageStructure": {
    "intentPattern": "comparison",
    "structureVariant": "comparison_matrix",
    "inference": {
      "confidence": "medium",
      "signals": [
        "comparison language"
      ],
      "notes": "Comparison intent needs methodology, criteria, and tradeoff structure."
    },
    "researchBasis": [
      "selected page title, slug, target intent, page type, and strategy category",
      "live SERP, PAA, social/video, competitor-gap, and audience-language research must refine this before final copy"
    ],
    "structureUniquenessRationale": "comparison_matrix is the starting structure because the selected opportunity signals comparison intent. The adapter must revise the section sequence, decision tools, FAQs, troubleshooting blocks, tables, superiority components, and CTA placement when current-page research shows different sub-intents or gaps, and must not reuse a structure from another page, batch, or historical run.",
    "mustDifferFromPages": [],
    "sections": [
      {
        "id": "S1_hero",
        "purpose": "First-fold answer, H1, primary CTA, and surrounding CTA microcopy.",
        "contentRole": "conversion",
        "sectionIntent": "first-fold promise",
        "evidenceNeeded": [
          "page promise",
          "primary CTA rationale",
          "reader intent"
        ],
        "requiredDevices": [
          "H1",
          "primary CTA",
          "CTA microcopy"
        ],
        "evidenceBudget": {
          "minimumFacts": 2,
          "minimumCitedClaims": 0,
          "minimumConcreteExamples": 1
        },
        "notes": "State the comparison promise and primary CTA without declaring a winner before evidence. Primary actionable must be visible in the first fold on desktop and mobile."
      },
      {
        "id": "S2_quick_verdict",
        "purpose": "Give a short, qualified verdict for the main comparison intent.",
        "contentRole": "seo",
        "sectionIntent": "quick comparison verdict",
        "evidenceNeeded": [
          "verdict condition",
          "reader scenario",
          "comparison caveat"
        ],
        "requiredDevices": [
          "best-for/avoid-if callout"
        ],
        "evidenceBudget": {
          "minimumFacts": 3,
          "minimumCitedClaims": 1,
          "minimumConcreteExamples": 2
        },
        "notes": "Use a qualified verdict, not a universal winner."
      },
      {
        "id": "S3_comparison_methodology",
        "purpose": "Explain how options are compared and what evidence is allowed.",
        "contentRole": "trust",
        "sectionIntent": "comparison methodology",
        "evidenceNeeded": [
          "methodology",
          "evaluation scope",
          "fairness caveat"
        ],
        "requiredDevices": [
          "methodology note",
          "scoring rubric"
        ],
        "evidenceBudget": {
          "minimumFacts": 3,
          "minimumCitedClaims": 2,
          "minimumConcreteExamples": 1
        },
        "notes": "Include a concise comparison methodology and qualitative labels unless numeric scoring is explicitly requested."
      },
      {
        "id": "S4_decision_criteria",
        "purpose": "Define the criteria readers should use before reading the matrix.",
        "contentRole": "ux",
        "sectionIntent": "decision criteria",
        "evidenceNeeded": [
          "criteria",
          "why it matters",
          "reader use case"
        ],
        "requiredDevices": [
          "criteria checklist"
        ],
        "evidenceBudget": {
          "minimumFacts": 4,
          "minimumCitedClaims": 2,
          "minimumConcreteExamples": 1
        },
        "notes": "Make each criterion actionable and tied to the search intent."
      },
      {
        "id": "S5_side_by_side_matrix",
        "purpose": "Compare options side by side against the stated criteria.",
        "contentRole": "seo",
        "sectionIntent": "side-by-side evaluation",
        "evidenceNeeded": [
          "option-specific facts",
          "tradeoff",
          "citation-backed claim"
        ],
        "requiredDevices": [
          "side-by-side comparison matrix"
        ],
        "evidenceBudget": {
          "minimumFacts": 5,
          "minimumCitedClaims": 3,
          "minimumConcreteExamples": 2
        },
        "notes": "Matrix cells must be specific; avoid generic good/better/best language."
      },
      {
        "id": "S6_reader_fit_tradeoffs",
        "purpose": "Explain who each option is and is not for.",
        "contentRole": "ux",
        "sectionIntent": "reader-fit tradeoffs",
        "evidenceNeeded": [
          "best-fit scenario",
          "avoid-if scenario",
          "switching consideration"
        ],
        "requiredDevices": [
          "best-for/avoid-if blocks",
          "reader scenarios"
        ],
        "evidenceBudget": {
          "minimumFacts": 4,
          "minimumCitedClaims": 2,
          "minimumConcreteExamples": 2
        },
        "notes": "Spell out tradeoffs by reader need, not just feature lists."
      },
      {
        "id": "S7_trust_proof",
        "purpose": "Author, reviewer, methodology, experience, proof, and brand trust signals.",
        "contentRole": "trust",
        "sectionIntent": "trust and methodology proof",
        "evidenceNeeded": [
          "authorship signal",
          "review or methodology note",
          "brand proof"
        ],
        "requiredDevices": [
          "author/reviewer block",
          "methodology note",
          "proof points"
        ],
        "evidenceBudget": {
          "minimumFacts": 3,
          "minimumCitedClaims": 1,
          "minimumConcreteExamples": 1
        },
        "notes": "Include authored-by visibility and page creation or update date."
      },
      {
        "id": "S8_faq",
        "purpose": "Answer likely questions and support FAQ JSON-LD only when FAQ content exists.",
        "contentRole": "seo",
        "sectionIntent": "FAQ support",
        "evidenceNeeded": [
          "question",
          "direct answer",
          "source-backed caveat"
        ],
        "requiredDevices": [
          "FAQ entries",
          "FAQ schema draft"
        ],
        "evidenceBudget": {
          "minimumFacts": 4,
          "minimumCitedClaims": 2,
          "minimumConcreteExamples": 0
        },
        "notes": "Include FAQ schema draft when this section is present."
      },
      {
        "id": "S9_final_cta",
        "purpose": "Final primary CTA and conversion-oriented closing copy.",
        "contentRole": "conversion",
        "sectionIntent": "final conversion path",
        "evidenceNeeded": [
          "CTA rationale",
          "reader readiness cue",
          "destination fit"
        ],
        "requiredDevices": [
          "final CTA",
          "short closing copy"
        ],
        "evidenceBudget": {
          "minimumFacts": 2,
          "minimumCitedClaims": 0,
          "minimumConcreteExamples": 1
        },
        "notes": "Use one primary CTA variant in V1."
      },
      {
        "id": "S10_references",
        "purpose": "Reference URLs and source metadata used for page claims.",
        "contentRole": "reference",
        "sectionIntent": "source record",
        "evidenceNeeded": [
          "reference URL",
          "source label",
          "access date or retrieval note"
        ],
        "requiredDevices": [
          "reference list"
        ],
        "evidenceBudget": {
          "minimumFacts": 0,
          "minimumCitedClaims": 0,
          "minimumConcreteExamples": 0
        },
        "notes": "Only URL/source metadata belongs here."
      }
    ],
    "h1Rule": "exactly_one"
  },
  "referenceRequirements": {
    "liveSerpReviewRequired": true,
    "quoteReferenceUrlsRequired": true,
    "externalLinksOpenInNewTab": true,
    "notes": [
      "Review top live search results before finalizing page structure.",
      "Use cited source URLs for claims and reference notes.",
      "Do not copy competitor wording."
    ]
  },
  "imageRequirements": {
    "defaultGeneratedImageCount": "3-5",
    "ogImageRequired": true,
    "brandGuidelineRequired": true,
    "notes": [
      "Generate top 3-5 high-impact in-page images when possible.",
      "Include a separate OG image asset.",
      "Use image briefs only when generation is unavailable or time-bounded by the user."
    ]
  },
  "approvalQueues": {
    "structure": [
      {
        "item": "Selected section order",
        "reason": "Standard V1 section order is proposed before full copy is drafted.",
        "risk": "low"
      }
    ],
    "content": [
      {
        "item": "Tone and content depth",
        "reason": "The user should choose tone per page and content depth is treated as a target range.",
        "risk": "medium"
      }
    ],
    "images": [
      {
        "item": "Brand-led generated images",
        "reason": "Images should follow brand guidelines and include logo/brand signals only when appropriate.",
        "risk": "medium"
      }
    ],
    "critical": [
      {
        "item": "Competitor or external brand mentions",
        "reason": "Comparison pages may mention competitors or external products and require explicit approval before inclusion.",
        "risk": "critical"
      }
    ]
  },
  "evidenceNotes": [
    {
      "pointer": "Selected page P1 came from cluster opportunity startup_conversion.",
      "evidenceStrength": "low",
      "source": "cluster_strategy"
    },
    {
      "pointer": "Audience cohort supplied: IndianAcneCareSeekers.",
      "evidenceStrength": "high",
      "source": "user_input"
    },
    {
      "pointer": "Cluster quality score at strategy time was 74/100.",
      "evidenceStrength": "medium",
      "source": "cluster_strategy"
    }
  ],
  "machineMetadata": {
    "schemaVersion": "prewriting-strategy.v1",
    "generatedFrom": "cluster-strategy.v1",
    "selectedPageId": "P1"
  }
}
```
