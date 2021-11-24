# Payment/Financial Discovery Synthesis and MVP scope
Tressa Furner, Authenticated Exprience, Novemenber 23, 2021

## Background

Based on past research, users have mentioned wanting a financial section on My VA. As part of the effort to understand what would be included in this section, I conducted discovery on what currently exists on VA.gov in relation to finances.

- [Payment Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-history-discovery.md) 

## Findings

### Users want to be able to see all of their financial information in one place, whether it's 'money-in' or 'money-out'.

### For MVP we should show a combined financial section including debt and compensation, but we should only call out things that need action.

We know that users really want to see elevated action items + anything that is a problem, and all other information is secondary. Based on that knowledge, we should pursue only elevating financial information that needs action (debts+copays) and then provide links to all other financial information. (we need to talk about this). It would also be valuable to show users that a payment has been deposited, but we can leave showing the specifics to the tools.

I've broken things out into 'What the VA owes you' + 'What you owe the VA' for clarity purposes - we need to decide if we actually want to visually break it out on the dashboard. Here is a breakdown of how payments/finances should be handled on My VA.

**What the VA owes you**
- Payment recieved 
    - Disability compensation
    - Pension compensation
    - Education 
- Request travel reimbursement [link]

**What you owe the VA**
- Payment due (debt)
- Payment due (health care copay)

**Related links**
- Manage Direct deposit [link]
- View Payment History [link]
- View Education Information [link]

### Payment History breakdown

- Date
- Amount
- Type
- Method
- Bank
- Account number

### Debt + Copay breakdown

**Debt**
- Type of debt/where debt is from
- Balance
- When payment is due
- Link to details

**Copay** (launch pending)
- Health care facility
- Balance
- When payment is due
- Link to details
