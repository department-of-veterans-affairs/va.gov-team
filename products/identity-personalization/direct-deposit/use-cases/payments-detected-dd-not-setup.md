# Direct deposit: user receives payments, but hasn't set up direct deposit for any payment type

**Last update: November 21, 2022**

If an ID.me or Login.gov LOA3 user (identity verified) logs in to VA.gov, navigates to the direct deposit page, and we detect they're receiving payments, they'll see different messages in each payment section of the page.

## UX
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/ZOm73bZ)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/4a38jno)

### Compensation and pension payments
- Content prompts user to add account information
- Clicking the `Add` button will enable edit mode within this section. A user can add their routing number, account number, and account type.
- Bank name will be automatically filled in based on the routing number; users can't manually add their bank name.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)

### Education payments
- Education section will show the same state as if the user [does not receive education payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md). Users will see content directing them to call VA to set up direct deposit payments.
- There is currently no way for users to set up DD pamyents for education benefits online
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))

## Codes

N/A

## How to reproduce

**Do not save any account information for this user.**

1. Log into staging with vets.gov.user+82
2. Navigate to Profile > Direct deposit
3. Do not save any account information for this user.
