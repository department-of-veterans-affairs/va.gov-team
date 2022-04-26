# Notifications Frontend Documentation (WIP)

All copy will be updated in this [Copy Documtenation doc.](add link)

## Sketch Mockups

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ZObEKZx)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KMb2kk)

## Notifications section on My VA

NOTE FROM ACCESSIBILITY: For the notification component we will need a descriptive 'aria describe by' that links the 'dismiss' button to the notification. Work with accessibility for the exact text.

### When to show this section

- We will show this section if a user has any notifications. We will not show this section if the user has no notifications, has never had notifications, or has dismissed all past notifications.

### States

**State 1: A user who has no new notifications since they last logged in, but has notifications that they have not yet dismissed.**

*UX Specs*

If a user has no new notifications since they last logged in but has notifications that they haven't yet dismissed, we will show the notification in the same style as we would if it was the first time they were logging in and seeing it. The notification style does not change based on read/unread and must be dismissed by the user to disappear.

*Visual Specs*

![Screen Shot 2022-04-26 at 11 12 13 AM](https://user-images.githubusercontent.com/97965610/165333503-5cc936f8-5af6-48fc-a8c2-1f320d9844d6.png)

*Copy Specs*

- [Copy Documentation](add link)

**State 2: A user who has new notifications since they last logged in.**

*UX Specs*

If a user has new notifications since they last logged in, we will show the warning alert style with icon, text about notification, and a link. [Link to component in Storybook](https://design.va.gov/storybook/?path=/docs/components-va-alert--default)

*Visual Specs*

![Screen Shot 2022-04-26 at 11 12 13 AM](https://user-images.githubusercontent.com/97965610/165334199-bddc4f0b-d581-439e-b554-cb1018eef62b.png)

*Copy Specs*

- [Copy Documentation](add link)

**State 3: A user who has no notifications.**

*UX Specs*

If a user has no notifications, we will **NOT** show this section.

*Visual Specs*

![Screen Shot 2022-04-26 at 11 17 22 AM](https://user-images.githubusercontent.com/97965610/165334406-b8ddec9a-242b-4573-8a1f-6ac15f43bb69.png)

## Notifications page

**State 1: A user who has notifications.**

*UX Specs*

We will show all notifications that we are able to through VA Notify in reverse chronological order. 

This includes:

- TBD

### Notification breakdown

The following are the data points that will be included for each specific notification.

- TBD

*Visual Specs*

ADD IMAGE

*Copy Specs*

- [Copy Documentation](add link)

## Notifications link in header (TBD)

We will be adding an omni-present 'Notifications' link into the header. 

(if we can NOT show prioritization on My VA)

**Desktop** 

We will add the 'Notifications link next to 'My Health".

(if we can show prioritization on My VA)

We will add a 'Notifications' link buried under the username dropdown menu. (same as mobile)

*UX Specs*

If a user has new notifications since they last logged in, we will show the red dot indicator next to the Notifications or the username of the user (TBD)

*Visual Specs*

ADD IMAGE

