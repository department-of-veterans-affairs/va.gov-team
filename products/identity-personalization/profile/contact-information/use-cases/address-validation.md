# Contact information: address not recognized as entered
**Last updated: November 10, 2022**

If a user changes their address from the VA.gov profile and that address isn’t recognized by the U.S. Postal Service (USPS), they’ll be provided with a suggestion or an option to:
- use the address as entered
- return to editing
- cancel the edit

[Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)

**Note for upcoming iterations:** After observing users scrolling away from the address validation alert without realizing they had triggered it, we explored a flow that follows the [sub-task pattern](https://design.va.gov/patterns/help-users-to/complete-a-sub-task). [Here's a prototype](https://preview.uxpin.com/72a4060dec9250e4385a9abfaeefec42b3994e00#/pages/159609187/simulate/sitemap?mode=i) showing that state, as well as a simplified header and footer.  The team decided to hold off on moving forward with this due to the current contract status. When we decide to move forward, we'll need to learn more about the simplified header and footer, as well as have our page reviewed by content. The intention is that this page would be showin on the `/profile/edit` URL. Github issue [#48537](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48537) has more background in the comments.

## UX
For each scenario, the user is presented with a [warning alert component](https://design.va.gov/components/alert#warning-alert) that appears within the address field, above the address they entered. 

We’re aware of accessibility issues with the current implementation, and [proposed improvements back in Q4 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/README.md). These haven’t yet been implemented due to the overlapping [address change messaging modal feature](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-change-messaging/use-cases), since that could create a user flow where many modals appear back to back.


### Address can’t be confirmed with USPS, and a suggested address is found.
- Warning alert appears under address section label (mailing or home)
- User is presented with suggested and entered address as radio button options
- They can select one and choose the “Use this address” button to save their changes, or
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/rbJ5V77)
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/4a3Wp3q)

### Address and/or unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
- Warning alert appears under address section label (mailing or home), prompting user to review the information they entered
- User is presented with the address they entered
- User can select “Use this address” button to confirm what they entered is correct, or
- they can select “edit your address” and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/nRj5oKd)
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/3OrW1bw)

### Address is missing a unit number
- Warning alert appears under address section label (mailing or home), prompting user to review the information they entered and check for a unit number
- User is presented with the address they entered
- User can select “Use this address” button to confirm what they entered is correct, or
- they can select “edit your address” and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/qeJ4aVV)
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/WKmL09n)

## Analytics
Our [address validation dashboard](Redirecting…) has metrics related to this use case.

## Codes
N/a

## How to reproduce
### Address can’t be confirmed with USPS, and a suggested address is found.
1. Log into staging.va.gov with any LOA3 user except vets.gov.user+36 ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
811 Vermont Ave
Washington, DC 20010
5. Click update

### Address and/or unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
1. Log into staging.va.gov with any LOA3 user except vets.gov.user+36 ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Update the street address to **600 S. Michigan Ave**
5. Click update

### Address is missing a unit number
1. Log into staging.va.gov with any LOA3 user except vets.gov.user+36 ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
600 S. Michigan Ave
Chicago, IL 60610
5. Click update
