# Contact information: address not recognized as entered
**Last updated: February 14, 2024**

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
- User is presented with suggested and entered address as radio button options
- They can select one and choose the “Update” button to save their changes, or
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-848&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-176&mode=design&t=6iSkKX2l8PqjFaHd-11)

### Address can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
- User is presented with the address they entered
- User can select the primary button to confirm what they entered is correct, or
- they can select the secondary button and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-900&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-268&mode=design&t=6iSkKX2l8PqjFaHd-11)

### Address is missing a unit number
- User is presented with the address they entered
- User can select the primary button to confirm what they entered is correct, or
- they can select the secondary and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-885&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-226&mode=design&t=6iSkKX2l8PqjFaHd-11)

### Unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
- User is presented with the address they entered
- User can select the primary button to confirm what they entered is correct, or
- they can select the secondary button and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-870&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-178&mode=design&t=6iSkKX2l8PqjFaHd-11)
  
## Analytics
Our [address validation dashboard](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/) has metrics related to this use case.

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

### Address can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
1. Log into staging.va.gov with vets.gov.user+41@gmail.com ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Update the street address to **600 S. Michigan Ave**
5. Click update

### Address is missing a unit number
1. Log into staging.va.gov with vets.gov.user+41@gmail.com ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
600 S. Michigan Ave
Chicago, IL 60610
5. Click update

### Unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
1. Log into staging.va.gov with vets.gov.user+41@gmail.com ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
600 S. Michigan Ave
B
Chicago, IL 60610
6. Click update
