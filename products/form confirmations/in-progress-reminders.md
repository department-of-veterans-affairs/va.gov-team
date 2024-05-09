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

## Assessing the Need for In Progress Notifications for Forms
- Use the delta for the number of forms submitted and number of forms in progress to find out how many users are starting, but not finishing forms.
  - Collect the total events for the number of forms submitted per month for at least 3 consecutive months
  - Collect the total events for the number of forms in progress per month for the same time spans as forms submitted
  - For each month, subtract forms submitted from forms started
  - The resulting numbers should give you an indication of how many people are starting the corresponding form, but not finishing it
- DOMO - If a form is in DOMO, this is the best way to assess the need for an In-Progress Notification
  - Navigate to https://va-gov.domo.com/ and login
  - On the left menu, select VA.gov Forms KPIs
  - Below the top nav bar, select form_name in Click to filter
  - Select the form you want to see analytics for
  - Select Choose Date and select a custom time span of at least 3 months
  - View the Forms by status section under the Highlights header
  - Note the number of forms not submitted, the number of forms successful, and the number of forms failed
  - If successful form submissions are significantly less than forms not submitted, you might want to consider proposing an In Progress notification to form owners to remind Veterans to complete their forms and direct them back to where they can do so.
  - If you want more insight into which steps of the form users are not completing, you can scroll further down the page and view the “Completion rate by step” section.
- Google Analytics - If a form you are looking for is not in DOMO, the next best way to assess the need for In Progress Notifications for forms is using Google Analytics.
  - Finding the number of forms submitted
           - Navigate to https://analytics.google.com/analytics/web/#/report-home/a50123418w177519031p176188361
           - On the left menu, select “Behavior”
           - Select Top Events
           - In the Primary Dimension section, select “Event Label”
           - To the right of the search bar, select “Advanced”
           - Include Event Label Containing (number of form you want to get analytics for, Ex: 5490)
           - Note that when searching for a form, it’s important to include the form number found in the URL. (Ex: for 22-5490, the URL of the form only shows 5490, so this is what you would enter)
           - Select Apply
           - In the table, look for the “submission-successful” event (Ex: edu-5490-submission-successful) and note the corresponding number in the “Total Events” column
           - If you are looking for statistics within a date range, on the top right of the page, select the date
           - Input a custom date range
           - Select Apply
           - The table will refresh
- Not in DOMO - Finding the number of forms in progress
           - Navigate to staging.va.gov
           - Login to staging.va.gov 
           - Select ID.me
           - Enter an email and password from: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv (You may need to try a few users since some may have already been used to test the same form)
           - Select Sign In
           - Select Continue
           - Search for the form number you want to look up statistics for in Google Analytics
           - Go to “About” form you are searching for 
           - Select “Go to the online tool” 
           - Select Continue 
           - Select “Start the education application”
           - Note the URL of the first page of the form (Ex: staging.va.gov/education/apply-for-education-benefits/application/5490/applicant/information)
           - Navigate to https://analytics.google.com/analytics/web/#/report-home/a50123418w177519031p176188361
           - On the left menu, select “Behavior”
           - Select Pages
           - In the Primary Dimension section, select “Page”
           - To the right of the search bar, select “Advanced”
           - Include Event Label Containing number of form you want to get analytics for, ex: 5490. (Note that when searching for a form, it’s important to include the form number found in the URL. (Ex: for 22-5490, the URL of the form only shows 5490, so this is what you would enter)
           - Select Apply
           - In the table, look for the URL noted above (Ex:  staging.va.gov/education/apply-for-education-benefits/application/5490/applicant/information), but without “staging” in the URL.  Note the corresponding number in the “Total Events” column
           - If you are looking for statistics within a date range, on the top right of the page, select the date
           - Input a custom date range
           - Select Apply
           - The table will refresh


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
          

