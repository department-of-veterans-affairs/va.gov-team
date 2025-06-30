# Dependent Management on VA.gov FAQ

## General FAQ
<details>
<summary>What benefits do the 21-686c, 21-674, and 0538 impact?</summary>

- 21-686c: Disability, pension, or DIC benefits
- 21-674: Disability, pension, or DIC benefits
- 21-0538: Disability only (David Reis on 6/23/25)
</details>

<details>
<summary>Are there instances where VA.gov should prevent a Veteran from submitting a 686c or 674?</summary>
  The VA never wants to prohibit submission because there is no ITF for dependents. It is important that we accept anything and then develop the claim to determine eligibility.
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH79a07999e16d498498308b685)
</details>

<details>
<summary>How common is fraud?</summary>
The VA tries to avoid referencing "fraud" because it applied intent. Typically, over- and under-payments are caused by a simple oversight by the Veteran. Divorce is the largest cause of benefit over-payment. There are some cases of actual fraud, but it's extrememly rare.
[Source: David Reis 6/5/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHfed5ed6709ab4141a0fa089ae)
</details>

<details>
<summary>Why are there questions about pension income in the VA.gov 686c form that are not on the pdf?</summary>
The pension line of business requested that VA.gov add two pension-related income questions to the online form flow, so that RBPS can auto-process some 686c claims that impact pension. A complete outline of the questions and functionality can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/pension_income_questions.md).
Source: Jennifer Feuer
</details>

<details>
<summary>How long does it take to process a 686c claim?</summary>

  It's hard to give an estimate because every claim is different.
  - If a claim is manually processed through a field station, it might not be distributed right away if there is a queue of claims.
  - If a claim is missing evidence, it can take up to 30 days if the VA needs to send a development letter to the Veteran. A processor may also call the Veteran.
  - Worst case scenario: A claim needs to go through an administrative decision where a full write-up takes place.
  - If a claim is automatically processed through RBPS, it could be processed in as little as 30 minutes
[Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH401b216fab3946bf86d22a9d5)
</details>


## APIs
<details>
<summary>What is the API that pulls in list of active and inactive dependents on the "View My Dependents" Page</summary>
https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/dependents/dependents-verification/tests/e2e/fixtures/mocks/mock-dependents.jsonc
</details>



## Marriages
<details>
<summary>If a Veteran already has a spouse listed as a dependent and they try to add a new spouse, what happens?</summary>

- The Veteran is required to tell the VA if the status of their current spouse changes (e.g., death, divorce, etc.).
- When adding the new spouse, the Veteran will be asked about prior marriages and the date those marriages ended.
- If the Veteran got divorced in November, they'll see a change to their benefits starting December 1.
- When a Veteran reports a dependent change matters. If a Veteran waits more than a year to notify the VA of a new dependent, the VA will not backdate benefits to the date of marriage (or birth). Instead, the VA will backdate benefits to the date the 686c was submitted to add that dependent.
[Source: David Reis 6/5/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH96b7ecef31cb4669b0377b506)
</details>

## Parents
<details>
<summary>Does a dependent parent need to live with the Veteran to be eligible to claim as a dependent?</summary>
  The relationship to the Veteran and financial need are the only consideraions.
  [Source: Kevin Schneider 5/25/25](https://dsva.slack.com/archives/C0547Q0K0LF/p1748010216569389?thread_ts=1747326863.342889&cid=C0547Q0K0LF)
</details>

## Children
<details>
<summary>How far ahead of time should VA.gov warn Veterans that their soon-to-be 18 year old or 23 year old will be removed from their disability/pension benefits (if they're not attending school or permanently disabled)?</summary>
  - The VA's practice is to accept school aged child 90 days prior to 18th birthday
  - The VA currently mails letters 60 days prior the child’s 18th birthday
  - A child is removed from the Veteran's benefits the day the child turns 18 or 23
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHd9f38027b424457b993e86682)
</details>

## Students
<details>
<summary>What happens if  dependent child graduates school before they turn 23?</summary>
  The Veteran needs to inform the VA that the child graduated before age 23 and they will be removed from the Veterans benefits.
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH5e53b7be997648c5b62f716c3)
</details>

<details>
<summary>Does the Veteran have to wait until their child is 18 to submit a 674?</summary>
  No. The VA's practice is to accept school aged child 90 days prior to 18th birthday
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHd9f38027b424457b993e86682)
</details>

## Verification
<details>
<summary>Why is the verification of parents not included in the 21-0538 form?</summary>
  The probablilty is so low, the VBA decided not to include them.
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNHc46b51e2bca243209f09b5fc8)
</details>

<details>
<summary>How often should VA.gov alert Veterans to verify their dependents?</summary>
  Per Kevin, opinions may differ, but he suggests once per year. For Veterans that do not log into VA.gov often, email them a notification after 2 years of inactivity.
  [Source: Kevin Schneider 5/15/25](https://dsva.slack.com/docs/T03FECE8V/F08UBCMQ5GQ?focus_section_id=temp:C:FNH2e3686d5b0684854ba5feaea3)
</details>
