# Direct deposit: user has set up direct deposit for one, but not both benefits

**Last update: February 14, 2024**

If an ID.me or Login.gov LOA3 user (identity verified) logs in to VA.gov, navigates to the direct deposit page, and has only set up direct deposit for one benefit, they'll see different messages in each payment section of the page.

They will also see a block under each payment section called "VA Payment History" that links them to view their payment history for disability compensation, pension, and education benefits.

## UX
### Has set up compensation and pension direct deposit, but has not set up education payments
- Content in compensation and pension section displays account information, and an `edit button`. [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md).
- Education section will show the same state as if the user [does not receive education payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md)/[does not have education payments set up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-dd-not-setup.md#direct-deposit-user-receives-payments-but-hasnt-set-up-direct-deposit-for-any-payment-type).
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))
- There is currently no way for users to set up DD payments for education benefits online.
- [Mock-up of comp & pen section](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-104&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Mock-up of edu section](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-98&mode=design&t=JeBw2hRh9J5QSuL7-11)

### Has set up education direct deposit, and is eligible for compensation or pension payments
- Content in education section displays account information, and an `edit button`. [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md).
- [Content in disability and compensation section prompts user to add account information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-detected-dd-not-setup.md).
- [Mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-306&mode=design&t=JeBw2hRh9J5QSuL7-11)

### Has set up education direct deposit, and is not eligible for compensation or pension payments
- Content in education section displays account information, and an `edit button`. [Read more about edit mode here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/editing-account-info.md). 
- [Content in disability and compensation section guides user to learn more about benefit eligibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md).
- [Mock-up of comp & pen section](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-110&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Review edu section on this screen](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-76&mode=design&t=JeBw2hRh9J5QSuL7-11)


## Codes
N/A

## How to reproduce

### Has set up compensation and pension direct deposit, but has not set up education payments
1. Log into staging with Judy Morrison ([read VAOS staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md))
2. Navigate to direct deposit
3. You will see compensation and pension direct deposit set up, but not education

### Has set up education direct deposit, and is eligible for compensation or pension payments
No test user set up for this use case

### Has set up education direct deposit, and is not eligible for compensation or pension payments
1. Log into staging with users 379, 380, 381, 382 ([direct deposit staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md))
2. Navigate to direct deposit
3. You will see education direct deposit set up, and a message in compensation and pension payments reflecting they can't set up those payments.


