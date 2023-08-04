# Where do we go with personalization and notifications?

Below are the current main problems we are facing given the pause on VANotify and notification center work, especially given that it is unclear if we will definitely pick it up again.

## Problems

### There are already alert states, tags, and our new notification state in the design system. 

As a result, we keep coming across teams that are rightly applying the design system to implement a notification/alert.

1.	What kind of uniformity/guidance, if any, is needed or would be helpful from our team?
2.	Do teams actually need to work with us? What kind of cross-team collaboration makes sense?
3.	How can we differentiate between system alerts vs. personally-relevant alerts? Does this actually matter to users?

**Preliminary next steps**: A lot will be clarified after Angela puts together the design documentation on notifications/alerts/tags/whatever. This will show us what our opportunities are so we can create a plan.

### The debt notification now feels like it doesn’t make sense if we aren’t scaling the VANotify integration any time soon.

- [Domo report](https://va-gov.domo.com/page/1167851935?userId=1322887837)
- [GA dashboard for onsite notifications](https://analytics.google.com/analytics/web/#/dashboard/MALmun-7S7WXBNKxUrQ39g/a50123418w177519031p184624291/)

According to analytics, far more people are clicking into the debt section of My VA than the onsite notification by a large margin, which is pretty surprising to me. From Jan 1 – Aug 2 2023, `Manage your VA debt` was clicked about 300K times from the debt section vs. about 97K clicks from the onsite notification. This is a large discrepancy even considering that the onsite notification was removed about 77K times over the year. 

**Preliminary next steps**: Talk to the team about this.

### The notification component feels very similar to the [now-default white card](https://design.va.gov/components/card#2-default-white).

1.	If we update My VA to use white card, does the notification component now feel too similar? 
2.	If we update My VA to use the white card, can we/should we insert notifications/statuses into the cards themselves? If so, does that render our new notification component obsolete?
   
**Preliminary next steps**: Explore implementing the white card design on My VA. Discuss whether or not we think there should be some sort of unification of the white card and the notification style.

### The [notification component](https://design.va.gov/components/notification) was designed with the VANotify notification center in mind, so it is unclear to me how anyone else should use this.

1.	If the notification center is not happening any time soon, what do we do with the notification style?
2.	Should we be advising people to use this notification state? If so, for what? How do people know whether to use this or the existing alert states?
3.	Is this component confusing? Maybe the icons aren’t necessary…

**Preliminary next steps**: Talk to the team about this.

## What I think our team should do

These are some assumptions I have about what work our team should pursue with regards to notifications. To borrow from the idea of [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills), we should be thinking both about the broad the authenticated experience and in-depth about our own product (My VA).

### Work across the authenticated experience

I am assuming the following would be helpful:

1. Providing guidance across teams around how notification states should be used within the logged-in experience. The goal is to make sure notifications and alerts are surfaced in a uniform, consistent way.
2. Filling in any gaps in the design system for notification/alerts states that aren't accounted for.
3. Figuring out when -- or if -- VANotify should be sending notification information to VA.gov.

**How do we validate whether this is what we should be doing? And if so, how do we get people on board with us being in a leadership role?**

### Work on My VA

While we are working on the big picture, we should also continue to improve how we surface action items and important updates on the My VA dashboard. This might be a space where we can iterate and try things to see if they can or should be applied to the broader authenticated experience.
