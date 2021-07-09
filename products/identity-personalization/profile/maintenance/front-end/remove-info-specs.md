# Profile: remove functionality update

## Relevant links

- [UX GitHub issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/23665)
- [FE Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/27169)

## Description

We're moving the functionality to remove contact information outside of the edit functionality and into the read mode of profile. This originated from an [accessibility audit identifying a needed improvement to style buttons to look like buttons](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19562) (instead of links).  Unfortunately, our current design system button options leave us with confusing button hierarchy with three buttons (edit mode contains `update`, `cancel`, and `remove` buttons). 

We decided to move the remove functionality to read mode to improve accessibility, and make it more clear that Veterans have control over their profile information.  This removes guess work around the ability to remove contact info if a Veteran chooses.

These changes impact any part of profile that currently has the "remove" functionality (currently only Personal and Contact information).



## Design 

### Button layout and updated labels

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/mobile-remove-update-labels.png" width="320" />

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/tablet-remove-button-update-labels.jpg" width="768" />

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/desktop-remove-update-labels.jpg)

### Warning modal

See [content section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/maintenance/front-end/remove-info-specs.md#content) for latest copy

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/mobile-warning-modal.png" width="320" />

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/desktop-warning-modal.png" />



### Specs

#### Accessibility

- Remove buttons should all have unique aria-labels e.g. "remove home phone number" instead of just "remove"

#### Components

- Clicking remove button should trigger the [warning modal component](https://design.va.gov/storybook/?path=/docs/components-modal--default#warning) 

#### Layout 

**Personal and contact information page**

- Remove button should display on the right side of the edit button when contact information is present.
- For each section of personal and contact information, delete the link-styled remove button that is currently visible after clicking edit 
- Distance between edit and remove buttons should be 24px
- Responsiveness:
  - On mobile, the edit and remove buttons should stack.
  - On screens 768px - 1024px wide
    - the left hand column (currently a `<dfn>` element) should be 100px; 
  - On screens 1025px wide and above, the left hand column should be 125px
  - On screens 768px and above, the minimum x-padding between columns (label, content, buttons) should be 48px. If that absolutely doesn't work, let's see how 32px looks for the space between the content and buttons.

**Warning modal**

- On screens 768px and higher, remove and cancel buttons should be side by side - I believe the component is set up properly for this
- On mobile:
  - the confirmation and cancel buttons should be 100% width, and stack with 16px between them
  - There should not be horizontal scrolling
  - Heads up: It looks like the warning modal isn't optimized for mobile because it doesn't reflect either of the first two bullet points.

## Content

### Personal and contact information page

Remove the word `address` from labels in the left hand column for the **Addresses** and **Contact email address** sections. 

### Warning modal

#### H3

> Are you sure?

#### Body

> This will remove your [contact information] across these VA benefits and services:
>
> - [If they have health care] VA health care (including prescriptions, appointment reminders, lab and test results, and communications from your VA medical center)
> - Disability compensation
> - Pension benefits
> - Claims and appeals
> - Veteran Readiness and Employment (VR&E)
> - [If contact email or mobile number] Some VA notifications. This means you'll stop getting any VA [email or text] notifications you signed up for.
>
> You can always come back to your profile later if you want to add your [contact information] again. [If contact email] And you can still sign in to VA.gov even after you remove your contact email address.
>
> 

#### Buttons

Primary

> Yes, remove my information

Secondary

> Cancel

## Use cases

### Delete fails 

1. Keep modal open

2. Show a background only error alert above the buttons in the modal.

   Copy:

   > We’re sorry. We can’t save your update at this time. We’re working to fix this problem. Please try again or check back soon.

### Delete pending

1. Show the modal for up to 5 seconds while the delete is pending
2. If the delete has not succeeded or failed after five seconds, close the modal and show our standard "we are saving your change..." message in place of the info user attempted to delete.

