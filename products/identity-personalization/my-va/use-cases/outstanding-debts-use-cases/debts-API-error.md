# My VA Outstanding Debts Use Case: Debt API Error
**Last updated:** February 16, 2024 - added Figma links

If a LOA3 user signs in and there is an error with the debt API, we will show an error in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If an LOA3 user logs in and there is an error with the debt API, then we will not be able to show a card for any overpayment debts they may have in the combined debt portal.
* If this error occurs, we display an error that states "**We can't access some of your financial information.** We're sorry. We can't access some of your financial information right now. We're working to fix this problem. Please check back later."
* When this error occurs, the user will also see a link to "Learn about VA debt". This links to the [VA debt management page](va.gov/resources/va-debt-management/). This link will be displayed directly below the error on desktop and mobile if there are no copays to show. If there is a copay card to show, then this link will appear on the righthand side on desktop, and below the copays card on mobile.
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
* [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A164&mode=design&t=WghpiwwCzYuhYyHN-1)
* [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A696&mode=design&t=WghpiwwCzYuhYyHN-1)

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
