# 2023 Scaling Onsite Notifications: Action Items Discovery Takeaways

Last updated: March 23, 2023

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

- Tested a high fidelity prototype of My VA with a link to an alerts page at the top and an alerts page on mobile only
- The "alerts" use the gray card component that we currently use within sections
- Prototype also had an "Alerts" link added to the mobile nav (not in hamburger nav) with a red dot to indicate new alerts
  - <img width="414" alt="Screenshot 2023-03-21 at 10 22 58 AM" src="https://user-images.githubusercontent.com/97965610/226636253-24bd9be2-4f30-462e-94da-413b389e5e11.png">
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

## Outstanding Questions

### High level questions

- What are OCTO stakeholders expectations around how we elevate notifications on VA.gov?
- If users don't see common notifications in a notification center yet because VA Notify does not yet support them (eg. new message from your doctor, or a prescription shipping), will users trust the feature?
- How would a notification center affect the navigation? How would this affect other teams?
- Have other teams talked to users about how they expect to see notifications on VA.gov (eg. has this come up through health apartment research at all? Or VAOS? Or the mobile app? etc.
- Should we show a certain number of notifications on My VA and provide a link to a "view all" page? How many notifications would that be if so?
- Where should notifications be surfaced within the navigation of VA.gov, if at all?
- How should we indicate that a user has new notifications in the navigation, on My VA, and in the notification center (if we create opt to create one)?

### Detail questions (for later)
- What would increase interactions with the notifications feature? And is this important enough to tackle in V2?
- Is "Notifications" the right name for this feature? Should we still consider something like "Alerts" to avoid confusion with profile notification settings?
- Do notifications need to be coded so that they disappear from My VA (and/or a notification center) once they are no longer relevant? (Example: an upcoming appointment that has passed; a message that has been read)
- Should actionable notifications be surfaced before newer notifications that may be more informative, or should they always go in chronological order?
