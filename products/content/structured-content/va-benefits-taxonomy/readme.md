# VA Benefits Taxonomy Product Brief

## Overview
The VA Benefits Taxonomy is a single-source of truth taxonomy that captures Benefits metadata for use throughout VA.gov. 

VA Benefits taxonomy in the Drupal CMS:  
https://prod.cms.va.gov/admin/structure/taxonomy/manage/va_benefits_taxonomy/overview (Drupal Admin or Content Publisher role required)

## Problem statement
Benefits content is threaded throughout VA.gov and used for multiple purposes. We want a single source of truth for Benefits content that can be harnessed and used throughout the site for "create once, publish everywhere" (COPE) purposes. 

### User Stories / User Cases
As a Veteran, I want to see consistent terminology and verbiage when reading about benefits so that I'm not confused and can clearly understand what my benefits are, what I need to provide to get my benefits, what paths to take to apply for benefits, and where to go to ask questions and get clarification.

### User pain points and opportunities
Terminology and verbiage that veterans see is not consistent. They are confused by seeing different words and phrases used that actually mean the same thing, instead of consistent, one-source-of-truth wording which will be easier to understand and follow when learning about or applying for benefits.

### Business pain points and opportunities


## Background
This taxonomy was created in 2023, as part of an effort to harden the content model for Benefit Detail Pages.
* Product documentation: https://github.com/department-of-veterans-affairs/va.gov-team/products/content/structured-content/benefits-content-model
* Epic: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9628

As of September 2023, the VA Benefits taxonomy is launched to production in the CMS. CAIA has created initial content, but the content of the taxonomy is not exposed to the front-end of VA.gov. 

