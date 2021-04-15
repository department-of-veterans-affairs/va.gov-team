# Health facilities

## Relevant links

- [Mobile prototype](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)
- [Desktop prototype](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241/simulate/sitemap?mode=i) 
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md)

## Description

This section of profile allows users to review and edit the list of facilities where they currently receive care.

## When/where to show the health facilities section

- We will show this section to users who have VA health care.
- Should appear in profile nav immediately after direct deposit (as shown in [desktop mock-ups](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241/simulate/sitemap?mode=i))

## Design 

### Prototypes

- Use prototype links above for latest versions of design.
- Check the documentation tab on the top right side of the prototype for screen-by-screen notes. Not all screens have documentation; orange dot indicates a screen has dev notes.

### Specs

- Follow existing patterns for padding + margins from other parts of profile.

- I think this is a new pattern on desktop in that it's 2 columns (value + edit button) instead of 3 in other parts of profile (key + value + edit button).  Please keep 48px of distance between text and the edit button.

  ![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/images/edit-button-spacing.png)

- Everything else in this section pulls from existing patterns in profile or the VA design system.  There aren't any new spacing patterns (aside from above), components or icons. For example, use the site standard to set line height and spacing between `<li>` elements.

Initial state, before a user has made any edits, desktop and mobile (use links above for latest versions):

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/images/facilities-mobile-inital-state.jpg)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/images/facilities-desktop-inital-state.png)

## Copy

`h1` and `nav` item reads

> Your VA health facilities

Copy below `h1`:

> These are the facilities you go to for care. We may use this information when you [schedule an appointment online](va.gov/health-care/schedule-view-va-appointments/appointments/). You can edit this list at any time.

FAQ below list:

> How can I add a new facility?
>
> (Copy pending approval)

## States

### Edit mode

- No fields are required.
- There are no possible input errors for this form.

### **Successful save**

Display a success background-only alert immediately after the `h1`, same behavior as what we do in direct deposit

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138069327/comment/sitemap?mode=i)

#### Copy

> We’ve updated the list of facilities where you currently receive health care.

### Facilites endpoint failure (can't load any data about facilities)

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080509/comment/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t access your list of facilities at this time. We’re working to fix this problem. Please check back soon.

### MPI failure (can't determine whether or not someone has health care)

Follow existing pattern in profile; see this [Slack convo](https://dsva.slack.com/archives/C909ZG2BB/p1618412528068900?thread_ts=1618412235.067300&cid=C909ZG2BB)

#### Copy

Use existing copy.

### Save failure

Display error alert after last `fieldset` and before update/cancel buttons

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080510/comment/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t save your update at this time. We’re working to fix this problem. Please check back soon.

### User has no registered facilities

Display info alert immediately below `h1`, and nothing else.

[Mock-up](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006248/simulate/sitemap?mode=i)

#### Copy

> **We don’t have any current facilities for you in our records.**
>
> You may need to register at a facility. Contact your nearest VA facility’s registration office.
>
> [Find your nearest VA health facility.](https://www.va.gov/find-locations/)

### User has deselected all their facilities

Display copy in place of facility list + note.

[Mock-up](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138280156/simulate/sitemap?mode=i)

#### Copy

> You’re registered at [xx] facilities. But you don’t have any listed as your current facilities right now. You can edit this list to add your current facilities at any time.

[xx] = number of registered facilites
