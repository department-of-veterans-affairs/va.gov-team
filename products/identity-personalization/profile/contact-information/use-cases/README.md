# Contact information use cases
**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748544816643/8147634738618bff171962ce84b2f940c888fb03?wid=0-1749014970296&outline=open)
- [Figma files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-34667&t=HML77KqMVILaoozm-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User needs to add, edit, or remove contact information (addresses, phone numbers, or contact email)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#how-to-reproduce)
- [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-update-home-mailing-mismatch.md#staging-users)
- [Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md#how-to-reproduce)
- [Mailing address is flagged as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md#how-to-reproduce)

</details>


## Current experience
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section. [See LOA1 account documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- All information on the page, other than login email, is editable, including:
	- Mailing address
	- Home address
	- Home phone
	- Work phone
	- Mobile phone
	- Contact email address
- Once they’ve added information, they can use the “Remove” button to delete the information on **any section *except* mailing address**.


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


## Edge cases
### Validation
The overall feature has no validation use cases. Specific address validation below.

### Flags
There are no flags with the overall feature. Specific address flags below.

### Errors

<details><summary>Backend system down</summary>

- **Use case:** Cannot connect to the back end.
- **Status code:**
   - 296: Success with some external service errors. External services could be: vet360_contact_information (Vet360), va_profile (MVI), veteran_status (EMIS). [Link to pull request.](https://github.com/department-of-veterans-affairs/vets-api/pull/2738)
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3147-17046&t=V3lMgUB50CWCTPrv-1)
- [Link to code]
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

</details>


<details><summary>Save error: Information can’t be saved</summary>

- **Use case:** If we can’t write to the backend for any reason, a generic error message is displayed under the section header.
   - If the save continues to fail, the user is returned to read mode with an error displayed in the section they attempted to edit.
- **Status code:** TBD
- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3143-14380&t=V3lMgUB50CWCTPrv-1)
- **Content:**

We’re sorry. We can’t update your information right now. We’re working to fix this problem. Try again later.

</details>

### Blocked users 
- [See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)


### Mailing and Home address section
#### Validation
- [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-update-home-mailing-mismatch.md) 
- [Address validation scenarios](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)


#### Flags 
- [Address is marked as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)


#### Errors
No additional error states for addresses.


### Mobile phone section
#### Validation

<details><summary>User enters an international phone number</summary>

- **Use case:** If a user enters an international phone number in the mobile phone section they will be informed via modal that they cannot receive text notifications with an international phone number. They are not stopped from completing this task.
- **Status code:** TBD
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3184-28915&t=Lec9VMwUOLJiae7J-1)
- [Link to code]
- **Content:**

Header: We can’t send text notifications to international phone numbers

[user entered number] is an international phone number. If you save this number, you won’t receive text notifications.

Primary button: Save the number you entered

Secondary button: Edit the number you entered

</details>

#### Flags 
No additional flags for mobile phone numbers.

#### Errors
No additional error states for mobile phone numbers.

---

<details><summary>Archive | Contact Information Use Cases, September 2023</summary>
  
# Contact Information Use Cases
**Last updated:** September 7, 2023

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User needs to add, edit, or remove contact information (addresses, phone numbers, or contact email address)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#adding-information)

## Edge cases
### Flags 
- [Address is marked as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)

### Validation
- [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-update-home-mailing-mismatch.md) 
- [Address isn’t recognized as entered](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)

### System
- [Something has gone wrong and VA.gov can’t display any contact information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/system-cant-display-contact-info.md)
- [High incidences of address save failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Address%20Save%20Failure%20Codes.md)

## Flow diagrams
- [Mobile page of Sketch file](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/p/32C331B8-812D-46FE-AF7D-DCA63C881713/canvas) contains user flow, states, and behaviors

</details>


<details><summary>Archive | High incidences of address save failures, July 2022</summary>

- [High incidences of address save failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Address%20Save%20Failure%20Codes.md)

</details>

