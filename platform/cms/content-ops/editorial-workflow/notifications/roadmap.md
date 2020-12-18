# CMS Notifications framework

## Roadmap

### Release 1.0 (MVP)

_**Notifications framework base and test data to gauge expected notifications volume and iterate on framework design.**_

1. A base framework for responding to the editorial workflow events and subscription tracking mechanisms is established in the Drupal CMS. Notifications framework plugins for the editorial workflow events are functional.
1. The Drupal CMS generates notification records for each workflow state transition event per user, but doesn't send emails (MVP 1.1).  This initial approach offers the following advantages:
   1. ability to test notifications content and type, frequency and design of email templates before rolling out to real users
   1. ability to assess the volume of notifications the Drupal CMS needs to support via VANotify provider
   1. quantitative data is generated to optimize the design of opt-in/out UI and email delivery methods 
1. Flag module is integrated to track per-entity subscriptions.
1. The Drupal CMS does not provide a UI for users to opt-in/out to notifications since we are not sending email at this time.
1. One month into the MVP 1.0 launch, the Drupal CMS team will have an adequate amount of data to assess the expected volume of notifications that the CMS GovDelivery (or other provider) will need to support.
1. Design iteration on per-entity subscription UI.

### Release 1.1 (MVP)

_**Integration with VANotify. UI to un/subscribe per entity. UI Design for an enhanced subscription management.**_

1. Drupal CMS has a sender plugin that integrates with the VANotify API
1. Drupal CMS can utilize VANotify API email templates
1. Relevant email tokens are stored in the Event entity payload property. This info can then be used to form a notification message before it is sent to a user.
1. Research conducted on email consumption/habits by CMS users
1. Design iteration on Editorial Workflow email templates.
1. CMS users receive email notifications for all nodes that they've edited or are subscribed to.
   1. Emails are sent out to users every 15 mins (on Cron runs)
1. CMS users can selectively subscribe to workflow notifications per entity on the entity page
   1. The unsubscribe UI is available per entity on the entity page, which allows the user to opt-out of all notifications for that specific entity.
   1. The unsubscribe link (per entity) is available in all sent out emails.
1. UI is designed to support granular content/event subscriptions (to implement in MVP 1.2)


### Release 1.2

_**Near real-time notifications. Granular subscription management UI available to all users.**_

1. CMS users have a granular UI that allows them to subscribe/unsubscribe to/from editorial workflow notifications per transition / content type / etc as defined in Release 1.1
   1. Link to manage subscription settings is available in all email communications
1. Users receive emails in near real time as events occur
   1. Task runner is implemented to support near real-time notifications
   1. Real time definition will depend on the VANotify API’s capabilities.
1. Notifications usability research cycle

### Release 1.3

TBD
