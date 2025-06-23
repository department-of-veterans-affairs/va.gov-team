# Choose-your-own-adventure - Initiative Brief
- Epic - [#103253](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103253)
- Final Design file - TBD
     - [Working Figma design file](https://www.figma.com/design/gQfpIymox9UgkBSwlZXUhy/10-10EZ---Working-File---EPIC-CYOA?node-id=0-1&p=f&t=E9PwRlHmBg087S7V-0)
- Related work - [Short Form 1-click](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Short%20Form%20-%201-click/Short%20Form%201-click%20-%20Initiative%20Brief.md)

## Outcome Summary
- Creating a "Choose Your Own Adventure" (CYOA) path on the 10-10EZ form that displays all prefilled information, allows the Veteran to review and edit it, and add any missing information. This will improve data accuracy, streamline the process for Veterans with varying data completeness, and enhance the overall user experience.

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
- The problem is the lack of a flexible review and edit process for prefilled data on the 10-10EZ form. While Veterans can edit the prefilled data in the fields on-screen, they still must proceed through every page of the application (see 2nd bullet below)
- The current form flow is linear and does not account for variations in prefilled data completeness.
- This initiative furthers OCTO-DE's mission by improving data accuracy, enhancing Veteran experience, and streamlining access to VA health care through a more efficient digital application process.

## Desired User Outcomes
- A Veteran would want to use this to ensure their information is accurate, make necessary updates, and easily add missing data to avoid delays or errors in their application.
- Veterans should be able to review all prefilled information in a clear format, easily edit any inaccuracies, and add missing information in a non-linear, flexible manner.

## Undesired User Outcomes
- Confusion on where the Veteran left off, where information is missing
- Concerns on the prefilled information being inaccurate

## Desired Business Outcomes
- Continued successful submissions
- Reduction in negative feedback on the online application process

## Undesired Business Outcomes
- Increase in negative feedback
- Increase in calls for assistance

---
## Measuring Success

### Key Performance Indicators (KPIs)

**OBJ:**
- Source: Datadog, Medallia survey, Google Analytics (GA4), DOMO dashboard

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|Task completion rate | TBD | TBD | TBD |
|User Satisfaction rate |TBD | TBD | TBD |
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans will not like or prefer the new layout and display of information
  - Veterans may still go into each set of information, even if no changes are needed
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that Veterans will not understand how to edit or add their information
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - There is a very low risk of this feature not being technically feasible.  The information prefilled, displayed and collected will not change how we send it downstream to the Enrollment system.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The HEC stakeholders will have opinions on how information is displayed, but since the change is strictly on the UI that the Veteran will be interacting with, there should be zero impact to eligibility & enrollment staff and processing.

### What're you building
- Create a "Choose Your Own Adventure" path that presents all prefilled data in sections, allows Veterans to review each section, edit any incorrect information, and add missing details.
     - We can use this opportunity to see what information is available through other APIs across VA.gov space

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

