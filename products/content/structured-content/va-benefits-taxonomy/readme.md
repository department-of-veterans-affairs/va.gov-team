# VA Benefits Taxonomy Product Brief

## Overview
The VA Benefits Taxonomy is a single-source of truth taxonomy that captures Benefits metadata, for use throughout VA.gov. 

VA Benefits taxonomy in the Drupal CMS:  
https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview (Drupal Admin or Content Publisher role required)


## Problem statement
Benefits content is threaded throughout VA.gov, used for multiple purposes. We want a single source of truth for Benefits content, that can be harnessed and used throughout the site for "create once, publish everywhere" (COPE) purposes. 

### User Stories / User Cases
As a Veteran, I want to see consistent terminology and verbiage when reading about benefits so that I'm not confused and clearly understand what my benefits are, what I need to provide, and what paths to take to apply for benefits.

### User pain points and opportunities
Terminology and verbiage that veterans see is not consistent, and they may see different words and phrases used instead of consistent, one-source-of-truth wording which will be easier to understand and follow when learning about or applying for benefits.

### Business pain points and opportunities


## Background
This taxonomy was created in 2023, as part of an effort to harden the content model for Benefit Detail Pages.
* Product documentation: https://github.com/department-of-veterans-affairs/va.gov-team/products/content/structured-content/benefits-content-model
* epic: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628

As of September 2023, the VA Benefits taxonomy is launched to production in the CMS, CAIA has created initial content, but the content of the taxonomy is not exposed to the front-end of VA.gov. 

## Light roadmap
[Epic: Benefit Detail page hardening using VA Benefit Taxonomy: va.gov-cms #13752
](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13752)


### Prioritized OKRs for MVP (one objective, 2-3 key results)

### Outstanding questions 

### Solution hypothesis

### Evaluation criteria 

## Project plan

### MVP solution

#### In scope

* **Benefit Name / VA Benefit API ID**
  * For initial load we want to auto pop with camelCase. Then before releasing, have PW validate to make sure it makes sense to future developer.
    * No hard business requirements are known here, so this could be handled in whatever way makes sense to CAIA + engineering.
    * VA Services taxonomy uses lower camelCase, and we could follow suit here.
* **How to Apply Section**
  *  This is for programs like dental care, filling out the 1010ez
    *  Per Dave, fits into the How to Apply Section > For programs like dental care where you apply by filling out the 10-10EZ health care form, but that might not be obvious, how do we or do we need to account for that in content? Or what about a benefit like vision care where you don’t apply directly? Should there be more to this section than linking to the other benefits? Or do we need to think through that more in page-level emplates?
*  **Exclusionary and Simultaneous Benefits** (Needs Content modeling)
  *  _Exclusionary Benefits:_ Meaning > If you have this you can’t have that
    *  Example: Question is asked: "Add Exclusionary benefits?" Options could be "Housebound or Aid & Attendance", etc. Note to Veteran will be something like: "You can have one of these or the other, but not both (if you choose this benefit, you can’t select this linked benefit)."
  *  _Simultaneous Benefits:_ Meaning > if you have this, you have to have this at the same time, or you’re automatically enrolled at the same time.
    *  Example: Add Simultaneous benefit? Note to Veteran: What we’re talking about here is a benefit that you should or must consider applying for or obtaining at the same time as this benefit.
* **Benefit Description**
  * Will consist of three possible fields: long, brief, & teaser
  * Character count limits will be required on all three fields
  * If a Long description character count is less than the character counts for Brief description, then the Brief and Teaser fields are Optional (see section below "Explicitly out of scope" for Post-MVP requirements).
  * Note that CAIA will provide editorial context – e.g. word counts for a long, brief, and teaser descriptions; helper text for these fields.
  * Note from CAIA: We need to think about how much depth we want to go into for the “longer summary.” For example, for health care benefit programs, would we include what’s covered and what’s not in the full description? This is something for us to do. We’ll think through this more and document it, but we want to capture it here as part of our overall findings as we began to use this taxonomy.
  * CAIA to provide content for the editorial interface for best practices.
* **Benefit Eligibility**
  * Need to step through use cases to ensure we’re covering the right bases. Walk through this with CAIA. How can we better describe what is eligibility vs. Overview in the overview section?
* **How to Apply**
  * Per Dave, this should be added to the form detail content model. We can do this as MVP.
  * In some pages, there’s a fair amount of content that didn’t fit in the pages. There are no fields for how to apply information (like steps you take to apply). There’s just  a link to the form. We had done this intentionally to tie how to apply info to the form rather than the benefit. But when you’re the author inputting information about how to apply, it feels like a disconnect, especially since we do have all of the surrounding  info (eligibility, after you apply). We’ll need to think through the content model for the forms and how this maps to the front-end (needs to be front-end agnostic), and then think through how to best document this to guide authors.
* **Aid & Attendance** (preparing to apply section)
  * Per Dave: Switch to magic header with one required and others can be added. This content lives with the benefit, not the form, because the forms are not unique to the benefit, a benefit may have multiple forms, or there could be unique things.
  * For the Aid & Attendance preparing to apply section: We differentiate between evidence needed for a Veteran vs. a survivor. There’s only 1 rich text field for “Prepare to apply”
 so we can’t do any hierarchy such as 2 subsections for the different audiences. We can handle this with bold content, but we want to look at this more together and discuss whether we might want to have the ability to have subsections here. We added in intent to file information in the prepare to apply section. 
*  **Veterans Pension and Survivors Pension**
  *  Per Dave: add another fieldset :Does this benefit have an intent to file? "yes/no" - default to "no". If Yes then show additional fields: Limited Rich Text. Link to form?
*  **Evidence Needed field**
  *  CAIA would like to discuss a potential opportunity for increased standardization. Should we consider an “evidence needed” field that offers some kind of checkbox for the basics (like DD214) + an “other” customizable field for unique evidence for that benefit?
  *  Per Dave & CAIA, for MVP start with a free-form Evidence Needed form (character count?). We can think about taxonomy post-MVP.
  *  CAIA to provide editorial guidance to keep this semi-standardized for future iteration thoughts. ****uild an easily generated report for CAIA to be able to continuously audit this. 

#### Explicitly out of scope
* **Benefit Description**
  * Long Description Post-MVP: If a Long description character count is more than the character count of the Brief description, but less than the character count of the Teaser description, the Brief description will then be required.
  * Brief Description Post-MVP: Post-MVP: If a Brief character count is more than the character count of the Teaser description, then the Teaser description will be required.
 
* **Post MVP – Back-end work:**
  * **Approval fields**: add more backend fields to help us track approvals and audits for this core reusable content. Fields such as “Approving SMEs,” “Date last reviewed by approving SMEs,” and “Associated
 program office(s).  

*  **Post MVP – Front-end Work: **Per Dave, work through some POC wireframes for this. For discussion and thought as we map this model to the page templates for core benefit pages. In our pages now, we often have a brief one-liner about a benefit and then a “Read more to learn…” How will we account for that with reusable content? Perhaps we just allow for page template to have an intro and then we pull in reusable content as needed. 

### Product roadmap/phases

### Testing Approach

### Document significant decisions




