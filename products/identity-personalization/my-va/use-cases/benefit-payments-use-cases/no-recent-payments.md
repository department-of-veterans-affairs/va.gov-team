# My VA Benefit Payments Use Case: User hasn't received a payment from VA in the last 60 days
**Last updated: June 4, 2024 - replaced links**

For LOA3 users who sign in and have *not* received any payments from VA in the last 60 days, they will see text in the Benefit payments section stating that they have no recent payments to show as well as links to manage their direct deposit information and review their payment history.

## UX

* Any logged in LOA3 user can see the Benefit Payments section on My VA.

### User has not received any payments from VA in the past 60 days but has in the past

* If a logged in LOA3 user has not received a payment from VA in the last 60 days, they will text in this section that says "You have no recent payments to show."
* If a user has received payments from VA before, they will see links to "Manage your direct deposit information" which links to the [direct deposit page](https://www.va.gov/profile/direct-deposit) of their profile and a link to "Review your payment history" which links to the [payment history tool](https://www.va.gov/va-payment-history/payments) directly below the text.
* [Desktop mockup for no recent payments but has received payments before](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-89&t=c2OqcG9WOavV8QTN-1)
* [Mobile mockup for no recent payments but has received payments before](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-730&t=c2OqcG9WOavV8QTN-1)

### User has never received payments from VA

* If a logged in LOA3 user has never received a payment from VA, they will text in this section that says "You have no recent payments to show."
* They will also see a link to "Manage your direct deposit information" which links to the [direct deposit page](https://www.va.gov/profile/direct-deposit) of their profile.
* [Desktop mockup for no payments ever](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-194&t=c2OqcG9WOavV8QTN-1)
* [Mobile mockup for no payments ever](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-741&t=c2OqcG9WOavV8QTN-1)

## How to reproduce
* Find a staging user who has no recent payments in the [benefit payments staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-benefit-payments-section).
* Log into staging.va.gov with a test user who has no recent payments to show.
* Once logged in, you will be redirected to My VA.
* Verify that you see text stating that you have no recent payments to show.
* Verify that you see a link to manage your direct deposit information that links to the direct deposit page of the profile.
* Verify that you see a link to review payment history that takes you to the payment history tool and there have not been any payments made in the last 60 days in the payment history tool. This link should only show for users who have received payments before. It should not show if they have never received a payment from VA.
