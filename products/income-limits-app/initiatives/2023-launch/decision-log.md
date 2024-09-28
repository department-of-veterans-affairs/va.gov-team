# Decision log - Income Limits app

## Will not phase roll-out

- We decided internally not to phase the roll-out, as the app is replacing missing functionality and it's relatively low-risk.

## Engineering decisions during implementation phase

- Special case where GMT < NMT (i.e., low cost-of-living counties) – In ticket [13590](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13590), we decided that the API should always return NMT and GMT and let consuming products decide how/whether to display thresholds in this special case. (The Income Limits app will not display GMT in that case.)
- Zip code validation – we added an endpoint for FE apps to validate whether a user-submitted 5-digit number is in fact a zip code in our database. This was necessary to provide immediate validation to users in case of a data entry error.

## 5/16 locked UX flow (pending stakeholder review)
Present: Wes, Dave Conlon, Danielle Thierry, Jordan Wood, Cindy Merrill

App start screen/landing page
- No yes/no questions will be asked (e.g., about receiving pension) to intercept Veterans who don't need to use this tool at all. We will rely on Benfit Hub content to provide that education, including the content on the first screen of the I.L. app.
- Previous year data will be made available as a second CTA link on the start screen. The primary CTA will be for current income limits.
Dependents screen
- A simple-but-accurate definition of dependents will be always visible. More complex rules will be in an expanding additional-info component
- Detailed description of how to calculate income and deductions will be an external page, linked from the results screen. Content will initially be a reusable Q&A node, later move to Resources & Support.
- The team subsequently aligned via slack that the intro screen would be built in Drupal, and the react app would begin with the first question.

## 4/13 discussion and 4/17 email
DaveC decided that the MVP can be launched with minor uncertainties from SMEs around edge cases and pension recipients. Therefore: We will not include questions about Housebound and A&A benefits, since our best info says pension recipients always get travel and free meds.

## 3/2/23 decision regarding A&A and Housebound
**Decision:** 

The prototype flow finalized after some uncertainty about aid-and-attendance (A&A) and Housebound thresholds.

The Income Limits app will not need to base any thresholds on whether a Veteran receives additional pension through A&A or Housebound benefits. The old app/wizard indicated that Veterans receiving A&A or Housebound benefits would only get "Free medications and beneficiary travel" if their income was below the corresponding limits (the one for A&A, the one for Housebound, or the "just pension" one). However, it turns out this was not correct – any Veteran receiving a pension is entitled to "free meds and travel," with no other income limits applied. (It's our understanding that an income limit is applied to recieve pension payments, so in that sense a threshold is being applied.)

**Why it's a key decision:**
The VES (Veteran Enrollment System) database doesn't store values for the Housebound threshold, which is set by VBA. If we were to determine that we need the Housebound threshold, we would have to either 1) convince VES stakeholders to add it going back many years, or 2) build our own database to store these thresholds. Given we hope to leverage the VES database for all the other limits, this would be an onerous new requirement.

Notes:
- The old wizard indicated that Veterans receive "Free medications and beneficiary travel reimbursement" (Rx and BT) at different income limits depending on whether they receive A&A, HB, or neither.

On 3/2 we corresponded by email with Linsdey Peace, who verified this interpretation and confirmed the old wizard was incorrect when it presented different thresholds for Veterans receiving A&A, Housebound, or neither.

(Note: We subsequently tested a prototype that had three yes-no questions about whether the participant receives pension, A&A or HB benefits. We did this to see how Veterans would respond to additional simple questions.)


## 2/22/23 meeting with VHA stakeholders

Attendees: Lindsey Peace (HEC), Simone Gully (EED), Antonio Presley (EED)
Notable absence: Danielle Thierry was traveling

### Key decision
- Lindsey will be our main point of contact and reviewer for the app prior to launch. In her role in the income limits division she already has this responsibility for VES threshold updates every year.
  - Why HEC has this responsibility: Veterans with questions about income call HEC or EED.
- We don't need to talk to Revenue (per Lindsey)
- We confirmed that Veterans who are receiving a pension automatically get the "Free meds and travel" benefit level.

### Notes:
Which thresholds are necessary in the app:
- On 2/22 the team presented a prototype flow to stakeholders from the Healthcare Eligibility Center (HEC) and its sub-group EED (Enrollment Eligibility Division).
  - EED said that Rx and BT benefits are automatic for Veterans who receive a pension, regardless of income
  - EED said healthcare is free with pension, A&A or HB
  - EED said that for Veterans not receiving a pension, we should ask whether they receive A&A or HB and then adjust the Rx-BT threshold accordingly
  - Hence, our next prototype got additional branches for pension, A&A, and HB beneficiaries.
- Several days after the meeting, we shared the new branching flow with Danielle Thierry. She spotted an inconsistency – she recalled that A&A and Housebound are associated with pension payments. Therefore, anyone receiving either of those benefits has a pension and therefore doesn't need to check their income against any limit.
  - This would suggest that separate benefit levels for A&A and Housebound are not relevant in the app at all. See conclusions in next section above.

Use cases:
- EED and HEC stakeholders think that many or even most of the Veterans who are interested in income limits already have benefits and are checking their eligibility for the new year. (As opposed to Veterans who are finding out for the first time if they're eligible for benefits.)
  - They suggested these Veterans might prefer the old table and could be turned off by the multi-step approach
  - These Veterans might know the threshold they're looking for by name, e.g. "National means test threshold" or "GMT"

Other learnings:
- US code 32 says EED can’t look at income until PG5
- Coapys are determined on a case-by-case basis by the medical director of the VAMC providing services. There is no set national test that determines copay.

## 2/9 meeting with Danielle Thierry (Content) and Dave Conlon

**Key decision:** Pause user research until we can get certainty on what thresholds need to be presented to Veterans.

Wes asked for meeting after noticing a few things:
- Daniel Sasser noticed that Housebound threshold isn't present in VES database
- VHA stakeholders saying neither A&A nor Housebound thresholds should matter to us
- The old wizard clearly states that income limits for "free meds and travel" depend on 

Use cases:
- First time applying for healthcare benefit
- Income level changed
- Each year income limits are updated by VBA, beneficiary might check new numbers

UX considerations for prototype:
- Need to be clear that there are so many factors that mean inclims don’t apply for a particular Vet
  - Recent combat vet
  - PG <5 (?)
  - Etc
  - Anything related to service is covered
- Things we need stakeholders for:
  - Provide guidance and approval on app content
  - Validate that the numbers themselves are correct
- Research question ideas/themes (pass to Cindy):
  - Do you understand that this is only part of the answer?
  - Do you think this is the definitive answer, or do you feel it’s providing you info to have a better conversation?
  - Do you feel prepared to take next step? Did this help you decide whether to take next step?

Documents created for navigating clarifications:
- [Key questions and clarifications log](https://dvagov-my.sharepoint.com/:w:/r/personal/wesley_rowe_va_gov/_layouts/15/doc2.aspx?sourcedoc=%7Baa8ec9aa-008d-4968-9cf9-2e22652b0829%7D&action=edit&cid=d63f995f-dd65-41c3-bede-bf1db7e16c17) – a MS Word doc stored on Sharepoint (Wes's account). Discussions were had in comments; Lindsey P participated.



