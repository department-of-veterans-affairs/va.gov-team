# Notification preferences

## Relevant links

- [Desktop prototype](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989650/comment/sitemap?mode=i) 
- [Mobile prototype](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989653/comment/sitemap?mode=i)
- [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md)

## Description

This section of profile allows users to:

- Manage text and email notification preferences.  
- Review the contact info where notifications will be sent, when we have that information on file.

Notification types (appointment reminder, claim update, etc), channels (text/email), groups (e.g. health care, and settings will come through VA Profile's API.

## When/where to show the notification preferences section

**Show**

- We will always show this section.
- Should appear in profile nav immediately before connected apps (as shown in [desktop mock-ups](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989650/comment/sitemap?mode=i))

## Design 

### Prototypes

- Use [mobile](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989653/comment/sitemap?mode=i ) and [desktop](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989650/comment/sitemap?mode=i) prototypes for latest versions of design.
- Check the documentation tab on the top right side of the prototype for screen-by-screen notes. Not all screens have documentation; orange dot indicates a screen has dev notes.

### Specs

- Follow existing patterns for padding + margins from other parts of profile
- Everything in this section pulls from existing patterns in profile or the VA design system.  There aren't any custom spacing patterns, components or icons. For example, use the site standard to set line height and spacing between `<li>` elements.

## Copy

`h1` and `nav` item reads: Notification settings

Copy below `h1`:

​	We’ll send notifications to the email address and mobile number in your profile: 
​	**user email**
​	**user phone**

​	[Update your contact information] - (link text to profile personal and contact info section)

Copy for notification types, channels, groups, and settings will come through VA Profile's API.

- Until we have groups in the API, section heading in gray box for notifications should read Notifications [as shown here](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138171974/comment/sitemap?mode=i).
- Once we have groups, any notifications that do not have a group assigned will go into an "Other notifications" section, as shown throughout mock-ups.

## UX

- Users should only be able to edit one group of notifications at a time

## States

### **Successful save**

Display a success background-only alert immediately after the `h1`, same behavior as what we do in direct deposit

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138069327/comment/sitemap?mode=i)

#### Copy

We've updated your notification settings

### VA Profile API GET failure (can't load any data about notifications)

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080509/comment/sitemap?mode=i)

#### Copy

We’re sorry. We can’t access your notification settings at this time. We’re working to fix this problem. Please check back soon.

### Save failure

Display error alert after last `fieldset` and before update/cancel buttons

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080510/comment/sitemap?mode=i)

#### Copy

We’re sorry. We can’t save your update at this time. We’re working to fix this problem. Please check back soon.

### Contact endpoint failure

Display warning alert where email/phone and `update contact info` link would normally be

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080511/comment/sitemap?mode=i)

#### Copy

We’re sorry. We can’t access your contact information at this time. We’re working to fix this problem. Please check back soon.

### No contact info on file

TBD
