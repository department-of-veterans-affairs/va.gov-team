# Benefit Payments Frontend Documentation
Last updated: May 6, 2024 - added VA-icon names and updated screens

### Background
This is FE documentation for v2 of "payment info" on My VA in which the original single section My VA, "Benefit payments and debts" was separated out into two sections - one for Outstanding Debts and a second for Benefit Payments. This document specifically covers the Benefit Payments section on My VA.

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

#### **Accessibility specs**

Since this card has an extra heading in it that is not in other cards on My VA, we need to make certain accessibility accomodations to ensure that screen reader users can navigate by heading and hear all important context.

[Annotations in Sketch](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/OeRqarG)

- This mockup calls out that the h4 in the benefit payment card should be coded as a paragraph (p) but use h4 styling.
- The H3 should also have an `aria-describedby` label that associates the amount with the payment type so that a screen reader user gets that context when navigating through H3s.

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

<img width="440" alt="Screenshot 2024-05-06 at 4 34 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/7ac7c5ff-02f8-4aca-b357-c1d7440e683c">

Use VA-icon `attach_money` for icon in link list

**Show**
- For all LOA3 users.

**Positioning**
- If a user has a payment card to show, this link appears on the righthand side on desktop and is always first in the link list.
- If a user does not have a payment card to show, this link shows on the lefthand side on desktop and is always first in the link list.

#### Content

[Manage your direct deposit information](https://www.va.gov/profile/direct-deposit)

---

### Review your payment history link

- Use VA-icon `how_to_reg`

**Show in link list**
- If a user has not had a payment in the last 60 days but has in the past.

<img width="440" alt="Screenshot 2024-05-06 at 6 37 57 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/80e8e1f2-249f-47f6-8138-d96cf13ef7b2">


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
- Use the [warning alert component](https://design.va.gov/components/alert#warning-alert) for the error message.
>**We can't access your payment history**

>We're sorry. We can't access your payment history right now.  We're working to fix this problem. Please check back later.
- This should appear under the 'Benefit payments' header.

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/268A4DAB-EB9D-49B5-AA3F-FEDBDB797E4A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D56012A2-DBE1-49DD-A5D5-95D01ABB4DFA)
