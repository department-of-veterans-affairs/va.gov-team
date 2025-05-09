# NEW Direct Deposit Use Cases

**Last updated:** May 2025

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

- [User flow]
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


<details><summary>NEEDS: DESIGN (Refer to old designs + staging), LINK TO CODE, QA | Payments detected: Edit direct deposit information</summary>

- **Use case:** Triggered when a user clicks the Edit button.
- **Status code:** None
- **Content:**

**Editing**
- For security purposes, all fields are blank when edit mode is entered.
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

### Flags 
- [Payment Restriction Error (422 status): BGS has flagged the account for fraud](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/flag-fraud.md)
  - [Link to design for messaging](https://www.figma.com/design/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?node-id=1855-3868&t=j194bBgehrlP0O0j-1)
  - [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L123C10-L123C33)
- Routing Number Flagged Error: BGS flagged routing number for fraud
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L37C14-L37C14)
- Generic Error: Used for everything else
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L81)

### Blocked users 
- NO ACTION NEEDED [See documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

### Validation
User tries to update their direct deposit information, but ...
- [Invalid Routing Number Error: Routing number can't be matched with a bank](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md#save-error-routing-number-entered-is-invalid-and-cant-be-matched-to-a-bank)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L65)
- [Invalid Home/Work Phone Number Error: No valid phone number on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L106)
- [Invalid Address Error: No valid mailing address on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/validation-address-phone.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blame/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/direct-deposit/alerts/UpdateErrorAlert.jsx#L93) 

### System
- [Temporary Outage: System is down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/system-cant-display-dd.md)
  - [Link to code for messaging](https://github.com/department-of-veterans-affairs/vets-website/blob/cc4af4e2e0fed33ea05835acd63566fd02970abd/src/applications/personalization/profile/components/direct-deposit/alerts/TemporaryOutage.jsx#L32)
 


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
