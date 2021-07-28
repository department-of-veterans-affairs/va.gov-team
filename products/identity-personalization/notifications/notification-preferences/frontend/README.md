# Notification preferences

## Relevant links

- [Mobile designs](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/140606620/comment/sitemap?mode=i) 
- [Desktop design](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140288788/simulate/no-panels?mode=i)
- [Interactivity](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140637426/simulate/sitemap?mode=i) 
  - Data reflected is not accurate (some notifications have been added/removed to demonstrate behavior)
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

### Prototypes

Use prototype links above for latest versions of the prototype.

### Accessibility

- Screen reader users should understand notification groupings in the same way sighted users understand groupings. e.g. using `role="group"`. This will ensure that the full context is provided to screen reader users upon tabbing into a new group or exiting one E.g. "Notify by text, checkbox, checked, Reminders to finish in-progress applications, Applications, claims, decision reviews, and appeals"
- Lists should be used so screen reader users can known how many notification types exist within each group. A `dl` (definition list) may be most semantically appropriate in this context, but an `ul` unordered list may work with more assistive technology.

### Layout / Components

- H1 gets h2 styling for sizing
- H2s get h3 styling for sizing
- Use style rules from design system for html elements padding and margins
- Use design system components
  -  for checkboxes
  -  For modal
  -  For error and save confirmation
     - background only alert
     - Add icons from the full alerts to the background only alert; this isn't technically in the design system OOB but, other teams use this for auto save confirmation in their forms. Discussed w/ Ryan T and it is fine to use.

## Content

- Notification groups should be listed the following order:
  1. Your Health care (only visible for users with health care)
  2. Applications, claims, appeals, and decision reviews
  3. General VA Information and updates
- Notification items should be listed alphabetically within each group
- In edit mode, `notify by email` should come before `notify by text`
- Source of truth: MVP notification groups and items are [captured in this doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-configuration.md)

### Copy

`h1` and `nav` item reads: Notification settings

Copy below `h1`:

> We’ll use the contact information from your profile to send you notifications: 
>
> **user email**
> ​**user mobile phone**
>
> [Update your contact information](/profile/personal-information)

**Additional info component**

Label

> Learn more about notification options

Content when expanded

> At this time, we can only offer some notifications by both email and text message. We're working to expand options for more notifications. You'll find new options here as we add them.

**Notification groups, channels, and items**

- Group and notification names will come through VA Profile's API

- In the healthcare group, we need to add a note in the bottom, with a link to MHV (directly to profile if you can)

  > Manage your health care email notifications on [My Health*e*Vet]()

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
- The channel corresponding to the missing contact info should be replaced with text. 

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140376735/simulate/no-panels?mode=i)

#### Copy

**Alert Copy**

> To get notifications by [missing channel], first add your [missing contact info] to your profile.
>
> [Update your contact information] (/profile/personal-information)

**Replace checkbox with:**

> To get these [channel] notifications, first add your [missing contact info] to your profile. 

### User who is opted into notifications deletes their associated contact information

If a user is opted into text messages or email notifications, and deletes their associated contact information, we will:

- treat them as if they're not getting notifications regardless of the data VA Profile is sending back. 
  - In the read view, this means they'll see that those notifications are turned off
  - In edit view, they won't have inputs to opt-in/out of notifications.

If a user is opted into text messages or email notifications, and deletes their associated contact information, **and then adds new information later**, we will:

- display all the notifications and options as if they had not ever deleted their information. We'll check with VA Profile in our next sync whether or not they will actually receive notifications at this new email/phone number automatically.

## States

### Update in progress

- Display the word "Saving..." in italics, as seen on VA.gov application forms that autosave. [Video example here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/green-save-pop-up.mov)
- See interaction on the first checkbox in [this mock up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140375964/simulate/sitemap?mode=i)

### **Successful save**

- Display a success background-only alert immediately below the box the user just clicked
- Save alert must be announced to screen reader users via `aria-live="polite"`. 
- Any visible alert should hide when another checkbox is clicked.

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140375964/simulate/sitemap?mode=i); use the first checkbox

#### Copy

> You've updated your VA [SMS text or email] notifications.

### VA Profile API GET failure (can't load any data about notifications)

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080509/comment/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t access your notification settings at this time. We’re working to fix this problem. Please check back soon.

### Save failure

- Display background color only error alert below the checkbox clicked.
- Any visible alert should hide when another checkbox is clicked.

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140376467/simulate/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t save your update at this time. Please try again.

### Contact endpoint failure

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/bb87d0fa61a32938a47e7bcdc836db235ab77576#/pages/138080509/comment/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t access your notification settings at this time. We’re working to fix this problem. Please check back soon.

## Updates to profile personal and contact information section

- Remove the text in the mobile number section that lets users know whether or not they're receiving health notifications

- Remove the checkbox in edit view for mobile number section that allows users to opt-in/out of notifications

- Update copy in our confirmation alert so that when a user deletes their mobile number or email address information, they'll see content letting them know they may not receive notifications anymore.  [See specs for removing contact info for modal content.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/maintenance/front-end/remove-info-specs.md)

  
