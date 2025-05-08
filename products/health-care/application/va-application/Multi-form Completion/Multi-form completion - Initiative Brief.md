# Multi-form completion - Initiative Brief
- Epic - [#103260](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103260)
- Design file - TBD
- [VA GPT guidance on creating a holistic experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Multi-form%20Completion/VA%20GPT%20guidance%20on%20holistic%20form%20completion%20experience.md)

## Outcome Summary
- Enabling Veterans to complete multiple forms using the same data input.
- This could be achieved through several iterations:
     - MVP: Prompting for 10-10CG and/or 10-10D upon completion of 10-10EZ and receipt of "enrolled" determination for Veterans with 70% or higher disability rating and prefilling with previously entered data/MPI
     - Prompting for additional forms that may be logical next steps for Veterans
     - Work with form owners to prefill with previously entered data/MPI
     - Working with form owners to create a selection list and simultaneous submission of multiple forms
- This will streamline the application process, reduce redundancy, and enhance the overall Veteran experience.

- **MVP Scope**: Prompting for 10-10CG and/or 10-10D upon completion of 10-10EZ and receipt of "enrolled" determination for Veterans with 70% or higher disability rating

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- Product | [10-10CG product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- Product | [10-10EZR product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/10-10EZR%20Product%20Brief%20(standalone%20form).md)

## Problem
- Veterans often need to complete multiple forms when applying for various benefits and services.
- Currently, each form requires separate data entry, which is time-consuming, repetitive, and can lead to errors. This results in a frustrating experience and potential delays in accessing needed benefits.
- The problem is occurring because forms are currently treated as independent entities without data sharing.
- This initiative furthers OCTO-DE's mission by improving efficiency, reducing burden on Veterans, and enhancing VA’s digital experiences to be the easiest and most efficient way to access VA health care and benefits

## Desired User Outcomes
- A user would want to use this to save time, reduce effort, and avoid repetitive data entry when applying for multiple benefits.
- Users should be able to complete multiple forms seamlessly, with data automatically prefilled, and submit all applications together.

## Desired Business Outcomes
- Improved user satisfaction when using VA.gov and applying for benefits and services
- Decrease time and frustration among Veterans and family members when using VA.gov

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

**OBJ: Decrease time it takes Veterans to complete multiple forms on VA.gov**
- Source: Google Analytics (GA4), DOMO dashboard

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|Rate of task completion (Medallia) | TBD | TBD | TBD|
|Rate of click-thru to next form| TBD | TBD | TBD|
|Number of Users Completing Multiple Forms Concurrently | TBD | TBD | TBD|
|Number of Forms completed concurrently | TBD | TBD | TBD|
|Average Time to Complete Multiple Forms | TBD | TBD | TBD|

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans will want to enter different information on different forms, for a variety of personal reasons
  - There is a risk that Veterans will submit multiple forms and not realize it or will regret having submitted one before they were properly ready/prepared (the list of forms may cause a perceived pressure to submit them all now)
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that Veterans will not know how it works or be concerned about how their data is gathered across forms
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - There are some technical feasibility risks here due to many form types and inconsistent fields being used.
  - Profile, which is to be a Source of Record, does not hold all the data we would like to use to complete these forms
  - Pulling data from one form to another (like MVP or V2) may be difficult or not feasible
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The risk with Stakeholders is unknown.  There would not be changes to the information collected and sent to downstream systems, only in the way the data is gathered from the Veteran.

### What're you building
- Iteration 1: Prompt users with the next logical form after completing the first. Prefill the next form with entered data (this may not be possible).
- Iteration 2: Prompt users with a list of additional forms after completing the first. 
- Iteration 3: Prefill selected forms with entered data (this may not be possible).
- Iteration 4: Present a list of some (start small & least complex?) eligible forms that can be selected and submitted concurrently using the same data. (Where would this be prompted?)

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


### Incident Response info - UPDATE
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

