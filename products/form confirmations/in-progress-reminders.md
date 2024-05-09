# Product Outline - In Progress Reminders
---

## Problem Statement

- How can we help remind Veterans of their incomplete applications so that they can complete the process and gain access to benefits sooner?

## Who, What, When, Where, Why
*What:* Send email reminders to Veterans when an application has been started but not completed.

*Who:* Veterans who have begun to fill out an application (while authenticated) but haven’t submitted.

*When:* Reminders will be sent out 7 days after the start date of the application. If the user resumes their application, but still doesn't complete it after an additional 7 days, then another reminder is sent.

*Why:* The reminders will encourage the Veteran to submit the application in order to receive benefits sooner. The link in the reminder email will take them back to the in progress application.

 
## Desired User Outcomes

- Shorten the time the application remains "in progress"
- Fewer expired applications
- More returns and submissions of saved applications

## Undesired User Outcomes
- Frustration in overcomplicated notifications or too many notifications
- More complex application workflow to get to "in progress" application

## Desired Business Outcomes
- Veterans are reminded of in progress applications and return to complete them

## Undesired Business Outcomes
- Confusion on submission status that leads to more expired applications

## Forms Currently Handled
|Form Number  |Form Name |Frequency |Time Frame |Launch Date | 
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| 26-1880  | Application for a VA Home Loan Certificate of Eligibility (COE) | Once | 24 hours  | May 2023  |
| 526 EZ | Application for Disability Compensation and Related Compensation Benefits | Once | 7 days | November 2022 | 
| 10-10 EZ | Application for Health Benefits | Once | 7 days | October 2022 | 
| 686-c | Application Request to Add and/or Remove Dependents | Once | 7 days | April 2022 | 

---
## Measuring Success

### Key Performance Indicators (KPIs)

* How many Veterans start the form but never complete it?
* How many Veterans start filling out the form, save their progress, and then come back to it?
* How many Veterans are following the link in the reminder email? 
* How long does it take Veterans to submit the completed form?


#### Baseline KPI Values
* Current amount of applications that expire before they are completed?
* Average amount of time from the start date to the submission date?

### Objectives and Key results (OKRs)

- Objective: More applications are successfully submitted
  - Key result: Number of applications increase
  - Key result: Length of time between starting application and submitting decreases 

### Mock Ups ###

- [Multiple in Progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/Mutliple%20Forms%20In%20Progress%20Reminder.png)
- [Single in Progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/Single%20Form%20In%20Progress%20Reminder.png)
---

## Assumptions
- If we remind Veterans of their in progress applications:
  - Provide a link for them to get back to their application
  - Give regular reminders
 -  then more Veterans will complete the application online.

## Decisions
- We understand that applications might have accidentally been started. 
  - Currently there is not a way to close out these applications. 
  - We are unsure if the ability to remove the application may be the responsibility of a different team.
- Multiple applications for various benefits might be in progress for the Veteran.
  - When we tackle multiple forms we will need to deliver a "summary" of all pending applications. It is something we want to do eventually but will tackle later.
           - Authenticated Experience team is also looking to re-design the "My VA" page that includes the location for the "Applications in Progress" which is where we would like to send a user who has multiple forms in progress. 
           - We would like to have an anchor link to the "Application in Progress" title to allow for auto scrolling. Since the page is up for design work we will hold off on linking to it until that work is completed. 
- Cadence will be 7 days after the application was started then another 7 days if the application is resumed but not completed again.
  - We launched with a cadence of 7 days, 21, 35, and 49. 
  - After researching the utilization of the different cadences we honed in on the 7 day cadence and removed the other timings.
  - We discussed the previously mentioned cadence of 7, 30, 53, and 59 days but felt the complexities of the rolling expiration date (updating information on any form restarts its expiration date) made specific day reminders overly complex and potentially difficult to manage when additional forms are also "in progress."
  - The cadence of every two weeks and again at day 59 (right before expiration date) was also discussed. Since the expiration date is rolling, based on the user updating the application, we have opted to move forward without the day 59 reminder.
- A check to ensure the Veteran is not deceased will be implemented. 
- Applications can be started when not authenticated. Since these are not assocaited to the Veteran's profile these applications are out of scope for this project.
- Do you have a mock-up or screenshot of what the email would look like with multiple applications in progress?


## Additional Points
-https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/issues/department-of-veterans-affairs/vanotify-team/23

-https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va.gov-strike-team/healthcare-in-progress-reminders.md

-https://github.com/department-of-veterans-affairs/va.gov-team/issues/23609

## Screenshots
[Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va.gov-strike-team/10-10%20EZ%20Reminders%20Workflow.JPG)

[Mural Workflow](https://app.mural.co/invitation/mural/oddball5855/1645722089026?sender=ian7950&key=7366e5a3-34a8-4ea1-843d-f93f06a3cd1b)

## Keep in Mind
- Should allow us to re-use the code/process for additional forms
- Allow customization of delivery time and frequency
- Multiple applications can be “in progress”
- All authenticated forms have the ability to be saved in progress
- The Unauthenticated forms are not tied to the profile id
- The “in progress” application expires after 60 days

## Questions
- What happens if they try to start the same application again? This re-starts the clock and pushes out the expiration date.
- What link should be included in the reminder?
    - Direct to the application that is “in progress” (This is ideal if only 1 application)
    - Send them to their “My VA” page and have them scroll down to find the applications they began
    - Send them to their “My VA” page and automatically scroll them to the application section (This is ideal if more than 1 application, but the page is pending redesign coming potentially in  May 2022)


## 10-10 Team Questions
- How does the cadence work, if applications are started in between the 7-14 day timeframes?
    - Ex: I have an application 14 days old (call this form A), but I have another application that is 11 days old (call this form B). Would the 14 day notification email contain both applications?
           -  The older form would dictate the cadence. So the form B would be displayed on the reminder email that is sent on day 21 for form A.   
- How does the process to trigger the email notification work?
           - The trigger works by looking daily for any forms marked as `in progress` and specifically 7, 21, 35 or 49 days old. If a form falls on that age then an email is sent.
- Does it monitor Saved In Progress applications that have opted in for these reminders?
           - There currently isn't an opt in process for these reminders.
- Would our system need to send a flag to VA Notify?
           - No, the Strike team would create the job to check for the in progress forms that are the appropriate age. 
- We are interested in any research done for this reminder, if you have any to share. 
   - This is for our curiosity since we have heard similar feedback about too many notifications & related topics
           - We do have a feedback loop in the responses we get to the emails. We can also see via utilzation stats that the users are clicking back through to these applications. We would recommend your team sets up a no-reply email address so you can see the responses from veterans.
           - We also plan to evaulate the affect on submission rates  
          

