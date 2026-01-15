# FAQ's - Product Decision & Change Log: Pay.gov for Benefit Overpayment Debt Payments
***Tracking decisions, changes, and considerations as they relate to the debt products on va.gov***




### Product Decision & Change Log 

| Date | Source (Who?) | Decision/ Production Code Change |Details |
| ---- | ---- | ---- |---- |
| TBD | TBD | TBD |TBD |
| 11/3/25| Bob Vitt | Minimum payments| Per Bob, we MUST offer partial payments. Amount can't be less than $25.00 (unless the amount due is less than $25- in which case they MUST pay the $25 in full). ACH recurring payment plans ok, but $25 is the min payment and must pay debt in full in 36 months (Bob to get more info/confirm) |
| 11/3/25| Bob Vitt | School payments| Per Bob,Schools MUST be able to log in, so we will need pay.va.gov AND pay.gov live at the same time.Thousands of schools are making payments! Approx 43,000 accounts for a total of $107 million!! Schools call in to pay money owed using cc's too.  |
|1/15/26| Denise Coveyduc |Removing payment plans from MVP scope| In discussion with the UX team we have decided to focus the MVP on single payments at a time. A Veteran will be able to make a payment in full OR make a partial payment but they will not be able to set up a recurring payment plan as part of this initial MVP release. The UX team will outline for users that repayment plans are still an option with them and provide the necessary instruction on how to set one up. Online payment plans will be developed as part of a future release.|

### Product Considerations

The following were considered but rejected.

| Date | Source (Who?) | Content area | Rationale |
| ------- | -------- | -------- | -------- |
| TBD| TBD | TBD | TBD |

---

### FAQ's

**1. What are the required features that pay.va.gov provides that pay.gov must add in order for us to transition to that platform and to sunset pay.va.gov?**
- Pay.va.gov verifies that DMC has an active debt before accepting a payment
- Pay.va.gov will reject payment attempts if there is a mismatch with DMC and indicates for user to call DMC.
- Pay.va.gov has a prepopulated drop down with deductions codes for users to choose.

 **2. When do pay.gov transactions appear in the VA DMC accounts?**
- TBD

 **3. What will a Veteran see when a payment is in 'pending' state?**
- When would a payment be in a pending state? and where are we asking they will "see" the information that the question is referring to? 

**4. Can we pre-fill data for Veterans that they normally have to type out themselves on pay.va.gov?** 
- This is a recurring issue that Veterans find frustrating when having to make a payment externally.

Answer from 4/24 meeting with team, Bob, and Denise: 
> It sounds like this will be possible, particularly for one of the use cases

**5. Is there documentation on design guidelines for this hosted page?** 
- Are there examples available of other hosted pages?
- How much can we alter on this hosted page?

Answer from 4/24 meeting with team, Bob, and Denise: 
> There is documentation from pay.gov (30 pages) that provides examples.
> We can still begin ideating the best user flow for Veterans (data structuring aside)

**6. Will there be still be an unauthenticated way to pay for Veterans who learn about a payment due from a letter in the mail?** 
- Logging in to pay a bill may impede a Veteran's ability to resolve a copay or overpayment.

Answer from 4/24 meeting with team, Bob, and Denise: 
> It sounds like there is flexibility around this, UX thinks ability for unauthenticated payments is important

**7. What is the MVP amount of information to collect in order to process a payment?** 
So far, there are 5 steps (pages) to 
collect payment from Veterans for copays. 
> Is it possible to consolidate these 5 pages on one hosted page?

**8. On pages hosted on Pay.gov ('Select a payment type' and 'Provide payment information'):** 
  - *Documentation 7.2 Header Image* mentions the option of selecting a header image. Can custom code also be placed in the header and footer area?
  - *Can custom styles be applied to the content of the page (form area)?*

**9. Pay.va.gov uses pay.gov under the hood? If so, do we have a contact there?**
- Yes, we have contacts for both pay.va.gov and pay.gov.  Heather can share a recording from when we met with pay.va.gov
  
**10. How do we support/do we support paying multiple debts with one payment? Seems like pay.va.gov just uses an account number to associate a payment with a veteran? In fact, how do we even associate a single debt to a payment?**
- Pay.VA.gov only processes a payment (or recurring payment) for a single debt. They do not allow multiple debts to be selected at one time.
  
**11. It looks like pay.gov sends emails including confirmation and recurring payment reminders. Are there any others? For example, what happens if a recurring payment method goes bad?**
- Need to pose this question to pay.va.gov team if we want to understand this. 

**12. How does DMC find out about payments made?**
- Pay.gov sends information to DMC about all payments made. This information comes in the form of spreadsheets which are manually uploaded into CARS 

**13. Is there any particular reason we are not using "non-interactive services"? Just curious. Seems like the Hosted collection approach has been chosen already.**
-  Not sure what "non-interactive service" is - would need to better understand this [DC]
  
**14. Who was the latest integration? Peace corps? Is there another example with a payment being tied to an entity like in our case possibly a debt? How long did the PeaceCorps/latest integration take?**
- No idea - that is a pay.gov question

