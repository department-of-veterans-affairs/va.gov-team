# Notifications Discovery Work
June 14, 2023

## Onsite vs. On-screen notifications
On-screen = push notification
Onsite = notifications right in the UI of the site

## Design Principles
(from Patrick and Ryan)
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

## Questions for My VA team
- How did you de-dupe new debt notifications?
- Are you planning to show all notifications not only in the notification center, but also on the My VA page?


