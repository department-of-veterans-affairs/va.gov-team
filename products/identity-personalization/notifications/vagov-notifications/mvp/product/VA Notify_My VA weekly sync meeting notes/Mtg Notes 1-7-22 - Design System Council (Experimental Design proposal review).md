# Jan 7, 2022 Design System Council:
## Experimental Design proposal review ([ticket #606](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/606))

[Ticket #34467](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34047) for original design intent feedback.

Tressa explained what we want to do with the new design component (mainly on On-site notification) and emphasized that feedback shows people want a clear highlight/call out. Similar to the current background only component
- Tressa also explained what we are hoping to learn during research next week (is it clear, is it important, placement, how it is called out, etc)

### Design 
- Choice behind choosing an icon or any icon in general?
     - [Tressa response] Currently using warning icon
     - [Tressa response] Trying to call out, highlight the notice
     - [Tressa response] Saying this is time sensitive and more important than anything else on the page
- Worried about trauma triggering with alerts, shouldn’t be a warning icon, or red colors
     - [Tressa response] Understood and team is open to suggestions
- Do you have logic that determines time sensitivity
     - [Tressa response] Yes, will attach spreadsheet
- Liz {Lantz) mentioned design system doesnt really have something between info and warning
     - [Tressa response] Erred on the side of more priority
- Rather than showing an embedded alert/notification, what about push/system notification?  Is there something about where users can decide how to receive this kind of notification?
     - [Tressa response] This is MVP, being pulled/triggered by va notify, while other notices are triggered in backend.
     - [Tressa response] Eventually, may want to move toward all notifications being at the top, together, possibly feeding to a hub
     - [Tressa response] Eventually, may want to have an indicator in navigation or something to show pending notifications, and other enhancements (future)
- Kevin reframes: From a veteran experience, the larger goal is for them to be notified where they can take action. Already receiving emails, texts and push notifications.  Receiving an email saying new debt and going to va.gov My VA and seeing it too, consistency.  What can we learn from this MVP POC using a mod of background only alert (more content structure)?  Would this benefit that alert only? From experimental, how can we validate the benefit of this mod? 
- Is this an alert or a text link with a background?  We dont feel this is an alert.  That is what led to coming to experimental design.
- Is there potential for trauma experience/negative experience with these design changes?
- Shawna doesnt think this should be added as a new component, we can test it but should be a mod on existing component.  Need to match alert guidelines
- Change would be making component include a link and be dismissable
- Does this need to be a design system issue at all?
- Can deliver push notifications thru mobile and desktop browser, would this be better than additional design system work?
- Those seem like a modal, and not really what they want
- We do have sitewide dismissable alerts styles

### Engineering
- Ryan - ignoring UX stuff for now, concerned about the coloring not having enough contrast, also concerned that the pattern (icon, then text) can be abit overwhelming (esp in mobile view).  It all seems to have the same visual weight and doesnt really call out much, only kind of makes the user bounce from icon to icon.  Maybe we can slim down the other sections/items/components to get stuff called out properly.
- What happens when there is a failure in a component?
     - [Tressa response] We have static message with link to manage elsewhere (mhv for example)
- Concerned about sitewide alerts along with onsite, that is just more stuff being added.
- [Linked to see facilities page](https://preview.uxpin.com/ad1daf77e161cbde903ca3cbe0b65177a7e7bdf2#/pages/144397776/simulate/no-panels?mode=i) slimmed down, and alerts similar to the proposed design
- Any time you say something to a user, it could show up 5 different ways or some systems have one way (that is the only way you see alerts)
- Tressa advocates for this being a first stab at this complex scenario and would like it to be usable on a global scale, evolving as needed
- We may want to update the component after research feedback
- We want to improve alerts as a whole, so we are excited to hear about how this works in research (and update from “immediate feedback” expectation
- Accessibility
     - [Tressa response] In line currently
     - [Tressa response] Once we determine all notifications are at the top, concern that they are managed in different ways currently tho we will figure it out.
- Think about in-section notifications, and without the onsite notification at the top of the page, the user would have to scroll to see other information
     - [Tressa response] The notification at the top currently does not directly tie into the sections below it

## Decision
- Want to hear what you learn
     - Especially related to
          - Perceivability
          - Comprehension
          - Trauma triggers
