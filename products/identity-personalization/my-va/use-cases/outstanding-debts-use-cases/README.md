# My VA: Outstanding Debts Use Cases

**Last updated:** February 16, 2024 - added Figma link

## Overview of Outstanding Debts
* Outstanding debts encompasses overpayment debts and copay debts.
  * Overpayment debts occur when a user is overpaid for VA benefits. This can happen for a variety of reasons but an example is when a Veteran doesn't update their dependency information and is paid more for their VA benefits than they are entitled to. The Veteran then owes this money back to VA as an overpayment debt. 
  * A copay debt is an amount that a Veteran must pay for health care services, similar to how copays work with private health insurance. This amount varies depending on a Veteran's health care benefits through VA.
* This feature on My VA gives the user an overview of their outstanding debts if there are any to show and links them to the combined debt portal.
* For all of these use cases, the user must be LOA3 (identity verified).
* [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will not see this section on My VA.

## Common use cases
- [User has outstanding overpayment debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/overpayment-debts.md)
- [User has outstanding copays](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/copay-debts.md)
- [User does not have any outstanding VA debt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/no-outstanding-debt.md)

## Edge cases

### Flags
There are no flags associated with this feature.

### System
- [The debts API is down and we can't display any overpayment debt information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/debts-API-error.md)
- [The copays API is down and we can't display any copay information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/copay-API-error.md)
- [Both the debts and copays APIs are down and we can't display information for either of them](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/outstanding-debts-use-cases/debt-and-copay-error.md)

## Flow diagrams
- [Outstanding debts on My VA user flow](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0-7422&mode=design)
