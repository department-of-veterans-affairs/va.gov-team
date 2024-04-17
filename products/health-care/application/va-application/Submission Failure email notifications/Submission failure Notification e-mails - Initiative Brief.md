# Initiative Brief - Submission Failure email Notifications

## Outcome Summary

Moving the submission failures email from GovDelivery to VANotify will allow the team to manage the email message to the Veterans, as well as onboarding to the target state platform for Veteran communications  

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- [Notifications Epic #27036](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27036)

## Problem
The 10-10 team currently has no visibility or control over the email message being sent to Veterans.  By using VA Notify as the platform for sending these emails, we can control and customize the message to Veterans, as well as aligning with using the target state platform.


## Desired User Outcomes
- No change to the current Veteran experience.
     - Current Experience: When an application submission fails to submit and be received by Enrollment system, an email is triggered and sent to the Veteran informing them that there was an issue with the application submission and to try again on VA.gov.

## Undesired User Outcomes
- Interruption in the current Veteran experience
- Lack of clarity on what to do next once the notification has been recieved

## Desired Business Outcomes
- Veterans are informed of their application submission failure and is encouraged to try again (current experience)
- 10-10EZ team has control over the message being sent to Veterans
- Notification is stored and managed on the target state VA Notify platform

## Undesired Business Outcomes
- Emails being ignored or sent to Spam/Junk folders without being read
- Emails are unclear
- Emails are not triggered by the submission failure, and are not being sent to Veterans

---
## Measuring Success

### Objective: Veterans return to successfully submit their in-progress applications.

**Key Result 1:** 100% of submission failures initiate an email notification and are being sent to Veterans through VA Notify

Data sources
- TBD


| KPI/Metric  | Baseline | Target | 1 week of 100%|1 Month of 100%|
|----------------|----------------|----------------|----------------|----------------|
|Submission failures| TBD | TBD | TBD | TBD | 
|Submission failure emails sent| TBD | TBD | TBD | TBD | 


**Key Result 2:** 75% of Veterans who receive the submission failure email will click the link to return to the application and resubmit


| KPI/Metric  | Baseline | Target | 1 week of 100%|1 Month of 100%|
|----------------|----------------|----------------|----------------|----------------|
|# of emails sent | TBD | TBD | TBD | TBD | 
|# of emails opened | TBD | TBD | TBD | TBD | 
|%/# of Click-thrus on email link | TBD | TBD | TBD | TBD | 
|%/# of submissions resulted from email link | TBD | TBD | TBD | TBD | 

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The value risk is that applicants will ignore the email notifications. They could also route these emails to their spam/junk folder without realizing what it is for.  
  - There is also a risk that an email cannot be sent, if the Veteran’s application or profile does not include an email address.
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that, when the applicant is routed to the application, they can be confused as to whether they needed to change something for the submission to be successful.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - Email notifications are not triggered upon submission failure (after retries).
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Decrease in applicant returns and resubmissions of failed applications


### Solution Summary
- In-scope:
     - Submission failure Email to be sent through VA Notify template process for applications that haved failed all retries to submit to the Enrollment system
     - Email will be sent using the profile ID of the logged in applicant???
- Out of scope:
     - Confirmation emails
     - Any other email notifications
     - Using data within the application (such as the email address entered)????
     - Applications submitted while unauthenticated, which would not be saved
--- 

## Launch Dates

### Timeline 
- ...


---
   
## Screenshots
### Before - using GovDelivery
[- Screenshot of email](https://api.zenhub.com/attachedFiles/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM0FyQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6beac59b71f6abd850c42092d2c1d36e2372a5e0/Screenshot%202024-04-02%20at%2010.22.04%20AM.png)

### After - Using VA Notify
- Template
     - ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/91373561-6b09-4e5c-82aa-76144cfae6a7)



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
