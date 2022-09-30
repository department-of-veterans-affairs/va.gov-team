# Outstanding Debts Frontend Documentation

## When to show the ‘Outstanding debts’ section
We show this section for every LOA3 user.

## UX Specs
### Debts card
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B3352077-2620-4C5B-9208-2B57CD6CFAC5)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/639F4902-A32D-4454-87E5-4BD2E50E578E)

**Show card**

- If a user has any debts in the debt portal that do not equal 0.

**Do NOT show card**

- If a user has no debts in the debt portal or their debts equal 0.

#### **Content**

(**$XX.XX**)

[XX] overpayment debts

Last updated [date]

[Manage your VA debt](https://www.va.gov/manage-va-debt/your-debt)

**Content sources**

- Total debt amount is pulled from the [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays

- Number of overpayment debts is pulled from [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays. This should be plural if there is more than one debt; singular if there is only one.

- Last updated date should be the most recent date that any outstanding debt has been updated in [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays.

---

### Copays card

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/EEFBF469-F7B6-4087-9EB4-FE6DE1EE2A12)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/DAB1B489-950A-4378-B784-0E4980F44A1E)

**Show**

- If a user has copays in the debt portal that do not equal 0.

**Do NOT Show**

- If a user has no copays in the debt portal or their copays equal 0.

#### **Content**

(**$XX.XX**)

[X] copay bills

Due by [date]

[Manage your VA bills](https://www.va.gov/manage-va-debt/summary/copay-balances)

**Content sources**

- Total copay amount is pulled from the [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances).

- Number of copay bills is pulled from [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances). This should be plural if there is more than one copay; singular if there is only one.

- Due by date should be the soonest date that any outstanding copay bill is due in the [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances).

---

### If a user has overpayment debt(s) AND copay bill(s)

- Show both cards and always show the debts card first, then the copays card below it.

---

### If a user has no overpayment debts or copay bills

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/05DF131D-F900-4770-A3D3-D3F4FAA23FD3)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A2F44369-D9B0-41F6-99FE-F41269378DA9)

**Show**

- If a user has no copays or debts in the debt portal or all of their copays and debts equal 0.


#### Content

You have no overpayment debts or copay bills.

---

### Learn about VA debt link

**Show**

- If a user has no copays or debts in the debt portal or all of their copays and debts equal 0.

[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)

---

## Error States

### Error State 1: The Debt API or Copay API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>We're sorry. We can't access some of your financial information right now.  We're working to fix this problem. Please check back later.
- Display “Learn about VA debt” in the link list if the debt API fails or the user doesn't have debt.
- If the debt API fails but the user has an outstanding copay, show an error and show a card for copays. [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/84364730-D309-402E-B75D-5F52D74726BF)
- If the copay API fails but the user has an outstanding debt to show, show an error and show a card for debts. [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C965BE9E-29BE-4111-B57B-653FE87B3E73)
- If both APIs fail or one fails and the user does not have any other info to show, show one error message and the Learn about VA debt link. [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6FA54B37-C5D9-4DFF-B0F0-8C7FA9A28B77)

