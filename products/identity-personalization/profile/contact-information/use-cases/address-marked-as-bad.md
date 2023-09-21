# Contact information: Mailing address is flagged as “bad” in VA profile
**Last updated:** September 21, 2023

When mail is sent to a Veteran and then returned to the VA, the address is flagged as “bad” in VA Profile. When a user’s address has this flag, they will be prompted to review and update their mailing address on the personal information and contact information pages in profile. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)
- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/documentation.md) 

## UX
- Review state `S-1` in the [user flow](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/p/32C331B8-812D-46FE-AF7D-DCA63C881713/canvas)

### Personal information page
- Displays an [alert](https://design.va.gov/components/alert#warning-alert)  (VA design system component) directing user to review their mailing address
* Alert disappears once Mailing address is successfully updated and validated.
* [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/JnRG2qz)   - needs to be updated
* [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/m1YlLyw) - needs to be updated
	
### Contact information page
* Displays a [background only alert with icon](https://design.va.gov/components/alert#background-color-only-alert-with-icon) in the mailing address section. 
	* Alert ask user to review mailing address and update if it is incorrect.
* Alert persists in edit mode.
* Alerts disappears once Mailing address is successfully updated and validated or when an error message occurs because the address cannot be updated and validated.
* [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/Ry9ej4W)
* [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/YZjbnKL) 

#### Address validation
- A user can enter the address validation flow if the address they enter warrants it. The UX for this flow is not changed for a user with this flag in their profile.
-[Address validation use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)

### Successful update
- Once the user has successfully updated their address, they’re returned to read mode and a success confirmation is displayed
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/zx2qQ2e) 
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/oYO1LOj) 

### Save error
- If the mailing address update can’t be completed, they’ll see an error alert above the save button.
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/dl71b7E) 
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/kavrLvD) 

## Codes
N/A

## How to reproduce
1. Go to staging.va.gov/profile and sign in with one of the following users ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
* vets.gov.user+26
2. Follow the prompts in the alerts.
3. If you saved an update for the address for one of these users you can have it display again by signing-out and signing back into staging using a new tab on your browser.


