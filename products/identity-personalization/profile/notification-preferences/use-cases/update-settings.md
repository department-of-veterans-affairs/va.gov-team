# Notification settings: User wants to update notification settings

**Last updated: December 1, 2022**

LOA3 users who sign in, go to the profile, and click into the notification settings page will be able to opt in or out of notifications available to them.

## UX
* Users will see some notification preferences based on their benefits (e.g. health care preferences). Other notifications are available for all users (e.g. Appeals notifications).  
* We display the contact information where notifications will be sent at the top of the page, along with a link to update that information.
* Users can choose between “notify” or “don’t notify” for each notification.
* [Desktop mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/09JgE8y)
* [Mobile mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/4a8b4xJ)

### Saving and editing notification settings
* The form is an auto-save form, so it doesn’t have an update or cancel button
* The [input message component](https://design.va.gov/components/form/input-message) displays a success or error message, depending on the outcome of the update
* A loading indicator displays while the setting is updated
* [Save state](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/4a8b4xJ)
* [Error state](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/agYwb1P)


## Codes
N/A

## How to reproduce
### Common use cases
1. Go to staging.va.gov/profile/notification-settings
2. Login with vets.gov.user+41 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
3. You can update the notifications that are set to see the update or error message. To trigger the error message, disconnect your device from wi-fi before you change the radio input.

### Specific notifications
Use the [staging test accounts document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences.md) to check specific notification groups (Health care, Applications, claims, decision reviews, and appeals, etc).
