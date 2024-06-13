# Personal information: User needs to add or update personal information
**Last updated:** February 15, 2024

- Users can view their full name, birth date, and disability rating from this section. They can also view and edit their preferred name and gender identity.
- For preferred name and gender identity:
  - If a user doesn’t have a preferred name or gender identity on file, they’ll see a prompt to add missing information.
  - They can use the “Edit” button to add or update their preferred name and gender identity.
  - Once they’ve added information, they can use the “Update” button to save the information.
  - They cannot delete preferred name or gender identity once they've filled out these fields, since the VA Profile API will not accept a null value for these fields.

## UX
### Adding information
- For each section, the user will see the name of the section and prompt that tells them they can edit their profile to add [section information].
- Clicking the edit button will put the section into edit mode and reveal the necessary fields.
- [Desktop mock-up, add preferred name and gender identity](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-342&mode=design&t=3BjAesVLktQXS6X2-11)
- [Mobile mock-up, add preferred name and gender identity](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-98&mode=design&t=3BjAesVLktQXS6X2-11)

### Editing information
- If someone has already saved a preferred name and gender identity, they can edit this information at any time. Clicking the edit button will put the section into edit mode and reveal the necessary fields.
- [Preferred name edit mode, mobile example](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-113&mode=design&t=3BjAesVLktQXS6X2-11)
- [Gender identitiy edit mode, mobile example](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-169&mode=design&t=3BjAesVLktQXS6X2-11)

### Saving information
- Changes are saved once the user presses the “update” button
- Once the form is successfully saved, the user is returned to “read” mode and a background-only success alert should display above the edit button, as shown in the example below.
- [Save success example](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-73&mode=design&t=3BjAesVLktQXS6X2-11)

### Save error: information can’t be saved
* If we can’t write to the backend for any reason, a generic error message is displayed above the save button. ([Example](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-142&mode=design&t=3BjAesVLktQXS6X2-11))
* If the save continues to fail, the user is returned to read mode with an error displayed in the section they attempted to edit. ([Example](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-90&mode=design&t=3BjAesVLktQXS6X2-11))

### Removing information
- Information cannot be removed for these sections once it is added, since the VA Profile API will not accept a null value for these fields.
- If a user deletes information already saved in the Preferred name section and then clicks outside of the empty text input field, an in-line error message is displayed. ([Mockup](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-128&mode=design&t=3BjAesVLktQXS6X2-11))
- In the Gender identity field, users can select "Prefer not to answer" if they do not wish to provide an answer. 

### Canceling changes
* If a user has made changes to any form field, and hits cancel, they’ll first see the field validation message. This is a limitation of the form system.
* If they hit cancel a second time, or hit cancel before editing any fields they’ll be presented with a modal asking them to confirm they want to leave edit mode. This modal is consistent throughout profile, as described [our contact information docs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#canceling-changes).
* Once they cancel, they’ll be returned to read mode.

## Codes
N/A

## How to reproduce

### Add or edit personal info

1. Go staging.va.gov/profile/contact-information
2. Log in with use, as outlined in the [personal information staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile-personal-information.md)
3. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
4. Click the edit button on any section and add or edit
