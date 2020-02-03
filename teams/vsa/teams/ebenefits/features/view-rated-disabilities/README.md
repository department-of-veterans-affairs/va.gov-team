
_**WIP** - content is being moved from here to the [VA.gov Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/rated-disabilities/README.md)_

# Feature Outline: View My Rated Disabilities
- GitHub Label: vsa-ebenefits
- Slack channel: #vsa-ebenefits
- VA.gov link (WIP): [https://staging.va.gov/disability/view-disability-rating](https://staging.va.gov/disability/view-disability-rating)
- Tool Page (WIP): [https://staging.va.gov/disability/view-disability-rating/rating](https://staging.va.gov/disability/view-disability-rating/rating)
- Demo video link: _Coming Soon_
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
Migrate the View Rated Disabilities function from eBenefits to VA.gov.

## User Problem Statement  
As a Veteran, I want to view my individual rated disabilities and total disability rating so that I can make sure they're correct and get the benefits I've earned.

## Discovery Takeaways
For the most part, users use Rated Disabilities as intended, to ensure they have the correct rating.  If not, they can simply go to the Claim Status Tool and see the status.  
- Veterans are well-aware of the general use of VA disability ratings, including the service-connected and non-service-connected aspects. Most are well-versed in the process of applying for disability claims, and are aware of a "formula" VA uses to determine a total disability rating--but not necessarily the details of how the formula works.
- Users found the presentation of total and individual disability ratings acceptable. Many participants had favorable impressions of how, and how much, information was displayed.
- Generally, Veterans were able to locate information and links quickly. Most considered the info presented appropriate in term of content  and amount.
- Navigation back to the "landing-page" entry point was unclear to many participants. Many participants would opt for other navigational options or simply sign-out rather that return to the landing screen.
- The most prominent pain points seemed to center around login/authorization, and call center experiences.
- The most requested featured included real-time chat, drill-down details for specific disabilities, and specific information regarding the VA disability ratings formula.  

[More information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research/disabilities-dependents-usability-1119/disabilities-dependents-usability-summary.md)  

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

## How to Access and Test
- Link: Unauthenticated: https://staging.va.gov/disability/check-disability-rating/
- Link: Authenticated: https://staging.va.gov/disability/check-disability-rating/rating/
Contact @jason-gcio for more info

## Error Handling
The components should all reflect the state whether: the data cannot be displayed, the data cannot be reached by our system, or the data does not exist.

![Rated Disabilities Errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/images/RD-errors.png)

## Service Level Objective


## API Calls and Dependent Systems
- EVSS as of launch, to be trasitioned to BGS.

## Resources and Documentation
- [Discovery and Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/research/disabilities-dependents-usability-1119)
- [Technical Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/evss-tcdr)
- [Product specs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/profile-rated-disabilities.md)
- [Design](https://xd.adobe.com/view/0db723ac-52ff-48b3-4877-9d5882cb2e1f-7b86/screen/90b2e033-e56a-4634-91ff-b694b46d2097/RD-Screen-Tool-FINAL)
- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/charter.md)
- ATO documentation: _Coming Soon_

## Keywords
eBenefits, rated disabilities, total combined disability rating, claims and appeals

## Team
- VA Executive Sponsor `*`: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- DSVA Lead `*`: Steve Kovacs
- Product Manager `*`: Jason Wolf
- Design Lead: 
- Eng Lead: 
- VA Web Comms Partner: 
- VA Call Center Partner(s): 
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
