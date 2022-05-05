# Initiative Brief - In-Progress Reminder Notifications

## Outcome Summary

Increase applicant returns and submissions of saved applications, while shortening the amount of time that an application remains in-progress.

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
Veterans are not able to complete applications, and may be forgetting that they have an application in progress.  They may also not know how to return to it.
The reminders will encourage the Veteran to submit the application in order to receive benefits sooner. The link in the reminder email will take them back to the in progress application.


## Desired User Outcomes
- Shorten the time the application remains "in progress"
- Fewer expired applications
- More returns and submissions of saved applications

## Undesired User Outcomes
- Frustration in receiving email notifications they did not want

## Desired Business Outcomes
- Veterans are reminded of in progress applications and return to complete them

## Undesired Business Outcomes
- Confusion on submission status that leads to more expired applications
- Emails being ignored or sent to Spam/Junk folders without being read

---
## Measuring Success

### Objective


**Key Result 1:** Reduce the number of In-Progress or Expired applications 

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

| KPI/Metric  | Baseline | Target | Post-Launch
|----------------|----------------|----------------|----------------|
|Reduce # of apps in progress| TBD | TBD | TBD|
|Reduce # of Expired applications| TBD | TBD | TBD|


**Key Result 2:** Increase the number of In-Progress applications that are submitted within 7 days of starting it.

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

| KPI/Metric  | Baseline | Target | Post-Launch
|----------------|----------------|----------------|----------------|
|Increase # of Saved In Progress applications submitted| TBD | TBD | TBD|


**Key Result 3:** Reduce the number of sessions to submit an application

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

| KPI/Metric  | Baseline | Target | Post-Launch
|----------------|----------------|----------------|----------------|
|Reduce # of sessions to submission| TBD | TBD | TBD |

---

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
