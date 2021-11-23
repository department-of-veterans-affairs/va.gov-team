# Payment history/financial information Discovery (WIP)
Tressa Furner, Authenticated Experience, November 3, 2021

Research shows that users want all payment information in one spot - whether it's 'money in' or 'money out'

View payment history
(another one?)
Travel re-imbursement
Pay debts

**Benefit debt ('Manage your VA debt' tool)** 
- Check balance / status of debt(s) (they'll see statuses like 'we're reviewing your request' and 'your compromise offer was accepted'
- Pay debt (online through pay.va.gov, by phone, by mail)
- Request help with debt (online FSR form)
- Dispute debt (by email, askva, w/e... online form will be built eventually)

**Copay bills**
- Check balance for their facilities
- Pay bill (online through pay.gov, by phone, mail)
- Request help with debt (online FSR form soon)

**Payment history** ([Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/View%20Payment%20History.png))
- Disability compensation
- Pension benefits
- Education benefits

**Other**
- Survivors pension
- Compensation for surviving spouse and dependents (DIC)
- VA Home loans (maybe this fits under debt)
- Payments caregivers receive through the caregiver program


**Thoughts/Question** 
- We need to reach out to the mobile app team about their card sort and what they found about finances.
- When would a payment section show on the dashboard?
- Are education payments exactly the same each month? If so, maybe just showing the amount paid each month would be enough in the education section, and any time it gets paid it shows up in the Payment History section.
- Is having a link to the payment history section enough?
- How much information do we need to show for a financial section to be valuable to users?


## Payment History Review (Chat with ebenefits team)

The ebenefits team launched a new payment history page recently. Here is a [screenshot of the current payment history page.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/View%20Payment%20History.png)

All of the data points are pulled a single API call from BGS (Benefits Gateway Services). 

[Spreadsheet of data points](need to link)



## Meeting with Debt Management team

### Current IA

The current IA is two separate tools doing two separate things.

- Payment History tool
- Manage Debt Portal

They are currently working on a content page to bring all of these tools (financial tools) together, it's broken up into what VA owes you + What You owe the VA. This is not currently launched, but it's being worked on. 

- When will this be launched? (asked mikki via slack, waiting on reply)

![Content page wireframe (WIP)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Financial%20Wireframe.png)

The team is concerned that the static content page maybe isn't the right approach.

### From the Debt Team:

**What research can be shared about debt?**

This hasn't been research specifically, it's come from several different studies. 

**What would be the most imporant thing to show from a debt perspective?** 

Knowing the balance and then clicking into the tool directly would satisfy user needs
- The Balance (currently exists)
- When it is due (currently exists)
- Status is a potential thing that could change, and maybe would be included... does this need to live on My VA? Yes, some of them need an action that is not make a payment. (they are the blue boxes, will add screenshots)

**What currently exists on Debt Management Tool:**
- Balance
- When payment due

**What is being worked on (will be worked on soon, likely will be done in the early new year/maybe Q1)** 
- Status
- Next Steps

Users will only have 1-3 of the debt cards at a time. Where can they get debt from? 
- Comp & pen 
- Education (Post-911 Bill, Chap 33, Chap 35)

[ADD SCREENSHOTS] from becca/riley

### Thoughts/Questions

- How do we handle co-pays for health care things? (that's a separate thing from debt)
- Where would we pull debt information from? 



### From the Mobile Team:

The mobile team ran a cardsort to determine how users group features together. There is a lot of overlap between AE and what the mobile app team is doing, so they shared some interesting insights with us. 

- [Cards included in the card sort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/information-architecture/Card-sort-card-list.md)  
- [Research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/information-architecture/Card-sort-research-report.md)

Overall, payments were seen as of high importance and are expected to be in one place. However, participants naturally split up education and health care payments naturally, people expected to see GI bill balance/payments in an education section and anything related to health care in a health care section. Since we can't elevate 

> ""Everything to do with money I'd like to keep in one place."

> "I'd put all payment items together."

The mobile team put together a [draft of how the IA could work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Screen%20Shot%202021-11-22%20at%204.02.11%20PM.png) for the mobile app, and I think a lot of the groupings for financial information could help us shape My VA. The groupings related to payment information are as follows.

**Health care**:
- Pay your health care copay
- Travel expense reimbursement

**GI Bill**:
- GI Bill balance
- Education payments
- GI bill payments
- Payback your overpayments

**$$$**:
- Bills
    - Payback your overpayments
    - Pay your health care copay
- Compensation
    - Manage direct deposit
    - Pension Payments
    - Disability Compensation
    - Travel expense reimbursement
    - View direct deposit payment history


