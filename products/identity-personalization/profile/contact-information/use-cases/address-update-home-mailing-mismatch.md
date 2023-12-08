# Contact information: Home address is updated but does not match Mailing address
**Last updated:** September 21, 2023

If a user updates their Home address and it does not match their Mailing address, they will be prompted to review and update their Mailing address. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/initiative-brief.md)
- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/documentation.md) 
- User flow and mock-up can be reviewed in the Behavior section of the [mobile canvas](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/p/32C331B8-812D-46FE-AF7D-DCA63C881713/canvas) (B-7, B-7.1, B-7.2)
## UX
- Uses the [modal](https://design.va.gov/components/modal) from the VA design system
- Address change modal is triggered only when an update is made to the home address, and the update does not match the mailing address.
- When the modal appears, the updated home address has already been saved to the profile.
- The modal will either appear:
	-  After address validation has run and the user has confirmed the address via a suggested address OR 
	- After validation has run and no address suggestions were provided/needed OR
	- After validation has run, and the user proceeds with updating their address as entered.
	
### User has updated home address, and mailing address is empty
- Modal appears telling user we don’t have a mailing address on file, asking if mailing should be added to match home
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/25K3vb5)
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/09Vb1eV)

### User has updated home address, and mailing address in profile doesn’t match
- Modal appears showing user two different addresses, asking if mailing should be updated to match home
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/EL2Kvm2)
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/My2J4Zb)

### Successful update
- Once the user has made a selection in the modal, they’ll see a confirmation message with a close button.
- After closing the modal, success alert will display in the relevant sections.
- [Desktop mock-up, success modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/jgvoJ2z)
- [Mobile mock-up, success modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/527MKkp)
- [Desktop mock-up, success alert](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/zx2qQ2e)
- [Mobile mock-up, success alert](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/uuid/317C166F-E508-4490-97EF-EC4FA902748A)

### Save error
- If the mailing address update can’t be completed, , they’ll see an error message with a close button.
- After closing the modal, error alert will display in the mailing address section.
- [Desktop mock-up, error modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/kaZqpZo)
- [Mobile mock-up, error modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/VrAWEG8)
- [Desktop mock-up, error alert](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/1KEOeG8)
- [Mobile mock-up, error alert](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/EL7DyKd)


## Codes
No specific API codes are used in reference to this feature. The main logic for displaying the address change messaging is based on comparing the home and mailing address data to display the dialog modal if the addresses differ.

Within the modal dialog flow, the same API calls and error handing from standard address updates are used.

## Staging users
- Any staging test user with a mailing address can be used to test this feature ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)).
- During active development **vets.gov.user+36@gmail.com** was the main user that was used, but as of 12/1/22 we can't use this user to test this use case.

