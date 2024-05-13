# Intent to File (ITF) for 527EZ - Product Outline 
## Overview
**Proposed:** Enable Veterans to receive a pension benefits effective date based on when they started a pension application online. 

**Existing behavior:** application submission date is used as the effective date, as there isn't an Intent to File feature for the pension web form. If users submitted an ITF through another non-web channel, that would still be valid.

Veterans can notify the VA by filing an ITF (paper form, phone etc) and set a potential start date (or effective date) for their pension benefits. This can enable the Veteran to receive retroactive payments (payments from the time between when they submitted an intent to file and when the VA approves the claim).

The Veteran has one year from the time they submit an intent to file  to complete and submit their claim to receive the earliest possible effective date (provided their application is successful).


### How might we ease the burden on Veterans to understand and set an Intent to File date that requires fewer steps to obtain?

## Desired Outcomes
* Enable Veterans to receive a pension benefits effective date by calculating the ITF from the date a pension application was started online.
* Ease the burden of Veterans applying for pension benefits to set an intent to file.
* Reduce Veteran confusion around the benefit and purpose of intent to file.
* Provide a consistent experience that enables Veterans to proceed in the Pension application when the ITF API is unavailable.
* Deliver incremental value to Veterans in a timely fashion.

## Avoid
* Confusing Veterans about ITF for pension online and hamper their benefits experience
* ITF functionality (when the API is available and unavailable) that prevents a Veteran from starting or completing the pension app

## Measuring Success
* The total number of Veterans applying for Pension benefits online that fill out a separate 0966 Intent to File form through another medium is reduced.
* Drop offs at ITF screens are at a minimum (for when the API is available and unavailable) - the ITF experience should not hamper the Veteran's pension application journey.

## Working documents
* [ITF use cases (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715010150706/acb644c56fe8432819c62e7a9c886679c6555978?wid=0-1715116626489)
*  [ITF technical flow (Mural)](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1714050769683/e4dffd0f80fc8aca04a773dbe53c0d40fd5f2dde?wid=0-1714497805333&sender=u8c3a54d4503675214e055918)
*  [ITF designs (Figma)](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/Pension-Claim-Form-21P-527EZ?node-id=2181-5007&t=wqDUeTnxf70vQEqj-0)
*  [ITF VBA Manual](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000174873/M21-1-Part-II-Subpart-iii-Chapter-2-Section-A-Intent-to-File-ITF%3FarticleViewContext=article_view_related_article#4)

## Discovery Research References
* ITF functionality is currently implemented in the disability benefit (526EZ). Incorporate learnings from pain points in the current 526 online experience while building the pension solution, in particular recurring downtime for ITF API requests that blocked application progress - [ITF Research Summary by 526EZ team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md)
* A standalone ITF web form is in the works - [Figma](https://www.figma.com/file/EFJLJ7W4yBbujH1yVD122s/WIP---21-0966---Intent-to-file?type=design&node-id=0%3A59&mode=design&t=NhvhdjCE7qtCMbOH-1), [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689261093555/6c03d0c5d9d3f5ee875295e6ee444c3420f9ad3b?wid=0-1705943457925&sender=u8c3a54d4503675214e055918)

# Solution Approaches
## V1 - Introduce ITF functionality to pension form
### Integrate intent to file functionality with the 527EZ application on VA.gov that is only available to authenticated users.
  
**Status (as of 5/13/24)**
* OCTO: in review
* VBA: in review
* Design: started
* Collab Cycle: TBD
* CAIA: started
* Development: not started (scaffolding started)

**`TO BE ADDRESSED / BLOCKERS:`**
* Agreement on scope of v1
* Review and sign offs

### Assumptions
* The Veteran must authenticate on VA.gov to set an Intent to File date.
* The ITF API is functional and available most of the time.
* The ITF API cannot set ITF start dates in the past.
* TBC by engineering - The pension app will not store ITF information and treat the ITF API as the source of truth for ITF.

### Scope
**1. When a Veteran starts or resumes a 527EZ application online and the API is available:**
* Check the ITF endpoint for an existing active pension ITF.
* When an ITF exists, the system will use the ITF date returned by the ITF API and display messaging to the user based on the date and status returned.
* When an ITF does not exist or an ITF has expired, the system will set a new ITF date equating to 'today' via ITF API and display messaging to the user based on the date and status returned.

**2. When a Veteran starts or resumes a 527EZ application online and the API is unavailable:**
* The system will display appropriate messaging to the user that their application start date has been saved and they can proceed to fill and submit their application.
* The system will store the user's form start date and kick off a retry mechanism to establish if an ITF already exists (then use it) or if an ITF doesn't exist (then set a new one using the form start date). If this mechanism fails too, it will be logged and remediated.

**Once above is implemented, noting interaction between new ITF behavior and existing saved in-progress form behavior:**
* A saved in-progress form can expire while an ITF is still active. When the user logs in next, they will have to start a new form.
* An ITF can expire while a saved in-progress is still active. When the user logs in next, a new ITF will be created on that day.

**External items to prioritize:**
* Update DOMO dashboard with Analytics team to include any new ITF related pages.
* Update Pension product guide to inform and educate support teams on ITF functionality and behavior.



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



## V3 - Extending the validity period of an in-progress form and/or ITF (TBC)
### Manage expiration dates in a way that:
* Helps Veterans to receive backdated pensions benefits based on when they started an application, within 'reasonable' time limits.
* Doesn't confuse Veterans using the form.
* Doesn't create a system/service that is costly but doesn't benefit most.

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



## Post-Launch Considerations
Areas to explore:<br>
* Incorporating improvements in messaging and technical approach made in the 527EZ implementation of intent to file to the 526EZ process.
* Usability research to explore improvements.



  
