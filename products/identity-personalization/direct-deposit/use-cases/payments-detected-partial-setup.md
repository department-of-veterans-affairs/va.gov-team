# Direct deposit: user has set up direct deposit for one, but not both benefits

**Last update: June 19, 2022**

If a LOA3 user logged in with two-factor authentication navigates to the direct deposit page, and has only set up direct deposit for one benefit, they'll see different messages in each payment section of the page.

They will also see a block under each payment section called "VA Payment History" that links them to view their payment history for disability compensation, pension, and education benefits.

## UX

### Has set up education direct deposit, and is eligible for compensation or pension payments
- Content in disability and compensation section prompts user to add account information
- Clicking the `Add` button will enable edit mode within this section. 
- Content in education section displays account information, and an `edit button`.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/9P3yvln)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/PGjgyEQ)

### Has set up education direct deposit, and is not eligible for compensation or pension payments
- Content in disability and compensation section guides user to learn more about benefit eligibility
- Content in education section displays account information, and an `edit button`.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/ygD7P9A)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/2530WVM)

### Has set up compensation and pension direct deposit, but has not set up education payments
- Content in compensation and pension section displays account information, and an `edit button`.
- [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md)
- Content in education section directs user to call VA to set up direct deposit payments.
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))
- There is currently no way for users to set up DD pamyents for education benefits online.
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/wLOKyLA)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/WKez5xy)


## Codes
TBD

## How to reproduce
TBD
