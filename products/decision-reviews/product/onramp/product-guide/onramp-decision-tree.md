# Onramp tool decision tree

**Complete flowchart of all question paths**

---

## Overview

The onramp tool uses **branching logic** where different questions appear based on previous answers. This document maps all possible paths through the questionnaire.

**Total possible questions:** ~20 (Veterans typically see 5-10 depending on their path)

---

## Decision tree

### START = Introduction page

|

### Q1: Decision status
**"Have we sent you a decision on your claim yet?"**

- **YES** = Continue to Q2
- **NO** = Q1A (Disability claim filed?)

---

### Branch A: No decision received yet

**Q1A: Disability claim filed?**
**"Have you filed a disability claim for this condition?"**

- **YES filed** = **RESULT: Wait for decision**
- **NO not filed** = **RESULT: File initial claim first**

---

### Branch B: Decision received = Q2

**Q2: Claim decision timeline**
**"Was your claim decided less than a year ago?"**

- **YES (within 1 year)** = Q3 (Contested claim?)
- **NO (over 1 year)** = Path B1 (Service-connected?)

---

## Path B1: Decision over 1 year ago

### Q3 (over 1 year): Service-connected condition?
**"Did we decide that your condition is service connected?"**

- **YES service-connected** = Q4 (Condition worsened?)
- **NO not service-connected** = Q6 (Law/policy change?)

#### If YES service-connected:

**Q4: Condition worsened?**
**"Has your service-connected condition gotten worse since you filed this claim?"**

- **YES worsened** = Q5 (Disagree with decision?)
- **NO hasn't worsened** = Q6 (Law/policy change?)

##### If YES worsened:

**Q5: Disagree with decision?**
**"Do you disagree with any part of our decision?"**

- **YES disagree** = **RESULT: Claim for increase options**
- **NO just reporting worsening** = **RESULT: File claim for increase**

#### If NO service-connected OR NO worsened:

**Q6: Change in law or policy?**
**"Are you requesting a review because of a change in law or policy?"**

- **YES law change** = **RESULT: Supplemental Claim (law change)**
- **NO not law change** = Q7 (New evidence?)

**Q7: New and relevant evidence?**
**"Do you have new and relevant evidence?"**

- **YES have evidence** = **RESULT: Supplemental Claim**
- **NO no evidence** = **RESULT: Contact VSO (over 1 year, no new basis)**

---

## Path B2: Decision within 1 year

### Q3: Contested claim?
**"Is your claim contested?"**

- **YES contested** = Q3A (Fewer than 60 days?)
- **NO not contested** = Section 2 questions

#### If YES contested:

**Q3A: Date on decision**
**"Has it been fewer than 60 days since the date on your decision?"**

- **YES < 60 days** = Path to HLR questions (Q_2_H_2_NEW_EVIDENCE)
- **NO > 60 days** = **RESULT: Contact VSO (contested claim, >60 days)**

#### If NO not contested = SECTION 2:

---

## Section 2: Pathway-specific questions

### Path 2-IS: Initial/Service-connected path

**Q8: Service-connected condition?**
**"Did we decide that your condition is service connected?"**

- **YES service-connected** = Q9 (Condition worsened?)
- **NO not service-connected** = Q10 (Claim type)

#### If YES service-connected:

**Q9: Condition worsened?**
**"Has your service-connected condition gotten worse since you filed this claim?"**

- **YES worsened** = Q10A (Disagree with decision?)
- **NO hasn't worsened** = Q10 (Claim type)

**Q10A: Disagree with decision?**
**"Do you disagree with any part of our decision?"**

- **YES disagree** = Q10 (Claim type)
- **NO just reporting worsening** = **RESULT: Claim for increase**

---

### Q10: Claim type (CRITICAL BRANCHING POINT)
**"What type of decision do you want us to review?"**

This question creates 4 different paths:

- **Initial claim or claim for increase** = Path 2A (Initial/SC questions)
- **Supplemental Claim** = Path 2A (Initial/SC questions)
- **Higher-Level Review** = Path 2B (HLR questions)
- **Board Appeal decision** = Path 2C (Board questions)

---

## Path 2A: Initial claim or Supplemental Claim selected

**Q11: Change in law or policy?**
**"Are you requesting a review because of a change in law or policy?"**

- **YES law change** = **RESULT: Supplemental Claim (law change basis)**
- **NO not law change** = Q12 (New evidence?)

**Q12: New and relevant evidence?**
**"Do you have new and relevant evidence?"**

- **YES have evidence** = **RESULT: Supplemental Claim**
- **NO no evidence** = **RESULT: Higher-Level Review**

---

## Path 2B: Higher-Level Review selected

**Q13: New and relevant evidence?**
**"Do you have new and relevant evidence?"**

- **YES have evidence** = Q14A (Hearing with judge?)
- **NO no evidence** = Q14B (Hearing with judge?)

**Q14A: Hearing with a Veterans Law Judge?** (has evidence)
**"Do you want to have a hearing with a Veterans Law Judge?"**

