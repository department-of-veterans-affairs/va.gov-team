# Onramp Questionnaire - Complete Reference

**Date Created:** 2025-10-21
**Source:** vets-website repository, `src/applications/appeals/onramp/`
**Purpose:** Complete documentation of all questions, answers, and help text in the Decision Reviews Onramp tool

---

## Overview

The Onramp tool is an **unauthenticated questionnaire** that guides Veterans through choosing the right Decision Review pathway. It uses branching logic to show different questions based on previous answers.

**Staging URL:** https://staging.va.gov/decision-reviews/explore-disability-claim-decision-review-options/

**Results:** Two types of result pages
- **Decision Review options** - Shows SC, HLR, or Board Appeal recommendations
- **Other available options** - For situations outside DR scope (not yet decided, too old, etc.)

---

## Complete Question List (in logical order)

### Introduction Page

**Title:** Explore disability claim decision review options

**URL:** `/decision-reviews/explore-disability-claim-decision-review-options/introduction`

---

### Section 1: Eligibility & Timeline Questions

#### Q1: Decision Status

**URL:** `/decision-status`

**Heading:** Decision status

**Question:** Have we sent you a decision on your claim yet?

**Help Text:**
> This could be about a decision on 1 or more issues from your disability claim, such as:
> - An initial claim
> - A claim for increase
> - A Supplemental Claim
> - A Higher-Level Review
> - A Board Appeal decision

**Answer Options:**
-  Yes: "I've received a decision for the issue I want to review."
-  No: "I haven't received a decision for the issue yet."

**If NO = Goes to Q1A**

---

#### Q1A: Disability Claim Filed

**URL:** `/disability-claim-filed`

**Heading:** Disability claim filed

**Question:** Have you filed a disability claim for this condition?

**Help Text:**
> This means you submitted VA Form 21-526EZ to apply for disability compensation.

**Answer Options:**
-  Yes: "I filed a claim for this condition."
-  No: "I haven't filed a claim for this condition yet."

**Leads to:** Results (non-DR) - needs to file claim first

---

#### Q2: Claim Decision Timeline

**URL:** `/claim-decision-timeline`

**Heading:** Claim decision timeline

**Question:** Was your claim decided less than a year ago?

**Answer Options:**
-  Yes: "My claim was decided less than a year ago."
-  No: "My claim was decided over a year ago."

**If NO = Branches to over-1-year path**

---

#### Q3 (for over 1 year): Service-Connected Condition (variant A)

**URL:** `/service-connected-condition-a`

**Heading:** Service-connected condition

**Question:** Did we decide that your condition is service connected?

**Help Text:**
> A service-connected condition is a disability or illness that was caused—or made worse—by your military service. This could mean:
> - You got the condition during active duty, **or**
> - A condition you already had got worse because of your service, **or**
> - You developed the condition after service because of something that happened during your service (like toxic exposure or presumptive conditions, such as those covered under the PACT Act)
>
> [Learn more about service-connected conditions](link)

**Answer Options:**
-  Yes: "VA said my condition is service connected."
-  No: "VA said my condition isn't service connected."

---

#### Q4 (if service-connected): Condition Worsened (variant A)

**URL:** `/condition-worsened-a`

**Heading:** Condition worsened

**Question:** Has your service-connected condition gotten worse since you filed this claim?

**Answer Options:**
-  Yes: "My service-connected condition has gotten worse."
-  No: "My service-connected condition hasn't gotten worse."

---

#### Q5 (if condition worsened): Disagreement with Decision (variant A)

**URL:** `/disagreement-with-decision-a`

**Heading:** Disagreement with decision

**Question:** Do you disagree with any part of our decision?

**Help Text:**
> You can request a review when your condition gets worse. You can also disagree with other parts of our decision. You might disagree with:
> - The effective date (when your benefits should have started)
> - Your disability rating (how we rated the severity of your condition)
> - Whether your condition is service-connected
>
> If we review your disagreement and change our decision, you may get retroactive compensation (back pay).

**Answer Options:**
-  Yes: "I disagree with part of the decision."
-  No: "I only want to report that my condition has gotten worse."

---

#### Q6 (if over 1 year): Change in Law or Policy (variant A)

**URL:** `/change-in-law-or-policy-a`

**Heading:** Change in law or policy

**Question:** Are you requesting a review because of a change in law or policy?

