# My VA Outstanding Debts Use Case: Debts and Copays API Error
**Last updated: December 14, 2022**

If a LOA3 user signs in and there is an error with *both* the debt and copay APIs, we will show an error in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If an LOA3 user logs in and there is an error with both the debt and copay APIs, then we will not be able to show a card for any overpayment debts or copay debts they may have in the combined debt portal.
* If this error occurs, we display a single error that states "**We can't access some of your financial information.** We're sorry. We can't access some of your financial information right now. We're working to fix this problem. Please check back later."
* When this error occurs, the user will also see a link to "Learn about VA debt". This links to the [VA debt management page](va.gov/resources/va-debt-management/). This link will be displayed directly below the error on desktop and mobile.
* Uses the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) from the VA design system.
* [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6FA54B37-C5D9-4DFF-B0F0-8C7FA9A28B77)
* [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C52E7D43-E206-491B-AF3D-EFE11220AF05)

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
