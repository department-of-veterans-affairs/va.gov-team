
_**Note** - content is being moved from the [VSA eBenefits Team folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/README.md)_

# Feature Outline: View My Rated Disabilities
`WIP`
- GitHub Label: vsa-ebenefits
- Slack channel: #vsa-ebenefits
- Old link: [https://www.ebenefits.va.gov/ebenefits/disabilities](https://www.ebenefits.va.gov/ebenefits/disabilities)
- VA.gov link (WIP): [https://staging.va.gov/disability/view-disability-rating](https://staging.va.gov/disability/view-disability-rating)
- Tool Page (WIP): [https://staging.va.gov/disability/view-disability-rating/rating](https://staging.va.gov/disability/view-disability-rating/rating)
- Demo video link: https://dsva.slack.com/files/ULW9ZB61X/FRTSAK422/rated-disabilities-call-center-walkthrough.mp4
- Product POCs: Steve Kovacs (steve-gov) & Jason Wolf (jason-gcio)

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Keywords](#Keywords)
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary
Rated Disabilities is a common function among the veteran community to see what their Total Calulated Disability Rating is, what has factored into that calculation and what is currently pending from the Claim Status Tool.  These data are important as they inform the Veteran what their service connected rating is and what benefits they might be elegible for.  

## User Problem Statement  
As a Veteran, I want to be able to view my Rated Disabilities quickly and easily after logging in to VA.gov.  Currently, a user might login to VA.gov, but then need to go over to ebenefits.va.gov and that might not be intuitive.  

## Solution Goals  
As with several other features within eBenefits, the effort primarily involves migrating the Rated Disabilities feature into VA.gov so that it can be viewed easily from a link from within their profile.  

### User Goals  
Presenting the Veterans Rated Disabilities information quickly and clearly without logging in, or visiting another page.  

### Business Goals
The VA will see an added benefit in that a significant percentage of its traffic looking for this information will be better informed and receive the benefits they deserve.    

## Assumptions
The migration will be a critical strategy in getting this feature into a modern development environment and its new location will provide smoother access at the user level.  The Rated Disabilities and View Dependents screens will test well against their basic function: displaying information. The screen layout and card arrangements will prove adequate, the text will be clear to most users. The lack of sidebar navigation may jar users, who will be inclined to back-button to previous screens. Rated Disabilities will be lightly used by Veterans (who have instant recall of their Total Combined Disabilities Rating (TCDR)); View Dependents will be used occasionally when there is a change of status for a dependent, or if investigating a change in benefits payments. Veterans may want disabilities benefits tools/screen to be linked in some way.

## Requirements and Constraints
Since this feature uses the `vets-api` via EVSS, most of the endpoints are relatively easy to call and display, however, the Total Combined Disability Rating was proved to be a challenge to get a hold of.  

## Discovery Takeaways
For the most part, users use Rated Disabilities as intended, to ensure they have the correct rating.  If not, they can simply go to the Claim Status Tool and see the status.  
- Veterans are well-aware of the general use of VA disability ratings, including the service-connected and non-service-connected aspects. Most are well-versed in the process of applying for disability claims, and are aware of a "formula" VA uses to determine a total disability rating--but not necessarily the details of how the formula works.
- Users found the presentation of total and individual disability ratings acceptable. Many participants had favorable impressions of how, and how much, information was displayed.
- Generally, Veterans were able to locate information and links quickly. Most considered the info presented appropriate in term of content  and amount.
- Navigation back to the "landing-page" entry point was unclear to many participants. Many participants would opt for other navigational options or simply sign-out rather that return to the landing screen.
- The most prominent pain points seemed to center around login/authorization, and call center experiences.
- The most requested featured included real-time chat, drill-down details for specific disabilities, and specific information regarding the VA disability ratings formula.  

[More information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research/disabilities-dependents-usability-1119/disabilities-dependents-usability-summary.md)

## Solution Approach
Primarily, the solution has consisted of migrating this tool from the `ebenefits` subdomain over to VA.gov, linking from a place that makes sense (disability hub to an authenticated landing page if needed) and implementing the VA.gov's new design system.

## Value Propositions
#### User Value  
Having Rated Disabilities closer to the VA.go experience should allow the user to feel more connected to their rating and their statuses.  

#### Business Value
Keeping the Veteran engaged should also in create an environment where benefits are transferred faster and smoother.

## KPIs  
Once a feature is moved, comparing its exposure and usage will be insightful from its old location to its new location.    

---

# Implementation Info
## Status
- **September - October 2019:** Currently in development, designs approved, moving towards staging.
- **November 2019:** Finalizing TCDR, preparing for launch
- **December:** Reviews, establishing UAT before launch

## Solution Narrative
- **October 8, 2019:** new design elements were introduced and were re-worked into the existing mockups and frontend
- **October 2019:** Once TCDR endpoint is accessible, or at least scaffolded, Rated Disabilities should be made code complete and moved to staging
- **November 2019:** TCDR needs .yml files then integration into API.  Preparing for launch.  Moving away from EVSS with next feature.
- **December 2019:** Edits and significant development has finished, working on implementing some last minute design changes per DSVA before launch
- **January 2020:** No 508 issues found. Expect to launch.

## How to Access and Test
- Link: Unauthenticated: https://staging.va.gov/disability/check-disability-rating/
- Link: Authenticated: https://staging.va.gov/disability/check-disability-rating/rating/
Contact @jason-gcio for more info

## Error Handling
There are a few types of errors depending on the component.  The components should all reflect the state whether: the data cannot be displayed, the data cannot be reached by our system, or the data simply does not exist.

![Rated Disabilities Errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/images/RD-errors.png)

## Service Level Objective
...
## API Calls and Dependent Systems
Rated Disbailities uses the `vets-api` via EVSS.

## Resources and Documentation
- [Discovery and Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/research/disabilities-dependents-usability-1119)
- [Technical Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/evss-tcdr)
- [Product specs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/profile-rated-disabilities.md)
- [Design](https://xd.adobe.com/view/0db723ac-52ff-48b3-4877-9d5882cb2e1f-7b86/screen/90b2e033-e56a-4634-91ff-b694b46d2097/RD-Screen-Tool-FINAL)
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/charter.md)
- ATO documentation: _None at this time_
- [QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/vsa-qa-process.md)

## Keywords
eBenefits, rated disabilities, total combined disability rating, claims and appeals

## Team
- VA Executive Sponsor `*`: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- DSVA Lead `*`: Steve Kovacs
- Product Manager `*`: Jason Wolf
- Design Lead: Shawna
- Eng Lead: Paul Short (GCIO)
- VA Web Comms Partner: N/A
- VA Call Center Partner(s): Chante Lantos-Swett
- Production Testing Partner(s):
- Designer(s): James Andrews
- Content Writer(s):
- Front-end Engineer(s): Micah Chiang, Jesse Cohn
- Back-end Engineer(s): Kathleen Crawford

`*` = approval required for launch

### Screenshots  
#### Before  
![Original Rated Disabilities](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/Rated_Disabilities_eBenefits_OLD.png)
#### After  
[Live mockups](https://xd.adobe.com/view/0db723ac-52ff-48b3-4877-9d5882cb2e1f-7b86/?x_product=cc-slack%2F1.4.0)
![New Rated Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/images/RD_Screen_Tool_FINAL.png)
