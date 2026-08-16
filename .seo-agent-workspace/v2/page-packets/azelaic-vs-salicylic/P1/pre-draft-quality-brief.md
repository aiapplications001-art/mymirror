# Pre-Draft Quality Brief

Status: missing

Final copy is blocked until `seo-agent v2 validate-depth` passes.

Fill this before writing prose. This brief prevents thin routine-style pages by proving the page can become diagnostic, safety-led, India-specific, brand-relevant, and meaningfully better than competitors.

Required minimums:

- 6 sub-intents.
- 4 diagnostic depth items.
- 4 India-specific angles.
- 4 safety and trust requirements.
- 1 standout element competitors do not have.
- 1 natural brand connection.
- 8 real reader questions from SERP/social/video/forum research.
- 3 recommendation sanity checks for products, tools, services, or actives mentioned.
- 5 claim-risk items that require citations or careful wording.
- 4 troubleshooting items that answer what to do if the advice makes things worse.
- 4-7 intent dimensions, with superiority required on the top 4 dimensions.
- 1+ required superiority component custom-created from this page's research.
- 5 differentiated improvements across visible sections.
- 3 extractable answer blocks: quick answer, decision/action answer, and troubleshooting/safety answer when relevant.
- 1 brand CTA fit that states what the brand can support and what it must not claim.
- 3 AI Overview/extractable answer targets.
- 5 internal link targets.

SERP Superiority Gate:

- Use the primary keyword top 5, secondary keyword top 3, People Also Ask, AI Overview, Reddit/forum/video/social insights, long-tail variants, and trust/citation sources.
- Require superiority on the top 4 main intent dimensions. Lower-priority dimensions may be parity.
- If competitors are strong, parity fails. Add at least 1 major superiority component and 5 differentiated improvements.
- Every superiority component must be custom-created from research findings, mapped to a section, and represented in final copy as visible content such as a table, checklist, flow, image, calculator-style matrix, or interactive note.
- If no strong competitor component exists, prove the top competitors were reviewed and explain why the new component fills an empty gap.
- Require source diversity across primary SERP competitors, one secondary/long-tail source, one audience-language source, and one trust/citation source for skincare/medical/safety claims.
- AI Overview targets must become safer, more complete, humanized, keyword-aware answer blocks without copying Google's wording.

Quality prompts:

- What is the exact search intent?
- What are the 6-10 sub-intents the page must satisfy?
- What diagnostic table, decision matrix, checklist, calculator-style table, or comparison framework will make this page stand out?
- What Indian climate, market, skin tone, product availability, city, season, language, or behavior nuance matters?
- What medical/safety/trust warnings, reviewer proof, dates, citations, and when-to-see-an-expert guidance are needed?
- What user questions from SERP, Reddit/forums, YouTube, and social discussions must be answered?
- What products, actives, tools, or services might be recommended, and what inclusion reason, avoid-if condition, and source support will each need?
- Which phrases would be unsafe if unsupported, such as clinically proven, dermatologist-approved, safest, non-comedogenic, guaranteed, or AI diagnosis?
- What should readers do if the routine/product/step causes breakouts, tightness, irritation, burning, worsening redness, or no improvement?
- What are the top 4 intent dimensions where this page must beat the SERP?
- What on-page component will visibly make the page better than the top results?
- Which 5 section-level improvements are differentiated because of SERP, secondary-keyword, Reddit/forum/video, PAA, or AI Overview gaps?
- Which claims need visible citations, and which lower-risk claims should be softened instead?
- How does the brand naturally help the reader without sounding pasted in?
- What claims should the brand CTA avoid because they are not supported by product capability or reviewer proof?

Weak filler is invalid even when counts are met. Do not use generic entries such as "What is this?", "Recommend good products", "Cite claims", or "Help if it gets worse." Every item must be specific, evidence-aware, and decision-useful.

Each item in `readerQuestionCoverage`, `recommendationSanityPlan`, `claimRiskPlan`, and `troubleshootingPlan` must include `item`, `sourceRefs`, `mappedSectionId`, `whyThisMatters`, and `finalCopyUse`. Use source refs from extracted fact ids, audience signal ids, or analyzed source URLs already present in the depth artifacts.

Suggested JSON shape:

