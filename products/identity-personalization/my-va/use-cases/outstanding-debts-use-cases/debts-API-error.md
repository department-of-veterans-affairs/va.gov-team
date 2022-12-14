# My VA Outstanding Debts Use Case: Debt API Error
**Last updated: December 14, 2022**

If a LOA3 user signs in and there is an error with the debt API, we will show an error in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If an LOA3 user logs in and there is an error with the debt API, then we will not be able to show a card for any overpayment debts they may have in the combined debt portal.
* If this error occurs, we display an error that states "**We can't access some of your financial information**

We're sorry. We can't access some of your financial information right now. We're working to fix this problem. Please check back later."
* If a user only has copays, they will see this card on the lefthand side on desktop and at the top of the list directly under the Outstanding debts header on mobile.
* When this error occurs, the user will also see a link to "Learn about VA debt". This links to the [VA debt management page](va.gov/resources/va-debt-management/). This link will be displayed directly below the error on desktop and mobile if there are no copays to show. If there is a copay card to show, then this link will appear on the righthand side on desktop, and below the copays card on mobile.
* Uses the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) from the VA design system.
* [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/84364730-D309-402E-B75D-5F52D74726BF)
* [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/82AF7DA5-F5C2-4184-BE95-0AE1C131DBE6)

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
