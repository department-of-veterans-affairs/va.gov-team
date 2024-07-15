# My VA Benefit Payments Use Case: Payments API Error
**Last updated: June 4, 2024 - replaced links**

If a LOA3 user signs in and there is an error with the payments API, we will show an error in the Benefit payments section on My VA.

## UX
* Any logged in LOA3 user can see the Benefit payments section on My VA.
* If an LOA3 user logs in and there is an error with the payments API, then we will not be able to show a card for any recent VA payments.
* If this error occurs, we display an error that states "**We can't access your payment history.** We're sorry. We can't access your payment history right now. We're working to fix this problem. Please check back later."
* When this error occurs, the user will also see links to "Manage your direct deposit information" which links to the [direct deposit page](https://www.va.gov/profile/direct-deposit) of their profile and a link to "Review your payment history" which links to the [payment history tool](https://www.va.gov/va-payment-history/payments) directly below the error.
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
* [Desktop mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-207&t=c2OqcG9WOavV8QTN-1)
* [Mobile mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-751&t=c2OqcG9WOavV8QTN-1)

## How to reproduce
* In order to reproduce this error, log into VA.gov or staging.va.gov with any user.
* In the Developer Tools menu, go to the Network tab and right click on the api. Select `Block Request Url` and then reload the page.
* Be sure to remove that block after testing.
* [See more details about blocking specific network requests here.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_errors.md#appendix-blocking-specific-network-requests)
