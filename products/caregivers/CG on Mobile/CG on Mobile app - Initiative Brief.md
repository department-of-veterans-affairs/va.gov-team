# CG on Mobile app - Initiative Brief
- Epic - [#103250](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103250)
- Design file - TBD

## Outcome Summary
- Integrating the 10-10CG form into the VA Health and Benefits mobile app. This will provide Veterans and caregivers with greater convenience and accessibility to apply for caregiver benefits, improving their experience and potentially increasing application submissions.

**Related/Associated product(s)**
- Product | [10-1CG product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- Product | MOBILE APP LINK

## Problem
- Currently, the 10-10CG form is only accessible through the VA.gov website. This can be inconvenient for Veterans and caregivers who primarily use mobile devices, leading to potential abandonment of applications or delayed submissions.
- Since the form is used anytime a new caregiver is identified (whether primary or secondary), it should be made more available through the mobile app for easy access and convenience. 
- This initiative furthers OCTO-DE's mission by improving digital accessibility, enhancing the Veteran digital and caregiver experience with VA caregiver support services, and meeting them where they are through mobile-first solutions.

## Desired User Outcomes
- A user would want to use this to apply for VA caregiver benefits conveniently from their mobile device, anytime and anywhere.
- Users should be able to initiate, complete, and submit the 10-10CG form directly within the VA Health and Benefits mobile app.

## Desired Business Outcomes
- Improve accessibility, increase application submissions, and enhance Veteran and caregiver satisfaction with the application process.
- Reach more Veterans and caregivers, reduce barriers to access, and improve overall efficiency of the application process.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

**OBJ: More Veterans will apply for VA health care through the VA Health and Benefits mobile app**
- Source: Google Analytics (GA4), DOMO dashboard

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|Mobile App starts for 10-10CG Form| TBD | TBD | TBD|
|Mobile App submissions for 10-10CG Form | TBD | TBD | TBD|
|Overall 10-10CG Form Submissions| TBD | TBD | TBD|

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans and caregivers may not need to use the 10-10CG within the mobile app because they are already in the program and do not need to change caregivers
- **Usability Risks** (can people figure out how to use it):
  - There is a risk of Veterans and caregivers not knowing how to use the mobile app or not understanding how to navigate the application with a mobile device
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The effort of integrating the 10-10CG form within the mobile app is unknown.
     - There may be an option to create a 'wrapper' so that the form appears to be integrated within the app, but is still a standalone form within the VA.gov space, which would be less effort and consistent with some of the integrations done within the VA app today
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The Caregiver stakeholders should not have any concerns with making the 10-10CG form more available within the mobile app

### What're you building
- Integrate the 10-10CG form into the VA Health and Benefits mobile app, allowing users to complete and submit the form within the app.

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
- Possible mobile endpoints
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
