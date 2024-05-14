# Intent to File (ITF) for 527EZ - Product Outline (DRAFT)
## Overview

**What is ITF?
[From Intent to File page on va.gov](https://www.va.gov/resources/your-intent-to-file-a-va-claim/):**<br>
An intent to file sets a potential start date (or effective date) for your benefits. If you notify us of your intent to file and we approve your claim, you may be able to get retroactive payments. Retroactive payments are payments for the time between when we processed your intent to file and when we approved your claim. 
You can notify us of your intent to file if you plan to file a claim or a Supplemental Claim for these types of benefits:
* Disability compensation
* Pension benefits
* Dependency and Indemnity Compensation (DIC)

## Background
ITF for pension is available to Veterans via non-web means (paper form, phone etc) and this initiative intends to bring ITF to pension web so that Veterans applying online can easily benefit from ITF without having to fill in a separate form.

The ITF feature was earmarked in late 2023 as a post-launch (Jan 2024) item. In the meantime, application start dates are being saved as a backup for use when ITF is implemented.

The 526 disability compensation web form has an implementation of ITF that we were able to learn from as we shaped the 527 ITF experience.
Note: there are functional differences between how pension ITF and compensation ITF behave so one approach cannot directly be applied to the other. Some adjustments would be necessary.

### Problem Statement
When pension benefits are granted for an online pension application, payments will begin from the application submission date. The opportunity to start receiving payments from the date they started the application is currently not available.

**How might we provide Veterans with the earliest possible access to Pension benefits?** 

## Desired Outcomes
* Enable Veterans to receive pension benefits from the earliest possible effective date when they apply online, within regulation.
* Ease the burden of Veterans applying for pension benefits to set an intent to file.
* Provide a consistent experience that enables Veterans to proceed in the Pension application when the ITF API is unavailable.
* Deliver incremental value to Veterans in a timely fashion.

### Avoid
* Confusing Veterans about ITF for pension online and hamper their benefits application experience.
* ITF functionality (when the API is available and unavailable) that prevents a Veteran from starting or completing the pension app


## Working Documents
* [ITF use cases (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715010150706/acb644c56fe8432819c62e7a9c886679c6555978?wid=0-1715116626489)
*  [ITF technical flow (Mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1714050769683/e4dffd0f80fc8aca04a773dbe53c0d40fd5f2dde?wid=0-1714497805333&sender=u8c3a54d4503675214e055918)
*  [ITF designs (Figma)](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/Pension-Claim-Form-21P-527EZ?node-id=2181-5007&t=wqDUeTnxf70vQEqj-0)
*  [Q&A, Learnings](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/pension/intent-to-file-brief.md#qa-learnings) from calls (below)
*  [Pension ITF Workshops notes](https://docs.google.com/document/d/1bgpEWIFdYOwPci2dhenVVjvuF8IJTy0nqfRbWy6PrRU/edit) - points have been extracted from this doc to this page and Q&A

## Policy Documents
*  [ITF VBA Manual](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000174873/M21-1-Part-II-Subpart-iii-Chapter-2-Section-A-Intent-to-File-ITF%3FarticleViewContext=article_view_related_article#4)

## Discovery Research References
* [ITF Research Summary by 526EZ team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md)
* A standalone ITF web form is in the works - [Figma](https://www.figma.com/file/EFJLJ7W4yBbujH1yVD122s/WIP---21-0966---Intent-to-file?type=design&node-id=0%3A59&mode=design&t=NhvhdjCE7qtCMbOH-1), [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689261093555/6c03d0c5d9d3f5ee875295e6ee444c3420f9ad3b?wid=0-1705943457925&sender=u8c3a54d4503675214e055918)

# Solution Approaches
## V1 - Introduce ITF functionality to pension form
### Goal: Introduce intent to file functionality for 527EZ application so that Veterans who login to apply can benefit from it
**Why V1**: Implement foundational functionality so that Veterans can begin to benefit from pension ITF online soon. <br>

**Risks**: 
* ITF API can be shaky, based on learnings from 526 team. By getting started with a simpler scope, we also get to de-risk as we learn to work with a new API in the simplest way.<br>

**Hypothesis**:
* By introducing an ITF step in the pension application flow, Veterans will be provided clarity on the ITF process and what they need to do continue with their application and benefit from ITF
* By introducing ITF start and expiration date, some Veterans could be overwhelmed by yet another date to process/understand.

**Measuring Success**:<br>
* The total number of Veterans applying for Pension benefits online that fill out a separate 0966 Intent to File form through another medium is reduced.
* Drop offs at ITF screens are at a minimum (for when the API is available and unavailable) - the ITF experience does not hamper the Veteran's pension application journey.
* Research studies show that users clearly understand ITF screens and understand what they need to do to benefit from it.
* Research studies show that users start their application soon without necessarily waiting til they have all info to start applying, so that they can benefit from ITF dates. For users that apply quickly (ie: within a day or two) ITF benefits will be neglible.

**Proposed behavior:** Enable Veterans to receive a pension benefits effective date based on when they started a pension application online. 

**Existing behavior:** Application submission date is used as the effective date, as there isn't an Intent to File feature for the pension web form. If users submitted an ITF through another non-web channel, that would still be valid.

Veterans can notify the VA by filing an ITF (paper form, phone etc) and set a potential start date (or effective date) for their pension benefits. This can enable the Veteran to receive retroactive payments (payments from the time between when they submitted an intent to file and when the VA approves the claim).

The Veteran has one year from the time they submit an intent to file  to complete and submit their claim to receive the earliest possible effective date (provided their application is successful).

**Assumptions:**
* The Veteran must authenticate on VA.gov to set an Intent to File date.
* The ITF API is functional and available most of the time.
* The ITF API cannot set ITF start dates in the past.
* TBC by engineering - The pension app will not store ITF information and treat the ITF API as the source of truth for ITF.


### Scope

**`TO BE ADDRESSED / BLOCKERS:`**
* Policy question on keeping saved forms for longer than a year
* Agreement on scope of v1
* Retry limits? what happens if retrying fails too? What's communicated at submission to user and VBA?


**Status (as of 5/13/24)**
* OCTO: in review
* VBA: in review
* Design: started
* Collab Cycle: TBD
* CAIA: started
* Development: not started (scaffolding started)

**1. When a Veteran starts or resumes a 527EZ application online and the API is available:**
* Check the ITF endpoint for an existing active pension ITF.
* When an ITF exists, the system will use the ITF date returned by the ITF API and display messaging to the user based on the date and status returned.
* When an ITF does not exist or an ITF has expired, the system will set a new ITF date equating to 'today' via ITF API and display messaging to the user based on the date and status returned.

**2. When a Veteran starts or resumes a 527EZ application online and the API is unavailable:**
* The system will display appropriate messaging to the user that their application start date has been saved and they can proceed to fill and submit their application.
* The system will store the user's form start date and kick off a retry mechanism to establish if an ITF already exists (then use it) or if an ITF doesn't exist (then set a new one using the form start date). If this mechanism fails too, it will be logged and remediated.
* Re-try mechanism behavior: Retries will be limited to only start ITF with current date, not form start date. <br>

**3. When an ITF or online form is about to expire:**
* Inform users and guide them to take action (Email? SMS?)

_**Once above is implemented, noting interaction between new ITF behavior and existing saved in-progress form behavior:**_
* A saved in-progress form can expire while an ITF is still active. When the user logs in next, they will have to start a new form.   
* An ITF can expire while a saved in-progress is still active. When the user logs in next, a new ITF will be created on that day.

**4. External items to prioritize:**
* Update DOMO dashboard with Analytics team to include any new ITF related pages.
* Update Pension product guide to inform and educate support teams on ITF functionality and behavior.
* Communications on 'don't wait, start today!' so users can get maximum benefits from ITF
* Update processing team documentation where needed



## V2 - Include dates in PDF as a backup (TBC)
### Writing ITF or application start date to PDF as supplementary information for VSRs to aid in processing pension applications
This will replace the submission date currently included in the PDF footer.

**Status (as of 5/8/24)**
* OCTO: in review
* VBA: TBD
* Design: TBD
* Collab Cycle: TBD
* CAIA: TBD
* Development: TBD
  
**`TO BE ADDRESSED / BLOCKERS:`**
* Establish if, when, how VSRs will access and use this information to ensure that this feature is useful and will be used.

### Scope
**1. When ITF is successfully established and form is submitted**
* Write messaging to convey 'Pension ITF <date>' to footer of PDF.

**2. When ITF is not established and form is submitted**
* Write messaging to convey 'Pension ITF not established. Application was started <date>' to footer of PDF.
* Update VSRs on how to utilize pension PDF footer dates


## V3 - Extending the validity period of an in-progress form and/or ITF (TBC)
### Manage expiration dates in a way that:
* Extend in-progress forms and ITF life in a way that's beneficial to Veterans and doesn't create any additional burden for users or business teams.
* Reduce confusion/simplify communication of form expiry and ITF expiry dates that Veterans have to understand/remember. 
* Avoid creating a system/service that is costly but doesn't benefit most.

**Status (as of 5/8/24)**
* OCTO: in review
* VBA: TBD
* Design: TBD
* Collab Cycle: TBD
* CAIA: TBD
* Development: TBD
  
**`TO BE ADDRESSED / BLOCKERS:`**
* Verify that no policies are violated by saving Veterans form data for longer than one year.
* Verify that no policies violated by the system automatically renewing ITF on behalf of Veterans, without permission/action by the Veteran.
* Is this improvement to be triggered by user interaction or timed system behavior?
* As of 4/30 - 2032 (45%) pension forms were submitted, 3026 (55%) were in progress. What % of users are likely to get to completion? Is it worth creating a backend service that automatically renews forms/ITFs or do we rely on Veterans who return and provide them with a good experience?
* Assess communications that go out when a saved in-progress form and ITF is about to expire and when it's renewed. Does anything need to change or be implemented? (Avoid spamming users)
* If a system is taking action, after an ITF or saved in-progress form is renewed once, and a Veteran does not return to the form, will it be renewed a second time?
* If a system is taking action, consider how much unused data might be created.
* Teams processing applications understand how to process these accurately.

### Scope
**Based on user-based triggers, when a user logs in..**
* while in-progress form is valid: then update the saved in-progress pension form expiry date to match ITF expiry date.
* after in-progress form has expired but ITF is still valid: user has to start a new pension app.
* after form and ITF have expired: user has to start a new form and file a new ITF on the same day.
* after in-progress form is valid and ITF has expired: create a new ITF.
* Option: if data policy allows saved form extension for a year everytime users login and resume a saved form, above suggestions can we adjusted.

**Based on system-based triggers..**
* When a form is about to expire, and a user has logged in since this form was created/renewed, extend it for one year.
* When an ITF is about to expire, and a user has logged in since this form was created/renewed, extend it for one year.


## V4 - Renew ITF using past dates (TBC)
### When a user has logged in and a prior ITF has expired and a reasonable time has lapsed, establish a new backdated ITF that's reasonable.
* Helps Veterans to receive backdated pensions benefits based on when they started an application, within 'reasonable' time limits.
  
**Status (as of 5/8/24)**
* OCTO: TBD
* VBA: TBD
* Design: TBD
* Collab Cycle: TBD
* CAIA: TBD
* Development: TBD
  
**`TO BE ADDRESSED / BLOCKERS:`**
* LH ITF API is updated to accept a date variable that enables pension app to create new ITFs using a start date that's adjacent to an expired ITF.
* Agree on what durations are 'reasonable'.

### Scope
**When an user starts or resumes a form and an ITF has expired less than a year ago**
* Create a new ITF with a start date of (prior ITF expiry date + 1 day).

**When a logged in user has an application start date on file (post Jan launch) and no ITF set and it's been less than a year**
* Create a new ITF with a start date = application start date on file.


## Post-Launch Considerations
Areas to explore:<br>
* Incorporating improvements in messaging and technical approach made in the 527EZ implementation of intent to file to the 526EZ process.
* Usability research to explore improvements.


## Q&A, Learnings

**April 2024 4/17 Meeting 1:**
* Policy topics
>Honor any started form as an ITF. Ideally use auto-ITF paradigm on Disability ITF form on 527 but there are some issues. Get 12 months, then expires. Day after expiry would have to start a new one. Or if submitted by mail, day mail was received is the potential start date. Not channel specific. Save the files locally. Meaningless until VBA has it.

* How make sure to get it to VBA meaningfully?
> Retry. Address issues around writing duplicates to the system.

**April 2024 Meeting 2:**
* if they get to submission and we still haven’t retrieved it, what is our solution
Veteran-facing error?
> VBA honoring printing ITF on the form.
Could we continue to retry after they submit? Adjudicator will set it as the date of claim receipt if there’s no ITF, unsure if we can change it later.
Emily thinks printing ITF date on the form is more straightforward than retrying later.
Would need to figure out how to cancel the sidekick job once they submit.

**April 2024 VBA Check-in:**
* _What happens if you receive an ITF with an older date AFTER you already created one? (For example, a Veteran starts the 527 EZ application online but an ITF date cannot be established as the API is down.  A VSR establishes an ITF based on application submission date BUT the system is later able to retrieve the ITF created when the online application was started.  Should we update?)_

> Meaningful distinction - accurate ITF is better. Having it updated in VBMS would be helpful, sometimes that’s the only place people will look. 
If they call in an ITF, there might not be other documentation.
On Pension, they look at every step if it’s granted of denied. ITF date determines how they consider income and assets. EG they use the date the moment the first person picks it up.
Income and assets gets entered right before it’s decided. ITF governs what they count and when they count it.
Could updating it in the middle of the process be confusing? Yes, but sounds like things like that aren’t uncommon and VBA is still willing to fix it.

* _Would you honor an ITF date if printed on a PDF?  (For example, a Veteran starts the 527 EZ application online but an ITF date cannot be established as the API is down. If the system wrote the ITF to the PDF generated through the 527EZ online submission, could a procedure be established to honor that printed ITF?)_

> It should technically be enough.
Ideas on how to communicate this? Daniel says the manual would have a CFR reference for ITF, that starting an online application counts

Do we want to remediate past ITFs?  Should we systematically look back and populate the ITF for online pension applications that were created since the online 527EZ launched? 
They’d want a list of file numbers, could be a quality issue for VSRs if it got updated in the background without context
VBA would need to figure out how to communicate to the field offices about this

* Do we want to remediate past ITFs?  Should we systematically look back and populate the ITF for online pension applications that were created since the online 527EZ launched? 
> They’d want a list of file numbers, could be a quality issue for VSRs if it got updated in the background without context.
VBA would need to figure out how to communicate to the field offices about this

**May 14th VBA Check-in:**
* What happens to an ITF after an application is submitted?
>When there is an active ITF, once 527 is submitted, the ITF status reflects "Claims Received" (Dylan Dubbs)

* Re: Pension PDF overflow section (additional info section at end of PDF that gets created when there's more info than what fits in the form fields) - is it OCRd into VBMS? Or how do you know to look for it (in the efolder)?
We are thinking about using a similar format for the 0969, wondering if there's anything we need to consider/do differently.
> ..


  
