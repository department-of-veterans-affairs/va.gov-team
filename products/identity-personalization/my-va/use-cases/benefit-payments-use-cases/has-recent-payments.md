# My VA Outstanding Debts Use Case: User received a payment from VA in the last 60 days
**Last updated: December 14, 2022**

For LOA3 users who sign in and have received a payment from VA in the last 60 days via direct deposit or paper check, we will show a card for their most recent payment in the Benefit Payments section on My VA.

## UX
* Any logged in LOA3 user can see the Benefit Payments section on My VA.
* If a logged in LOA3 user has received a payment from VA in the last 60 days, they will see a card in this section that tells them the dollar amount of the payment, what type of benefit payment it was, the date it was deposited or mailed to them, and a link to "Review your payment history" which links to the [payment history tool](https://www.va.gov/va-payment-history/payments).
* If a user received the payment via direct deposit, then the date text will read "Deposited on" whereas if they received it via mailed paper check, the date text will read "Checked mailed on".
* When a user has a benefit payment card to show regardless of wheher they have direct deposit set up, they will also see a link to "Manage your direct deposit information" which links to the [direct deposit page](https://www.va.gov/profile/direct-deposit) of their profile.
* This card is always displayed on the lefthand side of the page on desktop and at the top of the list directly under the Benefit payments header on mobile.
* Uses the [card component](https://design.va.gov/components/card) from the VA design system.
* [Desktop mockup of direct deposit payment](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/222D00A6-3BFD-4D99-9FCB-A9CE2766E78A)
* [Mobile mockup of direct deposit payment](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1CA9530C-0A0F-4CF6-9597-D76F83143B45)
* [Desktop mockup of mailed paper check payment](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1FEFF140-7526-42A2-9D64-959E152ED415)
* [Mobile mockup of mailed paper check payment](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/38CB47EF-6A94-44CD-B0F8-F6FE999C933D)

## How to reproduce
* Find a staging user who has recent direct deposit or paper check payments in the [benefit payments staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-benefit-payments-section).
* Log into staging.va.gov with a test user who has a recent payment to show.
* Once logged in, you will be redirected to My VA.
* Verify that you see a card for the most recent benefit payment under the "Benefit payments" header.
* Verify that you see a link to manage your direct deposit information that links to the direct deposit page of the profile.
* Click the link to "Review your payment history" and verify that the information in the payment history tool matches what you see on My VA.
