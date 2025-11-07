# Email Verification (mobile) Product Brief

## Overview

To create a [VA.gov](http://VA.gov) account, Veterans must first enter an email address and verify their identity. Their email address is necessary if they log in to their account through [ID.me](http://ID.me) or [Login.gov](http://Login.gov). The email address that a Veteran uses to set up their account is then used for important communications from the VA. 

Currently, there is no verification process on the web and the VAHB app to ensure that, over time, the email address is valid and being monitored by the user. Veterans with stale email addresses can lead to reduced engagement, and the VA is unable to ensure that they are properly communicating with that user. 

As of July 2025, the Authenticated Experience team is working to implement an email verification process on [VA.gov](http://VA.gov). They will require the Veteran’s email address stored in [VA.gov](http://VA.gov) Profile to be verified once a year. After this is created on the web, we will need to integrate it with the email verification process on the VAHB mobile app, ensuring that VAHB has the most up-to-date email addresses.   

## Problem Statement

The VA wants to ensure that important email communications reach Veterans on the mobile app. How might we ensure that the email address a Veteran actively uses is the email address on file within the mobile app and that Veterans are aware of which email address is receiving VA communications from the VAHB app?  

## Desired User Outcomes

* Users understand which email addresses are receiving important VA communications and can update them if the email addresses have become stale.   
* The user experience for validating and confirming the correct email address is straightforward and aligns with industry standards. 

## Desired Business Outcomes

* Email addresses stored in the Profile section of the VAHB app are required, validated, and confirmed as accurate by the user at least once a year.  
* The VAHB Mobile App has affinity with the web experience.

## Measuring Success

### Key Performance Indicators (KPIs)

* The total number of notifications that will alert Veterans to verify their email address on the mobile app.   
* The total number of Veterans who verify the email address that is listed is accurate on the mobile app.  
* The total number of Veterans who have updated their email address to a different address than the one originally listed on the mobile app. 

### Supporting OCTO OKRs:

1.3: 100% of our transactions received via our digital experiences are either processed correctly or we have notified the user of an error.   
2.2: We have reduced the total error rates in our platform by 50% compared to Q4 2024 towards a goal of less than 1% per endpoint. 

## Assumptions

* We assume that all background research and direction completed by the Authenticated Experience team is accurate.

## Important Notes/Decisions/Background

* The Authenticated Experience team is creating an email verification process for [VA.gov](http://VA.gov). The Mobile Feature Support (MFS) team will be responsible for implementing the email verification process on the mobile app. TBD on when this will be implemented on [VA.gov](http://VA.gov).
* The email confirmation enrty point include:
  * Initial Launch (TBD on release, but Authenticated Experience is aiming for FY26Q1)
  * Annual reminder (this annual reminder is sent a year from when the user verified their email)
  * When a user adds a new contact email
* The VA Mobile App team is currently working on an initiative that prompts the Veteran to update or add an email in their profile for Veterans who haven't updated or confirmed their email since March 1, 2025. The MHV email confirmation is planned to be removed by the end of the year (2025), but the timeline could be impacted by the shutdown.
* Figma [file](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22740&t=xAGgVx41WfMhNxVP-0) for VA.gov email confirmation flow. 
 
## VAHB Email Confirmation Feature MVP

* To avoid causing Veteran confusion, we won't turn this feature on in the app until the MHV email confirmation alert has been turned off.
  * The MHV email confirmation is planned to be removed by the end of the year (2025), but the timeline could be impacted by the shutdown.
* The email confirmation entry point includes:
  * Initial Launch (TBD on release, but Authenticated Experience is aiming for FY26Q1)
  * Annual reminder (this annual reminder is sent a year from when the user verified their email)
  * When a user adds a new contact email (this would be prompted immediately when a user added a new email)
* Contact email alerts (**these alerts will need to align with mobile formatting and standards**): 
  * Contact email not confirmed
  * Contact email confirmed 
* Alerts will follow the same pattern that the VA Mobile app team has established and be displayed within the following locations of the VAHB app:
  * Home page
  * Profile
* The following alerts will be included (**these alerts will need to align with mobile formatting and standards**):
  * Resend contact email confirmation link
  * Temporary email send failure
  * Permanent email send failure
  * Email confirmation link resent
* VAHB will utilize the same emails that the Authenticated Experience team creates. These include emails for user updates or adds a contact email address:
  * Confirm your email address
  * Email address confirmed
  * Contact email changed, no confirmation required
* VAHB will utilize the same emails that the Authenticated Experience team creates. This includes the initial launch and annual reminder
  * Confirm your email address (initial launch)
* VAHB will direct users to the shared landing pages that are being built by the Authenticated Experience team. A user will get an email with a link, if they clink on the link from their email on their mobile device then it would take them to a landing page on VA.gov using their default browser. These landing pages include: 
  * Email confirmation success page
  * Email confirmation expired linking page
  * Email already confirmed web page  

## Out of scope for VAHB Email Confirmation

* We will not include the alert within the notification settings of the VAHB app.
* Interstitials will not be included on the app.
* Push notifications to a user. 

## Solution Approach
 
* The email verification user flow on the mobile app will align with the web user flow, so that this does not cause confusion for users.
* Veterans will only see an alert to confirm their email if their login email does not match their email within the profile section of the app. This check will happen on the backend so that it is not disruptive to Veterans with matching emails.
* If a Veteran confirms their email on VA.gov, this confirms a Veteran's email on VAHB; therefore, the alert will be dismissed on the VAHB. The same applies if a Veteran confirms their email through the email confirmation process on the mobile app, it will verify on VA.gov, and a Veteran would not see any additional alerts.
* The mobile app will use the same landing pages as VA.gov, and will be developed by the Authenticated Experience team.  

## Reference Materials

### Communications

<details>
  
- Team Name: Mobile Feature Support  
- Slack channel: \#mobile-feature-support-public   
- Product POCs:  
  - Michelle Middaugh, VA Product Owner, Mobile Feature Support  
  - Ryan Thurlwell, VA Lead, VA Mobile App  
  - Chante Lantos-Swett, VA Product Owner, Authenticated Experience

</details> 

## Stakeholders 

#### Team Members

<details>  
   
 - DEPO Lead: Michelle Middaugh 
 - PM: Natalie Gibbons  
 - Engineering: Dave Formanek 
 - Research: Emily DeWan
 - Design: Natasha Huckleberry
