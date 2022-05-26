# Use Cases: Home address is updated but does not match Mailing address

**Last updated May 24, 2022**

If a user updates their Home address and it does not match their Mailing address, they will be prompted to review and update their Mailing address. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

For more on this, please read the [initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/initiative-brief.md).

View the [discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/documentation.md) and [design FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/frontend/fe-documentation.md).

## UX
- Uses the [modal](link) from the VA design system
- Review the [mock-ups available in Sketch](link) for a visual.
- Address change modal is applied to the Home address only
- The prompt will either appear after address validation has run and the user has confirmed the address via a suggested address OR after validation has run and no address suggestions were provided/needed. 
- Review the [user flow mockup in Mural](https://app.mural.co/t/vsa8243/m/vsa8243/1648492872357/ccc5ced279f2062e7336460965ddc8681e6e9722?sender=u28f508d646c449cc1afe4873)

## Codes

No specific API codes are used in reference to this feature. The main logic for displaying the address change messaging is based on comparing the home and mailing address data to display the dialog modal if the addresses differ.

Within the modal dialog flow, the same API calls and error handing from standard address updates are used.

## Staging users

Any staging test user with a mailing address can be used to test this feature.

During active development **vets.gov.user+36@gmail.com** was the main user that was used.

