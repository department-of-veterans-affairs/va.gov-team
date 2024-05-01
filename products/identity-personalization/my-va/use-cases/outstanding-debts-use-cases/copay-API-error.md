# My VA Outstanding Debts Use Case: Copay API Error
**Last updated: Feb 15, 2024 - added Figma links**

If a LOA3 user signs in and there is an error with the copay API, we will show an error in the Outstanding Debts section on My VA.

## UX
* Any logged in LOA3 user can see the Outstanding Debts section on My VA.
* If an LOA3 user logs in and there is an error with the copay API, then we will not be able to show a card for any copay debts they may have in the combined debt portal.
* If this error occurs, we display an error that states "**We can't access some of your financial information.** We're sorry. We can't access some of your financial information right now. We're working to fix this problem. Please check back later."
* If this error occurs and the user has overpayment debtsto show, then this error will appear above the overpayment debts card, directly below the "Outstanding debts" header.
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
* [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A178&mode=design&t=wfs2Inz4yjvgPbqZ-1)
* [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A686&mode=design&t=wfs2Inz4yjvgPbqZ-1)

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
