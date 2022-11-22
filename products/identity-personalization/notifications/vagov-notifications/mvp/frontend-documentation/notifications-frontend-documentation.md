# Notifications Frontend Documentation
Last updated: October 28, 2022

## Sketch Mockups

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B3352077-2620-4C5B-9208-2B57CD6CFAC5)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/639F4902-A32D-4454-87E5-4BD2E50E578E)

## Notifications section on My VA

NOTE FROM ACCESSIBILITY: For the notification component we will need a descriptive 'aria describe by' that links the 'dismiss' button to the notification. Work with accessibility for the exact text.

**When to show this section**

We will show this section if a user has any notifications. We will not show this section if the user has no notifications, has never had notifications, or has dismissed all past notifications. We will show notifications individually, so a veteran can have multiple under the Notifications header.

## Notification specs

**Show**

When a user has a new notification, whether they have seen it before or not, and it has not been dismissed.

**UX Specs**

If a user has no new notifications since they last logged in but has notifications that they haven't yet dismissed, we will show the notification in the same style as we would if it was the first time they were logging in and seeing it. The notification style does not change based on read/unread and must be dismissed by the user to disappear.

**Visual Specs**

![Screen Shot 2022-10-27 at 1 22 37 PM](https://user-images.githubusercontent.com/97965610/198706492-82c7d759-0a0d-4d8d-9056-2504dcd1f801.png)

- This component will be built by the authenticated experience team and later added to the VA design pattern library. We will link the official component here once it is ready
- The color of the icon is `secondary-darkest` in the VA design pattern library (#981B1E)
- The header text in the notification is an `H4`.
- The date text is `default` body text.
- The link should use the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--active#active) in the VA pattern library.
- The close button is a `times-circle` icon.

**Copy Specs**

- `exclamation-circle icon` You have new debt.
- (Date) Month Day, Year
- [Manage your VA debt](http://va.gov/manage-va-debt/your-debt)

## If a user has multiple notifications

**Sketch mockups**

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E1F1890F-BA4D-4726-909B-0055361FDF65)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/ACC876AD-8A95-4CF0-BC33-814C674A33D4)

![Screen Shot 2022-10-28 at 3 36 58 PM](https://user-images.githubusercontent.com/97965610/198718442-b0031d6f-8f75-42e3-9359-7a5e99684655.png)

**UX Specs**

The notifications should stack on top of each other with the newest at the top and oldest at the bottom.

## If a user dismisses a notification

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

If a user dismisses the notification by clicking or tapping the close icon, then the notification should disappear. If the user dismisses all notifications in the section, then the "Notifications" header should disappear.

## If a user tries to dismiss a notification but there is an error

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A5E6BDAE-7D09-4B5B-8BF7-255DC72E98BA)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/410D442D-8E53-454E-AE7C-30D878C32529)

If a user dismisses the notification by clicking or tapping the close icon, then the notification should disappear. If the notification fails to dismiss, then an error message should appear below the "Notifications" header and above any notifications in the section.

**Visual Specs**

![Screen Shot 2022-11-01 at 4 30 59 PM](https://user-images.githubusercontent.com/97965610/199334988-2cf90580-4eb3-4719-bfa5-7d753fdb814a.png)

- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--default#error) from the VA design system.

**Copy Specs**

Can't dismiss notification

We're sorry. Something went wrong on our end, and we can’t dismiss this notification. Please try again later.

## If there is an error on the backend and we can't show notifications

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

If there is an error on the backend and we can't show notifications, then we do not show this section at all on My VA.
