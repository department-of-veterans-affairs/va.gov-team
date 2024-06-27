# Delivery team Pension claims process experience

## Background
Currently, we are working to increase transparency for the  [disability claims process](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713276576012/25e677b1d846aff3bea16fc9175e473d5e509888?sender=u606d6bea4af40ec4fe659363)  by providing a description for each process step so hopefully veterans can  anticipate what will happen next in the claims process or to educate veterans on ideal times to submit evidence etc.

Our new understanding is that we can specify which claims will use the new claims process UI (accordion UI) and provide bespoke content based on the claim type. Our goal is to learn more about the pension claims process so that we can determine the most effective way to represent the claim using the new UI.

## Summary
The claims process for Pension claims currently follows the 8-step process we are outlining in the  [claim phase experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Product%20Outline.md)  effort. However, it’s important to note that Step 5, the rating step, will need to be described differently for pension claims.

## Open questions with answers
### 1. What are the specific process steps for pension claim? ( list them)

Initial review, gathering evidence, reviewing evidence, and preparing evidence are all part of the process. It is safe to say that Pension claims follow the same 8 steps that disability claims do. Except when it comes to rating, there’s a different way it’s calculated. 

On a high level, the pension team receives a PDF version and compares it against VBMS (share) and the 527 EZ PDF. Share will look for the [ 2122 form (power of attorney)](https://www.va.gov/find-forms/about-form-21-22/) . The pension team also checks [ CAPRI (Compensation and Pension Record Interchange)](https://www.va.gov/vdl/documents/Financial_Admin/CAPRI/DVBA_27_215_sys_adm.pdf) , VA medical info) to verify details like a person’s income. This helps determine if the person is eligible or ineligible, or if additional documents are needed (ie. [ development letter](https://www.hillandponton.com/va-development-letter/) ), the VSR (Veterans Service Representative) ensures all information is complete before sending it to the RVSR (Rating Veterans Service Representative) for rating.

The RVSR makes the determination of eligibility and award amounts, which is based on income and the number of dependents, not necessarily a rating percentage like disability benefits. On the back end (VA internal process), the RVSR has to get Veterans to a certain percentage rating before they can award the pension. However, the term “rating” may not appear in the notification letter; instead, it’s called “Pension rate.”
After the RVSR makes their determination, the veteran receives a notification.

A noteworthy difference between compensation and pension is that veterans need to report their income/net worth each year to maintain the pension, similar to the requirements for disability benefits. A veteran can only have one pension claim.

### 2. What are common Veteran pain points with this process? (ie. for disability claims, Veterans unintentionally resubmit evidence after their claim has move out of gathering evidence, causing the process to regress. )

Common pain points include the following:

**1. Income Questions**: There are four sources of income questions that often confuse veterans. They aren’t sure what these questions mean, so they leave them incomplete. The VA then sends the forms back as incomplete. (From Jacob) Ask Andrew about this, especially the difference between paper and digital forms.

**2. Marital Status Info**: The form asks about marital status but doesn’t specify divorce. Some people might say they were never married, but then they enter a marriage date in the next question, which causes errors. The VSR might need this information and thus result in either a call from the VSR or a request. For simple questions, the VSR might just call the Veteran, but for complex situations (e.g., Alzheimer’s), the VA will send a development letter.

In Datadog, Benefits team 1 monitors data for “tracked items” for pensions to see what the VA is asking veterans for. We can provide the pension team with some of this information. Allexe suspects that the paper form will result in more requests for development letters than the digital form.

### 3. Any points of confusion for veterans during the process?

The biggest pain point is that the steps can repeat, and Veterans struggle to understand why that happens. On a national scale, we’ve observed that around half of all claims that were sent as “ready for decision” wound up going backwards to previous steps. 

What we aim to achieve with version 3 of CST, will hopefully address these issues and help alleviate these pain points.

### 4. Do pension claims return to previous steps in the process? E.g. if Veterans add evidence later in the process or if VA staff identify something is missing.

Yes , It is possible. 

### 5. Do we know the average time duration per step in the pension process?

Maybe not, but Andrew (VBA disability benefits SME)  can do some research, there should be some metrics, but we are not sure how reliable that will be.

### 6. Who is the VA subject matter expert for pension that serves as a point of contact for you?

* VA “business” stakeholder is Dan Gifford.  
* Enablement team Product Owner is Ryan Powers.

### Is there anywhere in the VA where the pension process is described?

It’s in the team’s folder. There’s a folder for benefits created by a person named Ford. The descriptions may vary depending on the organization that sends them.

## Resources

Github ticket: _[Discovery epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84260)_ 

| **Names** |  **Notes**  |
|----------| -------------|
| [Pension team research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/24c2588860e8f32b2415addf0a81be8a2687f09e/products/pension/research/2024%2002%20Pension%20Usability%20Evaluation) |  Team folder containing research docs |
| [Pension 527EZ Online form: Logic Flow Diagram (MVP)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1703103128492/30dc0956f99482beffb457eb2ae884430cc2d3f4?sender=1e4fc969-f9b0-43ca-b561-893204936b9d) | Flow diagram for the pension online form   |
| [Eligibility for Veterans Pension](https://www.va.gov/pension/eligibility/) | &nbsp; |
| [VSR steps to process pension claim](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708629678413/23448c79bc4bdd9e0651c7cdce459a57715a8066?fromVisitorModal=true&sender=u606d6bea4af40ec4fe659363) | Details steps VSRs take during the pension claims process.|
| [FDC pension](https://www.va.gov/pension/how-to-apply/fully-developed-claim/) | Fully developed claim for a VA pension and the requirement |
| [How to apply for VA Pension](https://www.va.gov/pension/how-to-apply/) | &nbsp; |
| [VA Form 21P-527EZ](https://www.va.gov/find-forms/about-form-21p-527ez/) | The forms have helpful content about the claims process, e.g. what you need to do, how VA obtains evidence, what evidence to send etc. |
| [SubReddit Pension](https://www.reddit.com/r/VeteransBenefits/comments/1ayokrp/what_is_a_pension_and_is_it_worth_it/) | Your VA benefits claim will determine if you are eligible for a pension. If you are given 70% or higher you will not be eligible for pension. Again the pension is to offset low income veterans. |
