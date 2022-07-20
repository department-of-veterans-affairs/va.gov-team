# Contact information: address not recognized as entered
**Last updated: July 19, 2022**

If a user changes their address from the VA.gov profile and that address isn’t recognized by the U.S. Postal Service (USPS), they’ll be provided with a suggestion or an option to:
- use the address as entered
- return to editing
- cancel the edit

[Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)

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
1. Log into staging.va.gov with any LOA3 user ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
811 Vermont Ave
Washington, DC 20010
5. Click update

### Address and/or unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
1. Log into staging.va.gov with any LOA3 user ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Update the street address to **600 S. Michigan Ave**
5. Click update

### Address is missing a unit number
1. Log into staging.va.gov with any LOA3 user ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
600 S. Michigan Ave
Chicago, IL 60610
5. Click update
