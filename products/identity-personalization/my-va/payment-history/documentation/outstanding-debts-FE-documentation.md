# Outstanding Debts Frontend Documentation
**Last updated: February 15, 2024 - updated with Figma links**

### Background
This is FE documentation for v2 of "payment info" on My VA in which the original single section My VA, "Benefit payments and debts" was separated out into two sections - one for Outstanding Debts and a second for Benefit Payments. This document specifically covers the Outstanding Debts section on My VA.

## When to show the ‘Outstanding debts’ section
We show this section for every LOA3 user.

## UX Specs
### Debts card
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A135&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A664&mode=design&t=CREOF8xG3jKa75nz-1)

**Show card**

- If a user has any debts in the debt portal that do not equal 0.

**Do NOT show card**

- If a user has no debts in the debt portal or their debts equal 0.

#### **Content**

**X overpayment debts**

Updated on [date]

[Manage your VA debt](https://www.va.gov/manage-va-debt/summary/debt-balances/)

**Content sources**

- Number of overpayment debts is pulled from [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays. This should be plural if there is more than one debt; singular if there is only one.

- Last updated date should be the most recent date that any overpayment debt has been updated in [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays.

#### **Visual specs**

Use the [card component](https://design.va.gov/components/card) in the VA design system for the debt card.

The link style on the card is the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

---

### Copays card

- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A76&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A637&mode=design&t=CREOF8xG3jKa75nz-1)

**Show**

- If a user has copay statements in the debt portal that do not equal 0.

**Do NOT Show**

- If a user has no copay statements in the debt portal or their copay statement totals equal 0.

#### **Content**

**X copay bills**

Updated on [date]

[Manage your VA bills](https://www.va.gov/manage-va-debt/summary/copay-balances)

**Content sources**

- Number of copay bills is pulled from [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances) and is the total number of statements that the user has. The user will have one statement per facility that they have any outstanding copays for. This should be plural if there is more than one copay statement; singular if there is only one.

- Last updated date should be the most recent date that any copay statement has been updated on the [copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances).

#### **Visual specs**

Use the [card component](https://design.va.gov/components/card) in the VA design system for the copay card.

The link style on the card is the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

---

### If a user has overpayment debt(s) AND copay bill(s)

- Show both cards and always show the debts card first, then the copays card. On desktop, the cards should be side by side. On mobile they should stack with copays on the bottom.

![Screen Shot 2022-11-18 at 1 10 58 PM](https://user-images.githubusercontent.com/97965610/202773989-1aca5ea2-616f-4e05-893a-ecef1c48eb4d.png)

---

### If a user has no overpayment debts or copay bills

- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A63&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A627&mode=design&t=CREOF8xG3jKa75nz-1)

**Show**

- If a user has no copays or debts in the debt portal or all of their copays and debts equal 0.


#### Content

You have no overpayment debts or copay bills.

[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)

---

### Learn about VA debt link

**Show**

- If a user has no overpayment debts in the debt portal or all of their overpayment debts equal 0.

**Do NOT show**

- If a user has overpayment debts in the debt portal that do not equal 0.

**Positioning**

- This link shows on the righthand side on desktop if the user has a copay card or an overpayment debt card to show in the section.
- This link appears on the lefthand side on desktop if the user does not have any copays or debt cards to show. This includes if there is a copay or debt API error *and* no copay or debt card to show.
- If there is a debt API error in the section *and* the user has a copay card to show, this link appears on the righthand side on desktop.

### Content

[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)

---

## Error States

### Error State 1: The Debt API or Copay API call fails

#### Visual specs
- Use the [warning alert component](https://design.va.gov/components/alert#warning-alert) for the error message.
>**We can't access some of your financial information**

>We're sorry. We can't access some of your financial information right now.  We're working to fix this problem. Please check back later.
- Display “Learn about VA debt” in the link list if the debt API fails or the user doesn't have debt.
- If the debt API fails but the user has a copay bill to show, show an error and show a card for copays. In this case, the secondary link should appear on the righthand side on desktop. [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A164&mode=design&t=CREOF8xG3jKa75nz-1)
- If the copay API fails but the user has an outstanding debt to show, show an error and show a card for debts. In this case, the "Learn about VA debt" link does not appear. [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A178&mode=design&t=CREOF8xG3jKa75nz-1)
- If both APIs fail or one fails and the user does not have any other info to show, show one error message and the Learn about VA debt link. In this case, the secondary link should appear on the lefthand side on desktop, below the error. [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A224&mode=design&t=CREOF8xG3jKa75nz-1)

