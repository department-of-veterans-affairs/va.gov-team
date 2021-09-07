# Notification settings MVP UX decisions

Designer: Liz Lantz, VSA Authenticated Experience

Last updated: 7/29/2021

## Background and goals

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA Profile team is building a communications permissions engine that will integrate with the VA.gov profile frontend and allow veteran-managed settings to be saved and shared across systems at the VA.

We're approaching this from an MVP perspective with the understanding that we'll likely need to revisit design decisions once we see actual data from the API.

## Goal of this document

Document UX decisions for the MVP and our rationale for making these decisions. 

## UX Decisions

### Use experimental design pattern on radio inputs

8/6/2021, Design council meeting
Attendees: Design system council members, Liz Lantz, Erik Hansen, Ana Jackabcin, Robin Garrison

We submitted a [variation of our error message pattern](https://design.va.gov/experimental-design/input-message) for review to the design system council ([reasoning outlined in #511](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/511)), and it was approved with reservations in this meeting.  Some concerns were raised:
- Users might feel triggered by all the warning icons, or that the page is "yelling" at them.  
  - We talked about using the info state instead, but the design council suggested we test with it as is.
  - We'll do a hallway test with colleagues who are also Veterans as a gut check before launch, in lieu of usability testing
  - We'll also get input from a VA mental health professional (key informant sampling) to see whether or not they share this concern. It's challenging to evaluate whether or not we're triggering people. We don't want to put Veterans at risk and purposely trigger them through research.
- Having all the different icons in a circle makes it hard to distinguish one from another.  
  - Since we're using the design system feedback icons, we won't make any changes to our design.
- It's hard to scan the different notification channels (text vs email) since the radio labels all start with "Notify by...".  
  - We've have worked closely with our content team throughout this process, so we'll keep content as-is until we gather more evidence that we need to change it.
- People might be confused by the lack of a save button
  - We'll proceed with the auto-save functionality as is, but keep an eye on this in future tests.
  - We'll do a hallway test with colleagues who are also Veterans as a gut check before launch, in lieu of usability testing



### Improve ability to account for NULL permissions

7/29/21
Attendees/contributors: Kevin Hoffman, Ana Jackabcin, Erik Hansen, Liz Lantz, Lihan Lee, Maria Becker, Shane Elliot, Todd Stanich, Beverly Nelson

Update design to make it clear whether or not a user has ever updated their permissions
- Change checkbox to radio buttons in order to
  - Make it clear to the user whether or not they have ever made a selection
  - Giving the user a clear way to say "no" if they have never made a selection
- Add messaging to encourage Veterans to make a selection.  Exact solution TBD, exploring a variation of our input error message pattern, full-width alerts, and a modal

### Improve clarity for notification setting status
Week of 7/12 (writing retroactively)
Attendees: Liz Lantz, Kevin Hoffman, Ana Jackabcin

- Update design to remove read mode in order to clearly expose status of notification settings
- Remove gray heading background and containers to improve spacing, readability, and mobile UX

### Use case: user opted into notifications deletes their associated contact information

5/7/2021
Attendees: Liz Lantz, Samara Strauss, Erik Hansen

If a user is opted into text messages or email notifications, and deletes their associated contact information, we will:
- treat them as if they're not getting notifications regardless of the data VA Profile is sending back. 
  - In the read view, this means they'll see that those notifications are turned off
  - In edit view, they won't have inputs to opt-in/out of notifications.
- We'll update copy in our confirmation alert so that when they delete their contact information, they'll see content letting them know they may not receive notificaitons anymore.  
  - Because of complexities around the various ways people receive notifications at VA, outside of VA Profile, we shouldn't say that they defintiely will NOT receive these notifications.

If a user is opted into text messages or email notifications, and deletes their associated contact information, **and then adds new information later**, we will:
- display all the notifications and options as if they had not ever deleted their information. We'll check with VA Profile in our next sync whether or not they will actually receive notifications at this new email/phone number automatically.

### VSP office hours review

4/20/2021
Attendees: Liz Lantz, representatives of VSP design, and accessibility

After some back and forth with the team on how to handle the edge case where a user has partial contact info on file, attended VSP office hours to discuss a new [concept for handling edge case](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22592#issuecomment-823562825). 

#### Decision

We'll stick with the [original solution](https://camo.githubusercontent.com/a85e37cbf1379e393c06e2534a5d1da88651e2fc54b916667e08715ad9068a9d/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564396465663638623664653664303030313864353066322f63356566633331372d303163302d343534302d613231352d663663646639353761393334) I arrived at with VSA a11y team. The new concept's checkbox functionality presents the user with an action they can't actually take, which is poor UX.

Other options we considered leading up to the original solution:

1. Including an alert at the top of the container when the user is in edit mode, that has a link for them to update their contact information.  We're not including this since it takes users out of the flow they set out on by clicking the `edit` button to get to this state.
2. Linking the text that replaces each checkbox so the user can update their contact info. We're not including this since it takes users out of the flow they set out on by clicking the `edit` button to get to this state.
3. Disabling the checkbox.  That is not a11y friendly

### Design intent review

4/6/2021

Attendees: Auth Exp designer, PO, and PM, representatives of VSP design, content, IA, and accessibility

#### Designs

- [Mobile prototype](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989653/comment/sitemap?mode=i)
- [Desktop prototype](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989650/comment/sitemap?mode=i) 

#### Decisions

- No major changes needed. 
- Remove icons in read mode to simplify development; text should be sufficient for scanning.
- Will add success states and additional context to form field labels

#### Links

- [Design feedback](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/22706) 
- [Accessibility feedback](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/22526) 
- [IA feedback](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/22741) 

### Initial design review

3/22/2021

Attendees: Auth Exp designer, PO, and PM

Reviewed 2 concepts - one following the existing read/edit mode pattern in other parts of profile, and another autosave concept.  

#### Designs

[Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1616001821140/563f6d0c6a34a52a5708552575b024fdb98e9bfe)

#### Decisions

- We'll go with the read/edit mode for MVP, keeping autosave in our pocket pending user feedback. We'll submit both to design intent review. Rationale:
  - Follows existing UX patterns in profile of read/edit, which increases likelihood that a user can easily use it. Also reduces FE effort
  - Will scale more easily if VA.gov moves to a "one page per thing" model to improve a11y (hope we will)
  - Autosave has additional tech complexities that increase the scope of MVP
- Discussed the following, and determined these would not be included in the MVP due to the level of complexity, unless research tells us otherwise
  - `Unsubscribe from all` functionality
  - Overall `enable/disable` functionality
  - Ability to edit/add contact information directly in the profile
  - Approaching this from a "manage your current notifications" instead of a "see all VA notification options" approach

#### Other options considered that didn't make it to the initial design review phase

1. Handling notification items individually for editing, either through an accordion and/or with their own edit button.  Didn't go this direction because it would become tedious for users once the notification list grows. We're unsure how many notifications we'll launch with, but anticipate 10, and that the list will grow substantially from there.
2. Using toggles instead of checkboxes. Decided against this since it goes against a11y best practices and our VA.gov style guidelines for [checkboxes](https://design.va.gov/components/form-controls#guidance-3) and radio inputs.
3. Addressing notification frequency, and adding search or filters would likely be useful down the road, but not approrpriate MVP. Putting those in my back pocket for now.

## Relevant links

- [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md)

### Version 1.0
- [Mobile prototype](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989653/comment/sitemap?mode=i)
- [Desktop prototype](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989650/comment/sitemap?mode=i) 


### Version 2.0
- [Mobile prototype](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141694444/simulate/sitemap?mode=i)
- [Desktop prototype](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141756016/simulate/sitemap?mode=i)
- [Interactivity](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140721595/simulate/sitemap?mode=i) 
