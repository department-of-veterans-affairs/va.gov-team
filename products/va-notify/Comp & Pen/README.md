# Comp & Pen, Disability and Pension Payment Notifications (WIP)

## Overview
7 million Veterans receive recurring disability or pension payments. An average of 35,000 calls a month come into the call center for payments and debts. Often, Veterans have questions about if and when they will be receiving payments.  

## Desired Outcome
Increase proactive communication to Veterans via SMS, so they know when to expect payments. This should reduce calls to the call center.  

## Problems
1. The business line (VBA) is unable to trigger these notifications because there's a separate system managing the payment data.
2. Each month a batch of 7 million payments will trigger notification requests, however, only a fraction of that will receive SMS notifications based on explicit opt-in.  

## Solutions
1. In partnership with the Benefits Integration Administration group (BIA/BIP Solutions) we are creating a notification trigger workflow powered by Kafka. See requirements below:
    1. https://community.max.gov/display/VAExternal/BIA-CK101+-+Kafka+Solution+Requirements+-+VA+Notify
    2. https://community.max.gov/display/VAExternal/BIA-CK102+-+Kafka+Intake+Worksheet+-+VA+Notify

2. In partnership with VA Profile we are creating a communication item (opt-in) sync. This is used only for the Comp & Pen preference so we can reduce the amount of calls to VA profile monthly to only those who have opted-in.

## Future enhancements
There are also one-time/retroactive payments that may warrant a confirmation notification.
