# Notification settings: User has one or more notifications for which they have not selected a preference

**Last updated: August 22, 2022**

LOA3 users who sign in, go to the profile, and click into the notification settings page will be able to opt in or out of notifications available to them.

Notifications specific to a benefit will only display for users who have that benefit.

## UX
### Initial state
* We use the [warning alert component](https://design.va.gov/components/alert#warning-alert) to ask users to select their notification option, linking them to the first notification that isn’t set.
* Each notification has a category (also referred to as a communication group), and a name (also referred to as a communication item)
* Each notification has a set of radio inputs associated with it so the user can indicate whether or not they want to get that notification
* All notifications are defaulted to null, so no radio option is selected. 
	* Users may already receive the notification despite it not being reflected in their notification settings. 
	* This is because they are opted in by default when they submit the benefit application or form to VA.
* For notifications where no item is selected, we use the [input message component](https://design.va.gov/components/form/input-message) to ask users to make a selection.  
* [Desktop mock-up](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/JnO1Jv0)
* [Mobile mock-up](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/52l205y)

### Saving and editing notification settings
* The form is an auto-save form, so it doesn’t have an update or cancel button
* A loading indicator replaces the input message once a selection is made, while the setting is updated
* The input message component displays a success or error message, depending on the outcome of the update
*  [Desktop mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/QbErwg1) 
*  [Mobile mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/xrJd48V) 

## Codes
N/A

## How to reproduce
1. **Do not make changes to the notification that is not set**
2. Go to staging.va.gov/profile/notification-settings
3. Login with vets.gov.user+36 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
4. You can update the notifications that are set to see the update or error message. To trigger the error message, disconnect your device from wi-fi before you change the radio input.
