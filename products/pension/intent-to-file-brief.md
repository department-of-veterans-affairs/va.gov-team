# Pension Intent to File (ITF) functionality for 527EZ Pension Web Form (DRAFT)
## Purpose of this Product Outline
Outline how ITF functionality can benefit Veterans who apply for pension benefits online and agree on how this functionality can be sequenced and implemented.

### What is ITF?
_[From Intent to File page on va.gov](https://www.va.gov/resources/your-intent-to-file-a-va-claim/): An intent to file sets a potential start date (or effective date) for your benefits. If you notify us of your intent to file and we approve your claim, you maybe able to get retroactive payments._

Veterans have one year from the time they submit an intent to file to complete and submit their claim to benefit from the ITF-based effective date (provided their application is successful).

### ITF for Pension
ITF for pension is available to Veterans via non-web means (paper form, phone etc) and this initiative intends to bring ITF to pension web so that Veterans applying online can easily benefit from ITF without having to fill out a separate form.

The 526 disability compensation team has done [extensive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md) on ITF that we can learn from as we shape the 527 ITF experience.
Note: there are functional differences between how pension ITF and compensation ITF behave so one approach cannot directly be applied to the other. Some adjustments would be necessary.

### Opportunity
**How might we provide Veterans with the earliest possible effective date for Pension benefits?** 

Today, when pension benefits are granted for an online pension application, benefits will be 'effective' from the application submission date. 

This feature can enable Veterans to receive benefits based on when they _started_ their online pension application instead of when they _submitted_ it. They are able to get an earlier effective date via ITF functionality (provided their application is successful).

Although the respondent burden for the paper form is stated as 30 minutes, the pension form can be a time and effort consuming form depending on a Veteran's situation. As we learned through [research with Veterans](https://docs.google.com/document/d/1s3S_NDMHmlooY2SlLWFDq6vtRW-2Pl5u0kbjpd1dBb8/edit#heading=h.2kxjrayrwyho), some Veterans may wait to gather all their documents before they start applying, and others may start applying and gather what's needed as they progress through the form. While the second group would naturally benefit from ITF, the first group would need to be prompted to start their application earlier to benefit from ITF functionality. 

To make use of ITF, a Veteran needs to start their application ASAP and eventually get to filling the 527 web form itself, regardless of if they fill it in sooner or later. This is a non-obvious behavior when it comes to filling forms, hence would be important to address this and educate users.

As of 4/30 - 2032 (45%) pension forms were submitted, 3026 (55%) were in progress. 

Based on backend data for logged in users who submitted 2351 claims since the relaunch of the online 527 form (end Jan-end Apr 2024):
* The average time to complete a form: 12 days
* Maximum time to complete a form: 309 days
* More than 300 days: 2 claims
* 201-300 days: 39 claims
* 101-200 days: 80 claims
* 0-100 days: 2230 claims (94%)
* Less than 1 day: 1808 claims (76%)
* More than 1 day, less than 1 week: 217 claims
* 1-2 weeks: 65 claims
  
If the ITF feature is used as intended by more Veterans who decide to start their applications ASAP, we may observe an increase in the average time to complete an online form. More Veterans _may_ benefit from payments starting earlier than they would've initially expected. Those who start and submit within a day won't benefit from this feature. It's worth exploring if a behavior change could be prompted for a certain segment of Veterans to start their application sooner.

### Desired Outcomes
* Enable Veterans to receive pension benefits from an earlier effective date when they apply online, within regulation.
* Ease the burden of Veterans submitting an intent to file while applying for pension benefits.
  
### Avoid
* Confusing Veterans about ITF for pension online and hampering their benefits application experience.


# Solution Approaches 

## V0 - Set ITF in the background
### Goal: Establish ITF sooner for Veterans applying for pension benefits
#### Why V1:
Enable Veterans to benefit from ITF when they're applying for pension benefits online.

#### Existing behavior:
ITF is currently not available for online pension applicants. Submission date is used as their effective date.

#### Hypothesis / Proposed Behavior:
* When Veterans start a pension application, by establishing ITF if they don't already have one, Veterans can gain an earlier effective date.
* When Veterans resume an in-progress form, by establishing ITF they get an ITF on the day they return (if they don't already have an ITF). Note: API cannot set ITFs in the past. This will effect 'backfilling ITFs' when forms are resumed and the 're-try ITFs' mechanism. ITF will be set to current day, based on when a succesful API call is made.

#### Assumptions:
* That we can set ITF for the Veteran, without their explicit permission. This is currently being explored with policy teams. If this is not possible, then we decide if we jump to V0.5 or V1.
  
#### Risks/Limitations: 
* As V0 has no UI, by setting ITF in the background with no user awareness, it might confuse certain users and their benefits/ITF experience.
* As a majority of applications are being started and ended within one day, this segment won't gain anything from this feature.

#### External items to prioritized:
* Setup DataDog to track ITF API success and failure, claim lag time.
* Update Pension product guide to inform and educate support teams on ITF functionality.
* Update VBA processing team documentation where needed to ensure ITF information coming from pension web form is handled accurately.

#### Measuring Success:
* Some Veterans may get an earlier effective date than they would before ITF was enabled.
* Every new or resumed pension application has an ITF set while there is no change to user experience.
* The async Sidekiq job implemented following [implementation guidelines](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/architectural-decision-records/sidekiq-guidance.md).
* That VSRs can understand how to translate ITFs received. They may see one or many in VBMS. They are able to figure out which one to use that benefits the Veteran most.





## V0.5 TBD (If V0 isn't possible) 
### Goal: Lean on ITF research done by 526 team to propose an ITF solution for 527 that benefits Veterans
#### Why V0.5:
The 526 team conducted extensive research to come up with several [Findings and Recommendations.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md#findings--recommendations)
It was decided that the 527 pension team would continue this work and the 526 team would follow on (Emily Theis).

#### Existing behavior:
#### Hypothesis / Proposed Behavior:
#### Assumptions: 

#### Risks: 
* When solutioning, consider that 526 and 527 have different form architectures.
* Comp ITF and pension ITF have different behavior hence may have differences in how they are engineered.
  
#### Scope:
The 526 team found that Veterans are blocked by intent to file messaging when submitting their claim and that they do not have a clear understanding of how intent to file could maximize their benefits. Therefore, in order to unblock users, we can communicate the value of intent to file more clearly and consistently at two key moments for 527: 1) in the early steps of the form and 2) when a Veteran resumes an in-progress claim.

  
## V1 TBD/Future considerations
* Define what success would look like for Veterans
* Content changes for when an applicant needs to consider time durations when responding to questions. When they have ITF, they could potentially be reimbursed for longer durations of expenses.
* In the suggested introduction page format 'gather information' is step 2, before 'start your application' at step 3. To benefit from ITF it maybe worth prompting action before step 2?
* Surface ITF information when resuming an application 
* Do we need to send expiry (ITF and/or saved form) notificaitons to users / understand if VBA sends any. Based on stats, these are not a priority as most users are completing the form within 100 days and expiration happens at the one year mark.



## Working Documents
* [[DRAFT] Pension ITF Design/Research roadmap exploration](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715862501788/dfa8a2573ee6546b035668285d5096dc2fed2f20?sender=u8c3a54d4503675214e055918)
* [ITF use cases (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715010150706/acb644c56fe8432819c62e7a9c886679c6555978?wid=0-1715116626489)
*  [ITF technical flow (Mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1714050769683/e4dffd0f80fc8aca04a773dbe53c0d40fd5f2dde?wid=0-1714497805333&sender=u8c3a54d4503675214e055918)
*  [ITF designs (Figma)](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/Pension-Claim-Form-21P-527EZ?node-id=2181-5007&t=wqDUeTnxf70vQEqj-0)
*  [Q&A, Learnings](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/pension/intent-to-file-brief.md#qa-learnings) from calls (below)
*  [Pension ITF Workshops notes](https://docs.google.com/document/d/1bgpEWIFdYOwPci2dhenVVjvuF8IJTy0nqfRbWy6PrRU/edit) - points have been extracted from this doc to this page and Q&A
*  [Pension usability study 2.0 planning](https://docs.google.com/document/d/12OAWzkrPtDQV6JMYslbDWFC7PQJw8GP1Mg4CWz-Y0D8/edit)

## Policy Documents
*  [ITF VBA Manual](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000174873/M21-1-Part-II-Subpart-iii-Chapter-2-Section-A-Intent-to-File-ITF%3FarticleViewContext=article_view_related_article#4)

## Discovery Research References
* [ITF Research Summary by 526EZ team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md)
* [Intent to file Discovery Research Summary](https://docs.google.com/document/d/1s3S_NDMHmlooY2SlLWFDq6vtRW-2Pl5u0kbjpd1dBb8/edit)
* A standalone ITF web form is in the works - [Figma](https://www.figma.com/file/EFJLJ7W4yBbujH1yVD122s/WIP---21-0966---Intent-to-file?type=design&node-id=0%3A59&mode=design&t=NhvhdjCE7qtCMbOH-1), [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689261093555/6c03d0c5d9d3f5ee875295e6ee444c3420f9ad3b?wid=0-1705943457925&sender=u8c3a54d4503675214e055918)
* [Proactive Benefits research findings on ITF](https://docs.google.com/presentation/d/1fpwtB4M2D-RBIe7PiF27qEr6Mn5AtMKqDzICiMbiQm4/edit#slide=id.g26459dba8f9_0_72)


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


  
