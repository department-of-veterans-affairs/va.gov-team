# My VA Onsite Notifications: User has a notification or multiple notifications

**Last updated:** November 10, 2022

- If a LOA3 user has an onsite notification on their My VA page, they will see their notifications under a "Notifications" header on My VA once they are logged in.
- If a user clicks on a link within a notification, they will be taken to a different page to learn more about the notification topic and/or take action on it.
- If a user clicks or taps the close icon on a notification, it dismisses the notification.
- If a user has multiple notifications, they will see see a notification for each one under the "Notifications" header in reverse chronological order with the newest at the top.

## UX

### User has a single notification

- If a user has one notification and they log in with an LOA3 account, they will see the notification on My VA under the "Notifications" header.
  - [Desktop mockup of single notification](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A135&mode=design&t=Xk2YIBRv4J7l5PrA-1)
  - [Mobile mockup of single notification](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A664&mode=design&t=Xk2YIBRv4J7l5PrA-1)

### User has multiple notifications

- Notifications stack vertically with the newest at the top and oldest at the bottom.
  - ~~[Desktop mockup of multiple notifications](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E1F1890F-BA4D-4726-909B-0055361FDF65)~~ Links no longer valid
  - ~~[Mobile mockup of multiple notifications](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ACC876AD-8A95-4CF0-BC33-814C674A33D4)~~ Links no longer valid
- A user must dismiss notifications individually.
- At this time, notifications will stack vertically with no limit to how many we show since we are only supporting a new debt notification. In the future as we support more types of notifications we will have a solution for when a user has several or many notifications.

### User clicks link in notification

- If a user clicks on the link in the notification, they will be taken to a different page. This action does not dismiss or affect the notification in any way.
  - For a new debt notification, the link "Manage your VA debt" takes the user to the [combined debt portal](https://www.va.gov/manage-va-debt/-your-debt) in the same window.

### User dismisses notification

- A user can dismiss a notification by clicking (or tapping on mobile) the close icon in the upper righthand corner of the notification.
- If a user clicks or taps the close icon, the individual notification should disappear.
- If a user dismisses all notifications in the Notifications section, the the "Notifications" header should disappear as well.

### There's an error when user tries to dismiss a notification

- If a user clicks or taps the close icon to dismiss a notification and there is a system error, an error message displays above the notification and below the "Notifications" header.
  - ~~[Desktop mockup of notification dismissal error](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A5E6BDAE-7D09-4B5B-8BF7-255DC72E98BA)~~ Links no longer valid
  - ~~[Mobile mockup of notification dismissal error](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/410D442D-8E53-454E-AE7C-30D878C32529)~~ Links no longer valid

## How to reproduce

- Locate a staging account that has an onsite notification triggered.
  - [On-site notifications test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md)
  - Note that since notifications can be dismissed in staging, you will need to find a staging user who this has not occured for.
  - VA Notify can trigger a new debt notification for a staging user if needed. Contact them on the DSVA Slack in the `#va-notify-public` channel.
- Log into staging.va.gov with credentials for a staging user who has a notification triggered.
- Once you are logged in you will be redirected to My VA and should see a "Notifications" section at the top of the page with a notification below it.
- Click or tap on the link in the notification and confirm that it takes you to the correct page.
- Confirm that the apprioriate number of notifications are showing and if a user has multiple, the newest notification is at the top and oldest at the bottom.
- Confirm that when you click or tap the close icon, the notification disappears. 
- Confirm that if you dismiss all notifications in the section, the "Notifications" header also disappears.
