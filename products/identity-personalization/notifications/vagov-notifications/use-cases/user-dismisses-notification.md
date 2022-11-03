# My VA On-site Notifications: User dismisses notification

**Last updated:** November 3, 2022

- A user must dismiss an on-site notification in order for it to disappear.
- If a user dismisses all on-site notifications, they will no longer see a "Notifications" section.

## UX

### User dismisses notification

- A user can dismiss a notification by clicking (or tapping on mobile) the close icon in the upper righthand corner of the notification.
  - [Desktop mockup of notification with close icon](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/FC0B70C7-FF70-4A54-8247-DC0AD864E5ED)
  - [Mobile mockup of notification with close icon](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/639F4902-A32D-4454-87E5-4BD2E50E578E)
- If a user clicks or taps the close icon, the individual notification should disappear.
- If a user dismisses all notifications in the Notifications section, the the "Notifications" header should disappear as well.
  - [Desktop mockup of all notifications dismissed](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
  - [Mobile mockup of all notifications dismissed](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

### There's an error when user tries to dismiss a notification

- If a user clicks or taps the close icon to dismiss a notification and there is a system error, an error message displays above the notification and below the "Notifications" header.
  - [Desktop mockup of notification dismissal error](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A5E6BDAE-7D09-4B5B-8BF7-255DC72E98BA)
  - [Mobile mockup of notification dismissal error](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/410D442D-8E53-454E-AE7C-30D878C32529)

## How to reproduce

- Locate a staging account that has an on-site notification triggered.
  - [On-site notifications test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md)
  - Note that since notifications can be dismissed in staging, you will need to find a staging user who this has not occured for.
  - VA Notify can trigger a new debt notification for a staging user if needed. Contact them on the DSVA Slack in the #va-notifiy-public channel.
- Log into staging.va.gov with credentials for a staging user who has a notification triggered.
- Once you are logged in you will be redirected to My VA and should see a "Notifications" section at the top of the page with a dismissable notification below it.
- Click or tap the close icon in the upper righthand corner and confirm that the notification disappears.
