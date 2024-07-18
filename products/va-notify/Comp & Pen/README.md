# Comp & Pen, Disability and Pension Payment Notifications

Notifications are live as of August 2024. The notification setting on VA.gov was enabled on July 17, 2024. The Q&A on the payment history page was launched on July XX, 2024.

## Overview
About 7 million Veterans receive recurring disability or pension payments. An average of 35,000 calls a month come into the call center for payments and debts. Often, Veterans have questions about if and when they will be receiving payments.  

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
1. VBA Comp and Pen team is unable to trigger payment notifications because they do not have an integration with the financial system processing these payment events.
2. Each month a batch of 7 million payments events will be processed by VA Notify, however, only a fraction of them result in an SMS notification based on the Veteran's opt in status. Due to the volume, we need to efficiently determine these notifiable events without having to look up all 7 million every month.

## Key Features and Integrations
- [Live 11/15/2022] In partnership with VA Profile we are creating a communication item (opt-in) sync to push updates to VA Notify. This is currently only used for the Comp & Pen preference so we can reduce the amount of calls to VA profile and MPI monthly to only those who have opted-in. When processing the monthly batch of payment events we will first check our opt-in cache to determine if a notification is needed.
- [Live 4/10/2024] In partnership with Benefits Integration Platform team (BIP) we are consuming payment events from their kafka event bus. VA Notify consumes all payment events, filters down to the recurring payment event, and determines if these applicable events have an associated opt in.
- [Live June 2024] In partnership with MPI, VA Notify prepares an opt in cache prior to each monthly payment processing event by mapping opt ins to the applicable beneficiary identifier, which will be found in the payment event received from BIP.
- [Live August 2024] VA Notify sends texts during courtesy hours each month to avoid disturbing the Veteran too early or late in the day. Because we do not know the recipient's timezone, we've established a time window that will support Hawaii through Eastern timezones: 1pm - 9pm ET. Each month, texts will start sending on the 22nd. If there are too many notifiable events to send all texts in a single day, VA Notify will continue sending texts during the courtesy hours until the end of the month. The financial system processes recurring payments on varying days each month and the schedule may vary year to year. The payment processing dates appears to range from the 15th to the 21st, which is why we don't start sending texts until the 22nd. 
- [Live 7/XX/2024] CAIA published a Q&A for this new feature with guidance on opt in here: https://www.va.gov/va-payment-history/

## Potential Future Ideas
- Additional Payment Type Notifications
- Opt in confirmation texts with conditional guidance on when they will begin receiving texts

## Launch Activites
- [x] VA Notify to test workflow with Production Data, notifications disabled at this point
- [x] VA Notify reach out to VA.gov Profile team and VA Profile to enable comp and pen preference in VA.gov notifications settings - **Launched 7/17/2024**
- [x] Align timing with the preference go-live date. VA Notify reach out to CAIA team to add opt-in messaging to payments page.  See this [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77798)
- [x] 10DLC approved and assigned
- [x] Short code approved and assigned
- [x] Check with Customer Support on what they might need in case Veterans call with questions. [Slack thread](https://dsva.slack.com/archives/CNCEXNXK4/p1710358048345799)
