# Notifications Discovery Work
June 2023

## Onsite vs. On-screen notifications
- On-screen = push notification
- Onsite = notifications right in the UI of the site

## Design Principles
- Notifications must always be actionable and related to the specific patient's care
- The user will be able to see all notifications in one place regardless of status
- Notifications will have one of two statuses: read or unread
- Notifications will be ordered by date descending (we will not attempt to make decisions about the importance or priority of different notifications)
- All notifications (from both My VA and My Health) will be shown in a notification center
- Notifications will direct link to where a user needs to go to take action on that notification

## Technical challenges
- Notifications must be supported in VA Notify first before they can be leveraged on VA.gov
- Anything coming from VEText must send identifer info (Profile ID) to VA Notify for use on VA.gov
- In order to get VA Profile ID from VEText, there will need to be engineering work completed by both VEText and VA Notify 

## My VA team's progress so far
- Currently, My VA has one notification type that is live and active in production: new debt notification
- Have made the decision to have all notifications go through VA Notify instead of directly from the backend because that will keep emails, texts and onsite notifications coordinated in one place
- Next notification that My VA will be working on: RX shipment tracking; waiting on VA Notify and VEText to be available to do aforementioned engineering work to make this possible
- In the meantime, the team is focusing on designing an MVP for Notification Center

### My VA's notification design
- Notifications show as a card in the Notifications section of My VA, which lives at the top of the screen, above other My VA headings
- In this Notifications area of My VA, a maximum of 3 notifications will be shown at any given time
- To see more new Notifications (more than just the 3) or older notifications, users can click the link in the Notification area of My VA to get to the Notification Center (Authenticated Experience team is hoping this does not live under My VA umbrella)
- In Notification Center, notifications stay forever unless they are dismissed by the user

### My VA's design images
- [Notification on My VA](https://images.zenhubusercontent.com/629a1db0e70457da479e69ae/eba3004d-05ff-43a9-8d0b-0693a4edf02a)
- [Notification landing page](https://images.zenhubusercontent.com/629a1db0e70457da479e69ae/62773669-6f4d-4e9f-a421-0fe32b5f4a7a)

### Questions for My VA team
- How did you de-dupe new debt notifications?
- Are you planning to show all notifications not only in the notification center, but also on the My VA page?
- How did you decide on designs for notifications in My VA (using a card instead of a badge, for example?)

## Links
- [My VA's product outline for onsite notifications (includes screenshots of current designs)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications)
- [All notifications supported by VA Notify (as of January 2023)](https://docs.google.com/spreadsheets/d/1E7JupFC2i6XUzlOxbWwTbIJZ6AxRUz-m/edit#gid=1231731113)
- [Authenticated Experience team notes on VA Notify notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/product/shared-notes-existing-notifications-to-review.md)
- [Service map of appointment notifications](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1649696758581/a12e35b635ef11d25ff389fe6651b1e63026b68c?wid=0-1664898146419&outline=open&sender=ua13e567cb5c4221acaa14949)
- [Github page on service map research and findings](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md#appendix-related-studies)

## Secure Messaging notifications
### Mobile app notifications:
- Push notification on new message
- Badge on the health landing page (next to Messages) w number of unread messages
- Badge on inbox tab showing number of unread messages
- Blue circle if a message has not been opened
- Badge remains until the message is opened (user can potentially have a lot of unopened messages)
- If tap messages button on the health landing page, user is sent to inbox screen (not directly to specific message)
### Mobile app images:
- [Badge on health landing page](https://github-production-user-asset-6210df.s3.amazonaws.com/58444931/245580811-08ec891f-229c-4f2b-a70e-a9481564f7c3.PNG)
- [Badge on inbox tab](https://github-production-user-asset-6210df.s3.amazonaws.com/58444931/245580852-19857d83-f0dc-4317-9f5e-ddcdb1e59de6.PNG)

### Desktop:
- Notification option that requires a user-supplied email address
- Question: how do we reconcile different email addresses for login / VA.gov profile and secure messaging notifications?
- From Beverly Nelson: when VA Notify gets contact info from VA profile, the email address is missing 15% of the time


