# Personal Information Use Cases

**Last updated: June 2025**

- [User flow]
- [Figma files](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=0-1&t=5dhgHTuWdYUMln4l-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User needs to add or update personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/add-edit-personal-info.md#add-or-edit-personal-info)

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
#### Preferred name and Messages signature

<details><summary>Adding information</summary>

- **Use case:** For each section without information on file, i.e. a `null` value, the user will see the name of the section and prompt to edit their profile to add [section information]. Clicking the Edit button will put the section into an inline edit mode.
- **Status code:** None
- **Format:** See designs
- REFERENCE [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=G3wWRZVoO8OcGFyt-1)
- **Content:** See designs

</details>


<details><summary>Editing information</summary>

- **Use case:** Clicking the Edit button will put the section into edit mode and reveal the editable fields inline. If there are input errors they show inline with the input field.
- **Status code:** None
- **Format:** See designs
- REFERENCE Links to designs
   - [Preferred name](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=5dhgHTuWdYUMln4l-1)
   - [Messages signature](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=5dhgHTuWdYUMln4l-1)
- **Content:** See designs

</details>


<details><summary>Save in progress alert</summary>

- **Use case:** Shows while the users information is in the process of being saved. Field value and buttons are hidden since there is an action in progress, and we’re waiting for a response to display the correct field value.
- **Status code:** None
- **Format:** [Loading indicator in button](https://design.va.gov/components/loading-indicator)
- REFERENCE [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=5dhgHTuWdYUMln4l-1)
- **Content:** See designs

</details>


<details><summary>Saving information</summary>

- **Use case:** Changes are saved once the user presses the Save button. Once the form is successfully saved, the user is returned to read mode and a slim success alert should display below the section header.
- **Status code:** 200
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- REFERENCE [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=5dhgHTuWdYUMln4l-1)
- **Content:** Update saved.

</details>


<details><summary>Removing information</summary>

- **Use case:** Preferred name cannot be removed once added.
   - Messages signature can be removed by clicking the remove button, which will trigger a modal prompting the user to confirm they want to remove their information.
- **Status code:** None
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- UNABLE TO TRIGGER [Link to designs]
- **Content:** TBD

</details>


<details><summary>Canceling edit changes</summary>

- **Use case:** If a user has made changes to any form field, has not correctly or completely filled out the field, and hits cancel, they will trigger an inline error.
	- If the field is correctly and completely filled out, or they hit cancel a second time, they'll see a modal warning message asking to confirm if they want to leave edit mode.
- **Status code:** None
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- REFERENCE [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=5dhgHTuWdYUMln4l-1)
- **Content:**

Header: Cancel changes?

You haven’t finished editing and saving the changes to your [H3 section title]. If you cancel now, we won’t save your changes.

Primary button: Yes, cancel my changes

Secondary button: No, go back to editing

</details>


<details><summary>Edit new information while editing</summary>

- **Use case:** If a user attempts to edit a different data point on the page, a modal will trigger informing them they have to complete their action first before starting a new one.
- **Status code:** None
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- REFERENCE [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=890-6189&t=5dhgHTuWdYUMln4l-1)
- **Content:**

Header: Save or cancel your edits to your messages signature

Before you can edit a new section of your profile, you need to save or cancel your edits to your [H3 section header]. If you cancel, we won't save your in-progress edits.

Primary button: OK

</details>


## Edge cases
### Validation
There are no validation use cases for this feature.

### Flags
There are no flags for this feature.

### Errors

<details><summary>System down: Cannot display personal information</summary>

- **Use case:** Backend system that controls the personal information page is down.
- **Status code:** None
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- REFERENCE [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3147-17046&t=GHty9iyEI8JuwTB9-1)
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.

</details>


<details><summary>System down: Cannot display legal name and/or disability rating</summary>

- **Use case:** Backend system that controls the legal name and disability rating are down. A slim warning message appears inline under the section header. It is possible for both of these errors to appear at the same time.
- **Status code:** None
- **Format:** [Warning slim alert component](https://design.va.gov/components/alert/#web-2)
- REFERENCE Links to designs
   - [Legal name](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=0-66&t=5dhgHTuWdYUMln4l-1)
   - [Disability rating](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=0-55&t=G3wWRZVoO8OcGFyt-1)
- **Content:**

Legal name: We're sorry. Something went wrong on our end and we can't load your legal name. Try again later.

Disability rating: We're sorry. Something went wrong on our end and we can't load your disability rating information. Try again later.

</details>


### Blocked users 
- [See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

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
