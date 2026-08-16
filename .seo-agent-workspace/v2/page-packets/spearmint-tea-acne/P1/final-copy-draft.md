# Final Copy Draft

Status: missing

The deterministic CLI does not write final prose for V2.1 pages. An adapter must write the final copy here after `validate-human`, `validate-gates`, and `validate-depth` pass.

Every visible section needs adapter-written markdown. Informational sections also need evidence refs and citation claim ids.

Blocked phrases:

- This section should
- The page should explain
- Use this section
- Replace this
- Reference URLs still need
- Editable scaffold

Required JSON shape:

```json
{
  "schemaVersion": "final-copy-draft.v2",
  "adapter": "antigravity",
  "generatedAt": "2026-07-02T10:00:00.000Z",
  "sections": [
    {
      "sectionId": "S2_quick_verdict",
      "markdown": "Adapter-written final prose.",
      "evidenceRefs": ["F1"],
      "citationClaimIds": ["C1"],
      "audienceSignalIds": ["A1"],
      "standoutElementRefs": ["decision-tree-1"]
    }
  ],
  "references": [
    {
      "sourceUrl": "https://example.com/source",
      "label": "Source label",
      "claimIds": ["C1"]
    }
  ],
  "standoutElements": [
    {
      "id": "decision-tree-1",
      "type": "decision_tree",
      "title": "Decision tree title"
    }
  ],
  "superiorityProof": {
    "intentWinsDelivered": [
      {
        "intentDimensionId": "D1",
        "sectionId": "S4_decision",
        "evidenceRefs": ["F1", "A1"],
        "finalCopyEvidence": "Quote or summarize the visible final-copy block that delivers the win."
      }
    ],
    "superiorityComponentsDelivered": [
      {
        "componentId": "custom-component-1",
        "sectionId": "S4_decision",
        "visibleOutputType": "decision_matrix",
        "finalCopyEvidence": "The matrix appears in the final copy with reader actions."
      }
    ],
    "differentiatedImprovementsDelivered": [
      {
        "improvementId": "improvement-1",
        "sectionId": "S5_comparison",
        "visibleOutputType": "table",
        "finalCopyEvidence": "The section includes the promised differentiating detail."
      }
    ],
    "extractableAnswerBlocksDelivered": [
      {
        "blockType": "quick_answer",
        "sectionId": "S2_quick_verdict",
        "finalCopyEvidence": "The quick answer is visible near the top."
      }
    ],
    "visibleCitationHandling": [
      {
        "claim": "Important skincare or brand-capability claim.",
        "claimImportance": "important",
        "sourceRefs": ["F8"],
        "finalCopyEvidence": "The final copy cites or softens the claim visibly."
      }
    ],
    "whyThisDeservesToRank": "One human-readable summary explaining the top-4 intent wins and required superiority component."
  },
  "structurePlanDeliveryProof": {
    "primaryConcernDelivered": {
      "sectionId": "S2_quick_verdict",
      "finalCopyEvidence": "Visible snippet proving the main research-derived concern is answered near the top."
    },
    "highImpactComponentsDelivered": [
      {
        "componentType": "decision_matrix",
        "mappedSectionId": "S4_decision",
        "finalCopyEvidence": "Visible snippet from the promised component."
      }
    ],
    "expectedVisibleOutputsDelivered": [
      {
        "mappedSectionId": "S4_decision",
        "finalCopyEvidence": "Visible snippet proving the promised section output is present."
      }
    ],
    "structureDecisionsDelivered": [
      {
        "sectionId": "S4_decision",
        "finalCopyEvidence": "Visible snippet proving the promised structure decision is present."
      }
    ]
  },
  "qaNotes": []
}
```

Post-draft rule: final copy must visibly deliver the promised top-4 intent wins, required superiority component, 5 differentiated improvements, 3 extractable answer blocks, visible citation/source handling for important medical, skincare, safety, or brand-capability claims, and the research-derived structure plan. Strategy notes alone do not count.
