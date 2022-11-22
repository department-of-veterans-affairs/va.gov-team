# Outstanding Debts and Benefit Payments Security Playbook
_Note: This feature is often referred to as Payment info or Payment history_

## Product Description
**Product Overview:** [Payment Info product overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#feature-payment-and-debt-info-on-the-my-va-dashboard)

**Iterations**
- [Payment history v2 project overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#v2-updating-payments-and-debts-to-address-usability-issues-may-2022---current-1) ("Outstanding Debts and Benefit Payments")

## Routes to code
[My VA Payment Info v2](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43332)

## Contacts
_All team members may also be reached via team slack channel: `#accountexp-authexp`_

### Team Members:
- DSVA Product Lead: Samara Strauss, samara.strauss@va.gov
- Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us

### Outage Contacts:
- Authenticated Experience My VA team Frontend engineer: Taylor Mitchell, tmitchell@governmentcio.com 
- Authenticated Experience My VA team Backend engineer : Tom Harrison, tom.harrison@adhocteam.us


## Troubleshooting

### Errors and Metrics
Errors may occur due to issues connecting to the debts or payments API. Users will see an error message letting them know there is a problem.

### Issue investigation steps

#### Outstanding Debts
If an error appears within the "Outstanding debts" section, reach out to the Authenticated Experience team via slack at `#accountexp-authexp` or via email at the addresses listed in this document. Issues occuring due to problems with debts/connection to the debts API will likely then need to be resolved with assistance from Benefits Team 2, who owns debt tools/APIs

#### Benefit Payments
**Payments Not Appearing**
- In the event that payments are not appearing on staging on My VA for a test user, first check if there are recent payments (within last 60 days) on the [payment history](https://staging.va.gov/va-payment-history/payments/) page. 
   - If recent payments _are_ listed on payment history, then check that the backend `profile_user_claims` flag is turned _on_ for all users in staging.
   - If payments are _not_ appearing on the payment history page, or the payment history page appears blank entirely, then we will need assistance from the BGS team to help triage and resolve. The authenticated experience team will help determine the right path and proceed from there.

**Error Messages in the Benefit Payments section on My VA** 
- If an error appears within the "Benefit payments" section, reach out to the Authenticated Experience team via slack at `#accountexp-authexp` or via email at the addresses listed in this document. Issues occuring due to problems with payments/connection to the payments API will likely then need to be resolved with assistance from Benefits Team 1, who owns payment tools/APIs, or with the BGS team. The authenticated experience team will help determine which is the appropriate path depending on the error and proceed from there.


### Flipper Features and Rollback
- The feature flag for this feature is:`show_payment_and_debt_section`

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
