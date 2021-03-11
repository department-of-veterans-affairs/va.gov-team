# Communication Permissions Initial Discovery

3/11/21, Liz Lantz

## Activities

- Review the [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) and [MVP requirements documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md), 
- Meeting with Samara for intro to the work, VA Profile vs VA.gov profile. 
- 2 meetings w/ VA Profile architect to gain insight into communication permissions architecture in VA Profile.
- Researched answers to questions below to prepare for the design phase of adding communication preferences to VA.gov profile.

## Follow-up questions

- **What is known about default opt-ins or outs?**

  - Some business subsets have rules/system functionality that are sending notifications. Until those systems migrate over to VA Profile, the communication engine will be acting on whatever default those business subsets have.
  - This can't be addressed gracefully in the MVP, and we'll need to figure it out over time.

- **Are all communication items available via both text and email?**

  No, not all. Some items will be single channel for now

- **Are the groupings still TBD?**

  - Yes, they're hypothetical. 
  - Request to create groups will come as a request from communication partners through the governance process.  The groups will be ideas that someone in a business line thinks of (not necessarily based on user feedback or research).
  - Consider 2 use cases
    1. A product line that says we want to group these kinds of communications we're responsible for.  Those would be the groups we'd display whenever we display these kind of groups on the settings page.  We expect those not to change often.
    2. Campaign-centric groups that only appear on campaign landing pages to get widely adopted opt-ins.

- **According to [notes from the 1/19 meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/meeting-notes/1.19.21_Chat%20with%20Terry%20and%20team.md#selection-option-communication-items-eg-health-care-appointment-reminders-prescription-updates-etc) , we should be accounting for health appointment reminders (VEText), appeals reminders (VEText), FAS payment notifications (VANotify), and the 526 process (VANotify). Is this still accurate? Is there a complete list of all possible items?**

  - These were discussed in that meeting, but still unclear as to whether or not these will for sure be the first to roll out (could be just one, or something different). We need to build a dynamic shell to start.
  - There isn't a list of all possible items for now. It'll change as communication partners add items.

- **Are VEText and VA Notify the only communication partners?**

  - No, there are others.
  - We don't need to be concerned with this at the moment.
