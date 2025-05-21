# FAQ's - Product Decision & Change Log: Pay.gov for Benefit Overpayment Debt Payments
***Tracking decisions, changes, and considerations as they relate to the debt products on va.gov***




### Product Decision & Change Log 

| Date | Source (Who?) | Decision/ Production Code Change |Details |
| ---- | ---- | ---- |---- |
| TBD | TBD | TBD |TBD |

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
- TBD

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

**10. How do we support/do we support paying multiple debts with one payment? Seems like pay.va.gov just uses an account number to associate a payment with a veteran? In fact, how do we even associate a single debt to a payment?**

**11. It looks like pay.gov sends emails including confirmation and recurring payment reminders. Are there any others? For example, what happens if a recurring payment method goes bad?**

**12. How does DMC find out about payments made?**

**13. Is there any particular reason we are not using "non-interactive services"? Just curious. Seems like the Hosted collection approach has been chosen already.**

**14. Who was the latest integration? Peace corps? Is there another example with a payment being tied to an entity like in our case possibly a debt? How long did the PeaceCorps/latest integration take?**

**15. Do we need to store anything like the tracking ID?**
[See notes from meeting on 4/24](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107630#issuecomment-2828988071)


## 05/20/25 Questions:


Combining payments:

**1. Will Pay.gov be able to process multiple copays AND overpayments within the same transaction?**

**2. Will Pay.gov be able to process multiple copay bills within the same transaction? And be able to attach the payment amount to each copay? Ex: $40 goes to VA Medical Center A, $200 goes to VA Medical Center B. 
Same question for overpayments: Will Pay.gov be able to process multiple overpayment bills within the same transaction? And be able to attach the payment amount to each overpayment? Ex: $40 goes to GI Bill overpayment, $200 goes to Compensation and Pension overpayment.**

Logged out/Unauth experience:

**3. Will it be possible for Pay.gov to confirm that debts exist?**

**4. If not, is it possible to send this data to VA to reject payments for debt that does not exist before the transaction is complete?**

Required information:

**5. Is there a spreadsheet or list of information that Pay.gov requires from the user in order to complete a transaction?**



