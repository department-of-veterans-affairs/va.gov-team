# MHV Preferences on VA.gov - Technical Approach

Created: 2023-04-03

This document is intended to capture knowledge related to the migration and merging of preferences from MHV Classic into the MHV-on-VA.gov experience.

A preference, or setting, represents a choice that a Veteran has about how certain features of VA.gov should function for them. This is different from a profile, which is a collection of information about a Veteran that may be used to enable functionality. Sometimes a piece of profile information can be used to set a preference, like using a profile email address to sign up for notifications. Account and authorization information is also a separate concern. However, preferences, profile information and authorization information could all be present in a single view.

## Existing MHV Preferences

_This should be replaced with a reference to or copy of the spreadsheet that UX/Product is assembling_.

| MHV Pref | VA.gov Equiv | Description | Notes |
| - | - | - | - |
| New Secure Message Notifications |  | An on/off selection with an email address |  SM work is in progress. A preference that could use profile info (email) |
| Signature Settings |  | Signature "Name", "Title", and "Include Outgoing Signature" | Appears to be like an email signature... Unsure of utility |
| Message Display Settings |  | Controls which messages are displayed by limiting based on message age | SM should be able to do a page/cursor query to get batches of messages, newest first |
| My Secure Messaging List |  | List of Name and yes/no pairs | Enables Veterans to send messages to selections of groups. Current implementation like having entire contact list put on `to:` field of email by default. |
| My VA Treating Facilities |  | Checklist of VAMC locations. | On "Profile Information" page on MHV Classic. List may be restricted to locations where Veteran has had an appointment? |
| Subscribe to Email Notifications and Reminders | VA.gov Notify? | List of on/off toggles for emails on Rx Refill, appointment reminder, Bi-weekly email newsletter, etc. | Unclear if newsletter is same one managed via GovDelivery (would need API to sub/unsub). Appointment reminders would be VAOS-related. This is where other teams are leading efforts |
| My HealtheVet Welcome Bar – How would you like to be addressed |  | Personalizes MHV Classic welcome bar | Free text, so could be anything: name, rank, etc |
|  My HealtheVet Welcome Bar – Which Military Branches |  | Personalizes MHV Classic welcome bar | VA should have service branches, but this allows user to make selections |
| SM Manage Folders |  | SM App setting. Allows user to CRUD folders to store messages | More application-specific than others? |
|  |  |  |  |
|  |  |  |  |
     