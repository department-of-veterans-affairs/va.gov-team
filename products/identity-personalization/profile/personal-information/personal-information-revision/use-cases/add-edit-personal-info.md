# Personal information: User needs to add or update contact information
**Last updated:** August 15, 2022

- If a user doesn’t have personal information on file, they’ll see a prompt to add missing information within the relevant section.  
- They can use the “Edit” button to add or update their personal information in edit mode. This applies to:
	- Preferred name
	- Gender identity
- Once they’ve added information, they can use the “Edit” button to update the information in **both sections mailing address**, but they cannot delete the information entirely.

## UX
### Adding information
- For each section, the user will see the name of the section and prompt that tells them they can edit their profile to add [section information].
- Clicking the edit button will put the section into edit mode and reveal the necessary fields.
- Review mobile phone in [this mock-up] to see prompt to add missing information

### Editing information
Clicking the edit button will put the section into edit mode and reveal the necessary fields.
- [Desktop mock-up, edit mode]
- [Mobile mock-up, editing]

### Saving information
- Changes are saved once the user presses the “update” button
- Once the form is successfully saved, the user is returned to “read” mode and a background-only success alert should display above the edit button
- [Desktop mock-up, save success]
- [Mobile mock-up, save success]

#### Save error: information can’t be saved
* If we can’t write to the backend for any reason, a generic error message is displayed above the update button. ([Mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/kavrLvD))
* If the save continues to fail, the user is returned to read mode with an error displayed in the section they attempted to edit. ([Mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/Omrvwym))

### Removing information
Information cannot be removed for these sections.

### Canceling changes
* If a user has made changes to any form field, and hits cancel, they’ll first see the field validation message. This is a limitation of the form system.
* If they hit cancel a second time, or hit cancel before editing any fields they’ll be presented with a modal asking them to confirm they want to leave edit mode.
* Once they cancel, they’ll be returned to read mode.
- [Desktop mock-up, cancel modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/v8kxv7J)
- [Mobile mock-up, cancel modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/pamAp4p)

## Codes
N/A

## How to reproduce

### Notes
- Any LOA3 user can access personal information
- You can test with any staging user to add/edit

### Add or edit personal info
1. Go staging.va.gov/profile/contact-information
2. Log in with any user **except** vets.gov.user+82 or vets.gov.user+221 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
3. Click the edit button on any section and add or edit
