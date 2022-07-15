# Contact information: User needs to add contact information
Last updated: July 15, 2022

If a user doesn’t have contact information on file, they’ll see a prompt to add missing information.  They can use the “Edit” button to add their profile information in edit mode. This applies to:

- Mailing address
- Home address
- Home phone
- Work phone
- Mobile phone
- Contact email address

## UX
### Adding information
- For each section, the user will see the name of the section and prompt that tells them they can edit their profile to add [section information].
- Clicking the edit button will put the section into edit mode and reveal the necessary fields.

### Saving information
- Once the form is successfully saved, the user is returned to “read” mode and a background-only success alert should display above the edit button
- [Desktop mock-up, save success](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/zx2qQ2e)
- [Mobile mock-up, save success](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/oYO1LOj)

### Canceling changes
* If a user has made changes to any form field, and hits cancel, they’ll first see the field validation message. This is a limitation of the form system.
* If they hit cancel a second time, or hit cancel before editing any fields they’ll be presented with a modal asking them to confirm they want to leave edit mode.
* Once they cancel, they’ll be returned to read mode

## Codes
N/A

## How to reproduce
**Do not save a mailing address for either of these users**
1. Log in with vets.gov.user+82 or vets.gov.user+221 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Go staging.va.gov/profile/contact-information
3. Click the edit button on *any section except mailing address* and add missing information.
4. Remove the information you added before logging out.

