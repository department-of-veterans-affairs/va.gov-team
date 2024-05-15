# Pension Intent to File (ITF) functionality for 527EZ Pension Web Form (DRAFT)
## Purpose of this Product Outline
Outline how ITF functionality can benefit Veterans who apply for pension benefits online and agree on how this functionality can be sequenced and implemented.

### What is ITF?
_[From Intent to File page on va.gov](https://www.va.gov/resources/your-intent-to-file-a-va-claim/): An intent to file sets a potential start date (or effective date) for your benefits. If you notify us of your intent to file and we approve your claim, you maybe able to get retroactive payments._

Veterans have one year from the time they submit an intent to file to complete and submit their claim to benefit from the ITF-based effective date (provided their application is successful).

### ITF for Pension
ITF for pension is available to Veterans via non-web means (paper form, phone etc) and this initiative intends to bring ITF to pension web so that Veterans applying online can easily benefit from ITF without having to fill a separate form.

The 526 disability compensation web form has an implementation of ITF that we are able to learn from as we shape the 527 ITF experience.
Note: there are functional differences between how pension ITF and compensation ITF behave so one approach cannot directly be applied to the other. Some adjustments would be necessary.

### Opportunity
**How might we provide Veterans with the earliest possible effective date for Pension benefits?** 

Today, when pension benefits are granted for an online pension application, benefits will be 'effective' from the application submission date. 

This feature can enable Veterans to receive benefits based on when they _started_ their online pension application instead of when they _submitted_ it. They are able to get an earlier effective date via ITF functionality (provided their application is successful).

Although the respondent burden for the paper form is stated as 30 minutes, the pension form can be a time and effort consuming form depending on a Veteran's situation. Some Veterans may wait to gather all their documents before they start applying, and others may start applying and gather what's needed as they progress through the form. While the second group would naturally benefit from ITF, the first group would need to be prompted to start their application earlier to benefit from ITF functionality. 

To make use of ITF, a Veteran needs to start their application ASAP and eventually get to filling the 527 web form itself, regardless of if they fill it in sooner or later. This is a non-obvious behavior when it comes to filling forms, hence would be important to address this and educate users.

Based on backend data for logged in users submitting 2351 claims since the relaunch of the online 527 form (end Jan-end Apr 2024):
* The average time to complete a form: 12 days
* Maximum time to complete a form: 309 days
* More than 300 days: 2 claims
* 201-300 days: 39 claims
* 101-200 days: 80 claims
* 0-100 days: 2230 claims (94%)
* Less than 1 day: 1808 claims (76%)
* More than 1 day, less than 1 week: 217 claims
* 1-2 weeks: 65 claims
  
While an average of 12 days may not sound like a worthy difference to shift forward an effective date by, if the ITF feature is understood and used as intended by more Veterans who decide to start their applications ASAP, we may observe an increase in the average time to complete an online form. More Veterans _may_ benefit from payments starting earlier than they would've initially expected. Can we cause a shift in the behavior of those who submit their claim within a day (76%) and are in the broader 0-100 days group?


### Desired Outcomes
* Enable Veterans to receive pension benefits from the earliest possible effective date when they apply online, within regulation.
* Ease the burden of Veterans applying for pension benefits to set an intent to file by not having to fill a separate form.
* Provide a consistent experience that enables Veterans to proceed in the Pension application when the ITF API is unavailable.

### Avoid
* Confusing Veterans about ITF for pension online and hampering their benefits application experience.
* ITF functionality (when the API is available and unavailable) that prevents a Veteran from starting or completing the pension app.


# Solution Approaches
## V1 - Introduce ITF functionality to pension web form
### Goal: Introduce intent to file functionality to enable more Veterans to receive an earlier effective date
#### Why V1:
Implement foundational functionality so that Veterans can benefit from pension ITF online soon. We focus on informing and educating Veterans to change behavior to start their pension application sooner. As the average form duration is 12 days (see above), the one year expiration window for ITF and in-progress forms is likely sufficient for V1. <br>

#### Existing behavior:
When a pension application is submitted online, submission date is used as the effective date once application is successful, as there isn't an Intent to File feature for the pension web form. If users submitted a pension ITF through another non-web channel before they submitted an online pension, that ITF would be used when VBA processes an online application.

#### Hypothesis / Proposed Behavior:
* By informing Veterans who intend to apply, about pension ITF and nudging them to shift behavior to start their application process sooner than later, they can benefit from an earlier ITF-based effective date for payments.
* By introducing an ITF step in the pension application flow, Veterans will be educated on the ITF process and what they need to do to by when to benefit from it. 
* By communicating ITF dates to VBA, enable Veterans to receive an effective date earlier than their online submission date.

#### Assumptions:
* There is a (sizeable?) group of Veterans who want to apply and could start their application sooner, but do not due to a multitude of reasons. We are able to nudge them to start their application ASAP, so they may get to benefit from an earlier effective date.
* The Veteran must authenticate on VA.gov to use ITF feature.
* The ITF API is functional and available most of the time.
* The ITF API cannot set ITF start dates in the past.
* The pension app will not store ITF information and treat the ITF API as the source of truth for ITF.

#### Risks: 
* If we cannot shift Veteran behavior to start earlier, the benefit of this feature maybe marginal (ie: if behavior remains similar to what's shown in stats above). How beneficial is ITF in the grander scheme of problems and opportunities Veterans face in gaining pension benefits?
* ITF API can be flaky, based on learnings from 526 team. By getting started with a simpler scope, we get to de-risk as we learn to work with a new API in the simplest way.
* Miscommunication of ITF dates could happen when the API is not accessible in a timely manner (when a Veteran does have an ITF) or when data isn't yet available to the API based on a ITF a Veteran posted offline.
* By introducing ITF start and expiration date, some Veterans could be overwhelmed by yet another date to process/understand.
  
#### Measuring Success:
* The average lag time between the start and completion of a form increases [via backend] Note: not to be confused with active time using the form - we do not wish to increase that as that would indicate a UX problem.
* The total number of Veterans applying for Pension benefits online that fill out a separate 0966 Intent to File form through another medium is reduced. [via VBA data/VBMS/PA&I]
* Drop offs at ITF screens are at a minimum (for when the API is available and unavailable) - the ITF experience does not hamper the Veteran's pension application journey. [via DOMO/GA]
* Users clearly understand ITF screens and understand what they need to do to benefit from it. [via Research studies]
* Users start their application soon without necessarily waiting until they have all information to start applying, so that they can benefit from ITF dates. For users that apply quickly (ie: within a day or two) ITF benefits will be negligible. [via Research studies]
* ITF API related issues are at a minimum. [via DataDog]




### Scope

**`TO BE ADDRESSED / BLOCKERS:`**
* Agree on v1 scope
* Given that content changes to the intro page are likely in-scope, is there an opportunity to surface ITF before starting/resuming pension application?
* Retry mechanism limits - what happens if retrying fails? What's communicated at submission to user and VBA? We could start with manual remidiation for V1
* Decide on if we need to send expiry (ITF and/or saved form) notificaitons to users / understand if VBA sends any. Based on stats, these are not a priority as most users are completing the form within 100 days.
* Based on VSR interview - when there's an ITF, the timeframe respondents refer to need to be re-contextualized for certain financial questions. Veterans state the amount of expenses they pay based on their understanding of the application timeframe, which is affected based on ITF. Currently, VSRs need to reach back out to Veterans to ask for more information once they receive such an application, slowing down the process.

**Status (as of 5/15/24)**
* OCTO: in review
* VBA: in review
* Design: started
* Collab Cycle: TBD
* CAIA: started
* Development: not started (scaffolding started)

**1. When a Veteran intending to learn about and apply for pension benefits arrives at the pension page on VA.gov**
* Educate and nudge them to start their pension application ASAP. e.g clarify language/CTAs on intro page https://www.va.gov/pension/apply-for-veteran-pension-form-21p-527ez/introduction, or https://www.va.gov/pension/how-to-apply/

**2. When a Veteran starts or resumes a 527EZ application online and the API is available:**
* Check the ITF endpoint for an existing active pension ITF.
* When an ITF exists, the system will use the ITF date returned by the ITF API and display messaging to the user based on the date and status returned. This information will appear in different places depending on if they are starting a new application or resuming a prior application they saved.
* When an ITF does not exist or an ITF has expired, the system will set a new ITF date equating to 'today' via ITF API and display messaging to the user based on the date and status returned.
* Consider addressing any Veteran concerns on an unused expired ITF that was preceeded by a new one 'I thought I already had an ITF from last year, why did I just get a new date?'.

**3. When a Veteran starts or resumes a 527EZ application online and the API is unavailable:**
* The system will display appropriate messaging to the user that their application start date has been saved and they can proceed to fill and submit their application.
* The system will store the user's form start date and kick off a retry mechanism to establish if an ITF already exists (then use it) or if an ITF doesn't exist (then set a new one using the form start date). If this mechanism fails too, it will be logged and remediated.
* Re-try mechanism behavior: Retries will be limited to set ITF with current date, and not always the form start date. Namely in a scenario where the retries take place beyond the date the pension application was started. <br>


_**Once above is implemented, noting interaction between new ITF behavior and existing saved in-progress form behavior:**_
* A saved in-progress form can expire while an ITF is still active. When the user logs in next, they will have to start a new form.   
* An ITF can expire while a saved in-progress is still active. When the user logs in next and resumes the saved form, a new ITF will be created on that day. 
* For users who started a form since 527EZ relaunch and have no ITF, an ITF will be created when they login.

**4. When a user has an ITF, re-iterate what it could mean for them as they are about to submit or after they submit**
* Indicate their ITF date when available along with appropriate context on the review screen or submission confirmation screen.
* If users didn't see there ITF in the initial screen, this is an opportunity to display it after retrying and establishing it.

**5. When an aunthenticated user arrives at the Pension app and intends to apply**
* Indicate ITF as yet another benefit they can access by signing up or signing in only

**5. Other items to prioritized:**
* Setup DataDog to track ITF - ITF API success and failure, claim lag time.
* Update DOMO dashboard with Analytics team to include any new ITF related pages.
* Update Pension product guide to inform and educate support teams on ITF functionality and behavior.
* Update VBA processing team documentation where needed to ensure ITF information coming from pension web form is handled accordingly.


## THANKS FOR READING! :) 
## PLEASE PAUSE HERE.
Content below this line will be detailed further once V1 is sufficiently documented.



## V2 - Include dates in PDF as a backup (TBC)
### Writing ITF or application start date to PDF as supplementary information for VSRs to aid in processing pension applications
This will replace the submission date currently included in the PDF footer.

**Status (as of 5/14/24)**
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
* Option: if data policy allows saved form extension for a year everytime users login and resume a saved form, above suggestions can be adjusted.

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


## Q&A, Learnings

**April 2024 4/17 Meeting 1:**
* Policy topics
>Honor any started form as an ITF. Ideally use auto-ITF paradigm on Disability ITF form on 527 but there are some issues. Get 12 months, then expires. Day after expiry would have to start a new one. Or if submitted by mail, day mail was received is the potential start date. Not channel specific. Save the files locally. Meaningless until VBA has it.

* How to make sure to get it to VBA meaningfully?
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
On Pension, they look at every step if it’s granted or denied. ITF date determines how they consider income and assets. EG they use the date the moment the first person picks it up.
Income and assets get entered right before it’s decided. ITF governs what they count and when they count it.
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

* Re: Pension PDF overflow section (additional information section at end of PDF that gets created when there's more information than what fits in the form fields) - is it OCRd into VBMS? Or how do you know to look for it (in the efolder)?
We are thinking about using a similar format for the 0969, wondering if there's anything we need to consider/do differently.
> ..


  
