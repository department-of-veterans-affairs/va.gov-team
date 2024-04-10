# Initiative Brief - Submission Failure email Notifications

## Outcome Summary

Increase applicant returns and submissions of saved applications, while shortening the amount of time that an application remains in-progress.

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
Veterans are not able to complete applications, and may be forgetting that they have an application in progress.  They may also not know how to return to it.
The reminders will encourage the Veteran to submit the application in order to receive benefits sooner. The link in the reminder email will take them back to the in progress application.


## Desired User Outcomes
- Shorten the time the application remains "in progress"
- More returns and submissions of saved applications

## Undesired User Outcomes
- Frustration in receiving email notifications they did not want

## Desired Business Outcomes
- Veterans are reminded of in progress applications and return to complete them

## Undesired Business Outcomes
- Emails being ignored or sent to Spam/Junk folders without being read

---
## Measuring Success

### Objective: Veterans return to successfully submit their in-progress applications.

**Key Result 1:** Increase the percentage of In-Progress applications, as a result of the email link, 25% of clicked-thru emails will submit their application.

Data sources
- [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)
- [10-10EZ GA - Emails Opened](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_r.drilldown=analytics.eventCategory:email,analytics.eventAction:open,analytics.eventLabel:10-10%20EZ%20Application%20Reminder/)
- [10-10EZ GA - Links from email clicked-through](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20221023&_u.date01=20221031&_r.drilldown=analytics.pagePath:www.va.gov~2Fhealth-care~2Fapply~2Fapplication~2Fresume~2F&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.landingPagePath%22,%22PT%22,%22health-care~2Fapply~2Fapplication~2Fresume~2F%22,0%5D%5D&explorer-table.secSegmentId=analytics.campaign&explorer-segmentExplorer.segmentId=analytics.landingPagePath/)
- [10-10EZ GA - Applications submitted from email link click](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20230101&_u.date01=20230108&explorer-segmentExplorer.segmentId=analytics.campaign&explorer-table.plotKeys=%5B%5D&explorer-table.filter=1010EZ-SIP-reminder&_r.drilldown=analytics.eventLabel:hca--submission-successful/)


| KPI/Metric  | Baseline | Target | November '22|December '22|January 1-8 '23|
|----------------|----------------|----------------|----------------|----------------|----------------|
|% of Saved In Progress applications submitted| N/A | 25% of click-thrus | 77 submissions, 10% | 64 submissions, 9.5% | 14 submissions, 8.6% |


**Key Result 2:** Increase the percentage of returning applicants as a result of the email link, 25% of sent emails will have a link click.


| KPI/Metric  | Baseline | Target |November '22|December '22|January 1-8 '23|
|----------------|----------------|----------------|----------------|----------------|----------------|
|# of emails sent | N/A | 95% delivery rate| 2,431 emails sent, 98% email delivery rate | 2,343 emails sent, 97.5% email delivery rate | 399 emails sent, 98% email delivery rate |
|# of emails opened | N/A | N/A | 3,278 emails opened | 3,580 emails opened | 725 emails opened |
|% of Click-thrus on email link | N/A | 25% of opened emails | 759 email links clicked, 23% of emails opened |670 email links clicked, 18.7% of emails opened |162 email links clicked, 22.3% of emails opened |

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

## Launch Dates

### Timeline 
- June 6, 2022: Launched to 25% of in-progress application population
- June 9, 2022: Pulled back on the launch, reminders no longer sent to applicants
     - Concerned that there is no way for the Veteran to Opt-out of receiving the multiple emails.  They could get at least 4 emails, and if they accessed and re-saved the application, the clock would reset, resulting in another 4+ emails.
     - There is potential to annoy/bother the Veterans, especially when they do not want the reminder and cannot stop it.
- Oct 6, 2022: Met with VA Notify Strike team to discuss proposal to send only one reminder at 7 days of inactivity.
     - If the form is accessed and saved, without submission, it will reset the 7-ay clock
     - The VA Notify Strike team researched the last 4 months of email engagement and found the most engagement was done with the 7-day email.
     > (The open rate was 71% is now 91%; the click rate was 28% is now 51%; the conversion rate was 3.5% is now 7.5%)!
     - The team agrees that this addresses our concerns and would like to launch the reminder emails again
     - The VA Notify Strike team will let us know the next launch window
- Oct 24, 2022: VA Notify Strike team re-launched Saved-In-Progress Reminder emails at 4pm
- Nov 1, 2022: Saved-In-Progress reminder emails are at 100%


---
   
## Screenshots
No UI Changes.  See this [Sample email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/In-Progress%20Reminder%20Notifications/Content%20From%20VA%20Notify/Content%20sample.md) for the proposed template from VA Notify

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 10-10ez notifications
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
</details>
