# Notification preferences

## Relevant links

- [Mobile designs](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948765/simulate/sitemap?mode=i) 
- [Desktop design](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140836902/simulate/sitemap?mode=i)
- [Interactivity](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140721595/simulate/sitemap?mode=i) 
- [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md)

## Description

This section of profile allows users to:

- Manage text and email notification preferences.  
- Review the contact info where notifications will be sent, when we have that information on file.

The following data will come through VA Profile's API

- Notification types (appointment reminder, claim update, etc)
- Channels (text/email), groups (e.g. health care
- User settings (null, true, false) will come through

## When/where to show the notification preferences section

**Show**

- We will always show this section.
- Should appear in profile nav immediately before connected apps (as shown in [desktop mock-ups](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140836902/simulate/sitemap?mode=i))

## URL

URL for this section should [www.va.gov/profile/notifications](http://www.va.gov/profile/notifications) as noted in the [IA recommendations document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/auth-profile-notifications.md).

## Design 

### Prototypes

Use [prototype links above](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/frontend/README.md#relevant-links) for latest versions of the prototype.

### Accessibility

- Screen reader users should understand notification groupings in the same way sighted users understand groupings. e.g. using `role="group"`. This will ensure that the full context is provided to screen reader users upon tabbing into a new group or exiting one E.g. "Notify me by text, radio, checked, Reminders to finish in-progress applications, Applications, claims, decision reviews, and appeals"
- Lists should be used so screen reader users can known how many notification types exist within each group. A `dl` (definition list) may be most semantically appropriate in this context, but an `ul` unordered list may work with more assistive technology.


### Layout / Components

- H1 gets h2 styling for sizing
- H2s get h3 styling for sizing
- Use style rules from design system for html elements padding and margins
- Use design system components
  -  warning alerts ([design system documentation](https://design.va.gov/components/alertboxes#warning-alert))
  -  radio input styling ([design system documentation](https://design.va.gov/components/form-controls#radio-buttons))
  -  In the warning alert, use the on this page jump link ([design system documentation](https://design.va.gov/components/on-this-page-jump-links))
- Our input messaging component is being proposed as an experimental design component, and should be used for the save, error, and warning messaging. It's made up of different aspects of the design system:
  - background-only alert, icons, form input validation message
  - All states documented in [these specs](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140847358/simulate/sitemap?mode=i)
  - [Here's the experimental page in the design system docs](https://design.va.gov/experimental-design/input-message)

## Content

- Notification groups should be listed the following order:
  1. Your health care (only visible for users who are enrolled in health care) 
  3. Applications, claims, appeals, and decision reviews (visible to all users)
  4. ~General VA Information and updates~
- Notification items should be listed alphabetically within each group
- Source of truth: MVP notification groups and items are [captured in this doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-configuration.md)
  - **Note:** Prescription shipment and tracking updates should only display for users registered at Asheville and Denver VAMCs
 

### Copy

`h1` and `nav` item reads: Notification settings

Copy below `h1`:

(Update URLS should go directly to that part of personal and contact info, in edit mode if possible)

> We’ll use the contact information from your profile to send you the notifications you choose: 
>
> - **user email** [Update email](/profile/personal-information#edit-contact-email-address)
> - **user mobile phone** [Update mobile phone](/profile/personal-information#edit-mobile-phone-number)

#### **Notification groups, channels, and items**

- Group and notification names will come through VA Profile's API

- In the healthcare group, we need to add a note in the bottom, with a link to MHV (directly to profile if you can)

  > Manage your health care email notifications on [My Health*e*Vet]()

#### **More info under notification groups**

> **Note:** We have limited notification options at this time. Check back for more options in the future.

## Use cases

### Veteran is not enrolled in healthcare and is not eligible for claims or appeals

- Notification settings feature does not display in profile at all

### No contact info on file

- Display warning alert immediately below `h1`
- Hide notifications + groups

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140836903/simulate/sitemap?mode=i)

#### Copy

**Alert Heading** 

> We don’t have your contact information

**Alert Body**

> We don’t have your contact email address or mobile phone number. To manage your notification settings, first update your contact information.

**Alert Link** (use [active link style](https://design.va.gov/design/typography#links) with right chevron)

> [**Update your contact information** >](/profile/personal-information) 

### Partial contact info (missing email or phone)

- Display warning alert immediately below `h1`
- Alert should reference the contact information that's missing
  - Mobile number or
  - Email address
- Alert should be dismissible. 
  - If user dismisses alert, don't show it again.
  - Display the alert for [users who have notifications but haven't made a selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/frontend/README.md#user-has-notifications-for-which-they-have-not-made-a-selection)
- [Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140836904/simulate/sitemap?mode=i)

#### Copy

**Alert Heading:** 

> **We don’t have your [contact information]**

**Alert Body:**

> To manage settings for [channel] notifications, first add a [missing contact information] to your profile.

**Alert Link** (use [active link style](https://design.va.gov/design/typography#links) with right chevron)

> [**Add a [contact information] to your profile** >](/profile/personal-information#edit-[contact information]) 

**Replace radio inputs with:**

> Want to get these notifications by [channel]?  [Add your [contact information]](/profile/personal-information#edit-[contact information])

### User has notifications for which they have not made a selection

Display warning alert immediately below `h1`

#### Copy

**Alert Heading:** 

> **Select your notification options**

**Alert Body:**

> We’ve added notification options to your profile. Tell us how you’d like us to contact you.

**Alert Link** (use [on this page jump link](https://design.va.gov/components/on-this-page-jump-links))

> [Select your notification options](#appointment-reminder-notification) 

### User who is opted into notifications deletes their associated contact information

If a user is opted into text messages or email notifications, and deletes their associated contact information, we will:

- treat them as if they're not getting notifications regardless of the data VA Profile is sending back. 
  - In the read view, this means they'll see that those notifications are turned off
  - In edit view, they won't have inputs to opt-in/out of notifications.

If a user is opted into text messages or email notifications, and deletes their associated contact information, **and then adds new information later**, we will:

- display all the notifications and options as if they had not ever deleted their information. We'll check with VA Profile in our next sync whether or not they will actually receive notifications at this new email/phone number automatically.

## States

All states documented in [these specs](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140847358/simulate/sitemap?mode=i)

### User has not set a preference for a notification

Use the input message pattern with a warning state

#### Copy

> Select an option.

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948765/simulate/sitemap?mode=i)

### Update in progress

- Display the word "Saving..." in italics, as seen on VA.gov application forms that autosave. [Video example here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/green-save-pop-up.mov)
- See interaction in [this mock up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140721595/simulate/sitemap?mode=i)

#### Copy

> *Saving...*

### **Successful save**

- Use the input message pattern with a success state
- Save alert must be announced to screen reader users via `aria-live="polite"`. 
- Any visible alert should not when another checkbox is clicked to prevent a whole lotta jumping around on the page.  We will make improvements to this in a future iteration

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140721595/simulate/sitemap?mode=i); use the first radio button

#### Copy

> Update saved.

### Save failure

- Use the input message pattern with an error state
- Save alert must be announced to screen reader users via `aria-live="polite"`. 
- Any visible alert should not disappear when user interacts with another fieldset to prevent a whole lotta jumping around on the page.  We will make improvements to this in a future iteration

See the 2nd radio input in this [mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140721595/simulate/sitemap?mode=i)

#### Copy

> We’re sorry. We can’t save your update at this time. Please try again.

### VA Profile API GET failure (can't load any data about notifications)

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948808/simulate/sitemap)

#### Copy

> We’re sorry. We can’t access your notification settings at this time. We’re working to fix this problem. Please check back soon.

### Contact endpoint failure

Display error alert immediately after `h1`

[Mock-up](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948808/simulate/sitemap)

#### Copy

> We’re sorry. We can’t access your notification settings at this time. We’re working to fix this problem. Please check back soon.

## Changes to profile personal and contact information section

### Additions

Add success alert to mobile number and email address sections to guide users back to notification settings

Mock-up and copy to come

### Remove

- Text in the mobile number section that lets users know whether or not they're receiving health notifications
- Checkbox in edit view for mobile number section that allows users to opt-in/out of notifications

### Updates

- Update copy in our confirmation alert so that when a user deletes their mobile number or email address information, they'll see content letting them know they may not receive notifications anymore.  [See specs for removing contact info for modal content.](
