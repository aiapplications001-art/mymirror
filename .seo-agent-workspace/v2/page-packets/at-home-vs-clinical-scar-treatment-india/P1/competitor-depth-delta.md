# Competitor Depth Delta

Status: missing

Final copy is blocked until `seo-agent v2 validate-depth` passes.

Analyze the top competing pages section by section. Record what they cover, miss, overdo, explain vaguely, or fail to connect to a decision.

Minimums:

- Primary keyword top 5 SERP pages analyzed with full strength scoring.
- At least 1 secondary keyword or long-tail SERP analyzed with top 3 pages.
- 5 competing pages analyzed.
- 10 specific ways this page will be more useful, concrete, or decision-helpful than the competitors.

Primary SERP scoring dimensions for each top 5 page:

- intentMatch
- topIntentCoverage
- depthAndSpecificity
- originalityInformationGain
- evidenceAndTrust
- audienceSpecificity
- decisionUsefulness
- informationArchitecture
- riskHandling
- practicalCompleteness
- uxPageExperience

Define a competitor as strong when it has at least 4/5 on intentMatch and topIntentCoverage, at least 3/5 on decisionUsefulness, depthAndSpecificity, and practicalCompleteness, at least 3/5 on uxPageExperience, and at least 3 evidence notes. Strong competitors make parity insufficient: the new page must add at least one major information-gain component and at least 5 differentiated section improvements.

Suggested JSON fields:

- `primaryKeyword`
- `primarySerpTop5[].url`, `rankingPosition`, `strengthLabel`, `scores`, `evidenceNotes`, `standoutAssets`, `whyUsersMightStopSearching`
- `secondaryKeywordSerps[].keyword` and `topPages[]` with `url`, `rankingPosition`, `intentContribution`, and `usefulGap`
