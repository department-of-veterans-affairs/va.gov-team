# Prescription Notifications Sync
September 14, 2023

**Jump to:**
- [Definitions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/meeting-notes/2023-09-14-rx-notification-sync.md#definitions)
- [Known differences between text and email RX shipping notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/meeting-notes/2023-09-14-rx-notification-sync.md#known-differences-between-text-and-email-rx-shipping-notifications)
- [Email notification details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/meeting-notes/2023-09-14-rx-notification-sync.md#email-notification-details)
- [Next steps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/meeting-notes/2023-09-14-rx-notification-sync.md#next-steps)

## Background
### Agenda
Clarify questions ([Slack thread](https://dsva.slack.com/archives/C909ZG2BB/p1693921206330489)) regarding differences between text and email notifications for RX shipping notifications, in preparation for the migration of My HealtheVet (MHV) to VA.gov
### Attendees
- VA Authenticated Experience team members: Samara Strauss, Travis Cahill, Adam Whitlock, Pam Drouin, and Liz Lantz
- VA Notify team members: Beverly Nelson, Melanie Jones


## Meeting notes

### Definitions
#### CMOP  
- stands for Consolidated Mail Order Pharmacy
- This is a separate entity within VA that only handles mail order prescriptions
- Email notifications for prescriptions shipped through CMOP are available to MHV users who have opted-in

#### Local pharmacy
- Physical pharmacy in a VA Medical facility (VAMC)
- Prescriptions are filled in person OR shipped out from these
- About 33% of these pharmacies participate in VetText’s text notifications, meaning a veteran can elect to get a text message when their Rx is shipped
- Notifications for

**Default send**
- Default send refers to whether or not a notification is sent with implicit permission from the user
- Implicit permission is collected through a relevant VA process, like submitting an application for health care or filing for a BVA appeal.
- The VA Profile API has a “default send indicator” property with `true` and `false` values for each notification item

### Known differences between text and email RX shipping notifications
This table reflects current information as of 9/14/2023
| Notification channel | Default send | Sent if RX is filled locally     | Sent if RX is filled through CMOP | Available ONLY if there is an associated VA user account (MHV or VA.gov) | Where can users manage permissions? |
|----------------------|--------------|----------------------------------|-----------------------------------|--------------------------------------------------------------|-------------------------------------|
| Text                 | yes          | yes, for about 33% of facilities | no                                | no                                                           | VA.gov                              |
| Email                | no           | no                               | Yes                               | yes                                                          | MHV                                 |

**Note:** The overall goal is that any Veteran, with any Rx could get notification by text OR email.  How we get there is still TBD and likely not going to be solved in the near term.

### Email notification details
- Current plan is to seed VA Profile data with what they have from MHV right now
- Sounds like there is flexibility with how we get to the final state of displaying all MHV email notifications
- We discussed two MVP approaches: 
  - update the notification item name to reflect where the notification is coming from, but that relies on the Veteran having a clear understanding of where their Rx is coming from (CMOP vs local)
  - Rely on the help text to communicate the differences to users

## Next steps
### Answer outstanding questions
1. Is it clear to Veterans if their prescription is coming from CMOP or a local facility? *Beverly to clarify with Shane*
2. How can we reconcile the discrepancy between default send values between text and email channels, without over notifying the Veteran? *Beverly, Samara, Shane, and Kay*

### Implement feature toggles
The authenticated experience team will leverage feature toggles for each email notification so we have ultimate flexibility with displaying and hiding notification items as needed to support the migration of MHV notifications


## Additional items learned after this meeting 
We originally believe there was a cost to leveraging the text features, there in fact is not. [See this thread
](https://dsva.slack.com/archives/C010R6AUPHT/p1718202532112719?thread_ts=1716464232.905489&cid=C010R6AUPHT)
