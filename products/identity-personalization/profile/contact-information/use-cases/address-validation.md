# Address validation scenarios

Last updated: January 2026  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748544816643/8147634738618bff171962ce84b2f940c888fb03?sender=u36b374887f74c9a3de2d0750)  
* [Figma files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32858&t=8bYeomyYEZZgmvu7-1)  
* [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

# Overview 

If a user changes their address from the VA.gov Profile and that address isn’t recognized by the U.S. Postal Service (USPS), they’ll be provided with a suggestion or an option to closer match their address to USPS. This is to reduce the number of incorrect addresses. For each scenario, the user is presented with a [warning alert component](https://design.va.gov/components/alert#warning-alert) that appears within the address field, under the section header.

The use cases are driven by the [VA Profile address validation API](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-profile#VAProfile-AddressValidation). Noting, the team has found that if any of these use cases are missing it can cause the API to return errors. Especially in cases of rural addresses. Keep that in consideration if adopting this pattern.

# Use cases 

## SHOW\_SUGGESTIONS\_OVERRIDE | User can select from address entered or suggested address 

* **Description:** One or more confirmed suggestions exist, and none of the unit number issues apply, OR there are multiple suggestions regardless of confirmation status. User is presented with **Address you entered** and **Suggested address** as radio button options to select to move forward with. Or go back to edit.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32873&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L43)

## BAD\_UNIT\_OVERRIDE | Unit number can’t be confirmed with USPS, and a suggestion is not found 

* **Description:** User sees address entered, and it contains a bad unit number (e.g., an apartment number that USPS disagrees with). User is presented with **Address you entered** and can confirm that the information is correct. Or go back to edit.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32870&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L22)

## MISSING\_UNIT\_OVERRIDE | Address is missing a unit number 

* **Description:** Address is missing a unit number per USPS. User is presented with **Address you entered** and can confirm that the information is correct. Or go back to edit.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32868&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L33)

## SHOW\_SUGGESTIONS\_NO\_CONFIRMED\_OVERRIDE | Address entered is viable, and no suggestions from USPS 

* **Description:** The address entered is viable with USPS, there are no confirmed suggestions, and the address does not have a bad or missing unit. The user is presented with the address they entered, and can confirm to move forward with the address as entered. Or go back to edit.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32866&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L50)

## NO\_SUGGESTIONS\_NO\_OVERRIDE | Address can't be confirmed with USPS and is not viable 

* **Description:** User enters a completely invalid address that cannot be confirmed with USPS. User can only return to edit the address.  
* **Status code:** 400  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32864&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L60)

## SHOW\_SUGGESTIONS\_NO\_OVERRIDE | Entered address is invalid, but USPS found a suggested address 

* **Description:** User enters an invalid address, but USPS found a suggestion. User can only proceed with the suggestion. Or go back to edit.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32862&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L69)

## SYSTEM\_ERROR | API call fails 

* **Description:** Triggers when the address validation API call itself fails (e.g., network error, 500 response, or the service can't process the address at all). User is presented with a system error and an option to go back and edit.  
* **Status codes:** 500, 502, 503, 504  
* **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)  
* [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32860&t=8bYeomyYEZZgmvu7-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L79)



---



<details><summary>Archive | Contact information: Address validation scenarios, June 2026</summary>
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
- For each scenario, the user is presented with a [warning alert component](https://design.va.gov/components/alert#warning-alert) that appears within the address field, under the section header.


## Common use cases

<details><summary>SHOW_SUGGESTIONS_OVERRIDE | User can select from address entered or suggested address</summary>

- **Use case:** One or more confirmed suggestions exist, and none of the unit number issues apply, OR there are multiple suggestions regardless of confirmation status. User is presented with Address you entered and Suggested address as radio button options to select to move forward with. Or can return to edit mode.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12654&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L43)
- **Content:**

Header: We can’t confirm the address you entered with the U.S. Postal Service

Tell us which of these addresses you’d like us to use.

</details>


<details><summary>BAD_UNIT_OVERRIDE | Unit number can’t be confirmed with USPS, and a suggestion is not found</summary>

- **Use case:** User sees address entered, and it contains a bad unit number (e.g., an apartment number that USPS disagrees with). User is presented with Address you entered and can confirm that the information is correct. Or, they can return to edit mode.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12650&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L22)
- **Content:**

Header: Confirm your address

U.S. Postal Service records show that there may be a problem with the unit number for this address. Confirm that you want us to use this address as you entered it. Or, cancel to edit the address.

</details>


<details><summary>MISSING_UNIT_OVERRIDE | Address is missing a unit number</summary>

- **Use case:** Address is missing a unit number per USPS. User is presented with Address you entered and can confirm that the information is correct. Or, they can return to edit mode.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12648&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L33)
- **Content:**

Header: Confirm your address

U.S. Postal Service records show this address may need a unit number. Confirm that you want us to use this address as you entered it. Or, go back to edit and add a unit number.

</details>


<details><summary>SHOW_SUGGESTIONS_NO_CONFIRMED_OVERRIDE | Address entered is viable, and no suggestions from USPS</summary>

- **Use case:** The address entered is viable with USPS, there are no confirmed suggestions, and the address does not have a bad or missing unit. The user is presented with the address they entered, and can confirm to move forward with the address as entered. Or go back to edit.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12646&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L50)
- **Content:**

Header: Confirm your address

We can’t confirm the address you entered with the U.S Postal Service. Confirm that you want to us to use this address as you entered it. Or, go back to edit it.

</details>


<details><summary>NO_SUGGESTIONS_NO_OVERRIDE | Address can't be confirmed with USPS and is not viable</summary>

- **Use case:** User enters a completely invalid address that cannot be confirmed with USPS.
- **Status code:** 400
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12644&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L60)
- **Content:**

Header: This address you entered is invalid

We can’t confirm the address you entered with the U.S. Postal Service. You’ll need to go back to edit it.

</details>


<details><summary>SHOW_SUGGESTIONS_NO_OVERRIDE | Entered address is invalid, but USPS found a suggested address</summary>

- **Use case:** User enters an invalid address, but USPS found a suggestion. User can only proceed with the suggestion or go back to edit.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12642&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L69)
- **Content:**

Header: We can’t confirm the address you entered with the U.S. Postal Service

We can use the suggested address we found. Or, you can go back to edit the address you entered.

</details>


<details><summary>SYSTEM_ERROR | API call fails</summary>

- **Use case:** Triggers when the address validation API call itself fails (e.g., network error, 500 response, or the service can't process the address at all). User is presented with a system error and an option to go back and edit.
- **Status code:** 500, 502, 503, 504
- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3866-12640&t=Ic7TBqjpcULWnUDk-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/4b1cb7be2bc1df72d166a85aa88b683ef6b840c8/src/platform/user/profile/vap-svc/constants/addressValidationMessages.js#L79)
- **Content:**

We can't update your address information right now. Refresh this page or try again later.

</details>

</details>













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
