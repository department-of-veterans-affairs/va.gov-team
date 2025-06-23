# EZ on Mobile - Initiative Brief
### Note
- The link to the 10-10EZ application is available on the VA mobile app, on the Health tab.  Since the EZ form is a one-time access form (no need to return to it once enrolled), does it make sense to integrate it into the mobile app? Is the link sufficient?
- 

- Epic - [#103255](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103255)
- Design file - TBD

## Outcome Summary
- Integrating the 10-10EZ form into the VA Health and Benefits mobile app will provide Veterans with greater convenience and accessibility to apply for VA healthcare benefits, improving their experience and potentially increasing application submissions.

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- Product | MOBILE APP LINK

## Problem
- Currently, the 10-10EZ form is only accessible through the VA.gov website. This can be inconvenient for Veterans who primarily use mobile devices, leading to potential abandonment of applications or delayed submissions.
- We have heard from some Veterans that they would like the 10-10EZ form (among other forms) available within the VA Health and Benefits mobile app. 
- This initiative furthers OCTO-DE's mission by improving digital accessibility, enhancing the Veteran digital experience with VA health care and benefits services, and meeting Veterans where they are through mobile-first solutions.

## Desired User Outcomes
- A Veteran would want to use this to apply for VA healthcare benefits conveniently from their mobile device, anytime and anywhere.
- Veterans should be able to initiate, complete, and submit the 10-10EZ form directly within the VA Health and Benefits mobile app.

## Desired Business Outcomes
- Improve accessibility, increase application submissions, and enhance Veteran satisfaction with the enrollment process.
- The business should be able to reach more Veterans, reduce barriers to access, and improve overall efficiency of the enrollment process.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

**OBJ: More Veterans will apply for VA health care through the VA Health and Benefits mobile app**
- Source: Google Analytics (GA4), DOMO dashboard

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|Mobile App starts for 10-10EZ Form| TBD | TBD | TBD|
|Mobile App submissions for 10-10EZ Form | TBD | TBD | TBD|
|Overall 10-10EZ Form Submissions| TBD | TBD | TBD|

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans may not need to use the 10-10EZ within the mobile app because they have already enrolled in VA health care prior to using the app
- **Usability Risks** (can people figure out how to use it):
  - There is a risk of Veterans not knowing how to use the mobile app or not understanding how to navigate the application with a mobile device
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The effort of integrating the 10-10EZ form within the mobile app is unknown.
     - There may be an option to create a 'wrapper' so that the form appears to be integrated within the app, but is still a standalone form within the VA.gov space, which would be less effort and consistent with some of the integrations done within the VA app today
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The HEC stakeholders should not have any concerns with making the 10-10EZ form more available within the mobile app

### What're you building
- Integrate the 10-10EZ form into the VA Health and Benefits mobile app, allowing users to complete and submit the form within the app.

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


### Incident Response info
- The 1010EZ form is currently in production; we are only changing the content and flow of the application's questions.  The information being sent after submission to the Enrollment System remains unchanged.
- There are no new endpoints implemented with this change
- This change applies to the full application flow, as well as the Short Form flow (more than 50% disability rating) 
- We will use the following 1010EZ applications for any latency or errors being logged
     - [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa&from_ts=1687971959215&to_ts=1688058359215&live=true)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - Heather Justice (heather.justice@adhocteam.us) - Product Manager
     - TBD - Engineering
     - Patrick Bateman (patrick.bateman@adhocteam.us) - Product Owner

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
