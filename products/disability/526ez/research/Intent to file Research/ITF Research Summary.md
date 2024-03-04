# Intent to file Research Summary 

**Office of the CTO - Digital Experience (OCTO-DE), Benefits and Claims Disability Experience Team 2 (aka team Carbs)**

Date: 02/20/2024

[Nichole Nicholas] [nichole.nicholas@coforma.io]
[Julie Pedtke] [julie.pedtke@coforma.io]

_Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here)

**Jump to:**

- [Goals and Methods](#goals-and-methods)
- [What is intent to file](#what-is-intent-to-file)
- [Findings and Recommendations](#findings-and-recommendations)
    * [Veterans are unable to start their 526 (or supplemental) disability claim when the intent to file endpoint is unavailable.](#Veterans-are-unable-to-start-their-526-disability-claim-when-the-intent-to-file-endpoint-is-unavailable.)
    * [The various ways Veterans can express their intent to file (and the implications of each) are not clear to Veterans.] (#The-various-ways-Veterans-can-express-their-intent-to-file-are-not-clear-to-Veterans)
    * [The intent to file expiration is a concern for Veterans, and not well understood.] (#The-intent-to-file-expiration-is-a-concern-for-Veterans-and-not-well-understood)
    * [Information on intent to file is inconsistent across forms.] (#[Information-on-intent-to-file-is-inconsistent-across-forms)
    * [We don’t know how much Veterans care about their intent to file date after submission of a claim.] (#We-don’t-know-how-much-Veterans-care-about-their-intent-to-file-date-after-submission-of-a-claim)
- [Conclusion](#conclusion)

## Goals and Methods

We reviewed past and ongoing research studies and existing pages on the VA website. We documented our work in a Mural board with insights, observations, open questions, and recommendations. Our goals are to:
Identify known pain points that Veterans encounter around intent to file, and recommendations for improvement
Determine the scope and impact of these pain points, and assess if a broader redesign of intent to file in the 526 experience is needed (for example, redesigning how intent to file is introduced, how it appears on the confirmation page or claim status tool, etc.)
This document is a summary of our findings. 

Artifacts in this review include:

- 526 Shadowing Research
- 526 Medallia Research
- Technical discovery and ongoing work:
    * Initial discovery on expiration issues
    * Expired ITF preventing submission
    * Technical Spike: Research ability to save 526 form data and create new ITF after expiration
    * Async solutioning
    * Research - ITF Experience and Policy Options
    * Implement Immediate ITF Fix (show current ITF time)
    * SC | Review ITF messaging
    * Intent to File in CST
- Proactive Benefits Research
- VA webpage audit
    * About VA Form 21-0966 (intent to file)
    * New Digital Intent to File Form (not launched yet)
    * About VA Form 21P-527EZ (Pension)
    * About VA Form 21P-527 (Pension evidence)
    * About VA Form 21P-534EZ (DIC, Survivors Pension, Accrued Benefits)
    * About VA Form 21P-534 (DIC, Survivors Pension, Accrued Benefits)
    * About VA Form 21-526EZ (Disability)
- Recurring Q&A sessions with VBA stakeholders

## What is intent to file?

Intent to file sets a potential start date (or effective date) for Veteran benefits by notifying the VA that they plan to file a claim. This can enable the Veteran to receive retroactive payments (payments from the time between when they submitted an intent to file and when the VA approves the claim). The Veteran has one year from the time they submit an intent to file their claim to receive the earliest possible effective date. 

An intent to file is not required for any type of claim—however, it is built into the digital form for disability benefits (VA Form-21-526EZ). Currently, for both pension (VA Form 21P-527EZ) and dependency and indemnity compensation (VA Form 21P-534EZ), intent to file is not part of the online form but can be submitted via an additional paper claim (VA Form 21-0966). A Veteran can also call the VA by phone to express their intent to file. 

The date the VA receives the intent to file will be used to inform the effective date, but there are many other factors that go into determining an effective date, including changes in law (such as the PACT Act), and the medical evidence in the claim. After a year has passed, the initial intent to file will expire, but if the Veteran continues with an in-progress claim the system will create a new intent to file with a new expiration date a year in the future.

From conversations with VBA, we’ve learned law changes replaced the informal claim process with the intent to file. “VBA was working to formalize all of the claim submission processes by requiring specific forms and more detailed expression of the claims requested, moving away from the classic ‘we accept claims on napkins’ comment you have likely heard before.” This change also ensured that when a Veteran began an application online this attempt was captured as an official attempt to file a claim and recorded as such. This means that certain forms that don’t yet include this functionality could be considered noncompliant. 

    (1) An intent to file a claim can be submitted in one of the following three ways: (i) Saved electronic application. When an application otherwise meeting the requirements of this paragraph (b) is electronically initiated and saved in a claims-submission tool within a VA web-based electronic claims application system prior to filing of a complete claim, VA will consider that application to be an intent to file a claim. (See 38 CFR 3.155)

Open Questions

> (Perhaps too philosophical to be in scope…) Why does the date of the Veteran’s intent to file or submission date factor into an effective date at all? If the medical evidence shows that a Veteran was impacted by a disability for a given length of time, why are their benefits limited by the fact that they may not have applied until much later?

> Currently, VBA does not consider an authenticated user downloading a PDF 526 form as proof of intent to file. Are there use cases like this where it might make sense to expand the definition of what is considered an intent to file?

## Findings & Recommendations

**Veterans are unable to start their 526 (or supplemental) disability claim when the intent to file endpoint is unavailable.**

**526 Technical discovery**

- Veterans are met with an error message when the system checks the intent to file endpoint and the endpoint is unavailable. The error resolves once the backend system recovers; however, this is not communicated to Veterans, who are directed to call the Contact Center for assistance. 

![We're sorry error message] --- note add image here---

- Currently, this error prevents a Veteran from moving forward with their claim. There is a “back” button on this page, but no “continue” button.

- We have designed an MVP solution for bypassing this error. This solution requires backend work to ensure we can manage claims submitted while the intent to file endpoint is down — see discovery work ticket. Engineering capacity is the only thing holding up implementation. 

Open Questions

> - The root cause of intent to file endpoint failure and the number of Veterans impacted is unknown, but based on the Medallia and shadowing research it appears to happen with some frequency.

    > - How many of these Veterans follow through with submitting their claim at a later time (once the endpoint is available), and are they able to do so before their intent to file expires?

    > - How long after seeing an intent to file error message do Veterans typically wait to come back to their application?

**526 Medallia Research**

- The intent to file error message was one of the top issues we heard about in the Medallia feedback for March 2023. (As far as we know, this error has not been resolved since then.)
  
- We saw this error reported on several pages throughout the form, which implies that many of the Veterans reporting the issue had a form in progress and were coming back for another session.

- This error was especially frustrating for Veterans who were close to their intent to file expiration date and worried that they would lose out on a year's worth of benefits.
   - “My intent to file expires today. I completed my application and was trying to upload my supporting documents but now says your system is down and my application is now due next year. It is still March 7th so why can I not complete my application?” -Medallia Feedback

- Many Veterans reported reaching out to the Contact Center and still not having their issue resolved. Several Veterans reported long wait times of up to several hours or being transferred multiple times.

Recommendations

> - Conduct research with the Contact Center to understand how they troubleshoot intent to file errors and what information they are sharing with Veterans around the intent to file.

**526 Shadowing Research**

- We validated that the intent to file messages was still a blocker for some Veterans starting their claims (interviews took place in December 2023). Three out of five participants received intent to file errors when they started to file, leading Veterans to doubt themselves or VA.
  
   - “I guess I did something wrong… This is the part that… makes me stop and start again.” -P12
     
   - "Something wrong happened on our end... Welcome to the VA… 50% of the time I get error messages like that. I don't think I'm stupid, I think someone who is older and more feeble than I am would get mad.” -P11
- Veterans do not understand why they are being blocked by the intent to file error messages—or how to correct them. This makes some doubt if they are taking the appropriate steps towards filing a claim. 
   - “Maybe if I go get the additional form, I won't get the error message—maybe there is something precursor I should've done. Like maybe I need that [supporting form].” -P11

Open Questions

> - During Shadowing Research we noticed the intent to file error in two separate interviews on the same day, hours apart. How long is the intent to file endpoint usually down?

Recommendations

> - Allow participants to continue to file even if the intent to file endpoint system is down. 
> - Rethink how we introduce the concept of intent to file to clarify how it relates to past claims and conditions. 
> - Reinforce understanding of intent to file by making it accessible in other places, such as the confirmation page after submission, the Veteran's profile, or the Claim Status Tool.