**15. Do we need to store anything like the tracking ID?**
- [See notes from meeting on 4/24](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107630#issuecomment-2828988071)
 
**16. [6/3/25:Related to combining payments] Can the UX team see an example of a payment review page?** 
- "Payment Review Page" can you clarify?

**17. [5/20/25:Related to combining payments] Will Pay.gov be able to process multiple copays AND overpayments within the same transaction?**
- Answer from 5/28 email from Danielle and updates from Denise:
- This is not possible at this time (2 different cashflows, Veterans will need to process two different transactions)

**18. Will Pay.gov be able to process multiple copay bills within the same transaction? And be able to attach the payment amount to each copay? Ex: $40 goes to VA Medical Center A, $200 goes to VA Medical Center B. 
Same question for overpayments: Will Pay.gov be able to process multiple overpayment bills within the same transaction? And be able to attach the payment amount to each overpayment? Ex: $40 goes to GI Bill overpayment, $200 goes to Compensation and Pension overpayment.**
- Answer from 5/28 email from Danielle and updates from Denise: 
- Currently Veterans are required to pay for individual debts as individual transactions  (3 copay bills means 3 transactions) - same on overpayment side.
- Both sides are willing to look at allowing Veterans to pay for multiple copays or multiple overpayments in one transaction provided we can send across (thru pay.gov) the necessary information to identify the amount and the debts that the transaction should be applied to.

**19. [5/20/25:Related to Logged out/Unauth experience] Will it be possible for Pay.gov to confirm that debts exist?**
- TBD

**20. [5/20/25:Related to Logged out/Unauth experience] If not, is it possible to send this data to VA to reject payments for debt that does not exist before the transaction is complete?**
- TBD

**21. [5/20/25:Related to required Information] Is there a spreadsheet or list of information that Pay.gov requires from the user in order to complete a transaction?**
- TBD

**22. [11/25/25:Related to required Information] In regards to recurring payment logc, in the scenario a Veteran wants to stop the recurring payment subscription, will we need a management screen for their selected debts they're sending recurring to? And if so does Pay.gov handle just recurring submission updates, the same as debt/overpayments, or is it a separate path/endpoint/transaction and UI that's required? I imagine users will need some sort of control panel and I guess the accompanying pitfalls of such to handle it? Would it live in MyVA which means cross-team collab?**
- TBD

**23. Will VA accept PayPal as a form of payment?**
- No VA does not accept PayPal as a form of payment at this time (Jan 13, 2027) Will be considered in the future. 

**24. We understand that a minimum of $25 is required for a payment plan and that any payment plans set up through pay.gov need to be under 60 months. Is that accurate? Are there any additional details missing that are required for establishing a payment plan through pay.gov**
- Yes, this is correct

**25. We understand that any payment plans over 60 months will require the Veteran to complete an FSR and submit it to DMC.  Is that accurate?**
 - Yes, this is correct

**26. Can we get clarity on when a Veteran would receive late fees for an overpayment debt?**
    - Veterans will not receive late fees for an overpayment debt.

**27. Should the payment always be charged on a specific date of the month? We need to know when to charge the Veteran on a payment plan so they do not incur a late fee.**
- No, there are no specific dates a payment should be processed on. If a Veteran is setting up recurring payments through pay.gov today, it would be ok to set the next payment a month from that day.

**28. Does DMC store payment plan details set up through pay.gov? If so, where is the system of record and is that information available on the DMC API or is there another API to that system of record?**
  -  TBD (1/13/26 - open question; under investigation. Payment plans set up over the phone are stored in VAMS)

**29. Where is an individual's full transaction history stored?**
    - TBD (1/13/26 - open question; under investigation)

**30. Does DMC track payment plans that are under 60 months?**
- TBD (1/13/26 - open question; under investigation)

**31. Can we see a copy of a spreadsheet/s that DMC uses to track an individual's transaction history?**
  - Yes - Denise will share via email.

**32. If it is okay for a veteran to create their own payment plan digitally, what information would need to be captured? (eg. amount, frequency, number of payments)**
    - As long as a payment plan is set up to pay a minimum of $25 (unless the entire debt is less than $25), the debt is paid off in under 60 months then yes it is ok for a Veteran to set up a payment plan digitally thru pay.gov. Pay.gov would need to outline what information needs to be captured to set that up. 

**33. Are there any restrictions on what information we can share on the confirmation page? For example, last 4 digits of credit card.**
- Would need to check with privacy and security. No restrictions from DMC's perspective

**34. Any restrictions on information shared on any confirmation emails we may send?**
  Would need to check with privacy and security. No restrictions from DMC's perspective

**35. What information is currently shared on the existing confirmation page and email?**
- For Payment (confirmation page and email)
  - Veterans information
  - Payment amount
  - date and time of transaction
  - payment method
  - description of overpayment
- For Recurring payment
  - Veterans information
  - Start date
  - end date
  - amount per charge
  - billing frequency
  - next charge date
  - payment method and last 4 digits
  - statement descriptor (what will appear on their bank statement) 

**36. Can a Veteran change their payment plan details on the PAY.VA.GOV experience today?**
- Edit? TBD (still under investigation) but they CAN cancel it. 
