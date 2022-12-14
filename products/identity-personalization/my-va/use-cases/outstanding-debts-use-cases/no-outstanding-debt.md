# My VA Outstanding Debts Use Case: No Outstanding VA Debt
**Last updated: December 14, 2022**

For LOA3 users who sign in and do not have any outstanding VA debt, we will show the Outstanding Debts section on My VA and text stating that they do not have any debt, as well as a link to Learn about VA debt.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If a logged in LOA3 user does not have any debt in the combined debt portal or their total debt equals 0, they will see text under the "Outstanding debts" header that says "You have no overpayment debts or copays to show."
* A logged in LOA3 user with no overpayment debts will also see a link to "Learn about VA debt" directly below the text stating that they have no debt on desktop and mobile. This links to the [VA debt management page](va.gov/resources/va-debt-management/).
* [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/05DF131D-F900-4770-A3D3-D3F4FAA23FD3)
* [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A2F44369-D9B0-41F6-99FE-F41269378DA9)

## How to reproduce
* Find a staging user who has no outstanding debts in the [outstanding debts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-outstanding-debts-section).
* Log into staging.va.gov with a test user who has no outstanding debts.
* Once logged in, you will be redirected to My VA.
* Verify that you see text stating that you have no debts to show.
* Verify that you see a link to "Learn about VA debt" directly below that text.
