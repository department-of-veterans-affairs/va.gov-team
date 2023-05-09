# MHV health apartment/Auth experience/VANotify call -- 4.3.23

## In attendance

- Patrick Bateman (Health apartment team)
- Coulton Bunney (Health apartment team)
- Matt Dingee (Design system lead)
- Beverly Nelson (VANotify)
- Samara Strauss (Auth exp)
- Allison Lu (Auth exp)
- Angela Agosto (Auth exp)
- Berni Xiong (Auth exp)

## New notification styling/design

- Angela and Ryan's iteration of the notification styling is near-identical already.
- Matt D. says we don't need to submit the new notification styling as a component to start. We can submit the work and "component-ize" later.
- The urgency is more around getting a baseline style submitted.
- So, our team should be able to continue with the planned work to submit the new notification style and build it out. We can tweak and update as needed over time based on health apartment needs and collaboration.

## Notifications & health apartment

- The health apartment team hasn't started separate notification work, but this is something we want to avoid.
- Broadly speaking, the health apartment will need personalized notifications within the section. We already provide these on My VA, and we want to make sure that new health-related notifications that are added show up in both places to minimize user confusion.

### Patrick and Ryan's vision for MVP for MHV notifications

1. notifications must always be actionalable and related to the specific patient’s care (aka notifications are not alerts).
2. users shall be able to see all notifications in one place regardless of status.
3. notifications shall have one of two statuses: read or unread.
4. notifications shall be ordered by date created.

[This is effectively the same as what we've talked about re: broader goals for onsite notifications as a whole](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications#onsite-notification-criteria).

## How do we move forward?

- The biggest issue right now: Getting notifications supported in VANotify so that we can leverage them on VA.gov. Health apartment + VANotify + VEText are likely to lead this work, and auth experience will stay tapped in to conversations on what will be available and when so we can leverage it on VA.gov.

Design-wise, we agreed on a few thing:

- It's OK if notifications show both on My VA and MHV apartment, as long as we are showing the same information for health notifications so users don't get confused.
- As there are more notifications, we'll need to link off to a "View All" page. This should be one page, and we can link to it from both the My VA dashboard and the MHV health apartment landing page.
- How we scale onsite notifications, broadly speaking, is a question that we'll answer over time. We don't need to immediately worry about nav changes or how notifications become a more global tool.

## Next steps
- Health apartment folks, in partnership with auth experience team and VANotify: Figure out how to get an appointment notification into VANotify that we can leverage on VA.gov. This will involve conversations and planning that will happen while Samara is on maternity leave.
- Samara will look at our team's long-term planning and figure out what a build phase around a SUPER MVP "notification center" looks like. This would be a singular page where we could link to from the My VA dashboard and the health apartment landing page where people could view all notifications.
- Bev will check in with Shane on rx notification and the plan for any updates VEText will make to pass identifiers to VANotify so we can leverage rx notifications on VA.gov.
