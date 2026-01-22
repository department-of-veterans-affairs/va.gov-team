# Choose-your-own-adventure - Initiative Brief
- Epic - [#103252](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103252)
- Design file - TBD
- Related work - [EZ CYOA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Choose-your-own-adventure/Choose-your-own-adventure%20-%20Initiative%20Brief.md)

## ‼️This work has been descoped as of 4/17/2025
- Due to the CYOA effort on the CG form has the risk of introducing more complication than the form requires.

## Outcome Summary
- Creating a "Choose Your Own Adventure" (CYOA) path on the 10-10CG form that displays all sections of the form and allows the Veteran or caregiver to select which section they want to complete in their preferred order. This will improve flexibility, user control, and the overall experience for those applying for caregiver benefits.

**Related/Associated product(s)**
- Product | [10-1CG product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)

## Problem
- Currently, the 10-10CG form has a linear flow that may not suit all users. Some Veterans or caregivers may prefer to complete certain sections first or revisit sections they've already filled out. The lack of flexibility can lead to frustration and an inefficient application process.
- This initiative furthers OCTO-DE's mission by improving the Veteran and caregiver experience, enhancing user control, and making the application process more efficient and user-centered.

## Desired User Outcomes
- A user would want to use this to complete the 10-10CG form in a way that best suits their preferences and schedule, allowing them to focus on sections most relevant or easiest for them to complete first.

## Undesired User Outcomes
- Confusion on where the user left off, where information is missing

## Desired Business Outcomes
- Improve user satisfaction, reduce form abandonment rates, and increase the efficiency of the application process.

---
## Measuring Success

### Key Performance Indicators (KPIs)

**OBJ:**
- Source: Datadog, Medallia survey, Google Analytics (GA4), DOMO dashboard

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|10-10CG Form start to submission Rate | TBD | TBD | TBD |
|10-10CG Form Abandonment Rate | TBD | TBD | TBD |
|Task completion rate (Medallia)| TBD | TBD | TBD |
|User Satisfaction rate (Medallia)|TBD | TBD | TBD |
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans and caregivers will not like or prefer the new layout and display of information
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that Veterans and caregivers will not understand how to add their information within the sections
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - There is a very low risk of this feature not being technically feasible.  The information displayed and collected will not change how we send it downstream to the Mulesoft/CARMA
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The Caregiver stakeholders will have opinions on how information is displayed, but since the change is strictly on the UI that the Veteran and caregivers will be interacting with, there should be zero impact to caregiver support staff and processing.

### What're you building
- Develop a "Choose Your Own Adventure" path for the 10-10CG form, displaying all sections and allowing users to select and complete them in any order. Implement clear visual cues and progress tracking.

--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket
   - [ ] PO & Platform sync
   - [ ] Design Intent
   - [ ]  Research Review
   - [ ]  Architecture Intent review
   - [ ]  IA Review
   - [ ]  Midpoint Review
   - [ ]  Staging Review
   - [ ]  Privacy & Security
   - [ ]  Contact Center guide review


### Incident Response Info - UPDATE
- The 1010CG form is currently in production.  This is an improvement to the Facility Selection page, providing a search function rather than a static dropdown list.
- No new Endpoints
- Datadog Dashboards
     - [1010CG Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/zcn-whk-r5h/1010-cg-vagov-performance?fromUser=false&refresh_mode=sliding&from_ts=1736185712882&to_ts=1736200112882&live=true)
- Points of Contact:
     - Product manager - Heather Justice | heather.justice1@va.gov / heather.justice@adhocteam.us / GH "hdjustice"
     - Engineer - Brandon Cooper |brandon.cooper1@va.gov / brandon.cooper@adhocteam.us /  GH "coope93'
     - Engineer - Mitch Saltykov | dmitry.saltykov@va.gov / mitch.saltykovs@agile6.com / GH "mitch-a6"
     - Product Owner - Patrick Bateman | patrick.bateman@va.gov
     - MuleSoft/CARMA tech team
          - Paul Kuprionas | paul.kuprionas@va.gov - CARMA tech lead
          - Ramesh Dugar | ramesh.dugar@va.gov - CARMA engineer
          - David Wald | David.Wald@va.gov - testing/integration lead
          - Ranganathan Vekataraman | Ranganathan.Vekataraman@va.gov - CARMA engineer
          - Igor Khurgin | igor.khurgin@va.gov - CARMA engineer
          - Waleed Jaffar | wjaffar@salesforce.com - CARMA engineer
          - Marla Clayton | marla.clayton@va.gov - Technical Project Manager CARMA

### Timeline 

* [Link to Release Plan for this Initiative](TBD)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 10-10  Health Apps
- GitHub Label(s): 1010-team
- Slack channel:  1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Lauren Alexanderson
 
</details>
