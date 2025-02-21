# Claim contextualization spike regarding pre-need burials

__Output of ticket:__ [211](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/211)

<details>
<summary>Current process pulled from Mobile Team’s Sprint 0 documentation </summary>


[Sprint 0 documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)

__Overview of the Veteran experience requesting pre-need decision letter__


* Step 1: Find out if you are eligible.
* Step 2: Choose the VA national cemetery where you’d prefer to be buried.
* Step 3: Gather the supporting documents and information you’ll need to fill out the application.
* Step 4: Be sure to fill out an application for each person requesting a pre-need eligibility determination.
* Step 5: Submit application
* Step 6: Claim reviewed by VA
* Step 7: Claim closed
    * If they qualify
        * Veteran will receive a pre-need decision letter, benefits information sheet, brochure, and copy of supporting documents submitted
    * If they do not qualify
        * Veteran will receive a denial letter with an explanation and information on their rights to appeal or request another review and how to proceed [Form 20-0998](https://www.va.gov/find-forms/about-form-20-0998/)


__Overview of the Veteran experience__ (once Veteran has qualified for pre-need burial eligibility)


* Keep the letter in a safe place and use information when coordinating their burial wishes
* They also qualify for burial benefits
    * Opening / closing of the grave
    * Burial liner provided by the government
    * Headstone / market provided by the government
    * Ongoing care of the gravesite
    * Veteran, surviving spouse, or other family members may also qualify for survivor benefits
* Talk with family members or authorized representatives about burial wishes and provide this documentation
* Time of need - Veteran has passed and burial is needed(not Veteran facing)
    * Person arranging burial to call the pre-planned funeral director or the National Cemetery Scheduling office to request burial - pre-need decision letter will be needed at that time
        * If they do not have pre-need decision letter then work with funeral director to complete [steps](https://www.va.gov/burials-memorials/schedule-a-burial/)
</details>


<details>
   <summary>
Current process as described by Catherine Hughes</summary>

[Slack message](https://dsva.slack.com/archives/C03QC459M0C/p1738774549212579?thread_ts=1738774231.517579&cid=C03QC459M0C)

* A Pre-Need form is submitted by the Veteran or their family and the NCA will determine if they are eligible to be buried in a National Cemetery.  At that point the information and case has been logged in their system (outside of VA.gov)
* When the individual passes away they reach back out to the NCA to put in, what is known as, a time of need request.  The NCA agent will search for and pull up the pre-Need case and generate a time of need case from it (this allows for information to be verified and prepopulate and for them to already have necessary eligibility documentation.
* The agent will work with the caller to get a service scheduled at a National Cemetery and capture desired interment details. Once this is done the case is sent to the cemetery to complete the request by performing the interment
* All the case processing and time of need work is done outside of VA.gov in a separate system.  We just capture and send the initial pre-need request

</details>

## Findings regarding claims


* [Message in Slack](https://dsva.slack.com/archives/C07SD9P7XB9/p1737125042278879?thread_ts=1736806052.889859&cid=C07SD9P7XB9) regarding the claim evaluation screen in the app
    * From Julie Strothman, “We've changed this functionality on web to no longer ask for claim evaluation and instead submit the 5103 waiver that indicates you don't have more evidence to submit. (Though also to indicate you can submit it later, but that the process may revert to an earlier step.) Here are [the Figma mocks of what we've put in place](https://www.figma.com/design/BUdMIxAiIutG12rZxZ0cg1/Claim-Letters-Navigation-%2B-5103-Alert-Updates?node-id=2752-8875&t=FczpnllmEWbjbTA3-4). (See the "final" for each of the different kinds of 5103 notices.) We'd be happy to talk through these changes and why we made them.”
* [Benefits 2.0 - 🚢 Shipped (Figma)](https://www.figma.com/design/p0vlRz38TKIOwWDfI2bGc7/Benefits-2.0---%F0%9F%9A%A2-Shipped---VA-Mobile?m=auto&node-id=2198-30184&t=aOjB9jumTDYfcgH4-1)
* [Claims 2.0 - 🔍Working (Figma)](https://www.figma.com/design/kSlXLwTVLunM0fqCG95k5x/Claims-2.0---%F0%9F%94%8D-Working---VA-Mobile?node-id=1768-9665&t=dLCUOQ2UcP8w8if1-1)
* [Claims 2.0 - 💡 Documentation (AdHoc Figjam)](https://www.figma.com/board/i6WG4mn2BZfmXZkMbcZCvx/Claims-2.0---%F0%9F%92%A1-Documentation---VA-Mobile?node-id=287-3897&t=Wwt3GCRT9ov2Fyoh-1)
    * Contains lots of designs with notes
    * New claims tab detail screen exploration for Activity
    * “NEW 8-STEP PROCESS ONLY APPLIES TO DISABILITY CLAIMS”
    * Mention of 5103 evidence notice
* [Claim Contextualization (Web Figma – BMT)](https://www.figma.com/design/bWELjWsVqkf3BDx0PXqqam/Claim-Contextualization?node-id=1835-8610&t=Stkl6IBb1AqmAaOH-1)
    * Comments added from Flagship Mobile’s old content designer Misty Milliron-Grant
* [CST V2 (Web Figma – BMT)](https://www.figma.com/design/F8U4wddaFouUPVd4mGBMDI/CST-V2?node-id=621-6308&t=FhXsqw3kljV0B1nZ-1)
    * [Burials within CST](https://www.figma.com/design/F8U4wddaFouUPVd4mGBMDI/CST-V2?node-id=621-6308&t=FhXsqw3kljV0B1nZ-1)
    * Non-disability compensation claims are not yet moving to the expanded 8 phases proposed as part of the new [Claim Phases design](https://www.figma.com/design/bWELjWsVqkf3BDx0PXqqam/Claim-Contextualization?node-id=1-12453&t=Stkl6IBb1AqmAaOH-1). We may decided to update these to a similar design in the future, but for now we want to replace the outdated timeline currently in the UI for these claims with a new and improved Claim Stepper component from the VADS design system. Eventually, we might replace these with the accordion design too, but this will ensure our designs are accessible and usable in the meantime.

<table>
  <tr>
   <td>
<strong>Disability claims</strong>
   </td>
   <td><strong>Non-disability claims</strong>
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Claim received</li>

<li>Initial review</li>

<li>Evidence gathering</li>

<li>Evidence review</li>

<li>Rating</li>

<li>Preparing decision letter</li>

<li>Final review</li>

<li>Claim decided</li>
</ol>
   </td>
   <td>
<ol>

<li>Claim received</li>

<li>Initial review</li>

<li>Evidence gathering, review, and decision</li>

<li>Preparation for notification</li>

<li>Complete</li>
</ol>
   </td>
  </tr>
</table>




* __Pre-need burial claims never show as a claim on VA.gov__ ([Slack thread](https://dsva.slack.com/archives/C03QC459M0C/p1738774231517579))

