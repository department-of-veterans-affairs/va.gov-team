# Benefit Payments Frontend Documentation
Last updated: November 4, 2022

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

[Review your payment history](https://www.va.gov/va-payment-history/payments)

#### **Visual specs**

Use the [card component](https://design.va.gov/components/card) in the VA design system for the benefit payments card.

The link style on the card is the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

---

### If a user has not received a payment in the last 60 days

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/977354F4-360B-4287-B9CD-CE28DC8444A0)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/95A46294-248D-407C-8557-8C6A35C02315)

**Show**

- If a user has not received a payment in the last 60 days. This includes veterans who have never received payments.

#### **Content**

You have no recent payments to show.

---

### Manage direct deposit link

![Screen Shot 2022-11-04 at 1 10 51 PM](https://user-images.githubusercontent.com/97965610/200035290-7f3f7332-d79f-4e0a-8984-f5f3cb67fc84.png)

Use font awesome icon `dollar` for icon in link list

**Show**
- For all LOA3 users.

**Positioning**
- If a user has a payment card to show, this link appears on the righthand side on desktop and is always first in the link list.
- If a user does not have a payment card to show, this link shows on the lefthand side on desktop and is always first in the link list.

#### Content

[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)

---

### Review your payment history link

- Use font awesome icon “user-check”

**Show in link list**
- If a user has not had a payment in the last 60 days but has in the past.

![Screen Shot 2022-11-04 at 1 08 40 PM](https://user-images.githubusercontent.com/97965610/200034911-968063a5-6510-4194-8249-56232cfb013e.png)

**Do NOT show in link list**
- If a user has never received a payment.

**Positioning**
- If a user has a payment card to show, this link appears on the righthand side on desktop.
- If a user does not have a payment card to show but has received payments in the past, this link shows on the lefthand side on desktop, below the "Manage your direct deposit" link.

#### Content
[Review your payment history](https://www.va.gov/va-payment-history/payments/)

---

### If a user has multiple payments in the same day

Only show a card for the most recent payment.

---

## Error States

### Error State 1: The Payment History API call fails

#### Visual specs
- Use the [error alert component](https://design.va.gov/storybook/?path=/docs/components-va-alert--error) for the error message.
>**We can't access your payment history**

>We're sorry. We can't access your payment history right now.  We're working to fix this problem. Please check back later.
- This should appear under the 'Benefit payments' header.

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/268A4DAB-EB9D-49B5-AA3F-FEDBDB797E4A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D56012A2-DBE1-49DD-A5D5-95D01ABB4DFA)
