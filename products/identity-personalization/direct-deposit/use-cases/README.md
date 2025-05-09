# NEW Direct Deposit Use Cases

**Last updated:** May 2025

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746465334851/afdc4978dfd4cd9880a90f4066e236095170365b?wid=0-1743526306164&outline=open)
- [Figma files](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=0-1&t=YyRIssxrSn59rYTM-1)
- [Staging test accounts for direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### User logs in with LOA3 account: Direct deposit page content

<details><summary>NEEDS: DESIGN (Refer to staging) | All page content</summary>

- **Use case:** Content shows for all LOA3 users. Bank account information is dynamic, all other information is read only.
- **Status code:** None
- **Content:**

- Card: Bank account information
- Additional info: How to update your direct deposit information for Montgomery GI Bill
- Information alert: What if I think I’ve been the victim of bank fraud?
- Card: VA payment history

- **Format:** See designs
- [Link to designs]
- [Link to code]

</details>


### User logs in with LOA3 account: Bank account information

<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | Ineligible: No payments detected</summary>

- **Use case:** Detected that the user is not receiving any payments.
- **Status code:** TBD
- **Content:**

Our records show that you don’t receive benefit payments from VA.

If you think this is an error, or think you have been a victim of bank fraud call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

- **Format:** Body copy
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/Ineligible.jsx)

</details>


<details><summary>NEEDS: DESIGN (Refer to design linked), LINK TO CODE, STATUS CODES, QA | Payments detected: No direct deposit set up</summary>

- **Use case:** Detected the user is receiving payments, but does not have direct deposit set up.
- **Status code:** TBD
- **Content:** Content prompts user to add account information by clicking the 'Edit' button.
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=0-104&t=YyRIssxrSn59rYTM-1)
- [Link to code]

</details>


<details><summary>NEEDS: DESIGN (Refer to staging, recommend QA account 226), LINK TO CODE | Payments detected: Direct deposit set up</summary>

- **Use case:** Detected the user is receiving payments, and has direct deposit set up.
- **Status code:** 200
- **Content:** Bank information shows as read only, with an option to click an 'Edit' button to change information.
- **Format:** See designs
- [Link to designs]
- [Link to code]

</details>


<details><summary>NEEDS: DESIGN (Refer to old designs + staging), LINK TO CODE | Payments detected: Edit direct deposit information</summary>

- **Use case:** Triggered when a user clicks the Edit button.
- **Status code:** None
- **Content:**

**Editing**
- All fields appear inline in the bank information section. For security purposes, all fields are blank when edit mode is entered.
- Errors appear inline with inputs per VADS component standards.
- [Link to designs]

**Saving changes**
- Once the form is successfully saved, the user is returned to "read" mode and a success alert should display above the edit button.
- When direct deposit information is changed, a confirmation email is sent to the user in case they did not make these updates. We send these emails to both the contact email address in the profile **and** the sign in email address in case of fraud. These confirmation emails have information on how to report fraud.
- [Link to designs](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=0-116&t=YyRIssxrSn59rYTM-1)

**Save errors**
- All save errors are captured in the error section.

**Canceling changes**
- If a user has made changes to any form field, and hits cancel, they'll be presented with a modal asking them to confirm they want to leave edit mode.
- [Link to designs]

- **Format:** See designs
- [Link to code]

</details>


## Edge cases

### Validation

<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | InvalidRoutingNumber: Invalid routing number entered</summary>

- **Use case:** User edits their direct deposit information, a call is made to match the routing number, and the routing number is incorrect. Alert appears above input fields in Bank account information edit use case.
- **Status code:** TBD
- **Content:**

We can’t find a bank linked to the routing number you entered.

Review your routing number and make sure it’s correct.

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L65)

</details>


<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | UpdatePhoneNumberError: Invalid home or work number entered</summary>

- **Use case:** User edits their direct deposit information, a call is made to match the home and work phone, and the information is incorrect. There is no requirement to have valid phone numbers on file, and this is a legacy event from eBenefits. [More context linked here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md). Alert appears above input fields in Bank account information edit use case.
- **Status code:** TBD
- **Content:**

We’re sorry. We couldn’t update your direct deposit bank information because your ${phoneNumberType} phone number is missing or invalid. Please go back to your profile and fill in this required information.

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L106)

</details>


<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | UpdateAddressError: Invalid address entered</summary>

- **Use case:** User edits their direct deposit information, a call is made to match the address, and the information is incorrect. There is no requirement to have valid addresses on file, and this is a legacy event from eBenefits. [More context linked here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md). Alert appears above input fields in Bank account information edit use case.
- **Status code:** TBD
- **Content:**

