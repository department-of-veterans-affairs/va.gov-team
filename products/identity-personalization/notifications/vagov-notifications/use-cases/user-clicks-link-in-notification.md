# My VA On-site Notifications: User clicks link in notification

**Last updated:** November 3, 2022

- If a user has an on-site notification on their My VA page, it will contain an action link.
- If a user clicks on this link, they will be taken to a different page to learn more about the notification topic and/or take action on it.

## UX

### User clicks link in notification

- A notification will always have an action link in it. 
  - [Desktop mockup of notification](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/FC0B70C7-FF70-4A54-8247-DC0AD864E5ED)
  - [Mobile mockup of notification](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/639F4902-A32D-4454-87E5-4BD2E50E578E)
- If a user clicks on the link in the notification, they will be taken to a different page. This action does not dismiss or affect the notification in any way. 
  - For a new debt notification, the link "Manage your VA debt" takes the user to the [combined debt portal](https://www.va.gov/manage-va-debt/-your-debt) in the same window.

## How to reproduce

- Locate a staging account that has an on-site notification triggered.
  - [On-site notifications test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md)
  - Note that since notifications can be dismissed in staging, you will need to find a staging user who this has not occured for.
  - VA Notify can trigger a new debt notification for a staging user if needed. Contact them on the DSVA Slack in the `#va-notify-public` channel.
- Log into staging.va.gov with credentials for a staging user who has a notification triggered.
- Once you are logged in you will be redirected to My VA and should see a "Notifications" section at the top of the page with a notification below it.
- Click or tap on the link in the notification and confirm that it takes you to the correct page.
