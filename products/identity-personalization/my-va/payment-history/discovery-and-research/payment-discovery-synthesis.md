# Payment/Financial Discovery Synthesis and MVP scope
Tressa Furner, Authenticated Exprience, Novemenber 23, 2021

## Background

Based on past research, users have mentioned wanting a financial section on My VA. As part of the effort to understand what would be included in this section, I conducted discovery on what currently exists on VA.gov in relation to finances.

- [Payment Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-history-discovery.md) 

## Findings

### Users want to be able to see all of their financial information in one place, whether it's 'money-in' or 'money-out'.

After discussing this with many different teams, the overwhelming sentiment is that users want to see all things money-related in one place. The debt team has been working on a content page that includes all of the financial links, but they are concerned that it isn't the right approach. The My VA dashboard might be a better solution for this.

### For MVP we should show a combined financial section including debt and compensation, but we should only call out things that need action.

We know that users really want to see elevated action items + anything that is a problem, and all other information is secondary. Based on that knowledge, we should pursue only elevating financial information that needs action (debts+copays) and then provide links to all other financial information. (we need to talk about this). It would also be valuable to show users that a payment has been deposited, but we can leave showing the specifics to the tools.

I've broken things out into 'What the VA owes you' + 'What you owe the VA' for clarity purposes - we need to decide if we actually want to visually break it out on the dashboard. Here is a breakdown of how payments/finances should be handled on My VA.

**What the VA owes you**
- Payment recieved - let's test showing a most recent payment
    - Disability compensation
    - Pension compensation
    - Education 
- Request travel reimbursement [https://www.va.gov/health-care/get-reimbursed-for-travel-pay/]

**What you owe the VA**
- Payment due (debt)
- Payment due (health care copay)

*Note - we should talk about how much information we want to include in each of these alerts*

**Related links**
- Manage Direct deposit [link]
- View Payment History [link]
- View your GI Bill Statement of Benefits. [link] (?? Do we need this??)

We need to figure out how much information we show for each of these data points. Based on how My VA is set up currently, we should probably only show the 'most important' thing and then link to everything else. As of right now, the only 'most important thing' would be an upcoming payment that is due. 

### Information we have access to

#### Payment History breakdown

- Date
- Amount
- Type
- Method
- Bank
- Account number

All of the data points are pulled from a single API call from BGS (Benefits Gateway Services). *There may be other data that we are not getting and might need to add it (like deductions for VA insurance or VA debt) - that investigation is recent and on-going.* 

#### Debt + Copay breakdown

**Debt**
- Type of debt/where debt is from
- Balance
- When payment is due
- Link to details

*Eventually the debt team will be adding status to their cards, which might be useful to elevate since some of them have action items that don't include paying the debt.*

**Copay** (launch pending)
- Health care facility
- Balance
- When payment is due
- Link to details

### Things that should not be in MVP

- Survivors pension
- Surviviors comp (DIC)
- Caregiver program
- VA Homeloans information

### Thoughts/Questions

1. We need to keep IA in mind as we're designing this section. If this is meant to be the 'all inclusive financial section' for VA.gov then that might change how we approach it.
2. Down the line we may want to call out specific payments recieved, e.g. education payments.
3. If we show healthcare copays, should there be anythiing that shows up in the health care section about copays?
4. We need to test this feature to make sure we are showing the appropriate amount of information. 

### MVP

- Most recent payment
- Manage Direct deposit [link]
- View Payment History [link]
- Request travel reimbursement [https://www.va.gov/health-care/get-reimbursed-for-travel-pay/]
- Dynamic debt link ('You've got 2 outstanding debt payments)
