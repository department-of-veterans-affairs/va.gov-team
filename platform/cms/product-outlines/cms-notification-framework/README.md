# The CMS Notification Framework

## Problem statement

The demand for messaging about various events within the Drupal CMS is increasing as the CMS team enhances existing and adds new functionality.

The Drupal CMS OOTB messaging capability is currently very limited in function and only covers standard user account messaging, such as account creation or password reset.

The Drupal CMS needs a scalable, flexible and reliable messaging framework that can support multiple types of notifications and messaging channels.

## Hypothesis

* We believe that if we design and engineer a scalable notifications framework within Drupal CMS, we will be able to:
significantly improve time to market for any new functionality that depends on or could use timely notifications.
increase user satisfaction with editorial workflow.

## Definition of Done

* The Drupal CMS can identify configurable events when they occur, record events in a dedicated log and dispatch / track email notifications for an initial set of prioritized events to relevant users.

## Known Blockers/Dependencies

* The integration with VANotify is crucial to ensure reliable email delivery service.
    * The Drupal CMS can currently send basic emails related to new account creation/password reset, but the delivery is limited to `@va.gov` domain. 
   * Our goal is not to open delivery to domains outside `@va.gov`, but create a platform which can reliably handle the volume of notifications dictated by the steady growth of the CMS user base.

## User Stories

As a CMS user, I want to be able to receive notifications when events concerning my work happen.

As a CMS user, I want to be able to receive notifications when events concerning CMS tools that support my work happen.

As a CMS engineer, I need to have a scalable back-end framework that allows me to build and expand CMS notifications functionality.

## Related Backlog

[The CMS Notifications Framework](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/3155)
