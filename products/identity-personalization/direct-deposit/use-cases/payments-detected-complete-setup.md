# Direct deposit: user has set up direct deposit for both payment types

**Last update: June 22, 2022**

If an ID.me or Login.gov LOA3 user (identity verified) logs in to VA.gov, navigates to the direct deposit page, and has set up direct deposit for comp+pen and education payment, they will be able to view and edit bank account information for both.

## UX and design
- Bank information will show as read-only in the comp+pen section and the education section, which a corresponding `edit` button for both.
- Clicking the `edit` button will enable edit mode within the corresponding section. A user can edit their routing number, account number, and account type.
- Bank name is automatically filled in based on the routing number; users can't edit their bank name.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)
- There is no way for a user to completely remove a direct deposit account online.
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/v8Gk703)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Gm3e1Ww)

## Codes
TBD

## How to reproduce
1. Log in with user vets.gov.user+378
2. Navigate to Profile > Direct deposit
