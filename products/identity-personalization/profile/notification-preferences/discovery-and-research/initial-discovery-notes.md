# Communication Permissions Initial Discovery

3/12/21, Liz Lantz

## Activities

- Review the [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) and [MVP requirements documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md).
- Clarify [MVP product scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md#mvp-whats-not-included).
- Meeting with Samara for intro to the work, VA Profile vs VA.gov profile. 
- 2 meetings w/ VA Profile architect to gain insight into communication permissions architecture in VA Profile.
- Researched answers to questions below to prepare for the design phase of adding communication preferences to VA.gov profile. There are a lot of unknowns with this work, so the early design stages will be a shell we can populate once we get more information.

## Follow-up questions

- **What is known about default opt-ins or outs?**

  - Some business subsets have rules/system functionality that are sending notifications. 
  - Until those systems migrate over to VA Profile, the communication engine will be acting on whatever default those business subsets have.
  - Providing a graceful UX solution for default opt-ins/outs isn't in scope for our MVP, but we'll address that in a future version.

- **Are all communication items available via both text and email?**

  Some items may be single channel (just text, or just email).

- **Any updates on the groupings? Is the status still TBD?**

  - Yes, they're hypothetical, since the request to create groups will come through the governance process.  
  - The groups will likely be ideas that come from communication partners or a business line (not necessarily based on user feedback or research).
  - Consider these use cases:
    1. A product line that says we want to group these kinds of communications we're responsible for.  Those would be the groups we'd display whenever we display these kind of groups on the settings page.  We expect those not to change often.
    2. Campaign-centric groups that only appear on campaign landing pages to get widely adopted opt-ins.

- **According to [notes from the 1/19 meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/meeting-notes/1.19.21_Chat%20with%20Terry%20and%20team.md#selection-option-communication-items-eg-health-care-appointment-reminders-prescription-updates-etc), we should be accounting for health appointment reminders (VEText), appeals reminders (VEText), FAS payment notifications (VANotify), and the 526 process (VANotify). Is this still accurate? Is there a complete list of all possible items?**

  - These were discussed in that meeting, but still unclear as to whether or not these will for sure be the first to roll out (could be just one, or something different). We need to build a dynamic shell to start.
  - There isn't a list of all possible items for now. It'll change as communication partners add items.

- **Are VEText and VA Notify the only communication partners?**

  - No, there are others.
  - We don't need to be concerned with this for the initial design stages of our MVP.

- **What's been done on the back-end so far?**

  - Reviewed API documentation and met w/ VA Profile stakeholders
  - Made a successful connection test to the API
  - As expected, the API provides communication groups, type, and channel
  - All the text is going to come via the API to ensure consistency anywhere it's used, so we won't be providing that. For example, if someone is considering their preferences for appointment reminders, if the API provides the text "Healthcare appointment reminders" we could not change that to "Reminders for upcoming healthcare appointments".

#### Comparative analysis

Reviewed notification settings sections of several websites and apps including: Citibank, Bank of America, USAA, Blue Cross Blue Shield, MyChart, Github, Facebook, and Amazon

**Notable findings **

- Section is most commonly  labeled `Notification settings` or `Communication preferences`
- Came across several instances of inputs side-by-side in a horizontal, tabular layout.  This goes against a11y best practices and our VA.gov style guidelines for [checkboxes](https://design.va.gov/components/form-controls#guidance-3) and [radio inputs](https://design.va.gov/components/form-controls#guidance-4).
- A toggle instead of a checkbox or radio button is common.  Considered this, but decided against using for our MVP since it introduces complexities:
  -  New component for VA.gov, not available in design system (more approvals/reviews likely required)
  - Toggles present a11y issues that add complexity to our MVP and usability testing plan
- Sites with many notification options (threshold was about 10+) organize notifications within a collapsed group
  -  Clicking on the group expands an accordion (Amazon, MyChart, CitiCards, Facebook)
  - It was 50/50 whether there was a save button or autosave feature.  Autosave usually had toggles instead of other inputs