- **YES want hearing** = **RESULT: Board Appeal (Evidence Submission docket)**
- **NO no hearing** = **RESULT: Supplemental Claim**

**Q14B: Hearing with a Veterans Law Judge?** (no evidence)
**"Do you want to have a hearing with a Veterans Law Judge?"**

- **YES want hearing** = **RESULT: Board Appeal (Direct Review docket)**
- **NO no hearing** = **RESULT: Higher-Level Review**

---

## Path 2C: Board Appeal decision selected

**Q15: New and relevant evidence?**
**"Do you have new and relevant evidence?"**

- **YES have evidence** = **RESULT: Supplemental Claim or Board Appeal (with evidence)**
- **NO no evidence** = Q16 (Board decision timeline?)

**Q16: Board decision timeline**
**"Did you receive your decision within the last 120 days?"**

- **YES within 120 days** = **RESULT: Supplemental Claim (within 120 days of Board)**
- **NO over 120 days** = **RESULT: Contact VSO or file new claim**

---

## Result pages summary

### Decision review options (your-decision-review-options)

Shows one or more of these recommendations:

**Supplemental Claim (Form 20-0995)**
- When: Veteran has new evidence, law/policy change, or within 120 days of Board decision
- Timeline: ~125 days
- Direct link to SC form

**Higher-Level Review (Form 20-0996)**
- When: No new evidence, thinks there was an error, decision < 1 year old
- Timeline: ~125 days
- Direct link to HLR form
- May offer informal conference option

**Board Appeal (Form 10182)**
- When: Wants Veterans Law Judge to review
- Options: Direct Review (~365 days), Evidence Submission (~365 days), or Hearing (~730 days)
- Direct link to NOD form

### Other available options (your-available-options)

Shows alternative actions:

**File initial claim**
- When: No decision received yet, haven't filed claim

**File claim for increase**
- When: Condition worsened, decision over 1 year old

**Contact VSO**
- When: Contested claim >60 days, complex situation, over 1 year with no new basis

**File new claim**
- When: Board decision >120 days ago with no new evidence

---

## Common paths Contact Center should know

### Path 1: Veteran with new evidence (most common)
1. Decision received? **YES**
2. Within 1 year? **YES**
3. Contested? **NO**
4. Service-connected? **YES or NO**
5. Condition worsened? **NO**
6. Claim type? **Initial claim**
7. Law change? **NO**
8. New evidence? **YES**
= **RESULT: Supplemental Claim**

### Path 2: Veteran thinks VA made an error (no evidence)
1. Decision received? **YES**
2. Within 1 year? **YES**
3. Contested? **NO**
4. Service-connected? **NO**
5. Claim type? **Initial claim**
6. Law change? **NO**
7. New evidence? **NO**
= **RESULT: Higher-Level Review**

### Path 3: Veteran wants judge to decide
1. Decision received? **YES**
2. Within 1 year? **YES**
3. Contested? **NO**
4. Service-connected? **NO**
5. Claim type? **Higher-Level Review**
6. New evidence? **NO**
7. Want hearing? **YES**
= **RESULT: Board Appeal (Direct Review)**

### Path 4: Condition worsened (over 1 year)
1. Decision received? **YES**
2. Within 1 year? **NO**
3. Service-connected? **YES**
4. Condition worsened? **YES**
5. Disagree with decision? **NO**
= **RESULT: File claim for increase**

### Path 5: PACT Act or law change
1. Decision received? **YES**
2. Within 1 year? **NO or YES**
3. Law/policy change? **YES**
= **RESULT: Supplemental Claim (law change basis)**

### Path 6: No decision received yet
1. Decision received? **NO**
2. Filed claim? **NO**
= **RESULT: File initial claim first**

---

## Key decision points for Contact Center

### Evidence is the primary differentiator
- **Has new evidence** = Usually Supplemental Claim
- **No new evidence, thinks error** = Usually Higher-Level Review
- **No evidence, wants judge** = Usually Board Appeal

### Timeline matters
- **< 1 year:** All decision review options available
- **> 1 year:** Limited to claim for increase or new claim (unless law change)
- **< 60 days (contested):** Special path to HLR
- **< 120 days (Board decision):** Supplemental Claim still available

### Claim type determines path
The "What type of decision?" question creates completely different flows:
- **Initial/SC selected** = Asks about law change, then evidence
- **HLR selected** = Asks about evidence, then hearing preference
- **Board selected** = Asks about evidence, then 120-day timeline

---

## Troubleshooting with the decision tree

**Veteran says: "I have new evidence"**
= Check: Decision < 1 year? Not contested? Then likely **Supplemental Claim**

**Veteran says: "VA made a mistake"**
= Check: Has new evidence? If NO = likely **Higher-Level Review**

**Veteran says: "I want to talk to a judge"**
= Check: Has evidence? Want hearing? Then **Board Appeal** with appropriate docket

**Veteran says: "My condition got worse"**
= Check: Decision < 1 year? Then **Supplemental Claim**. Decision > 1 year? Then **Claim for increase**

---

**For Contact Center reference**
**Source:** vets-website repository, display-conditions logic
**Last updated:** 2025-10-21
