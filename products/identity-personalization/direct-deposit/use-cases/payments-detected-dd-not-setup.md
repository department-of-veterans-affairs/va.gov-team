# Direct deposit: user receives payments, but hasn't set up direct deposit for any payment type

**Last update: June 19, 2022**

If a LOA3 user logged in with two-factor authentication navigates to the direct deposit page, and we detect they're receiving payments, they'll see different messages in each payment section of the page.

## UX
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/ZOm73bZ)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/4a38jno)

### Compensation and pension payments
- Content prompts user to add account information
- Clicking the `edit` button will enable edit mode within this section. A user can add their routing number, account number, and account type.
- Bank name will be automatically filled in based on the routing number; users can't manually add their bank name.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)

### Education payments
- Users will see content directing them to call VA to set up direct deposit payments
- There is currently no way for users to set up DD pamyents for education benefits online.

## Codes
TBD

## How to reproduce
1. Log in with user vets.gov.user+204
2. Navigate to Profile > Direct deposit
