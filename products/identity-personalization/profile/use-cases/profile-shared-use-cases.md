# Profile shared use cases

Last updated: November 2025  


# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [Editing interactions](#editing-interactions)

[Edge cases](#edge-cases)

- [Flags](#flags)

- [Errors](#errors)


# Overview 

Included in this document are links to all shared VA.gov profile use cases. These use cases should be reused throughout the profile in order to standardize the experience.


# Use cases 

## Editing interactions 

### Adding information 

**Description**  
For each section without information on file, i.e. a **null** value, the user will see the name of the section and prompt to **‘Choose edit to add a \[section information\]’**. Only the **Edit** button shows as an action.

Links to designs

* [Personal information](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=929-10407&t=IxDeELaasWg4dcVS-1)  
* [Contact information](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-35605&t=F4OLpadUve3wNj4c-1)  
* Financial information / Direct deposit information  
* Health care settings / Scheduling preferences  
* Health care settings / Messages signature


### Inline editing and validation 

**Description**  
For sections that require a single question to be answered, selecting the Edit button starts inline editing. If there are input errors they show inline with the input field. Currently, most editable fields within profile fall within this category.

Links to designs

* [Personal information](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=929-10407&t=IxDeELaasWg4dcVS-1)  
* [Contact information](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-35605&t=F4OLpadUve3wNj4c-1)  
* Financial information / Direct deposit  
* Health care settings / Scheduling preferences  
* Health care settings / Messages signature


### Edit-as-a-subtask flow 

**Description**  
Users start the edit-as-a-subtask flow for sections that require either;

* Multi-part responses, or  
* The ability to update information away from the source page. Such as updating contact information on the Email and text notifications page.

	  
Subtask flows should consist of single-question pages that return the user back to their original page once completed. These flows help users stay focused on their current task. And help improve accessibility for multi-part questions. [Link to product documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask)

Links to designs

* Health care settings / Scheduling preferences  
* Email and text notifications


### Save in progress 

* **Description:** The loading button shows while the user's information is in the process of being saved. Non editable information such as the header, subheader, or body copy show. Editable information and buttons are hidden until the loading button goes away.  
* **Format:** [Loading indicator in button](https://design.va.gov/components/loading-indicator)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1027-1606&t=DOmnBypDUNqJjlrd-1)


### Saving information: Success 

* **Description:** When the user's information is successfully saved, they’re returned to the view state and a slim success alert displays below the section header or subheader. Standard messaging is: **Update saved**  
* **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2220&t=DOmnBypDUNqJjlrd-1)


### Saving information: Error 

* **Description:** When the user selects the Save button, and the information fails to save, the user is returned to the edit state and a slim error alert displays below the section header or subheader. Standard messaging is: **We’re sorry. We can’t update your information right now. We’re working to fix this problem. Try again later.**  
* **Format:** [Slim error alert](https://design.va.gov/components/alert/#examples---slim-alert)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2221&t=DOmnBypDUNqJjlrd-1)


### Removing information 

* **Description:** Most profile information can be removed, except where noted. When the user attempts to remove information, a warning modal appears to verify the action. See designs for standard messaging.  
* Preferred name, mailing address, and bank account information cannot be removed from profile once added.  
* **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1543-2404&t=DOmnBypDUNqJjlrd-1)


### Cancelling edit changes 

* **Description:** If a user has made changes to any form field, and the field is correctly and completely filled out, they'll see a modal warning message asking to confirm if they want to cancel their changes. See designs for standard messaging.  
* **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1543-2499&t=oksL9gwq5dAnEPVw-1)


### Edit new information while editing 

* **Description:** If a user attempts to edit a different data point on the page, a modal will trigger informing them they have to complete their action first before starting a new one. See designs for standard messaging.  
* **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2223&t=DOmnBypDUNqJjlrd-1)


# Edge cases 

## Flags 

### LOA1 users 

* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### Blocked users

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)


## Errors 

### Full page, backend system down 

* **Description:** Cannot connect to the back end. Impacts the entire page. Alert appears below the H1. No other information appears on the page. See designs for standard messaging.  
* **Status codes:** 500, 501, 502, 503, 504  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1556-8252&t=C4fKcUFWpn2pUvgo-1)

### Section only, backend system down 

