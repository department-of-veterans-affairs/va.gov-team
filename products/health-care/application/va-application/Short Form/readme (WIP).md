# Initiative Brief - 10-10EZ Short Form

## Outcome Summary

Reduce time taken in completing the 10-10EZ application and increase the number of overall submissions.

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
Veterans are either not completing the application due to additional information that is required but may not be necessary; or may not be completing due to the amount of time required to complete the application.
The introduction of the short form will remove questions that are not necessary for a given Veteran's circumstances, and reduce the amount of time and effort required to complete the initial form.

## Desired User Outcomes
- Shorten the amount of time taken to complete the application.
- Reduce the number of visits required to complete the application.

## Undesired User Outcomes
- Confusion about what information needs to be provided and what doesn't.

## Desired Business Outcomes
- Fewer applications are abandoned.

## Undesired Business Outcomes
- Confusion on what information needs to be filled out, leading to Veterans abandoning applications.

---
## Measuring Success

### Objective: More health care applications submitted.


**Key Result 1:** Increase number of applications submitted. 

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

>>> Templated Information
| KPI/Metric  | Baseline | Target | Post-Launch
|----------------|----------------|----------------|----------------|
|Reduce # of apps in progress over 7 days| TBD | TBD | TBD|
|Reduce # of Expired applications| TBD | TBD | TBD|


**Key Result 2:** Reduce sessions/time taken to complete application.

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

| KPI/Metric  | Baseline | Target | Post-Launch
|----------------|----------------|----------------|----------------|
|Increase # of Saved In Progress applications submitted| TBD | TBD | TBD|


**Key Result 3:** Reduce the number of abandoned applications

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

| KPI/Metric  | Baseline | Target | Post-Launch
|----------------|----------------|----------------|----------------|
|# of Click-thrus on email link | N/A | TBD | TBD |

---
>>> /Templated Information


## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The value risk is that applicants will ignore the reminders. They could also route these emails to their spam/junk folder without realizing what it is for.  
  - There is also a risk that an email cannot be sent, if the Veteran’s profile does not include an email address.
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that, if the applicant is routed to My VA (via a link in the email when there is more than one in-progress application), they can be confused as to why they were not routed to the application itself.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - TBD
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Increase in applicant returns and submissions of in-progress applications


### Solution Summary
- In-scope:
     - Reminder Email to be sent through VA Notify template process for applications that are still in progress
     - Email will be sent using the profile ID of the logged in applicant
- Out of scope:
     - Confirmation emails
     - Any other email notifications
     - Using data within the application (such as the email address entered)
     - Applications started while unauthenticated, which would not be saved in progress
--- 

## Launch Planning

### Timeline 
- ???? 2022: Complete QA
- ???? 2022: Complete UAT
- ???? 2022: Launched to ???% of users




#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots
No UI Changes.  See this [Sample email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/In-Progress%20Reminder%20Notifications/Content%20From%20VA%20Notify/Content%20sample.md) for the proposed template from VA Notify

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson
 
</details>
