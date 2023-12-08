# Notification Center MVP Frontend Documentation
Last updated: June 26, 2023

## UX Specs
### Sketch mockups

- [Desktop](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/uuid/3F1E43D1-70E0-4F05-8E59-F0B1D00DF6C0)
- [Mobile](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/uuid/003BB5C5-955E-4D5E-90C5-A1A12145ADE0)

### Functional specs

- The notification center MVP is a list of all notifications a user has ever received **on VA.gov**. It does not encompass all emails and/or push notifications.
  - A notification must be triggered through VA Notify and integrated with the "Notifications" feature on My VA in order to appear in this list
- Notifications should be listed in chronological order by date received, with the newest (most recently received) notification at the top of the list
- Whether a notification has been dismissed from My VA or not, it will appear in this list.

### Visual specs

**Breadcrumbs**
- Breadcrumbs should be positioned above the H1
- Use the [breadcrumbs component](https://design.va.gov/storybook/?path=/docs/components-va-breadcrumbs--default) in the VA pattern library

**Notifications list**
- For the list of notifications, use the [no border variation of the notification component](https://design.va.gov/storybook/?path=/docs/components-va-notification--default#no-border) in the VA design system. This should not have a border or any close functionality.
- For the divider, for now use a 1 px wide line in color #71767A Base (this should be in the VA pattern library)
  - Note that an [experimental design ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1785) to add this divider to the design system has been submitted and once it is added, we will need to update this component to utilize it

**Pagination**
- Use the [pagination component](https://design.va.gov/storybook/?path=/docs/components-va-pagination--default) in the VA pattern library
- List 10 notifications on each page by default. Use pagination for any more than 10 notifications.
- If there are less than 10 notifications to show, then the pagination component does not show at all. [Slack thread with Platform for additional context](https://dsva.slack.com/archives/C01DBGX4P45/p1687533356451349)

### Accessibility specs
- The headline of each notification will need to include an `aria-describedby` label that associates it with the date so that a screen reader user doesn't hear the same headline repeated if they are navigating by headings.
  - [Sketch file with aria label annotations](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/EeGalyx)
- If we add notifications in the future that deep link to the item they correspond to and therefore there are links on the page with the same text that go to different places, those will also require an aria label.   
---

### If a user does not have any notifications to show

**Sketch Mockups**

- [Desktop](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/uuid/4E4E2402-E573-4C6D-B2D7-EF0F5E8EAF1E)
- [Mobile](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/uuid/FBCFB876-CF62-483E-B963-F0D22A17B718)

**Content**

You have no notifications to show.

---

## Error States

- In the event that the API endpoint fails and we can't display notifications, we will display an error.
- Use the [warning alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--default#warning) in the VA pattern library

**Sketch Mockups**
- [Desktop](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/uuid/B417FFE2-FE14-4D15-A884-AF1C3C616492)
- [Mobile](https://www.sketch.com/s/1cc4cb25-7de4-492c-bb91-edef871b2a89/a/uuid/72160373-F6FB-4C34-8E45-CEC5F687D023)

**Content**

We can't display your notifications

We're sorry. Something went wrong on our end. If you have any notifications to show, you won't be able to access them right now. Please refresh or try again later.
