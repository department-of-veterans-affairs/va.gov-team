# Benefit Payments Frontend Documentation

## When to show the ‘Benefit payments’ section
We show this section for every LOA3 user.

## UX Specs
### Payment card
- Direct deposit payments:
  - [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/222D00A6-3BFD-4D99-9FCB-A9CE2766E78A)
  - [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1CA9530C-0A0F-4CF6-9597-D76F83143B45)

- Mailed paper check payments:
  - [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1FEFF140-7526-42A2-9D64-959E152ED415)
  - [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/38CB47EF-6A94-44CD-B0F8-F6FE999C933D)

**Show card**

- If a user has received a payment in the last 60 days.

**Do NOT show card**

- If a user has not received a payment in the last 60 days.

#### **Content**

**+$XX.XX**

[Type of payment]

- If the payment was made via direct deposit:

Deposited on [date]

- If the payment was made via a mailed paper check:

Check mailed on [date]

[View your payment history](https://www.va.gov/va-payment-history/payments)

---

### If a user has not received a payment in the last 60 days

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/977354F4-360B-4287-B9CD-CE28DC8444A0)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/95A46294-248D-407C-8557-8C6A35C02315)

**Show**

- If a user has not received a payment in the last 60 days. This includes veterans who have never received payments.

#### **Content**

You don't have any recent payments to show.

---

### Manage direct deposit link

![Screen Shot 2022-08-17 at 9 59 53 AM](https://user-images.githubusercontent.com/97965610/185153481-a47957ed-7357-48af-840b-13fff4137f49.png)

Use font awesome icon `dollar` for icon in link list

**Show**
- If a user has direct deposit set up.

**Do NOT Show**
- If a user does not have direct deposit set up.

#### Content

[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)

---

### View your payment history link

- Use font awesome icon “user-check”

**Show in link list**
- If a user has not had a payment in the last 60 days but has in the past.
![Screen Shot 2022-08-17 at 9 59 53 AM](https://user-images.githubusercontent.com/97965610/185153689-a6c0bb5e-357d-4a44-8c33-eb2cfdf54fde.png)

**Do NOT show in link list**
- If a user has never received a payment.

#### Content
[View your payment history](https://www.va.gov/va-payment-history/payments/)

---

### If a user has multiple payments in the same day

Only show a card for the most recent payment.

---

## Error States

### Error State 1: The Payment History API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>We're sorry. We can't access some of your information right now.  We're working to fix this problem. Please check back later.
- This should appear under the 'Benefit payments' header.

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/268A4DAB-EB9D-49B5-AA3F-FEDBDB797E4A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D56012A2-DBE1-49DD-A5D5-95D01ABB4DFA)
