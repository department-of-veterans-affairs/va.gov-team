# Profile shared use cases
**Last updated: July 2025**

## Overview
Included in this document are links to all shared VA.gov profile use cases. These use cases are to be reused throughout the profile in order to standardize the experience.


## Common use cases
### Editing information
<details><summary>Adding information</summary>

- **Use case:** For each section without information on file, i.e. a `null` value, the user will see the name of the section and prompt to edit their information to add [section information]. Clicking the Edit button will put the section into an inline edit mode.
- Links to designs
   - [Personal information](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=929-10407&t=IxDeELaasWg4dcVS-1)

</details>


<details><summary>Editing information</summary>

- **Use case:** Clicking the Edit button will put the section into edit mode and reveal the editable fields inline. If there are input errors they show inline with the input field.
- Links to designs
   - [Personal information: Preferred name](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=927-7211&t=IxDeELaasWg4dcVS-1)
   - [Personal information: Messages signature](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=930-4389&t=IxDeELaasWg4dcVS-1)

</details>


<details><summary>Save in progress alert</summary>

- **Use case:** Loading button shows while the users information is in the process of being saved. Field value and buttons are hidden since there is an action in progress.
- **Format:** [Loading indicator in button](https://design.va.gov/components/loading-indicator)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1027-1606&t=lV1Oua0bfedXY6kj-1)

</details>


<details><summary>Saving information</summary>

- **Use case:** When the user selects the Save button, and the form successfully saves, the user is returned to read mode and a slim success alert displays below the section header.
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1027-2055&t=lV1Oua0bfedXY6kj-1)

</details>

LEFT OFF HERE
<details><summary>Removing information</summary>

- **Use case:** All information in the profile that is added, other than below mentioned, can be removed. Upon removal the user is shown a prompt to confirm that they wish to remove the information. Content varies based on page.
   - Preferred name and Mailing address cannot be removed from profile once they are added.
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- Links to designs
   - [Personal information: Messages signature](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=960-8794&t=IxDeELaasWg4dcVS-1)

</details>


<details><summary>Canceling edit changes</summary>

- **Use case:** If a user has made changes to any form field and the field is correctly and completely filled out they'll see a modal warning message asking to confirm if they want to leave edit mode.
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=931-9209&t=IxDeELaasWg4dcVS-1)
- **Content:**

Header: Cancel changes?

You haven’t finished editing and saving the changes to your [H3 section title]. If you cancel now, we won’t save your changes.

Primary button: Yes, cancel my changes

Secondary button: No, go back to editing

</details>


<details><summary>Edit new information while editing</summary>

- **Use case:** If a user attempts to edit a different data point on the page, a modal will trigger informing them they have to complete their action first before starting a new one.
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=931-9449&t=IxDeELaasWg4dcVS-1)
- **Content:**

Header: Save or cancel your edits to [H3 section header]

Before you can edit a new section of your profile, you need to save or cancel your edits to your [H3 section header]. If you cancel, we won't save your in-progress edits.

Primary button: OK

</details>



## Edge cases
### Validation
There are no shared validations.


### Flags
#### Blocked users
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

#### LOA1 users
- [User logs in with an LOA1 account documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors
#### System errors
<details><summary>Backend system down</summary>

- **Use case:** Cannot connect to the back end.
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1023-8131&t=Y5BxBeNwoH5knO1K-1)
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

</details>
