# Contact information: User needs to add or update contact information
Last updated: July 21, 2022

- If a user doesn’t have contact information on file, they’ll see a prompt to add missing information within the relevant section.  
- They can use the “Edit” button to add or update their contact information in edit mode. This applies to:
	- Mailing address
	- Home address
	- Home phone
	- Work phone
	- Mobile phone
	- Contact email address
- Once they’ve added information, they can use the “Remove” button to delete the information on **any section *except* mailing address**.

## UX
### Adding information
- For each section, the user will see the name of the section and prompt that tells them they can edit their profile to add [section information].
- Clicking the edit button will put the section into edit mode and reveal the necessary fields.
- Review mobile phone in [this mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/DPJ0VJJ) to see prompt to add missing information

### Editing information
Clicking the edit button will put the section into edit mode and reveal the necessary fields.
- [Desktop mock-up, edit mode](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/jgJoPJW)
- [Mobile mock-up, editing](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/l14rQ4v)

### Saving information
- Changes are saved once the user presses the “update” button
- Once the form is successfully saved, the user is returned to “read” mode and a background-only success alert should display above the edit button
- [Desktop mock-up, save success](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/zx2qQ2e)
- [Mobile mock-up, save success](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/oYO1LOj)

#### Save error: information can’t be saved
* If we can’t write to the backend for any reason, a generic error message is displayed above the update button. ([Mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/kavrLvD))
* If the save continues to fail, the user is returned to read mode with an error displayed in the section they attempted to edit. ([Mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/Omrvwym))

### Removing information
- Clicking the remove button will trigger a modal prompting the user to confirm they want to remove their information
- [Desktop mock-up, remove modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/YGaqMKL)
- [Mobile mock-up, remove modal](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/KvP8GOr)

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
- Any LOA3 user can access contact information
- You can test with any staging user to add/edit/remove, with the exception of the mailing address field

### Add, edit, or remove contact info, except mailing address
1. Go staging.va.gov/profile/contact-information
2. Log in with any user **except** vets.gov.user+82 or vets.gov.user+221 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
3. Click the edit button on any section and add, edit or remove missing.
4. If a section was blank when you logged in, remove the information you added before logging out by clicking the remove button. You don’t need to remove information you edited if something was already there.

### View profile with no mailing address
**Do not save a mailing address for either of these users**
1. Go staging.va.gov/profile/contact-information 
2. Log in with vets.gov.user+82 or vets.gov.user+221 ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
3. Click the edit button on *any section except mailing address* and add missing information, or edit existing information.
4. Remove the information you added before logging out by clicking the remove button. You don’t need to remove information you edited if something was already there.

