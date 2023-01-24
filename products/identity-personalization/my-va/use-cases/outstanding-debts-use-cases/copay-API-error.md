# My VA Outstanding Debts Use Case: Copay API Error
**Last updated: December 14, 2022**

If a LOA3 user signs in and there is an error with the copay API, we will show an error in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If an LOA3 user logs in and there is an error with the copay API, then we will not be able to show a card for any copay debts they may have in the combined debt portal.
* If this error occurs, we display an error that states "**We can't access some of your financial information.** We're sorry. We can't access some of your financial information right now. We're working to fix this problem. Please check back later."
* If this error occurs and the user has overpayment debtsto show, then this error will appear above the overpayment debts card, directly below the "Outstanding debts" header.
* Uses the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) from the VA design system.
* [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C965BE9E-29BE-4111-B57B-653FE87B3E73)
* [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/7C436A0E-E084-4B54-B516-A75CAE77C45B)

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
