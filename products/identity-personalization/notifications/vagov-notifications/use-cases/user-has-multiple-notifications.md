# My VA On-site Notifications: User has multiple notifications

**Last updated:** November 3, 2022

- If a user has multiple notifications, they will see them stacked on top of each other vertically on My VA under the "Notifications" header with the newest at the top in chronological order.

## UX

### User has multiple notifications

- Notifications stack vertically with the newest at the top and oldest at the bottom.
  - [Desktop mockup of multiple notifications](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E1F1890F-BA4D-4726-909B-0055361FDF65)
  - [Mobile mockup of multiple notifications](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ACC876AD-8A95-4CF0-BC33-814C674A33D4)
- A user must dismiss notifications individually.
- At this time, notifications will stack vertically with no limit to how many we show since we are only supporting a new debt notification. In the future as we support more types of notifications we will have a solution for when a user has several or many notifications.

## How to reproduce

- Locate a staging account that has multiple on-site notification triggered.
  - [On-site notifications test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md)
  - Note that since notifications can be dismissed in staging, you will need to find a staging user who this has not occured for.
  - VA Notify can trigger new debt notifications for a staging user if needed. Contact them on the DSVA Slack in the `#va-notify-public` channel.
- Log into staging.va.gov with credentials for a staging user who has a notification triggered.
- Once you are logged in you will be redirected to My VA and should see a "Notifications" section at the top of the page with notifications below it.
- Check to make sure that multiple notifications are showing and the one with the newest time stamp is at the top, and the one with the oldest time stamp is at the bottom.
