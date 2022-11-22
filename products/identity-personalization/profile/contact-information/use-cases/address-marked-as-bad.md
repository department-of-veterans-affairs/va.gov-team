# Contact information: Mailing address is flagged as “bad” in VA profile
**Last updated July 25, 2022**

When mail is sent to a Veteran and then returned to the VA, the address is flagged as “bad” in VA Profile. When a user’s address has this flag, they will be prompted to review and update their mailing address on the personal information and contact information pages in profile. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)
- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/discovery/documentation.md) 
- [User flow](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/7yPo0rZ)
- Sketch mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/eKeeAl0) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/wLqqgOp) 
	- _Note: Mockups begin with Personal information alert._ 
	- _View Contact information alert and states by arrowing right._

## UX
[User flow](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/7J9jY8/a/7yPo0rZ/)

### Personal information page
- Displays an [alert](https://design.va.gov/components/alert#warning-alert)  (VA design system component) directing user to review their mailing address
* Alert disappears once Mailing address is successfully updated and validated.
* [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/JnRG2qz)   
* [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/v/EPqp12/a/wLqqgOp/r/O8adb4) 
	
### Contact information page
* Displays a [background only alert with icon](https://design.va.gov/components/alert#background-color-only-alert-with-icon) in the mailing address section. 
	* Alert ask user to review mailing address and update if it is incorrect.
* Alert persists in edit mode.
* Alerts disappears once Mailing address is successfully updated and validated or when an error message occurs because the address cannot be updated and validated.
* [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/v8jw5bQ) 
* [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/DPaz7ry) 

#### Address validation
- A user can enter the address validation flow if the address they enter warrants it. The UX for this flow is not changed for a user with this flag in their profile.
-[Address validation use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)

### Successful update
- Once the user has successfully updated their address, they’re returned to read mode and a success confirmation is displayed
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/GmlvPr8) 
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/zxJjrY5) 

### Save error
- If the mailing address update can’t be completed, they’ll see an error alert above the update button.
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/eK0eRyp) 
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/dlA4oEm) 

## Codes
N/A

## How to reproduce
1. Go to staging.va.gov/profile and sign in with one of the following users ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
* vets.gov.user+20
* vets.gov.user+21
* vets.gov.user+22
* vets.gov.user+23
* vets.gov.user+24
* vets.gov.user+25
* vets.gov.user+26
2. Follow the prompts in the alerts.
3. If you saved an update for the address for one of these users you can have it display again by signing-out and signing back into staging using a new tab on your browser.


