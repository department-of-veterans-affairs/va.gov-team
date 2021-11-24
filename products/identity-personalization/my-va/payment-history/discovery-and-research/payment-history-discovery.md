# Payment history/financial information Discovery (WIP)
Tressa Furner, Authenticated Experience, November 3, 2021

Research shows that users want all payment information in one spot - whether it's 'money in' or 'money out'

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
- Travel re-imbursement


**Thoughts/Question** 
- We need to reach out to the mobile app team about their card sort and what they found about finances.
- When would a payment section show on the dashboard?
- Are education payments exactly the same each month? If so, maybe just showing the amount paid each month would be enough in the education section, and any time it gets paid it shows up in the Payment History section.
- Is having a link to the payment history section enough?
- How much information do we need to show for a financial section to be valuable to users?


## Payment History Review (Chat with ebenefits team)

The ebenefits team launched a new payment history page recently. 

![screenshot of the current payment history page.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/View%20Payment%20History.png)

All of the data points are pulled a single API call from BGS (Benefits Gateway Services). There may be other data that we are not getting and might need to add it (like deductions for VA insurance or VA debt) - that investigation is recent and on-going. The current data that is being pulled is:

      <payment>

                  <beneficiaryParticipantID>123456</beneficiaryParticipantID>

                  <fileNumber>123456</fileNumber>

                  <payeeType>Veteran</payeeType>

                  <paymentAmount>17024.2</paymentAmount>

                  <paymentDate>2020-08-06T00:00:00-05:00</paymentDate>

                  <paymentStatus>Scheduled</paymentStatus>

                  <paymentType>Compensation &amp; Pension - Retroactive</paymentType>

                  <paymentTypeCode>3</paymentTypeCode>

                  <programType>Compensation</programType>

                  <recipientName>DARDANTESTY</recipientName>

                  <recipientParticipantID>600338895</recipientParticipantID>

                  <scheduledDate>2020-08-03T00:00:00-05:00</scheduledDate>

                  <veteranName>DARDANTESTY</veteranName>

                  <veteranParticipantID>600338895</veteranParticipantID>

                  <addressEFT>

                     <accountNumber/>

                     <accountType/>

                     <bankName/>

                     <routingNumber/>

                  </addressEFT>

                  <checkAddress>

                     <addressLine1>DARDAN TESTY</addressLine1>

                     <addressLine2>105 WENSE AVE</addressLine2>

                     <addressLine3>SEFFER FL 33584</addressLine3>

                     <addressLine4/>

                     <addressLine5/>

                     <addressLine6/>

                     <addressLine7/>

                     <zipCode>33584</zipCode>

                  </checkAddress>

                  <paymentRecordIdentifier>

                     <paymentID>12532661</paymentID>

                  </paymentRecordIdentifier>

                  <returnPayment>

                     <checkTraceNumber/>

                     <returnReason/>

                  </returnPayment>

               </payment>



**If you’re a Veteran, you’ll see a history of your past VA payments for:**

- Disability compensation
- Pension benefits
- Education benefits

**If you’re the survivor of a Veteran or service member, you’ll see a history of your past VA payments for:**

- Survivors pension benefits
- Survivors' and Dependents' Educational Assistance (Chapter 35 benefits)
- Dependency and Indemnity Compensation (DIC)



## Meeting with Debt Management team

### Current IA

The current IA is two separate tools doing two separate things.

- Payment History tool
- Manage Debt Portal

They are currently working on a content page to bring all of these tools (financial tools) together, it's broken up into what VA owes you + What You owe the VA. This is not currently launched, but it's being worked on. 

- When will this be launched? Timeline is pending.

![Content page wireframe (WIP)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Financial%20Wireframe.png)

The team is concerned that the static content page maybe isn't the right approach.

### From the Debt Team:

- [Debt letters UXPin](https://preview.uxpin.com/b52fd08cb24226745f9d97041910a46c984ddc57#/pages/140629615/comment/sitemap?mode=i)
- [Manage VA Debt Staging](https://staging.va.gov/manage-va-debt/) - User 1 should work

**What currently exists on staging with debt letters**

- Current debts
- Download debt letters
- How do I pay VA debt? (online, phone, by mail)
- How do I get financial help?
- How do I dispute a debt?

![Current debt cards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Debt%20Letters%201%20(current).png)

![Debt Details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Debt%20Details.png)

**What research can be shared about debt?**

This hasn't been researched specifically, it's come from several different studies. 

**What would be the most imporant thing to show from a debt perspective?** 

Knowing the balance and then clicking into the tool directly would satisfy user needs
- The Balance (currently exists)
- When it is due (currently exists)
- Status (WIP) (Some of them need an action that is not make a payment.)

**What currently exists on Debt Management Tool:**
- Balance
- When payment due

**What is being worked on (will be worked on soon, likely will be done in the early new year/maybe Q1)** 
- Status
- Next Steps

**Users will only have 1-3 of the debt cards at a time. Where can they get debt from?** 
- Comp & pen 
- Education (Post-911 Bill, Chap 33, Chap 35)

**Potential Errors** 
- Deceased Veteran
- Cannot connect to Copays

#### Health care copay

The debt team is also working on a tool that shows medical copays, it is set to launch before EOY. Here are the screenshots of what is in staging. 

![Health care copay](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Medical%20Copays.png)

![No health care copays](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Medical%20Copays.png)


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

The mobile team put together a draft of how the IA could work for the mobile app, and I think a lot of the groupings for financial information could help us shape My VA. 

![Draft of how the IA could work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/Screen%20Shot%202021-11-22%20at%204.02.11%20PM.png)

The groupings related to payment information are as follows.

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


