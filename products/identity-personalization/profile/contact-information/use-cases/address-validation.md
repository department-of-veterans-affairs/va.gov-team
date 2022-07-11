# Contact information: address not recognized as entered
**Last updated: July 11, 2022**

If a user changes their address from the VA.gov profile and that address isn’t recognized by the U.S. Postal Service (USPS), they’ll be provided with a suggestion or an option to:
- use the address as entered
- return to editing
- cancel the edit

## UX
For each scenario, the user is presented with a warning alert component that appears within the address field, above the address they entered. 

We’re aware of accessibility issues with the current implementation, and [proposed improvements back in Q4 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/README.md). These haven’t yet been implemented due to the overlapping [address change messaging modal feature](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-change-messaging/use-cases), since that could create a user flow where many modals appear back to back.


### Address can’t be confirmed with USPS, and a suggested address is found.
- User is presented with suggested and entered address as radio button options
- They can select one and choose the “Use this address” button to save their changes or
- They can press cancel, and will be returned to edit mode
- Desktop mock-up
- Mobile mock-up

### Address and/or unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.

### Address is missing a unit number


## Confirmation screens

After someone sees one of the states of the validation screen above, there are two potential next steps:

1. They edit their address. This will take them back to the edit form.
2. They will either override the determination that their address was a problem, OR they will select a suggested address. Either way, they should move on to a **confirmation screen**. The are **two** states of the confirmation screen:

### Confirmation screen for flows with suggested addresses

- "Update" will close the form and save the new address; "Cancel" or "X" will close the form.
- "View suggested addresses" will take users back to the address validation screen.

**Copy**

### Confirmation screens for flows without suggested addresses

From this screen, "Update" will close the form and save the new address; "Cancel" or "X" will close the form.

**Copy**

## Analytics
## Codes
## How to reproduce
