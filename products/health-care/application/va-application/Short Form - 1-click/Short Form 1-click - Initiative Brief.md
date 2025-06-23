# Short Form 1-click - Initiative Brief
- Epic - [#103258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103258)
- Design file - TBD

## Outcome Summary
* Shortening the 10-10EZ form to a 1-click apply action for current Short Form - Authenticated Veterans.
* They would be able to review their prefilled information and submit with no other actions needed.
* This will streamline the application process, reduce friction, and increase the number of Veterans able to successfully submit the form.

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
- The current 10-10EZ form is lengthy and can be time-consuming for Veterans to complete, even when much of their information is already known by the VA. This can lead to frustration, abandonment of the application, and a barrier to access for care. 
- The form is designed to collect all possible information from all applicants, rather than being tailored to authenticated Veterans with pre-existing data. Other constraints may include legacy system limitations and policy requirements.
- This initiative furthers OCTO-DE's mission by streamlining processes through digital solutions, thereby increasing access to health care and improving the Veteran experience.

## Desired User Outcomes
- Veterans should be able to submit their 10-10EZ application with a single click, after reviewing prefilled information, significantly reducing the time and effort required.


## Desired Business Outcomes
- Improve efficiency, reduce administrative burden, and enhance Veteran satisfaction with the enrollment process.
- The business should be able to process more applications, reduce errors, and improve overall service delivery.


---
## Measuring Success

### Key Performance Indicators (KPIs)

**OBJ: More Veterans completing and successfully submitting the 10-10EZ in a single session**
- Source: Google Analytics (GA4), DOMO dashboard

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|10-10EZ Form Completion Time for Authenticated Users | TBD | TBD | TBD|
|10-10EZ Form Submission Rate for Authenticated Users | TBD | TBD | TBD|
|10-10EZ Form Abandonment Rate for Authenticated Users | TBD | TBD | TBD|

**OBJ: More Veterans completing their desired task, and indicating this on the Medallia survey**
- Source: Medallia Survey results

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|Rate of task completion | TBD | TBD | TBD|
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans will not fully trust that the total and correct information was included in the application
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that Veterans may not understand that they have applied for health care by simply clicking a button, however we would mitigate this with clear on-screen messaging
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - There are low risks to the technical feasibility of this feature  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - There is a risk that Stakeholders will be resistant, however We will reassure and validate that the same information collected today will be transmitted.  There will be no incomplete or inaccurate forms submitted as a result of this feature.

### What're you building
- Develop a 1-click submission option for current Short Form - authenticated Veterans on the 10-10EZ form. Prefill the form with existing data (expand on this). 
- Allow users to review and edit prefilled information before submitting.

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

