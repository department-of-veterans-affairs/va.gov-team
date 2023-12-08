# Where do we go with personalization and notifications?

As we pause the VANotify integration, below are the main problems we are currently facing around notification work.

## Problems

### Generally speaking, it is unclear what is actually in our team's purview.

Everyone has different definitions of "notifications" -- there are badges, dots, tags, "identifiers", warnings, alerts, etc - lots of different terminology used to refer to something used to catch or draw the user's attention to new (and potentially) actionable information. As a result, it isn't clear what our team is actually responsible for. Are we only responsible for the VANotify integration? Or are we responsible for notification & alert governance and guidance across the logged-in experience?

**Preliminary next steps**: Samara to talk to OCTO folks about this.

### There are already alert states, tags, and our new notification state in the design system. 

As a result, we keep coming across teams that are applying the design system to implement a notifications/alerts who haven't consulted with us -- and maybe they don't need to. This begs the question -- What kind of uniformity/guidance around notifications is needed or would be helpful from our team, if any? 

**Preliminary next steps**: If it's determined by OCTO that our team should be more broadly involved in notification strategy as a whole, then we should create a plan after Angela's audit.

### The debt notification doesn’t feel like it makes sense if we aren’t scaling the VANotify integration any time soon.

- [Domo report](https://va-gov.domo.com/page/1167851935?userId=1322887837)
- [GA dashboard for onsite notifications](https://analytics.google.com/analytics/web/#/dashboard/MALmun-7S7WXBNKxUrQ39g/a50123418w177519031p184624291/)

According to analytics, far more people are clicking into the debt section of My VA than the onsite notification by a large margin. From Jan 1 – Aug 2 2023, `Manage your VA debt` was clicked about 300K times from the debt section vs. about 97K clicks from the onsite notification. This is a large discrepancy even considering that the onsite notification was removed about 77K times over the year. 

**Preliminary next steps**: Determine what to do with the Notifications section/`You have a new debt` on My VA.

### The notification component feels very similar to the [now-default white card](https://design.va.gov/components/card#2-default-white).

1.	If we update My VA to use white card, does the notification component now feel too similar? 
2.	If we update My VA to use the white card, can we/should we insert notifications/statuses into the cards themselves? If so, does that render our new notification component obsolete?
   
**Preliminary next steps**: Explore implementing the white card design on My VA. Discuss whether or not we think there should be some sort of unification of the white card and the notification style.

### The [notification component](https://design.va.gov/components/notification) was designed with the VANotify integration in mind, so it is unclear how anyone should use this if the notification center isn't happening.

1.	If the notification center is not happening any time soon, what do we do with the notification style?
2.	Should we be advising people to use this notification state? If so, for what? How do people know whether to use this or the existing alert states?
3.	Is this component confusing? Maybe the icons aren’t necessary…

**Preliminary next steps**: Determine what to do with the notification component (nix it? combine it with the white card? refine it and improve documentation? something else?).

### Our thinking around notifications has been led by the tool (VANotify), not by what we know about user needs and priority

While no one intended for this to happen, our approach to the notification strategy was so heavily bound to everything needing to go through VANotify that we weren't able to prioritize what we know about about user needs and expectations. Had we been able to lead with what we know about users and how they prioritize information, we could have been thinking about other ways to elevate information on My VA and across VA.gov that would have been easier to build, met user expectations and facilitated behavior, and wouldn't have conflicted in any way with VANotify's text and email notifications.

**Preliminary next steps**: On My VA, we should continue to think about how to better elevate items we know are high priority to users. Across VA.gov, we should wait to apply any broader thinking until we're sure this is within our purview.

## Next steps

### Continue work that is clearly in our purview

My VA and the notification component that Angela created are clearly in our team's purview, and we should continue to pursue work that improves My VA and clarifies usage around the notification component. We should do the following:

1. Determine what to do with the Notifications section/`You have a new debt` on My VA.
2. Determine what to do with the notification component (nix it? combine it with the white card? refine it and improve documentation? something else?).
3. Continue to pursue the dot indicator with MHV landing page team.
4. Pursue white card design on My VA.
5. Continue to think about how to better elevate personally relevant info on My VA.

### Determine whether we have a broader role in notifications on VA.gov

It is unclear how leadership and other teams view our role in the broader notifications landscape -- and there might be differing opinions on this throughout OCTO. Before we pursue anything outside of My VA, Samara should work with OCTO leadership to determine what role our team should play in notification work across the logged-in experience.

If we determine that the auth experience team should have a broader role in notifications as a whole, the following might be helpful:

1. Providing guidance across teams around how notification states should be used within the logged-in experience. 
2. Filling in any gaps in the design system for notification/alerts states that aren't accounted for.
3. Figuring out when -- or if -- VANotify should be sending notification information to VA.gov.
