# Comp & Pen, Disability and Pension Payment Notifications (WIP)

## Overview
7 million Veterans receive recurring disability or pension payments. An average of 35,000 calls a month come into the call center for payments and debts. Often, Veterans have questions about if and when they will be receiving payments.  

## Desired Outcome
Increase proactive communication to Veterans via SMS, so they know when to expect payments. This should reduce calls to the call center.

## User Stories
As a Veteran
I want to know when my disability or pension payment is going to be deposited in my account
So that I can ensure I'm receiving my payment and do not need to call the VA

As the VBA business for Comp & Pen
I want to send Veterans an SMS notification about their upcoming payment
So that we reduce the amount of calls to the call center and improve the Veteran experience

## Notification Channel
SMS only

## Opt-in Strategy
The preference is in VA.gov and will be an explicit opt-in, which means we will only send notifications to those who explicitly ask to receive text messages. If the preference is blank or false (opted-out) we will not send a text message.

Prior to launch VBA will release a promotional campaign with a combination of the following:
- GovDelivery blast
- Phone script when folks call in for help
- Social media posts

## Problems
1. The business line (VBA) is unable to trigger these notifications because there's a separate system managing the payment data.
2. Each month a batch of 7 million payments will trigger notification requests, however, only a fraction of that will receive SMS notifications based on explicit opt-in.  

## Solutions
1. [Integration coming in 2023] In partnership with the Benefits Integration Administration group (BIA/BIP Solutions) we are creating a notification trigger workflow powered by Kafka. See requirements below:
    1. https://community.max.gov/display/VAExternal/BIA-CK101+-+Kafka+Solution+Requirements+-+VA+Notify
    2. https://community.max.gov/display/VAExternal/BIA-CK102+-+Kafka+Intake+Worksheet+-+VA+Notify

2. [Live 11/15/22] In partnership with VA Profile we are creating a communication item (opt-in) sync. This is currently only used for the Comp & Pen preference so we can reduce the amount of calls to VA profile monthly to only those who have opted-in. When processing the monthly batch of payment events we will first check our opt-in cache to determine if a notification is needed.

## Future enhancements
There are also one-time/retroactive payments that may warrant a confirmation notification.

## Launch Activites
- [ ] VA Notify to test workflow with Production Data, notifications disabled at this point
- [ ] VA Notify reach out to VA.gov Profile team and VA Profile to enable comp and pen preference in VA.gov notifications settings
- [ ] Align timing with the preference go-live date. VA Notify reach out to CAIA team to add opt-in messaging to payments page.  See this [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77798)
- [ ] 10DLC approved and assigned
- [ ] Short code approved and assigned