**Help Text:**
> This could include new laws, court decisions, or VA policy updates that affect how claims are decided. Examples of a change in law or policy might include:
> - A court ruling that changes how a condition is evaluated, **or**
> - A new law that adds eligibility for certain conditions, **or**
> - Updates to how we review specific types of claims (like toxic exposure or presumptive conditions, such as those covered under the PACT Act)
>
> [Learn how the PACT Act may affect your VA benefits and care](link)

**Answer Options:**
-  Yes: "I want a review because of a change in law or policy."
-  No: "I want a review for a different reason."

---

#### Q7 (if over 1 year): New and Relevant Evidence (variant A)

**URL:** `/new-and-relevant-evidence-a`

**Heading:** New and relevant evidence

**Question:** Do you have new and relevant evidence?

**Help Text:**
> Supporting evidence could be documents, medical records, or other information. The evidence should be:
> - Information we haven't considered before, **and**
> - Help prove or disprove an issue in your claim
>
> You can submit this evidence yourself or identify records you'd like us to obtain for you.

**Answer Options:**
-  Yes: "I have new and relevant evidence to submit."
-  No: "I don't have any new and relevant evidence."

---

#### Q8: Contested Claim

**URL:** `/contested-claim`

**Heading:** Contested claim

**Question:** Is your claim contested?

**Help Text:**
> This means there's a dispute about your claim—like disagreements about attorney fees, or someone else (like a former spouse or dependent) claiming the same benefit.
>
> Contested claims are rare. We would have sent you a letter to let you know.
>
> [Learn more about contested claims](link)

**Answer Options:**
-  Yes: "My claim is contested."
-  No: "My claim is not contested."

---

#### Q9 (if contested): Date on Decision

**URL:** `/date-on-decision`

**Heading:** Date on decision

**Question:** Has it been fewer than 60 days since the date on your decision?

**Answer Options:**
-  Yes: "It's been fewer than 60 days."
-  No: "It's been more than 60 days."

---

### Section 2: Pathway-Specific Questions

#### Q10: Claim Type

**URL:** `/claim-type`

**Heading:** Claim type

**Question:** What type of decision do you want us to review?

**Answer Options:**
- **Initial claim or claim for increase:** "I filed a disability claim for a new condition or to increase my disability rating for a condition that got worse."
- **Supplemental claim:** "I submitted new evidence after a previous decision or requested a review based on a change in law."
- **Higher-Level Review:** "A senior reviewer reviewed my previous claim decision."
- **Board Appeal decision:** "A Veterans Law Judge at the Board of Veterans' Appeals reviewed my case."

**This question branches into different paths based on the claim type**

---

#### Path: Initial Claim Branch

##### Q11 (IS): Service-Connected Condition (variant B)

**URL:** `/service-connected-condition-b`

**Question:** Did we decide that your condition is service connected?

(Same content as variant A)

---

##### Q12 (IS): Condition Worsened (variant B)

**URL:** `/condition-worsened-b`

**Question:** Has your service-connected condition gotten worse since you filed this claim?

(Same content as variant A)

---

##### Q13 (IS): Disagreement with Decision (variant B)

**URL:** `/disagreement-with-decision-b`

**Question:** Do you disagree with any part of our decision?

(Same content as variant A)

---

##### Q14 (IS): Change in Law or Policy (variant B)

**URL:** `/change-in-law-or-policy-b`

**Question:** Are you requesting a review because of a change in law or policy?

(Same content as variant A)

---

##### Q15 (IS): New and Relevant Evidence (variant B)

**URL:** `/new-and-relevant-evidence-b`

**Question:** Do you have new and relevant evidence?

(Same content as variant A)

---

#### Path: Supplemental Claim Branch

##### Q16 (SC): New and Relevant Evidence (variant C)

**URL:** `/new-and-relevant-evidence-c`

**Question:** Do you have new and relevant evidence?

(Same content as variant A)

---

##### Q17 (SC): Board Decision Timeline

**URL:** `/board-decision-timeline`

**Heading:** Board decision timeline

**Question:** Did you receive your decision within the last 120 days?

**Help Text:**
> To be eligible for some options, you must have received your decision within the last 120 days. This means your decision must be dated on or after [DYNAMIC DATE: 120 days ago].

**Answer Options:**
-  Yes: "I received my decision on or after [DYNAMIC DATE]."
-  No: "I received a Board decision before [DYNAMIC DATE]."

---

#### Path: Higher-Level Review Branch

##### Q18 (HLR): New and Relevant Evidence (variant D)

