# My VA Outstanding Debts Use Case: No Outstanding VA Debt
**Last updated: December 14, 2022**

For LOA3 users who sign in and do not have any outstanding VA debt, we will show the Outstanding Debts section on My VA and text stating that they do not have any debt, as well as a link to Learn about VA debt.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If a logged in LOA3 user does not have any debt in the combined debt portal or their total debt equals 0, they will see text under the "Outstanding debts" header that says "You have no overpayment debts or copays to show."
* A logged in LOA3 user with no overpayment debts will also see a link to "Learn about VA debt" directly below the text stating that they have no debt on desktop and mobile. This links to the [VA debt management page](va.gov/resources/va-debt-management/).
* [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A63&mode=design&t=ZhUs1Oeae2EQjVFh-1)
* [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A627&mode=design&t=ZhUs1Oeae2EQjVFh-1)

## How to reproduce
* Find a staging user who has no outstanding debts in the [outstanding debts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-outstanding-debts-section), or inquire with **benefits team 2** in slack (`#benefits-team-2`) for test users with no outstanding overpayment debts or copay debts.
* Log into staging.va.gov with a test user who has no outstanding debts.
* Once logged in, you will be redirected to My VA.
* Verify that you see text stating that you have no debts to show.
* Verify that you see a link to "Learn about VA debt" directly below that text and that it links to the VA debt management page.
