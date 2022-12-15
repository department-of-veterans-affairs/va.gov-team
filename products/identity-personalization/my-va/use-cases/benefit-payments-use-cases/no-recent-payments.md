# My VA Benefit Payments Use Case: User hasn't received a payment from VA in the last 60 days
**Last updated: December 14, 2022**

For LOA3 users who sign in and have *not* received any payments from VA in the last 60 days, they will see text in the Benefit payments section stating that they have no recent payments to show as well as links to manage their direct deposit information and review their payment history.

## UX

* Any logged in LOA3 user can see the Benefit Payments section on My VA.

### User has not received any payments from VA in the past 60 days but has in the past

* If a logged in LOA3 user has not received a payment from VA in the last 60 days, they will text in this section that says "You have no recent payments to show."
* If a user has received payments from VA before, they will see links to "Manage your direct deposit information" which links to the [direct deposit page](https://www.va.gov/profile/direct-deposit) of their profile and a link to "Review your payment history" which links to the [payment history tool](https://www.va.gov/va-payment-history/payments) directly below the text.
* [Desktop mockup for no recent payments but has received payments before](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/977354F4-360B-4287-B9CD-CE28DC8444A0)
* [Mobile mockup for no recent payments but has received payments before](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/95A46294-248D-407C-8557-8C6A35C02315)

### User has never received payments from VA

* If a logged in LOA3 user has not received a payment from VA in the last 60 days, they will text in this section that says "You have no recent payments to show."
* If a user has never received any payments from VA, they will see a link to "Manage your direct deposit information" which links to the [direct deposit page](https://www.va.gov/profile/direct-deposit) of their profile.
* [Desktop mockup for no payments ever](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B0DF2025-E29C-48D0-8230-6BC8D2FAA5EA)
* [Mobile mockup for no payments ever](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/FE8BFAEA-9A71-4AB6-A35F-9BE18A63B3CF)

## How to reproduce
* Find a staging user who has no recent payments in the [benefit payments staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-payment-info-v2.md#test-cases-for-benefit-payments-section).
* Log into staging.va.gov with a test user who has no recent payments to show.
* Once logged in, you will be redirected to My VA.
* Verify that you see text stating that you have no recent payments to show.
* Verify that you see a link to manage your direct deposit information that links to the direct deposit page of the profile.
* Verify that you see a link to review payment history that takes you to the payment history tool and there have not been any payments made in the last 60 days in the payment history tool. This link should only show for users who have received payments before. It should not show if they have never received a payment from VA.
