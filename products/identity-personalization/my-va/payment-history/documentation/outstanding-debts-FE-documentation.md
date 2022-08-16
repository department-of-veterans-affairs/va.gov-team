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

[XX] outstanding debts

Last updated [date]

[Manage your VA debt](https://www.va.gov/manage-va-debt/your-debt)

**Content sources**

- Total debt amount is pulled from the [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays

- Number of outstanding debts is pulled from [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays

- Last updated date should be the most recent date that any outstanding debt has been updated in [combined debt portal](https://www.va.gov/manage-va-debt/your-debt) - does not include copays. This should be plural if there is more than one debt; singular if there is only one.

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

[XX] copay bills

Due by [date]

[Manage your VA bills](https://www.va.gov/manage-va-debt/your-debt)

**Content sources**

- Total copay amount is pulled from the [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances).

- Number of copay bills is pulled from [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances). This should be plural if there is more than one copay; singular if there is only one.

- Due by date should be the soonest date that any outstanding copay bill is due in the [combined debt portal copay balances page](https://www.va.gov/manage-va-debt/summary/copay-balances).

---

### If a user has no outstanding debts or copay bills

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/05DF131D-F900-4770-A3D3-D3F4FAA23FD3)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A2F44369-D9B0-41F6-99FE-F41269378DA9)

**Show**

- If a user has no copays or debts in the debt portal or all of their copays and debts equal 0.


#### Content

You have no outstanding debts or copay bills.

---

### Learn about VA debt link

**Show**

- If a user has no copays or debts in the debt portal or all of their copays and debts equal 0.

[Learn about VA debt](https://www.va.gov/resources/va-debt-management/)



We deposited [$$] in your account ending in [acct] on [date].
 
 - If a user has received a paper check in the last 30 days:

 We sent you a payment in the amount of [$$] on [date].

**Body** 

Type: [paycheck type]

[View your payment history](https://www.va.gov/va-payment-history/payments)

---

### Manage direct deposit link

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/no-debt-no-payment.png" width="50%" />

Use font awesome icon `dollar` for icon in link list

**Show**
- If a user has direct deposit set up.

**Do NOT Show**
- If a user does not have direct deposit set up.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/no-direct-deposit.png" width="50%" />

#### Content

[Manage your direct deposit](https://www.va.gov/profile/direct-deposit)

---

### Learn more about VA debt link

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/no-debt-no-payment.png" width="50%" />

- Use font-awesome icon “file-invoice-dollar”

**Show**
- If a user has never had debt or their current debt balance is 0.

**Do NOT Show**
- If a user has outstanding debts (they’ll have the Manage your VA debt link in the alert instead).

#### Content

[Learn more about VA debt](/resources/va-debt-management/)

---

### View your payment history link

- Use font awesome icon “user-check”

**Show in payment card**
- If a user has a payment in the last 30 days
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/deposit-made-card.png" width="50%" />

**Show in link list**
- If a user has not had a payment in the last 30 days but has in the past
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/no-debt-no-payment.png" width="50%" />

**Do NOT show in link list**
- If a user has never received a payment

#### Content
[View your payment history](/va-payment-history/payments) 

---

## States

### State 1: A user who has outstanding debt + received a payment within the last 30 days.  

#### Visual specs
- Use the [warning alert component](https://design.va.gov/components/alertboxes#warning-alert) for the outstanding debt message.
- The payment card uses the following styles from the design system:
	- `H3` element for heading
	- `p` for payment type
	- Default link style for view your payment history link
	- Maintain  `20px` of space between the alert and the card

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/7y2Wq3Z)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1rWvEe)
---

### State 2: A user who has NO outstanding debt + received a payment within the last 30 days.  

#### Visual specs
- Use a plain `p` element for no outstanding debt message
- Display payment card as described above
- Display Learn more about VA debt link in link list
	

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KnQlRO)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/L02o1qW) (Ignore styling on the rest of the page)

---

### State 3: A user has had NO payments in the last 30 days but has received payments before + NO debt.

#### Visual specs
- Use a plain `p` element for no outstanding debt message
> Your total VA debt balance is $0.
- Use a plain `p` element for no recent payments message
> You haven’t received any payments in the last 30 days.
- Display the “View your payment history” link in the link list
- Display “Learn about VA debt” in the link list

Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1JK3qy)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/qea25yM)

---

### State 4: If a user has had NO payments in the last 30 days + HAS debt.  

#### Visual Specs
- Use the [warning alert component](https://design.va.gov/components/alertboxes#warning-alert) for the outstanding debt message.
- Use a plain `p` element for no recent payments message
> You haven’t received any payments in the last 30 days.
- Display the “View your payment history” link in the link list

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/paD25yQ)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/eKx5KlW) 
---

### State 5: If a user has multiple deposits in the same day.

For MVP, we will only show the most recent payment.

#### Visual specs
- Display only the most recent payment in the payment card



## Error States

### Error State 1: The Payment History API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>We're sorry. We can't access some of your information right now.  We're working to fix this problem. Please check back later.
- Do not display Benefit payment and debt section

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/YGD28qM)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ygpJMYz)
---

### Error State 2: The Debt API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>We're sorry. We can't access some of your financial information right now.  We're working to fix this problem. Please check back later.
- Display “Learn about VA debt” in the link list
- Display the payment card below the alert component

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/Kv2kw8n)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/PGzVM2L)

