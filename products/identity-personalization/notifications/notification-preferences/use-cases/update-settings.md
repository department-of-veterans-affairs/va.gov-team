# Notification settings: User wants to update notification settings

**Last updated: August 22, 2022**

LOA3 users who sign in, go to the profile, and click into the notification settings page will be able to opt in or out of notifications available to them.

## UX
* If a user navigates to the notification settings section, they can choose between “notify” or “don’t notify” for each notification.
* Notifications that are related to a benefit (e.g. appointment reminders are related to health care) will only display for users who have that benefit.
* We display the contact information where notifications will be sent at the top of the page, along with a link to update that information.
* [Desktop mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/09JgE8y)
* [Mobile mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/4a8b4xJ)

### Saving and editing notification settings
* The form is an auto-save form, so it doesn’t have an update or cancel button
* The [input message component](https://design.va.gov/components/form/input-message) displays a success or error message, depending on the outcome of the update
* A loading indicator displays while the setting is updated
*  [Desktop mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/QbErwg1) 
*  [Mobile mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/xrJd48V) 

### If there are any notifications that don’t have a preference set
* We use the [warning alert component](https://design.va.gov/components/alert#warning-alert) to ask users to select their notification option, linking them to the first notification that isn’t set.
* For notifications where no item is selected, we use the [input message component](https://design.va.gov/components/form/input-message) to ask users to make a selection.  
* [Desktop mock-up](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/JnO1Jv0)
* [Mobile mock-up](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/52l205y)

## Codes
N/A

## How to reproduce
1. **Do not make changes to the notification that is not set**
2. Go to staging.va.gov/profile/notification-settings
3. Login with vets.gov.user+36 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
4. You can update the notifications that are set to see the update or error message. To trigger the error message, disconnect your device from wi-fi before you change the radio input.
