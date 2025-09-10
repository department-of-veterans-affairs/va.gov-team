# Missing contact information flow use cases
**Last updated: August 2025**
- [User flow](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=71-10108&t=xs0tatrc16quiEQo-1)
- [Figma files](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=3-17192&t=xs0tatrc16quiEQo-1)


## Quick Links
Included in this section are descriptions of use cases for the missing contact information alert and flow and links to shared VA.gov profile use cases.
- [Common use cases for My VA: Missing contact information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/missing-contact-information-alert-use-cases.md#common-use-cases-for-my-va-missing-contact-information-alert)
- [Common use cases for Missing contact info: Summary page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/missing-contact-information-alert-use-cases.md#common-use-cases-for-missing-contact-info-summary-page)
- [Common use cases for Modified Edit-as-a-subtask](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/missing-contact-information-alert-use-cases.md#common-use-cases-for-modified-edit-as-a-subtask-add-mobile-phone-number) 
- [Common use cases for Contact information confirmation page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/missing-contact-information-alert-use-cases.md#common-use-cases-for-modified-edit-as-a-subtask-contact-information-update-success-page)

## Common use cases for My VA: Missing contact information alert
### User logs in with LOA3 account
#### Display missing contact information alert with action link
<details><summary> Missing contact information alert</summary>

- **Use case:** When their profile is missing AT LEAST one piece of information used to notify them (contact email address, mailing address, or mobile phone).
- **Staging user:** Any staging user can be used to view the alert. However, they may need to be set up by removing the contact email address and/or mobile phone number from the contact information page. vets.gov.user+12@gmail.com currently does not have a mailing address
- **Format:** Default Alert Component
- **Link to designs:** Missing Contact Information Alert
- **Link to code:** [Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx) and placement on the [dashboard](https://github.com/department-of-veterans-affairs/vets-website/blob/2065c3ce67945b9a8f79f07e651d851f203b4f3f/src/applications/personalization/dashboard/components/Dashboard.jsx#L123)
- **Content:**
Header: We need your contact information
Body: We're missing some contact information for you. Add your full contact information so that we can contact you about your VA benefits
Action Link: Add your contact information


</details>

## Edge cases
### Validation
<details><summary> Accessing URL directly without being signed in</summary>

- **Use case:** When user is not signed in they should be prompted to sign in with their verified account and then it will redirect them to the form as expected
- **Staging user:** No staging user needed
- **Format:** Alert Sign-in Component
- **Link to designs:** Sign-in page
</details>

### Flags
#### Blocked users
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

#### LOA1 users
- [User logs in with an LOA1 account documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors
None


## Common use cases for Missing contact info: Summary page
### User logs in with LOA3 account
#### Missing all or some of their contact info (mobile phone number, contact email, and/or mailing address)
<details><summary> View informational alert</summary>

- **Use case:** User is missing all or some of their contact info (mobile phone number, contact email, and/or mailing address) from their profile and an alert is displayed on the summary page to provide direction
- **Staging user:** vets.gov.user+12@gmail.com does not have a mailing address (do not add a mailing address), you may need to remove the mobile phone number on the contact information page in staging.
- **Format:** Slim Warning alert
- **Link to designs:** Missing contact information warning
- **Link to code:** [Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx) and placement on the [dashboard](https://github.com/department-of-veterans-affairs/vets-website/blob/2065c3ce67945b9a8f79f07e651d851f203b4f3f/src/applications/personalization/dashboard/components/Dashboard.jsx#L123)
- **Content:**
Body: Your [mobile phone, email address, and mailing address] [is/are] missing. Please edit and update the [field/fields].

Additional components displayed for this use case:
A text note above the alert “[A/An] [mobile phone/email address] is required for this application.” (This text is associated with the form structure that this flow was built with)


</details>

<details><summary>Modified Edit-as-a-subtask flow</summary>

- **Use case:** If a user edits their contact information (email, address, phone) by clicking the edit link on the Missing Contact Information Summary page, they will launch the modified edit-as-a-subtask flow. The flow is a single question flow that updates their contact information then directs the user back to the Summary page. This document contains documentation describing the modified edit-as-a-subtask flow. [Here you can find the origional edit-as-a-subtask product documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask) 
- **Format:** See designs for modified example
- [Links to designs](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=43-8774&t=qBnzLOIRS5QmY5ev-1)
- **Content:** See designs

</details>

#### After editing their contact info (mobile phone number, contact email, and/or mailing address)
<details><summary>Saving information: Success</summary>

- **Use case:** When the user selects the Save button in one of the three edit contact information flows (mobile phone number, contact email address, mailing address), and the form successfully saves, the user is returned to the summary page and a slim success alert displays below the section header.
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- **Links to designs:** [Contact Information Updated Success Alert](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=18-3587&t=i2uLN0hrvL891wYV-1)
- **Content:**
Alert Body Copy: “[Mobile phone number/Email address/Mailing address] updated”


</details>

<details><summary>Saving information: Error</summary>

- **Use case:** When the user selects the Continue button and at least one of the three edit contact information fields is blank (mobile phone number, contact email address, mailing address), and the form successfully saves, the user is returned to the summary page and a slim success alert displays below the section header.
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- **Links to designs:** [Missing contact information error alert](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=34-7155&t=i2uLN0hrvL891wYV-1)
- **Content:**
Alert Body Copy: "We still don’t have your [mobile phone, email address, and mailing address]. Please edit and update the field."


</details>

## Edge cases
### Validation
<details><summary> Accessing URL directly without being signed in</summary>

- **Use case:** When user is not signed in they should be prompted to sign in with their verified account and then it will redirect them to the form as expected
- **Staging user:** No staging user needed
- **Format:** Alert Sign-in Component
- **Link to designs:** Sign-in page
</details>

### Flags
#### Blocked users
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

#### LOA1 users
- [User logs in with an LOA1 account documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors

#### System errors
<details><summary>Server issues</summary>

- **Format:** This does not look like a design system component
- **Link to designs:** [Server issues](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=60-13216&t=8zRR5AUIS7qoYnGK-1)
- **Content:**
Alert Body Copy: “[We’re sorry. We’re having some server issues and are working to fix them. Please try applying again in a few moments.](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=60-13216&t=8zRR5AUIS7qoYnGK-1)”

</details>

## Common use cases for Modified Edit-as-a-subtask: Add mobile phone number
### User logs in with LOA3 account
#### Add/Update mobile phone number
<details><summary> Mobile phone number text field</summary>

- **Use case:** Text field is automatically populated with the mobile phone number from their profile if it exists. They can add, edit, or leave the text field as it as is. If there are input errors they show inline with the input field.
- **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the email address from the [contact information page in staging.](https://staging.va.gov/profile/contact-information)
- **Format:** [Text input](https://design.va.gov/storybook/?path=/docs/uswds-va-text-input--docs)
- **Link to designs:** [Text field populated with mobile phone number](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=39-5463&t=aXZQimDQORGaA1ST-1)

  - **Input errors:**
  <details><summary> Submit without entering any characters</summary>

  - **Use case:** LOA3 user will see an inline error message informing them that they must provide a response.
  - **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the mobile phone number from the contact information page in   staging.
  - **Format:** Text input error
  - **Link to designs:** Empty text field without a response inline error
  - **Content:**
  “You must provide a response”


  </details>

  <details><summary> Submit with less than 10 digits</summary>

  - **Use case:** LOA3 user will see an inline error message informing them that they must enter at least 10 character(s).
  - **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the mobile phone number from the contact information page in   staging.
  - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
  - **Link to designs:** [Text field with less than 10 character(s) inline error](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=39-5463&t=aXZQimDQORGaA1ST-1)
  - **Content:**
  “This field should be at least 10 character(s)”


  </details>

  <details><summary> Submit with letters entered</summary>

  - **Use case:** LOA3 user will see an inline error message informing them that they must enter a 10 digit phone number.
  - **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the mobile phone number from the contact information page in staging.
  - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
  - **Link to designs:** [Text field with letters inline error](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=39-5463&t=aXZQimDQORGaA1ST-1)
  - **Content:**
  “Enter a 10 digit phone number”

  </details>

  <details><summary> Submit after entering more than 10 digits in the text field</summary>

  - **Use case:** LOA3 user will see an inline error message informing them that they must enter a 10 digit phone number.
  - **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the mobile phone number from the contact information page in staging.
  - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
  - **Link to designs:** [Text field with more than 10 characters](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=39-5463&t=aXZQimDQORGaA1ST-1)
  - **Content:**
  “Enter a 10 digit phone number”

  </details>

</details>


<details><summary> Submit button after entering in a non US phone number</summary>

- **Use case:** LOA3 user will see a slim error alert if they enter a non US phone number
- **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the mobile phone number from the contact information page in staging.
- **Format:** [Slim Error Alert](https://design.va.gov/storybook/?path=/story/uswds-va-alert--slim)
- **Link to designs:** [U.S. Area codes alert](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=39-5463&t=aXZQimDQORGaA1ST-1)
- **Content:**
“We can’t make this update because we currently only support U.S. area codes. Please provide a U.S.-based phone number”

</details>

## Edge cases
### Validation
None

### Flags
#### Blocked users
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

#### LOA1 users
- [User logs in with an LOA1 account documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors

#### System errors
<details><summary>Server issues</summary>

- **Use case:** LOA3 user will see a slim error alert if there is a backend issue preventing them from submitting their phone number
- **Staging user:** Any staging user can be used to view the “Add your mobile number” page by removing the mobile phone number from the contact information page in staging.
- **Format:** [Slim Error Alert](https://design.va.gov/storybook/?path=/story/uswds-va-alert--slim)
- **Link to designs:** [System Error | Backend system down](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=39-6335&t=aXZQimDQORGaA1ST-1)
- **Content:**
“We’re sorry. We can’t update your information right now. We’re working to fix this problem. Try again later”


</details>
<details><summary>Server issues</summary>

- **Format:** This does not look like a design system component
- **Link to designs:** [Server issues](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=40-6350&t=aXZQimDQORGaA1ST-1)
- **Content:**
Alert Body Copy: “We’re sorry. We’re having some server issues and are working to fix them. Please try applying again in a few moments.”
Buttons: “Yes”, “No”, “Continue your application”

</details>


## Common use cases for Modified Edit-as-a-subtask: Add contact email address
### User logs in with LOA3 account
#### Add/Update contact email address
<details><summary> Contact email address text field</summary>

- **Use case:** Text field is automatically populated with the contact email address from their profile if it exists. They can add, edit, or leave the text field as it as is. If there are input errors they show inline with the input field.
- **Staging user:** Any staging user can be used to view the “Add your email address” page by removing the contact email address from the contact information page in staging.
- **Format:** [Text input](https://design.va.gov/storybook/?path=/docs/uswds-va-text-input--docs)
- **Link to designs:** [Text field missing email address](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=29-4877&t=aXZQimDQORGaA1ST-1), [Text field populated with email address](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=44-15348&t=aXZQimDQORGaA1ST-1)

  - **Input errors:**
    <details><summary> Submit without entering any characters</summary>

    - **Use case:** LOA3 users will see an inline error message informing them that they must enter their email address.
    - **Staging user:** Any staging user can be used to view the “Add your email address” page by removing the mobile phone number from the contact information page in staging
    - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
    - **Link to designs:** [Empty text field without a response inline error](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=44-15349&t=aXZQimDQORGaA1ST-1)
    - **Content:**
  “You must enter your email address, using the format: X@X.com”
    </details>
    
    <details><summary> Submit button with an incomplete domain name</summary>
      
    - **Use case:** LOA3 users will see an inline error message informing them that they must enter their email address and the format they need to follow.
    - **Staging user:** Any staging user can be used to view the “Add your email address” page by removing the mobile phone number from the contact information page in staging.
    - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
    - **Link to designs:** [Text field with an incomplete domain name inline error](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=44-15349&t=aXZQimDQORGaA1ST-1)
    - **Content:**
“You must enter your email address, using the format: X@X.com”

     </details>
     <details><summary> Submit button without characters before the domain name</summary>
      
    - **Use case:** Use case: LOA3 users will see an inline error message informing them that they must enter a valid email address.
    - **Staging user:** Any staging user can be used to view the “Add your email address” page by removing the mobile phone number from the contact information page in staging.
    - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
    - **Link to designs:** [Text field with an invalid email address inline error](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=44-15349&t=aXZQimDQORGaA1ST-1)
    - **Content:**
“You must enter a valid email address”

     </details>
     <details><summary> Submit button without a domain name</summary>
      
    - **Use case:** Use case: LOA3 users will see an inline error message informing them that they must enter a valid email address.
    - **Staging user:** Any staging user can be used to view the “Add your email address” page by removing the mobile phone number from the contact information page in staging.
    - **Format:** [Text input error](https://design.va.gov/storybook/?path=/story/uswds-va-text-input--error)
    - **Link to designs:** [Text field with an invalid email address inline error](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=44-15349&t=aXZQimDQORGaA1ST-1)
    - **Content:**
“You must enter a valid email address”

     </details>

</details>

## Edge cases
### Validation
None

### Flags
#### Blocked users
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

#### LOA1 users
- [User logs in with an LOA1 account documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors

#### System errors
Unknown, this flow was built using a pre-existing form flow and the system errors mirrored what that flow had


</details>

## Common use cases for Modified Edit-as-a-subtask: Add mailing address
### User logs in with LOA3 account
#### Add/Update contact mailing address
<details><summary> Mailing address text entry</summary>

  - **Use case:** Text fields are automatically populated with the mailing address from their profile if it exists. They can add, edit, or leave the text fields as they are. If there are input errors they show inline with the input field.
  - **Staging user:** vets.gov.user+12@gmail.com does not have a mailing address (do not add a mailing address), you may need to remove the contact email on the contact information page in staging.
  - **Link to designs:** [Update mailing address designs](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=268-7415&t=qBnzLOIRS5QmY5ev-1), [Detailed designs for mailing address mirror the designs in Profile: Contact Information](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=2583-28269&t=nto3L3XeTYR9k2tJ-1)

  - Documentation for this use case have been created in other locations and are linked below:
  - [address-validation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-validation)
  - [apo-fpo-dpo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/apo-fpo-dpo)
  - [bad-address-indicator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator)

</details>

## Common use cases for Modified Edit-as-a-subtask: Contact information update success page
### User logs in with LOA3 account and completes the modified Edit-as-a-subtask flow
#### Confirmation of success mobile phone, contact email, and mailing address.
     
<details><summary> Confirmation of success message</summary>
     
- **Use case:** After a user successfully submits complete contact information they will see a confirmation page with a success alert with an action link and two other action links
- **Staging user:** Any staging user can be used to view the “Add your mailing address” page by deleting either the mobile phone number or contact email address from the contact information page in staging.
- **Format:** [Success alert](https://design.va.gov/storybook/?path=/story/uswds-va-alert--success), [Action link](https://design.va.gov/storybook/?path=/docs/components-va-link-action--docs)
- **Link to designs:** [Updated contact information confirmation page](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=49-6193&t=0abBcuqqRUYIwV1C-1)
- **Content:**
  - Success Alert Header: Contact information added to your profile
  - Success Alert body: If you apply for VA benefits, we’ll use this information to contact you with important information about your benefits and how to manage them.  You can change your email and text notification settings in your profile.
  - Action link in Success Alert: “Go to your notification settings in your VA.gov profile”
  - Action link 1: “Go back to My VA”
  - Action link 2: “Go to your profile”
 
</details>
 
## Edge cases
### Validation
None

### Flags
#### Blocked users
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

#### LOA1 users
- [User logs in with an LOA1 account documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors

#### System errors
Unknown, this flow was built using a pre-existing form flow and the system errors mirrored what that flow had

