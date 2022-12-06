# Notification Preferences Security Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
[Notification preferences product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md#communications-permissions-notification-preferences-product-outline)

## Routes to code
[Notification preferences Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18071)

## Contacts

### Team Members:
- DSVA Product Lead: Samara Strauss, samara.strauss@va.gov
- Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us


### Outage Contacts:
- Authenticated Experience team Frontend engineer: Erik Hansen, erik@adhocteam.us 
- Authenticated Experience team Backend engineer : Lihan Li, lihan@adhocteam.us
- VA Notify Product Manager: Maria Becker, maria.becker@thoughtworks.com
- Vetext Product Manager: Paras Shah, paras@docme360.com or paras.shah3@va.gov
- VA Profile PMO: Mike Richard, michael.richard2@va.gov


## Troubleshooting

### Errors and Metrics
Backend errors are logged in sentry tagged with `controller_name: communication_preferences`  
Statsd logs have the `api.va_profile` prefix

### Issue investigation steps
- The VA profile team can be reached in the #va-profile slack channel if there are errors with the VA profile API.

### Flipper Features and Rollback
- The `profile_notification_settings` flipper can be used to turn on or off the notification settings page.

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
