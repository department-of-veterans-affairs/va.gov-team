# Secure Messaging Notification Preference Migration

This document discusses how email notification preferences for the MHV secure messaging (SM) will work in the context of migrating MHV functionality to VA.gov

## Current State

1. MHV issues optional email notifications when a veteran receives a secure message.
2. Users can set their notification preference by specifying an email address and a notification frequency {none, every message, once daily}. 
3. The notification preference for secure messages is distinct from that for prescriptions - users could specify a different email address for each notification type.
4. The notification preference is stored within MHV's database, not currently pushed to any other VA system. MHV issues the email notifications from its backend via (unknown email sending service).
5. The SM API for interacting with messages/folders/etc also provides a resource for fetching and updating notification preferences. 

## Future State

There are a number of moving pieces related to how secure messaging itself is implemented, how notifications are issued, and how notification preferences are managed:

* The frontend of secure messaging is migrating to VA.gov. The backend system for processing and storing messages will remain intact.
* Along with the above, MHV will no longer present user-facing management of profile or preference information - that will migrate to VA.gov as well. 
* VA is consolidating backend management of user contact information and notification preferences in VA Profile. Secure messaging notification preferences falls in this category.
* VA is consolidating responsibility for issuing user notifications in VA Notify. VA Notify and VA Profile will be integrated so that user's preferences are used when issuing notifications. 

Added together, this means the likely end state for secure messaging is as follows:

1. Users interact with secure messaging features on VA.gov.
2. Users manage their notification preferences via the profile page on VA.gov, and those preferences are stored in VA Profile.
3. The MHV messaging backend triggers notifications by invoking VA Notify.
4. VA Notify resolves the users notification preferences from VA Profile, and issues the relevant notification (email, SMS, mobile push, etc). 

### Additional Details

A couple salient details

1. The preferred approach for using VA Notify is for a system to trigger a notification for a user identifier (e.g. an ICN), and then VA Notify resolves that to a specific contact channel (e.g. email address). However, VA Notify does support a mode where a notification can be triggered directly to an email address. 
2. VA Profile's contact preferences are likely less granular than MHV's. Most likely they will support one email address for a user, and then allow varying contact preferences (email/SMS/none) for different notification channels/types. At present MHV users can potentially set different email address preferences for SM vs. prescriptions, and can also opt for a once-daily notification instead of per-message notifications. 


## Migration Path

Given the above, how do we get from point A to point B? What order of changes will allow notification functionality to continue uninterrupted but get us to the desired end state?

### Scenarios

1. **MHV continues issuing notifications, move preference UX to VA.gov**<br/>
Keep status quo on the backend, but relocate the preference setting to VA.gov. VA.gov would use the existing MHV notification preference API to make updates requested by the user. This will involve some one-off development of a notification preference setting that interacts with the MHV API instead of VA Profile's API.

2. **MHV adopts VANotify for issuing notifications, specifies email address**<br/>
Combine with the above - continue to manage notification preferences in MHV, via VA.gov frontend. But transition MHV to issuing notifications via VA Notify by specifying a direct recipient. Don't rely on VA Profile preferences. 

3. **Migrate preferences to VA Profile**<br/>
Ideally this should only happen after VA Notify is adopted for issuing notifications. If this happens while MHV is still issuing notifications, then MHV needs a mechanism to fetch the preference from VA Profile - either through vets-api, or directly from VA Profile's API.  

### Migration/Change Management

* It's unlikely we'll be able to do any bulk migration of notification preferences from MHV into VA Profile. It's not reasonable to overwrite the user's VA Profile email address with one from MHV without knowing the provenance of those two data fields. At most we could migrate the notification opt in/out state, but even that seems risky in cases where the email address differs (users start getting SM notifications at a different address without warning). More likely we'll need to have users explicitly confirm their notification preference. 
* Given that, we most likely need an indicator of when users have confirmed/updated their notification preference in VA Profile for SM. That indicator needs to be available to the MHV backend so it can determine whether to keep sending notifications to the MHV-originated email address, or to send via VA Notify+VA Profile. 
  * One option would be to set a reserved value like `migrated@example.com` in the MHV notification preference field. If MHV observes this value, they would know that notification preferences are migrated for this user.
  * Alternatively, if VA Profile returns a null value that indicates a preference is un-set, then MHV could consume this field, but would need to do a net-new integration with VA Profile. 
