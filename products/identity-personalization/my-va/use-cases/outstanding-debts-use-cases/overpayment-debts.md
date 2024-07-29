# My VA Outstanding Debts Use Case: Overpayment Debts
**Last updated: June 4, 2024 - replaced links**

For LOA3 users who sign in and have outstanding overpayment debts, we will show a card for overpayment debts in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If a logged in LOA3 user has any outstanding overpayment debts in the combined debt portal, they will see a card in this section that tells them how many overpayment debts they have and the date this information was last updated, as well as a link to "Manage your VA debt" which links to the debts page of the combined debt portal.
* When a user has overpayment debts to show, they will *not* see a link to "Learn about VA debt." [This link only shows when a user does not have overpayment debts to show.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/no-outstanding-debt.md)
* This card is always displayed on the lefthand side of the page on desktop and at the top of the list directly under the Outstanding debts header on mobile.
* Uses the [card component](https://design.va.gov/components/card) from the VA design system.
* [Desktop mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-135&t=vL0aO5eursGuZvci-1)
* [Mobile mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-664&t=vL0aO5eursGuZvci-1)

## How to reproduce
* Find a staging user who has overpayment debts in the [overpayment debts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-outstanding-debts-section), or inquire with **benefits team 2** in slack (`#benefits-team-2`) for test users with outstanding overpayment debts.
* Log into staging.va.gov with a test user who has outstanding overpayment debts.
* Once logged in, you will be redirected to My VA.
* Verify that you see a card for overpayment debts under the "Outstanding debts" header.
* Click the link to "Manage your VA debt" and verify that the information in the debt portal matches what you see on My VA.
