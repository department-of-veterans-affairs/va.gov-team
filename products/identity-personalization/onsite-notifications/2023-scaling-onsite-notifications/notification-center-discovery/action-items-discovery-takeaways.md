# 2023 Scaling On-site Notifications: Action Items Discovery Takeaways

Last updated: March 20, 2023

## Key takeaways from comparative analysis

[Tressa's 2021 action items comparative analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2021-action-items-discovery/action-items-comparative%20analysis.md)

- Study focused primarily on sites in the banking and insurance industries
- > Screenshots were solicited for sites of interest since accounts are required to view the authenticated experience. We primarily requested desktop views.
  - How did they solicit these?
- > It's important to have a way to 'view all' or view an action item log. Most commonly this lived on a separate page.
  - This finding supports a notification center of sorts for My VA
- > All approaches (except the checklist approach) utilize either an icon or number to indicate users action/attention is needed.
  - This supports our assumption that the most recognizable UX pattern for notifications is a badge/icon that draws attention.
- It's common for notifications that are time-sensitive to be highlighted multiple times on the same page, such as a "bill due" notification at the top of the page, as well as within the "bill pay" section.
- > Many sites only showed 2-4 notifications at a time, if a user wanted to see all notifications they would need to click 'View all'
  - This tracks with our assumption that 3 or so notifications should be the max before linking users to anther page
- > Language is important when helping users take action - if it's time sensitive then the language needs to be more actionable.
  - This is huge and I think we could do a better job of it moving forward
- > State farm has an interesting 'user navigation' that is separate from the main navigation. This seems like a very clear way to elevate top tasks while also elevating action items (the alert bell icon + red dot indicator) If clicked, it opens a right hand menu with a list of action items for the user.
  - Interesting option to explore since we have the name tag present on My VA and profile
  - <img width="1013" alt="Screenshot 2023-03-20 at 11 35 05 AM" src="https://user-images.githubusercontent.com/97965610/226390332-eb27cf04-5d5e-466c-bd47-c87619178f64.png">

## Key takeaways from Action Items Research

[Tressa's 2021 My VA - Action Items Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2021-action-items-discovery/research/alerts-discovery-research-summary.md)

- Tested both My VA and a high fidelity prototype of an action items page on mobile only
- The "alerts" use the gray card component that we currently use within sections
- 
- > All users mentioned redundancy as a welcomed and important feature.
  - This supports our hypothesis that having notifications for things that are present elsewhere on My VA is OK and welcomed.
- > 5 out of 8 users mentioned perceiving the categories of alerts would be helpful (like on the homepage or on My VA). 3 out of 8 mentioned wanting the ability to customize what alerts they see on their alerts page. This included the ability to filter alerts by category or date.
  - A future feature of the notification center might be adding filtering functionality.
- > Users made a clear distinction between an 'action item' (something that the Veteran needs to DO) and a 'notification' (something that the Veteran should know).
  - This tells me we're on the right track with the two types of notifications we've already defined.
- > 7 out of 8 users missed the 'View all alerts' link completely. Many users mentioned wanting it to be further up on the page and called out. Almost all users scrolled right past this link, and if asked to go back to the alerts page they would use the link in the navigation.
  - In the prototype, the view all link is the same style as our secondary links and is listed after the notifications which were using the gray card component, so I can see why it was easily missed. This is something I'd want to test in a different style on My VA or wherever the link to view al notifications ends up living.
- [Link to things Veterans have said they would want to see as notifications/alerts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2021-action-items-discovery/research/alerts-discovery-research-summary.md#things-veterans-mentioned-theyd-want-to-see-as-an-alert)
  - We may not need to do any additional research on this since we have these findings and we are limited by what's available from VA Notify anyway
- > Pick a title. I recommend naming this feature either 'Notifications' or 'Alerts'. We need to align with the similarly titled 'Notification Preferences' feature, as that will be built and launched first.
  - This is still an outstanding question even though we've gone with "notifications" for now. 

