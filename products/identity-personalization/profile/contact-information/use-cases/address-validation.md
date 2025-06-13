# Contact information: Address validation scenarios
**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748544816643/8147634738618bff171962ce84b2f940c888fb03?wid=0-1749014970296&outline=open)
- [Figma files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3168-11737&t=Lec9VMwUOLJiae7J-1)
- Test Rail QA
- [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)


## Current experience
- If a user changes their address from the VA.gov Profile and that address isn’t recognized by the U.S. Postal Service (USPS), they’ll be provided with a suggestion or an option to:
    - Use either the address as entered or a suggested address
    - Use only the suggested address
    - Use only the entered address
    - Return to editing
    - Cancel the edit
- For each scenario, the user is presented with a [warning alert component](https://design.va.gov/components/alert#warning-alert) that appears within the address field, under the section header.


## Common use cases

<details><summary>SHOW_SUGGESTIONS_OVERRIDE | Address can’t be confirmed with USPS, and a suggested address is found</summary>

- **Use case:** User is presented with Address you entered and Suggested address as radio button options to select to move forward with. Or can return to edit mode to edit the address.
- **Status code:** TBD
- **Content:**

Header: We can’t confirm the address you entered with the U.S. Postal Service

Tell us which of these addresses you’d like us to use.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29740&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L43)

</details>


<details><summary>BAD_UNIT_OVERRIDE | Unit number can’t be confirmed with USPS, and a suggestion is not found</summary>

- **Use case:** User is presented with Address you entered and can confirm that the information is correct. Or, they can return to edit mode.
- **Status code:** TBD
- **Content:**

Header: Confirm your address

U.S. Postal Service records show that there may be a problem with the unit number for this address. Confirm that you want us to use this address as you entered it. Or, cancel to edit the address.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29743&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L22)

</details>


<details><summary>MISSING_UNIT_OVERRIDE | Address is missing a unit number</summary>

- **Use case:** User is presented with Address you entered and can confirm that the information is correct. Or, they can return to edit mode.
- **Status code:** TBD
- **Content:**

Header: Confirm your address

U.S. Postal Service records show this address may need a unit number. Confirm that you want us to use this address as you entered it. Or, go back to edit and add a unit number.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29738&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L33)

</details>


<details><summary>SHOW_SUGGESTIONS_NO_CONFIRMED_OVERRIDE | Address can’t be confirmed with USPS, and a suggestion is not found</summary>

- **Use case:** If the address can't be confirmed with USPS, and a suggestion is not found, the user is presented with the address they entered, and can confirm to move forward with the address as entered. Or go back to edit.
- **Status code:** TBD
- **Content:**

Header: Confirm your address

We can’t confirm the address you entered with the U.S Postal Service. Confirm that you want to us to use this address as you entered it. Or, go back to edit it.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29742&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L50)

</details>


<details><summary>NO_SUGGESTIONS_NO_OVERRIDE | TBD</summary>

- **Use case:** TBD
- **Status code:** TBD
- **Content:**

Header: This address you entered is invalid

We can’t confirm the address you entered with the U.S. Postal Service. You’ll need to go back to edit it.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29744&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L60)

</details>


<details><summary>SHOW_SUGGESTIONS_NO_OVERRIDE | TBD</summary>

- **Use case:** TBD
- **Status code:** TBD
- **Content:**

Header: We can’t confirm the address you entered with the U.S. Postal Service

We can use the suggested address we found. Or, you can go back to edit the address you entered.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29741&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L69)

</details>


<details><summary>VALIDATION_ERROR | TBD</summary>

- **Use case:** TBD
- **Status code:** TBD
- **Content:**

Header: We couldn’t verify your address

We can’t deliver your VA mail to this address because we can’t confirm it with the U.S. Postal Service. Try editing it.

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29746&t=Lec9VMwUOLJiae7J-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L79)

</details>

---

<details><summary>Archive | Contact information: address not recognized as entered, February 2024</summary>

# Contact information: address not recognized as entered
**Last updated: February 14, 2024**

If a user changes their address from the VA.gov profile and that address isn’t recognized by the U.S. Postal Service (USPS), they’ll be provided with a suggestion or an option to:
- use the address as entered
- return to editing
- cancel the edit

[Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)

**Note for upcoming iterations:** After observing users scrolling away from the address validation alert without realizing they had triggered it, we explored a flow that follows the [sub-task pattern](https://design.va.gov/patterns/help-users-to/complete-a-sub-task). [Here's a prototype](https://preview.uxpin.com/72a4060dec9250e4385a9abfaeefec42b3994e00#/pages/159609187/simulate/sitemap?mode=i) showing that state, as well as a simplified header and footer.  The team decided to hold off on moving forward with this due to the current contract status. When we decide to move forward, we'll need to learn more about the simplified header and footer, as well as have our page reviewed by content. The intention is that this page would be showin on the `/profile/edit` URL. Github issue [#48537](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48537) has more background in the comments.

## UX
For each scenario, the user is presented with a [warning alert component](https://design.va.gov/components/alert#warning-alert) that appears within the address field, above the address they entered. 

We’re aware of accessibility issues with the current implementation, and [proposed improvements back in Q4 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/README.md). These haven’t yet been implemented due to the overlapping [address change messaging modal feature](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/address-change-messaging/use-cases), since that could create a user flow where many modals appear back to back.


### Address can’t be confirmed with USPS, and a suggested address is found.
- User is presented with suggested and entered address as radio button options
- They can select one and choose the “Update” button to save their changes, or
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-848&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-176&mode=design&t=6iSkKX2l8PqjFaHd-11)

### Address can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
- User is presented with the address they entered
- User can select the primary button to confirm what they entered is correct, or
- they can select the secondary button and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-900&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-268&mode=design&t=6iSkKX2l8PqjFaHd-11)

### Address is missing a unit number
- User is presented with the address they entered
- User can select the primary button to confirm what they entered is correct, or
- they can select the secondary and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-885&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-226&mode=design&t=6iSkKX2l8PqjFaHd-11)

### Unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
- User is presented with the address they entered
- User can select the primary button to confirm what they entered is correct, or
- they can select the secondary button and return to edit mode
- They can press cancel, and will be returned to read mode
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-870&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-178&mode=design&t=6iSkKX2l8PqjFaHd-11)
  
## Analytics
Our [address validation dashboard](https://analytics.google.com/analytics/web/#/dashboard/pq_-PrkvQleUdCBbV7eq7Q/a50123418w177519031p176188361/) has metrics related to this use case.

## Codes
N/a

## How to reproduce
### Address can’t be confirmed with USPS, and a suggested address is found.
1. Log into staging.va.gov with any LOA3 user except vets.gov.user+36 ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
811 Vermont Ave
Washington, DC 20010
5. Click update

### Address can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
1. Log into staging.va.gov with vets.gov.user+41@gmail.com ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Update the street address to **600 S. Michigan Ave**
5. Click update

### Address is missing a unit number
1. Log into staging.va.gov with vets.gov.user+41@gmail.com ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
600 S. Michigan Ave
Chicago, IL 60610
5. Click update

### Unit number can’t be confirmed with U.S. Postal Service (USPS), and a suggestion is not found.
1. Log into staging.va.gov with vets.gov.user+41@gmail.com ([staging user list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
2. Navigate to the [contact information section](https://staging.va.gov/profile/contact-information), and 
3. Click edit on either address section
4. Use the following address: 
600 S. Michigan Ave
B
Chicago, IL 60610
6. Click update

</details>
