# Benefit payments and debt documentation

## Mockups

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/v/AKKO0Y/p/3FB0D20D-D78F-4998-B2F0-1482780C34BB?search=payment)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/v/AKKO0Y/p/43720C90-8E38-4058-8213-B52543FFE8C7/?search=payment)

## When to show the ‘Benefit payments and debt’ section
**Show**
- If we receive any information from the payment information API, then we will show this section.  

**Do NOT show**
- If we don't receive any information from the payment history API.

## UX Specs
### Outstanding debt notification
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/7y2Wq3Z)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1rWvEe)

**Show**

- If a user has any debts in the debt portal.  

#### **Content**

**When we have a count of debts**

You have [count] outstanding debts. [Manage your VA debt](/manage-va-debt/your-debt)

**When we do not have a count of debts**

You have outstanding debt. [Manage your VA debt](/manage-va-debt/your-debt)

----

### Your total VA debt balance is $0.
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KnQlRO)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/qea25yM)

**Show**
- If a user has no debts in the debt portal.  

#### **Content**

Your total VA debt balance is $0.

---

### Deposit-made card

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/1KnQlRO)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1rWvEe)

**Show**

- If a user has a payment made in the last 30 days. We will show the most recent payment in the month.

**Do NOT Show**

- If a user has no payments in the last 30 days (but has received payments from VA in the past). 
- If a user does not have payments in the last 30 days, we will show messaging stating "You haven't received any payments in the past 30 days." in place of the grey card.


#### Content

**H3**

 We deposited [$$] in your account ending in [acct] on [date].

**Body** 

Type: [type]

[View your payment history](/va-payment-history/payments)

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

[Manage your direct deposit](/profile/direct-deposit-information)

---

### Learn more about VA debt link

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/no-debt-no-payment.png" width="50%" />

- Use font-awesome icon “file-invoice-dollar”

**Show**
- If a user has no debts

**Do NOT Show**
- If a user has outstanding debts (they’ll have the Manage your VA debt link in the alert instead)

#### Content

[Learn more about VA debt](/resources/va-debt-management/)

---

### View your payment history link

- Use font awesome icon “user-check”

**Show in payment card**
- If a user has a payment in the last 30 days
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/deposit-made-card.png" width="50%" />

**Show in link list**
- If a user has not had a payment in the last 30 days
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/no-debt-no-payment.png" width="50%" />

#### Content
[View your payment history](/va-payment-history/payments) 

---

## States

### State 1: A user who has outstanding debt + received a payment within the last 30 days.  

#### Visual specs
- Use the Use the [warning alert component](https://design.va.gov/components/alertboxes#warning-alert) for the outstanding debt message.
- The payment card uses the following styles from the design system:
	- `H3` element for heading
	- `p` for payment type
	- Default link style for view your payment history link
	- Maintain  `20px` of space between the alert and the card

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/7y2Wq3Z)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/R1rWvEe)
-
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

### State 3: A user has had NO payments in the last 30 days + NO debt.

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
- Use the Use the [warning alert component](https://design.va.gov/components/alertboxes#warning-alert) for the outstanding debt message.
- Use a plain `p` element for no recent payments message
- Display the “View your payment history” link in the link list

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/paD25yQ)
- [Mobile] - TBD 
---

### State 5: If a user has multiple deposits in the same day.

For MVP, we will only show the most recent payment.

#### Visual specs
- Display only the most recent payment in the payment card



## Error States

### Error State 1: The Payment History API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/components/alertboxes#error-alert) for the error message.
>We're sorry. We can't access some of your information right now.  We're working to fix this problem. Please check back later.
- Do not display Benefit payment and debt section

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/YGD28qM)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/ygpJMYz)
---

### Error State 2: The Debt API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/components/alertboxes#error-alert) for the error message.
>We're sorry. We can't access some of your financial information right now.  We're working to fix this problem. Please check back later.
- Display “Learn about VA debt” in the link list
- Display the payment card below the alert component

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/Kv2kw8n)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/PGzVM2L)

