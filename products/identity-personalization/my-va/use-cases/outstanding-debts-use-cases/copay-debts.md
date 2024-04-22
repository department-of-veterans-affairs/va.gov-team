# My VA Outstanding Debts Use Case: Copay Debts
**Last updated: February 15, 2024**

For LOA3 users who sign in and have outstanding copay debts, we will show a card for copay debts in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If a logged in LOA3 user has any outstanding copay debts in the combined debt portal, they will see a card in this section that tells them how many copay debts they have and the date this information was last updated, as well as a link to "Manage your VA bills" which links to the copays page of the combined debt portal.
* This card is displayed on the righthand side of the page on desktop if the user also has overpayment debts to show. It is displayed under the overpayment debts card on mobile if a user also has overpayment debts to show.
* If a user only has copays, they will see this card on the lefthand side on desktop and at the top of the list directly under the Outstanding debts header on mobile.
* If a user only has copays and no overpayment debts, they will also see a link to "Learn about VA debt" on the righthand side on desktop, and directly below the copays card on mobile. This links to the [VA debt management page](va.gov/resources/va-debt-management/).
* Uses the [card component](https://design.va.gov/components/card) from the VA design system.
* [Desktop mockup of copay debt only](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A76&mode=design&t=qbn63trCAjh7M4BK-1)
* [Mobile mockup of copay debt only](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A637&mode=design&t=qbn63trCAjh7M4BK-1)
* [Desktop mockup of both copay and overpayment debts](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A135&mode=design&t=qbn63trCAjh7M4BK-1)
* [Mobile mockup of both copay and overpayment debts](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A664&mode=design&t=qbn63trCAjh7M4BK-1)

## How to reproduce
* Find a staging user who has copay debts in the [outstanding debts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-outstanding-debts-section),  or inquire with **benefits team 2** in slack (`#benefits-team-2`) for test users with outstanding copay debts.
* Log into staging.va.gov with a test user who has outstanding copay debts.
* Once logged in, you will be redirected to My VA.
* Verify that you see a card for copay debts under the "Outstanding debts" header.
* Click the link to "Manage your VA bills" and verify that the information in the debt portal matches what you see on My VA.
