# Feature Reference - Community Care Direct Scheduling 

## Overview
This feature allows Veterans to directly schedule a community care appointment when they have indicated their preference is to directly schedule.
 
## User stories

As a Veteran, I would like to schedule my community care appointment myself so that I don't have to go through a VA scheduler.

## Requirements

**Functional**

Use Case 1 - Veteran Receives a Link to Schedule their Appointment
- Veteran clicks the link that they received for a new approved referral
- Veteran logs into VA.gov
- Veterans sees their appointments and is prompted to scheule an appointment for a new approved referral (content and link)
- Veteran chooses to the referral details and start scheduling
- Veteran views details for the referral
- Veteran chooses to schedule an appointment
- Veteran sees the drive time to the provider associated with the referral 
- Veteran chooses a date and time for the appointment
- Veteran reviews the appointment information and confirms the appointment
- Veteran sees their appointment details
    
Use Case 2 - Veteran Logs into VA.gov to Schedule their Appointment
- Veteran logs into VA.gov
- Veterans sees their appointments and is prompted to review their requests and referrals
- Veteran views their referrals
- Veteran chooses to schedule an appointment for an active referral
- Veteran sees the drive time to the provider associated with the referral 
- Veteran chooses a date and time for the appointment
- Veteran reviews the appointment information and confirms the appointment
- Veteran sees their appointment details

### Technical notes
   
## Specifications

- [Userflow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2&node-type=canvas&t=LiHZZTWFuTyHRAZk-0)
- [Wireframes](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=2490-44318&node-type=canvas&t=mCEHUfLmEffXZ0jD-0)

## Metrics
- Number of Veterans who choose to directly schedule their community care appointment
    - Click events for "Go to your referral details to start scheduling" link on "Appoiuntments" page    
    - Click events for "Schedule your appointment" on "Referral for" page
    - Click events for "Schedule your appointment" on "Referrals and requests" page
    - Click events for "Continue" on "Schedule an appointment with your provider" page
    - Click events for "Confirm" on "Review your appointment details" page

## Technical design
[Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/community-care-technical-documentation.md)