```json
{
  "schemaVersion": "pre-draft-quality-brief.v2",
  "status": "complete",
  "searchIntent": "Reader job in one sentence.",
  "subIntents": ["cause", "identify", "routine", "ingredient choice", "safety", "timeline"],
  "diagnosticPlan": ["table or decision aid"],
  "indiaSpecificity": ["humidity", "pollution", "PIH", "SPF availability"],
  "safetyTrustPlan": ["reviewer credentials", "stop rules", "when to see an expert", "citations"],
  "standoutElement": {
    "type": "diagnostic_matrix",
    "title": "Standout element title",
    "whyCompetitorsMissIt": "Specific competitor gap"
  },
  "brandConnection": "How the brand helps this uncertainty.",
  "intentDimensions": [
    {
      "id": "D1",
      "label": "diagnosis",
      "priority": 1,
      "sourceRefs": ["https://competitor.example/top-1", "F1", "A1"],
      "plannedWin": "How this page will beat the SERP on this intent dimension.",
      "competitorBenchmark": "What top competitors currently do."
    }
  ],
  "superiorityComponents": [
    {
      "id": "custom-component-1",
      "componentType": "decision_matrix",
      "title": "Component title",
      "researchBasis": "Specific research finding that proves this is needed.",
      "sourceRefs": ["https://competitor.example/top-1", "F2", "A2"],
      "mappedSectionId": "S4_decision",
      "intentDimensionSupported": "D1",
      "competitorGapAddressed": "What competitors miss.",
      "whyThisIsInformationGain": "Why readers learn or decide something new.",
      "competitorComponentComparison": {
        "comparisonPath": "beat_existing_component",
        "competitorsReviewed": ["https://competitor.example/top-1"],
        "whyOursIsBetterOrNeeded": "Why this visible component is equivalent or better."
      },
      "finalCopyBlock": "Markdown table, checklist, flow, image brief, or interactive note that will appear in final copy.",
      "imageOrInteractiveNeed": "Optional image or interactive component need.",
      "fallbackContent": "Static content version if image/interactive cannot be built.",
      "primaryReaderJob": "Reader job served first.",
      "brandFit": "Light brand-fit explanation.",
      "naturalCtaConnection": "soft",
      "unsupportedBrandClaimsToAvoid": ["Unsupported brand claim"]
    }
  ],
  "researchDerivedStructurePlan": {
    "primaryUserConcern": "The main thing the reader came to learn or avoid.",
    "primaryConcernVisibleBySectionId": "S2_quick_verdict",
    "primaryConcernVisibleBySectionIndex": 2,
    "importantInformationNotBuried": true,
    "scanPriorityRationale": "Why the main intent must be visible near the top.",
    "sectionOrderRationale": "Why this page order follows the research instead of a reusable template.",
    "sections": [
      {
        "sectionId": "S2_quick_verdict",
        "sectionRole": "quick answer",
        "sectionAction": "add",
        "targetSectionTitle": "Research-derived section title",
        "whyThisSectionExists": "Specific SERP, audience, or trust finding that requires this section.",
        "sourceRefs": ["https://competitor.example/top-1", "F1", "A1"],
        "intentDimensionRefs": ["D1"],
        "competitorOrUserGap": "Specific gap this section closes.",
        "expectedVisibleOutput": "What the reader will visibly see in final copy.",
        "competitorGapRefs": ["https://competitor.example/top-1"],
        "audienceLanguageRefs": ["A1"],
        "trustCitationRefs": ["F1"],
        "finalCopyUse": "How final copy must use this section.",
        "finalCopyAcceptanceCheck": "Visible check that proves this made it into final copy.",
        "scanPriority": "top",
        "readerQuestionAnswered": "Concrete reader question answered here.",
        "differentiatesFromPageIds": ["current-batch-or-historical-page-id"]
      }
    ],
    "highImpactComponents": [
      {
        "componentType": "decision_matrix",
        "mappedSectionId": "S4_decision",
        "readerJob": "Reader decision this component serves.",
        "whyThisComponentExists": "Specific research finding that requires this shape.",
        "sourceRefs": ["https://competitor.example/top-2", "F2", "A2"],
        "intentDimensionRefs": ["D2"],
        "competitorOrAudienceGapAddressed": "Gap this component beats or fills.",
        "competitorGapRefs": ["https://competitor.example/top-2"],
        "audienceLanguageRefs": ["A2"],
        "trustCitationRefs": ["F2"],
        "visibleReaderBenefit": "Why this improves scanning and action.",
        "notGenericReason": "Why this is not a reused table/template.",
        "columnsOrSteps": ["specific", "research-derived", "columns", "or steps"],
        "whyThisShape": "Why table, matrix, checklist, flow, image, or interactive is the right shape.",
        "expectedVisibleOutput": "Exact visible output to appear in final copy.",
        "finalCopyAcceptanceCheck": "How final copy proves the component was delivered."
      }
    ],
    "structureDecisions": [
      {
        "sectionId": "S4_decision",
        "sectionAction": "add",
        "targetSectionTitle": "Research-derived decision section",
        "sourceRefs": ["https://competitor.example/top-2", "F2", "A2"],
        "competitorOrUserGap": "Specific reason this structure is needed.",
        "whyThisStructureIsNeeded": "Why the page must change shape after research.",
        "expectedVisibleOutput": "Visible section, table, checklist, image, or interactive output.",
        "finalCopyAcceptanceCheck": "What must be present in final copy."
      }
    ],
    "structureComparison": {
      "comparedCurrentBatchPageIds": ["page-id-1"],
      "comparedHistoricalPageIds": ["older-page-id"],
      "reusedStructureRisk": "low",
      "materialDifferences": ["Specific structural difference from other generated pages."]
    }
  },
  "differentiatedImprovements": [
    {
      "improvement": "Visible section-level improvement.",
      "sourceRefs": ["https://competitor.example/top-2", "F3", "A3"],
      "intentDimension": "D2",
      "competitorOrUserGapAddressed": "Gap found in competitor, secondary keyword, Reddit/forum/video, PAA, or AI Overview research.",
      "mappedSectionId": "S5_comparison",
      "visibleOutputType": "table",
      "finalOutputLocation": "S5_comparison",
      "finalCopyEvidence": "How the final copy will visibly include it.",
      "whyDifferentiated": "Why this is not just comprehensive but distinct."
    }
  ],
  "readerQuestionCoverage": [
    {
      "item": "Real long-tail reader question?",
      "sourceRefs": ["F1", "A3"],
      "mappedSectionId": "S4_decision",
      "whyThisMatters": "Why this question changes the reader decision.",
      "finalCopyUse": "How final copy will answer this question."
    }
  ],
  "recommendationSanityPlan": [
    {
      "item": "Recommendation role, avoid-if condition, suitability, and evidence need.",
      "sourceRefs": ["F2"],
      "mappedSectionId": "S5_comparison",
      "whyThisMatters": "Why this prevents an unsafe or lazy recommendation.",
      "finalCopyUse": "How final copy will frame the recommendation."
    }
  ],
  "claimRiskPlan": [
    {
      "item": "Unsupported claim pattern to cite, rewrite, or avoid.",
      "sourceRefs": ["F3"],
      "mappedSectionId": "S6_trust",
      "whyThisMatters": "Why this claim could mislead without evidence.",
      "finalCopyUse": "How final copy will soften or cite the claim."
    }
  ],
  "troubleshootingPlan": [
    {
      "item": "If a specific symptom happens, stop/switch/repair/monitor/escalate.",
      "sourceRefs": ["A4"],
      "mappedSectionId": "S7_faq",
      "whyThisMatters": "Why this protects readers when advice does not work.",
      "finalCopyUse": "How final copy will give the stop or escalation rule."
    }
  ],
  "brandCtaFit": {
    "readerProblem": "Uncertainty the CTA helps with.",
    "supportedCtaPromise": "Specific supported brand action.",
    "unsupportedClaimsToAvoid": ["diagnosis claim", "unsupported measurement claim"]
  },
  "extractableAnswerBlocks": [
    {
      "blockType": "quick_answer",
      "answer": "Short answer that is safer and more useful than AI Overview or SERP summaries.",
      "sourceRefs": ["F4", "A4"],
      "mappedSectionId": "S2_quick_verdict",
      "keywordUse": ["primary keyword", "long-tail variant"],
      "aiOverviewDelta": "What this answer adds without copying AI Overview."
    }
  ],
  "aiOverviewTargets": ["direct answer block", "comparison table", "FAQ cluster"],
  "internalLinkPlan": ["supporting guide 1", "supporting guide 2"]
}
```
