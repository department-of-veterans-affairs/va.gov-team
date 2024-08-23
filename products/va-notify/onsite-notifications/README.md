# Onsite Notifications
Launched to 100% of VA.gov users on 10/24/2022 and disabled on 10/31/2023

## Points of Contact

[#accountexp-authexp](https://dsva.slack.com/archives/C909ZG2BB)

|Name|Role|Team|
|----|----|----|
|Tom Harrison|Engineer|Authenticated Experience|
|Anastasia Jakabcin|Product Manager|Authenticated Experience|
|Samara Strauss|VA PO|Authenticated Experience and Profile|

## Value Statement

**As a** veteran<br>
**I want to** see an alert in My VA when I have a new debt<br>
**So that** I can be reminded of what I need to do and navigate directly to my destination<br>

The dashboard (My VA) is meant to be the source of truth for veteran goals and actions. VA Notify provides action-oriented notifications for veterans. If va.gov is unaware of an action and a notification for this action is present in VA Notify, the goal is to pass this along as an onsite notification, so the veteran's dashboard reflects what they are being told through other notification channels.

## Desired Outcome

Veteran can more easily find and manage their debts (and other use cases in the future).

## Why Veterans Want This
[My VA's Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications)
- This helps to surface all relevant tasks, jobs, or actions.
- The more complete a profile becomes, the better the dashboard represents the things a veteran can/ should/ ought to do in regards to VA benefits and services.

## MVP Overview
We will implement this first version with DMC's existing debt notification.

### Requirements
- A notification must be sent through VA Notify to trigger the onsite notification.
- Email or SMS templates will support onsite notifications for MVP. However, if a use case has both, we will go with the email template.
- The notification trigger must send a veteran identifier, so we can provide VA Profile ID to va.gov. This means we would look up the contact information for the use case.
- The veteran cannot be deceased.
- Onsite notifications will be sent regardless of communication preference and message status.


![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/images/onsite-notification.png)

### Workflow Overview
- Business line triggers a new debt notification by calling the VA Notify API
    - person identifier used in request?
        If no, do not send an onsite notification
- We check if the template is enabled with onsite
    - False?
        - If yes, do not send an onsite notification
- VA Notify begins the person lookup in MPI
    - Deceased?
        - If yes, do not send an onsite notification
        - If yes, do not proceed with the email/SMS notification
    - VA Profile ID?
        - If no, do not send an onsite notification
        - If no, do not proceed with the email/SMS notification
- **VA Notify sends the onsite notification to va.gov**
- VA Notify takes the VA Profile ID found in MPI and begins its check in VA Profile
    - Opt-in
        - If there is no communication item for this notification proceed to the next check
    - Implicit Consent
        - Opted-out?
            - If yes, do not proceed with the email/SMS notification
    - Explicit Consent
        - Opted-in?
            - If no, do not proceed with the email/SMS notification
    - Contact info
        - If no contact info is found, do not proceed with the email/SMS notification
### Technical Overview

- When a notification with onsite_notification enabled is triggered, VA Notify will call the vets-api for the onsite notification endpoint: /v0/onsite_notifications with template_id and va_profile_id
- va.gov is using the VA Notify template_id to determine what onsite notification to display in the site

### Out of Scope
- An intake process and timeline for future onsite notifications
- Enabling onsite notifications via the Self Service UI
- Onsite Sent Statistics in the Self Service UI
- Other notification channels (i.e. push)
- Retry process

### Measuring Success
- Analytics Page here: https://analytics.google.com/analytics/web/#/dashboard/MALmun-7S7WXBNKxUrQ39g/a50123418w177519031p184624291/_u.dateOption=last7days/
- AE will be tracking link clicks to the debt page
- AE will be tracking the # of dismisses

