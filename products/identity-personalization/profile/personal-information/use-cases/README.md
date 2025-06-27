# Personal Information Use Cases

**Last updated: June 2025**

- [User flow]
- [Figma files](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=0-1&t=5dhgHTuWdYUMln4l-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- 

</details>

## Current experience
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section. [See LOA1 account documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- The following user information is on the page:
	- Read only information
     - Legal name
     - Date of birth
     - Disability rating
  - Editable information
     - Preferred name
        - Note: Once added there is no way to delete a preferred name. This is a future feature VA Profile is working on.
     - Messages signature (MHV)


## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account

<details><summary>Adding information</summary>

- **Use case:** For each section without information on file, i.e. a `null` value, the user will see the name of the section and prompt that tells them they can edit their profile to add [section information]. Clicking the Edit button will put the section into an inline edit mode.
- **Status code:** None
- **Format:** See designs
- [Links to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-35605&t=HML77KqMVILaoozm-1)
- **Content:** See designs

</details>


<details><summary>Editing information</summary>

- **Use case:** Clicking the Edit button will put the section into edit mode and reveal the editable fields inline. If there are input errors they show inline with the input field.
- **Status code:** None
- **Format:** See designs
- Links to designs
   - [Address](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-35977&t=HML77KqMVILaoozm-1)
   - [Phone number](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3130-24667&t=HML77KqMVILaoozm-1)
   - [Email address](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3132-24668&t=HML77KqMVILaoozm-1)
- **Content:** See designs

</details>


<details><summary>Save in progress alert</summary>

- **Use case:** Shows while the users information is in the process of being saved. Field value and buttons are hidden since there is an action in progress, and we’re waiting for a response to display the correct field value.
- **Status code:** TBD
- **Format:** [Slim information alert](https://design.va.gov/components/alert/#examples---slim-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3143-14380&t=MGmcos4rzcFh3Q1H-1)
- **Content:** We’re working on saving your new [information type]. We’ll show it here once it’s saved.

</details>


<details><summary>Saving information</summary>

- **Use case:** Changes are saved once the user presses the Save button. Once the form is successfully saved, the user is returned to read mode and a slim success alert should display below the section header.
- **Status code:** TBD
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3143-14380&t=V3lMgUB50CWCTPrv-1)
- **Content:** Update saved.

</details>


<details><summary>Removing information</summary>

- **Use case:** Clicking the remove button will trigger a modal prompting the user to confirm they want to remove their information. All entered information can be removed, **other than mailing address.**
- **Status code:** None
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3143-17044&t=V3lMgUB50CWCTPrv-1)
- **Content:**

Header: Are you sure?

This will remove your [section header title] across these VA benefits and services:

- VA health care (including prescriptions, appointment reminders, lab and test results, and communications from your VA medical center)
- Disability compensation
- Pension benefits
- Claims and appeals
- Veteran Readiness and Employment (VR&E)

You can always come back to your profile later if you want to add this home phone number again.

Primary button: Yes, remove my information
Secondary button: No, cancel these changes

</details>


<details><summary>Canceling edit changes</summary>

- **Use case:** If a user has made changes to any form field, has not correctly or completely filled out the field, and hits cancel, they will trigger an inline error.
	- If the field is correctly and completely filled out, or they hit cancel a second time, they'll see a modal warning message asking to confirm if they want to leave edit mode.
- **Status code:** None
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Links to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3143-17044&t=V3lMgUB50CWCTPrv-1)
- **Content:**

Header: Cancel changes?

You haven’t finished editing and saving the changes to your [H3 section title]. If you cancel now, we won’t save your changes.

Primary button: Yes, cancel my changes
Secondary button: No, go back to editing

</details>

- [User needs to add or edit personal information (Preferred name or Gender identity)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/add-edit-personal-info.md)

## Edge cases

### Flags
There are no direct flags associated with this feature. However indirectly, if a user's account is flagged they will be unable to see this section of the profile. [For more details on blocking see the account security FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/frontend_documentation.md#fiduciary-flag--blocked-profile-logic).

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t display any personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-personal-info.md)
- [Something has gone wrong and VA.gov can't display legal name and/or disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-disability-rating-or-legal-name.md)

## Flow diagrams
- [Mobile page of design file](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0%3A1&mode=design&t=3BjAesVLktQXS6X2-1) has user flow

---

<details><summary>Archive | Personal Information Use Cases, February 2024</summary>

# Personal Information Use Cases

**Last updated:** February 15, 2024

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User needs to add or edit personal information (Preferred name or Gender identity)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/add-edit-personal-info.md)

## Edge cases

### Flags
There are no direct flags associated with this feature. However indirectly, if a user's account is flagged they will be unable to see this section of the profile. [For more details on blocking see the account security FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/frontend_documentation.md#fiduciary-flag--blocked-profile-logic).

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t display any personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-personal-info.md)
- [Something has gone wrong and VA.gov can't display legal name and/or disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-disability-rating-or-legal-name.md)

## Flow diagrams
- [Mobile page of design file](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0%3A1&mode=design&t=3BjAesVLktQXS6X2-1) has user flow

</details>
