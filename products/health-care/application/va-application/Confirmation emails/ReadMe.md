# Initiative Brief - Confirmation emails

## Outcome Summary

Inform Veterans when their submitted 10-10EZ application has been received by the system.

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
Currently, the confirmation email is sent by a Java Mail client, triggered once the Enrollment system receives the application from VA.gov.  The email process needs to move to the target state application VA Notify.


## Desired User Outcomes
- Veterans are notified timely once their application has been recieved by the system.

## Undesired User Outcomes
- Frustration in receiving email notifications they did not want
- Frustration in not receiving an expected confirmation email after they submitted their application

## Desired Business Outcomes
- Veterans are informed of VA having received their submitted application

## Undesired Business Outcomes
- Emails not being sent out timely or at all

---
## Measuring Success

### Objective: Emails are sent successfully from VA Notify.

**Key Result 1:** ?????


| KPI/Metric  | Baseline | Target | November '22|December '22|January 1-8 '23|
|----------------|----------------|----------------|----------------|----------------|----------------|
|xxxx| xxxx | xxxxx | xxxx | xxxxx | xxxx|


**Key Result 2:** ?????


| KPI/Metric  | Baseline | Target |November '22|December '22|January 1-8 '23|
|----------------|----------------|----------------|----------------|----------------|----------------|
|xxxx| xxxx | xxxxx | xxxx | xxxxx | xxxx|

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The value risk is that applicants will ignore the confirmation emails. They could also route these emails to their spam/junk folder without realizing what it is for.  
  - There is also a risk that an email cannot be sent, if the Veteran’s profile or the application does not include an email address.
- **Usability Risks** (can people figure out how to use it):
  - ????
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - TBD
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Integration between Enrollment system and VA Notify
  - Scheduling the integration, timeline is long


### Solution Summary
- In-scope:
     - Confirmation Email to be sent through VA Notify template process for applications that have been submitted and received by Enrollment System
     - Email will be sent using the ???? profile ID or ICN of the logged in applicant or the email address in the application
- Out of scope:
     - Any other email notifications

--- 

## Launch Dates

### Timeline 
- ...


---
   
## Screenshots
No UI Changes.  
[Current email template from Java Mail client/Enrollment system](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Confirmation%20emails/10-10EZ%20Confirmation%20Email%20from%20VES.md)



---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 10-10ez-notifications
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman
 
</details>