## Light roadmap
[Epic: Benefit Detail page hardening using VA Benefit Taxonomy: va.gov-cms #13752](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13752)


### Prioritized OKRs for MVP (one objective, 2-3 key results)

### Outstanding questions 

### Solution hypothesis

### Evaluation criteria 

## Project Plan for MVP In scope

### 👉🏼 Benefit Name / VA Benefit API ID
  * **Requirements**
    * For initial load of the Benefit Name/VA Benefit API ID, auto-populate with camelCase. VA Services taxonomy uses lower camelCase, and we could follow suit here. Before releasing, have Public Websites engineers validate to make sure it makes sense to future developers.
      * Note that we don't have the auto-creation yet.
      * No hard business requirements are known here, so this could be handled in whatever way makes sense to CAIA + engineering.
  * **Tickets**
    * Engineering task ticket: auto-populate the VA Benefit API ID with camelCase of benefitName
      * [[VA Benefits Taxonomy] Auto-populate the VA Benefit API ID with camelCase of benefitsName #18162](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18162)
            
### 👉🏼 How to Apply Section
  * **Requirements**
    * This is for programs like Dental Care, where the Veteran is filling out Form 10-10ez.
      * For programs like dental care, where you apply by filling out the health care Form 10-10EZ (which is the full healthcare form, not just for dental), we understand it might not be obvious to the user/Veteran that they need to fill out the 10-10EZ form for that benefit. For MVP, we will solve this using the text in the How to Apply section.
  * **Tickets**
    * Engineering task ticket: Update the help text in the How to Apply section to help the Veteran understand their choices for applying for benefits. e.g. filling out the health care Form 10-10EZ (which is the full healthcare form, not just for dental), we understand it might not be obvious to the user/Veteran that they need to fill out the 10-10EZ form for that benefit.
        - CAIA to provide the verbiage.
        - [[VA Benefits Taxonomy] Update text in the 'How to Apply' sections with more descriptive verbiage provide by CAIA #18163](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18163)

### 👉🏼 Exclusionary and Simultaneous Benefits
  * **Requirements**
    * We will need some Content modeling around this. Might need to pull in Dave Picket?
    * _Exclusionary Benefits Definition:_ Meaning > If you have _this_ benefit, you can’t have _that_ benefit.
      -  Example: Question is asked of the Veteran: "Add Exclusionary benefits?" Example of options "Housebound **or** Aid & Attendance", etc. The note to the Veteran will be something like: "You can have one of these or the other, but not both (if you choose this benefit, you can’t select this linked benefit)."
    * _Simultaneous Benefits Definition:_ Meaning > if you have this benefit, you MUST have this other benefit at the same time, _or_ you’re automatically enrolled in this other benefit at the same time.
      -  Example language: Add Simultaneous benefit? Note to Veteran: What we’re talking about here is a benefit that you should or must consider applying for or obtaining at the same time as this benefit.
  * **Tickets**
    * Ticket: Content modeling: involve Dave Picket. Creating a linked tree, where one things has a reference to another. And we call that exclusionary. If an editor is looking at editing a benefit they would see a way to add/check exclusionary benefits. A separate field for simultaneous. Questions: Can a benefit have both exclusionary and simultaneous linked benefits? Dave will need to collaborate with UX/Daniel for field names.
      * [[VA Benefit Taxonomy] Content modeling for Exclusionary and Simultaneous Benefits #18165](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18165)
    * Ticket: UX: design of the forms in the CMS for the editors. Will need help text.
      * [[VA Benefit Taxonomy] [UX] Provide editors the ability to indicate/add exclusionary or simultaneous benefits #18166](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18166)
    * Ticket: Engineering ticket: build this.
      * [[VA Benefit Taxonomy] [Drupal] Editors creating or editing benefit details can indicate exclusionary or simultaneous benefits #18167](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18167)
       
### 👉🏼 Benefit Description
  * **Requirements**
    * Will consist of three (already existing) fields: Longer summary, Brief summary (currently has 500 character limit), & Teaser summary (one to two sentences - currently 300 character limit).
    * Character count limits will be required on all three fields.
     * Longer summary:
       * Character count limit = 500
       * Always required.
     * Brief summary:
       * Character count limit = 300
       * Optional, UNLESS the Longer summary description character count is more than 300 characters. If so, then the Brief summary changes from optional to required.
     * Teaser summary:
       * Character count limit = 200
       * Optional, UNLESS the Brief summary is greater than 200, then the teaser summary is required.
    * In the editorial interface, we want to be sure there is feedback (error message/warning) for the character counts, and in the descriptions we include what the character counts are.
    * Work with CAIA to provide content for the editorial interface for best practices.
      * Note that CAIA will provide editorial context e.g. word counts for the Longer, Brief, and Teaser summary descriptions and helper text.
      * Note from CAIA: We need to think about how much depth we want to go into for the “Longer summary.” For example, for health care benefit programs, would we include what’s covered and what’s not in the full (Longer summary) description? This is something for us (CAIA) to do. We’ll think through this more and document it, but we want to capture it here as part of our overall findings as we began to use this taxonomy.
  * **Tickets**
    * Ticket: Engineering: Set character limits for the Longer summary/brief summary/teaser summary fields.
     * [[VA Benefit Taxonomy] Benefit Description character limits need to be set #18170](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18170)
    * Ticket: Engineering: 
      - Longer summary is required. If a Longer summary description character count is more than 500 characters, it can't be reused as the Brief Summary, therefore the Brief summary changes from optional to required. If the Longer summary description character count is greater than 300 characters, then the Teaser summary changes to required, unless the Brief summary is less than 300 characters. Note that this is MVP. Brief summary: If this summary is greater than 300 characters, then the teaser summary is required. 
Note: there is already on-screen feedback for character counts. 
       - Note: In the editorial interface, we want to be sure there is feedback (error message/warning) for the character counts, and in the descriptions we include what the character counts are.
         - Separate ticket: Work with CAIA to provide content for the editorial interface for best practices. Note that CAIA will provide editorial context e.g. word counts for the Longer, Brief, and Teaser summary descriptions and helper text.
Note from CAIA: We need to think about how much depth we want to go into for the “Longer summary.” For example, for health care benefit programs, would we include what’s covered and what’s not in the full (Longer summary) description? This is something for us (CAIA) to do. We’ll think through this more and document it, but we want to capture it here as part of our overall findings as we began to use this taxonomy.
  * **Product conversation**: Need to talk to CAIA to understand how they want to handle the descriptions above - how to cascade feild requirements the per the info above.
   
### 👉🏼 Requirements
    * We want to work with CAIA for what we mean by eligibility vs. the overview sections.
    * The problem can be alleviated with better help text as opposed to drastic content changes.
  * **Task**
    * Fran: We want to work with CAIA for what we mean by eligibility vs. the overview sections. The problem can be alleviated with better help text as opposed to drastic content changes.
  *  **Tickets**
    *  Potential ticket: change help text based on CAIA feedback.
     
### 👉🏼 How to Apply
  * **Information**: How to apply might contain multiple steps. Before you apply, while you're applying, after you apply. Wants to normalize the DB to keep the info with what it pertains to.
  * **Requirements**
    * Content modeling needed.
    * Wrestling with part of the How to Apply... pre-flight, in-flight, post-flight.
    * When you're applying for a benefit, you may need to do things before you actually fill out the form.
    * Question: Where does this content live? Does this content live with the form, or with the benefit?
    * Analysis needed in this area. Look through several of the benefits How to Apply sections to see where the info should live. Maybe both?
      * Go through benefits use cases/how to apply. Create a small discovery Spike. Look at 10 - 15 How to Apply content sections to decide where: benefit or form?
    * Wants to normalize the DB to keep the info with what it pertains to.
  * **Decisions Needed:** Dave C and Danielle T.
  * **Tickets**
    * Content Modeling (after decisions are made by Dave C and Danielle T)
    * Spike:  Fran find out who will do the spike; task for Dave/Danielle (and we can provide the data to them)? Analysis needed in this area. Look through several of the benefits How to Apply sections to see where the info should live. Maybe both? Go through benefits use cases/how to apply. Create a small discovery Spike. Look at 10 - 15 How to Apply content sections to decide where: benefit or form?
      * Decisios after Spike:
        * Ticket? Content modeling
        * Ticket? Maybe engineering tasks depending on decision outcome.
        
### 👉🏼 Preparing to Apply section
  * **Requirements**
    * There is only one rich text field. We need to move to magic header because, for example, in Aid and Attendance, they need to differentiate between veteran and survivor, so we need to accommodate hierarchy.
    * Note: We can currently make at least one magic head required with more to be able to be created. This is a stand-alone required section currently.
  * **Tickets**
    * Engineering task ticket: Make the existing rich text field into a magic header ... because, for example, in Aid and Attendance, they need to differentiate between veteran and survivor, so we need to accommodate hierarchy.
 
### 👉🏼 Intent to File
  * **Requirements**
    * We are trying to say "is intent to file an option for this benefit? yes/no. What additional contextual info for intent to file, and how do they do it. Tackle through rich text? Link to form?
      * Need to figure what data needs to ride along.
      * Start small with rich text field and we can always add additional fields later if we recognize a need.
      * We can add helpt text to inform editors as to what they need or could put in the field (links/words/etc.)
  * **Question**: Are we trying to decide where the info lives - Benefit or form?
  * **Tickets**
    * Ticket - Engineering: Start small with rich text field with help text to guide the editors.   
    - Ticket - UX
    - First Fran - Ask CAIA for help text for the editors.
      * Note: We can always add additional fields later if we recognize a need.
     

### 👉🏼 Evidence Needed field
  * * **Requirements**
    * For MVP, we are going to create a limited rich text field for evidence needed.
     * Not required for MVP - Post MVP, the ability to generate a report to collect whatever is in this field so we can analyze it better later for possible transition to a taxonomy in a future iteration.
    * Hypothesis is that the evidence needed for things could be standardized (like DD 214). Would be helpful to have rich text to ensure consistency across all benefits. In the far future, we might already know that we have the Veteran's digital 214, so this is what you need to give to us because we already have everything else.
  *  **Hypothesis** the evidence needed for things could be standardized (like DD 214). Would be helpful to have rich text to ensure consistency across all benefits. In the far future, we might already know that we have the Veteran's digital 214, so this is what you need to give to us because we already have everything else.
  * **Tickets**
    * - Ticket - Engineering: we are going to create a limited rich text field for evidence needed.
    - Ticket - UX
    - Fran: Ask CAIA for help text for the editors.
 
## Explicitly out of scope or MVP
### 👉🏼 Benefit Description
  * Long Description Post-MVP: If a Long description character count is more than the character count of the Brief description, but less than the character count of the Teaser description, the Brief description will then be required.
  * Brief Description Post-MVP: Post-MVP: If a Brief character count is more than the character count of the Teaser description, then the Teaser description will be required.

### 👉🏼 Approval fields: add more backend fields to help us track approvals and audits for this core reusable content. Fields such as “Approving SMEs,” “Date last reviewed by approving SMEs,” and “Associated
 program office(s).  

### 👉🏼 Front-end Work: Per Dave, work through some POC wireframes for this. For discussion and thought as we map this model to the page templates for core benefit pages. In our pages now, we often have a brief one-liner about a benefit and then a “Read more to learn…” How will we account for that with reusable content? Perhaps we just allow for page template to have an intro and then we pull in reusable content as needed. 

## Product roadmap/phases

## Testing Approach

## Document significant decisions




