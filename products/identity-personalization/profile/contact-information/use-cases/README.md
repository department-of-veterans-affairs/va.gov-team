# Contact information use cases
**Last updated: June 2025**

- [User flow](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=609-2756&t=fxhpoB08Vs0FbcNc-1)
- [Figma files](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=609-2756&t=iU7vARDUjgIJkIfo-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User needs to add, edit, or remove contact information (addresses, phone numbers, or contact email)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#how-to-reproduce)
- [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-update-home-mailing-mismatch.md#staging-users)
- [Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md#how-to-reproduce)

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
- **Content:** See designs
- **Format:** See designs
- Links to designs
   - [Address]
   - [Phone number]
   - [Email address]

</details>


<details><summary>Editing information</summary>

- **Use case:** Clicking the Edit button will put the section into edit mode and reveal the editable fields inline. If there are input errors they show inline with the input field.
- **Status code:** None
- **Content:** See designs
- **Format:** See designs
- Links to designs
   - [Address]
   - [Phone number]
   - [Email address]

</details>


<details><summary>Saving information</summary>

- **Use case:** Changes are saved once the user presses the Save button. Once the form is successfully saved, the user is returned to Read mode and a slim success alert should display below the section header.
- **Status code:** TBD
- **Content:** See designs
- **Format:** See designs
- Links to designs
   - [Address]
   - [Phone number]
   - [Email address]

</details>


<details><summary>Removing information</summary>

- **Use case:** Clicking the remove button will trigger a modal prompting the user to confirm they want to remove their information. All entered information can be removed, **other than mailing address.**
- **Status code:** None
- **Content:** See designs
- **Format:** See designs
- Links to designs
   - [Address]
   - [Phone number]
   - [Email address]
   - Note: Ashley - if these don't change we only need one file.

</details>


<details><summary>Canceling edit changes</summary>

- **Use case:** If a user has made changes to any form field, has not correctly or completely filled out the field, and hits cancel, they will trigger an inline error. If the field is correctly and completely filled out, or they hit cancel a second time, they'll see a modal warning message asking to confirm if they want to leave edit mode.
- **Status code:** None
- **Content:** See designs
- **Format:** See designs
- Links to designs
   - [Address]
   - [Phone number]
   - [Email address]
   - Note: Ashley - if these don't change we only need one file.

</details>


## Edge cases
### Validation
The overall feature has no validation use cases. Specific address validation below.

### Flags
There are no flags with the overall feature. Specific address flags below.

### Errors

<details><summary>Backend system down</summary>

- **Use case:** Cannot connect to the back end.
- **Status code:** TBD
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-3634&t=iU7vARDUjgIJkIfo-1)
- [Link to code]

</details>


<details><summary>Save error: information can’t be saved</summary>

- **Use case:** If we can’t write to the backend for any reason, a generic error message is displayed under the section header.
   - If the save continues to fail, the user is returned to read mode with an error displayed in the section they attempted to edit.
- **Status code:** TBD
- **Content:** See designs
- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- Link to designs
   - Generic error message
   - [Continue to fail error message](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=0-461&t=Fbas9uepDAVImVy2-1)
- [Link to code]

</details>


### Mailing and Home address section
#### Validation
- DONE [Home address is updated but does not match Mailing address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-update-home-mailing-mismatch.md) 
- DONE [Address validation scenarios](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-validation.md)


#### Flags 
- [Address is marked as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)


#### Errors
- [High incidences of address save failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Address%20Save%20Failure%20Codes.md)

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
