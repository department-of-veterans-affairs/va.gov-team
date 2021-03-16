# Allergies Initiative Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Outline and Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Health Record Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/questionnaire/product/initiatives/health_record.md)
* [Draft Wireframes](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913)
* [Cerner Allergies Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/references/Cerner-Allergies.png)
* [My HealtheVet Allergies Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/myhealthevet/Allergies.png) 

## Epic User Story
- Use case: Veterans and VA providers want/need to know about changes to Veteran allergies (and intolerances), including:
  - Are the allergies within the VA’s medical record up-to-date?
  - Does the Veteran have any new allergies or intolerances, such as lactose intolerance?
  - Did the Veteran have any new reaction types to allergies already documented in the VA’s system?

## Product Features/User Stories

### Display allergies listed within the Veteran’s VA medical records
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/v/MkqkEQ/a/JnnkYoG)
- To be determined, what exact data points will be displayed. Review [Veteran priority results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/health-record/research-findings.md). Run a [VA provider research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/clinician-healthRecord-discovery/conversation-guide.md) to determine provider priority. Review [technical feasibility evaluation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/DataAnalysis-AvailabilityIn-Lighthouse-VetsAPI-MHV.xlsx) (which may need to be updated depending upon when this topic is picked back up again), so additional data can be requested to be added to Lighthouse.
- List of possible data points and features listed at the bottom of this feature document.

### Provide a way for a Veteran to add a self-reported allergies
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/v/MkqkEQ/a/JnnkYoG)
- What data needs to be captured when entering a new allergy?

### Display self-report allergies
- Similar to VA medical record allergies, determine what exact data points to display. Are there any difference between VA medical record allergies and self-reported allergies?
- List of possible data points and features listed at the bottom of this feature document.

### Display a description explaining
- What is an allergy, intolerance, and/or adverse reaction?
- Why the Veteran should review and update this information

### Ability for Veteran to mark allergy compliance
- If the list of allergies is correct, then allow the Veteran to confirm that it is correct. Otherwise, allow them to make edits. 

### Ability for Veterans to edit their allergies
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/v88p7Wd)
- What should be editable for a Veteran-reported allergy? Can we make the fields easily understandable to the Veterans? For instance, what does “severity” actually mean? What should be editable (if anything — possibly reactions?) for a provider-entered medication from the medical record?
- Can a Veteran “request removal” of an allergy that is already provider-confirmed and listed in their medical record?

### Provider a way to access patient education information, so the Veteran can learn more about their allergies/intolerances
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/4aaMjA3)
- Verify that this is a need within in a questionnaire. Is it more needed in a health record section?
- Determine a patient education strategy. Current My HealtheVet links to Medline Plus for additional information, but it is just a link to Medline Plus’s main page. Is there an API, so we can connect certain allergies to a patient education page on that allergy?

## Outstanding questions or decisions to be made

### Product and UX Strategy Questions
- Numerous questions are listed in the above “Product Feature/User Stories” section.
- What are provider pain points, current workflows, prioritization of data? Review [clinician conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/clinician-healthRecord-discovery/conversation-guide.md) for study that was never executed.
- Verify the clinical workflow and the need for patients to document “severity” when reporting an allergy.

### Interaction Design Questions
- Sort order alphabetical?
- When entering a self-reported allergy, provide clarity on what the “Diagnosed” field is asking?
- **At March 15, 2021 meeting on list loops, it was suggested for all teams to test out a list loop pattern that shows only one decision point at a time. Then, submit the designs to the DSVA #design channel for the team to comment on. Revisit list loop patterns as the convention might have been decided on/changed.**
  - I created a [sequential prototype example for allergies](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/ZOWdAla/play)
- During user research, it was determined that each Veteran has a unique cadence for how often they would like to update their health records (medications, allergies, and immunizations), so incorporate a way for them to quickly navigate across the sections. Really think about Veterans can quickly skip around. Really evaluate how many questions they have to answer in each section.

### Technical Questions
- Need to verify Allergy reactions is a free text versus a codified list with a free text “other” field. Confirm with SMEs. It might come from FHIR as codified vs. text string.
- How do we eliminate duplicates in our list once a provider adds a self-reported allergy to the Veteran’s official medical record?

## Possible data points and features to display
Acetaminophen / Hydrocodone [vicodin] (Nausea And Vomiting)
Documenting Facility: LOMA LINDA HCS

Ampicillin (Rash, Diarrhea)
Verified: Apr 23, 2015
Documenting Facility: LOMA LINDA HCS

Beans (Gas)
Verified: Jun 06, 2014
Documenting Facility: LOMA LINDA HCS

Codeine (Rash, Nausea And Vomiting)
Verified: Feb 28, 2018
Documenting Facility: LOMA LINDA HCS

Divalproex (Liver Enzymes Abnormal)
Verified: Jun 26, 2018
Documenting Facility: LOMA LINDA HCS

- Allergy Name
- Onset date
- Verified date
- severity/clinical risk (low risk, etc)
- diagnosed (there is a dropdown with options in MyHealtheVet right now)
- reaction (could note when it was clinically observed - if it was clinically observed)
- comments
- reported by (doctor's name or patient)
- documenting facility
- diagnosed (yes/no) - for self-reported only?
- self-reported status marker
- ability to add a new allergy (patient reported data)
- links to educational material on the allergies (currently links to Medline Plus)

---

* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_

---
| Issue #                                             | Design     | User Testing | Accessability  | QA - Test Case  | Launch    | Notes 
| --------------------------------------------------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
| Link to Epic Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
| Feature Name-Issue #                                |                 |              |                |                 |           | 
