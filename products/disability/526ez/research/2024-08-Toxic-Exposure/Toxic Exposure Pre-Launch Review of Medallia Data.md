# Toxic Exposure Pre-Launch Review of Medallia Data

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1**

Date: 08/15/2024

Evelyn Hilbrich Davis [evelyn@cityfriends.tech]


## Overview
We are reviewing Medallia data from July 1-August 9 2024 so we can establish a baseline for what to expect from the survey data before we launch Toxic Exposure. This will help us distinguish ongoing UX challenges from those caused by the rollout.

For more details, please see ticket: [Review Medallia survey data to prepare for TE launch (#88714)
](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88714)
## Summary of responses

### Overall Success Metrics
|**Survey** |**Data point**|**Baseline (2024)**|**Pre-launch (July 1- Aug 9)**|
|--|--|--|--|
|**Feedback**|Feedback satisfaction|2.3|2.8|
|**Feedback**|Task completion| 26% | 44.5% | | |
|**Intercept**|CSAT| 37.7%|41.9% | | |
|**Intercept**|Trust Overall (High distrust 1 to high trust 5)|3.53| 3.29 | | |
|**Intercept**|Trust Gained/Lost (Percent difference from increase and decrease)|-6.1%| 9.2% | | |

### Feedback survey
Between July 1 and August 9, 2024, the Medallia Feedback survey received **462 responses.** 

User feedback was most concentrated on the first and last pages of the form.
|Rank|Top Feedback Pages|# of responses| % of total responses|
|--|--|--|--|
|1|Introduction| 116 | 25% |
|2| Confirmation| 76 |16%|
|3| Start | 64 | 14% |
|4| Review & Submit| 19 | 4%|

### Intercept survey
Between July 1 and August 9, 2024, the Medallia Intercept survey received **85 responses.** 

User feedback was most concentrated at the very beginning of the form, despite the fact that it is intended to more evenly  “intercept” 5% of VA.gov users who have had a 20-second or more extended session. This is a known problem and already ticketed [(#88712)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88712), but this data pull reinforces our hunch. 

|Rank|Top Intercept Pages|# of responses| % of total responses|
|--|--|--|--|
|1|Introduction| 42 | 49% |
|2| Start| 22 | 26%|
|3| Veteran Information | 7 | 8% |

## Top Themes
I coded all qualitative user feedback using the codes developed in our last Medallia review (March 2023 data) and added new ones as needed. 

Most common specific feedback themes included usability issues, Pact Act references, problems with error blockers, and navigation. See Appendix for full list of codes/themes and definitions. 
|Code|Feedback count| Intercept count|Definition|
|--|--|--|--|
|Usability| 33 |--|Responses that describe specific usability issues not encompassed by other tags. Examples include character limits, inability to update prefill, not being able to continue, etc.|
|PACT| 26|--| Responses that reference Toxic Exposure or the PACT Act|
|Error| 26|--| Responses that describe an error message they came across in the form |
|Navigation | 23|10| Responses that describe moving from one part of the application to another and wayfinding |
|Getting help| 18|5| Responses that describe seeking help from the hotline, VSOs, professionals, or other sources|

## Top 5 Takeaways 
These takeaways are a combination of key findings and hypotheses around what we might see in Toxic Exposure during the rollout. 

   - **Takeaway 1:** Findings from from March 2023 Medallia data review mostly hold true in the July 2024 data set.

   - **Takeaway 2:** TE monitoring of Medallia must include comprehensive review and coding of all responses -not just those that fall on Toxic Exposure pages.

   - **Takeaway 3:** Existing navigation issues expressed in Medallia (and mirrored in 526 Shadowing and 0781 research) could magnify cognitive burden of Toxic Exposure questions.

   - **Takeaway 4:** Caregivers are among those actively seeking ways to file for Toxic Exposure online.

   - **Takeaway 5:** Veterans have questions about their eligibility for the Pact Act-- and are looking for ways to file.

### Detail of Takeways
**1. Findings from from March 2023 Medallia data review mostly hold true in the July 2024 data set.**

|3/2023 Finding | True/False in current data set|Context|Veteran voice|
|--|--|--|--|
|Certain error messages can lead Veterans to frustrating encounters with the Contact Center. | **True** | Veterans are still encountering errors that cannot be resolved by calling the Contact Center|"Trying to file a claim online, called number provided, got transferred 10 times with no help."|
|Error messages block Veterans from filing.| **Less true**| Veterans do not express frustration with ITF errors, but continue to mention errors (n=26). In particular, Veterans express problems with BIRLS/EDIPI blockers (n=8) and isolated Participant ID problems (n=3)|"We have tried and tried to get a birls i.d. Or edition with no luck.  We have tried and tried to submit a disability claim with no luck." |
|Veterans are finding themselves misrouted to or stuck on the Reserves National Guard (RNG) page.| **True**| The unit number format confuses Veterans (n=6) and blocks them from proceeding.|"Trying to fill out form and asked for "Unit Name" tried it every way I could think of."|
|Veterans reported evidence-related challenges throughout the application.|**True**| Difficulties with evidence hold true now. N=17 Veterans spoke of issues with uploading files. |" I was not able to complete the form by my Aug XX,2024 deadline because the form seems to be rigged. Every time I select one of the 2 options below my uploaded pdf it automatically deletes several other boxes above or below the other uploads."|


***

**2. TE monitoring of Medallia must include comprehensive review and coding of all responses -not just those that fall on Toxic Exposure pages.** 

- Overall experiences filing for disability are frequently reported on other pages-- especially introduction, confirmation, and start.  Luckily, we do still see that specific usability issues are often reported on the page url-- like the problems with the Reserves-National Guard page. 

- Because the PACT Act questions are not yet added to the online form, all mentions were of Veterans looking to file for PACT Act. Overall, 26 Veterans explicitly referred to the Pact Act or Toxic Exposure in their qualitative feedback. 9 said they were unable to complete their task; Feedback satisfaction averaged around 3 (out of 5).
  
- As we begin the release, we'll have a better sense of how feedback on Toxic Exposure, specifically, is dispersed in Medallia. I hypothesize that general pain points and FAQs about the PACT act will fall on early form pages while blockers will show up on TE pages. 



***


**3. Existing navigation issues expressed in Medallia (and mirrored in 526 Shadowing and 0781 research) could magnify cognitive burden of Toxic Exposure questions.**

- Veterans are confused by In Progress Forms-- where to find an existing application, how to continue it, and/or how to start from scratch (n=7). Four additional Veterans describe being caught endlessly in the "Is this the right form?" loop. 

    >"Continue filing a PACT Act claim.  It seems the 17th time I log in, in a couple of days, I don't need to be asked again if I'm on active duty, or which claim I'm doing.  Give me an option to return where I was or ask if I want to go somewhere else.  I spent more time navigating the site than doing anything useful."

- One Veteran recommended improved functionality for skipping around in the form as an alternative to the back button. I hypothesize that Veterans will echo this desire in future feedback-- especially if many locations are selected.

    >"It would be nice if you had TABS or something that you can select to go to a certain section of the application (such as personal, illnesses, etc)  like tax preperation software INSTEAD of having to select the BACK button over and over to get back to a certain section."

***


**4. Caregivers are among those actively seeking ways to file for Toxic Exposure online.**

- We know that many Veterans are getting help with filing online. I would like to keep an eye on how self-reported caregivers manage the information-intensive nature of the TE flow. 
   > "Get to the PACT form. I have called that number countless times over the past many months since my husbands passing and just keep getting passed on to a different agency with a promise that someone will call me back and the only agency that actual gave me a human was [org redacted]...But I still need to know which forms to submit for survivor benefits or posthumous disability re-evaluation based on death certificateâ€™s new information."
   > 
   > "I was trying to apply for Pact Act for my mother." 
   > 
   > "I am still trying to file claim and supplemental claim for late husband they said we filed on wrong claim....Also need VA to relook as Causations and contributors to his passing, along with [PII] they said AO never used in[Hazardous Location]. Very frustrated you make it impossible for the Vet the worse for the family."
   >


***


**5. Veterans have questions about their eligibility for the Pact Act-- and are looking for ways to file.**

Questions were few in this first review, but buidling a more comprehensive understanding of FAQs from Veterans about Toxic Exposure will help us improve content. 
   > "File for pact act and determine if i am eligible for additional benefits since i am already rated at 100%?"
   > 
   > "VA says I need VHA 10-7131 to fill out and send to them. They did not help me find this form and I searched and could not locate it. Also, I was in [PACT act country} [Years} and the VA said I could file for compensation and I am trying but cannot navigate all the forms to fill out."
   > 


## Appendix 
### Coding - Themes across survey responses
I coded all qualitative user feedback using the codes developed in our last Medallia review (March 2023 data) and added new ones as needed. Most common specific feedback themes included usability issues, questions about filing for the Pact Act, problems with error blockers, and navigation. 

|Code|Feedback count| Intercept count|Definition|
|--|--|--|--|
|Usability| 33 |--|Responses that describe specific usability issues not encompassed by other tags. Examples include character limits, inability to update prefill, not being able to continue, etc.|
|PACT| 26|--| Responses that reference Toxic Exposure or the PACT Act|
|Error| 26|--| Responses that describe an error message they came across in the form |
|Navigation | 23|10| Responses that describe moving from one part of the application to another and wayfinding |
|Getting help| 18|5| Responses that describe seeking help from the hotline, VSOs, professionals, or other sources|
|Evidence/evidence upload| 17|2|Responses that describe evidence or medical records, uploading or downloading|
|Pain point| 11|8|Responses that express distress or frustration, but don’t fall into another tag |
|Submission| 12 |--| Responses that describe submitting their form and/or the confirmation page|
|Intent to File| 5| -- |Responses that reference Intent to File or upcoming ITF deadlines|
| Bright spot| 1 |14| Positive feedback or something that’s working well|
|General| 141|8| Responses that included non-specific qualitative information, such as "filing"|
