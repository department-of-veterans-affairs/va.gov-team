# Notification preferences

## Relevant links

- [Mobile designs](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989653/comment/sitemap?mode=i)
- [Desktop designs](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/137989650/comment/sitemap?mode=i) 
- [Desktop prototype](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139049744/simulate/sitemap?mode=i); flow includes adding in missing contact information
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

## URL

URL for this section should [www.va.gov/profile/notifications](http://www.va.gov/profile/notifications) as noted in the [IA recommendations document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/auth-profile-notifications.md).

## Design 

Examples:

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/notifications-mobile-edit-mode.png.jpg)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/notifications-edit-mode-desktop.png)

### Prototypes

- Use prototype links above for latest versions of the prototype.
- Check the documentation tab on the top right side of the prototype for screen-by-screen notes. Not all screens have documentation; orange dot indicates a screen has dev notes.

### Specs

#### Layout / Components

- Follow existing patterns for padding + margins from other parts of profile
- Everything in this section pulls from existing patterns in profile or the VA design system.  There aren't any custom spacing patterns, components or icons. For example, use the site standard to set line height and spacing between `<li>` elements.

#### Accessibility

- Edit, update, and cancel buttons should all have unique aria-labels e.g. "update Applications, claims, decision reviews, and appeals notifications" instead of just "update"
- Screen reader users should understand notification groupings in the same way sighted users understand groupings. e.g. using `role="group"`. This will ensure that the full context is provided to screen reader users upon tabbing into a new group or exiting one E.g. "Notify by text, checkbox, checked, Reminders to finish in-progress applications, Applications, claims, decision reviews, and appeals"
- Lists should be used in read view so screen reader users can known how many notification types exist within each group. A `dl` (definition list) may be most semantically appropriate in this context, but an `ul` unordered list may work with more assistive technology.

## Copy

`h1` and `nav` item reads: Notification settings

Copy below `h1`:

> We’ll use the contact information from your profile to send notifications: 
>
> **user email**
> ​**user mobile phone**
>
> [Update your contact information](/profile/personal-information)

Copy for notification types, channels, groups, and settings will come through VA Profile's API.

## Use cases

### No contact info on file

- Display info background only alert immediately below `h1`
- Hide notifications + groups

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138278598/specification/sitemap?mode=i)

#### Copy

> We don‘t have an email address or mobile phone number for you. To manage notification settings, please [update your contact information](/profile/personal-information).



### Partial contact info (missing email or phone)

- Display the contact information we do have in the section under the `h1`
- Display info background only alert immediately below the "update your contact information link"
- Alert should reference the contact information that's missing

  - Mobile phone number or
  - Email address
- In read mode:
  - If all the notifications in a group have *only* the missing channel, hide the edit button
  - Replace the on/off status message with text.
- In edit mode:
  - The channel corresponding to the missing contact info should be replaced with text. 
  - Do not display a disabled checkbox.

[Static mock-up with notes](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/139109897?mode=i)

[Interactive mock-up, using missing email as example](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139049744/simulate/sitemap?mode=i). The edit button in the last group is interactive so you can see the edit state as well.

#### Copy

**Alert Copy**

> To get notifications by [missing channel], first add your [missing contact info] to your profile.
>
> [Update your contact information] (/profile/personal-information)

**In read mode, replace status information with:**

> To get these notifications, first add your [missing contact info] to your profile. 

**In edit mode, replace relevant checkbox with this text:**

> Want to get these notifications by email? First add your email address to your profile. 

### User who is opted into notifications deletes their associated contact information

If a user is opted into text messages or email notifications, and deletes their associated contact information, we will:

- treat them as if they're not getting notifications regardless of the data VA Profile is sending back. 
  - In the read view, this means they'll see that those notifications are turned off
  - In edit view, they won't have inputs to opt-in/out of notifications.

If a user is opted into text messages or email notifications, and deletes their associated contact information, **and then adds new information later**, we will:

- display all the notifications and options as if they had not ever deleted their information. We'll check with VA Profile in our next sync whether or not they will actually receive notifications at this new email/phone number automatically.

## States

### Edit mode

- Users should only be able to edit one group of notifications at a time.
- No fields are required.
- There are no possible input errors for this form.

### **Successful save**

- Display a success background-only alert immediately after the `h1`, same behavior as what we do in direct deposit.
- Save alert must be announced to screen reader users via `aria-live`. This may be tricky to implement if there is a timer that causes it to disappear. Let's talk to Josh about that. It currently disappears in other areas of the profile; he might bring that up as part of the audit currently in progress as of 4/8/21.

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138069327/comment/sitemap?mode=i)

#### Copy

> We’ve updated your notification settings.

### VA Profile API GET failure (can't load any data about notifications)

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080509/comment/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t access your notification settings at this time. We’re working to fix this problem. Please check back soon.

### Save failure

Display error alert after last `fieldset` and before update/cancel buttons

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138111406/specification/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t save your update at this time. We’re working to fix this problem. Please check back soon.

### Contact endpoint failure

Display warning alert where email/phone and `update contact info` link would normally be

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138111408/specification/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t access your contact information at this time. We’re working to fix this problem. Please check back soon.

## Updates to profile personal and contact information section

- Remove the text in the mobile number section that lets users know whether or not they're receiving health notifications

- Remove the checkbox in edit view for mobile number section that allows users to opt-in/out of notifications

- `Pending usability test in June 2021` Update copy in our confirmation alert so that when a user deletes their mobile number or email address information, they'll see content letting them know they may not receive notifications anymore.  

  [Mock-up, alert displays when someone clicks `Remove [contact info]` button from within mobile phone number](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138799478/simulate/sitemap?mode=i)

  #### Copy

  **Alert copy**

  > This will delete your [mobile number or email address] across many VA records. You may no longer get some or all VA notifications by [text message or email]. You can always come back to your profile later if you want to add your [mobile number or email address] back in.