We’re sorry. We couldn’t update your direct deposit bank information because your mailing address is missing or invalid. Please go back to your profile and fill in this required information.

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L93)

</details>

 
### Flags 

<details><summary>NEEDS: DESIGN (Designs), STATUS CODES, QA | PaymentRestrictionError: Account flagged for fraud</summary>

- **Use case:** User edits their direct deposit information, a call is made to check for fraud, and returns the alert. Alert appears above input fields in Bank account information edit use case.
- **Status code:** TBD
- **Content:**

H2: We couldn't update your direct deposit information

We’re sorry. We couldn’t process your direct deposit update.

What you can do now:

Call us at 800-827-1000 (TTY: 711). Tell the representative you received this message that we couldn’t process your direct deposit update. They’ll help you verify your account details and fix the problem. We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

Or you can contact a regional office near you to come in for help in person. [Find a VA regional office near you (opens in a new tab)](https://www.va.gov/find-locations)

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=1855-3868&t=YyRIssxrSn59rYTM-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L123C10-L123C33)

</details>


<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | FlaggedRoutingNumber: Routing number flagged for fraud</summary>

- **Use case:** User edits their direct deposit information, a call is made to check for routing number fraud, and returns the alert. Alert appears above input fields in Bank account information edit use case.
- **Status code:** TBD
- **Content:**

H2: We couldn't update your direct deposit information

We’re sorry. The bank routing number you entered requires additional verification before we can save your information. To use this bank routing number, you’ll need to call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.

You can also update this information by mail or in person at a VA regional office.

[Learn how to update your direct deposit bank information.](https://www.va.gov/change-direct-deposit/)

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L37)

</details>


### Errors 

<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | GenericError: Used for all other errors</summary>

- **Use case:** Unsure when this is used.
- **Status code:** TBD
- **Content:**

H2: We couldn't update your direct deposit information

We’re sorry. We couldn’t update your payment information. Please try again

- **Format:** [Error alert component](https://design.va.gov/components/alert/#error-alert)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L81)

</details>


#### System error

<details><summary>NEEDS: DESIGN (Refer to code), STATUS CODES, QA | TemporaryOutage: Used for back end system outages</summary>

- **Use case:** Error will appear when we are having issues connecting to the back end, and can't determine if they have direct deposit information to show. There is no action the user can take to correct this.
- **Status code:** TBD
- **Content:**

H2: Direct deposit information isn’t available right now

We’re sorry. Direct deposit information isn’t available right now. We’re doing some maintenance work on this system.

Refresh this page or try again later.

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/TemporaryOutage.jsx#L32)

</details>
 

### Blocked users 
- [See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)
 


# Direct Deposit Use Cases

**Last updated:** February 14, 2024

Direct deposit use case documentation is available in this directory. As of August 2024 this supports C&P as well as Chapter 33 EDU benefits with plans to support Chapter 35 in the future.

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

- [High-level flow](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile-Direct-Deposit?type=design&node-id=0%3A306&mode=design&t=JeBw2hRh9J5QSuL7-1)
- [Staging test accounts for direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 ID.me or Login.gov; No flags on their account
- [No compensation and pension or education payments detected](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md)
- Compensation and pension and/or education benefit payments detected
  - [Has not set up direct deposit (DD) for any payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-dd-not-setup.md)
  - [Has set up DD for one, but not both benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-partial-setup.md)
  - [Has set up DD for both benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-complete-setup.md)
- [User needs to edit account information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)

### User logs in with DS Logon or MyHealtheVet; No flags on their account
- [User has logged in with My HealtheVet or DS Logon](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/gate-mhv-dslogon.md)

## Edge cases

### Flags 
- [LOA3 ID.me or Login.gov user tries to update their bank information, but they have a fraud or identity theft flag on their account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/flag-fraud.md)
#### Blockecd users 
[See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

### Validation
- [LOA3 ID.me or Login.gov user tries to update their compensation and pension direct deposit information, and has entered a routing number that can't be matched with a bank](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md#save-error-routing-number-entered-is-invalid-and-cant-be-matched-to-a-bank)
- [LOA3 ID.me or Login.gov user tries to update their compensation and pension direct deposit information, but they don't have
 have valid home phone, work phone, and/or mailing address in profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md)


### System
- [Something has gone wrong and VA.gov can't display any direct deposit information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/system-cant-display-dd.md)
