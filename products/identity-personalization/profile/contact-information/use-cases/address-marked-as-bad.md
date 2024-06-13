# Contact information: Mailing address is flagged as “bad” in VA profile
**Last updated:** February 14, 2024

When mail is sent to a Veteran and then returned to the VA, the address is flagged as “bad” in VA Profile. When a user’s address has this flag, they will be prompted to review and update their mailing address on the personal information and contact information pages in profile. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)
- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/documentation.md) 

## UX
- Review behavior `B-1` in the [user flow](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0%3A608&mode=design&t=rqPFqCwnOiocoCbM-1)

### Profil hub page
- Displays an [alert](https://design.va.gov/components/alert#warning-alert)  (VA design system component) directing user to review their mailing address
* Alert disappears once Mailing address is successfully updated and validated.
* [Desktop mock-up](https://www.figma.com/file/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?type=design&node-id=0-185&mode=design&t=5hjp61jNtbzmIl2J-11) 
* [Mobile mock-up](https://www.figma.com/file/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?type=design&node-id=0-15&mode=design&t=5hjp61jNtbzmIl2J-11)
	
### Contact information page
* Displays a [background only alert with icon](https://design.va.gov/components/alert#background-color-only-alert-with-icon) in the mailing address section. 
	* Alert ask user to review mailing address and update if it is incorrect.
* Alert persists in edit mode.
* Alerts disappears once Mailing address is successfully updated and validated or when an error message occurs because the address cannot be updated and validated.
* [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=66-10333&mode=design&t=rqPFqCwnOiocoCbM-11)
* [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-365&mode=design&t=rqPFqCwnOiocoCbM-11) 

#### Address validation
- A user can enter the address validation flow if the address they enter warrants it. The UX for this flow is not changed for a user with this flag in their profile.
-[Address validation use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)

### Successful update
- Once the user has successfully updated their address, they’re returned to read mode and a success confirmation is displayed
- [Mock-ups linked here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#saving-information) 

### Save error
- If the mailing address update can’t be completed, they’ll see an error alert above the save button.
- [Mock-ups linked here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#save-error-information-cant-be-saved) 

## Codes
N/A

## How to reproduce
1. Go to staging.va.gov/profile and sign in with one of the following users ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
* vets.gov.user+26
2. Follow the prompts in the alerts.
3. If you saved an update for the address for one of these users you can have it display again by signing-out and signing back into staging using a new tab on your browser.