* **Description:** Cannot connect to the back end. Impacts a section on a page that has multiple APIs. Alert appears within the section impacted below the header or subheader content. See designs for standard messaging.  
* **Status codes:** 500, 501, 502, 503, 504  
* **Format:** [Slim warning alert component](https://design.va.gov/components/alert/#web-2)  
* [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2228&t=C4fKcUFWpn2pUvgo-1)


---


<details><summary>Archive | Profile shared use cases, July 2025</summary>

# Profile shared use cases
**Last updated: July 2025**

## Overview
Included in this document are links to all shared VA.gov profile use cases. These use cases are to be reused throughout the profile in order to standardize the experience.


## Common use cases
### User logs in with LOA3 account
#### Editing information
<details><summary>Adding information</summary>

- **Use case:** For each section without information on file, i.e. a `null` value, the user will see the name of the section and prompt to edit their information to add [section information]. Clicking the Edit button will put the section into an inline edit mode.
- Links to designs
   - [Personal information](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=929-10407&t=IxDeELaasWg4dcVS-1)
   - [Contact information](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-35605&t=F4OLpadUve3wNj4c-1)

</details>


<details><summary>Editing information</summary>

- **Use case:** Clicking the Edit button will put the section into edit mode and reveal the editable fields inline. If there are input errors they show inline with the input field.
- Links to designs
   - [Personal information: Preferred name](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=927-7211&t=IxDeELaasWg4dcVS-1)
   - [Personal information: Messages signature](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=930-4389&t=IxDeELaasWg4dcVS-1)
   - [Contact information: Address](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-35977&t=HML77KqMVILaoozm-1)
   - [Contact information: Phone number](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3130-24667&t=HML77KqMVILaoozm-1)
   - [Contact information: Email address](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3132-24668&t=HML77KqMVILaoozm-1)
   - [Direct deposit: Bank account information](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=2424-4026&t=aMXjAiZgP3LKZGhy-1)

</details>


<details><summary>Save in progress alert</summary>

- **Use case:** Loading button shows while the users information is in the process of being saved. Field value and buttons are hidden since there is an action in progress.
- **Format:** [Loading indicator in button](https://design.va.gov/components/loading-indicator)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1027-1606&t=lV1Oua0bfedXY6kj-1)

</details>


<details><summary>Saving information: Success</summary>

- **Use case:** When the user selects the Save button, and the form successfully saves, the user is returned to read mode and a slim success alert displays below the section header or sub header.
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- Links to designs
   - [Input success message](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1027-2055&t=lV1Oua0bfedXY6kj-1)
   - [Checkbox success message](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1065-1047&t=lqkwKLq2YPQjoDrR-1)

</details>


<details><summary>Saving information: Error</summary>

- **Use case:** When the user selects the Save button, and the form does not save, the user is returned to edit mode and a slim error alert displays below the section header or sub header.
- **Format:** [Slim error alert](https://design.va.gov/components/alert/#examples---slim-alert)
- Links to designs
   - [Input error message](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1034-634&t=lV1Oua0bfedXY6kj-1)
   - [Checkbox error message](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1065-1043&t=lqkwKLq2YPQjoDrR-1)

</details>


<details><summary>Removing information</summary>

- **Use case:** All information in the profile that is added, other than below mentioned, can be removed. Upon removal the user is shown a prompt to confirm that they wish to remove the information. Content varies based on page.
   - Preferred name and Mailing address cannot be removed from profile once they are added.
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- Links to designs
   - [Personal information: Messages signature](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=960-8794&t=9hBujFpHXKuiKNte-1)
   - [Contact information: All sections](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3143-17044&t=F4OLpadUve3wNj4c-1)

</details>


<details><summary>Canceling edit changes</summary>

- **Use case:** If a user has made changes to any form field, and the field is correctly and completely filled out, they'll see a modal warning message asking to confirm if they want to cancel their changes.
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1034-3377&t=lV1Oua0bfedXY6kj-1)
- **Content:**

Header: Cancel changes?

You haven’t finished editing and saving the changes to your [H3 section title]. If you cancel now, we won’t save your changes.

Primary button: Yes, cancel my changes

Secondary button: No, go back to editing

</details>


<details><summary>Edit new information while editing</summary>

- **Use case:** If a user attempts to edit a different data point on the page, a modal will trigger informing them they have to complete their action first before starting a new one.
- **Format:** [Warning modal](https://design.va.gov/components/modal/#warning)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1034-4134&t=lV1Oua0bfedXY6kj-1)
- **Content:**

Header: Save or cancel your edits to [H3 section header]

Before you can edit a new section of your profile, you need to save or cancel your edits to your [H3 section header]. If you cancel, we won't save your in-progress edits.

Primary button: OK

</details>


<details><summary>Edit-as-a-subtask flow</summary>

- **Use case:** If a user edits their contact information (email, address, phone) not on the Contact information page, they will launch the edit-as-a-subtask flow. The flow is a single question flow that updates their contact information then directs the user back to the page. [Link to product documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask)
- **Status code:** TBD
- **Format:** See designs
- [Links to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1068-1140&t=lqkwKLq2YPQjoDrR-1)
- [Link to code]
- **Content:** See designs

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


<details><summary>Cannot display section information</summary>

- **Use case:** Backend systems that control the individual sections on the pages is down. A slim warning message appears inline under the section header or sub header. It is possible for multiple errors to appear at the same time.
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1042-894&t=2aUKNsBhABYqSK6e-1)
- **Content:**

We're sorry. Something went wrong on our end and we can't load your [h3 section header]. Try again later.

</details>

</details>
