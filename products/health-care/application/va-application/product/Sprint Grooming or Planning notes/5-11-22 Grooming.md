# May 11, 2022 HEC Bi-weekly Health Care application update

**PTO/Holidays next sprint**
- Memorial Holiday: 5/30
- Matt: 5/18 - 23, 5/26-30


#### Short Form
- Ticket [#41239](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/41239) for research (Lisa/Matt) on adding a feature flag, so that we can release carefully, and perform UAT
>**Comment from Patrick:**
>@Lisa and @Matt, this would probably break way too many rules and minds, but one way of possibly making the flagging easier is to clone the application so you have two stand alone 1010 apps, one in current form and one with all the changes, then using flagging at the routing level. Which is obv more complicated than it sounds, but I believe it is something we did on a COVID form recently.
- Usability tests ready
- Prototype almost ready
#### Check Box - CG for Primary CG address same as Veteran
- Secondary too? Good Idea!
- Accessibility discussions
- Next sprint continues conversations
#### Medicare number
- FE changes are next
#### New forms design system!!  Looking for pilots
- Can we pilot CG form?
- Heather will set up demo with Karen
#### Issues with User Data
- Data from Identity has 'null' or missing information (Name, DOB, SSN)
     - Requires FE and BE changes
     - BE Ticket [#41193](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41193)
     - FE Ticket [#41225](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41225)
     - Ex: Form errors out if no DOB data (needs to be filled in on FE)
     - Recommend not having static page, fields to fill out
          - Need to have a check for the data
          - Need to show fields to complete when check fields
>**Comment from Patrick:**
>User logs in ---> null values for key fields ---> message to user, “We're sorry, we couldn't prefill this form for you." ---> Treat them as a logged out user / anonymous user.
     - FE Logging added today
          - Logging if:
               - Veteran is logged in
               - Name, SSN or DOB are showing Undefined/Null
- Another issue with logged-out applicants (FE)
     - Backend says logged out, missing name, ssn, dob
          - Requires more research to determine cause
          - FE Ticket [#41232](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41232)

#### In-Progress email reminders
- Why cant VA Notify get the saved in progress email addresses and send the reminder to both App email address and Profile email address?
#### 10-10EZR
- Question: Does the EZR application updates the email address within the profile?
     - Will need to do additional research on the form and how the information is used
     - For additional EZR context, see the [Bi-weekly meeting notes from 5/11/2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/Bi-weekly%20Stakeholder%20Mtg%20notes/5-11-22%20HEC%20Bi-weekly%20Health%20Care%20application%20update.md)




