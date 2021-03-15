# Medications Initiative Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Outline and Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Health Record Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/health-record.md)
* [Medications VA Landscape Map](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/g00Vbvq)
* [Draft Wireframes](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913)
* [Cerner Medications Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/references/Cerner-medications.png)
* [My HealtheVet Medications Image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/myhealthevet/Medications.png)

## Epic User Story 
- Use case: Veterans and VA providers want/need to know about changes to Veteran medications, including:
  - Compliance on prescribed medications (Is the Veteran taking it as prescribed or not? Why?)
  - Is the Veteran taking any over the counter medications or supplements?
  - Was the Veteran prescribed any medications from providers outside the VA system?
  - Are the medications within the VA’s medical record up-to-date?
  - Did the Veteran have any medication reactions not documented in the VA’s system?

## Product Features/User Stories
### Display medications listed within the Veteran’s VA medical records
- [High-level storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/eKlrJJ0)
- To be determined, what exact data points will be displayed. Review [Veteran priority results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/health-record/research-findings.md). Run a [VA provider research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/clinician-healthRecord-discovery/conversation-guide.md) to determine provider priority. Review [technical feasibility evaluation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/health-record/DataAnalysis-AvailabilityIn-Lighthouse-VetsAPI-MHV.xlsx) (which may need to be updated depending upon when this topic is picked back up again), so additional data can be requested to be added to Lighthouse.
- List of possible data points and features listed at the bottom of this feature document.

### Provide a way for a Veteran to add a self-reported medication
- [High-level storyboard] https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/GmoOGGL
- What data needs to be captured when entering a new medication?

### Display self-reported medications
- Similar to VA medical record medications, determine what exact data points to display. Are there any difference between VA medical record medications and self-reported medications? 
- List of possible data points and features listed at the bottom of this feature document.

### Display a description explaining:
- Why the Veteran should review and update this information

### Ability for Veteran to mark medication compliance
- What questions or methods would best get Veterans to answer compliance questions? 
  - Cerner asks patients to select between “Taking a Prescribed,” “Not taking as prescribed,” “Not taking,” with a comment box.
  - Could a “request removal” button work?
- What is the best location for this in the workflow?

### Ability for Veterans to edit their medications
- What should be editable for a Veteran-reported medication? Can we make the fields easily understandable to the Veteran? What information goes into a “Quantity” or “Directions” box can be confusing? What should be editable (if anything —possibly reactions?) for a provider-entered medication from the medical record?

### Provide a way to access patient education information, so the Veteran can learn more about their medications
- Verify that this is a need in a questionnaire. Is it more needed for a health record section?
- Determine a patient education strategy. Current MyHealtheVet links to Medline Plus for additional information, but it is just a link to Medline Plus’s main page. Is there an API, so we can connect certain medications to a patient education page on that medication?

## Outstanding questions or decisions to be made
### Product and UX Strategy Questions
- Numerous questions are listed in the above “Product Feature/User Stories” section.
- What are provider pain points, current workflows, prioritization of data? Review [clinician conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/clinician-healthRecord-discovery/conversation-guide.md) for study that was never executed.
- Are we integrating with only Vista? What about Surescripts?

### Interaction Design Questions
- Sort order alphabetical?
- Refill information ranked highly within the Veteran discovery research, but should be actually display Pharmacy information? Do we only display it for VA medications and not self-reported medications?

### Technical Questions
- Need to verify Vista Order profile is showing meds by their RxPrimary (i.e. Atorvastatin 40mg Tab vs. the formulary with each field separate.
- Are Vista refills remaining up-to-date? Since this is coming from the order profile and refills is a Pharmacy update field, can we show this with FHIR interface or another to get refills?
- It looks like Lighthouse has statuses for medications. Will this help us filter what we display to only “current” medications?
- Can we get “Reason for taking: High cholesterol?” Is this “reasonCode” in Lighthouse? If so, is this field actually populated most of the time? 
- When entering a new medication, is it free text or are we pulling from a vocabulary as they type populating the options? Is it a dropdown?

## Possible data points and features to display
- Medication Name
 - NOTE: it's in the name as "note": "Hydrochlorothiazide 6.25 MG"
 - examples - fluticasone nasal (Flonase 50 mcg/inh nasal spray)
 - consider taper does as they will only list the mediation name and the dose/instructions will be in the description field
- Dose
- Route (ie. oral, injection, liquid)
- Frequency
- Prescribing Physician
- Prescribing Physician location/source system
- Date
- Instructions/Directions (this is typically from EHR for the Pharmacist) we need the patient dose instructions if we are showing from retail pharmacy. 
 - 2 spray(s). nostril(s) qD, 16g, O Refills
- Status
 - Active, expired, discontinued - 
- Tracking medication adherence - actions the Veterans can take
  - Currently statuses/solution for this shown in the above image - Taking as prescribed - Yes- As directed, No - Not taking as directed, No- stopped or didn't take (need ability to describe why not taking)
- Patient education - Medline Plus
  - [Storyboard](https://www.sketch.com/s/f84952b4-9e8b-457d-b25e-5015c92e3913/a/Omebkkw)
- Warnings/Side effects/Interactions
- If no write back for Meds how are we posting to Lighhouse in PGD
  - A discussion with Lighthouse brought up the idea of utilizing questionnaireResponse as capturing the information.
  - Are we allowing self-entered data?
  - Without this, how can we capture non-prescription medications (herbals, OTCs, vitamins) that aren't in the system?
- Medication type
  - As seen in current MyHealtheVet, an example of data in this field was "VA prescription")
- Condition/Diagnosis prescribed for
- patient side effects (patient generated)

## Possibly out of scope data points and features?
_Not typical features we should consider/challenges today_
- renew /request workflows
- Costs based on insurance - ie. know what locations have good pricing
- Formulary information - tiers of medications at the VA - related to cost
- Can we push/highlight meds that we think have changed or would have stopped or if there new condition to ask if any meds are being taken for it?  
- List of Vitamins and Suppliments -as these may not be documented in EHR
- Photos or illustrations of the medication (show inhaler versus a pill, what color and shape)
- timeline for how long been on the med 
  - another variation of this is display of start/stop dates
- VA pharmacy or other pharmacy info (name, location, phone number, contact with questions
  - This gets into preferred pharmacy information.
  - Contacting for more information could connect to the VA's app, secure messaging, both?
- Notification reminders
  - Do refill reminders exist today?
  - When next pill is supposed to be taken reminders
  - Other notifications
- Cost summary - how much have I spent on medications
- Identify pills - I don't know what this pill is. Identify by markings, colors, or shapes
- timeline of when patient is supposed to take medication (morning versus evening, every other week, once a month)

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