**URL:** `/new-and-relevant-evidence-d`

**Question:** Do you have new and relevant evidence?

(Same content as variant A)

---

##### Q19 (HLR): Hearing with a Veterans Law Judge (variant A)

**URL:** `/hearing-with-a-veterans-law-judge-a`

**Heading:** Hearing with a Veterans Law Judge

**Question:** Do you want to have a hearing with a Veterans Law Judge?

**Help Text:**
> This is a virtual or in-person hearing where you can speak directly with a Veterans Law Judge about your case. You can also submit new evidence during or after the hearing.
>
> A decision for a virtual or in-person hearing usually takes about 730 days (2 years) on average.
>
> If you prefer not to have a hearing, a Veterans Law Judge can review your claim and make a decision based only on the information in your file and any new evidence you submit now.
>
> This type of review, conducted without a virtual or in-person hearing, typically takes about 365 days (1 year) on average.
>
> If we grant your benefits, your payments will be backdated to the date your request was received.

**Answer Options:**
-  Yes: "I want a hearing with a Veterans Law Judge."
-  No: "A Veterans Law Judge can review my claim and make a decision without a hearing."

---

##### Q20 (HLR): Hearing with a Veterans Law Judge (variant B)

**URL:** `/hearing-with-a-veterans-law-judge-b`

**Question:** Do you want to have a hearing with a Veterans Law Judge?

(Same content as variant A)

---

## Results Pages

### Decision Review Options

**URL:** `/your-decision-review-options`

**Heading:** Your decision review options

Shows personalized recommendation(s) for:
- Supplemental Claim (Form 20-0995)
- Higher-Level Review (Form 20-0996)
- Board Appeal (Form 10182)

With direct links to the appropriate form(s).

---

### Other Available Options

**URL:** `/your-available-options`

**Heading:** Your available options

For situations where Decision Reviews aren't appropriate:
- Claim not yet decided = File initial claim
- Decision too old (over 1 year) = File new claim or get assistance
- Other ineligibility reasons

---

## Branching Logic Summary

The tool has **two main sections** with complex branching:

### Section 1: Eligibility Screening
1. Has decision been sent? (If NO = need to file claim first)
2. Decision less than 1 year old? (If NO = different path with CFI options)
3. For decisions over 1 year: SC condition? Worsened? Disagree? Law change? Evidence?
4. Contested claim? (If YES = 60-day timeline check)

### Section 2: Claim Type Paths
Based on the type of previous decision (Q10), Veterans go through:
- **Initial Claim (IS) path:** SC? Worsened? Disagree? Law change? Evidence?
- **Supplemental Claim (SC) path:** Evidence? 120-day timeline?
- **Higher-Level Review (HLR) path:** Evidence? Want hearing?
- **Board Appeal path:** (leads to specific result screens)

---

## Key Design Features

### Plain Language
All questions use simple, clear language avoiding legal jargon where possible.

### Contextual Help
Almost every question has help text explaining:
- What the term means
- Examples to help Veterans understand
- Links to more detailed information

### Dynamic Content
- The 120-day timeline question shows calculated date (today minus 120 days)
- Branching ensures Veterans only see relevant questions

### Mobile-First
- One question per page
- Large, clear answer buttons
- Progress indication throughout

---

## Answer Format

All questions use **radio button** format with 2-4 answer options:
- Initial/Supplemental/HLR/Board questions: 2 answers (Yes/No or specific scenarios)
- Claim Type question: 4 answers (one for each decision type)

---

## URL Structure Pattern

URLs are generated from H1 headings:
- Convert to lowercase
- Replace spaces with hyphens
- Remove special characters
- Add suffix (a/b/c/d) for duplicate question types in different contexts

Examples:
- "Decision status" = `/decision-status`
- "Service-connected condition" (variant A) = `/service-connected-condition-a`
- "Service-connected condition" (variant B) = `/service-connected-condition-b`

---

## Technical Notes

**Source Code Location:**
`vets-website/src/applications/appeals/onramp/`

**Key Files:**
- `constants/question-data-map.js` - All question content
- `constants/display-conditions/` - Branching logic
- `constants/results-data-map.js` - Result page logic
- `routes.jsx` - URL routing

**Unauthenticated:** No login required to use the tool

**Pre-Launch Status:** Tool is in development, accessible on staging

---

**Document Status:** Complete reference extracted from source code
**Last Updated:** 2025-10-21
