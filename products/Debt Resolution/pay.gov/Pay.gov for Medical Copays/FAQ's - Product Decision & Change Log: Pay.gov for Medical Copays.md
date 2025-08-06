# FAQ's - Product Decision & Change Log: Pay.gov for Medical Copayments
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
Pay.gov FAQs: https://www.pay.gov/WebHelp/HTML/bill_1.htm

### FAQ's

**1. Is it possible to add a field for custom payment amount (less than the total copay amount)? [Backend Q]** 

**2.Is it possible to add custom payment amounts and bulk payments? [Backend Q]**

**3. If not, is it feasible to add a selection screen for Veterans, asking if they want to pay a custom amount on one copay, or pay bulk copays in one transaction? [Backend Q]** 

**4. Is there a minimum amount required to pay a partial copay? [Client/VHA and backend Q]**

**5. If contact info is prefilled, can Veterans edit the information and where would that change be reflected? [pay.gov]** 
Subtext to mention where the edited prefilled information is updated

**6. What data will VHA need to ensure they are processing the payments submitted correctly?**
Adding to this list as we learn more:
- Inidcation if the copay is from a legacy VistA and/or EHR Millennium Site (aka Cerner)

**7. Is the Veteran required to pay a copay in full?**
- Yes. CFR regulations establish copayment charges and a veteran upon enrolment will agree to pay appropriate copayment charges. The full amount of a copayment charge is due on the due date noted in the patient’s initial Notice of Indebtedness (NOI), which is the patient statement. However if a Veteran was approved for a Repayment Plan; then they would pay the approved amount.

**8. Should the web experience allow Veterans to pay a partial amount toward an outstanding copay?**
- Yes. While the minimum amount required to pay is the full copayment amount, we should not refuse any payment that may be other than the full amount of the copayment charge(s). The partial amount could be applied to the oldest charge and could prevent Veterans’ going into collections depending on age of the debt. They should really call the HRC to discuss copayment options if they have questions.

**9. Should the web experience allow Veterans to pay for more than one copay at a time?**
- Yes. Patients are billed on a statement that may include multiple separate copayment charges with one total amount that is due for their account. Payments are applied to an account. The Web experience should be configured such that a payment will be applied to an account, whether the account has one charge or multiple charges due.

**10. Is the copay reference number sufficient to distinguish payments for a given copay?**
A patient statement has the patient’s account number indicated.
- The account number should be used as an identifying attribute for the payment posting.
- The account number should be auto-populated in any payment capability that is developed for the web experience. This will eliminate the frequent mis-application of payments that we navigate due to a patient’s typos, etc.
- The payment posting capability should be developed for stations which have deployed the Millennium EHR.
- Patient statements that are generated from the Millennium system have a unique statement identifier. A payment posting capability for processing a payment to a debt in a Millennium system should always make reference to the most recent statement’s identifier for auto-population for payment posting.
- Reminder: Veterans’ account number:
      - VistA Statement Account Number - (3-digit Facility Number) 0000000 1234567 (First 5 letters of their last name)
      - EHR Statement Account Number - (3-digit Facility Number) 100 (Veteran’s EDIPI/Member Number) (First 5 letters of their last name)

**11. What are the features that are critical to launch. What is everything available now throug pay.va.gov and how does it work**

**12. Taking multiple partial payments gets messy, is this needed**

**13.(Need pay.gov pre-prod for testing for this). We need more details for the return object we get after submital and redirect to va.gov**

**14. What happens when user clicks Back button from Pay.gov back to the VA.gov Bill page before submitting a payment?**

**15. Will the initially selected fields and entered data be cleared?**

**16. Will the VA.gov page assume bill was submitted and paid?**

**17. How soon after a payment is submitted on Pay.gov will it post to the VA.gov Bill page?**

**18. Once posted, can the payment details include which payment record/facility the payment was applied to? a)Otherwise, how would a user know which are paid and which to pay next?**

**19. Would it make sense to allow for a bulk payment, where the payment is allocated by date due, earlier to later?**
