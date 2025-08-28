# Missing contact information flow use cases
**Last updated: August 2025**
- [User flow](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=71-10108&t=xs0tatrc16quiEQo-1)
- [Figma files](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=3-17192&t=xs0tatrc16quiEQo-1)


## Overview
Included in this section are descriptions of use cases for the missing contact information alert and flow and links to shared VA.gov profile use cases.
- [Common use cases for My VA: Missing contact information alert](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/identity-personalization/my-va/use-cases#common-use-cases-for-my-va-missing-contact-information-alert)
- Common use cases for Missing contact info: Summary page
- Common use cases for Missing contact info: Add mobile phone number 
- Common use cases for Missing contact info: Add contact email address 
- Common use cases for Missing contact info: Add mailing address
- Common use cases for Missing contact info: Contact information update confirmation page

## Common use cases for My VA: Missing contact information alert
### User logs in with LOA3 account
#### Display missing contact information alert with action link
<details><summary> Missing contact information alert</summary>

- **Use case:** When their profile is missing AT LEAST one piece of information used to notify them (contact email address, mailing address, or mobile phone).
- **Staging user:** Any staging user can be used to view the alert. However, they may need to be set up by removing the contact email address and/or mobile phone number from the contact information page. vets.gov.user+12@gmail.com currently does not have a mailing address
- **Format:** Default Alert Component
- **Link to designs:** Missing Contact Information Alert
- **Link to code:** ???
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
- **Link to code:** ???
- **Content:**
Body: Your [mobile phone, email address, and mailing address] [is/are] missing. Please edit and update the [field/fields].

Additional components displayed for this use case:
A text note above the alert “[A/An] [mobile phone/email address] is required for this application.” (This text is associated with the form structure that this flow was built with)


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
<details><summary>Backend system down</summary>

- **Server issues:** (Could this actually be a bug?)
- **Format:** This does not look like a design system component
- **Link to designs:** [Server issues](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=60-13216&t=8zRR5AUIS7qoYnGK-1)
- **Link to code:** ???
- **Content:**
Alert Body Copy: “[We’re sorry. We’re having some server issues and are working to fix them. Please try applying again in a few moments.](https://www.figma.com/design/eztyT5LpinAolQPMFnFtw7/Missing-Contact-Info?node-id=60-13216&t=8zRR5AUIS7qoYnGK-1)”

</details>
