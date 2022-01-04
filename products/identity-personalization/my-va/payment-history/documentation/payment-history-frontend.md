NOTE FROM ACCESSIBILITY: For the notification component we will need a descriptive 'aria describe by' that links the 'dismiss' button to the notification. Work with accessibility for the exact text. - this needs to go in the onsite notifications documentation that doesn't exist yet.

# Benefit payments and debt documentation

## Mockups

**Will add after design intent**

- [Desktop](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483168/simulate/no-panels?mode=i)
- [Mobile](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483175/simulate/no-panels?mode=i)

## When to show the 'Benefit payments and debt' section

**Show**

- If we recieve any information from the payment information API, then we will show this section.  


**Do NOT show**

- If we don't receive any information from the payment history API.

## UX Specs

### Outstanding debt notification

SCREENSHOT

**Show**

- If a user has any debts in the debt portal.  

#### **Content**

**When we have a count of debts**

You have [count] outstanding debts. [Manage your VA debt] *link to debt page*

**When we do not have a count of debts**

You have outstanding debt. [Manage your VA debt](/manage-va-debt)

### Deposit-made card

SCREENSHOT

**Show**

- If a user has a payment made in the last 30 days. We will show all of the most recent payments in the month.

**Do NOT Show**

- If a user has no payments in the last 30 days. If a user does not have payments in the last 30 days, we will show messaging stating so in place of the grey card.

SCREENSHOT

#### Content

**H3**

 We deposited [$$] in your account ending in [acct] on [date].

**Body** 

Type: [type]

[View your payment history](/va-payment-history/)



### Manage direct deposit link

SCREENSHOT

**Show**

- If a user has direct deposit set up.

**Do NOT Show**

- If a user does not have direct deposit set up.

SCREENSHOT

#### Content

[Manage your direct deposit](/profile/direct-deposit-information)

### Request travel reimbursement link

SCREENSHOT

**Show**

- Always show if a user has health care and the health care section is on My VA

SCREENSHOT

#### Content

[Request travel reimbursement](/health-care/get-reimbursed-for-travel-pay/)

## States

**State 1: A user who has new messages + outstanding debt + an upcoming payment in the next 30 days.**  

*Visual specs*

SCREENSHOT

**State 2: A user who has NO new messages + NO outstanding debt + an upcoming payment in the next 30 days.**  

*Visual specs*

SCREENSHOT


**State 3: A user has had NO deposits in the next 30 days + NO debt.**  

*Visual specs*

SCREENSHOT

**State 4: If a user has had NO deposits in the next 30 days + HAS debt.**  

*Visual specs*

SCREENSHOT

**State 5: If a user has multiple deposits in the same day.**  

*Visual specs*

SCREENSHOT
