# Pre-need burial form design and content work plan

## Design (Mel)

### User flow
https://app.moqups.com/greg@adhocteam.us/KRUytqSJgf/view/page/a87b2c0ec

- [x] Diagram initial user flow
  - Ask for relationship to servicemember up front to tailor the questions accordingly
- [x] Incorporate filing for multiple applicants
  - Additional applicant may not have same sponsor Veteran (use case: spouses applying together, both of whom are Veterans)
- [x] Determine whether "other" relationship option can be removed. A: uncommon, but should be available for special cases like a minor child of a Veteran
- [x] Determine whether preparer information can be removed - **not considering for MVP**

### Prototype & features
https://marvelapp.com/2084724

- [x] Create initial prototype following user flow
- [x] Incorporate filing for multiple applicants
  - [x] Remember Alex T. working on a similar multi-something flow like this for pension, check in on consistency opportunities
  - [x] How is this represented on the review page?
- [x] Add chapter for document upload
  - [x] Ability to upload more than one document at a time
  - [x] Add 'Supporting documents' section to review page
- [x] Add link(s) to cemeteries list on application intro page and under desired cemetery question
  - Link to [Facility locator](https://www.vets.gov/facilities/), pre-filtered by cemeteries
  - This application only supports Nat'l cemeteries, not state (which is the same as FL)
  - Post-MVP: autocomplete of VA Nat'l Cemeteries?
  - Validation: error on any name that is not in the NCA list
- [x] Explain why phone/email/address are being asked, what VA does with that info
  - VA will contact by mail primarily, but may use phone if they can't get in touch, e.g. mail was returned to sender
- [x] Address block - add ability to select US/international/overseas
- [x] Add expanded views of review steps - general data field style & supporting documents
- [x] Signature checkbox
  - [x] Add required label
  - [x] NEEDS to be shorter, possibly short language like EDU with link to view full agreement
- [ ] Confirmation page
  - [x] Confirm we're showing all necessary and possible information on this page
  - [x] Reiterate mail & fax instructions here
  - [x] Give people the option to print all information in their application — either a print option on the review page or a generated PDF
- [x] Incorporate content recommendations into prototype
- [ ] Determine what help info should be included throughout the form, in the same vein as [other applications](https://staging.vets.gov/education/apply-for-education-benefits/application/1990e/review-and-submit)

### Static content

- [x] Review new/adjusted static content pages (below) for any design adjustments that may be needed

### Documentation

- [x] Assemble outstanding discovery questions for 6/21 meeting
- [x] Revise [form outline](https://docs.google.com/a/adhocteam.us/spreadsheets/d/1VmiX1guDAzb14MxBgaCIgzdzx9b7CNWUmOVoBrYVTb0/edit?usp=sharing) for Danielle to line up with user flow
  - [x] Include which fields in the original form the questions map to
  - [x] Include conditional variations, e.g. addressee of the question is Veteran vs. dependent
  - [x] Include error messages
- [x] Create a [form logic diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/design/form-logic.png) for front-end
  - Conditional logic of fields and their labels, e.g.
    - if applicant = Veteran, prefill 'is Veteran deceased' = no
    - if applicant = Veteran, labels for Veteran info = "Applicant info", else = "Sponsor info"
    - if Veteran deceased = no, ask for Veteran address
- [ ] Document which questions we're adding, adjusting, or removing. If removing any required fields, need to determine how to handle compliance with business requirements when we submit the form.
- [ ] Archive form outline spreadsheet and user flow diagram in github once finalized

## Content (Danielle)

- [ ] Application intro page
  - Needs full content (prototype currently shows content for time-of-need burial form)
  - Get accurate average processing time
- [ ] Audit all form questions and content
  - [x] Review [form outline](https://docs.google.com/a/adhocteam.us/spreadsheets/d/1VmiX1guDAzb14MxBgaCIgzdzx9b7CNWUmOVoBrYVTb0/edit?usp=sharing) (once revised above) and give recommendations
    - Refer to parallel data fields in existing Edu and HCA forms for labeling standards
  - [ ] Adjust language for relationship question to third person, e.g. "What is the relationship of the person claiming burial benefits to the Veteran"?
  - [ ] Review "special instructions" on back side of paper form. Which of these are helpful to migrate?
- [ ] Uploading supporting documents
  - Give guidance on what types of documents are helpful vs. unnecessary. Applicants often stuff the envelope with a bunch of unnecessary documents "just in case"
  - Guidance on documents to provide specific to Veterans vs. Spouses vs. Adult children (possibly other cases)
  - Mail/fax instructions (emphasis on submitting with confirmation number) — should be on upload screen **and** reminder on confirmation screen
- [x] Signature checkbox
  - Investigate shortening this language and/or linking to separate page or overlay with full text, similar to [Education forms](https://www.vets.gov/education/apply-for-education-benefits/application/1990e/review-and-submit)
  - Need to make sure signature language covers multiple applicants if applicable
- [ ] Confirmation screen
  - "Please print this page" language doesn't make sense on a phone/tablet
  - Point to "After you apply" for more permanent information on next steps
- [ ] Static content
  - [x] [Eligibility](https://www.vets.gov/burials-and-memorials/eligibility/)
    - Determine whether there is more information needed here (\*\*DT update note: Per SME on 6.21.17, we don't want to get too granular with eligibility because we don't want to discourage applicants and/or encourage ex-spouses to hide divorce, which is a disqualifying factor. Therefore, I would recommend leaving Eligibility as is. **Update 6.30.17:** Per conversation with contact center, it appears that more information about what's covered by burial benefits is needed. I thought the most appropriate place for this info was on Eligibility and have updated that page for review.) 
  - [X ] Application process (new page)
    - How will this affect the [Burial planning](https://www.vets.gov/burials-and-memorials/burial-planning/) page? (\*\*DT update note: See below)
  - [x] Revise Burial Planning and Eligibility pages (existing pages)
    - Both pages speak to applying for pre-need so both will need copy updates that remove the application process information from those pages and direct users to the new Application Process page. 
    - Revisions written and provided to Beth Potts for editing.
  - [ X] After you apply (new page)
    - Guidance on how to update your information
    - After I receive my decision, what's the process once I die?
    - Include appeal info?
