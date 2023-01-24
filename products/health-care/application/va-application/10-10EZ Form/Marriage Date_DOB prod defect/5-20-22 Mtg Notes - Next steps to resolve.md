# May 20, 2022 - Team discussion with Lisa, guest starring Jesse Cohn


Production error began 4/5/2022 - [Ticket #40039](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/40039)

<details>
  <Summary>Details of Production Defect</Summary>

>## What happened?
>Veterans are complaining that they receive an error when they are filling out the online 10-10EZ application form. When filling in spouses DOB and marriage date it kicks back the date saying it is invalid. The error code that comes up reads that the marriage date is before the date of birth. The above error is being thrown at this block of ```vets-website``` [code here](https://github.com/department-of-veterans-affairs/vets-website/blob/ae3d33359eeea88929348a268b7921bf80b81bb2/src/applications/hca/validation.js#L55-L73). 
>
>We are hearing of approx 100 reports of this issue. 
>For additional details, notes and related tasks, see [Ticket #40039](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/40039)
  
We have since removed date validation so that applications can be submitted.  We have been unable to reproduce the issue ourselves.
  
</details>

### Steps we will take to work toward resolving the defect
- Change source of condition, to show authenticated user static page, to currentlyLoggedin instead of hasSession - [ticket #41339](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/41339)
- Change source of condition, to show unauthenticated name, dob & ssn pages, to currentlyLoggedin instead of hasSession - Same [ticket #41339](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/41339)
- Change source of data, on authenticated static page, to user profile data instead of prefill data. - [ticket #41900](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41900)
- Change authenticated static page to show name and dob, and not show ssn, ssn is not included in user profile data. - [ticket #41901](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41901)
- Do not display dob on static page if profile dob does not have a value - [ticket #41903](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41903)
     - Name will be the only thing to appear on static page
     - Display date of birth page for user to input
- Display a message on static page if profile veteran name does not have a value, like "we are experiencing issue please try again later."  - **NOT NEEDED (discussed during grooming 5/25)**
     - Dene to assist with message
     - We will not stop the applicant from moving past the page or submitting the application
- Remove validations with dob, provide message on page instead, for the following: [ticket #41904](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41904)
     - validateServiceDates - **WE WILL NOT TOUCH THIS VALIDATION**
     - validateMarriageDate - **DENE' & LISA WILL WORK ON THIS**
- Make changes on backend to support the above. - **CHANGES ALREADY MADE**
- Confirm users are not experiencing issues around submitting as a result of veteran name, dob and ssn. -**NO TICKET NEEDED AT THIS TIME (continue to monitor for errors)**
- Close Error on 1010EZ: Marriage Date and Spouse DOB [#40039](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/40039) - **THIS IS DONE**
- Add logging in google analytics, sentry api and datadog to monitor - **NO OTHER MONITORING NEEDED**
