# Notifications Frontend Documentation (WIP)

## Sketch Mockups

- [Desktop] (https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ZObEKZx](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/oY2Y85j)
- [Mobile] (https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KMb2kk](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/v/z3QLqM/a/JnlaE9e/r/GxYWa5)

## Notifications section on My VA

NOTE FROM ACCESSIBILITY: For the notification component we will need a descriptive 'aria describe by' that links the 'dismiss' button to the notification. Work with accessibility for the exact text.

### When to show this section

- We will show this section if a user has any notifications. We will not show this section if the user has no notifications, has never had notifications, or has dismissed all past notifications.

### States

**State 1: A user who has no new notifications since they last logged in, but has notifications that they have not yet dismissed.**

*UX Specs*

If a user has no new notifications since they last logged in but has notifications that they haven't yet dismissed, we will show the notification in the same style as we would if it was the first time they were logging in and seeing it. The notification style does not change based on read/unread and must be dismissed by the user to disappear.

*Visual Specs*

![Screen Shot 2022-05-17 at 2 37 28 PM](https://user-images.githubusercontent.com/97965610/168886199-e9d849d0-a55f-4bf7-b1ea-5235fb0b05ea.png)

*Copy Specs*

- [exclamation-triangle icon] You have new debt. (link) Manage your VA debt
- (Date) Month Day, Year

**State 2: A user who has new notifications since they last logged in.**

*UX Specs*

If a user has new notifications since they last logged in, we will show the warning alert style with icon, text about notification, a link, and a date that includes month, day and year. [Link to component in Storybook](https://design.va.gov/storybook/?path=/docs/components-va-alert--default)

*Visual Specs*

![Screen Shot 2022-05-17 at 2 37 28 PM](https://user-images.githubusercontent.com/97965610/168886199-e9d849d0-a55f-4bf7-b1ea-5235fb0b05ea.png)

*Copy Specs*

- [exclamation-triangle icon] You have new debt. (link) Manage your VA debt
- (Date) Month Day, Year

**State 3: A user who has no notifications.**

*UX Specs*

If a user has no notifications, we will **NOT** show this section.

*Visual Specs*

![Screen Shot 2022-04-26 at 11 17 22 AM](https://user-images.githubusercontent.com/97965610/165334406-b8ddec9a-242b-4573-8a1f-6ac15f43bb69.png)
