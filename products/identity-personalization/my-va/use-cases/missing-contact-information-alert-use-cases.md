# Missing contact information flow use cases
**Last updated: August 2025**
- [User flow](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=71-10108&t=xs0tatrc16quiEQo-1)
- [Figma files](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=3-17192&t=xs0tatrc16quiEQo-1)


## Quick Links
Included in this section are descriptions of use cases for the missing contact information alert and flow and links to shared VA.gov profile use cases.
- [Common use cases for My VA: Missing contact information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/missing-contact-information-alert-use-cases.md#common-use-cases-for-my-va-missing-contact-information-alert)
- [Common use cases for Missing contact info: Summary page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/missing-contact-information-alert-use-cases.md#common-use-cases-for-missing-contact-info-summary-page)
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
<details><summary> Missing contact information note and warning alert</summary>

- **Use case:** User is missing all or some of their contact info (mobile phone number, contact email, and/or mailing address) from their profile and the user can view the missing contact information summary page with a warning alert and note to provide direction
- **Staging user:** vets.gov.user+12@gmail.com does not have a mailing address (do not add a mailing address), you may need to remove the mobile phone number on the contact information page in staging.
- **Format:** Slim Warning alert
- **Link to designs:** [Missing contact information warning alert and note](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=384-9424&t=qBnzLOIRS5QmY5ev-1)
- **Link to code:** [Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx) and placement on the [dashboard](https://github.com/department-of-veterans-affairs/vets-website/blob/2065c3ce67945b9a8f79f07e651d851f203b4f3f/src/applications/personalization/dashboard/components/Dashboard.jsx#L123)
- **Content:**
Body: Your [mobile phone, email address, and mailing address] [are/is] missing. Please edit and update the [fields/field].

Additional components displayed for this use case:
A text note above the alert “Note: [A/An] [mobile phone, email address, and mailing address] [is/are] required for this application."

[See figma design for additional insight](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=384-9286&t=qBnzLOIRS5QmY5ev-1)


</details>

<details><summary> Missing contact information error alert</summary>

- **Use case:** User clicks "Continue button" at the bottom of the Missing contact inforamtion summary page when they are missing all or some of their contact info (mobile phone number, contact email, and/or mailing address) from their profile. The displayed error alert is there to bring additional attention to the action that the user needs to take.
- **Staging user:** vets.gov.user+12@gmail.com does not have a mailing address (do not add a mailing address), you may need to remove the mobile phone number on the contact information page in staging.
- **Format:** Slim Warning alert
- **Link to designs:** [Missing contact information error alert and note](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=384-9436&t=EYZy4VUUarUrUgHf-1)
- **Link to code:** [Alert](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx) and placement on the [dashboard](https://github.com/department-of-veterans-affairs/vets-website/blob/2065c3ce67945b9a8f79f07e651d851f203b4f3f/src/applications/personalization/dashboard/components/Dashboard.jsx#L123)
- **Content:**
Body: Your [mobile phone, email address, and mailing address] [are/is] missing. Please edit and update the [fields/field].

Additional components displayed for this use case:
A text note above the alert “Note: [A/An] [mobile phone, email address, and mailing address] [is/are] required for this application."

[See figma design for additional insight](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=384-9286&t=qBnzLOIRS5QmY5ev-1)

Note: This stacked alert design does not follow design standards and was only implemented in this way because the form that this flow was built from had this pre-existing behavior.


</details>

<details><summary>Variation on Edit-as-a-subtask flow</summary>

- **Use case:** If a user clicks the edit link on the Missing contact information summary page they are directed to a variation of the edit-as-a-subtask flow. The flow is a single question flow that updates their contact information then directs the user back to the Summary page. [Read about the origional edit-as-a-subtask product here.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask) 
- **Format:** See figma designs for variation example
- [Links to designs](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=396-8387&t=qBnzLOIRS5QmY5ev-1)
- **Content:** See designs


</details>

#### After editing contact info (mobile phone number, contact email, and/or mailing address)
<details><summary>Saving information: Success</summary>

- **Use case:** When the user selects the Save button in one of the three edit contact information flows (mobile phone number, contact email address, mailing address), and the form successfully saves, the user is returned to the summary page and a slim success alert displays below the section header.
- **Format:** [Slim success alert](https://design.va.gov/components/alert/#examples---slim-alert)
- **Links to designs:** [Contact Information Updated Success Alert](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=340-6915&t=TF4axgfIM2rVM5rd-1)
- **Content:**
Alert Body Copy: “[Mobile phone number/Email address/Mailing address] updated”


</details>

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
<details><summary>Server issues | Backend system down </summary>

- **Format:** This does not look like a design system component
- **Link to designs:** [Server issues](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=3-17192&t=Lx4Qu5XjLqcRgjwB-1)
- **Content:**
Alert Body Copy: “[We’re sorry. We’re having some server issues and are working to fix them. Please try applying again in a few moments.](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=60-13216&t=8zRR5AUIS7qoYnGK-1)”

</details>


## Common use cases for Confirmation page
### User logs in with LOA3 account and completes the modified Edit-as-a-subtask flow
#### Confirmation of success mobile phone, contact email, and mailing address.
     
<details><summary> Confirmation of success message</summary>
     
- **Use case:** After a user successfully submits complete contact information they will see a confirmation page with a success alert with an action link and two other action links
- **Staging user:** Any staging user can be used to view the “Add your mailing address” page by deleting either the mobile phone number or contact email address from the contact information page in staging.
- **Format:** [Success alert](https://design.va.gov/storybook/?path=/story/uswds-va-alert--success), [Action link](https://design.va.gov/storybook/?path=/docs/components-va-link-action--docs)
- **Link to designs:** [Updated contact information confirmation page](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=340-6935&t=nIekeJnHenSs3gf8-1)
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

