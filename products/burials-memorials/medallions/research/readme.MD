# Product Outline Template
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*
---
## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*
## Problem Statement
Funeral Homes/Cemeteries, Veterans, family members, and personal representatives lack a way to initiate a request for a medallion for a deceased person through VA.gov to get their request started with the Memorial Products Services/ Memorial Processing Station (MPS). Currently they need to go to the Funeral Home and/or Cemetery in order to request and receive this benefit.  As a result it can extend memorial processing times as well as make the process lengthier and more difficult for Veterans, family members, and personal representatives in their time of grief. 
  
## Desired User Outcomes
- *Why would a user want to use this?*
- Funeral Homes/Cemeteries can submit requests more effectively and efficiently; in turn providing better service to their clients in a difficult time.
  - Veterans, family members, and personal representatives, in their time of grief,  can have an easy, stress-free, and user-friendly to request a memorial by applying on VA.gov, thereby ensuring that they can honor their loved ones and receive their benefits in a timely manner.
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
    - Funeral Homes/Cemeteries no longer have to mail/fax medallion requests to MPS to get them processed, saving time and in turn money.
    - Veterans, family members, and personal representatives will be able to submit medallion requests on their own time (24-7) and have a less emotionally draining experience, answering potentially sensitive questions in person (and potentially having to go to multiple locations to gather signatures), in their time of grief.
## Undesired User Outcomes
- Longer time to create medallion requests.
-	Inability to use the form without calling MPS.
## Desired Business Outcomes
- *Why would your business want this to exist?*
     - MPS wants to provide the best experience possible to Funeral Homes/Cemeteries, Veterans, family members, and personal representatives in their most difficult and trying time.
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
     - MPS will be able to process medallion requests more effectively and efficiently because cases will be populated with critical information needed to determine eligibility for delivering/affixing a medallion and contact information of key individuals on ingestion.
  - Greater data accuracy for MPS due to the reduction of manual data entry.
  - Reduction of hold times for callers to MPS; because the Medallions form will be available on VA.gov, in turn improving the overall experience.
## Undesired Business Outcomes
- Increased processing times for medallion requests.
- Decreased satisfaction for medallion requests with the MPS.
---
## Measuring Success
### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
 - User feedback ratings on Medallions form
  - Processing time to submit the form
  - Submitted and failed submission metrics
  - Sessions to complete
  - Open form metrics
  - Failed submission errors to determine the root cause
  - Surveys with user feedback on MPS side
  - Comparative processing times for Medallions from with the MPS cases created in AMAS/MBMS (from mail/fax) vs. created in VA.gov
* _What are the most important metrics that track with this product/initiative's success?_
 - User feedback ratings on Medallions form
  - Processing time to submit the form
  - Submitted and failed submission metrics
  - Open form metrics
  - Failed submission errors to determine the root cause
* _Include links to Domo or Google Analytics Dashboards/Reports_
TBD
* _**Limit 5-6 KPIs per product**__
TBD
| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |
#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
- TBD (Work with AMAS/MBMS to get some baseline data for current performance with cases called in for relational comparison. Note this will not be a one to one since the MBMS side experience will involve an MPS agent and the Self-Service side for Medallions on VA.gov will not.)
### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_
- TBD (Work with AMAS/MBMS to gather some base metrics AND review current avg form metrics for VA.gov)
- Objective:
  - Key result: 
  - Key result: 
---
## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*
- To ensure greater user adoption of the new Medallions 1330m form funeral homes/cemeteries, veterans, family members, and personal representatives will need to be able to populate their information in the form without manual entry if pre-existing in the system. 
- Multiple signatures will be needed for the majority of Medallions request from teh applicant and the funeral home or cemetery.
## Solution Approach
- *What are you going to build now, and why have you decided to start there?*
- What
- Digitized version of the 1330 M that gathers all information from the applicant with an initial applicant signature before submission.
- On applicant submission a notification email will trigger to the additional signee.
- Additional signee will be able to select link to pre-filled form (must sign into VA.gov to view due to PII) and can sign off or reject the application.
- Rejected applications will trigger notification to the applicant to complete a new form
- Accepted(signed by the secondary signee) applications with submit and send a package to CMP (Centralized Mail Portal)
- Why?
- This is the most simplistic/scalable solution for a multi-signature form that adheres to VA.gov standards and functionality
- *Why this solution / approach over other solutions / approaches?*
- Ability for in house, on VA.gov development (end-to-end)
- No additional costs incured by third party integration to something like DocuSign
- Greater control for 508 compliance 
- Endpoint connectivity reductions, which reduces possible points of failure
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- Ability for secondary signee to send the application back to the applicant for updates (in the original application)
- Why: Far greater level of complexity, would result in significant delay in delivery of value to teh Veterans versus a phased approach that builds on itself.
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
-Ability for secondary signee to send the application back to the applicant for updates (in the original application)
### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*
- Initiative | [Link to Initiative Brief](#)
TBD
--- 
## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- TBD (Need to cycle with NCA/BTRS on this)
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- TBD (Need to cycle with NCA/BTRS on this)
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)
- TBD 
## Launch Dates
- *Target Launch Date*
  - Fiscal Year 2025 Quarter 4
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd
---
## Solution Narrative
### Current Status
- Early Discovery and buildout of baseline mockups and prototypes.
  - Gap analysis refinement
### Key Decisions
- Refine the scope of MVP for Phase 1 of the Medallions effort.
- Expand on what the timeline may look like and when we want to increase visibility of the form to a larger percentage of the public.
- Determine what the strategy will be to make the public aware of this new capability and its benefits.
---
   
## Screenshots
TBD
### Before
### After
---
#### Communications
<details>
- Team Name: BAH-MBS-SelfServ
- GitHub Label: Medallions
- Slack channel: va-gov-mbs
- Product POCs:
 - PM: Hughes, Catherine (Cat) M. (BAH) Catherine.Hughes2@va.gov
 - Engineering: Santiago, Kenneth (Booz Allen Hamilton) Kenneth.Santiago@va.gov
 - Research/Design: Barron, Charles J. (BAH) Charles.Barron1@va.gov; Yamrus, Carly (BAH) Carly.Yamrus@va.gov
- Stakeholders: 
- Office/Department: 
   - OIT and NCA/BTRS/MPS and NCSO
 - Contact(s): 
   - OIT
     - Kadiresan, Sathish K. Sathish.Kadiresan@va.gov
   - NCA/BTRS
     - Wilson, Ginger Ginger.Wilson@va.gov
     - Jones, Rhonda M. Rhonda.Jones1@va.gov
   - NCA/NCSO
     - Dalrymple, Jay Jay.Dalrymple@va.gov
     - Ridgeway, Kevin Kevin.Ridgeway@va.gov
</details>
#### Team Members
<details>
 
 - DEPO Lead: 
 - PM: Hughes, Catherine (Cat) M. (BAH) Catherine.Hughes2@va.gov
 - Engineering: Santiago, Kenneth (Booz Allen Hamilton) Kenneth.Santiago@va.gov
 - Research/Design: Barron, Charles J. (BAH) Charles.Barron1@va.gov; Yamrus, Carly (BAH) Carly.Yamrus@va.gov
 
</details>
#### Stakeholders
<details>
 
_What offices/departments are critical to make this initiative successful?_
  - OIT and NCA/BTRS/MPS and NCSO
 - VA.gov Governance, CAIA 

