
# Product Outline - Time of Need Self Service

---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

## Problem Statement
Funeral Homes, Veterans, family members, and personal representatives lack a way to initiate a request for burial of a deceased person through VA.gov to get their case started with the National Cemetery Scheduling Office (NCSO). Currently they need to call the NCSO in order to receive this benefit.  As a result it can extend Funeral Home processing times as well as make the process lengthier and more difficult for Veterans, family members, and personal representatives in their time of grief. 
 
## Desired User Outcomes

- *Why would a user want to use this?*
  - Funeral Homes can submit requests more effectively and efficiently; in turn providing better service to their clients in a difficult time.
  - Veterans, family members, and personal representatives, in their time of grief,  can have an easy, stress-free, and user-friendly to request a burial in their time of need by applying on VA.gov, thereby ensuring that they can bury their loved ones and receive their benefits in a timely manner.

- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
    - Funeral Homes no longer have to call the NCSO to get interment requests submitted, saving time and in turn money.
    - Funeral Homes, Veterans, family members, and personal representatives will be able to easily access their interment request status for ToN cases submitted, without having to reach out to the NCSO.
    - Veterans, family members, and personal representatives will be able to submit interment requests on their own time (24-7) and have a less emotionally draining experience, answering potentially sensitive questions over the phone, in their time of grief.

## Undesired User Outcomes
- Longer time to create interment requests.
-	Inability to use the form without calling the NCSO.

## Desired Business Outcomes

- *Why would your business want this to exist?*
     - The NSCO wants to provide the best experience possible to Funeral Homes, Veterans, family members, and personal representatives in their most difficult and trying time.
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
     - The NCSO will be able to process ToN internment requests more effectively and efficiently because cases will be populated with critical information needed to determine eligibility for burial, desired date/time of interment/services, and contact information of key individuals on ingestion.
  - Greater data accuracy for the NCSO due to the reduction of manual data entry.
  - Reduction of hold times for callers to the NCSO; because the ToN Self-Service form will be available on VA.gov, in turn improving the overall experience.


## Undesired Business Outcomes
- Increased processing times for interment requests.
- Decreased satisfaction for interment/service requests with the NCSO.

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
  - User feedback ratings on ToN Self Service form
  - Processing time to submit the form
  - Submitted and failed submission metrics
  - Sessions to complete
  - Open form metrics
  - Failed submission errors to determine root the cause
  - Surveys with user feedback on the NCSO side
  - Comparative processing times for ToN cases with the NCSO created in CaMEO MBMS vs. created in VA.gov
* _What are the most important metrics that track with this product/initiative's success?_
  - User feedback ratings on ToN Self Service form
  - Processing time to submit the form
  - Submitted and failed submission metrics
  - Open form metrics
  - Failed submission errors to determine root the cause
* _Include links to Domo or Google Analytics Dashboards/Reports_
  - TBD
* _**Limit 5-6 KPIs per product**__
  - TBD

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
  - TBD (Work with MBMS to get some baseline data for current performance with cases called in for relational comparison. Note this will not be a one to one since the MBMS side experience will involve an NCSO agent and the Self-Service side for ToN on VA.gov will not.)

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_
  - TBD (Work with MBMS to gather some base metrics AND review current avg form metrics for VA.gov)
- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- To ensure user greater user adoption of the new ToN SS (Time of Need Self Servicer form) funeral homes will need to be able to populate their information in the form without manual entry if pre-existing in the system. 
- The NCSO office needs to set a new business model in place to be able to intake these requests and finalize the cases before they are sent to the cemeteries.  Initial GoLive of this product will likely be limited to a percentage and slowly increase with time to ensure Scheduling agents are comfortable with the new process.


## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - ToN SS form capabilities for a Veteran, family member, personal representative, or funeral home to request interment/services at a National Cemetery when an individual has passed away.
  - Ability to select a general day or date and time range for the requested service. 
  - Ability for funeral home information to populate in the form without manual entry if pre-existing in the system.
  - Ability for funeral homes to specify specific interment details around measurements for casket and urn options.
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - The below items involve integration with a highly complex scheduling system and will take an immense amount of time and testing to ensure proper functionality.  Additionally we can get value to the Veterans, their family members, and Funeral Homes sooner if we hold on the below until a later iteration.
      - Ability to select a specific date and time for a cemetery to reserve the time slot for services.
      - Verifying types of services offered by the chosen cemetery compared to what the user has chosen.
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - How the funeral home functionality is implemented and if a separate application may need to be built out for them, along with the form.  Also determining if that separate application on va.gov would be a future initiative or part of the MVP.
  - Email notification specifications for case status and progress.
  - Terminology and flow may update based on feedback to ensure the most intuitive design for our users that is also consistent with platform standards.


### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)
 - TBD

--- 

## Launch Strategy
 - TBD (Need to cycle with NCA/BTRS on this)
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
 - TBD
- *Target Launch Date*
  - tbd
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
- Refine the scope of MVP for Phase 1 of the ToN SS effort.
- Expand on what the timeline may look like and when we want to increase visibility of the form to a larger percentage of the public.
- Determine what the strategy will be to make the public aware of this new capability and its benefits.


---
   
## Screenshots

### Before
 - Existing Paper form, not currently available to the general public dipicted below.

### After

---

#### Communications

<details>

- Team Name: BAH-MBS-SelfServ
- GitHub Label: TBD
- Slack channel: va-gov-mbs
- Product POCs: Kenny Santiago, Cat Hughes, Michelle Dieudonne Yenyo, Cindy Cruz-Granados

</details>

#### Team Members

<details>
 
 - DEPO Lead: Matt Self
 - PM: Hughes, Catherine (Cat) M. (BAH) Catherine.Hughes2@va.gov
 - Engineering: Santiago, Kenneth (Booz Allen Hamilton) Kenneth.Santiago@va.gov
 - Research/Design: Cruz Granados, Cindy A. (Booz Allen Hamilton) Cindy.CruzGranados@va.gov
 
</details>


#### Stakeholders

<details>

 - Office/Department: 
   - OIT and NCA/BTRS and NCSO
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
