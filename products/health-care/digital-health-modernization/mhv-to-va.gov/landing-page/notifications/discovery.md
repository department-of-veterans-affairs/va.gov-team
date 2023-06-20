# Notifications Discovery Work
June 14, 2023

## Onsite vs. On-screen notifications
- On-screen = push notification
- Onsite = notifications right in the UI of the site

## Design Principles
- Notifications must always be actionable and related to the specific patient's care
- The user will be able to see all notifications in one place regardless of status
- Notifications will have one of two statuses: read or unread
- Notifications will be ordered by date (we will not attempt to make decisions about the importance or priority of different notifications)
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

## My VA's notification design
- Notifications show as a card in the Notifications section of My VA, which lives at the top of the screen, above other My VA headings
- In this Notifications area of My VA, a maximum of 3 notifications will be shown at any given time
- To see more new Notifications (more than just the 3) or older notifications, users can click the link in the Notification area of My VA to get to the Notification Center (Authenticated Experience team is hoping this does not live under My VA umbrella)
- In Notification Center, notifications stay forever unless they are dismissed by the user

## Questions for My VA team
- How did you de-dupe new debt notifications?
- Are you planning to show all notifications not only in the notification center, but also on the My VA page?
- How did you decide on designs for notifications in My VA (using a card instead of a badge, for example?)

## Q&A with Flagship Mobile app team
- Besides **Push notifications**, **badge** on the Health landing page (next to Messages): Are there any other notifications for a secure message?
   - Notifications     
       - Native mobile push notification when there is a new message
       - The number of unread messages in the button on Health landing page
       - The number of unread messages on the inbox tab showing the number of unread messages
       - The blue circle if a message has not been opened
- The badge/numbers stay until the message is opened, the user can potentially have a lot of unopened messages...
- Does Message link always bring the user to the top of the Messages page? Or does it ever send the message to unread message? (I have my assumption but wanted to confirm)
  - Yes, if you tap the Messages button on the health landing page you just get the list of all the messages (the inbox screen)

## Links
- [My VA's product outline for onsite notifications (includes screenshots of current designs)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications)
- [All notifications supported by VA Notify (as of January 2023)](https://docs.google.com/spreadsheets/d/1E7JupFC2i6XUzlOxbWwTbIJZ6AxRUz-m/edit#gid=1231731113)
- [Authenticated Experience team notes on VA Notify notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/product/shared-notes-existing-notifications-to-review.md)
- [Service map of appointment notifications](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1649696758581/a12e35b635ef11d25ff389fe6651b1e63026b68c?wid=0-1664898146419&outline=open&sender=ua13e567cb5c4221acaa14949)
- [Github page on service map research and findings](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10-appointment-notifications-service-map/research-findings.md#appendix-related-studies)
