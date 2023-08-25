# My VA Benefit Payments Use Case: Notification Dismissal Error
**Last updated: July 17, 2023**

If a LOA3 user signs in and has a notification to show, they will see it at the top of My VA in the Notifications section. If they try to dismiss a notification and the dismissal command fails, we show an error above the notification.

## UX
* If a LOA3 user logs in and has a new notification to show (either new since they last logged in or not previously dismissed), they will see the Notification section on My VA.
* If a user clicks the `close` button in the upper righthand corner of a notification but the dismissal command fails, we display an error that states "**Can't dismiss notification** We're sorry. Something went wrong on our end, and we can’t dismiss this notification. Please try again later."
* The error occurs above the notification that the user tried to dismiss.
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
* [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/4azOzxd)
* [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/eKArA8q)

## How to reproduce
* In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
* In the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
* Be sure to remove that block after testing.
* [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
