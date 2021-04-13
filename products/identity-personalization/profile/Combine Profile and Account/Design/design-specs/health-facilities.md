# Health facilities
`DRAFT`

## Relevant links

- [Mobile prototype](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006244/simulate/sitemap?mode=i)
- [Desktop prototype](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241/simulate/sitemap?mode=i) 

## Description

This section of profile allows users to review and edit the list of facilities where they currently receive care.

## When/where to show the notification preferences section

**Show**

- We will always show this section.
- Should appear in profile nav immediately after direct deposit (as shown in [desktop mock-ups](https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138006241/simulate/sitemap?mode=i))

## Design 

### Prototypes

- Use prototype links above for latest versions of design.
- Check the documentation tab on the top right side of the prototype for screen-by-screen notes. Not all screens have documentation; orange dot indicates a screen has dev notes.

### Specs

- Follow existing patterns for padding + margins from other parts of profile
- Everything in this section pulls from existing patterns in profile or the VA design system.  There aren't any custom spacing patterns, components or icons. For example, use the site standard to set line height and spacing between `<li>` elements.

## Copy

`h1` and `nav` item reads

> Your VA health facilities

Copy below `h1`:

> These are the facilities you go to for care. We may use this information when you [schedule an appointment online](va.gov/health-care/schedule-view-va-appointments/appointments/). You can edit this list at any time.



## States

### Edit mode

- No fields are required.
- There are no possible input errors for this form.

### **Successful save**

Display a success background-only alert immediately after the `h1`, same behavior as what we do in direct deposit

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138069327/comment/sitemap?mode=i)

#### Copy

> We’ve updated the list of facilities where you currently receive health care.

### Facilites API GET failure (can't load any data about notifications)

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080509/comment/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t access your list of facilities at this time. We’re working to fix this problem. Please check back soon.

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
> To register with a facility, or if you think this message is an error, [find your local VA health care facility](va.gov/find-locations) and contact their registration office.

### User has deselected all their facilities

TBD
