# 'Onramp to DR Selection' Initiative Brief

---

## Outcome Summary

Veterans can independently and confidently identify the most appropriate decision review pathway or next step for their claim when they disagree with VA’s decision.** The initiative aims to reduce burdens on Veterans and their representatives, as well as on call centers**: reduced confusion-driven pathway switching, reduced form abandonment, and improved first-attempt success rates.

## Problem

Today, Veterans (as well as other claimants and appellants) sometimes struggle to choose the right decision review option for their unique needs, which can result in delays and unfavorable decisions. Veterans aren't consistently able to identify the differences between options, their eligibility, and if it will give them the chance at a favorable outcome.

### Initial data gathering shows:

* Veterans are starting multiple types of decision reviews within short time windows
* Form abandonment occurs at key decision-making points
* Qualitative feedback indicates Veterans are confused about where to explain their case (e.g., leaving claim narratives in CSAT surveys)
* Veterans report difficulty understanding the differences between Supplemental Claims, Higher-Level Reviews, and Board Appeals

## Target Audience

The onramp initiative will focus on Veterans (or their accredited representatives) who seek to file a decision review option for disability compensation on VA.gov.

## Desired User Outcomes

* As a Veteran, I will understand the precise purpose of each decision review option
* As a Veteran, I feel VA has supplied enough engaging and understandable content to self-educate about the decision review options
* As a Veteran, I have confidence in my eligibility for the decision review I choose
* As a Veteran, I will have an idea of roughly how long each decision review option takes
* A a Veteran, I will have a clear understanding of the immediate next steps I need to take.

## Undesired User Outcomes

* As a Veteran, I do not want to waste time trying to figure out how to select a decision review option
* As a Veteran, I do not want to choose an option that is wrong for me or more likely to lead to an adverse ruling
* As a Veteran, I do not want to feel overwhelmed by the complexity of selecting a decision review option

## Desired Business Outcomes

* Reduction in Veterans that submit claims and appeals for which they do not qualify
* Reduction in the number of disability claims that are submitted when a supplemental claim would have been more appropriate
* Reduction in duplicate submissions
* Increase of Veterans that state they're satisfied with their online decision review experience
* Reduction in support to call centers

## Undesired Business Outcomes

* Increase of incorrect and duplicate claims
* Negative impact to CSAT
* Increased burden on call centers

# Measuring Success

The team has established 90-day benchmark metrics:

| Metric | Definition | Measurement | Notes |
| ---| --- | --- | --- |
| Pathway Switching Rate (PSR) | Percentage of users who initiate multiple decision review types within defined time windows | GA4 segments tracking users with multiple pathway combinations | Time windows: 7-day, 30-day, 90-day, 180-day analysis. Core metric is 90-day. |
| Form Abandonment Rate by Pathway (FAR) | Percentage of users who start but don't complete pathway-specific forms | GA4 segment analysis, funnels (pathways) for diagnostics if issues arise. | Focus on abandonment at decision points vs. general form completion
| First-Attempt Success Rate (FASR) | Percentage of users who complete their chosen pathway without switching | End-to-end journey tracking from selection to submission | Key indicator of decision confidence |

## Benchmarks

### PSR (Pathway Switching Rate)
* 7.7% (started more than type of DR)
* 4.8% (submitted more than one type of DR)

### FAR (Form Abandonment Rate)
Individual Pathway FAR:

* 0995 (Supplemental Claim): 54.3% abandonment (27,348 starts → 12,491 completions)
* 0996 (Higher-Level Review): 37.1% abandonment (36,918 starts → 23,231 completions)
* 10182 (Board Appeal): 40.9% abandonment (11,060 starts → 6,540 completions)

Aggregate FAR:

* Overall: 43.9% abandonment (75,326 starts → 42,262 completions)

### FASR (First-Attempt Success Rate)
Individual Pathway FASR:

* 0995 (Supplemental Claim): 89% first-attempt success rate (31k submission → 27.5k without switching)
* 0996 (Higher-Level Review): 82% first-attempt success rate (21k submission → 17.3k without switching)
* 10182 (Board Appeal): 98% first-attempt success rate (56k submission → 55k without switching)

Aggregate FASR:

* Overall: 92% first-attempt success rate (108k submission → 99.8k without switching)


### Indicative Success Ranges

Note: These ranges represent nothing more definitive than potential meaningful improvements based on initial analysis. Actual targets will be set after baseline establishment and stakeholder alignment.
Near-term indicators of success might include:

* Reductions of 10-20% in confusion-driven pathway switching
* Improvements of 15-25% in form completion at decision points
* Decreases of 20-35% in same-day duplicate submissions

## What We're Building

**A centralized tool to support the selection of an appropriate Decision Reviews pathway on VA.gov**, featuring:

* **Interactive questionnaire** using plain language to guide appellants through decision points, available to unauthenticated users and terminating in personalized pathway recommendations based on information the appellant inputs about their specific situation and goals
* **Contextual help** and explanations for complex terms and requirements as well as the legislation that inform the pathways.
* **Direct link** to the appropriate online form once a pathway is selected

_**Open questions:**_
Should the user experience incorporate either of the following visual/affordance aids to reduce cognitive load?
* **Progress indicators** showing where Veterans are in the decision process
* **Clear visual comparisons** of the three options showing: 
    * Evidence requirements
    * Average processing times
    * What happens after each decision
    * Who reviews the claim

### Key Design Principles

* Mobile-first, accessible design
* Plain language throughout
* Clear exit points to human assistance (accredited representative, contact center)

## Risks & Mitigation Strategies

### Technical Risks (premature before design)

* **Integration dependencies:** Close coordination with Sitewide team, given the unauthenticated experience

### User Experience Risks

* **Added complexity:** Usability testing to ensure tool simplifies rather than complicates
* **Over-confidence in recommendations:** Clear messaging about seeking assistance when needed
* **Accessibility barriers:** Early and continuous accessibility testing

### Dependencies

* Coordination with CAIA team for content updates
* Stakeholder alignment on success metrics
